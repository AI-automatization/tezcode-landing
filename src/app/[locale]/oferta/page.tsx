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
      path: "/oferta",
      title: "Ommaviy oferta — Публичная оферта",
      description:
        "TEZ KOD MCHJning obuna xizmatlarini taqdim etish bo'yicha ommaviy offertasi: oferta predmeti, narx va to'lov tartibi, firibgarlikka qarshi choralar, tomonlar rekvizitlari.",
    }),
    robots: {
      index: true,
      follow: true,
    },
  };
}

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "1. Umumiy qoidalar / Общие положения",
    body: [
      "Ushbu hujjat O'zbekiston Respublikasi Fuqarolik kodeksining 369-moddasiga muvofiq \"TEZ KOD\" MCHJ (STIR 313057467, IT Park rezidenti) tomonidan taqdim etilgan ommaviy oferta (ochiq taklif) hisoblanadi.",
      "Oferta shartlarini qabul qilish (aksept) — RAOS, CoreMed, WeWatch, Zzone yoki savdo-builder xizmatlaridan biriga to'lov amalga oshirilgan payt hisoblanadi (FK 370-moddasi). To'lov amalga oshirilgan paytdan boshlab shartnoma yozma shaklda tuzilgan deb hisoblanadi.",
      "Ru: Настоящий документ является публичной офертой ООО «TEZ KOD» (СТИР 313057467, резидент IT Park Узбекистана) в соответствии со ст. 369 Гражданского кодекса Республики Узбекистан. Акцептом оферты (ст. 370 ГК) считается момент оплаты одной из услуг — RAOS, CoreMed, WeWatch, Zzone или savdo-builder. С момента оплаты договор считается заключённым в письменной форме.",
    ],
  },
  {
    title: "2. Oferta predmeti / Предмет оферты",
    body: [
      "TEZ KOD internet orqali (SaaS) dasturiy ta'minotdan foydalanish huquqini obuna (abonent) to'lovi asosida taqdim etadi: RAOS — chakana savdo uchun POS-tizim, CoreMed — tibbiy ekotizim (klinikalar, bemorlar, uyga chaqiruv), WeWatch — ovozli chat bilan birgalikda video ko'rish xizmati, Zzone — avtoehtiyot qismlarni qidirish va sotib olish platformasi, savdo-builder — bozor va savdo nuqtalari uchun platforma.",
      "Har bir mahsulotning narxlari, funksional imkoniyatlari va tarif rejalari tegishli mahsulot saytida (masalan, raos.uz) ko'rsatiladi va ushbu offertaning ajralmas qismi hisoblanadi.",
      "Ru: TEZ KOD предоставляет право использования программного обеспечения по модели SaaS на условиях подписки: RAOS — POS-система для розничной торговли, CoreMed — медицинская экосистема (клиники, пациенты, вызов на дом), WeWatch — сервис совместного просмотра видео с голосовым чатом, Zzone — платформа поиска и покупки автозапчастей, savdo-builder — платформа для рынков и торговых точек. Цены, функциональность и тарифные планы каждого продукта указаны на сайте соответствующего продукта и являются неотъемлемой частью настоящей оферты.",
    ],
  },
  {
    title: "3. Narx va to'lov tartibi / Цена и порядок оплаты",
    body: [
      "Xizmat narxi tegishli mahsulot saytida ko'rsatilgan tarifga muvofiq belgilanadi. To'lov Payme, Click va Uzum Pay to'lov tizimlari orqali — mobil ilova yoki bank kartasi (Uzcard, Humo, Visa, Mastercard) bilan amalga oshiriladi.",
      "TEZ KOD karta rekvizitlarini (raqami, amal qilish muddati, CVV kodi) saqlamaydi va ko'rmaydi — barcha to'lovlar litsenziyalangan to'lov tizimlari infratuzilmasi orqali amalga oshiriladi.",
      "Pul qaytarish: 14 kun ichida sababsiz qaytariladi. So'rov tezcode@tezcode.dev manziliga yuboriladi, mablag' dastlabki to'lov amalga oshirilgan usul orqali 5 ish kuni ichida qaytariladi. To'liq shartlar: tezcode.dev/terms, 6-bo'lim.",
      "Ru: Стоимость услуги определяется согласно тарифу, указанному на сайте соответствующего продукта. Оплата производится через платёжные системы Payme, Click и Uzum Pay — банковской картой (Uzcard, Humo, Visa, Mastercard) или через мобильное приложение. TEZ KOD не хранит и не видит реквизиты карты (номер, срок действия, CVV) — все платежи проходят через инфраструктуру лицензированных платёжных систем. Возврат средств: в течение 14 дней без объяснения причин; запрос направляется на tezcode@tezcode.dev, средства возвращаются тем же способом оплаты в течение 5 рабочих дней. Полные условия — tezcode.dev/terms, раздел 6.",
    ],
  },
  {
    title:
      "4. Firibgarlikka qarshi choralar va operatsiyalarni cheklash / Антифрод-меры и ограничение операций",
    body: [
      "Barcha kartadan to'lovlar Payme, Click va Uzum Pay kabi litsenziyalangan to'lov tizimlari orqali amalga oshiriladi. Shubhali yoki g'ayrioddiy operatsiyalarni oldini olish uchun bitta operatsiya, kunlik va oylik aylanma bo'yicha chegaralar qo'llaniladi — bu chegaralar to'lov tizimlari va bank hamkorlarining firibgarlikka qarshi (antifraud) tizimlari bilan kelishilgan holda belgilanadi.",
      "Shubha tug'diruvchi to'lov aniqlansa, to'lov tizimi yoki bank operatsiyani vaqtincha to'xtatishi va foydalanuvchidan qo'shimcha tasdiqlash so'rashi mumkin — bu holatda TEZ KOD mustaqil ravishda operatsiyani bekor qilmaydi yoki majburlamaydi. Firibgarlikka shubha bo'lsa: tezcode@tezcode.dev yoki Telegram @tezcode_managament.",
      "Ru: Все платежи картой проходят через лицензированные платёжные системы Payme, Click и Uzum Pay. Для предотвращения подозрительных и нетипичных операций применяются лимиты на разовую, дневную и месячную сумму операций — лимиты согласованы с антифрод-системами платёжных систем и банков-партнёров. При обнаружении подозрительной операции платёжная система или банк вправе временно приостановить операцию и запросить у пользователя дополнительное подтверждение — TEZ KOD самостоятельно не отменяет и не форсирует операцию в этом случае. При подозрении на мошенничество: tezcode@tezcode.dev или Telegram @tezcode_managament.",
    ],
  },
  {
    title: "5. Tomonlarning huquq va majburiyatlari / Права и обязанности сторон",
    body: [
      "TEZ KOD xizmatning ishlashini, texnik qo'llab-quvvatlashni va ma'lumotlar maxfiyligini ta'minlashga majburdir (batafsil: tezcode.dev/privacy).",
      "Foydalanuvchi to'lovni o'z vaqtida amalga oshirishga, xizmatdan qonuniy maqsadlarda foydalanishga va hisob ma'lumotlarining maxfiyligini saqlashga majburdir.",
      "Ru: TEZ KOD обязуется обеспечивать работоспособность сервиса, техническую поддержку и конфиденциальность данных (подробнее: tezcode.dev/privacy). Пользователь обязуется своевременно производить оплату, использовать сервис в законных целях и сохранять конфиденциальность учётных данных.",
    ],
  },
  {
    title: "6. Javobgarlik / Ответственность",
    body: [
      "TEZ KOD bilvosita, tasodifiy yoki yo'qotilgan foyda ko'rinishidagi zararlar uchun javobgar emas. Maksimal javobgarlik — oxirgi 12 oy uchun to'langan summa bilan cheklanadi. To'liq shartlar: tezcode.dev/terms, 9-bo'lim.",
      "Ru: TEZ KOD не несёт ответственности за косвенные, случайные убытки или упущенную выгоду. Максимальная ответственность ограничена суммой, оплаченной за последние 12 месяцев. Полные условия — tezcode.dev/terms, раздел 9.",
    ],
  },
  {
    title: "7. Amal qilish muddati va bekor qilish / Срок действия и отмена",
    body: [
      "Oferta cheksiz muddatga amal qiladi. Foydalanuvchi istalgan vaqtda obunani bekor qilishi mumkin — bekor qilingan kundan keyingi davr uchun to'lov olinmaydi. TEZ KOD qoidalarni jiddiy buzganlik holida hisobni bekor qilish huquqini saqlab qoladi.",
      "Ru: Оферта действует бессрочно. Пользователь может отменить подписку в любой момент — плата за период после отмены не взимается. TEZ KOD оставляет за собой право заблокировать аккаунт при грубом нарушении условий.",
    ],
  },
  {
    title: "8. Nizolarni hal qilish tartibi / Порядок разрешения споров",
    body: [
      "Ushbu oferta O'zbekiston Respublikasi qonunchiligiga bo'ysunadi. Kelib chiqishi mumkin bo'lgan nizolar avval muzokaralar yo'li bilan, kelishuvga erishilmasa — Toshkent shahar iqtisodiy sudida ko'rib chiqiladi.",
      "Ru: Настоящая оферта регулируется законодательством Республики Узбекистан. Возникающие споры разрешаются путём переговоров, а при недостижении согласия — в Ташкентском городском экономическом суде.",
    ],
  },
  {
    title: "9. Ijrochining rekvizitlari / Реквизиты исполнителя",
    body: [
      "\"TEZ KOD\" MAS'ULIYATI CHEKLANGAN JAMIYATI",
      "STIR (ИНН): 313 057 467",
      "Yuridik manzil: Toshkent sh., Olmazor tumani, Chuqursoy MFY, Qora-Qamish 1/4 dahasi, 20-uy, 19-xonadon",
      "Bank: Davr Bank AT, Olmazor filiali · Hisob raqami: 20208000307472214001 · MFO: 01121",
      "Direktor: Yormatov Abdulaziz G'ayratjon o'g'li",
      "Email: tezcode@tezcode.dev · Telegram: @tezcode_managament · Tel: +998 91 777 66 09",
      "IT Park Uzbekistan rezidenti (guvohnoma № 7666, 18.06.2026)",
    ],
  },
];

export default function OfertaPage() {
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
              Legal · v1.0 — 2026-07-17
            </div>
            <h1
              className="text-4xl md:text-5xl font-700 mb-4 tracking-tight text-[var(--tc-text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ommaviy oferta / Публичная оферта
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg">
              TEZ KOD obuna xizmatlarini taqdim etish shartnomasi — FK 369-370-moddalari.
              <br />
              Договор оферты на предоставление подписочных услуг TEZ KOD — ст. 369-370 ГК РУз.
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
