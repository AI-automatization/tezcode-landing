import { buildPageMetadata } from "@/lib/seo";

// The page itself is a Client Component, so its SEO metadata lives here in a
// server layout. Without this the route inherited the homepage metadata
// (duplicate title + canonical pointing to "/").
export const metadata = buildPageMetadata({
  path: "/for-businesses",
  title: "Biznes uchun buyurtma dastur — ERP, CRM, E-commerce",
  description:
    "Tayyor SaaS ish jarayoningizga mos kelmasa, Tezcode noldan yozadi: ERP, CRM, e-commerce, custom dashboard. Bepul 30 daqiqa konsultatsiya, to'lov faqat MVP tayyor bo'lganda.",
  ogTitle: "Biznesingizga moslashtirilgan dastur — 2 haftada",
  ogDescription:
    "ERP, CRM, e-commerce, custom dashboard — noldan, biznesingizga moslab. Bepul konsultatsiya.",
});

export default function ForBusinessesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
