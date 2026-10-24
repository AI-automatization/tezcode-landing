import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/tezcode-systems";

// Per-locale SERP meta, translated from each locale's own page copy.
// Titles carry no trailing brand: the [locale] layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  uz: {
    title: "TezCode Systems — tayyor SaaS: RAOS",
    description: "TezCode Systems — oylik obuna asosidagi tayyor SaaS mahsulotlar. RAOS (do'kon uchun POS: kassa, ombor, mijozlar, soliq hisoboti). Bugun ulaning — ertaga foyda oling, uzoq muddatli buyurtma dasturisiz.",
    ogTitle: "TezCode Systems — tayyor SaaS mahsulotlar",
    ogDescription: "RAOS — oylik obuna asosidagi tayyor SaaS. Bugun ulaning, ertaga foyda oling. Uzoq buyurtma dasturisiz.",
  },
  ru: {
    title: "TezCode Systems — готовый SaaS: RAOS",
    description: "RAOS (POS для магазина) — готовый SaaS-продукт по ежемесячной подписке. Бесплатное демо, быстрое подключение.",
    ogTitle: "TezCode Systems — готовые SaaS-продукты по подписке",
    ogDescription: "RAOS — готовый, проверенный SaaS-продукт. Подключаетесь сегодня — прибыль завтра. Без долгой заказной разработки.",
  },
  en: {
    title: "TezCode Systems — ready-made SaaS: RAOS",
    description: "RAOS (retail POS) — a ready, proven SaaS product on a monthly subscription. Free demo, fast onboarding and training.",
    ogTitle: "TezCode Systems — ready-made SaaS on subscription",
    ogDescription: "RAOS — a ready, proven SaaS product. Connect today, profit tomorrow. No long custom build.",
  },
  ar: {
    title: "TezCode Systems — منتجات SaaS جاهزة: RAOS",
    description: "RAOS (نظام نقاط بيع للمتاجر) — منتج SaaS جاهز باشتراك شهري. عرض تجريبي مجاني وتفعيل وتدريب سريع.",
    ogTitle: "TezCode Systems — منتجات SaaS جاهزة باشتراك شهري",
    ogDescription: "RAOS — منتج SaaS جاهز ومُجرَّب. تتصل اليوم — والربح غداً. بلا تطوير مخصص طويل.",
  },
  uk: {
    title: "TezCode Systems — готовий SaaS: RAOS",
    description: "RAOS (POS для магазину) — готовий SaaS-продукт за щомісячною підпискою. Безкоштовне демо, швидке підключення.",
    ogTitle: "TezCode Systems — готові SaaS-продукти за підпискою",
    ogDescription: "RAOS — готовий, перевірений SaaS-продукт. Підключаєтеся сьогодні — прибуток завтра. Без довгої замовної розробки.",
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
      "tayyor SaaS Toshkent",
      "POS tizimi obuna",
      "RAOS POS",
      "SaaS obuna O'zbekiston",
      "готовый SaaS Ташкент",
      "POS система по подписке",
      "ready SaaS Tashkent",
      "subscription POS software",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function TezcodeSystemsPage({
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
