import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://loadzyinfra.in",
      lastModified: new Date(),
    },
    {
      url: "https://loadzyinfra.in/truck-owner",
      lastModified: new Date(),
    },
    {
      url: "https://loadzyinfra.in/truck-rates",
      lastModified: new Date(),
    },
  ];
}