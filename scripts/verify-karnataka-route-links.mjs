import fs from "node:fs";

const locations = JSON.parse(
  fs.readFileSync("data/locations.json", "utf8")
).filter((item) => item.state === "Karnataka");

let total = 0;

for (const location of locations) {
  const file = `app/${location.slug}/page.tsx`;
  if (!fs.existsSync(file)) continue;

  const content = fs.readFileSync(file, "utf8");
  const start = content.indexOf("{/* FORWARD ROUTES */}");
  const end = content.indexOf("{/* NEARBY AREAS */}");

  if (start < 0 || end < start) continue;

  const section = content.slice(start, end);
  const matches = section.matchAll(
    /href="(\/(?!routes\/)[^"]+)"/g
  );

  for (const match of matches) {
    total++;
    console.log(`${location.slug} => ${match[1]}`);
  }
}

console.log("\nTotal old route links:", total);