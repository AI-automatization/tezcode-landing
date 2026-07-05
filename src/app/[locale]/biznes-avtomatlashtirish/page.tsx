import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/biznes-avtomatlashtirish";

export const metadata = buildPageMetadata({
  path: PATH,
  title:
    "Biznes avtomatlashtirish — jarayonlarni avtomatlashtirish tizimi | Tezcode",
  description:
    "Biznes jarayonlarini avtomatlashtirish: hisobot, buyurtma, ombor, CRM va moliya bitta tizimda. Buyurtma asosida, Toshkent. Bepul 30 daqiqa konsultatsiya, to'lov 30% oldindan.",
  keywords: [
    "biznes avtomatlashtirish",
    "biznes jarayonlarini avtomatlashtirish",
    "jarayonlarni avtomatlashtirish",
    "do'kon avtomatlashtirish",
    "buyurtma dastur Toshkent",
    "автоматизация бизнеса",
    "автоматизация бизнес-процессов",
    "автоматизация бизнеса Ташкент",
    "business automation Uzbekistan",
  ],
  ogTitle: "Biznes jarayonlarini avtomatlashtirish",
  ogDescription:
    "Hisobot, buyurtma, ombor, CRM va moliya — bitta avtomatik tizimda, biznesingizga moslab. Bepul konsultatsiya.",
});

export default async function BiznesAvtomatlashtirishPage({
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
