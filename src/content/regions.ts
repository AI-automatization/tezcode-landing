import type { Locale } from "@/i18n/routing";

type Faq = { q: string; a: string };
type RegionPageCopy = {
  title: string;
  description: string;
  badge: string;
  heading: string;
  highlight: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  faqTitle: string;
  faq: Faq[];
};

type RegionUiCopy = {
  servicesTitle: string;
  servicesIntro: string;
  servicesOutro: string;
  servicesCta: string;
  services: { title: string; body: string; link: string }[];
  deliveryTitle: string;
  deliverySteps: { title: string; body: string }[];
  regionsTitle: string;
  regionsIntro: string;
  centralAsiaName: string;
  centralAsiaDescription: string;
  europeName: string;
  europeDescription: string;
  regionLink: string;
  countries: string[];
};

const SERVICE_PATHS = [
  "/tezcode-custom", "/ai-agent", "/ai-chatbot", "/telegram-bot-biznes",
  "/ai-avtomatizatsiya", "/crm-integratsiya", "/ai-video-analitika", "/pos-tizimi",
] as const;

export const REGION_UI: Record<Locale, RegionUiCopy> = {
  uz: {
    servicesTitle: "Tezcode nimalarni yaratadi",
    servicesIntro: "Markaziy Osiyo va Yevropadagi kompaniyalar bilan masofadan ishlaymiz. Alohida xizmat yoki bir nechta yo'nalishni birlashtirgan loyiha buyurtma qilish mumkin.",
    servicesOutro: "Boshqa xizmat kerakmi yoki qaysi yechim mosligini bilmayapsizmi?",
    servicesCta: "Vazifangizni o'z so'zingiz bilan yozing.",
    services: [
      { title: "Sayt va veb-tizimlar", body: "Korporativ sayt, internet-do'kon, shaxsiy kabinet, SaaS yoki ichki tizim.", link: "Veb-ishlab chiqish" },
      { title: "AI agentlar", body: "Ma'lumot topadigan, kelishilgan amallarni bajaradigan va murakkab holatni xodimga uzatadigan yordamchilar.", link: "AI agent yaratish" },
      { title: "AI chatbotlar", body: "Mijoz savollariga javob, murojaatlarni saralash va suhbatni CRM yoki operatorga uzatish.", link: "AI chatbotlar" },
      { title: "Telegram botlar", body: "Murojaat, qo'llab-quvvatlash va ichki jarayonlar uchun botlar; CRM va boshqa tizimlarga ulash.", link: "Biznes uchun botlar" },
      { title: "AI avtomatlashtirish", body: "Takroriy qo'l ishlarini qisqartirish va AI'ni xodim nazoratidagi ish jarayonlariga ulash.", link: "AI avtomatlashtirish" },
      { title: "CRM va integratsiyalar", body: "Murojaat, savdo, hisob va hisobotlarni CRM, 1C, messenjerlar va boshqa tizimlar bilan bog'lash.", link: "CRM va integratsiyalar" },
      { title: "AI video tahlil", body: "Kuzatuv, sanash va voqealarni aniqlash kabi kelishilgan vazifalar uchun video tahlil.", link: "AI video tahlil" },
      { title: "POS va sohaviy yechimlar", body: "Savdo, hisob va boshqaruv jarayonlari uchun tizimlar va raqamli mahsulotlar.", link: "POS tizimlari" },
    ],
    deliveryTitle: "Ish qanday tashkil qilinadi",
    deliverySteps: [
      { title: "Vazifani muhokama qilish", body: "Maqsad, joriy vositalar va kutilgan natijani aniqlab, mas'ullarni belgilaymiz." },
      { title: "Tekshiruv va taklif", body: "Muhim integratsiyalarni tekshirib, ish hajmi, muddat, to'lov va qabul mezonlarini kelishamiz." },
      { title: "Bosqichma-bosqich ishlab chiqish", body: "Ishlaydigan versiyalarni ko'rsatib, fikr-mulohazaga qarab yaxshilaymiz. AI javoblari va xodimga uzatishni sinaymiz." },
      { title: "Ishga tushirish va ko'mak", body: "Mahsulotni sizning muhitingizda tekshirib, yo'riqnoma va keyingi ko'makni kelishamiz." },
    ],
    regionsTitle: "Qaysi hududlarda ishlaymiz",
    regionsIntro: "Jamoa Toshkentda. Uchrashuv, namoyish va ishlab chiqish onlayn o'tadi; aloqa tili, vaqt va to'lov shartlarini loyiha oldidan kelishamiz.",
    centralAsiaName: "Markaziy Osiyo",
    centralAsiaDescription: "O'zbekiston, Qozog'iston, Qirg'iziston, Tojikiston va Turkmaniston.",
    europeName: "Yevropa",
    europeDescription: "Yevropadagi kompaniyalar uchun masofaviy dasturiy ta'minot va AI yechimlari.",
    regionLink: "Hudud xizmatlari",
    countries: ["O'zbekiston", "Qozog'iston", "Qirg'iziston", "Tojikiston", "Turkmaniston"],
  },
  ru: {
    servicesTitle: "Что создаёт Tezcode",
    servicesIntro: "Удалённо работаем с компаниями Центральной Азии и Европы. Можно заказать отдельную услугу или объединить несколько направлений в одном проекте.",
    servicesOutro: "Нужна другая услуга или не знаете, какое решение подойдёт?",
    servicesCta: "Опишите задачу своими словами.",
    services: [
      { title: "Сайты и веб-системы", body: "Корпоративные сайты, магазины, личные кабинеты, SaaS и внутренние системы.", link: "Веб-разработка" },
      { title: "ИИ-агенты", body: "Помощники, которые находят данные, выполняют согласованные действия и передают сложные случаи сотруднику.", link: "Создание ИИ-агентов" },
      { title: "ИИ-чат-боты", body: "Ответы клиентам, квалификация обращений и передача диалога в CRM или оператору.", link: "ИИ-чат-боты" },
      { title: "Telegram-боты", body: "Боты для заявок, поддержки и внутренних процессов с подключением к CRM и другим системам.", link: "Боты для бизнеса" },
      { title: "ИИ-автоматизация", body: "Сокращаем повторяющуюся ручную работу и подключаем ИИ к процессам под контролем сотрудников.", link: "ИИ-автоматизация" },
      { title: "CRM и интеграции", body: "Связываем обращения, продажи, учёт и отчёты с CRM, 1C, мессенджерами и другими системами.", link: "CRM и интеграции" },
      { title: "ИИ-видеоаналитика", body: "Видеоаналитика для согласованных задач: наблюдения, подсчёта и выявления событий.", link: "ИИ-видеоаналитика" },
      { title: "POS и отраслевые решения", body: "Системы продаж, учёта и управления для торговли и других отраслей.", link: "POS-системы" },
    ],
    deliveryTitle: "Как организуем работу",
    deliverySteps: [
      { title: "Обсуждение задачи", body: "Разбираем цель, текущие инструменты и ожидаемый результат, назначаем ответственных." },
      { title: "Проверка и предложение", body: "Проверяем ключевые интеграции и согласуем объём, сроки, оплату и критерии приёмки." },
      { title: "Разработка по этапам", body: "Показываем рабочие версии и учитываем обратную связь. Для ИИ проверяем ответы и передачу сложных вопросов человеку." },
      { title: "Запуск и поддержка", body: "Проверяем продукт в вашей среде, передаём инструкции и согласуем дальнейшее сопровождение." },
    ],
    regionsTitle: "Где мы работаем",
    regionsIntro: "Команда находится в Ташкенте. Встречи, демонстрации и разработку проводим онлайн; язык связи, график и оплату согласуем до старта.",
    centralAsiaName: "Центральная Азия",
    centralAsiaDescription: "Узбекистан, Казахстан, Кыргызстан, Таджикистан и Туркменистан.",
    europeName: "Европа",
    europeDescription: "Удалённая разработка программных продуктов и ИИ-решений для компаний Европы.",
    regionLink: "Услуги для региона",
    countries: ["Узбекистан", "Казахстан", "Кыргызстан", "Таджикистан", "Туркменистан"],
  },
  en: {
    servicesTitle: "What Tezcode builds",
    servicesIntro: "We work remotely with companies across Central Asia and Europe. Engage us for one service or combine several disciplines in one project.",
    servicesOutro: "Need something else or unsure which solution fits?",
    servicesCta: "Describe the challenge in your own words.",
    services: [
      { title: "Websites and web systems", body: "Corporate websites, online stores, client portals, SaaS products, and internal systems.", link: "Web development" },
      { title: "AI agents", body: "Assistants that find information, take agreed actions, and hand complex cases to your team.", link: "Build AI agents" },
      { title: "AI chatbots", body: "Customer answers, enquiry qualification, and handoff to your CRM or a human operator.", link: "AI chatbots" },
      { title: "Telegram bots", body: "Bots for enquiries, support, and internal workflows, connected to your CRM and other systems.", link: "Business bots" },
      { title: "AI automation", body: "Reduce repetitive manual work and connect AI to workflows with human oversight.", link: "AI automation" },
      { title: "CRM and integrations", body: "Connect enquiries, sales, accounting, and reporting with CRM, 1C, messaging, and other tools.", link: "CRM and integrations" },
      { title: "AI video analytics", body: "Video analysis for agreed monitoring, counting, and event detection use cases.", link: "AI video analytics" },
      { title: "POS and industry systems", body: "Sales, accounting, and operations systems for retail and other industries.", link: "POS systems" },
    ],
    deliveryTitle: "How we work",
    deliverySteps: [
      { title: "Discuss the goal", body: "Review your goal, current tools, and expected outcome, then assign contacts on both sides." },
      { title: "Check and propose", body: "Review key integrations and agree on scope, timeline, payment, and acceptance criteria." },
      { title: "Build in stages", body: "Share working versions and incorporate feedback. For AI, test responses and human handoff." },
      { title: "Launch and support", body: "Test the product in your environment, provide instructions, and agree on ongoing support." },
    ],
    regionsTitle: "Where we work",
    regionsIntro: "Our team is based in Tashkent. We meet, demo, and build online; communication language, schedule, and payment terms are agreed before work begins.",
    centralAsiaName: "Central Asia",
    centralAsiaDescription: "Uzbekistan, Kazakhstan, Kyrgyzstan, Tajikistan, and Turkmenistan.",
    europeName: "Europe",
    europeDescription: "Remote software development and AI solutions for companies in Europe.",
    regionLink: "Services in this region",
    countries: ["Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan"],
  },
  ar: {
    servicesTitle: "ما الذي تطوره Tezcode",
    servicesIntro: "نعمل عن بُعد مع الشركات في آسيا الوسطى وأوروبا. يمكن طلب خدمة واحدة أو الجمع بين عدة مجالات في مشروع واحد.",
    servicesOutro: "هل تحتاج إلى خدمة أخرى أو لا تعرف الحل المناسب؟",
    servicesCta: "اشرح المهمة بكلماتك.",
    services: [
      { title: "المواقع وأنظمة الويب", body: "مواقع الشركات والمتاجر الإلكترونية وبوابات العملاء ومنتجات SaaS والأنظمة الداخلية.", link: "تطوير الويب" },
      { title: "وكلاء الذكاء الاصطناعي", body: "مساعدون يبحثون عن المعلومات وينفذون الإجراءات المتفق عليها ويحولون الحالات المعقدة إلى فريقك.", link: "إنشاء وكلاء الذكاء الاصطناعي" },
      { title: "روبوتات المحادثة الذكية", body: "الرد على العملاء وتأهيل الطلبات وتحويل المحادثة إلى CRM أو موظف مختص.", link: "روبوتات المحادثة" },
      { title: "روبوتات Telegram", body: "روبوتات للطلبات والدعم والعمليات الداخلية مع ربطها بـ CRM والأنظمة الأخرى.", link: "روبوتات الأعمال" },
      { title: "أتمتة بالذكاء الاصطناعي", body: "تقليل الأعمال اليدوية المتكررة وربط الذكاء الاصطناعي بسير العمل مع إشراف الموظفين.", link: "أتمتة الذكاء الاصطناعي" },
      { title: "CRM والتكاملات", body: "ربط الطلبات والمبيعات والمحاسبة والتقارير مع CRM و1C والرسائل والأنظمة الأخرى.", link: "CRM والتكاملات" },
      { title: "تحليل الفيديو بالذكاء الاصطناعي", body: "تحليل الفيديو لمهام المراقبة والعد واكتشاف الأحداث المتفق عليها.", link: "تحليل الفيديو" },
      { title: "أنظمة POS وحلول القطاعات", body: "أنظمة المبيعات والمحاسبة والإدارة للتجارة والقطاعات الأخرى.", link: "أنظمة POS" },
    ],
    deliveryTitle: "كيف ننظم العمل",
    deliverySteps: [
      { title: "مناقشة الهدف", body: "نراجع الهدف والأدوات الحالية والنتيجة المطلوبة ونحدد المسؤولين من الطرفين." },
      { title: "الفحص والعرض", body: "نفحص التكاملات المهمة ونتفق على النطاق والمدة والدفع ومعايير الاستلام." },
      { title: "التطوير على مراحل", body: "نعرض نسخاً عاملة ونأخذ ملاحظاتكم. ونختبر إجابات الذكاء الاصطناعي وتحويل الحالات إلى موظف." },
      { title: "الإطلاق والدعم", body: "نختبر المنتج في بيئتكم ونقدم التعليمات ونتفق على الدعم اللاحق." },
    ],
    regionsTitle: "مناطق العمل",
    regionsIntro: "يقع فريقنا في طشقند. نعقد الاجتماعات والعروض ونطور المنتجات عبر الإنترنت؛ ونتفق مسبقاً على لغة التواصل والمواعيد والدفع.",
    centralAsiaName: "آسيا الوسطى",
    centralAsiaDescription: "أوزبكستان وكازاخستان وقيرغيزستان وطاجيكستان وتركمانستان.",
    europeName: "أوروبا",
    europeDescription: "تطوير البرمجيات وحلول الذكاء الاصطناعي عن بُعد للشركات الأوروبية.",
    regionLink: "الخدمات في المنطقة",
    countries: ["أوزبكستان", "كازاخستان", "قيرغيزستان", "طاجيكستان", "تركمانستان"],
  },
  uk: {
    servicesTitle: "Що створює Tezcode",
    servicesIntro: "Працюємо віддалено з компаніями Центральної Азії та Європи. Можна замовити одну послугу або поєднати кілька напрямів в одному проєкті.",
    servicesOutro: "Потрібна інша послуга або не знаєте, яке рішення підійде?",
    servicesCta: "Опишіть завдання своїми словами.",
    services: [
      { title: "Сайти та вебсистеми", body: "Корпоративні сайти, інтернет-магазини, кабінети клієнтів, SaaS і внутрішні системи.", link: "Веброзробка" },
      { title: "AI-агенти", body: "Помічники, які знаходять дані, виконують погоджені дії та передають складні випадки команді.", link: "Створення AI-агентів" },
      { title: "AI-чатботи", body: "Відповіді клієнтам, кваліфікація звернень і передавання діалогу в CRM або оператору.", link: "AI-чатботи" },
      { title: "Telegram-боти", body: "Боти для звернень, підтримки й внутрішніх процесів із підключенням до CRM та інших систем.", link: "Боти для бізнесу" },
      { title: "AI-автоматизація", body: "Скорочуємо повторювану ручну роботу та підключаємо AI до процесів під контролем працівників.", link: "AI-автоматизація" },
      { title: "CRM та інтеграції", body: "Поєднуємо звернення, продажі, облік і звіти з CRM, 1C, месенджерами та іншими системами.", link: "CRM та інтеграції" },
      { title: "AI-відеоаналітика", body: "Відеоаналіз для погоджених завдань спостереження, підрахунку та виявлення подій.", link: "AI-відеоаналітика" },
      { title: "POS та галузеві рішення", body: "Системи продажів, обліку й керування для торгівлі та інших галузей.", link: "POS-системи" },
    ],
    deliveryTitle: "Як організовуємо роботу",
    deliverySteps: [
      { title: "Обговорення мети", body: "Розбираємо мету, поточні інструменти й очікуваний результат, визначаємо відповідальних." },
      { title: "Перевірка та пропозиція", body: "Перевіряємо ключові інтеграції й погоджуємо обсяг, строки, оплату та критерії приймання." },
      { title: "Розробка етапами", body: "Показуємо робочі версії та враховуємо відгуки. Для AI перевіряємо відповіді й передавання складних питань людині." },
      { title: "Запуск і підтримка", body: "Тестуємо продукт у вашому середовищі, передаємо інструкції та погоджуємо подальшу підтримку." },
    ],
    regionsTitle: "Де ми працюємо",
    regionsIntro: "Команда працює з Ташкента. Зустрічі, демонстрації та розробку проводимо онлайн; мову спілкування, графік і оплату погоджуємо до початку робіт.",
    centralAsiaName: "Центральна Азія",
    centralAsiaDescription: "Узбекистан, Казахстан, Киргизстан, Таджикистан і Туркменістан.",
    europeName: "Європа",
    europeDescription: "Віддалена розробка програмних продуктів та AI-рішень для компаній Європи.",
    regionLink: "Послуги в регіоні",
    countries: ["Узбекистан", "Казахстан", "Киргизстан", "Таджикистан", "Туркменістан"],
  },
};

const CENTRAL_ASIA_PAGES: Record<Locale, RegionPageCopy> = {
  uz: {
    title: "Markaziy Osiyo kompaniyalari uchun saytlar, ilovalar va AI yechimlar",
    description: "Tezcode Markaziy Osiyodagi kompaniyalar uchun sayt, ilova, maxsus dastur, AI agent, chatbot va integratsiyalarni masofadan ishlab chiqadi.",
    badge: "Tezcode · Markaziy Osiyo · masofaviy ish",
    heading: "Markaziy Osiyo bizneslari uchun",
    highlight: "raqamli mahsulotlar va AI",
    intro: "O'zbekiston, Qozog'iston, Qirg'iziston, Tojikiston va Turkmanistondagi kompaniyalar bilan onlayn ishlaymiz. Sayt va ilovadan tortib AI agent, chatbot va tizimlar integratsiyasigacha.",
    primaryCta: "Loyihani muhokama qilish",
    secondaryCta: "Yevropada ishlash",
    faqTitle: "Loyiha oldidan ko'p so'raladigan savollar",
    faq: [
      { q: "Markaziy Osiyoning qaysi davlatlarida ishlaysiz?", a: "O'zbekiston, Qozog'iston, Qirg'iziston, Tojikiston va Turkmanistondagi kompaniyalar bilan masofadan ishlaymiz. Jamoamiz Toshkentda." },
      { q: "Qanday xizmatlarni buyurtma qilish mumkin?", a: "Sayt va ilova, maxsus dastur, AI agent, AI chatbot, Telegram bot, AI avtomatlashtirish, CRM va integratsiya, POS yoki video tahlil. Alohida xizmat yoki to'liq loyiha bo'lishi mumkin." },
      { q: "Onlayn hamkorlik qanday bo'ladi?", a: "Vazifani muhokama qilish, ishchi ko'rinishlarni namoyish etish va qabul qilishni onlayn o'tkazamiz. Aloqa tili, uchrashuv vaqti, to'lov va bosqichlarni ish boshlanishidan oldin kelishamiz." },
      { q: "Mahalliy bank va hisob tizimlariga ulaysizmi?", a: "Har bir integratsiyani mijoz tizimi, rasmiy hujjatlar va kirish imkoniga qarab alohida tekshiramiz. Muayyan xizmat nomining sahifada borligi tayyor integratsiya degani emas." },
    ],
  },
  ru: {
    title: "Разработка сайтов, приложений и ИИ-решений для Центральной Азии",
    description: "Tezcode удалённо создаёт сайты, приложения, ПО, ИИ-агентов и чат-ботов, интеграции и системы автоматизации для компаний Центральной Азии.",
    badge: "Tezcode · Центральная Азия · удалённая работа",
    heading: "Цифровые продукты и ИИ",
    highlight: "для компаний Центральной Азии",
    intro: "Работаем онлайн с компаниями Узбекистана, Казахстана, Кыргызстана, Таджикистана и Туркменистана. Создаём сайты и приложения, ИИ-агентов, чат-боты и интеграции.",
    primaryCta: "Обсудить проект",
    secondaryCta: "Работа с Европой",
    faqTitle: "Вопросы перед началом проекта",
    faq: [
      { q: "С какими странами Центральной Азии работает Tezcode?", a: "Работаем удалённо с компаниями Узбекистана, Казахстана, Кыргызстана, Таджикистана и Туркменистана. Команда находится в Ташкенте." },
      { q: "Какие услуги можно заказать?", a: "Сайт или приложение, заказное ПО, ИИ-агент, чат-бот, Telegram-бот, ИИ-автоматизацию, CRM и интеграции, POS или видеоаналитику. Можно заказать отдельную услугу или комплексный проект." },
      { q: "Как проходит удалённая работа?", a: "Обсуждения, демонстрации рабочих версий и приёмку проводим онлайн. До старта согласуем язык общения, график встреч, оплату и этапы." },
      { q: "Вы подключаете местные банки и системы учёта?", a: "Каждую интеграцию проверяем с учётом системы клиента, официальной документации и доступов. Упоминание сервиса не означает, что готовое подключение уже существует." },
    ],
  },
  en: {
    title: "Web, app, and AI development for companies in Central Asia",
    description: "Tezcode remotely builds websites, apps, custom software, AI agents and chatbots, integrations, and automation for Central Asian companies.",
    badge: "Tezcode · Central Asia · remote delivery",
    heading: "Digital products and AI",
    highlight: "for Central Asian companies",
    intro: "We work online with companies in Uzbekistan, Kazakhstan, Kyrgyzstan, Tajikistan, and Turkmenistan. Our services range from websites and apps to AI agents, chatbots, and integrations.",
    primaryCta: "Discuss a project",
    secondaryCta: "Work in Europe",
    faqTitle: "Questions before starting",
    faq: [
      { q: "Which Central Asian countries do you serve?", a: "We work remotely with companies in Uzbekistan, Kazakhstan, Kyrgyzstan, Tajikistan, and Turkmenistan. Our team is based in Tashkent." },
      { q: "What can we hire Tezcode to build?", a: "Websites, apps, custom software, AI agents and chatbots, Telegram bots, AI automation, CRM integrations, POS systems, or video analytics. Projects can cover one service or several." },
      { q: "How does remote collaboration work?", a: "We discuss requirements, demo working versions, and review acceptance online. Before work begins, we agree on communication language, meeting times, payment, and milestones." },
      { q: "Can you integrate local banks or accounting tools?", a: "We assess each integration against your system, official documentation, and available access. A service mentioned on this page does not imply a ready-made integration." },
    ],
  },
  ar: {
    title: "تطوير المواقع والتطبيقات وحلول الذكاء الاصطناعي لآسيا الوسطى",
    description: "تطور Tezcode عن بُعد المواقع والتطبيقات والبرمجيات المخصصة ووكلاء الذكاء الاصطناعي وروبوتات المحادثة والتكاملات للشركات في آسيا الوسطى.",
    badge: "Tezcode · آسيا الوسطى · تنفيذ عن بُعد",
    heading: "منتجات رقمية وحلول ذكاء اصطناعي",
    highlight: "لشركات آسيا الوسطى",
    intro: "نعمل عبر الإنترنت مع شركات أوزبكستان وكازاخستان وقيرغيزستان وطاجيكستان وتركمانستان. تشمل خدماتنا المواقع والتطبيقات ووكلاء الذكاء الاصطناعي وروبوتات المحادثة والتكاملات.",
    primaryCta: "ناقش مشروعك",
    secondaryCta: "العمل في أوروبا",
    faqTitle: "أسئلة قبل بدء المشروع",
    faq: [
      { q: "ما دول آسيا الوسطى التي تعملون معها؟", a: "نعمل عن بُعد مع شركات أوزبكستان وكازاخستان وقيرغيزستان وطاجيكستان وتركمانستان. يقع فريقنا في طشقند." },
      { q: "ما الخدمات التي يمكن طلبها؟", a: "المواقع والتطبيقات والبرمجيات المخصصة ووكلاء الذكاء الاصطناعي وروبوتات المحادثة وTelegram والأتمتة والتكاملات وأنظمة POS وتحليل الفيديو." },
      { q: "كيف يتم التعاون عن بُعد؟", a: "نعقد المناقشات والعروض ومراجعة التسليم عبر الإنترنت. ونتفق مسبقاً على لغة التواصل ومواعيد الاجتماعات والدفع ومراحل العمل." },
      { q: "هل تربطون الأنظمة بالبنوك المحلية؟", a: "نفحص كل تكامل وفق نظام العميل والوثائق الرسمية والصلاحيات المتاحة. ذكر خدمة هنا لا يعني وجود تكامل جاهز مسبقاً." },
    ],
  },
  uk: {
    title: "Розробка сайтів, застосунків та AI-рішень для Центральної Азії",
    description: "Tezcode віддалено створює сайти, застосунки, програмне забезпечення, AI-агентів і чатботів, інтеграції та автоматизацію для компаній Центральної Азії.",
    badge: "Tezcode · Центральна Азія · віддалена робота",
    heading: "Цифрові продукти та AI",
    highlight: "для компаній Центральної Азії",
    intro: "Працюємо онлайн із компаніями Узбекистану, Казахстану, Киргизстану, Таджикистану й Туркменістану. Створюємо сайти та застосунки, AI-агентів, чатботи й інтеграції.",
    primaryCta: "Обговорити проєкт",
    secondaryCta: "Робота в Європі",
    faqTitle: "Запитання перед початком проєкту",
    faq: [
      { q: "З якими країнами Центральної Азії працює Tezcode?", a: "Віддалено працюємо з компаніями Узбекистану, Казахстану, Киргизстану, Таджикистану й Туркменістану. Команда базується в Ташкенті." },
      { q: "Які послуги можна замовити?", a: "Сайт або застосунок, програмне забезпечення, AI-агента, чатбота, Telegram-бота, автоматизацію, CRM та інтеграції, POS або відеоаналітику." },
      { q: "Як проходить віддалена співпраця?", a: "Обговорення, демонстрації робочих версій і приймання проводимо онлайн. До початку погоджуємо мову спілкування, час зустрічей, оплату й етапи." },
      { q: "Чи підключаєте місцеві банки та облікові системи?", a: "Перевіряємо кожну інтеграцію з огляду на систему клієнта, офіційну документацію та доступи. Згадка сервісу не означає наявність готового підключення." },
    ],
  },
};

const EUROPE_PAGES: Record<Locale, RegionPageCopy> = {
  uz: {
    title: "Yevropa kompaniyalari uchun sayt, ilova va AI ishlab chiqish",
    description: "Tezcode Yevropadagi kompaniyalar bilan onlayn ishlaydi: sayt, ilova, maxsus dastur, AI agent, chatbot va integratsiyalarni ishlab chiqadi.",
    badge: "Tezcode · Yevropa · masofaviy ish",
    heading: "Yevropa kompaniyalari uchun",
    highlight: "raqamli mahsulotlar va AI",
    intro: "Tezcode xizmatlarining asosiy yo'nalishlarida Yevropadagi kompaniyalar bilan onlayn ishlaymiz: sayt va ilovalar, AI agent va chatbotlar, Telegram botlar, integratsiya va avtomatlashtirish.",
    primaryCta: "Loyihani muhokama qilish",
    secondaryCta: "Markaziy Osiyoda ishlash",
    faqTitle: "Onlayn hamkorlik haqida",
    faq: [
      { q: "Loyihani to'liq onlayn olib borish mumkinmi?", a: "Ha. Talablarni muhokama qilish, ishchi versiya namoyishi va qabul qilishni onlayn o'tkazamiz. Uchrashuv va aloqa tartibini oldindan kelishamiz." },
      { q: "Yevropa kompaniyalari qaysi xizmatlarga buyurtma berishi mumkin?", a: "Sayt, ilova, maxsus dastur, AI agent, chatbot, Telegram bot, AI avtomatlashtirish, CRM integratsiyasi, POS yoki video tahlil." },
      { q: "Til, muddat va to'lov qanday kelishiladi?", a: "Ish boshlanishidan oldin aloqa va mahsulot tilini, vaqt mintaqasini, ish hajmini, muddat va to'lov shartlarini kelishamiz." },
      { q: "Qaysi yechim kerakligini oldindan bilish shartmi?", a: "Yo'q. Muammo yoki maqsadni ayting. Mavjud tizimni kengaytirish, integratsiya, avtomatlashtirish yoki yangi mahsulot kerakligini birga aniqlaymiz." },
    ],
  },
  ru: {
    title: "Удалённая разработка сайтов, приложений и ИИ-решений для Европы",
    description: "Tezcode удалённо создаёт сайты, приложения, ПО, ИИ-агентов и чат-ботов, интеграции и автоматизацию для компаний Европы.",
    badge: "Tezcode · Европа · удалённая работа",
    heading: "Цифровые продукты и ИИ",
    highlight: "для компаний Европы",
    intro: "Работаем онлайн с компаниями Европы по основным направлениям Tezcode: создаём сайты, приложения и ПО, ИИ-агентов и чат-ботов, Telegram-боты, интеграции и автоматизацию.",
    primaryCta: "Обсудить проект",
    secondaryCta: "Работа в Центральной Азии",
    faqTitle: "Вопросы об удалённой работе",
    faq: [
      { q: "Можно ли вести проект полностью онлайн?", a: "Да. Обсуждения, демонстрации рабочих версий и приёмку проводим онлайн. График встреч и каналы связи согласуем заранее." },
      { q: "Какие услуги доступны компаниям из Европы?", a: "Сайт, приложение, заказное ПО, ИИ-агент, чат-бот, Telegram-бот, ИИ-автоматизация, CRM-интеграции, POS или видеоаналитика." },
      { q: "Как согласуются язык, сроки и оплата?", a: "До старта согласуем язык общения и продукта, часовой пояс, объём работ, сроки и оплату. Детали зафиксируем в предложении." },
      { q: "Нужно ли заранее знать, какое решение требуется?", a: "Нет. Опишите задачу, и мы поможем определить, подойдёт ли существующая система, интеграция, автоматизация или новый продукт." },
    ],
  },
  en: {
    title: "Remote website, app, and AI development for European companies",
    description: "Tezcode works online with European companies to build websites, apps, custom software, AI agents and chatbots, integrations, and automation.",
    badge: "Tezcode · Europe · remote delivery",
    heading: "Digital products and AI",
    highlight: "for European companies",
    intro: "We work online with companies across Europe on Tezcode's core services: websites, apps and software, AI agents and chatbots, Telegram bots, integrations, and automation.",
    primaryCta: "Discuss a project",
    secondaryCta: "Work in Central Asia",
    faqTitle: "Questions about remote work",
    faq: [
      { q: "Can the entire project run online?", a: "Yes. We discuss requirements, demo working versions, and review acceptance online. Meeting times and communication channels are agreed in advance." },
      { q: "What services can European companies request?", a: "Websites, apps, custom software, AI agents and chatbots, Telegram bots, AI automation, CRM integrations, POS systems, or video analytics." },
      { q: "How do you agree on language, timeline, and payment?", a: "Before work begins, we agree on communication and product languages, time zone, scope, timeline, and payment terms, then document them in the proposal." },
      { q: "Do we need to know the solution in advance?", a: "No. Describe the challenge, and we can assess whether to extend an existing system, integrate tools, automate a workflow, or build a new product." },
    ],
  },
  ar: {
    title: "تطوير المواقع والتطبيقات والذكاء الاصطناعي للشركات الأوروبية عن بُعد",
    description: "تعمل Tezcode عبر الإنترنت مع الشركات الأوروبية لتطوير المواقع والتطبيقات والبرمجيات ووكلاء الذكاء الاصطناعي وروبوتات المحادثة والتكاملات.",
    badge: "Tezcode · أوروبا · تنفيذ عن بُعد",
    heading: "منتجات رقمية وحلول ذكاء اصطناعي",
    highlight: "للشركات الأوروبية",
    intro: "نعمل عبر الإنترنت مع الشركات في أوروبا في مجالات Tezcode الأساسية: المواقع والتطبيقات والبرمجيات ووكلاء الذكاء الاصطناعي وروبوتات المحادثة وTelegram والتكاملات والأتمتة.",
    primaryCta: "ناقش مشروعك",
    secondaryCta: "العمل في آسيا الوسطى",
    faqTitle: "أسئلة حول العمل عن بُعد",
    faq: [
      { q: "هل يمكن تنفيذ المشروع بالكامل عبر الإنترنت؟", a: "نعم. نناقش المتطلبات ونعرض النسخ العاملة ونراجع التسليم عبر الإنترنت. ونتفق مسبقاً على مواعيد الاجتماعات وقنوات التواصل." },
      { q: "ما الخدمات المتاحة للشركات الأوروبية؟", a: "المواقع والتطبيقات والبرمجيات ووكلاء الذكاء الاصطناعي وروبوتات المحادثة وTelegram والأتمتة وتكامل CRM وأنظمة POS وتحليل الفيديو." },
      { q: "كيف نتفق على اللغة والمدة والدفع؟", a: "قبل البدء نتفق على لغة التواصل والمنتج والمنطقة الزمنية ونطاق العمل والمدة وشروط الدفع، ثم نوثقها في العرض." },
      { q: "هل يجب تحديد الحل مسبقاً؟", a: "لا. اشرح التحدي وسنساعدك في تحديد ما إذا كان الأنسب تطوير نظام حالي أو ربط الأدوات أو أتمتة عملية أو إنشاء منتج جديد." },
    ],
  },
  uk: {
    title: "Віддалена розробка сайтів, застосунків та AI для компаній Європи",
    description: "Tezcode працює онлайн із компаніями Європи: розробляє сайти, застосунки, програмне забезпечення, AI-агентів і чатботи, інтеграції та автоматизацію.",
    badge: "Tezcode · Європа · віддалена робота",
    heading: "Цифрові продукти та AI",
    highlight: "для компаній Європи",
    intro: "Працюємо онлайн із компаніями Європи за основними напрямами Tezcode: створюємо сайти, застосунки й програмне забезпечення, AI-агентів і чатботи, Telegram-боти, інтеграції та автоматизацію.",
    primaryCta: "Обговорити проєкт",
    secondaryCta: "Робота в Центральній Азії",
    faqTitle: "Запитання про віддалену роботу",
    faq: [
      { q: "Чи можна вести весь проєкт онлайн?", a: "Так. Обговорення вимог, демонстрації робочих версій і приймання проводимо онлайн. Час зустрічей і канали зв'язку погоджуємо заздалегідь." },
      { q: "Які послуги доступні компаніям Європи?", a: "Сайти, застосунки, програмне забезпечення, AI-агенти й чатботи, Telegram-боти, автоматизація, CRM-інтеграції, POS або відеоаналітика." },
      { q: "Як погоджуються мова, строки й оплата?", a: "До початку погоджуємо мову спілкування та продукту, часовий пояс, обсяг, строки й оплату та фіксуємо це в пропозиції." },
      { q: "Чи потрібно заздалегідь знати потрібне рішення?", a: "Ні. Опишіть задачу, і ми визначимо, чи варто розширити наявну систему, інтегрувати інструменти, автоматизувати процес або створити новий продукт." },
    ],
  },
};

export function getRegionPageCopy(locale: Locale, region: "central-asia" | "europe"): RegionPageCopy {
  return (region === "central-asia" ? CENTRAL_ASIA_PAGES : EUROPE_PAGES)[locale];
}

export function getRegionUiCopy(locale: Locale): RegionUiCopy {
  return REGION_UI[locale];
}

export function getRegionServicePath(index: number): string {
  return SERVICE_PATHS[index] ?? SERVICE_PATHS[0];
}
