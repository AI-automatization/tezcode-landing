import { buildPageMetadata } from "@/lib/seo";

// Client page → SEO metadata lives in this server layout.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/biz-haqimizda",
    title: "Biz haqimizda — Tezcode | AI Software Factory, Toshkent",
    description:
      "Tezcode — 2024-yilda Toshkentda tashkil etilgan AI Software Factory. Asoschisi Bekzod Mirzaaliyev, IT Park rezidenti, 14+ in-house dasturchi. 6 yo'nalish, 8+ mahsulot. Bizning missiya, qadriyatlar va jamoa.",
    keywords: [
      "Tezcode haqida",
      "Tezcode kompaniya",
      "AI Software Factory Toshkent",
      "IT kompaniya Toshkent",
      "о компании Tezcode",
      "about Tezcode",
    ],
    ogTitle: "Biz haqimizda — Tezcode",
    ogDescription:
      "Toshkentdagi AI Software Factory. 2024, asoschi Bekzod Mirzaaliyev, IT Park rezidenti, 6 yo'nalish, 8+ mahsulot.",
  });
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
