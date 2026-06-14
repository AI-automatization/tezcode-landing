import type { ServicePageContent } from "@/components/service-page/types";

// Content for /ai-agent — target keywords: "AI agent yasash", "biznes uchun AI agent",
// "AI agent Toshkent", "AI agent development Uzbekistan", "AI агент Ташкент".
// Only confirmed Tezcode facts — we BUILD custom AI agents for businesses as a
// service. The multi-agent "AI ofis" (12 bo'lim) is an R&D approach/capability,
// NOT a finished/live product. No fabricated client counts.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "AI agent yasash — Tezcode",
      title1: "Biznesingiz uchun",
      titleAccent: "AI agent",
      title2: "— Tezcode",
      subtitle:
        "Mijozlar bilan gaplashadigan, sotuvni olib boradigan, lidlarni saralaydigan va ichki ishlarni avtomatlashtiradigan AI agentlar. Bitta agentdan tortib ko'p agentli 'AI ofis' yondashuvigacha — biznesingizga moslab quramiz.",
      trust: "Toshkent va butun O'zbekiston • Bepul 30 daqiqa konsultatsiya • To'lov faqat MVP tayyor bo'lganda",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "AI agent nima qila oladi?",
    },
    capabilities: {
      badge: "Imkoniyatlar",
      title: "AI agent",
      titleAccent: "nima qila oladi?",
      subtitle:
        "AI agent — bu o'z-o'zicha qaror qabul qiladigan, vazifani boshidan oxirigacha bajaradigan dasturiy yordamchi. Bir nechta agent birga ishlab, butun bo'limni almashtirishi ham mumkin.",
      items: [
        { icon: "🛟", title: "24/7 AI qo'llab-quvvatlash agenti", desc: "Telegram, Instagram, WhatsApp va veb-saytda kechayu kunduz mijozlarga javob beradi, savollarni hal qiladi va kerak bo'lsa jonli operatorga uzatadi." },
        { icon: "🔥", title: "Sotuv va lid agenti", desc: "Mijozning qiziqishini aniqlaydi (Cold/Warm/Hot), suhbatni sotuvga olib boradi, taklif yuboradi va tayyor lidni to'liq kontekst bilan menejerga topshiradi." },
        { icon: "📊", title: "Ma'lumot va hisobot agenti", desc: "Buyurtma, savdo va mijoz ma'lumotlarini avtomatik yig'adi, tahlil qiladi va kunlik/haftalik hisobotlarni o'zi tayyorlab yuboradi." },
        { icon: "🧩", title: "Ko'p agentli orkestratsiya (AI ofis)", desc: "Bir nechta agent o'zaro vazifa taqsimlab ishlaydi — sotuv, qo'llab-quvvatlash, hisobot kabi 'bo'limlar'. Bu Tezcode'ning R&D yondashuvi (tayyor mahsulot emas)." },
        { icon: "🔗", title: "Integratsiya (CRM, Telegram, 1C, sayt)", desc: "AmoCRM, Bitrix24, 1C, Google Sheets, Telegram va veb-saytingizga ulanadi — agent mavjud tizimingiz ichida real harakat qiladi." },
        { icon: "🌐", title: "Ko'p tilli (uz/ru)", desc: "O'zbek va rus tilida bir vaqtning o'zida muloqot qiladi — mijoz qaysi tilda yozsa, agent shu tilda javob beradi." },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "4 qadamda",
      titleAccent: "AI agentga",
      subtitle: "Birinchi 30 daqiqa bepul. Keyin har qadam aniq narx va aniq muddat bilan.",
      steps: [
        { num: "01", title: "Bepul konsultatsiya", desc: "Qaysi ish ko'p vaqt oladi, qaysi jarayonni agent o'z bo'yniga olishi mumkin — birga aniqlaymiz. Majburiyat yo'q.", icon: "💬" },
        { num: "02", title: "Stsenariy + taklif", desc: "Agent qanday vazifalarni bajaradi, qaysi tizimlarga ulanadi — aniq stsenariy, narx va muddat bilan yozma taklif.", icon: "🔍" },
        { num: "03", title: "MVP yaratish", desc: "1-4 hafta ichida ishlovchi AI agent. Sinab ko'rasiz, fikr berasiz, biz sozlaymiz.", icon: "⚡" },
        { num: "04", title: "Joriy etish + qo'llab-quvvatlash", desc: "Tizimlaringizga ulaymiz, agent qarorlari sifatini kuzatamiz va yaxshilab boramiz.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "Real misollar",
      title: "Biz qura oladigan",
      titleAccent: "AI agentlar",
      subtitle: "Tezcode o'z mahsulotlarida AI ni kunlik ishlatadi — quyidagilar agent yondashuvining real ko'rinishlari.",
      items: [
        { tag: "01", title: "Sotuv agenti", desc: "Mijoz bilan suhbatni boshidan oxirigacha olib boradi: ehtiyojni aniqlaydi, mahsulot tavsiya qiladi, taklif yuboradi va to'lovgacha kuzatadi." },
        { tag: "02", title: "Qo'llab-quvvatlash agenti", desc: "Sizning bazangiz (hujjat, narx, xizmatlar) asosida aniq javob beradi (RAG), takroriy savollarni o'zi yopadi, murakkabini operatorga uzatadi." },
        { tag: "03", title: "Ichki ops / avtomatlashtirish agenti", desc: "Ma'lumot yig'ish, hisobot tayyorlash, eslatma yuborish va tizimlar orasidagi takroriy ishni odamsiz bajaradi." },
        { tag: "04", title: "Ko'p agentli 'AI ofis' yondashuvi", desc: "Bir nechta agent bo'limlarga bo'linib birga ishlaydi. Hozircha bu Tezcode'ning R&D yo'nalishi — tayyor mahsulot sifatida va'da qilmaymiz." },
      ],
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Biznesingizga AI",
      titleAccent: "agent kerakmi?",
      subtitle: "30 daqiqalik bepul konsultatsiyada qaysi vazifani agent bajarishini aniqlaymiz. Majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing yoki +998993151516 ga qo'ng'iroq qiling.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "AI agent yasash haqida ko'p so'raladigan savollar.",
      items: [
        { q: "AI agent nima?", a: "AI agent — bu o'z-o'zicha qaror qabul qiladigan va vazifani boshidan oxirigacha bajaradigan AI yordamchi. Oddiy chatbotdan farqi: u shunchaki javob bermaydi, balki harakat qiladi — CRM ga yozadi, hisobot tayyorlaydi, sotuvni olib boradi." },
        { q: "Qanday biznesga kerak?", a: "Mijozlar bir xil savolni ko'p bersa, operatorlar javobga ulgurmasa, sotuv va lidlar tushib qolsa yoki ichki takroriy ish ko'p vaqt olsa — AI agent shu ishlarni o'z bo'yniga oladi. Savdo, xizmat, klinika, ta'lim va ko'plab sohalarga mos." },
        { q: "Mavjud tizim (CRM/1C/Telegram) bilan ishlaydimi?", a: "Ha. Biz AmoCRM, Bitrix24, 1C, Google Sheets, Telegram va veb-saytingiz bilan integratsiya quramiz — agent mavjud tizimingiz ichida real harakat qiladi, ma'lumotlar avtomatik yoziladi." },
        { q: "O'zbek/rus tilida ishlaydimi?", a: "Ha. Agent o'zbek va rus tilida muloqot qiladi (kerak bo'lsa ingliz tilida ham). Mijoz qaysi tilda yozsa, agent shu tilda javob beradi." },
        { q: "Narxi qancha?", a: "Narx vazifaning murakkabligiga bog'liq. Aniq narx bepul konsultatsiyadan keyin yozma taklifda beriladi, to'lov esa faqat MVP tayyor bo'lganda boshlanadi." },
        { q: "Qancha vaqtda tayyor?", a: "Oddiy agent — 1-2 hafta, murakkabroq yoki ko'p tizimga ulanadigan agent — 2-4 hafta MVP. Aniq muddat stsenariy tasdiqlangach beriladi." },
      ],
    },
    service: {
      name: "AI agent yasash — Tezcode",
      description:
        "Biznes uchun AI agent yasash: sotuv agenti, qo'llab-quvvatlash agenti, lid saralash, ichki avtomatlashtirish va ko'p agentli 'AI ofis' yondashuvi. CRM/1C/Telegram integratsiyasi, o'zbek va rus tilida. Toshkent va butun O'zbekiston.",
      serviceType: "AI agent yasash / AI agent development",
    },
  },

  ru: {
    hero: {
      badge: "Создание AI-агентов — Tezcode",
      title1: "AI-агент",
      titleAccent: "для вашего бизнеса",
      title2: "— Tezcode",
      subtitle:
        "AI-агенты, которые общаются с клиентами, ведут продажи, квалифицируют лиды и автоматизируют внутренние процессы. От одного агента до мультиагентного подхода «AI-офис» — строим под ваш бизнес.",
      trust: "Ташкент и весь Узбекистан • Бесплатная 30-мин консультация • Оплата только после готового MVP",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Что умеет AI-агент?",
    },
    capabilities: {
      badge: "Возможности",
      title: "Что умеет",
      titleAccent: "AI-агент?",
      subtitle:
        "AI-агент — это программный помощник, который сам принимает решения и выполняет задачу от начала до конца. Несколько агентов могут работать вместе и заменять целый отдел.",
      items: [
        { icon: "🛟", title: "AI-агент поддержки 24/7", desc: "Отвечает клиентам круглосуточно в Telegram, Instagram, WhatsApp и на сайте, решает вопросы и при необходимости передаёт живому оператору." },
        { icon: "🔥", title: "Агент продаж и лидов", desc: "Определяет интерес клиента (Cold/Warm/Hot), ведёт диалог к продаже, отправляет предложение и передаёт готовый лид менеджеру с полным контекстом." },
        { icon: "📊", title: "Агент данных и отчётов", desc: "Автоматически собирает данные о заказах, продажах и клиентах, анализирует и сам готовит ежедневные/еженедельные отчёты." },
        { icon: "🧩", title: "Мультиагентная оркестрация (AI-офис)", desc: "Несколько агентов распределяют задачи между собой — «отделы» продаж, поддержки, отчётности. Это R&D-подход Tezcode (не готовый продукт)." },
        { icon: "🔗", title: "Интеграция (CRM, Telegram, 1C, сайт)", desc: "Подключается к AmoCRM, Bitrix24, 1C, Google Sheets, Telegram и вашему сайту — агент реально действует внутри вашей системы." },
        { icon: "🌐", title: "Многоязычность (uz/ru)", desc: "Общается на узбекском и русском одновременно — клиент получает ответ на том языке, на котором написал." },
      ],
    },
    process: {
      badge: "Как мы работаем",
      title: "4 шага до",
      titleAccent: "AI-агента",
      subtitle: "Первые 30 минут бесплатно. Дальше каждый шаг с точной ценой и сроком.",
      steps: [
        { num: "01", title: "Бесплатная консультация", desc: "Какая работа отнимает время, какой процесс может взять агент — определяем вместе. Без обязательств.", icon: "💬" },
        { num: "02", title: "Сценарий + предложение", desc: "Какие задачи решает агент, к каким системам подключается — сценарий, цена и срок письменно.", icon: "🔍" },
        { num: "03", title: "Создание MVP", desc: "Рабочий AI-агент за 1-4 недели. Вы тестируете, даёте обратную связь, мы настраиваем.", icon: "⚡" },
        { num: "04", title: "Внедрение + поддержка", desc: "Подключаем к вашим системам, следим за качеством решений агента и улучшаем.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "Реальные примеры",
      title: "AI-агенты,",
      titleAccent: "которые мы строим",
      subtitle: "Tezcode использует AI в своих продуктах ежедневно — вот реальные варианты агентного подхода.",
      items: [
        { tag: "01", title: "Агент продаж", desc: "Ведёт диалог с клиентом от начала до конца: выявляет потребность, рекомендует товар, отправляет предложение и сопровождает до оплаты." },
        { tag: "02", title: "Агент поддержки", desc: "Отвечает на основе вашей базы (документы, цены, услуги) через RAG, сам закрывает повторяющиеся вопросы, сложное передаёт оператору." },
        { tag: "03", title: "Агент внутренних операций / автоматизации", desc: "Сбор данных, подготовка отчётов, напоминания и рутина между системами — выполняет без участия человека." },
        { tag: "04", title: "Мультиагентный подход «AI-офис»", desc: "Несколько агентов работают вместе по «отделам». Пока это R&D-направление Tezcode — не обещаем как готовый продукт." },
      ],
    },
    cta: {
      badge: "Время начать",
      title: "Вашему бизнесу нужен",
      titleAccent: "AI-агент?",
      subtitle: "На бесплатной 30-минутной консультации определим, какую задачу возьмёт на себя агент. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev либо позвоните +998993151516.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Частые вопросы о создании AI-агентов.",
      items: [
        { q: "Что такое AI-агент?", a: "AI-агент — это AI-помощник, который сам принимает решения и выполняет задачу от начала до конца. Отличие от обычного чат-бота: он не просто отвечает, а действует — пишет в CRM, готовит отчёт, ведёт продажу." },
        { q: "Какому бизнесу он нужен?", a: "Если клиенты часто задают одни и те же вопросы, операторы не успевают, продажи и лиды теряются или внутренняя рутина отнимает время — AI-агент берёт это на себя. Подходит для торговли, услуг, клиник, образования и многих сфер." },
        { q: "Работает ли с существующей системой (CRM/1C/Telegram)?", a: "Да. Мы строим интеграцию с AmoCRM, Bitrix24, 1C, Google Sheets, Telegram и вашим сайтом — агент реально действует внутри вашей системы, данные записываются автоматически." },
        { q: "Работает ли на узбекском/русском?", a: "Да. Агент общается на узбекском и русском (при необходимости и на английском). Клиент получает ответ на том языке, на котором написал." },
        { q: "Сколько стоит?", a: "Цена зависит от сложности задачи. Точная цена даётся в письменном предложении после бесплатной консультации, оплата начинается только после готового MVP." },
        { q: "За сколько времени готов?", a: "Простой агент — 1-2 недели, более сложный или с подключением к нескольким системам — MVP за 2-4 недели. Точный срок даётся после утверждения сценария." },
      ],
    },
    service: {
      name: "Создание AI-агентов — Tezcode",
      description:
        "Создание AI-агентов для бизнеса: агент продаж, агент поддержки, квалификация лидов, внутренняя автоматизация и мультиагентный подход «AI-офис». Интеграция с CRM/1C/Telegram, на узбекском и русском. Ташкент и весь Узбекистан.",
      serviceType: "Создание AI-агентов / AI agent development",
    },
  },

  en: {
    hero: {
      badge: "AI agent development — Tezcode",
      title1: "An AI agent",
      titleAccent: "for your business",
      title2: "— Tezcode",
      subtitle:
        "AI agents that talk to customers, drive sales, qualify leads and automate internal operations. From a single agent to a multi-agent 'AI office' approach — built around your business.",
      trust: "Tashkent and all of Uzbekistan • Free 30-min consultation • You pay only after MVP is delivered",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "What can an AI agent do?",
    },
    capabilities: {
      badge: "Capabilities",
      title: "What can an",
      titleAccent: "AI agent do?",
      subtitle:
        "An AI agent is a software helper that makes decisions on its own and carries a task from start to finish. Several agents can work together and replace a whole department.",
      items: [
        { icon: "🛟", title: "24/7 AI support agent", desc: "Answers customers around the clock on Telegram, Instagram, WhatsApp and your website, resolves issues and hands off to a human when needed." },
        { icon: "🔥", title: "Sales & lead agent", desc: "Reads each lead's interest (Cold/Warm/Hot), drives the conversation toward a sale, sends an offer and hands a hot lead to a manager with full context." },
        { icon: "📊", title: "Data & reporting agent", desc: "Automatically gathers order, sales and customer data, analyses it and prepares daily/weekly reports on its own." },
        { icon: "🧩", title: "Multi-agent orchestration (AI office)", desc: "Several agents split tasks among themselves — 'departments' like sales, support and reporting. This is Tezcode's R&D approach (not a finished product)." },
        { icon: "🔗", title: "Integration (CRM, Telegram, 1C, website)", desc: "Connects to AmoCRM, Bitrix24, 1C, Google Sheets, Telegram and your website — the agent really acts inside your existing system." },
        { icon: "🌐", title: "Multilingual (uz/ru)", desc: "Talks in Uzbek and Russian at once — customers get a reply in the language they wrote in." },
      ],
    },
    process: {
      badge: "How we work",
      title: "4 steps to your",
      titleAccent: "AI agent",
      subtitle: "First 30 minutes are free. Then every step has a clear price and timeline.",
      steps: [
        { num: "01", title: "Free consultation", desc: "We work out which work eats your time and which process an agent can take over. No obligations.", icon: "💬" },
        { num: "02", title: "Scenario + proposal", desc: "Which tasks the agent handles, which systems it connects to — a scenario, price and timeline in writing.", icon: "🔍" },
        { num: "03", title: "Build the MVP", desc: "A working AI agent in 1-4 weeks. You test, give feedback, we tune.", icon: "⚡" },
        { num: "04", title: "Rollout + support", desc: "We connect it to your systems, monitor the agent's decision quality and keep improving.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "Real examples",
      title: "AI agents",
      titleAccent: "we can build",
      subtitle: "Tezcode uses AI in its own products daily — these are real shapes of the agent approach.",
      items: [
        { tag: "01", title: "Sales agent", desc: "Runs the conversation end to end: uncovers the need, recommends a product, sends an offer and follows up to checkout." },
        { tag: "02", title: "Support agent", desc: "Answers from your knowledge base (documents, prices, services) via RAG, closes repetitive questions itself and escalates the complex ones to a human." },
        { tag: "03", title: "Internal ops / automation agent", desc: "Data collection, report preparation, reminders and routine work between systems — done without a human." },
        { tag: "04", title: "Multi-agent 'AI office' approach", desc: "Several agents work together as 'departments'. For now this is Tezcode's R&D direction — we don't promise it as a finished product." },
      ],
    },
    cta: {
      badge: "Time to start",
      title: "Does your business need",
      titleAccent: "an AI agent?",
      subtitle: "In a free 30-minute consultation we'll scope which task an agent should take over. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev or call +998993151516.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "Common questions about AI agent development.",
      items: [
        { q: "What is an AI agent?", a: "An AI agent is an AI helper that makes decisions on its own and carries a task from start to finish. Unlike a plain chatbot, it doesn't just reply — it acts: writes to your CRM, prepares reports, drives a sale." },
        { q: "Which businesses need one?", a: "If customers keep asking the same questions, operators can't keep up, sales and leads slip through, or internal routine eats time — an AI agent takes that over. It fits retail, services, clinics, education and many more sectors." },
        { q: "Does it work with my existing system (CRM/1C/Telegram)?", a: "Yes. We build integrations with AmoCRM, Bitrix24, 1C, Google Sheets, Telegram and your website — the agent acts inside your existing system and data is logged automatically." },
        { q: "Does it work in Uzbek/Russian?", a: "Yes. The agent talks in Uzbek and Russian (and English if needed). Customers get a reply in the language they used." },
        { q: "How much does it cost?", a: "The price depends on task complexity. An exact price comes in a written proposal after the free consultation, and you pay only once the MVP is delivered." },
        { q: "How long until it's ready?", a: "A simple agent — 1-2 weeks; a more complex one or one connected to several systems — an MVP in 2-4 weeks. An exact timeline is given once the scenario is approved." },
      ],
    },
    service: {
      name: "AI agent development — Tezcode",
      description:
        "Building AI agents for business: sales agent, support agent, lead qualification, internal automation and a multi-agent 'AI office' approach. CRM/1C/Telegram integration, Uzbek and Russian. Tashkent and all of Uzbekistan.",
      serviceType: "AI agent development",
    },
  },

  ar: {
    hero: {
      badge: "تطوير وكلاء الذكاء الاصطناعي — Tezcode",
      title1: "وكيل ذكاء اصطناعي",
      titleAccent: "لأعمالك",
      title2: "— Tezcode",
      subtitle:
        "وكلاء ذكاء اصطناعي يتحدثون مع العملاء، يقودون المبيعات، يصنّفون العملاء المحتملين ويؤتمتون العمليات الداخلية. من وكيل واحد إلى نهج «المكتب الذكي» متعدد الوكلاء — مبني حول أعمالك.",
      trust: "طشقند وكل أوزبكستان • استشارة 30 دقيقة مجانية • الدفع فقط بعد تسليم MVP",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "ماذا يفعل وكيل الذكاء الاصطناعي؟",
    },
    capabilities: {
      badge: "الإمكانيات",
      title: "ماذا يفعل",
      titleAccent: "وكيل الذكاء الاصطناعي؟",
      subtitle:
        "وكيل الذكاء الاصطناعي مساعد برمجي يتخذ القرارات بنفسه وينفّذ المهمة من البداية إلى النهاية. ويمكن لعدة وكلاء العمل معاً ليحلّوا محل قسم كامل.",
      items: [
        { icon: "🛟", title: "وكيل دعم ذكي 24/7", desc: "يرد على العملاء على مدار الساعة في Telegram وInstagram وWhatsApp والموقع، يحل المشكلات ويحوّل إلى موظف عند الحاجة." },
        { icon: "🔥", title: "وكيل المبيعات والعملاء المحتملين", desc: "يحدد اهتمام كل عميل (Cold/Warm/Hot)، يقود الحوار نحو البيع، يرسل عرضاً ويحوّل العميل الجاهز إلى المدير مع السياق الكامل." },
        { icon: "📊", title: "وكيل البيانات والتقارير", desc: "يجمع بيانات الطلبات والمبيعات والعملاء تلقائياً، يحللها ويعدّ تقارير يومية/أسبوعية بنفسه." },
        { icon: "🧩", title: "تنسيق متعدد الوكلاء (المكتب الذكي)", desc: "يوزّع عدة وكلاء المهام فيما بينهم — «أقسام» مثل المبيعات والدعم والتقارير. هذا نهج بحث وتطوير لدى Tezcode (وليس منتجاً جاهزاً)." },
        { icon: "🔗", title: "تكامل (CRM، Telegram، 1C، الموقع)", desc: "يتصل بـ AmoCRM وBitrix24 و1C وGoogle Sheets وTelegram وموقعك — يتصرف الوكيل فعلياً داخل نظامك القائم." },
        { icon: "🌐", title: "متعدد اللغات (uz/ru)", desc: "يتحدث الأوزبكية والروسية معاً — يحصل العميل على رد بلغته." },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "4 خطوات إلى",
      titleAccent: "وكيل الذكاء الاصطناعي",
      subtitle: "أول 30 دقيقة مجانية. ثم كل خطوة بسعر وموعد واضحين.",
      steps: [
        { num: "01", title: "استشارة مجانية", desc: "نحدد أي عمل يستهلك وقتك وأي عملية يمكن للوكيل توليها. بلا التزام.", icon: "💬" },
        { num: "02", title: "سيناريو + عرض", desc: "أي مهام يتولاها الوكيل، وبأي أنظمة يتصل — سيناريو وسعر وموعد مكتوبة.", icon: "🔍" },
        { num: "03", title: "بناء MVP", desc: "وكيل ذكاء اصطناعي عامل خلال 1-4 أسابيع. تختبره وتعطي ملاحظات ونضبطه.", icon: "⚡" },
        { num: "04", title: "التطبيق + الدعم", desc: "نربطه بأنظمتك، نراقب جودة قرارات الوكيل ونحسّن.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "أمثلة حقيقية",
      title: "وكلاء ذكاء اصطناعي",
      titleAccent: "يمكننا بناؤهم",
      subtitle: "تستخدم Tezcode الذكاء الاصطناعي في منتجاتها يومياً — هذه صور حقيقية لنهج الوكلاء.",
      items: [
        { tag: "01", title: "وكيل المبيعات", desc: "يدير الحوار من البداية إلى النهاية: يكتشف الحاجة، يوصي بمنتج، يرسل عرضاً ويتابع حتى الدفع." },
        { tag: "02", title: "وكيل الدعم", desc: "يجيب اعتماداً على قاعدتك (المستندات والأسعار والخدمات) عبر RAG، يغلق الأسئلة المتكررة بنفسه ويحوّل المعقد إلى موظف." },
        { tag: "03", title: "وكيل العمليات الداخلية / الأتمتة", desc: "جمع البيانات، إعداد التقارير، التذكيرات والعمل الروتيني بين الأنظمة — دون تدخل بشري." },
        { tag: "04", title: "نهج «المكتب الذكي» متعدد الوكلاء", desc: "يعمل عدة وكلاء معاً بصورة «أقسام». حالياً هذا اتجاه بحث وتطوير لدى Tezcode — لا نعد به كمنتج جاهز." },
      ],
    },
    cta: {
      badge: "وقت البدء",
      title: "هل تحتاج أعمالك",
      titleAccent: "وكيل ذكاء اصطناعي؟",
      subtitle: "في استشارة مجانية مدتها 30 دقيقة سنحدد أي مهمة يجب أن يتولاها الوكيل. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev أو اتصل بـ ‎+998993151516.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أسئلة شائعة عن تطوير وكلاء الذكاء الاصطناعي.",
      items: [
        { q: "ما هو وكيل الذكاء الاصطناعي؟", a: "وكيل الذكاء الاصطناعي مساعد يتخذ القرارات بنفسه وينفّذ المهمة من البداية إلى النهاية. بخلاف الشات بوت العادي، لا يكتفي بالرد بل يتصرف: يكتب في CRM، يعدّ التقارير، يقود عملية بيع." },
        { q: "أي الأعمال تحتاجه؟", a: "إذا كان العملاء يكررون الأسئلة نفسها، أو لا يلحق الموظفون، أو تضيع المبيعات والعملاء، أو يستهلك الروتين الداخلي الوقت — يتولى الوكيل ذلك. يناسب التجارة والخدمات والعيادات والتعليم وقطاعات كثيرة." },
        { q: "هل يعمل مع نظامي الحالي (CRM/1C/Telegram)؟", a: "نعم. نبني تكاملاً مع AmoCRM وBitrix24 و1C وGoogle Sheets وTelegram وموقعك — يتصرف الوكيل داخل نظامك القائم وتُسجَّل البيانات تلقائياً." },
        { q: "هل يعمل بالأوزبكية/الروسية؟", a: "نعم. يتحدث الوكيل الأوزبكية والروسية (والإنجليزية عند الحاجة). يحصل العميل على رد باللغة التي كتب بها." },
        { q: "كم التكلفة؟", a: "يعتمد السعر على تعقيد المهمة. يُعطى السعر الدقيق في عرض مكتوب بعد الاستشارة المجانية، ويبدأ الدفع بعد تسليم MVP فقط." },
        { q: "كم يستغرق حتى يجهز؟", a: "وكيل بسيط — 1-2 أسبوع، وأكثر تعقيداً أو متصل بعدة أنظمة — MVP خلال 2-4 أسابيع. يُعطى الموعد الدقيق بعد اعتماد السيناريو." },
      ],
    },
    service: {
      name: "تطوير وكلاء الذكاء الاصطناعي — Tezcode",
      description:
        "بناء وكلاء ذكاء اصطناعي للأعمال: وكيل مبيعات، وكيل دعم، تصنيف العملاء، أتمتة داخلية ونهج «المكتب الذكي» متعدد الوكلاء. تكامل CRM/1C/Telegram، بالأوزبكية والروسية. طشقند وكل أوزبكستان.",
      serviceType: "تطوير وكلاء الذكاء الاصطناعي / AI agent development",
    },
  },

  uk: {
    hero: {
      badge: "Створення AI-агентів — Tezcode",
      title1: "AI-агент",
      titleAccent: "для вашого бізнесу",
      title2: "— Tezcode",
      subtitle:
        "AI-агенти, які спілкуються з клієнтами, ведуть продажі, кваліфікують ліди та автоматизують внутрішні процеси. Від одного агента до мультиагентного підходу «AI-офіс» — будуємо під ваш бізнес.",
      trust: "Ташкент і весь Узбекистан • Безкоштовна 30-хв консультація • Оплата лише після готового MVP",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Що вміє AI-агент?",
    },
    capabilities: {
      badge: "Можливості",
      title: "Що вміє",
      titleAccent: "AI-агент?",
      subtitle:
        "AI-агент — це програмний помічник, який сам ухвалює рішення і виконує завдання від початку до кінця. Кілька агентів можуть працювати разом і замінити цілий відділ.",
      items: [
        { icon: "🛟", title: "AI-агент підтримки 24/7", desc: "Відповідає клієнтам цілодобово в Telegram, Instagram, WhatsApp і на сайті, вирішує питання та за потреби передає живому оператору." },
        { icon: "🔥", title: "Агент продажів і лідів", desc: "Визначає інтерес клієнта (Cold/Warm/Hot), веде діалог до продажу, надсилає пропозицію і передає готовий лід менеджеру з повним контекстом." },
        { icon: "📊", title: "Агент даних і звітів", desc: "Автоматично збирає дані про замовлення, продажі та клієнтів, аналізує і сам готує щоденні/щотижневі звіти." },
        { icon: "🧩", title: "Мультиагентна оркестрація (AI-офіс)", desc: "Кілька агентів розподіляють завдання між собою — «відділи» продажів, підтримки, звітності. Це R&D-підхід Tezcode (не готовий продукт)." },
        { icon: "🔗", title: "Інтеграція (CRM, Telegram, 1C, сайт)", desc: "Підключається до AmoCRM, Bitrix24, 1C, Google Sheets, Telegram і вашого сайту — агент реально діє всередині вашої системи." },
        { icon: "🌐", title: "Багатомовність (uz/ru)", desc: "Спілкується узбецькою та російською одночасно — клієнт отримує відповідь своєю мовою." },
      ],
    },
    process: {
      badge: "Як ми працюємо",
      title: "4 кроки до",
      titleAccent: "AI-агента",
      subtitle: "Перші 30 хвилин безкоштовно. Далі кожен крок з точною ціною та терміном.",
      steps: [
        { num: "01", title: "Безкоштовна консультація", desc: "Яка робота забирає час, який процес може взяти агент — визначаємо разом. Без зобов'язань.", icon: "💬" },
        { num: "02", title: "Сценарій + пропозиція", desc: "Які завдання вирішує агент, до яких систем підключається — сценарій, ціна та термін письмово.", icon: "🔍" },
        { num: "03", title: "Створення MVP", desc: "Робочий AI-агент за 1-4 тижні. Ви тестуєте, даєте відгук, ми налаштовуємо.", icon: "⚡" },
        { num: "04", title: "Впровадження + підтримка", desc: "Підключаємо до ваших систем, стежимо за якістю рішень агента і покращуємо.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "Реальні приклади",
      title: "AI-агенти,",
      titleAccent: "яких ми будуємо",
      subtitle: "Tezcode використовує AI у своїх продуктах щодня — ось реальні варіанти агентного підходу.",
      items: [
        { tag: "01", title: "Агент продажів", desc: "Веде діалог з клієнтом від початку до кінця: виявляє потребу, рекомендує товар, надсилає пропозицію і супроводжує до оплати." },
        { tag: "02", title: "Агент підтримки", desc: "Відповідає на основі вашої бази (документи, ціни, послуги) через RAG, сам закриває повторювані питання, складне передає оператору." },
        { tag: "03", title: "Агент внутрішніх операцій / автоматизації", desc: "Збір даних, підготовка звітів, нагадування і рутина між системами — виконує без участі людини." },
        { tag: "04", title: "Мультиагентний підхід «AI-офіс»", desc: "Кілька агентів працюють разом як «відділи». Поки це R&D-напрям Tezcode — не обіцяємо як готовий продукт." },
      ],
    },
    cta: {
      badge: "Час починати",
      title: "Вашому бізнесу потрібен",
      titleAccent: "AI-агент?",
      subtitle: "На безкоштовній 30-хвилинній консультації визначимо, яке завдання візьме на себе агент. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev чи зателефонуйте +998993151516.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "Часті запитання про створення AI-агентів.",
      items: [
        { q: "Що таке AI-агент?", a: "AI-агент — це AI-помічник, який сам ухвалює рішення і виконує завдання від початку до кінця. На відміну від звичайного чат-бота, він не просто відповідає, а діє: пише в CRM, готує звіт, веде продаж." },
        { q: "Якому бізнесу він потрібен?", a: "Якщо клієнти часто ставлять однакові питання, оператори не встигають, продажі та ліди губляться або внутрішня рутина забирає час — AI-агент бере це на себе. Підходить для торгівлі, послуг, клінік, освіти і багатьох сфер." },
        { q: "Чи працює з наявною системою (CRM/1C/Telegram)?", a: "Так. Ми будуємо інтеграцію з AmoCRM, Bitrix24, 1C, Google Sheets, Telegram і вашим сайтом — агент реально діє всередині вашої системи, дані записуються автоматично." },
        { q: "Чи працює узбецькою/російською?", a: "Так. Агент спілкується узбецькою та російською (за потреби й англійською). Клієнт отримує відповідь тією мовою, якою написав." },
        { q: "Скільки коштує?", a: "Ціна залежить від складності завдання. Точна ціна дається в письмовій пропозиції після безкоштовної консультації, оплата починається лише після готового MVP." },
        { q: "За скільки часу готовий?", a: "Простий агент — 1-2 тижні, складніший або з підключенням до кількох систем — MVP за 2-4 тижні. Точний термін дається після затвердження сценарію." },
      ],
    },
    service: {
      name: "Створення AI-агентів — Tezcode",
      description:
        "Створення AI-агентів для бізнесу: агент продажів, агент підтримки, кваліфікація лідів, внутрішня автоматизація та мультиагентний підхід «AI-офіс». Інтеграція з CRM/1C/Telegram, узбецькою та російською. Ташкент і весь Узбекистан.",
      serviceType: "Створення AI-агентів / AI agent development",
    },
  },
};
