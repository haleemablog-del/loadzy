import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data/locations.json");

if (!fs.existsSync(dataPath)) {
  throw new Error("Cannot find data/locations.json. Run from project root.");
}

const locations = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const requestedNames = [
  "Anekal",
  "Attibele",
  "Chandapura",
  "Bommasandra Industrial Area",
  "Jigani",
  "Electronic City Phase 1",
  "Electronic City Phase 2",
  "Hebbagodi",
  "Singasandra",
  "Begur",
  "Bannerghatta",
  "Hulimangala",
  "Hennagara",
  "Haragadde",
  "Bommasandra",
  "Muthanallur",
  "Suryanagar",
  "Neeladri Nagar",
  "Konappana Agrahara",
  "Doddathoguru",
  "Veerasandra",
  "Bettadasanapura",
  "Kammasandra",
  "Ananth Nagar",
  "Huskur Road",
  "Rayasandra",
  "Gollahalli",
  "Chandapura Circle",
  "Attibele Industrial Area",
];

const normalizeName = (value) =>
  String(value ?? "").replace(/\s+/g, " ").trim().toLowerCase();

const makeSlug = (name) =>
  `${normalizeName(name)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}-transport`;

const existingNames = new Set(
  locations.map((item) => normalizeName(item.name))
);

const existingSlugs = new Set(
  locations.map((item) => item.slug)
);

const targetDistricts = [
  "Anekal & Electronic City",
];

const routes = [
  "Bengaluru",
  "Chennai",
  "Hosur",
  "Krishnagiri",
  "Mysuru",
  "Coimbatore",
  "Salem",
  "Tiruppur",
  "Erode",
  "Madurai",
  "Vellore",
  "Tirupati",
  "Hyderabad",
  "Vijayawada",
  "Mumbai",
  "Pune",
  "Kochi",
  "Mangaluru",
  "Tumakuru",
  "Tiruchirappalli",
  "Nellore",
  "Hubballi",
  "Belagavi",
  "Davangere",
  "Visakhapatnam",
];

const goods = [
  "Household shifting goods",
  "Furniture and appliances",
  "Industrial materials and machinery",
  "Electronic and electrical goods",
  "Factory supplies and components",
  "Packaged commercial goods",
  "Retail supplies",
  "General transport cargo",
];

const famousFor = [
  "Local residential and commercial activity",
  "Goods transport, truck booking and logistics requirements",
];

const newLocations = [];

for (const name of requestedNames) {
  const slug = makeSlug(name);

  if (
    existingNames.has(normalizeName(name)) ||
    existingSlugs.has(slug)
  ) {
    console.log(`PRESERVED EXISTING: ${name} → ${slug}`);
    continue;
  }

  const nearbyAreas = requestedNames
    .filter(
      (other) => normalizeName(other) !== normalizeName(name)
    )
    .slice(0, 12);

  newLocations.push({
    name,
    slug,
    state: "Karnataka",
    district: "Bengaluru South",
    routes: [...routes],
    returnRoutes: [...routes],
    nearbyAreas,
    famousFor: [...famousFor],
    goods: [...goods],
  });

  existingNames.add(normalizeName(name));
  existingSlugs.add(slug);
}

if (newLocations.length === 0) {
  console.log("No new locations to add.");
  process.exit(0);
}

const backupPath = `${dataPath}.backup-anekal-${new Date()
  .toISOString()
  .replace(/[:.]/g, "-")}`;

fs.copyFileSync(dataPath, backupPath);

locations.push(...newLocations);

fs.writeFileSync(
  dataPath,
  `${JSON.stringify(locations, null, 2)}\n`,
  "utf8"
);

console.log("");
console.log("Anekal & Electronic City data update complete.");
console.log("New locations added:", newLocations.length);
console.log("Existing locations preserved.");
console.log("Backup saved to:", backupPath);
console.log("Page folders were NOT created or overwritten.");
console.log("");
console.log("Added slugs:");

for (const location of newLocations) {
  console.log(location.slug);
}