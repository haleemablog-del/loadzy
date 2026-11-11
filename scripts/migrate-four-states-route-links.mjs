import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const DATA_FILE = path.join(ROOT, "data", "locations.json");

const BACKUP_DIR =
  "F:/HALEEMA/LOADZY_LOCAL_BACKUPS/all-four-states-route-links-before-migration-20261108";

const TARGET_STATES = new Set([
  "Andhra Pradesh",
]);
const applyChanges = process.argv.includes("--apply");

function slugify(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function cleanLabel(value) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\{[^{}]*\}/g, " ")
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8594;|&rarr;/g, " ")
    .replace(/→|â†’/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getRouteLabel(linkBlock) {
  const spanMatches = [
    ...linkBlock.matchAll(/<span\b[^>]*>([\s\S]*?)<\/span>/g),
  ];

  for (const match of spanMatches) {
    const label = cleanLabel(match[1]);
    if (/\s+to\s+/i.test(label)) return label;
  }

  return cleanLabel(
    linkBlock
      .replace(/<Link\b[^>]*>/, "")
      .replace(/<\/Link>/, "")
  );
}

function isLocationName(value, location) {
  const candidate = slugify(value);
  const nameSlug = slugify(location.name);
  const pageSlug = slugify(location.slug).replace(/-transport$/, "");

  return (
    candidate === nameSlug ||
    candidate === pageSlug
  );
}
function getRouteFromLabel(label, location) {
  const normalizedLabel = String(label ?? "")
    .replace(/→|➜|➝|&#8594;|&rarr;|â†’/gi, " to ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const match = normalizedLabel.match(/^(.+?)\s+to\s+(.+?)$/i);

  if (!match) return null;

  const from = match[1].trim();
  const to = match[2].trim();

  if (!from || !to) return null;

  const fromSlug = `${slugify(from)}-transport`;
  const toSlug = `${slugify(to)}-transport`;

  if (!fromSlug || !toSlug) return null;

  const isForward = isLocationName(from, location);
  const isReturn = isLocationName(to, location);

  if (!isForward && !isReturn) return null;

  if (fromSlug === toSlug) {
    return {
      error: "Self-route detected",
      label: normalizedLabel,
    };
  }

  return {
    fromSlug,
    toSlug,
    href: `/routes/${fromSlug}/${toSlug}`,
    direction: isForward ? "forward" : "return",
    label: normalizedLabel,
  };
}


function migratePage(content, location) {
  const issues = [];
  const seen = new Set();

  let changed = 0;
  let forward = 0;
  let returning = 0;

  function processRoute(label, oldHref) {
    const route = getRouteFromLabel(label, location);

    if (!route) return oldHref;

    if (route.error) {
      issues.push(`${route.error}: ${route.label}`);
      return oldHref;
    }

    const key = `${route.direction}:${route.href}`;

    if (seen.has(key)) {
      issues.push(`Duplicate route card: ${route.label}`);
    }

    seen.add(key);

    if (route.direction === "forward") {
      forward++;
    } else {
      returning++;
    }

    if (oldHref === route.href) return oldHref;

    changed++;
    return route.href;
  }

  // 1. Standard JSX Link route cards
  let updated = content.replace(
    /<Link\b[\s\S]*?<\/Link>/g,
    (linkBlock) => {
      const label = getRouteLabel(linkBlock);
      const route = getRouteFromLabel(label, location);

      if (!route) return linkBlock;

      if (route.error) {
        issues.push(`${route.error}: ${route.label}`);
        return linkBlock;
      }

      const hrefMatch = linkBlock.match(
        /\bhref\s*=\s*"([^"]+)"/
      );

      if (!hrefMatch) {
        issues.push(
          `Route link has no static href: ${route.label}`
        );
        return linkBlock;
      }

      const newHref = processRoute(label, hrefMatch[1]);

      if (newHref === hrefMatch[1]) return linkBlock;

      return linkBlock.replace(
        /\bhref\s*=\s*"[^"]+"/,
        `href="${newHref}"`
      );
    }
  );

  // 2. Custom const routes = [...] arrays
  updated = updated.replace(
    /const routes\s*=\s*\[([\s\S]*?)\];/g,
    (block, arrayContent) => {
      const updatedArray = arrayContent.replace(
        /\[\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\]/g,
        (entry, label, oldHref) => {
          const newHref = processRoute(label, oldHref);

          if (newHref === oldHref) return entry;

          return entry.replace(
            /,\s*"[^"]+"\s*\]$/,
            `, "${newHref}"]`
          );
        }
      );

      return `const routes = [${updatedArray}];`;
    }
  );

  return {
    content: updated,
    changed,
    forward,
    returning,
    issues,
  };
}

const locations = JSON.parse(
  fs.readFileSync(DATA_FILE, "utf8")
);

if (!Array.isArray(locations)) {
  throw new Error("locations.json must contain an array.");
}

const targets = locations.filter((location) =>
  TARGET_STATES.has(location.state)
);

const backupFiles = fs
  .readdirSync(BACKUP_DIR)
  .filter((name) => name.endsWith("-page.tsx"));

if (targets.length !== 471) {
  throw new Error(
    `Expected 471 Andhra Pradesh location records, found ${targets.length}. Migration stopped.`
  );
}
if (backupFiles.length !== 1592) {
  throw new Error(
    `Expected 1592 backup files, found ${backupFiles.length}. Migration stopped.`
  );
}

const results = [];
const allIssues = [];

for (const location of targets) {
  const folder = location.slug;

  if (!folder || !location.name || !location.state) {
    allIssues.push(
      `Invalid location record: ${JSON.stringify(location)}`
    );
    continue;
  }

  const pageFile = path.join(
    ROOT,
    "app",
    folder,
    "page.tsx"
  );

  const backupFile = path.join(
    BACKUP_DIR,
   `${folder}-page.tsx`
  );

  if (!fs.existsSync(pageFile)) {
    allIssues.push(`${folder}: Page file missing`);
    continue;
  }

  if (!fs.existsSync(backupFile)) {
    allIssues.push(`${folder}: Backup file missing`);
    continue;
  }

  const original = fs.readFileSync(pageFile, "utf8");
  const backup = fs.readFileSync(backupFile, "utf8");

  if (!backup.trim()) {
    allIssues.push(`${folder}: Backup file is empty`);
    continue;
  }

  const result = migratePage(original, location);

  if (result.issues.length > 0) {
    allIssues.push(
      ...result.issues.map((issue) => `${folder}: ${issue}`)
    );
  }

  if (
    result.forward === 0 &&
    result.returning === 0
  ) {
    allIssues.push(
      `${folder}: No identifiable route cards found`
    );
  }

  if (applyChanges && result.changed > 0) {
    fs.writeFileSync(pageFile, result.content, "utf8");
  }

  results.push({
    state: location.state,
    folder,
    forward: result.forward,
    returning: result.returning,
    changed: result.changed,
  });
}

console.log("\n========== ROUTE MIGRATION REPORT ==========\n");

for (const state of TARGET_STATES) {
  const stateResults = results.filter(
    (item) => item.state === state
  );

  const forward = stateResults.reduce(
    (sum, item) => sum + item.forward,
    0
  );

  const returning = stateResults.reduce(
    (sum, item) => sum + item.returning,
    0
  );

  const changed = stateResults.reduce(
    (sum, item) => sum + item.changed,
    0
  );

  console.log(
    `${state}: ${stateResults.length} pages | ` +
    `${forward} forward | ${returning} return | ` +
    `${changed} links to change`
  );
}

console.log("\nPages processed:", results.length);
console.log("Issues found:", allIssues.length);

if (allIssues.length > 0) {
  const reportFile = path.join(
    ROOT,
    "route-migration-issues-four-states.json"
  );

  fs.writeFileSync(
    reportFile,
    JSON.stringify(allIssues, null, 2),
    "utf8"
  );

  console.log(
    "Issue report saved: route-migration-issues-four-states.json"
  );

  console.log("\nFirst 30 issues:");

  allIssues.slice(0, 30).forEach((issue) => {
    console.log("-", issue);
  });
}

console.log("\n============================================");

if (applyChanges) {
  console.log("Migration applied to identifiable route links.");
} else {
  console.log("DRY RUN ONLY — no page files were changed.");
  console.log("Do not apply until the report is reviewed.");
}