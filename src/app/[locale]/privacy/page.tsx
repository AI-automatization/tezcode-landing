import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = {
  ...buildPageMetadata({
    path: "/privacy",
    title: "Maxfiylik Siyosati — Privacy Policy",
    description:
      "Tezcode maxfiylik siyosati: shaxsiy ma'lumotlar yig'ish va ishlatish, cookies, GDPR/UZ qonun talablari, foydalanuvchi huquqlari. So'nggi yangilanish 2026-yil.",
  }),
  robots: {
    index: true,
    follow: true,
  },
};

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "1. Biz kim?",
    body: [
      'Tezcode ("biz", "Tezcode") — Toshkent, O\'zbekistonda joylashgan AI mahsulotlari ishlab chiqaruvchi kompaniya. Saytimiz tezcode.dev.',
      'Aloqa: tezcode@tezcode.dev · Telegram: @tezcode_managament',
    ],
  },
  {
    title: "2. Qanday ma'lumotlar yig'amiz?",
    body: [
      "• Aloqa shaklidan: ism, email, telefon (ixtiyoriy), mavzu, xabar.",
      "• Texnik: IP, brauzer turi, qurilma, sahifa ko'rishlar (analytics).",
      "• Cookie: foydalanish, til tanlovi, sessiya identifikatori.",
      "Kredit karta yoki to'lov ma'lumotlarini saqlaymaymiz — to'lovlar bevosita yetkazib beruvchi orqali (kelajakda).",
    ],
  },
  {
    title: "3. Ma'lumotlardan qanday foydalanamiz?",
    body: [
      "• Sizning so'rovingizga javob berish.",
      "• Demo va konsultatsiya tashkil etish.",
      "• Mahsulotni yaxshilash (yig'ilgan, anonim).",
      "• Marketing (faqat siz rozilik bergan bo'lsangiz).",
      "• Qonun talabiga rioya qilish.",
    ],
  },
  {
    title: "4. Uchinchi tomonlar",
    body: [
      "Quyidagi xizmatlar bilan ma'lumot bo'lishilishi mumkin:",
      "• Google Analytics 4 — saytdan foydalanish statistikasi (anonim).",
      "• Microsoft Clarity — heatmap va session recording (anonim).",
      "• PostHog — mahsulot analitikasi.",
      "• Railway / Vercel — hosting infratuzilmasi.",
      "• Telegram Bot API — aloqa shakli orqali xabarlarni yetkazib berish.",
      "Ushbu xizmatlarning o'z maxfiylik siyosatlari mavjud.",
    ],
  },
  {
    title: "5. Ma'lumotlaringizni qanday saqlaymiz?",
    body: [
      "Ma'lumotlar HTTPS bo'yicha shifrlanadi. Server cheklangan kirish bilan himoyalangan. Aloqa shaklidan kelgan xabarlar Tezcode jamoa xususiy Telegram guruhiga yo'naltiriladi (faqat tasdiqlangan a'zolar).",
    ],
  },
  {
    title: "6. Sizning huquqlaringiz",
    body: [
      "GDPR va O'zbekiston \"Shaxsiy ma'lumotlar to'g'risida\"gi qonun bo'yicha sizning huquqlaringiz:",
      "• Ma'lumotlaringizga kirish.",
      "• Tuzatish yoki o'chirish.",
      "• Ishlov berishni cheklash.",
      "• Ma'lumotni boshqa servisga ko'chirish.",
      "• Rozilikni istalgan vaqt qaytarib olish.",
      "Murojaat: tezcode@tezcode.dev — 30 kun ichida javob beramiz.",
    ],
  },
  {
    title: "7. Cookie va analitika",
    body: [
      "Sayt cookie ishlatadi: zarur (sessiya, til tanlovi) va analitika (sizning roziligingiz bilan).",
      "Saytga kirganingizda cookie banner ko'rsatiladi — \"Faqat zarur\" yoki \"Roziman\" tugmasini tanlashingiz mumkin.",
      "Brauzeringizdan istalgan vaqtda cookie'larni o'chirib tashlashingiz mumkin.",
    ],
  },
  {
    title: "8. Bolalar maxfiyligi",
    body: [
      "Sayt 16 yoshdan kichik bolalardan ataylab ma'lumot yig'maydi.",
    ],
  },
  {
    title: "9. O'zgartirishlar",
    body: [
      "Ushbu siyosat yangilanishi mumkin. Sezilarli o'zgarishlar haqida saytda e'lon beramiz. Oxirgi yangilanish: 2026-05-14.",
    ],
  },
  {
    title: "10. Aloqa",
    body: [
      "Maxfiylik bo'yicha savollar: tezcode@tezcode.dev",
      "Telegram: @tezcode_managament",
      "Pochta: Toshkent, O'zbekiston (manzilingizni so'rasangiz alohida yuboramiz).",
    ],
  },
];

export default function PrivacyPage() {
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
              Legal · v1.0 — 2026-05-14
            </div>
            <h1
              className="text-4xl md:text-5xl font-700 mb-4 tracking-tight text-[var(--tc-text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Maxfiylik siyosati
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg">
              Tezcode shaxsiy ma'lumotlaringizni qanday ishlatadi.
            </p>
          </div>

          <div className="space-y-10">
            {SECTIONS.map((sec) => (
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
