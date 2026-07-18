import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  getKeywords,
  getOrganizationSchema,
  getProductSchemas,
  getWebsiteSchema,
} from "@/lib/seo";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.tezcode.dev";
  const canonicalUrl =
    locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: {
      default: t("title"),
      template: `%s | Tezcode`,
    },
    description: t("description"),
    keywords: getKeywords(locale),
    authors: [{ name: "Bekzod Mirzaaliyev", url: "https://t.me/tezcode_managament" }],
    creator: "Tezcode",
    publisher: "Tezcode",
    metadataBase: new URL(baseUrl),
    // Icons are served by explicit route handlers (src/app/{favicon.ico,icon.png,
    // apple-icon.png}/route.ts) with stable, query-less URLs — NOT the app-dir
    // file convention, whose per-build "?<generated>" hash churned the favicon's
    // HTTP identity on every deploy (see src/lib/brand-icons.ts).
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
        { url: "/icon.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [
            l,
            l === routing.defaultLocale ? baseUrl : `${baseUrl}/${l}`,
          ]),
        ),
        "x-default": baseUrl,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: canonicalUrl,
      siteName: "Tezcode",
      locale: locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Tezcode — AI Software Factory",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [`${baseUrl}/og-image.png`],
      creator: "@tezcode_managament",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION ?? "wcUogKNw6DbMp0_rSGc-S3AZR3SY-7dpkNt8zo0PJ6w",
      yandex: process.env.YANDEX_VERIFICATION ?? "2799c1c5a0b79784",
      other: {
        "msvalidate.01": process.env.BING_SITE_VERIFICATION ?? "",
        // Second Yandex code for the separate https://www.tezcode.dev property
        // (the account's DNS-era key). Yandex accepts multiple
        // yandex-verification tags — each property matches its own code.
        "yandex-verification": "3b48fa0ea10b2653",
      },
    },
    category: "Technology",
    // Geo meta tags — pin Tezcode's Tashkent office for local search engines.
    other: {
      "geo.region": "UZ-TK",
      "geo.placename": "Tashkent",
      "geo.position": "41.366927;69.286331",
      "ICBM": "41.366927, 69.286331",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema(locale);
  const productSchemas = getProductSchemas();

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${syne.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {productSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)] antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
