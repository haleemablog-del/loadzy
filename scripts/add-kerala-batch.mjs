import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data", "locations.json");
const backupDir = path.resolve("backups", "location-data");
const dryRun = process.argv.includes("--dry-run");

const BATCH_TAG = "kerala-2026-11";
const MAX_ROUTES = 25;
const MIN_NEARBY_AREAS = 10;
const MAX_NEARBY_AREAS = 15;

// Cleaned Kerala locations.
// All locality and industrial-area records are grouped under their correct district.
const districts = {
  "Thiruvananthapuram": [
    "Thiruvananthapuram", "Neyyattinkara", "Attingal", "Nedumangad",
    "Varkala", "Parassala", "Balaramapuram", "Vizhinjam",
    "Kazhakkoottam", "Kattakkada", "Kilimanoor", "Venjaramoodu",
    "Kallambalam", "Poovar", "Thampanoor", "Palayam", "Pattom",
    "Kowdiar", "Technopark", "Sreekariyam", "Ulloor", "Peroorkada",
    "Pappanamcode", "Nemom", "Karamana", "Vattiyoorkavu",
    "Kovalam", "Vizhinjam Port area"
  ],

  "Kollam": [
    "Kollam", "Punalur", "Kottarakkara", "Karunagappally",
    "Paravur", "Anchal", "Kundara", "Chathannoor", "Oachira",
    "Pathanapuram", "Sasthamcotta", "Chavara", "Chinnakada",
    "Kottiyam", "Kavanad", "Asramam", "Sakthikulangara"
  ],

  "Pathanamthitta": [
    "Pathanamthitta", "Adoor", "Thiruvalla", "Pandalam", "Ranni",
    "Kozhencherry", "Mallappally", "Konni", "Aranmula", "Elanthoor",
    "Omalloor", "Kumbanad", "Pullad", "Seethathode", "Kumbazha",
    "Pathanamthitta town centre"
  ],

  "Alappuzha": [
    "Alappuzha", "Cherthala", "Kayamkulam", "Chengannur",
    "Mavelikkara", "Haripad", "Aroor", "Ambalappuzha", "Thakazhy",
    "Mannar", "Pattanakkad", "Muhamma", "Mararikulam", "Kommady",
    "Kalavoor", "Punnapra"
  ],

  "Kottayam": [
    "Kottayam", "Changanassery", "Pala", "Ettumanoor", "Vaikom",
    "Erattupetta", "Ponkunnam", "Kanjirappally", "Mundakayam",
    "Kidangoor", "Kuravilangad", "Ramapuram", "Pampady",
    "Karukachal", "Nagampadam", "Kumaranalloor"
  ],

  "Idukki": [
    "Painavu", "Thodupuzha", "Kattappana", "Munnar", "Adimali",
    "Nedumkandam", "Kumily", "Peerumade", "Vandiperiyar",
    "Rajakkad", "Cheruthoni", "Upputhara", "Vazhathope",
    "Marayoor", "Thodupuzha town", "Kattappana market",
    "Munnar town", "Adimali Junction", "Kumily market"
  ],

  "Ernakulam": [
    "Kochi", "Aluva", "Angamaly", "Perumbavoor", "Muvattupuzha",
    "Kothamangalam", "North Paravur", "Eloor", "Kalamassery",
    "Thrippunithura", "Maradu", "Piravom", "Koothattukulam",
    "Kolenchery", "Vypin", "Kakkanad", "Edappally", "Vyttila",
    "Palarivattom", "Kaloor", "MG Road", "Fort Kochi",
    "Mattancherry", "Tripunithura", "Willingdon Island",
    "Vallarpadam", "Infopark", "SmartCity",
    "Kalamassery industrial area"
  ],

  "Thrissur": [
    "Thrissur", "Guruvayur", "Chalakudy", "Irinjalakuda",
    "Kunnamkulam", "Kodungallur", "Chavakkad", "Wadakkanchery",
    "Koratty", "Mala", "Cherpu", "Ollur", "Anthikad", "Kanjani",
    "Chelakkara", "Swaraj Round", "Punkunnam", "Ayyanthole",
    "Kuttanellur", "Ollur industrial area"
  ],

  "Palakkad": [
    "Palakkad", "Ottapalam", "Shoranur", "Mannarkkad",
    "Chittur-Thathamangalam", "Pattambi", "Cherpulassery",
    "Alathur", "Vadakkencherry", "Nenmara", "Kollengode",
    "Kuzhalmannam", "Kongad", "Kanjikode", "Sultanpet",
    "Olavakkode", "Kanjikode industrial area"
  ],

  "Malappuram": [
    "Malappuram", "Manjeri", "Perinthalmanna", "Tirur",
    "Ponnani", "Kottakkal", "Kondotty", "Nilambur", "Tanur",
    "Parappanangadi", "Tirurangadi", "Valanchery", "Edappal",
    "Areekode", "Wandoor", "Chemmad", "Puthanathani",
    "Malappuram town", "Manjeri market", "Tirur railway area",
    "Ponnani harbour area", "Kottakkal commercial area",
    "Airport-side commercial area", "Valanchery Junction",
    "Edappal Junction"
  ],

  "Kozhikode": [
    "Kozhikode", "Vadakara", "Koyilandy", "Feroke",
    "Ramanattukara", "Mukkam", "Koduvally", "Balussery",
    "Thamarassery", "Payyoli", "Beypore", "Kunnamangalam",
    "Elathur", "Kakkodi", "Beach", "Mavoor Road", "Palayam",
    "Nadakkavu", "Kallai timber market", "Feroke industrial area",
    "Ramanattukara Junction", "Beypore port"
  ],

  "Wayanad": [
    "Kalpetta", "Sulthan Bathery", "Mananthavady", "Meppadi",
    "Vythiri", "Panamaram", "Ambalavayal", "Pulpally",
    "Kakkavayal", "Muttil", "Kenichira", "Padinjarathara",
    "Kalpetta town", "Sulthan Bathery market",
    "Meppadi Junction", "Pulpally agricultural belt"
  ],

  "Kannur": [
    "Kannur", "Thalassery", "Payyanur", "Taliparamba",
    "Mattannur", "Iritty", "Koothuparamba", "Anthoor",
    "Sreekandapuram", "Panoor", "Cherukunnu", "Dharmadom",
    "Kadirur", "Valapattanam", "Thavakkara", "Kannur town",
    "Thalassery market", "Valapattanam industrial area"
  ],

  "Kasaragod": [
    "Kasaragod", "Kanhangad", "Nileshwaram", "Uppala",
    "Manjeshwar", "Cheruvathur", "Trikaripur", "Bekal",
    "Kumbla", "Badiadka", "Periya", "Udma", "Muliyar",
    "Vellarikundu", "Kasaragod town", "Kanhangad market"
  ]
};

// 30 destinations allow 25 routes even when the current location
// matches one of the destination names.
const destinations = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Kochi",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
  "Bengaluru",
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Salem",
  "Tiruppur",
  "Erode",
  "Mysuru",
  "Mangaluru",
  "Hyderabad",
  "Vijayawada",
  "Mumbai",
  "Pune",
  "Tiruchirappalli",
  "Hosur",
  "Krishnagiri"
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
  stop("data/locations.json was not found. Run this from the project root.");
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

// Normalize existing slugs.
const existingSlugs = new Set(
  locations.map((location) =>
    String(location.slug || `${slugify(location.name)}-transport`).toLowerCase()
  )
);

const planned = [];
const plannedSlugs = new Set();
const nameCounts = new Map();

// Count repeated names across districts.
for (const names of Object.values(districts)) {
  for (const name of names) {
    const key = slugify(name);
    nameCounts.set(key, (nameCounts.get(key) || 0) + 1);
  }
}

for (const [district, rawNames] of Object.entries(districts)) {
  // Remove duplicate names within each district.
  const names = [...new Map(
    rawNames.map((name) => [slugify(name), name])
  ).values()];

  for (const name of names) {
  const baseSlug = `${slugify(name)}-transport`;
  const duplicateName = nameCounts.get(slugify(name)) > 1;

  const slug = duplicateName
    ? `${slugify(name)}-${slugify(district)}-transport`
    : baseSlug;

  if (existingSlugs.has(slug) || plannedSlugs.has(slug)) {
    console.log(`SKIP existing location: ${name} (${slug})`);
    continue;
  }

  // Nearby areas: other distinct locations in the same district.
  const nearbyAreas = names
    .filter((other) => slugify(other) !== slugify(name))
    .slice(0, MAX_NEARBY_AREAS);

    // Forward routes: current location to destination.
    const routeDestinations = destinations
      .filter((destination) => slugify(destination) !== slugify(name))
      .slice(0, MAX_ROUTES);

    if (routeDestinations.length < MAX_ROUTES) {
      stop(`Could not generate 25 forward routes for ${name}.`);
    }

    const routes = routeDestinations.map(
      (destination) => `${name} to ${destination}`
    );

    // Return routes: destination back to current location.
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
      state: "Kerala",
      district,
      routes,
      returnRoutes,
      nearbyAreas,
      famousFor: [],
      goods: [
        "Commercial goods",
        "Household shifting goods",
        "Industrial goods",
        "Agricultural produce",
        "Food products",
        "Retail and wholesale goods"
      ],
      seoVerificationStatus: "needs-verification",
      batchTag: BATCH_TAG
    });
  }

// Final duplicate slug validation.

for (const [district, rawNames] of Object.entries(districts)) {
  // Remove duplicate names within each district.
  const names = [...new Map(
    rawNames.map((name) => [slugify(name), name])
  ).values()];

  for (const name of names) {
    const baseSlug = `${slugify(name)}-transport`;
    const duplicateName = nameCounts.get(slugify(name)) > 1;

    // Give repeated names a district-specific slug.
    const slug = duplicateName
      ? `${slugify(name)}-${slugify(district)}-transport`
      : baseSlug;

    if (existingSlugs.has(slug) || plannedSlugs.has(slug)) {
      console.log(`SKIP existing location: ${name} (${slug})`);
      continue;
    }

    // Nearby areas: other distinct locations in the same district.
    const nearbyAreas = names
      .filter((other) => slugify(other) !== slugify(name))
      .slice(0, MAX_NEARBY_AREAS);

    if (nearbyAreas.length < MIN_NEARBY_AREAS) {
      stop(
        `${name} has only ${nearbyAreas.length} nearby areas. Minimum required: ${MIN_NEARBY_AREAS}.`
      );
    }

    // Forward routes.
    const routeDestinations = destinations
      .filter((destination) => slugify(destination) !== slugify(name))
      .slice(0, MAX_ROUTES);

    if (routeDestinations.length < MAX_ROUTES) {
      stop(`Could not generate 25 forward routes for ${name}.`);
    }

    const routes = routeDestinations.map(
      (destination) => `${name} to ${destination}`
    );

    // Return routes.
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
      state: "Kerala",
      district,
      routes,
      returnRoutes,
      nearbyAreas,
      famousFor: [],
      goods: [
        "Commercial goods",
        "Household shifting goods",
        "Industrial goods",
        "Agricultural produce",
        "Food products",
        "Retail and wholesale goods"
      ],
      seoVerificationStatus: "needs-verification",
      batchTag: BATCH_TAG
    });
  }
  }
}
// Validate every planned record.
for (const location of planned) {
  if (location.routes.length !== 25) {
    stop(`${location.name}: expected exactly 25 routes.`);
  }

  if (location.returnRoutes.length !== 25) {
    stop(`${location.name}: expected exactly 25 return routes.`);
  }

  if (location.nearbyAreas.length < MIN_NEARBY_AREAS) {
    stop(`${location.name}: fewer than 10 nearby areas.`);
  }

  if (location.routes.some((route, index) =>
    route === location.returnRoutes[index]
  )) {
    stop(`${location.name}: forward and return routes are not reversed.`);
  }
}

// Summary.
console.log("\n========== KERALA BATCH SUMMARY ==========");
console.log(`Existing records: ${locations.length}`);
console.log(`New records planned: ${planned.length}`);
console.log(`Districts: ${Object.keys(districts).length}`);
console.log(`Batch tag: ${BATCH_TAG}`);
console.log("Forward routes per location: 25");
console.log("Return routes per location: 25");
console.log(
  `Nearby areas per location: minimum ${MIN_NEARBY_AREAS}, maximum ${MAX_NEARBY_AREAS}`
);

if (dryRun) {
  console.log("\nDRY RUN: No files changed.");

  for (const location of planned) {
    console.log(
      `${location.district} | ${location.name} | ${location.slug} | routes: ${location.routes.length} | return: ${location.returnRoutes.length} | nearby: ${location.nearbyAreas.length}`
    );
  }

  process.exit(0);
}

if (planned.length === 0) {
  console.log("No new locations to add. Existing data was not changed.");
  process.exit(0);
}

// Create a backup before writing.
fs.mkdirSync(backupDir, { recursive: true });

const timestamp = new Date()
  .toISOString()
  .replace(/[:.]/g, "-");

const backupPath = path.join(
  backupDir,
  `locations-before-kerala-batch-${timestamp}.json`
);

try {
  fs.copyFileSync(dataPath, backupPath);
} catch (error) {
  stop(`Could not create backup. No data was changed: ${error.message}`);
}

const updatedLocations = [...locations, ...planned];

try {
  const output = JSON.stringify(updatedLocations, null, 2) + "\n";

  // Verify JSON before writing.
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
console.log(`Added ${planned.length} Kerala location records.`);
console.log(`Total location records: ${updatedLocations.length}`);
console.log("FamousFor values still require local verification.");
console.log("Kerala batch generation completed.");