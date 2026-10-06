import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/tezcode-academy";

// Per-locale SERP meta, translated from each locale's own page copy.
// Titles carry no trailing brand: the [locale] layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  uz: {
    title: "TezCode Academy — AI ta'lim markazi: kurslar, bootcamp",
    description: "TezCode Academy — Tezcode'ning AI ta'lim markazi. Dasturchilar va biznes egalari uchun AI kurslari, bootcamp, workshop va korporativ treninglar. Amaliyot birinchi o'rinda, ishlab turgan Software Factory muhandislaridan o'rganing. Bepul konsultatsiya.",
    ogTitle: "TezCode Academy — AI ta'lim markazi",
    ogDescription: "AI, avtomatizatsiya va zamonaviy muhandislikni ishlab turgan Software Factory muhandislaridan o'rganing. Kurslar, bootcamp, korporativ treninglar.",
  },
  ru: {
    title: "TezCode Academy — ИИ-курсы и буткемпы в Ташкенте",
    description: "ИИ-курсы, буткемпы, воркшопы и корпоративные тренинги для разработчиков и владельцев бизнеса. Учитесь у инженеров действующей AI Software Factory.",
    ogTitle: "TezCode Academy — учитесь строить с ИИ",
    ogDescription: "ИИ-курсы, буткемпы, воркшопы и корпоративные тренинги. Практика на первом месте — от инженеров действующей AI Software Factory.",
  },
  en: {
    title: "TezCode Academy — AI courses, bootcamps and workshops",
    description: "AI courses, bootcamps, workshops and corporate trainings for developers and business owners. Practice first — learn from working AI Software Factory engineers.",
    ogTitle: "TezCode Academy — learn to build with AI",
    ogDescription: "AI courses, bootcamps, workshops and corporate trainings. Practice first — taught by the engineers of a working AI Software Factory.",
  },
  ar: {
    title: "TezCode Academy — مركز تعليم الذكاء الاصطناعي",
    description: "دورات ذكاء اصطناعي، معسكرات تدريبية، ورش عمل وتدريبات مؤسسية للمطورين وأصحاب الأعمال. الممارسة أولاً مع مهندسي مصنع برمجيات يعمل فعلاً.",
    ogTitle: "TezCode Academy — تعلّم البناء بالذكاء الاصطناعي",
    ogDescription: "دورات ذكاء اصطناعي، معسكرات تدريبية، ورش عمل وتدريبات مؤسسية. الممارسة أولاً — تتعلّم من مهندسين يعملون فعلاً.",
  },
  uk: {
    title: "TezCode Academy — AI-курси, буткемпи та воркшопи",
    description: "AI-курси, буткемпи, воркшопи та корпоративні тренінги для розробників і власників бізнесу. Практика на першому місці — від інженерів діючої AI Software Factory.",
    ogTitle: "TezCode Academy — вчіться будувати з AI",
    ogDescription: "AI-курси, буткемпи, воркшопи та корпоративні тренінги. Практика на першому місці — від інженерів діючої AI Software Factory.",
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
      "AI kurslari Toshkent",
      "dasturlash bootcamp Toshkent",
      "IT ta'lim markazi O'zbekiston",
      "korporativ trening AI",
      "ИИ обучение Ташкент",
      "курсы программирования Ташкент",
      "AI bootcamp Tashkent",
      "AI courses Tashkent",
      "learn to code with AI",
      "corporate AI training",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function TezcodeAcademyPage({
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
