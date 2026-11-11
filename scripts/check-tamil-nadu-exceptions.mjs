import fs from "node:fs";

const names = [
  "kundrathur", "sriperumbudur", "oragadam",
  "krishnagiri", "madurai", "ranipet", "salem",
  "kolathur", "tiruchirappalli", "ambur",
  "vaniyambadi", "jolarpet", "tiruppur",
  "tiruvallur", "gummidipoondi", "poonamallee",
  "avadi", "minjur", "vellore",
];

for (const name of names) {
  const file = `app/${name}-transport/page.tsx`;
  const source = fs.readFileSync(file, "utf8");

  const dynamicRoutes = (source.match(/\/routes\//g) || []).length;
  const oldLinks = (
    source.match(/href=["']\/[^"']+-transport["']/g) || []
  ).length;

  console.log(
    `${name} | Dynamic routes: ${dynamicRoutes} | Old links: ${oldLinks}`
  );
}