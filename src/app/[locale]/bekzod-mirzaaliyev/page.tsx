import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BASE_URL,
  buildPageMetadata,
  getBreadcrumbSchema,
  getFounderSchema,
} from "@/lib/seo";

const PATH = "/bekzod-mirzaaliyev";

// Server Component: founder Person + Breadcrumb JSON-LD are emitted in the SSR
// HTML so AI engines (ChatGPT, Perplexity, AI Overviews) can attribute Tezcode
// to a real person and resolve the brand entity unambiguously.
export const metadata = buildPageMetadata({
  path: PATH,
  title: "Bekzod Mirzaaliyev — Tezcode asoschisi va CEO",
  description:
    "Bekzod Mirzaaliyev — Tezcode (AI Software Factory, Toshkent) asoschisi va CEO. 2024-yilda Tezcode'ni tashkil etgan; RAOS, CoreMed/ClinicaGo, WeWatch va WorkControl mahsulotlari ortidagi jamoani boshqaradi.",
  keywords: [
    "Bekzod Mirzaaliyev",
    "Tezcode asoschisi",
    "Tezcode founder",
    "Tezcode CEO",
    "Bekzod Mirzaaliyev Tezcode",
    "AI Software Factory Toshkent asoschisi",
  ],
  ogTitle: "Bekzod Mirzaaliyev — Tezcode asoschisi",
  ogDescription:
    "Tezcode Software Factory asoschisi va CEO. RAOS, CoreMed, WeWatch ortidagi jamoa.",
});

const FACTS = [
  { label: "Lavozim", value: "Founder & CEO, Tezcode" },
  { label: "Kompaniya", value: "Tezcode — AI Software Factory" },
  { label: "Tashkil etgan", value: "2024-yil" },
  { label: "Joylashuv", value: "Toshkent, O'zbekiston" },
  { label: "Yo'nalish", value: "AI, dasturiy ta'minot, biznes avtomatlashtirish" },
];

const PRODUCTS = [
  { name: "RAOS", role: "Offline-first POS / savdo platformasi", href: "https://raos.uz" },
  { name: "CoreMed / ClinicaGo", role: "Healthtech ekotizimi — klinika CRM (live)", href: "https://coremed.uz" },
  { name: "WeWatch", role: "Ijtimoiy onlayn kinoteatr (Watch Party)", href: "https://wewatch.uz" },
  { name: "WorkControl", role: "Xodimlar ish nazorati tizimi", href: BASE_URL },
];

export default function BekzodMirzaaliyevPage() {
  const personSchema = getFounderSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: "Bekzod Mirzaaliyev", url: `${BASE_URL}${PATH}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-[var(--tc-ink)] pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Hero */}
          <div className="mb-12">
            <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
              Founder & CEO
            </div>
            <h1
              className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Bekzod Mirzaaliyev
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg leading-relaxed">
              <strong className="text-white">Tezcode</strong> — Toshkentda
              joylashgan AI Software Factory'ning asoschisi va CEO'si.
            </p>
            <div className="mt-6 w-24 h-0.5 bg-gradient-to-r from-[var(--tc-gold)] to-transparent" />
          </div>

          {/* Bio */}
          <section className="mb-16">
            <div className="p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] text-[var(--tc-text-secondary)] leading-relaxed space-y-4">
              <p>
                Bekzod Mirzaaliyev 2024-yilda{" "}
                <strong className="text-white">Tezcode</strong>'ni tashkil etgan —
                kichik biznesdan korporatsiyagacha sun'iy intellekt asosidagi
                dasturiy mahsulotlar va biznes avtomatlashtirish yechimlarini
                yaratuvchi kompaniya. Bugun Tezcode 16 kishilik jamoaga ega.
              </p>
              <p>
                Uning rahbarligida Tezcode bir nechta tayyor mahsulotni ishga
                tushirdi:{" "}
                <strong className="text-[var(--tc-blue-text)]">RAOS</strong> (har
                do'kon uchun POS / savdo platformasi),{" "}
                <strong className="text-[var(--tc-blue-text)]">CoreMed/ClinicaGo</strong>{" "}
                (klinikalar uchun healthtech ekotizimi),{" "}
                <strong className="text-[var(--tc-blue-text)]">WeWatch</strong>{" "}
                (ijtimoiy onlayn kinoteatr) va{" "}
                <strong className="text-[var(--tc-blue-text)]">WorkControl</strong>{" "}
                (xodimlar ish nazorati).
              </p>
              <p>
                Bekzodning maqsadi — O'zbekistondagi bizneslarga jahon darajasidagi
                AI va dasturiy yechimlarni yetkazish hamda mahsulotlarni O'rta Osiyo
                va undan tashqaridagi bozorlarga olib chiqish.
              </p>
            </div>
          </section>

          {/* Facts */}
          <section className="mb-16">
            <h2
              className="text-2xl font-700 text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Qisqacha
            </h2>
            <div className="p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)]">
              <dl className="space-y-3">
                {FACTS.map((f) => (
                  <div key={f.label} className="flex flex-wrap gap-2 text-sm">
                    <dt className="text-[var(--tc-text-muted)] w-36 uppercase tracking-widest text-xs">
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

          {/* Products */}
          <section className="mb-16">
            <h2
              className="text-2xl font-700 text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tezcode mahsulotlari
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRODUCTS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  className="group p-5 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)] hover:bg-[var(--tc-surface-3)] transition-colors"
                >
                  <div
                    className="font-700 text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.name}
                  </div>
                  <div className="text-xs text-[var(--tc-text-muted)] mt-1">
                    {p.role}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2
              className="text-2xl font-700 text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Aloqa
            </h2>
            <div className="p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-gold)]/40 bg-[var(--tc-surface-2)] space-y-2 text-sm">
              <a
                href="https://t.me/webdevelopertk"
                className="block text-[var(--tc-text-secondary)] hover:text-[var(--tc-blue-text)]"
              >
                Telegram: @webdevelopertk
              </a>
              <a
                href="mailto:tezcode@tezcode.dev"
                className="block text-[var(--tc-text-secondary)] hover:text-[var(--tc-blue-text)]"
              >
                Email: tezcode@tezcode.dev
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
