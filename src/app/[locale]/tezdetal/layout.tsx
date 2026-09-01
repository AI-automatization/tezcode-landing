import {
  BASE_URL,
  SITE_NAME,
  buildPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/seo";
import { TEZDETAL_CONTENT, TEZDETAL_URL, type TezDetalLang } from "./content";

const PATH = "/tezdetal";

// Client page → SEO metadata + JSON-LD live in this server layout.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = (TEZDETAL_CONTENT[locale as TezDetalLang] ?? TEZDETAL_CONTENT.uz).meta;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: meta.title,
    description: meta.description,
    keywords: [
      "TezDetal",
      "avto ehtiyot qism",
      "avtozapchast",
      "zapchast online",
      "Nexia zapchast",
      "автозапчасти Узбекистан",
      "запчасти онлайн",
      "автозапчасти Ташкент",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function TezDetalLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = TEZDETAL_CONTENT[locale as TezDetalLang] ?? TEZDETAL_CONTENT.uz;

  const faqSchema = getFaqSchema(copy.faq.items);
  const breadcrumb = getBreadcrumbSchema([
    { name: SITE_NAME, url: BASE_URL },
    { name: "TezDetal", url: `${BASE_URL}${PATH}` },
  ]);
  // TezDetal is a Tezcode Labs venture (Live) — an auto-parts marketplace.
  // OnlineStore ties the tezcode.dev page to the real product site
  // (tezdetal.uz) for AI engines. A marketplace has no single price, so no
  // offers/price block.
  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: "TezDetal",
    description: copy.meta.description,
    url: TEZDETAL_URL,
    inLanguage: ["uz", "ru"],
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      {children}
    </>
  );
}
