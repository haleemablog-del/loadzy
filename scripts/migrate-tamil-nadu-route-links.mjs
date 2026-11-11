import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DATA_FILE = path.join(ROOT, "data", "locations.json");

const BACKUP_DIR =
  "F:/HALEEMA/LOADZY_LOCAL_BACKUPS/all-four-states-route-links-before-migration-20261108";

const TARGET_STATE = "Tamil Nadu";
const EXPECTED_PAGES = 367;
const EXPECTED_BACKUPS = 1592;

const applyChanges = process.argv.includes("--apply");

function slugify(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function transportSlug(value) {
  const base = slugify(value).replace(/(?:-transport)+$/g, "");
  return base ? `${base}-transport` : "";
}

function migrateSection(content, startMarker, endMarker, location, direction) {
  const pageSlug = location.slug;
  const start = content.indexOf(startMarker);
  const end = content.indexOf(endMarker);
  let skippedSelfRoutes = 0;
  const seenRoutes = new Set();

  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`${pageSlug}: Missing or incorrectly ordered section markers.`);
  }

  const section = content.slice(start, end);
  const seen = new Set();

  let changed = 0;
  let checked = 0;

  const expectedOrigin = transportSlug(location.name);
  const expectedFolder = transportSlug(location.slug);
  const updatedSection = section.replace(
    /<Link\b[\s\S]*?<\/Link>/g,
    (linkBlock) => {
      const labelMatch = linkBlock.match(
        /<span\b[^>]*>\s*([^<]+?)\s*<\/span>/
      );

      const hrefMatch = linkBlock.match(/\bhref\s*=\s*"([^"]+)"/);

      if (!labelMatch || !hrefMatch) {
        throw new Error(`${pageSlug}: Could not read a route card.`);
      }

      const label = labelMatch[1].trim();
      
      // Split route labels and remove accidentally repeated adjacent locations.
      // Example:
      // "Davanagere to Davanagere to Bengaluru"
      // becomes ["Davanagere", "Bengaluru"]
      //
      // "Bengaluru to Davanagere to Davanagere"
      // becomes ["Bengaluru", "Davanagere"]
// Normalize route labels by removing adjacent repeated location names.
const rawParts = label.split(/\s+to\s+/i).map(part => part.trim());

const parts = rawParts.reduce((cleaned, value) => {
  if (!value) return cleaned;

  const previous = cleaned[cleaned.length - 1];

  if (previous?.toLowerCase() === value.toLowerCase()) {
    return cleaned;
  }

  cleaned.push(value);
  return cleaned;
}, []);

// A self-route such as "Devanahalli to Devanahalli"
// is invalid and must not be converted into a dynamic route.
if (
  parts.length === 1 &&
  rawParts.length >= 2 &&
  rawParts.every(part => part.toLowerCase() === rawParts[0].toLowerCase())
) {
  skippedSelfRoutes++;
  return linkBlock;
}

if (
  parts.length !== 2 ||
  !parts[0] ||
  !parts[1]
) {
  throw new Error(
    `${pageSlug}: Unexpected route label: ${label}`
  );
}


      const fromSlug = transportSlug(parts[0]);
      const toSlug = transportSlug(parts[1]);

      if (!fromSlug || !toSlug || fromSlug === toSlug) {
        throw new Error(`${pageSlug}: Invalid or self-route: ${label}`);
      }

      if (direction === "forward" &&
          fromSlug !== expectedOrigin &&
          fromSlug !== expectedFolder) {
        throw new Error(`${pageSlug}: Incorrect forward route: ${label}`);
      }

      if (direction === "return" &&
          toSlug !== expectedOrigin &&
          toSlug !== expectedFolder) {
        throw new Error(`${pageSlug}: Incorrect return route: ${label}`);
      }

      const routeKey = `${fromSlug}/${toSlug}`;

      // Duplicate cards are retained, but both receive the same
// correct dynamic route URL.
seenRoutes.add(routeKey);

      seen.add(routeKey);
      checked++;

      const newHref = `/routes/${fromSlug}/${toSlug}`;

      if (hrefMatch[1] === newHref) {
        return linkBlock;
      }

      changed++;

      return linkBlock.replace(
        /\bhref\s*=\s*"[^"]+"/,
        `href="${newHref}"`
      );
    }
  );

  if (checked === 0) {
  throw new Error(
    `${pageSlug}: No ${direction} route cards found.`
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

if (!fs.existsSync(DATA_FILE)) {
  throw new Error(`Location data not found: ${DATA_FILE}`);
}

if (!fs.existsSync(BACKUP_DIR)) {
  throw new Error(`Backup folder not found: ${BACKUP_DIR}`);
}

const locations = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));

if (!Array.isArray(locations)) {
  throw new Error("locations.json must contain an array.");
}

const targets = locations.filter(
  (location) => location.state === TARGET_STATE
);

const backupFiles = fs.readdirSync(BACKUP_DIR).filter(
  (name) => name.endsWith("-page.tsx")
);

if (targets.length !== EXPECTED_PAGES) {
  throw new Error(
    `Expected ${EXPECTED_PAGES} Tamil Nadu records, found ${targets.length}.`
  );
}

if (backupFiles.length !== EXPECTED_BACKUPS) {
  throw new Error(
    `Expected ${EXPECTED_BACKUPS} backup files, found ${backupFiles.length}.`
  );
}

const results = [];
const skipped = [];
const errors = [];

for (const location of targets) {
  const EXCEPTION_SLUGS = new Set([
  "kundrathur-transport",
  "sriperumbudur-transport",
  "oragadam-transport",
  "krishnagiri-transport",
  "madurai-transport",
  "ranipet-transport",
  "salem-transport",
  "kolathur-transport",
  "tiruchirappalli-transport",
  "ambur-transport",
  "vaniyambadi-transport",
  "jolarpet-transport",
  "tiruppur-transport",
  "tiruvallur-transport",
  "gummidipoondi-transport",
  "poonamallee-transport",
  "avadi-transport",
  "minjur-transport",
  "vellore-transport",
]);
  const folder = location.slug;
  if (EXCEPTION_SLUGS.has(folder)) {
  skipped.push(folder);
  continue;
}

  if (!folder || !location.name) {
    errors.push(`Invalid Tamil Nadu location record: ${JSON.stringify(location)}`);
    continue;
  }

  const pageFile = path.join(ROOT, "app", folder, "page.tsx");
  const backupFile = path.join(BACKUP_DIR, `${folder}-page.tsx`);

  if (!fs.existsSync(pageFile)) {
    errors.push(`${folder}: Page file missing`);
    continue;
  }

  if (!fs.existsSync(backupFile)) {
    errors.push(`${folder}: Backup file missing`);
    continue;
  }

  const original = fs.readFileSync(pageFile, "utf8");
  const backup = fs.readFileSync(backupFile, "utf8");

  if (!backup.trim()) {
    errors.push(`${folder}: Backup file is empty`);
    continue;
  }

  try {
    const forward = migrateSection(
      original,
      "{/* FORWARD ROUTES */}",
      "{/* RETURN ROUTES */}",
      location,
      "forward"
    );

    const returning = migrateSection(
      forward.content,
      "{/* RETURN ROUTES */}",
      "{/* NEARBY AREAS */}",
      location,
      "return"
    );

    const updated = returning.content;
    const changed = forward.changed + returning.changed;

    results.push({
      folder,
      forward: forward.checked,
      returning: returning.checked,
      changed,
      updated,
    });
  } catch (error) {
    errors.push(`${folder}: ${error.message}`);
  }
}

console.log("\n========== TAMIL NADU ROUTE MIGRATION ==========\n");

console.log(`Tamil Nadu records: ${targets.length}`);
console.log(`Pages validated: ${results.length}`);
console.log(`Pages with errors: ${errors.length}`);
console.log(`Pages skipped: ${skipped.length}`);
console.log(`Pages skipped (existing dynamic routes): ${skipped.length}`);

const totalForward = results.reduce((sum, item) => sum + item.forward, 0);
const totalReturn = results.reduce((sum, item) => sum + item.returning, 0);
const totalChanged = results.reduce((sum, item) => sum + item.changed, 0);

console.log(`Forward cards checked: ${totalForward}`);
console.log(`Return cards checked: ${totalReturn}`);
console.log(`Links to change: ${totalChanged}`);

if (errors.length > 0) {
  console.log("\nMigration errors:");

  errors.slice(0, 50).forEach((error) => {
    console.log("-", error);
  });

  fs.writeFileSync(
    path.join(ROOT, "tamil-nadu-route-migration-errors.json"),
    JSON.stringify(errors, null, 2),
    "utf8"
  );

  console.log("\nNo pages were changed because validation failed.");
  process.exitCode = 1;
} else if (applyChanges) {
  for (const item of results) {
    if (item.changed > 0) {
      fs.writeFileSync(
        path.join(ROOT, "app", item.folder, "page.tsx"),
        item.updated,
        "utf8"
      );
    }
  }

  console.log("\nTamil Nadu migration applied successfully.");
} else {
  console.log("\nDRY RUN ONLY — no page files were changed.");
  console.log("Review the report before applying.");
}

console.log("\n===============================================\n");