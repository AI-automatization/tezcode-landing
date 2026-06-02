import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/changelog",
  title: "Changelog — Tezcode Mahsulot Yangilanishlari",
  description:
    "Tezcode platforma va mahsulot yangilanishlari: yangi feature, bug fix, performance optimizatsiya. Har release haqida shaffof hisobot 2024-yildan beri.",
  ogTitle: "Tezcode Changelog",
  ogDescription: "Har yangilanish haqida shaffof hisobot.",
});

const RELEASES: { date: string; version: string; tag: string; items: string[] }[] = [
  {
    date: "2026-05-14",
    version: "v1.3.0",
    tag: "feat",
    items: [
      "ROI Calculator — \"Tezcode bilan qancha tejaysiz?\" interactive",
      "PricingTiers — 3 tier (Starter $0 / Pro $200 / Enterprise custom)",
      "Privacy Policy + Terms + Press kit + Changelog (5 til)",
      "Cookie consent banner (GDPR + UZ compliance)",
      "Live visitor badge — \"X online · Y bugun\" left-bottom chip",
      "Dynamic OG image API endpoint",
      "Form anti-spam — honeypot field",
    ],
  },
  {
    date: "2026-05-14",
    version: "v1.2.0",
    tag: "seo",
    items: [
      "Geo locale auto-detection — Cloudflare/Vercel headers + Accept-Language",
      "Country → locale map (UZ→uz, RU/KZ/KG/TJ/TM/BY→ru, UA→uk, 16 Arab→ar)",
      "NEXT_LOCALE cookie persist 1 year",
      "JSON-LD: Organization + WebSite + 3 SoftwareApplication schemas",
      "30+ keywords per locale (POS Toshkent, AI O'zbekiston, etc.)",
      "Google + Yandex + Bing verification env-driven slots",
      "Analytics infra: GA4 + Microsoft Clarity + PostHog (env-driven)",
    ],
  },
  {
    date: "2026-05-14",
    version: "v1.1.0",
    tag: "design",
    items: [
      "Design B+E — gradient mesh + parallax + 3D tilt cards",
      "LiveCodeDemo — terminal typed animation",
      "TechStackMarquee — 15 ta tech",
      "ProcessSteps — 4 qadam jarayon",
      "Magnetic CTA + CountUp stats",
      "14 ta jamoa card (Bekzod founder badge)",
      "Favicon — dark Ink + white TC + gold accent dot",
    ],
  },
  {
    date: "2026-05-14",
    version: "v1.0.0",
    tag: "launch",
    items: [
      "Initial launch — Next.js 16 + Turbopack + motion 12 + next-intl 4",
      "5 til (UZ default / RU / EN / AR RTL / UK)",
      "Hero + 6 yo'nalish + 8 mahsulot + 4 yechim + Team + Form",
      "Telegram bot form — Tezcode group routing",
      "Railway deploy + CI/CD (GitHub Actions)",
      "robots.txt + sitemap.xml",
    ],
  },
];

const TAG_STYLE: Record<string, string> = {
  feat: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40",
  seo: "bg-blue-500/15 text-blue-400 border-blue-500/40",
  design: "bg-purple-500/15 text-purple-400 border-purple-500/40",
  launch: "bg-[var(--tc-gold)]/15 text-[var(--tc-gold)] border-[var(--tc-gold)]/40",
  fix: "bg-orange-500/15 text-orange-400 border-orange-500/40",
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--tc-ink)] pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs text-[var(--tc-text-muted)] uppercase tracking-[0.2em] mb-3">
              Changelog
            </div>
            <h1
              className="text-4xl md:text-5xl font-700 mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Yangilanishlar
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg">
              Tezcode landing'ning har release'i — nima yangi, nima fix.
            </p>
            <div className="mt-6 w-24 h-0.5 bg-gradient-to-r from-[var(--tc-gold)] to-transparent" />
          </div>

          <div className="space-y-10">
            {RELEASES.map((rel) => {
              const tagClass = TAG_STYLE[rel.tag] ?? TAG_STYLE.feat;
              return (
                <article key={rel.version} className="relative pl-6 border-l border-[var(--tc-border)]">
                  <span className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[var(--tc-blue)] tc-glow-blue" />

                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span
                      className="font-700 text-white text-xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {rel.version}
                    </span>
                    <span className={`inline-flex items-center gap-1 rounded-full font-500 border px-2.5 py-0.5 text-[10px] uppercase tracking-widest ${tagClass}`}>
                      {rel.tag}
                    </span>
                    <span className="text-xs text-[var(--tc-text-muted)] font-mono">
                      {rel.date}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm">
                    {rel.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[var(--tc-text-secondary)]">
                        <span className="text-[var(--tc-gold)] mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
