import fs from "node:fs";

const inputFile = "page-audit-report.csv";
const outputFile = "missing-sitemap-pages.csv";

function parseCSVLine(line) {
  const result = [];
  let value = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"' && insideQuotes && line[i + 1] === '"') {
      value += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      result.push(value);
      value = "";
    } else {
      value += char;
    }
  }

  result.push(value);
  return result;
}

if (!fs.existsSync(inputFile)) {
  console.error(`File not found: ${inputFile}`);
  process.exit(1);
}

const content = fs
  .readFileSync(inputFile, "utf8")
  .replace(/^\uFEFF/, "")
  .trim();

const lines = content.split(/\r?\n/);
const headers = parseCSVLine(lines[0]);
const sitemapIndex = headers.findIndex(
  (header) => header.trim().toLowerCase() === "in sitemap"
);

if (sitemapIndex === -1) {
  console.error("Could not find the 'In Sitemap' column.");
  console.log("Columns found:", headers);
  process.exit(1);
}

const missingRows = lines.slice(1).filter((line) => {
  const columns = parseCSVLine(line);
  return (columns[sitemapIndex] || "").trim().toUpperCase() === "NO";
});

fs.writeFileSync(
  outputFile,
  "\uFEFF" + [lines[0], ...missingRows].join("\r\n"),
  "utf8"
);

console.log("--------------------------------");
console.log("LOADZY SITEMAP AUDIT");
console.log("--------------------------------");
console.log("Missing sitemap rows:", missingRows.length);
console.log("Report created:", outputFile);
console.log("--------------------------------");
