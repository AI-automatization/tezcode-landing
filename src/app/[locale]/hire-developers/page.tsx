import { buildPageMetadata } from "@/lib/seo";
import { HireDevelopersClient } from "./HireDevelopersClient";

// ─────────────────────────────────────────────────────────
// SEO — EN primary (target audience: foreign tech founders)
// ─────────────────────────────────────────────────────────
// Per-locale SERP meta, translated from each locale's own hero/FAQ copy.
// Titles are `absolute` with the "TezCode Teams" sub-brand, so the layout's
// "| Tezcode" template is not appended on top.
const META: Record<string, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  en: {
    title: "Hire Senior Developers from Tashkent — from $30/hr | TezCode Teams",
    description:
      "Hire AI-skilled senior developers from Uzbekistan: $30–55/hr, English/Russian fluent, EST overlap 5 hours, IT Park residency, 2-week trial with free replacement. 8-engineer in-house team.",
    ogTitle: "Hire senior developers from Tashkent — from $30/hr",
    ogDescription:
      "AI-skilled, English/Russian fluent, EST overlap, vetted in-house team. 2-week trial with free replacement.",
  },
  uz: {
    title: "Toshkentdan senior dasturchi yollang — $30/soatdan | TezCode Teams",
    description:
      "AI bilan ishlay oladigan senior dasturchilar: $30/soatdan, ingliz/rus tili, EST bilan 5 soat mos vaqt, IT Park rezidenti. 8 kishilik in-house jamoa, vositachisiz.",
    ogTitle: "Toshkentdan senior dasturchi yollang — $30/soatdan",
    ogDescription:
      "AI ko'nikmali, ingliz/rus tilini biladigan in-house jamoa. Vositachi yo'q, agentlik yo'q.",
  },
  ru: {
    title: "Senior-разработчики из Ташкента — от $30/час | TezCode Teams",
    description:
      "Аренда senior-разработчиков с ИИ-навыками: от $30/час, английский/русский, 5 часов пересечения с EST, резидент IT Park, 2 недели trial. Команда из 8 инженеров.",
    ogTitle: "Нанимайте senior-разработчиков из Ташкента — от $30/час",
    ogDescription:
      "ИИ-навыки, свободный английский/русский, проверенная in-house команда. 2 недели trial, замена за 5 рабочих дней.",
  },
  ar: {
    title: "وظف مطورين كبار من طشقند — من 30$ للساعة | TezCode Teams",
    description:
      "مطورون كبار بمهارات الذكاء الاصطناعي: من 30$ للساعة، إنجليزية وروسية، تقاطع 5 ساعات مع EST، مقيم في IT Park، تجربة أسبوعين. فريق داخلي من 8 مهندسين.",
    ogTitle: "وظف مطورين كبار من طشقند — من 30 دولاراً في الساعة",
    ogDescription:
      "مهارات الذكاء الاصطناعي، إجادة الإنجليزية والروسية، فريق داخلي مدقق. تجربة أسبوعين واستبدال خلال 5 أيام عمل.",
  },
  uk: {
    title: "Senior-розробники з Ташкента — від $30/год | TezCode Teams",
    description:
      "Оренда senior-розробників з AI-навичками: від $30/год, англійська/російська, 5 годин перетину з EST, резидент IT Park, 2 тижні trial. Команда з 8 інженерів.",
    ogTitle: "Найміть senior-розробників з Ташкента — від $30/год",
    ogDescription:
      "AI-навички, вільні англійська/російська, перевірена in-house команда. 2 тижні trial, заміна за 5 робочих днів.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale] ?? META.en;
  return buildPageMetadata({
    locale,
    path: "/hire-developers",
    title: { absolute: meta.title },
    description: meta.description,
    keywords: [
      "hire developers Uzbekistan",
      "staff augmentation Tashkent",
      "dedicated developer Tashkent",
      "offshore developers Uzbekistan",
      "AI engineers for hire",
      "Claude developers",
      "RAG engineer hire",
      "senior React developer offshore",
      "Next.js developers Uzbekistan",
      "FastAPI developers for hire",
      "IT Park resident Uzbekistan",
      "TezCode Teams",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default function HireDevelopersPage() {
  return <HireDevelopersClient />;
}
