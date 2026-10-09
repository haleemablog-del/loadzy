
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


  const staticSitemap: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

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

  return [
  ...staticSitemap,
  ...routeSitemap,
  ...tamilNaduDistrictSitemap,
  ...tamilNaduLocationSitemap,
];
}