import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data/locations.json");

if (!fs.existsSync(dataPath)) {
  throw new Error(
    "data/locations.json was not found. Run this from the project root."
  );
}

const locations = JSON.parse(fs.readFileSync(dataPath, "utf8"));

if (!Array.isArray(locations)) {
  throw new Error("data/locations.json must contain an array.");
}

// Karnataka districts 08–31.
// Existing location records are preserved.
// Harapanahalli is assigned only to Vijayanagara.

const districts = [
  {
    district: "Chamarajanagar",
    names: ["Gundlupet", "Yelandur", "Kollegal", "Hanur"]
  },
  {
    district: "Chikkaballapura",
    names: [
      "Gauribidanur",
      "Gudibanda",
      "Bagepalli",
      "Sidlaghatta",
      "Chintamani"
    ]
  },
  {
    district: "Chikkamagaluru",
    names: [
      "Sringeri",
      "Koppa",
      "Narasimharajapura",
      "Tarikere",
      "Birur",
      "Kadur",
      "Mudigere",
      "Kudremukh"
    ]
  },
  {
    district: "Chitradurga",
    names: [
      "Molakalmuru",
      "Challakere",
      "Holalkere",
      "Hosadurga",
      "Hiriyur"
    ]
  },
  {
    district: "Dakshina Kannada",
    names: [
      "Mangaluru",
      "Mulki",
      "Moodabidri",
      "Ullal",
      "Bantwal",
      "Beltangady",
      "Puttur",
      "Sullia"
    ]
  },
  {
    district: "Davanagere",
    names: ["Harihar", "Honnali", "Channagiri", "Jagalur"]
  },
  {
    district: "Dharwad",
    names: [
      "Hubballi",
      "Alnavar",
      "Navalgund",
      "Annigeri",
      "Kalghatgi",
      "Kundgol"
    ]
  },
  {
    district: "Gadag",
    names: [
      "Gadag-Betageri",
      "Nargund",
      "Ron",
      "Gajendragad",
      "Naregal",
      "Mulgund",
      "Shirhatti",
      "Lakshmeshwar",
      "Mundargi"
    ]
  },
  {
    district: "Hassan",
    names: [
      "Sakleshpur",
      "Belur",
      "Arsikere",
      "Alur",
      "Arkalgud",
      "Holenarsipur",
      "Channarayapatna"
    ]
  },
  {
    district: "Haveri",
    names: [
      "Shiggaon",
      "Bankapura",
      "Savanur",
      "Hangal",
      "Byadgi",
      "Hirekerur",
      "Ranebennur"
    ]
  },
  {
    district: "Kalaburagi",
    names: [
      "Aland",
      "Afzalpur",
      "Chincholi",
      "Sedam",
      "Chitapur",
      "Shahabad",
      "Wadi",
      "Jevargi"
    ]
  },
  {
    district: "Kodagu",
    names: ["Madikeri", "Somwarpet", "Kushalnagar", "Virajpet"]
  },
  {
    district: "Kolar",
    names: [
      "Srinivaspur",
      "Malur",
      "Bangarapet",
      "Robertsonpet (K.G.F.)",
      "Mulbagal"
    ]
  },
  {
    district: "Koppal",
    names: ["Yelburga", "Kushtagi", "Gangavathi"]
  },
  {
    district: "Mandya",
    names: [
      "Krishnarajpet",
      "Nagamangala",
      "Pandavapura",
      "Srirangapatna",
      "Maddur",
      "Malavalli"
    ]
  },
  {
    district: "Mysuru",
    names: [
      "Nanjangud",
      "Hunsur",
      "Krishnarajanagara (K.R. Nagar)",
      "Bannur",
      "Piriyapatna",
      "Heggadadevankote (H.D. Kote)",
      "Saragur (Sargur)",
      "Tirumakudal Narsipur (T. Narasipura)",
      "Hinkal",
      "Hootagalli",
      "Srirampura",
      "Elwala (Yelwal)",
      "Bogadi",
      "Belvata",
      "Koorgalli",
      "Kadakola",
      "Byrapura",
      "Gargeswari"
    ]
  },
  {
    district: "Raichur",
    names: [
      "Mudgal",
      "Lingasugur",
      "Devadurga",
      "Manvi",
      "Sindhanur",
      "Hatti Gold Mines"
    ]
  },
  {
    district: "Shivamogga",
    names: [
      "Sagar",
      "Sorab",
      "Siralkoppa",
      "Shikaripura",
      "Hosanagara",
      "Thirthahalli",
      "Bhadravati"
    ]
  },
  {
    district: "Tumakuru",
    names: [
      "Chikkanayakanahalli",
      "Sira",
      "Pavagada",
      "Madhugiri",
      "Koratagere",
      "Gubbi",
      "Tiptur",
      "Turuvekere",
      "Kunigal"
    ]
  },
  {
    district: "Udupi",
    names: ["Kundapura", "Saligrama", "Karkala"]
  },
  {
    district: "Uttara Kannada",
    names: [
      "Karwar",
      "Dandeli",
      "Haliyal",
      "Yellapur",
      "Mundgod",
      "Sirsi",
      "Ankola",
      "Kumta",
      "Siddapur",
      "Honnavar",
      "Bhatkal"
    ]
  },
  {
    district: "Vijayanagara",
    names: [
      "Hosapete",
      "Kotturu",
      "Kudligi",
      "Harapanahalli"
    ]
  },
  {
    district: "Vijayapura",
    names: [
      "Indi",
      "Sindgi",
      "Basavana Bagevadi",
      "Muddebihal",
      "Talikota"
    ]
  },
  {
    district: "Yadgiri",
    names: [
      "Yadgir",
      "Shorapur",
      "Shahapur",
      "Gurmitkal",
      "Bhimarayanagudi"
    ]
  }
];

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const routes = [
  "Bengaluru",
  "Chennai",
  "Coimbatore",
  "Hosur",
  "Krishnagiri",
  "Vellore",
  "Tirupattur",
  "Salem",
  "Erode",
  "Tiruppur",
  "Madurai",
  "Trichy",
  "Mysuru",
  "Mandya",
  "Tumakuru",
  "Hassan",
  "Mangaluru",
  "Hubballi",
  "Belagavi",
  "Hyderabad",
  "Vijayawada",
  "Kochi"
];

const goods = [
  "Household shifting goods",
  "Furniture and appliances",
  "Packaged commercial goods",
  "Agricultural produce",
  "Industrial materials",
  "Retail and wholesale supplies",
  "General transport cargo"
];

const existingSlugs = new Set(
  locations.map((item) =>
    String(item.slug || `${slugify(item.name)}-transport`).toLowerCase()
  )
);

const additions = [];
const seenSlugs = new Set();

for (const { district, names } of districts) {
  for (const name of names) {
    const slug = `${slugify(name)}-transport`;

    if (seenSlugs.has(slug) || existingSlugs.has(slug)) {
      console.log(`SKIPPED EXISTING: ${name} → ${slug}`);
      continue;
    }

    seenSlugs.add(slug);

    const nearbyAreas = names
      .filter((other) => slugify(other) !== slugify(name))
      .slice(0, 12);

    additions.push({
      name,
      slug,
      state: "Karnataka",
      district,
      routes: [...routes],
      returnRoutes: [...routes],
      nearbyAreas,
      famousFor: [
        `${name} local businesses and commercial activity`,
        `${district} regional trade and transport services`
      ],
      goods: [...goods]
    });
  }
}

if (additions.length === 0) {
  console.log("No new location entries were needed.");
  process.exit(0);
}

const backupPath = `${dataPath}.backup-karnataka-08-31-${new Date()
  .toISOString()
  .replace(/[:.]/g, "-")}`;

fs.copyFileSync(dataPath, backupPath);

fs.writeFileSync(
  dataPath,
  JSON.stringify([...locations, ...additions], null, 2) + "\n",
  "utf8"
);

console.log("\nKarnataka districts 08–31 data update complete.");
console.log(`District groups processed: ${districts.length}`);
console.log(`New location entries added: ${additions.length}`);
console.log("Existing location records preserved.");
console.log(`Backup saved: ${backupPath}`);
console.log("\nAdded slugs:");

for (const item of additions) {
  console.log(item.slug);
}