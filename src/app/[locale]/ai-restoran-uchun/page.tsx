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

const PATH = "/ai-restoran-uchun";

const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "Restoran uchun AI va avtomatlashtirish — Toshkent",
    description:
      "Restoran va kafe uchun AI va avtomatlashtirish Toshkentda: RAOS POS (kassa, ombor, offline), AI agent (bron va buyurtma), AI video analitika (mehmonlar oqimi). POS 249 000 so'm/oy dan, AI agent $400 dan. IT Park rezidenti Tezcode.",
    ogTitle: "Restoran uchun AI va avtomatlashtirish — Toshkent | Tezcode",
    ogDescription:
      "RAOS POS + AI agent (bron/buyurtma) + video analitika — restoran va kafe uchun bitta yechim. O'zbek va rus tilida. Bepul konsultatsiya.",
  },
  ru: {
    title: "ИИ (AI) и автоматизация для ресторана — Ташкент",
    description:
      "ИИ (AI) и автоматизация для ресторана и кафе в Ташкенте: RAOS POS (касса, склад, офлайн), ИИ-агент (бронь и заказы), ИИ-видеоаналитика (поток гостей). POS от 249 000 сум/мес, ИИ-агент от $400 (≈ от 5 млн сум). Tezcode — резидент IT Park.",
    ogTitle: "ИИ (AI) и автоматизация для ресторана — Ташкент | Tezcode",
    ogDescription:
      "RAOS POS + ИИ-агент (AI, бронь/заказы) + видеоаналитика — одно решение для ресторана и кафе. На узбекском и русском. Бесплатная консультация.",
  },
  en: {
    title: "AI and automation for restaurants — Tashkent",
    description:
      "AI and automation for restaurants and cafés in Tashkent: RAOS POS (register, inventory, offline), AI agent (bookings and orders), AI video analytics (guest footfall). POS from 249,000 UZS/mo, AI agent from $400. Tezcode — IT Park resident.",
    ogTitle: "AI and automation for restaurants — Tashkent | Tezcode",
    ogDescription:
      "RAOS POS + AI agent (bookings/orders) + video analytics — one solution for restaurants and cafés. In Uzbek and Russian. Free consultation.",
  },
  ar: {
    title: "AI والأتمتة للمطاعم — طشقند",
    description:
      "AI والأتمتة للمطاعم والمقاهي في طشقند: RAOS POS (كاشير، مخزون، بدون إنترنت)، وكيل AI (حجز وطلبات)، تحليلات فيديو AI (تدفّق الضيوف). POS من 249,000 سوم/شهر، وكيل AI من 400$. Tezcode — مقيم IT Park.",
    ogTitle: "AI والأتمتة للمطاعم — طشقند | Tezcode",
    ogDescription:
      "RAOS POS + وكيل AI (حجز/طلبات) + تحليلات فيديو — حل واحد للمطاعم والمقاهي. بالأوزبكية والروسية. استشارة مجانية.",
  },
  uk: {
    title: "AI та автоматизація для ресторану — Ташкент",
    description:
      "AI та автоматизація для ресторану й кафе в Ташкенті: RAOS POS (каса, склад, офлайн), AI-агент (бронь і замовлення), AI-відеоаналітика (потік гостей). POS від 249 000 сум/міс, AI-агент від $400. Tezcode — резидент IT Park.",
    ogTitle: "AI та автоматизація для ресторану — Ташкент | Tezcode",
    ogDescription:
      "RAOS POS + AI-агент (бронь/замовлення) + відеоаналітика — одне рішення для ресторану й кафе. Узбецькою та російською. Безкоштовна консультація.",
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
      "restoran uchun dastur",
      "restoran avtomatlashtirish",
      "kafe uchun AI",
      "restoran POS tizimi",
      "ресторан автоматизация Ташкент",
      "POS для ресторана",
      "AI для ресторана",
      "restaurant automation Tashkent",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function AiRestoranUchunPage({
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
      <ServicePageClient content={CONTENT} serviceSlug="ai-restoran-uchun" />
    </>
  );
}
