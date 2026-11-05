import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data/locations.json");

if (!fs.existsSync(dataPath)) {
  throw new Error("Cannot find data/locations.json. Run from project root.");
}

const locations = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const targetDistricts = new Set([
  "Bengaluru South",
  "Bengaluru North",
  "Bengaluru East",
]);

const normalizeName = (value) =>
  String(value ?? "").replace(/\s+/g, " ").trim().toLowerCase();

const groups = new Map();

for (const location of locations) {
  if (!targetDistricts.has(location.district)) continue;

  if (!groups.has(location.district)) {
    groups.set(location.district, []);
  }

  groups.get(location.district).push(location);
}

let updatedCount = 0;

for (const location of locations) {
  if (!targetDistricts.has(location.district)) continue;

  const siblings = groups.get(location.district) ?? [];

  const nearbyAreas = siblings
    .filter((other) => normalizeName(other.name) !== normalizeName(location.name))
    .slice(0, 12)
    .map((other) => other.name);

  if (!Array.isArray(location.nearbyAreas) || location.nearbyAreas.length === 0) {
    location.nearbyAreas = nearbyAreas;
    updatedCount++;
  }
}

const backupPath = `${dataPath}.backup-nearby-${new Date()
  .toISOString()
  .replace(/[:.]/g, "-")}`;

fs.copyFileSync(dataPath, backupPath);
fs.writeFileSync(dataPath, `${JSON.stringify(locations, null, 2)}\n`, "utf8");

console.log("Bengaluru locality entries updated:", updatedCount);
console.log("Backup saved to:", backupPath);

for (const location of locations.filter(
  (item) =>
    ["jayanagar-transport", "banashankari-transport", "whitefield-transport"]
      .includes(item.slug)
)) {
  console.log(
    `${location.name}: ${location.nearbyAreas.length} nearby areas`
  );
}