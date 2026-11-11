import fs from "node:fs";
import path from "node:path";

const targets = [
  "neeladri-nagar",
  "konappana-agrahara",
  "doddathoguru",
  "veerasandra",
  "bettadasanapura",
  "kammasandra",
  "ananth-nagar",
  "huskur-road",
  "rayasandra",
  "gollahalli",
  "chandapura-circle",
  "attibele-industrial-area",
];

const applyChanges = process.argv.includes("--apply");

const backupDir =
  "F:/HALEEMA/LOADZY_LOCAL_BACKUPS/anekal-route-links-before-migration-20261108";

function slugify(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function migrateSection(content, startMarker, endMarker, pageSlug, direction) {
  const start = content.indexOf(startMarker);
  const end = content.indexOf(endMarker);

  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`${pageSlug}: Missing or incorrectly ordered section markers.`);
  }

  const section = content.slice(start, end);
  let changed = 0;
  let checked = 0;

  const updatedSection = section.replace(
    /<Link\b[\s\S]*?<\/Link>/g,
    (linkBlock) => {
      const labelMatch = linkBlock.match(
        /<span\b[^>]*>\s*([^<]+?)\s*<\/span>/
      );

      const hrefMatch = linkBlock.match(/href="([^"]+)"/);

      if (!labelMatch || !hrefMatch) {
        throw new Error(`${pageSlug}: Could not read a route card.`);
      }

      const label = labelMatch[1].trim();
      const parts = label.split(/\s+to\s+/i);

      if (parts.length !== 2 || !parts[0].trim() || !parts[1].trim()) {
        throw new Error(`${pageSlug}: Unexpected route label: ${label}`);
      }

      const fromSlug = slugify(parts[0]);
      const toSlug = slugify(parts[1]);

      if (!fromSlug || !toSlug || fromSlug === toSlug) {
        throw new Error(`${pageSlug}: Invalid route: ${label}`);
      }

      if (direction === "forward" && fromSlug !== pageSlug) {
        throw new Error(`${pageSlug}: Incorrect forward route: ${label}`);
      }

      if (direction === "return" && toSlug !== pageSlug) {
        throw new Error(`${pageSlug}: Incorrect return route: ${label}`);
      }

      checked++;

      const newHref = `/routes/${fromSlug}/${toSlug}`;

      if (hrefMatch[1] === newHref) {
        return linkBlock;
      }

      changed++;

      return linkBlock.replace(
        /href="[^"]+"/,
        `href="${newHref}"`
      );
    }
  );

  if (checked !== 25) {
    throw new Error(
      `${pageSlug}: Expected 25 ${direction} route cards, found ${checked}.`
    );
  }

  return {
    content:
      content.slice(0, start) +
      updatedSection +
      content.slice(end),
    changed,
    checked,
  };
}

if (!fs.existsSync(backupDir)) {
  throw new Error(`Backup folder not found: ${backupDir}`);
}

if (fs.readdirSync(backupDir).filter((name) => name.endsWith("-page.tsx")).length !== 12) {
  throw new Error("Expected 12 backup page files. Migration stopped.");
}

let totalChanged = 0;

for (const slug of targets) {
  const file = path.join("app", `${slug}-transport`, "page.tsx");
  const backup = path.join(backupDir, `${slug}-page.tsx`);

  if (!fs.existsSync(file) || !fs.existsSync(backup)) {
    throw new Error(`Missing page or backup for ${slug}.`);
  }

  const original = fs.readFileSync(file, "utf8");

  const forward = migrateSection(
    original,
    "{/* FORWARD ROUTES */}",
    "{/* RETURN ROUTES */}",
    slug,
    "forward"
  );

  const returning = migrateSection(
    forward.content,
    "{/* RETURN ROUTES */}",
    "{/* NEARBY AREAS */}",
    slug,
    "return"
  );

  const updated = returning.content;

  if (applyChanges) {
    fs.writeFileSync(file, updated, "utf8");
  }

  const changed = forward.changed + returning.changed;
  totalChanged += changed;

  console.log(
    `${slug}: forward ${forward.checked}, return ${returning.checked}, links to change ${changed}`
  );
}

console.log("----------------------------------");
console.log(`Pages checked: ${targets.length}`);
console.log(`Route links to change: ${totalChanged}`);

if (applyChanges) {
  console.log("Migration applied.");
} else {
  console.log("DRY RUN ONLY. No files were changed.");
  console.log("Review the results before running with --apply.");
}