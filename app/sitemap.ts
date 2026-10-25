import type { MetadataRoute } from "next";
import { loadzyRoutes } from "./lib/routes";
import { loadzyLocations } from "./lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.loadzyinfra.in";

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/services",
    "/commercial-transport",
    "/drive-with-loadzy",
    "/fruits-vegetables",
    "/full-load",
    "/house-shifting",
    "/industrial-transport",
    "/load-search",
    "/mobile-app",
    "/packers-movers",
    "/part-load",
    "/privacy",
    "/reviews",
    "/terms",
    "/tirupattur-transport",
    "/karnataka-truck-transport",
    "/kerala-truck-transport",
    "/andhra-pradesh-truck-transport",
    "/telangana-truck-transport",
    "/track-shipment",
    "/truck-owner",
    "/truck-rates",
    "/routes",
    "/truck-guide",
    "/truck-transport-charges-tamil-nadu",
    "/how-truck-freight-prices-are-calculated",
    "/full-load-vs-part-load",
    "/how-to-choose-the-right-truck",
    "/house-shifting-truck-guide",
    "/commercial-goods-transport-guide",
    "/industrial-transport-guide",
    "/return-load-transport-guide",
    "/truck-booking-guide",
    "/chennai-transport",
    "/coimbatore-transport",
    "/madurai-transport",
    "/salem-transport",
    "/tiruchirappalli-transport",
    "/tiruppur-transport",
    "/erode-transport",
    "/vellore-transport",
    "/hosur-transport",
    "/bangalore-transport",
    "/hyderabad-transport",
    "/kochi-transport",
    "/vijayawada-transport",
    "/tirupati-transport",
  ];

  // Bagalkote district and completed town pages
  const bagalkotePages = [
    "/bagalkote-transport",
    "/badami-transport",
    "/ilkal-transport",
    "/guledgudda-transport",
    "/hungund-transport",
    "/kerur-transport",
    "/mudhol-transport",
    "/jamkhandi-transport",
    "/bilgi-transport",
  ];

  // Completed standalone transport pages
  const completedTransportPages = [
    "/gummidipoondi-transport",
    "/t-nagar-transport",
    "/irungattukottai-transport",
    "/mount-road-transport",
    "/maraimalai-nagar-transport",
  ];

  // Ballari district and transport location pages
  const ballariPages = [
    "/ballari-transport",
    "/siruguppa-transport",
    "/kampli-transport",
    "/sandur-transport",
    "/kurugodu-transport",
    "/tekkalakote-transport",
    "/kudligi-transport",
    "/kotturu-transport",
    "/hoovina-hadagalli-transport",
  ];

  // Belagavi district and completed transport location pages
  const belagaviPages = [
    "/belagavi-transport",
    "/athani-transport",
    "/bailhongal-transport",
    "/chikkodi-transport",
    "/gokak-transport",
    "/hukkeri-transport",
    "/khanapur-transport",
    "/ramdurg-transport",
    "/saundatti-transport",
    "/kittur-transport",
    "/nippani-transport",
    "/raibag-transport",
    "/kagwad-transport",
    "/mudalagi-transport",
    "/yaragatti-transport",
  ];

  // Bidar district and completed transport location pages
  const bidarPages = [
    "/bidar-transport",
    "/aurad-transport",
    "/basavakalyan-transport",
    "/bhalki-transport",
    "/humnabad-transport",
    "/chitguppa-transport",
    "/kamalnagar-transport",
    "/hulsur-transport",
    "/hallikheda-transport",
  ];

  // Ariyalur district and completed town pages
  const ariyalurPages = [
    "/ariyalur-transport",
    "/jayankondam-transport",
    "/sendurai-transport",
    "/udayarpalayam-transport",
    "/thirumanur-transport",
    "/t-palur-transport",
  ];

  // Additional transport pages discovered in the app folder
  const additionalTransportPages = [
    "/acharapakkam-transport",
    "/adyar-transport",
    "/alangayam-transport",
    "/ambattur-transport",
    "/ambur-transport",
    "/aminjikarai-transport",
    "/anakaputhur-transport",
    "/andimadam-transport",
    "/anna-nagar-transport",
    "/avadi-transport",
    "/besant-nagar-transport",
    "/chengalpattu-transport",
    "/cheyyur-transport",
    "/chromepet-transport",
    "/egmore-transport",
    "/ennore-transport",
    "/george-town-transport",
    "/guduvanchery-transport",
    "/guindy-transport",
    "/iyyappanthangal-transport",
    "/jolarpettai-transport",
    "/kanchipuram-transport",
    "/karunguzhi-transport",
    "/kathivakkam-transport",
    "/keezhapalur-transport",
    "/kelambakkam-transport",
    "/kilpauk-transport",
    "/kodambakkam-transport",
    "/kodungaiyur-transport",
    "/kolathur-transport",
    "/koyambedu-transport",
    "/kundrathur-transport",
    "/madhavaram-transport",
    "/madurantakam-transport",
    "/manali-transport",
    "/medavakkam-transport",
    "/minjur-transport",
    "/mogappair-transport",
    "/mylapore-transport",
    "/natrampalli-transport",
    "/nolambur-transport",
    "/nungambakkam-transport",
    "/oragadam-transport",
    "/pallavaram-transport",
    "/pallikaranai-transport",
    "/pammal-transport",
    "/parrys-transport",
    "/perambur-transport",
    "/perungalathur-transport",
    "/perungudi-transport",
    "/poonamallee-transport",
    "/porur-transport",
    "/puzhal-transport",
    "/ranipet-transport",
    "/red-hills-transport",
    "/royapettah-transport",
    "/royapuram-transport",
    "/saidapet-transport",
    "/selaiyur-transport",
    "/sholinganallur-transport",
    "/singaperumal-koil-transport",
    "/sriperumbudur-transport",
    "/tambaram-transport",
    "/thiruporur-transport",
    "/thoraipakkam-transport",
    "/tirukalukundram-transport",
    "/tiruvallur-transport",
    "/tondiarpet-transport",
    "/triplicane-transport",
    "/urapakkam-transport",
    "/vandalur-transport",
    "/varadarajanpettai-transport",
    "/velachery-transport",
    "/vyasarpadi-transport",
    "/washermenpet-transport",
    "/amruthahalli-transport",
    "/bengaluru-anekal-transport",
    "/bengaluru-central-transport",
    "/bengaluru-east-transport",
    "/bengaluru-industrial-hubs-transport",
    "/bengaluru-north-transport",
    "/bengaluru-rural-transport",
    "/bengaluru-south-transport",
    "/bengaluru-urban-transport",
    "/bengaluru-west-transport",
    "/byatarayanapura-transport",
    "/doddabommasandra-transport",
    "/hebbal-transport",
    "/hennur-transport",
    "/jakkur-transport",
    "/kalyan-nagar-transport",
    "/kattigenahalli-transport",
    "/kodigehalli-transport",
    "/kogilu-transport",
    "/manyata-tech-park-transport",
    "/mathikere-transport",
    "/nagawara-transport",
    "/rt-nagar-transport",
    "/sahakara-nagar-transport",
    "/thanisandra-transport",
    "/vidyaranyapura-transport",
    "/yelahanka-new-town-transport",
    "/yelahanka-old-town-transport",
    "/yelahanka-transport",
    "/pollachi-transport",
    "/rabkavi-banhatti-transport",
    "/terdal-transport",
  ];
  
  const staticSitemap: MetadataRoute.Sitemap = [
    ...new Set([
      ...staticPages,
      ...additionalTransportPages,
      ...bagalkotePages,
      ...completedTransportPages,
      ...ballariPages,
      ...belagaviPages,
      ...bidarPages,
      ...ariyalurPages,
    ]),
  ].map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

   
  // Individual transport route pages
  const routeSitemap: MetadataRoute.Sitemap = Array.from(
    new Map(
      loadzyRoutes.map((route) => {
        const url = `${baseUrl}/routes/${route.fromSlug}/${route.toSlug}`;

        return [
          url,
          {
            url,
            lastModified: new Date(),
          },
        ] as const;
      })
    ).values()
  );

  // Tamil Nadu district pages
  const tamilNaduDistrictSitemap: MetadataRoute.Sitemap =
    loadzyLocations
      .filter(
        (location) =>
          location.type === "district" &&
          location.parent === "tamil-nadu"
      )
      .map((district) => ({
        url: `${baseUrl}/tamil-nadu/${district.slug}`,
        lastModified: new Date(),
      }));

  // Tamil Nadu city and town pages
  const tamilNaduLocationSitemap: MetadataRoute.Sitemap =
    loadzyLocations
      .filter(
        (location) =>
          (location.type === "city" || location.type === "town") &&
          location.parent &&
          loadzyLocations.some(
            (district) =>
              district.slug === location.parent &&
              district.type === "district" &&
              district.parent === "tamil-nadu"
          )
      )
      .map((location) => ({
        url: `${baseUrl}/tamil-nadu/${location.parent}/${location.slug}`,
        lastModified: new Date(),
      }));

  // Remove duplicate URLs while preserving every sitemap section
  return Array.from(
    new Map(
      [
        ...staticSitemap,
        ...routeSitemap,
        ...tamilNaduDistrictSitemap,
        ...tamilNaduLocationSitemap,
      ].map((entry) => [entry.url, entry])
    ).values()
  );
}