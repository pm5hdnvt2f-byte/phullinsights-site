import type { MetadataRoute } from "next";
import { posts } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://phullinsights.com";

  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl + "/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: baseUrl + "/about/",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/services/",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: baseUrl + "/journeyiq/",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: baseUrl + "/methodology/",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/trust/",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: baseUrl + "/insights/",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/contact/",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [
    ...pages,
    ...posts.map((post) => ({
      url: baseUrl + "/insights/" + post.slug + "/",
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
