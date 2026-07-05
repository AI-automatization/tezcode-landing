import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
  getBreadcrumbSchema,
  BASE_URL,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/ai-agent";

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
      "AI agent yasash — biznes uchun AI agent | Tezcode, Toshkent",
    description:
      "Biznesingiz uchun AI agent yasaymiz: sotuv agenti, qo'llab-quvvatlash agenti, lid saralash, ichki avtomatlashtirish va ko'p agentli 'AI ofis' yondashuvi. CRM/1C/Telegram integratsiyasi, o'zbek va rus tilida. Tezcode, Toshkent va butun O'zbekiston. Bepul konsultatsiya.",
    keywords: [
      "AI agent yasash",
      "AI agent Toshkent",
      "biznes uchun AI agent",
      "AI agent O'zbekiston",
      "AI agent development Uzbekistan",
      "sotuv AI agenti",
      "AI agent CRM integratsiya",
      "AI агент Ташкент",
      "AI агент для бизнеса",
      "AI ofis ko'p agentli",
    ],
    ogTitle: "Biznesingiz uchun AI agent — Tezcode",
    ogDescription:
      "Sotuv, qo'llab-quvvatlash va avtomatlashtirish AI agentlari. CRM/1C/Telegram integratsiyasi, uz/ru. Bepul konsultatsiya.",
  });
}

export default async function AiAgentPage({
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
  // BreadcrumbList so answer engines see the page's place in the site hierarchy
  // (Home → AI agent) — same SSR JSON-LD pattern as the blog pillar post.
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: copy.service.name, url: `${BASE_URL}${PATH}` },
  ]);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ServicePageClient content={CONTENT} serviceSlug="ai-agent" />
    </>
  );
}
