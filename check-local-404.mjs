import fs from "node:fs";

const BASE_URL = "http://localhost:3000";

const routes = fs.readFileSync("./all-local-routes.txt", "utf8")
  .split(/\r?\n/)
  .map(route => route.trim())
  .filter(Boolean);

const results = [];

async function checkRoute(route) {
  try {
    const response = await fetch(`${BASE_URL}${route}`, {
      redirect: "manual",
      signal: AbortSignal.timeout(20000),
    });

    return {
      route,
      status: response.status,
      result:
        response.status === 404 ? "404 NOT FOUND" :
        response.status >= 500 ? "SERVER ERROR" :
        response.status >= 300 ? "REDIRECT" :
        "WORKING",
      error: "",
      redirect: response.headers.get("location") || "",
    };
  } catch (err) {
    return {
      route,
      status: "ERROR",
      result: "FETCH FAILED",
      error: err.message,
      redirect: "",
    };
  }
}

async function main() {
  console.log(`Testing ${routes.length} routes...`);

  for (let i = 0; i < routes.length; i += 5) {
    const batch = routes.slice(i, i + 5);
    const checked = await Promise.all(batch.map(checkRoute));
    results.push(...checked);

    console.log(`Checked ${results.length}/${routes.length}`);
  }

  const columns = ["route", "status", "result", "error", "redirect"];

  const csv = [
    columns.join(","),
    ...results.map(row =>
      columns.map(key =>
        `"${String(row[key]).replaceAll('"', '""')}"`
      ).join(",")
    ),
  ].join("\n");

  fs.writeFileSync("./loadzy-404-report.csv", csv, "utf8");

  console.log("\nAUDIT COMPLETE");
  console.log("Total:", results.length);
  console.log("Working:", results.filter(x => x.result === "WORKING").length);
  console.log("404:", results.filter(x => x.status === 404).length);
  console.log("Server errors:", results.filter(x => x.result === "SERVER ERROR").length);
  console.log("Fetch failures:", results.filter(x => x.result === "FETCH FAILED").length);
  console.log("Redirects:", results.filter(x => x.result === "REDIRECT").length);
  console.log("Report: loadzy-404-report.csv");
}

main();