import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data/locations.json");
const appDir = path.resolve("app");
const masterDir = path.join(appDir, "pammal-transport");
const masterPagePath = path.join(masterDir, "page.tsx");
const masterFormPath = path.join(masterDir, "TransportEnquiryForm.tsx");
const backupRoot = path.resolve("backups", "location-pages");

const updateExisting = process.argv.includes("--update-existing");

for (const file of [dataPath, masterPagePath, masterFormPath]) {
  if (!fs.existsSync(file)) {
    console.error(`Missing required file: ${path.relative(process.cwd(), file)}`);
    process.exit(1);
  }
}

let locations;

try {
  locations = JSON.parse(fs.readFileSync(dataPath, "utf8"));
} catch {
  console.error("Invalid JSON in data/locations.json. Fix the JSON before generating.");
  process.exit(1);
}

if (!Array.isArray(locations)) {
  console.error("data/locations.json must contain a JSON array.");
  process.exit(1);
}

const masterPage = fs.readFileSync(masterPagePath, "utf8");
const masterForm = fs.readFileSync(masterFormPath, "utf8");

function slugify(value) {
  return String(value ?? "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getSlug(location) {
  return String(location.slug || `${slugify(location.name)}-transport`)
    .toLowerCase()
    .replace(/^\/+|\/+$/g, "");
}

function getBaseSlug(location) {
  return getSlug(location).replace(/-transport$/, "");
}

function getArea(location) {
  return [location.name, location.district, location.state]
    .filter(Boolean)
    .join(", ");
}

function getList(value, limit = 25) {
  if (!Array.isArray(value)) return [];

  return [...new Set(
    value
      .filter((item) => typeof item === "string" && item.trim())
      .map((item) => item.trim())
  )].slice(0, limit);
}

function replaceLiteral(source, search, replacement) {
  return source.split(search).join(replacement);
}

function replaceArray(source, declaration, values) {
  const pattern = new RegExp(
    `const\\s+${declaration}\\s*=\\s*\\[[\\s\\S]*?\\];`
  );

  if (!pattern.test(source)) {
    console.warn(`Template array "${declaration}" was not found.`);
    return source;
  }

  const contents = values
    .map((item) => `  ${JSON.stringify(item)},`)
    .join("\n");

  return source.replace(
    pattern,
    `const ${declaration} = [\n${contents}\n];`
  );
}

function makeRouteCards(routes, getLabel) {
  if (!routes.length) {
    return `
          <p className="col-span-full text-slate-600">
            Contact LOADZY to enquire about transport routes for this location.
          </p>`;
  }

  return routes.map((route) => {
    const label = getLabel(route);

    return `
          <Link
            key={${JSON.stringify(route)}}
            href="/load-search"
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#08A99F] hover:bg-teal-50"
          >
            <span className="font-semibold text-slate-800 group-hover:text-teal-800">
              ${label}
            </span>
            <span className="ml-2 text-[#08A99F]">→</span>
          </Link>`;
  }).join("\n");
}

function makeRoutesSection(location) {
  const name = String(location.name).trim();
  const forwardRoutes = getList(location.routes);
  const returnRoutes = getList(location.returnRoutes);

  const forwardItems = makeRouteCards(
    forwardRoutes,
    (destination) => `${name} to ${destination}`
  );

  const returnItems = makeRouteCards(
    returnRoutes,
    (origin) => `${origin} to ${name}`
  );

  return `
      {/* FORWARD ROUTES */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
          Forward routes
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Transport Routes from ${name}
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore transport enquiry routes from ${name}. Vehicle availability,
          freight charges and schedules must be confirmed.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          ${forwardItems}
        </div>
      </section>

      {/* RETURN ROUTES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-bold uppercase tracking-[0.18em] text-[#08A99F]">
            Return routes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Transport Routes to ${name}
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Explore return-direction transport enquiries to ${name}.
            Vehicle availability, freight charges and schedules must be confirmed.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            ${returnItems}
          </div>
        </div>
      </section>`;
}

function replaceRoutesBlock(page, location) {
  const replacement = makeRoutesSection(location);

  // Replace the entire destinations block, including its JSX comment braces.
  const startMarker = /\{\/\*\s*DESTINATIONS\s*\*\/\}/;
  const endMarker = /\{\/\*\s*NEARBY AREAS\s*\*\/\}/;

  const start = startMarker.exec(page);
  if (!start) {
    console.warn(`DESTINATIONS marker not found for ${location.name}.`);
    return page;
  }

  const searchFrom = start.index + start[0].length;
  const endMatch = endMarker.exec(page.slice(searchFrom));

  if (!endMatch) {
    console.warn(`NEARBY AREAS marker not found for ${location.name}.`);
    return page;
  }

  const end = searchFrom + endMatch.index;

  return (
    page.slice(0, start.index) +
    replacement +
    "\n\n      " +
    page.slice(end)
  );
}

function replaceLocalIntro(page, location) {
  const name = String(location.name).trim();
  const famousFor = getList(location.famousFor, 10);
  const goods = getList(location.goods, 15);

  const intro = `${name} is a location in ${location.district || location.state || "the region"}. Transport requirements can vary depending on the shipment, destination and vehicle type.`;

  const localInfo = [
    intro,
    famousFor.length ? `Local specialities and activities include ${famousFor.join(", ")}.` : "",
    goods.length ? `Goods that may require transport include ${goods.join(", ")}.` : "",
    "When requesting a truck, provide pickup and delivery addresses, goods details, approximate load size, loading requirements and the preferred pickup date. Confirm vehicle availability, freight charges and schedules before booking."
  ].filter(Boolean).join("\n\n");

  // Replace the known Pammal-specific introduction if it matches.
  const pattern = /Pammal is a locality in the southern Chennai urban area,[\s\S]*?before transpor&#x74;\./i;

  if (pattern.test(page)) {
    return page.replace(pattern, localInfo);
  }

  // If the reference wording differs, leave the original section intact.
  console.warn(`Pammal local-introduction text was not matched for ${name}.`);
  return page;
}

function makePage(location) {
  const name = String(location.name).trim();
  const slug = getSlug(location);
  const area = getArea(location);

  let page = masterPage;

  page = replaceLocalIntro(page, location);

  page = replaceLiteral(
    page,
    "Pammal, Chennai, Tamil Nadu, India",
    `${area}, India`
  );
  page = replaceLiteral(page, "Pammal, Chennai", area);
  page = replaceLiteral(page, "Pammal Transport Service", `${name} Transport Service`);
  page = replaceLiteral(
    page,
    "Pammal Goods Transport and Truck Booking",
    `${name} Goods Transport and Truck Booking`
  );
  page = replaceLiteral(page, "Pammal Transport", `${name} Transport`);
  page = replaceLiteral(page, "Pammal", name);
  page = replaceLiteral(page, "pammal-transport", slug);
  page = replaceLiteral(page, "pammal", getBaseSlug(location));

  // Ensure the canonical page URL points to the generated location.
  page = page.replace(
    /const PAGE_URL\s*=\s*`[^`]*`;/,
    `const PAGE_URL = \`\${SITE_URL}/${slug}\`;`
  );

  const destinations = getList(location.routes, 25);
  const nearbyAreas = getList(location.nearbyAreas, 40);

  if (destinations.length) {
    page = replaceArray(page, "destinations", destinations);
  }

  page = replaceArray(page, "nearbyAreas", nearbyAreas);
  page = replaceRoutesBlock(page, location);

  return page;
}

function makeForm(location) {
  const name = String(location.name).trim();
  const area = getArea(location);
  const baseSlug = getBaseSlug(location);

  let form = masterForm;

  form = replaceLiteral(form, '"Pammal, Chennai"', JSON.stringify(area));
  form = replaceLiteral(
    form,
    '"pammal_transport_page"',
    JSON.stringify(`${baseSlug.replace(/-/g, "_")}_transport_page`)
  );
  form = replaceLiteral(form, "Pammal enquiry error", `${name} enquiry error`);
  form = replaceLiteral(form, "Pammal Transport Page", `${name} Transport Page`);
  form = replaceLiteral(form, "Move goods from Pammal", `Move goods from ${name}`);
  form = replaceLiteral(form, "pammal-", `${baseSlug}-`);
  form = replaceLiteral(form, "pammal", baseSlug);

  return form;
}

function validateLocation(location) {
  if (!location || typeof location !== "object" || Array.isArray(location)) {
    return "Each location must be a JSON object.";
  }

  const name = String(location.name ?? "").trim();
  const slug = getSlug(location);

  if (!name) return "Missing location name.";

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return `Invalid slug "${slug}". Use lowercase letters, numbers and hyphens.`;
  }

  if (slug === "pammal-transport") {
    return "The master Pammal page cannot be generated over itself.";
  }

  return null;
}

let generated = 0;
let updated = 0;
let skipped = 0;
let invalid = 0;

const seenSlugs = new Set();

for (const location of locations) {
  const error = validateLocation(location);

  if (error) {
    console.error(`INVALID LOCATION: ${error}`);
    invalid++;
    continue;
  }

  const slug = getSlug(location);

  if (seenSlugs.has(slug)) {
    console.error(`DUPLICATE SLUG in locations.json: ${slug}`);
    invalid++;
    continue;
  }

  seenSlugs.add(slug);

  const dir = path.join(appDir, slug);
  const pagePath = path.join(dir, "page.tsx");
  const formPath = path.join(dir, "TransportEnquiryForm.tsx");
  const folderExists = fs.existsSync(dir);

  if (folderExists && !updateExisting) {
    console.log(`SKIP existing folder (protected): ${slug}`);
    skipped++;
    continue;
  }

  if (folderExists && updateExisting) {
    // Save current files before overwriting them.
    const backupDir = path.join(backupRoot, slug);
    fs.mkdirSync(backupDir, { recursive: true });

    if (fs.existsSync(pagePath)) {
      fs.copyFileSync(pagePath, path.join(backupDir, "page.tsx"));
    }

    if (fs.existsSync(formPath)) {
      fs.copyFileSync(formPath, path.join(backupDir, "TransportEnquiryForm.tsx"));
    }
  }

  const newPage = makePage(location);
  const newForm = makeForm(location);

  // Basic safeguards against accidentally writing incomplete files.
  if (
    !newPage.includes("export default function") ||
    !newPage.includes("return (") ||
    !newForm.includes('"use client"')
  ) {
    console.error(`FAILED SAFETY CHECK: ${slug}. No files written for this location.`);
    invalid++;
    continue;
  }

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(pagePath, newPage, "utf8");
  fs.writeFileSync(formPath, newForm, "utf8");

  if (folderExists) {
    console.log(`GENERATED/UPDATED: ${slug}`);
    updated++;
  } else {
    console.log(`GENERATED: ${slug}`);
    generated++;
  }
}

console.log("");
console.log("Location page generation finished.");
console.log(`Generated new pages: ${generated}`);
console.log(`Updated pages: ${updated}`);
console.log(`Skipped existing pages: ${skipped}`);
console.log(`Invalid entries: ${invalid}`);
console.log("");
console.log("Sitemap was not changed. Review app/sitemap.ts separately.");
