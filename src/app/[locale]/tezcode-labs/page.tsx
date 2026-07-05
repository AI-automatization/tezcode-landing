import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/tezcode-labs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: "TezCode Labs — venture studio va innovatsiya laboratoriyasi | Tezcode",
    description:
      "TezCode Labs — Tezcode ichki venture studiyasi: o'z startaplarimizni tug'diramiz, sinovdan o'tkazamiz va miqyoslaymiz. WeWatch, CoreMed, Ventra va boshqalar. Founder'lar bilan investitsiya + ulush modeli.",
    keywords: [
      "venture studio Toshkent",
      "startup studio O'zbekiston",
      "TezCode Labs",
      "innovatsiya laboratoriyasi",
      "MVP ishlab chiqish",
      "co-founding startup",
      "венчурная студия Ташкент",
      "стартап студия Узбекистан",
      "venture studio Tashkent",
      "startup co-founding Uzbekistan",
    ],
    ogTitle: "TezCode Labs — venture studio",
    ogDescription:
      "O'z mahsulotlarimizni quramiz, sinaymiz va miqyoslaymiz. G'oyangizni birga asos solamiz — investitsiya + ulush modeli.",
  });
}

export default async function TezcodeLabsPage({
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
