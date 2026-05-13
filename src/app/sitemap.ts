import type { MetadataRoute } from "next";
import { BASE_URL, LOCALES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Generate entries for each locale
  const localeEntries = LOCALES.flatMap((locale) => {
    const url =
      locale === "uz" ? BASE_URL : `${BASE_URL}/${locale}`;

    return [
      {
        url,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: locale === "uz" ? 1.0 : 0.9,
      },
    ];
  });

  return localeEntries;
}
