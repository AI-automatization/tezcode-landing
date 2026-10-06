import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/tezcode-labs";

// Per-locale SERP meta, translated from each locale's own page copy.
// Titles carry no trailing brand: the [locale] layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  uz: {
    title: "TezCode Labs — venture studio va innovatsiya laboratoriyasi",
    description: "TezCode Labs — Tezcode ichki venture studiyasi: o'z startaplarimizni tug'diramiz, sinovdan o'tkazamiz va miqyoslaymiz. WeWatch, CoreMed, Ventra va boshqalar. Founder'lar bilan investitsiya + ulush modeli.",
    ogTitle: "TezCode Labs — venture studio",
    ogDescription: "O'z mahsulotlarimizni quramiz, sinaymiz va miqyoslaymiz. G'oyangizni birga asos solamiz — investitsiya + ulush modeli.",
  },
  ru: {
    title: "TezCode Labs — венчурная студия и лаборатория инноваций",
    description: "Внутренняя венчурная студия: запускаем, валидируем и масштабируем собственные стартапы — WeWatch, CoreMed, Ventra. Модель инвестиции + доля.",
    ogTitle: "TezCode Labs — строим собственные продукты",
    ogDescription: "Запускаем, валидируем и масштабируем собственные стартапы. Становимся сооснователями вместе с фаундерами — модель инвестиции + доля.",
  },
  en: {
    title: "TezCode Labs — venture studio and innovation lab",
    description: "Our in-house venture studio: we launch, validate and scale our own startups — WeWatch, CoreMed, Ventra. Investment + equity model, co-founding with founders.",
    ogTitle: "TezCode Labs — we build our own products",
    ogDescription: "We launch, validate and scale our own startups, and co-found alongside founders on an investment + equity model.",
  },
  ar: {
    title: "TezCode Labs — استوديو ريادي ومختبر ابتكار",
    description: "مختبر الابتكار الداخلي واستوديو المشاريع الريادية: نُطلق ونتحقق ونوسّع شركاتنا الناشئة — WeWatch وCoreMed وVentra. نموذج استثمار + حصة.",
    ogTitle: "TezCode Labs — نبني منتجاتنا الخاصة",
    ogDescription: "نُطلق ونتحقق ونوسّع شركاتنا الناشئة، ونؤسّس مع رواد الأعمال جنباً إلى جنب — نموذج استثمار + حصة.",
  },
  uk: {
    title: "TezCode Labs — венчурна студія та інноваційна лабораторія",
    description: "Внутрішня венчурна студія: запускаємо, валідуємо та масштабуємо власні стартапи — WeWatch, CoreMed, Ventra. Модель інвестиції + частка.",
    ogTitle: "TezCode Labs — будуємо власні продукти",
    ogDescription: "Запускаємо, валідуємо та масштабуємо власні стартапи. Стаємо співзасновниками разом із фаундерами — модель інвестиції + частка.",
  },
};

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
      "venture studio Toshkent",
      "startup studio O'zbekiston",
      "TezCode Labs",
      "innovatsiya laboratoriyasi",
      "MVP ishlab chiqish",
      "co-founding startup",
      "венчурная студия Ташкент",
      "стартап студия Узбекистан",
      "venture studio Tashkent",
      "startup co-founding Uzbekistan",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function TezcodeLabsPage({
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
      <ServicePageClient content={CONTENT} />
    </>
  );
}
