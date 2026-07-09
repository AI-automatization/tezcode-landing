import {
  BASE_URL,
  buildPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/seo";
import { PRICING_FAQ, type FaqLang } from "@/content/faq";

// Client page → SEO metadata lives in this server layout.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/tariflar",
    title: "Tariflar va narxlar — Tezcode | AI, dastur, avtomatizatsiya",
    description:
      "Tezcode xizmatlari narxi: tayyor SaaS obuna, buyurtma dastur (to'lov 30% oldindan) va AI avtomatizatsiya. Shaffof modellar, bepul 30 daqiqa konsultatsiya. Toshkent.",
    keywords: [
      "Tezcode narxlar",
      "dastur narxi Toshkent",
      "AI avtomatizatsiya narxi",
      "SaaS obuna narxi",
      "тарифы Tezcode",
      "стоимость разработки Ташкент",
    ],
    ogTitle: "Tariflar va narxlar — Tezcode",
    ogDescription:
      "Tayyor SaaS obuna, buyurtma dastur va AI avtomatizatsiya — shaffof narx modellari. Bepul konsultatsiya.",
  });
}

// FAQPage + BreadcrumbList JSON-LD is emitted here (server) since the page
// itself is a client component — a pricing page is the top AEO target
// ("how much does X cost"), so the Q&A must be machine-readable in the SSR HTML.
export default async function TariflarLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const faq = PRICING_FAQ[locale as FaqLang] ?? PRICING_FAQ.uz;
  const faqSchema = getFaqSchema(faq.items);
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: "Tariflar", url: `${BASE_URL}/tariflar` },
  ]);

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
      {children}
    </>
  );
}
