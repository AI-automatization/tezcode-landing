import type { ServicePageContent } from "@/components/service-page/types";

// Content for /it-xizmatlar — target keyword: "IT xizmatlar Toshkent" /
// "IT услуги Ташкент". Only confirmed Tezcode facts (AI Software Factory, 2024,
// founder Bekzod Mirzaaliyev, 14 in-house developers, Tashkent, pay-after-MVP).
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "IT xizmatlar — Toshkent",
      title1: "IT xizmatlar",
      titleAccent: "— Toshkent",
      title2: "",
      subtitle:
        "Dastur ishlab chiqish, veb va mobil ilova, AI yechim, integratsiya va texnik qo'llab-quvvatlash. Tezcode — Toshkentdagi AI Software Factory, 14 nafar in-house dasturchi.",
      trust: "Bepul 30 daqiqa konsultatsiya • To'lov faqat MVP tayyor bo'lganda",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "Xizmatlarni ko'rish",
    },
    capabilities: {
      badge: "Xizmatlar",
      title: "Qaysi IT xizmatlarni",
      titleAccent: "ko'rsatamiz?",
      subtitle:
        "Bitta jamoadan to'liq texnik xizmat: g'oyadan production'gacha va keyin qo'llab-quvvatlash.",
      items: [
        { icon: "💻", title: "Dasturiy ta'minot ishlab chiqish", desc: "Buyurtma asosida web va backend tizimlar: ERP, CRM, e-commerce, boshqaruv paneli. Noldan, biznesingizga moslab." },
        { icon: "📱", title: "Mobil ilovalar", desc: "iOS va Android uchun ilovalar (React Native, PWA). Mijozlaringiz uchun qulay, tez va zamonaviy." },
        { icon: "🌐", title: "Veb-sayt va landing", desc: "Tez, SEO'ga moslashtirilgan veb-sayt va landing sahifalar. Qidiruvda topiladigan, mijoz jalb qiladigan." },
        { icon: "🤖", title: "AI va avtomatizatsiya", desc: "AI chatbot, avtomatik hisobot, jarayon avtomatizatsiyasi. Claude va zamonaviy AI vositalari bilan." },
        { icon: "🔗", title: "Integratsiya va API", desc: "Telegram, to'lov tizimlari, 1C, CRM va boshqa xizmatlarni o'zaro ulash. Tizimlaringiz birga ishlaydi." },
        { icon: "🛠️", title: "Qo'llab-quvvatlash (support)", desc: "Joriy etgandan keyin texnik qo'llab-quvvatlash, yangilanish va nazorat. Tizim ishlab turishini kafolatlaymiz." },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "4 qadamda",
      titleAccent: "natijaga",
      subtitle: "Birinchi 30 daqiqa bepul. Keyin har qadam aniq narx va aniq muddat bilan.",
      steps: [
        { num: "01", title: "Bepul konsultatsiya", desc: "Vazifangizni o'rganamiz: qanday IT xizmat kerak, qanday natija kutyapsiz. Majburiyat yo'q.", icon: "💬" },
        { num: "02", title: "Texnik tahlil + taklif", desc: "Aniq texnik hujjat, narx, muddat va jamoa tarkibi. Yozma kontrakt.", icon: "📐" },
        { num: "03", title: "Ishlab chiqish (MVP)", desc: "2-4 hafta ichida ishlovchi versiya. Har hafta ko'rsatamiz, siz fikr berasiz.", icon: "⚡" },
        { num: "04", title: "Production + qo'llab-quvvatlash", desc: "Joylashtirish (deploy) va texnik support. Tizim barqaror ishlashini ta'minlaymiz.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "Nega Tezcode",
      title: "Toshkentda",
      titleAccent: "ishonchli IT hamkor",
      subtitle: "Bizni boshqalardan ajratib turadigan asosiy farqlar.",
      items: [
        { tag: "01", title: "14 nafar in-house dasturchi", desc: "Toshkentdagi ofisimizda. Freelancer emas — jamoa. Backend, frontend, mobil, AI, DevOps — barchasi bizda." },
        { tag: "02", title: "AI bilan tezroq", desc: "Claude va zamonaviy AI vositalari kundalik ishchi vositamiz. Bir oylik ishni qisqaroq muddatda, sifatni saqlagan holda." },
        { tag: "03", title: "To'lov faqat MVP tayyor bo'lganda", desc: "Risk siz tomonda emas. Ishlovchi natijani ko'rmaguningizcha to'lov boshlanmaydi — bizning ishonch modelimiz." },
        { tag: "04", title: "Lokal jamoa, to'g'ridan-to'g'ri aloqa", desc: "Founder Bekzod Mirzaaliyev Telegram'da. Til va vaqt mintaqasi muammosi yo'q — sizning biznes muhitingizni tushunamiz." },
      ],
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "IT vazifangizni",
      titleAccent: "muhokama qilaylik",
      subtitle: "30 daqiqalik bepul konsultatsiyada eng yaxshi yechimni topamiz. Hech qanday majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "Toshkentda IT xizmatlar haqida ko'p so'raladigan savollar.",
      items: [
        { q: "Tezcode qanday IT xizmatlarni ko'rsatadi?", a: "Tezcode to'liq tsikl IT xizmatlarini ko'rsatadi: dasturiy ta'minot ishlab chiqish (web, backend), mobil ilovalar, veb-sayt va landing, AI va avtomatizatsiya, integratsiya/API va texnik qo'llab-quvvatlash. Hammasi bitta jamoadan." },
        { q: "Toshkentda joylashganmisiz?", a: "Ha. Tezcode Toshkentda joylashgan AI Software Factory, 14 nafar in-house dasturchidan iborat jamoa. Founder — Bekzod Mirzaaliyev. Lokal jamoa bo'lgani uchun til va vaqt mintaqasi muammosi yo'q." },
        { q: "Qancha vaqtda ishni boshlaysiz?", a: "Konsultatsiyadan keyin 3-5 kun ichida texnik taklif beramiz, kelishilgach darrov boshlaymiz. Birinchi ishlovchi versiya odatda 2-4 hafta ichida tayyor bo'ladi." },
        { q: "Narx qanday belgilanadi?", a: "Aniq narx texnik tahlildan keyin beriladi, chunki har vazifa har xil. Konsultatsiya bepul, to'lov esa faqat MVP tayyor bo'lganda boshlanadi — risk siz tomonda emas." },
        { q: "Manba kod (source code) kimniki bo'ladi?", a: "100% sizniki. Kontraktda yoziladi: kod to'liq sizga beriladi, GitHub sizning yoki bizning hisobimizda — siz tanlaysiz. Vendor lock-in yo'q." },
        { q: "Joriy etgandan keyin qo'llab-quvvatlaysizmi?", a: "Ha. Deploy'dan keyin texnik qo'llab-quvvatlash, yangilanish va nazorat ko'rsatamiz. Qo'llab-quvvatlash shartlarini loyiha kattaligiga qarab kelishamiz." },
      ],
    },
    service: {
      name: "IT xizmatlar — Tezcode, Toshkent",
      description:
        "Toshkentda IT xizmatlar: dasturiy ta'minot ishlab chiqish, mobil ilova, veb-sayt, AI va avtomatizatsiya, integratsiya va texnik qo'llab-quvvatlash. AI Software Factory, 14 in-house dasturchi.",
      serviceType: "IT xizmatlar / dasturiy ta'minot ishlab chiqish",
    },
  },

  ru: {
    hero: {
      badge: "IT услуги — Ташкент",
      title1: "IT услуги",
      titleAccent: "— Ташкент",
      title2: "",
      subtitle:
        "Разработка ПО, веб и мобильные приложения, AI-решения, интеграции и техническая поддержка. Tezcode — AI Software Factory в Ташкенте, 14 in-house разработчиков.",
      trust: "Бесплатная 30-мин консультация • Оплата только после готового MVP",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Смотреть услуги",
    },
    capabilities: {
      badge: "Услуги",
      title: "Какие IT-услуги",
      titleAccent: "мы оказываем?",
      subtitle: "Полный технический сервис от одной команды: от идеи до production и дальше — поддержка.",
      items: [
        { icon: "💻", title: "Разработка ПО", desc: "Заказные web и backend системы: ERP, CRM, e-commerce, панель управления. С нуля, под ваш бизнес." },
        { icon: "📱", title: "Мобильные приложения", desc: "Приложения для iOS и Android (React Native, PWA). Удобные, быстрые и современные для ваших клиентов." },
        { icon: "🌐", title: "Сайты и лендинги", desc: "Быстрые, оптимизированные под SEO сайты и лендинги. Их находят в поиске, они привлекают клиентов." },
        { icon: "🤖", title: "AI и автоматизация", desc: "AI-чатбот, автоматические отчёты, автоматизация процессов. С Claude и современными AI-инструментами." },
        { icon: "🔗", title: "Интеграции и API", desc: "Связываем Telegram, платёжные системы, 1C, CRM и другие сервисы. Ваши системы работают вместе." },
        { icon: "🛠️", title: "Поддержка (support)", desc: "После внедрения — техническая поддержка, обновления и мониторинг. Гарантируем работоспособность системы." },
      ],
    },
    process: {
      badge: "Как мы работаем",
      title: "4 шага к",
      titleAccent: "результату",
      subtitle: "Первые 30 минут бесплатно. Дальше каждый шаг с точной ценой и сроком.",
      steps: [
        { num: "01", title: "Бесплатная консультация", desc: "Изучаем вашу задачу: какая IT-услуга нужна, какого результата ждёте. Без обязательств.", icon: "💬" },
        { num: "02", title: "Технический анализ + предложение", desc: "Технический документ, цена, срок и состав команды. Письменный контракт.", icon: "📐" },
        { num: "03", title: "Разработка (MVP)", desc: "Рабочая версия за 2-4 недели. Показываем каждую неделю, вы даёте обратную связь.", icon: "⚡" },
        { num: "04", title: "Production + поддержка", desc: "Деплой и техническая поддержка. Обеспечиваем стабильную работу системы.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "Почему Tezcode",
      title: "Надёжный IT-партнёр",
      titleAccent: "в Ташкенте",
      subtitle: "Главные отличия, которые выделяют нас среди других.",
      items: [
        { tag: "01", title: "14 in-house разработчиков", desc: "В офисе в Ташкенте. Не фрилансеры — команда. Backend, frontend, mobile, AI, DevOps — всё у нас." },
        { tag: "02", title: "Быстрее с AI", desc: "Claude и современные AI-инструменты — наш ежедневный рабочий инструмент. Месяц работы за меньший срок без потери качества." },
        { tag: "03", title: "Оплата только после готового MVP", desc: "Риск не на вашей стороне. Пока не увидите рабочий результат — оплата не начинается. Это наша модель доверия." },
        { tag: "04", title: "Локальная команда, прямая связь", desc: "Основатель Бекзод Мирзаалиев в Telegram. Нет языкового барьера и разницы таймзон — понимаем вашу бизнес-среду." },
      ],
    },
    cta: {
      badge: "Время начать",
      title: "Обсудим",
      titleAccent: "вашу IT-задачу",
      subtitle: "На бесплатной 30-минутной консультации найдём лучшее решение. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Частые вопросы об IT-услугах в Ташкенте.",
      items: [
        { q: "Какие IT-услуги оказывает Tezcode?", a: "Tezcode оказывает полный цикл IT-услуг: разработка ПО (web, backend), мобильные приложения, сайты и лендинги, AI и автоматизация, интеграции/API и техническая поддержка. Всё от одной команды." },
        { q: "Вы находитесь в Ташкенте?", a: "Да. Tezcode — это AI Software Factory в Ташкенте, команда из 14 in-house разработчиков. Основатель — Бекзод Мирзаалиев. Локальная команда, поэтому нет языкового барьера и разницы таймзон." },
        { q: "Как быстро вы начинаете?", a: "После консультации мы даём техническое предложение за 3-5 дней, и сразу начинаем после согласования. Первая рабочая версия обычно готова за 2-4 недели." },
        { q: "Как определяется цена?", a: "Точная цена даётся после технического анализа, ведь каждая задача разная. Консультация бесплатна, оплата начинается только после готового MVP — риск не на вашей стороне." },
        { q: "Чей будет исходный код?", a: "100% ваш. В контракте указано: код передаётся полностью, GitHub на вашем или нашем аккаунте — вы решаете. Без vendor lock-in." },
        { q: "Поддерживаете ли после внедрения?", a: "Да. После деплоя оказываем техническую поддержку, обновления и мониторинг. Условия поддержки согласуем в зависимости от размера проекта." },
      ],
    },
    service: {
      name: "IT-услуги — Tezcode, Ташкент",
      description:
        "IT-услуги в Ташкенте: разработка ПО, мобильные приложения, сайты, AI и автоматизация, интеграции и техническая поддержка. AI Software Factory, 14 in-house разработчиков.",
      serviceType: "IT-услуги / разработка программного обеспечения",
    },
  },

  en: {
    hero: {
      badge: "IT services — Tashkent",
      title1: "IT services",
      titleAccent: "— Tashkent",
      title2: "",
      subtitle:
        "Software development, web and mobile apps, AI solutions, integrations and technical support. Tezcode is an AI Software Factory in Tashkent with 14 in-house developers.",
      trust: "Free 30-min consultation • You pay only after MVP is delivered",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "View services",
    },
    capabilities: {
      badge: "Services",
      title: "Which IT services",
      titleAccent: "do we provide?",
      subtitle: "Full technical service from one team: from idea to production and then support.",
      items: [
        { icon: "💻", title: "Software development", desc: "Custom web and backend systems: ERP, CRM, e-commerce, admin dashboards. From scratch, built for your business." },
        { icon: "📱", title: "Mobile apps", desc: "Apps for iOS and Android (React Native, PWA). Convenient, fast and modern for your customers." },
        { icon: "🌐", title: "Websites & landing pages", desc: "Fast, SEO-optimised websites and landing pages. Found in search, designed to attract customers." },
        { icon: "🤖", title: "AI & automation", desc: "AI chatbots, automated reports, process automation. With Claude and modern AI tooling." },
        { icon: "🔗", title: "Integrations & API", desc: "We connect Telegram, payment systems, 1C, CRM and other services. Your systems work together." },
        { icon: "🛠️", title: "Support", desc: "After rollout — technical support, updates and monitoring. We keep your system running." },
      ],
    },
    process: {
      badge: "How we work",
      title: "4 steps to a",
      titleAccent: "result",
      subtitle: "First 30 minutes are free. Then every step has a clear price and timeline.",
      steps: [
        { num: "01", title: "Free consultation", desc: "We study your task: which IT service you need, what result you expect. No obligations.", icon: "💬" },
        { num: "02", title: "Tech analysis + proposal", desc: "A technical doc, price, timeline and team. Written contract.", icon: "📐" },
        { num: "03", title: "Development (MVP)", desc: "A working version in 2-4 weeks. We demo weekly, you give feedback.", icon: "⚡" },
        { num: "04", title: "Production + support", desc: "Deploy and technical support. We ensure the system runs reliably.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "Why Tezcode",
      title: "A reliable IT partner",
      titleAccent: "in Tashkent",
      subtitle: "The key differences that set us apart.",
      items: [
        { tag: "01", title: "14 in-house developers", desc: "In our Tashkent office. Not freelancers — a team. Backend, frontend, mobile, AI, DevOps — all in-house." },
        { tag: "02", title: "Faster with AI", desc: "Claude and modern AI tools are our daily workhorse. A month of work in a shorter time, without losing quality." },
        { tag: "03", title: "Pay only after MVP is delivered", desc: "Risk is not on you. Payment doesn't start until you see a working result. That's our trust model." },
        { tag: "04", title: "Local team, direct contact", desc: "Founder Bekzod Mirzaaliyev is on Telegram. No language barrier or timezone gap — we understand your business environment." },
      ],
    },
    cta: {
      badge: "Time to start",
      title: "Let's discuss",
      titleAccent: "your IT task",
      subtitle: "We'll find the best solution in a free 30-minute consultation. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "Common questions about IT services in Tashkent.",
      items: [
        { q: "What IT services does Tezcode provide?", a: "Tezcode provides a full cycle of IT services: software development (web, backend), mobile apps, websites and landing pages, AI and automation, integrations/API and technical support. All from one team." },
        { q: "Are you based in Tashkent?", a: "Yes. Tezcode is an AI Software Factory based in Tashkent, a team of 14 in-house developers. The founder is Bekzod Mirzaaliyev. Being a local team, there's no language barrier or timezone gap." },
        { q: "How fast can you start?", a: "After the consultation we provide a technical proposal within 3-5 days and start right after agreement. The first working version is usually ready in 2-4 weeks." },
        { q: "How is the price set?", a: "An exact price comes after the technical analysis, since every task differs. The consultation is free, and you pay only after the MVP is delivered — risk is not on you." },
        { q: "Who owns the source code?", a: "100% you. The contract states: full code handover, GitHub on your account or ours — your call. No vendor lock-in." },
        { q: "Do you support after rollout?", a: "Yes. After deploy we provide technical support, updates and monitoring. We agree on support terms depending on project size." },
      ],
    },
    service: {
      name: "IT services — Tezcode, Tashkent",
      description:
        "IT services in Tashkent: software development, mobile apps, websites, AI and automation, integrations and technical support. AI Software Factory, 14 in-house developers.",
      serviceType: "IT services / software development",
    },
  },

  ar: {
    hero: {
      badge: "خدمات IT — طشقند",
      title1: "خدمات IT",
      titleAccent: "— طشقند",
      title2: "",
      subtitle:
        "تطوير البرمجيات، تطبيقات الويب والجوال، حلول الذكاء الاصطناعي، التكاملات والدعم الفني. Tezcode مصنع برمجيات بالذكاء الاصطناعي في طشقند، 14 مطوراً داخلياً.",
      trust: "استشارة 30 دقيقة مجانية • الدفع فقط بعد تسليم MVP",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "عرض الخدمات",
    },
    capabilities: {
      badge: "الخدمات",
      title: "أي خدمات IT",
      titleAccent: "نقدّم؟",
      subtitle: "خدمة تقنية كاملة من فريق واحد: من الفكرة إلى الإنتاج ثم الدعم.",
      items: [
        { icon: "💻", title: "تطوير البرمجيات", desc: "أنظمة ويب وخلفية حسب الطلب: ERP، CRM، تجارة إلكترونية، لوحة تحكم. من الصفر، مصممة لأعمالك." },
        { icon: "📱", title: "تطبيقات الجوال", desc: "تطبيقات لـ iOS وAndroid (React Native، PWA). مريحة وسريعة وعصرية لعملائك." },
        { icon: "🌐", title: "المواقع وصفحات الهبوط", desc: "مواقع وصفحات هبوط سريعة ومحسّنة لـ SEO. يجدها الناس في البحث وتجذب العملاء." },
        { icon: "🤖", title: "الذكاء الاصطناعي والأتمتة", desc: "شات بوت AI، تقارير تلقائية، أتمتة العمليات. مع Claude وأدوات الذكاء الاصطناعي الحديثة." },
        { icon: "🔗", title: "التكاملات وAPI", desc: "نربط Telegram وأنظمة الدفع و1C وCRM وخدمات أخرى. أنظمتك تعمل معاً." },
        { icon: "🛠️", title: "الدعم الفني", desc: "بعد التطبيق — دعم فني وتحديثات ومراقبة. نضمن استمرار عمل النظام." },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "4 خطوات إلى",
      titleAccent: "النتيجة",
      subtitle: "أول 30 دقيقة مجانية. ثم كل خطوة بسعر وموعد واضحين.",
      steps: [
        { num: "01", title: "استشارة مجانية", desc: "ندرس مهمتك: أي خدمة IT تحتاج، وأي نتيجة تنتظر. بلا التزام.", icon: "💬" },
        { num: "02", title: "تحليل تقني + عرض", desc: "وثيقة تقنية، سعر، موعد وفريق. عقد مكتوب.", icon: "📐" },
        { num: "03", title: "التطوير (MVP)", desc: "نسخة عاملة خلال 2-4 أسابيع. نعرض كل أسبوع، وأنت تعطي ملاحظات.", icon: "⚡" },
        { num: "04", title: "الإنتاج + الدعم", desc: "نشر ودعم فني. نضمن عمل النظام باستقرار.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "لماذا Tezcode",
      title: "شريك IT موثوق",
      titleAccent: "في طشقند",
      subtitle: "الفروق الرئيسية التي تميزنا.",
      items: [
        { tag: "01", title: "14 مطوراً داخلياً", desc: "في مكتبنا بطشقند. ليسوا مستقلين — فريق. Backend، frontend، جوال، AI، DevOps — كله لدينا." },
        { tag: "02", title: "أسرع مع AI", desc: "Claude وأدوات الذكاء الاصطناعي الحديثة أداتنا اليومية. شهر عمل في وقت أقصر دون فقدان الجودة." },
        { tag: "03", title: "الدفع فقط بعد تسليم MVP", desc: "المخاطرة ليست عليك. لا يبدأ الدفع حتى ترى نتيجة عاملة. هذا نموذج ثقتنا." },
        { tag: "04", title: "فريق محلي، تواصل مباشر", desc: "المؤسس بكزود ميرزااليف على Telegram. لا حاجز لغوي ولا فرق توقيت — نفهم بيئة عملك." },
      ],
    },
    cta: {
      badge: "وقت البدء",
      title: "لنناقش",
      titleAccent: "مهمتك التقنية",
      subtitle: "سنجد أفضل حل في استشارة مجانية مدتها 30 دقيقة. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع بكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أسئلة شائعة عن خدمات IT في طشقند.",
      items: [
        { q: "ما خدمات IT التي تقدّمها Tezcode؟", a: "تقدّم Tezcode دورة كاملة من خدمات IT: تطوير البرمجيات (ويب، خلفية)، تطبيقات الجوال، المواقع وصفحات الهبوط، الذكاء الاصطناعي والأتمتة، التكاملات/API والدعم الفني. كله من فريق واحد." },
        { q: "هل أنتم في طشقند؟", a: "نعم. Tezcode مصنع برمجيات بالذكاء الاصطناعي في طشقند، فريق من 14 مطوراً داخلياً. المؤسس بكزود ميرزااليف. كوننا فريقاً محلياً يعني لا حاجز لغوي ولا فرق توقيت." },
        { q: "كم تبدؤون بسرعة؟", a: "بعد الاستشارة نقدّم عرضاً تقنياً خلال 3-5 أيام ونبدأ فور الاتفاق. عادة تكون أول نسخة عاملة جاهزة خلال 2-4 أسابيع." },
        { q: "كيف يُحدد السعر؟", a: "يُعطى السعر الدقيق بعد التحليل التقني، لأن كل مهمة تختلف. الاستشارة مجانية، والدفع يبدأ بعد تسليم MVP فقط — المخاطرة ليست عليك." },
        { q: "لمن الكود المصدري؟", a: "100% لك. ينص العقد: تسليم كامل للكود، GitHub على حسابك أو حسابنا — أنت تقرر. لا vendor lock-in." },
        { q: "هل تدعمون بعد التطبيق؟", a: "نعم. بعد النشر نقدّم دعماً فنياً وتحديثات ومراقبة. نتفق على شروط الدعم حسب حجم المشروع." },
      ],
    },
    service: {
      name: "خدمات IT — Tezcode، طشقند",
      description:
        "خدمات IT في طشقند: تطوير البرمجيات، تطبيقات الجوال، المواقع، الذكاء الاصطناعي والأتمتة، التكاملات والدعم الفني. مصنع برمجيات بالذكاء الاصطناعي، 14 مطوراً داخلياً.",
      serviceType: "خدمات IT / تطوير البرمجيات",
    },
  },

  uk: {
    hero: {
      badge: "IT послуги — Ташкент",
      title1: "IT послуги",
      titleAccent: "— Ташкент",
      title2: "",
      subtitle:
        "Розробка ПЗ, веб і мобільні застосунки, AI-рішення, інтеграції та технічна підтримка. Tezcode — AI Software Factory у Ташкенті, 14 in-house розробників.",
      trust: "Безкоштовна 30-хв консультація • Оплата лише після готового MVP",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Дивитись послуги",
    },
    capabilities: {
      badge: "Послуги",
      title: "Які IT-послуги",
      titleAccent: "ми надаємо?",
      subtitle: "Повний технічний сервіс від однієї команди: від ідеї до production і далі — підтримка.",
      items: [
        { icon: "💻", title: "Розробка ПЗ", desc: "Замовні web і backend системи: ERP, CRM, e-commerce, панель керування. З нуля, під ваш бізнес." },
        { icon: "📱", title: "Мобільні застосунки", desc: "Застосунки для iOS і Android (React Native, PWA). Зручні, швидкі та сучасні для ваших клієнтів." },
        { icon: "🌐", title: "Сайти та лендінги", desc: "Швидкі, оптимізовані під SEO сайти та лендінги. Їх знаходять у пошуку, вони залучають клієнтів." },
        { icon: "🤖", title: "AI та автоматизація", desc: "AI-чатбот, автоматичні звіти, автоматизація процесів. З Claude і сучасними AI-інструментами." },
        { icon: "🔗", title: "Інтеграції та API", desc: "Поєднуємо Telegram, платіжні системи, 1C, CRM та інші сервіси. Ваші системи працюють разом." },
        { icon: "🛠️", title: "Підтримка (support)", desc: "Після впровадження — технічна підтримка, оновлення та моніторинг. Гарантуємо працездатність системи." },
      ],
    },
    process: {
      badge: "Як ми працюємо",
      title: "4 кроки до",
      titleAccent: "результату",
      subtitle: "Перші 30 хвилин безкоштовно. Далі кожен крок з точною ціною та терміном.",
      steps: [
        { num: "01", title: "Безкоштовна консультація", desc: "Вивчаємо ваше завдання: яка IT-послуга потрібна, якого результату чекаєте. Без зобов'язань.", icon: "💬" },
        { num: "02", title: "Технічний аналіз + пропозиція", desc: "Технічний документ, ціна, термін і склад команди. Письмовий контракт.", icon: "📐" },
        { num: "03", title: "Розробка (MVP)", desc: "Робоча версія за 2-4 тижні. Показуємо щотижня, ви даєте відгук.", icon: "⚡" },
        { num: "04", title: "Production + підтримка", desc: "Деплой і технічна підтримка. Забезпечуємо стабільну роботу системи.", icon: "🚀" },
      ],
    },
    examples: {
      badge: "Чому Tezcode",
      title: "Надійний IT-партнер",
      titleAccent: "у Ташкенті",
      subtitle: "Головні відмінності, що вирізняють нас.",
      items: [
        { tag: "01", title: "14 in-house розробників", desc: "В офісі у Ташкенті. Не фрілансери — команда. Backend, frontend, mobile, AI, DevOps — все у нас." },
        { tag: "02", title: "Швидше з AI", desc: "Claude і сучасні AI-інструменти — наш щоденний робочий інструмент. Місяць роботи за коротший час без втрати якості." },
        { tag: "03", title: "Оплата лише після готового MVP", desc: "Ризик не на вашому боці. Поки не побачите робочий результат — оплата не починається. Це наша модель довіри." },
        { tag: "04", title: "Локальна команда, прямий зв'язок", desc: "Засновник Бекзод Мірзаалієв у Telegram. Немає мовного бар'єру та різниці таймзон — розуміємо ваше бізнес-середовище." },
      ],
    },
    cta: {
      badge: "Час починати",
      title: "Обговоримо",
      titleAccent: "ваше IT-завдання",
      subtitle: "На безкоштовній 30-хвилинній консультації знайдемо найкраще рішення. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "Часті запитання про IT-послуги в Ташкенті.",
      items: [
        { q: "Які IT-послуги надає Tezcode?", a: "Tezcode надає повний цикл IT-послуг: розробка ПЗ (web, backend), мобільні застосунки, сайти та лендінги, AI та автоматизація, інтеграції/API і технічна підтримка. Усе від однієї команди." },
        { q: "Ви розташовані в Ташкенті?", a: "Так. Tezcode — це AI Software Factory у Ташкенті, команда з 14 in-house розробників. Засновник — Бекзод Мірзаалієв. Локальна команда, тому немає мовного бар'єру та різниці таймзон." },
        { q: "Як швидко ви починаєте?", a: "Після консультації ми даємо технічну пропозицію за 3-5 днів і починаємо одразу після узгодження. Перша робоча версія зазвичай готова за 2-4 тижні." },
        { q: "Як визначається ціна?", a: "Точна ціна дається після технічного аналізу, адже кожне завдання різне. Консультація безкоштовна, оплата починається лише після готового MVP — ризик не на вашому боці." },
        { q: "Кому належить вихідний код?", a: "100% вам. У контракті вказано: повна передача коду, GitHub на вашому або нашому акаунті — ви вирішуєте. Без vendor lock-in." },
        { q: "Чи підтримуєте після впровадження?", a: "Так. Після деплою надаємо технічну підтримку, оновлення та моніторинг. Умови підтримки узгоджуємо залежно від розміру проекту." },
      ],
    },
    service: {
      name: "IT послуги — Tezcode, Ташкент",
      description:
        "IT послуги в Ташкенті: розробка ПЗ, мобільні застосунки, сайти, AI та автоматизація, інтеграції та технічна підтримка. AI Software Factory, 14 in-house розробників.",
      serviceType: "IT послуги / розробка програмного забезпечення",
    },
  },
};
