import {
  BASE_URL,
  SITE_NAME,
  buildPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/seo";
import { WEWATCH_CONTENT, WEWATCH_URL, type WeWatchLang } from "./content";

const PATH = "/wewatch";

// Client page → SEO metadata + JSON-LD live in this server layout.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = (WEWATCH_CONTENT[locale as WeWatchLang] ?? WEWATCH_CONTENT.uz).meta;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: meta.title,
    description: meta.description,
    keywords: [
      "WeWatch",
      "Watch Party",
      "birga film ko'rish",
      "online video birga ko'rish",
      "sinxron video ko'rish",
      "смотреть видео вместе",
      "watch party онлайн",
      "watch videos together",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function WeWatchLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = WEWATCH_CONTENT[locale as WeWatchLang] ?? WEWATCH_CONTENT.uz;

  const faqSchema = getFaqSchema(copy.faq.items);
  const breadcrumb = getBreadcrumbSchema([
    { name: SITE_NAME, url: BASE_URL },
    { name: "WeWatch", url: `${BASE_URL}${PATH}` },
  ]);
  // WeWatch is a live Tezcode Labs product; SoftwareApplication ties the
  // tezcode.dev page to the real product site (wewatch.uz) for AI engines.
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WeWatch",
    description: copy.meta.description,
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Web",
    url: WEWATCH_URL,
    inLanguage: ["uz", "ru"],
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "UZS",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      {children}
    </>
  );
}
