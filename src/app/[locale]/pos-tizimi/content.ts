import type { ServicePageContent } from "@/components/service-page/types";

// Content for /pos-tizimi — target keywords: "POS tizimi", "POS dasturi Toshkent",
// "kassa dasturi", "do'kon avtomatlashtirish", "POS система Узбекистан",
// "программа для магазина", "POS system Uzbekistan". Product: RAOS (offline-first POS).
// AEO upgrade (2026-07-05): answer-first hero subtitle, 8 capabilities, tech +
// pricing sections, 12 FAQs per locale, visible "updated" freshness line.
// Intent-query FAQ update (2026-07-06): +3 first-person hiring-intent FAQs
// per locale (15 total) for answer-engine matching.
// Only confirmed facts. No fabricated client counts, honest ranges only.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "POS tizimi — RAOS · Tezcode",
      title1: "Do'koningiz uchun",
      titleAccent: "POS tizimi — RAOS",
      title2: "",
      subtitle:
        "POS tizimi kassadagi sotuvni ombor qoldig'i va hisobot bilan bog'laydi. RAOS'da sotuvchi mahsulotni skanerlaydi, sotuv qayd etiladi va qoldiq yangilanadi. Kassa internetsiz ham ishlaydi; aloqa tiklangach ma'lumotlar sinxronlanadi. Tezcode tizimni Toshkent va butun O'zbekiston do'konlariga joriy qiladi. Obuna 249 000 so'm/oydan, boshlash uchun bepul demo bor.",
      trust: "IT Park rezidenti • Bepul demo • Internetsiz ishlaydi • Toshkent va butun O'zbekiston",
      ctaPrimary: "Bepul demo so'rang",
      ctaSecondary: "RAOS nima qila oladi?",
    },
    capabilities: {
      badge: "Imkoniyatlar",
      title: "RAOS POS",
      titleAccent: "nima qila oladi?",
      subtitle:
        "Bitta do'kondan tarmoqgacha — sotuv, ombor, mijoz va hisobotni bir joydan boshqaring. Kassa internetsiz ham to'xtamaydi.",
      items: [
        { icon: "receipt", title: "Kassa (POS)", desc: "Tez sotuv: barkod skaner, chek chiqarish, naqd/karta/aralash to'lov, smena yopish. Interfeys sodda — sotuvchi bir necha daqiqada o'rganadi." },
        { icon: "package", title: "Ombor qoldig'i, kirim va chiqim", desc: "Mahsulot kirimi qoldiqni oshiradi, sotuv esa kamaytiradi. Inventarizatsiyada dasturdagi miqdorni amalda sanalgan tovar bilan solishtirasiz. Kam qolganda ogohlantirish va filiallar kesimidagi hisob xaridni rejalashga yordam beradi." },
        { icon: "wifi", title: "Internetsiz ishlaydi (offline-first)", desc: "Internet uzilsa ham kassa ishlaydi — ma'lumot lokalda saqlanadi, ulanish tiklanganda avtomatik sinxronlanadi. O'zbekiston sharoiti uchun muhim." },
        { icon: "users", title: "Mijozlar va sodiqlik", desc: "Mijoz bazasi, qarz/nasiya daftari, chegirma va sodiqlik (loyalty) dasturi. Mijoz tarixi va qarzi bir bosishda ko'rinadi." },
        { icon: "bar-chart-2", title: "Hisobot va analitika", desc: "Kunlik sotuv, foyda, eng ko'p sotilgan mahsulot, sotuvchi samaradorligi — hisobotlar avtomatik yig'iladi, qo'lda hech narsa hisoblamaysiz." },
        { icon: "store", title: "Ko'p filial / tarmoq", desc: "Bir nechta do'konni bitta dashboarddan boshqaring. Har filial qoldig'i va sotuvi alohida ko'rinadi, narxlar markazdan nazorat qilinadi." },
        { icon: "monitor", title: "Savdo uskunalari bilan tayyor ishlaydi", desc: "Barkod skaner, chek printer va kassa qutisi — standart savdo uskunalariga ulanadi. Kompyuter, planshet va Windows POS qurilmalarida ishlaydi." },
        { icon: "clipboard-list", title: "Sotuvchi va smena nazorati", desc: "Har sotuvchining smenasi, sotuvlari va kassadagi puli alohida hisoblanadi. Smena yopilganda hisobot avtomatik — kim qancha sotgani aniq ko'rinadi." },
      ],
    },
    process: {
      badge: "Qanday boshlaymiz",
      title: "4 qadamda",
      titleAccent: "ishlovchi POS'ga",
      subtitle: "Birinchi demo bepul. Keyin har qadam aniq narx va aniq muddat bilan — hammasi yozma.",
      steps: [
        { num: "01", title: "Bepul demo", desc: "RAOS'ni do'koningiz misolida jonli ko'rsatamiz — kassa, ombor va hisobotni o'zingiz sinab ko'rasiz. Majburiyat yo'q: mos kelmasa, ochiq aytamiz.", icon: "message-circle" },
        { num: "02", title: "Sozlash + ma'lumot ko'chirish", desc: "Mahsulot bazasi, narxlar, filiallar va chegirmalarni do'koningizga moslab sozlaymiz. Excel yoki eski tizimdagi ma'lumotlarni RAOS'ga ko'chiramiz — noldan boshlamaysiz.", icon: "wrench" },
        { num: "03", title: "O'rgatish", desc: "Sotuvchi va kassirlarni ish jarayonida o'rgatamiz, qo'llanma beramiz. RAOS interfeysi sodda — odatda tez o'rganiladi.", icon: "zap" },
        { num: "04", title: "Ishga tushirish + qo'llab-quvvatlash", desc: "Jonli ishga tushiramiz, dastlabki kunlarda ishlashini kuzatamiz va savollarga doimo javob beramiz. Yangilanishlar obunaga kiradi.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Kimlar uchun",
      title: "RAOS qaysi",
      titleAccent: "do'konlar uchun?",
      subtitle: "Har savdo nuqtasi — RAOS uchun mos. Eng ko'p ishlatiladigan yo'nalishlar.",
      items: [
        { tag: "01", title: "Oziq-ovqat va do'konlar", desc: "Tez kassa, barkod, qoldiq nazorati. Navbatni tezlashtiradi, kamomadni kamaytiradi — har sotuv hisobda." },
        { tag: "02", title: "Kiyim, kosmetika, elektronika", desc: "Variant (o'lcham/rang), mijoz bazasi, chegirma va sodiqlik dasturi — doimiy mijozlar qaytib keladi." },
        { tag: "03", title: "Ko'p filialli tarmoq", desc: "Barcha filial bitta tizimda — markazdan narx, qoldiq va hisobot nazorati. Har filial alohida ham ko'rinadi." },
        { tag: "04", title: "Restoran va kafe", desc: "Stol/buyurtma, oshxona chiqishi, smena hisobi — savdo nuqtasi turiga moslashtiriladi." },
      ],
    },
    tech: {
      badge: "Texnologiya",
      title: "RAOS qanday",
      titleAccent: "qurilgan?",
      subtitle:
        "RAOS — Tezcode'ning o'z mahsuloti: tayyor xorijiy dasturga vositachi emasmiz, tizimni o'zimiz ishlab chiqamiz va rivojlantiramiz.",
      items: [
        { name: "Offline-first arxitektura", desc: "Ma'lumot avval qurilmaning o'zida (lokal bazada) saqlanadi, internet bo'lganda bulutga sinxronlanadi. Shu tufayli internet uzilganda ham kassa to'xtamaydi va hech bir sotuv yo'qolmaydi." },
        { name: "Bulutli sinxronizatsiya va veb-dashboard", desc: "Sotuv va qoldiq ma'lumotlari markaziy tizimga yig'iladi. Do'kon egasi istalgan joydan brauzer orqali dashboardga kirib, holatni real vaqtda ko'radi." },
        { name: "Barkod va chek uskunalari", desc: "Standart barkod skanerlar, chek printerlar va kassa qutilari qo'llab-quvvatlanadi. Kompyuter, planshet va Windows POS qurilmalarida ishlaydi — maxsus qimmat uskuna shart emas." },
        { name: "AI tahlil qatlami", desc: "RAOS ichida AI sotuv ma'lumotlarini avtomatik yig'ib tahlil qiladi. Tezcode AI yechimlarni mijozga taklif qilishdan oldin o'z mahsulotida sinaydi." },
        { name: "Doimiy yangilanishlar", desc: "RAOS obuna modelida ishlaydi: yangi funksiyalar va yaxshilanishlar barcha foydalanuvchilarga avtomatik yetib boradi, alohida to'lov yo'q." },
        { name: "Toshkentdagi in-house jamoa", desc: "RAOS'ni Tezcode'ning Toshkentdagi doimiy jamoasi ishlab chiqadi va qo'llab-quvvatlaydi. Tezcode — IT Park rasmiy rezidenti, rasmiy shartnoma bilan ishlaymiz." },
      ],
    },
    pricing: {
      badge: "Narx",
      title: "Narx nimaga",
      titleAccent: "bog'liq?",
      subtitle:
        "RAOS obunasi 249 000 so'm/oydan boshlanadi. Yakuniy tarif kassalar, filiallar va kerakli moslashtirishga bog'liq. Dastur obunasi, uskunalar va joriy etish ishlarining narxini demodan keyingi yozma taklifda aniqlashtiramiz.",
      factors: [
        { title: "Do'kon hajmi va kassalar soni", desc: "Bitta kichik do'konmi yoki bir nechta kassali yirik savdo nuqtasimi — obuna narxi shu hajmga mos belgilanadi. Kichik do'kon katta tarmoq narxini to'lamaydi." },
        { title: "Filiallar soni", desc: "Ko'p filialli tarmoqda har filial tizimga ulanadi va markaziy dashboardda ko'rinadi — narx filiallar soniga qarab hisoblanadi." },
        { title: "Joriy etish va moslashtirish", desc: "Ma'lumot ko'chirish, sozlash va o'rgatish joriy etish bosqichiga kiradi. Maxsus buyurtma moslashtirishlar alohida baholanadi — bunday ishlarda to'lov: 30% oldindan." },
      ],
      note:
        "Aniq narx bepul demodan keyin yozma taklifda beriladi. Yashirin to'lovlar yo'q — hammasi shartnomada. Savollar uchun: +998 91 777 66 09 yoki tezcode@tezcode.dev.",
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Do'koningizni",
      titleAccent: "RAOS'ga ko'chiraylikmi?",
      subtitle: "Bepul demoda RAOS sizning do'koningizda qanday ishlashini ko'rasiz. Majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "POS tanlash, ombor qoldig'i, narx va joriy etish haqida savol-javoblar.",
      items: [
        { q: "O'zbekistonda qaysi POS tizimni tanlagan ma'qul?", a: "To'rt mezonga qarang: internet uzilganda ham ishlashi, mahalliy jamoa qo'llab-quvvatlashi, filiallarni bitta tizimda boshqarish va do'kon hajmiga mos narx. Bulutli tizimlar (MoySklad, Paloma365) barqaror internet talab qiladi, RAOS esa offline-first — aloqa uzilsa ham kassa to'xtamaydi; Soliq.uz (fiskalizatsiya) integratsiyasi va Telegram'ga AI hisobotlar ham bor. RAOS'ni Toshkentdagi Tezcode jamoasi ishlab chiqadi va qo'llab-quvvatlaydi; narxi 249 000 so'm/oydan, 30 kun bepul (karta shart emas). Eng ishonchli yo'l — bepul demo: +998 91 777 66 09 ga qo'ng'iroq qiling yoki Telegram'da yozing, majburiyat yo'q." },
        { q: "RAOS internetsiz ishlaydimi?", a: "Ha. RAOS offline-first — internet uzilsa ham kassa to'xtamaydi: ma'lumot qurilmaning o'zida saqlanadi va ulanish tiklanganda avtomatik sinxronlanadi, hech bir sotuv yo'qolmaydi, zaxira nusxasi esa bulutda ham saqlanadi. Shuni hisobga oling: aloqa uzilgan davrda boshqa filial yoki markaziy panel qoldiqni oxirgi sinxronlash holatida ko'radi va eng yangi ma'lumotni ulanish tiklangach oladi." },
        { q: "Narxi qancha va to'lov qanday?", a: "RAOS 249 000 so'm/oydan boshlanadi — obuna asosida, katta bir martalik xarid shart emas; 30 kun bepul sinov bor. Aniq tarif do'kon hajmi, kassalar va filiallar soniga bog'liq; bepul demodan keyin yozma taklif beramiz. Maxsus moslashtirish buyurtma qilinsa, to'lov: 30% oldindan. Yashirin to'lovlar yo'q — hammasi shartnomada." },
        { q: "Qancha vaqtda ishga tushadi va mahsulot bazamni ko'chirasizmi?", a: "Oddiy bitta do'kon odatda bir necha kun ichida ishga tushadi: sozlash, ma'lumot ko'chirish va o'rgatish shunga kiradi. Excel yoki eski tizimdagi mahsulot, narx va qoldiqlarni RAOS'ga o'zimiz ko'chiramiz — noldan boshlamaysiz. Ko'p filialli tarmoq yoki katta mahsulot bazasi bo'lsa, 1–2 hafta ketishi mumkin; aniq muddat demodan keyin yozma belgilanadi." },
        { q: "Bir nechta do'konim bor — hammasi bitta tizimdami?", a: "Ha. Ko'p filial qo'llab-quvvatlanadi: har do'kon qoldig'i va sotuvi alohida yuritiladi, lekin markaziy dashboarddan hammasini bir joyda ko'rasiz. Narxlarni markazdan boshqarish ham mumkin." },
      ],
    },
    related: {
      badge: "Bog'liq xizmatlar",
      title: "Sizga yana",
      titleAccent: "foydali bo'lishi mumkin",
      subtitle: "POS bilan birga ko'p ishlatiladigan Tezcode yechimlari.",
      links: [
        {
          href: "/blog/pos-tizimi-tanlash",
          label: "POS tizimini tanlash mezonlari",
          desc: "Narx, offline ishlash, savdo uskunalari va ombor hisobini demoda qanday solishtirish kerak?"
        },
        { href: "/biznes-avtomatlashtirish", label: "Biznes avtomatlashtirish", desc: "Kassadan tashqari jarayonlarni ham avtomatlashtiring — hisobot, buyurtma oqimi va takroriy ishlar bitta tizimda." },
        { href: "/ai-chatbot", label: "AI chatbot", desc: "Do'koningiz uchun 24/7 mijoz xizmati — savollarga javob beradi, buyurtma va lid yig'adi." },
        { href: "/xodim-nazorati", label: "Xodim nazorati", desc: "Sotuvchilar davomati, vazifalari va samaradorligini bitta tizimda kuzating." },
      ],
    },
    updated: "Yangilangan: 2026-yil 5-iyul",
    service: {
      name: "RAOS — do'kon uchun POS tizimi — Tezcode",
      description:
        "O'zbekiston do'konlari uchun POS tizimi RAOS: kassa, ombor, mijoz, hisobot, ko'p filial, sotuvchi/smena nazorati va internetsiz (offline-first) ishlash. Barkod skaner va chek printer bilan. Tezcode — IT Park rezidenti. Toshkent va butun O'zbekiston, bepul demo.",
      serviceType: "POS tizimi / do'kon avtomatlashtirish",
    },
  },

  ru: {
    hero: {
      badge: "POS-система — RAOS · Tezcode",
      title1: "POS-система для",
      titleAccent: "вашего магазина — RAOS",
      title2: "",
      subtitle:
        "POS-система — это программа, которая за секунды оформляет продажу на кассе магазина и одновременно ведёт остатки склада, клиентов и отчёты в одном месте. RAOS — POS-система, работающая даже без интернета (offline-first): подключается к сканеру штрихкода и чек-принтеру, объединяет несколько филиалов в одном дашборде. Её создала и поддерживает Tezcode — AI Software Factory в Ташкенте — для магазинов Узбекистана. Больше никаких таблиц Excel и тетрадей.",
      trust: "Резидент IT Park • Бесплатное демо • Работает без интернета • Ташкент и весь Узбекистан",
      ctaPrimary: "Запросить демо",
      ctaSecondary: "Что умеет RAOS?",
    },
    capabilities: {
      badge: "Возможности",
      title: "Что умеет",
      titleAccent: "RAOS POS?",
      subtitle: "От одного магазина до сети — управляйте продажами, складом, клиентами и отчётами из одного места. Касса не останавливается даже без интернета.",
      items: [
        { icon: "receipt", title: "Касса (POS)", desc: "Быстрые продажи: сканер штрихкода, чек, оплата наличными/картой/смешанная, закрытие смены. Интерфейс прост — продавец осваивает его за несколько минут." },
        { icon: "package", title: "Склад и остатки", desc: "Остаток каждого товара в реальном времени: продажа автоматически уменьшает остаток. Оповещение о малом остатке, приход/расход, инвентаризация." },
        { icon: "wifi", title: "Работает без интернета (offline-first)", desc: "Даже при обрыве связи касса работает — данные хранятся локально и автоматически синхронизируются при восстановлении. Особенно важно в условиях Узбекистана." },
        { icon: "users", title: "Клиенты и лояльность", desc: "База клиентов, долг/рассрочка, скидки и программа лояльности. История и долг клиента видны в один клик." },
        { icon: "bar-chart-2", title: "Отчёты и аналитика", desc: "Дневные продажи, прибыль, топ-товары, эффективность продавцов — отчёты собираются автоматически, вручную ничего считать не нужно." },
        { icon: "store", title: "Сеть / много филиалов", desc: "Управляйте несколькими магазинами из одного дашборда. Остаток и продажи каждого филиала видны отдельно, цены контролируются из центра." },
        { icon: "monitor", title: "Готов к торговому оборудованию", desc: "Сканер штрихкода, чек-принтер и денежный ящик — подключается к стандартному торговому оборудованию. Работает на компьютере, планшете и Windows POS-устройствах." },
        { icon: "clipboard-list", title: "Контроль продавцов и смен", desc: "Смена, продажи и деньги в кассе каждого продавца считаются отдельно. При закрытии смены отчёт формируется автоматически — видно, кто сколько продал." },
      ],
    },
    process: {
      badge: "Как начинаем",
      title: "4 шага до",
      titleAccent: "рабочего POS",
      subtitle: "Первое демо бесплатно. Дальше каждый шаг с точной ценой и сроком — всё письменно.",
      steps: [
        { num: "01", title: "Бесплатное демо", desc: "Показываем RAOS на примере вашего магазина — кассу, склад и отчёты пробуете сами. Без обязательств: если не подойдёт, скажем честно.", icon: "message-circle" },
        { num: "02", title: "Настройка + перенос данных", desc: "База товаров, цены, филиалы и скидки — настраиваем под ваш магазин. Данные из Excel или старой системы переносим в RAOS — с нуля начинать не придётся.", icon: "wrench" },
        { num: "03", title: "Обучение", desc: "Обучаем продавцов и кассиров прямо в работе, даём инструкцию. Интерфейс RAOS прост — обычно осваивается быстро.", icon: "zap" },
        { num: "04", title: "Запуск + поддержка", desc: "Запускаем вживую, в первые дни следим за работой и всегда отвечаем на вопросы. Обновления входят в подписку.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Для кого",
      title: "Для каких",
      titleAccent: "магазинов RAOS?",
      subtitle: "RAOS подходит любой торговой точке. Самые частые направления.",
      items: [
        { tag: "01", title: "Продукты и магазины", desc: "Быстрая касса, штрихкод, контроль остатков. Ускоряет очередь, снижает недостачу — каждая продажа на учёте." },
        { tag: "02", title: "Одежда, косметика, электроника", desc: "Варианты (размер/цвет), база клиентов, скидки и программа лояльности — постоянные клиенты возвращаются." },
        { tag: "03", title: "Сеть с филиалами", desc: "Все филиалы в одной системе — цены, остатки и отчёты под контролем из центра. Каждый филиал виден и по отдельности." },
        { tag: "04", title: "Ресторан и кафе", desc: "Столы/заказы, отправка на кухню, учёт смен — адаптируется под тип точки." },
      ],
    },
    tech: {
      badge: "Технология",
      title: "Как устроен",
      titleAccent: "RAOS?",
      subtitle: "RAOS — собственный продукт Tezcode: мы не перепродаём готовое зарубежное ПО — систему разрабатываем и развиваем сами.",
      items: [
        { name: "Offline-first архитектура", desc: "Данные сначала сохраняются на самом устройстве (в локальной базе), а при наличии интернета синхронизируются с облаком. Поэтому касса не останавливается при обрыве связи, и ни одна продажа не теряется." },
        { name: "Облачная синхронизация и веб-дашборд", desc: "Данные о продажах и остатках собираются в центральной системе. Владелец заходит в дашборд из браузера откуда угодно и видит состояние магазина в реальном времени." },
        { name: "Оборудование: штрихкод и чеки", desc: "Поддерживаются стандартные сканеры штрихкода, чек-принтеры и денежные ящики. Работает на компьютере, планшете и Windows POS-устройствах — специальное дорогое оборудование не требуется." },
        { name: "Слой ИИ-аналитики (AI)", desc: "Внутри RAOS искусственный интеллект (ИИ) автоматически собирает и анализирует данные о продажах. Tezcode тестирует ИИ-решения в собственном продукте, прежде чем предлагать их клиентам." },
        { name: "Постоянные обновления", desc: "RAOS работает по подписке: новые функции и улучшения автоматически доходят до всех пользователей, без отдельной оплаты." },
        { name: "In-house команда в Ташкенте", desc: "RAOS разрабатывает и поддерживает постоянная команда Tezcode в Ташкенте. Tezcode — официальный резидент IT Park, работаем по официальному договору." },
      ],
    },
    pricing: {
      badge: "Цена",
      title: "От чего зависит",
      titleAccent: "стоимость?",
      subtitle:
        "RAOS работает по модели подписки (ежемесячная оплата) — это не крупная разовая покупка. Единой универсальной цены нет: подписка зависит от размера магазина, поэтому точное предложение даём письменно после бесплатного демо.",
      factors: [
        { title: "Размер магазина и число касс", desc: "Один небольшой магазин или крупная точка с несколькими кассами — подписка подбирается под этот масштаб. Маленький магазин не платит цену большой сети." },
        { title: "Количество филиалов", desc: "В сети каждый филиал подключается к системе и виден в центральном дашборде — цена рассчитывается по числу филиалов." },
        { title: "Внедрение и доработки", desc: "Перенос данных, настройка и обучение входят в этап внедрения. Индивидуальные доработки оцениваются отдельно — по таким работам оплата: 30% предоплата." },
      ],
      note:
        "Точная цена даётся письменно после бесплатного демо. Скрытых платежей нет — всё в договоре. Вопросы: +998 91 777 66 09 или tezcode@tezcode.dev.",
    },
    cta: {
      badge: "Время начать",
      title: "Переведём ваш магазин",
      titleAccent: "на RAOS?",
      subtitle: "На бесплатном демо увидите, как RAOS работает в вашем магазине. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Самые частые вопросы о POS-системе RAOS.",
      items: [
        { q: "Какую POS-систему подключить в Узбекистане?", a: "Смотрите на четыре критерия: работа без интернета, поддержка локальной командой, управление филиалами в одной системе и цена по размеру магазина. Облачные системы (МойСклад, Paloma365) требуют стабильного интернета, а RAOS работает offline-first — касса не останавливается при обрыве связи; есть интеграция с Soliq.uz (фискализация) и ИИ-отчёты (AI) в Telegram. RAOS разрабатывает и поддерживает команда Tezcode в Ташкенте; цена — от 249 000 сум/мес, 30 дней бесплатно без карты. Надёжнее всего — бесплатное демо: позвоните на +998 91 777 66 09 или напишите в Telegram, без обязательств." },
        { q: "RAOS работает без интернета?", a: "Да. RAOS offline-first — при обрыве связи касса не останавливается: данные хранятся на самом устройстве и автоматически синхронизируются при восстановлении. Ни одна продажа не теряется, а копия данных хранится и в облаке. Для условий Узбекистана это особенно важно." },
        { q: "Сколько стоит и как устроена оплата?", a: "RAOS — от 249 000 сум/мес по подписке, крупная разовая покупка не нужна; есть 30 дней бесплатно. Точный тариф зависит от размера магазина, числа касс и филиалов; письменное предложение даём после бесплатного демо. Если заказываются индивидуальные доработки — оплата: 30% предоплата. Скрытых платежей нет — всё в договоре." },
        { q: "Как быстро запустится и перенесёте ли мою базу товаров?", a: "Обычный один магазин запускается, как правило, за несколько дней: настройка, перенос данных и обучение. Товары, цены и остатки из Excel или старой системы мы переносим в RAOS сами — с нуля начинать не придётся. Для сети филиалов или большой базы товаров может уйти 1–2 недели; точный срок фиксируем письменно после демо." },
        { q: "У меня несколько магазинов — всё в одной системе?", a: "Да. Поддерживается несколько филиалов: остатки и продажи каждого магазина ведутся отдельно, но всё видно из центрального дашборда. Ценами можно управлять из центра." },
      ],
    },
    related: {
      badge: "Связанные услуги",
      title: "Вам также может",
      titleAccent: "быть полезно",
      subtitle: "Решения Tezcode, которые часто используют вместе с POS.",
      links: [
        { href: "/biznes-avtomatlashtirish", label: "Автоматизация бизнеса", desc: "Автоматизируйте процессы за пределами кассы — отчёты, поток заказов и рутинные задачи в одной системе." },
        { href: "/ai-chatbot", label: "ИИ-чат-бот (AI)", desc: "Клиентский сервис 24/7 для вашего магазина — отвечает на вопросы, собирает заказы и лиды." },
        { href: "/xodim-nazorati", label: "Контроль сотрудников", desc: "Посещаемость, задачи и продуктивность продавцов в одной системе." },
      ],
    },
    updated: "Обновлено: 5 июля 2026",
    service: {
      name: "RAOS — POS-система для магазина — Tezcode",
      description:
        "POS-система RAOS для магазинов Узбекистана: касса, склад, клиенты, отчёты, мультифилиал, контроль продавцов/смен и работа без интернета (offline-first). Со сканером штрихкода и чек-принтером. Tezcode — резидент IT Park. Ташкент и весь Узбекистан, бесплатное демо.",
      serviceType: "POS-система / автоматизация магазина",
    },
  },

  en: {
    hero: {
      badge: "POS system — RAOS · Tezcode",
      title1: "A POS system for",
      titleAccent: "your store — RAOS",
      title2: "",
      subtitle:
        "A POS system is software that rings up a sale at the store register in seconds while keeping inventory, customers and reports in one place. RAOS is an offline-first POS system: it keeps working without internet, connects to barcode scanners and receipt printers, and unites several branches in one dashboard. It is built and supported by Tezcode — an AI Software Factory in Tashkent — for stores in Uzbekistan. No more Excel and notebooks.",
      trust: "IT Park resident • Free demo • Works offline • Tashkent and all of Uzbekistan",
      ctaPrimary: "Request a demo",
      ctaSecondary: "What can RAOS do?",
    },
    capabilities: {
      badge: "Capabilities",
      title: "What can",
      titleAccent: "RAOS POS do?",
      subtitle: "From a single store to a chain — manage sales, inventory, customers and reports from one place. The register doesn't stop even without internet.",
      items: [
        { icon: "receipt", title: "Register (POS)", desc: "Fast sales: barcode scanner, receipts, cash/card/split payment, shift close. The interface is simple — a cashier learns it in minutes." },
        { icon: "package", title: "Inventory & stock", desc: "Every item's stock in real time: each sale reduces stock automatically. Low-stock alerts, stock in/out, stocktaking." },
        { icon: "wifi", title: "Works offline (offline-first)", desc: "Even if the internet drops, the register keeps working — data is stored locally and syncs automatically when back online. Important for Uzbekistan's conditions." },
        { icon: "users", title: "Customers & loyalty", desc: "Customer base, credit/installments ledger, discounts and a loyalty program. Customer history and debt in one click." },
        { icon: "bar-chart-2", title: "Reports & analytics", desc: "Daily sales, profit, top products, cashier performance — reports build themselves, no manual counting." },
        { icon: "store", title: "Multi-branch / chain", desc: "Manage several stores from one dashboard. Each branch's stock and sales tracked separately, prices controlled from the centre." },
        { icon: "monitor", title: "Ready for retail hardware", desc: "Barcode scanner, receipt printer and cash drawer — connects to standard retail hardware. Runs on computers, tablets and Windows POS devices." },
        { icon: "clipboard-list", title: "Staff & shift control", desc: "Each salesperson's shift, sales and cash are counted separately. When the shift closes, the report is automatic — you see exactly who sold what." },
      ],
    },
    process: {
      badge: "How we start",
      title: "4 steps to a",
      titleAccent: "working POS",
      subtitle: "The first demo is free. Then every step has a clear price and a clear timeline — all in writing.",
      steps: [
        { num: "01", title: "Free demo", desc: "We show RAOS on the example of your store — you try the register, inventory and reports yourself. No obligations: if it's not a fit, we say so honestly.", icon: "message-circle" },
        { num: "02", title: "Setup + data migration", desc: "Product base, prices, branches and discounts — configured for your store. We move your data from Excel or the old system into RAOS, so you don't start from scratch.", icon: "wrench" },
        { num: "03", title: "Training", desc: "We train your salespeople and cashiers on the job and provide a guide. The RAOS interface is simple — usually learned fast.", icon: "zap" },
        { num: "04", title: "Launch + support", desc: "We go live, monitor the first days and always answer your questions. Updates are included in the subscription.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Who it's for",
      title: "Which stores",
      titleAccent: "is RAOS for?",
      subtitle: "Any point of sale fits RAOS. The most common cases.",
      items: [
        { tag: "01", title: "Groceries & shops", desc: "Fast register, barcode, stock control. Speeds up the queue, reduces shrinkage — every sale is accounted for." },
        { tag: "02", title: "Clothing, cosmetics, electronics", desc: "Variants (size/color), customer base, discounts and a loyalty program — regulars keep coming back." },
        { tag: "03", title: "Multi-branch chain", desc: "All branches in one system — prices, stock and reports controlled from the centre. Each branch is also visible on its own." },
        { tag: "04", title: "Restaurant & cafe", desc: "Tables/orders, kitchen tickets, shift accounting — adapted to the type of venue." },
      ],
    },
    tech: {
      badge: "Technology",
      title: "How is RAOS",
      titleAccent: "built?",
      subtitle: "RAOS is Tezcode's own product: we are not resellers of foreign off-the-shelf software — we build and evolve the system ourselves.",
      items: [
        { name: "Offline-first architecture", desc: "Data is saved on the device itself first (in a local database) and syncs to the cloud when internet is available. That's why the register doesn't stop when the connection drops, and no sale is lost." },
        { name: "Cloud sync & web dashboard", desc: "Sales and stock data are collected in a central system. The owner opens the dashboard from a browser anywhere and sees the store's state in real time." },
        { name: "Barcode & receipt hardware", desc: "Standard barcode scanners, receipt printers and cash drawers are supported. Runs on computers, tablets and Windows POS devices — no special expensive hardware required." },
        { name: "AI analytics layer", desc: "Inside RAOS, AI gathers and analyses sales data automatically. Tezcode tests AI solutions in its own product before offering them to clients." },
        { name: "Continuous updates", desc: "RAOS runs on a subscription model: new features and improvements reach all users automatically, at no extra charge." },
        { name: "In-house team in Tashkent", desc: "RAOS is built and supported by Tezcode's permanent team in Tashkent. Tezcode is an official IT Park resident; we work under an official contract." },
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "What does the price",
      titleAccent: "depend on?",
      subtitle:
        "RAOS runs on a subscription (monthly payment) model — not a large one-off purchase. There is no single universal price: the subscription depends on your store's size, so we give an exact quote in writing after the free demo.",
      factors: [
        { title: "Store size & number of registers", desc: "One small shop or a large point of sale with several registers — the subscription is matched to that scale. A small store doesn't pay a big chain's price." },
        { title: "Number of branches", desc: "In a chain, each branch connects to the system and appears in the central dashboard — the price is calculated by the number of branches." },
        { title: "Rollout & customisation", desc: "Data migration, setup and training are part of the rollout stage. Custom-built modifications are quoted separately — for such work, payment: 30% upfront." },
      ],
      note:
        "The exact price comes in a written quote after the free demo. No hidden fees — everything is in the contract. Questions: +998 91 777 66 09 or tezcode@tezcode.dev.",
    },
    cta: {
      badge: "Time to start",
      title: "Move your store",
      titleAccent: "to RAOS?",
      subtitle: "In a free demo you'll see how RAOS works in your store. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "The most common questions about the RAOS POS system.",
      items: [
        { q: "Which POS system should I choose in Uzbekistan?", a: "Look at four criteria: whether it keeps working when the internet drops, support from a local team, multi-branch management in one system, and a price that matches your store's size. Cloud systems (MoySklad, Paloma365) need a stable connection, while RAOS is offline-first — the register keeps working when the internet drops; it also integrates with Soliq.uz (fiscalization) and sends AI reports to Telegram. RAOS is built and supported by Tezcode's team in Tashkent and starts at 249,000 UZS/month with a 30-day free trial, no card required. The most reliable way to decide is a free demo: call +998 91 777 66 09 or message us on Telegram, with no obligations." },
        { q: "Does RAOS work without internet?", a: "Yes. RAOS is offline-first — if the connection drops the register keeps working: data is stored on the device itself and syncs automatically when back online. No sale is lost, and a backup copy is also kept in the cloud. For Uzbekistan's conditions this matters a lot." },
        { q: "How much does it cost and how does payment work?", a: "RAOS starts from 249,000 UZS/month on a subscription — no large one-off purchase needed, with a 30-day free trial. The exact plan depends on store size, the number of registers and branches; we give a written quote after the free demo. If custom modifications are ordered, payment is 30% upfront. No hidden fees — everything is in the contract." },
        { q: "How fast does it launch, and can you migrate my product base?", a: "A typical single store usually launches within a few days: setup, data migration and training included. We move products, prices and stock from Excel or your old system into RAOS ourselves — you don't start from scratch. A multi-branch chain or a large product base can take 1–2 weeks; the exact timeline is fixed in writing after the demo." },
        { q: "I have several stores — all in one system?", a: "Yes. Multiple branches are supported: each store's stock and sales are tracked separately, but you see everything from a central dashboard. Prices can be managed from the centre too." },
      ],
    },
    related: {
      badge: "Related services",
      title: "You may also",
      titleAccent: "find useful",
      subtitle: "Tezcode solutions often used together with a POS.",
      links: [
        { href: "/biznes-avtomatlashtirish", label: "Business automation", desc: "Automate beyond the register — reports, order flow and repetitive tasks in one system." },
        { href: "/ai-chatbot", label: "AI chatbot", desc: "24/7 customer service for your store — answers questions, collects orders and leads." },
        { href: "/xodim-nazorati", label: "Employee monitoring", desc: "Attendance, tasks and productivity of your staff in one system." },
      ],
    },
    updated: "Updated: July 5, 2026",
    service: {
      name: "RAOS — POS system for retail — Tezcode",
      description:
        "RAOS POS system for stores in Uzbekistan: register, inventory, customers, reports, multi-branch, staff/shift control and offline-first operation. Works with barcode scanners and receipt printers. Tezcode — IT Park resident. Tashkent and all of Uzbekistan, free demo.",
      serviceType: "POS system / retail automation",
    },
  },

  ar: {
    hero: {
      badge: "نظام POS — RAOS · Tezcode",
      title1: "نظام POS",
      titleAccent: "لمتجرك — RAOS",
      title2: "",
      subtitle:
        "نظام POS هو برنامج يُسجِّل البيع على كاشير المتجر خلال ثوانٍ، ويدير في الوقت نفسه أرصدة المخزون والعملاء والتقارير في مكان واحد. RAOS نظام POS يعمل حتى بدون إنترنت (offline-first): يتصل بماسح الباركود وطابعة الإيصالات، ويجمع عدة فروع في لوحة واحدة. طوّرته وتدعمه Tezcode — مصنع برمجيات AI في طشقند — لمتاجر أوزبكستان. لا مزيد من Excel والدفاتر.",
      trust: "مقيم رسمي في IT Park • عرض تجريبي مجاني • يعمل بدون إنترنت • طشقند وكل أوزبكستان",
      ctaPrimary: "اطلب عرضاً تجريبياً",
      ctaSecondary: "ماذا يفعل RAOS؟",
    },
    capabilities: {
      badge: "الإمكانيات",
      title: "ماذا يفعل",
      titleAccent: "RAOS POS؟",
      subtitle: "من متجر واحد إلى سلسلة — أدر المبيعات والمخزون والعملاء والتقارير من مكان واحد. الكاشير لا يتوقف حتى بدون إنترنت.",
      items: [
        { icon: "receipt", title: "الكاشير (POS)", desc: "بيع سريع: ماسح باركود، إيصال، دفع نقدي/بطاقة/مختلط، إغلاق الوردية. الواجهة بسيطة — يتعلمها البائع في دقائق." },
        { icon: "package", title: "المخزون والأرصدة", desc: "رصيد كل منتج في الوقت الفعلي: كل عملية بيع تخفض الرصيد تلقائياً. تنبيه عند انخفاض المخزون، إدخال/إخراج، جرد." },
        { icon: "wifi", title: "يعمل بدون إنترنت (offline-first)", desc: "حتى عند انقطاع الاتصال يستمر الكاشير — تُخزَّن البيانات محلياً وتُزامَن تلقائياً عند عودة الاتصال. مهم لظروف أوزبكستان." },
        { icon: "users", title: "العملاء والولاء", desc: "قاعدة العملاء، دفتر الدين/التقسيط، الخصومات وبرنامج الولاء. سجل العميل ودينه بنقرة واحدة." },
        { icon: "bar-chart-2", title: "التقارير والتحليلات", desc: "مبيعات يومية، أرباح، أكثر المنتجات مبيعاً، أداء البائعين — تُجمَع التقارير تلقائياً، لا حساب يدوياً." },
        { icon: "store", title: "سلسلة / فروع متعددة", desc: "أدر عدة متاجر من لوحة واحدة. رصيد ومبيعات كل فرع على حدة، والأسعار تُراقَب من المركز." },
        { icon: "monitor", title: "جاهز لأجهزة البيع", desc: "ماسح باركود وطابعة إيصالات ودرج نقود — يتصل بأجهزة البيع القياسية. يعمل على الكمبيوتر والأجهزة اللوحية وأجهزة Windows POS." },
        { icon: "clipboard-list", title: "مراقبة البائعين والورديات", desc: "وردية كل بائع ومبيعاته ونقود الكاشير تُحسَب على حدة. عند إغلاق الوردية يصدر التقرير تلقائياً — يظهر بوضوح من باع وكم." },
      ],
    },
    process: {
      badge: "كيف نبدأ",
      title: "4 خطوات إلى",
      titleAccent: "POS عامل",
      subtitle: "العرض التجريبي الأول مجاني. ثم كل خطوة بسعر وموعد واضحين — كل شيء كتابياً.",
      steps: [
        { num: "01", title: "عرض تجريبي مجاني", desc: "نعرض RAOS على مثال متجرك — تجرّب الكاشير والمخزون والتقارير بنفسك. بلا التزام: إن لم يناسبك، نقولها بصراحة.", icon: "message-circle" },
        { num: "02", title: "الإعداد + نقل البيانات", desc: "قاعدة المنتجات والأسعار والفروع والخصومات — نضبطها لمتجرك. ننقل بياناتك من Excel أو النظام القديم إلى RAOS — لن تبدأ من الصفر.", icon: "wrench" },
        { num: "03", title: "التدريب", desc: "ندرّب البائعين والكاشير أثناء العمل ونوفّر دليلاً. واجهة RAOS بسيطة — تُتعلَّم بسرعة عادةً.", icon: "zap" },
        { num: "04", title: "الإطلاق + الدعم", desc: "نطلقه مباشرة، نراقب الأيام الأولى ونجيب دائماً عن أسئلتك. التحديثات مشمولة في الاشتراك.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "لمن",
      title: "لأي",
      titleAccent: "متاجر RAOS؟",
      subtitle: "أي نقطة بيع تناسب RAOS. أكثر الحالات شيوعاً.",
      items: [
        { tag: "01", title: "بقالة ومتاجر", desc: "كاشير سريع، باركود، مراقبة المخزون. يسرّع الطابور ويقلل العجز — كل عملية بيع محسوبة." },
        { tag: "02", title: "ملابس، تجميل، إلكترونيات", desc: "خيارات (مقاس/لون)، قاعدة عملاء، خصومات وبرنامج ولاء — العملاء الدائمون يعودون." },
        { tag: "03", title: "سلسلة بفروع", desc: "كل الفروع في نظام واحد — الأسعار والمخزون والتقارير تحت السيطرة من المركز. وكل فرع يظهر على حدة أيضاً." },
        { tag: "04", title: "مطعم ومقهى", desc: "طاولات/طلبات، إرسال للمطبخ، حساب الورديات — يُكيَّف حسب نوع المكان." },
      ],
    },
    tech: {
      badge: "التقنية",
      title: "كيف بُني",
      titleAccent: "RAOS؟",
      subtitle: "RAOS منتج Tezcode الخاص: لسنا وسطاء لبرنامج أجنبي جاهز — نطوّر النظام ونحسّنه بأنفسنا.",
      items: [
        { name: "بنية offline-first", desc: "تُحفَظ البيانات أولاً على الجهاز نفسه (في قاعدة محلية) وتُزامَن مع السحابة عند توفر الإنترنت. لذلك لا يتوقف الكاشير عند انقطاع الاتصال ولا تضيع أي عملية بيع." },
        { name: "مزامنة سحابية ولوحة ويب", desc: "تُجمَع بيانات المبيعات والأرصدة في نظام مركزي. يفتح المالك اللوحة من المتصفح من أي مكان ويرى حالة المتجر في الوقت الفعلي." },
        { name: "أجهزة الباركود والإيصالات", desc: "تُدعم ماسحات الباركود وطابعات الإيصالات وأدراج النقود القياسية. يعمل على الكمبيوتر والأجهزة اللوحية وأجهزة Windows POS — لا حاجة لأجهزة خاصة باهظة." },
        { name: "طبقة تحليلات AI", desc: "داخل RAOS يجمع الذكاء الاصطناعي بيانات المبيعات ويحللها تلقائياً. تختبر Tezcode حلول AI في منتجها الخاص قبل تقديمها للعملاء." },
        { name: "تحديثات مستمرة", desc: "يعمل RAOS بنموذج الاشتراك: الميزات الجديدة والتحسينات تصل إلى جميع المستخدمين تلقائياً دون رسوم إضافية." },
        { name: "فريق داخلي في طشقند", desc: "يطوّر RAOS ويدعمه فريق Tezcode الدائم في طشقند. Tezcode مقيم رسمي في IT Park، ونعمل بعقد رسمي." },
      ],
    },
    pricing: {
      badge: "السعر",
      title: "على ماذا يعتمد",
      titleAccent: "السعر؟",
      subtitle:
        "يعمل RAOS بنموذج الاشتراك (دفع شهري) — وليس شراءً كبيراً لمرة واحدة. لا يوجد سعر موحّد: يعتمد الاشتراك على حجم متجرك، لذلك نقدّم العرض الدقيق كتابياً بعد التجربة المجانية.",
      factors: [
        { title: "حجم المتجر وعدد الكاشيرات", desc: "متجر صغير واحد أم نقطة بيع كبيرة بعدة كاشيرات — يُحدَّد الاشتراك بما يناسب هذا الحجم. المتجر الصغير لا يدفع سعر سلسلة كبيرة." },
        { title: "عدد الفروع", desc: "في السلسلة يتصل كل فرع بالنظام ويظهر في اللوحة المركزية — يُحسَب السعر حسب عدد الفروع." },
        { title: "التطبيق والتخصيص", desc: "نقل البيانات والإعداد والتدريب جزء من مرحلة التطبيق. التخصيصات الخاصة تُقيَّم على حدة — في هذه الأعمال الدفع: 30% مقدمًا." },
      ],
      note:
        "يُقدَّم السعر الدقيق كتابياً بعد العرض التجريبي المجاني. لا رسوم خفية — كل شيء في العقد. للاستفسار: +998 91 777 66 09 أو tezcode@tezcode.dev.",
    },
    cta: {
      badge: "وقت البدء",
      title: "ننقل متجرك",
      titleAccent: "إلى RAOS؟",
      subtitle: "في عرض تجريبي مجاني سترى كيف يعمل RAOS في متجرك. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع بكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "الأسئلة الأكثر شيوعاً عن نظام RAOS POS.",
      items: [
        { q: "أي نظام POS أختار في أوزبكستان؟", a: "انظر إلى أربعة معايير: استمرار العمل عند انقطاع الإنترنت، دعم من فريق محلي، إدارة الفروع في نظام واحد، وسعر يناسب حجم متجرك. الأنظمة السحابية (MoySklad وPaloma365) تتطلب إنترنت مستقراً، بينما يعمل RAOS بنمط offline-first — لا يتوقف الكاشير عند انقطاع الاتصال؛ كما يتكامل مع Soliq.uz (الفوترة الضريبية) ويرسل تقارير AI إلى تيليجرام. يطوّر RAOS ويدعمه فريق Tezcode في طشقند، والسعر من 249 000 سوم شهرياً مع 30 يوماً مجاناً دون بطاقة. أضمن طريقة للقرار — عرض تجريبي مجاني: اتصل على +998 91 777 66 09 أو راسلنا عبر Telegram، بلا التزام." },
        { q: "هل يعمل RAOS بدون إنترنت؟", a: "نعم. RAOS يعمل offline-first — عند انقطاع الاتصال لا يتوقف الكاشير: تُخزَّن البيانات على الجهاز نفسه وتُزامَن تلقائياً عند عودة الاتصال. لا تضيع أي عملية بيع، وتُحفَظ نسخة احتياطية في السحابة أيضاً. هذا مهم جداً لظروف أوزبكستان." },
        { q: "كم التكلفة وكيف يتم الدفع؟", a: "يبدأ RAOS من 249 000 سوم شهرياً بالاشتراك — لا حاجة لشراء كبير لمرة واحدة، مع 30 يوماً مجاناً. تعتمد الباقة الدقيقة على حجم المتجر وعدد الكاشيرات والفروع؛ نقدّم عرضاً كتابياً بعد التجربة المجانية. إذا طُلبت تخصيصات خاصة، فالدفع: 30% مقدمًا. لا رسوم خفية — كل شيء في العقد." },
        { q: "كم يستغرق التشغيل وهل تنقلون قاعدة منتجاتي؟", a: "المتجر الواحد العادي يعمل عادةً خلال بضعة أيام: الإعداد ونقل البيانات والتدريب مشمولة. ننقل المنتجات والأسعار والأرصدة من Excel أو نظامك القديم إلى RAOS بأنفسنا — لن تبدأ من الصفر. سلسلة فروع أو قاعدة منتجات كبيرة قد تستغرق أسبوعاً إلى أسبوعين، والمدة الدقيقة تُثبَّت كتابياً بعد التجربة." },
        { q: "لدي عدة متاجر — كلها في نظام واحد؟", a: "نعم. تُدعم عدة فروع: رصيد ومبيعات كل متجر تُدار على حدة، لكنك ترى كل شيء من لوحة مركزية. ويمكن إدارة الأسعار من المركز أيضاً." },
      ],
    },
    related: {
      badge: "خدمات ذات صلة",
      title: "قد يفيدك",
      titleAccent: "أيضاً",
      subtitle: "حلول Tezcode التي تُستخدم غالباً مع نظام POS.",
      links: [
        { href: "/biznes-avtomatlashtirish", label: "أتمتة الأعمال", desc: "أتمتة ما بعد الكاشير — التقارير وتدفق الطلبات والمهام المتكررة في نظام واحد." },
        { href: "/ai-chatbot", label: "شات بوت AI", desc: "خدمة عملاء 24/7 لمتجرك — يجيب عن الأسئلة ويجمع الطلبات والعملاء المحتملين." },
        { href: "/xodim-nazorati", label: "مراقبة الموظفين", desc: "الحضور والمهام وإنتاجية البائعين في نظام واحد." },
      ],
    },
    updated: "آخر تحديث: 5 يوليو 2026",
    service: {
      name: "RAOS — نظام POS للمتاجر — Tezcode",
      description:
        "نظام RAOS POS لمتاجر أوزبكستان: كاشير، مخزون، عملاء، تقارير، فروع متعددة، مراقبة البائعين والورديات، وعمل بدون إنترنت (offline-first). يعمل مع ماسح الباركود وطابعة الإيصالات. Tezcode — مقيم IT Park. طشقند وكل أوزبكستان، عرض تجريبي مجاني.",
      serviceType: "نظام POS / أتمتة المتجر",
    },
  },

  uk: {
    hero: {
      badge: "POS-система — RAOS · Tezcode",
      title1: "POS-система для",
      titleAccent: "вашого магазину — RAOS",
      title2: "",
      subtitle:
        "POS-система — це програма, яка за секунди оформлює продаж на касі магазину і водночас веде залишки складу, клієнтів та звіти в одному місці. RAOS — POS-система, що працює навіть без інтернету (offline-first): підключається до сканера штрихкоду і чек-принтера, об'єднує кілька філій в одній панелі. Її створила і підтримує Tezcode — AI Software Factory в Ташкенті — для магазинів Узбекистану. Більше ніякого Excel і зошитів.",
      trust: "Резидент IT Park • Безкоштовне демо • Працює без інтернету • Ташкент і весь Узбекистан",
      ctaPrimary: "Запросити демо",
      ctaSecondary: "Що вміє RAOS?",
    },
    capabilities: {
      badge: "Можливості",
      title: "Що вміє",
      titleAccent: "RAOS POS?",
      subtitle: "Від одного магазину до мережі — керуйте продажами, складом, клієнтами і звітами з одного місця. Каса не зупиняється навіть без інтернету.",
      items: [
        { icon: "receipt", title: "Каса (POS)", desc: "Швидкі продажі: сканер штрихкоду, чек, оплата готівкою/карткою/змішана, закриття зміни. Інтерфейс простий — продавець освоює за кілька хвилин." },
        { icon: "package", title: "Склад і залишки", desc: "Залишок кожного товару в реальному часі: продаж автоматично зменшує залишок. Сповіщення про малий залишок, прихід/витрата, інвентаризація." },
        { icon: "wifi", title: "Працює без інтернету (offline-first)", desc: "Навіть при обриві зв'язку каса працює — дані зберігаються локально і синхронізуються автоматично при відновленні. Важливо для умов Узбекистану." },
        { icon: "users", title: "Клієнти та лояльність", desc: "База клієнтів, борг/розстрочка, знижки та програма лояльності. Історія і борг клієнта в один клік." },
        { icon: "bar-chart-2", title: "Звіти та аналітика", desc: "Денні продажі, прибуток, топ-товари, ефективність продавців — звіти збираються автоматично, вручну нічого рахувати не треба." },
        { icon: "store", title: "Мережа / багато філій", desc: "Керуйте кількома магазинами з однієї панелі. Залишок і продажі кожної філії видно окремо, ціни контролюються з центру." },
        { icon: "monitor", title: "Готовий до торгового обладнання", desc: "Сканер штрихкоду, чек-принтер і грошова скринька — підключається до стандартного торгового обладнання. Працює на комп'ютері, планшеті та Windows POS-пристроях." },
        { icon: "clipboard-list", title: "Контроль продавців і змін", desc: "Зміна, продажі та гроші в касі кожного продавця рахуються окремо. При закритті зміни звіт формується автоматично — видно, хто скільки продав." },
      ],
    },
    process: {
      badge: "Як починаємо",
      title: "4 кроки до",
      titleAccent: "робочого POS",
      subtitle: "Перше демо безкоштовне. Далі кожен крок з точною ціною та терміном — усе письмово.",
      steps: [
        { num: "01", title: "Безкоштовне демо", desc: "Показуємо RAOS на прикладі вашого магазину — касу, склад і звіти пробуєте самі. Без зобов'язань: якщо не підійде, скажемо чесно.", icon: "message-circle" },
        { num: "02", title: "Налаштування + перенос даних", desc: "База товарів, ціни, філії та знижки — налаштовуємо під ваш магазин. Дані з Excel чи старої системи переносимо в RAOS — з нуля починати не доведеться.", icon: "wrench" },
        { num: "03", title: "Навчання", desc: "Навчаємо продавців і касирів прямо в роботі, даємо інструкцію. Інтерфейс RAOS простий — зазвичай освоюється швидко.", icon: "zap" },
        { num: "04", title: "Запуск + підтримка", desc: "Запускаємо наживо, у перші дні стежимо за роботою і завжди відповідаємо на питання. Оновлення входять у підписку.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Для кого",
      title: "Для яких",
      titleAccent: "магазинів RAOS?",
      subtitle: "Будь-яка торгова точка підходить для RAOS. Найчастіші напрямки.",
      items: [
        { tag: "01", title: "Продукти та магазини", desc: "Швидка каса, штрихкод, контроль залишків. Прискорює чергу, зменшує нестачу — кожен продаж на обліку." },
        { tag: "02", title: "Одяг, косметика, електроніка", desc: "Варіанти (розмір/колір), база клієнтів, знижки та програма лояльності — постійні клієнти повертаються." },
        { tag: "03", title: "Мережа з філіями", desc: "Усі філії в одній системі — ціни, залишки і звіти під контролем з центру. Кожна філія видна й окремо." },
        { tag: "04", title: "Ресторан і кафе", desc: "Столи/замовлення, відправка на кухню, облік змін — адаптується під тип точки." },
      ],
    },
    tech: {
      badge: "Технологія",
      title: "Як побудований",
      titleAccent: "RAOS?",
      subtitle: "RAOS — власний продукт Tezcode: ми не посередники готового закордонного ПЗ, систему розробляємо і розвиваємо самі.",
      items: [
        { name: "Offline-first архітектура", desc: "Дані спочатку зберігаються на самому пристрої (у локальній базі), а за наявності інтернету синхронізуються з хмарою. Тому каса не зупиняється при обриві зв'язку, і жоден продаж не втрачається." },
        { name: "Хмарна синхронізація і веб-панель", desc: "Дані про продажі та залишки збираються в центральній системі. Власник заходить у панель із браузера звідусіль і бачить стан магазину в реальному часі." },
        { name: "Обладнання: штрихкод і чеки", desc: "Підтримуються стандартні сканери штрихкоду, чек-принтери та грошові скриньки. Працює на комп'ютері, планшеті та Windows POS-пристроях — спеціальне дороге обладнання не потрібне." },
        { name: "Шар AI-аналітики", desc: "Усередині RAOS штучний інтелект автоматично збирає й аналізує дані про продажі. Tezcode тестує AI-рішення у власному продукті, перш ніж пропонувати їх клієнтам." },
        { name: "Постійні оновлення", desc: "RAOS працює за підпискою: нові функції та покращення автоматично доходять до всіх користувачів, без окремої оплати." },
        { name: "In-house команда в Ташкенті", desc: "RAOS розробляє і підтримує постійна команда Tezcode в Ташкенті. Tezcode — офіційний резидент IT Park, працюємо за офіційним договором." },
      ],
    },
    pricing: {
      badge: "Ціна",
      title: "Від чого залежить",
      titleAccent: "вартість?",
      subtitle:
        "RAOS працює за моделлю підписки (щомісячна оплата) — це не велика разова покупка. Єдиної універсальної ціни немає: підписка залежить від розміру магазину, тому точну пропозицію даємо письмово після безкоштовного демо.",
      factors: [
        { title: "Розмір магазину і кількість кас", desc: "Один невеликий магазин чи велика точка з кількома касами — підписка підбирається під цей масштаб. Маленький магазин не платить ціну великої мережі." },
        { title: "Кількість філій", desc: "У мережі кожна філія підключається до системи і видна в центральній панелі — ціна розраховується за кількістю філій." },
        { title: "Впровадження і доопрацювання", desc: "Перенос даних, налаштування і навчання входять до етапу впровадження. Індивідуальні доопрацювання оцінюються окремо — за такими роботами оплата: 30% передоплата." },
      ],
      note:
        "Точна ціна дається письмово після безкоштовного демо. Прихованих платежів немає — все в договорі. Питання: +998 91 777 66 09 або tezcode@tezcode.dev.",
    },
    cta: {
      badge: "Час починати",
      title: "Переведемо ваш магазин",
      titleAccent: "на RAOS?",
      subtitle: "На безкоштовному демо побачите, як RAOS працює у вашому магазині. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "Найчастіші запитання про POS-систему RAOS.",
      items: [
        { q: "Яку POS-систему підключити в Узбекистані?", a: "Дивіться на чотири критерії: робота без інтернету, підтримка локальною командою, керування філіями в одній системі та ціна, що відповідає розміру магазину. Хмарні системи (MoySklad, Paloma365) потребують стабільного інтернету, а RAOS працює offline-first — каса не зупиняється при обриві зв'язку; є інтеграція з Soliq.uz (фіскалізація) та AI-звіти в Telegram. RAOS розробляє і підтримує команда Tezcode в Ташкенті; ціна — від 249 000 сум/міс, 30 днів безкоштовно без картки. Найнадійніше — безкоштовне демо: зателефонуйте на +998 91 777 66 09 або напишіть у Telegram, без зобов'язань." },
        { q: "RAOS працює без інтернету?", a: "Так. RAOS offline-first — при обриві зв'язку каса не зупиняється: дані зберігаються на самому пристрої і синхронізуються автоматично при відновленні. Жоден продаж не втрачається, а копія даних зберігається й у хмарі. Для умов Узбекистану це особливо важливо." },
        { q: "Скільки коштує і як влаштована оплата?", a: "RAOS — від 249 000 сум/міс за підпискою, велика разова покупка не потрібна; є 30 днів безкоштовно. Точний тариф залежить від розміру магазину, кількості кас і філій; письмову пропозицію даємо після безкоштовного демо. Якщо замовляються індивідуальні доопрацювання — оплата: 30% передоплата. Прихованих платежів немає — все в договорі." },
        { q: "Як швидко запуститься і чи перенесете мою базу товарів?", a: "Звичайний один магазин запускається, як правило, за кілька днів: налаштування, перенос даних і навчання. Товари, ціни та залишки з Excel чи старої системи ми переносимо в RAOS самі — з нуля починати не доведеться. Для мережі філій чи великої бази товарів може знадобитися 1–2 тижні; точний термін фіксуємо письмово після демо." },
        { q: "У мене кілька магазинів — усе в одній системі?", a: "Так. Підтримується кілька філій: залишки і продажі кожного магазину ведуться окремо, але все видно з центральної панелі. Цінами можна керувати з центру." },
      ],
    },
    related: {
      badge: "Пов'язані послуги",
      title: "Вам також може",
      titleAccent: "бути корисно",
      subtitle: "Рішення Tezcode, які часто використовують разом із POS.",
      links: [
        { href: "/biznes-avtomatlashtirish", label: "Автоматизація бізнесу", desc: "Автоматизуйте процеси поза касою — звіти, потік замовлень і рутинні задачі в одній системі." },
        { href: "/ai-chatbot", label: "AI-чат-бот", desc: "Клієнтський сервіс 24/7 для вашого магазину — відповідає на питання, збирає замовлення та ліди." },
        { href: "/xodim-nazorati", label: "Контроль співробітників", desc: "Відвідуваність, задачі та продуктивність продавців в одній системі." },
      ],
    },
    updated: "Оновлено: 5 липня 2026",
    service: {
      name: "RAOS — POS-система для магазину — Tezcode",
      description:
        "POS-система RAOS для магазинів Узбекистану: каса, склад, клієнти, звіти, мультифілія, контроль продавців/змін і робота без інтернету (offline-first). Зі сканером штрихкоду і чек-принтером. Tezcode — резидент IT Park. Ташкент і весь Узбекистан, безкоштовне демо.",
      serviceType: "POS-система / автоматизація магазину",
    },
  },
};
