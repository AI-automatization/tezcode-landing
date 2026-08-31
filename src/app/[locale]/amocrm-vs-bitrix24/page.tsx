import { ComparisonPageClient } from "./ComparisonPageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  BASE_URL,
  buildPageMetadata,
  getArticleSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/amocrm-vs-bitrix24";
// Visible-content date for the Article schema (kept in sync with the page copy).
const PUBLISHED = "2026-08-11";

const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "amoCRM yoki Bitrix24 — qaysi biri yaxshi? (2026, Toshkent)",
    description:
      "amoCRM va Bitrix24 xolis taqqoslash: narx (amoCRM ~$15, Bitrix24 bepul tarif bor), imkoniyat va kim uchun mosligi. O'zbekistonda qaysi CRM tanlash kerak. Tezcode — ikkalasini ulaydigan integrator, ulash $700 dan.",
    ogTitle: "amoCRM yoki Bitrix24 — qaysi biri yaxshi? | Tezcode",
    ogDescription:
      "Narx, imkoniyat va kim uchun mosligi bo'yicha xolis taqqoslash. Tezcode ikkala CRM ni ham ulaydi va sozlaydi.",
  },
  ru: {
    title: "amoCRM или Bitrix24 — что лучше? (2026, Ташкент)",
    description:
      "Честное сравнение amoCRM и Bitrix24: цена (amoCRM ~$15, у Bitrix24 есть бесплатный тариф), возможности и кому что подходит. Какую CRM выбрать в Узбекистане. Tezcode — интегратор, подключающий обе с ИИ-слоем (AI), от $700 (≈ от 8.5 млн сум).",
    ogTitle: "amoCRM или Bitrix24 — что лучше? | Tezcode",
    ogDescription:
      "Честное сравнение по цене, возможностям и тому, кому что подходит. Tezcode подключает и настраивает обе CRM.",
  },
  en: {
    title: "amoCRM or Bitrix24 — which is better? (2026, Tashkent)",
    description:
      "An honest amoCRM vs Bitrix24 comparison: price (amoCRM ~$15, Bitrix24 has a free tier), features and who each fits. Which CRM to choose in Uzbekistan. Tezcode — an integrator connecting both, from $700.",
    ogTitle: "amoCRM or Bitrix24 — which is better? | Tezcode",
    ogDescription:
      "An honest comparison by price, features and who each fits. Tezcode connects and configures both CRMs.",
  },
  ar: {
    title: "amoCRM أم Bitrix24 — أيّهما أفضل؟ (2026، طشقند)",
    description:
      "مقارنة صادقة بين amoCRM وBitrix24: السعر (amoCRM ~15$، لدى Bitrix24 باقة مجانية)، الإمكانيات ولمن يناسب كل منهما. أيّ CRM تختار في أوزبكستان. Tezcode — متكامل يربط كليهما، من 700$.",
    ogTitle: "amoCRM أم Bitrix24 — أيّهما أفضل؟ | Tezcode",
    ogDescription:
      "مقارنة صادقة من حيث السعر والإمكانيات ولمن يناسب كل منهما. Tezcode يربط ويعدّ كلا النظامين.",
  },
  uk: {
    title: "amoCRM чи Bitrix24 — що краще? (2026, Ташкент)",
    description:
      "Чесне порівняння amoCRM та Bitrix24: ціна (amoCRM ~$15, у Bitrix24 є безкоштовний тариф), можливості й кому що підходить. Яку CRM обрати в Узбекистані. Tezcode — інтегратор, що підключає обидві, від $700.",
    ogTitle: "amoCRM чи Bitrix24 — що краще? | Tezcode",
    ogDescription:
      "Чесне порівняння за ціною, можливостями й тим, кому що підходить. Tezcode підключає та налаштовує обидві CRM.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale as ServiceLang] ?? META.uz;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: meta.title,
    description: meta.description,
    keywords: [
      "amoCRM yoki Bitrix24",
      "amoCRM vs Bitrix24",
      "amoCRM yoki Bitrix24 qaysi biri yaxshi",
      "CRM taqqoslash O'zbekiston",
      "amoCRM или Битрикс24 что выбрать",
      "amoCRM vs Битрикс24 Ташкент",
      "какую CRM выбрать Узбекистан",
      "amoCRM vs Bitrix24 Uzbekistan",
      "best CRM Tashkent",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function AmocrmVsBitrix24Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = CONTENT[locale as ServiceLang] ?? CONTENT.uz;

  const articleSchema = getArticleSchema({
    headline: copy.article.headline,
    description: copy.article.description,
    path: PATH,
    locale,
    datePublished: PUBLISHED,
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: copy.article.headline, url: `${BASE_URL}${PATH}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ComparisonPageClient />
    </>
  );
}
