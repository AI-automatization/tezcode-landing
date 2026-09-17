import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { MarketDelivery, MarketRegions, MarketServices } from "@/components/market-page/MarketSections";
import { getRegionPageCopy, getRegionUiCopy } from "@/content/regions";
import { CENTRAL_ASIA_COUNTRIES, EUROPE_PATH, REGION_PATH, localizedPath } from "@/lib/markets";
import { BASE_URL, getBreadcrumbSchema, getFaqSchema, getServiceSchema } from "@/lib/seo";

type Props = { locale: Locale; region: "central-asia" | "europe" };

export function RegionLanding({ locale, region }: Props) {
  const copy = getRegionPageCopy(locale, region);
  const ui = getRegionUiCopy(locale);
  const path = region === "central-asia" ? REGION_PATH : EUROPE_PATH;
  const url = `${BASE_URL}${localizedPath(locale, path)}`;
  const homeUrl = `${BASE_URL}${localizedPath(locale, "")}`;
  const areaServed = region === "central-asia" ? CENTRAL_ASIA_COUNTRIES : ["Europe"];
  const regionName = region === "central-asia" ? ui.centralAsiaName : ui.europeName;
  const schemas = [
    {
      ...getServiceSchema({
        name: copy.title,
        description: copy.description,
        serviceType: "Software development, AI agents, chatbots, integrations and digital products",
        path,
        areaServed,
      }),
      url,
    },
    getBreadcrumbSchema([{ name: "Tezcode", url: homeUrl }, { name: regionName, url }]),
    getFaqSchema(copy.faq),
  ];
  const otherPath = region === "central-asia" ? EUROPE_PATH : REGION_PATH;

  return (
    <main data-theme="light" className="min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <Navbar />
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <section className="pt-36 pb-20 px-6 border-b border-[var(--tc-border)]">
        <div className="max-w-7xl mx-auto">
          <span className="tc-chip">{copy.badge}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-700 tracking-tight leading-tight max-w-5xl mt-6">
            {copy.heading} <span className="text-[var(--tc-blue-text)]">{copy.highlight}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--tc-text-secondary)] max-w-3xl">{copy.intro}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#contact" className="tc-btn-primary">{copy.primaryCta}</a>
            <a href={localizedPath(locale, otherPath)} className="tc-btn-secondary">{copy.secondaryCta}</a>
          </div>
        </div>
      </section>
      <MarketServices locale={locale} />
      <MarketDelivery locale={locale} />
      <MarketRegions locale={locale} />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-700 mb-8">{copy.faqTitle}</h2>
          <div className="space-y-4">
            {copy.faq.map(({ q, a }) => <details key={q} className="tc-card p-6"><summary className="font-600 cursor-pointer">{q}</summary><p className="mt-4 text-[var(--tc-text-secondary)] leading-relaxed">{a}</p></details>)}
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </main>
  );
}
