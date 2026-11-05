import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data/locations.json");

if (!fs.existsSync(dataPath)) {
  throw new Error("data/locations.json was not found. Run this from the project root.");
}

const locations = JSON.parse(fs.readFileSync(dataPath, "utf8"));

if (!Array.isArray(locations)) {
  throw new Error("data/locations.json must contain an array.");
}

const central = [
  "Majestic", "Kempegowda Bus Station", "City Railway Station",
  "Chickpet", "KR Market", "Shivajinagar", "Vasanth Nagar",
  "Seshadripuram", "Gandhinagar", "Cubbonpet", "Avenue Road",
  "Commercial Street", "Brigade Road", "MG Road", "Residency Road",
  "Richmond Town", "Langford Town", "Ashok Nagar", "Lavelle Road",
  "Infantry Road", "Cunningham Road", "Benson Town", "Frazer Town",
  "Cox Town", "Pulikeshi Nagar", "Bharathinagar", "Jayamahal",
  "Palace Guttahalli", "Sadashivanagar", "Malleshwaram",
  "Sampige Road", "Rajajinagar", "Okalipuram", "Srirampuram",
  "Vijayanagar", "Chamarajpet", "Azad Nagar", "Cottonpet", "Binnypet"
];

const west = [
  "Vijayanagar", "Nagarbhavi", "Kengeri", "Kengeri Satellite Town",
  "RR Nagar", "Rajarajeshwari Nagar", "Basaveshwaranagar",
  "Kamakshipalya", "Mahalakshmi Layout", "Nandini Layout",
  "Govindarajanagar", "Attiguppe", "Moodalapalya", "Nayandahalli",
  "Deepanjali Nagar", "Mysore Road", "Chandra Layout",
  "Sunkadakatte", "Magadi Road", "Herohalli", "Andrahalli",
  "Annapurneshwari Nagar", "Ullal", "Jnanabharathi", "Kumbalgodu",
  "Hosakerehalli", "Banashankari 3rd Stage", "BEML Layout",
  "Ideal Homes Township", "Pattanagere", "Kenchenahalli",
  "Bapuji Nagar", "RPC Layout", "Hampi Nagar", "Marenahalli"
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
  "Bengaluru", "Chennai", "Coimbatore", "Hosur", "Krishnagiri",
  "Vellore", "Tirupattur", "Salem", "Erode", "Tiruppur",
  "Madurai", "Trichy", "Tirunelveli", "Thoothukudi", "Dindigul",
  "Mysuru", "Mandya", "Tumakuru", "Hassan", "Mangaluru",
  "Hubballi", "Belagavi", "Hyderabad", "Vijayawada", "Kochi"
];

const goods = [
  "Household shifting goods",
  "Furniture and appliances",
  "Packaged commercial goods",
  "Retail and wholesale supplies",
  "Industrial materials",
  "General transport cargo"
];

const famousFor = [
  "Bengaluru urban residential and commercial activity",
  "Local shops, services and business establishments"
];

const existingSlugs = new Set(
  locations.map((item) => String(item.slug || `${slugify(item.name)}-transport`).toLowerCase())
);

const additions = [];
const seenNames = new Set();

for (const [district, names] of [
  ["Bengaluru Central", central],
  ["Bengaluru West", west]
]) {
  for (const name of names) {
    const slug = `${slugify(name)}-transport`;

    if (seenNames.has(slug) || existingSlugs.has(slug)) {
      console.log(`PRESERVED EXISTING: ${name} → ${slug}`);
      seenNames.add(slug);
      continue;
    }

    seenNames.add(slug);

    const nearbyAreas = [...new Set(
      [...central, ...west]
        .filter((other) => slugify(other) !== slugify(name))
    )].slice(0, 12);

    additions.push({
      name,
      slug,
      state: "Karnataka",
      district,
      routes: [...routes],
      returnRoutes: [...routes],
      nearbyAreas,
      famousFor: [...famousFor],
      goods: [...goods]
    });

    existingSlugs.add(slug);
  }
}

if (additions.length === 0) {
  console.log("No new location entries were needed.");
  process.exit(0);
}

const backupPath = `${dataPath}.backup-central-west-${new Date()
  .toISOString().replace(/[:.]/g, "-")}`;

fs.copyFileSync(dataPath, backupPath);
fs.writeFileSync(
  dataPath,
  JSON.stringify([...locations, ...additions], null, 2) + "\n",
  "utf8"
);

console.log("\nBengaluru Central & West data update complete.");
console.log(`New entries added: ${additions.length}`);
console.log(`Existing entries preserved.`);
console.log(`Backup saved: ${backupPath}`);
console.log("\nAdded slugs:");
for (const item of additions) console.log(item.slug);