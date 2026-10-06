import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/tezcode-custom";

// Per-locale SERP meta, translated from each locale's own page copy.
// Titles carry no trailing brand: the [locale] layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  uz: {
    title: "TezCode Custom — buyurtma dasturiy ta'minot, Toshkent",
    description: "TezCode Custom: noldan buyurtma asosidagi dasturiy mahsulot — biznesingizga moslab qurilgan ERP, CRM, marketplace, ichki tizim yoki AI ilova. MVP $1000 dan, 2-4 haftada, to'lov 30% oldindan, source code 100% sizniki. 14 in-house dasturchi, Toshkent.",
    ogTitle: "TezCode Custom — buyurtma dasturiy mahsulot",
    ogDescription: "Sizning biznesingizga moslab qurilgan dasturiy mahsulot. MVP $1000 dan, 2-4 haftada, to'lov 30% oldindan, source code 100% sizniki.",
  },
  ru: {
    title: "TezCode Custom — заказная разработка ПО в Ташкенте",
    description: "Заказная разработка ПО с нуля: ERP, CRM, marketplace, ИИ-приложения. MVP от $1000 за 2-4 недели, 30% предоплата, исходный код на 100% ваш.",
    ogTitle: "TezCode Custom — заказной продукт с нуля, только для вас",
    ogDescription: "Система под ваши процессы, а не готовый шаблон. MVP от $1000 за 2-4 недели, 30% предоплата, исходный код на 100% ваш.",
  },
  en: {
    title: "TezCode Custom — bespoke software development, Tashkent",
    description: "Bespoke software built from scratch: ERP, CRM, marketplace, AI apps. MVP from $1000 in 2-4 weeks, 30% upfront, source code 100% yours.",
    ogTitle: "TezCode Custom — bespoke software, from scratch, just for you",
    ogDescription: "A system shaped to your processes, not a template. MVP from $1000 in 2-4 weeks, 30% upfront, source code 100% yours.",
  },
  ar: {
    title: "TezCode Custom — تطوير برمجيات مخصصة في طشقند",
    description: "تطوير برمجيات مخصصة من الصفر: ERP، CRM، marketplace، تطبيقات AI. MVP من 1000$ خلال 2-4 أسابيع، دفعة مقدمة 30%، الكود المصدري لك 100%.",
    ogTitle: "TezCode Custom — منتج برمجي مخصص من الصفر، لك وحدك",
    ogDescription: "نظام مصمم لعملياتك وليس قالباً جاهزاً. MVP من 1000$ خلال 2-4 أسابيع، دفعة مقدمة 30%، الكود المصدري لك 100%.",
  },
  uk: {
    title: "TezCode Custom — замовна розробка ПЗ у Ташкенті",
    description: "Замовна розробка ПЗ з нуля: ERP, CRM, marketplace, AI-застосунки. MVP від $1000 за 2-4 тижні, 30% передоплати, вихідний код на 100% ваш.",
    ogTitle: "TezCode Custom — замовний продукт з нуля, лише для вас",
    ogDescription: "Система під ваші процеси, а не готовий шаблон. MVP від $1000 за 2-4 тижні, 30% передоплати, вихідний код на 100% ваш.",
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
      "buyurtma dasturiy ta'minot",
      "custom software Toshkent",
      "ERP tizim yaratish",
      "CRM ishlab chiqish",
      "MVP 2 hafta",
      "заказная разработка ПО",
      "custom software development",
      "bespoke software Tashkent",
      "source code ownership",
      "30% upfront payment",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function TezcodeCustomPage({
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
    offers: { price: "1000", priceCurrency: "USD" },
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
