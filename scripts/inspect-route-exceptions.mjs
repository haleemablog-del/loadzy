import fs from "node:fs";
import path from "node:path";

const inputPath = path.resolve("route-link-classification-four-states.json");
const outputPath = path.resolve("route-link-exceptions-four-states.json");

if (!fs.existsSync(inputPath)) {
  throw new Error("Classification report not found.");
}

const report = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const exceptions = report.nonStandardPages.map((page) => ({
  state: page.state,
  name: page.name,
  slug: page.slug,
  forwardCount: page.forwardCount,
  returnCount: page.returnCount,
  otherRouteLikeCount: page.otherRouteLikeCount,
  forwardSamples: page.forwardSamples,
  returnSamples: page.returnSamples,
  otherSamples: page.otherSamples,
}));

const output = {
  generatedAt: new Date().toISOString(),
  totalExceptions: exceptions.length,
  states: {},
  pages: exceptions,
};

for (const state of Object.keys(report.states)) {
  const pages = exceptions.filter((page) => page.state === state);

  output.states[state] = {
    exceptionPages: pages.length,
    pages: pages.map((page) => ({
      name: page.name,
      slug: page.slug,
      forwardCount: page.forwardCount,
      returnCount: page.returnCount,
      otherRouteLikeCount: page.otherRouteLikeCount,
    })),
  };
}

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf8");

console.log("----------------------------------------");
console.log("FOUR-STATE ROUTE EXCEPTIONS");
console.log("----------------------------------------");
console.log(`Exception pages: ${exceptions.length}`);

for (const [state, details] of Object.entries(output.states)) {
  console.log(`${state}: ${details.exceptionPages} pages`);
}

console.log(`Report: ${outputPath}`);
console.log("READ-ONLY. No website pages were changed.");