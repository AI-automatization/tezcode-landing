import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

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
    return [
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
