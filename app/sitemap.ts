import type { MetadataRoute } from "next";
import { loadzyRoutes } from "./lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://www.loadzyinfra.in",
      lastModified: new Date(),
    },
    {
      url: "https://www.loadzyinfra.in/truck-owner",
      lastModified: new Date(),
    },
    {
      url: "https://www.loadzyinfra.in/truck-rates",
      lastModified: new Date(),
    },
  ];

  const routePages: MetadataRoute.Sitemap = Array.from(
  new Map(
    loadzyRoutes.map((route) => {
      const url = `https://www.loadzyinfra.in/routes/${route.fromSlug}/${route.toSlug}`;

      return [url, { url, lastModified: new Date() }] as const;
    })
  ).values()
);

  return [...staticPages, ...routePages];
}