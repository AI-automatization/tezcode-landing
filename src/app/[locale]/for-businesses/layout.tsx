import { buildPageMetadata } from "@/lib/seo";

// The page itself is a Client Component, so its SEO metadata lives here in a
// server layout. Without this the route inherited the homepage metadata
// (duplicate title + canonical pointing to "/").
// Per-locale SERP meta, translated from each locale's own page copy.
// Titles carry no trailing brand: the [locale] layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  uz: {
    title: "Biznes uchun buyurtma dastur — ERP, CRM, E-commerce",
    description: "Tayyor SaaS ish jarayoningizga mos kelmasa, Tezcode noldan yozadi: ERP, CRM, e-commerce, custom dashboard. Bepul 30 daqiqa konsultatsiya, to'lov 30% oldindan.",
    ogTitle: "Biznesingizga moslashtirilgan dastur — 2 haftada",
    ogDescription: "ERP, CRM, e-commerce, custom dashboard — noldan, biznesingizga moslab. Bepul konsultatsiya.",
  },
  ru: {
    title: "Разработка ПО на заказ в Ташкенте — ERP, CRM, e-commerce",
    description: "Если готовые SaaS не вписываются в ваши процессы, Tezcode напишет с нуля: ERP, CRM, e-commerce, custom dashboard. Бесплатная консультация, 30% предоплата.",
    ogTitle: "Программа под ваш бизнес — за 2 недели",
    ogDescription: "ERP, CRM, e-commerce, custom dashboard — с нуля, под ваши процессы. Бесплатная 30-минутная консультация.",
  },
  en: {
    title: "Custom software for business — ERP, CRM, e-commerce",
    description: "When off-the-shelf SaaS doesn't fit your workflow, Tezcode builds from scratch: ERP, CRM, e-commerce, custom dashboard. Free consultation, 30% upfront.",
    ogTitle: "Software built for your business — in 2 weeks",
    ogDescription: "ERP, CRM, e-commerce, custom dashboard — built from scratch for your workflow. Free 30-min consultation.",
  },
  ar: {
    title: "برمجيات مخصصة للأعمال — ERP وCRM وتجارة إلكترونية",
    description: "عندما لا تناسب حلول SaaS الجاهزة سير عملك، تبني Tezcode من الصفر: ERP، CRM، تجارة إلكترونية، لوحة تحكم مخصصة. استشارة مجانية، 30% مقدمًا.",
    ogTitle: "برنامج مصمم لأعمالك — في أسبوعين",
    ogDescription: "ERP، CRM، تجارة إلكترونية، لوحة تحكم مخصصة — من الصفر ولسير عملك. استشارة 30 دقيقة مجانية.",
  },
  uk: {
    title: "Розробка ПЗ під замовлення — ERP, CRM, e-commerce",
    description: "Якщо готові SaaS не підходять під ваш процес, Tezcode пише з нуля: ERP, CRM, e-commerce, custom dashboard. Безкоштовна консультація, 30% передоплата.",
    ogTitle: "Програма під ваш бізнес — за 2 тижні",
    ogDescription: "ERP, CRM, e-commerce, custom dashboard — з нуля, під ваш робочий процес. Безкоштовна 30-хв консультація.",
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
    path: "/for-businesses",
    title: meta.title,
    description: meta.description,
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default function ForBusinessesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
