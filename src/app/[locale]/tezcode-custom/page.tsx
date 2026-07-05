import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/tezcode-custom";

export const metadata = buildPageMetadata({
  path: PATH,
  title: "TezCode Custom — buyurtma dasturiy ta'minot | source code 100% sizniki | Tezcode",
  description:
    "TezCode Custom: noldan buyurtma asosidagi dasturiy mahsulot — biznesingizga moslab qurilgan ERP, CRM, marketplace, ichki tizim yoki AI ilova. MVP 2-4 haftada, to'lov 30% oldindan, source code 100% sizniki. 14 in-house dasturchi, Toshkent.",
  keywords: [
    "buyurtma dasturiy ta'minot",
    "custom software Toshkent",
    "ERP tizim yaratish",
    "CRM ishlab chiqish",
    "MVP 2 hafta",
    "заказная разработка ПО",
    "custom software development",
    "bespoke software Tashkent",
    "source code ownership",
    "30% upfront payment",
  ],
  ogTitle: "TezCode Custom — buyurtma dasturiy mahsulot",
  ogDescription:
    "Sizning biznesingizga moslab qurilgan dasturiy mahsulot. MVP 2-4 haftada, to'lov 30% oldindan, source code 100% sizniki.",
});

export default async function TezcodeCustomPage({
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
