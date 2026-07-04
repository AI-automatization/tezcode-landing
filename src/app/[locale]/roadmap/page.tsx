import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/roadmap",
  title: "Ochiq Yo'l Xaritasi — Tezcode Mahsulotlari Roadmap",
  description:
    "Tezcode Software Factory yo'l xaritasi: RAOS POS, AI Office, CoreMed/HamshiraGo va boshqa mahsulotlar — qaysi feature qachon chiqadi. Shaffof Q2-Q4 2026 reja.",
  ogTitle: "Tezcode Yo'l Xaritasi — Mahsulot Reja",
  ogDescription: "RAOS, AI Office, CoreMed yangiliklari va kelajak rejasi.",
});

type Status = "done" | "in_progress" | "planned" | "explore";

const STATUS_META: Record<Status, { label: string; color: string; ring: string }> = {
  done: { label: "✓ Bajarildi", color: "text-emerald-400", ring: "border-emerald-500/40" },
  in_progress: { label: "▶ Ishlamoqda", color: "text-[var(--tc-blue-text)]", ring: "border-[var(--tc-blue)]/40" },
  planned: { label: "◷ Rejada", color: "text-[var(--tc-gold)]", ring: "border-[var(--tc-gold)]/40" },
  explore: { label: "? O'rganmoqdamiz", color: "text-purple-400", ring: "border-purple-400/40" },
};

const ITEMS: { quarter: string; status: Status; title: string; desc: string; product?: string }[] = [
  // Q2 2026 done
  { quarter: "Q2 2026", status: "done", title: "Tezcode brand + landing live", desc: "Brand foundation, 5 til landing, Railway deploy", product: "Tezcode" },
  { quarter: "Q2 2026", status: "done", title: "RAOS v3 public release", desc: "POS to'liq + multi-tenant + AI hisobot", product: "RAOS" },
  { quarter: "Q2 2026", status: "done", title: "AI Office Sprint 4 — i18n", desc: "Frontend + Backend 3 til (UZ/RU/EN)", product: "AI Office" },

  // Q3 2026 in progress
  { quarter: "Q3 2026", status: "in_progress", title: "AI Office Sprint 5 — Component i18n", desc: "333 ta HTTPException → t() migration", product: "AI Office" },
  { quarter: "Q3 2026", status: "in_progress", title: "CoreMed/HamshiraGo public launch", desc: "Uy hamshira + klinika boshqaruv", product: "CoreMed" },
  { quarter: "Q3 2026", status: "in_progress", title: "Landing v2 — Pricing + Blog + Case studies", desc: "Conversion optimization", product: "Tezcode" },

  // Q4 2026 planned
  { quarter: "Q4 2026", status: "planned", title: "AI-Trade beta", desc: "Trading bot O'zbek bozori uchun", product: "AI-Trade" },
  { quarter: "Q4 2026", status: "planned", title: "WeWatch private launch", desc: "Video birga ko'rish + chat", product: "WeWatch" },
  { quarter: "Q4 2026", status: "planned", title: "Work-Control v1", desc: "Xodim nazorat tizimi", product: "Work-Control" },
  { quarter: "Q4 2026", status: "planned", title: "Tezcode Academy MVP", desc: "AI/coding bepul kurslar", product: "Academy" },

  // Q1 2027 planned
  { quarter: "Q1 2027", status: "planned", title: "Ventra public launch", desc: "Trend tahlili AI", product: "Ventra" },
  { quarter: "Q1 2027", status: "planned", title: "MaxSavdo no-code", desc: "Drag-drop biznes dastur quruvchi", product: "MaxSavdo" },
  { quarter: "Q1 2027", status: "planned", title: "Mobile apps (iOS + Android)", desc: "RAOS + AI Office native", product: "Tezcode" },
  { quarter: "Q1 2027", status: "planned", title: "API marketplace", desc: "Tezcode API'lar uchinchi tomonlarga", product: "Tezcode" },

  // 2027+ explore
  { quarter: "2027+", status: "explore", title: "Voice AI agents", desc: "Telefon orqali AI yordamchi (O'zbek+ Russian)", product: "AI Office" },
  { quarter: "2027+", status: "explore", title: "Global expansion (RU/KZ/UA market)", desc: "Tezcode O'rta Osiyo uchun", product: "Tezcode" },
  { quarter: "2027+", status: "explore", title: "Tezcode Pay", desc: "B2B payment infrastructure", product: "Tezcode" },
];

const QUARTERS = ["Q2 2026", "Q3 2026", "Q4 2026", "Q1 2027", "2027+"];

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--tc-ink)] pt-24 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
              Public Roadmap
            </div>
            <h1
              className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tezcode yo'l xaritasi
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg max-w-2xl mx-auto">
              Qaysi mahsulot qachon chiqadi — biz hech narsani yashirmaymiz.
              Yangi g'oya bormi? Telegram'da yozing.
            </p>
            <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-gold)] to-transparent" />
          </div>

          {/* Legend */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {Object.entries(STATUS_META).map(([key, meta]) => (
              <span
                key={key}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-500 ${meta.color} ${meta.ring}`}
              >
                {meta.label}
              </span>
            ))}
          </div>

          {/* Roadmap by quarter */}
          <div className="space-y-16">
            {QUARTERS.map((q) => {
              const items = ITEMS.filter((i) => i.quarter === q);
              return (
                <section key={q}>
                  <h2
                    className="text-2xl md:text-3xl font-700 text-white mb-6 inline-flex items-center gap-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {q}
                    <span className="text-sm text-[var(--tc-text-muted)] font-400">
                      ({items.length} ta)
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map((item, i) => {
                      const meta = STATUS_META[item.status];
                      return (
                        <div
                          key={i}
                          className={`p-5 rounded-[var(--tc-radius-lg)] border ${meta.ring} bg-[var(--tc-surface-2)] hover:bg-[var(--tc-surface-3)] transition-colors`}
                        >
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <span className={`text-xs font-500 ${meta.color}`}>
                              {meta.label}
                            </span>
                            {item.product && (
                              <span className="text-[10px] text-[var(--tc-text-muted)] uppercase tracking-widest">
                                {item.product}
                              </span>
                            )}
                          </div>
                          <h3
                            className="font-700 text-white text-base mb-1"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {item.title}
                          </h3>
                          <p className="text-sm text-[var(--tc-text-muted)] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Suggest feature */}
          <section className="mt-20 p-8 rounded-[var(--tc-radius-xl)] border border-dashed border-[var(--tc-border-bright)] bg-[var(--tc-surface-2)]/40 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-blue)]/10 border border-[var(--tc-blue)]/30 text-xs font-500 text-[var(--tc-blue-text)] mb-4 uppercase tracking-[0.2em]">
              Sizning g'oyangiz
            </div>
            <h2
              className="text-2xl font-700 text-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Roadmap'ga qo'shilsin?
            </h2>
            <p className="text-[var(--tc-text-secondary)] mb-6">
              Sizning ehtiyojingiz bizning keyingi sprintingiz bo'lishi mumkin.
            </p>
            <a
              href="https://t.me/tezcode_managament"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-500 text-sm tc-glow-blue hover:bg-[var(--tc-blue-light)] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram'da g'oya jonating
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
