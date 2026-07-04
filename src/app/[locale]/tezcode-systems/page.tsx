import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/tezcode-systems";

export const metadata = buildPageMetadata({
  path: PATH,
  title: "TezCode Systems — tayyor SaaS mahsulotlar | RAOS, WorkControl | Tezcode",
  description:
    "TezCode Systems — oylik obuna asosidagi tayyor SaaS mahsulotlar. RAOS (do'kon uchun POS: kassa, ombor, mijozlar, soliq hisoboti) va WorkControl (xodim nazorati). Bugun ulaning — ertaga foyda oling, uzoq muddatli buyurtma dasturisiz.",
  keywords: [
    "tayyor SaaS Toshkent",
    "POS tizimi obuna",
    "RAOS POS",
    "WorkControl xodim nazorati",
    "SaaS obuna O'zbekiston",
    "готовый SaaS Ташкент",
    "POS система по подписке",
    "контроль сотрудников SaaS",
    "ready SaaS Tashkent",
    "subscription POS software",
  ],
  ogTitle: "TezCode Systems — tayyor SaaS mahsulotlar",
  ogDescription:
    "RAOS va WorkControl — oylik obuna asosidagi tayyor SaaS. Bugun ulaning, ertaga foyda oling. Uzoq buyurtma dasturisiz.",
});

export default async function TezcodeSystemsPage({
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
