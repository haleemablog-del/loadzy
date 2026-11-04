  import fs from "node:fs";
  import path from "node:path";

  const filePath = path.resolve("data/locations.json");
  const backupPath = path.resolve("data/locations.backup.json");

  if (!fs.existsSync(filePath)) {
    console.error("ERROR: data/locations.json was not found.");
    process.exit(1);
  }

  const locations = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (!Array.isArray(locations) || locations.length === 0) {
    console.error("ERROR: locations.json must contain a non-empty array.");
    process.exit(1);
  }

  const targetSlugs = new Set([
    "periyanaickenpalayam-transport",
    "vellalore-transport",
    "kinathukadavu-transport",
    "perur-transport",
    "vedapatti-transport",
    "othakkalmandapam-transport",
    "anaimalai-transport",
    "samathur-transport",
    "suleeswaranpatti-transport",
    "thondamuthur-transport",
    "chettipalayam-transport",
    "ettimadai-transport",


      "cuddalore-transport",
    "chidambaram-transport",
    "neyveli-transport",
    "virudhachalam-transport",
    "panruti-transport",
    "vadalur-transport",
    "nellikuppam-transport",
    "tittakudi-transport",
    "kurinjipadi-transport",
    "parangipettai-transport",
    "bhuvanagiri-transport",
    "kattumannarkoil-transport",
    "srimushnam-transport",
    "annamalai-nagar-transport",
    "killai-transport",
    "melpattampakkam-transport",

      "dharmapuri-transport",
    "harur-transport",
    "palacode-transport",
    "pennagaram-transport",
    "pappireddipatti-transport",
    "karimangalam-transport",
    "nallampalli-transport",
    "morappur-transport",
    "bommidi-transport",
    "kadathur-transport",
    "dindigul-transport",
  "palani-transport",
  "kodaikanal-transport",
  "oddanchatram-transport",
  "vedasandur-transport",
  "natham-transport",
  "nilakottai-transport",
  "batlagundu-transport",
  "ayyalur-transport",
  "chinnalapatti-transport",
  "guziliamparai-transport",
  "sithayankottai-transport",
    "erode-transport",
    "gobichettipalayam-transport",
    "bhavani-transport",
    "sathyamangalam-transport",
    "perundurai-transport",
    "kangeyam-transport",
    "modakurichi-transport",
    "kodumudi-transport",
    "anthiyur-transport",
    "chennimalai-transport",
    "nambiyur-transport",
    "arachalur-transport",
    "avalpoondurai-transport",
      "sivagiri-transport",
    "kallakurichi-transport",
    "chinnasalem-transport",
    "ulundurpet-transport",
    "sankarapuram-transport",
    "tirukoilur-transport",
    "thiyagadurgam-transport",
    "rishivandiyam-transport",
    "kalvarayan-hills-transport",
      "manalurpet-transport",

    // Kancheepuram
    "kancheepuram-transport",
    "kundrathur-transport",
    "sriperumbudur-transport",
    "uthiramerur-transport",
    "walajabad-transport",
    "oragadam-transport",
    "sunguvarchatram-transport",
    "padappai-transport",
    "manimangalam-transport",

    // Kanniyakumari
    "nagercoil-transport",
    "marthandam-transport",
    "kuzhithurai-transport",
    "colachel-transport",
    "padmanabhapuram-transport",
    "thuckalay-transport",
    "kanyakumari-transport",
    "suchindram-transport",
    "boothapandi-transport",
    "aralvaimozhi-transport",
    "eraniel-transport",
    "monday-market-transport",
    "karungal-transport",
    "thingalnagar-transport",

    // Karur
    "karur-transport",
    "kulithalai-transport",
    "aravakurichi-transport",
    "pugalur-transport",
    "krishnarayapuram-transport",
    "pallapatti-transport",
    "thanthoni-transport",
    "vangal-transport",
    "nerur-transport",

    // Krishnagiri
    "krishnagiri-transport",
    "hosur-transport",
    "denkanikottai-transport",
    "kaveripattinam-transport",
    "uthangarai-transport",
    "pochampalli-transport",
    "bargur-transport",
    "shoolagiri-transport",
    "kelamangalam-transport",
    "mathigiri-transport",

    // Madurai
    "madurai-transport",
    "melur-transport",
    "usilampatti-transport",
    "thirumangalam-transport",
    "vadipatti-transport",
    "sholavandan-transport",
    "alanganallur-transport",
    "peraiyur-transport",
    "t-kallupatti-transport",
    "paravai-transport",
    "avaniyapuram-transport",
    "thirunagar-transport",
    "othakadai-transport",
  ]);

  // Suggested destinations only. Review before publishing.
  const destinations = [
    "Coimbatore",
    "Tiruppur",
    "Erode",
    "Salem",
    "Chennai",
    "Bengaluru",
    "Hosur",
    "Krishnagiri",
    "Dharmapuri",
    "Vellore",
    "Tiruchirappalli",
    "Madurai",
    "Dindigul",
    "Karur",
    "Namakkal",
    "Pollachi",
    "Mettupalayam",
    "Ooty",
    "Palakkad",
    "Thrissur",
    "Kochi",
    "Hyderabad",
    "Vijayawada",
    "Mumbai",
    "Pune",
  ];

  function uniqueStrings(values) {
    const seen = new Set();

    return values.filter((value) => {
      if (typeof value !== "string" || !value.trim()) return false;

      const cleaned = value.trim();
      const key = cleaned.toLowerCase();

      if (seen.has(key)) return false;

      seen.add(key);
      return true;
    });
  }

  function expandRoutes(existingRoutes, locationName) {
    const existing = Array.isArray(existingRoutes) ? existingRoutes : [];

    const candidates = [
      ...existing,
      ...destinations.filter(
        (destination) =>
          destination.toLowerCase() !== locationName.toLowerCase()
      ),
    ];

    return uniqueStrings(candidates).slice(0, 25);
  }

  // Nearby suggestions are only added when already provided in the data.
  // Do not invent local neighbourhoods automatically.

  const nearbyAreasBySlug = {
    "periyanaickenpalayam-transport": [
      "Karamadai", "Narasimhanaickenpalayam", "Thudiyalur",
      "Kavundampalayam", "Mettupalayam", "Veerapandi",
      "Press Colony", "NGGO Colony", "Goundampalayam",
      "Coimbatore North"
    ],
    "vellalore-transport": [
      "Podanur", "Singanallur", "Ondipudur", "Ramanathapuram",
      "Ukkadam", "Kurichi", "Eachanari", "Malumichampatti",
      "Sundarapuram", "Nanjundapuram"
    ],
    "kinathukadavu-transport": [
      "Pollachi", "Othakkalmandapam", "Eachanari", "Malumichampatti",
      "Chettipalayam", "Negamam", "Zamin Uthukuli", "Samathur",
      "Kovilpalayam", "Coimbatore"
    ],
    "perur-transport": [
      "Telungupalayam", "Selvapuram", "Ukkadam", "Kuniyamuthur",
      "Vadavalli", "Thondamuthur", "Alandurai", "Siruvani Road",
      "Kovaipudur", "Coimbatore"
    ],
    "vedapatti-transport": [
      "Vadavalli", "Thondamuthur", "Perur", "Marudhamalai",
      "Veerakeralam", "P.N. Pudur", "Somayampalayam",
      "Kalveerampalayam", "Telungupalayam", "Coimbatore"
    ],
    "othakkalmandapam-transport": [
      "Kinathukadavu", "Malumichampatti", "Chettipalayam",
      "Pollachi", "Podanur", "Eachanari", "Vellalore",
      "Sundarapuram", "Madukkarai", "Coimbatore"
    ],
    "anaimalai-transport": [
      "Pollachi", "Vettaikaranpudur", "Sethumadai", "Aliyar",
      "Kottur", "Topslip", "Valparai", "Samathur",
      "Zamin Uthukuli", "Kinathukadavu"
    ],
    "samathur-transport": [
      "Pollachi", "Anaimalai", "Negamam", "Kinathukadavu",
      "Vettaikaranpudur", "Zamin Uthukuli", "Othakkalmandapam",
      "Kottur", "Aliyar", "Coimbatore"
    ],
    "suleeswaranpatti-transport": [
      "Pollachi", "Samathur", "Negamam", "Anaimalai",
      "Kinathukadavu", "Vettaikaranpudur", "Zamin Uthukuli",
      "Othakkalmandapam", "Kottur", "Coimbatore"
    ],
    "thondamuthur-transport": [
      "Perur", "Vadavalli", "Vedapatti", "Alandurai",
      "Telungupalayam", "Kovaipudur", "Siruvani Road",
      "Boluvampatti", "Mathampatti", "Coimbatore"
    ],
    "chettipalayam-transport": [
      "Malumichampatti", "Othakkalmandapam", "Podanur",
      "Kinathukadavu", "Eachanari", "Vellalore",
      "Madukkarai", "Sundarapuram", "Pollachi", "Coimbatore"
    ],
    "ettimadai-transport": [
      "Madukkarai", "Walayar", "K.G. Chavadi", "Navakkarai",
      "Podanur", "Eachanari", "Malumichampatti",
      "Kovaipudur", "Palakkad", "Coimbatore"
    ],
      "cuddalore-transport": [
      "Thirupapuliyur", "Manjakuppam", "Thiruvandipuram", "Cuddalore Port",
      "Kudikadu", "Devanampattinam", "Pudupalayam", "Pathirikuppam",
      "Sothikuppam", "Ariyankuppam"
    ],
    "chidambaram-transport": [
      "Annamalai Nagar", "Bhuvanagiri", "Parangipettai", "Killai",
      "Pichavaram", "Kattumannarkoil", "Lalpet", "Sirkazhi",
      "Kumaratchi", "Kollidam"
    ],
    "neyveli-transport": [
      "Neyveli Township", "Vadalur", "Kurinjipadi", "Panruti",
      "Virudhachalam", "Block 1", "Block 2", "Block 3",
      "Gandhi Nagar", "Vadakkuvellur"
    ],
    "virudhachalam-transport": [
      "Mangalampet", "Kammapuram", "Tittakudi", "Pennadam",
      "Neyveli", "Rajendra Pattinam", "Parur", "Sathukudal",
      "Ramanatham", "Keelacheruvai"
    ],
    "panruti-transport": [
      "Thiruvamur", "Melmampattu", "Nellikuppam", "Kadampuliyur",
      "Marungur", "Kandarakottai", "Pudupet", "Sathipattu",
      "Semmedu", "Maligampattu"
    ],
    "vadalur-transport": [
      "Kurinjipadi", "Neyveli", "Parvathipuram", "Maruvai",
      "Pudhu Nagar", "Thiruthuraiyur", "Sethiyathope", "Panruti",
      "Nellikuppam", "Cuddalore"
    ],
    "nellikuppam-transport": [
      "Panruti", "Melpattampakkam", "Thirukandeswaram", "Kandarakottai",
      "Cuddalore", "Thiruvamur", "Pudupet", "Marungur",
      "Vadalur", "Sathipattu"
    ],
    "tittakudi-transport": [
      "Pennadam", "Virudhachalam", "Mangalampet", "Ramanatham",
      "Keelacheruvai", "Tholudur", "Avinangudi", "Agalur",
      "Tittakudi Market", "Sathukudal"
    ],
    "kurinjipadi-transport": [
      "Vadalur", "Neyveli", "Venkadampettai", "Kullanchavadi",
      "Maruvai", "Thambipettai", "Cuddalore", "Sethiyathope",
      "Nellikuppam", "Panruti"
    ],
    "parangipettai-transport": [
      "Porto Novo", "Killai", "Pichavaram", "Bhuvanagiri",
      "Chidambaram", "Pudupettai", "Puduchatram", "Sethiyathope",
      "Kothattai", "Cuddalore"
    ],
    "bhuvanagiri-transport": [
      "Chidambaram", "Parangipettai", "Kattumannarkoil", "Sethiyathope",
      "Lalpet", "Kothattai", "Puduchatram", "Killai",
      "Pichavaram", "Annamalai Nagar"
    ],
    "kattumannarkoil-transport": [
      "Lalpet", "Bhuvanagiri", "Sethiyathope", "Srimushnam",
      "Kollidam", "Kumaratchi", "Chidambaram", "Parangipettai",
      "Kothattai", "Annamalai Nagar"
    ],
    "srimushnam-transport": [
      "Kattumannarkoil", "Lalpet", "Sethiyathope", "Bhuvanagiri",
      "Virudhachalam", "Chidambaram", "Kollidam", "Kumaratchi",
      "Tittakudi", "Pennadam"
    ],
    "annamalai-nagar-transport": [
      "Chidambaram", "Bhuvanagiri", "Parangipettai", "Kothattai",
      "Killai", "Pichavaram", "Kattumannarkoil", "Lalpet",
      "Sethiyathope", "Puduchatram"
    ],
    "killai-transport": [
      "Pichavaram", "Parangipettai", "Chidambaram", "Bhuvanagiri",
      "Annamalai Nagar", "Kothattai", "Puduchatram", "Porto Novo",
      "Kollidam", "Sethiyathope"
    ],
    "melpattampakkam-transport": [
      "Nellikuppam", "Panruti", "Cuddalore", "Thiruvamur",
      "Pudupet", "Kadampuliyur", "Marungur", "Kandarakottai",
      "Puducherry", "Pathirikuppam"
    ],
      "dharmapuri-transport": [
      "Nallampalli", "Karimangalam", "Palacode", "Harur",
      "Pennagaram", "Morappur", "Kadathur", "Bommidi",
      "Pappireddipatti", "Adhiyamankottai"
    ],
    "harur-transport": [
      "Morappur", "Pappireddipatti", "Kadathur", "Theerthamalai",
      "Kottapatti", "Vachathi", "Dharmapuri", "Salem",
      "Athur", "Pennagaram"
    ],
    "palacode-transport": [
      "Marandahalli", "Karimangalam", "Dharmapuri", "Panjapalli",
      "Rayakottai", "Bommidi", "Nallampalli", "Hosur",
      "Pennagaram", "Adhiyamankottai"
    ],
    "pennagaram-transport": [
      "Hogenakkal", "Dharmapuri", "Nallampalli", "Eriyur",
      "Kadagathur", "Palacode", "Marandahalli", "Bommidi",
      "Harur", "Mettur"
    ],
    "pappireddipatti-transport": [
      "Harur", "Morappur", "Kadathur", "Bommidi", "Athur",
      "Pochampalli", "Dharmapuri", "Salem", "Theerthamalai",
      "Kottapatti"
    ],
    "karimangalam-transport": [
      "Palacode", "Dharmapuri", "Nallampalli", "Marandahalli",
      "Adhiyamankottai", "Bommidi", "Pennagaram", "Harur",
      "Rayakottai", "Hosur"
    ],
    "nallampalli-transport": [
      "Dharmapuri", "Karimangalam", "Palacode", "Pennagaram",
      "Adhiyamankottai", "Bommidi", "Morappur", "Harur",
      "Kadathur", "Pappireddipatti"
    ],
    "morappur-transport": [
      "Harur", "Pappireddipatti", "Kadathur", "Bommidi",
      "Athur", "Kottapatti", "Dharmapuri", "Salem",
      "Pochampalli", "Pennagaram"
    ],
    "bommidi-transport": [
      "Morappur", "Pappireddipatti", "Harur", "Kadathur",
      "Dharmapuri", "Salem", "Karimangalam", "Palacode",
      "Nallampalli", "Athur"
    ],
    "kadathur-transport": [
      "Harur", "Morappur", "Pappireddipatti", "Bommidi",
      "Athur", "Kottapatti", "Dharmapuri", "Salem",
      "Pennagaram", "Palacode"
    ],
    "erode-transport": [
      "Perundurai", "Bhavani", "Gobichettipalayam", "Modakurichi",
      "Chennimalai", "Anthiyur", "Kodumudi", "Sathyamangalam",
      "Nambiyur", "Arachalur"
    ],
    "gobichettipalayam-transport": [
      "Erode", "Sathyamangalam", "Nambiyur", "Anthiyur",
      "Bhavani", "Perundurai", "Chennimalai", "Avinashi",
      "Tiruppur", "Mettupalayam"
    ],
    "bhavani-transport": [
      "Erode", "Anthiyur", "Gobichettipalayam", "Perundurai",
      "Ammapet", "Komarapalayam", "Sankari", "Tiruchengode",
      "Modakurichi", "Kodumudi"
    ],
    "sathyamangalam-transport": [
      "Gobichettipalayam", "Nambiyur", "Anthiyur", "Erode",
      "Mettupalayam", "Bhavani", "Perundurai", "Avinashi",
      "Chennimalai", "Coimbatore"
    ],
    "perundurai-transport": [
      "Erode", "Chennimalai", "Bhavani", "Modakurichi",
      "Kangeyam", "Tiruppur", "Gobichettipalayam", "Kodumudi",
      "Avinashi", "Chennimalai"
    ],
    "kangeyam-transport": [
      "Perundurai", "Erode", "Dharapuram", "Tiruppur",
      "Chennimalai", "Kodumudi", "Modakurichi", "Avinashi",
      "Udumalpet", "Palladam"
    ],
    "modakurichi-transport": [
      "Erode", "Kodumudi", "Perundurai", "Bhavani",
      "Chennimalai", "Kangeyam", "Gobichettipalayam",
      "Arachalur", "Avalpoondurai", "Sivagiri"
    ],
    "kodumudi-transport": [
      "Erode", "Modakurichi", "Bhavani", "Perundurai",
      "Kangeyam", "Karur", "Vellakoil", "Arachalur",
      "Avalpoondurai", "Sivagiri"
    ],
    "anthiyur-transport": [
      "Bhavani", "Gobichettipalayam", "Sathyamangalam", "Erode",
      "Ammapet", "Mettur", "Perundurai", "Nambiyur",
      "Chennimalai", "Kollegal"
    ],
    "chennimalai-transport": [
      "Perundurai", "Erode", "Kangeyam", "Modakurichi",
      "Tiruppur", "Bhavani", "Gobichettipalayam", "Kodumudi",
      "Avinashi", "Dharapuram"
    ],
    "nambiyur-transport": [
      "Gobichettipalayam", "Sathyamangalam", "Erode", "Anthiyur",
      "Perundurai", "Bhavani", "Avinashi", "Tiruppur",
      "Mettupalayam", "Chennimalai"
    ],
    "arachalur-transport": [
      "Erode", "Modakurichi", "Kodumudi", "Perundurai",
      "Avalpoondurai", "Sivagiri", "Kangeyam", "Bhavani",
      "Chennimalai", "Gobichettipalayam"
    ],
    "avalpoondurai-transport": [
      "Erode", "Arachalur", "Modakurichi", "Sivagiri",
      "Kodumudi", "Perundurai", "Kangeyam", "Bhavani",
      "Chennimalai", "Gobichettipalayam"
    ],
    "sivagiri-transport": [
      "Erode", "Kodumudi", "Arachalur", "Avalpoondurai",
      "Modakurichi", "Perundurai", "Bhavani", "Kangeyam",
      "Chennimalai", "Gobichettipalayam"
    ],
      "kallakurichi-transport": [
      "Chinnasalem", "Sankarapuram", "Ulundurpet", "Thiyagadurgam",
      "Rishivandiyam", "Kalvarayan Hills", "Manalurpet", "Tirukoilur",
      "Vriddhachalam", "Attur"
    ],
    "chinnasalem-transport": [
      "Kallakurichi", "Thiyagadurgam", "Sankarapuram", "Ulundurpet",
      "Attur", "Vriddhachalam", "Tirukoilur", "Salem",
      "Rishivandiyam", "Kalvarayan Hills"
    ],
    "ulundurpet-transport": [
      "Kallakurichi", "Tirukoilur", "Villupuram", "Vriddhachalam",
      "Chinnasalem", "Sankarapuram", "Thiyagadurgam", "Panruti",
      "Cuddalore", "Manalurpet"
    ],
    "sankarapuram-transport": [
      "Kallakurichi", "Thiyagadurgam", "Chinnasalem", "Rishivandiyam",
      "Kalvarayan Hills", "Tirukoilur", "Ulundurpet", "Attur",
      "Salem", "Vriddhachalam"
    ],
    "tirukoilur-transport": [
      "Kallakurichi", "Ulundurpet", "Villupuram", "Manalurpet",
      "Thiyagadurgam", "Sankarapuram", "Vriddhachalam", "Tindivanam",
      "Chinnasalem", "Gingee"
    ],
    "thiyagadurgam-transport": [
      "Kallakurichi", "Sankarapuram", "Chinnasalem", "Rishivandiyam",
      "Ulundurpet", "Tirukoilur", "Kalvarayan Hills", "Vriddhachalam",
      "Attur", "Salem"
    ],
    "rishivandiyam-transport": [
      "Kallakurichi", "Sankarapuram", "Thiyagadurgam", "Chinnasalem",
      "Tirukoilur", "Ulundurpet", "Kalvarayan Hills", "Vriddhachalam",
      "Attur", "Salem"
    ],
    "kalvarayan-hills-transport": [
      "Kallakurichi", "Sankarapuram", "Chinnasalem", "Rishivandiyam",
      "Thiyagadurgam", "Attur", "Salem", "Dharmapuri",
      "Tirukoilur", "Ulundurpet"
    ],
    "manalurpet-transport": [
      "Tirukoilur", "Kallakurichi", "Ulundurpet", "Villupuram",
      "Thiyagadurgam", "Sankarapuram", "Chinnasalem", "Vriddhachalam",
      "Tindivanam", "Gingee"
    ],
      "dindigul-transport": [
      "Palani", "Oddanchatram", "Vedasandur", "Natham",
      "Nilakottai", "Batlagundu", "Ayyalur", "Kodaikanal",
      "Chinnalapatti", "Guziliamparai"
    ],
    "palani-transport": [
      "Dindigul", "Kodaikanal", "Oddanchatram", "Udumalpet",
      "Pollachi", "Madurai", "Batlagundu", "Vedasandur"
    ],
    "kodaikanal-transport": [
      "Dindigul", "Palani", "Batlagundu", "Theni",
      "Madurai", "Oddanchatram", "Vedasandur"
    ],
    "oddanchatram-transport": [
      "Dindigul", "Palani", "Vedasandur", "Dharapuram",
      "Madurai", "Batlagundu", "Kangeyam"
    ],
    "vedasandur-transport": [
      "Dindigul", "Oddanchatram", "Ayyalur", "Karur",
      "Natham", "Nilakottai", "Palani"
    ],
    "natham-transport": [
      "Dindigul", "Nilakottai", "Madurai", "Vedasandur",
      "Ayyalur", "Chinnalapatti"
    ],
    "nilakottai-transport": [
      "Dindigul", "Batlagundu", "Natham", "Madurai",
      "Theni", "Vedasandur"
    ],
    "batlagundu-transport": [
      "Dindigul", "Kodaikanal", "Nilakottai", "Theni",
      "Periyakulam", "Palani"
    ],
    "ayyalur-transport": [
      "Dindigul", "Vedasandur", "Natham", "Oddanchatram",
      "Karur", "Palani"
    ],
    "chinnalapatti-transport": [
      "Dindigul", "Natham", "Nilakottai", "Madurai",
      "Vedasandur", "Batlagundu"
    ],
    "guziliamparai-transport": [
      "Dindigul", "Vedasandur", "Karur", "Ayyalur",
      "Oddanchatram", "Palani"
    ],
    "sithayankottai-transport": [
      "Dindigul", "Nilakottai", "Batlagundu", "Natham",
      "Vedasandur", "Chinnalapatti"
    ],
      // Kancheepuram
    "kancheepuram-transport": ["Kundrathur", "Walajabad", "Uthiramerur", "Oragadam"],
    "kundrathur-transport": ["Kancheepuram", "Padappai", "Manimangalam", "Sriperumbudur"],
    "sriperumbudur-transport": ["Kancheepuram", "Oragadam", "Sunguvarchatram", "Padappai"],
    "uthiramerur-transport": ["Kancheepuram", "Walajabad", "Madurantakam"],
    "walajabad-transport": ["Kancheepuram", "Uthiramerur", "Oragadam"],
    "oragadam-transport": ["Sriperumbudur", "Padappai", "Walajabad", "Kancheepuram"],
    "sunguvarchatram-transport": ["Sriperumbudur", "Kancheepuram", "Oragadam"],
    "padappai-transport": ["Kundrathur", "Manimangalam", "Oragadam", "Sriperumbudur"],
    "manimangalam-transport": ["Kundrathur", "Padappai", "Sriperumbudur"],

    // Kanniyakumari
    "nagercoil-transport": ["Suchindram", "Kanyakumari", "Marthandam", "Thuckalay"],
    "marthandam-transport": ["Kuzhithurai", "Karungal", "Nagercoil", "Eraniel"],
    "kuzhithurai-transport": ["Marthandam", "Karungal", "Eraniel"],
    "colachel-transport": ["Thuckalay", "Padmanabhapuram", "Nagercoil"],
    "padmanabhapuram-transport": ["Thuckalay", "Colachel", "Eraniel"],
    "thuckalay-transport": ["Padmanabhapuram", "Colachel", "Nagercoil"],
    "kanyakumari-transport": ["Nagercoil", "Suchindram", "Boothapandi"],
    "suchindram-transport": ["Nagercoil", "Kanyakumari", "Boothapandi"],
    "boothapandi-transport": ["Suchindram", "Nagercoil", "Aralvaimozhi"],
    "aralvaimozhi-transport": ["Boothapandi", "Nagercoil", "Kanyakumari"],
    "eraniel-transport": ["Thuckalay", "Padmanabhapuram", "Marthandam"],
    "monday-market-transport": ["Nagercoil", "Eraniel", "Marthandam"],
    "karungal-transport": ["Marthandam", "Kuzhithurai", "Eraniel"],
    "thingalnagar-transport": ["Thuckalay", "Padmanabhapuram", "Colachel"],

    // Karur
    "karur-transport": ["Pugalur", "Thanthoni", "Vangal", "Nerur"],
    "kulithalai-transport": ["Krishnarayapuram", "Karur", "Vangal"],
    "aravakurichi-transport": ["Karur", "Pallapatti", "Thanthoni"],
    "pugalur-transport": ["Karur", "Vangal", "Nerur"],
    "krishnarayapuram-transport": ["Kulithalai", "Karur", "Vangal"],
    "pallapatti-transport": ["Aravakurichi", "Karur", "Thanthoni"],
    "thanthoni-transport": ["Karur", "Aravakurichi", "Pallapatti"],
    "vangal-transport": ["Karur", "Pugalur", "Nerur"],
    "nerur-transport": ["Karur", "Pugalur", "Vangal"],

    // Krishnagiri
    "krishnagiri-transport": ["Hosur", "Bargur", "Kaveripattinam", "Shoolagiri"],
    "hosur-transport": ["Krishnagiri", "Denkanikottai", "Kelamangalam", "Mathigiri"],
    "denkanikottai-transport": ["Hosur", "Kelamangalam", "Krishnagiri"],
    "kaveripattinam-transport": ["Krishnagiri", "Bargur", "Pochampalli"],
    "uthangarai-transport": ["Pochampalli", "Krishnagiri", "Bargur"],
    "pochampalli-transport": ["Uthangarai", "Kaveripattinam", "Krishnagiri"],
    "bargur-transport": ["Krishnagiri", "Kaveripattinam", "Hosur"],
    "shoolagiri-transport": ["Hosur", "Krishnagiri", "Kelamangalam"],
    "kelamangalam-transport": ["Hosur", "Denkanikottai", "Shoolagiri"],
    "mathigiri-transport": ["Hosur", "Kelamangalam", "Shoolagiri"],

    // Madurai
    "madurai-transport": ["Othakadai", "Melur", "Thirumangalam", "Avaniyapuram"],
    "melur-transport": ["Madurai", "Othakadai", "Alanganallur"],
    "usilampatti-transport": ["Madurai", "Peraiyur", "T. Kallupatti"],
    "thirumangalam-transport": ["Madurai", "Peraiyur", "T. Kallupatti"],
    "vadipatti-transport": ["Madurai", "Sholavandan", "Alanganallur"],
    "sholavandan-transport": ["Vadipatti", "Madurai", "Alanganallur"],
    "alanganallur-transport": ["Madurai", "Melur", "Vadipatti"],
    "peraiyur-transport": ["Usilampatti", "Thirumangalam", "T. Kallupatti"],
    "t-kallupatti-transport": ["Peraiyur", "Thirumangalam", "Usilampatti"],
    "paravai-transport": ["Madurai", "Othakadai", "Vadipatti"],
    "avaniyapuram-transport": ["Madurai", "Thirumangalam", "Paravai"],
    "thirunagar-transport": ["Madurai", "Thirumangalam", "Avaniyapuram"],
    "othakadai-transport": ["Madurai", "Melur", "Paravai"],
  };

  function expandNearbyAreas(existingAreas, slug) {
    const suggestions = nearbyAreasBySlug[slug] || [];

    return uniqueStrings([
      ...(Array.isArray(existingAreas) ? existingAreas : []),
      ...suggestions,
    ]).slice(0, 40);
  }


  // Create a backup before writing any changes.
  fs.copyFileSync(filePath, backupPath);

  const updated = locations.map((location) => {
    const slug = String(location.slug || "");

    if (!targetSlugs.has(slug)) {
      console.log(`PROTECTED (outside target batch): ${slug}`);
      return location;
    }

    return {
      ...location,
      routes: expandRoutes(location.routes, String(location.name || "")),
      returnRoutes: expandRoutes(
        location.returnRoutes,
        String(location.name || "")
      ),
      nearbyAreas: expandNearbyAreas(location.nearbyAreas, slug),
    };
  });

  fs.writeFileSync(
    filePath,
    JSON.stringify(updated, null, 2) + "\n",
    "utf8"
  );

  console.log("\nLocation data expansion complete.");
  console.log(`Locations in file: ${updated.length}`);
  console.log(`Backup saved to: ${backupPath}`);

  for (const location of updated) {
    if (!targetSlugs.has(String(location.slug || ""))) continue;

    console.log(
      `${location.slug}: ${location.routes.length} forward routes, ` +
        `${location.returnRoutes.length} return routes, ` +
        `${location.nearbyAreas.length} nearby areas`
    );
  }