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

const PATH = "/ai-video-analitika";

// Localised meta: the title targets "AI video analitika Toshkent" (uz) and its
// ru/en/ar/uk equivalents — the exact query buyers of camera/CCTV analytics
// search for. Falls back to uz for unknown locales, same as the page body.
const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "AI video analitika — Toshkent",
    description:
      "AI video analitika Toshkentda: mavjud IP kameralarni AI bilan aqlli qilamiz — odam sanash, yuz tanish orqali davomat, kaska/ish xavfsizligi nazorati va avto raqam tanish (ANPR). Real vaqtda ogohlantirish, on-premise yoki bulut. Narx: $990 dan (bir martalik ulash). IT Park rezidenti Tezcode. Bepul konsultatsiya.",
    ogTitle: "AI video analitika — Toshkent | Tezcode",
    ogDescription:
      "Mavjud kameralaringizni AI bilan aqlli qiling: odam sanash, yuz tanish davomat, kaska nazorati, ANPR. Real vaqtda xabar, on-premise yoki bulut. Bepul konsultatsiya.",
  },
  ru: {
    title: "AI-видеоаналитика — Ташкент",
    description:
      "AI-видеоаналитика в Ташкенте: делаем существующие IP-камеры умными — подсчёт людей, посещаемость по распознаванию лиц, контроль касок/охраны труда и распознавание автономеров (ANPR). Уведомления в реальном времени, on-premise или облако. Цена: от $990 (разовое подключение). Tezcode — резидент IT Park. Бесплатная консультация.",
    ogTitle: "AI-видеоаналитика — Ташкент | Tezcode",
    ogDescription:
      "Сделайте существующие камеры умными с AI: подсчёт людей, посещаемость по лицу, контроль касок, ANPR. Уведомления в реальном времени, on-premise или облако. Бесплатная консультация.",
  },
  en: {
    title: "AI video analytics — Tashkent",
    description:
      "AI video analytics in Tashkent: make existing IP cameras smart — people counting, attendance by face recognition, helmet/workplace-safety control and number-plate recognition (ANPR). Real-time alerts, on-premise or cloud. Price: from $990 (one-time setup). Tezcode — IT Park resident. Free consultation.",
    ogTitle: "AI video analytics — Tashkent | Tezcode",
    ogDescription:
      "Make your existing cameras smart with AI: people counting, attendance by face, helmet control, ANPR. Real-time alerts, on-premise or cloud. Free consultation.",
  },
  ar: {
    title: "تحليلات الفيديو بالذكاء الاصطناعي — طشقند",
    description:
      "تحليلات الفيديو بالذكاء الاصطناعي في طشقند: نجعل كاميرات IP الحالية ذكية — عدّ الأشخاص، الحضور بالتعرف على الوجه، مراقبة الخوذ/سلامة العمل والتعرف على لوحات المركبات (ANPR). تنبيهات فورية، on-premise أو سحابة. السعر: من 990$ (تركيب لمرة واحدة). Tezcode — مقيم IT Park. استشارة مجانية.",
    ogTitle: "تحليلات الفيديو بالذكاء الاصطناعي — طشقند | Tezcode",
    ogDescription:
      "اجعل كاميراتك الحالية ذكية بالذكاء الاصطناعي: عدّ الأشخاص، الحضور بالوجه، مراقبة الخوذ، ANPR. تنبيهات فورية، on-premise أو سحابة. استشارة مجانية.",
  },
  uk: {
    title: "AI-відеоаналітика — Ташкент",
    description:
      "AI-відеоаналітика в Ташкенті: робимо наявні IP-камери розумними — підрахунок людей, відвідуваність за розпізнаванням облич, контроль касок/охорони праці та розпізнавання автономерів (ANPR). Сповіщення в реальному часі, on-premise або хмара. Ціна: від $990 (разове підключення). Tezcode — резидент IT Park. Безкоштовна консультація.",
    ogTitle: "AI-відеоаналітика — Ташкент | Tezcode",
    ogDescription:
      "Зробіть наявні камери розумними за допомогою AI: підрахунок людей, відвідуваність за обличчям, контроль касок, ANPR. Сповіщення в реальному часі, on-premise або хмара. Безкоштовна консультація.",
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
      "AI video analitika",
      "AI video analitika Toshkent",
      "AI kamera Toshkent",
      "yuz tanish davomat",
      "kaska nazorati",
      "odam sanash kamera",
      "avto raqam tanish",
      "видеоаналитика Ташкент",
      "AI-видеоаналитика",
      "распознавание лиц",
      "ANPR Узбекистан",
      "распознавание автономеров",
      "подсчёт людей камера",
      "AI video analytics Tashkent",
      "face recognition Uzbekistan",
      "computer vision cameras",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function AiVideoAnalyticsPage({
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
    offers: { price: "990", priceCurrency: "USD" },
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  const howToSchema = getHowToSchema({
    name: `${copy.process.title} ${copy.process.titleAccent}`.trim(),
    description: copy.process.subtitle,
    path: PATH,
    locale,
    steps: copy.process.steps.map((st) => ({ name: st.title, text: st.desc })),
  });
  // BreadcrumbList so answer engines see the page's place in the site
  // hierarchy (Home → AI video analitika) — same SSR JSON-LD pattern as /ai-chatbot.
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
      <ServicePageClient content={CONTENT} serviceSlug="ai-video-analitika" />
    </>
  );
}
