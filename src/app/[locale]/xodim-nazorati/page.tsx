import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  buildPageMetadata,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/xodim-nazorati";

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
    // { absolute } bypasses the layout's `%s | Tezcode` template so the
    // rendered title ends with a single "— Tezcode".
    title: {
      absolute:
        "Xodim nazorati tizimi — WorkControl: vazifa, ish vaqti, hisobot — Tezcode",
    },
    description:
      "Xodimlar ish nazorati tizimi WorkControl: vazifa boshqaruvi, ish vaqti va davomat, samaradorlik (KPI), rahbar hisoboti, Telegram bildirishnoma. Toshkent va butun O'zbekiston. Bepul demo.",
    keywords: [
      "xodim nazorati",
      "xodimlar nazorati tizimi",
      "ish vaqti nazorati",
      "vazifa boshqaruv dasturi",
      "WorkControl",
      "davomat nazorati",
      "контроль сотрудников",
      "учёт рабочего времени Ташкент",
      "управление задачами",
      "employee monitoring Uzbekistan",
    ],
    ogTitle: "WorkControl — xodimlar ish nazorati",
    ogDescription:
      "Vazifa, ish vaqti, davomat va hisobot bitta dashboardda. Bepul demo.",
  });
}

export default async function XodimNazoratiPage({
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
