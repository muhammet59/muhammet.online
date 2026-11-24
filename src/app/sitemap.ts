import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2026-11-23",
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: SITE_URL,
          tr: `${SITE_URL}/tr`,
        },
      },
    },
    {
      url: `${SITE_URL}/tr`,
      lastModified: "2026-11-23",
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: SITE_URL,
          tr: `${SITE_URL}/tr`,
        },
      },
    },
  ];
}
