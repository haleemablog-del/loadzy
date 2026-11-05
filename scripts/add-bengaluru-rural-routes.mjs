import fs from "node:fs";

const file = "data/locations.json";
const locations = JSON.parse(fs.readFileSync(file, "utf8"));

const districtName = "Bengaluru Rural";

const commonRoutes = [
  "Bengaluru",
  "Devanahalli",
  "Doddaballapura",
  "Hoskote",
  "Nelamangala",
  "Chennai",
  "Mysuru",
  "Tumakuru",
  "Hosur",
  "Krishnagiri",
  "Vellore",
  "Salem",
  "Coimbatore",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Hubballi",
  "Mangaluru",
  "Tirupati",
  "Vijayawada",
  "Madurai",
  "Tiruppur",
  "Erode",
  "Kochi",
  "Belagavi",
];

const nearbyBySlug = {
  "devanahalli-transport": [
    "Vijayapura",
    "Kundana",
    "Kempegowda International Airport",
    "Hoskote",
    "Doddaballapura",
    "Nandagudi",
    "Sulibele",
    "Aerospace Park",
    "Devanahalli industrial areas",
    "Bengaluru Rural agricultural markets",
  ],
  "doddaballapura-transport": [
    "Devanahalli",
    "Tubagere",
    "Doddabelavangala",
    "Nelamangala",
    "Thyamagondlu",
    "Obadenahalli Industrial Area",
    "Doddaballapura Manufacturing Cluster",
    "Doddaballapura silk and textile trade",
    "Bengaluru",
    "Bengaluru Rural agricultural markets",
  ],
  "hoskote-transport": [
    "Sulibele",
    "Nandagudi",
    "Devanahalli",
    "Bengaluru",
    "Nelamangala",
    "Hoskote Factory and Commercial Belt",
    "Industrial and warehouse areas",
    "Agricultural markets",
    "Vijayapura",
    "Kundana",
  ],
  "nelamangala-transport": [
    "Sompura",
    "Thyamagondlu",
    "Channarayapatna",
    "Doddaballapura",
    "Hoskote",
    "Bengaluru",
    "Nelamangala Industrial and Logistics Corridor",
    "Manufacturing areas",
    "Warehousing areas",
    "Agricultural markets",
  ],
};

const districtLocations = locations.filter(
  (location) => location.district === districtName
);

if (districtLocations.length !== 24) {
  console.error(
    `STOP: Expected 24 Bengaluru Rural entries, found ${districtLocations.length}.`
  );
  process.exit(1);
}

const missingFields = [];

for (const location of districtLocations) {
  if (!Array.isArray(location.routes)) {
    location.routes = [...commonRoutes];
  }

  if (!Array.isArray(location.returnRoutes)) {
    location.returnRoutes = [...commonRoutes];
  }

  if (!Array.isArray(location.nearbyAreas)) {
    location.nearbyAreas =
      nearbyBySlug[location.slug] ??
      districtLocations
        .filter((other) => other.slug !== location.slug)
        .slice(0, 10)
        .map((other) => other.name);
  }

  location.routes = [...new Set(location.routes)].slice(0, 25);
  location.returnRoutes = [...new Set(location.returnRoutes)].slice(0, 25);
  location.nearbyAreas = [...new Set(location.nearbyAreas)].slice(0, 10);

  if (
    location.routes.length === 0 ||
    location.returnRoutes.length === 0 ||
    location.nearbyAreas.length === 0
  ) {
    missingFields.push(location.slug);
  }
}

if (missingFields.length > 0) {
  console.error("STOP: Some entries still lack route or nearby data:", missingFields);
  process.exit(1);
}

fs.writeFileSync(file, JSON.stringify(locations, null, 2) + "\n", "utf8");

console.log(`Updated ${districtLocations.length} Bengaluru Rural entries.`);
console.log("Maximum forward routes per entry: 25");
console.log("Maximum return routes per entry: 25");
console.log("Nearby areas added or preserved for every entry.");
console.log("Existing famousFor and goods fields were preserved.");