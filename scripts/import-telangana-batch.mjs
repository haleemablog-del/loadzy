import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, "..");

const locationsPath = path.join(projectRoot, "data", "locations.json");
const importPath = path.join(projectRoot, "data", "telangana-import.json");

if (!fs.existsSync(locationsPath) || !fs.existsSync(importPath)) {
  throw new Error("Could not find locations.json or telangana-import.json.");
}

const existing = JSON.parse(fs.readFileSync(locationsPath, "utf8"));
const incoming = JSON.parse(fs.readFileSync(importPath, "utf8"));

if (!Array.isArray(existing) || !Array.isArray(incoming)) {
  throw new Error("Both files must contain JSON arrays.");
}

if (incoming.length !== 403) {
  throw new Error(`Expected 403 records; found ${incoming.length}.`);
}

if (existing.some((item) => item.state === "Telangana")) {
  throw new Error("Telangana records already exist. Import stopped.");
}

const incomingSlugs = incoming.map((item) => item.slug);

if (new Set(incomingSlugs).size !== incomingSlugs.length) {
  throw new Error("Duplicate Telangana slugs found.");
}

const existingSlugs = new Set(existing.map((item) => item.slug));

const collisions = incomingSlugs.filter((slug) =>
  existingSlugs.has(slug)
);

if (collisions.length) {
  throw new Error(
    `Existing slug conflicts:\n${[...new Set(collisions)].join("\n")}`
  );
}

for (const item of incoming) {
  if (
    item.state !== "Telangana" ||
    item.batchTag !== "telangana-2026-11"
  ) {
    throw new Error(`Invalid batch record: ${item.name}`);
  }

  if (
    item.routes?.length !== 25 ||
    item.returnRoutes?.length !== 25
  ) {
    throw new Error(`Route count error: ${item.name}`);
  }

  if ((item.nearbyAreas ?? []).length > 10) {
    throw new Error(`Nearby area limit exceeded: ${item.name}`);
  }
}

const backupPath = path.join(
  projectRoot,
  "data",
  "locations-before-telangana-import.json"
);

if (fs.existsSync(backupPath)) {
  throw new Error("Backup already exists. Import stopped.");
}

fs.copyFileSync(locationsPath, backupPath);

const updated = [...existing, ...incoming];

const tempPath = `${locationsPath}.tmp`;

fs.writeFileSync(
  tempPath,
  JSON.stringify(updated, null, 2) + "\n",
  "utf8"
);

fs.renameSync(tempPath, locationsPath);

console.log("Telangana import completed.");
console.log("Previous records:", existing.length);
console.log("Added Telangana records:", incoming.length);
console.log("New total:", updated.length);
console.log("Backup:", backupPath);