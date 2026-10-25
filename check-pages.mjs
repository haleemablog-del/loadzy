import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://www.loadzyinfra.in";
const APP_DIR = path.join(process.cwd(), "app");
const REPORT_FILE = path.join(process.cwd(), "page-audit-report.csv");
const CONCURRENCY = 10;

function findPageFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      findPageFiles(fullPath, results);
    } else if (item.name === "page.tsx" || item.name === "page.jsx") {
      results.push(fullPath);
    }
  }

  return results;
}

function fileToRoute(file) {
  let relative = path.relative(APP_DIR, path.dirname(file));
  if (relative === ".") return "/";

  const parts = relative.split(path.sep);

  // Skip Next.js route groups such as (marketing).
  const filtered = parts.filter(
    (part) => !(part.startsWith("(") && part.endsWith(")"))
  );

  // Dynamic routes need actual parameter values to test.
  if (filtered.some((part) => part.startsWith("[") || part.startsWith("@"))) {
    return null;
  }

  return "/" + filtered.join("/");
}

function csvEscape(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

async function checkUrl(route) {
  const url = new URL(route, SITE_URL).href;

  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });

    return {
      route,
      url,
      status: response.status,
      result: response.ok ? "LIVE_OK" : "HTTP_ERROR",
      finalUrl: response.url,
    };
  } catch (error) {
    return {
      route,
      url,
      status: "",
      result: "REQUEST_FAILED",
      finalUrl: error.message,
    };
  }
}

async function getSitemapPaths() {
  try {
    const response = await fetch(`${SITE_URL}/sitemap.xml`, {
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) return new Set();

    const xml = await response.text();
    const paths = [...xml.matchAll(/<loc>\s*(.*?)\s*<\/loc>/g)]
      .map((match) => {
        try {
          const parsed = new URL(match[1]);
          return parsed.pathname.replace(/\/+$/, "") || "/";
        } catch {
          return null;
        }
      })
      .filter(Boolean);

    return new Set(paths);
  } catch {
    return new Set();
  }
}

async function main() {
  console.log("Finding Next.js pages...");

  const files = findPageFiles(APP_DIR);
  const routes = new Map();
  const dynamicFiles = [];

  for (const file of files) {
    const route = fileToRoute(file);

    if (route === null) {
      dynamicFiles.push(path.relative(process.cwd(), file));
      continue;
    }

    routes.set(route, path.relative(process.cwd(), file));
  }

  const sitemapPaths = await getSitemapPaths();
  const routeList = [...routes.keys()];

  console.log(`Found ${routeList.length} static routes.`);
  console.log("Checking live website in batches...");

  const results = [];

  for (let i = 0; i < routeList.length; i += CONCURRENCY) {
    const batch = routeList.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(batch.map(checkUrl));
    results.push(...batchResults);

    console.log(`Checked ${results.length}/${routeList.length}`);
  }

  const rows = results.map((item) => ({
    "Local File": routes.get(item.route),
    "Route": item.route,
    "Live URL": item.url,
    "HTTP Status": item.status,
    "Live Result": item.result,
    "In Sitemap": sitemapPaths.has(item.route) ? "YES" : "NO",
    "Final URL / Error": item.finalUrl,
  }));

  const headers = Object.keys(rows[0] ?? {
    "Local File": "",
    "Route": "",
    "Live URL": "",
    "HTTP Status": "",
    "Live Result": "",
    "In Sitemap": "",
    "Final URL / Error": "",
  });

  const csv = [
    headers.map(csvEscape).join(","),
    ...rows.map((row) =>
      headers.map((header) => csvEscape(row[header])).join(",")
    ),
  ].join("\n");

  fs.writeFileSync(REPORT_FILE, "\uFEFF" + csv, "utf8");

  const live = results.filter((r) => r.result === "LIVE_OK").length;
  const failed = results.length - live;
  const missingFromSitemap = rows.filter((r) => r["In Sitemap"] === "NO").length;

  console.log("\n--- LOADZY PAGE AUDIT ---");
  console.log(`Static routes found: ${routeList.length}`);
  console.log(`Live responses OK: ${live}`);
  console.log(`HTTP errors / failed requests: ${failed}`);
  console.log(`Routes missing from sitemap: ${missingFromSitemap}`);
  console.log(`Dynamic page templates skipped: ${dynamicFiles.length}`);
  console.log(`Report saved: ${REPORT_FILE}`);

  if (dynamicFiles.length) {
    console.log("\nDynamic templates skipped (need real URL values):");
    for (const file of dynamicFiles) console.log(`- ${file}`);
  }
}

main().catch((error) => {
  console.error("Audit failed:", error);
  process.exitCode = 1;
});
