import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data/locations.json");
const states = new Set([
  "Karnataka",
  "Tamil Nadu",
  "Kerala",
  "Andhra Pradesh",
]);

const outputPath = path.resolve("route-link-audit-four-states.json");

function stop(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(dataPath)) {
  stop("data/locations.json was not found.");
}

const locations = JSON.parse(fs.readFileSync(dataPath, "utf8"));

if (!Array.isArray(locations)) {
  stop("locations.json must contain an array.");
}

const pages = [];
const missingPages = [];

for (const location of locations.filter((item) => states.has(item.state))) {
  const slug = String(location.slug ?? "").trim();
  const file = path.resolve("app", slug, "page.tsx");

  if (!slug || !fs.existsSync(file)) {
    missingPages.push({
      name: location.name,
      slug,
      file: path.relative(process.cwd(), file),
    });
    continue;
  }

  const source = fs.readFileSync(file, "utf8");
  const links = [];
  const linkPattern = /<(Link|a)\b[\s\S]*?<\/\1\s*>/g;

  for (const match of source.matchAll(linkPattern)) {
    const block = match[0];
    const openingTag = block.match(/^<(?:Link|a)\b[\s\S]*?>/);
    const hrefMatch = openingTag?.[0].match(
      /\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|\{([\s\S]*?)\})/
    );

    const href = hrefMatch
      ? hrefMatch[1] ?? hrefMatch[2] ?? `{${hrefMatch[3].trim()}}`
      : "(no href found)";

    const text = block
      .replace(/^<(?:Link|a)\b[\s\S]*?>/, " ")
      .replace(/<\/(?:Link|a)\s*>$/, " ")
      .replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
      .replace(/<[^>]*>/g, " ")
      .replace(/\{([^{}]*)\}/g, " {$1} ")
      .replace(/\s+/g, " ")
      .trim();

    const hasRouteLabel = /\bto\b/i.test(text);
    const isRouteHref = /\/routes\//i.test(href);
    const isOldTransportHref = /\/[^"'{}\s]+-transport(?:["'}?]|$)/i.test(href);
    const isLoadSearchHref = /\/load-search(?:["'}?]|$)/i.test(href);

    if (
      hasRouteLabel ||
      isRouteHref ||
      isOldTransportHref ||
      isLoadSearchHref
    ) {
      links.push({
        href,
        text,
        hasRouteLabel,
        isRouteHref,
        isOldTransportHref,
        isLoadSearchHref,
        line: source.slice(0, match.index).split("\n").length,
      });
    }
  }

  pages.push({
    state: location.state,
    name: location.name,
    slug,
    file: path.relative(process.cwd(), file),
    candidateRouteLinks: links.length,
    dynamicRouteLinks: links.filter((link) => link.isRouteHref).length,
    oldTransportLinks: links.filter((link) => link.isOldTransportHref).length,
    loadSearchLinks: links.filter((link) => link.isLoadSearchHref).length,
    links,
  });
}

const report = {
  generatedAt: new Date().toISOString(),
  states: [...states],
  expectedPages: locations.filter((item) => states.has(item.state)).length,
  auditedPages: pages.length,
  missingPages,
  pages,
};

fs.writeFileSync(outputPath, JSON.stringify(report, null, 2), "utf8");

console.log("----------------------------------------");
console.log("FOUR-STATE ROUTE LINK AUDIT");
console.log("----------------------------------------");

for (const state of states) {
  const statePages = pages.filter((page) => page.state === state);
  console.log(
    `${state}: ${statePages.length} pages | ` +
      `${statePages.reduce((sum, page) => sum + page.candidateRouteLinks, 0)} candidate links`
  );
}

console.log("----------------------------------------");
console.log(`Expected pages: ${report.expectedPages}`);
console.log(`Audited pages: ${report.auditedPages}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log(`Report: ${outputPath}`);
console.log("READ-ONLY AUDIT. No page files were changed.");