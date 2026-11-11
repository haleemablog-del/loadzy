import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data", "locations.json");
const backupDir = path.resolve("backups", "location-data");
const dryRun = process.argv.includes("--dry-run");

const BATCH_TAG = "puducherry-2026-11";
const MAX_ROUTES = 25;
const MAX_NEARBY_AREAS = 10;

// Official administrative regions and selected localities.
// FamousFor remains empty until local claims are separately verified.
const regions = {
  "Puducherry": [
    "Puducherry",
    "Oulgaret",
    "Villianur",
    "Ariyankuppam",
    "Bahour",
    "Mannadipet",
    "Nettapakkam",
    "Kalapet",
    "Lawspet",
    "Muthialpet",
    "Mudaliarpet",
    "Reddiarpalayam",
    "Karuvadikuppam",
    "Thattanchavady",
    "Saram",
    "Villianur Market",
    "Thirubuvanai",
    "Thiruvandarkoil",
    "Sedarapet",
    "Madagadipet",
    "Mannadipet Market",
    "Bahour Market",
    "Kirumampakkam",
    "Embalam",
    "Abishegapakkam",
    "Tavalakuppam",
    "Pillaiyarkuppam",
    "Koodapakkam",
    "Thengaithittu",
    "Murungapakkam"
  ],

  "Karaikal": [
    "Karaikal",
    "Thirunallar",
    "Neravy",
    "Nedungadu",
    "Kottucherry",
    "T.R. Pattinam",
    "Thirumalairayanpattinam",
    "Ambagarathur",
    "Varichikudy",
    "Thiruvettakudy",
    "Melakasakudy",
    "Poovam",
    "Kurumbagaram",
    "Ponpethi",
    "Vizhidhiyur",
    "Keezhamanai",
    "Dharmapuram",
    "Thalatheru",
    "Oduthurai",
    "Akkaravattam"
  ],

  "Mahe": [
    "Mahe",
    "Palloor",
    "Pandakkal",
    "Chalakara",
    "Kallayi"
  ],

  "Yanam": [
    "Yanam",
    "Mettakur",
    "Kanakalapeta",
    "Agraharam",
    "Pillaraya",
    "Farampeta",
    "Pydikondala",
    "Pedapudi",
    "Guriampeta",
    "Dariyalatippa",
    "Ambedkar Nagar",
    "Bheem Nagar",
    "Savithri Nagar",
    "Kurasampeta"
  ]
};

// New forward and return route destinations.
// These are route destinations, not nearby-area page links.
const destinations = [
  "Chennai",
  "Cuddalore",
  "Villupuram",
  "Tindivanam",
  "Marakkanam",
  "Puducherry",
  "Karaikal",
  "Mahe",
  "Yanam",
  "Chidambaram",
  "Mayiladuthurai",
  "Nagapattinam",
  "Thanjavur",
  "Kumbakonam",
  "Thiruvarur",
  "Tiruchirappalli",
  "Salem",
  "Erode",
  "Coimbatore",
  "Tiruppur",
  "Madurai",
  "Vellore",
  "Bengaluru",
  "Hosur",
  "Krishnagiri",
  "Hyderabad",
  "Vijayawada",
  "Visakhapatnam",
  "Kochi",
  "Thiruvananthapuram"
];

function slugify(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stop(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(dataPath)) {
  stop("data/locations.json was not found. Run from the project root.");
}

let locations;

try {
  locations = JSON.parse(fs.readFileSync(dataPath, "utf8"));
} catch (error) {
  stop(`Could not parse locations.json: ${error.message}`);
}

if (!Array.isArray(locations)) {
  stop("locations.json must contain a JSON array.");
}

// Existing location-page slugs.
const existingSlugs = new Set(
  locations.map((location) =>
    String(
      location.slug ||
      `${slugify(location.name)}-transport`
    ).toLowerCase()
  )
);

const planned = [];
const plannedSlugs = new Set();
const nameCounts = new Map();

// Count repeated locality names.
for (const names of Object.values(regions)) {
  for (const name of names) {
    const key = slugify(name);
    nameCounts.set(key, (nameCounts.get(key) || 0) + 1);
  }
}

// Generate records only once.
for (const [region, rawNames] of Object.entries(regions)) {
  const names = [
    ...new Map(
      rawNames.map((name) => [slugify(name), name])
    ).values()
  ];

  for (const name of names) {
    const duplicateName = nameCounts.get(slugify(name)) > 1;

    const slug = duplicateName
      ? `${slugify(name)}-${slugify(region)}-transport`
      : `${slugify(name)}-transport`;

    if (existingSlugs.has(slug) || plannedSlugs.has(slug)) {
      console.log(`SKIP existing location: ${name} (${slug})`);
      continue;
    }

    // Maximum 10 nearby areas.
    // All nearby names must have their own location records.
    const nearbyAreas = names
      .filter((other) => slugify(other) !== slugify(name))
      .slice(0, MAX_NEARBY_AREAS);

    // Exactly 25 forward and 25 return routes.
    const routeDestinations = destinations
      .filter((destination) => slugify(destination) !== slugify(name))
      .slice(0, MAX_ROUTES);

    if (routeDestinations.length !== MAX_ROUTES) {
      stop(`Could not generate 25 routes for ${name}.`);
    }

    const routes = routeDestinations.map(
      (destination) => `${name} to ${destination}`
    );

    const returnRoutes = routeDestinations.map(
      (destination) => `${destination} to ${name}`
    );

    if (routes.length !== 25 || returnRoutes.length !== 25) {
      stop(`Route count validation failed for ${name}.`);
    }

    plannedSlugs.add(slug);

    planned.push({
      name,
      slug,
      state: "Puducherry",
      district: region,
      region,
      routes,
      returnRoutes,
      nearbyAreas,
      famousFor: [],
      goods: [
        "Commercial goods",
        "Household shifting goods",
        "Retail and wholesale goods",
        "Food products",
        "Agricultural produce",
        "Industrial goods"
      ],
      seoVerificationStatus: "needs-verification",
      batchTag: BATCH_TAG
    });
  }
}

// Validate all planned records and nearby links.
const allSlugs = new Set([
  ...existingSlugs,
  ...plannedSlugs
]);

for (const location of planned) {
  if (location.routes.length !== 25) {
    stop(`${location.name}: expected 25 forward routes.`);
  }

  if (location.returnRoutes.length !== 25) {
    stop(`${location.name}: expected 25 return routes.`);
  }

  if (location.nearbyAreas.length > MAX_NEARBY_AREAS) {
    stop(`${location.name}: more than 10 nearby areas.`);
  }

  for (const nearby of location.nearbyAreas) {
    const nearbySlug = `${slugify(nearby)}-transport`;

    if (!allSlugs.has(nearbySlug)) {
      stop(
        `${location.name}: nearby page record missing for ${nearby} (${nearbySlug}).`
      );
    }
  }

  for (let i = 0; i < 25; i++) {
    if (location.routes[i] !==
        `${location.name} to ${location.returnRoutes[i].replace(` to ${location.name}`, "")}`) {
      stop(`${location.name}: forward/return route mismatch.`);
    }
  }
}

// Batch summary.
console.log("\n========== PUDUCHERRY BATCH SUMMARY ==========");
console.log(`Existing records: ${locations.length}`);
console.log(`New records planned: ${planned.length}`);
console.log(`Regions: ${Object.keys(regions).length}`);
console.log(`Batch tag: ${BATCH_TAG}`);
console.log("Forward routes per location: 25");
console.log("Return routes per location: 25");
console.log(`Nearby areas: maximum ${MAX_NEARBY_AREAS}`);

if (dryRun) {
  console.log("\nDRY RUN: No files changed.");

  for (const location of planned) {
    console.log(
      `${location.region} | ${location.name} | ${location.slug} | forward: ${location.routes.length} | return: ${location.returnRoutes.length} | nearby: ${location.nearbyAreas.length}`
    );
  }

  process.exit(0);
}

if (planned.length === 0) {
  console.log("No new locations to add. Existing data was not changed.");
  process.exit(0);
}

// Create backup before writing.
fs.mkdirSync(backupDir, { recursive: true });

const timestamp = new Date()
  .toISOString()
  .replace(/[:.]/g, "-");

const backupPath = path.join(
  backupDir,
  `locations-before-puducherry-batch-${timestamp}.json`
);

try {
  fs.copyFileSync(dataPath, backupPath);
} catch (error) {
  stop(`Backup failed. No data was changed: ${error.message}`);
}

const updatedLocations = [...locations, ...planned];

try {
  const output = JSON.stringify(updatedLocations, null, 2) + "\n";
  JSON.parse(output);
  fs.writeFileSync(dataPath, output, "utf8");
} catch (error) {
  try {
    fs.copyFileSync(backupPath, dataPath);
    stop(`Save failed. Backup restored: ${error.message}`);
  } catch (restoreError) {
    stop(
      `Save failed: ${error.message}. Restore failed: ${restoreError.message}. Backup: ${backupPath}`
    );
  }
}

console.log(`\nBackup saved: ${path.relative(process.cwd(), backupPath)}`);
console.log(`Added ${planned.length} Puducherry location records.`);
console.log(`Total location records: ${updatedLocations.length}`);
console.log("FamousFor values still require local verification.");
console.log("Puducherry batch generation completed.");
