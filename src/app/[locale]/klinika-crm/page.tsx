import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/klinika-crm";

// Server Component: metadata + JSON-LD on the server so structured data is in the
// initial HTML (AI Overviews / ChatGPT / Perplexity read SSR markup).
export const metadata = buildPageMetadata({
  path: PATH,
  title:
    "Klinika uchun CRM — ClinicaGo: qabul, bemor bazasi, moliya | Tezcode",
  description:
    "Klinikalar uchun CRM ClinicaGo: qabul va navbat, bemorlar bazasi, moliya, rollar (resepshyen/doktor/call-center), hisobot. CoreMed ekotizimi, jonli ishlaydi. Toshkent. Bepul demo.",
  keywords: [
    "klinika CRM",
    "klinika boshqaruv dasturi",
    "klinika uchun dastur",
    "ClinicaGo",
    "shifoxona dasturi",
    "bemor bazasi dasturi",
    "CRM для клиники",
    "программа для клиники Ташкент",
    "управление клиникой",
    "clinic CRM Uzbekistan",
  ],
  ogTitle: "ClinicaGo — klinikangiz uchun CRM",
  ogDescription:
    "Qabul, navbat, bemor bazasi, moliya va xodimlar bitta tizimda. Bepul demo.",
});

export default async function KlinikaCrmPage({
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
