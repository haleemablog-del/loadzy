import fs from "node:fs";
import path from "node:path";

const filePath = path.resolve("data/locations.json");
const backupPath = path.resolve("data/locations.backup.json");

if (!fs.existsSync(filePath)) {
  console.error("ERROR: data/locations.json was not found.");
  process.exit(1);
}

const locations = JSON.parse(fs.readFileSync(filePath, "utf8"));

if (!Array.isArray(locations) || locations.length === 0) {
  console.error("ERROR: locations.json must contain a non-empty array.");
  process.exit(1);
}

// Suggested freight destinations.
// Review these destinations before publishing.
const destinations = [
  "Bengaluru",
  "Chennai",
  "Mysuru",
  "Hubballi",
  "Hyderabad",
  "Coimbatore",
  "Salem",
  "Erode",
  "Tiruppur",
  "Madurai",
  "Vellore",
  "Tirupati",
  "Vijayawada",
  "Visakhapatnam",
  "Mumbai",
  "Pune",
  "Kochi",
  "Thiruvananthapuram",
  "Mangaluru",
  "Belagavi",
  "Davangere",
  "Tumakuru",
  "Hosur",
  "Krishnagiri",
  "Tiruchirappalli",
  "Kozhikode",
  "Warangal",
  "Nagpur",
  "Ahmedabad",
  "Delhi"
];

// Location-specific nearby areas.
// These are suggestions to review, not automatically verified claims.
const nearbyAreasBySlug = {
  "kr-market-transport": [
    "Chickpet", "Kalasi Palya", "City Market", "Avenue Road",
    "Cottonpet", "Cubbonpet", "Basavanagudi", "Chamrajpet",
    "Majestic", "Binnypet"
  ],
  "chickpet-wholesale-market-transport": [
    "KR Market", "Avenue Road", "Cottonpet", "Cubbonpet",
    "Balepet", "Nagarathpete", "City Market", "Majestic",
    "Binnypet", "Chamarajpet"
  ],
  "cottonpet-wholesale-area-transport": [
    "Chickpet", "KR Market", "Binnypet", "Majestic",
    "Avenue Road", "Balepet", "City Market", "Cubbonpet",
    "Chamrajpet", "Nagarathpete"
  ],
  "avenue-road-commercial-area-transport": [
    "Chickpet", "KR Market", "Cubbonpet", "Balepet",
    "Nagarathpete", "Cottonpet", "City Market", "Majestic",
    "Binnypet", "Chamrajpet"
  ],
  "sjp-road-commercial-market-transport": [
    "KR Market", "Avenue Road", "Chickpet", "Cubbonpet",
    "Cottonpet", "Balepet", "Nagarathpete", "City Market",
    "Majestic", "Binnypet"
  ],
  "whitefield-commercial-area-transport": [
    "ITPL", "Hope Farm", "Kadugodi", "Brookefield",
    "Hagadur", "Varthur", "Seegehalli", "Nallurhalli",
    "Pattandur Agrahara", "Whitefield"
  ],
  "marathahalli-commercial-area-transport": [
    "Whitefield", "Brookefield", "Outer Ring Road", "Bellandur",
    "Doddanekundi", "Kundalahalli", "Munnekollal", "Varthur",
    "Kadubeesanahalli", "Kaggadasapura"
  ],
  "international-tech-park-bengaluru-transport": [
    "Whitefield", "Hope Farm", "Kadugodi", "Brookefield",
    "Hagadur", "Varthur", "Nallurhalli", "ITPL",
    "Pattandur Agrahara", "Seegehalli"
  ],
  "whitefield-epip-zone-transport": [
    "ITPL", "Whitefield", "Hope Farm", "Kadugodi",
    "Brookefield", "Hagadur", "Varthur", "Nallurhalli",
    "Seegehalli", "Pattandur Agrahara"
  ],
  "bagmane-tech-park-transport": [
    "CV Raman Nagar", "Kaggadasapura", "Old Airport Road",
    "Indiranagar", "Doddanekundi", "Mahadevapura",
    "Marathahalli", "Baiyappanahalli", "DRDO Township",
    "Vignan Nagar"
  ],
  "cessna-business-park-transport": [
    "Outer Ring Road", "Marathahalli", "Bellandur",
    "Kadubeesanahalli", "Devarabisanahalli", "Doddanekundi",
    "Kundalahalli", "Panathur", "Munnekollal", "Varthur"
  ],
  "wipro-technology-campus-transport": [
    "Sarjapur Road", "Electronic City", "Bellandur",
    "HSR Layout", "Bommanahalli", "Koramangala",
    "Kaikondrahalli", "Doddakannelli", "Carmelaram",
    "Harlur"
  ],
  "biocon-campus-transport": [
    "Bommasandra", "Jigani", "Electronic City",
    "Hosur Road", "Chandapura", "Hebbagodi",
    "Attibele", "Anekal", "Hosa Road", "Singasandra"
  ]
};

function uniqueStrings(values) {
  const seen = new Set();

  return values.filter((value) => {
    if (typeof value !== "string" || !value.trim()) {
      return false;
    }

    const key = value.trim().toLowerCase();

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function expandRoutes(existingRoutes, locationName) {
  const existing = Array.isArray(existingRoutes)
    ? existingRoutes
    : [];

  // Keep existing routes first, then add destinations until there
  // are 25 unique entries. Skip the location itself if applicable.
  const candidates = [
    ...existing,
    ...destinations.filter(
      (destination) =>
        destination.toLowerCase() !== locationName.toLowerCase()
    )
  ];

  return uniqueStrings(candidates).slice(0, 25);
}

// Back up the original file before changing anything.
fs.copyFileSync(filePath, backupPath);

const updated = locations.map((location) => {
  const slug = String(location.slug || "");
  const nearbySuggestions = nearbyAreasBySlug[slug];

  if (!nearbySuggestions) {
    console.warn(
      `WARNING: No nearby-area list configured for ${slug}.`
    );
  }

  return {
    ...location,
    routes: expandRoutes(location.routes, location.name),
    returnRoutes: expandRoutes(
      location.returnRoutes,
      location.name
    ),
    nearbyAreas: uniqueStrings([
      ...(Array.isArray(location.nearbyAreas)
        ? location.nearbyAreas
        : []),
      ...(nearbySuggestions || [])
    ]).slice(0, 10)
  };
});

fs.writeFileSync(
  filePath,
  JSON.stringify(updated, null, 2) + "\n",
  "utf8"
);

console.log("Location data expansion complete.");
console.log(`Locations processed: ${updated.length}`);
console.log(`Backup saved to: ${backupPath}`);

for (const location of updated) {
  console.log(
    `${location.slug}: ` +
    `${location.routes.length} forward routes, ` +
    `${location.returnRoutes.length} return routes, ` +
    `${location.nearbyAreas.length} nearby areas`
  );
}