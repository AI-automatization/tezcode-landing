import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/sharhlar";

// Per-locale SERP copy, translated from each locale's own body copy (same
// facts). Titles omit a trailing "Tezcode": the layout template appends it.
const META: Record<
  string,
  { title: string; description: string; ogTitle?: string; ogDescription?: string }
> = {
  uz: {
    title: "Mijozlar sharhlari",
    description:
      "Tezcode mijozlarining sharhlari — real biznes egalari. Google'da 5.0 reyting, 25 ta sharh.",
    ogTitle: "Mijozlar sharhlari — Tezcode",
    ogDescription: "Real biznes egalarining sharhlari. Google 5.0 reyting.",
  },
  ru: {
    title: "Отзывы клиентов — реальные результаты, Ташкент",
    description:
      "Отзывы клиентов Tezcode — реальные предприниматели и реальные результаты. Рейтинг 5.0 в Google, 25 отзывов.",
  },
  en: {
    title: "Customer Stories — Real Results",
    description:
      "Tezcode customer stories — real results from real entrepreneurs. 5.0 rating on Google, 25 reviews.",
  },
  ar: {
    title: "عملاؤنا عنا — نتائج حقيقية",
    description:
      "آراء عملاء Tezcode — نتائج حقيقية من رواد أعمال حقيقيين. تقييم 5.0 على Google.",
  },
  uk: {
    title: "Відгуки клієнтів — реальні результати",
    description:
      "Відгуки клієнтів Tezcode — реальні результати від реальних підприємців. Рейтинг 5.0 у Google, 25 відгуків.",
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
    path: PATH,
    title: meta.title,
    description: meta.description,
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default function ReviewsPage() {
  return (
    <main data-theme="light" className="min-h-screen bg-[var(--tc-ink)]">
      <Navbar />
      <div className="pt-16">
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
