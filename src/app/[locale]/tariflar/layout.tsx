import { buildPageMetadata } from "@/lib/seo";

// Client page → SEO metadata lives in this server layout.
export const metadata = buildPageMetadata({
  path: "/tariflar",
  title: "Tariflar va narxlar — Tezcode | AI, dastur, avtomatizatsiya",
  description:
    "Tezcode xizmatlari narxi: tayyor SaaS obuna, buyurtma dastur (to'lov faqat MVP tayyor bo'lganda) va AI avtomatizatsiya. Shaffof modellar, bepul 30 daqiqa konsultatsiya. Toshkent.",
  keywords: [
    "Tezcode narxlar",
    "dastur narxi Toshkent",
    "AI avtomatizatsiya narxi",
    "SaaS obuna narxi",
    "тарифы Tezcode",
    "стоимость разработки Ташкент",
  ],
  ogTitle: "Tariflar va narxlar — Tezcode",
  ogDescription:
    "Tayyor SaaS obuna, buyurtma dastur va AI avtomatizatsiya — shaffof narx modellari. Bepul konsultatsiya.",
});

export default function TariflarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
