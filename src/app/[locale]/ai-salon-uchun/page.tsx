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

const PATH = "/ai-salon-uchun";

const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "Go'zallik saloni uchun AI va onlayn bron — Toshkent",
    description:
      "Go'zallik saloni, barbershop va klinika uchun onlayn bron va AI Toshkentda: Telegram/Instagram bron, avtomatik eslatma (no-show kamaytirish), AI agent, mijozlar bazasi va sodiqlik. AI agent $400 dan. IT Park rezidenti Tezcode.",
    ogTitle: "Go'zallik saloni uchun AI va onlayn bron — Toshkent | Tezcode",
    ogDescription:
      "Telegram/Instagram onlayn bron + eslatma (no-show kamaytiradi) + AI agent + CRM. Salon, barbershop, klinika uchun. Bepul konsultatsiya.",
  },
  ru: {
    title: "ИИ (AI) и онлайн-запись для салона красоты — Ташкент",
    description:
      "Онлайн-запись и ИИ (AI) для салона красоты, барбершопа и клиники в Ташкенте: запись в Telegram/Instagram, автонапоминания (снижение неявок), ИИ-агент, база клиентов и лояльность. ИИ-агент от $400 (≈ от 5 млн сум). Tezcode — резидент IT Park.",
    ogTitle: "ИИ (AI) и онлайн-запись для салона красоты — Ташкент | Tezcode",
    ogDescription:
      "Онлайн-запись в Telegram/Instagram + напоминания (снижают неявки) + ИИ-агент (AI) + CRM. Для салона, барбершопа, клиники. Бесплатная консультация.",
  },
  en: {
    title: "AI and online booking for beauty salons — Tashkent",
    description:
      "Online booking and AI for beauty salons, barbershops and clinics in Tashkent: Telegram/Instagram booking, auto-reminders (cutting no-shows), AI agent, customer base and loyalty. AI agent from $400. Tezcode — IT Park resident.",
    ogTitle: "AI and online booking for beauty salons — Tashkent | Tezcode",
    ogDescription:
      "Telegram/Instagram online booking + reminders (cut no-shows) + AI agent + CRM. For salons, barbershops, clinics. Free consultation.",
  },
  ar: {
    title: "AI والحجز أونلاين لصالونات التجميل — طشقند",
    description:
      "الحجز أونلاين وAI لصالونات التجميل والحلاقين والعيادات في طشقند: حجز عبر Telegram/Instagram، تذكيرات تلقائية (تقليل الغياب)، وكيل AI، قاعدة عملاء وولاء. وكيل AI من 400$. Tezcode — مقيم IT Park.",
    ogTitle: "AI والحجز أونلاين لصالونات التجميل — طشقند | Tezcode",
    ogDescription:
      "حجز أونلاين عبر Telegram/Instagram + تذكيرات (تقلّل الغياب) + وكيل AI + CRM. للصالونات والحلاقين والعيادات. استشارة مجانية.",
  },
  uk: {
    title: "AI та онлайн-запис для салону краси — Ташкент",
    description:
      "Онлайн-запис і AI для салону краси, барбершопа та клініки в Ташкенті: запис у Telegram/Instagram, автонагадування (зниження неявок), AI-агент, база клієнтів і лояльність. AI-агент від $400. Tezcode — резидент IT Park.",
    ogTitle: "AI та онлайн-запис для салону краси — Ташкент | Tezcode",
    ogDescription:
      "Онлайн-запис у Telegram/Instagram + нагадування (знижують неявки) + AI-агент + CRM. Для салону, барбершопа, клініки. Безкоштовна консультація.",
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
    title: meta.title,
    description: meta.description,
    keywords: [
      "go'zallik saloni uchun dastur",
      "salon avtomatlashtirish",
      "onlayn bron dasturi",
      "salon uchun CRM",
      "автоматизация салона красоты",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function AiSalonUchunPage({
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
  const howToSchema = getHowToSchema({
    name: `${copy.process.title} ${copy.process.titleAccent}`.trim(),
    description: copy.process.subtitle,
    path: PATH,
    locale,
    steps: copy.process.steps.map((st) => ({ name: st.title, text: st.desc })),
  });
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
      <ServicePageClient content={CONTENT} serviceSlug="ai-salon-uchun" />
    </>
  );
}
