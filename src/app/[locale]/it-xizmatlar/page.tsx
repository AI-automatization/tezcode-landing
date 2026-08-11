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
  return buildPageMetadata({
    locale,
    path: PATH,
    // { absolute } bypasses the layout's `%s | Tezcode` template so the
    // rendered title ends with a single "— Tezcode".
    title: {
      absolute: "IT xizmatlar — Toshkent: dastur, mobil ilova, AI — Tezcode",
    },
    description:
      "Toshkentda IT xizmatlar: dasturiy ta'minot ishlab chiqish, mobil ilova, veb-sayt, AI va avtomatizatsiya, integratsiya va qo'llab-quvvatlash. Tezcode Software Factory, 14 in-house dasturchi. Bepul konsultatsiya.",
    keywords: [
      "IT xizmatlar Toshkent",
      "IT kompaniya Toshkent",
      "dasturiy ta'minot ishlab chiqish",
      "veb sayt yaratish Toshkent",
      "mobil ilova yasatish",
      "IT autsorsing O'zbekiston",
      "IT услуги Ташкент",
      "IT компания Ташкент",
      "IT аутсорсинг Узбекистан",
      "IT services Tashkent",
    ],
    ogTitle: "IT xizmatlar — Toshkent",
    ogDescription:
      "Dastur, mobil ilova, veb-sayt, AI va qo'llab-quvvatlash — bitta ishonchli jamoadan. Bepul konsultatsiya.",
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
