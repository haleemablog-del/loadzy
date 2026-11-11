import fs from "node:fs";
import path from "node:path";

const pages = [
  "sriperumbudur", "oragadam", "madurai", "salem", "kolathur",
  "tiruchirappalli", "ambur", "tiruppur", "tiruvallur",
  "gummidipoondi", "poonamallee", "avadi", "minjur", "vellore",
  "vijayawada", "tirupati",
];

const backupDir =
  "F:/HALEEMA/LOADZY_LOCAL_BACKUPS/all-four-states-route-links-before-migration-20261108";

const apply = process.argv.includes("--apply");

const helper = `
const toRouteSlug = (value: string) =>
  \`\${value.trim().toLowerCase().replace(/-transport$/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-transport\`;
`;

function addHelper(source) {
  if (source.includes("const toRouteSlug =")) return source;
  const lastImport = [...source.matchAll(/^import .*;?\s*$/gm)].pop();
  if (!lastImport) throw new Error("Could not locate imports for helper");
  const position = lastImport.index + lastImport[0].length;
  return source.slice(0, position) + "\n" + helper + source.slice(position);
}

function transform(name, original) {
  let source = original;
  const changes = [];

  function replace(oldValue, newValue, description) {
    if (!source.includes(oldValue)) {
      throw new Error(`${description}: expected code not found`);
    }
    source = source.replace(oldValue, newValue);
    changes.push(description);
  }

  // Static route arrays only: nearby-area and service links are outside this block.
  const start = source.indexOf("const routes = [");
  if (start >= 0) {
    const end = source.indexOf("\n];", start);
    if (end < 0) throw new Error("Could not find end of routes array");

    const before = source.slice(0, start);
    let block = source.slice(start, end + 3);
    const after = source.slice(end + 3);

    block = block.replace(
      /\/routes\/([a-z0-9-]+)\/([a-z0-9-]+)/gi,
      (oldUrl, from, to) => {
        const newUrl =
          `/routes/${from.replace(/-transport$/i, "")}-transport/${to.replace(/-transport$/i, "")}-transport`;
        if (oldUrl !== newUrl) changes.push(`${oldUrl} → ${newUrl}`);
        return newUrl;
      }
    );
    source = before + block + after;
  }

  if (name === "sriperumbudur") {
    source = addHelper(source);
    const old1 = /`\/routes\/sriperumbudur\/\$\{destination\s*\.toLowerCase\(\)\s*\.replace\(\/\\s\+\/g,\s*"-"\)\s*\}`/g;
    const old2 = /`\/routes\/\$\{destination\s*\.toLowerCase\(\)\s*\.replace\(\/\\s\+\/g,\s*"-"\)\s*\}\/sriperumbudur`/g;
    source = source.replace(old1, () => {
      changes.push("Sriperumbudur forward dynamic route");
      return "`/routes/${toRouteSlug('Sriperumbudur')}/${toRouteSlug(destination)}`";
    });
    source = source.replace(old2, () => {
      changes.push("Sriperumbudur return dynamic route");
      return "`/routes/${toRouteSlug(destination)}/${toRouteSlug('Sriperumbudur')}`";
    });
  }

  if (name === "poonamallee") {
    source = addHelper(source);
    source = source.replace(
      /`\/routes\/\$\{origin\.toLowerCase\(\)\}\/\$\{destination\.toLowerCase\(\)\}`/g,
      () => {
        changes.push("Poonamallee forward dynamic route");
        return "`/routes/${toRouteSlug(origin)}/${toRouteSlug(destination)}`";
      }
    );
    source = source.replace(
      /`\/routes\/\$\{destination\.toLowerCase\(\)\}\/\$\{origin\.toLowerCase\(\)\}`/g,
      () => {
        changes.push("Poonamallee return dynamic route");
        return "`/routes/${toRouteSlug(destination)}/${toRouteSlug(origin)}`";
      }
    );
  }

  if (name === "oragadam" || name === "gummidipoondi") {
    source = addHelper(source);
    const origin = name === "oragadam" ? "Oragadam" : "Gummidipoondi";
    const pattern =
      /(\{destinations\.map\(\(city\) => \(\s*<Link\s+key=\{city\}\s+href=)"\/load-search"/;
    if (!pattern.test(source)) throw new Error("Destination route card not found");
    source = source.replace(
      pattern,
      `$1={\`/routes/\${toRouteSlug("${origin}")}/\${toRouteSlug(city)}\`}`
    );
    changes.push(`${origin} destination cards`);
  }

  if (name === "kolathur") {
    source = addHelper(source);
    const from =
      /(\{destinations\.map\(\(city\) => \(\s*<Link\s+key=\{`from-\$\{city\}`\}\s+href=)"\/load-search"/;
    const to =
      /(\{destinations\.map\(\(city\) => \(\s*<Link\s+key=\{`to-\$\{city\}`\}\s+href=)"\/load-search"/;

    if (!from.test(source) || !to.test(source)) {
      throw new Error("Both Kolathur route card sections must be found");
    }

    source = source.replace(from,
      '$1={`/routes/${toRouteSlug("Kolathur")}/${toRouteSlug(city)}`}');
    source = source.replace(to,
      '$1={`/routes/${toRouteSlug(city)}/${toRouteSlug("Kolathur")}`}');
    changes.push("Kolathur forward and return destination cards");
  }

  if (name === "minjur") {
    source = addHelper(source);
    const old = 'href={`/${route.slug}`}';
    replace(
      old,
      'href={`/routes/${toRouteSlug(route.from)}/${toRouteSlug(route.to)}`}',
      "Minjur route cards"
    );
  }

  return { source, changes };
}

let errors = 0;
let changed = 0;
const report = [];

for (const name of pages) {
  const folder = `${name}-transport`;
  const pagePath = path.join("app", folder, "page.tsx");
  const backupPath = path.join(backupDir, `${folder}-page.tsx`);

  try {
    if (!fs.existsSync(pagePath)) throw new Error("Page missing");
    if (!fs.existsSync(backupPath)) throw new Error("Backup missing");

    const original = fs.readFileSync(pagePath, "utf8");
    const result = transform(name, original);

    if (result.source === original) {
      throw new Error("No route changes detected; needs review");
    }

    changed++;
    report.push({
      page: name,
      changes: result.changes,
    });

    console.log(`${name}: ${result.changes.length} changes`);
    if (apply) fs.writeFileSync(pagePath, result.source, "utf8");
  } catch (error) {
    errors++;
    console.log(`${name}: ERROR — ${error.message}`);
  }
}

fs.writeFileSync(
  "route-exception-migration-preview.json",
  JSON.stringify(report, null, 2),
  "utf8"
);

console.log("\nPages checked:", pages.length);
console.log("Pages with proposed changes:", changed);
console.log("Errors:", errors);
console.log("Mode:", apply ? "APPLY" : "DRY RUN");
console.log("Preview: route-exception-migration-preview.json");

if (errors) process.exitCode = 1;