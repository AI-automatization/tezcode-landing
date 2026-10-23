import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// These city landing pages were intentionally removed from the sitemap because
// they were thin duplicates. Keep their old URLs useful for crawlers and
// backlinks by sending them to the stronger parent service page.
const RETIRED_CITY_SLUGS = [
  "buxoro", "andijon", "namangan", "fargona", "nukus", "qarshi",
  "jizzax", "navoiy", "urganch", "termiz",
] as const;

const nextConfig: NextConfig = {
  // Compression for faster delivery
  compress: true,
  // Strict mode catches bugs early
  reactStrictMode: true,
  // Image optimization (Lighthouse 95+ requires this)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: false,
  },
  // Production source maps off (smaller bundle)
  productionBrowserSourceMaps: false,
  // The sitemaps are per-locale (/sitemap/<locale>.xml). Serve the sitemap INDEX
  // at the conventional /sitemap.xml URL via a rewrite (200, no redirect) so
  // Bing/GSC and other consumers get a real sitemap at the standard path. The
  // /sitemap-index.xml route still resolves too, for anything already using it.
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap-index.xml",
      },
    ];
  },
  // The two founders have root-level profile pages (/sardor-madaliyev,
  // /bekzod-mirzaaliyev), NOT /jamoa/<slug> like the rest of the team. Product
  // sites (raos.uz, maxsavdo.uz, tezdetal.uz) build every teammate link as
  // /jamoa/<slug>, so their links to the two founders currently 404 and their
  // backlink equity is wasted. 301 those /jamoa/<founder> URLs to the real
  // pages so the inbound links resolve and pass authority to the profiles.
  async redirects() {
    const founderRedirects = [
      {
        source: "/jamoa/sardor-madaliyev",
        destination: "/sardor-madaliyev",
        permanent: true,
      },
      {
        source: "/jamoa/bekzod-mirzaaliyev",
        destination: "/bekzod-mirzaaliyev",
        permanent: true,
      },
      {
        source: "/:locale/jamoa/sardor-madaliyev",
        destination: "/:locale/sardor-madaliyev",
        permanent: true,
      },
      {
        source: "/:locale/jamoa/bekzod-mirzaaliyev",
        destination: "/:locale/bekzod-mirzaaliyev",
        permanent: true,
      },
    ];
    const retiredCityRedirects = RETIRED_CITY_SLUGS.flatMap((city) =>
      ["/pos-tizimi", "/ai-avtomatizatsiya"].flatMap((service) => [
        { source: `${service}/${city}`, destination: service, permanent: true },
        { source: `/:locale${service}/${city}`, destination: "/:locale" + service, permanent: true },
      ]),
    );
    // Samarqand city pages retired 2026-10-19: never indexed, no local presence.
    const samarqandRedirects = ["/ai-chatbot", "/ai-agent", "/telegram-bot-biznes", "/biznes-avtomatlashtirish", "/pos-tizimi", "/ai-avtomatizatsiya"].flatMap((service) => [
      { source: `${service}/samarqand`, destination: service, permanent: true },
      { source: `/:locale(uz|ru|en|ar|uk)${service}/samarqand`, destination: `/:locale${service}`, permanent: true },
    ]);
    const aiAgentTashkentRedirects = ["", "/uz", "/ru", "/en", "/ar", "/uk"].map((prefix) => ({
      source: `${prefix}/ai-agent/toshkent`,
      destination: `${prefix === "/uz" ? "" : prefix}/ai-agent`,
      statusCode: 301,
    }));
    // English-style /contact is a common guess and backlink target; the real
    // page is /aloqa.
    const contactRedirects = [
      { source: "/contact", destination: "/aloqa", permanent: true },
      { source: "/:locale(uz|ru|en|ar|uk)/contact", destination: "/:locale/aloqa", permanent: true },
    ];
    // Former team members: keep their old profile URLs pointing at the team page.
    const formerTeamRedirects = ["saidazim-buriboyev"].flatMap((slug) => [
      { source: `/jamoa/${slug}`, destination: "/biz-haqimizda", permanent: true },
      { source: `/:locale(uz|ru|en|ar|uk)/jamoa/${slug}`, destination: "/:locale/biz-haqimizda", permanent: true },
    ]);
    // Retired case studies — keep old URLs alive.
    const retiredCaseRedirects = ["dilfuza-grocery", "aziz-electronics", "munira-clinic", "dantes"].flatMap((slug) => [
      { source: `/case-studies/${slug}`, destination: "/case-studies", permanent: true },
      { source: `/:locale(uz|ru|en|ar|uk)/case-studies/${slug}`, destination: "/:locale/case-studies", permanent: true },
    ]);
    return [
      ...founderRedirects,
      ...retiredCityRedirects,
      ...samarqandRedirects,
      ...aiAgentTashkentRedirects,
      ...contactRedirects,
      ...formerTeamRedirects,
      ...retiredCaseRedirects,
    ];
  },
  // Headers for security + performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        // Long cache for static assets
        source: "/:path*.(ico|png|jpg|jpeg|gif|webp|avif|svg|woff|woff2|ttf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
