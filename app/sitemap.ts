import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";
import { source } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url;

  const blogPosts = source.getPages().map((post) => ({
    url: `${baseUrl}/blogs/${post.slugs.join("/")}`,
    lastModified: new Date(
      (post.data as unknown as { date?: Date | string }).date ?? Date.now()
    ),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  return [...staticPages, ...blogPosts];
}
