import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata, LOCALES, type Locale } from "@/lib/seo";
import { OFERTA_CONTENT } from "./content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = OFERTA_CONTENT[locale as Locale] ?? OFERTA_CONTENT.uz;
  return {
    ...buildPageMetadata({
      locale,
      path: "/oferta",
      title: copy.metaTitle,
      description: copy.metaDescription,
      availableLocales: LOCALES,
    }),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function OfertaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = OFERTA_CONTENT[locale as Locale] ?? OFERTA_CONTENT.uz;

  return (
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)]"
    >
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs text-[var(--tc-text-muted)] uppercase tracking-[0.2em] mb-3">
              {copy.versionLabel}
            </div>
            <h1
              className="text-4xl md:text-5xl font-700 mb-4 tracking-tight text-[var(--tc-text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {copy.heading}
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg">
              {copy.subheading}
            </p>
          </div>

          <div className="space-y-10">
            {copy.sections.map((sec) => (
              <section key={sec.title}>
                <h2
                  className="text-xl font-700 text-[var(--tc-text-primary)] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {sec.title}
                </h2>
                <div className="space-y-2 text-[var(--tc-text-secondary)] leading-relaxed">
                  {sec.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
