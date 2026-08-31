import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  BASE_URL,
  buildPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  getHowToSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/telegram-bot-biznes";

// Localised meta: the title targets "Telegram bot biznes uchun" (uz),
// "телеграм бот для бизнеса Ташкент" (ru) and "Telegram bot development
// Uzbekistan" (en). Plain titles go through the layout's `%s | Tezcode`
// template — same pattern as /ai-chatbot. Falls back to uz, like the page body.
const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "Telegram bot biznes uchun — Toshkent: buyurtma, to'lov",
    description:
      "Biznes uchun Telegram bot yaratish Toshkentda $279 dan: buyurtma qabul qilish, Click/Payme to'lov, qo'llab-quvvatlash, eslatma, Telegram do'kon (Mini App), CRM integratsiyasi. Tezcode — IT Park rezidenti. Bepul konsultatsiya, to'lov 30% oldindan.",
    ogTitle: "Telegram bot biznes uchun — Toshkent | Tezcode",
    ogDescription:
      "Buyurtma, Click/Payme to'lov, eslatma, Telegram do'kon (Mini App), CRM integratsiyasi va AI qatlami — biznesingizga moslab. Bepul konsultatsiya.",
  },
  ru: {
    title: "Телеграм бот для бизнеса — Ташкент: заказы, оплата",
    description:
      "Создание Telegram-бота для бизнеса в Ташкенте от $279 (≈ от 3.5 млн сум): приём заказов, оплата Click/Payme, поддержка, уведомления, Telegram-магазин (Mini App), интеграция с CRM. Tezcode — резидент IT Park. Бесплатная консультация, оплата 30% предоплата.",
    ogTitle: "Телеграм бот для бизнеса — Ташкент | Tezcode",
    ogDescription:
      "Заказы, оплата Click/Payme, уведомления, Telegram-магазин (Mini App), интеграция с CRM и ИИ-слой (AI) — под ваш бизнес. Бесплатная консультация.",
  },
  en: {
    title: "Telegram bot development for business — Uzbekistan",
    description:
      "Telegram bot development for business in Tashkent, Uzbekistan from $279: order taking, Click/Payme payments, support, notifications, a Telegram store (Mini App), CRM integration. Tezcode — IT Park resident. Free consultation, 30% upfront payment.",
    ogTitle: "Telegram bot for business — Tashkent | Tezcode",
    ogDescription:
      "Orders, Click/Payme payments, notifications, a Telegram store (Mini App), CRM integration and an AI layer — built around your business. Free consultation.",
  },
  ar: {
    title: "بوت تيليجرام للأعمال — طشقند: الطلبات والدفع",
    description:
      "تطوير بوت تيليجرام للأعمال في طشقند من $279: استقبال الطلبات، دفع Click/Payme، الدعم، الإشعارات، متجر تيليجرام (Mini App)، تكامل CRM. Tezcode — مقيم IT Park. استشارة مجانية، الدفع 30% مقدمًا.",
    ogTitle: "بوت تيليجرام للأعمال — طشقند | Tezcode",
    ogDescription:
      "الطلبات، دفع Click/Payme، الإشعارات، متجر تيليجرام (Mini App)، تكامل CRM وطبقة AI — حسب عملك. استشارة مجانية.",
  },
  uk: {
    title: "Telegram-бот для бізнесу — Ташкент: замовлення, оплата",
    description:
      "Створення Telegram-бота для бізнесу в Ташкенті від $279: прийом замовлень, оплата Click/Payme, підтримка, сповіщення, Telegram-магазин (Mini App), інтеграція з CRM. Tezcode — резидент IT Park. Безкоштовна консультація, оплата 30% передоплата.",
    ogTitle: "Telegram-бот для бізнесу — Ташкент | Tezcode",
    ogDescription:
      "Замовлення, оплата Click/Payme, сповіщення, Telegram-магазин (Mini App), інтеграція з CRM та AI-шар — під ваш бізнес. Безкоштовна консультація.",
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
      "Telegram bot yasash",
      "Telegram bot biznes uchun",
      "Telegram bot Toshkent",
      "Telegram bot buyurtma",
      "Telegram bot narxi",
      "Telegram do'kon Mini App",
      "Telegram бот для бизнеса",
      "телеграм бот для бизнеса Ташкент",
      "заказать телеграм бота Ташкент",
      "телеграм бот с оплатой Click Payme",
      "Telegram bot development Uzbekistan",
      "Telegram Mini App development",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function TelegramBotBiznesPage({
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
    offers: { price: "279", priceCurrency: "USD" },
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  // BreadcrumbList so answer engines see the page's place in the site
  // hierarchy (Home → Telegram bot) — same SSR JSON-LD pattern as /ai-chatbot.
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: copy.service.name, url: `${BASE_URL}${PATH}` },
  ]);
  // HowTo from the visible 4-step process — answer engines quote step-by-step
  // processes verbatim, so "how do we start?" can be answered with our steps.
  const howTo = getHowToSchema({
    name: `${copy.process.title} ${copy.process.titleAccent}`.trim(),
    description: copy.process.subtitle,
    path: PATH,
    locale,
    steps: copy.process.steps.map((s) => ({ name: s.title, text: s.desc })),
  });

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
      <ServicePageClient content={CONTENT} serviceSlug="telegram-bot-biznes" />
    </>
  );
}
