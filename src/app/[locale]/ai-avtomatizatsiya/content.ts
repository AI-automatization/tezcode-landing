import type { ServicePageContent } from "@/components/service-page/types";

// Content for /ai-avtomatizatsiya — target keyword: "AI avtomatizatsiya" /
// "sun'iy intellekt biznes uchun" / "AI автоматизация" / "ИИ для бизнеса".
// Only confirmed Tezcode facts are used. No fabricated client counts or percentages.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "AI avtomatizatsiya — Tezcode",
      title1: "Biznesingizni",
      titleAccent: "AI bilan avtomatlashtiring",
      title2: "",
      subtitle:
        "Sun'iy intellekt (AI) takroriy ishlarni o'zi bajaradi: hisobot, mijoz xizmati, sotuv, ombor. Tezcode AI Software Factory sizning jarayoningizga moslab AI yechim quradi.",
      trust: "Bepul 30 daqiqa konsultatsiya • To'lov faqat MVP tayyor bo'lganda",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "Nima avtomatlashtira olamiz?",
    },
    capabilities: {
      badge: "Imkoniyatlar",
      title: "Nima",
      titleAccent: "avtomatlashtira olamiz?",
      subtitle:
        "Qo'lda qilinadigan har takroriy ish — AI uchun nomzod. Mana eng ko'p so'raladigan yo'nalishlar.",
      items: [
        { icon: "📊", title: "Avtomatik hisobot", desc: "Excel, 1C, savdo va ombordan ma'lumot o'zi yig'iladi. Kunlik/oylik hisobot soatlab emas, soniyalarda tayyor bo'ladi." },
        { icon: "💬", title: "AI mijoz xizmati", desc: "Telegram va veb-saytda 24/7 javob beradigan AI chatbot. Tez-tez beriladigan savollarga o'zi javob beradi, murakkabini operatorga uzatadi." },
        { icon: "🛒", title: "Sotuv va lidlarni avtomatlashtirish", desc: "Yangi mijoz keldi — AI uni qayd qiladi, eslatma yuboradi, kerakli bo'limga yo'naltiradi. Hech bir buyurtma yo'qolmaydi." },
        { icon: "📦", title: "Ombor va buyurtma nazorati", desc: "Mahsulot tugayotganda ogohlantirish, buyurtma holatini kuzatish, yetkazib berishni avtomatik xabar qilish." },
        { icon: "📄", title: "Hujjat va shartnoma tahlili", desc: "AI hujjatlardan kerakli ma'lumotni ajratib oladi, shartnomalarni umumlashtiradi, kerakli javobni topadi." },
        { icon: "🔗", title: "Tizimlarni o'zaro ulash", desc: "Telegram, Google Sheets, 1C, to'lov tizimi, CRM — barchasini bitta avtomatik oqimga bog'laymiz (integratsiya)." },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "4 qadamda",
      titleAccent: "AI yechimga",
      subtitle: "Birinchi 30 daqiqa bepul. Keyin har qadam aniq narx va aniq muddat bilan.",
      steps: [
        { num: "01", title: "Bepul konsultatsiya", desc: "Biznesingizni o'rganamiz: qaysi ish ko'p vaqt oladi, nimani avtomatlashtirish foydali. Majburiyat yo'q.", icon: "💬" },
        { num: "02", title: "AI auditi + taklif", desc: "Qaysi jarayonni AI bajara oladi, qaysi vositalar kerak — aniq reja, narx va muddat bilan yozma taklif.", icon: "🔍" },
        { num: "03", title: "MVP yaratish", desc: "2-4 hafta ichida ishlovchi AI yechim. Har hafta ko'rsatamiz, siz sinab fikr berasiz.", icon: "⚡" },
        { num: "04", title: "Joriy etish + qo'llab-quvvatlash", desc: "Tizimga ulaymiz, jamoangizni o'rgatamiz, ishlashini kuzatamiz va yaxshilab boramiz.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "Real misollar",
      title: "Biz qurgan",
      titleAccent: "AI yechimlar",
      subtitle: "Tezcode o'z mahsulotlarida AI ni kunlik ishlatadi — quyidagilar real ishlovchi misollar.",
      items: [
        { tag: "01", title: "AI Office — 12 bo'limli virtual ofis", desc: "Sotuv, HR, marketing va boshqa bo'limlar uchun AI agentlar. Tezcode o'zi shu tizim bilan 14 dasturchi va ko'plab loyihani boshqaradi." },
        { tag: "02", title: "RAOS — savdo avtomatizatsiyasi", desc: "Do'konlar uchun POS: kassa, ombor, hisobot bir joyda. Sotuv ma'lumoti avtomatik yig'iladi — qo'lda Excel to'ldirish yo'q." },
        { tag: "03", title: "Salomat AI — ovozli tibbiy yordamchi", desc: "CoreMed ekotizimida bemor bilan ovoz orqali gaplashadigan AI assistent. Murakkab AI mahsulotni ham qura olamiz." },
        { tag: "04", title: "Telegram bot avtomatizatsiyasi", desc: "Buyurtma qabul qilish, eslatma yuborish, hisobotni Telegramga jo'natish — kichik biznes uchun arzon va tez yechim." },
      ],
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Qaysi ishni AI ga",
      titleAccent: "topshirsangiz bo'ladi?",
      subtitle: "30 daqiqalik bepul konsultatsiyada aniqlaymiz. Hech qanday majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki hello@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "AI avtomatizatsiya haqida ko'p so'raladigan savollar.",
      items: [
        { q: "AI avtomatizatsiya nima va menga kerakmi?", a: "AI avtomatizatsiya — bu takroriy ishlarni (hisobot tuzish, savolga javob berish, ma'lumot kiritish) sun'iy intellekt yordamida odam aralashuvisiz bajartirish. Agar jamoangiz har kuni bir xil qo'l ishini takrorlasa — sizga kerak." },
        { q: "Kichik biznes ham AI dan foydalana oladimi?", a: "Ha. Telegram bot, avtomatik hisobot yoki AI chatbot kabi yechimlar kichik biznes uchun ham arzon. Katta byudjet shart emas — eng ko'p vaqt oladigan bitta jarayondan boshlaymiz." },
        { q: "Qancha vaqtda tayyor bo'ladi?", a: "Oddiy avtomatizatsiya (bot, hisobot) — 1-2 hafta. To'liqroq AI yechim — 2-4 hafta MVP. Har hafta ishlovchi versiyani ko'rsatib boramiz." },
        { q: "Narxi qancha?", a: "Aniq narx faqat AI auditidan keyin beriladi, chunki har biznes jarayoni har xil. Konsultatsiya bepul, to'lov esa faqat MVP tayyor bo'lganda boshlanadi." },
        { q: "Mavjud tizimlarimga ulanadimi (1C, Telegram, CRM)?", a: "Ha. Biz Telegram, Google Sheets, 1C, to'lov tizimlari va CRM bilan integratsiya quramiz, shunda AI sizning hozirgi ish oqimingiz ichida ishlaydi." },
        { q: "Ma'lumotlarim xavfsiz bo'ladimi?", a: "Ha. Maxfiy ma'lumotlar siz nazorat qiladigan muhitda saqlanadi, kirish huquqlari cheklanadi. Xavfsizlik talablarini konsultatsiyada batafsil kelishamiz." },
      ],
    },
    service: {
      name: "AI avtomatizatsiya xizmati — Tezcode",
      description:
        "Biznes jarayonlarini sun'iy intellekt bilan avtomatlashtirish: avtomatik hisobot, AI chatbot, sotuv va ombor avtomatizatsiyasi, tizimlarni integratsiya qilish. Toshkent, O'zbekiston.",
      serviceType: "AI avtomatizatsiya / sun'iy intellekt yechimlari",
    },
  },

  ru: {
    hero: {
      badge: "AI автоматизация — Tezcode",
      title1: "Автоматизируйте бизнес",
      titleAccent: "с помощью ИИ",
      title2: "",
      subtitle:
        "Искусственный интеллект сам выполняет рутину: отчёты, поддержку клиентов, продажи, склад. Tezcode AI Software Factory строит ИИ-решение под ваши процессы.",
      trust: "Бесплатная 30-мин консультация • Оплата только после готового MVP",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Что можем автоматизировать?",
    },
    capabilities: {
      badge: "Возможности",
      title: "Что мы можем",
      titleAccent: "автоматизировать?",
      subtitle: "Любая повторяющаяся ручная работа — кандидат на автоматизацию с ИИ. Самые частые направления.",
      items: [
        { icon: "📊", title: "Автоматические отчёты", desc: "Данные из Excel, 1C, продаж и склада собираются сами. Ежедневный/месячный отчёт готов за секунды, а не за часы." },
        { icon: "💬", title: "ИИ-поддержка клиентов", desc: "AI-чатбот в Telegram и на сайте отвечает 24/7. На частые вопросы отвечает сам, сложные передаёт оператору." },
        { icon: "🛒", title: "Автоматизация продаж и лидов", desc: "Пришёл новый клиент — ИИ фиксирует его, отправляет напоминание, направляет в нужный отдел. Ни одна заявка не теряется." },
        { icon: "📦", title: "Контроль склада и заказов", desc: "Оповещение о заканчивающемся товаре, отслеживание статуса заказа, автоуведомления о доставке." },
        { icon: "📄", title: "Анализ документов и договоров", desc: "ИИ извлекает нужные данные из документов, обобщает договоры, находит нужный ответ." },
        { icon: "🔗", title: "Связывание систем", desc: "Telegram, Google Sheets, 1C, платёжная система, CRM — соединяем всё в единый автоматический поток (интеграция)." },
      ],
    },
    process: {
      badge: "Как мы работаем",
      title: "4 шага до",
      titleAccent: "ИИ-решения",
      subtitle: "Первые 30 минут бесплатно. Дальше каждый шаг с точной ценой и сроком.",
      steps: [
        { num: "01", title: "Бесплатная консультация", desc: "Изучаем бизнес: какая работа отнимает время, что выгодно автоматизировать. Без обязательств.", icon: "💬" },
        { num: "02", title: "ИИ-аудит + предложение", desc: "Какой процесс может выполнить ИИ, какие инструменты нужны — план, цена и срок в письменном виде.", icon: "🔍" },
        { num: "03", title: "Создание MVP", desc: "Рабочее ИИ-решение за 2-4 недели. Показываем каждую неделю, вы тестируете и даёте обратную связь.", icon: "⚡" },
        { num: "04", title: "Внедрение + поддержка", desc: "Подключаем к системе, обучаем команду, следим за работой и улучшаем.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "Реальные примеры",
      title: "ИИ-решения,",
      titleAccent: "которые мы построили",
      subtitle: "Tezcode использует ИИ в своих продуктах ежедневно — вот реально работающие примеры.",
      items: [
        { tag: "01", title: "AI Office — виртуальный офис из 12 отделов", desc: "AI-агенты для продаж, HR, маркетинга и других отделов. Tezcode сам управляет с его помощью 14 разработчиками и множеством проектов." },
        { tag: "02", title: "RAOS — автоматизация торговли", desc: "POS для магазинов: касса, склад, отчёты в одном месте. Данные о продажах собираются автоматически — без ручного Excel." },
        { tag: "03", title: "Salomat AI — голосовой медицинский ассистент", desc: "В экосистеме CoreMed ИИ-ассистент общается с пациентом голосом. Мы способны построить и сложный ИИ-продукт." },
        { tag: "04", title: "Автоматизация через Telegram-бота", desc: "Приём заказов, напоминания, отправка отчётов в Telegram — недорогое и быстрое решение для малого бизнеса." },
      ],
    },
    cta: {
      badge: "Время начать",
      title: "Какую работу можно",
      titleAccent: "доверить ИИ?",
      subtitle: "Определим на бесплатной 30-минутной консультации. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на hello@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Частые вопросы об ИИ-автоматизации.",
      items: [
        { q: "Что такое ИИ-автоматизация и нужна ли она мне?", a: "ИИ-автоматизация — это выполнение рутинных задач (составление отчётов, ответы на вопросы, ввод данных) с помощью искусственного интеллекта без участия человека. Если ваша команда каждый день повторяет одну и ту же ручную работу — она вам нужна." },
        { q: "Может ли малый бизнес использовать ИИ?", a: "Да. Решения вроде Telegram-бота, автоматических отчётов или AI-чатбота доступны и для малого бизнеса. Большой бюджет не нужен — начинаем с одного самого затратного по времени процесса." },
        { q: "Сколько времени занимает разработка?", a: "Простая автоматизация (бот, отчёт) — 1-2 недели. Более полное ИИ-решение — MVP за 2-4 недели. Каждую неделю показываем рабочую версию." },
        { q: "Сколько это стоит?", a: "Точная цена даётся только после ИИ-аудита, ведь процессы у всех разные. Консультация бесплатна, оплата начинается только после готового MVP." },
        { q: "Подключится ли к моим системам (1C, Telegram, CRM)?", a: "Да. Мы строим интеграцию с Telegram, Google Sheets, 1C, платёжными системами и CRM, чтобы ИИ работал внутри вашего текущего рабочего процесса." },
        { q: "Будут ли мои данные в безопасности?", a: "Да. Конфиденциальные данные хранятся в подконтрольной вам среде, доступы ограничены. Требования к безопасности подробно согласуем на консультации." },
      ],
    },
    service: {
      name: "Услуга ИИ-автоматизации — Tezcode",
      description:
        "Автоматизация бизнес-процессов с помощью искусственного интеллекта: автоматические отчёты, AI-чатбот, автоматизация продаж и склада, интеграция систем. Ташкент, Узбекистан.",
      serviceType: "ИИ-автоматизация / решения на искусственном интеллекте",
    },
  },

  en: {
    hero: {
      badge: "AI automation — Tezcode",
      title1: "Automate your business",
      titleAccent: "with AI",
      title2: "",
      subtitle:
        "Artificial intelligence handles the repetitive work: reports, customer support, sales, inventory. Tezcode AI Software Factory builds an AI solution around your processes.",
      trust: "Free 30-min consultation • You pay only after MVP is delivered",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "What can we automate?",
    },
    capabilities: {
      badge: "Capabilities",
      title: "What can we",
      titleAccent: "automate?",
      subtitle: "Every repetitive manual task is a candidate for AI automation. Here are the most requested.",
      items: [
        { icon: "📊", title: "Automated reports", desc: "Data from Excel, 1C, sales and inventory is gathered automatically. Daily/monthly reports ready in seconds, not hours." },
        { icon: "💬", title: "AI customer support", desc: "An AI chatbot on Telegram and your website answers 24/7. It handles FAQs itself and escalates complex cases to a human." },
        { icon: "🛒", title: "Sales & lead automation", desc: "A new lead arrives — AI logs it, sends reminders, routes it to the right team. No order ever slips through." },
        { icon: "📦", title: "Inventory & order control", desc: "Low-stock alerts, order status tracking, automatic delivery notifications." },
        { icon: "📄", title: "Document & contract analysis", desc: "AI extracts key data from documents, summarises contracts, finds the answer you need." },
        { icon: "🔗", title: "Connecting your systems", desc: "Telegram, Google Sheets, 1C, payment gateways, CRM — we wire them into one automated flow (integration)." },
      ],
    },
    process: {
      badge: "How we work",
      title: "4 steps to your",
      titleAccent: "AI solution",
      subtitle: "First 30 minutes are free. Then every step has a clear price and timeline.",
      steps: [
        { num: "01", title: "Free consultation", desc: "We study your business: which work eats the most time, what is worth automating. No obligations.", icon: "💬" },
        { num: "02", title: "AI audit + proposal", desc: "Which process AI can run, which tools are needed — a clear plan, price and timeline in writing.", icon: "🔍" },
        { num: "03", title: "Build the MVP", desc: "A working AI solution in 2-4 weeks. We demo weekly, you test and give feedback.", icon: "⚡" },
        { num: "04", title: "Rollout + support", desc: "We connect it to your systems, train your team, monitor and keep improving it.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "Real examples",
      title: "AI solutions",
      titleAccent: "we have built",
      subtitle: "Tezcode uses AI in its own products daily — these are real, working examples.",
      items: [
        { tag: "01", title: "AI Office — a 12-department virtual office", desc: "AI agents for sales, HR, marketing and more. Tezcode itself runs 14 developers and many projects with it." },
        { tag: "02", title: "RAOS — retail automation", desc: "POS for stores: register, inventory, reports in one place. Sales data is gathered automatically — no manual Excel." },
        { tag: "03", title: "Salomat AI — voice medical assistant", desc: "In the CoreMed ecosystem, an AI assistant talks to patients by voice. We can build complex AI products too." },
        { tag: "04", title: "Telegram bot automation", desc: "Take orders, send reminders, push reports to Telegram — an affordable, fast solution for small business." },
      ],
    },
    cta: {
      badge: "Time to start",
      title: "Which work could you",
      titleAccent: "hand to AI?",
      subtitle: "We'll figure it out in a free 30-minute consultation. No obligations.",
      button: "Message on Telegram",
      note: "Or email hello@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "Common questions about AI automation.",
      items: [
        { q: "What is AI automation and do I need it?", a: "AI automation means having artificial intelligence perform repetitive tasks (writing reports, answering questions, entering data) without human involvement. If your team repeats the same manual work every day, you need it." },
        { q: "Can a small business use AI?", a: "Yes. Solutions like a Telegram bot, automated reports or an AI chatbot are affordable for small businesses too. No big budget required — we start with the one process that costs you the most time." },
        { q: "How long does it take?", a: "Simple automation (a bot, a report) — 1-2 weeks. A fuller AI solution — an MVP in 2-4 weeks. We show a working version every week." },
        { q: "How much does it cost?", a: "An exact price comes only after the AI audit, since every business process differs. The consultation is free, and you pay only once the MVP is delivered." },
        { q: "Will it connect to my systems (1C, Telegram, CRM)?", a: "Yes. We build integrations with Telegram, Google Sheets, 1C, payment systems and CRM so the AI works inside your current workflow." },
        { q: "Will my data be safe?", a: "Yes. Sensitive data is stored in an environment you control, with restricted access. We agree on security requirements in detail during the consultation." },
      ],
    },
    service: {
      name: "AI automation service — Tezcode",
      description:
        "Automating business processes with artificial intelligence: automated reports, AI chatbots, sales and inventory automation, system integration. Tashkent, Uzbekistan.",
      serviceType: "AI automation / artificial intelligence solutions",
    },
  },

  ar: {
    hero: {
      badge: "أتمتة بالذكاء الاصطناعي — Tezcode",
      title1: "أتمت أعمالك",
      titleAccent: "بالذكاء الاصطناعي",
      title2: "",
      subtitle:
        "الذكاء الاصطناعي يتولى الأعمال المتكررة: التقارير، دعم العملاء، المبيعات، المخزون. تبني Tezcode حلاً ذكياً مصمماً حول عملياتك.",
      trust: "استشارة 30 دقيقة مجانية • الدفع فقط بعد تسليم MVP",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "ماذا يمكننا أتمتته؟",
    },
    capabilities: {
      badge: "الإمكانيات",
      title: "ماذا يمكننا",
      titleAccent: "أتمتته؟",
      subtitle: "كل مهمة يدوية متكررة مرشحة للأتمتة بالذكاء الاصطناعي. إليك الأكثر طلباً.",
      items: [
        { icon: "📊", title: "تقارير تلقائية", desc: "تُجمع البيانات من Excel و1C والمبيعات والمخزون تلقائياً. التقرير اليومي/الشهري جاهز في ثوانٍ بدل ساعات." },
        { icon: "💬", title: "دعم عملاء بالذكاء الاصطناعي", desc: "شات بوت يرد على Telegram والموقع 24/7. يجيب عن الأسئلة الشائعة ويحوّل المعقد إلى موظف." },
        { icon: "🛒", title: "أتمتة المبيعات والعملاء المحتملين", desc: "وصل عميل جديد — يسجله الذكاء الاصطناعي، يرسل تذكيراً، يوجهه للقسم المناسب. لا يضيع أي طلب." },
        { icon: "📦", title: "مراقبة المخزون والطلبات", desc: "تنبيه عند نفاد المنتج، تتبع حالة الطلب، إشعارات تلقائية بالتسليم." },
        { icon: "📄", title: "تحليل المستندات والعقود", desc: "يستخرج الذكاء الاصطناعي البيانات المهمة من المستندات، يلخص العقود، يجد الإجابة المطلوبة." },
        { icon: "🔗", title: "ربط الأنظمة", desc: "Telegram وGoogle Sheets و1C وبوابة الدفع وCRM — نربطها في تدفق تلقائي واحد (تكامل)." },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "4 خطوات إلى",
      titleAccent: "حل الذكاء الاصطناعي",
      subtitle: "أول 30 دقيقة مجانية. ثم كل خطوة بسعر وموعد واضحين.",
      steps: [
        { num: "01", title: "استشارة مجانية", desc: "ندرس أعمالك: أي عمل يستهلك الوقت، وما الذي يستحق الأتمتة. بلا التزام.", icon: "💬" },
        { num: "02", title: "تدقيق AI + عرض", desc: "أي عملية يمكن للذكاء الاصطناعي تنفيذها، وأي أدوات تلزم — خطة وسعر وموعد مكتوبة.", icon: "🔍" },
        { num: "03", title: "بناء MVP", desc: "حل ذكي عامل خلال 2-4 أسابيع. نعرض كل أسبوع، وأنت تختبر وتعطي ملاحظات.", icon: "⚡" },
        { num: "04", title: "التطبيق + الدعم", desc: "نربطه بأنظمتك، ندرّب فريقك، نراقب الأداء ونحسّن.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "أمثلة حقيقية",
      title: "حلول ذكاء اصطناعي",
      titleAccent: "بنيناها",
      subtitle: "تستخدم Tezcode الذكاء الاصطناعي في منتجاتها يومياً — هذه أمثلة عاملة حقيقية.",
      items: [
        { tag: "01", title: "AI Office — مكتب افتراضي بـ 12 قسماً", desc: "وكلاء ذكاء اصطناعي للمبيعات والموارد البشرية والتسويق وغيرها. تدير Tezcode به 14 مطوراً ومشاريع كثيرة." },
        { tag: "02", title: "RAOS — أتمتة التجارة", desc: "POS للمتاجر: كاشير، مخزون، تقارير في مكان واحد. تُجمع بيانات المبيعات تلقائياً — بلا Excel يدوي." },
        { tag: "03", title: "Salomat AI — مساعد طبي صوتي", desc: "في منظومة CoreMed، مساعد ذكي يحدث المريض بالصوت. نستطيع بناء منتجات ذكاء اصطناعي معقدة أيضاً." },
        { tag: "04", title: "أتمتة عبر بوت Telegram", desc: "استقبال الطلبات، التذكيرات، إرسال التقارير إلى Telegram — حل سريع وميسور للأعمال الصغيرة." },
      ],
    },
    cta: {
      badge: "وقت البدء",
      title: "أي عمل يمكنك",
      titleAccent: "تسليمه للذكاء الاصطناعي؟",
      subtitle: "سنحدد ذلك في استشارة مجانية مدتها 30 دقيقة. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل hello@tezcode.dev — تتواصل مباشرة مع بكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أسئلة شائعة عن أتمتة الذكاء الاصطناعي.",
      items: [
        { q: "ما هي أتمتة الذكاء الاصطناعي وهل أحتاجها؟", a: "أتمتة الذكاء الاصطناعي تعني جعل الذكاء الاصطناعي ينفذ المهام المتكررة (كتابة التقارير، الإجابة عن الأسئلة، إدخال البيانات) دون تدخل بشري. إذا كان فريقك يكرر العمل اليدوي نفسه كل يوم — فأنت بحاجة إليها." },
        { q: "هل يمكن للأعمال الصغيرة استخدام الذكاء الاصطناعي؟", a: "نعم. حلول مثل بوت Telegram أو التقارير التلقائية أو شات بوت AI ميسورة للأعمال الصغيرة أيضاً. لا حاجة لميزانية كبيرة — نبدأ بالعملية الأكثر استهلاكاً لوقتك." },
        { q: "كم يستغرق التطوير؟", a: "أتمتة بسيطة (بوت، تقرير) — 1-2 أسبوع. حل ذكاء اصطناعي أكمل — MVP خلال 2-4 أسابيع. نعرض نسخة عاملة كل أسبوع." },
        { q: "كم التكلفة؟", a: "يُعطى السعر الدقيق بعد تدقيق AI فقط، لأن العمليات تختلف. الاستشارة مجانية، والدفع يبدأ بعد تسليم MVP فقط." },
        { q: "هل يتصل بأنظمتي (1C، Telegram، CRM)؟", a: "نعم. نبني تكاملاً مع Telegram وGoogle Sheets و1C وأنظمة الدفع وCRM ليعمل الذكاء الاصطناعي داخل سير عملك الحالي." },
        { q: "هل بياناتي آمنة؟", a: "نعم. تُخزّن البيانات الحساسة في بيئة تتحكم بها أنت، مع صلاحيات محدودة. نتفق على متطلبات الأمان بالتفصيل في الاستشارة." },
      ],
    },
    service: {
      name: "خدمة أتمتة الذكاء الاصطناعي — Tezcode",
      description:
        "أتمتة عمليات الأعمال بالذكاء الاصطناعي: تقارير تلقائية، شات بوت AI، أتمتة المبيعات والمخزون، تكامل الأنظمة. طشقند، أوزبكستان.",
      serviceType: "أتمتة الذكاء الاصطناعي / حلول الذكاء الاصطناعي",
    },
  },

  uk: {
    hero: {
      badge: "AI автоматизація — Tezcode",
      title1: "Автоматизуйте бізнес",
      titleAccent: "за допомогою ШІ",
      title2: "",
      subtitle:
        "Штучний інтелект сам виконує рутину: звіти, підтримку клієнтів, продажі, склад. Tezcode AI Software Factory будує ШІ-рішення під ваші процеси.",
      trust: "Безкоштовна 30-хв консультація • Оплата лише після готового MVP",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Що можемо автоматизувати?",
    },
    capabilities: {
      badge: "Можливості",
      title: "Що ми можемо",
      titleAccent: "автоматизувати?",
      subtitle: "Будь-яка повторювана ручна робота — кандидат на автоматизацію з ШІ. Найчастіші напрямки.",
      items: [
        { icon: "📊", title: "Автоматичні звіти", desc: "Дані з Excel, 1C, продажів і складу збираються самі. Щоденний/місячний звіт готовий за секунди, а не години." },
        { icon: "💬", title: "ШІ-підтримка клієнтів", desc: "AI-чатбот у Telegram і на сайті відповідає 24/7. На часті питання відповідає сам, складні передає оператору." },
        { icon: "🛒", title: "Автоматизація продажів і лідів", desc: "Прийшов новий клієнт — ШІ фіксує його, надсилає нагадування, спрямовує у потрібний відділ. Жодна заявка не губиться." },
        { icon: "📦", title: "Контроль складу та замовлень", desc: "Сповіщення про закінчення товару, відстеження статусу замовлення, автоповідомлення про доставку." },
        { icon: "📄", title: "Аналіз документів і договорів", desc: "ШІ витягує потрібні дані з документів, узагальнює договори, знаходить потрібну відповідь." },
        { icon: "🔗", title: "Зв'язування систем", desc: "Telegram, Google Sheets, 1C, платіжна система, CRM — поєднуємо все в єдиний автоматичний потік (інтеграція)." },
      ],
    },
    process: {
      badge: "Як ми працюємо",
      title: "4 кроки до",
      titleAccent: "ШІ-рішення",
      subtitle: "Перші 30 хвилин безкоштовно. Далі кожен крок з точною ціною та терміном.",
      steps: [
        { num: "01", title: "Безкоштовна консультація", desc: "Вивчаємо бізнес: яка робота забирає час, що вигідно автоматизувати. Без зобов'язань.", icon: "💬" },
        { num: "02", title: "ШІ-аудит + пропозиція", desc: "Який процес може виконати ШІ, які інструменти потрібні — план, ціна та термін письмово.", icon: "🔍" },
        { num: "03", title: "Створення MVP", desc: "Робоче ШІ-рішення за 2-4 тижні. Показуємо щотижня, ви тестуєте і даєте відгук.", icon: "⚡" },
        { num: "04", title: "Впровадження + підтримка", desc: "Підключаємо до системи, навчаємо команду, стежимо за роботою і покращуємо.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "Реальні приклади",
      title: "ШІ-рішення,",
      titleAccent: "які ми побудували",
      subtitle: "Tezcode використовує ШІ у своїх продуктах щодня — ось реально працюючі приклади.",
      items: [
        { tag: "01", title: "AI Office — віртуальний офіс із 12 відділів", desc: "AI-агенти для продажів, HR, маркетингу та інших відділів. Tezcode сам керує ним 14 розробниками та багатьма проектами." },
        { tag: "02", title: "RAOS — автоматизація торгівлі", desc: "POS для магазинів: каса, склад, звіти в одному місці. Дані про продажі збираються автоматично — без ручного Excel." },
        { tag: "03", title: "Salomat AI — голосовий медичний асистент", desc: "В екосистемі CoreMed ШІ-асистент спілкується з пацієнтом голосом. Ми можемо побудувати і складний ШІ-продукт." },
        { tag: "04", title: "Автоматизація через Telegram-бота", desc: "Прийом замовлень, нагадування, надсилання звітів у Telegram — недороге і швидке рішення для малого бізнесу." },
      ],
    },
    cta: {
      badge: "Час починати",
      title: "Яку роботу можна",
      titleAccent: "довірити ШІ?",
      subtitle: "Визначимо на безкоштовній 30-хвилинній консультації. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на hello@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "Часті запитання про ШІ-автоматизацію.",
      items: [
        { q: "Що таке ШІ-автоматизація і чи потрібна вона мені?", a: "ШІ-автоматизація — це виконання рутинних завдань (складання звітів, відповіді на питання, введення даних) за допомогою штучного інтелекту без участі людини. Якщо ваша команда щодня повторює однакову ручну роботу — вона вам потрібна." },
        { q: "Чи може малий бізнес використовувати ШІ?", a: "Так. Рішення на кшталт Telegram-бота, автоматичних звітів чи AI-чатбота доступні і для малого бізнесу. Великий бюджет не потрібен — починаємо з одного найбільш витратного за часом процесу." },
        { q: "Скільки часу займає розробка?", a: "Проста автоматизація (бот, звіт) — 1-2 тижні. Повніше ШІ-рішення — MVP за 2-4 тижні. Щотижня показуємо робочу версію." },
        { q: "Скільки це коштує?", a: "Точна ціна дається лише після ШІ-аудиту, адже процеси у всіх різні. Консультація безкоштовна, оплата починається лише після готового MVP." },
        { q: "Чи підключиться до моїх систем (1C, Telegram, CRM)?", a: "Так. Ми будуємо інтеграцію з Telegram, Google Sheets, 1C, платіжними системами та CRM, щоб ШІ працював усередині вашого поточного робочого процесу." },
        { q: "Чи будуть мої дані в безпеці?", a: "Так. Конфіденційні дані зберігаються у підконтрольному вам середовищі, доступи обмежені. Вимоги до безпеки детально узгоджуємо на консультації." },
      ],
    },
    service: {
      name: "Послуга ШІ-автоматизації — Tezcode",
      description:
        "Автоматизація бізнес-процесів за допомогою штучного інтелекту: автоматичні звіти, AI-чатбот, автоматизація продажів і складу, інтеграція систем. Ташкент, Узбекистан.",
      serviceType: "ШІ-автоматизація / рішення на штучному інтелекті",
    },
  },
};
