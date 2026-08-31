import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/tezcode-academy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: "TezCode Academy — AI ta'lim markazi: kurslar, bootcamp",
    description:
      "TezCode Academy — Tezcode'ning AI ta'lim markazi. Dasturchilar va biznes egalari uchun AI kurslari, bootcamp, workshop va korporativ treninglar. Amaliyot birinchi o'rinda, ishlab turgan Software Factory muhandislaridan o'rganing. Bepul konsultatsiya.",
    keywords: [
      "AI kurslari Toshkent",
      "dasturlash bootcamp Toshkent",
      "IT ta'lim markazi O'zbekiston",
      "korporativ trening AI",
      "ИИ обучение Ташкент",
      "курсы программирования Ташкент",
      "AI bootcamp Tashkent",
      "AI courses Tashkent",
      "learn to code with AI",
      "corporate AI training",
    ],
    ogTitle: "TezCode Academy — AI ta'lim markazi",
    ogDescription:
      "AI, avtomatizatsiya va zamonaviy muhandislikni ishlab turgan Software Factory muhandislaridan o'rganing. Kurslar, bootcamp, korporativ treninglar.",
  });
}

export default async function TezcodeAcademyPage({
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
