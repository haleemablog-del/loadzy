import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data/locations.json");
const backupPath = `${dataPath}.backup-expand-district-routes-${new Date()
  .toISOString()
  .replace(/[:.]/g, "-")}`;

const locations = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const districts = locations.filter(
  (item) =>
    item.state === "Karnataka" &&
    item.slug?.endsWith("-district-transport")
);

if (districts.length === 0) {
  console.log("No Karnataka district records found. Nothing changed.");
  process.exit(0);
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function makeRoutes(district) {
  const towns = unique([
    ...(district.routes || []),
    ...(district.returnRoutes || []),
    ...(district.nearbyAreas || []),
  ]);

  const routes = unique([
    ...towns,
    `${district.name} to Bengaluru`,
    `${district.name} to Mysuru`,
    `${district.name} to Mangaluru`,
    `${district.name} to Hubballi`,
    `${district.name} to Belagavi`,
    `${district.name} to Chennai`,
    `${district.name} to Hyderabad`,
    `${district.name} to Kochi`,
    `${district.name} to Coimbatore`,
    `${district.name} to Tiruppur`,
    `${district.name} to Salem`,
    `${district.name} to Hosur`,
    `${district.name} to Tumakuru`,
    `${district.name} to Davanagere`,
    `${district.name} to Shivamogga`,
    `${district.name} to Hassan`,
    `${district.name} to Kolar`,
    `${district.name} to Vijayapura`,
    `${district.name} to Kalaburagi`,
    `${district.name} to Raichur`,
    `${district.name} to Pune`,
    `${district.name} to Mumbai`,
    `${district.name} to Goa`,
    `${district.name} to Delhi`,
  ]);

  const returnRoutes = unique([
    ...towns,
    `Bengaluru to ${district.name}`,
    `Mysuru to ${district.name}`,
    `Mangaluru to ${district.name}`,
    `Hubballi to ${district.name}`,
    `Belagavi to ${district.name}`,
    `Chennai to ${district.name}`,
    `Hyderabad to ${district.name}`,
    `Kochi to ${district.name}`,
    `Coimbatore to ${district.name}`,
    `Tiruppur to ${district.name}`,
    `Salem to ${district.name}`,
    `Hosur to ${district.name}`,
    `Tumakuru to ${district.name}`,
    `Davanagere to ${district.name}`,
    `Shivamogga to ${district.name}`,
    `Hassan to ${district.name}`,
    `Kolar to ${district.name}`,
    `Vijayapura to ${district.name}`,
    `Kalaburagi to ${district.name}`,
    `Raichur to ${district.name}`,
    `Pune to ${district.name}`,
    `Mumbai to ${district.name}`,
    `Goa to ${district.name}`,
    `Delhi to ${district.name}`,
  ]);

  return {
    routes: routes.slice(0, 25),
    returnRoutes: returnRoutes.slice(0, 25),
  };
}

fs.copyFileSync(dataPath, backupPath);

let updated = 0;

const updatedLocations = locations.map((location) => {
  if (
    location.state !== "Karnataka" ||
    !location.slug?.endsWith("-district-transport")
  ) {
    return location;
  }

  const { routes, returnRoutes } = makeRoutes(location);

  updated++;
  console.log(
    `${location.name}: ${routes.length} forward routes, ${returnRoutes.length} return routes`
  );

  return {
    ...location,
    routes,
    returnRoutes,
  };
});

fs.writeFileSync(
  dataPath,
  JSON.stringify(updatedLocations, null, 2) + "\n",
  "utf8"
);

console.log("\nDistrict records updated:", updated);
console.log("All other location records preserved.");
console.log("Backup saved:", backupPath);
console.log("Next: regenerate the district pages and test locally.");