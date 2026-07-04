import { Navbar } from "@/components/Navbar";
import { ROICalculator } from "@/components/ROICalculator";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { CookieConsent } from "@/components/CookieConsent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/tools/roi-calculator",
  title: "ROI Kalkulyator — Tezcode bilan qancha tejaysiz?",
  description:
    "Bepul ROI kalkulyator: biznes turingiz va xodimlar sonini tanlang — Tezcode avtomatlashtirish bilan oyiga qancha tejashingizni bir zumda ko'ring.",
  ogTitle: "ROI Kalkulyator — Tezcode",
  ogDescription:
    "Biznes turi + xodimlar soni — oylik tejovingizni bir zumda hisoblang. Bepul, ro'yxatdan o'tish shart emas.",
});

// Standalone home for the ROI calculator so nothing has to deep-link to the
// home page's #calculator section.
export default function RoiCalculatorPage() {
  return (
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)] overflow-hidden"
    >
      <Navbar />

      {/* pt-16 clears the fixed navbar; the calculator section brings its own py */}
      <div className="pt-16">
        <ROICalculator />
      </div>

      <Footer />
      <FloatingContact />
      <CookieConsent />
    </main>
  );
}
