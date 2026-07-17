import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    ...buildPageMetadata({
      locale,
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
}

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "1. Umumiy",
    body: [
      "Ushbu shartlar Tezcode saytidan va xizmatlaridan foydalanishni tartibga soladi. Saytdan foydalanish bilan ushbu shartlarga rozilik bildirasiz.",
      "To'lovga oid rasmiy shartnoma — ommaviy oferta: tezcode.dev/oferta.",
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
    title: "6. To'lovlar / Способы оплаты и возврата",
    body: [
      "Pricing sahifasidagi narxlar AQSh dollarida (USD), to'lov soatida valyuta kursi bo'yicha so'mga aylantiriladi. Korxonalar uchun USD invoice mavjud.",
      "To'lov usullari: Payme, Click va Uzum Pay orqali — mobil ilova yoki bank kartasi (Uzcard, Humo, Visa, Mastercard) bilan.",
      "Pul qaytarish: 14 kun ichida sababsiz qaytaramiz. Qaytarish so'rovi tezcode@tezcode.dev manziliga yuboriladi va to'lov qaysi usul orqali amalga oshirilgan bo'lsa, o'sha usul orqali 5 ish kuni ichida amalga oshiriladi.",
    ],
  },
  {
    title:
      "7. Xavfsizlik va firibgarlikka qarshi choralar / Антифрод-меры и ограничение операций",
    body: [
      "Barcha kartadan to'lovlar Payme, Click va Uzum Pay kabi litsenziyalangan to'lov tizimlari orqali amalga oshiriladi — Tezcode karta raqami, muddati yoki CVV kodini saqlamaydi va ko'rmaydi.",
      "Shubhali yoki g'ayrioddiy operatsiyalarni oldini olish uchun bitta operatsiya, kunlik va oylik aylanma bo'yicha chegaralar qo'llaniladi, bu chegaralar to'lov tizimlari va bank hamkorlarimizning firibgarlikka qarshi (antifraud) tizimlari bilan kelishilgan holda belgilanadi.",
      "Shubha tug'diruvchi to'lov aniqlansa, to'lov tizimi yoki bank operatsiyani vaqtincha to'xtatishi va foydalanuvchidan qo'shimcha tasdiqlash so'rashi mumkin — bu holatda Tezcode mustaqil ravishda operatsiyani bekor qilmaydi yoki majburlamaydi.",
      "Firibgarlik yuz berganiga shubha bo'lsa yoki ruxsatsiz operatsiya sodir bo'lsa, foydalanuvchi darhol tezcode@tezcode.dev manziliga yoki Telegram @tezcode_managament orqali murojaat qilishi so'raladi.",
    ],
  },
  {
    title: "8. Xizmat darajasi (SLA)",
    body: [
      "Tezcode Pro va Enterprise reja uchun:",
      "• Pro: 99.5% uptime",
      "• Enterprise: 99.9% uptime + SLA agreement",
      "Texnik nosozlik uchun kompensatsiya — alohida shartnomada.",
    ],
  },
  {
    title: "9. Javobgarlik chegarasi",
    body: [
      "Tezcode har xil yo'qotishlardan javobgar emas — bilvosita, tasodifiy, jazo yoki yo'qotilgan foyda uchun. Maksimal javobgarlik — oxirgi 12 oy uchun to'langan summa.",
    ],
  },
  {
    title: "10. Bekor qilish",
    body: [
      "Foydalanuvchi istalgan vaqtda obunani bekor qilishi mumkin. Tezcode qoidalarni jiddiy buzganlik uchun hisobni bekor qilish huquqini saqlab qoladi.",
    ],
  },
  {
    title: "11. O'zgartirishlar",
    body: [
      "Shartlar yangilanishi mumkin. Sezilarli o'zgarishlar 30 kun oldin e'lon qilinadi.",
    ],
  },
  {
    title: "12. Qo'llaniluvchi qonun",
    body: [
      "O'zbekiston Respublikasi qonunchiligi.",
      "Nizolar Toshkent shahar iqtisodiy sudida ko'rib chiqiladi.",
    ],
  },
  {
    title: "13. Aloqa",
    body: [
      "Savollar: tezcode@tezcode.dev · Telegram: @tezcode_managament",
      "Oxirgi yangilanish: 2026-07-17",
    ],
  },
];

export default function TermsPage() {
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
              Legal · v1.2 — 2026-07-17
            </div>
            <h1
              className="text-4xl md:text-5xl font-700 mb-4 tracking-tight text-[var(--tc-text-primary)]"
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
