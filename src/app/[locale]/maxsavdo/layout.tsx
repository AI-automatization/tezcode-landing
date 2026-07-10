import {
  BASE_URL,
  SITE_NAME,
  buildPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/seo";
import { MAXSAVDO_CONTENT, MAXSAVDO_URL, type MaxSavdoLang } from "./content";

const PATH = "/maxsavdo";

// Client page → SEO metadata + JSON-LD live in this server layout.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = (MAXSAVDO_CONTENT[locale as MaxSavdoLang] ?? MAXSAVDO_CONTENT.uz).meta;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: meta.title,
    description: meta.description,
    keywords: [
      "MaxSavdo",
      "Telegram do'kon",
      "Telegram magazin",
      "Telegram Mini App do'kon",
      "Telegram'da savdo",
      "магазин в Telegram",
      "Telegram store Uzbekistan",
      "Telegram checkout",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function MaxSavdoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = MAXSAVDO_CONTENT[locale as MaxSavdoLang] ?? MAXSAVDO_CONTENT.uz;

  const faqSchema = getFaqSchema(copy.faq.items);
  const breadcrumb = getBreadcrumbSchema([
    { name: SITE_NAME, url: BASE_URL },
    { name: "MaxSavdo", url: `${BASE_URL}${PATH}` },
  ]);
  // MaxSavdo is a Tezcode Labs venture (Free Beta); SoftwareApplication ties the
  // tezcode.dev page to the real product site (maxsavdo.uz) for AI engines.
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MaxSavdo",
    description: copy.meta.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Telegram",
    url: MAXSAVDO_URL,
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
