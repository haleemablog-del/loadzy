import type { MetadataRoute } from "next";
import { loadzyRoutes } from "./lib/routes";

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

  return [...staticSitemap, ...routeSitemap];
}