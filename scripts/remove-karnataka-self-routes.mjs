import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BACKUP_DIR = path.join(
  ROOT,
  "backups",
  "karnataka-self-routes-before-removal"
);

const locations = JSON.parse(
  fs.readFileSync(
    path.join(ROOT, "data/locations.json"),
    "utf8"
  )
).filter((item) => item.state === "Karnataka");

const targetSlugs = new Set([
  "davanagere-district-transport",
  "hassan-district-transport",
  "kolar-district-transport",
  "mysuru-district-transport",
  "shivamogga-district-transport",
  "tumakuru-district-transport",
  "vijayapura-district-transport",
]);

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/-transport/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function removeSelfRouteCards(section, pageSlug) {
  const linkRegex = /<Link\b[\s\S]*?<\/Link>/g;

  return section.replace(linkRegex, (block) => {
    const hrefMatch = block.match(/href="([^"]+)"/);

    if (!hrefMatch) return block;

    const href = hrefMatch[1];

    const selfRoutePattern =
      /^\/([a-z0-9-]+)-to-\1-transport$/i;

    if (selfRoutePattern.test(href)) {
      console.log(`  Removed self-route: ${href}`);
      return "";
    }

    return block;
  });
}

if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

let changed = 0;
let removed = 0;
const errors = [];

for (const slug of targetSlugs) {
  const location = locations.find(
    (item) => item.slug === slug
  );

  if (!location) {
    errors.push(`${slug}: missing from location data`);
    continue;
  }

  const file = path.join(
    ROOT,
    "app",
    slug,
    "page.tsx"
  );

  if (!fs.existsSync(file)) {
    errors.push(`${slug}: page file missing`);
    continue;
  }

  const original = fs.readFileSync(file, "utf8");

  const forwardMarker = "{/* FORWARD ROUTES */}";
  const returnMarker = "{/* RETURN ROUTES */}";
  const nearbyMarker = "{/* NEARBY AREAS */}";

  const forwardStart = original.indexOf(forwardMarker);
  const returnStart = original.indexOf(returnMarker);
  const nearbyStart = original.indexOf(nearbyMarker);

  if (
    forwardStart < 0 ||
    returnStart <= forwardStart ||
    nearbyStart <= returnStart
  ) {
    errors.push(`${slug}: route markers invalid`);
    continue;
  }

  let updated = original;

  const forwardSection = updated.slice(
    forwardStart + forwardMarker.length,
    returnStart
  );

  const cleanForward = removeSelfRouteCards(
    forwardSection,
    slug
  );

  const returnSection = updated.slice(
    returnStart + returnMarker.length,
    nearbyStart
  );

  const cleanReturn = removeSelfRouteCards(
    returnSection,
    slug
  );

  const beforeCount =
    (forwardSection.match(/<Link\b[\s\S]*?<\/Link>/g) || []).length +
    (returnSection.match(/<Link\b[\s\S]*?<\/Link>/g) || []).length;

  const afterCount =
    (cleanForward.match(/<Link\b[\s\S]*?<\/Link>/g) || []).length +
    (cleanReturn.match(/<Link\b[\s\S]*?<\/Link>/g) || []).length;

  const pageRemoved = beforeCount - afterCount;

  if (pageRemoved === 0) continue;

  const backupFile = path.join(
    BACKUP_DIR,
    `${slug}-page.tsx`
  );

  if (!fs.existsSync(backupFile)) {
    fs.copyFileSync(file, backupFile);
  }

  updated =
    updated.slice(0, forwardStart + forwardMarker.length) +
    cleanForward +
    returnMarker +
    cleanReturn +
    updated.slice(nearbyStart);

  fs.writeFileSync(file, updated, "utf8");

  changed++;
  removed += pageRemoved;

  console.log(`${slug}: removed ${pageRemoved} cards`);
}

console.log("\n========== SELF-ROUTE CLEANUP ==========");
console.log("Target pages:", targetSlugs.size);
console.log("Pages changed:", changed);
console.log("Self-route cards removed:", removed);
console.log("Errors:", errors.length);
console.log("Backup folder:", BACKUP_DIR);

if (errors.length) {
  console.log("\nErrors:");
  errors.forEach((error) => console.log("-", error));
}

console.log("========================================");