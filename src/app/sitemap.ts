import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";
import { movies } from "@/data/movies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about-us",
    "/contact-us",
    "/privacy-policy",
    "/movies",
    "/movies/movie-ratings",
  ];

  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    ...staticPaths.map((p) => ({
      url: `${SITE_URL}${p.startsWith("/") ? p : `/${p}`}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...movies.map((m) => ({
      url: `${SITE_URL}/movies/${m.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  return urls;
}
