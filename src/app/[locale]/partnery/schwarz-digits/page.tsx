import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { SchwarzDigitsPartnerClient } from "./SchwarzDigitsPartnerClient";

// Per-locale SERP copy, translated from each locale's own body copy (same
// facts). Titles omit a trailing "Tezcode": the layout template appends it.
const META: Record<
  string,
  { title: string; description: string; ogTitle?: string; ogDescription?: string }
> = {
  uz: {
    title: "Schwarz Digits — Tezcode va IT Park orqali boshlangan hamkorlik",
    description:
      "Tezcode asoschisi Bekzod Mirzaaliyev IT Park Uzbekistan orqali Schwarz Digits (Schwarz Group — Lidl va Kaufland egasi) vakili bilan uchrashdi. Yevropa AI ekotizimi va O'zbekiston IT bozori uchun imkoniyat haqida.",
  },
  ru: {
    title: "Schwarz Digits — партнёрство через IT Park Uzbekistan",
    description:
      "Основатель Tezcode Бекзод Мирзаалиев встретился с представителем Schwarz Digits (Schwarz Group — Lidl и Kaufland) через IT Park Uzbekistan.",
  },
  en: {
    title: "Schwarz Digits — Partnership via IT Park Uzbekistan",
    description:
      "Tezcode founder Bekzod Mirzaaliyev met a Schwarz Digits representative (Schwarz Group — owner of Lidl and Kaufland) via IT Park Uzbekistan.",
  },
  ar: {
    title: "Schwarz Digits — شراكة عبر IT Park Uzbekistan",
    description:
      "التقى مؤسس Tezcode بيكزود ميرزاعلييف ممثل Schwarz Digits (مجموعة Schwarz المالكة لـ Lidl وKaufland) عبر IT Park Uzbekistan.",
  },
  uk: {
    title: "Schwarz Digits — партнерство через IT Park Uzbekistan",
    description:
      "Засновник Tezcode Бекзод Мірзаалієв зустрівся з представником Schwarz Digits (Schwarz Group — Lidl і Kaufland) через IT Park Uzbekistan.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale] ?? META.uz;
  return buildPageMetadata({
    locale,
    path: "/partnery/schwarz-digits",
    title: meta.title,
    description: meta.description,
    keywords: [
      "Schwarz Digits",
      "Schwarz Group",
      "IT Park Uzbekistan",
      "Tezcode hamkor",
      "Yevropa AI ekotizimi",
      "Lidl Kaufland IT",
    ],
  });
}

export default function SchwarzDigitsPartnerPage() {
  return (
    <div data-theme="light" className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <Navbar />
      <SchwarzDigitsPartnerClient />
      <Footer />
    </div>
  );
}
