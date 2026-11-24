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
// 2. READ SOURCE — PRESERVE BLANK DISTRICT ROWS
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
    } else if (trimmed.includes("\t")) {
      cells = trimmed
        .split("\t")
        .map((cell) => cell.trim());
    } else {
      return null;
    }

    if (cells.length < 2) return null;

    const parent = cells[0];
    const child = cells[1] || "";

    if (!parent) return null;

    if (
      ["district", "parent"].includes(
        parent.toLowerCase()
      )
    ) {
      return null;
    }

    if (/^[-:]+$/.test(parent)) return null;

    return { parent, child };
  })
  .filter(Boolean);

console.log(`Source rows detected: ${rows.length}`);

if (rows.length < 500) {
  stop(`Only ${rows.length} rows detected. Check the source file.`);
}

// --------------------------------------------------
// 3. BUILD ALL 28 DISTRICTS AND LOCATION RECORDS
// --------------------------------------------------

const parsedRows = [];
const districtNames = [];
const districtSet = new Set();
const exactPairs = new Set();

let currentDistrict = "";
let duplicateSourceRows = 0;

for (const row of rows) {
  const parent = row.parent.trim();
  const child = row.child.trim();

  // Blank-child row = district heading.
  // Self-pair row = district heading.

  if (!child || normalize(parent) === normalize(child)) {
    currentDistrict = parent;

    const districtKey = normalize(parent);

    if (!districtSet.has(districtKey)) {
      districtSet.add(districtKey);
      districtNames.push(parent);

      parsedRows.push({
        name: parent,
        district: parent,
        parent: parent,
        state: STATE,
        type: "district"
      });
    }

    continue;
  }

  if (!currentDistrict) {
    stop(`District heading missing before ${parent} | ${child}`);
  }

  const pairKey =
    `${normalize(currentDistrict)}|${normalize(parent)}|${normalize(child)}`;

  if (exactPairs.has(pairKey)) {
    duplicateSourceRows++;
    continue;
  }

  exactPairs.add(pairKey);

  // Parent city/town record.

  parsedRows.push({
    name: parent,
    district: currentDistrict,
    parent: currentDistrict,
    state: STATE,
    type: "city"
  });

  // Child locality/area record.

  parsedRows.push({
    name: child,
    district: currentDistrict,
    parent,
    state: STATE,
    type: "locality"
  });
}

// --------------------------------------------------
// VALIDATE EXACT 28 DISTRICT NAMES
// --------------------------------------------------

const EXPECTED_DISTRICTS = [
  "Alluri Sitharama Raju",
  "Anakapalli",
  "Ananthapuramu",
  "Annamayya",
  "Bapatla",
  "Chittoor",
  "Dr. B.R. Ambedkar Konaseema",
  "East Godavari",
  "Eluru",
  "Guntur",
  "Kakinada",
  "Krishna",
  "Kurnool",
  "Markapuram",
  "Nandyal",
  "NTR",
  "Palnadu",
  "Parvathipuram Manyam",
  "Polavaram",
  "Prakasam",
  "SPS Nellore",
  "Sri Sathya Sai",
  "Srikakulam",
  "Tirupati",
  "Visakhapatnam",
  "Vizianagaram",
  "West Godavari",
  "YSR Kadapa"
];

const detectedDistrictKeys = new Set(
  districtNames.map(normalize)
);

const missingDistricts = EXPECTED_DISTRICTS.filter(
  (name) => !detectedDistrictKeys.has(normalize(name))
);

const unexpectedDistricts = districtNames.filter(
  (name) => !EXPECTED_DISTRICTS.some(
    (expected) => normalize(expected) === normalize(name)
  )
);

if (
  districtNames.length !== EXPECTED_DISTRICTS.length ||
  missingDistricts.length ||
  unexpectedDistricts.length
) {
  stop(
    `District validation failed. Detected: ${districtNames.length}; ` +
    `missing: ${missingDistricts.join(", ") || "none"}; ` +
    `unexpected: ${unexpectedDistricts.join(", ") || "none"}. Do not import.`
  );
}

// --------------------------------------------------
// MERGE REPEATED LOCATIONS WITHIN EACH DISTRICT
// --------------------------------------------------

const grouped = new Map();

for (const item of parsedRows) {
  const key =
    `${normalize(item.district)}|${normalize(item.name)}`;

  if (!grouped.has(key)) {
    grouped.set(key, {
      name: item.name,
      district: item.district,
      parent: item.parent,
      state: STATE,
      type: item.type
    });
  } else {
    const existingItem = grouped.get(key);

    if (
      item.type === "district" ||
      (item.type === "city" && existingItem.type === "locality")
    ) {
      existingItem.type = item.type;
      existingItem.parent = item.parent;
    }
  }
}

const candidates = [...grouped.values()];

if (!candidates.length) {
  stop("No valid Andhra Pradesh locations were found.");
}

console.log(`Districts detected: ${districtNames.length}`);
console.log(`Unique location records: ${candidates.length}`);

// --------------------------------------------------
// 4. GENERATE UNIQUE SLUGS
// --------------------------------------------------

const existingSlugs = new Set(
  existing.map((item) => String(item.slug || "").toLowerCase())
);

const candidateSlugs = new Set();

for (const item of candidates) {
  const base = slugify(item.name);
  const district = slugify(item.district);
  const parent = slugify(item.parent);

  const isLocality = item.type === "locality";

  // Child locality pages include parent city/town in URL.

  const slugBase = isLocality && parent
  ? `${parent}-${base}`
  : base;

  let slug = `${slugBase}-transport`;

  if (existingSlugs.has(slug) || candidateSlugs.has(slug)) {
    slug = `${slugBase}-${district}-transport`;
  }

  if (existingSlugs.has(slug) || candidateSlugs.has(slug)) {
    slug = `${slugBase}-${district}-andhra-pradesh-transport`;
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
// 5. BUILD NEARBY LOCATIONS
// 6. GENERATE FORWARD AND RETURN ROUTES
// --------------------------------------------------

const planned = [];
const lowNearby = [];

for (const item of candidates) {
  // Priority 1: Same-district locations.

  const sameDistrict = candidates.filter((other) =>
    other.slug !== item.slug &&
    normalize(other.district) === normalize(item.district)
  );

  // Priority 2: Other Andhra Pradesh districts.

  const otherDistricts = candidates.filter((other) =>
    other.slug !== item.slug &&
    normalize(other.district) !== normalize(item.district)
  );

  const nearbyCandidates = [
    ...sameDistrict,
    ...otherDistricts
  ];

  const seenNearbySlugs = new Set();

  const selectedNearby = nearbyCandidates.filter((other) => {
    if (seenNearbySlugs.has(other.slug)) return false;

    seenNearbySlugs.add(other.slug);
    return true;
  }).slice(0, MAX_NEARBY);

  // Keep names for compatibility.
  // Store exact slugs for correct links.

  const nearbyAreas = selectedNearby.map(
    (other) => other.name
  );

  const nearbyAreaLinks = selectedNearby.map(
    (other) => ({
      name: other.name,
      slug: other.slug
    })
  );

  if (nearbyAreas.length < MIN_NEARBY) {
    lowNearby.push({
      district: item.district,
      name: item.name,
      count: nearbyAreas.length
    });
  }

  // Generate 25 destinations.

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
    parent: item.parent,
    locationType: item.type,
    routes,
    returnRoutes,
    nearbyAreas,
    nearbyAreaLinks,
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

  if (
    item.nearbyAreas.length < MIN_NEARBY ||
    item.nearbyAreas.length > MAX_NEARBY
  ) {
    stop(
      `${item.slug}: nearby count must be between ${MIN_NEARBY} and ${MAX_NEARBY}.`
    );
  }

  if (!Array.isArray(item.nearbyAreaLinks)) {
    stop(`${item.slug}: nearbyAreaLinks is missing.`);
  }

  for (const nearby of item.nearbyAreaLinks) {
    if (
      !nearby.name ||
      !nearby.slug ||
      !plannedSlugSet.has(nearby.slug)
    ) {
      stop(
        `${item.slug}: invalid nearby link ${JSON.stringify(nearby)}`
      );
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
    `${item.district} | ${item.name} | ${item.slug} | forward: ${item.routes.length} | return: ${item.returnRoutes.length} | nearby: ${item.nearbyAreaLinks.length}`
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