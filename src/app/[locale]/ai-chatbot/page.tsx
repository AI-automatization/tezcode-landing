import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  BASE_URL,
  buildPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/ai-chatbot";

// Localised meta: the title targets "AI chatbot biznes uchun — Toshkent" (uz)
// and its ru/en equivalents — the exact query the competitor city-landing
// ranks for. Falls back to uz for unknown locales, same as the page body.
const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "AI chatbot biznes uchun — Toshkent",
    description:
      "Biznes uchun AI chatbot Toshkentda: Telegram, Instagram, WhatsApp va veb-saytda 24/7 mijoz xizmati, buyurtma qabul qilish, CRM/1C integratsiyasi, o'zbek va rus tillari. IT Park rezidenti Tezcode. Bepul konsultatsiya, to'lov 30% oldindan.",
    ogTitle: "AI chatbot biznes uchun — Toshkent | Tezcode",
    ogDescription:
      "24/7 mijoz xizmati, buyurtma qabul, lid saralash, CRM/1C integratsiyasi — Telegram, Instagram, WhatsApp va veb-saytda. O'zbek va rus tillarida. Bepul konsultatsiya.",
  },
  ru: {
    title: "AI чат-бот для бизнеса — Ташкент",
    description:
      "AI чат-бот для бизнеса в Ташкенте: поддержка клиентов 24/7 в Telegram, Instagram, WhatsApp и на сайте, приём заказов, интеграция с CRM/1C, узбекский и русский языки. Tezcode — резидент IT Park. Бесплатная консультация, оплата 30% предоплата.",
    ogTitle: "AI чат-бот для бизнеса — Ташкент | Tezcode",
    ogDescription:
      "Поддержка 24/7, приём заказов, квалификация лидов, интеграция с CRM/1C — Telegram, Instagram, WhatsApp и сайт. На узбекском и русском. Бесплатная консультация.",
  },
  en: {
    title: "AI chatbot for business — Tashkent",
    description:
      "AI chatbot for business in Tashkent: 24/7 customer support on Telegram, Instagram, WhatsApp and websites, order taking, CRM/1C integration, Uzbek and Russian languages. Tezcode — IT Park resident. Free consultation, 30% upfront payment.",
    ogTitle: "AI chatbot for business — Tashkent | Tezcode",
    ogDescription:
      "24/7 support, order taking, lead qualification, CRM/1C integration — on Telegram, Instagram, WhatsApp and your website. In Uzbek and Russian. Free consultation.",
  },
  ar: {
    title: "شات بوت AI للأعمال — طشقند",
    description:
      "شات بوت AI للأعمال في طشقند: دعم عملاء 24/7 على Telegram وInstagram وWhatsApp والمواقع، استقبال الطلبات، تكامل CRM/1C، الأوزبكية والروسية. Tezcode — مقيم IT Park. استشارة مجانية، الدفع 30% مقدمًا.",
    ogTitle: "شات بوت AI للأعمال — طشقند | Tezcode",
    ogDescription:
      "دعم 24/7، استقبال الطلبات، تصنيف العملاء، تكامل CRM/1C — على Telegram وInstagram وWhatsApp والموقع. بالأوزبكية والروسية. استشارة مجانية.",
  },
  uk: {
    title: "AI чат-бот для бізнесу — Ташкент",
    description:
      "AI чат-бот для бізнесу в Ташкенті: підтримка клієнтів 24/7 у Telegram, Instagram, WhatsApp і на сайті, прийом замовлень, інтеграція з CRM/1C, узбецька та російська мови. Tezcode — резидент IT Park. Безкоштовна консультація, оплата 30% передоплата.",
    ogTitle: "AI чат-бот для бізнесу — Ташкент | Tezcode",
    ogDescription:
      "Підтримка 24/7, прийом замовлень, кваліфікація лідів, інтеграція з CRM/1C — Telegram, Instagram, WhatsApp і сайт. Узбецькою та російською. Безкоштовна консультація.",
  },
};

// Server Component: metadata + JSON-LD are emitted on the server so the
// structured data is in the initial HTML (AI Overviews / ChatGPT / Perplexity
// read SSR markup). The animated UI lives in ServicePageClient.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale as ServiceLang] ?? META.uz;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: meta.title,
    description: meta.description,
    keywords: [
      "AI chatbot biznes uchun",
      "AI chatbot Toshkent",
      "AI chatbot yasash",
      "AI yordamchi",
      "chatbot O'zbekiston",
      "telegram bot biznes uchun",
      "AI чат-бот для бизнеса Ташкент",
      "AI чат-бот для бизнеса",
      "AI ассистент Ташкент",
      "чат-бот Telegram Instagram WhatsApp",
      "AI chatbot for business Tashkent",
      "AI customer service bot Uzbekistan",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function AiChatbotPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = CONTENT[locale as ServiceLang] ?? CONTENT.uz;

  const serviceSchema = getServiceSchema({
    name: copy.service.name,
    description: copy.service.description,
    serviceType: copy.service.serviceType,
    path: PATH,
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  // BreadcrumbList so answer engines see the page's place in the site
  // hierarchy (Home → AI chatbot) — same SSR JSON-LD pattern as /ai-agent.
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: copy.service.name, url: `${BASE_URL}${PATH}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ServicePageClient content={CONTENT} serviceSlug="ai-chatbot" />
    </>
  );
}
