import { buildPageMetadata } from "@/lib/seo";

// Client page → SEO metadata lives in this server layout.
// Per-locale SERP meta, translated from each locale's own page copy.
// Titles carry no trailing brand: the [locale] layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  uz: {
    title: "Biz haqimizda — AI Software Factory, Toshkent",
    description: "Tezcode — 2024-yilda Toshkentda tashkil etilgan AI Software Factory. Asoschisi Bekzod Mirzaaliyev, IT Park rezidenti, 14+ in-house dasturchi. 6 yo'nalish, 8+ mahsulot. Bizning missiya, qadriyatlar va jamoa.",
    ogTitle: "Biz haqimizda — Tezcode",
    ogDescription: "Toshkentdagi AI Software Factory. 2024, asoschi Bekzod Mirzaaliyev, IT Park rezidenti, 6 yo'nalish, 8+ mahsulot.",
  },
  ru: {
    title: "О компании — AI Software Factory в Ташкенте",
    description: "Tezcode — AI Software Factory, основана в 2024 году в Ташкенте. Основатель Бекзод Мирзаалиев, резидент IT Park, 14+ in-house разработчиков, 6 направлений.",
    ogTitle: "О компании Tezcode — AI Software Factory в Ташкенте",
    ogDescription: "Основана в 2024 году в Ташкенте, основатель Бекзод Мирзаалиев, резидент IT Park. 6 направлений, 8+ продуктов.",
  },
  en: {
    title: "About us — AI Software Factory in Tashkent",
    description: "Tezcode is an AI Software Factory founded in 2024 in Tashkent. Founder Bekzod Mirzaaliyev, IT Park resident, 14+ in-house developers, 6 divisions, 8+ products.",
    ogTitle: "About Tezcode — an AI Software Factory in Tashkent",
    ogDescription: "Founded in 2024 in Tashkent by Bekzod Mirzaaliyev, IT Park resident. 6 divisions, 8+ products.",
  },
  ar: {
    title: "من نحن — مصنع برمجيات بالذكاء الاصطناعي في طشقند",
    description: "تأسست Tezcode عام 2024 في طشقند. مؤسسها بكزود ميرزااليف، مقيمة في IT Park، أكثر من 14 مطورًا داخليًا، 6 أقسام و8+ منتجات.",
    ogTitle: "من نحن — Tezcode، مصنع برمجيات بالذكاء الاصطناعي في طشقند",
    ogDescription: "تأسست عام 2024 في طشقند على يد بكزود ميرزااليف، مقيمة في IT Park. 6 أقسام و8+ منتجات.",
  },
  uk: {
    title: "Про компанію — AI Software Factory у Ташкенті",
    description: "Tezcode — AI Software Factory, заснована у 2024 році в Ташкенті. Засновник Бекзод Мірзаалієв, резидент IT Park, 14+ in-house розробників, 6 напрямків.",
    ogTitle: "Про компанію Tezcode — AI Software Factory у Ташкенті",
    ogDescription: "Заснована у 2024 році в Ташкенті, засновник Бекзод Мірзаалієв, резидент IT Park. 6 напрямків, 8+ продуктів.",
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
    path: "/biz-haqimizda",
    title: meta.title,
    description: meta.description,
    keywords: [
      "Tezcode haqida",
      "Tezcode kompaniya",
      "AI Software Factory Toshkent",
      "IT kompaniya Toshkent",
      "о компании Tezcode",
      "about Tezcode",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
