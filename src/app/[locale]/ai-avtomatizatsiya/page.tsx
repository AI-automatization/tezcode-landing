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
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: PATH,
    // NOTE: no "| Tezcode" suffix here — the root layout applies a
    // `%s | Tezcode` title template, so the suffix is appended automatically.
    title: "AI avtomatlashtirish Toshkentda — biznes uchun AI yechimlar",
    description:
      "Toshkentda biznes uchun AI avtomatlashtirish: avtomatik hisobot, AI chatbot, sotuv va ombor avtomatizatsiyasi, 1C/CRM integratsiya. Bepul 30 daqiqa konsultatsiya. Tezcode Software Factory.",
    keywords: [
      "AI avtomatizatsiya",
      "AI avtomatlashtirish Toshkent",
      "biznesni AI bilan avtomatlashtirish",
      "sun'iy intellekt biznes uchun",
      "AI yechim O'zbekiston",
      "AI chatbot yasatish",
      "avtomatik hisobot",
      "AI автоматизация бизнеса Ташкент",
      "ИИ для бизнеса",
      "внедрение ИИ Ташкент",
      "AI automation Uzbekistan",
    ],
    ogTitle: "AI avtomatlashtirish Toshkentda — biznes uchun AI yechimlar",
    ogDescription:
      "Toshkentda biznes uchun AI avtomatlashtirish: avtomatik hisobot, AI chatbot, sotuv va ombor avtomatizatsiyasi — jarayoningizga moslab. Bepul konsultatsiya.",
  });
}

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
      <ServicePageClient content={CONTENT} serviceSlug="ai-avtomatizatsiya" />
    </>
  );
}
