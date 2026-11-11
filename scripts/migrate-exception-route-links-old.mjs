import fs from "node:fs";
import path from "node:path";

const pages = [
  "kundrathur", "sriperumbudur", "oragadam", "madurai", "salem",
  "kolathur", "tiruchirappalli", "ambur", "tiruppur", "tiruvallur",
  "gummidipoondi", "poonamallee", "avadi", "minjur", "vellore",
  "vijayawada", "tirupati",
];

const backupDir =
  "F:/HALEEMA/LOADZY_LOCAL_BACKUPS/all-four-states-route-links-before-migration-20261108";

const apply = process.argv.includes("--apply");

function slug(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/-transport$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") + "-transport";
}

function replaceLiteralRouteUrls(source) {
  return source.replace(
    /\/routes\/([a-z0-9-]+)\/([a-z0-9-]+)/gi,
    (_, from, to) => `/routes/${slug(from)}/${slug(to)}`
  );
}

function transform(name, source) {
  let result = replaceLiteralRouteUrls(source);

  if (name === "sriperumbudur") {
    result = result
      .replace(
        /`\/routes\/sriperumbudur\/\$\{destination\s*\.toLowerCase\(\)\s*\.replace\(\/\\s\+\/g,\s*"-"\)\s*\}`/g,
        '`/routes/${slug("Sriperumbudur")}/${slug(destination)}`'
      )
      .replace(
        /`\/routes\/\$\{destination\s*\.toLowerCase\(\)\s*\.replace\(\/\\s\+\/g,\s*"-"\)\s*\}\/sriperumbudur`/g,
        '`/routes/${slug(destination)}/${slug("Sriperumbudur")}`'
      );
  }

  if (name === "poonamallee") {
    result = result
      .replace(
        /`\/routes\/\$\{origin\.toLowerCase\(\)\}\/\$\{destination\.toLowerCase\(\)\}`/g,
        '`/routes/${slug(origin)}/${slug(destination)}`'
      )
      .replace(
        /`\/routes\/\$\{destination\.toLowerCase\(\)\}\/\$\{origin\.toLowerCase\(\)\}`/g,
        '`/routes/${slug(destination)}/${slug(origin)}`'
      );
  }

  if (name === "oragadam" || name === "gummidipoondi") {
    const origin = name === "oragadam" ? "Oragadam" : "Gummidipoondi";
    result = result.replace(
      /(\{destinations\.map\(\(city\) => \(\s*<Link\s+key=\{city\}\s+href=)"\/load-search"/,
      `$1={\`/routes/${slug(origin)}/\${slug(city)}\`}`
    );
  }

  if (name === "kolathur") {
    result = result.replace(
      /(\{destinations\.map\(\(city\) => \(\s*<Link\s+key=\{`from-\$\{city\}`\}\s+href=)"\/load-search"/,
      `$1={\`/routes/${slug("Kolathur")}/\${slug(city)}\`}`
    );
    result = result.replace(
      /(\{destinations\.map\(\(city\) => \(\s*<Link\s+key=\{`to-\$\{city\}`\}\s+href=)"\/load-search"/,
      `$1={\`/routes/\${slug(city)}/${slug("Kolathur")}\`}`
    );
  }

  if (name === "minjur") {
    result = result.replace(
      /href=\{`\/\$\{route\.slug\}`\}/g,
      'href={`/routes/${slug(route.from)}/${slug(route.to)}`}'
    );

  }

  return result;
}

let errors = 0;
let changed = 0;

for (const name of pages) {
  const folder = `${name}-transport`;
  const pagePath = path.join("app", folder, "page.tsx");
  const backupPath = path.join(
    backupDir,
    `${folder}-page.tsx`
  );

  if (!fs.existsSync(pagePath)) {
    console.log(`MISSING PAGE: ${name}`);
    errors++;
    continue;
  }

  if (!fs.existsSync(backupPath)) {
    console.log(`MISSING BACKUP: ${name}`);
    errors++;
    continue;
  }

  const original = fs.readFileSync(pagePath, "utf8");
  const updated = transform(name, original);
  const count = updated === original ? 0 : 1;

  if (count) changed++;

  console.log(
    `${name}: ${count ? "CHANGES FOUND" : "NO CHANGES"}`
  );

  if (apply && count) {
    fs.writeFileSync(pagePath, updated, "utf8");
  }
}

console.log("\nPages checked:", pages.length);
console.log("Pages with proposed changes:", changed);
console.log("Errors:", errors);
console.log("Mode:", apply ? "APPLY" : "DRY RUN");

if (errors) {
  console.log("STOP: Resolve missing pages/backups before applying.");
  process.exitCode = 1;
} else if (!apply) {
  console.log("No files changed. Dry run only.");
}

