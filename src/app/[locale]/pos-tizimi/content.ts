import type { ServicePageContent } from "@/components/service-page/types";

// Content for /pos-tizimi — target keywords: "POS tizimi", "POS dasturi Toshkent",
// "kassa dasturi", "do'kon avtomatlashtirish", "POS система Узбекистан",
// "программа для магазина", "POS system Uzbekistan". Product: RAOS (offline-first POS).
// Only confirmed facts. No fabricated client counts.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "POS tizimi — RAOS · Tezcode",
      title1: "Do'koningiz uchun",
      titleAccent: "POS tizimi — RAOS",
      title2: "",
      subtitle:
        "Kassa, ombor, mijoz va hisobot bitta dasturda. RAOS — internetsiz ham ishlaydigan (offline-first) POS, O'zbekiston do'konlari uchun. Excel va daftarga qaytmaysiz.",
      trust: "Bepul demo • Internetsiz ishlaydi • Toshkent va butun O'zbekiston",
      ctaPrimary: "Bepul demo so'rang",
      ctaSecondary: "RAOS nima qila oladi?",
    },
    capabilities: {
      badge: "Imkoniyatlar",
      title: "RAOS POS",
      titleAccent: "nima qila oladi?",
      subtitle:
        "Bitta do'kondan tarmoqgacha — sotuv, ombor va hisobotni bir joydan boshqaring.",
      items: [
        { icon: "receipt", title: "Kassa (POS)", desc: "Tez sotuv: barkod skaner, chek chiqarish, naqd/karta/aralash to'lov, smena yopish. Sotuvchi 1 daqiqada o'rganadi." },
        { icon: "package", title: "Ombor va qoldiq", desc: "Har mahsulot qoldig'i real vaqtda. Kam qolganda ogohlantirish, kirim/chiqim, inventarizatsiya." },
        { icon: "wifi", title: "Internetsiz ishlaydi (offline-first)", desc: "Internet uzilsa ham kassa ishlaydi — ma'lumot lokalda saqlanadi, ulanish tiklanganda avtomatik sinxron." },
        { icon: "users", title: "Mijozlar va sodiqlik", desc: "Mijoz bazasi, qarz/nasiya, chegirma va sodiqlik (loyalty). Mijoz tarixi bir bosishda." },
        { icon: "bar-chart-2", title: "Hisobot va analitika", desc: "Kunlik sotuv, foyda, eng ko'p sotilgan mahsulot, sotuvchi samaradorligi — avtomatik hisobot." },
        { icon: "store", title: "Ko'p filial / tarmoq", desc: "Bir nechta do'konni bitta dashboarddan boshqaring. Har filial qoldig'i va sotuvi alohida ko'rinadi." },
      ],
    },
    process: {
      badge: "Qanday boshlaymiz",
      title: "4 qadamda",
      titleAccent: "ishlovchi POS'ga",
      subtitle: "Birinchi demo bepul. Keyin har qadam aniq narx va aniq muddat bilan.",
      steps: [
        { num: "01", title: "Bepul demo", desc: "Do'koningizni ko'rsatamiz — qanday ishlashini jonli sinab ko'rasiz. Majburiyat yo'q.", icon: "message-circle" },
        { num: "02", title: "Sozlash + ma'lumot ko'chirish", desc: "Mahsulot bazasi, narx, filiallar — sizning do'koningizga moslab sozlaymiz.", icon: "wrench" },
        { num: "03", title: "O'rgatish", desc: "Sotuvchilar va kassirlarni o'rgatamiz. RAOS sodda — tez o'rganiladi.", icon: "zap" },
        { num: "04", title: "Ishga tushirish + qo'llab-quvvatlash", desc: "Jonli ishga tushiramiz, ishlashini kuzatamiz, savollarga doimo javob beramiz.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Kimlar uchun",
      title: "RAOS qaysi",
      titleAccent: "do'konlar uchun?",
      subtitle: "Har savdo nuqtasi — RAOS uchun mos. Eng ko'p ishlatiladigan yo'nalishlar.",
      items: [
        { tag: "01", title: "Oziq-ovqat va do'konlar", desc: "Tez kassa, barkod, qoldiq nazorati. Navbatni tezlashtiradi, kamomadni kamaytiradi." },
        { tag: "02", title: "Kiyim, kosmetika, elektronika", desc: "Variant (o'lcham/rang), mijoz bazasi, chegirma va sodiqlik dasturi." },
        { tag: "03", title: "Ko'p filialli tarmoq", desc: "Barcha filial bitta tizimda — markazdan narx, qoldiq va hisobot nazorati." },
        { tag: "04", title: "Restoran va kafe", desc: "Stol/buyurtma, oshxona chiqishi, smena hisobi — savdo nuqtasi uchun moslashtirilgan." },
      ],
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
      subtitle: "RAOS POS tizimi haqida ko'p so'raladigan savollar.",
      items: [
        { q: "RAOS internetsiz ishlaydimi?", a: "Ha. RAOS offline-first — internet uzilsa ham kassa to'xtamaydi, ma'lumot qurilmada saqlanadi va ulanish tiklanganda avtomatik sinxronlanadi. Bu O'zbekiston sharoiti uchun muhim." },
        { q: "Mavjud mahsulot bazamni ko'chira olasizmi?", a: "Ha. Excel yoki eski tizimdagi mahsulot, narx va qoldiqni RAOS'ga ko'chiramiz, shunda noldan boshlamaysiz." },
        { q: "Bir nechta do'konim bor — hammasi bitta tizimdami?", a: "Ha. Ko'p filial qo'llab-quvvatlanadi: har do'kon qoldig'i va sotuvi alohida, lekin markaziy dashboarddan hammasini ko'rasiz." },
        { q: "Qanday qurilmada ishlaydi?", a: "Kompyuter, planshet va Windows POS qurilmalarida. Barkod skaner, chek printer va kassa qutisi bilan ishlaydi." },
        { q: "Narxi qancha?", a: "RAOS obuna asosida. Aniq narx do'koningiz hajmi va filiallar soniga bog'liq — bepul demodan keyin aniq taklif beramiz." },
        { q: "O'rgatib berasizmi?", a: "Ha. Sotuvchi va kassirlarni o'rgatamiz, qo'llanma beramiz. RAOS sodda interfeysga ega — odatda tez o'rganiladi." },
      ],
    },
    service: {
      name: "RAOS — do'kon uchun POS tizimi | Tezcode",
      description:
        "O'zbekiston do'konlari uchun POS tizimi RAOS: kassa, ombor, mijoz, hisobot, ko'p filial, internetsiz (offline-first) ishlash. Toshkent va butun O'zbekiston.",
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
        "Касса, склад, клиенты и отчёты в одной программе. RAOS — POS, работающий даже без интернета (offline-first), для магазинов Узбекистана. Больше никакого Excel и тетрадей.",
      trust: "Бесплатное демо • Работает без интернета • Ташкент и весь Узбекистан",
      ctaPrimary: "Запросить демо",
      ctaSecondary: "Что умеет RAOS?",
    },
    capabilities: {
      badge: "Возможности",
      title: "Что умеет",
      titleAccent: "RAOS POS?",
      subtitle: "От одного магазина до сети — управляйте продажами, складом и отчётами из одного места.",
      items: [
        { icon: "receipt", title: "Касса (POS)", desc: "Быстрые продажи: сканер штрихкода, чек, оплата наличными/картой/смешанная, закрытие смены. Продавец учится за минуту." },
        { icon: "package", title: "Склад и остатки", desc: "Остаток каждого товара в реальном времени. Оповещение о малом остатке, приход/расход, инвентаризация." },
        { icon: "wifi", title: "Работает без интернета", desc: "Даже при обрыве связи касса работает — данные хранятся локально и автоматически синхронизируются при восстановлении." },
        { icon: "users", title: "Клиенты и лояльность", desc: "База клиентов, долг/рассрочка, скидки и программа лояльности. История клиента в один клик." },
        { icon: "bar-chart-2", title: "Отчёты и аналитика", desc: "Дневные продажи, прибыль, топ-товары, эффективность продавцов — автоматические отчёты." },
        { icon: "store", title: "Сеть / много филиалов", desc: "Управляйте несколькими магазинами из одного дашборда. Остаток и продажи каждого филиала отдельно." },
      ],
    },
    process: {
      badge: "Как начинаем",
      title: "4 шага до",
      titleAccent: "рабочего POS",
      subtitle: "Первое демо бесплатно. Дальше каждый шаг с точной ценой и сроком.",
      steps: [
        { num: "01", title: "Бесплатное демо", desc: "Покажем на вашем магазине — попробуете вживую. Без обязательств.", icon: "message-circle" },
        { num: "02", title: "Настройка + перенос данных", desc: "База товаров, цены, филиалы — настроим под ваш магазин.", icon: "wrench" },
        { num: "03", title: "Обучение", desc: "Обучим продавцов и кассиров. RAOS прост — учится быстро.", icon: "zap" },
        { num: "04", title: "Запуск + поддержка", desc: "Запускаем, следим за работой, всегда отвечаем на вопросы.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Для кого",
      title: "Для каких",
      titleAccent: "магазинов RAOS?",
      subtitle: "Любая торговая точка подходит для RAOS. Самые частые направления.",
      items: [
        { tag: "01", title: "Продукты и магазины", desc: "Быстрая касса, штрихкод, контроль остатков. Ускоряет очередь, снижает недостачу." },
        { tag: "02", title: "Одежда, косметика, электроника", desc: "Варианты (размер/цвет), база клиентов, скидки и программа лояльности." },
        { tag: "03", title: "Сеть с филиалами", desc: "Все филиалы в одной системе — цены, остатки и отчёты под контролем из центра." },
        { tag: "04", title: "Ресторан и кафе", desc: "Столы/заказы, отправка на кухню, учёт смен — адаптировано под точку." },
      ],
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
      subtitle: "Частые вопросы о POS-системе RAOS.",
      items: [
        { q: "RAOS работает без интернета?", a: "Да. RAOS offline-first — при обрыве связи касса не останавливается, данные хранятся на устройстве и автоматически синхронизируются при восстановлении. Это важно для условий Узбекистана." },
        { q: "Перенесёте мою базу товаров?", a: "Да. Товары, цены и остатки из Excel или старой системы перенесём в RAOS, чтобы не начинать с нуля." },
        { q: "У меня несколько магазинов — всё в одной системе?", a: "Да. Поддерживается несколько филиалов: остатки и продажи каждого отдельно, но всё видно из центрального дашборда." },
        { q: "На каких устройствах работает?", a: "Компьютер, планшет и Windows POS-устройства. Работает со сканером штрихкода, чек-принтером и денежным ящиком." },
        { q: "Сколько стоит?", a: "RAOS по подписке. Точная цена зависит от размера магазина и числа филиалов — дадим предложение после бесплатного демо." },
        { q: "Обучите?", a: "Да. Обучим продавцов и кассиров, дадим инструкцию. У RAOS простой интерфейс — обычно учится быстро." },
      ],
    },
    service: {
      name: "RAOS — POS-система для магазина | Tezcode",
      description:
        "POS-система RAOS для магазинов Узбекистана: касса, склад, клиенты, отчёты, мультифилиал, работа без интернета (offline-first). Ташкент и весь Узбекистан.",
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
        "Register, inventory, customers and reports in one app. RAOS is an offline-first POS for stores in Uzbekistan. No more Excel and notebooks.",
      trust: "Free demo • Works offline • Tashkent and all of Uzbekistan",
      ctaPrimary: "Request a demo",
      ctaSecondary: "What can RAOS do?",
    },
    capabilities: {
      badge: "Capabilities",
      title: "What can",
      titleAccent: "RAOS POS do?",
      subtitle: "From a single store to a chain — manage sales, inventory and reports from one place.",
      items: [
        { icon: "receipt", title: "Register (POS)", desc: "Fast sales: barcode scanner, receipts, cash/card/split payment, shift close. A cashier learns it in a minute." },
        { icon: "package", title: "Inventory & stock", desc: "Every item's stock in real time. Low-stock alerts, stock in/out, stocktaking." },
        { icon: "wifi", title: "Works offline (offline-first)", desc: "Even if the internet drops, the register keeps working — data is stored locally and syncs automatically when back online." },
        { icon: "users", title: "Customers & loyalty", desc: "Customer base, credit/installments, discounts and loyalty. Customer history in one click." },
        { icon: "bar-chart-2", title: "Reports & analytics", desc: "Daily sales, profit, top products, cashier performance — automatic reports." },
        { icon: "store", title: "Multi-branch / chain", desc: "Manage several stores from one dashboard. Each branch's stock and sales tracked separately." },
      ],
    },
    process: {
      badge: "How we start",
      title: "4 steps to a",
      titleAccent: "working POS",
      subtitle: "The first demo is free. Then every step has a clear price and timeline.",
      steps: [
        { num: "01", title: "Free demo", desc: "We show it on your store — you try it live. No obligations.", icon: "message-circle" },
        { num: "02", title: "Setup + data migration", desc: "Product base, prices, branches — configured for your store.", icon: "wrench" },
        { num: "03", title: "Training", desc: "We train your salespeople and cashiers. RAOS is simple — learned fast.", icon: "zap" },
        { num: "04", title: "Launch + support", desc: "We go live, monitor it, and always answer your questions.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Who it's for",
      title: "Which stores",
      titleAccent: "is RAOS for?",
      subtitle: "Any point of sale fits RAOS. The most common cases.",
      items: [
        { tag: "01", title: "Groceries & shops", desc: "Fast register, barcode, stock control. Speeds up the queue, reduces shrinkage." },
        { tag: "02", title: "Clothing, cosmetics, electronics", desc: "Variants (size/color), customer base, discounts and loyalty program." },
        { tag: "03", title: "Multi-branch chain", desc: "All branches in one system — prices, stock and reports controlled from the center." },
        { tag: "04", title: "Restaurant & cafe", desc: "Tables/orders, kitchen tickets, shift accounting — adapted to the venue." },
      ],
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
      subtitle: "Common questions about the RAOS POS system.",
      items: [
        { q: "Does RAOS work without internet?", a: "Yes. RAOS is offline-first — if the connection drops the register keeps working, data is stored on the device and syncs automatically when back online. This matters for Uzbekistan's conditions." },
        { q: "Can you migrate my product base?", a: "Yes. We move products, prices and stock from Excel or your old system into RAOS so you don't start from scratch." },
        { q: "I have several stores — all in one system?", a: "Yes. Multiple branches are supported: each branch's stock and sales are separate, but you see everything from a central dashboard." },
        { q: "What devices does it run on?", a: "Computers, tablets and Windows POS devices. It works with a barcode scanner, receipt printer and cash drawer." },
        { q: "How much does it cost?", a: "RAOS is subscription-based. The exact price depends on your store size and number of branches — we give a quote after the free demo." },
        { q: "Do you provide training?", a: "Yes. We train salespeople and cashiers and provide a guide. RAOS has a simple interface — usually learned quickly." },
      ],
    },
    service: {
      name: "RAOS — POS system for retail | Tezcode",
      description:
        "RAOS POS system for stores in Uzbekistan: register, inventory, customers, reports, multi-branch, offline-first operation. Tashkent and all of Uzbekistan.",
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
        "الكاشير والمخزون والعملاء والتقارير في برنامج واحد. RAOS نظام POS يعمل حتى بدون إنترنت (offline-first) لمتاجر أوزبكستان. لا مزيد من Excel والدفاتر.",
      trust: "عرض تجريبي مجاني • يعمل بدون إنترنت • طشقند وكل أوزبكستان",
      ctaPrimary: "اطلب عرضاً تجريبياً",
      ctaSecondary: "ماذا يفعل RAOS؟",
    },
    capabilities: {
      badge: "الإمكانيات",
      title: "ماذا يفعل",
      titleAccent: "RAOS POS؟",
      subtitle: "من متجر واحد إلى سلسلة — أدر المبيعات والمخزون والتقارير من مكان واحد.",
      items: [
        { icon: "receipt", title: "الكاشير (POS)", desc: "بيع سريع: ماسح باركود، إيصال، دفع نقدي/بطاقة/مختلط، إغلاق الوردية. يتعلمه البائع في دقيقة." },
        { icon: "package", title: "المخزون والأرصدة", desc: "رصيد كل منتج في الوقت الفعلي. تنبيه عند انخفاض المخزون، إدخال/إخراج، جرد." },
        { icon: "wifi", title: "يعمل بدون إنترنت", desc: "حتى عند انقطاع الاتصال يستمر الكاشير — تُخزَّن البيانات محلياً وتُزامَن تلقائياً عند عودة الاتصال." },
        { icon: "users", title: "العملاء والولاء", desc: "قاعدة العملاء، الدين/التقسيط، الخصومات وبرنامج الولاء. سجل العميل بنقرة واحدة." },
        { icon: "bar-chart-2", title: "التقارير والتحليلات", desc: "مبيعات يومية، أرباح، أكثر المنتجات مبيعاً، أداء البائعين — تقارير تلقائية." },
        { icon: "store", title: "سلسلة / فروع متعددة", desc: "أدر عدة متاجر من لوحة واحدة. رصيد ومبيعات كل فرع على حدة." },
      ],
    },
    process: {
      badge: "كيف نبدأ",
      title: "4 خطوات إلى",
      titleAccent: "POS عامل",
      subtitle: "العرض التجريبي الأول مجاني. ثم كل خطوة بسعر وموعد واضحين.",
      steps: [
        { num: "01", title: "عرض تجريبي مجاني", desc: "نعرضه على متجرك — تجربه مباشرة. بلا التزام.", icon: "message-circle" },
        { num: "02", title: "الإعداد + نقل البيانات", desc: "قاعدة المنتجات، الأسعار، الفروع — نضبطها لمتجرك.", icon: "wrench" },
        { num: "03", title: "التدريب", desc: "ندرّب البائعين والكاشير. RAOS بسيط — يُتعلَّم بسرعة.", icon: "zap" },
        { num: "04", title: "الإطلاق + الدعم", desc: "نطلقه، نراقب العمل، ونجيب دائماً عن أسئلتك.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "لمن",
      title: "لأي",
      titleAccent: "متاجر RAOS؟",
      subtitle: "أي نقطة بيع تناسب RAOS. أكثر الحالات شيوعاً.",
      items: [
        { tag: "01", title: "بقالة ومتاجر", desc: "كاشير سريع، باركود، مراقبة المخزون. يسرّع الطابور ويقلل العجز." },
        { tag: "02", title: "ملابس، تجميل، إلكترونيات", desc: "خيارات (مقاس/لون)، قاعدة عملاء، خصومات وبرنامج ولاء." },
        { tag: "03", title: "سلسلة بفروع", desc: "كل الفروع في نظام واحد — الأسعار والمخزون والتقارير تحت السيطرة من المركز." },
        { tag: "04", title: "مطعم ومقهى", desc: "طاولات/طلبات، إرسال للمطبخ، حساب الورديات — مُكيَّف للمكان." },
      ],
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
      subtitle: "أسئلة شائعة عن نظام RAOS POS.",
      items: [
        { q: "هل يعمل RAOS بدون إنترنت؟", a: "نعم. RAOS يعمل offline-first — عند انقطاع الاتصال لا يتوقف الكاشير، تُخزَّن البيانات على الجهاز وتُزامَن تلقائياً عند عودة الاتصال. هذا مهم لظروف أوزبكستان." },
        { q: "هل تنقلون قاعدة منتجاتي؟", a: "نعم. ننقل المنتجات والأسعار والأرصدة من Excel أو نظامك القديم إلى RAOS كي لا تبدأ من الصفر." },
        { q: "لدي عدة متاجر — كلها في نظام واحد؟", a: "نعم. تُدعم عدة فروع: رصيد ومبيعات كل فرع منفصلة، لكنك ترى كل شيء من لوحة مركزية." },
        { q: "على أي أجهزة يعمل؟", a: "أجهزة الكمبيوتر والأجهزة اللوحية وأجهزة Windows POS. يعمل مع ماسح الباركود وطابعة الإيصالات ودرج النقود." },
        { q: "كم التكلفة؟", a: "RAOS باشتراك. يعتمد السعر الدقيق على حجم متجرك وعدد الفروع — نقدّم عرضاً بعد التجربة المجانية." },
        { q: "هل تدرّبون؟", a: "نعم. ندرّب البائعين والكاشير ونوفّر دليلاً. واجهة RAOS بسيطة — تُتعلَّم بسرعة عادةً." },
      ],
    },
    service: {
      name: "RAOS — نظام POS للمتاجر | Tezcode",
      description:
        "نظام RAOS POS لمتاجر أوزبكستان: كاشير، مخزون، عملاء، تقارير، فروع متعددة، عمل بدون إنترنت (offline-first). طشقند وكل أوزبكستان.",
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
        "Каса, склад, клієнти та звіти в одній програмі. RAOS — POS, що працює навіть без інтернету (offline-first), для магазинів Узбекистану. Більше ніякого Excel і зошитів.",
      trust: "Безкоштовне демо • Працює без інтернету • Ташкент і весь Узбекистан",
      ctaPrimary: "Запросити демо",
      ctaSecondary: "Що вміє RAOS?",
    },
    capabilities: {
      badge: "Можливості",
      title: "Що вміє",
      titleAccent: "RAOS POS?",
      subtitle: "Від одного магазину до мережі — керуйте продажами, складом і звітами з одного місця.",
      items: [
        { icon: "receipt", title: "Каса (POS)", desc: "Швидкі продажі: сканер штрихкоду, чек, оплата готівкою/карткою/змішана, закриття зміни. Продавець вчиться за хвилину." },
        { icon: "package", title: "Склад і залишки", desc: "Залишок кожного товару в реальному часі. Сповіщення про малий залишок, прихід/витрата, інвентаризація." },
        { icon: "wifi", title: "Працює без інтернету", desc: "Навіть при обриві зв'язку каса працює — дані зберігаються локально і синхронізуються автоматично при відновленні." },
        { icon: "users", title: "Клієнти та лояльність", desc: "База клієнтів, борг/розстрочка, знижки та програма лояльності. Історія клієнта в один клік." },
        { icon: "bar-chart-2", title: "Звіти та аналітика", desc: "Денні продажі, прибуток, топ-товари, ефективність продавців — автоматичні звіти." },
        { icon: "store", title: "Мережа / багато філій", desc: "Керуйте кількома магазинами з однієї панелі. Залишок і продажі кожної філії окремо." },
      ],
    },
    process: {
      badge: "Як починаємо",
      title: "4 кроки до",
      titleAccent: "робочого POS",
      subtitle: "Перше демо безкоштовне. Далі кожен крок з точною ціною та терміном.",
      steps: [
        { num: "01", title: "Безкоштовне демо", desc: "Покажемо на вашому магазині — спробуєте наживо. Без зобов'язань.", icon: "message-circle" },
        { num: "02", title: "Налаштування + перенос даних", desc: "База товарів, ціни, філії — налаштуємо під ваш магазин.", icon: "wrench" },
        { num: "03", title: "Навчання", desc: "Навчимо продавців і касирів. RAOS простий — вчиться швидко.", icon: "zap" },
        { num: "04", title: "Запуск + підтримка", desc: "Запускаємо, стежимо за роботою, завжди відповідаємо на питання.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Для кого",
      title: "Для яких",
      titleAccent: "магазинів RAOS?",
      subtitle: "Будь-яка торгова точка підходить для RAOS. Найчастіші напрямки.",
      items: [
        { tag: "01", title: "Продукти та магазини", desc: "Швидка каса, штрихкод, контроль залишків. Прискорює чергу, зменшує нестачу." },
        { tag: "02", title: "Одяг, косметика, електроніка", desc: "Варіанти (розмір/колір), база клієнтів, знижки та програма лояльності." },
        { tag: "03", title: "Мережа з філіями", desc: "Усі філії в одній системі — ціни, залишки і звіти під контролем з центру." },
        { tag: "04", title: "Ресторан і кафе", desc: "Столи/замовлення, відправка на кухню, облік змін — адаптовано під точку." },
      ],
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
      subtitle: "Часті запитання про POS-систему RAOS.",
      items: [
        { q: "RAOS працює без інтернету?", a: "Так. RAOS offline-first — при обриві зв'язку каса не зупиняється, дані зберігаються на пристрої і синхронізуються автоматично при відновленні. Це важливо для умов Узбекистану." },
        { q: "Перенесете мою базу товарів?", a: "Так. Товари, ціни та залишки з Excel чи старої системи перенесемо в RAOS, щоб не починати з нуля." },
        { q: "У мене кілька магазинів — усе в одній системі?", a: "Так. Підтримується кілька філій: залишки і продажі кожної окремо, але все видно з центральної панелі." },
        { q: "На яких пристроях працює?", a: "Комп'ютери, планшети та Windows POS-пристрої. Працює зі сканером штрихкоду, чек-принтером і грошовою скринькою." },
        { q: "Скільки коштує?", a: "RAOS за підпискою. Точна ціна залежить від розміру магазину і кількості філій — дамо пропозицію після безкоштовного демо." },
        { q: "Навчите?", a: "Так. Навчимо продавців і касирів, дамо інструкцію. У RAOS простий інтерфейс — зазвичай вчиться швидко." },
      ],
    },
    service: {
      name: "RAOS — POS-система для магазину | Tezcode",
      description:
        "POS-система RAOS для магазинів Узбекистану: каса, склад, клієнти, звіти, мультифілія, робота без інтернету (offline-first). Ташкент і весь Узбекистан.",
      serviceType: "POS-система / автоматизація магазину",
    },
  },
};
