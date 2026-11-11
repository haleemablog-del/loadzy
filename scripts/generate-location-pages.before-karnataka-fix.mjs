import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data/locations.json");
const appDir = path.resolve("app");
const masterDir = path.join(appDir, "pammal-transport");
const masterPagePath = path.join(masterDir, "page.tsx");
const masterFormPath = path.join(masterDir, "TransportEnquiryForm.tsx");
const backupRoot = path.resolve("backups", "location-pages");
const updateExisting = process.argv.includes("--update-existing");
const dryRun = process.argv.includes("--dry-run");
const targetBengaluruRural = process.argv.includes(
  "--target-bengaluru-rural"
);
const targetBengaluruLocalities = process.argv.includes(
  "--target-bengaluru-localities"
);

const bengaluruLocalityDistricts = new Set([
  "Bengaluru South",
  "Bengaluru North",
  "Bengaluru East",
]);

const bengaluruRuralSlugs = new Set([
  "bengaluru-rural-transport",
  "devanahalli-transport",
  "doddaballapura-transport",
  "hoskote-transport",
  "nelamangala-transport",
  "vijayapura-bengaluru-rural-transport",
  "sulibele-transport",
  "nandagudi-transport",
  "doddabelavangala-transport",
  "tubagere-transport",
  "thyamagondlu-transport",
  "sompura-bengaluru-rural-transport",
  "channarayapatna-bengaluru-rural-transport",
  "kundana-transport",
  "obadenahalli-industrial-area-transport",
  "aadinarayanahosahalli-industrial-area-transport",
  "hitech-defence-aerospace-park-transport",
  "doddaballapura-manufacturing-cluster-transport",
  "hoskote-factory-commercial-belt-transport",
  "nelamangala-industrial-logistics-corridor-transport",
  "kempegowda-international-airport-area-transport",
  "doddaballapura-silk-textile-transport",
  "devanahalli-horticulture-produce-transport",
  "bengaluru-rural-agricultural-markets-transport",
]);
const targetOnly = process.argv.includes("--target-bengaluru-13");
const targetTamilNaduBatch = process.argv.includes(
  "--target-tamil-nadu-batch"
);
const targetKeralaBatch = process.argv.includes(
  "--target-kerala-batch"
);
const targetKarnatakaDistricts = process.argv.includes(
  "--target-karnataka-districts-08-31"
);
const targetAnekalMissing = process.argv.includes(
  "--target-anekal-missing"
);
const anekalMissingSlugs = new Set([
  "anekal-transport",
  "attibele-transport",
  "chandapura-transport",
  "bommasandra-industrial-area-transport",
  "jigani-transport",
  "electronic-city-phase-1-transport",
  "electronic-city-phase-2-transport",
  "hebbagodi-transport",
  "singasandra-transport",
  "begur-transport",
  "bannerghatta-transport",
  "hulimangala-transport",
  "hennagara-transport",
  "haragadde-transport",
  "bommasandra-transport",
  "muthanallur-transport",
  "suryanagar-transport",
  "neeladri-nagar-transport",
  "konappana-agrahara-transport",
  "doddathoguru-transport",
  "veerasandra-transport",
  "bettadasanapura-transport",
  "kammasandra-transport",
  "ananth-nagar-transport",
  "huskur-road-transport",
  "rayasandra-transport",
  "gollahalli-transport",
  "chandapura-circle-transport",
  "attibele-industrial-area-transport",
]);
const targetKarnatakaDistrictPages = process.argv.includes(
  "--target-karnataka-district-pages"
);
const targetAndhraPradeshBatch = process.argv.includes(
  "--target-andhra-pradesh-batch"
);

const karnatakaDistrictSlugs = new Set([
  "gundlupet-transport",
  "yelandur-transport",
  "kollegal-transport",
  "hanur-transport",  
  "gauribidanur-transport",
  "gudibanda-transport",
  "bagepalli-transport",
  "sidlaghatta-transport",
  "chintamani-transport",
  "sringeri-transport",
  "koppa-transport",
  "narasimharajapura-transport",
  "tarikere-transport",
  "birur-transport",
  "kadur-transport",
  "mudigere-transport",
  "kudremukh-transport",
  "molakalmuru-transport",
  "challakere-transport",
  "holalkere-transport",
  "hosadurga-transport",
  "hiriyur-transport",
  "mangaluru-transport",
  "mulki-transport",
  "moodabidri-transport",
  "bantwal-transport",
  "beltangady-transport",
  "puttur-transport",
  "sullia-transport",
  "harihar-transport",
  "honnali-transport",
  "channagiri-transport",
  "jagalur-transport",
  "hubballi-transport",
  "alnavar-transport",
  "navalgund-transport",
  "annigeri-transport",
  "kalghatgi-transport",
  "kundgol-transport",
  "gadag-betageri-transport",
  "nargund-transport",
  "ron-transport",
  "gajendragad-transport",
  "naregal-transport",
  "mulgund-transport",
  "shirhatti-transport",
  "lakshmeshwar-transport",
  "mundargi-transport",
  "sakleshpur-transport",
  "belur-transport",
  "arsikere-transport",
  "alur-transport",
  "arkalgud-transport",
  "holenarsipur-transport",
  "channarayapatna-transport",
  "shiggaon-transport",
  "bankapura-transport",
  "savanur-transport",
  "hangal-transport",
  "byadgi-transport",
  "hirekerur-transport",
  "ranebennur-transport",
  "aland-transport",
  "afzalpur-transport",
  "chincholi-transport",
  "sedam-transport",
  "chitapur-transport",
  "shahabad-transport",
  "wadi-transport",
  "jevargi-transport",
  "madikeri-transport",
  "somwarpet-transport",
  "virajpet-transport",
  "srinivaspur-transport",
  "malur-transport",
  "bangarapet-transport",
  "robertsonpet-k-g-f-transport",
  "mulbagal-transport",
  "yelburga-transport",
  "kushtagi-transport",
  "gangavathi-transport",
  "krishnarajpet-transport",
  "nagamangala-transport",
  "pandavapura-transport",
  "srirangapatna-transport",
  "maddur-transport",
  "malavalli-transport",
  "nanjangud-transport",
  "hunsur-transport",
  "krishnarajanagara-k-r-nagar-transport",
  "bannur-transport",
  "piriyapatna-transport",
  "heggadadevankote-h-d-kote-transport",
  "saragur-sargur-transport",
  "tirumakudal-narsipur-t-narasipura-transport",
  "hinkal-transport",
  "hootagalli-transport",
  "srirampura-transport",
  "elwala-yelwal-transport",
  "bogadi-transport",
  "belvata-transport",
  "koorgalli-transport",
  "kadakola-transport",
  "byrapura-transport",
  "gargeswari-transport",
  "mudgal-transport",
  "lingasugur-transport",
  "devadurga-transport",
  "manvi-transport",
  "sindhanur-transport",
  "hatti-gold-mines-transport",
  "sagar-transport",
  "sorab-transport",
  "siralkoppa-transport",
  "shikaripura-transport",
  "hosanagara-transport",
  "thirthahalli-transport",
  "bhadravati-transport",
  "chikkanayakanahalli-transport",
  "sira-transport",
  "pavagada-transport",
  "madhugiri-transport",
  "koratagere-transport",
  "gubbi-transport",
  "tiptur-transport",
  "turuvekere-transport",
  "kunigal-transport",
  "kundapura-transport",
  "saligrama-transport",
  "karkala-transport",
  "karwar-transport",
  "dandeli-transport",
  "haliyal-transport",
  "yellapur-transport",
  "mundgod-transport",
  "sirsi-transport",
  "ankola-transport",
  "kumta-transport",
  "siddapur-transport",
  "honnavar-transport",
  "bhatkal-transport",
  "hosapete-transport",
  "kotturu-transport",
  "kudligi-transport",
  "harapanahalli-transport",
  "indi-transport",
  "sindgi-transport",
  "basavana-bagevadi-transport",
  "muddebihal-transport",
  "talikota-transport",
  "yadgir-transport",
  "shorapur-transport",
  "shahapur-transport",
  "gurmitkal-transport",
  "bhimarayanagudi-transport"
]);

const targetBengaluruCentralWestMissing =
  process.argv.includes("--target-bengaluru-central-west-missing");

const bengaluruCentralWestSlugs = new Set([
  "majestic-transport",
  "kempegowda-bus-station-transport",
  "city-railway-station-transport",
  "chickpet-transport",
  "shivajinagar-transport",
  "vasanth-nagar-transport",
  "seshadripuram-transport",
  "gandhinagar-transport",
  "cubbonpet-transport",
  "avenue-road-transport",
  "commercial-street-transport",
  "brigade-road-transport",
  "mg-road-transport",
  "residency-road-transport",
  "richmond-town-transport",
  "langford-town-transport",
  "ashok-nagar-transport",
  "lavelle-road-transport",
  "infantry-road-transport",
  "cunningham-road-transport",
  "benson-town-transport",
  "frazer-town-transport",
  "cox-town-transport",
  "pulikeshi-nagar-transport",
  "bharathinagar-transport",
  "jayamahal-transport",
  "palace-guttahalli-transport",
  "sadashivanagar-transport",
  "malleshwaram-transport",
  "sampige-road-transport",
  "rajajinagar-transport",
  "okalipuram-transport",
  "srirampuram-transport",
  "vijayanagar-transport",
  "chamarajpet-transport",
  "azad-nagar-transport",
  "cottonpet-transport",
  "binnypet-transport",
  "nagarbhavi-transport",
  "kengeri-transport",
  "kengeri-satellite-town-transport",
  "rr-nagar-transport",
  "rajarajeshwari-nagar-transport",
  "basaveshwaranagar-transport",
  "kamakshipalya-transport",
  "mahalakshmi-layout-transport",
  "govindarajanagar-transport",
  "attiguppe-transport",
  "moodalapalya-transport",
  "nayandahalli-transport",
  "deepanjali-nagar-transport",
  "mysore-road-transport",
  "chandra-layout-transport",
  "sunkadakatte-transport",
  "magadi-road-transport",
  "herohalli-transport",
  "andrahalli-transport",
  "annapurneshwari-nagar-transport",
  "ullal-transport",
  "jnanabharathi-transport",
  "kumbalgodu-transport",
  "hosakerehalli-transport",
  "banashankari-3rd-stage-transport",
  "beml-layout-transport",
  "ideal-homes-township-transport",
  "pattanagere-transport",
  "kenchenahalli-transport",
  "bapuji-nagar-transport",
  "rpc-layout-transport",
  "hampi-nagar-transport",
  "marenahalli-transport",
]);


const targetSlugs = new Set([
  "kr-market-transport",
  "chickpet-wholesale-market-transport",
  "cottonpet-wholesale-area-transport",
  "avenue-road-commercial-area-transport",
  "sjp-road-commercial-market-transport",
  "whitefield-commercial-area-transport",
  "marathahalli-commercial-area-transport",
  "international-tech-park-bengaluru-transport",
  "whitefield-epip-zone-transport",
  "bagmane-tech-park-transport",
  "cessna-business-park-transport",
  "wipro-technology-campus-transport",
  "biocon-campus-transport",
]);

function stop(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

for (const file of [dataPath, masterPagePath, masterFormPath]) {
  if (!fs.existsSync(file)) {
    stop(`Missing required file: ${path.relative(process.cwd(), file)}`);
  }
}

let locations;

try {
  locations = JSON.parse(fs.readFileSync(dataPath, "utf8"));
} catch (error) {
  stop(
    `Invalid JSON in data/locations.json. ${
      error instanceof Error ? error.message : String(error)
    }`
  );
}

if (!Array.isArray(locations)) {
  stop("data/locations.json must contain a JSON array.");
}

if (locations.length === 0) {
  stop("data/locations.json contains no locations.");
}

const masterPage = fs.readFileSync(masterPagePath, "utf8");
const masterForm = fs.readFileSync(masterFormPath, "utf8");

const requiredPageMarkers = [
  "{/* DESTINATIONS */}",
  "{/* NEARBY AREAS */}",
  "Pammal is a locality in the southern Chennai urban area,",
  "const destinations",
  "const nearbyAreas",
  "PAGE_URL",
];

for (const marker of requiredPageMarkers) {
  if (!masterPage.includes(marker)) {
    stop(`Master page is missing required template content: ${marker}`);
  }
}

if (
  !/export\s+default\s+function\s+[A-Za-z_$][\w$]*\s*\([^)]*\)\s*\{/.test(
    masterPage
  )
) {
  stop("Master page has no supported default function declaration.");
}

if (
  !masterForm.includes('"use client"') ||
  !masterForm.includes("Pammal, Chennai")
) {
  stop(
    'Master form must contain the "use client" directive and Pammal default pickup.'
  );
}

function slugify(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getSlug(location) {
  const suppliedSlug = String(location.slug ?? "").trim();
  return (suppliedSlug || `${slugify(location.name)}-transport`)
    .toLowerCase()
    .replace(/^\/+|\/+$/g, "");
}

function getBaseSlug(location) {
  return getSlug(location).replace(/-transport$/, "");
}
function getLocationUrl(route) {
  const slug = slugify(route);

  const routeSlug = `${slug}-transport`;
  const routePagePath = path.join(
    process.cwd(),
    "app",
    routeSlug,
    "page.tsx"
  );

  if (fs.existsSync(routePagePath)) {
    return `/${routeSlug}`;
  }

  return `/${routeSlug}`;
}

function toComponentName(slug) {
  const words = String(slug)
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1));

  let name = words.join("");

  if (!name || /^[0-9]/.test(name)) {
    name = `Location${name}`;
  }

  return `${name}Page`;
}

function getArea(location) {
  return [location.name, location.district, location.state]
    .filter((part) => typeof part === "string" && part.trim())
    .map((part) => part.trim())
    .join(", ");
}

function getList(value, limit = 25) {
  if (!Array.isArray(value)) return [];

  return [
    ...new Set(
      value
        .filter((item) => typeof item === "string" && item.trim())
        .map((item) => item.trim())
    ),
  ].slice(0, limit);
}

function replaceLiteral(source, search, replacement) {
  return source.split(search).join(replacement);
}

function replaceArray(source, declaration, values) {
  const escapedName = declaration.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `const\\s+${escapedName}\\s*=\\s*\\[[\\s\\S]*?\\];`
  );

  if (!pattern.test(source)) {
    throw new Error(`Template array "${declaration}" was not found.`);
  }

  const contents = values
    .map((item) => `  ${JSON.stringify(item)},`)
    .join("\n");

  return source.replace(
    pattern,
    `const ${declaration} = [\n${contents}\n];`
  );
}

function escapeJsxText(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;");
}

function toTransportSlug(value) {
  return `${slugify(value).replace(/(?:-transport)+$/, "")}-transport`;
}
function makeRouteCards(routes, location, direction, getLabel) {
  if (!routes.length) {
    return `
      <p className="col-span-full text-slate-600">
        Contact LOADZY to enquire about transport routes for this location.
      </p>`;
  }

  const originSlug = toTransportSlug(getBaseSlug(location));

  return routes
    .map((route) => {
      const routeText = String(route).trim();
      const label = escapeJsxText(getLabel(route));

      // Detect complete routes such as "Ambur to Bangalore".
      const parts = routeText.split(/\s+to\s+|\s*→\s*|\s*->\s*/i);

      let fromSlug;
      let toSlug;

      if (parts.length === 2 && parts[0].trim() && parts[1].trim()) {
        fromSlug = toTransportSlug(parts[0]);
toSlug = toTransportSlug(parts[1]);
      } else if (direction === "forward") {
        fromSlug = originSlug;
        toSlug = toTransportSlug(routeText);
      } else {
        fromSlug = toTransportSlug(routeText);
        toSlug = originSlug;
      }

      const href = `/routes/${fromSlug}/${toSlug}`;

      return `
        <Link
          key={${JSON.stringify(route)}}
          href=${JSON.stringify(href)}
          className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-300"
        >
          <span className="font-semibold text-slate-800 group-hover:text-teal-800">
            ${label}
          </span>
          <span className="ml-2 text-[#08A99F]">→</span>
        </Link>`;
    })
    .join("\n");
}


function makeRoutesSection(location) {
  const name = escapeJsxText(String(location.name).trim());

  const forwardRoutes = getList(location.routes, 25);
  const returnRoutes = getList(location.returnRoutes, 25);

  // Kerala routes already contain complete origin and destination names.
  const forwardItems = makeRouteCards(
  forwardRoutes,
  location,
  "forward",
  (route) => String(route)
);

const returnItems = makeRouteCards(
  returnRoutes,
  location,
  "return",
  (route) => String(route)
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

  const startMarker = /\{\s*\/\*\s*DESTINATIONS\s*\*\/\s*\}/;
  const endMarker = /\{\s*\/\*\s*NEARBY AREAS\s*\*\/\s*\}/;

  const start = startMarker.exec(page);

  if (!start) {
    throw new Error(
      `Required DESTINATIONS marker was not found for ${location.name}.`
    );
  }

  const searchFrom = start.index + start[0].length;
  const endMatch = endMarker.exec(page.slice(searchFrom));

  if (!endMatch) {
    throw new Error(
      `Required NEARBY AREAS marker was not found for ${location.name}.`
    );
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
  const districtOrState =
    location.district || location.state || "the region";

  const localInfo = [
    `${name} is a location in ${districtOrState}. Transport requirements can vary depending on the shipment, destination and vehicle type.`,
    famousFor.length
      ? `Local specialities and activities include ${famousFor.join(", ")}.`
      : "",
    goods.length
      ? `Goods that may require transport include ${goods.join(", ")}.`
      : "",
    "When requesting a truck, provide pickup and delivery addresses, goods details, approximate load size, loading requirements and the preferred pickup date. Confirm vehicle availability, freight charges and schedules before booking.",
  ]
    .filter(Boolean)
    .join("\n\n");

  const pattern =
    /Pammal is a locality in the southern Chennai urban area,[\s\S]*?(?=<\/p>)/i;

  if (!pattern.test(page)) {
    throw new Error(
      `The Pammal local-introduction paragraph was not found for ${name}.`
    );
  }

  return page.replace(pattern, escapeJsxText(localInfo));
}


function makePage(location) {
  const name = String(location.name).trim();
  const slug = getSlug(location);
  const area = getArea(location);

  let page = masterPage;
  
  const componentName = toComponentName(slug);

  const componentPattern =
    /export\s+default\s+function\s+[A-Za-z_$][\w$]*\s*\(\s*\)\s*\{/;

  if (!componentPattern.test(page)) {
    throw new Error(
      `Could not find the default component declaration for ${name}.`
    );
  }

  page = page.replace(
    componentPattern,
    `export default function ${componentName}() {`
  );

  page = replaceLocalIntro(page, location);

  page = replaceLiteral(
    page,
    "Pammal, Chennai, Tamil Nadu, India",
    `${area}, India`
  );

  page = replaceLiteral(page, "Pammal, Chennai", area);

  page = replaceLiteral(
    page,
    "Pammal Goods Transport and Truck Booking",
    `${name} Goods Transport and Truck Booking`
  );

  page = replaceLiteral(
    page,
    "Pammal Transport Service",
    `${name} Transport Service`
  );

  page = replaceLiteral(
    page,
    "Pammal Transport",
    `${name} Transport`
  );

  page = replaceLiteral(page, "Pammal", name);
  page = replaceLiteral(page, "pammal-transport", slug);
  page = replaceLiteral(page, "pammal", getBaseSlug(location));

  page = page.replace(
    /const\s+PAGE_URL\s*=\s*`[^`]*`;/,
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
  form = replaceLiteral(
    form,
    "Pammal enquiry error",
    `${name} enquiry error`
  );
  form = replaceLiteral(
    form,
    "Pammal Transport Page",
    `${name} Transport Page`
  );
  form = replaceLiteral(
    form,
    "Move goods from Pammal",
    `Move goods from ${name}`
  );
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

  if (!name) {
    return "Missing location name.";
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return `Invalid slug "${slug}". Use lowercase letters, numbers and single hyphens.`;
  }

  if (slug === "pammal-transport") {
    return "The master Pammal page cannot be generated over itself.";
  }

  if (path.basename(slug) !== slug || slug.includes("..")) {
    return `Unsafe location slug "${slug}".`;
  }

  return null;
}

let generated = 0;
let updated = 0;
let skipped = 0;
let invalid = 0;

const seenSlugs = new Set();

for (const location of locations) {
  const slug = getSlug(location);
  if (
  targetKarnatakaDistrictPages &&
  location.state === "Karnataka" &&
  !slug.endsWith("-district-transport")
) {
  continue;
}

  if (
    targetBengaluruLocalities &&
    !bengaluruLocalityDistricts.has(location.district)
  ) {
    continue;
  }

  if (
    targetBengaluruRural &&
    !bengaluruRuralSlugs.has(slug)
  ) {
    continue;
  }
    if (targetOnly && !targetSlugs.has(slug)) {
    continue;
  }
  if (
  targetKarnatakaDistricts &&
  !karnatakaDistrictSlugs.has(slug)
) {
  continue;
}
  if (
  targetBengaluruCentralWestMissing &&
  !bengaluruCentralWestSlugs.has(slug)
) {
  continue;
}

  if (targetAnekalMissing && !anekalMissingSlugs.has(slug)) {
    continue;
  }

  if (
  targetTamilNaduBatch &&
  location.batchTag !== "tamil-nadu-2026-11"
) {
  continue;
}
if (
  targetKeralaBatch &&
  location.batchTag !== "kerala-2026-11"
) {
  continue;
}
if (
  targetAndhraPradeshBatch &&
  (
    location.state !== "Andhra Pradesh" ||
    location.batchTag !== "andhra-pradesh-2026-11"
  )
) {
  continue;
}
  const validationError = validateLocation(location);

  if (validationError) {
    console.error(`INVALID LOCATION: ${validationError}`);
    invalid++;
    continue;
  }


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

  let newPage;
  let newForm;

  try {
    // Generate and validate before touching existing files.
    newPage = makePage(location);
    newForm = makeForm(location);
  } catch (error) {
    console.error(
      `GENERATION ERROR: ${slug}: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    invalid++;
    continue;
  }

  const componentName = toComponentName(slug);

  if (
    !newPage.includes(`export default function ${componentName}()`) ||
    !newPage.includes("return (") ||
    !newForm.includes('"use client"') ||
    !newForm.includes("supabase.from")
  ) {
    console.error(
      `FAILED SAFETY CHECK: ${slug}. No files written for this location.`
    );
    invalid++;
    continue;
  }

  if (folderExists && updateExisting) {
    const backupDir = path.join(backupRoot, slug);
    fs.mkdirSync(backupDir, { recursive: true });

    if (fs.existsSync(pagePath)) {
      fs.copyFileSync(pagePath, path.join(backupDir, "page.tsx"));
    }

    if (fs.existsSync(formPath)) {
      fs.copyFileSync(
        formPath,
        path.join(backupDir, "TransportEnquiryForm.tsx")
      );
    }
  }

  if (dryRun) {
  console.log(`DRY RUN: would generate ${slug}`);
  generated++;
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

  console.log(
    `  Routes: ${getList(location.routes, 25).length} forward, ` +
      `${getList(location.returnRoutes, 25).length} return; ` +
      `nearby areas: ${getList(location.nearbyAreas, 40).length}`
  );
}

console.log("");
console.log("Location page generation finished.");
console.log(`Generated new pages: ${generated}`);
console.log(`Updated pages: ${updated}`);
console.log(`Skipped existing pages: ${skipped}`);
console.log(`Invalid entries: ${invalid}`);
console.log("");
console.log("The sitemap was not changed. Review app/sitemap.ts separately.");