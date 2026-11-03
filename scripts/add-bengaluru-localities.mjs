 import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data/locations.json");

if (!fs.existsSync(dataPath)) {
  throw new Error(`Cannot find ${dataPath}. Run this script from the LOADZY project root.`);
}

const existing = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const groups = {
  "Bengaluru South": [
    "Jayanagar", "JP Nagar", "Banashankari", "BTM Layout",
    "Basavanagudi", "Kumaraswamy Layout", "Uttarahalli", "Arekere",
    "Hulimavu", "Begur", "Gottigere", "Anjanapura", "Konanakunte",
    "Doddakallasandra", "Talaghattapura", "Kanakapura Road",
    "Padmanabhanagar", "Girinagar", "Srinagar", "Kathriguppe",
    "Chikkalasandra", "ISRO Layout", "RBI Layout", "Yelachenahalli",
    "Puttenahalli", "Sarakki", "Mico Layout", "Hongasandra",
    "Bommanahalli", "HSR Layout", "Agara", "Koramangala", "Madiwala",
    "Adugodi", "Wilson Garden", "Lalbagh", "Dairy Circle",
    "Bannerghatta Road", "Hulimavu Gate", "Arekere Gate",
    "JP Nagar 1st Phase", "JP Nagar 2nd Phase", "JP Nagar 3rd Phase",
    "JP Nagar 4th Phase", "JP Nagar 5th Phase", "JP Nagar 6th Phase",
    "JP Nagar 7th Phase", "JP Nagar 8th Phase", "JP Nagar 9th Phase"
  ],
  "Bengaluru North": [
    "Yelahanka", "Yelahanka New Town", "Yelahanka Satellite Town",
    "Attur", "Jakkur", "Thanisandra", "Byatarayanapura", "Kodigehalli",
    "Vidyaranyapura", "Doddabommasandra", "Kuvempu Nagar", "Hebbal",
    "Amruthahalli", "Sahakara Nagar", "Sanjaynagar", "RT Nagar",
    "Nagavara", "HBR Layout", "Kalyan Nagar", "Hennur", "Jalahalli",
    "Jalahalli East", "Jalahalli West", "Mathikere", "Peenya",
    "Peenya Industrial Area", "Dasarahalli", "Bagalagunte",
    "T. Dasarahalli", "Chikkabanavara", "Soladevanahalli",
    "Nandini Layout", "Lottegollahalli", "Ganganagar", "JC Nagar",
    "Sultanpalya", "Kaval Byrasandra", "Vishwanatha Nagenahalli",
    "Manorayanapalya", "Devarajeevanahalli", "Kadugondanahalli",
    "Kushalnagar", "Muneshwara Nagar", "Lingarajapuram", "Banaswadi",
    "Kammanahalli", "Babusapalya", "Horamavu"
  ],
  "Bengaluru East": [
    "KR Puram", "Mahadevapura", "Whitefield", "Hoodi", "ITPL",
    "Brookefield", "Marathahalli", "Varthur", "Bellandur", "Kadugodi",
    "Channasandra", "Ramamurthy Nagar", "TC Palya", "Battarahalli",
    "Bidarahalli", "Hoskote Road", "Doddanekkundi", "Garudachar Palya",
    "AECS Layout", "Kundalahalli", "Munnekollal", "Panathur", "Gunjur",
    "Sarjapur Road", "CV Raman Nagar", "Kaggadasapura", "Malleshpalya",
    "Benniganahalli", "Basavanapura", "Devasandra", "A Narayanapura",
    "HAL", "HAL 2nd Stage", "HAL 3rd Stage", "Jeevan Bima Nagar",
    "Indiranagar", "Domlur", "Kodihalli", "Murugeshpalya",
    "Old Airport Road", "Ulsoor", "Baiyappanahalli", "New Thippasandra",
    "Vignan Nagar", "Hoodi Circle"
  ]
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normalizeName = (value) =>
  value.replace(/\s+/g, " ").trim().toLowerCase();

const existingNames = new Set(
  existing.map((item) => normalizeName(item.name))
);
const existingSlugs = new Set(
  existing.map((item) => String(item.slug).toLowerCase())
);

const routes = [
  "Bengaluru", "Chennai", "Mysuru", "Hosur", "Krishnagiri",
  "Coimbatore", "Salem", "Tiruppur", "Erode", "Madurai",
  "Vellore", "Tirupati", "Hyderabad", "Vijayawada",
  "Visakhapatnam", "Mumbai", "Pune", "Kochi", "Mangaluru",
  "Hubballi", "Belagavi", "Tumakuru", "Davangere",
  "Tiruchirappalli", "Nellore"
];

const additions = [];
const conflicts = [];

for (const [group, names] of Object.entries(groups)) {
  for (const name of names) {
    const slug = `${slugify(name)}-transport`;
    const nameKey = normalizeName(name);

    if (existingNames.has(nameKey) || existingSlugs.has(slug)) {
      conflicts.push({ name, slug, group });
      continue;
    }

    additions.push({
      name,
      slug,
      state: "Karnataka",
      district: group,
      routes: [...routes],
      returnRoutes: [...routes],
      nearbyAreas: names
  .filter((area) => normalizeName(area) !== nameKey)
  .slice(0, 12),
      famousFor: [
        `${group} neighbourhood and local commercial activity`,
        "Residential, retail and service businesses"
      ],
      goods: [
        "Household shifting goods",
        "Furniture and appliances",
        "Packaged commercial goods",
        "Retail supplies",
        "General transport cargo"
      ]
    });

    existingNames.add(nameKey);
    existingSlugs.add(slug);
  }
}

console.log("Requested location names:", Object.values(groups).flat().length);
console.log("New locations ready:", additions.length);
console.log("Existing-name or slug conflicts skipped:", conflicts.length);

if (conflicts.length) {
  console.log("\nSkipped conflicts:");
  for (const item of conflicts) {
    console.log(`- ${item.name} | ${item.slug} | ${item.group}`);
  }
}

if (additions.length === 0) {
  console.log("\nNo new entries to add. Original file was not changed.");
  process.exit(0);
}

const backupPath = `${dataPath}.backup-${new Date()
  .toISOString()
  .replace(/[:.]/g, "-")}`;

fs.copyFileSync(dataPath, backupPath);

const updated = [...existing, ...additions];
fs.writeFileSync(dataPath, `${JSON.stringify(updated, null, 2)}\n`, "utf8");

console.log("\nAdded location entries:", additions.length);
console.log("Updated total entries:", updated.length);
console.log("Backup saved to:", backupPath);
console.log("\nData updated. No page folders were generated or overwritten.");