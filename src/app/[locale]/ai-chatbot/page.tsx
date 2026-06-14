import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/ai-chatbot";

// Server Component: metadata + JSON-LD are emitted on the server so the
// structured data is in the initial HTML (AI Overviews / ChatGPT / Perplexity
// read SSR markup). The animated UI lives in ServicePageClient.
export const metadata = buildPageMetadata({
  path: PATH,
  title:
    "AI chatbot va yordamchi yaratish — Telegram, Instagram, WhatsApp | Tezcode",
  description:
    "Biznesingiz uchun AI chatbot va yordamchi: 24/7 mijoz xizmati, lid kvalifikatsiyasi, CRM/1C integratsiyasi, ko'p tilli. Telegram, Instagram, WhatsApp va veb-sayt. Tezcode, Toshkent. Bepul konsultatsiya.",
  keywords: [
    "AI chatbot yasash",
    "AI yordamchi",
    "AI assistant",
    "telegram bot biznes uchun",
    "chatbot O'zbekiston",
    "AI chatbot Toshkent",
    "AI чат-бот для бизнеса",
    "AI ассистент Ташкент",
    "чат-бот Telegram Instagram WhatsApp",
    "AI customer service bot Uzbekistan",
  ],
  ogTitle: "Biznesingiz uchun AI chatbot va yordamchi",
  ogDescription:
    "24/7 mijoz xizmati, lid saralash, CRM integratsiyasi — Telegram, Instagram, WhatsApp va veb-saytda. Bepul konsultatsiya.",
});

export default async function AiChatbotPage({
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
