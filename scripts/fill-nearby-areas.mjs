import fs from "fs";

const file = "./data/locations.json";

const locations = JSON.parse(
  fs.readFileSync(file, "utf8")
);

const MAX_NEARBY = 20;

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function uniqueLocations(items) {
  const seen = new Set();

  return items.filter((item) => {
    const key = normalize(item.slug || item.name);

    if (!key || seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

// Group locations by district
const districtMap = new Map();

for (const location of locations) {
  const district = normalize(location.district);

  if (!district) continue;

  if (!districtMap.has(district)) {
    districtMap.set(district, []);
  }

  districtMap.get(district).push(location);
}

// Group locations by state
const stateMap = new Map();

for (const location of locations) {
  const state = normalize(location.state);

  if (!state) continue;

  if (!stateMap.has(state)) {
    stateMap.set(state, []);
  }

  stateMap.get(state).push(location);
}

let updated = 0;
let alreadyHadNearby = 0;
let stillEmpty = 0;
let districtUsed = 0;
let stateFallbackUsed = 0;

for (const location of locations) {
  const existing = Array.isArray(location.nearbyAreas)
    ? location.nearbyAreas.filter(
        (x) => typeof x === "string" && x.trim()
      )
    : [];

  // Keep existing nearby areas
  if (existing.length > 0) {
    alreadyHadNearby++;
    continue;
  }

  const currentSlug = normalize(location.slug);
  const currentName = normalize(location.name);
  const currentDistrict = normalize(location.district);
  const currentState = normalize(location.state);

  let candidates = [];

  // ------------------------------------------------
  // 1. SAME DISTRICT
  // ------------------------------------------------

  if (currentDistrict && districtMap.has(currentDistrict)) {
    candidates = districtMap
      .get(currentDistrict)
      .filter((item) => {
        const slug = normalize(item.slug);
        const name = normalize(item.name);

        return (
          slug !== currentSlug &&
          name !== currentName
        );
      });

    if (candidates.length > 0) {
      districtUsed++;
    }
  }

  // ------------------------------------------------
  // 2. SAME STATE FALLBACK
  // ------------------------------------------------

  if (candidates.length === 0 && currentState) {
    candidates = stateMap
      .get(currentState)
      ?.filter((item) => {
        const slug = normalize(item.slug);
        const name = normalize(item.name);

        return (
          slug !== currentSlug &&
          name !== currentName
        );
      }) || [];

    if (candidates.length > 0) {
      stateFallbackUsed++;
    }
  }

  candidates = uniqueLocations(candidates);

  // Take maximum 20
  const nearbyAreas = candidates
    .slice(0, MAX_NEARBY)
    .map((item) => item.name)
    .filter(Boolean);

  if (nearbyAreas.length > 0) {
    location.nearbyAreas = nearbyAreas;
    updated++;
  } else {
    location.nearbyAreas = [];
    stillEmpty++;
  }
}

// Write updated data
fs.writeFileSync(
  file,
  JSON.stringify(locations, null, 2) + "\n",
  "utf8"
);

console.log("");
console.log("======================================");
console.log("Nearby Areas Update Complete");
console.log("======================================");
console.log(`Total locations: ${locations.length}`);
console.log(`Updated: ${updated}`);
console.log(`Already had nearby areas: ${alreadyHadNearby}`);
console.log(`District-based: ${districtUsed}`);
console.log(`State fallback: ${stateFallbackUsed}`);
console.log(`Still empty: ${stillEmpty}`);
console.log("======================================");