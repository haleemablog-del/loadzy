import fs from "node:fs";
import path from "node:path";

const DATA_PATH = path.resolve("data/locations.json");
const SOURCE_PATH = path.resolve("data/andhra-pradesh-locations.md");
const BACKUP_DIR = path.resolve("backups/location-data");

const BATCH_TAG = "andhra-pradesh-2026-11";
const STATE = "Andhra Pradesh";

const MAX_ROUTES = 25;
const MAX_NEARBY = 15;
const MIN_NEARBY = 10;

const DRY_RUN = process.argv.includes("--dry-run");

const DESTINATIONS = [
  "Visakhapatnam",
  "Vijayawada",
  "Guntur",
  "Tirupati",
  "Nellore",
  "Kurnool",
  "Rajamahendravaram",
  "Kakinada",
  "Anantapur",
  "Kadapa",
  "Chennai",
  "Bengaluru",
  "Hyderabad",
  "Coimbatore",
  "Salem",
  "Tiruppur",
  "Mysuru",
  "Kochi",
  "Thiruvananthapuram",
  "Mumbai",
  "Pune",
  "Vellore",
  "Hosur",
  "Krishnagiri",
  "Madurai",
  "Erode",
  "Tiruchirappalli",
  "Warangal",
  "Hubballi",
  "Mangaluru"
];

function stop(message) {
  console.error(`\nERROR: ${message}`);
  process.exit(1);
}

function normalize(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function slugify(value) {
  return normalize(value).replace(/\s+/g, "-");
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

// --------------------------------------------------
// 1. CHECK REQUIRED FILES
// --------------------------------------------------

if (!fs.existsSync(DATA_PATH)) {
  stop("data/locations.json was not found.");
}

if (!fs.existsSync(SOURCE_PATH)) {
  stop("data/andhra-pradesh-locations.md was not found.");
}

let existing;

try {
  existing = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
} catch (error) {
  stop(`Could not read locations.json: ${error.message}`);
}

if (!Array.isArray(existing)) {
  stop("locations.json must contain a JSON array.");
}

// --------------------------------------------------
// 2. READ TAB OR PIPE SEPARATED SOURCE
// --------------------------------------------------

const source = fs.readFileSync(SOURCE_PATH, "utf8")
  .replace(/^\uFEFF/, "");

const rows = source
  .split(/\r?\n/)
  .map((line) => {
    const trimmed = line.trim();

    if (!trimmed) return null;

    let cells;

    if (trimmed.includes("|")) {
      cells = trimmed
        .split("|")
        .map((cell) => cell.trim());

      if (cells[0] === "") cells.shift();
      if (cells[cells.length - 1] === "") cells.pop();
    } else if (trimmed.includes("\t")) {
      cells = trimmed
        .split("\t")
        .map((cell) => cell.trim());
    } else {
      return null;
    }

    if (cells.length < 2) return null;

    const district = cells[0];
    const location = cells[1];

    if (!district || !location) return null;

    if (
      ["district", "parent"].includes(
        district.toLowerCase()
      )
    ) {
      return null;
    }

    if (/^[-:]+$/.test(district)) return null;

    return { district, location };
  })
  .filter(Boolean);

if (rows.length < 400) {
  stop(
    `Only ${rows.length} source rows detected. Expected 500+.`
  );
}

console.log(`Source rows detected: ${rows.length}`);

// --------------------------------------------------
// 3. VALIDATE DISTRICT AND LOCATION DATA
// --------------------------------------------------

const districtNames = unique(
  rows
    .filter(
      (row) =>
        normalize(row.district) === normalize(row.location)
    )
    .map((row) => row.district)
);

const grouped = new Map();
const exactPairs = new Set();

let duplicateSourceRows = 0;

for (const row of rows) {
  const district = row.district.trim();
  const name = row.location.trim();

  const key =
    `${normalize(district)}|${normalize(name)}`;

  if (exactPairs.has(key)) {
    duplicateSourceRows++;
    continue;
  }

  exactPairs.add(key);

  const isDistrict =
    normalize(district) === normalize(name);

  grouped.set(key, {
    name,
    district,
    state: STATE,
    type: isDistrict ? "district" : "location"
  });
}

const candidates = [...grouped.values()];

if (!candidates.length) {
  stop("No valid district/location records found.");
}

// Every district must have its own district record.
for (const district of districtNames) {
  const exists = candidates.some(
    (item) =>
      item.type === "district" &&
      normalize(item.district) === normalize(district) &&
      normalize(item.name) === normalize(district)
  );

  if (!exists) {
    stop(`District record missing: ${district}`);
  }
}   

// --------------------------------------------------
// 4. GENERATE UNIQUE SLUGS
// --------------------------------------------------

const existingSlugs = new Set(
  existing.map((item) =>
    String(item.slug || "").toLowerCase()
  )
);

const candidateSlugs = new Set();

for (const item of candidates) {
  const base = slugify(item.name);
  const district = slugify(item.district);

  const isDistrict = item.type === "district";

  let slug = `${base}-transport`;

  if (existingSlugs.has(slug) || candidateSlugs.has(slug)) {
    slug = `${base}-${district}-transport`;
  }

  if (existingSlugs.has(slug) || candidateSlugs.has(slug)) {
    slug = `${base}-${district}-andhra-pradesh-transport`;
  }

  let suffix = 2;
  const originalSlug = slug;

  while (
    existingSlugs.has(slug) ||
    candidateSlugs.has(slug)
  ) {
    slug = `${originalSlug}-${suffix}`;
    suffix++;
  }

  item.slug = slug;
  candidateSlugs.add(slug);
}

// --------------------------------------------------
// 5. BUILD DISTRICT-BASED NEARBY LOCATIONS
// --------------------------------------------------

const planned = [];
const lowNearby = [];

for (const item of candidates) {
  const sameDistrict = candidates.filter((other) => {
    if (other.slug === item.slug) return false;

    return (
      normalize(other.district) ===
      normalize(item.district)
    );
  });

  const nearbyAreas = sameDistrict
    .slice(0, MAX_NEARBY)
    .map((other) => other.name);

  if (nearbyAreas.length < MIN_NEARBY) {
    lowNearby.push({
      district: item.district,
      name: item.name,
      count: nearbyAreas.length
    });
  }

  // ------------------------------------------------
  // 6. GENERATE FORWARD AND RETURN ROUTES
  // ------------------------------------------------

  const routeDestinations = unique(
    DESTINATIONS.filter(
      (destination) =>
        normalize(destination) !== normalize(item.name)
    )
  ).slice(0, MAX_ROUTES);

  if (routeDestinations.length !== MAX_ROUTES) {
    stop(`Could not generate 25 routes for ${item.name}.`);
  }

  const routes = routeDestinations.map(
    (destination) => `${item.name} to ${destination}`
  );

  const returnRoutes = routeDestinations.map(
    (destination) => `${destination} to ${item.name}`
  );

  planned.push({
    name: item.name,
    slug: item.slug,
    state: STATE,
    district: item.district,
    routes,
    returnRoutes,
    nearbyAreas,
    famousFor: [],
    goods: [
      "Commercial goods",
      "Agricultural produce",
      "Industrial goods",
      "Household shifting goods",
      "Retail and wholesale goods"
    ],
    seoVerificationStatus: "needs-verification",
    batchTag: BATCH_TAG
  });
}

// --------------------------------------------------
// 7. FINAL VALIDATION
// --------------------------------------------------

const plannedSlugSet = new Set(
  planned.map((item) => item.slug)
);

if (plannedSlugSet.size !== planned.length) {
  stop("Duplicate planned slugs detected.");
}

for (const item of planned) {
  if (item.routes.length !== MAX_ROUTES) {
    stop(`${item.slug}: incorrect forward route count.`);
  }

  if (item.returnRoutes.length !== MAX_ROUTES) {
    stop(`${item.slug}: incorrect return route count.`);
  }

  if (item.nearbyAreas.length > MAX_NEARBY) {
    stop(`${item.slug}: too many nearby references.`);
  }

  for (const nearby of item.nearbyAreas) {
    const target = candidates.find(
      (other) =>
        normalize(other.name) === normalize(nearby) &&
        normalize(other.district) ===
          normalize(item.district)
    );

    if (!target || !plannedSlugSet.has(target.slug)) {
      stop(`${item.slug}: invalid nearby reference ${nearby}`);
    }
  }
}

// --------------------------------------------------
// 8. PRINT SUMMARY
// --------------------------------------------------

console.log("\n========== ANDHRA PRADESH SUMMARY ==========");

console.log(`Original source rows: ${rows.length}`);
console.log(`Duplicate source rows: ${duplicateSourceRows}`);
console.log(`Districts: ${districtNames.length}`);
console.log(`Unique location records: ${planned.length}`);

console.log(`Forward routes per record: ${MAX_ROUTES}`);
console.log(`Return routes per record: ${MAX_ROUTES}`);

console.log(
  `Nearby target: ${MIN_NEARBY}-${MAX_NEARBY}`
);

console.log(
  `Locations with fewer than ${MIN_NEARBY} related areas: ${lowNearby.length}`
);

console.log("\n========== LOW NEARBY COUNT ==========");

for (const item of lowNearby) {
  console.log(
    `${item.district} | ${item.name} | nearby: ${item.count}`
  );
}

console.log("\n========== LOCATION PREVIEW ==========");

for (const item of planned) {
  console.log(
    `${item.district} | ${item.name} | ${item.slug} | forward: ${item.routes.length} | return: ${item.returnRoutes.length} | nearby: ${item.nearbyAreas.length}`
  );
}

// --------------------------------------------------
// 9. DRY RUN: DO NOT CHANGE FILES
// --------------------------------------------------

if (DRY_RUN) {
  console.log("\nDRY RUN: No files changed.");
  process.exit(0);
}

// --------------------------------------------------
// 10. BACKUP ORIGINAL DATA
// --------------------------------------------------

fs.mkdirSync(BACKUP_DIR, { recursive: true });

const timestamp = new Date()
  .toISOString()
  .replace(/[:.]/g, "-");

const backupPath = path.join(
  BACKUP_DIR,
  `locations-before-andhra-pradesh-${timestamp}.json`
);

try {
  fs.copyFileSync(DATA_PATH, backupPath);
} catch (error) {
  stop(`Backup failed. No data changed: ${error.message}`);
}

// --------------------------------------------------
// 11. SAVE NEW LOCATION RECORDS
// --------------------------------------------------

const updated = [...existing, ...planned];

try {
  const output = JSON.stringify(updated, null, 2) + "\n";

  JSON.parse(output);

  fs.writeFileSync(DATA_PATH, output, "utf8");
} catch (error) {
  fs.copyFileSync(backupPath, DATA_PATH);

  stop(`Save failed. Original data restored: ${error.message}`);
}

console.log(`\nBackup created: ${backupPath}`);
console.log(`Added ${planned.length} Andhra Pradesh records.`);
console.log(`New total records: ${updated.length}`);

console.log("\nIMPORT COMPLETED.");
console.log("Page generation and URL validation are still required.");