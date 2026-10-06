import {
  BASE_URL,
  buildPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/seo";
import { PRICING_FAQ, type FaqLang } from "@/content/faq";

type Meta = { title: string; description: string; ogTitle: string; ogDescription: string };

// Per-locale SERP copy, translated from the page's own COPY / CustomWorkSection
// prices so facts match the rendered body in every locale.
const META: Record<string, Meta> = {
  uz: {
    title: "Tariflar va narxlar — AI, dastur, avtomatizatsiya",
    description:
      "Tezcode narxlari: tayyor SaaS obuna ($0 dan) va buyurtma ishlar — Telegram bot $279 dan, AI chatbot $339 dan, CRM/1C integratsiya $700 dan, MVP $1000 dan. To'lov 30% oldindan. Toshkent.",
    ogTitle: "Tariflar va narxlar — Tezcode",
    ogDescription:
      "Tayyor SaaS obuna va buyurtma ishlar: Telegram bot $279 dan, AI chatbot $339 dan, MVP $1000 dan. To'lov 30% oldindan. Bepul konsultatsiya.",
  },
  ru: {
    title: "Тарифы и цены на разработку и ИИ — Ташкент",
    description:
      "Цены Tezcode: SaaS-подписка и работы на заказ — Telegram-бот от $279, ИИ-чат-бот от $339, интеграция CRM/1C от $700, MVP от $1000. Предоплата 30%. Ташкент.",
    ogTitle: "Тарифы и цены — Tezcode, Ташкент",
    ogDescription:
      "Готовая SaaS-подписка и работы на заказ: Telegram-бот от $279, ИИ-чат-бот от $339, MVP от $1000. Предоплата 30%. Бесплатная консультация.",
  },
  en: {
    title: "Pricing — AI, custom software and automation",
    description:
      "Tezcode pricing: SaaS subscriptions and custom work — Telegram bot from $279, AI chatbot from $339, CRM/1C integration from $700, MVP from $1000. 30% deposit.",
    ogTitle: "Pricing — Tezcode",
    ogDescription:
      "Ready SaaS subscriptions and custom work: Telegram bot from $279, AI chatbot from $339, MVP from $1000. 30% deposit. Free consultation.",
  },
  ar: {
    title: "الأسعار — الذكاء الاصطناعي والبرمجيات والأتمتة",
    description:
      "أسعار Tezcode: اشتراك SaaS جاهز وأعمال حسب الطلب — بوت Telegram من $279، شات بوت ذكاء اصطناعي من $339، تكامل CRM/1C من $700، MVP من $1000. دفعة مقدمة 30%.",
    ogTitle: "الأسعار — Tezcode",
    ogDescription:
      "اشتراك SaaS جاهز وأعمال حسب الطلب: بوت Telegram من $279، شات بوت من $339، MVP من $1000. دفعة مقدمة 30%. استشارة مجانية.",
  },
  uk: {
    title: "Тарифи та ціни на розробку і AI — Ташкент",
    description:
      "Ціни Tezcode: SaaS-підписка та роботи на замовлення — Telegram-бот від $279, AI-чат-бот від $339, інтеграція CRM/1C від $700, MVP від $1000. Передоплата 30%.",
    ogTitle: "Тарифи та ціни — Tezcode",
    ogDescription:
      "Готова SaaS-підписка та роботи на замовлення: Telegram-бот від $279, AI-чат-бот від $339, MVP від $1000. Передоплата 30%. Безкоштовна консультація.",
  },
};

// Client page → SEO metadata lives in this server layout.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale] ?? META.uz;
  return buildPageMetadata({
    locale,
    path: "/tariflar",
    // No brand in the title: the [locale] layout template appends "| Tezcode".
    title: meta.title,
    description: meta.description,
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
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
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
