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

const PATH = "/klinika-crm";

// Localised meta: the title targets "klinika CRM" (uz), "CRM для клиники
// Ташкент" (ru) and "clinic CRM Tashkent" (en) — the exact intents this page
// competes for. Plain (non-absolute) titles go through the layout's
// "%s | Tezcode" template, so no brand suffix is added here — same pattern
// as /ai-chatbot, avoiding a duplicated " | Tezcode".
const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "Klinika CRM Toshkent — ClinicaGo: qabul, bemor bazasi",
    description:
      "Klinika CRM ClinicaGo (CoreMed): qabul va navbat, shifokor jadvali, bemorlar bazasi, SMS/Telegram eslatmalar, moliya, rollar, hisobot. $25/oy dan (1-oy bepul). Jonli ishlayotgan mahsulot, IT Park rezidenti Tezcode. Toshkent. Bepul demo.",
    ogTitle: "ClinicaGo — klinikangiz uchun CRM | Tezcode",
    ogDescription:
      "Qabul, navbat, shifokor jadvali, bemor bazasi, moliya va xodimlar bitta tizimda. Bepul demo.",
  },
  ru: {
    title: "CRM для клиники — ClinicaGo, Ташкент",
    description:
      "CRM для клиники ClinicaGo (CoreMed): приём и очередь, расписание врачей, база пациентов, SMS/Telegram-напоминания, финансы, роли, отчёты. От $25/мес (≈ от 300 000 сум/мес, первый месяц бесплатно). Реально работающий продукт, Tezcode — резидент IT Park. Ташкент. Бесплатное демо.",
    ogTitle: "ClinicaGo — CRM для вашей клиники | Tezcode",
    ogDescription:
      "Приём, очередь, расписание врачей, база пациентов, финансы и сотрудники в одной системе. Бесплатное демо.",
  },
  en: {
    title: "Clinic CRM — ClinicaGo, Tashkent",
    description:
      "ClinicaGo clinic CRM (CoreMed): appointments and queue, doctor schedules, patient base, SMS/Telegram reminders, finance, roles, reports. From $25/mo (first month free). A live, working product by Tezcode — IT Park resident. Tashkent. Free demo.",
    ogTitle: "ClinicaGo — a CRM for your clinic | Tezcode",
    ogDescription:
      "Appointments, queue, doctor schedules, patient base, finance and staff in one system. Free demo.",
  },
  ar: {
    title: "CRM للعيادات — ClinicaGo، طشقند",
    description:
      "CRM للعيادات ClinicaGo (CoreMed): المواعيد والطابور، جداول الأطباء، قاعدة المرضى، تذكيرات SMS/Telegram، المالية، الأدوار، التقارير. من 25$ شهرياً (الشهر الأول مجاناً). منتج عامل حقيقي من Tezcode — مقيم IT Park. طشقند. عرض تجريبي مجاني.",
    ogTitle: "ClinicaGo — نظام CRM لعيادتك | Tezcode",
    ogDescription:
      "المواعيد، الطابور، جداول الأطباء، قاعدة المرضى، المالية والموظفون في نظام واحد. عرض تجريبي مجاني.",
  },
  uk: {
    title: "CRM для клініки — ClinicaGo, Ташкент",
    description:
      "CRM для клініки ClinicaGo (CoreMed): прийом і черга, розклад лікарів, база пацієнтів, SMS/Telegram-нагадування, фінанси, ролі, звіти. Від $25/міс (перший місяць безкоштовно). Реально працюючий продукт, Tezcode — резидент IT Park. Ташкент. Безкоштовне демо.",
    ogTitle: "ClinicaGo — CRM для вашої клініки | Tezcode",
    ogDescription:
      "Прийом, черга, розклад лікарів, база пацієнтів, фінанси і співробітники в одній системі. Безкоштовне демо.",
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
  const meta = META[locale as ServiceLang] ?? META.uz;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: meta.title,
    description: meta.description,
    keywords: [
      "klinika CRM",
      "klinika boshqaruv dasturi",
      "klinika uchun dastur",
      "klinika avtomatlashtirish",
      "ClinicaGo",
      "shifoxona dasturi",
      "bemor bazasi dasturi",
      "CRM для клиники",
      "CRM для клиники Ташкент",
      "программа для клиники Ташкент",
      "управление клиникой",
      "медицинская CRM Узбекистан",
      "clinic CRM Tashkent",
      "clinic CRM Uzbekistan",
      "clinic management software Uzbekistan",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function KlinikaCrmPage({
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
    offers: { price: "25", priceCurrency: "USD", billingPeriod: "MONTH" },
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  // BreadcrumbList so answer engines see the page's place in the site
  // hierarchy (Home → Klinika CRM) — same SSR JSON-LD pattern as /ai-chatbot.
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: copy.service.name, url: `${BASE_URL}${PATH}` },
  ]);
  // HowTo mirrors the visible 4-step onboarding process, so "how do we start
  // with a clinic CRM?" questions can be answered with our exact steps.
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
      <ServicePageClient content={CONTENT} serviceSlug="klinika-crm" />
    </>
  );
}
