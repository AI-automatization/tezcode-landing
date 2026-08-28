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
      "Tezcode narxlari: tayyor SaaS obuna ($0 dan) va buyurtma ishlar — Telegram bot $279 dan, AI chatbot $339 dan, CRM/1C integratsiya $700 dan, MVP $1000 dan. To'lov 30% oldindan. Toshkent.",
    keywords: [
      "Tezcode narxlar",
      "dastur narxi Toshkent",
      "Telegram bot narxi",
      "AI chatbot narxi",
      "AI avtomatizatsiya narxi",
      "SaaS obuna narxi",
      "тарифы Tezcode",
      "стоимость разработки Ташкент",
    ],
    ogTitle: "Tariflar va narxlar — Tezcode",
    ogDescription:
      "Tayyor SaaS obuna va buyurtma ishlar: Telegram bot $279 dan, AI chatbot $339 dan, MVP $1000 dan. To'lov 30% oldindan. Bepul konsultatsiya.",
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
  // Simple ItemList pointing at the custom-work service pages. The full
  // Service + Offer schemas (with prices) already live on those pages —
  // duplicating them here would risk divergence, so this only links them.
  const customWorkList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tezcode buyurtma ishlar",
    itemListElement: [
      { name: "Telegram bot", path: "/telegram-bot-biznes" },
      { name: "AI chatbot", path: "/ai-chatbot" },
      { name: "AI agent", path: "/ai-agent" },
      { name: "Jarayon avtomatlashtirish", path: "/biznes-avtomatlashtirish" },
      { name: "CRM/1C integratsiya", path: "/crm-integratsiya" },
      { name: "AI video analitika", path: "/ai-video-analitika" },
      { name: "MVP / buyurtma dastur", path: "/tezcode-custom" },
    ].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${BASE_URL}${item.path}`,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(customWorkList) }}
      />
      {children}
    </>
  );
}
