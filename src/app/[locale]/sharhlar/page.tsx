import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/sharhlar";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: "Mijozlar sharhlari — Tezcode",
    description:
      "Tezcode mijozlarining sharhlari — real biznes egalari. Google'da 5.0 reyting, 6 ta sharh.",
    ogTitle: "Mijozlar sharhlari — Tezcode",
    ogDescription: "Real biznes egalarining sharhlari. Google 5.0 reyting.",
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
