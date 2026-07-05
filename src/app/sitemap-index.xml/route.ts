import { BASE_URL, LOCALES } from "@/lib/seo";

// Backward-compatibility sitemap INDEX at the legacy /sitemap.xml URL.
// The real sitemaps are per-locale (/sitemap/<locale>.xml) — but Bing and
// other consumers were given /sitemap.xml before the split, and a 404 there
// makes them silently drop URLs. This index points them to the new files.
export function GET() {
  const entries = LOCALES.map(
    (locale) =>
      `  <sitemap>\n    <loc>${BASE_URL}/sitemap/${locale}.xml</loc>\n  </sitemap>`,
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
