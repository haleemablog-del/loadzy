import fs from "fs";
import path from "path";
import XLSX from "xlsx";

const excelPath = path.resolve("pending-state-seo.xlsx");
const locationsPath = path.resolve("data/locations.json");

console.log("Reading Excel:", excelPath);
console.log("Reading locations:", locationsPath);

if (!fs.existsSync(excelPath)) {
  throw new Error(`Excel file not found: ${excelPath}`);
}

if (!fs.existsSync(locationsPath)) {
  throw new Error(`locations.json not found: ${locationsPath}`);
}

const workbook = XLSX.readFile(excelPath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];

const rows = XLSX.utils.sheet_to_json(sheet, {
  header: 1,
  defval: "",
});

const locations = JSON.parse(
  fs.readFileSync(locationsPath, "utf8")
);

function clean(value) {
  return String(value ?? "").trim();
}

function slugify(value) {
  return clean(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function unique(values) {
  return [...new Set(
    values
      .map(clean)
      .filter(Boolean)
  )];
}

function makeTransportSlug(name) {
  return `${slugify(name)}-transport`;
}

function makeRouteList(name) {
  return unique([
    "Chennai",
    "Bengaluru",
    "Hyderabad",
    "Mumbai",
    "Pune",
    "Delhi",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Coimbatore",
    "Salem",
    "Madurai",
    "Vijayawada",
    "Visakhapatnam",
    "Kochi",
    "Thiruvananthapuram",
    "Vellore",
    "Tirupati",
    "Hosur",
    "Krishnagiri",
  ]).filter(
    (city) =>
      slugify(city) !== slugify(name)
  );
}

function makeLocation({
  name,
  state,
  district,
  type,
}) {
  const routes = makeRouteList(name);

  return {
    name,
    slug: makeTransportSlug(name),
    state,
    district: district || "",
    type,
    routes,
    returnRoutes: [...routes],
    nearbyAreas: [],
    famousFor: [],
    goods: [],
  };
}

const existingBySlug = new Map(
  locations.map((location) => [
    clean(location.slug).toLowerCase(),
    location,
  ])
);

const newLocations = [];
const seenExcelSlugs = new Set();

for (const row of rows) {
  const state = clean(row[0]);
  const district = clean(row[1]);
  const area = clean(row[2]);

  if (!state || !district) {
    continue;
  }

  // District-level row
  if (!area) {
    const name = district;
    const slug = makeTransportSlug(name);

    if (
      !existingBySlug.has(slug.toLowerCase()) &&
      !seenExcelSlugs.has(slug.toLowerCase())
    ) {
      const location = makeLocation({
        name,
        state,
        district: name,
        type: "district",
      });

      newLocations.push(location);
      seenExcelSlugs.add(slug.toLowerCase());
    }

    continue;
  }

  // Town / city / area row
  const name = area;
  const slug = makeTransportSlug(name);

  if (
    !existingBySlug.has(slug.toLowerCase()) &&
    !seenExcelSlugs.has(slug.toLowerCase())
  ) {
    const location = makeLocation({
      name,
      state,
      district,
      type: "town",
    });

    newLocations.push(location);
    seenExcelSlugs.add(slug.toLowerCase());
  }
}

const merged = [...locations, ...newLocations];

fs.writeFileSync(
  locationsPath,
  JSON.stringify(merged, null, 2) + "\n",
  "utf8"
);

const stateCounts = {};

for (const location of newLocations) {
  const state = location.state;
  stateCounts[state] = (stateCounts[state] || 0) + 1;
}

console.log("");
console.log("======================================");
console.log("STATE SEO IMPORT COMPLETED");
console.log("======================================");
console.log("Existing locations:", locations.length);
console.log("New locations added:", newLocations.length);
console.log("Total locations now:", merged.length);
console.log("");

console.log("New locations by state:");

for (const [state, count] of Object.entries(stateCounts).sort()) {
  console.log(`- ${state}: ${count}`);
}

console.log("");
console.log("Backup:");
console.log("data/locations.backup-before-state-import.json");
console.log("");
console.log("IMPORTANT:");
console.log("Existing locations were preserved.");
console.log("Duplicate slugs were skipped.");