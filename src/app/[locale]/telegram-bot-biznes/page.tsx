import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/telegram-bot-biznes";

// Server Component: metadata + JSON-LD are emitted on the server so the
// structured data is in the initial HTML (AI Overviews / ChatGPT / Perplexity
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
    title:
      "Telegram bot yaratish — buyurtma, to'lov, do'kon (Mini App) | Tezcode",
    description:
      "Biznes uchun Telegram bot yaratamiz: buyurtma qabul qilish, Click/Payme to'lov, qo'llab-quvvatlash, eslatma, Telegram do'kon (Mini App), CRM integratsiyasi. Tezcode, Toshkent. Bepul konsultatsiya.",
    keywords: [
      "Telegram bot yasash",
      "Telegram bot biznes uchun",
      "Telegram bot Toshkent",
      "Telegram bot buyurtma",
      "Telegram do'kon Mini App",
      "Telegram бот для бизнеса",
      "заказать телеграм бота Ташкент",
      "телеграм бот с оплатой Click Payme",
      "Telegram bot development Uzbekistan",
    ],
    ogTitle: "Biznesingiz uchun Telegram bot",
    ogDescription:
      "Buyurtma, Click/Payme to'lov, qo'llab-quvvatlash, Telegram do'kon (Mini App) — biznesingizga moslab. Bepul konsultatsiya.",
  });
}

export default async function TelegramBotBiznesPage({
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
      <ServicePageClient content={CONTENT} serviceSlug="telegram-bot-biznes" />
    </>
  );
}
