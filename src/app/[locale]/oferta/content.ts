import type { LegalContent } from "@/components/legal/types";

// Director's name is kept in its official Latin passport form across most
// locales (legal names aren't translated). The ru/uk Cyrillic renderings
// below follow each language's own transliteration convention — Russian has
// no separate "Йо"/"Ё" ambiguity for this surname (Ёрматов), while Ukrainian
// orthography has no letter "Ё" and renders the same sound as "Йо" (Йорматов).
export const OFERTA_CONTENT: LegalContent = {
  uz: {
    metaTitle: "Ommaviy oferta — Public Offer",
    metaDescription:
      "TEZ KOD MCHJning obuna xizmatlarini taqdim etish bo'yicha ommaviy offertasi: oferta predmeti, narx va to'lov tartibi, firibgarlikka qarshi choralar, tomonlar rekvizitlari.",
    versionLabel: "Legal · v1.1 — 2026-07-22",
    heading: "Ommaviy oferta",
    subheading:
      "TEZ KOD obuna xizmatlarini taqdim etish shartnomasi — FK 369-370-moddalari.",
    sections: [
      {
        title: "1. Umumiy qoidalar",
        body: [
          "Ushbu hujjat O'zbekiston Respublikasi Fuqarolik kodeksining 369-moddasiga muvofiq \"TEZ KOD\" MCHJ (STIR 313057467, IT Park rezidenti) tomonidan taqdim etilgan ommaviy oferta (ochiq taklif) hisoblanadi.",
          "Oferta shartlarini qabul qilish (aksept) — RAOS, CoreMed, WeWatch, Zzone yoki savdo-builder xizmatlaridan biriga to'lov amalga oshirilgan payt hisoblanadi (FK 370-moddasi). To'lov amalga oshirilgan paytdan boshlab shartnoma yozma shaklda tuzilgan deb hisoblanadi.",
        ],
      },
      {
        title: "2. Oferta predmeti",
        body: [
          "TEZ KOD internet orqali (SaaS) dasturiy ta'minotdan foydalanish huquqini obuna (abonent) to'lovi asosida taqdim etadi: RAOS — chakana savdo uchun POS-tizim, CoreMed — tibbiy ekotizim (klinikalar, bemorlar, uyga chaqiruv), WeWatch — ovozli chat bilan birgalikda video ko'rish xizmati, Zzone — avtoehtiyot qismlarni qidirish va sotib olish platformasi, savdo-builder — bozor va savdo nuqtalari uchun platforma.",
          "Har bir mahsulotning narxlari, funksional imkoniyatlari va tarif rejalari tegishli mahsulot saytida (masalan, raos.uz) ko'rsatiladi va ushbu offertaning ajralmas qismi hisoblanadi.",
        ],
      },
      {
        title: "3. Narx, to'lov va pul qaytarish tartibi",
        body: [
          "Xizmat narxi tegishli mahsulot saytida ko'rsatilgan tarifga muvofiq belgilanadi. To'lov Payme, Click va Uzum Pay to'lov tizimlari orqali — mobil ilova yoki bank kartasi (Uzcard, Humo, Visa, Mastercard) bilan amalga oshiriladi.",
          "TEZ KOD karta rekvizitlarini (raqami, amal qilish muddati, CVV kodi) saqlamaydi va ko'rmaydi — barcha to'lovlar litsenziyalangan to'lov tizimlari infratuzilmasi orqali amalga oshiriladi.",
          "Pul mablag'larini qaytarish (Refund). Mijoz quyidagi hollarda to'langan mablag'ni qaytarishni so'rashi mumkin: (1) xizmat texnik sabablarga ko'ra ko'rsatilmagan bo'lsa; (2) to'lov xato yoki takroran amalga oshirilgan bo'lsa.",
          "Qaytarish so'rovi tezcode@tezcode.dev manziliga yuboriladi. So'rov ko'rib chiqilgach, mablag' xuddi to'langan usul (karta) orqali, odatda 10 (o'n) ish kuni ichida — bank va to'lov tizimi qoidalariga muvofiq qaytariladi.",
          "Foydalanib bo'lingan obuna davri uchun mablag' qaytarilmaydi. Foydalanilmagan (qolgan) obuna davri uchun mablag' Mijoz so'roviga ko'ra qaytarilishi mumkin. To'liq shartlar: tezcode.dev/terms.",
        ],
      },
      {
        title: "4. Firibgarlikka qarshi choralar va operatsiyalarni cheklash",
        body: [
          "Barcha kartadan to'lovlar Payme, Click va Uzum Pay kabi litsenziyalangan to'lov tizimlari orqali amalga oshiriladi. Shubhali yoki g'ayrioddiy operatsiyalarni oldini olish uchun bitta operatsiya, kunlik va oylik aylanma bo'yicha chegaralar qo'llaniladi — bu chegaralar to'lov tizimlari va bank hamkorlarining firibgarlikka qarshi (antifraud) tizimlari bilan kelishilgan holda belgilanadi.",
          "Shubha tug'diruvchi to'lov aniqlansa, to'lov tizimi yoki bank operatsiyani vaqtincha to'xtatishi va foydalanuvchidan qo'shimcha tasdiqlash so'rashi mumkin — bu holatda TEZ KOD mustaqil ravishda operatsiyani bekor qilmaydi yoki majburlamaydi. Firibgarlikka shubha bo'lsa: tezcode@tezcode.dev yoki Telegram @tezcode_managament.",
        ],
      },
      {
        title: "5. Tomonlarning huquq va majburiyatlari",
        body: [
          "TEZ KOD xizmatning ishlashini, texnik qo'llab-quvvatlashni va ma'lumotlar maxfiyligini ta'minlashga majburdir (batafsil: tezcode.dev/privacy).",
          "Foydalanuvchi to'lovni o'z vaqtida amalga oshirishga, xizmatdan qonuniy maqsadlarda foydalanishga va hisob ma'lumotlarining maxfiyligini saqlashga majburdir.",
        ],
      },
      {
        title: "6. Javobgarlik",
        body: [
          "TEZ KOD bilvosita, tasodifiy yoki yo'qotilgan foyda ko'rinishidagi zararlar uchun javobgar emas. Maksimal javobgarlik — oxirgi 12 oy uchun to'langan summa bilan cheklanadi. To'liq shartlar: tezcode.dev/terms, 9-bo'lim.",
        ],
      },
      {
        title: "7. Amal qilish muddati va bekor qilish",
        body: [
          "Oferta cheksiz muddatga amal qiladi. Foydalanuvchi istalgan vaqtda obunani bekor qilishi mumkin — bekor qilingan kundan keyingi davr uchun to'lov olinmaydi. TEZ KOD qoidalarni jiddiy buzganlik holida hisobni bekor qilish huquqini saqlab qoladi.",
        ],
      },
      {
        title: "8. Nizolarni hal qilish tartibi",
        body: [
          "Ushbu oferta O'zbekiston Respublikasi qonunchiligiga bo'ysunadi. Kelib chiqishi mumkin bo'lgan nizolar avval muzokaralar yo'li bilan, kelishuvga erishilmasa — Toshkent shahar iqtisodiy sudida ko'rib chiqiladi.",
        ],
      },
      {
        title: "9. Ijrochining rekvizitlari",
        body: [
          "\"TEZ KOD\" MAS'ULIYATI CHEKLANGAN JAMIYATI",
          "STIR: 313 057 467",
          "Yuridik manzil: Toshkent sh., Olmazor tumani, Chuqursoy MFY, Qora-Qamish 1/4 dahasi, 20-uy, 19-xonadon",
          "Bank: Davr Bank AT, Olmazor filiali · Hisob raqami: 20208000307472214001 · MFO: 01121",
          "Direktor: Yormatov Abdulaziz G'ayratjon o'g'li",
          "Email: tezcode@tezcode.dev · Telegram: @tezcode_managament · Tel: +998 91 777 66 09",
          "IT Park Uzbekistan rezidenti (guvohnoma № 7666, 18.06.2026)",
        ],
      },
    ],
  },
  ru: {
    metaTitle: "Публичная оферта — Tezcode",
    metaDescription:
      "Публичная оферта TEZ KOD на предоставление подписочных услуг: предмет оферты, цена и порядок оплаты, антифрод-меры, реквизиты сторон.",
    versionLabel: "Правовой документ · v1.1 — 22.07.2026",
    heading: "Публичная оферта",
    subheading:
      "Договор оферты на предоставление подписочных услуг TEZ KOD — ст. 369-370 ГК Республики Узбекистан.",
    sections: [
      {
        title: "1. Общие положения",
        body: [
          "Настоящий документ является публичной офертой ООО «TEZ KOD» (СТИР 313057467, резидент IT Park Узбекистана) в соответствии со ст. 369 Гражданского кодекса Республики Узбекистан.",
          "Акцептом оферты (ст. 370 ГК) считается момент оплаты одной из услуг — RAOS, CoreMed, WeWatch, Zzone или savdo-builder. С момента оплаты договор считается заключённым в письменной форме.",
        ],
      },
      {
        title: "2. Предмет оферты",
        body: [
          "TEZ KOD предоставляет право использования программного обеспечения по модели SaaS на условиях подписки: RAOS — POS-система для розничной торговли, CoreMed — медицинская экосистема (клиники, пациенты, вызов на дом), WeWatch — сервис совместного просмотра видео с голосовым чатом, Zzone — платформа поиска и покупки автозапчастей, savdo-builder — платформа для рынков и торговых точек.",
          "Цены, функциональность и тарифные планы каждого продукта указаны на сайте соответствующего продукта и являются неотъемлемой частью настоящей оферты.",
        ],
      },
      {
        title: "3. Цена, порядок оплаты и возврата средств",
        body: [
          "Стоимость услуги определяется согласно тарифу, указанному на сайте соответствующего продукта. Оплата производится через платёжные системы Payme, Click и Uzum Pay — банковской картой (Uzcard, Humo, Visa, Mastercard) или через мобильное приложение.",
          "TEZ KOD не хранит и не видит реквизиты карты (номер, срок действия, CVV) — все платежи проходят через инфраструктуру лицензированных платёжных систем.",
          "Возврат денежных средств (Refund). Клиент может запросить возврат оплаченных средств в следующих случаях: (1) если услуга не была оказана по техническим причинам; (2) если платёж совершён ошибочно или повторно (дважды).",
          "Запрос на возврат направляется на tezcode@tezcode.dev. После рассмотрения запроса средства возвращаются тем же способом, которым была произведена оплата (на карту), обычно в течение 10 (десяти) рабочих дней — в соответствии с правилами банка и платёжной системы.",
          "Оплата за уже использованный период подписки возврату не подлежит. Неиспользованный (оставшийся) период подписки может быть возвращён по запросу Клиента. Полные условия — tezcode.dev/terms.",
        ],
      },
      {
        title: "4. Антифрод-меры и ограничение операций",
        body: [
          "Все платежи картой проходят через лицензированные платёжные системы Payme, Click и Uzum Pay. Для предотвращения подозрительных и нетипичных операций применяются лимиты на разовую, дневную и месячную сумму операций — лимиты согласованы с антифрод-системами платёжных систем и банков-партнёров.",
          "При обнаружении подозрительной операции платёжная система или банк вправе временно приостановить операцию и запросить у пользователя дополнительное подтверждение — TEZ KOD самостоятельно не отменяет и не форсирует операцию в этом случае. При подозрении на мошенничество: tezcode@tezcode.dev или Telegram @tezcode_managament.",
        ],
      },
      {
        title: "5. Права и обязанности сторон",
        body: [
          "TEZ KOD обязуется обеспечивать работоспособность сервиса, техническую поддержку и конфиденциальность данных (подробнее: tezcode.dev/privacy).",
          "Пользователь обязуется своевременно производить оплату, использовать сервис в законных целях и сохранять конфиденциальность учётных данных.",
        ],
      },
      {
        title: "6. Ответственность",
        body: [
          "TEZ KOD не несёт ответственности за косвенные, случайные убытки или упущенную выгоду. Максимальная ответственность ограничена суммой, оплаченной за последние 12 месяцев. Полные условия — tezcode.dev/terms, раздел 9.",
        ],
      },
      {
        title: "7. Срок действия и отмена",
        body: [
          "Оферта действует бессрочно. Пользователь может отменить подписку в любой момент — плата за период после отмены не взимается. TEZ KOD оставляет за собой право заблокировать аккаунт при грубом нарушении условий.",
        ],
      },
      {
        title: "8. Порядок разрешения споров",
        body: [
          "Настоящая оферта регулируется законодательством Республики Узбекистан. Возникающие споры разрешаются путём переговоров, а при недостижении согласия — в Ташкентском городском экономическом суде.",
        ],
      },
      {
        title: "9. Реквизиты исполнителя",
        body: [
          "ООО «TEZ KOD» (\"TEZ KOD\" MAS'ULIYATI CHEKLANGAN JAMIYATI)",
          "СТИР: 313 057 467",
          "Юридический адрес: Toshkent sh., Olmazor tumani, Chuqursoy MFY, Qora-Qamish 1/4 dahasi, 20-uy, 19-xonadon",
          "Банк: Davr Bank AT, филиал Olmazor · Расчётный счёт: 20208000307472214001 · МФО: 01121",
          "Директор: Ёрматов Абдулазиз Гайратжонович",
          "Email: tezcode@tezcode.dev · Telegram: @tezcode_managament · Тел: +998 91 777 66 09",
          "Резидент IT Park Uzbekistan (свидетельство № 7666, 18.06.2026)",
        ],
      },
    ],
  },
  en: {
    metaTitle: "Public Offer — Tezcode",
    metaDescription:
      "TEZ KOD public offer for subscription services: subject of the offer, price and payment terms, anti-fraud measures, contracting parties' details.",
    versionLabel: "Legal · v1.1 — 2026-07-22",
    heading: "Public Offer",
    subheading:
      "Public offer agreement for TEZ KOD subscription services — Articles 369-370 of the Civil Code of Uzbekistan.",
    sections: [
      {
        title: "1. General provisions",
        body: [
          "This document is a public offer by TEZ KOD LLC (STIR/tax ID 313057467, IT Park Uzbekistan resident) issued under Article 369 of the Civil Code of the Republic of Uzbekistan.",
          "Acceptance of the offer (Article 370 of the Civil Code) occurs at the moment of payment for one of the services — RAOS, CoreMed, WeWatch, Zzone, or savdo-builder. From the moment of payment, the agreement is deemed concluded in writing.",
        ],
      },
      {
        title: "2. Subject of the offer",
        body: [
          "TEZ KOD grants the right to use software on a SaaS subscription basis: RAOS — a POS system for retail, CoreMed — a healthcare ecosystem (clinics, patients, home visits), WeWatch — a co-watching video service with voice chat, Zzone — a platform for finding and buying auto parts, savdo-builder — a platform for markets and points of sale.",
          "Prices, functionality, and pricing plans for each product are listed on that product's website and form an integral part of this offer.",
        ],
      },
      {
        title: "3. Price, payment and refund terms",
        body: [
          "The service price is set according to the tariff listed on the relevant product's website. Payment is made via Payme, Click, and Uzum Pay — by mobile app or bank card (Uzcard, Humo, Visa, Mastercard).",
          "TEZ KOD does not store or see card details (number, expiry date, CVV) — all payments are processed through the infrastructure of licensed payment systems.",
          "Refunds. The customer may request a refund of paid funds in the following cases: (1) if the service was not provided for technical reasons; (2) if the payment was made in error or duplicated (charged twice).",
          "A refund request is sent to tezcode@tezcode.dev. Once reviewed, funds are returned via the same method used for payment (card), typically within 10 (ten) business days — in accordance with the rules of the bank and payment system.",
          "Payment for an already-used subscription period is non-refundable. The unused (remaining) subscription period may be refunded at the customer's request. Full terms: tezcode.dev/terms.",
        ],
      },
      {
        title: "4. Anti-fraud measures and transaction limits",
        body: [
          "All card payments are processed through licensed payment systems — Payme, Click, and Uzum Pay. To prevent suspicious or unusual transactions, limits apply to single, daily, and monthly transaction volume — set in coordination with the anti-fraud systems of payment systems and banking partners.",
          "If a suspicious transaction is detected, the payment system or bank may temporarily hold it and request additional confirmation from the user — TEZ KOD does not independently cancel or force the transaction in that case. If you suspect fraud: tezcode@tezcode.dev or Telegram @tezcode_managament.",
        ],
      },
      {
        title: "5. Rights and obligations of the parties",
        body: [
          "TEZ KOD undertakes to ensure the service's operability, technical support, and data confidentiality (details: tezcode.dev/privacy).",
          "The user undertakes to pay on time, use the service for lawful purposes, and keep account credentials confidential.",
        ],
      },
      {
        title: "6. Liability",
        body: [
          "TEZ KOD is not liable for indirect, incidental damages or lost profit. Maximum liability is limited to the amount paid over the last 12 months. Full terms: tezcode.dev/terms, section 9.",
        ],
      },
      {
        title: "7. Term and cancellation",
        body: [
          "The offer is valid indefinitely. The user may cancel the subscription at any time — no charge applies for the period after cancellation. TEZ KOD reserves the right to suspend an account for serious violations of these terms.",
        ],
      },
      {
        title: "8. Dispute resolution",
        body: [
          "This offer is governed by the laws of the Republic of Uzbekistan. Disputes are resolved through negotiation; failing agreement, in the Tashkent City Economic Court.",
        ],
      },
      {
        title: "9. Contractor's details",
        body: [
          "TEZ KOD LLC (\"TEZ KOD\" MAS'ULIYATI CHEKLANGAN JAMIYATI)",
          "Tax ID (STIR): 313 057 467",
          "Registered address: Toshkent sh., Olmazor tumani, Chuqursoy MFY, Qora-Qamish 1/4 dahasi, 20-uy, 19-xonadon",
          "Bank: Davr Bank AT, Olmazor branch · Account: 20208000307472214001 · MFO: 01121",
          "Director: Yormatov Abdulaziz G'ayratjon o'g'li",
          "Email: tezcode@tezcode.dev · Telegram: @tezcode_managament · Phone: +998 91 777 66 09",
          "IT Park Uzbekistan resident (certificate No. 7666, 2026-06-18)",
        ],
      },
    ],
  },
  uk: {
    metaTitle: "Публічна оферта — Tezcode",
    metaDescription:
      "Публічна оферта TEZ KOD на надання послуг за підпискою: предмет оферти, ціна та порядок оплати, антифрод-заходи, реквізити сторін.",
    versionLabel: "Правовий документ · v1.1 — 22.07.2026",
    heading: "Публічна оферта",
    subheading:
      "Договір оферти на надання послуг за підпискою TEZ KOD — ст. 369-370 ЦК Республіки Узбекистан.",
    sections: [
      {
        title: "1. Загальні положення",
        body: [
          "Цей документ є публічною офертою ТОВ «TEZ KOD» (СТІР 313057467, резидент IT Park Узбекистану) відповідно до ст. 369 Цивільного кодексу Республіки Узбекистан.",
          "Акцептом оферти (ст. 370 ЦК) вважається момент оплати однієї з послуг — RAOS, CoreMed, WeWatch, Zzone або savdo-builder. З моменту оплати договір вважається укладеним у письмовій формі.",
        ],
      },
      {
        title: "2. Предмет оферти",
        body: [
          "TEZ KOD надає право використання програмного забезпечення за моделлю SaaS на умовах підписки: RAOS — POS-система для роздрібної торгівлі, CoreMed — медична екосистема (клініки, пацієнти, виклик додому), WeWatch — сервіс спільного перегляду відео з голосовим чатом, Zzone — платформа пошуку та купівлі автозапчастин, savdo-builder — платформа для ринків і торгових точок.",
          "Ціни, функціональність і тарифні плани кожного продукту вказані на сайті відповідного продукту та є невід'ємною частиною цієї оферти.",
        ],
      },
      {
        title: "3. Ціна, порядок оплати та повернення коштів",
        body: [
          "Вартість послуги визначається згідно з тарифом, вказаним на сайті відповідного продукту. Оплата здійснюється через платіжні системи Payme, Click та Uzum Pay — мобільним застосунком або банківською карткою (Uzcard, Humo, Visa, Mastercard).",
          "TEZ KOD не зберігає і не бачить реквізити картки (номер, термін дії, CVV) — усі платежі проходять через інфраструктуру ліцензованих платіжних систем.",
          "Повернення коштів (Refund). Клієнт може подати запит на повернення сплачених коштів у таких випадках: (1) якщо послугу не було надано з технічних причин; (2) якщо платіж здійснено помилково або повторно (двічі).",
          "Запит на повернення надсилається на tezcode@tezcode.dev. Після розгляду запиту кошти повертаються тим самим способом, яким було здійснено оплату (на картку), зазвичай протягом 10 (десяти) робочих днів — відповідно до правил банку та платіжної системи.",
          "Оплата за вже використаний період підписки поверненню не підлягає. Невикористаний (залишковий) період підписки може бути повернено за запитом Клієнта. Повні умови — tezcode.dev/terms.",
        ],
      },
      {
        title: "4. Антифрод-заходи та обмеження операцій",
        body: [
          "Усі платежі карткою проходять через ліцензовані платіжні системи Payme, Click та Uzum Pay. Для запобігання підозрілим або нетиповим операціям застосовуються ліміти на разову, денну та місячну суму операцій — узгоджені з антифрод-системами платіжних систем і банків-партнерів.",
          "У разі виявлення підозрілої операції платіжна система або банк можуть тимчасово призупинити її та запросити у користувача додаткове підтвердження — TEZ KOD самостійно не скасовує і не форсує операцію в цьому випадку. У разі підозри на шахрайство: tezcode@tezcode.dev або Telegram @tezcode_managament.",
        ],
      },
      {
        title: "5. Права та обов'язки сторін",
        body: [
          "TEZ KOD зобов'язується забезпечувати працездатність сервісу, технічну підтримку та конфіденційність даних (детальніше: tezcode.dev/privacy).",
          "Користувач зобов'язується вчасно здійснювати оплату, використовувати сервіс у законних цілях і зберігати конфіденційність облікових даних.",
        ],
      },
      {
        title: "6. Відповідальність",
        body: [
          "TEZ KOD не несе відповідальності за непрямі, випадкові збитки чи втрачений прибуток. Максимальна відповідальність обмежена сумою, сплаченою за останні 12 місяців. Повні умови — tezcode.dev/terms, розділ 9.",
        ],
      },
      {
        title: "7. Строк дії та скасування",
        body: [
          "Оферта діє безстроково. Користувач може скасувати підписку в будь-який момент — плата за період після скасування не стягується. TEZ KOD залишає за собою право заблокувати обліковий запис за грубе порушення умов.",
        ],
      },
      {
        title: "8. Порядок вирішення спорів",
        body: [
          "Ця оферта регулюється законодавством Республіки Узбекистан. Спори вирішуються шляхом переговорів, а в разі недосягнення згоди — в Ташкентському міському економічному суді.",
        ],
      },
      {
        title: "9. Реквізити виконавця",
        body: [
          "ТОВ «TEZ KOD» (\"TEZ KOD\" MAS'ULIYATI CHEKLANGAN JAMIYATI)",
          "СТІР: 313 057 467",
          "Юридична адреса: Toshkent sh., Olmazor tumani, Chuqursoy MFY, Qora-Qamish 1/4 dahasi, 20-uy, 19-xonadon",
          "Банк: Davr Bank AT, філія Olmazor · Розрахунковий рахунок: 20208000307472214001 · МФО: 01121",
          "Директор: Йорматов Абдулазіз Гайратжонович",
          "Email: tezcode@tezcode.dev · Telegram: @tezcode_managament · Тел: +998 91 777 66 09",
          "Резидент IT Park Uzbekistan (свідоцтво № 7666, 18.06.2026)",
        ],
      },
    ],
  },
  ar: {
    metaTitle: "العرض العام — Tezcode",
    metaDescription:
      "العرض العام لشركة TEZ KOD لتقديم خدمات الاشتراك: موضوع العرض، السعر وطريقة الدفع، إجراءات مكافحة الاحتيال، بيانات الأطراف.",
    versionLabel: "وثيقة قانونية · الإصدار 1.1 — 2026-07-22",
    heading: "العرض العام",
    subheading:
      "عقد العرض العام لتقديم خدمات اشتراك TEZ KOD — المادتان 369-370 من القانون المدني لأوزبكستان.",
    sections: [
      {
        title: "1. أحكام عامة",
        body: [
          "يُعدّ هذا المستند عرضًا عامًا صادرًا عن شركة TEZ KOD ذ.م.م. (الرقم الضريبي STIR 313057467، مقيمة في IT Park أوزبكستان) وفقًا للمادة 369 من القانون المدني لجمهورية أوزبكستان.",
          "يُعتبر قبول العرض (المادة 370 من القانون المدني) لحظة سداد قيمة إحدى الخدمات — RAOS أو CoreMed أو WeWatch أو Zzone أو savdo-builder. ومنذ لحظة الدفع يُعدّ العقد مبرمًا كتابيًا.",
        ],
      },
      {
        title: "2. موضوع العرض",
        body: [
          "تمنح TEZ KOD حق استخدام البرمجيات بنموذج SaaS مقابل اشتراك: RAOS — نظام نقاط بيع للتجارة بالتجزئة، CoreMed — منظومة صحية رقمية (عيادات، مرضى، زيارات منزلية)، WeWatch — خدمة مشاهدة الفيديو المشتركة مع دردشة صوتية، Zzone — منصة للبحث عن قطع غيار السيارات وشرائها، savdo-builder — منصة للأسواق ونقاط البيع.",
          "تُعرض أسعار كل منتج ووظائفه وخطط أسعاره على موقع المنتج المعني، وتُعدّ جزءًا لا يتجزأ من هذا العرض.",
        ],
      },
      {
        title: "3. السعر وطريقة الدفع واسترداد الأموال",
        body: [
          "يُحدَّد سعر الخدمة وفق التعرفة المعلنة على موقع المنتج المعني. تتم عملية الدفع عبر أنظمة Payme وClick وUzum Pay — من خلال التطبيق أو بطاقة مصرفية (Uzcard وHumo وVisa وMastercard).",
          "لا تحتفظ TEZ KOD ببيانات البطاقة (الرقم، تاريخ الانتهاء، رمز CVV) ولا تراها — تمر جميع المدفوعات عبر بنية أنظمة الدفع المرخّصة.",
          "استرداد الأموال (Refund). يجوز للعميل طلب استرداد المبالغ المدفوعة في الحالات التالية: (1) إذا لم تُقدَّم الخدمة لأسباب تقنية؛ (2) إذا تمّ الدفع بالخطأ أو بشكل مكرَّر (مرتين).",
          "يُرسَل طلب الاسترداد إلى tezcode@tezcode.dev. وبعد مراجعة الطلب، تُعاد الأموال بنفس وسيلة الدفع المستخدمة (إلى البطاقة)، عادةً خلال 10 (عشرة) أيام عمل — وفقًا لقواعد البنك ونظام الدفع.",
          "المبلغ المدفوع عن فترة الاشتراك المُستخدَمة بالفعل غير قابل للاسترداد. أمّا فترة الاشتراك غير المُستخدَمة (المتبقية) فيمكن استردادها بناءً على طلب العميل. الشروط الكاملة: tezcode.dev/terms.",
        ],
      },
      {
        title: "4. إجراءات مكافحة الاحتيال وحدود العمليات",
        body: [
          "تمر جميع المدفوعات بالبطاقة عبر أنظمة دفع مرخّصة — Payme وClick وUzum Pay. لمنع العمليات المشبوهة أو غير الاعتيادية، تُطبَّق حدود على قيمة العملية الواحدة والحد اليومي والشهري — بالتنسيق مع أنظمة مكافحة الاحتيال لدى أنظمة الدفع والبنوك الشريكة.",
          "عند اكتشاف عملية مشبوهة، يجوز لنظام الدفع أو البنك تعليقها مؤقتًا وطلب تأكيد إضافي من المستخدم — ولا تقوم TEZ KOD في هذه الحالة بإلغاء العملية أو إتمامها من جانبها بشكل مستقل. عند الاشتباه بالاحتيال: tezcode@tezcode.dev أو تيليجرام @tezcode_managament.",
        ],
      },
      {
        title: "5. حقوق والتزامات الطرفين",
        body: [
          "تلتزم TEZ KOD بضمان تشغيل الخدمة والدعم الفني وسرية البيانات (التفاصيل: tezcode.dev/privacy).",
          "يلتزم المستخدم بالسداد في موعده، واستخدام الخدمة لأغراض مشروعة، والحفاظ على سرية بيانات حسابه.",
        ],
      },
      {
        title: "6. المسؤولية",
        body: [
          "لا تتحمل TEZ KOD المسؤولية عن الأضرار غير المباشرة أو العرضية أو الأرباح الضائعة. تقتصر المسؤولية القصوى على المبلغ المدفوع خلال آخر 12 شهرًا. الشروط الكاملة: tezcode.dev/terms، القسم 9.",
        ],
      },
      {
        title: "7. مدة السريان والإلغاء",
        body: [
          "يسري هذا العرض لأجل غير مسمى. يمكن للمستخدم إلغاء اشتراكه في أي وقت — ولا تُستحق أي رسوم عن الفترة التالية للإلغاء. تحتفظ TEZ KOD بحق إيقاف الحساب في حال الإخلال الجسيم بالشروط.",
        ],
      },
      {
        title: "8. تسوية المنازعات",
        body: [
          "يخضع هذا العرض لقوانين جمهورية أوزبكستان. تُسوَّى المنازعات عبر التفاوض، وفي حال تعذّر ذلك تُنظر في محكمة طشقند الاقتصادية.",
        ],
      },
      {
        title: "9. بيانات الطرف المنفّذ",
        body: [
          "شركة TEZ KOD ذ.م.م. (\"TEZ KOD\" MAS'ULIYATI CHEKLANGAN JAMIYATI)",
          "الرقم الضريبي (STIR): 313 057 467",
          "العنوان المسجَّل: Toshkent sh., Olmazor tumani, Chuqursoy MFY, Qora-Qamish 1/4 dahasi, 20-uy, 19-xonadon",
          "البنك: Davr Bank AT، فرع Olmazor · رقم الحساب: 20208000307472214001 · MFO: 01121",
          "المدير: Yormatov Abdulaziz G'ayratjon o'g'li",
          "البريد الإلكتروني: tezcode@tezcode.dev · تيليجرام: @tezcode_managament · الهاتف: +998 91 777 66 09",
          "مقيمة في IT Park أوزبكستان (شهادة رقم 7666، بتاريخ 2026-06-18)",
        ],
      },
    ],
  },
};
