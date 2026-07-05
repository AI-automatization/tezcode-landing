import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/biznes-avtomatlashtirish";

// Distinct intent vs /ai-avtomatizatsiya (the umbrella "AI avtomatlashtirish"
// hub): this page targets "biznes jarayonlarini avtomatlashtirish" with an
// industry/process angle (savdo, xizmat ko'rsatish, ombor, hisobot) so the two
// pages stop competing for the same head term.
const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title:
      "Biznes jarayonlarini avtomatlashtirish — soha bo'yicha yechimlar — Tezcode",
    description:
      "Savdo, xizmat ko'rsatish, ombor va hisobot jarayonlarini avtomatlashtirish — sohangizga moslangan tizim: buyurtma, CRM, moliya va integratsiya. Tezcode, Toshkent. Bepul 30 daqiqa konsultatsiya.",
    ogTitle: "Biznes jarayonlarini avtomatlashtirish — soha bo'yicha yechimlar",
    ogDescription:
      "Savdo, xizmat ko'rsatish, ombor va hisobot jarayonlari — sohangizga moslangan bitta tizimda. Bepul konsultatsiya.",
  },
  ru: {
    title:
      "Автоматизация бизнес-процессов — отраслевые решения — Tezcode",
    description:
      "Автоматизация процессов торговли, сферы услуг, склада и отчётности — система под вашу отрасль: заказы, CRM, финансы и интеграции. Tezcode, Ташкент. Бесплатная 30-минутная консультация.",
    ogTitle: "Автоматизация бизнес-процессов — отраслевые решения",
    ogDescription:
      "Торговля, сфера услуг, склад и отчётность — в одной системе под вашу отрасль. Бесплатная консультация.",
  },
  en: {
    title: "Business process automation — industry solutions — Tezcode",
    description:
      "Automation of sales, service, warehouse and reporting processes — a system tailored to your industry: orders, CRM, finance and integrations. Tezcode, Tashkent. Free 30-minute consultation.",
    ogTitle: "Business process automation — industry solutions",
    ogDescription:
      "Sales, service, warehouse and reporting processes — in one system tailored to your industry. Free consultation.",
  },
  ar: {
    title: "أتمتة عمليات الأعمال — حلول حسب المجال — Tezcode",
    description:
      "أتمتة عمليات البيع والخدمات والمخزون والتقارير — نظام مصمم لمجالك: الطلبات وCRM والمالية والتكامل. Tezcode، طشقند. استشارة مجانية 30 دقيقة.",
    ogTitle: "أتمتة عمليات الأعمال — حلول حسب المجال",
    ogDescription:
      "البيع والخدمات والمخزون والتقارير — في نظام واحد مصمم لمجالك. استشارة مجانية.",
  },
  uk: {
    title: "Автоматизація бізнес-процесів — галузеві рішення — Tezcode",
    description:
      "Автоматизація процесів торгівлі, сфери послуг, складу та звітності — система під вашу галузь: замовлення, CRM, фінанси та інтеграції. Tezcode, Ташкент. Безкоштовна 30-хвилинна консультація.",
    ogTitle: "Автоматизація бізнес-процесів — галузеві рішення",
    ogDescription:
      "Торгівля, сфера послуг, склад і звітність — в одній системі під вашу галузь. Безкоштовна консультація.",
  },
};

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
    // { absolute } bypasses the layout's `%s | Tezcode` template so the
    // rendered title ends with a single "— Tezcode".
    title: { absolute: meta.title },
    description: meta.description,
    keywords: [
      "biznes jarayonlarini avtomatlashtirish",
      "jarayonlarni avtomatlashtirish",
      "savdo jarayonlarini avtomatlashtirish",
      "ombor avtomatlashtirish",
      "hisobot avtomatlashtirish",
      "do'kon avtomatlashtirish",
      "buyurtma dastur Toshkent",
      "автоматизация бизнес-процессов",
      "автоматизация склада и отчётности",
      "автоматизация бизнеса Ташкент",
      "business process automation Uzbekistan",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function BiznesAvtomatlashtirishPage({
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
      <ServicePageClient content={CONTENT} serviceSlug="biznes-avtomatlashtirish" />
    </>
  );
}
