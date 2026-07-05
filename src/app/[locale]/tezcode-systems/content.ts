import type { ServicePageContent } from "@/components/service-page/types";

// Content for /tezcode-systems — the "TezCode Systems" division: ready-made
// SaaS products on monthly subscription. Flagship products: RAOS (retail POS)
// and WorkControl (employee monitoring). Angle: turnkey SaaS you connect today
// and profit tomorrow — no long custom build. Only confirmed Tezcode facts
// (AI Software Factory, 2024, founder Bekzod Mirzaaliyev, 14 in-house developers,
// Tashkent, IT Park resident). No fabricated metrics or clients.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "TezCode Systems — tayyor SaaS",
      title1: "Tayyor SaaS mahsulotlar",
      titleAccent: "— oylik obunada",
      title2: "",
      subtitle:
        "RAOS (do'kon uchun POS) va WorkControl (xodim nazorati) — tayyor, sinovdan o'tgan SaaS mahsulotlar. Bugun ulaning, ertaga foyda oling. Uzoq muddatli buyurtma dasturisiz — oylik obuna.",
      trust: "Bepul demo • Oylik obuna • Tez ulanish va o'qitish",
      ctaPrimary: "Bepul demo so'rang",
      ctaSecondary: "Mahsulotlarni ko'rish",
    },
    capabilities: {
      badge: "Mahsulotlar",
      title: "Qaysi tayyor tizimlarni",
      titleAccent: "taklif qilamiz?",
      subtitle:
        "Noldan qurmasdan, bugun ishga tushadigan tayyor SaaS. Har biri aniq biznes muammosini yechadi.",
      items: [
        { icon: "store", title: "RAOS — do'kon uchun POS", desc: "Kassa, savdo va chek — bir joyda. Retail va do'konlar uchun tayyor kassa tizimi. Oylik obuna, tez ulanish." },
        { icon: "package", title: "RAOS — ombor va qoldiq", desc: "Real vaqtda qoldiq, kirim-chiqim, inventarizatsiya. Qaysi mahsulot tugayotganini va nima ko'p sotilayotganini ko'rasiz." },
        { icon: "users", title: "RAOS — mijozlar va sodiqlik", desc: "Mijozlar bazasi, chegirma va sodiqlik dasturi. Qaytadigan mijozni bilib, savdoni oshiring." },
        { icon: "receipt", title: "RAOS — soliq hisoboti", desc: "Soliq va fiskal hisobotlar avtomatik. Chek va hujjatlar tartibda — qo'lda hisob-kitob yo'q." },
        { icon: "monitor", title: "WorkControl — xodim nazorati", desc: "Xodimlar kompyuterda nima qilayotganini ko'ring: faol vaqt, dasturlar, samaradorlik. Ish vaqti nazorati." },
        { icon: "bar-chart-2", title: "WorkControl — samaradorlik hisoboti", desc: "Kim ko'p, kim kam ishlayotgani aniq hisobotlarda. Jamoa unumdorligini raqamlar bilan boshqaring." },
      ],
    },
    process: {
      badge: "Qanday ulanadi",
      title: "4 qadamda",
      titleAccent: "ishga tushirasiz",
      subtitle: "Noldan qurish shart emas. Demodan jonli ishga o'tish — bir necha kun ichida.",
      steps: [
        { num: "01", title: "Bepul demo", desc: "Mahsulotni jonli ko'rsatamiz: RAOS yoki WorkControl aynan sizning biznesingizga qanday mos kelishini. Majburiyat yo'q.", icon: "message-circle" },
        { num: "02", title: "Sozlash (setup)", desc: "Akkaunt, do'kon yoki jamoa ma'lumotlari, kerakli integratsiyalar. Excel yoki 1C'dan ma'lumotni ko'chirishga yordam beramiz.", icon: "wrench" },
        { num: "03", title: "O'qitish", desc: "Xodimlaringizni tizimda ishlashga o'rgatamiz. Qisqa, amaliy — kassir ham, menejer ham darrov ishlay boshlaydi.", icon: "book-open" },
        { num: "04", title: "Jonli ishga tushish", desc: "Tizim real ishga tushadi, biz esa yonda bo'lamiz. Qo'llab-quvvatlash obunaga kiradi.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Nega tayyor SaaS",
      title: "Noldan qurishdan",
      titleAccent: "ko'ra tezroq va arzon",
      subtitle: "Nima uchun tayyor SaaS'ni ulash — o'zingiz uchun dastur qurdirishdan afzal.",
      items: [
        { tag: "01", title: "Bugun ulanadi", desc: "Oylar davomida ishlab chiqishni kutmaysiz. Mahsulot tayyor — bir necha kun ichida ishga tushasiz." },
        { tag: "02", title: "Sinovdan o'tgan", desc: "RAOS va WorkControl real biznesda ishlaydigan mahsulotlar. Xatolarni siz emas, boshqalar allaqachon o'tgan." },
        { tag: "03", title: "Oylik to'lov", desc: "Katta boshlang'ich sarmoya yo'q. Oylik obuna — kerak bo'lsa foydalanasiz, kerak bo'lmasa to'xtatasiz." },
        { tag: "04", title: "Qo'llab-quvvatlash obunada", desc: "Yangilanish, xatoliklarni tuzatish va texnik yordam obunaga kiradi. Alohida jamoa saqlash shart emas." },
      ],
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Tayyor tizimni",
      titleAccent: "bugun sinab ko'ring",
      subtitle: "Bepul demoda RAOS yoki WorkControl'ni jonli ko'rsatamiz va biznesingizga mosligini aytamiz. Majburiyat yo'q.",
      button: "Telegram'da demo so'rash",
      note: "Yoki tezcode@tezcode.dev ga yozing — jamoamiz bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "TezCode Systems tayyor mahsulotlari haqida ko'p so'raladigan savollar.",
      items: [
        { q: "To'lov qanday ishlaydi?", a: "TezCode Systems mahsulotlari oylik obuna asosida. Katta boshlang'ich sarmoya kerak emas — oylik to'lov ichida foydalanish, yangilanish va qo'llab-quvvatlash bo'ladi. Aniq tarif biznes hajmiga qarab belgilanadi." },
        { q: "Qaysi bizneslar uchun mos?", a: "RAOS — do'kon, retail va savdo nuqtalari uchun (kassa, ombor, mijozlar, soliq hisoboti). WorkControl — kompyuterda ishlaydigan jamoalarga (ofis, IT, call-markaz) xodim nazorati va samaradorlik uchun mos." },
        { q: "Excel yoki 1C'dan ko'chib o'ta olamanmi?", a: "Ha. Setup bosqichida mavjud ma'lumotlaringizni (mahsulotlar, qoldiq, mijozlar) tizimga ko'chirishga yordam beramiz. Noldan qayta kiritish shart emas." },
        { q: "Ulanish qancha vaqt oladi?", a: "Tayyor mahsulot bo'lgani uchun uzoq ishlab chiqish yo'q. Demodan keyin sozlash, o'qitish va jonli ishga tushish odatda bir necha kun ichida bo'ladi." },
        { q: "Qo'llab-quvvatlash bormi?", a: "Ha. Texnik yordam, yangilanishlar va nazorat obunaga kiradi. Savol yoki muammo bo'lsa, jamoamiz Telegram va email orqali yordam beradi." },
        { q: "Buyurtma dasturi ham kerak bo'lsa-chi?", a: "TezCode Systems tayyor SaaS'ga qaratilgan. Agar sizga to'liq noldan, biznesingizga xos tizim kerak bo'lsa, Tezcode buyurtma asosidagi ishlab chiqishni ham taklif qiladi — to'lov 30% oldindan." },
      ],
    },
    related: {
      badge: "Aloqador sahifalar",
      title: "Qo'shimcha",
      titleAccent: "yo'nalishlar",
      subtitle: "Bizning tayyor tizimlar va tariflar bilan yaqindan tanishing.",
      links: [
        { href: "/pos-tizimi", label: "POS tizimi", desc: "RAOS — do'kon va retail uchun tayyor kassa, ombor va savdo tizimi." },
        { href: "/xodim-nazorati", label: "Xodim nazorati", desc: "WorkControl — xodim samaradorligi va ish vaqti nazorati." },
        { href: "/tariflar", label: "Tariflar", desc: "Obuna narxlari va tariflar bilan tanishing." },
      ],
    },
    service: {
      name: "TezCode Systems — tayyor SaaS mahsulotlar",
      description:
        "Oylik obuna asosidagi tayyor SaaS mahsulotlar: RAOS (do'kon uchun POS — kassa, ombor, mijozlar, soliq hisoboti) va WorkControl (xodim nazorati va samaradorlik). Tezcode, Toshkent.",
      serviceType: "Tayyor SaaS mahsulotlar / oylik obuna",
    },
  },

  ru: {
    hero: {
      badge: "TezCode Systems — готовый SaaS",
      title1: "Готовые SaaS-продукты",
      titleAccent: "— по подписке",
      title2: "",
      subtitle:
        "RAOS (POS для магазина) и WorkControl (контроль сотрудников) — готовые, проверенные SaaS-продукты. Подключаетесь сегодня — прибыль завтра. Без долгой заказной разработки, ежемесячная подписка.",
      trust: "Бесплатное демо • Ежемесячная подписка • Быстрое подключение и обучение",
      ctaPrimary: "Запросить бесплатное демо",
      ctaSecondary: "Смотреть продукты",
    },
    capabilities: {
      badge: "Продукты",
      title: "Какие готовые системы",
      titleAccent: "мы предлагаем?",
      subtitle:
        "Готовый SaaS, который запускается сегодня, без разработки с нуля. Каждый решает конкретную бизнес-задачу.",
      items: [
        { icon: "store", title: "RAOS — POS для магазина", desc: "Касса, продажи и чеки — в одном месте. Готовая кассовая система для ритейла и магазинов. Подписка, быстрое подключение." },
        { icon: "package", title: "RAOS — склад и остатки", desc: "Остатки в реальном времени, приход-расход, инвентаризация. Видите, что заканчивается и что продаётся лучше всего." },
        { icon: "users", title: "RAOS — клиенты и лояльность", desc: "База клиентов, скидки и программа лояльности. Знайте своих постоянных клиентов и растите продажи." },
        { icon: "receipt", title: "RAOS — налоговая отчётность", desc: "Налоговые и фискальные отчёты автоматически. Чеки и документы в порядке — без ручных расчётов." },
        { icon: "monitor", title: "WorkControl — контроль сотрудников", desc: "Видите, чем сотрудники заняты на компьютере: активное время, программы, продуктивность. Контроль рабочего времени." },
        { icon: "bar-chart-2", title: "WorkControl — отчёты продуктивности", desc: "Кто работает больше, кто меньше — в наглядных отчётах. Управляйте продуктивностью команды по цифрам." },
      ],
    },
    process: {
      badge: "Как подключить",
      title: "4 шага до",
      titleAccent: "запуска",
      subtitle: "Строить с нуля не нужно. Переход от демо к боевой работе — за несколько дней.",
      steps: [
        { num: "01", title: "Бесплатное демо", desc: "Показываем продукт вживую: как RAOS или WorkControl подходит именно вашему бизнесу. Без обязательств.", icon: "message-circle" },
        { num: "02", title: "Настройка (setup)", desc: "Аккаунт, данные магазина или команды, нужные интеграции. Поможем перенести данные из Excel или 1C.", icon: "wrench" },
        { num: "03", title: "Обучение", desc: "Обучаем ваших сотрудников работе в системе. Коротко и практично — и кассир, и менеджер сразу начинают работать.", icon: "book-open" },
        { num: "04", title: "Запуск в работу", desc: "Система идёт в боевую работу, а мы рядом. Поддержка входит в подписку.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Почему готовый SaaS",
      title: "Быстрее и дешевле,",
      titleAccent: "чем строить с нуля",
      subtitle: "Почему подключить готовый SaaS выгоднее, чем заказывать разработку под себя.",
      items: [
        { tag: "01", title: "Подключается сегодня", desc: "Не ждёте месяцы разработки. Продукт готов — запускаетесь за несколько дней." },
        { tag: "02", title: "Проверено на практике", desc: "RAOS и WorkControl работают в реальном бизнесе. Ошибки уже прошли другие, а не вы." },
        { tag: "03", title: "Ежемесячная оплата", desc: "Без большой стартовой инвестиции. Подписка — пользуетесь, пока нужно, останавливаете, когда не нужно." },
        { tag: "04", title: "Поддержка в подписке", desc: "Обновления, исправления и техподдержка входят в подписку. Не нужно держать отдельную команду." },
      ],
    },
    cta: {
      badge: "Время начать",
      title: "Попробуйте готовую",
      titleAccent: "систему сегодня",
      subtitle: "На бесплатном демо покажем RAOS или WorkControl вживую и скажем, подходит ли вашему бизнесу. Без обязательств.",
      button: "Запросить демо в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с командой.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Частые вопросы о готовых продуктах TezCode Systems.",
      items: [
        { q: "Как работает оплата?", a: "Продукты TezCode Systems работают по ежемесячной подписке. Большая стартовая инвестиция не нужна — в ежемесячный платёж входят использование, обновления и поддержка. Точный тариф зависит от размера бизнеса." },
        { q: "Каким бизнесам подходит?", a: "RAOS — для магазинов, ритейла и торговых точек (касса, склад, клиенты, налоговая отчётность). WorkControl — для команд, работающих за компьютером (офис, IT, call-центр), для контроля сотрудников и продуктивности." },
        { q: "Можно ли перейти из Excel или 1C?", a: "Да. На этапе настройки поможем перенести ваши данные (товары, остатки, клиенты) в систему. Не нужно вводить всё заново." },
        { q: "Сколько времени занимает подключение?", a: "Поскольку продукт готов, долгой разработки нет. После демо настройка, обучение и запуск обычно занимают несколько дней." },
        { q: "Есть ли поддержка?", a: "Да. Техподдержка, обновления и мониторинг входят в подписку. При вопросах или проблемах наша команда помогает через Telegram и email." },
        { q: "А если нужна и заказная разработка?", a: "TezCode Systems сфокусирован на готовом SaaS. Если вам нужна полностью индивидуальная система с нуля, Tezcode предлагает и заказную разработку — оплата: 30% предоплата." },
      ],
    },
    related: {
      badge: "Связанные страницы",
      title: "Дополнительные",
      titleAccent: "направления",
      subtitle: "Познакомьтесь ближе с нашими готовыми системами и тарифами.",
      links: [
        { href: "/pos-tizimi", label: "POS-система", desc: "RAOS — готовая касса, склад и продажи для магазинов и ритейла." },
        { href: "/xodim-nazorati", label: "Контроль сотрудников", desc: "WorkControl — продуктивность сотрудников и контроль рабочего времени." },
        { href: "/tariflar", label: "Тарифы", desc: "Ознакомьтесь с ценами на подписку и тарифами." },
      ],
    },
    service: {
      name: "TezCode Systems — готовые SaaS-продукты",
      description:
        "Готовые SaaS-продукты по ежемесячной подписке: RAOS (POS для магазина — касса, склад, клиенты, налоговая отчётность) и WorkControl (контроль сотрудников и продуктивность). Tezcode, Ташкент.",
      serviceType: "Готовые SaaS-продукты / ежемесячная подписка",
    },
  },

  en: {
    hero: {
      badge: "TezCode Systems — ready SaaS",
      title1: "Ready-made SaaS products",
      titleAccent: "— on subscription",
      title2: "",
      subtitle:
        "RAOS (retail POS) and WorkControl (employee monitoring) — ready, proven SaaS products. Connect today, profit tomorrow. No long custom build — a monthly subscription.",
      trust: "Free demo • Monthly subscription • Fast onboarding and training",
      ctaPrimary: "Request a free demo",
      ctaSecondary: "View products",
    },
    capabilities: {
      badge: "Products",
      title: "Which ready systems",
      titleAccent: "do we offer?",
      subtitle:
        "Ready SaaS that goes live today, without building from scratch. Each one solves a concrete business problem.",
      items: [
        { icon: "store", title: "RAOS — retail POS", desc: "Cashier, sales and receipts in one place. A ready checkout system for retail and shops. Subscription, fast onboarding." },
        { icon: "package", title: "RAOS — inventory & stock", desc: "Real-time stock, in/out flow, inventory counts. See what's running low and what sells best." },
        { icon: "users", title: "RAOS — customers & loyalty", desc: "Customer database, discounts and a loyalty program. Know your returning customers and grow sales." },
        { icon: "receipt", title: "RAOS — tax reporting", desc: "Tax and fiscal reports, automatically. Receipts and documents in order — no manual calculations." },
        { icon: "monitor", title: "WorkControl — employee monitoring", desc: "See what employees do on the computer: active time, apps, productivity. Working-time control." },
        { icon: "bar-chart-2", title: "WorkControl — productivity reports", desc: "Who works more, who less — in clear reports. Manage team productivity by the numbers." },
      ],
    },
    process: {
      badge: "How to connect",
      title: "4 steps to",
      titleAccent: "go live",
      subtitle: "No need to build from scratch. From demo to live operation — within a few days.",
      steps: [
        { num: "01", title: "Free demo", desc: "We show the product live: how RAOS or WorkControl fits your exact business. No obligations.", icon: "message-circle" },
        { num: "02", title: "Setup", desc: "Account, shop or team data, the integrations you need. We help migrate data from Excel or 1C.", icon: "wrench" },
        { num: "03", title: "Training", desc: "We train your staff to work in the system. Short and practical — cashier and manager start working right away.", icon: "book-open" },
        { num: "04", title: "Go live", desc: "The system goes into real operation while we stay by your side. Support is included in the subscription.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Why ready SaaS",
      title: "Faster and cheaper",
      titleAccent: "than building from scratch",
      subtitle: "Why connecting a ready SaaS beats commissioning a custom build.",
      items: [
        { tag: "01", title: "Connects today", desc: "No waiting months for development. The product is ready — you go live within days." },
        { tag: "02", title: "Proven in practice", desc: "RAOS and WorkControl are products running in real businesses. Others already hit the bugs, not you." },
        { tag: "03", title: "Monthly payment", desc: "No large upfront investment. A subscription — use it while you need it, pause it when you don't." },
        { tag: "04", title: "Support in the subscription", desc: "Updates, fixes and technical support are included. No need to keep a separate team." },
      ],
    },
    cta: {
      badge: "Time to start",
      title: "Try a ready",
      titleAccent: "system today",
      subtitle: "On a free demo we'll show RAOS or WorkControl live and tell you if it fits your business. No obligations.",
      button: "Request a demo on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach our team directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "Common questions about TezCode Systems ready products.",
      items: [
        { q: "How does pricing work?", a: "TezCode Systems products run on a monthly subscription. No large upfront investment — the monthly payment covers usage, updates and support. The exact plan depends on your business size." },
        { q: "Which businesses fit?", a: "RAOS is for shops, retail and points of sale (cashier, inventory, customers, tax reporting). WorkControl is for teams that work on computers (office, IT, call center) for employee monitoring and productivity." },
        { q: "Can I migrate from Excel or 1C?", a: "Yes. During setup we help migrate your existing data (products, stock, customers) into the system. No need to re-enter everything." },
        { q: "How long does onboarding take?", a: "Since the product is ready, there's no long development. After the demo, setup, training and go-live usually take a few days." },
        { q: "Is there support?", a: "Yes. Technical support, updates and monitoring are included in the subscription. For questions or issues, our team helps via Telegram and email." },
        { q: "What if I also need a custom build?", a: "TezCode Systems focuses on ready SaaS. If you need a fully custom system from scratch, Tezcode also offers custom development — payment starts with a 30% deposit." },
      ],
    },
    related: {
      badge: "Related pages",
      title: "Explore",
      titleAccent: "more",
      subtitle: "Get to know our ready systems and plans more closely.",
      links: [
        { href: "/pos-tizimi", label: "POS system", desc: "RAOS — ready cashier, inventory and sales for shops and retail." },
        { href: "/xodim-nazorati", label: "Employee monitoring", desc: "WorkControl — employee productivity and working-time control." },
        { href: "/tariflar", label: "Pricing", desc: "See subscription prices and plans." },
      ],
    },
    service: {
      name: "TezCode Systems — ready-made SaaS products",
      description:
        "Ready-made SaaS products on a monthly subscription: RAOS (retail POS — cashier, inventory, customers, tax reporting) and WorkControl (employee monitoring and productivity). Tezcode, Tashkent.",
      serviceType: "Ready-made SaaS products / monthly subscription",
    },
  },

  ar: {
    hero: {
      badge: "TezCode Systems — SaaS جاهز",
      title1: "منتجات SaaS جاهزة",
      titleAccent: "— باشتراك شهري",
      title2: "",
      subtitle:
        "RAOS (نظام نقاط بيع للمتاجر) وWorkControl (مراقبة الموظفين) — منتجات SaaS جاهزة ومُجرَّبة. تتصل اليوم — والربح غداً. بلا تطوير مخصص طويل، اشتراك شهري.",
      trust: "عرض تجريبي مجاني • اشتراك شهري • تفعيل وتدريب سريع",
      ctaPrimary: "اطلب عرضاً تجريبياً مجانياً",
      ctaSecondary: "عرض المنتجات",
    },
    capabilities: {
      badge: "المنتجات",
      title: "أي أنظمة جاهزة",
      titleAccent: "نقدّم؟",
      subtitle:
        "SaaS جاهز يعمل اليوم دون بناء من الصفر. كل منتج يحل مشكلة عمل محددة.",
      items: [
        { icon: "store", title: "RAOS — نقاط بيع للمتجر", desc: "الكاشير والمبيعات والإيصالات في مكان واحد. نظام كاشير جاهز للتجزئة والمتاجر. اشتراك، تفعيل سريع." },
        { icon: "package", title: "RAOS — المخزون والرصيد", desc: "رصيد آني، دخول وخروج، جرد. ترى ما يقارب النفاد وما يُباع أكثر." },
        { icon: "users", title: "RAOS — العملاء والولاء", desc: "قاعدة عملاء، خصومات وبرنامج ولاء. اعرف عملاءك الدائمين وزد المبيعات." },
        { icon: "receipt", title: "RAOS — التقارير الضريبية", desc: "تقارير ضريبية ومالية تلقائياً. الإيصالات والمستندات مرتبة — بلا حسابات يدوية." },
        { icon: "monitor", title: "WorkControl — مراقبة الموظفين", desc: "ترى ماذا يفعل الموظفون على الحاسوب: الوقت النشط، التطبيقات، الإنتاجية. مراقبة وقت العمل." },
        { icon: "bar-chart-2", title: "WorkControl — تقارير الإنتاجية", desc: "من يعمل أكثر ومن أقل — في تقارير واضحة. أدِر إنتاجية الفريق بالأرقام." },
      ],
    },
    process: {
      badge: "كيفية الاتصال",
      title: "4 خطوات إلى",
      titleAccent: "التشغيل",
      subtitle: "لا حاجة للبناء من الصفر. الانتقال من العرض التجريبي إلى التشغيل الفعلي خلال أيام.",
      steps: [
        { num: "01", title: "عرض تجريبي مجاني", desc: "نعرض المنتج مباشرة: كيف يناسب RAOS أو WorkControl عملك بالضبط. بلا التزام.", icon: "message-circle" },
        { num: "02", title: "الإعداد (setup)", desc: "حساب، بيانات المتجر أو الفريق، التكاملات اللازمة. نساعد في نقل البيانات من Excel أو 1C.", icon: "wrench" },
        { num: "03", title: "التدريب", desc: "ندرّب موظفيك على العمل في النظام. قصير وعملي — الكاشير والمدير يبدآن العمل فوراً.", icon: "book-open" },
        { num: "04", title: "الانطلاق الفعلي", desc: "يدخل النظام التشغيل الفعلي ونحن بجانبك. الدعم ضمن الاشتراك.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "لماذا SaaS جاهز",
      title: "أسرع وأرخص",
      titleAccent: "من البناء من الصفر",
      subtitle: "لماذا توصيل SaaS جاهز أفضل من طلب تطوير مخصص.",
      items: [
        { tag: "01", title: "يتصل اليوم", desc: "لا تنتظر شهوراً من التطوير. المنتج جاهز — تنطلق خلال أيام." },
        { tag: "02", title: "مُجرَّب عملياً", desc: "RAOS وWorkControl منتجات تعمل في أعمال حقيقية. الأخطاء مرّ بها آخرون، لا أنت." },
        { tag: "03", title: "دفع شهري", desc: "بلا استثمار مبدئي كبير. اشتراك — تستخدمه ما دمت تحتاجه وتوقفه عند عدم الحاجة." },
        { tag: "04", title: "الدعم ضمن الاشتراك", desc: "التحديثات والإصلاحات والدعم الفني ضمن الاشتراك. لا حاجة لفريق منفصل." },
      ],
    },
    cta: {
      badge: "وقت البدء",
      title: "جرّب نظاماً",
      titleAccent: "جاهزاً اليوم",
      subtitle: "في العرض التجريبي المجاني نعرض RAOS أو WorkControl مباشرة ونخبرك إن كان يناسب عملك. بلا التزام.",
      button: "اطلب عرضاً عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع فريقنا.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أسئلة شائعة عن منتجات TezCode Systems الجاهزة.",
      items: [
        { q: "كيف يعمل الدفع؟", a: "تعمل منتجات TezCode Systems باشتراك شهري. لا حاجة لاستثمار مبدئي كبير — يشمل الدفع الشهري الاستخدام والتحديثات والدعم. تعتمد الباقة الدقيقة على حجم عملك." },
        { q: "لأي الأعمال تناسب؟", a: "RAOS للمتاجر والتجزئة ونقاط البيع (كاشير، مخزون، عملاء، تقارير ضريبية). WorkControl للفرق التي تعمل على الحاسوب (مكتب، IT، مركز اتصال) لمراقبة الموظفين والإنتاجية." },
        { q: "هل يمكنني الانتقال من Excel أو 1C؟", a: "نعم. في مرحلة الإعداد نساعد في نقل بياناتك (المنتجات، الرصيد، العملاء) إلى النظام. لا حاجة لإدخال كل شيء من جديد." },
        { q: "كم يستغرق التفعيل؟", a: "بما أن المنتج جاهز، لا يوجد تطوير طويل. بعد العرض التجريبي، الإعداد والتدريب والانطلاق يستغرق عادة أياماً قليلة." },
        { q: "هل يوجد دعم؟", a: "نعم. الدعم الفني والتحديثات والمراقبة ضمن الاشتراك. عند الأسئلة أو المشاكل يساعدك فريقنا عبر Telegram والبريد الإلكتروني." },
        { q: "وماذا لو احتجت تطويراً مخصصاً أيضاً؟", a: "تركّز TezCode Systems على SaaS الجاهز. إذا احتجت نظاماً مخصصاً بالكامل من الصفر، تقدّم Tezcode أيضاً التطوير المخصص — الدفع: 30% مقدمًا." },
      ],
    },
    related: {
      badge: "صفحات ذات صلة",
      title: "اتجاهات",
      titleAccent: "إضافية",
      subtitle: "تعرّف عن قرب على أنظمتنا الجاهزة وباقاتنا.",
      links: [
        { href: "/pos-tizimi", label: "نظام نقاط البيع", desc: "RAOS — كاشير ومخزون ومبيعات جاهزة للمتاجر والتجزئة." },
        { href: "/xodim-nazorati", label: "مراقبة الموظفين", desc: "WorkControl — إنتاجية الموظفين ومراقبة وقت العمل." },
        { href: "/tariflar", label: "الباقات", desc: "اطّلع على أسعار الاشتراك والباقات." },
      ],
    },
    service: {
      name: "TezCode Systems — منتجات SaaS جاهزة",
      description:
        "منتجات SaaS جاهزة باشتراك شهري: RAOS (نقاط بيع للمتاجر — كاشير، مخزون، عملاء، تقارير ضريبية) وWorkControl (مراقبة الموظفين والإنتاجية). Tezcode، طشقند.",
      serviceType: "منتجات SaaS جاهزة / اشتراك شهري",
    },
  },

  uk: {
    hero: {
      badge: "TezCode Systems — готовий SaaS",
      title1: "Готові SaaS-продукти",
      titleAccent: "— за підпискою",
      title2: "",
      subtitle:
        "RAOS (POS для магазину) і WorkControl (контроль співробітників) — готові, перевірені SaaS-продукти. Підключаєтеся сьогодні — прибуток завтра. Без довгої замовної розробки, щомісячна підписка.",
      trust: "Безкоштовне демо • Щомісячна підписка • Швидке підключення та навчання",
      ctaPrimary: "Запросити безкоштовне демо",
      ctaSecondary: "Дивитись продукти",
    },
    capabilities: {
      badge: "Продукти",
      title: "Які готові системи",
      titleAccent: "ми пропонуємо?",
      subtitle:
        "Готовий SaaS, який запускається сьогодні, без розробки з нуля. Кожен вирішує конкретне бізнес-завдання.",
      items: [
        { icon: "store", title: "RAOS — POS для магазину", desc: "Каса, продажі та чеки — в одному місці. Готова касова система для ритейлу та магазинів. Підписка, швидке підключення." },
        { icon: "package", title: "RAOS — склад і залишки", desc: "Залишки в реальному часі, прихід-видаток, інвентаризація. Бачите, що закінчується і що продається найкраще." },
        { icon: "users", title: "RAOS — клієнти та лояльність", desc: "База клієнтів, знижки та програма лояльності. Знайте своїх постійних клієнтів і зростайте у продажах." },
        { icon: "receipt", title: "RAOS — податкова звітність", desc: "Податкові та фіскальні звіти автоматично. Чеки й документи в порядку — без ручних розрахунків." },
        { icon: "monitor", title: "WorkControl — контроль співробітників", desc: "Бачите, чим співробітники зайняті на комп'ютері: активний час, програми, продуктивність. Контроль робочого часу." },
        { icon: "bar-chart-2", title: "WorkControl — звіти продуктивності", desc: "Хто працює більше, хто менше — у наочних звітах. Керуйте продуктивністю команди за цифрами." },
      ],
    },
    process: {
      badge: "Як підключити",
      title: "4 кроки до",
      titleAccent: "запуску",
      subtitle: "Будувати з нуля не потрібно. Перехід від демо до бойової роботи — за кілька днів.",
      steps: [
        { num: "01", title: "Безкоштовне демо", desc: "Показуємо продукт наживо: як RAOS або WorkControl підходить саме вашому бізнесу. Без зобов'язань.", icon: "message-circle" },
        { num: "02", title: "Налаштування (setup)", desc: "Акаунт, дані магазину або команди, потрібні інтеграції. Допоможемо перенести дані з Excel або 1C.", icon: "wrench" },
        { num: "03", title: "Навчання", desc: "Навчаємо ваших співробітників роботі в системі. Коротко й практично — і касир, і менеджер одразу починають працювати.", icon: "book-open" },
        { num: "04", title: "Запуск у роботу", desc: "Система йде в бойову роботу, а ми поруч. Підтримка входить у підписку.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Чому готовий SaaS",
      title: "Швидше й дешевше,",
      titleAccent: "ніж будувати з нуля",
      subtitle: "Чому підключити готовий SaaS вигідніше, ніж замовляти розробку під себе.",
      items: [
        { tag: "01", title: "Підключається сьогодні", desc: "Не чекаєте місяці розробки. Продукт готовий — запускаєтеся за кілька днів." },
        { tag: "02", title: "Перевірено на практиці", desc: "RAOS і WorkControl працюють у реальному бізнесі. Помилки вже пройшли інші, а не ви." },
        { tag: "03", title: "Щомісячна оплата", desc: "Без великої стартової інвестиції. Підписка — користуєтеся, поки потрібно, зупиняєте, коли не потрібно." },
        { tag: "04", title: "Підтримка у підписці", desc: "Оновлення, виправлення й техпідтримка входять у підписку. Не потрібно тримати окрему команду." },
      ],
    },
    cta: {
      badge: "Час починати",
      title: "Спробуйте готову",
      titleAccent: "систему сьогодні",
      subtitle: "На безкоштовному демо покажемо RAOS або WorkControl наживо і скажемо, чи підходить вашому бізнесу. Без зобов'язань.",
      button: "Запросити демо в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з командою.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "Часті запитання про готові продукти TezCode Systems.",
      items: [
        { q: "Як працює оплата?", a: "Продукти TezCode Systems працюють за щомісячною підпискою. Велика стартова інвестиція не потрібна — у щомісячний платіж входять використання, оновлення та підтримка. Точний тариф залежить від розміру бізнесу." },
        { q: "Яким бізнесам підходить?", a: "RAOS — для магазинів, ритейлу та торгових точок (каса, склад, клієнти, податкова звітність). WorkControl — для команд, що працюють за комп'ютером (офіс, IT, call-центр), для контролю співробітників і продуктивності." },
        { q: "Чи можна перейти з Excel або 1C?", a: "Так. На етапі налаштування допоможемо перенести ваші дані (товари, залишки, клієнти) в систему. Не потрібно вводити все заново." },
        { q: "Скільки часу займає підключення?", a: "Оскільки продукт готовий, довгої розробки немає. Після демо налаштування, навчання та запуск зазвичай займають кілька днів." },
        { q: "Чи є підтримка?", a: "Так. Техпідтримка, оновлення та моніторинг входять у підписку. За питаннями чи проблемами наша команда допомагає через Telegram та email." },
        { q: "А якщо потрібна й замовна розробка?", a: "TezCode Systems сфокусований на готовому SaaS. Якщо вам потрібна повністю індивідуальна система з нуля, Tezcode пропонує й замовну розробку — оплата: 30% передоплата." },
      ],
    },
    related: {
      badge: "Пов'язані сторінки",
      title: "Додаткові",
      titleAccent: "напрямки",
      subtitle: "Ознайомтеся ближче з нашими готовими системами та тарифами.",
      links: [
        { href: "/pos-tizimi", label: "POS-система", desc: "RAOS — готова каса, склад і продажі для магазинів та ритейлу." },
        { href: "/xodim-nazorati", label: "Контроль співробітників", desc: "WorkControl — продуктивність співробітників і контроль робочого часу." },
        { href: "/tariflar", label: "Тарифи", desc: "Ознайомтеся з цінами на підписку та тарифами." },
      ],
    },
    service: {
      name: "TezCode Systems — готові SaaS-продукти",
      description:
        "Готові SaaS-продукти за щомісячною підпискою: RAOS (POS для магазину — каса, склад, клієнти, податкова звітність) і WorkControl (контроль співробітників і продуктивність). Tezcode, Ташкент.",
      serviceType: "Готові SaaS-продукти / щомісячна підписка",
    },
  },
};
