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

const PATH = "/xodim-nazorati";

// Localised meta: the title targets "xodim nazorati tizimi" (uz),
// "система контроля сотрудников" (ru) and "staff monitoring system
// Uzbekistan" (en). Service page — Tezcode builds the system for the client
// (no ready-made product, no subscription price). Plain string titles go
// through the layout's `%s | Tezcode` template (same pattern as /ai-chatbot).
// Falls back to uz, like the page body.
const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "Xodim nazorati tizimi yaratish — Toshkent",
    description:
      "Biznesingiz uchun xodim nazorati tizimini ishlab chiqamiz: vazifa boshqaruvi, ish vaqti va davomat, kechikish nazorati, samaradorlik (KPI), rahbar hisoboti, Telegram bildirishnoma. Tezcode — IT Park rezidenti. Toshkent va butun O'zbekiston. Bepul konsultatsiya, to'lov 30% oldindan.",
    ogTitle: "Xodim nazorati tizimi yaratish — Toshkent | Tezcode",
    ogDescription:
      "Vazifa, ish vaqti, davomat, KPI va hisobot bitta dashboardda — tizimni biznesingizga moslab quramiz. Telegram bildirishnomalari, filiallar ko'rinishi. Bepul konsultatsiya.",
  },
  ru: {
    title: "Система контроля сотрудников — разработка, Ташкент",
    description:
      "Разрабатываем систему контроля сотрудников под ваш бизнес: управление задачами, рабочее время и посещаемость, контроль опозданий, эффективность (KPI), отчёт руководителю, уведомления в Telegram. Tezcode — резидент IT Park. Бесплатная консультация, оплата 30% предоплата.",
    ogTitle: "Система контроля сотрудников — разработка, Ташкент | Tezcode",
    ogDescription:
      "Задачи, рабочее время, посещаемость, KPI и отчёты в одном дашборде — строим систему под ваш бизнес. Уведомления в Telegram, обзор филиалов. Бесплатная консультация.",
  },
  en: {
    title: "Staff monitoring system development — Uzbekistan",
    description:
      "We build a staff monitoring system for your business in Tashkent, Uzbekistan: task management, work time and attendance, lateness control, performance (KPI), manager reports, Telegram notifications. Tezcode — IT Park resident. Free consultation, 30% upfront payment.",
    ogTitle: "Staff monitoring system development — Uzbekistan | Tezcode",
    ogDescription:
      "Tasks, work time, attendance, KPI and reports in one dashboard — built around your business. Telegram notifications, branch overview. Free consultation.",
  },
  ar: {
    title: "تطوير نظام مراقبة الموظفين — طشقند",
    description:
      "نبني نظام مراقبة الموظفين لعملك في طشقند: إدارة المهام، وقت العمل والحضور، مراقبة التأخير، الأداء (KPI)، تقارير المدير، إشعارات Telegram. Tezcode — مقيم في IT Park. استشارة مجانية، الدفع 30% مقدمًا.",
    ogTitle: "تطوير نظام مراقبة الموظفين — طشقند | Tezcode",
    ogDescription:
      "المهام ووقت العمل والحضور وKPI والتقارير في لوحة واحدة — نبنيها وفق عملك. إشعارات Telegram وعرض الفروع. استشارة مجانية.",
  },
  uk: {
    title: "Система контролю співробітників — розробка, Ташкент",
    description:
      "Розробляємо систему контролю співробітників під ваш бізнес: управління завданнями, робочий час і відвідуваність, контроль запізнень, ефективність (KPI), звіт керівнику, сповіщення в Telegram. Tezcode — резидент IT Park. Безкоштовна консультація, оплата 30% передоплата.",
    ogTitle: "Система контролю співробітників — розробка, Ташкент | Tezcode",
    ogDescription:
      "Завдання, робочий час, відвідуваність, KPI та звіти в одному дашборді — будуємо систему під ваш бізнес. Сповіщення в Telegram, огляд філій. Безкоштовна консультація.",
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
      "xodim nazorati",
      "xodim nazorati tizimi",
      "xodimlar nazorati tizimi",
      "ish vaqti nazorati",
      "davomat tizimi",
      "davomat nazorati",
      "vazifa boshqaruv dasturi",
      "KPI nazorati",
      "xodim nazorati tizimi yaratish",
      "система контроля сотрудников",
      "контроль сотрудников программа Ташкент",
      "контроль сотрудников",
      "учёт рабочего времени Ташкент",
      "управление задачами",
      "staff monitoring system Uzbekistan",
      "employee monitoring Uzbekistan",
      "attendance tracking Tashkent",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function XodimNazoratiPage({
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
  // hierarchy (Home → Xodim nazorati) — same SSR JSON-LD pattern as /ai-chatbot.
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: copy.service.name, url: `${BASE_URL}${PATH}` },
  ]);
  // HowTo from the visible 4-step process — answer engines quote step-by-step
  // rollout processes verbatim, keeping the markup in sync with the page copy.
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
      <ServicePageClient content={CONTENT} serviceSlug="xodim-nazorati" />
    </>
  );
}
