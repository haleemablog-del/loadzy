import fs from "node:fs";
import path from "node:path";

const dataPath = path.resolve("data/locations.json");
const backupPath = `${dataPath}.backup-district-pages-${new Date()
  .toISOString()
  .replace(/[:.]/g, "-")}`;

const districts = [
  { name: "Chamarajanagar", towns: ["Gundlupet", "Yelandur", "Kollegal", "Hanur"] },
  { name: "Chikkaballapura", towns: ["Gauribidanur", "Gudibanda", "Bagepalli", "Sidlaghatta", "Chintamani"] },
  { name: "Chikkamagaluru", towns: ["Sringeri", "Koppa", "Narasimharajapura", "Tarikere", "Birur", "Kadur", "Mudigere", "Kudremukh"] },
  { name: "Chitradurga", towns: ["Molakalmuru", "Challakere", "Holalkere", "Hosadurga", "Hiriyur"] },
  { name: "Dakshina Kannada", towns: ["Mangaluru", "Mulki", "Moodabidri", "Ullal", "Bantwal", "Beltangady", "Puttur", "Sullia"] },
  { name: "Davanagere", towns: ["Harihar", "Honnali", "Channagiri", "Jagalur"] },
  { name: "Dharwad", towns: ["Hubballi", "Alnavar", "Navalgund", "Annigeri", "Kalghatgi", "Kundgol"] },
  { name: "Gadag", towns: ["Gadag-Betageri", "Nargund", "Ron", "Gajendragad", "Naregal", "Mulgund", "Shirhatti", "Lakshmeshwar", "Mundargi"] },
  { name: "Hassan", towns: ["Sakleshpur", "Belur", "Arsikere", "Alur", "Arkalgud", "Holenarsipur", "Channarayapatna"] },
  { name: "Haveri", towns: ["Shiggaon", "Bankapura", "Savanur", "Hangal", "Byadgi", "Hirekerur", "Ranebennur"] },
  { name: "Kalaburagi", towns: ["Aland", "Afzalpur", "Chincholi", "Sedam", "Chitapur", "Shahabad", "Wadi", "Jevargi"] },
  { name: "Kodagu", towns: ["Madikeri", "Somwarpet", "Kushalnagar", "Virajpet"] },
  { name: "Kolar", towns: ["Srinivaspur", "Malur", "Bangarapet", "Robertsonpet (K.G.F.)", "Mulbagal"] },
  { name: "Koppal", towns: ["Yelburga", "Kushtagi", "Gangavathi"] },
  { name: "Mandya", towns: ["Krishnarajpet", "Nagamangala", "Pandavapura", "Srirangapatna", "Maddur", "Malavalli"] },
  { name: "Mysuru", towns: ["Nanjangud", "Hunsur", "Krishnarajanagara (K.R. Nagar)", "Bannur", "Piriyapatna", "Heggadadevankote (H.D. Kote)", "Saragur (Sargur)", "Tirumakudal Narsipur (T. Narasipura)", "Hinkal", "Hootagalli", "Srirampura", "Elwala (Yelwal)", "Bogadi", "Belvata", "Koorgalli", "Kadakola", "Byrapura", "Gargeswari"] },
  { name: "Raichur", towns: ["Mudgal", "Lingasugur", "Devadurga", "Manvi", "Sindhanur", "Hatti Gold Mines"] },
  { name: "Shivamogga", towns: ["Sagar", "Sorab", "Siralkoppa", "Shikaripura", "Hosanagara", "Thirthahalli", "Bhadravati"] },
  { name: "Tumakuru", towns: ["Chikkanayakanahalli", "Sira", "Pavagada", "Madhugiri", "Koratagere", "Gubbi", "Tiptur", "Turuvekere", "Kunigal"] },
  { name: "Udupi", towns: ["Kundapura", "Saligrama", "Karkala"] },
  { name: "Uttara Kannada", towns: ["Karwar", "Dandeli", "Haliyal", "Yellapur", "Mundgod", "Sirsi", "Ankola", "Kumta", "Siddapur", "Honnavar", "Bhatkal"] },
  { name: "Vijayanagara", towns: ["Hosapete", "Kotturu", "Kudligi", "Harapanahalli"] },
  { name: "Vijayapura", towns: ["Indi", "Sindgi", "Basavana Bagevadi", "Muddebihal", "Talikota"] },
  { name: "Yadgir", towns: ["Yadgir", "Shorapur", "Shahapur", "Gurmitkal", "Bhimarayanagudi"] },
];

const slugify = (value) =>
  value.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const locations = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const existingSlugs = new Set(locations.map((item) => item.slug).filter(Boolean));

for (const district of districts) {
  const slug = `${slugify(district.name)}-district-transport`;
  const townSlugs = district.towns.map((town) => `${slugify(town)}-transport`);

  console.log(`\nDISTRICT: ${district.name} → ${slug}`);
  console.log(`Towns listed: ${district.towns.length}`);

  for (const townSlug of townSlugs) {
    console.log(`  ${existingSlugs.has(townSlug) ? "EXISTS" : "CHECK"} ${townSlug}`);
  }

  console.log(
    existingSlugs.has(slug) ? "District record already exists" : "District record missing"
  );
}


const missingDistricts = districts
  .map((district) => {
   const slug = `${slugify(district.name)}-district-transport`;

    const existing = locations.find((item) => item.slug === slug);
    if (existing) return null;

    return {
      name: district.name,
      slug,
      state: "Karnataka",
      district: district.name,
      routes: district.towns,
      returnRoutes: district.towns,
      nearbyAreas: district.towns,
      famousFor: [
        `${district.name} district commercial and local transport`,
      ],
      goods: [
        "Agricultural produce",
        "Commercial goods",
        "Household shifting goods",
        "Industrial goods",
      ],
    };
  })
  .filter(Boolean);

if (missingDistricts.length === 0) {
  console.log("All district records already exist. Nothing to add.");
} else {
  fs.copyFileSync(dataPath, backupPath);

  const updatedLocations = [...locations, ...missingDistricts];

  fs.writeFileSync(
    dataPath,
    JSON.stringify(updatedLocations, null, 2) + "\n",
    "utf8"
  );

  console.log("\nKarnataka district records added:", missingDistricts.length);
  console.log("Existing records preserved:", locations.length);
  console.log("Total location records now:", updatedLocations.length);
  console.log("Backup saved:", backupPath);

  for (const district of missingDistricts) {
    console.log("ADDED:", district.slug);
  }
}
