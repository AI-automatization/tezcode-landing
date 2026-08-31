import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getHowToSchema,
  getServiceSchema,
  getBreadcrumbSchema,
  BASE_URL,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/ai-agent";

// Localized metadata. NOTE: the root layout applies a "%s | Tezcode" title
// template, so titles here must NOT contain a "| Tezcode" suffix themselves —
// the template appends it (otherwise SSR renders "... | Tezcode | Tezcode").
const META: Record<
  string,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "AI agent yaratish biznes uchun — Toshkent",
    description:
      "AI agentlar $400 dan — javob beribgina qolmay, ishni o'zi bajaradigan raqamli xodimlar: savdo agenti (lid → CRM → follow-up), buyurtma, hisobot va HR agentlari. Telegram/CRM/1C/POS integratsiyasi, o'zbek va rus tilida. Tezcode — IT Park rezidenti, Toshkent. Bepul konsultatsiya.",
    ogTitle: "AI agent yaratish biznes uchun — Tezcode, Toshkent",
    ogDescription:
      "Ishni o'zi bajaradigan AI agentlar: savdo, buyurtma, hisobot, HR. Telegram/CRM/1C/POS integratsiyasi, uz/ru. Bepul konsultatsiya.",
  },
  ru: {
    title: "Создание ИИ-агента (AI-агента) для бизнеса — Ташкент",
    description:
      "ИИ-агенты (AI-агенты) от $400 (≈ от 5 млн сум) — цифровые сотрудники, которые не просто отвечают, а сами выполняют работу: агент продаж (лид → CRM → follow-up), заказы, отчёты, HR. Интеграция Telegram/CRM/1C/POS, на узбекском и русском. Tezcode — резидент IT Park, Ташкент. Бесплатная консультация.",
    ogTitle: "Создание ИИ-агента (AI) для бизнеса — Tezcode, Ташкент",
    ogDescription:
      "ИИ-агенты (AI-агенты), которые сами выполняют работу: продажи, заказы, отчёты, HR. Интеграция Telegram/CRM/1C/POS, uz/ru. Бесплатная консультация.",
  },
  en: {
    title: "AI Agent Development for Business — Tashkent",
    description:
      "AI agents from $400 — digital employees that don't just reply but do the work themselves: sales agent (lead → CRM → follow-up), orders, reporting, HR. Telegram/CRM/1C/POS integration, in Uzbek and Russian. Tezcode — IT Park resident, Tashkent. Free consultation.",
    ogTitle: "AI Agent Development for Business — Tezcode, Tashkent",
    ogDescription:
      "AI agents that do the work themselves: sales, orders, reporting, HR. Telegram/CRM/1C/POS integration, uz/ru. Free consultation.",
  },
  ar: {
    title: "تطوير وكيل ذكاء اصطناعي للأعمال — طشقند",
    description:
      "وكلاء الذكاء الاصطناعي من $400 — موظفون رقميون لا يكتفون بالرد بل ينفّذون العمل بأنفسهم: وكيل مبيعات (عميل محتمل ← CRM ← متابعة)، طلبات، تقارير، موارد بشرية. تكامل Telegram/CRM/1C/POS، بالأوزبكية والروسية. Tezcode — عضو IT Park، طشقند. استشارة مجانية.",
    ogTitle: "تطوير وكيل ذكاء اصطناعي للأعمال — Tezcode، طشقند",
    ogDescription:
      "وكلاء ذكاء اصطناعي ينفّذون العمل بأنفسهم: مبيعات، طلبات، تقارير، موارد بشرية. تكامل Telegram/CRM/1C/POS. استشارة مجانية.",
  },
  uk: {
    title: "Створення AI-агента для бізнесу — Ташкент",
    description:
      "AI-агенти від $400 — цифрові співробітники, які не просто відповідають, а самі виконують роботу: агент продажів (лід → CRM → follow-up), замовлення, звіти, HR. Інтеграція Telegram/CRM/1C/POS, узбецькою та російською. Tezcode — резидент IT Park, Ташкент. Безкоштовна консультація.",
    ogTitle: "Створення AI-агента для бізнесу — Tezcode, Ташкент",
    ogDescription:
      "AI-агенти, які самі виконують роботу: продажі, замовлення, звіти, HR. Інтеграція Telegram/CRM/1C/POS, uz/ru. Безкоштовна консультація.",
  },
};

// Server Component: metadata + JSON-LD on the server so structured data is in the
// initial HTML (AI Overviews / ChatGPT / Perplexity read SSR markup).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale] ?? META.uz;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: meta.title,
    description: meta.description,
    keywords: [
      "AI agent yaratish",
      "AI agentlar",
      "AI agent yasash",
      "AI agent Toshkent",
      "biznes uchun AI agent",
      "AI agent O'zbekiston",
      "AI agent development Uzbekistan",
      "savdo AI agenti",
      "AI agent CRM integratsiya",
      "AI агент Ташкент",
      "AI агент для бизнеса",
      "AI ofis ko'p agentli",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function AiAgentPage({
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
    offers: { price: "400", priceCurrency: "USD" },
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  const howToSchema = getHowToSchema({
    name: `${copy.process.title} ${copy.process.titleAccent}`.trim(),
    description: copy.process.subtitle,
    path: PATH,
    locale,
    steps: copy.process.steps.map((st) => ({ name: st.title, text: st.desc })),
  });
  // BreadcrumbList so answer engines see the page's place in the site hierarchy
  // (Home → AI agent) — same SSR JSON-LD pattern as the blog pillar post.
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ServicePageClient content={CONTENT} serviceSlug="ai-agent" />
    </>
  );
}
