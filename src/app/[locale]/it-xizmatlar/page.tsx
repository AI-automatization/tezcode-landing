import { CENTRAL_ASIA_COUNTRIES } from "@/lib/markets";
import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getHowToSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/it-xizmatlar";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = CONTENT[locale as ServiceLang] ?? CONTENT.uz;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: { absolute: copy.service.name },
    description: copy.service.description,
    keywords: [
      "dasturiy ta'minot ishlab chiqish",
      "IT kompaniya Toshkent",
      "dastur yozish Toshkent",
      "web ilova ishlab chiqish O'zbekiston",
      "mobil ilova ishlab chiqish Toshkent",
      "custom software development Uzbekistan",
    ],
    ogTitle: copy.service.name,
    ogDescription: copy.service.description,
    availableLocales: Object.keys(CONTENT),
  });
}

export default async function ItXizmatlarPage({
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
    areaServed: locale === "ru" ? CENTRAL_ASIA_COUNTRIES : undefined,
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  // HowTo mirrors the visible process steps, so "how to start with an IT
  // services provider?" queries can be answered with our exact steps.
  const howTo = getHowToSchema({
    name: `${copy.process.title} ${copy.process.titleAccent}`.trim(),
    description: copy.process.subtitle,
    path: PATH,
    locale,
    steps: copy.process.steps.map((s) => ({ name: s.title, text: s.desc })),
  });

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
      <ServicePageClient content={CONTENT} serviceSlug="it-xizmatlar" />
    </>
  );
}
