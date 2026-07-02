import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/ai-avtomatizatsiya";

// Page is a Server Component: metadata + JSON-LD are emitted on the server so the
// structured data is present in the initial HTML (AI Overviews / ChatGPT / Perplexity
// read SSR markup). The animated UI lives in ServicePageClient.
export const metadata = buildPageMetadata({
  path: PATH,
  title:
    "AI Avtomatizatsiya — Biznesingizni sun'iy intellekt bilan avtomatlashtiring | Tezcode",
  description:
    "Biznesingizni AI bilan avtomatlashtiring: avtomatik hisobot, AI chatbot, sotuv va ombor avtomatizatsiyasi. Tezcode Software Factory, Toshkent. Bepul 30 daqiqa konsultatsiya.",
  keywords: [
    "AI avtomatizatsiya",
    "sun'iy intellekt biznes uchun",
    "biznes avtomatlashtirish AI",
    "AI yechim O'zbekiston",
    "AI chatbot yasatish",
    "avtomatik hisobot",
    "AI автоматизация",
    "ИИ для бизнеса",
    "внедрение ИИ Ташкент",
    "AI automation Uzbekistan",
  ],
  ogTitle: "Biznesingizni AI bilan avtomatlashtiring",
  ogDescription:
    "Avtomatik hisobot, AI chatbot, sotuv va ombor avtomatizatsiyasi — biznesingizga moslab. Bepul konsultatsiya.",
});

export default async function AiAvtomatizatsiyaPage({
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
