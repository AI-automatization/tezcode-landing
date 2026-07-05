import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/pos-tizimi";

// Server Component: metadata + JSON-LD on the server so structured data is in the
// initial HTML (AI Overviews / ChatGPT / Perplexity read SSR markup).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: PATH,
    title:
      "POS tizimi — RAOS: kassa, ombor, hisobot, internetsiz ishlaydi | Tezcode",
    description:
      "O'zbekiston do'konlari uchun POS tizimi RAOS: kassa, ombor, mijoz, hisobot, ko'p filial va internetsiz (offline-first) ishlash. Toshkent va butun O'zbekiston. Bepul demo.",
    keywords: [
      "POS tizimi",
      "POS dasturi Toshkent",
      "kassa dasturi",
      "do'kon avtomatlashtirish",
      "RAOS POS",
      "ombor dasturi",
      "POS система Узбекистан",
      "программа для магазина Ташкент",
      "касса программа",
      "POS system Uzbekistan",
    ],
    ogTitle: "RAOS — do'koningiz uchun POS tizimi",
    ogDescription:
      "Kassa, ombor, mijoz, hisobot bitta dasturda. Internetsiz ham ishlaydi. Bepul demo.",
  });
}

export default async function PosTizimiPage({
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
      <ServicePageClient content={CONTENT} serviceSlug="pos-tizimi" />
    </>
  );
}
