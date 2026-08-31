import type { ServicePageContent } from "@/components/service-page/types";

// Content for /tezcode-labs — Tezcode's internal venture studio / innovation lab.
// Only confirmed Tezcode facts (AI Software Factory, Tashkent, 2024, founder
// Bekzod Mirzaaliyev, ~14 in-house developers, IT Park resident). Internal
// ventures referenced: WeWatch, CoreMed/ClinicaGo/HamshiraGo, Ventra,
// MaxSavdo, AI-Trade, AI Office, RAOS. Model: investment + equity.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "TezCode Labs — venture studio",
      title1: "TezCode Labs —",
      titleAccent: "o'z mahsulotlarimizni",
      title2: "quramiz",
      subtitle:
        "TezCode Labs — Tezcode ichki innovatsiya laboratoriyasi va venture studiyasi. Biz faqat mijozlar uchun ishlab bermaymiz — o'z startaplarimizni tug'diramiz, sinovdan o'tkazamiz va miqyoslaymiz. WeWatch, CoreMed, Ventra va boshqalar shu yerda tug'ilgan.",
      trust: "Investitsiya + ulush modeli • Founder'lar bilan birga asos solamiz",
      ctaPrimary: "G'oyangizni muhokama qiling",
      ctaSecondary: "Mahsulotlarni ko'rish",
    },
    capabilities: {
      badge: "Lab nima qiladi",
      title: "TezCode Labs",
      titleAccent: "qanday ishlaydi?",
      subtitle:
        "G'oyani ishlovchi biznesga aylantiramiz: validatsiya, prototip, MVP, bozorga chiqish va miqyoslash — bitta jamoadan.",
      items: [
        { icon: "search", title: "G'oya validatsiyasi", desc: "Bozor, muammo va talabni tekshiramiz. Pul va vaqt sarflashdan oldin g'oya ishlashini isbotlaymiz." },
        { icon: "zap", title: "Tez prototiplash", desc: "Kunlar ichida ishlovchi prototip. Foydalanuvchilar bilan sinab, faraz to'g'rimi yoki yo'qmi darrov ko'ramiz." },
        { icon: "rocket", title: "MVP ishlab chiqish", desc: "Real foydalanuvchilar uchun to'liq ishlovchi birinchi versiya. AI bilan tezlashtirilgan development." },
        { icon: "trending-up", title: "Bozorga chiqish (go-to-market)", desc: "Launch strategiyasi, birinchi foydalanuvchilar, o'sish kanallari va metrikalar. Faqat kod emas — traksiya." },
        { icon: "users", title: "Birgalikda asos solish (co-founding)", desc: "G'oyangiz bor, texnik jamoa yo'qmi? Biz co-founder sifatida kiramiz — jamoa, texnologiya va tajriba beramiz." },
        { icon: "banknote", title: "Investitsiya + ulush", desc: "Biz naqd emas, resurs va ekspertiza bilan investitsiya qilamiz. Muvaffaqiyatga ulush orqali bog'lanamiz." },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "G'oyadan",
      titleAccent: "miqyosgacha",
      subtitle: "Har bosqichda aniq to'xtash nuqtasi bor — ishlamasa, oldinga o'tmaymiz.",
      steps: [
        { num: "01", title: "G'oya va validatsiya", desc: "Muammoni, bozorni va foydalanuvchini o'rganamiz. Ishlashga arziydimi — birgalikda hal qilamiz.", icon: "search" },
        { num: "02", title: "Prototip", desc: "Tez ishlovchi prototip yasaymiz va real odamlarda sinaymiz. Faraz tasdiqlansa — davom etamiz.", icon: "zap" },
        { num: "03", title: "MVP", desc: "Birinchi ishlovchi mahsulot bozorga. AI-tezlashtirilgan development bilan qisqa muddatda.", icon: "rocket" },
        { num: "04", title: "Launch va miqyoslash", desc: "Bozorga chiqish, o'sish va miqyoslash. Metrikalar asosida keyingi qadamlarni belgilaymiz.", icon: "trending-up" },
      ],
    },
    examples: {
      badge: "Bizning mahsulotlar",
      title: "O'z ichimizda tug'ilgan",
      titleAccent: "startaplar",
      subtitle: "Nega ichki lab muhim: o'z mahsulotimizni o'zimiz ishlatamiz, tekshiramiz va isbotlangan playbook'ni mijozlarga olib kelamiz.",
      items: [
        { tag: "WeWatch", title: "Social media / birga tomosha", desc: "Do'stlar bilan real vaqtda birga video ko'rish ijtimoiy platformasi. Bizning consumer-product tajribamiz." },
        { tag: "CoreMed", title: "Healthtech ekotizim", desc: "CoreMed, ClinicaGo va HamshiraGo — klinikalar, shifokorlar va hamshiralar uchun raqamli tizim." },
        { tag: "Ventra", title: "Analitika platformasi", desc: "Marketplace savdo analitikasi. Data-heavy SaaS qurish bo'yicha ichki ekspertizamiz." },
        { tag: "AI-Trade / MaxSavdo", title: "AI va commerce", desc: "AI-Trade va MaxSavdo — savdo va commerce yo'nalishidagi eksperimental mahsulotlarimiz. Dogfooding orqali isbotlangan." },
      ],
    },
    cta: {
      badge: "Birga qurish vaqti",
      title: "G'oyangiz bormi?",
      titleAccent: "Birga asos solaylik",
      subtitle: "Startap g'oyangizni muhokama qilaylik — validatsiyadan co-founding'gacha. Investitsiya + ulush modelida hamkor bo'lamiz.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Founder Bekzod Mirzaaliyev bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "TezCode Labs va co-founding modeli haqida ko'p so'raladigan savollar.",
      items: [
        { q: "TezCode Labs nima?", a: "TezCode Labs — Tezcode ichki venture studiyasi va innovatsiya laboratoriyasi. Bu yerda o'z startaplarimiz va eksperimental mahsulotlarimiz tug'iladi, sinovdan o'tadi va miqyoslanadi. WeWatch, CoreMed, Ventra va boshqalar shu labda yaratilgan." },
        { q: "Men o'z g'oyamni olib kelib, birga asos sola olamanmi?", a: "Ha. Agar sizda g'oya bo'lsa-yu, kuchli texnik jamoa yetishmayotgan bo'lsa, biz co-founder sifatida kirishimiz mumkin. Jamoa, texnologiya, mahsulot tajribasi va bozorga chiqish ekspertizasini beramiz." },
        { q: "Model qanday — investitsiya va ulush qanday ishlaydi?", a: "Biz asosan naqd pul emas, resurs va ekspertiza bilan investitsiya qilamiz: dasturchilar, dizayn, mahsulot va go-to-market. Buning evaziga startapda ulush olamiz — ya'ni sizning muvaffaqiyatingizga bevosita bog'lanamiz." },
        { q: "Qaysi bosqichda qo'shilasiz?", a: "Turli bosqichlarda: sof g'oyadan validatsiyaga, prototipdan MVP'ga yoki mavjud mahsulotni miqyoslashga. Bosqichni birgalikda baholaymiz va keyin hamkorlik shaklini kelishamiz." },
        { q: "Bu odatiy buyurtma (custom) ishlab chiqishdan nimasi bilan farq qiladi?", a: "Custom'da siz to'laysiz, biz mijoz sifatida ishlab beramiz va kod sizniki. Labs'da esa biz hamkor bo'lamiz: birga risk ko'taramiz, resurs va investitsiya qo'shamiz va startap ulushi orqali natijaga bog'lanamiz." },
        { q: "Nega ichki lab muhim?", a: "Chunki o'z mahsulotlarimizni o'zimiz quramiz va ishlatamiz (dogfooding). Bu bizga isbotlangan playbook, real product tajriba va AI bilan tezlashtirilgan development beradi — buni founder'larga ham olib kelamiz." },
      ],
    },
    related: {
      badge: "Batafsil",
      title: "Yana",
      titleAccent: "foydali sahifalar",
      subtitle: "TezCode Labs bilan bog'liq boshqa yo'nalishlar.",
      links: [
        { href: "/case-studies", label: "Case studies", desc: "Bizning loyihalarimiz va real natijalar." },
        { href: "/for-businesses", label: "Bizneslar uchun", desc: "Mijozlar uchun to'liq tsikl mahsulot ishlab chiqish." },
        { href: "/ai-agent", label: "AI agentlar", desc: "AI bilan tezlashtirilgan development va avtomatizatsiya." },
      ],
    },
    service: {
      name: "TezCode Labs — venture studio, Toshkent",
      description:
        "TezCode Labs — Tezcode ichki venture studiyasi: o'z startaplarini validatsiya qiladi, prototip va MVP quradi, bozorga chiqaradi va miqyoslaydi. Founder'lar bilan investitsiya + ulush modelida hamkorlik.",
      serviceType: "Venture studio / startup studio / innovatsiya laboratoriyasi",
    },
  },

  ru: {
    hero: {
      badge: "TezCode Labs — venture studio",
      title1: "TezCode Labs —",
      titleAccent: "строим собственные",
      title2: "продукты",
      subtitle:
        "TezCode Labs — внутренняя инновационная лаборатория и венчурная студия Tezcode. Мы не только разрабатываем для клиентов — мы запускаем, валидируем и масштабируем собственные стартапы. WeWatch, CoreMed, Ventra и другие родились здесь.",
      trust: "Модель инвестиции + доля • Становимся сооснователями вместе с фаундерами",
      ctaPrimary: "Обсудить вашу идею",
      ctaSecondary: "Смотреть продукты",
    },
    capabilities: {
      badge: "Что делает лаб",
      title: "Как работает",
      titleAccent: "TezCode Labs?",
      subtitle:
        "Превращаем идею в работающий бизнес: валидация, прототип, MVP, выход на рынок и масштабирование — от одной команды.",
      items: [
        { icon: "search", title: "Валидация идеи", desc: "Проверяем рынок, проблему и спрос. Доказываем, что идея работает, прежде чем тратить деньги и время." },
        { icon: "zap", title: "Быстрое прототипирование", desc: "Рабочий прототип за дни. Тестируем на пользователях и сразу видим — верна гипотеза или нет." },
        { icon: "rocket", title: "Разработка MVP", desc: "Полноценная первая версия для реальных пользователей. Разработка, ускоренная с помощью ИИ." },
        { icon: "trending-up", title: "Выход на рынок (go-to-market)", desc: "Стратегия запуска, первые пользователи, каналы роста и метрики. Не просто код — трекшн." },
        { icon: "users", title: "Сооснование (co-founding)", desc: "Есть идея, но нет техкоманды? Мы входим как сооснователь — даём команду, технологию и опыт." },
        { icon: "banknote", title: "Инвестиции + доля", desc: "Инвестируем не деньгами, а ресурсами и экспертизой. Привязываемся к успеху через долю." },
      ],
    },
    process: {
      badge: "Как мы работаем",
      title: "От идеи до",
      titleAccent: "масштаба",
      subtitle: "На каждом этапе есть чёткая точка остановки — не работает, дальше не идём.",
      steps: [
        { num: "01", title: "Идея и валидация", desc: "Изучаем проблему, рынок и пользователя. Стоит ли строить — решаем вместе.", icon: "search" },
        { num: "02", title: "Прототип", desc: "Делаем быстрый рабочий прототип и тестируем на реальных людях. Гипотеза подтвердилась — продолжаем.", icon: "zap" },
        { num: "03", title: "MVP", desc: "Первый рабочий продукт на рынок. С ИИ-ускоренной разработкой в короткий срок.", icon: "rocket" },
        { num: "04", title: "Запуск и масштаб", desc: "Выход на рынок, рост и масштабирование. Следующие шаги определяем по метрикам.", icon: "trending-up" },
      ],
    },
    examples: {
      badge: "Наши продукты",
      title: "Стартапы, рождённые",
      titleAccent: "внутри компании",
      subtitle: "Почему внутренняя лаборатория важна: мы сами пользуемся своими продуктами, проверяем их и приносим клиентам проверенный playbook.",
      items: [
        { tag: "WeWatch", title: "Social media / совместный просмотр", desc: "Соцплатформа для совместного просмотра видео с друзьями в реальном времени. Наш опыт в consumer-продуктах." },
        { tag: "CoreMed", title: "Healthtech-экосистема", desc: "CoreMed, ClinicaGo и HamshiraGo — цифровая система для клиник, врачей и медсестёр." },
        { tag: "Ventra", title: "Аналитическая платформа", desc: "Аналитика продаж на маркетплейсах. Наша внутренняя экспертиза в построении data-heavy SaaS." },
        { tag: "AI-Trade / MaxSavdo", title: "ИИ и commerce", desc: "AI-Trade и MaxSavdo — наши экспериментальные продукты в сфере торговли и commerce. Проверены через dogfooding." },
      ],
    },
    cta: {
      badge: "Время строить вместе",
      title: "Есть идея?",
      titleAccent: "Станем сооснователями",
      subtitle: "Обсудим вашу стартап-идею — от валидации до co-founding. Партнёрство по модели инвестиции + доля.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с фаундером Бекзодом Мирзаалиевым.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Частые вопросы о TezCode Labs и модели co-founding.",
      items: [
        { q: "Что такое TezCode Labs?", a: "TezCode Labs — внутренняя венчурная студия и инновационная лаборатория Tezcode. Здесь рождаются, валидируются и масштабируются наши собственные стартапы и экспериментальные продукты. WeWatch, CoreMed, Ventra и другие созданы в этой лаборатории." },
        { q: "Могу ли я принести свою идею и стать сооснователем?", a: "Да. Если у вас есть идея, но не хватает сильной техкоманды, мы можем войти как сооснователь. Даём команду, технологию, продуктовый опыт и экспертизу выхода на рынок." },
        { q: "Как работает модель — инвестиции и доля?", a: "Мы инвестируем в основном не деньгами, а ресурсами и экспертизой: разработчики, дизайн, продукт и go-to-market. Взамен получаем долю в стартапе — то есть напрямую привязаны к вашему успеху." },
        { q: "На каком этапе вы подключаетесь?", a: "На разных: от чистой идеи к валидации, от прототипа к MVP или к масштабированию существующего продукта. Этап оцениваем вместе, затем согласуем форму партнёрства." },
        { q: "Чем это отличается от обычной (custom) разработки?", a: "В custom вы платите, мы разрабатываем как подрядчик, и код ваш. В Labs мы становимся партнёром: берём риск вместе, вкладываем ресурсы и инвестиции, а к результату привязаны долей в стартапе." },
        { q: "Почему внутренняя лаборатория важна?", a: "Потому что мы сами строим и используем свои продукты (dogfooding). Это даёт нам проверенный playbook, реальный продуктовый опыт и ИИ-ускоренную разработку — которые мы приносим и фаундерам." },
      ],
    },
    related: {
      badge: "Подробнее",
      title: "Ещё",
      titleAccent: "полезные страницы",
      subtitle: "Другие направления, связанные с TezCode Labs.",
      links: [
        { href: "/case-studies", label: "Кейсы", desc: "Наши проекты и реальные результаты." },
        { href: "/for-businesses", label: "Для бизнеса", desc: "Полный цикл разработки продукта для клиентов." },
        { href: "/ai-agent", label: "ИИ-агенты", desc: "ИИ-ускоренная разработка и автоматизация." },
      ],
    },
    service: {
      name: "TezCode Labs — venture studio, Ташкент",
      description:
        "TezCode Labs — внутренняя венчурная студия Tezcode: валидирует собственные стартапы, строит прототипы и MVP, выводит на рынок и масштабирует. Партнёрство с фаундерами по модели инвестиции + доля.",
      serviceType: "Венчурная студия / стартап-студия / инновационная лаборатория",
    },
  },

  en: {
    hero: {
      badge: "TezCode Labs — venture studio",
      title1: "TezCode Labs —",
      titleAccent: "we build our own",
      title2: "products",
      subtitle:
        "TezCode Labs is Tezcode's internal innovation lab and venture studio. We don't just build for clients — we launch, validate and scale our own startups. WeWatch, CoreMed, Ventra and more were born here.",
      trust: "Investment + equity model • We co-found alongside founders",
      ctaPrimary: "Discuss your idea",
      ctaSecondary: "See our products",
    },
    capabilities: {
      badge: "What the lab does",
      title: "How TezCode Labs",
      titleAccent: "works?",
      subtitle:
        "We turn an idea into a working business: validation, prototype, MVP, go-to-market and scaling — from one team.",
      items: [
        { icon: "search", title: "Idea validation", desc: "We test the market, the problem and the demand. We prove the idea works before spending money and time." },
        { icon: "zap", title: "Rapid prototyping", desc: "A working prototype in days. We test it with users and immediately see whether the hypothesis holds." },
        { icon: "rocket", title: "MVP development", desc: "A full first version for real users. Development accelerated with AI." },
        { icon: "trending-up", title: "Go-to-market", desc: "Launch strategy, first users, growth channels and metrics. Not just code — traction." },
        { icon: "users", title: "Co-founding", desc: "Have an idea but no tech team? We come in as a co-founder — bringing team, technology and experience." },
        { icon: "banknote", title: "Investment + equity", desc: "We invest with resources and expertise, not cash. We tie ourselves to success through equity." },
      ],
    },
    process: {
      badge: "How we work",
      title: "From idea to",
      titleAccent: "scale",
      subtitle: "Every stage has a clear stop point — if it doesn't work, we don't move forward.",
      steps: [
        { num: "01", title: "Idea & validation", desc: "We study the problem, the market and the user. Whether it's worth building — we decide together.", icon: "search" },
        { num: "02", title: "Prototype", desc: "We build a fast working prototype and test it on real people. If the hypothesis holds — we continue.", icon: "zap" },
        { num: "03", title: "MVP", desc: "The first working product to market. With AI-accelerated development in a short time.", icon: "rocket" },
        { num: "04", title: "Launch & scale", desc: "Go-to-market, growth and scaling. We set the next steps based on the metrics.", icon: "trending-up" },
      ],
    },
    examples: {
      badge: "Our products",
      title: "Startups born",
      titleAccent: "in-house",
      subtitle: "Why an in-house lab matters: we use our own products, validate them and bring a proven playbook to clients.",
      items: [
        { tag: "WeWatch", title: "Social media / watch-together", desc: "A social platform for watching video together with friends in real time. Our consumer-product experience." },
        { tag: "CoreMed", title: "Healthtech ecosystem", desc: "CoreMed, ClinicaGo and HamshiraGo — a digital system for clinics, doctors and nurses." },
        { tag: "Ventra", title: "Analytics platform", desc: "Marketplace sales analytics. Our in-house expertise in building data-heavy SaaS." },
        { tag: "AI-Trade / MaxSavdo", title: "AI & commerce", desc: "AI-Trade and MaxSavdo — our experimental products in trade and commerce. Proven through dogfooding." },
      ],
    },
    cta: {
      badge: "Time to build together",
      title: "Got an idea?",
      titleAccent: "Let's co-found it",
      subtitle: "Let's discuss your startup idea — from validation to co-founding. We partner on an investment + equity model.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach founder Bekzod Mirzaaliyev directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "Common questions about TezCode Labs and the co-founding model.",
      items: [
        { q: "What is TezCode Labs?", a: "TezCode Labs is Tezcode's internal venture studio and innovation lab. It's where our own startups and experimental products are born, validated and scaled. WeWatch, CoreMed, Ventra and others were created in this lab." },
        { q: "Can I bring my idea and co-found?", a: "Yes. If you have an idea but lack a strong tech team, we can come in as a co-founder. We bring the team, the technology, product experience and go-to-market expertise." },
        { q: "How does the model work — investment and equity?", a: "We invest mostly with resources and expertise, not cash: developers, design, product and go-to-market. In return we take equity in the startup — meaning we're directly tied to your success." },
        { q: "At which stage do you join?", a: "At different stages: from a raw idea to validation, from a prototype to an MVP, or scaling an existing product. We assess the stage together, then agree on the form of partnership." },
        { q: "How is this different from custom development?", a: "In custom, you pay, we build as a contractor, and the code is yours. In Labs we become a partner: we take the risk with you, put in resources and investment, and are tied to the outcome through equity in the startup." },
        { q: "Why does an in-house lab matter?", a: "Because we build and use our own products (dogfooding). That gives us a proven playbook, real product experience and AI-accelerated development — which we bring to founders too." },
      ],
    },
    related: {
      badge: "Learn more",
      title: "More",
      titleAccent: "useful pages",
      subtitle: "Other directions related to TezCode Labs.",
      links: [
        { href: "/case-studies", label: "Case studies", desc: "Our projects and real results." },
        { href: "/for-businesses", label: "For businesses", desc: "Full-cycle product development for clients." },
        { href: "/ai-agent", label: "AI agents", desc: "AI-accelerated development and automation." },
      ],
    },
    service: {
      name: "TezCode Labs — venture studio, Tashkent",
      description:
        "TezCode Labs is Tezcode's internal venture studio: it validates its own startups, builds prototypes and MVPs, goes to market and scales. Partnership with founders on an investment + equity model.",
      serviceType: "Venture studio / startup studio / innovation lab",
    },
  },

  ar: {
    hero: {
      badge: "TezCode Labs — استوديو ريادي",
      title1: "TezCode Labs —",
      titleAccent: "نبني منتجاتنا",
      title2: "الخاصة",
      subtitle:
        "TezCode Labs مختبر الابتكار الداخلي واستوديو المشاريع الريادية لدى Tezcode. لا نطوّر للعملاء فقط — بل نُطلق ونتحقق ونوسّع شركاتنا الناشئة. WeWatch وCoreMed وVentra وغيرها وُلدت هنا.",
      trust: "نموذج استثمار + حصة • نؤسّس مع رواد الأعمال جنباً إلى جنب",
      ctaPrimary: "ناقش فكرتك",
      ctaSecondary: "شاهد منتجاتنا",
    },
    capabilities: {
      badge: "ماذا يفعل المختبر",
      title: "كيف يعمل",
      titleAccent: "TezCode Labs؟",
      subtitle:
        "نحوّل الفكرة إلى عمل ناجح: التحقق، النموذج الأولي، MVP، الوصول إلى السوق والتوسّع — من فريق واحد.",
      items: [
        { icon: "search", title: "التحقق من الفكرة", desc: "نختبر السوق والمشكلة والطلب. نثبت أن الفكرة تعمل قبل إنفاق المال والوقت." },
        { icon: "zap", title: "النماذج الأولية السريعة", desc: "نموذج أولي عامل خلال أيام. نختبره مع المستخدمين ونرى فوراً إن كانت الفرضية صحيحة." },
        { icon: "rocket", title: "تطوير MVP", desc: "نسخة أولى كاملة لمستخدمين حقيقيين. تطوير مُسرّع بالذكاء الاصطناعي." },
        { icon: "trending-up", title: "الوصول إلى السوق", desc: "استراتيجية الإطلاق، أول المستخدمين، قنوات النمو والمقاييس. ليس مجرد كود — بل جذب حقيقي." },
        { icon: "users", title: "التأسيس المشترك", desc: "لديك فكرة لكن لا يوجد فريق تقني؟ ندخل كشريك مؤسس — نقدّم الفريق والتقنية والخبرة." },
        { icon: "banknote", title: "استثمار + حصة", desc: "نستثمر بالموارد والخبرة لا بالنقد. نرتبط بالنجاح عبر حصة في الشركة." },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "من الفكرة إلى",
      titleAccent: "التوسّع",
      subtitle: "لكل مرحلة نقطة توقف واضحة — إن لم تنجح، لا نمضي قدماً.",
      steps: [
        { num: "01", title: "الفكرة والتحقق", desc: "ندرس المشكلة والسوق والمستخدم. هل تستحق البناء — نقرر معاً.", icon: "search" },
        { num: "02", title: "النموذج الأولي", desc: "نصنع نموذجاً أولياً سريعاً ونختبره مع أشخاص حقيقيين. إذا صحّت الفرضية — نكمل.", icon: "zap" },
        { num: "03", title: "MVP", desc: "أول منتج عامل إلى السوق. بتطوير مُسرّع بالذكاء الاصطناعي في وقت قصير.", icon: "rocket" },
        { num: "04", title: "الإطلاق والتوسّع", desc: "الوصول إلى السوق والنمو والتوسّع. نحدد الخطوات التالية بناءً على المقاييس.", icon: "trending-up" },
      ],
    },
    examples: {
      badge: "منتجاتنا",
      title: "شركات ناشئة وُلدت",
      titleAccent: "من داخلنا",
      subtitle: "لماذا المختبر الداخلي مهم: نستخدم منتجاتنا بأنفسنا ونتحقق منها ونقدّم للعملاء دليل عمل مُثبتاً.",
      items: [
        { tag: "WeWatch", title: "تواصل اجتماعي / مشاهدة مشتركة", desc: "منصة اجتماعية لمشاهدة الفيديو مع الأصدقاء في الوقت الفعلي. خبرتنا في منتجات المستهلك." },
        { tag: "CoreMed", title: "منظومة صحية تقنية", desc: "CoreMed وClinicaGo وHamshiraGo — نظام رقمي للعيادات والأطباء والممرضين." },
        { tag: "Ventra", title: "منصة تحليلات", desc: "تحليلات مبيعات الأسواق الإلكترونية. خبرتنا الداخلية في بناء SaaS كثيف البيانات." },
        { tag: "AI-Trade / MaxSavdo", title: "الذكاء الاصطناعي والتجارة", desc: "AI-Trade وMaxSavdo — منتجاتنا التجريبية في مجال التجارة. مُثبتة عبر الاستخدام الذاتي." },
      ],
    },
    cta: {
      badge: "وقت البناء معاً",
      title: "لديك فكرة؟",
      titleAccent: "لنؤسّسها معاً",
      subtitle: "لنناقش فكرة شركتك الناشئة — من التحقق إلى التأسيس المشترك. نشارك بنموذج استثمار + حصة.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع المؤسس بكزود ميرزااليف.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أسئلة شائعة عن TezCode Labs ونموذج التأسيس المشترك.",
      items: [
        { q: "ما هو TezCode Labs؟", a: "TezCode Labs هو استوديو المشاريع الريادية ومختبر الابتكار الداخلي لدى Tezcode. هنا تُولد شركاتنا الناشئة ومنتجاتنا التجريبية وتُختبر وتتوسّع. WeWatch وCoreMed وVentra وغيرها أُنشئت في هذا المختبر." },
        { q: "هل يمكنني إحضار فكرتي والتأسيس المشترك؟", a: "نعم. إن كانت لديك فكرة لكن يعوزك فريق تقني قوي، يمكننا الدخول كشريك مؤسس. نقدّم الفريق والتقنية وخبرة المنتج وخبرة الوصول إلى السوق." },
        { q: "كيف يعمل النموذج — الاستثمار والحصة؟", a: "نستثمر غالباً بالموارد والخبرة لا بالنقد: مطورون، تصميم، منتج ووصول إلى السوق. في المقابل نأخذ حصة في الشركة — أي أننا مرتبطون مباشرة بنجاحك." },
        { q: "في أي مرحلة تنضمّون؟", a: "في مراحل مختلفة: من فكرة خام إلى التحقق، من نموذج أولي إلى MVP، أو توسيع منتج قائم. نقيّم المرحلة معاً ثم نتفق على شكل الشراكة." },
        { q: "بماذا يختلف هذا عن التطوير المخصّص (custom)؟", a: "في المخصّص تدفع أنت، ونطوّر كمقاول، والكود لك. أما في Labs فنصبح شريكاً: نتحمّل المخاطرة معك، ونضخّ الموارد والاستثمار، ونرتبط بالنتيجة عبر حصة في الشركة." },
        { q: "لماذا المختبر الداخلي مهم؟", a: "لأننا نبني منتجاتنا ونستخدمها بأنفسنا (الاستخدام الذاتي). هذا يمنحنا دليل عمل مُثبتاً وخبرة منتج حقيقية وتطويراً مُسرّعاً بالذكاء الاصطناعي — نقدّمها لرواد الأعمال أيضاً." },
      ],
    },
    related: {
      badge: "اعرف المزيد",
      title: "المزيد من",
      titleAccent: "الصفحات المفيدة",
      subtitle: "اتجاهات أخرى مرتبطة بـ TezCode Labs.",
      links: [
        { href: "/case-studies", label: "دراسات الحالة", desc: "مشاريعنا ونتائج حقيقية." },
        { href: "/for-businesses", label: "للشركات", desc: "تطوير منتج بدورة كاملة للعملاء." },
        { href: "/ai-agent", label: "وكلاء AI", desc: "تطوير وأتمتة مُسرّعان بالذكاء الاصطناعي." },
      ],
    },
    service: {
      name: "TezCode Labs — استوديو ريادي، طشقند",
      description:
        "TezCode Labs هو استوديو المشاريع الريادية الداخلي لدى Tezcode: يتحقق من شركاته الناشئة، ويبني النماذج الأولية وMVP، ويصل إلى السوق ويتوسّع. شراكة مع رواد الأعمال بنموذج استثمار + حصة.",
      serviceType: "استوديو ريادي / استوديو شركات ناشئة / مختبر ابتكار",
    },
  },

  uk: {
    hero: {
      badge: "TezCode Labs — venture studio",
      title1: "TezCode Labs —",
      titleAccent: "будуємо власні",
      title2: "продукти",
      subtitle:
        "TezCode Labs — внутрішня інноваційна лабораторія та венчурна студія Tezcode. Ми не лише розробляємо для клієнтів — ми народжуємо, валідуємо та масштабуємо власні стартапи. WeWatch, CoreMed, Ventra та інші народилися тут.",
      trust: "Модель інвестиції + частка • Стаємо співзасновниками разом із фаундерами",
      ctaPrimary: "Обговорити вашу ідею",
      ctaSecondary: "Дивитись продукти",
    },
    capabilities: {
      badge: "Що робить лаб",
      title: "Як працює",
      titleAccent: "TezCode Labs?",
      subtitle:
        "Перетворюємо ідею на робочий бізнес: валідація, прототип, MVP, вихід на ринок і масштабування — від однієї команди.",
      items: [
        { icon: "search", title: "Валідація ідеї", desc: "Перевіряємо ринок, проблему та попит. Доводимо, що ідея працює, перш ніж витрачати гроші й час." },
        { icon: "zap", title: "Швидке прототипування", desc: "Робочий прототип за дні. Тестуємо на користувачах і одразу бачимо — гіпотеза вірна чи ні." },
        { icon: "rocket", title: "Розробка MVP", desc: "Повноцінна перша версія для реальних користувачів. Розробка, прискорена за допомогою AI." },
        { icon: "trending-up", title: "Вихід на ринок (go-to-market)", desc: "Стратегія запуску, перші користувачі, канали зростання та метрики. Не просто код — трекшн." },
        { icon: "users", title: "Співзаснування (co-founding)", desc: "Є ідея, але немає техкоманди? Ми входимо як співзасновник — даємо команду, технологію та досвід." },
        { icon: "banknote", title: "Інвестиції + частка", desc: "Інвестуємо не грошима, а ресурсами та експертизою. Прив'язуємося до успіху через частку." },
      ],
    },
    process: {
      badge: "Як ми працюємо",
      title: "Від ідеї до",
      titleAccent: "масштабу",
      subtitle: "На кожному етапі є чітка точка зупинки — не працює, далі не йдемо.",
      steps: [
        { num: "01", title: "Ідея та валідація", desc: "Вивчаємо проблему, ринок і користувача. Чи варто будувати — вирішуємо разом.", icon: "search" },
        { num: "02", title: "Прототип", desc: "Робимо швидкий робочий прототип і тестуємо на реальних людях. Гіпотеза підтвердилась — продовжуємо.", icon: "zap" },
        { num: "03", title: "MVP", desc: "Перший робочий продукт на ринок. З AI-прискореною розробкою за короткий термін.", icon: "rocket" },
        { num: "04", title: "Запуск і масштаб", desc: "Вихід на ринок, зростання та масштабування. Наступні кроки визначаємо за метриками.", icon: "trending-up" },
      ],
    },
    examples: {
      badge: "Наші продукти",
      title: "Стартапи, народжені",
      titleAccent: "всередині нас",
      subtitle: "Чому внутрішня лабораторія важлива: ми самі користуємося своїми продуктами, перевіряємо їх і приносимо клієнтам перевірений playbook.",
      items: [
        { tag: "WeWatch", title: "Social media / спільний перегляд", desc: "Соцплатформа для спільного перегляду відео з друзями в реальному часі. Наш досвід у consumer-продуктах." },
        { tag: "CoreMed", title: "Healthtech-екосистема", desc: "CoreMed, ClinicaGo та HamshiraGo — цифрова система для клінік, лікарів і медсестер." },
        { tag: "Ventra", title: "Аналітична платформа", desc: "Аналітика продажів на маркетплейсах. Наша внутрішня експертиза в побудові data-heavy SaaS." },
        { tag: "AI-Trade / MaxSavdo", title: "AI та commerce", desc: "AI-Trade і MaxSavdo — наші експериментальні продукти у сфері торгівлі та commerce. Перевірені через dogfooding." },
      ],
    },
    cta: {
      badge: "Час будувати разом",
      title: "Є ідея?",
      titleAccent: "Станьмо співзасновниками",
      subtitle: "Обговоримо вашу стартап-ідею — від валідації до co-founding. Партнерство за моделлю інвестиції + частка.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з фаундером Бекзодом Мірзаалієвим.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "Часті запитання про TezCode Labs і модель co-founding.",
      items: [
        { q: "Що таке TezCode Labs?", a: "TezCode Labs — внутрішня венчурна студія та інноваційна лабораторія Tezcode. Тут народжуються, валідуються та масштабуються наші власні стартапи й експериментальні продукти. WeWatch, CoreMed, Ventra та інші створені в цій лабораторії." },
        { q: "Чи можу я принести свою ідею й стати співзасновником?", a: "Так. Якщо у вас є ідея, але бракує сильної техкоманди, ми можемо увійти як співзасновник. Даємо команду, технологію, продуктовий досвід і експертизу виходу на ринок." },
        { q: "Як працює модель — інвестиції та частка?", a: "Ми інвестуємо переважно не грошима, а ресурсами та експертизою: розробники, дизайн, продукт і go-to-market. Натомість отримуємо частку в стартапі — тобто напряму прив'язані до вашого успіху." },
        { q: "На якому етапі ви підключаєтеся?", a: "На різних: від чистої ідеї до валідації, від прототипу до MVP або масштабування наявного продукту. Етап оцінюємо разом, потім узгоджуємо форму партнерства." },
        { q: "Чим це відрізняється від звичайної (custom) розробки?", a: "У custom ви платите, ми розробляємо як підрядник, і код ваш. У Labs ми стаємо партнером: беремо ризик разом, вкладаємо ресурси та інвестиції і прив'язані до результату через частку в стартапі." },
        { q: "Чому внутрішня лабораторія важлива?", a: "Бо ми самі будуємо й використовуємо свої продукти (dogfooding). Це дає нам перевірений playbook, реальний продуктовий досвід і AI-прискорену розробку — які ми приносимо й фаундерам." },
      ],
    },
    related: {
      badge: "Докладніше",
      title: "Ще",
      titleAccent: "корисні сторінки",
      subtitle: "Інші напрямки, пов'язані з TezCode Labs.",
      links: [
        { href: "/case-studies", label: "Кейси", desc: "Наші проекти та реальні результати." },
        { href: "/for-businesses", label: "Для бізнесу", desc: "Повний цикл розробки продукту для клієнтів." },
        { href: "/ai-agent", label: "AI-агенти", desc: "AI-прискорена розробка та автоматизація." },
      ],
    },
    service: {
      name: "TezCode Labs — venture studio, Ташкент",
      description:
        "TezCode Labs — внутрішня венчурна студія Tezcode: валідує власні стартапи, будує прототипи та MVP, виводить на ринок і масштабує. Партнерство з фаундерами за моделлю інвестиції + частка.",
      serviceType: "Венчурна студія / стартап-студія / інноваційна лабораторія",
    },
  },
};
