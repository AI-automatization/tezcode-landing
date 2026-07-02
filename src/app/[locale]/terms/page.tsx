import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = {
  ...buildPageMetadata({
    path: "/terms",
    title: "Foydalanish Shartlari — Terms of Service",
    description:
      "Tezcode xizmatlaridan foydalanish shartlari: huquq va majburiyatlar, to'lov shartlari, javobgarlik chekloyi, nizolar tartibi. So'nggi tahrir 2026-yil.",
  }),
  robots: {
    index: true,
    follow: true,
  },
};

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "1. Umumiy",
    body: [
      "Ushbu shartlar Tezcode saytidan va xizmatlaridan foydalanishni tartibga soladi. Saytdan foydalanish bilan ushbu shartlarga rozilik bildirasiz.",
    ],
  },
  {
    title: "2. Xizmatlar",
    body: [
      "Tezcode mahsulotlari ishlab chiqaradi: RAOS (POS), AI Office (biznes AI), CoreMed (sog'liq), va boshqalar.",
      "Har mahsulot o'z foydalanish shartlariga ega bo'lishi mumkin — sotib olganda alohida ko'rsatiladi.",
    ],
  },
  {
    title: "3. Foydalanuvchi majburiyatlari",
    body: [
      "Saytdan foydalanishda:",
      "• Saytni qonunga zid maqsadlarda ishlatmang.",
      "• Spam yubormang yoki avtomatlashtirilgan bot bilan saytni bombardimon qilmang.",
      "• Boshqalarning huquqlarini buzmang.",
      "• Sayt xavfsizligini zaiflashtirishga urinmang.",
    ],
  },
  {
    title: "4. Intellektual mulk",
    body: [
      "Tezcode brand, logo, kod, dizayn va kontent Tezcode mulki. Yozma ruxsatsiz nusxa olish, qayta tarqatish yoki tijoriy maqsadda ishlatish taqiqlanadi.",
      "Mijoz ma'lumotlari — mijoz mulki, biz faqat xizmat ko'rsatish uchun ishlatamiz.",
    ],
  },
  {
    title: "5. Demo va sinov muddati",
    body: [
      "Bepul demo va 14 kunlik sinov muddati ko'pchilik mahsulot uchun mavjud. Sinov muddatidan keyin to'lov boshlanmasligi uchun obunani bekor qilishingiz mumkin.",
    ],
  },
  {
    title: "6. To'lovlar",
    body: [
      "Pricing sahifasidagi narxlar AQSh dollarida (USD), to'lov soatida valyuta kursi bo'yicha so'mga aylantiriladi. Korxonalar uchun USD invoice mavjud.",
      "Pul qaytarish: 14 kun ichida sababsiz qaytaramiz.",
    ],
  },
  {
    title: "7. Xizmat darajasi (SLA)",
    body: [
      "Tezcode Pro va Enterprise reja uchun:",
      "• Pro: 99.5% uptime",
      "• Enterprise: 99.9% uptime + SLA agreement",
      "Texnik nosozlik uchun kompensatsiya — alohida shartnomada.",
    ],
  },
  {
    title: "8. Javobgarlik chegarasi",
    body: [
      "Tezcode har xil yo'qotishlardan javobgar emas — bilvosita, tasodifiy, jazo yoki yo'qotilgan foyda uchun. Maksimal javobgarlik — oxirgi 12 oy uchun to'langan summa.",
    ],
  },
  {
    title: "9. Bekor qilish",
    body: [
      "Foydalanuvchi istalgan vaqtda obunani bekor qilishi mumkin. Tezcode qoidalarni jiddiy buzganlik uchun hisobni bekor qilish huquqini saqlab qoladi.",
    ],
  },
  {
    title: "10. O'zgartirishlar",
    body: [
      "Shartlar yangilanishi mumkin. Sezilarli o'zgarishlar 30 kun oldin e'lon qilinadi.",
    ],
  },
  {
    title: "11. Qo'llaniluvchi qonun",
    body: [
      "O'zbekiston Respublikasi qonunchiligi.",
      "Nizolar Toshkent shahar iqtisodiy sudida ko'rib chiqiladi.",
    ],
  },
  {
    title: "12. Aloqa",
    body: [
      "Savollar: tezcode@tezcode.dev · Telegram: @webdevelopertk",
      "Oxirgi yangilanish: 2026-05-14",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--tc-ink)] pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs text-[var(--tc-text-muted)] uppercase tracking-[0.2em] mb-3">
              Legal · v1.0 — 2026-05-14
            </div>
            <h1
              className="text-4xl md:text-5xl font-700 mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Foydalanish shartlari
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg">
              Tezcode xizmatlaridan foydalanish shartlari.
            </p>
          </div>

          <div className="space-y-10">
            {SECTIONS.map((sec) => (
              <section key={sec.title}>
                <h2
                  className="text-xl font-700 text-white mb-3"
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
      </main>
      <Footer />
    </>
  );
}
