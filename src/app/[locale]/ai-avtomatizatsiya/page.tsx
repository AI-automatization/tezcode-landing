import { CENTRAL_ASIA_COUNTRIES } from "@/lib/markets";
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

const PATH = "/ai-avtomatizatsiya";

const META: Record<ServiceLang, { title: string; description: string }> = {
  uz: {
    title: "AI avtomatizatsiya — Toshkentda biznes uchun",
    description:
      "Toshkent va O'zbekiston bizneslari uchun AI avtomatizatsiya: mijoz savollari, hujjat va hisobotlar, CRM integratsiyasi. Bepul 30 daqiqalik konsultatsiya.",
  },
  ru: {
    title: "Разработка AI-решений в Ташкенте для бизнеса",
    description:
      "Разработка AI-решений: чат-боты, обработка документов и отчётов, интеграция с CRM и 1С. Команда в Ташкенте. Начните с бесплатной консультации.",
  },
  en: {
    title: "AI Business Automation — Reporting, Sales & CRM",
    description:
      "Automate reports, customer support, sales and inventory with Tezcode. AI chatbots and 1C/CRM integrations built around your business processes. Free consultation.",
  },
  ar: {
    title: "أتمتة الأعمال بالذكاء الاصطناعي — التقارير والمبيعات وCRM",
    description:
      "أتمتة التقارير وخدمة العملاء والمبيعات والمخزون مع Tezcode. روبوتات دردشة وتكامل 1C/CRM مصممة لعمليات عملك. استشارة مجانية.",
  },
  uk: {
    title: "AI-автоматизація бізнесу — звіти, продажі та CRM",
    description:
      "Tezcode автоматизує звіти, відповіді клієнтам, продажі та склад за допомогою AI. Чат-боти й інтеграція 1C/CRM під ваші процеси. Безкоштовна консультація.",
  },
};

// Keep metadata in the same language as the rendered service content.
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
    ...meta,
    availableLocales: Object.keys(CONTENT),
  });
}

export default async function AiAvtomatizatsiyaPage({
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
    areaServed: locale === "ru" ? CENTRAL_ASIA_COUNTRIES : undefined,
    offers: { price: "200", priceCurrency: "USD", billingPeriod: "MONTH" },
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: copy.service.name, url: `${BASE_URL}${PATH}` },
  ]);
  const howToSchema = getHowToSchema({
    name: `${copy.process.title} ${copy.process.titleAccent}`.trim(),
    description: copy.process.subtitle,
    path: PATH,
    locale,
    steps: copy.process.steps.map((st) => ({ name: st.title, text: st.desc })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ServicePageClient content={CONTENT} serviceSlug="ai-avtomatizatsiya" />
    </>
  );
}
