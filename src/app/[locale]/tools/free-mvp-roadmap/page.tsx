import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MvpRoadmapForm } from "./MvpRoadmapForm";

export const metadata: Metadata = {
  title: "Bepul MVP Yo'l Xaritasi Generatori — Startup G'oyangiz Uchun",
  description:
    "Startup g'oyangizni 5 daqiqada professional MVP yo'l xaritasiga aylantiring: texnologiya stack, scope, 4 haftalik plan, budget hisobi. AI generatsiya + Bekzod CEO 24 soatda kommentariy.",
  alternates: {
    canonical: "https://www.tezcode.dev/tools/free-mvp-roadmap",
  },
  openGraph: {
    title: "Bepul MVP Roadmap — Tezcode",
    description: "Startup g'oyangiz uchun AI generatsiyali MVP roadmap. 5 daqiqada.",
    url: "https://www.tezcode.dev/tools/free-mvp-roadmap",
    type: "website",
  },
};

const STEPS = [
  { num: "1", title: "G'oyangizni yozing", desc: "1-2 paragrafda — biznes muammo + qanday yechmoqchisiz" },
  { num: "2", title: "Texnik talablarni belgilang", desc: "Mobile/Web? Mijozlar soni? Budget?" },
  { num: "3", title: "AI roadmap chiqaradi", desc: "MVP scope + texnologiya stack + 4 hafta plan + budget hisobi" },
  { num: "4", title: "PDF + Telegram'da olasiz", desc: "Bekzod CEO 24 soat ichida ko'rib chiqib, kommentariy beradi" },
];

const FAQ = [
  {
    q: "Bu chindan bepulmi?",
    a: "Ha. Marketing magnet. Sen MVP roadmap'ni olasan, biz seni Tezcode mahsulotidan xabardor qilamiz. Ya'ni biz uchun ham foyda.",
  },
  {
    q: "AI yaratsa qancha sifatli bo'ladi?",
    a: "Bekzod CEO + senior engineerlarimiz 24 soat ichida ko'rib chiqib, professional kommentariy qo'shadi. Sof AI emas — hybrid.",
  },
  {
    q: "Sirim qoladi?",
    a: "Ha, sizning g'oyangiz faqat bizning ichki AI'da. Public emas. NDA imzolaymiz so'rasangiz.",
  },
  {
    q: "Tezcode dasturchilariga buyurtma berishim kerakmi?",
    a: "Yo'q. Roadmap o'zingiz uchun bepul. Boshqa joyda dastur yozdirishingiz mumkin.",
  },
];

export default function MvpRoadmapPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--tc-ink)] pt-24 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 border border-[var(--tc-gold)]/30 text-xs font-500 text-[var(--tc-gold)] mb-4 uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-gold)] animate-pulse" />
              100% Bepul · Sifatli
            </div>
            <h1
              className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              MVP Roadmap{" "}
              <span className="tc-text-gradient-gold">5 daqiqada</span>
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto">
              Sizning startup g'oyangiz uchun professional yo'l xaritasi — AI + Tezcode CEO sharhi bilan.
            </p>
          </div>

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-8 h-8 rounded-full bg-[var(--tc-blue)]/15 border border-[var(--tc-blue)]/40 flex items-center justify-center text-sm font-700 text-[var(--tc-blue)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3
                  className="font-700 text-white text-sm mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--tc-text-muted)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <MvpRoadmapForm />

          {/* FAQ */}
          <section className="mt-20">
            <h2
              className="text-2xl md:text-3xl font-700 text-white mb-8 text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tez-tez beriladigan savollar
            </h2>
            <div className="space-y-3 max-w-3xl mx-auto">
              {FAQ.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] open:border-[var(--tc-border-bright)] transition-colors"
                >
                  <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-3 font-600 text-white text-sm">
                    {item.q}
                    <svg
                      className="w-4 h-4 text-[var(--tc-text-muted)] transition-transform group-open:rotate-180"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-[var(--tc-text-secondary)] leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
