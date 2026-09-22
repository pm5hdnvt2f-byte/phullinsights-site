import type { MetadataRoute } from "next";
import routes from "@/dist/routes.json";
import { createSitemapEntries } from "@/lib/sitemap";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return createSitemapEntries(routes) as MetadataRoute.Sitemap;
}
