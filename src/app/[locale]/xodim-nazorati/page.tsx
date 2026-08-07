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
// "контроль сотрудников программа Ташкент" (ru) and "staff monitoring system
// Uzbekistan" (en). Plain string titles go through the layout's `%s | Tezcode`
// template (same pattern as /ai-chatbot). Falls back to uz, like the page body.
const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "Xodim nazorati tizimi — WorkControl, Toshkent",
    description:
      "Xodim nazorati tizimi WorkControl $35/oy dan: vazifa boshqaruvi, ish vaqti va davomat, kechikish nazorati, samaradorlik (KPI), rahbar hisoboti, Telegram bildirishnoma. Tezcode — IT Park rezidenti. Toshkent va butun O'zbekiston. Bepul demo, to'lov 30% oldindan.",
    ogTitle: "Xodim nazorati tizimi — WorkControl, Toshkent | Tezcode",
    ogDescription:
      "Vazifa, ish vaqti, davomat, KPI va hisobot bitta dashboardda. Telegram bildirishnomalari, filiallar ko'rinishi. Bepul demo.",
  },
  ru: {
    title: "Контроль сотрудников: программа WorkControl — Ташкент",
    description:
      "Программа контроля сотрудников WorkControl в Ташкенте от $35/мес: управление задачами, рабочее время и посещаемость, контроль опозданий, эффективность (KPI), отчёт руководителю, уведомления в Telegram. Tezcode — резидент IT Park. Бесплатное демо, оплата 30% предоплата.",
    ogTitle: "Контроль сотрудников — WorkControl, Ташкент | Tezcode",
    ogDescription:
      "Задачи, рабочее время, посещаемость, KPI и отчёты в одном дашборде. Уведомления в Telegram, обзор филиалов. Бесплатное демо.",
  },
  en: {
    title: "Staff monitoring system — WorkControl, Uzbekistan",
    description:
      "WorkControl staff monitoring system in Tashkent, Uzbekistan from $35/mo: task management, work time and attendance, lateness control, performance (KPI), manager reports, Telegram notifications. Tezcode — IT Park resident. Free demo, 30% upfront payment.",
    ogTitle: "Staff monitoring system — WorkControl, Uzbekistan | Tezcode",
    ogDescription:
      "Tasks, work time, attendance, KPI and reports in one dashboard. Telegram notifications, branch overview. Free demo.",
  },
  ar: {
    title: "نظام مراقبة الموظفين — WorkControl، طشقند",
    description:
      "نظام مراقبة الموظفين WorkControl في طشقند من 35$ شهرياً: إدارة المهام، وقت العمل والحضور، مراقبة التأخير، الأداء (KPI)، تقارير المدير، إشعارات Telegram. Tezcode — مقيم في IT Park. عرض تجريبي مجاني، الدفع 30% مقدمًا.",
    ogTitle: "نظام مراقبة الموظفين — WorkControl، طشقند | Tezcode",
    ogDescription:
      "المهام ووقت العمل والحضور وKPI والتقارير في لوحة واحدة. إشعارات Telegram وعرض الفروع. عرض تجريبي مجاني.",
  },
  uk: {
    title: "Контроль співробітників: програма WorkControl — Ташкент",
    description:
      "Програма контролю співробітників WorkControl у Ташкенті від $35/міс: управління завданнями, робочий час і відвідуваність, контроль запізнень, ефективність (KPI), звіт керівнику, сповіщення в Telegram. Tezcode — резидент IT Park. Безкоштовне демо, оплата 30% передоплата.",
    ogTitle: "Контроль співробітників — WorkControl, Ташкент | Tezcode",
    ogDescription:
      "Завдання, робочий час, відвідуваність, KPI та звіти в одному дашборді. Сповіщення в Telegram, огляд філій. Безкоштовне демо.",
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
      "WorkControl",
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
