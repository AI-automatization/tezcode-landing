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
  // Headers for security + performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // 2 years, ready for the hstspreload.org list. Railway terminates TLS
          // for both apex and www, so includeSubDomains is safe here.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
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
