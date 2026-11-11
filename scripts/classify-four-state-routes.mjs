import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data/locations.json");
const auditPath = path.resolve("route-link-audit-four-states.json");

if (!fs.existsSync(dataPath) || !fs.existsSync(auditPath)) {
  throw new Error("Required data or audit report is missing.");
}

const locations = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const audit = JSON.parse(fs.readFileSync(auditPath, "utf8"));

function cleanText(value) {
  return String(value ?? "")
    .replace(/\s*(?:→|â†’)\s*$/g, "")
    .trim();
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const results = [];

for (const page of audit.pages) {
  const location = locations.find(
    (item) => item.slug === page.slug && item.state === page.state
  );

  if (!location) {
    throw new Error(`Location record not found: ${page.slug}`);
  }

  const name = escapeRegex(location.name);
  const forwardPattern = new RegExp(`^${name}\\s+to\\s+.+$`, "i");
  const returnPattern = new RegExp(`^.+\\s+to\\s+${name}$`, "i");

  const forward = [];
  const returning = [];
  const other = [];

  for (const link of page.links) {
    const label = cleanText(link.text);

    if (forwardPattern.test(label)) {
      forward.push({ ...link, cleanLabel: label });
    } else if (returnPattern.test(label)) {
      returning.push({ ...link, cleanLabel: label });
    } else if (/\bto\b/i.test(label)) {
      other.push({ ...link, cleanLabel: label });
    }
  }

  results.push({
    state: page.state,
    name: location.name,
    slug: page.slug,
    forwardCount: forward.length,
    returnCount: returning.length,
    otherRouteLikeCount: other.length,
    forwardSamples: forward.slice(0, 2),
    returnSamples: returning.slice(0, 2),
    otherSamples: other.slice(0, 3),
  });
}

const report = {
  generatedAt: new Date().toISOString(),
  totalPages: results.length,
  states: {},
  incompletePages: results.filter(
    (page) => page.forwardCount === 0 || page.returnCount === 0
  ),
  nonStandardPages: results.filter(
    (page) => page.forwardCount !== 25 || page.returnCount !== 25
  ),
  pages: results,
};

for (const state of audit.states) {
  const pages = results.filter((page) => page.state === state);

  report.states[state] = {
    pages: pages.length,
    forwardCards: pages.reduce((sum, page) => sum + page.forwardCount, 0),
    returnCards: pages.reduce((sum, page) => sum + page.returnCount, 0),
    nonStandardPages: pages.filter(
      (page) => page.forwardCount !== 25 || page.returnCount !== 25
    ).length,
  };
}

const outputPath = path.resolve("route-link-classification-four-states.json");
fs.writeFileSync(outputPath, JSON.stringify(report, null, 2), "utf8");

console.log("----------------------------------------");
console.log("FOUR-STATE ROUTE CLASSIFICATION");
console.log("----------------------------------------");
console.log(`Pages classified: ${report.totalPages}`);

for (const [state, counts] of Object.entries(report.states)) {
  console.log(
    `${state}: ${counts.pages} pages | ` +
    `${counts.forwardCards} forward | ` +
    `${counts.returnCards} return | ` +
    `${counts.nonStandardPages} non-standard`
  );
}

console.log(`Pages needing review: ${report.nonStandardPages.length}`);
console.log(`Report: ${outputPath}`);
console.log("READ-ONLY. No website files were changed.");