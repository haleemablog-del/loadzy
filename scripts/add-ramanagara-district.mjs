import fs from "node:fs";

const filePath = "data/locations.json";

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

const locations = JSON.parse(fs.readFileSync(filePath, "utf8"));

if (!Array.isArray(locations)) {
  console.error("Error: data/locations.json must contain a JSON array.");
  process.exit(1);
}

const slug = "ramanagara-district-transport";

// Check whether the district record already exists.
const existingRecord = locations.find((item) => item.slug === slug);

if (existingRecord) {
  console.log("Ramanagara district already exists.");

  console.log("Existing forward routes:", existingRecord.routes?.length ?? 0);
  console.log(
    "Existing return routes:",
    existingRecord.returnRoutes?.length ?? 0
  );

  console.log("No changes made.");
  process.exit(0);
}

const nearbyAreas = [
  "Channapatna",
  "Kanakapura",
  "Magadi",
  "Harohalli",
  "Bidadi",
  "Kumbalgodu",
  "Mysuru Road",
  "Bengaluru",
  "Mandya",
  "Mysuru",
  "Chikkaballapura",
];

const destinations = [
  "Bengaluru",
  "Mysuru",
  "Mandya",
  "Mangaluru",
  "Hubballi",
  "Belagavi",
  "Tumakuru",
  "Hassan",
  "Shivamogga",
  "Chennai",
  "Hosur",
  "Coimbatore",
  "Tiruppur",
  "Salem",
  "Hyderabad",
  "Pune",
  "Vijayapura",
  "Kalaburagi",
  "Raichur",
  "Kolar",
  "Chikkaballapura",
  "Davanagere",
  "Udupi",
  "Kochi",
  "Tirupati",
  "Dharmapuri",
  "Krishnagiri",
  "Vellore",
  "Tirupattur",
  "Kanyakumari",
];

const districtName = "Ramanagara";

// Build 25 unique forward routes, excluding self-routes.
const routes = [
  ...nearbyAreas.map((area) => `${districtName} to ${area}`),
  ...destinations
    .filter((city) => city.toLowerCase() !== districtName.toLowerCase())
    .map((city) => `${districtName} to ${city}`),
]
  .filter((route, index, array) => array.indexOf(route) === index)
  .slice(0, 25);

// Build 25 unique return routes.
const returnRoutes = [
  ...nearbyAreas.map((area) => `${area} to ${districtName}`),
  ...destinations
    .filter((city) => city.toLowerCase() !== districtName.toLowerCase())
    .map((city) => `${city} to ${districtName}`),
]
  .filter((route, index, array) => array.indexOf(route) === index)
  .slice(0, 25);

const record = {
  name: "Ramanagara",
  slug,
  state: "Karnataka",
  district: "Ramanagara",
  routes,
  returnRoutes,
  nearbyAreas,
  famousFor: [
    "Silk production and silk-related trade",
    "Coconut cultivation and agricultural trade",
    "Granite and building-material activity",
  ],
  goods: [
    "Silk and textile-related goods",
    "Coconuts and agricultural produce",
    "Granite and building materials",
    "Industrial goods",
    "Commercial goods",
    "Household shifting goods",
  ],
};

// Verify route counts before writing the file.
if (routes.length !== 25 || returnRoutes.length !== 25) {
  console.error("Route validation failed.");
  console.error("Forward routes:", routes.length);
  console.error("Return routes:", returnRoutes.length);
  process.exit(1);
}

// Save while preserving every existing location record.
const updatedLocations = [...locations, record];

fs.writeFileSync(
  filePath,
  JSON.stringify(updatedLocations, null, 2) + "\n",
  "utf8"
);

console.log("Ramanagara district added successfully.");
console.log("Total records:", updatedLocations.length);
console.log("Forward routes:", routes.length);
console.log("Return routes:", returnRoutes.length);
console.log("Page slug:", slug);