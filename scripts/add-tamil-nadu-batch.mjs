import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data", "locations.json");
const backupDir = path.resolve("backups", "location-data");
const dryRun = process.argv.includes("--dry-run");

const BATCH_TAG = "tamil-nadu-2026-11";
const MAX_ROUTES = 25;
const MAX_NEARBY_AREAS = 10;

// New Tamil Nadu locations supplied for this batch.
const districts = {
  "Mayiladuthurai": [
    "Mayiladuthurai", "Sirkazhi", "Kuthalam", "Tharangambadi",
    "Manalmedu", "Vaitheeswarankoil", "Porayar", "Kollidam"
  ],
  "Nagapattinam": [
    "Nagapattinam", "Velankanni", "Vedaranyam", "Thirukkuvalai",
    "Kilvelur", "Thalainayar", "Sikkal", "Nagore"
  ],
  "Namakkal": [
    "Namakkal", "Tiruchengode", "Rasipuram", "Kumarapalayam",
    "Paramathi Velur", "Pallipalayam", "Mohanur", "Sendamangalam",
    "Kolli Hills", "Elachipalayam"
  ],
  "Nilgiris": [
    "Ooty", "Coonoor", "Kotagiri", "Gudalur", "Wellington",
    "Lovedale", "Ketti", "Nelliyalam", "Kundah", "Manjoor"
  ],
  "Perambalur": [
    "Perambalur", "Kunnam", "Veppanthattai", "Alathur",
    "Labbaikudikadu", "Poolambadi"
  ],
  "Pudukkottai": [
    "Pudukkottai", "Aranthangi", "Alangudi", "Iluppur",
    "Keeranur", "Ponnamaravathi", "Karambakudi", "Avudaiyarkoil",
    "Gandarvakottai", "Viralimalai"
  ],
  "Ramanathapuram": [
    "Ramanathapuram", "Paramakudi", "Rameswaram", "Kamuthi",
    "Mudukulathur", "Thiruvadanai", "Kadaladi", "Sayalkudi",
    "Mandapam", "Keelakarai", "Abiramam"
  ],
  "Ranipet": [
    "Ranipet", "Arcot", "Walajapet", "Sholinghur", "Arakkonam",
    "Nemili", "Kaveripakkam", "Timiri", "Kalavai", "Ammoor"
  ],
  "Salem": [
    "Salem", "Attur", "Mettur", "Edappadi", "Omalur", "Yercaud",
    "Sankagiri", "Tharamangalam", "Vazhapadi", "Nangavalli",
    "Mecheri", "Kolathur", "P.N. Patti"
  ],
  "Sivaganga": [
    "Sivaganga", "Karaikudi", "Devakottai", "Manamadurai",
    "Tirupathur", "Ilayangudi", "Kalayarkoil", "Singampunari",
    "Thiruppuvanam", "Kanadukathan"
  ],
  "Tenkasi": [
    "Tenkasi", "Sankarankovil", "Kadayanallur", "Puliyangudi",
    "Courtallam", "Shenkottai", "Alangulam", "V.K. Pudur",
    "Surandai", "Pavoorchatram", "Sivagiri"
  ],
  "Thanjavur": [
    "Thanjavur", "Kumbakonam", "Pattukkottai", "Papanasam",
    "Thiruvaiyaru", "Peravurani", "Orathanadu", "Thirupananthal",
    "Adiramapattinam", "Ayyampettai", "Madukkur"
  ],
  "Theni": [
    "Theni", "Periyakulam", "Bodinayakanur", "Cumbum",
    "Chinnamanur", "Uthamapalayam", "Andipatti", "Gudalur",
    "Thevaram", "Kombai"
  ],
  "Thoothukudi": [
    "Thoothukudi", "Kovilpatti", "Tiruchendur", "Sattankulam",
    "Srivaikuntam", "Ettayapuram", "Vilathikulam", "Kayathar",
    "Arumuganeri", "Nazareth", "Authoor"
  ],
  "Tiruchirappalli": [
    "Tiruchirappalli", "Srirangam", "Manapparai", "Thuraiyur",
    "Musiri", "Lalgudi", "Thuvakudi", "Thottiyam",
    "Kattuputhur", "Koothappar", "Pulivalam"
  ],
  "Tirunelveli": [
    "Tirunelveli", "Ambasamudram", "Vikramasingapuram", "Nanguneri",
    "Radhapuram", "Kalakadu", "Cheranmahadevi", "Manur",
    "Thisayanvilai", "Panagudi"
  ],
  "Tirupathur": [
    "Tirupathur", "Ambur", "Vaniyambadi", "Jolarpet",
    "Natrampalli", "Alangayam", "Pudur"
  ],
  "Tiruppur": [
    "Tiruppur", "Dharapuram", "Udumalaipettai", "Palladam",
    "Avinashi", "Kangeyam", "Vellakoil", "Kundadam",
    "Uthukuli", "Mulanur", "Pongalur"
  ],
  "Tiruvallur": [
    "Tiruvallur", "Tiruttani", "Ponneri", "Gummidipoondi",
    "Poonamallee", "Avadi", "Thirumazhisai", "Minjur",
    "Uthukkottai", "Pallipattu", "Naravarikuppam", "Tirunindravur"
  ],
  "Tiruvannamalai": [
    "Tiruvannamalai", "Arani", "Cheyyar", "Vandavasi", "Polur",
    "Chengam", "Kalasapakkam", "Chetpet", "Kilpennathur",
    "Vembakkam", "Desur"
  ],
  "Tiruvarur": [
    "Tiruvarur", "Mannargudi", "Thiruthuraipoondi", "Needamangalam",
    "Koothanallur", "Valangaiman", "Nannilam", "Kodavasal", "Muthupet"
  ],
  "Vellore": [
    "Vellore", "Katpadi", "Gudiyatham", "Pernambut", "Anaicut",
    "K.V. Kuppam", "Odugathur", "Melvisharam", "Bagayam"
  ],
  "Viluppuram": [
    "Viluppuram", "Tindivanam", "Gingee", "Kandachipuram",
    "Marakkanam", "Valavanur", "Ananthapuram", "Vikravandi",
    "Thiruvennainallur", "Arakandanallur"
  ],
  "Virudhunagar": [
    "Virudhunagar", "Sivakasi", "Rajapalayam", "Srivilliputhur",
    "Aruppukkottai", "Sattur", "Kariapatti", "Watrap",
    "Tiruchuli", "Vembakottai", "Thiruthangal"
  ]
};

const destinations = [
  "Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli",
  "Tiruppur", "Erode", "Vellore", "Hosur", "Bengaluru",
  "Krishnagiri", "Dharmapuri", "Dindigul", "Karur", "Namakkal",
  "Thanjavur", "Tirunelveli", "Thoothukudi", "Kochi", "Palakkad",
  "Hyderabad", "Vijayawada", "Mumbai", "Pune", "Mysuru", "Kozhikode"
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

// Existing slugs are normalized to lowercase for comparison.
const existingSlugs = new Set(
  locations.map((location) =>
    String(location.slug || `${slugify(location.name)}-transport`)
      .toLowerCase()
  )
);

// Count names that occur more than once within this batch.
const nameCounts = new Map();

for (const names of Object.values(districts)) {
  for (const name of names) {
    nameCounts.set(name, (nameCounts.get(name) || 0) + 1);
  }
}

const planned = [];
const plannedSlugs = new Set();

for (const [district, names] of Object.entries(districts)) {
  for (const name of names) {
    const baseSlug = `${slugify(name)}-transport`;

    // Skip a location if its standard slug already exists.
    if (existingSlugs.has(baseSlug)) {
      console.log(`SKIP existing location: ${name} (${baseSlug})`);
      continue;
    }

    // First occurrence uses the normal slug.
    // Later occurrences of the same name use a district suffix.
   
    const duplicateName = nameCounts.get(name) > 1;

    // Give the two Tirupathur towns clear, district-specific slugs.
    let slug;

    if (slugify(name) === "tirupathur" && slugify(district) === "tirupathur") {
      slug = "tirupathur-transport";
    } else if (
      slugify(name) === "tirupathur" &&
      slugify(district) === "sivaganga"
    ) {
      slug = "tirupathur-sivaganga-transport";
    } else {
      const alreadyPlannedBase = plannedSlugs.has(baseSlug);

      slug =
        duplicateName && alreadyPlannedBase
          ? `${slugify(name)}-${slugify(district)}-transport`
          : baseSlug;
    }

    // Protect against collisions with existing and newly planned slugs.
    if (existingSlugs.has(slug) || plannedSlugs.has(slug)) {
      console.log(`SKIP duplicate slug: ${slug}`);
      continue;
    }

    // Build nearby areas from the same district list, excluding this location.
    const nearbyAreas = names
      .filter((other) => other !== name)
      .slice(0, MAX_NEARBY_AREAS);

    // Use up to 25 destinations, excluding the current location by name.
    const routes = destinations
      .filter(
        (destination) => slugify(destination) !== slugify(name)
      )
      .slice(0, MAX_ROUTES);

    // Check that the generated record meets the batch limits.
    if (routes.length > MAX_ROUTES) {
      stop(`Too many routes generated for ${name}.`);
    }

    if (nearbyAreas.length > MAX_NEARBY_AREAS) {
      stop(`Too many nearby areas generated for ${name}.`);
    }

    plannedSlugs.add(slug);

    planned.push({
      name,
      slug,
      state: "Tamil Nadu",
      district,
      routes,
      returnRoutes: [...routes],
      nearbyAreas,
      famousFor: [],
      goods: [
        "Commercial goods",
        "Household shifting goods",
        "Industrial goods",
        "Agricultural produce"
      ],
      seoVerificationStatus: "needs-verification",
      batchTag: BATCH_TAG
    });
  }
}

// Check the planned records before making any file changes.
const duplicatePlannedSlugs = planned
  .map((location) => location.slug)
  .filter((slug, index, slugs) => slugs.indexOf(slug) !== index);

if (duplicatePlannedSlugs.length > 0) {
  stop(`Duplicate planned slugs found: ${duplicatePlannedSlugs.join(", ")}`);
}

console.log(`Existing records: ${locations.length}`);
console.log(`New records planned: ${planned.length}`);
console.log(`Districts in this batch: ${Object.keys(districts).length}`);
console.log(`Batch tag: ${BATCH_TAG}`);

if (planned.length > 0) {
  const routeCounts = planned.map((location) => location.routes.length);
  const returnRouteCounts = planned.map(
    (location) => location.returnRoutes.length
  );
  const nearbyCounts = planned.map(
    (location) => location.nearbyAreas.length
  );

  console.log(
    `Routes per location: min ${Math.min(...routeCounts)}, max ${Math.max(...routeCounts)}`
  );
  console.log(
    `Return routes per location: min ${Math.min(...returnRouteCounts)}, max ${Math.max(...returnRouteCounts)}`
  );
  console.log(
    `Nearby areas per location: min ${Math.min(...nearbyCounts)}, max ${Math.max(...nearbyCounts)}`
  );
}

if (dryRun) {
  console.log("\nDRY RUN: No files changed.");

  for (const location of planned) {
    console.log(
      `${location.district} | ${location.name} | ${location.slug} | routes: ${location.routes.length} | return routes: ${location.returnRoutes.length} | nearby areas: ${location.nearbyAreas.length}`
    );
  }

  process.exit(0);
}

if (planned.length === 0) {
  console.log("No new locations to add. Existing data was not changed.");
  process.exit(0);
}

// Back up the existing master data before writing.
fs.mkdirSync(backupDir, { recursive: true });

const timestamp = new Date()
  .toISOString()
  .replace(/[:.]/g, "-");

const backupPath = path.join(
  backupDir,
  `locations-before-tamil-nadu-batch-${timestamp}.json`
);

try {
  fs.copyFileSync(dataPath, backupPath);
} catch (error) {
  stop(`Could not create backup. No data was changed: ${error.message}`);
}

const updatedLocations = [...locations, ...planned];

try {
  const output = JSON.stringify(updatedLocations, null, 2) + "\n";

  // Verify the serialized JSON before writing it.
  JSON.parse(output);

  fs.writeFileSync(dataPath, output, "utf8");
} catch (error) {
  try {
    fs.copyFileSync(backupPath, dataPath);
    stop(`Could not save updated data. Backup restored: ${error.message}`);
  } catch (restoreError) {
    stop(
      `Save failed: ${error.message}. Automatic restore also failed: ${restoreError.message}. Backup: ${backupPath}`
    );
  }
}

console.log(`\nBackup saved: ${path.relative(process.cwd(), backupPath)}`);
console.log(`Added ${planned.length} new location records.`);
console.log(`Total location records: ${updatedLocations.length}`);
console.log("Local SEO claims remain unverified until researched.");