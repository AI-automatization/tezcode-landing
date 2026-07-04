import type { ServicePageContent } from "@/components/service-page/types";

// Content for /tezcode-custom — TezCode Custom division: fully bespoke software
// built from scratch for one client (project-based). Angle: your OWN product,
// tailored to your business, source code 100% yours, MVP in 2-4 weeks,
// pay-after-MVP. Only confirmed Tezcode facts (AI Software Factory, 2024,
// founder Bekzod Mirzaaliyev, 14 in-house developers, Tashkent, IT Park).
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "TezCode Custom",
      title1: "Buyurtma dasturiy mahsulot —",
      titleAccent: "noldan, faqat sizga",
      title2: "",
      subtitle:
        "TezCode Custom — biznesingizga aynan moslab noldan quriladigan dasturiy mahsulot. Tayyor shablon emas: sizning jarayoningizga qurilgan tizim, source code esa 100% sizniki. MVP 2-4 haftada, to'lov faqat ishlovchi MVP tayyor bo'lganda.",
      trust: "Bepul 30 daqiqa konsultatsiya • To'lov faqat MVP tayyor bo'lganda • Source code 100% sizniki",
      ctaPrimary: "Loyihani muhokama qilish",
      ctaSecondary: "Qanday ishlaymiz",
    },
    capabilities: {
      badge: "Nima quramiz",
      title: "Qanday buyurtma tizimlar",
      titleAccent: "quramiz?",
      subtitle:
        "Har biri noldan, sizning biznes jarayoningizga moslab. Tayyor mahsulotni ijaraga olmaysiz — o'zingizniki bo'lgan tizimni quramiz.",
      items: [
        { icon: "bar-chart-2", title: "ERP — resurs boshqaruvi", desc: "Ombor, moliya, ishlab chiqarish va hisobotni bitta tizimda. Aynan sizning biznes modelingizga moslab qurilgan boshqaruv yadrosi." },
        { icon: "users", title: "CRM — mijoz va sotuv", desc: "Lidlar, sotuv voronkasi, mijozlar tarixi va vazifalar. Sizning sotuv jarayoningizni takrorlaydigan, tayyor CRM cheklovlarisiz tizim." },
        { icon: "shopping-cart", title: "Marketplace va platforma", desc: "Ko'p tomonlama bozor, buyurtma, to'lov va logistika oqimi. Investorga ko'rsatiladigan mahsulotni noldan quramiz." },
        { icon: "wrench", title: "Ichki tizim va avtomatizatsiya", desc: "Ichki panellar, hisobot yig'ish, jarayon avtomatizatsiyasi. Excel va qo'lda ishni bir tizimga jamlaymiz." },
        { icon: "bot", title: "AI ilova va agent", desc: "Claude va zamonaviy AI vositalari bilan RAG, chatbot, aqlli tahlil va avtomatik qaror. AI biznes yadrosiga singdirilgan holda." },
        { icon: "link-2", title: "Integratsiya va API", desc: "Telegram, to'lov tizimlari, 1C, soliq va tashqi xizmatlarni yagona mahsulotga ulaymiz. Tizimlaringiz birga ishlaydi." },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "Discovery'dan",
      titleAccent: "production'gacha",
      subtitle: "Birinchi 30 daqiqa bepul. Keyin har qadam aniq narx, aniq muddat va yozma spec bilan.",
      steps: [
        { num: "01", title: "Discovery", desc: "Biznesingizni va muammoni chuqur o'rganamiz: kimga, nima uchun, qanday natija. Mahsulot ko'lamini birga aniqlaymiz.", icon: "search" },
        { num: "02", title: "Texnik spec + narx", desc: "Aniq texnik hujjat, arxitektura, narx, muddat va jamoa tarkibi. Yozma kontrakt — hech qanday yashirin xarajat yo'q.", icon: "clipboard-list" },
        { num: "03", title: "MVP (2-4 hafta)", desc: "Ishlovchi birinchi versiyani 2-4 haftada quramiz. Har hafta demo ko'rsatamiz, siz fikr berasiz. To'lov shu bosqichda boshlanadi.", icon: "zap" },
        { num: "04", title: "Production + scale", desc: "Deploy, real foydalanuvchilar va keyingi funksiyalar. Mahsulotni birga o'stiramiz va texnik qo'llab-quvvatlaymiz.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Nega TezCode Custom",
      title: "Nega buyurtma mahsulotni",
      titleAccent: "bizga ishonasiz",
      subtitle: "Bizni tayyor SaaS va freelancerlardan ajratib turadigan asosiy farqlar.",
      items: [
        { tag: "01", title: "14 nafar in-house dasturchi", desc: "Toshkentdagi ofisimizda. Freelancer emas — jamoa. Backend, frontend, mobil, AI, DevOps bitta loyihada birga ishlaydi." },
        { tag: "02", title: "AI bilan tezroq MVP", desc: "Claude va zamonaviy AI vositalari kundalik ishchi vositamiz. Shuning uchun to'liq buyurtma MVP odatda 2-4 haftada tayyor." },
        { tag: "03", title: "To'lov faqat MVP tayyor bo'lganda", desc: "Risk siz tomonda emas. Ishlovchi mahsulotni ko'rmaguningizcha to'lov boshlanmaydi — bizning ishonch modelimiz." },
        { tag: "04", title: "Source code 100% sizniki", desc: "Kod to'liq sizga o'tadi, GitHub sizning hisobingizda. Vendor lock-in yo'q — mahsulot va uning kodi butunlay sizniki." },
        { tag: "05", title: "Lokal jamoa, founder bilan bevosita", desc: "Founder Bekzod Mirzaaliyev Telegram'da. Til va vaqt mintaqasi muammosi yo'q — biznesingizni bevosita tushunamiz." },
      ],
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Mahsulot g'oyangizni",
      titleAccent: "muhokama qilaylik",
      subtitle: "30 daqiqalik bepul konsultatsiyada mahsulot ko'lamini va MVP rejasini aniqlaymiz. Hech qanday majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "Buyurtma dasturiy mahsulot haqida ko'p so'raladigan savollar.",
      items: [
        { q: "Buyurtma mahsulot qancha turadi va qancha vaqt oladi?", a: "Aniq narx va muddat texnik spec'dan keyin beriladi, chunki har mahsulot har xil. Odatda ishlovchi MVP 2-4 haftada tayyor bo'ladi. Konsultatsiya bepul, to'lov esa faqat MVP tayyor bo'lganda boshlanadi." },
        { q: "TezCode Custom oddiy IT xizmatdan nimasi bilan farq qiladi?", a: "Bu tayyor shablon yoki ijaraga olinadigan SaaS emas. Biz sizning individual ehtiyojingizga noldan mahsulot quramiz — u faqat sizniki, sizning jarayoningizga qurilgan va source code'i to'liq sizga tegishli." },
        { q: "Source code kimniki bo'ladi?", a: "100% sizniki. Kontraktda yoziladi: kod to'liq sizga beriladi, GitHub sizning hisobingizda. Mahsulot ham, uning kodi ham butunlay sizga tegishli." },
        { q: "Vendor lock-in bo'ladimi?", a: "Yo'q. Kod sizda bo'lgani uchun bizga bog'lanib qolmaysiz — istalgan vaqtda boshqa jamoaga o'tishingiz yoki o'zingiz davom ettirishingiz mumkin. Biz sifat va qulaylik bilan ushlab qolamiz, majburiyat bilan emas." },
        { q: "Ishga tushgandan keyin qo'llab-quvvatlaysizmi?", a: "Ha. Deploy'dan keyin texnik qo'llab-quvvatlash, yangi funksiyalar va nazorat ko'rsatamiz. Support shartlarini mahsulot kattaligiga qarab kelishamiz." },
      ],
    },
    related: {
      badge: "Yana ko'ring",
      title: "Boshqa",
      titleAccent: "yechimlar",
      subtitle: "TezCode Custom sizga kerak bo'lmasa yoki qo'shimcha kerak bo'lsa.",
      links: [
        { href: "/hire-developers", label: "Dasturchi yollash", desc: "O'z jamoangizga in-house dasturchi kerakmi — bizning mutaxassislarni jalb qiling." },
        { href: "/ai-agent", label: "AI agent", desc: "Biznesingiz uchun AI agent va avtomatizatsiya yechimlari." },
        { href: "/it-xizmatlar", label: "IT xizmatlar", desc: "To'liq tsikl IT xizmatlar: veb, mobil, integratsiya va support." },
      ],
    },
    service: {
      name: "TezCode Custom — buyurtma dasturiy mahsulot, Toshkent",
      description:
        "Noldan buyurtma asosidagi dasturiy mahsulot: ERP, CRM, marketplace, ichki tizim, AI ilova va integratsiya. Biznesingizga moslab qurilgan, MVP 2-4 haftada, source code 100% sizniki. AI Software Factory, 14 in-house dasturchi, Toshkent.",
      serviceType: "Buyurtma dasturiy ta'minot ishlab chiqish",
    },
  },

  ru: {
    hero: {
      badge: "TezCode Custom",
      title1: "Заказной продукт —",
      titleAccent: "с нуля, только для вас",
      title2: "",
      subtitle:
        "TezCode Custom — программный продукт, который строится с нуля именно под ваш бизнес. Не готовый шаблон: система под ваши процессы, а исходный код на 100% ваш. MVP за 2-4 недели, оплата только после готового MVP.",
      trust: "Бесплатная 30-мин консультация • Оплата только после готового MVP • Исходный код на 100% ваш",
      ctaPrimary: "Обсудить проект",
      ctaSecondary: "Как мы работаем",
    },
    capabilities: {
      badge: "Что мы строим",
      title: "Какие заказные системы",
      titleAccent: "мы строим?",
      subtitle:
        "Каждая — с нуля, под ваши бизнес-процессы. Вы не арендуете чужой продукт — мы строим систему, которая принадлежит вам.",
      items: [
        { icon: "bar-chart-2", title: "ERP — управление ресурсами", desc: "Склад, финансы, производство и отчётность в одной системе. Ядро управления, построенное именно под вашу бизнес-модель." },
        { icon: "users", title: "CRM — клиенты и продажи", desc: "Лиды, воронка продаж, история клиентов и задачи. Система, повторяющая ваш процесс продаж, без ограничений готовых CRM." },
        { icon: "shopping-cart", title: "Marketplace и платформа", desc: "Многосторонний рынок, заказы, платежи и логистика. Продукт, который можно показать инвестору, — строим с нуля." },
        { icon: "wrench", title: "Внутренние системы и автоматизация", desc: "Внутренние панели, сбор отчётности, автоматизация процессов. Собираем Excel и ручной труд в единую систему." },
        { icon: "bot", title: "AI-приложения и агенты", desc: "RAG, чатбот, умная аналитика и автоматические решения с Claude и современными AI-инструментами. AI встроен в ядро бизнеса." },
        { icon: "link-2", title: "Интеграции и API", desc: "Подключаем Telegram, платёжные системы, 1C, налоговую и внешние сервисы в единый продукт. Ваши системы работают вместе." },
      ],
    },
    process: {
      badge: "Как мы работаем",
      title: "От discovery",
      titleAccent: "до production",
      subtitle: "Первые 30 минут бесплатно. Дальше каждый шаг с точной ценой, сроком и письменным spec.",
      steps: [
        { num: "01", title: "Discovery", desc: "Глубоко изучаем ваш бизнес и проблему: для кого, зачем, какой результат. Вместе определяем объём продукта.", icon: "search" },
        { num: "02", title: "Технический spec + цена", desc: "Технический документ, архитектура, цена, срок и состав команды. Письменный контракт — без скрытых затрат.", icon: "clipboard-list" },
        { num: "03", title: "MVP (2-4 недели)", desc: "Строим первую рабочую версию за 2-4 недели. Демо каждую неделю, вы даёте обратную связь. Оплата начинается на этом этапе.", icon: "zap" },
        { num: "04", title: "Production + масштабирование", desc: "Деплой, реальные пользователи и следующие функции. Вместе растим продукт и обеспечиваем техподдержку.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Почему TezCode Custom",
      title: "Почему заказной продукт",
      titleAccent: "доверяют нам",
      subtitle: "Главные отличия, выделяющие нас среди готовых SaaS и фрилансеров.",
      items: [
        { tag: "01", title: "14 in-house разработчиков", desc: "В офисе в Ташкенте. Не фрилансеры — команда. Backend, frontend, mobile, AI, DevOps работают над одним проектом вместе." },
        { tag: "02", title: "Быстрее MVP с AI", desc: "Claude и современные AI-инструменты — наш ежедневный рабочий инструмент. Поэтому полноценный заказной MVP обычно готов за 2-4 недели." },
        { tag: "03", title: "Оплата только после готового MVP", desc: "Риск не на вашей стороне. Пока не увидите рабочий продукт — оплата не начинается. Это наша модель доверия." },
        { tag: "04", title: "Исходный код на 100% ваш", desc: "Код полностью передаётся вам, GitHub на вашем аккаунте. Без vendor lock-in — продукт и его код целиком ваши." },
        { tag: "05", title: "Локальная команда, прямой контакт с основателем", desc: "Основатель Бекзод Мирзаалиев в Telegram. Нет языкового барьера и разницы таймзон — понимаем ваш бизнес напрямую." },
      ],
    },
    cta: {
      badge: "Время начать",
      title: "Обсудим вашу",
      titleAccent: "идею продукта",
      subtitle: "На бесплатной 30-минутной консультации определим объём продукта и план MVP. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Частые вопросы о заказной разработке продукта.",
      items: [
        { q: "Сколько стоит заказной продукт и сколько времени занимает?", a: "Точная цена и срок даются после технического spec, ведь каждый продукт разный. Обычно рабочий MVP готов за 2-4 недели. Консультация бесплатна, оплата начинается только после готового MVP." },
        { q: "Чем TezCode Custom отличается от обычных IT-услуг?", a: "Это не готовый шаблон и не арендуемый SaaS. Мы строим продукт под вашу индивидуальную потребность с нуля — он только ваш, построен под ваши процессы, а исходный код полностью принадлежит вам." },
        { q: "Чей будет исходный код?", a: "100% ваш. В контракте указано: код передаётся полностью, GitHub на вашем аккаунте. И продукт, и его код целиком принадлежат вам." },
        { q: "Будет ли vendor lock-in?", a: "Нет. Раз код у вас, вы не привязаны к нам — в любой момент можете перейти к другой команде или продолжить сами. Мы удерживаем качеством и удобством, а не привязкой." },
        { q: "Поддерживаете ли после запуска?", a: "Да. После деплоя оказываем техническую поддержку, новые функции и мониторинг. Условия поддержки согласуем в зависимости от размера продукта." },
      ],
    },
    related: {
      badge: "Смотрите также",
      title: "Другие",
      titleAccent: "решения",
      subtitle: "Если TezCode Custom вам не подходит или нужно дополнительно.",
      links: [
        { href: "/hire-developers", label: "Нанять разработчиков", desc: "Нужны in-house разработчики в вашу команду — подключите наших специалистов." },
        { href: "/ai-agent", label: "AI-агент", desc: "AI-агенты и автоматизация для вашего бизнеса." },
        { href: "/it-xizmatlar", label: "IT-услуги", desc: "Полный цикл IT-услуг: веб, мобайл, интеграции и поддержка." },
      ],
    },
    service: {
      name: "TezCode Custom — заказной программный продукт, Ташкент",
      description:
        "Заказная разработка ПО с нуля: ERP, CRM, marketplace, внутренние системы, AI-приложения и интеграции. Построено под ваш бизнес, MVP за 2-4 недели, исходный код на 100% ваш. AI Software Factory, 14 in-house разработчиков, Ташкент.",
      serviceType: "Заказная разработка программного обеспечения",
    },
  },

  en: {
    hero: {
      badge: "TezCode Custom",
      title1: "Bespoke software —",
      titleAccent: "from scratch, just for you",
      title2: "",
      subtitle:
        "TezCode Custom is a software product built from scratch specifically for your business. Not an off-the-shelf template: a system shaped to your processes, and the source code is 100% yours. MVP in 2-4 weeks, you pay only after the MVP is delivered.",
      trust: "Free 30-min consultation • You pay only after MVP is delivered • Source code 100% yours",
      ctaPrimary: "Discuss your project",
      ctaSecondary: "How we work",
    },
    capabilities: {
      badge: "What we build",
      title: "Which bespoke systems",
      titleAccent: "do we build?",
      subtitle:
        "Each one from scratch, shaped to your business processes. You don't rent someone else's product — we build a system that you own.",
      items: [
        { icon: "bar-chart-2", title: "ERP — resource management", desc: "Inventory, finance, production and reporting in one system. A management core built specifically for your business model." },
        { icon: "users", title: "CRM — clients & sales", desc: "Leads, sales pipeline, client history and tasks. A system that mirrors your sales process, without off-the-shelf CRM limits." },
        { icon: "shopping-cart", title: "Marketplace & platform", desc: "Multi-sided market, orders, payments and logistics flow. A product you can show to investors — built from scratch." },
        { icon: "wrench", title: "Internal tools & automation", desc: "Internal dashboards, report aggregation, process automation. We fold Excel and manual work into one system." },
        { icon: "bot", title: "AI-powered apps & agents", desc: "RAG, chatbots, smart analytics and automated decisions with Claude and modern AI tooling. AI embedded into your business core." },
        { icon: "link-2", title: "Integrations & API", desc: "We connect Telegram, payment systems, 1C, tax services and external APIs into one product. Your systems work together." },
      ],
    },
    process: {
      badge: "How we work",
      title: "From discovery",
      titleAccent: "to production",
      subtitle: "First 30 minutes are free. Then every step has a clear price, timeline and a written spec.",
      steps: [
        { num: "01", title: "Discovery", desc: "We study your business and problem deeply: for whom, why, what outcome. Together we define the product scope.", icon: "search" },
        { num: "02", title: "Technical spec + quote", desc: "A technical doc, architecture, price, timeline and team. Written contract — no hidden costs.", icon: "clipboard-list" },
        { num: "03", title: "MVP (2-4 weeks)", desc: "We build the first working version in 2-4 weeks. Weekly demos, you give feedback. Payment starts at this stage.", icon: "zap" },
        { num: "04", title: "Production + scale", desc: "Deploy, real users and the next features. We grow the product together and provide technical support.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Why TezCode Custom",
      title: "Why teams trust us with",
      titleAccent: "bespoke products",
      subtitle: "The key differences that set us apart from off-the-shelf SaaS and freelancers.",
      items: [
        { tag: "01", title: "14 in-house developers", desc: "In our Tashkent office. Not freelancers — a team. Backend, frontend, mobile, AI, DevOps work on one project together." },
        { tag: "02", title: "Faster MVP with AI", desc: "Claude and modern AI tools are our daily workhorse. That's why a full bespoke MVP is usually ready in 2-4 weeks." },
        { tag: "03", title: "Pay only after MVP is delivered", desc: "Risk is not on you. Payment doesn't start until you see a working product. That's our trust model." },
        { tag: "04", title: "Source code 100% yours", desc: "The code is handed over to you in full, GitHub on your account. No vendor lock-in — the product and its code are entirely yours." },
        { tag: "05", title: "Local team, direct founder contact", desc: "Founder Bekzod Mirzaaliyev is on Telegram. No language barrier or timezone gap — we understand your business directly." },
      ],
    },
    cta: {
      badge: "Time to start",
      title: "Let's discuss",
      titleAccent: "your product idea",
      subtitle: "In a free 30-minute consultation we'll define the product scope and the MVP plan. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "Common questions about bespoke product development.",
      items: [
        { q: "How much does a bespoke product cost and how long does it take?", a: "An exact price and timeline come after the technical spec, since every product differs. A working MVP is usually ready in 2-4 weeks. The consultation is free, and payment starts only after the MVP is delivered." },
        { q: "How is TezCode Custom different from generic IT services?", a: "It's not an off-the-shelf template or a rented SaaS. We build a product for your individual need from scratch — it's yours alone, shaped to your processes, and the source code belongs entirely to you." },
        { q: "Who owns the source code?", a: "100% you. The contract states: full code handover, GitHub on your account. Both the product and its code belong entirely to you." },
        { q: "Is there any vendor lock-in?", a: "No. Since you hold the code, you're not tied to us — at any point you can move to another team or continue on your own. We keep you with quality and convenience, not lock-in." },
        { q: "Do you support the product after launch?", a: "Yes. After deploy we provide technical support, new features and monitoring. We agree on support terms depending on the size of the product." },
      ],
    },
    related: {
      badge: "See also",
      title: "Other",
      titleAccent: "solutions",
      subtitle: "If TezCode Custom isn't the right fit or you need something extra.",
      links: [
        { href: "/hire-developers", label: "Hire developers", desc: "Need in-house developers for your own team — bring in our specialists." },
        { href: "/ai-agent", label: "AI agent", desc: "AI agents and automation solutions for your business." },
        { href: "/it-xizmatlar", label: "IT services", desc: "Full-cycle IT services: web, mobile, integrations and support." },
      ],
    },
    service: {
      name: "TezCode Custom — bespoke software product, Tashkent",
      description:
        "Bespoke software built from scratch: ERP, CRM, marketplace, internal tools, AI-powered apps and integrations. Shaped to your business, MVP in 2-4 weeks, source code 100% yours. AI Software Factory, 14 in-house developers, Tashkent.",
      serviceType: "Bespoke / custom software development",
    },
  },

  ar: {
    hero: {
      badge: "TezCode Custom",
      title1: "منتج برمجي مخصص —",
      titleAccent: "من الصفر، لك وحدك",
      title2: "",
      subtitle:
        "TezCode Custom منتج برمجي يُبنى من الصفر خصيصاً لأعمالك. ليس قالباً جاهزاً: نظام مصمم لعملياتك، والكود المصدري لك بنسبة 100%. MVP خلال 2-4 أسابيع، والدفع فقط بعد تسليم MVP.",
      trust: "استشارة 30 دقيقة مجانية • الدفع فقط بعد تسليم MVP • الكود المصدري لك 100%",
      ctaPrimary: "لنناقش مشروعك",
      ctaSecondary: "كيف نعمل",
    },
    capabilities: {
      badge: "ماذا نبني",
      title: "أي أنظمة مخصصة",
      titleAccent: "نبني؟",
      subtitle:
        "كل نظام من الصفر، مصمم لعملياتك. أنت لا تستأجر منتج غيرك — نبني نظاماً تملكه أنت.",
      items: [
        { icon: "bar-chart-2", title: "ERP — إدارة الموارد", desc: "المخزون والمالية والإنتاج والتقارير في نظام واحد. نواة إدارة مبنية خصيصاً لنموذج أعمالك." },
        { icon: "users", title: "CRM — العملاء والمبيعات", desc: "العملاء المحتملون، مسار المبيعات، سجل العملاء والمهام. نظام يعكس عملية مبيعاتك دون قيود أنظمة CRM الجاهزة." },
        { icon: "shopping-cart", title: "Marketplace ومنصة", desc: "سوق متعدد الأطراف، طلبات، مدفوعات وتدفق لوجستي. منتج يمكن عرضه على المستثمرين — نبنيه من الصفر." },
        { icon: "wrench", title: "أنظمة داخلية وأتمتة", desc: "لوحات داخلية، تجميع تقارير، أتمتة العمليات. ندمج Excel والعمل اليدوي في نظام واحد." },
        { icon: "bot", title: "تطبيقات ووكلاء AI", desc: "RAG، شات بوت، تحليلات ذكية وقرارات تلقائية مع Claude وأدوات الذكاء الاصطناعي الحديثة. AI مدمج في نواة أعمالك." },
        { icon: "link-2", title: "التكاملات وAPI", desc: "نربط Telegram وأنظمة الدفع و1C والخدمات الضريبية وواجهات خارجية في منتج واحد. أنظمتك تعمل معاً." },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "من الـ discovery",
      titleAccent: "إلى الإنتاج",
      subtitle: "أول 30 دقيقة مجانية. ثم كل خطوة بسعر وموعد واضحين ووثيقة spec مكتوبة.",
      steps: [
        { num: "01", title: "Discovery", desc: "ندرس أعمالك ومشكلتك بعمق: لمن، ولماذا، وأي نتيجة. نحدد نطاق المنتج معاً.", icon: "search" },
        { num: "02", title: "Spec تقني + سعر", desc: "وثيقة تقنية، معمارية، سعر، موعد وفريق. عقد مكتوب — بلا تكاليف خفية.", icon: "clipboard-list" },
        { num: "03", title: "MVP (2-4 أسابيع)", desc: "نبني أول نسخة عاملة خلال 2-4 أسابيع. عرض كل أسبوع، وأنت تعطي ملاحظات. يبدأ الدفع في هذه المرحلة.", icon: "zap" },
        { num: "04", title: "الإنتاج + التوسع", desc: "نشر، مستخدمون حقيقيون والميزات التالية. ننمّي المنتج معاً ونقدّم الدعم الفني.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "لماذا TezCode Custom",
      title: "لماذا يثقون بنا في",
      titleAccent: "المنتجات المخصصة",
      subtitle: "الفروق الرئيسية التي تميّزنا عن أنظمة SaaS الجاهزة والمستقلين.",
      items: [
        { tag: "01", title: "14 مطوراً داخلياً", desc: "في مكتبنا بطشقند. ليسوا مستقلين — فريق. Backend وfrontend وجوال وAI وDevOps يعملون على مشروع واحد معاً." },
        { tag: "02", title: "MVP أسرع مع AI", desc: "Claude وأدوات الذكاء الاصطناعي الحديثة أداتنا اليومية. لذلك عادة يكون MVP مخصص كامل جاهزاً خلال 2-4 أسابيع." },
        { tag: "03", title: "الدفع فقط بعد تسليم MVP", desc: "المخاطرة ليست عليك. لا يبدأ الدفع حتى ترى منتجاً عاملاً. هذا نموذج ثقتنا." },
        { tag: "04", title: "الكود المصدري لك 100%", desc: "يُسلَّم الكود لك بالكامل، GitHub على حسابك. لا vendor lock-in — المنتج وكوده لك تماماً." },
        { tag: "05", title: "فريق محلي، تواصل مباشر مع المؤسس", desc: "المؤسس بكزود ميرزااليف على Telegram. لا حاجز لغوي ولا فرق توقيت — نفهم أعمالك مباشرة." },
      ],
    },
    cta: {
      badge: "وقت البدء",
      title: "لنناقش",
      titleAccent: "فكرة منتجك",
      subtitle: "في استشارة مجانية مدتها 30 دقيقة سنحدد نطاق المنتج وخطة MVP. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع بكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أسئلة شائعة عن تطوير المنتجات المخصصة.",
      items: [
        { q: "كم يكلّف المنتج المخصص وكم يستغرق؟", a: "يُعطى السعر والموعد الدقيقان بعد الـ spec التقني، لأن كل منتج يختلف. عادة يكون MVP عامل جاهزاً خلال 2-4 أسابيع. الاستشارة مجانية، والدفع يبدأ فقط بعد تسليم MVP." },
        { q: "كيف يختلف TezCode Custom عن خدمات IT العامة؟", a: "ليس قالباً جاهزاً ولا SaaS مستأجَراً. نبني منتجاً لاحتياجك الفردي من الصفر — إنه لك وحدك، مصمم لعملياتك، والكود المصدري يخصك بالكامل." },
        { q: "لمن الكود المصدري؟", a: "100% لك. ينص العقد: تسليم كامل للكود، GitHub على حسابك. المنتج وكوده يخصانك بالكامل." },
        { q: "هل هناك vendor lock-in؟", a: "لا. بما أن الكود لديك، فأنت غير مرتبط بنا — يمكنك في أي وقت الانتقال لفريق آخر أو المتابعة بنفسك. نحتفظ بك بالجودة والراحة، لا بالارتباط." },
        { q: "هل تدعمون المنتج بعد الإطلاق؟", a: "نعم. بعد النشر نقدّم دعماً فنياً وميزات جديدة ومراقبة. نتفق على شروط الدعم حسب حجم المنتج." },
      ],
    },
    related: {
      badge: "انظر أيضاً",
      title: "حلول",
      titleAccent: "أخرى",
      subtitle: "إذا لم يكن TezCode Custom مناسباً أو احتجت شيئاً إضافياً.",
      links: [
        { href: "/hire-developers", label: "توظيف مطورين", desc: "تحتاج مطورين داخليين لفريقك — استعن بمتخصصينا." },
        { href: "/ai-agent", label: "وكيل AI", desc: "وكلاء ذكاء اصطناعي وحلول أتمتة لأعمالك." },
        { href: "/it-xizmatlar", label: "خدمات IT", desc: "خدمات IT كاملة: ويب، جوال، تكاملات ودعم." },
      ],
    },
    service: {
      name: "TezCode Custom — منتج برمجي مخصص، طشقند",
      description:
        "تطوير برمجيات مخصصة من الصفر: ERP، CRM، marketplace، أنظمة داخلية، تطبيقات AI وتكاملات. مصمم لأعمالك، MVP خلال 2-4 أسابيع، الكود المصدري لك 100%. مصنع برمجيات بالذكاء الاصطناعي، 14 مطوراً داخلياً، طشقند.",
      serviceType: "تطوير البرمجيات المخصصة",
    },
  },

  uk: {
    hero: {
      badge: "TezCode Custom",
      title1: "Замовний продукт —",
      titleAccent: "з нуля, лише для вас",
      title2: "",
      subtitle:
        "TezCode Custom — програмний продукт, що будується з нуля саме під ваш бізнес. Не готовий шаблон: система під ваші процеси, а вихідний код на 100% ваш. MVP за 2-4 тижні, оплата лише після готового MVP.",
      trust: "Безкоштовна 30-хв консультація • Оплата лише після готового MVP • Вихідний код на 100% ваш",
      ctaPrimary: "Обговорити проект",
      ctaSecondary: "Як ми працюємо",
    },
    capabilities: {
      badge: "Що ми будуємо",
      title: "Які замовні системи",
      titleAccent: "ми будуємо?",
      subtitle:
        "Кожна — з нуля, під ваші бізнес-процеси. Ви не орендуєте чужий продукт — ми будуємо систему, яка належить вам.",
      items: [
        { icon: "bar-chart-2", title: "ERP — керування ресурсами", desc: "Склад, фінанси, виробництво та звітність в одній системі. Ядро керування, побудоване саме під вашу бізнес-модель." },
        { icon: "users", title: "CRM — клієнти та продажі", desc: "Ліди, воронка продажів, історія клієнтів і задачі. Система, що повторює ваш процес продажів, без обмежень готових CRM." },
        { icon: "shopping-cart", title: "Marketplace і платформа", desc: "Багатосторонній ринок, замовлення, платежі та логістика. Продукт, який можна показати інвестору, — будуємо з нуля." },
        { icon: "wrench", title: "Внутрішні системи та автоматизація", desc: "Внутрішні панелі, збір звітності, автоматизація процесів. Збираємо Excel і ручну працю в єдину систему." },
        { icon: "bot", title: "AI-застосунки та агенти", desc: "RAG, чатбот, розумна аналітика та автоматичні рішення з Claude і сучасними AI-інструментами. AI вбудований у ядро бізнесу." },
        { icon: "link-2", title: "Інтеграції та API", desc: "Поєднуємо Telegram, платіжні системи, 1C, податкову та зовнішні сервіси в єдиний продукт. Ваші системи працюють разом." },
      ],
    },
    process: {
      badge: "Як ми працюємо",
      title: "Від discovery",
      titleAccent: "до production",
      subtitle: "Перші 30 хвилин безкоштовно. Далі кожен крок з точною ціною, терміном і письмовим spec.",
      steps: [
        { num: "01", title: "Discovery", desc: "Глибоко вивчаємо ваш бізнес і проблему: для кого, навіщо, який результат. Разом визначаємо обсяг продукту.", icon: "search" },
        { num: "02", title: "Технічний spec + ціна", desc: "Технічний документ, архітектура, ціна, термін і склад команди. Письмовий контракт — без прихованих витрат.", icon: "clipboard-list" },
        { num: "03", title: "MVP (2-4 тижні)", desc: "Будуємо першу робочу версію за 2-4 тижні. Демо щотижня, ви даєте відгук. Оплата починається на цьому етапі.", icon: "zap" },
        { num: "04", title: "Production + масштабування", desc: "Деплой, реальні користувачі та наступні функції. Разом ростимо продукт і забезпечуємо техпідтримку.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Чому TezCode Custom",
      title: "Чому замовний продукт",
      titleAccent: "довіряють нам",
      subtitle: "Головні відмінності, що вирізняють нас серед готових SaaS і фрілансерів.",
      items: [
        { tag: "01", title: "14 in-house розробників", desc: "В офісі у Ташкенті. Не фрілансери — команда. Backend, frontend, mobile, AI, DevOps працюють над одним проектом разом." },
        { tag: "02", title: "Швидший MVP з AI", desc: "Claude і сучасні AI-інструменти — наш щоденний робочий інструмент. Тому повноцінний замовний MVP зазвичай готовий за 2-4 тижні." },
        { tag: "03", title: "Оплата лише після готового MVP", desc: "Ризик не на вашому боці. Поки не побачите робочий продукт — оплата не починається. Це наша модель довіри." },
        { tag: "04", title: "Вихідний код на 100% ваш", desc: "Код повністю передається вам, GitHub на вашому акаунті. Без vendor lock-in — продукт і його код цілком ваші." },
        { tag: "05", title: "Локальна команда, прямий контакт із засновником", desc: "Засновник Бекзод Мірзаалієв у Telegram. Немає мовного бар'єру та різниці таймзон — розуміємо ваш бізнес напряму." },
      ],
    },
    cta: {
      badge: "Час починати",
      title: "Обговоримо вашу",
      titleAccent: "ідею продукту",
      subtitle: "На безкоштовній 30-хвилинній консультації визначимо обсяг продукту та план MVP. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "Часті запитання про замовну розробку продукту.",
      items: [
        { q: "Скільки коштує замовний продукт і скільки часу займає?", a: "Точна ціна і термін даються після технічного spec, адже кожен продукт різний. Зазвичай робочий MVP готовий за 2-4 тижні. Консультація безкоштовна, оплата починається лише після готового MVP." },
        { q: "Чим TezCode Custom відрізняється від звичайних IT-послуг?", a: "Це не готовий шаблон і не орендований SaaS. Ми будуємо продукт під вашу індивідуальну потребу з нуля — він лише ваш, побудований під ваші процеси, а вихідний код повністю належить вам." },
        { q: "Кому належить вихідний код?", a: "100% вам. У контракті вказано: повна передача коду, GitHub на вашому акаунті. І продукт, і його код цілком належать вам." },
        { q: "Чи буде vendor lock-in?", a: "Ні. Оскільки код у вас, ви не прив'язані до нас — будь-коли можете перейти до іншої команди або продовжити самі. Ми утримуємо якістю та зручністю, а не прив'язкою." },
        { q: "Чи підтримуєте після запуску?", a: "Так. Після деплою надаємо технічну підтримку, нові функції та моніторинг. Умови підтримки узгоджуємо залежно від розміру продукту." },
      ],
    },
    related: {
      badge: "Дивіться також",
      title: "Інші",
      titleAccent: "рішення",
      subtitle: "Якщо TezCode Custom вам не підходить або потрібно додатково.",
      links: [
        { href: "/hire-developers", label: "Найняти розробників", desc: "Потрібні in-house розробники у вашу команду — залучіть наших фахівців." },
        { href: "/ai-agent", label: "AI-агент", desc: "AI-агенти та автоматизація для вашого бізнесу." },
        { href: "/it-xizmatlar", label: "IT-послуги", desc: "Повний цикл IT-послуг: веб, мобайл, інтеграції та підтримка." },
      ],
    },
    service: {
      name: "TezCode Custom — замовний програмний продукт, Ташкент",
      description:
        "Замовна розробка ПЗ з нуля: ERP, CRM, marketplace, внутрішні системи, AI-застосунки та інтеграції. Побудовано під ваш бізнес, MVP за 2-4 тижні, вихідний код на 100% ваш. AI Software Factory, 14 in-house розробників, Ташкент.",
      serviceType: "Замовна розробка програмного забезпечення",
    },
  },
};
