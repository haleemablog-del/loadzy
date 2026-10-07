export type LoadzyLocation = {
  name: string;
  slug: string;
  type: "state" | "district" | "city" | "town";
  parent?: string;
};

export const loadzyLocations: LoadzyLocation[] = [
      {
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    type: "state",
  },
  // Tamil Nadu — Districts

  { name: "Ariyalur", slug: "ariyalur", type: "district", parent: "tamil-nadu" },
    // Ariyalur District — Cities & Towns

  { name: "Ariyalur", slug: "ariyalur", type: "city", parent: "ariyalur" },
  { name: "Jayankondam", slug: "jayankondam", type: "city", parent: "ariyalur" },
  { name: "Udayarpalayam", slug: "udayarpalayam", type: "town", parent: "ariyalur" },
  { name: "Varadharajanpettai", slug: "varadharajanpettai", type: "town", parent: "ariyalur" },
  { name: "Chengalpattu", slug: "chengalpattu", type: "district", parent: "tamil-nadu" },
    // Chengalpattu District — Cities & Towns

  { name: "Tambaram", slug: "tambaram", type: "city", parent: "chengalpattu" },
  { name: "Chengalpattu", slug: "chengalpattu", type: "city", parent: "chengalpattu" },
  { name: "Madurantakam", slug: "madurantakam", type: "city", parent: "chengalpattu" },
  { name: "Maraimalai Nagar", slug: "maraimalai-nagar", type: "city", parent: "chengalpattu" },
  { name: "Nandivaram-Guduvancheri", slug: "nandivaram-guduvancheri", type: "city", parent: "chengalpattu" },
  { name: "Mamallapuram", slug: "mamallapuram", type: "city", parent: "chengalpattu" },

  { name: "Acharapakkam", slug: "acharapakkam", type: "town", parent: "chengalpattu" },
  { name: "Edakazhinadu", slug: "edakazhinadu", type: "town", parent: "chengalpattu" },
  { name: "Karunkuzhi", slug: "karunkuzhi", type: "town", parent: "chengalpattu" },
  { name: "Thirukazhukundram", slug: "thirukazhukundram", type: "town", parent: "chengalpattu" },
  { name: "Thiruporur", slug: "thiruporur", type: "town", parent: "chengalpattu" },
  { name: "Chennai", slug: "chennai", type: "district", parent: "tamil-nadu" },
    // Chennai District — Major Transport Locations

  { name: "Chennai", slug: "chennai", type: "city", parent: "chennai" },
  { name: "Ambattur", slug: "ambattur", type: "town", parent: "chennai" },
  { name: "Avadi", slug: "avadi", type: "city", parent: "chennai" },
  { name: "Madhavaram", slug: "madhavaram", type: "town", parent: "chennai" },
  { name: "Manali", slug: "manali", type: "town", parent: "chennai" },
  { name: "Perambur", slug: "perambur", type: "town", parent: "chennai" },
  { name: "Tondiarpet", slug: "tondiarpet", type: "town", parent: "chennai" },
  { name: "Royapuram", slug: "royapuram", type: "town", parent: "chennai" },
  { name: "Egmore", slug: "egmore", type: "town", parent: "chennai" },
  { name: "Anna Nagar", slug: "anna-nagar", type: "town", parent: "chennai" },
  { name: "Guindy", slug: "guindy", type: "town", parent: "chennai" },
  { name: "Alandur", slug: "alandur", type: "town", parent: "chennai" },
  { name: "Adyar", slug: "adyar", type: "town", parent: "chennai" },
  { name: "Velachery", slug: "velachery", type: "town", parent: "chennai" },
  { name: "Sholinganallur", slug: "sholinganallur", type: "town", parent: "chennai" },
  { name: "Perungudi", slug: "perungudi", type: "town", parent: "chennai" },
  { name: "Porur", slug: "porur", type: "town", parent: "chennai" },
  { name: "Mogappair", slug: "mogappair", type: "town", parent: "chennai" },
  { name: "Poonamallee", slug: "poonamallee", type: "town", parent: "chennai" },
  { name: "Coimbatore", slug: "coimbatore", type: "district", parent: "tamil-nadu" },
    // Coimbatore District — Cities & Towns

  { name: "Coimbatore", slug: "coimbatore", type: "city", parent: "coimbatore" },
  { name: "Pollachi", slug: "pollachi", type: "city", parent: "coimbatore" },
  { name: "Karumathampatti", slug: "karumathampatti", type: "city", parent: "coimbatore" },

  { name: "Mettupalayam", slug: "mettupalayam", type: "town", parent: "coimbatore" },
  { name: "Valparai", slug: "valparai", type: "town", parent: "coimbatore" },
  { name: "Annur", slug: "annur", type: "town", parent: "coimbatore" },
  { name: "Madukkarai", slug: "madukkarai", type: "town", parent: "coimbatore" },
  { name: "Karamadai", slug: "karamadai", type: "town", parent: "coimbatore" },
  { name: "Sulur", slug: "sulur", type: "town", parent: "coimbatore" },
  { name: "Kinathukadavu", slug: "kinathukadavu", type: "town", parent: "coimbatore" },
  { name: "Perur", slug: "perur", type: "town", parent: "coimbatore" },
  { name: "Thondamuthur", slug: "thondamuthur", type: "town", parent: "coimbatore" },
  { name: "Cuddalore", slug: "cuddalore", type: "district", parent: "tamil-nadu" },
    // Cuddalore District — Cities & Towns

  // Municipalities
  { name: "Cuddalore", slug: "cuddalore", type: "city", parent: "cuddalore" },
  { name: "Chidambaram", slug: "chidambaram", type: "city", parent: "cuddalore" },
  { name: "Nellikuppam", slug: "nellikuppam", type: "city", parent: "cuddalore" },
  { name: "Panruti", slug: "panruti", type: "city", parent: "cuddalore" },
  { name: "Tittakudi", slug: "tittakudi", type: "city", parent: "cuddalore" },
  { name: "Vadalur", slug: "vadalur", type: "city", parent: "cuddalore" },
  { name: "Virudhachalam", slug: "virudhachalam", type: "city", parent: "cuddalore" },

  // Town Panchayats
  { name: "Annamalainagar", slug: "annamalainagar", type: "town", parent: "cuddalore" },
  { name: "Kattumannarkoil", slug: "kattumannarkoil", type: "town", parent: "cuddalore" },
  { name: "Parangipettai", slug: "parangipettai", type: "town", parent: "cuddalore" },
  { name: "Kurinjipadi", slug: "kurinjipadi", type: "town", parent: "cuddalore" },
  { name: "Bhuvanagiri", slug: "bhuvanagiri", type: "town", parent: "cuddalore" },
  { name: "Gangaikondan", slug: "gangaikondan", type: "town", parent: "cuddalore" },
  { name: "Pennadam", slug: "pennadam", type: "town", parent: "cuddalore" },
  { name: "Srimushnam", slug: "srimushnam", type: "town", parent: "cuddalore" },
  { name: "Sethiyathope", slug: "sethiyathope", type: "town", parent: "cuddalore" },
  { name: "Lalpettai", slug: "lalpettai", type: "town", parent: "cuddalore" },
  { name: "Mangalampettai", slug: "mangalampettai", type: "town", parent: "cuddalore" },
  { name: "Thorapadi", slug: "thorapadi", type: "town", parent: "cuddalore" },
  { name: "Melpattampakkam", slug: "melpattampakkam", type: "town", parent: "cuddalore" },
  { name: "Killai", slug: "killai", type: "town", parent: "cuddalore" },
  { name: "Dharmapuri", slug: "dharmapuri", type: "district", parent: "tamil-nadu" },
    // Dharmapuri District — Cities & Towns

  // Municipalities
  { name: "Dharmapuri", slug: "dharmapuri", type: "city", parent: "dharmapuri" },
  { name: "Harur", slug: "harur", type: "city", parent: "dharmapuri" },

  // Town Panchayats
  { name: "Kadathur", slug: "kadathur", type: "town", parent: "dharmapuri" },
  { name: "Karimangalam", slug: "karimangalam", type: "town", parent: "dharmapuri" },
  { name: "Palacode", slug: "palacode", type: "town", parent: "dharmapuri" },
  { name: "Papparapatti", slug: "papparapatti", type: "town", parent: "dharmapuri" },
  { name: "Pappireddipatti", slug: "pappireddipatti", type: "town", parent: "dharmapuri" },
  { name: "Pennagaram", slug: "pennagaram", type: "town", parent: "dharmapuri" },
  { name: "Marandahalli", slug: "marandahalli", type: "town", parent: "dharmapuri" },
  { name: "Kambainallur", slug: "kambainallur", type: "town", parent: "dharmapuri" },
  { name: "B. Mallapuram", slug: "b-mallapuram", type: "town", parent: "dharmapuri" },
  { name: "Dindigul", slug: "dindigul", type: "district", parent: "tamil-nadu" },
    // Dindigul District — Cities & Towns

  // Corporation / Municipalities
  { name: "Dindigul", slug: "dindigul", type: "city", parent: "dindigul" },
  { name: "Palani", slug: "palani", type: "city", parent: "dindigul" },
  { name: "Oddanchatram", slug: "oddanchatram", type: "city", parent: "dindigul" },
  { name: "Kodaikanal", slug: "kodaikanal", type: "city", parent: "dindigul" },

  // Town Panchayats
  { name: "Agaram", slug: "agaram", type: "town", parent: "dindigul" },
  { name: "Ammayanaickanur", slug: "ammayanaickanur", type: "town", parent: "dindigul" },
  { name: "Ayakudi", slug: "ayakudi", type: "town", parent: "dindigul" },
  { name: "Ayyalur", slug: "ayyalur", type: "town", parent: "dindigul" },
  { name: "Ayyampalayam", slug: "ayyampalayam", type: "town", parent: "dindigul" },
  { name: "Balasamudram", slug: "balasamudram", type: "town", parent: "dindigul" },
  { name: "Batlagundu", slug: "batlagundu", type: "town", parent: "dindigul" },
  { name: "Chinnalapatti", slug: "chinnalapatti", type: "town", parent: "dindigul" },
  { name: "Eriodu", slug: "eriodu", type: "town", parent: "dindigul" },
  { name: "Kannivadi", slug: "kannivadi", type: "town", parent: "dindigul" },
  { name: "Keeranur", slug: "keeranur", type: "town", parent: "dindigul" },
  { name: "Natham", slug: "natham", type: "town", parent: "dindigul" },
  { name: "Neikkarapatti", slug: "neikkarapatti", type: "town", parent: "dindigul" },
  { name: "Nilakottai", slug: "nilakottai", type: "town", parent: "dindigul" },
  { name: "Palayam", slug: "palayam", type: "town", parent: "dindigul" },
  { name: "Pannaikadu", slug: "pannaikadu", type: "town", parent: "dindigul" },
  { name: "Pattiveeranpatti", slug: "pattiveeranpatti", type: "town", parent: "dindigul" },
  { name: "Sevugampatti", slug: "sevugampatti", type: "town", parent: "dindigul" },
  { name: "Sithayankottai", slug: "sithayankottai", type: "town", parent: "dindigul" },
  { name: "Sriramapuram", slug: "sriramapuram", type: "town", parent: "dindigul" },
  { name: "Thadikombu", slug: "thadikombu", type: "town", parent: "dindigul" },
  { name: "Vadamadurai", slug: "vadamadurai", type: "town", parent: "dindigul" },
  { name: "Vedasandur", slug: "vedasandur", type: "town", parent: "dindigul" },
  { name: "Erode", slug: "erode", type: "district", parent: "tamil-nadu" },
    // Erode District — Cities & Towns

  // Corporation / Municipalities
  { name: "Erode", slug: "erode", type: "city", parent: "erode" },
  { name: "Bhavani", slug: "bhavani", type: "city", parent: "erode" },
  { name: "Gobichettipalayam", slug: "gobichettipalayam", type: "city", parent: "erode" },
  { name: "Sathyamangalam", slug: "sathyamangalam", type: "city", parent: "erode" },
  { name: "Punjai Puliampatti", slug: "punjai-puliampatti", type: "city", parent: "erode" },
  { name: "Perundurai", slug: "perundurai", type: "city", parent: "erode" },

  // Town Panchayats
  { name: "Ammapettai", slug: "ammapettai", type: "town", parent: "erode" },
  { name: "Anthiyur", slug: "anthiyur", type: "town", parent: "erode" },
  { name: "Appakudal", slug: "appakudal", type: "town", parent: "erode" },
  { name: "Arachalur", slug: "arachalur", type: "town", parent: "erode" },
  { name: "Ariyappampalayam", slug: "ariyappampalayam", type: "town", parent: "erode" },
  { name: "Athani", slug: "athani", type: "town", parent: "erode" },
  { name: "Avalpoondurai", slug: "avalpoondurai", type: "town", parent: "erode" },
  { name: "Bhavanisagar", slug: "bhavanisagar", type: "town", parent: "erode" },
  { name: "Chennasamudram", slug: "chennasamudram", type: "town", parent: "erode" },
  { name: "Chennimalai", slug: "chennimalai", type: "town", parent: "erode" },
  { name: "Chithode", slug: "chithode", type: "town", parent: "erode" },
  { name: "Elathur", slug: "elathur", type: "town", parent: "erode" },
  { name: "Jambai", slug: "jambai", type: "town", parent: "erode" },
  { name: "Kanjikoil", slug: "kanjikoil", type: "town", parent: "erode" },
  { name: "Karumandi Chellipalayam", slug: "karumandi-chellipalayam", type: "town", parent: "erode" },
  { name: "Kasipalayam", slug: "kasipalayam", type: "town", parent: "erode" },
  { name: "Kembainaickenpalayam", slug: "kembainaickenpalayam", type: "town", parent: "erode" },
  { name: "Kilambadi", slug: "kilambadi", type: "town", parent: "erode" },
  { name: "Kodumudi", slug: "kodumudi", type: "town", parent: "erode" },
  { name: "Kolappalur", slug: "kolappalur", type: "town", parent: "erode" },
  { name: "Kollankoil", slug: "kollankoil", type: "town", parent: "erode" },
  { name: "Kuhalur", slug: "kuhalur", type: "town", parent: "erode" },
  { name: "Lakkampatti", slug: "lakkampatti", type: "town", parent: "erode" },
  { name: "Modakurichi", slug: "modakurichi", type: "town", parent: "erode" },
  { name: "Nallampatti", slug: "nallampatti", type: "town", parent: "erode" },
  { name: "Nambiyur", slug: "nambiyur", type: "town", parent: "erode" },
  { name: "Nasiyanur", slug: "nasiyanur", type: "town", parent: "erode" },
  { name: "Nerunjipettai", slug: "nerunjipettai", type: "town", parent: "erode" },
  { name: "Olagadam", slug: "olagadam", type: "town", parent: "erode" },
  { name: "P. Mettupalayam", slug: "p-mettupalayam", type: "town", parent: "erode" },
  { name: "Pallapalayam", slug: "pallapalayam", type: "town", parent: "erode" },
  { name: "Pasur", slug: "pasur", type: "town", parent: "erode" },
  { name: "Periyakodiveri", slug: "periyakodiveri", type: "town", parent: "erode" },
  { name: "Pethampalayam", slug: "pethampalayam", type: "town", parent: "erode" },
  { name: "Salangapalayam", slug: "salangapalayam", type: "town", parent: "erode" },
  { name: "Sivagiri", slug: "sivagiri", type: "town", parent: "erode" },
  { name: "Unjalur", slug: "unjalur", type: "town", parent: "erode" },
  { name: "Vadugapatti", slug: "vadugapatti", type: "town", parent: "erode" },
  { name: "Vaniputhur", slug: "vaniputhur", type: "town", parent: "erode" },
  { name: "Vellottamparappu", slug: "vellottamparappu", type: "town", parent: "erode" },
  { name: "Vengampudur", slug: "vengampudur", type: "town", parent: "erode" },
  { name: "Kallakurichi", slug: "kallakurichi", type: "district", parent: "tamil-nadu" },
    // Kallakurichi District — Cities & Towns

  // Municipalities
  { name: "Kallakurichi", slug: "kallakurichi", type: "city", parent: "kallakurichi" },
  { name: "Tirukoilur", slug: "tirukoilur", type: "city", parent: "kallakurichi" },
  { name: "Ulundurpet", slug: "ulundurpet", type: "city", parent: "kallakurichi" },

  // Town Panchayats
  { name: "Manalurpet", slug: "manalurpet", type: "town", parent: "kallakurichi" },
  { name: "Thiyagadurgam", slug: "thiyagadurgam", type: "town", parent: "kallakurichi" },
  { name: "Vadakkanandal", slug: "vadakkanandal", type: "town", parent: "kallakurichi" },
  { name: "Chinnasalem", slug: "chinnasalem", type: "town", parent: "kallakurichi" },
  { name: "Sankarapuram", slug: "sankarapuram", type: "town", parent: "kallakurichi" },
  { name: "Kancheepuram", slug: "kancheepuram", type: "district", parent: "tamil-nadu" },
    // Kancheepuram District — Cities & Towns

  // Municipalities
  { name: "Kancheepuram", slug: "kancheepuram", type: "city", parent: "kancheepuram" },
  { name: "Kundrathur", slug: "kundrathur", type: "city", parent: "kancheepuram" },
  { name: "Mangadu", slug: "mangadu", type: "city", parent: "kancheepuram" },

  // Town Panchayats
  { name: "Sriperumbudur", slug: "sriperumbudur", type: "town", parent: "kancheepuram" },
  { name: "Uthiramerur", slug: "uthiramerur", type: "town", parent: "kancheepuram" },
  { name: "Walajabad", slug: "walajabad", type: "town", parent: "kancheepuram" },
  { name: "Padappai", slug: "padappai", type: "town", parent: "kancheepuram" },
  { name: "Pammal", slug: "pammal", type: "town", parent: "kancheepuram" },
  { name: "Sunguvarchatram", slug: "sunguvarchatram", type: "town", parent: "kancheepuram" },
  { name: "Karur", slug: "karur", type: "district", parent: "tamil-nadu" },
    // Karur District — Cities & Towns

  // Municipalities
  { name: "Karur", slug: "karur", type: "city", parent: "karur" },
  { name: "Kulithalai", slug: "kulithalai", type: "city", parent: "karur" },
  { name: "Pugalur", slug: "pugalur", type: "city", parent: "karur" },

  // Town Panchayats
  { name: "Aravakurichi", slug: "aravakurichi", type: "town", parent: "karur" },
  { name: "Pallapatti", slug: "pallapatti", type: "town", parent: "karur" },
  { name: "Krishnarayapuram", slug: "krishnarayapuram", type: "town", parent: "karur" },
  { name: "Marudur", slug: "marudur", type: "town", parent: "karur" },
  { name: "Puliyur", slug: "puliyur", type: "town", parent: "karur" },
  { name: "TNPL Pugalur", slug: "tnpl-pugalur", type: "town", parent: "karur" },
  { name: "Velliyanai", slug: "velliyanai", type: "town", parent: "karur" },
  { name: "Krishnagiri", slug: "krishnagiri", type: "district", parent: "tamil-nadu" },
    // Krishnagiri District — Cities & Towns

  // Municipalities
  { name: "Krishnagiri", slug: "krishnagiri", type: "city", parent: "krishnagiri" },
  { name: "Hosur", slug: "hosur", type: "city", parent: "krishnagiri" },

  // Town Panchayats
  { name: "Bargur", slug: "bargur", type: "town", parent: "krishnagiri" },
  { name: "Kaveripattinam", slug: "kaveripattinam", type: "town", parent: "krishnagiri" },
  { name: "Kelamangalam", slug: "kelamangalam", type: "town", parent: "krishnagiri" },
  { name: "Nagojanahalli", slug: "nagojanahalli", type: "town", parent: "krishnagiri" },
  { name: "Uthangarai", slug: "uthangarai", type: "town", parent: "krishnagiri" },
  { name: "Denkanikottai", slug: "denkanikottai", type: "town", parent: "krishnagiri" },
  { name: "Madurai", slug: "madurai", type: "district", parent: "tamil-nadu" },
    // Madurai District — Cities & Towns

  // Corporation / Municipalities
  { name: "Madurai", slug: "madurai", type: "city", parent: "madurai" },
  { name: "Melur", slug: "melur", type: "city", parent: "madurai" },
  { name: "Thirumangalam", slug: "thirumangalam", type: "city", parent: "madurai" },
  { name: "Usilampatti", slug: "usilampatti", type: "city", parent: "madurai" },

  // Town Panchayats
  { name: "Alanganallur", slug: "alanganallur", type: "town", parent: "madurai" },
  { name: "Elumalai", slug: "elumalai", type: "town", parent: "madurai" },
  { name: "Peraiyur", slug: "peraiyur", type: "town", parent: "madurai" },
  { name: "Vadipatti", slug: "vadipatti", type: "town", parent: "madurai" },
  { name: "T. Kallupatti", slug: "t-kallupatti", type: "town", parent: "madurai" },
  { name: "Sholavandan", slug: "sholavandan", type: "town", parent: "madurai" },
  { name: "Paravai", slug: "paravai", type: "town", parent: "madurai" },
  { name: "Mayiladuthurai", slug: "mayiladuthurai", type: "district", parent: "tamil-nadu" },
    // Mayiladuthurai District — Cities & Towns

  // Municipalities
  { name: "Mayiladuthurai", slug: "mayiladuthurai", type: "city", parent: "mayiladuthurai" },
  { name: "Sirkali", slug: "sirkali", type: "city", parent: "mayiladuthurai" },

  // Town Panchayats
  { name: "Kuthalam", slug: "kuthalam", type: "town", parent: "mayiladuthurai" },
  { name: "Vaitheeswarankoil", slug: "vaitheeswarankoil", type: "town", parent: "mayiladuthurai" },
  { name: "Tharangambadi", slug: "tharangambadi", type: "town", parent: "mayiladuthurai" },
  { name: "Manalmedu", slug: "manalmedu", type: "town", parent: "mayiladuthurai" },
  { name: "Nagapattinam", slug: "nagapattinam", type: "district", parent: "tamil-nadu" },
    // Nagapattinam District — Cities & Towns

  // Municipality
  { name: "Nagapattinam", slug: "nagapattinam", type: "city", parent: "nagapattinam" },

  // Town Panchayats
  { name: "Kilvelur", slug: "kilvelur", type: "town", parent: "nagapattinam" },
  { name: "Vedaranyam", slug: "vedaranyam", type: "town", parent: "nagapattinam" },
  { name: "Thalanayar", slug: "thalanayar", type: "town", parent: "nagapattinam" },
  { name: "Thirumarugal", slug: "thirumarugal", type: "town", parent: "nagapattinam" },
  { name: "Thittacheri", slug: "thittacheri", type: "town", parent: "nagapattinam" },
  { name: "Vellankanni", slug: "vellankanni", type: "town", parent: "nagapattinam" },
  { name: "Kanniyakumari", slug: "kanniyakumari", type: "district", parent: "tamil-nadu" },
    // Kanniyakumari District — Cities & Towns

  { name: "Nagercoil", slug: "nagercoil", type: "city", parent: "kanniyakumari" },
  { name: "Kuzhithurai", slug: "kuzhithurai", type: "city", parent: "kanniyakumari" },
  { name: "Padmanabhapuram", slug: "padmanabhapuram", type: "city", parent: "kanniyakumari" },
  { name: "Colachel", slug: "colachel", type: "city", parent: "kanniyakumari" },
  { name: "Kollankodu", slug: "kollankodu", type: "city", parent: "kanniyakumari" },

  { name: "Kanyakumari", slug: "kanyakumari", type: "town", parent: "kanniyakumari" },
  { name: "Thuckalay", slug: "thuckalay", type: "town", parent: "kanniyakumari" },
  { name: "Eraniel", slug: "eraniel", type: "town", parent: "kanniyakumari" },
  { name: "Kottaram", slug: "kottaram", type: "town", parent: "kanniyakumari" },
  { name: "Suchindram", slug: "suchindram", type: "town", parent: "kanniyakumari" },
  { name: "Namakkal", slug: "namakkal", type: "district", parent: "tamil-nadu" },
    // Namakkal District — Cities & Towns

  // Municipalities
  { name: "Namakkal", slug: "namakkal", type: "city", parent: "namakkal" },
  { name: "Tiruchengode", slug: "tiruchengode", type: "city", parent: "namakkal" },
  { name: "Kumarapalayam", slug: "kumarapalayam", type: "city", parent: "namakkal" },
  { name: "Rasipuram", slug: "rasipuram", type: "city", parent: "namakkal" },

  // Town Panchayats
  { name: "Mallasamudram", slug: "mallasamudram", type: "town", parent: "namakkal" },
  { name: "Mohanur", slug: "mohanur", type: "town", parent: "namakkal" },
  { name: "Pallipalayam Agraharam", slug: "pallipalayam-agraharam", type: "town", parent: "namakkal" },
  { name: "Paramathi", slug: "paramathi", type: "town", parent: "namakkal" },
  { name: "Pattinam", slug: "pattinam", type: "town", parent: "namakkal" },
  { name: "Pillanallur", slug: "pillanallur", type: "town", parent: "namakkal" },
  { name: "Senthamangalam", slug: "senthamangalam", type: "town", parent: "namakkal" },
  { name: "Velur", slug: "velur", type: "town", parent: "namakkal" },
  { name: "Venkarai", slug: "venkarai", type: "town", parent: "namakkal" },
  { name: "Erumaipatti", slug: "erumaipatti", type: "town", parent: "namakkal" },
  { name: "Perambalur", slug: "perambalur", type: "district", parent: "tamil-nadu" },
    // Perambalur District — Cities & Towns

  { name: "Perambalur", slug: "perambalur", type: "city", parent: "perambalur" },
  { name: "Arumbavur", slug: "arumbavur", type: "town", parent: "perambalur" },
  { name: "Kurumbalur", slug: "kurumbalur", type: "town", parent: "perambalur" },
  { name: "Labbaikudikadu", slug: "labbaikudikadu", type: "town", parent: "perambalur" },
  { name: "Poolambadi", slug: "poolambadi", type: "town", parent: "perambalur" },
  { name: "Puthanampatti", slug: "puthanampatti", type: "town", parent: "perambalur" },
  { name: "Pudukkottai", slug: "pudukkottai", type: "district", parent: "tamil-nadu" },
    // Pudukkottai District — Cities & Towns

  { name: "Pudukkottai", slug: "pudukkottai", type: "city", parent: "pudukkottai" },
  { name: "Aranthangi", slug: "aranthangi", type: "city", parent: "pudukkottai" },

  { name: "Alangudi", slug: "alangudi", type: "town", parent: "pudukkottai" },
  { name: "Annavasal", slug: "annavasal", type: "town", parent: "pudukkottai" },
  { name: "Gandarvakottai", slug: "gandarvakottai", type: "town", parent: "pudukkottai" },
  { name: "Keeranur", slug: "keeranur", type: "town", parent: "pudukkottai" },
  { name: "Karambakkudi", slug: "karambakkudi", type: "town", parent: "pudukkottai" },
  { name: "Illuppur", slug: "illuppur", type: "town", parent: "pudukkottai" },
  { name: "Keeramangalam", slug: "keeramangalam", type: "town", parent: "pudukkottai" },
  { name: "Kothamangalam", slug: "kothamangalam", type: "town", parent: "pudukkottai" },
  { name: "Ponnamaravathi", slug: "ponnamaravathi", type: "town", parent: "pudukkottai" },
  { name: "Thirumayam", slug: "thirumayam", type: "town", parent: "pudukkottai" },
  { name: "Ramanathapuram", slug: "ramanathapuram", type: "district", parent: "tamil-nadu" },
    // Ramanathapuram District — Cities & Towns

  // Municipalities
  { name: "Ramanathapuram", slug: "ramanathapuram", type: "city", parent: "ramanathapuram" },
  { name: "Rameswaram", slug: "rameswaram", type: "city", parent: "ramanathapuram" },
  { name: "Kilakarai", slug: "kilakarai", type: "city", parent: "ramanathapuram" },
  { name: "Paramakudi", slug: "paramakudi", type: "city", parent: "ramanathapuram" },

  // Town Panchayats
  { name: "Mandapam", slug: "mandapam", type: "town", parent: "ramanathapuram" },
  { name: "Sayalkudi", slug: "sayalkudi", type: "town", parent: "ramanathapuram" },
  { name: "Kamuthi", slug: "kamuthi", type: "town", parent: "ramanathapuram" },
  { name: "Abiramam", slug: "abiramam", type: "town", parent: "ramanathapuram" },
  { name: "Mudukulathur", slug: "mudukulathur", type: "town", parent: "ramanathapuram" },
  { name: "Rajasingamangalam", slug: "rajasingamangalam", type: "town", parent: "ramanathapuram" },
  { name: "Thondi", slug: "thondi", type: "town", parent: "ramanathapuram" },
  { name: "Ranipet", slug: "ranipet", type: "district", parent: "tamil-nadu" },
    // Ranipet District — Cities & Towns

  // Municipalities
  { name: "Ranipet", slug: "ranipet", type: "city", parent: "ranipet" },
  { name: "Arcot", slug: "arcot", type: "city", parent: "ranipet" },
  { name: "Melvisharam", slug: "melvisharam", type: "city", parent: "ranipet" },
  { name: "Arakkonam", slug: "arakkonam", type: "city", parent: "ranipet" },

  // Town Panchayats
  { name: "Walajapet", slug: "walajapet", type: "town", parent: "ranipet" },
  { name: "Sholinghur", slug: "sholinghur", type: "town", parent: "ranipet" },
  { name: "Ammoor", slug: "ammoor", type: "town", parent: "ranipet" },
  { name: "Kalavai", slug: "kalavai", type: "town", parent: "ranipet" },
  { name: "Nemili", slug: "nemili", type: "town", parent: "ranipet" },
  { name: "Timiri", slug: "timiri", type: "town", parent: "ranipet" },
  { name: "Salem", slug: "salem", type: "district", parent: "tamil-nadu" },
    // Salem District — Cities & Towns

  // Corporation / Municipalities
  { name: "Salem", slug: "salem", type: "city", parent: "salem" },
  { name: "Attur", slug: "attur", type: "city", parent: "salem" },
  { name: "Mettur", slug: "mettur", type: "city", parent: "salem" },
  { name: "Edappadi", slug: "edappadi", type: "city", parent: "salem" },
  { name: "Edanganasalai", slug: "edanganasalai", type: "city", parent: "salem" },
{ name: "Idappadi", slug: "idappadi", type: "city", parent: "salem" },
{ name: "Narasingapuram", slug: "narasingapuram", type: "city", parent: "salem" },
  { name: "Nangavalli", slug: "nangavalli", type: "town", parent: "salem" },
  { name: "Omalur", slug: "omalur", type: "town", parent: "salem" },
  { name: "Sankari", slug: "sankari", type: "town", parent: "salem" },
  { name: "Tharamangalam", slug: "tharamangalam", type: "town", parent: "salem" },
  { name: "Vazhapadi", slug: "vazhapadi", type: "town", parent: "salem" },
  { name: "Ayothiapattinam", slug: "ayothiapattinam", type: "town", parent: "salem" },
  { name: "Belur", slug: "belur", type: "town", parent: "salem" },
  { name: "Ethapur", slug: "ethapur", type: "town", parent: "salem" },
  { name: "Gangavalli", slug: "gangavalli", type: "town", parent: "salem" },
  { name: "Jalakantapuram", slug: "jalakantapuram", type: "town", parent: "salem" },
  { name: "Kadayampatti", slug: "kadayampatti", type: "town", parent: "salem" },
  { name: "Kolathur", slug: "kolathur", type: "town", parent: "salem" },
  { name: "Mecheri", slug: "mecheri", type: "town", parent: "salem" },
  { name: "Pethanaickenpalayam", slug: "pethanaickenpalayam", type: "town", parent: "salem" },
  { name: "Sentharapatti", slug: "sentharapatti", type: "town", parent: "salem" },
  { name: "Thedavur", slug: "thedavur", type: "town", parent: "salem" },
  { name: "Sivaganga", slug: "sivaganga", type: "district", parent: "tamil-nadu" },
    // Sivaganga District — Cities & Towns

  // Municipalities
  { name: "Sivaganga", slug: "sivaganga", type: "city", parent: "sivaganga" },
  { name: "Karaikudi", slug: "karaikudi", type: "city", parent: "sivaganga" },
  { name: "Devakottai", slug: "devakottai", type: "city", parent: "sivaganga" },

  // Town Panchayats
  { name: "Manamadurai", slug: "manamadurai", type: "town", parent: "sivaganga" },
  { name: "Ilayangudi", slug: "ilayangudi", type: "town", parent: "sivaganga" },
  { name: "Kanadukathan", slug: "kanadukathan", type: "town", parent: "sivaganga" },
  { name: "Kandanur", slug: "kandanur", type: "town", parent: "sivaganga" },
  { name: "Nattarasankottai", slug: "nattarasankottai", type: "town", parent: "sivaganga" },
  { name: "Singampunari", slug: "singampunari", type: "town", parent: "sivaganga" },
  { name: "Thirupuvanam", slug: "thirupuvanam", type: "town", parent: "sivaganga" },
  { name: "Kottaiyur", slug: "kottaiyur", type: "town", parent: "sivaganga" },
  { name: "Tenkasi", slug: "tenkasi", type: "district", parent: "tamil-nadu" },
    // Tenkasi District — Cities & Towns

  // Municipalities
  { name: "Tenkasi", slug: "tenkasi", type: "city", parent: "tenkasi" },
  { name: "Sankarankovil", slug: "sankarankovil", type: "city", parent: "tenkasi" },
  { name: "Kadayanallur", slug: "kadayanallur", type: "city", parent: "tenkasi" },
  { name: "Puliyankudi", slug: "puliyankudi", type: "city", parent: "tenkasi" },

  // Town Panchayats
  { name: "Alangulam", slug: "alangulam", type: "town", parent: "tenkasi" },
  { name: "Courtallam", slug: "courtallam", type: "town", parent: "tenkasi" },
  { name: "Ilanji", slug: "ilanji", type: "town", parent: "tenkasi" },
  { name: "Keelapavoor", slug: "keelapavoor", type: "town", parent: "tenkasi" },
  { name: "Melagaram", slug: "melagaram", type: "town", parent: "tenkasi" },
  { name: "Sivagiri", slug: "sivagiri", type: "town", parent: "tenkasi" },
  { name: "Surandai", slug: "surandai", type: "town", parent: "tenkasi" },
  { name: "Vasudevanallur", slug: "vasudevanallur", type: "town", parent: "tenkasi" },
  { name: "Ayikudi", slug: "ayikudi", type: "town", parent: "tenkasi" },
  { name: "Thanjavur", slug: "thanjavur", type: "district", parent: "tamil-nadu" },
    // Thanjavur District — Cities & Towns

  // Municipalities
  { name: "Thanjavur", slug: "thanjavur", type: "city", parent: "thanjavur" },
  { name: "Kumbakonam", slug: "kumbakonam", type: "city", parent: "thanjavur" },
  { name: "Pattukkottai", slug: "pattukkottai", type: "city", parent: "thanjavur" },
  { name: "Adirampattinam", slug: "adirampattinam", type: "city", parent: "thanjavur" },

  // Town Panchayats
  { name: "Aduthurai", slug: "aduthurai", type: "town", parent: "thanjavur" },
  { name: "Ammapettai", slug: "ammapettai", type: "town", parent: "thanjavur" },
  { name: "Ayyampettai", slug: "ayyampettai", type: "town", parent: "thanjavur" },
  { name: "Madukkur", slug: "madukkur", type: "town", parent: "thanjavur" },
  { name: "Melattur", slug: "melattur", type: "town", parent: "thanjavur" },
  { name: "Orathanadu", slug: "orathanadu", type: "town", parent: "thanjavur" },
  { name: "Peravurani", slug: "peravurani", type: "town", parent: "thanjavur" },
  { name: "Papanasam", slug: "papanasam", type: "town", parent: "thanjavur" },
  { name: "Swamimalai", slug: "swamimalai", type: "town", parent: "thanjavur" },
  { name: "Thiruvaiyaru", slug: "thiruvaiyaru", type: "town", parent: "thanjavur" },
  { name: "Vallam", slug: "vallam", type: "town", parent: "thanjavur" },
  { name: "Theni", slug: "theni", type: "district", parent: "tamil-nadu" },
    // Theni District — Cities & Towns

  // Municipalities
  { name: "Theni", slug: "theni", type: "city", parent: "theni" },
  { name: "Bodinayakanur", slug: "bodinayakanur", type: "city", parent: "theni" },
  { name: "Periyakulam", slug: "periyakulam", type: "city", parent: "theni" },
  { name: "Cumbum", slug: "cumbum", type: "city", parent: "theni" },
  { name: "Chinnamanur", slug: "chinnamanur", type: "city", parent: "theni" },

  // Town Panchayats
  { name: "Andipatti", slug: "andipatti", type: "town", parent: "theni" },
  { name: "Gudalur", slug: "gudalur", type: "town", parent: "theni" },
  { name: "Kombai", slug: "kombai", type: "town", parent: "theni" },
  { name: "Odaipatti", slug: "odaipatti", type: "town", parent: "theni" },
  { name: "Thevaram", slug: "thevaram", type: "town", parent: "theni" },
  { name: "Uthamapalayam", slug: "uthamapalayam", type: "town", parent: "theni" },
  { name: "Vadugapatti", slug: "vadugapatti", type: "town", parent: "theni" },
  { name: "Thoothukudi", slug: "thoothukudi", type: "district", parent: "tamil-nadu" },
    // Thoothukudi District — Cities & Towns

  // Municipalities
  { name: "Thoothukudi", slug: "thoothukudi", type: "city", parent: "thoothukudi" },
  { name: "Kovilpatti", slug: "kovilpatti", type: "city", parent: "thoothukudi" },
  { name: "Kayalpattinam", slug: "kayalpattinam", type: "city", parent: "thoothukudi" },

  // Town Panchayats
  { name: "Ettayapuram", slug: "ettayapuram", type: "town", parent: "thoothukudi" },
  { name: "Kadambur", slug: "kadambur", type: "town", parent: "thoothukudi" },
  { name: "Kalugumalai", slug: "kalugumalai", type: "town", parent: "thoothukudi" },
  { name: "Nazareth", slug: "nazareth", type: "town", parent: "thoothukudi" },
  { name: "Sathankulam", slug: "sathankulam", type: "town", parent: "thoothukudi" },
  { name: "Srivaikuntam", slug: "srivaikuntam", type: "town", parent: "thoothukudi" },
  { name: "Tiruchendur", slug: "tiruchendur", type: "town", parent: "thoothukudi" },
  { name: "Udangudi", slug: "udangudi", type: "town", parent: "thoothukudi" },
  { name: "Vilathikulam", slug: "vilathikulam", type: "town", parent: "thoothukudi" },
  { name: "Tiruchirappalli", slug: "tiruchirappalli", type: "district", parent: "tamil-nadu" },
    // Tiruchirappalli District — Cities & Towns

  // Corporation / Municipalities
  { name: "Tiruchirappalli", slug: "tiruchirappalli", type: "city", parent: "tiruchirappalli" },
  { name: "Manapparai", slug: "manapparai", type: "city", parent: "tiruchirappalli" },
  { name: "Thuraiyur", slug: "thuraiyur", type: "city", parent: "tiruchirappalli" },
  { name: "Musiri", slug: "musiri", type: "city", parent: "tiruchirappalli" },

  // Town Panchayats
  { name: "Lalgudi", slug: "lalgudi", type: "town", parent: "tiruchirappalli" },
  { name: "Manachanallur", slug: "manachanallur", type: "town", parent: "tiruchirappalli" },
  { name: "Puliyur", slug: "puliyur", type: "town", parent: "tiruchirappalli" },
  { name: "Thottiyam", slug: "thottiyam", type: "town", parent: "tiruchirappalli" },
  { name: "Uppiliapuram", slug: "uppiliapuram", type: "town", parent: "tiruchirappalli" },
  { name: "Pullambadi", slug: "pullambadi", type: "town", parent: "tiruchirappalli" },
  { name: "Thuvakudi", slug: "thuvakudi", type: "town", parent: "tiruchirappalli" },
  { name: "Koothappar", slug: "koothappar", type: "town", parent: "tiruchirappalli" },
  { name: "Thirunelveli", slug: "tirunelveli", type: "district", parent: "tamil-nadu" },
    // Tirunelveli District — Cities & Towns

  // Municipalities
  { name: "Tirunelveli", slug: "tirunelveli", type: "city", parent: "tirunelveli" },
  { name: "Ambasamudram", slug: "ambasamudram", type: "city", parent: "tirunelveli" },
  { name: "Sankarankovil", slug: "sankarankovil", type: "city", parent: "tirunelveli" },
  { name: "Kalakadu", slug: "kalakadu", type: "city", parent: "tirunelveli" },
{ name: "Vikramasingapuram", slug: "vikramasingapuram", type: "city", parent: "tirunelveli" },

  // Towns
  { name: "Cheranmahadevi", slug: "cheranmahadevi", type: "town", parent: "tirunelveli" },
  { name: "Kalakkad", slug: "kalakkad", type: "town", parent: "tirunelveli" },
  { name: "Manimutharu", slug: "manimutharu", type: "town", parent: "tirunelveli" },
  { name: "Moolakaraipatti", slug: "moolakaraipatti", type: "town", parent: "tirunelveli" },
  { name: "Nanguneri", slug: "nanguneri", type: "town", parent: "tirunelveli" },
  { name: "Panagudi", slug: "panagudi", type: "town", parent: "tirunelveli" },
  { name: "Sathankulam", slug: "sathankulam", type: "town", parent: "tirunelveli" },
  { name: "Thisayanvilai", slug: "thisayanvilai", type: "town", parent: "tirunelveli" },
  { name: "Vadakkuvalliyur", slug: "vadakkuvalliyur", type: "town", parent: "tirunelveli" },
  { name: "Valliyur", slug: "valliyur", type: "town", parent: "tirunelveli" },
  { name: "Tirupathur", slug: "tirupathur", type: "district", parent: "tamil-nadu" },
    // Tirupathur District — Cities & Towns

  // Municipalities
  { name: "Tirupattur", slug: "tirupattur", type: "city", parent: "tirupathur" },
  { name: "Jolarpet", slug: "jolarpet", type: "city", parent: "tirupathur" },
  { name: "Vaniyambadi", slug: "vaniyambadi", type: "city", parent: "tirupathur" },
  { name: "Ambur", slug: "ambur", type: "city", parent: "tirupathur" },

  // Town Panchayats
  { name: "Alangayam", slug: "alangayam", type: "town", parent: "tirupathur" },
  { name: "Natrampalli", slug: "natrampalli", type: "town", parent: "tirupathur" },
  { name: "Udayendiram", slug: "udayendiram", type: "town", parent: "tirupathur" },
  { name: "Tiruppur", slug: "tiruppur", type: "district", parent: "tamil-nadu" },
    // Tiruppur District — Cities & Towns

  // Corporation / Municipalities
  { name: "Tiruppur", slug: "tiruppur", type: "city", parent: "tiruppur" },
  { name: "Dharapuram", slug: "dharapuram", type: "city", parent: "tiruppur" },
  { name: "Udumalpet", slug: "udumalpet", type: "city", parent: "tiruppur" },
  { name: "Kangeyam", slug: "kangeyam", type: "city", parent: "tiruppur" },
  { name: "Palladam", slug: "palladam", type: "city", parent: "tiruppur" },
  { name: "Vellakoil", slug: "vellakoil", type: "city", parent: "tiruppur" },
  { name: "Avinashi", slug: "avinashi", type: "city", parent: "tiruppur" },
{ name: "Thirumuruganpoondi", slug: "thirumuruganpoondi", type: "city", parent: "tiruppur" },

  // Town Panchayats
  { name: "Avinashi", slug: "avinashi", type: "town", parent: "tiruppur" },
  { name: "Chinnakkampalayam", slug: "chinnakkampalayam", type: "town", parent: "tiruppur" },
  { name: "Dhali", slug: "dhali", type: "town", parent: "tiruppur" },
  { name: "Gudimangalam", slug: "gudimangalam", type: "town", parent: "tiruppur" },
  { name: "Kaniyur", slug: "kaniyur", type: "town", parent: "tiruppur" },
  { name: "Kolumam", slug: "kolumam", type: "town", parent: "tiruppur" },
  { name: "Komaralingam", slug: "komaralingam", type: "town", parent: "tiruppur" },
  { name: "Madathukulam", slug: "madathukulam", type: "town", parent: "tiruppur" },
  { name: "Mulanur", slug: "mulanur", type: "town", parent: "tiruppur" },
  { name: "Pongalur", slug: "pongalur", type: "town", parent: "tiruppur" },
  { name: "Samalapuram", slug: "samalapuram", type: "town", parent: "tiruppur" },
  { name: "Sankaramanallur", slug: "sankaramanallur", type: "town", parent: "tiruppur" },
  { name: "Sembianallur", slug: "sembianallur", type: "town", parent: "tiruppur" },
  { name: "Uthukuli", slug: "uthukuli", type: "town", parent: "tiruppur" },
  { name: "Tiruvallur", slug: "tiruvallur", type: "district", parent: "tamil-nadu" },
    // Tiruvallur District — Cities & Towns

  // Municipalities
  { name: "Tiruvallur", slug: "tiruvallur", type: "city", parent: "tiruvallur" },
  { name: "Avadi", slug: "avadi", type: "city", parent: "tiruvallur" },
  { name: "Poonamallee", slug: "poonamallee", type: "city", parent: "tiruvallur" },
  { name: "Tiruttani", slug: "tiruttani", type: "city", parent: "tiruvallur" },
  { name: "Ponneri", slug: "ponneri", type: "city", parent: "tiruvallur" },
  { name: "Gummidipoondi", slug: "gummidipoondi", type: "city", parent: "tiruvallur" },

  // Important Towns
  { name: "Ambattur", slug: "ambattur", type: "town", parent: "tiruvallur" },
  { name: "Arani", slug: "arani", type: "town", parent: "tiruvallur" },
  { name: "Minjur", slug: "minjur", type: "town", parent: "tiruvallur" },
  { name: "Pallipattu", slug: "pallipattu", type: "town", parent: "tiruvallur" },
  { name: "Pattabiram", slug: "pattabiram", type: "town", parent: "tiruvallur" },
  { name: "Red Hills", slug: "red-hills", type: "town", parent: "tiruvallur" },
  { name: "Sholavaram", slug: "sholavaram", type: "town", parent: "tiruvallur" },
  { name: "Uthukkottai", slug: "uthukkottai", type: "town", parent: "tiruvallur" },
  { name: "Tiruvannamalai", slug: "tiruvannamalai", type: "district", parent: "tamil-nadu" },
    // Tiruvannamalai District — Cities & Towns

  // Municipalities
  { name: "Tiruvannamalai", slug: "tiruvannamalai", type: "city", parent: "tiruvannamalai" },
  { name: "Arani", slug: "arani", type: "city", parent: "tiruvannamalai" },
  { name: "Vandavasi", slug: "vandavasi", type: "city", parent: "tiruvannamalai" },
  { name: "Tiruvethipuram", slug: "tiruvethipuram", type: "city", parent: "tiruvannamalai" },
  { name: "Chengam", slug: "chengam", type: "city", parent: "tiruvannamalai" },

  // Important Towns
  { name: "Chengam", slug: "chengam", type: "town", parent: "tiruvannamalai" },
  { name: "Chetpet", slug: "chetpet", type: "town", parent: "tiruvannamalai" },
  { name: "Kalambur", slug: "kalambur", type: "town", parent: "tiruvannamalai" },
  { name: "Kalasapakkam", slug: "kalasapakkam", type: "town", parent: "tiruvannamalai" },
  { name: "Kannamangalam", slug: "kannamangalam", type: "town", parent: "tiruvannamalai" },
  { name: "Keelpennathur", slug: "keelpennathur", type: "town", parent: "tiruvannamalai" },
  { name: "Polur", slug: "polur", type: "town", parent: "tiruvannamalai" },
  { name: "Pernamallur", slug: "pernamallur", type: "town", parent: "tiruvannamalai" },
  { name: "Thandarampattu", slug: "thandarampattu", type: "town", parent: "tiruvannamalai" },
  { name: "Vettavalam", slug: "vettavalam", type: "town", parent: "tiruvannamalai" },
  { name: "The Nilgiris", slug: "nilgiris", type: "district", parent: "tamil-nadu" },
    // The Nilgiris District — Cities & Towns

  // Municipalities
  { name: "Udhagamandalam", slug: "udhagamandalam", type: "city", parent: "nilgiris" },
  { name: "Coonoor", slug: "coonoor", type: "city", parent: "nilgiris" },
  { name: "Gudalur", slug: "gudalur", type: "city", parent: "nilgiris" },
  { name: "Nelliayalam", slug: "nelliayalam", type: "city", parent: "nilgiris" },

  // Towns
  { name: "Kotagiri", slug: "kotagiri", type: "town", parent: "nilgiris" },
  { name: "Wellington", slug: "wellington", type: "town", parent: "nilgiris" },
  { name: "Ketti", slug: "ketti", type: "town", parent: "nilgiris" },
  { name: "Lovedale", slug: "lovedale", type: "town", parent: "nilgiris" },
  { name: "Naduvattam", slug: "naduvattam", type: "town", parent: "nilgiris" },
  { name: "Devala", slug: "devala", type: "town", parent: "nilgiris" },
  { name: "Vellore", slug: "vellore", type: "district", parent: "tamil-nadu" },
    // Vellore District — Cities & Towns

  // Corporation / Municipalities
  { name: "Vellore", slug: "vellore", type: "city", parent: "vellore" },
  { name: "Gudiyatham", slug: "gudiyatham", type: "city", parent: "vellore" },
  { name: "Pernambut", slug: "pernambut", type: "city", parent: "vellore" },

  // Town Panchayats
  { name: "Odugathur", slug: "odugathur", type: "town", parent: "vellore" },
  { name: "Pallikonda", slug: "pallikonda", type: "town", parent: "vellore" },
  { name: "Pennathur", slug: "pennathur", type: "town", parent: "vellore" },
  { name: "Thiruvalam", slug: "thiruvalam", type: "town", parent: "vellore" },

  // Important transport locations
  { name: "Katpadi", slug: "katpadi", type: "town", parent: "vellore" },
  { name: "Kaniyambadi", slug: "kaniyambadi", type: "town", parent: "vellore" },
  { name: "Anaicut", slug: "anaicut", type: "town", parent: "vellore" },
  { name: "Viluppuram", slug: "viluppuram", type: "district", parent: "tamil-nadu" },
  // Viluppuram District — Cities & Towns

  // Municipalities
  { name: "Viluppuram", slug: "viluppuram", type: "city", parent: "viluppuram" },
  { name: "Tindivanam", slug: "tindivanam", type: "city", parent: "viluppuram" },
  { name: "Gingee", slug: "gingee", type: "city", parent: "viluppuram" },

  // Town Panchayats
  { name: "Ananthapuram", slug: "ananthapuram", type: "town", parent: "viluppuram" },
  { name: "Arakandanallur", slug: "arakandanallur", type: "town", parent: "viluppuram" },
  { name: "Kottakuppam", slug: "kottakuppam", type: "town", parent: "viluppuram" },
  { name: "Marakkanam", slug: "marakkanam", type: "town", parent: "viluppuram" },
  { name: "Valavanur", slug: "valavanur", type: "town", parent: "viluppuram" },
  { name: "Vikravandi", slug: "vikravandi", type: "town", parent: "viluppuram" },
  { name: "Kandamangalam", slug: "kandamangalam", type: "town", parent: "viluppuram" },
  { name: "Thiruvandarkoil", slug: "thiruvandarkoil", type: "town", parent: "viluppuram" },
  { name: "Virudhunagar", slug: "virudhunagar", type: "district", parent: "tamil-nadu" },
    // Virudhunagar District — Cities & Towns

  // Municipalities
  { name: "Virudhunagar", slug: "virudhunagar", type: "city", parent: "virudhunagar" },
  { name: "Sivakasi", slug: "sivakasi", type: "city", parent: "virudhunagar" },
  { name: "Sattur", slug: "sattur", type: "city", parent: "virudhunagar" },
  { name: "Rajapalayam", slug: "rajapalayam", type: "city", parent: "virudhunagar" },
  { name: "Srivilliputhur", slug: "srivilliputhur", type: "city", parent: "virudhunagar" },
  { name: "Aruppukottai", slug: "aruppukottai", type: "city", parent: "virudhunagar" },

  // Town Panchayats
  { name: "Kariyapatti", slug: "kariyapatti", type: "town", parent: "virudhunagar" },
  { name: "Tiruchuli", slug: "tiruchuli", type: "town", parent: "virudhunagar" },
  { name: "Vembakottai", slug: "vembakottai", type: "town", parent: "virudhunagar" },
  { name: "Watrap", slug: "watrap", type: "town", parent: "virudhunagar" },
  { name: "Narikudi", slug: "narikudi", type: "town", parent: "virudhunagar" },
  { name: "Mamsapuram", slug: "mamsapuram", type: "town", parent: "virudhunagar" },
  { name: "Thiruthangal", slug: "thiruthangal", type: "town", parent: "virudhunagar" },
    { name: "Tiruvarur", slug: "tiruvarur", type: "district", parent: "tamil-nadu" },
      // Tiruvarur District — Cities & Towns

  // Municipalities
  { name: "Tiruvarur", slug: "tiruvarur", type: "city", parent: "tiruvarur" },
  { name: "Mannargudi", slug: "mannargudi", type: "city", parent: "tiruvarur" },
  { name: "Thiruthuraipoondi", slug: "thiruthuraipoondi", type: "city", parent: "tiruvarur" },
  { name: "Koothanallur", slug: "koothanallur", type: "city", parent: "tiruvarur" },
  { name: "Koothanallur", slug: "koothanallur", type: "city", parent: "tiruvarur" },

  // Town Panchayats
  { name: "Kodavasal", slug: "kodavasal", type: "town", parent: "tiruvarur" },
  { name: "Needamangalam", slug: "needamangalam", type: "town", parent: "tiruvarur" },
  { name: "Nannilam", slug: "nannilam", type: "town", parent: "tiruvarur" },
  { name: "Peralam", slug: "peralam", type: "town", parent: "tiruvarur" },
  { name: "Muthupet", slug: "muthupet", type: "town", parent: "tiruvarur" },
  { name: "Valangaiman", slug: "valangaiman", type: "town", parent: "tiruvarur" },
  { name: "Koradacheri", slug: "koradacheri", type: "town", parent: "tiruvarur" },
];