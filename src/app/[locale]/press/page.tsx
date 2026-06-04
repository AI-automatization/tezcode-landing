import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/press",
  title: "Press Kit — Tezcode Brand Assets va Media Kit",
  description:
    "Tezcode brand assets: logo PNG/SVG (TC monogram), brand ranglar (Ink #0a0a0f + Gold #d4a017), founder Bekzod Mirzaaliyev fotosurat, brand book, prezentatsiya, press release shablonlari.",
  ogTitle: "Tezcode Press Kit",
  ogDescription: "Logo, ranglar, founder fotosurat, brand book — barchasi yuklab olish uchun.",
});

const ASSETS = [
  {
    name: "Logo (PNG, transparent)",
    description: "Asosiy TC monogram — qora va oq variantlar",
    href: "/tezcode-logo-white.png",
    size: "256×256",
  },
  {
    name: "Logo (PNG, dark)",
    description: "Tezcode Ink fonda oq monogram",
    href: "/tezcode-logo-dark.png",
    size: "256×256",
  },
  {
    name: "Icon (Favicon, 512px)",
    description: "Browser tab uchun",
    href: "/icon.png",
    size: "512×512",
  },
  {
    name: "OG Image",
    description: "Social media (Telegram, Twitter, Facebook)",
    href: "/og-image.png",
    size: "1200×630",
  },
];

const PALETTE = [
  { name: "Tezcode Ink", hex: "#0a0a0f", role: "Background, body" },
  { name: "Tezcode Blue", hex: "#0040ff", role: "Primary accent, CTA" },
  { name: "Tezcode Gold", hex: "#d4a017", role: "Highlight, badge" },
];

const FACTS = [
  { label: "Founded", value: "2024" },
  { label: "HQ", value: "Toshkent, O'zbekiston" },
  { label: "Founder", value: "Bekzod Mirzaaliyev" },
  { label: "Team", value: "14 ta dasturchi" },
  { label: "Products", value: "8 ta (3 live, 5 R&D)" },
  { label: "Divisions", value: "6 (Systems / Custom / AI / Teams / Labs / Academy)" },
  { label: "Languages", value: "UZ · RU · EN · AR · UK" },
];

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--tc-ink)] pt-24 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
              Press Kit
            </div>
            <h1
              className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tezcode for media
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg max-w-2xl mx-auto">
              Brand assets, ranglar, kompaniya haqida ma'lumot — jurnalist, blog'er va hamkorlar uchun bepul.
            </p>
            <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-gold)] to-transparent" />
          </div>

          {/* Brand assets */}
          <section className="mb-20">
            <h2
              className="text-2xl font-700 text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Brand assets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ASSETS.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  download
                  className="group flex items-center gap-4 p-5 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)] hover:bg-[var(--tc-surface-3)] transition-colors"
                >
                  <div className="w-12 h-12 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] flex items-center justify-center text-[var(--tc-gold)] text-xl shrink-0">
                    ⬇
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-700 text-white text-sm"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {a.name}
                    </div>
                    <div className="text-xs text-[var(--tc-text-muted)] mt-0.5">
                      {a.description} · {a.size}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Brand colors */}
          <section className="mb-20">
            <h2
              className="text-2xl font-700 text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Brand colors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PALETTE.map((c) => (
                <div
                  key={c.hex}
                  className="p-5 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)]"
                >
                  <div
                    className="w-full aspect-square rounded-[var(--tc-radius-md)] mb-4 border border-[var(--tc-border-bright)]"
                    style={{ backgroundColor: c.hex }}
                    aria-hidden
                  />
                  <div
                    className="font-700 text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {c.name}
                  </div>
                  <div className="text-xs text-[var(--tc-gold)] font-mono mt-1">
                    {c.hex}
                  </div>
                  <div className="text-xs text-[var(--tc-text-muted)] mt-2">
                    {c.role}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Company facts */}
          <section className="mb-20">
            <h2
              className="text-2xl font-700 text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Kompaniya faktlari
            </h2>
            <div className="p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)]">
              <dl className="space-y-3">
                {FACTS.map((f) => (
                  <div key={f.label} className="flex flex-wrap gap-2 text-sm">
                    <dt className="text-[var(--tc-text-muted)] w-32 uppercase tracking-widest text-xs">
                      {f.label}
                    </dt>
                    <dd className="text-[var(--tc-text-primary)] flex-1">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* About */}
          <section className="mb-20">
            <h2
              className="text-2xl font-700 text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tezcode haqida (short)
            </h2>
            <div className="p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] text-[var(--tc-text-secondary)] leading-relaxed">
              <p className="mb-3">
                <strong className="text-white">Tezcode AI</strong> — O'zbekistonda
                joylashgan AI Software Factory. Kichik biznesdan korporatsiyagacha
                sun'iy intellekt asosida ishlovchi mahsulotlar yaratamiz.
              </p>
              <p className="mb-3">
                3 ta asosiy mahsulot ishga tushgan: <strong className="text-[var(--tc-blue-text)]">RAOS</strong> (har do'kon uchun POS),{" "}
                <strong className="text-[var(--tc-blue-text)]">AI Office</strong> (12 ta bo'lim AI agentlari) va{" "}
                <strong className="text-[var(--tc-blue-text)]">CoreMed</strong> (uy hamshira va klinika boshqaruvi).
                5 ta yangi mahsulot R&D'da.
              </p>
              <p>
                Tezcode 5 til (UZ, RU, EN, AR, UK) ishlaydi — O'zbekistondan O'rta Osiyo,
                Yaqin Sharq va global bozorga chiqishni rejalashtirmoqdamiz.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2
              className="text-2xl font-700 text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Press contact
            </h2>
            <div className="p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-gold)]/40 bg-[var(--tc-surface-2)]">
              <div className="font-700 text-white text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>
                Bekzod Mirzaaliyev
              </div>
              <div className="text-sm text-[var(--tc-gold)] mb-4">Founder & CEO</div>
              <div className="space-y-2 text-sm">
                <a
                  href="https://t.me/webdevelopertk"
                  className="block text-[var(--tc-text-secondary)] hover:text-[var(--tc-blue-text)]"
                >
                  Telegram: @webdevelopertk
                </a>
                <a
                  href="mailto:hello@tezcode.dev"
                  className="block text-[var(--tc-text-secondary)] hover:text-[var(--tc-blue-text)]"
                >
                  Email: hello@tezcode.dev
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
