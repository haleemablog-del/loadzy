import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data", "locations.json");
const backupDir = path.resolve("backups", "location-data");
const dryRun = process.argv.includes("--dry-run");

const BATCH_TAG = "telangana-2026-11";
const MAX_ROUTES = 25;
const MAX_NEARBY_AREAS = 10;

// Telangana locations grouped by district.
const districts = {
  "Adilabad": [
    "Adilabad", "Boath", "Ichoda", "Bela", "Jainad",
    "Talamadugu", "Mavala", "Gudihathnoor", "Neradigonda",
    "Utnoor", "Indervelly", "Narnoor", "Jainoor",
    "Sirpur", "Tamsi"
  ],
  "Bhadradri Kothagudem": [
    "Kothagudem", "Palwancha", "Manuguru", "Bhadrachalam",
    "Yellandu", "Aswaraopeta", "Chunchupalli", "Sujathanagar",
    "Laxmidevipalli", "Julurpad", "Burgampahad",
    "Dummugudem", "Pinapaka", "Cherla"
  ],
  "Hanamkonda": [
    "Hanamkonda", "Kazipet", "Hasanparthy", "Velair",
    "Dharmasagar", "Inavole", "Elkathurthy", "Bheemadevarpalle"
  ],
  "Hyderabad": [
    "Hyderabad", "Secunderabad", "Charminar", "Mehdipatnam",
    "Kukatpally", "Miyapur", "Kondapur", "Gachibowli",
    "Madhapur", "HITEC City", "LB Nagar", "Uppal",
    "Dilsukhnagar", "Ameerpet", "Begumpet", "Balanagar",
    "Jeedimetla", "Shamshabad", "Rajendranagar",
    "Kompally", "Patancheru", "Chandanagar"
  ],
  "Jagtial": [
    "Jagtial", "Metpally", "Korutla", "Dharmapuri",
    "Raikal", "Sarangapur", "Mallial", "Pegadapalli",
    "Gollapalli", "Velgatoor"
  ],
  "Jangaon": [
    "Jangaon", "Ghanpur Station", "Narmetta", "Bachannapet",
    "Devaruppula", "Lingalaghanpur", "Zaffergadh",
    "Chilpur", "Kodakandla", "Palakurthi"
  ],
  "Jayashankar Bhupalpally": [
    "Bhupalpally", "Ghanpur Mulug", "Kataram", "Mahadevpur",
    "Maha Mutharam", "Malharrao", "Chityal", "Regonda",
    "Tekumatla", "Mogullapalle"
  ],
  "Jogulamba Gadwal": [
    "Gadwal", "Alampur", "Ieeja", "Waddepalle",
    "Manopad", "Dharur", "Undavelli", "Rajoli",
    "Kaloor Thimmandoddi", "Ghattu"
  ],
  "Kamareddy": [
    "Kamareddy", "Banswada", "Yellareddy", "Bibipet",
    "Domakonda", "Bhiknoor", "Machareddy", "Lingampet",
    "Nizamsagar", "Pitlam", "Jukkal"
  ],
  "Karimnagar": [
    "Karimnagar", "Huzurabad", "Jammikunta", "Choppadandi",
    "Manakondur", "Thimmapur", "Ganneruvaram", "Gangadhara",
    "Ramadugu", "Kothapalli", "Veenavanka", "Saidapur"
  ],
  "Khammam": [
    "Khammam", "Madhira", "Wyra", "Sathupalli",
    "Kallur", "Nelakondapalli", "Thirumalayapalem",
    "Bonakal", "Kusumanchi", "Konijerla", "Enkoor"
  ],
  "Kumuram Bheem Asifabad": [
    "Asifabad", "Kagaznagar", "Sirpur", "Kerameri",
    "Tiryani", "Wankidi", "Rebbena", "Dahegaon",
    "Bejjur", "Chintalamanepalli", "Jainoor"
  ],
  "Mahabubabad": [
    "Mahabubabad", "Thorrur", "Dornakal", "Maripeda",
    "Narsimhulapet", "Kuravi", "Kesamudram",
    "Garla", "Bayyaram", "Gudur", "Gangaram"
  ],
  "Mahabubnagar": [
    "Mahabubnagar", "Jadcherla", "Bhoothpur", "Devarkadra",
    "Narayanpet Road", "Addakal", "Hanwada", "Koilkonda",
    "Midjil", "Moosapet", "Nawabpet"
  ],
  "Mancherial": [
    "Mancherial", "Bellampalli", "Mandamarri", "Luxettipet",
    "Chennur", "Naspur", "Hajipur", "Dandepalli",
    "Jaipur", "Kotapalli", "Jannaram"
  ],
  "Medak": [
    "Medak", "Narsapur", "Ramayampet", "Toopran",
    "Papannapet", "Shankarampet", "Chegunta",
    "Kulcharam", "Havelighanpur", "Tekmal"
  ],
  "Medchal Malkajgiri": [
    "Medchal", "Malkajgiri", "Keesara", "Ghatkesar",
    "Kompally", "Dundigal", "Shamirpet", "Alwal",
    "Quthbullapur", "Bachupally", "Kukatpally",
    "Uppal", "Boduppal", "Nizampet"
  ],
  "Mulugu": [
    "Mulugu", "Venkatapur", "Eturnagaram", "Mangapet",
    "Tadvai", "Govindaraopet", "Kannaigudem",
    "Sammakka Saralamma area"
  ],
  "Nagarkurnool": [
    "Nagarkurnool", "Achampet", "Kalwakurthy", "Kollapur",
    "Amrabad", "Bijinapally", "Tadoor", "Telkapally",
    "Urkonda", "Vangoor", "Lingal"
  ],
  "Nalgonda": [
    "Nalgonda", "Miryalaguda", "Devarakonda", "Nakrekal",
    "Chityal", "Huzurnagar", "Suryapet Road",
    "Munugode", "Narketpally", "Marriguda", "Anumula"
  ],
  "Narayanpet": [
    "Narayanpet", "Makthal", "Kosgi", "Maddur",
    "Dhanwada", "Marikal", "Utkoor", "Krishna"
  ],
  "Nirmal": [
    "Nirmal", "Bhainsa", "Khanapur", "Mudhole",
    "Dilawarpur", "Lokeshwaram", "Kuntala",
    "Mamda", "Sarangapur", "Soan"
  ],
  "Nizamabad": [
    "Nizamabad", "Armoor", "Bodhan", "Balkonda",
    "Bheemgal", "Dichpally", "Navipet", "Yedpally",
    "Jakranpally", "Mortad", "Varni", "Rudrur"
  ],
  "Peddapalli": [
    "Peddapalli", "Ramagundam", "Godavarikhani",
    "Sultanabad", "Manthani", "Dharmaram",
    "Julapalli", "Odela", "Eligaid", "Palakurthy"
  ],
  "Rajanna Sircilla": [
    "Sircilla", "Vemulawada", "Gambhiraopet",
    "Ellareddipet", "Mustabad", "Chandurthi",
    "Konaraopeta", "Yellareddipet"
  ],
  "Rangareddy": [
    "Shadnagar", "Ibrahimpatnam", "Chevella",
    "Shamshabad", "Maheshwaram", "Kandukur",
    "Moinabad", "Shankarpally", "Amangal",
    "Kothur", "Farooqnagar", "Rajendranagar"
  ],
  "Sangareddy": [
    "Sangareddy", "Patancheru", "Zaheerabad",
    "Sadasivpet", "Andole", "Jogipet", "Narayankhed",
    "Jinnaram", "Gummadidala", "Ameenpur",
    "Isnapur", "Rudraram"
  ],
  "Siddipet": [
    "Siddipet", "Gajwel", "Dubbak", "Husnabad",
    "Cherial", "Nangnoor", "Chinnakodur",
    "Maddur", "Doultabad", "Jagdevpur"
  ],
  "Suryapet": [
    "Suryapet", "Kodad", "Huzurnagar", "Tirumalagiri",
    "Neredcherla", "Thungathurthy", "Mothey",
    "Chivvemla", "Penpahad", "Maddirala"
  ],
  "Vikarabad": [
    "Vikarabad", "Tandur", "Parigi", "Kodangal",
    "Pargi", "Doma", "Bantwaram", "Pudur",
    "Marpalle", "Yalal", "Basheerabad"
  ],
  "Wanaparthy": [
    "Wanaparthy", "Kothakota", "Pebbair",
    "Atmakur", "Amarchinta", "Gopalpeta",
    "Pangal", "Revally", "Srirangapur"
  ],
  "Warangal": [
    "Warangal", "Narsampet", "Wardhannapet",
    "Parkal", "Nekkonda", "Duggondi",
    "Raiparthy", "Sangem", "Geesugonda",
    "Chennaraopet", "Khanapur"
  ],
  "Yadadri Bhuvanagiri": [
    "Bhongir", "Yadagirigutta", "Choutuppal",
    "Alair", "Mothkur", "Ramannapet",
    "Bommalaramaram", "Bibinagar", "Pochampally",
    "Valigonda", "Addaguduru"
  ]
};

// Interstate and Telangana transport hubs.
const destinations = [
  "Hyderabad", "Warangal", "Karimnagar", "Nizamabad",
  "Khammam", "Nalgonda", "Suryapet", "Adilabad",
  "Nirmal", "Mancherial", "Ramagundam", "Peddapalli",
  "Siddipet", "Medak", "Sangareddy", "Vikarabad",
  "Mahabubnagar", "Nagarkurnool", "Wanaparthy",
  "Gadwal", "Narayanpet", "Kothagudem", "Bhadrachalam",
  "Jagtial", "Sircilla", "Kamareddy", "Bhongir",
  "Jangaon", "Mahabubabad", "Mulugu", "Bengaluru",
  "Chennai", "Vijayawada", "Visakhapatnam",
  "Tirupati", "Kurnool", "Guntur", "Ongole",
  "Coimbatore", "Salem", "Pune", "Mumbai"
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

const locations = JSON.parse(fs.readFileSync(dataPath, "utf8"));

if (!Array.isArray(locations)) {
  stop("data/locations.json must contain an array.");
}

const existingSlugs = new Set(
  locations.map((location) =>
    String(
      location.slug || `${slugify(location.name)}-transport`
    ).toLowerCase()
  )
);

const planned = [];
const plannedSlugs = new Set();
const nameCounts = new Map();

// Count repeated names across Telangana districts.
for (const names of Object.values(districts)) {
  for (const name of names) {
    const key = slugify(name);
    nameCounts.set(key, (nameCounts.get(key) || 0) + 1);
  }
}

// Create each Telangana location exactly once.
for (const [district, rawNames] of Object.entries(districts)) {
  const names = [
    ...new Map(rawNames.map((name) => [slugify(name), name])).values()
  ];

  for (const name of names) {
    const nameKey = slugify(name);
    const baseSlug = `${nameKey}-transport`;

    const needsDistrictSlug =
      existingSlugs.has(baseSlug) ||
      plannedSlugs.has(baseSlug) ||
      nameCounts.get(nameKey) > 1;

    const slug = needsDistrictSlug
      ? `${nameKey}-${slugify(district)}-transport`
      : baseSlug;

    if (existingSlugs.has(slug) || plannedSlugs.has(slug)) {
      console.log(`SKIP existing: ${name} (${slug})`);
      continue;
    }

    const routeDestinations = [...new Set(destinations)]
      .filter((destination) => slugify(destination) !== nameKey)
      .slice(0, MAX_ROUTES);

    if (routeDestinations.length !== MAX_ROUTES) {
      stop(`${name}: could not create exactly 25 unique destinations.`);
    }

    const routes = routeDestinations.map(
      (destination) => `${name} to ${destination}`
    );

    const returnRoutes = routeDestinations.map(
      (destination) => `${destination} to ${name}`
    );

    plannedSlugs.add(slug);

    planned.push({
      name,
      slug,
      state: "Telangana",
      district,
      routes,
      returnRoutes,
      nearbyAreas: [],
      famousFor: [],
      goods: [],
      seoVerificationStatus: "needs-verification",
      batchTag: BATCH_TAG
    });
  }
}

// Add 8 separate district-level landing pages.
// Existing town/locality records are preserved.
const districtPages = [
  "Bhadradri Kothagudem",
  "Jayashankar Bhupalpally",
  "Jogulamba Gadwal",
  "Kumuram Bheem Asifabad",
  "Medchal Malkajgiri",
  "Rajanna Sircilla",
  "Rangareddy",
  "Yadadri Bhuvanagiri"
];

for (const district of districtPages) {
  const slug = `${slugify(district)}-transport`;

  if (existingSlugs.has(slug) || plannedSlugs.has(slug)) {
    console.log(`SKIP existing district page: ${district} (${slug})`);
    continue;
  }

  const routeDestinations = [...new Set(destinations)]
    .filter(destination => slugify(destination) !== slugify(district))
    .slice(0, MAX_ROUTES);

  if (routeDestinations.length !== MAX_ROUTES) {
    stop(`${district}: could not create exactly 25 unique destinations.`);
  }

  plannedSlugs.add(slug);

  planned.push({
    name: district,
    slug,
    state: "Telangana",
    district,
    routes: routeDestinations.map(
      destination => `${district} to ${destination}`
    ),
    returnRoutes: routeDestinations.map(
      destination => `${destination} to ${district}`
    ),
    nearbyAreas: [],
    famousFor: [],
    goods: [],
    seoVerificationStatus: "needs-verification",
    batchTag: `${BATCH_TAG}-district-pages`
  });

  console.log(`PLANNED DISTRICT PAGE: ${district} (${slug})`);
}

// Nearby links must resolve using the current template's simple URL format.
const allSlugs = new Set([...existingSlugs, ...plannedSlugs]);

for (const location of planned) {
  const names = districts[location.district] || [];

  location.nearbyAreas = [
    ...new Map(names.map((name) => [slugify(name), name])).values()
  ]
    .filter((name) => slugify(name) !== slugify(location.name))
    .filter((name) => allSlugs.has(`${slugify(name)}-transport`))
    .slice(0, MAX_NEARBY_AREAS);
}

// Validate the complete batch before changing files.
const errors = [];

for (const location of planned) {
  if (location.state !== "Telangana") {
    errors.push(`${location.name}: wrong state`);
  }

  if (location.routes.length !== MAX_ROUTES) {
    errors.push(`${location.name}: incorrect forward route count`);
  }

  if (location.returnRoutes.length !== MAX_ROUTES) {
    errors.push(`${location.name}: incorrect return route count`);
  }

  if (location.nearbyAreas.length > MAX_NEARBY_AREAS) {
    errors.push(`${location.name}: too many nearby areas`);
  }

  for (const nearby of location.nearbyAreas) {
    if (!allSlugs.has(`${slugify(nearby)}-transport`)) {
      errors.push(`${location.name}: missing nearby page ${nearby}`);
    }
  }
}

const telanganaDistricts = new Set(
  planned.map((location) => location.district)
);

console.log("\n========== TELANGANA BATCH SUMMARY ==========");
console.log(`Existing records: ${locations.length}`);
console.log(`New records planned: ${planned.length}`);
console.log(`Districts represented: ${telanganaDistricts.size}`);
console.log(`Batch tag: ${BATCH_TAG}`);
console.log(`Forward routes per location: ${MAX_ROUTES}`);
console.log(`Return routes per location: ${MAX_ROUTES}`);
console.log(`Maximum nearby areas: ${MAX_NEARBY_AREAS}`);

if (errors.length > 0) {
  console.error("\nVALIDATION ERRORS:");
  errors.forEach((error) => console.error(`- ${error}`));
  stop(`${errors.length} validation issue(s). No files changed.`);
}

if (dryRun) {
  console.log("\nDRY RUN: No files changed.");

  for (const location of planned) {
    console.log(
      `Telangana | ${location.district} | ${location.name} | ${location.slug} | forward: ${location.routes.length} | return: ${location.returnRoutes.length} | nearby: ${location.nearbyAreas.length}`
    );
  }

  process.exit(0);
}

if (planned.length === 0) {
  stop("No new Telangana records were planned. No files changed.");
}

// Create a backup before writing.
fs.mkdirSync(backupDir, { recursive: true });

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

const backupPath = path.join(
  backupDir,
  `locations-before-telangana-${timestamp}.json`
);

fs.copyFileSync(dataPath, backupPath);

const updated = [...locations, ...planned];

fs.writeFileSync(
  dataPath,
  `${JSON.stringify(updated, null, 2)}\n`,
  "utf8"
);

console.log(`\nBackup created: ${backupPath}`);
console.log(`Added ${planned.length} Telangana records.`);
console.log(`Updated: ${dataPath}`);