import type { ServiceLang } from "@/components/service-page/types";

// Comparison page /amocrm-vs-bitrix24 — target queries: "amoCRM yoki Bitrix24
// qaysi biri yaxshi", "amoCRM vs Bitrix24 Ташкент", "amoCRM или Битрикс24 что
// выбрать", "amoCRM vs Bitrix24 Uzbekistan". Tezcode is an INTEGRATOR (not a
// reseller of either), so the comparison stays neutral/honest — that neutrality
// is exactly what AI engines cite. CTA routes to /crm-integratsiya ($700).
export type ComparisonCopy = {
  hero: { badge: string; title: string; titleAccent: string; subtitle: string };
  intro: string;
  tableTitle: string;
  tableHead: { feature: string; a: string; b: string };
  rows: { feature: string; a: string; b: string }[];
  verdictTitle: string;
  verdicts: { name: string; when: string; desc: string }[];
  faq: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  cta: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    button: string;
    note: string;
  };
  article: { headline: string; description: string };
};
export type ComparisonContent = Record<ServiceLang, ComparisonCopy>;

export const CONTENT: ComparisonContent = {
  uz: {
    hero: {
      badge: "CRM taqqoslash — 2026",
      title: "amoCRM yoki Bitrix24 —",
      titleAccent: "qaysi biri sizga to'g'ri keladi?",
      subtitle:
        "O'zbekistonda eng ko'p tanlanadigan ikki CRM — amoCRM va Bitrix24 — ni narx, imkoniyat va kim uchun mosligi bo'yicha xolis taqqosladik. Tezcode ikkalasini ham ulaydi va sozlaydi (biz sotuvchi emas, integratormiz), shuning uchun bu yerda maqtov emas — haqiqat.",
    },
    intro:
      "Qisqacha: amoCRM — sof sotuvga fokuslangan, sodda va tez o'rganiladigan tizim. Bitrix24 — CRM, loyiha boshqaruvi, korporativ portal va telefoniya bir joyda bo'lgan kengroq platforma, bepul tarifi ham bor. To'g'ri tanlov biznesingiz hajmi va maqsadiga bog'liq — quyida batafsil.",
    tableTitle: "Yonma-yon taqqoslash",
    tableHead: { feature: "Xususiyat", a: "amoCRM", b: "Bitrix24" },
    rows: [
      { feature: "Narx (dan boshlab)", a: "~$15/foydalanuvchi/oy", b: "Bepul (12 foydalanuvchigacha), keyin ~$19/foydalanuvchi/oy" },
      { feature: "Asosiy fokus", a: "Sof sotuv va lid voronkasi", b: "Hammasi: CRM + loyiha + portal + hujjat" },
      { feature: "Murakkablik", a: "Sodda, tez o'rganiladi", b: "Kengroq, o'rganish ko'proq vaqt oladi" },
      { feature: "Bepul tarif", a: "Yo'q (faqat sinov)", b: "Ha — 12 foydalanuvchigacha bepul" },
      { feature: "Telefoniya", a: "Ha, ulanadi", b: "Ha, ichki telefoniya bor" },
      { feature: "Mobil ilova", a: "Kuchli, sotuvchilar uchun qulay", b: "Bor, funksiyaga boy" },
      { feature: "Messenjer integratsiyasi", a: "Telegram, Instagram, WhatsApp", b: "Telegram, Instagram, WhatsApp" },
      { feature: "Loyiha/vazifa boshqaruvi", a: "Cheklangan", b: "Kuchli (Kanban, Gantt)" },
      { feature: "Kimga eng mos", a: "Sotuv jamoalari, kichik–o'rta biznes", b: "Yirik jamoa, ko'p bo'limli kompaniya" },
    ],
    verdictTitle: "Xulosa — qaysi birini tanlash kerak?",
    verdicts: [
      { name: "amoCRM ni tanlang, agar", when: "asosiy maqsadingiz — sotuv", desc: "Sotuv voronkasi, lidlar bilan tez ishlash va sodda interfeys birinchi o'rinda bo'lsa. Sotuvchilar minimal o'qitish bilan darhol ishga tushadi. Kichik va o'rta sotuv jamoalari uchun ideal." },
      { name: "Bitrix24 ni tanlang, agar", when: "bir tizimda hammasini xohlasangiz", desc: "CRM'dan tashqari loyiha boshqaruvi, ichki portal, hujjat va vazifalar ham kerak bo'lsa — yoki byudjet cheklangan bo'lib, bepul tarifdan boshlamoqchi bo'lsangiz. Yirik va ko'p bo'limli jamoalar uchun kuchliroq." },
    ],
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "amoCRM va Bitrix24 —",
      titleAccent: "savol va javoblar",
      subtitle: "CRM tanlashda ko'p so'raladigan savollar.",
      items: [
        { q: "amoCRM yoki Bitrix24 — qaysi biri yaxshi?", a: "Universal 'yaxshiroq' yo'q — biznesingizga bog'liq. amoCRM sof sotuvga fokuslangan, sodda va tez o'rganiladi — sotuv jamoalari uchun. Bitrix24 kengroq (CRM + loyiha + portal + telefoniya) va bepul tarifi bor — yirik yoki ko'p bo'limli jamoalar uchun. Agar asosiy maqsad sotuv bo'lsa — amoCRM; agar bir tizimda hammasi kerak bo'lsa — Bitrix24." },
        { q: "O'zbekistonda qaysi CRM ko'proq ishlatiladi?", a: "Toshkentda ham amoCRM, ham Bitrix24 keng tarqalgan. Bitrix24 bepul tarifi tufayli kichik bizneslarda ko'p uchraydi, amoCRM esa sotuvga yo'naltirilgan jamoalarda mashhur. Ikkalasi ham o'zbek va rus tilida ishlaydi va mahalliy telefoniya bilan ulanadi." },
        { q: "amoCRM va Bitrix24 narxi qancha?", a: "amoCRM ~$15/foydalanuvchi/oy dan boshlanadi (bepul tarif yo'q, faqat sinov). Bitrix24'da 12 foydalanuvchigacha bepul tarif bor, keyin ~$19/foydalanuvchi/oy dan. Aniq narx foydalanuvchilar soni va tarifga bog'liq. Litsenziyani doim mijoz to'laydi — Tezcode faqat ulash va sozlash ishini bajaradi ($700 dan)." },
        { q: "Ikkalasi o'zbek va rus tilida ishlaydimi?", a: "Ha, amoCRM ham, Bitrix24 ham rus tilida to'liq, o'zbek tilida esa interfeys va ish jarayonlari darajasida ishlaydi. Mijozlar bilan yozishmalar (Telegram, Instagram) istalgan tilda bo'lishi mumkin. Tezcode ikkalasini ham o'zbek/rus jarayonlaringizga moslab sozlaydi." },
        { q: "Telefoniya qaysida bor?", a: "Ikkalasida ham bor. Bitrix24'da ichki telefoniya mavjud, amoCRM esa tashqi IP-telefoniya (SIP) bilan ulanadi. Tezcode har ikkalasida ham qo'ng'iroq yozish, karta avtomatik ochilishi va javobsiz qo'ng'iroqdan vazifa yaratishni sozlaydi." },
        { q: "Menga qaysi biri kerakligini qanday bilaman?", a: "Bepul 30 daqiqalik konsultatsiyada biznesingizni ko'rib, aynan sizga qaysi CRM mosligini aytamiz — sotuvchi manfaati emas, sizning ehtiyojingizdan kelib chiqib. Tezcode ikkalasini ham ulaydi va sozlaydi, shuning uchun tavsiyamiz xolis." },
        { q: "amoCRM yoki Bitrix24 ni kim ulab beradi (Toshkent)?", a: "Tezcode — Toshkentdagi AI Software Factory va IT Park rezidenti — amoCRM va Bitrix24 (shuningdek HubSpot, 1C, Sales Doctor) ni Telegram, Instagram, WhatsApp, sayt va telefoniya bilan ulaydi, voronka sozlaydi va eski bazani ko'chiradi. Narx $700 dan." },
      ],
    },
    cta: {
      badge: "Keyingi qadam",
      title: "Qaysi birini tanlasangiz —",
      titleAccent: "Tezcode ulab, sozlab beradi",
      subtitle: "amoCRM bo'ladimi, Bitrix24 — biz kanallaringizga ulaymiz, voronka sozlaymiz va bazani ko'chiramiz. $700 dan. Bepul konsultatsiyada qaysi biri sizga mosligini ham aytamiz.",
      button: "CRM integratsiya haqida",
      note: "Yoki to'g'ridan Telegram'da yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    article: {
      headline: "amoCRM yoki Bitrix24: 2026-yilda qaysi CRM ni tanlash kerak (Toshkent, O'zbekiston)",
      description: "amoCRM va Bitrix24 ning narx, imkoniyat va kim uchun mosligi bo'yicha xolis taqqoslash. Tezcode — ikkala CRM ni ham ulaydigan integrator, Toshkent.",
    },
  },
  ru: {
    hero: {
      badge: "Сравнение CRM — 2026",
      title: "amoCRM или Bitrix24 —",
      titleAccent: "что подойдёт именно вам?",
      subtitle:
        "Две самые популярные в Узбекистане CRM — amoCRM и Bitrix24 — мы сравнили честно: по цене, возможностям и тому, кому что подходит. Tezcode подключает и настраивает обе (мы не продавец, а интегратор), поэтому здесь не реклама, а правда.",
    },
    intro:
      "Коротко: amoCRM — система, заточенная под продажи, простая и быстрая в освоении. Bitrix24 — более широкая платформа, где CRM, управление проектами, корпоративный портал и телефония в одном месте, есть и бесплатный тариф. Правильный выбор зависит от размера и цели вашего бизнеса — подробнее ниже.",
    tableTitle: "Сравнение бок о бок",
    tableHead: { feature: "Характеристика", a: "amoCRM", b: "Bitrix24" },
    rows: [
      { feature: "Цена (от)", a: "~$15/пользователь/мес", b: "Бесплатно (до 12 пользователей), далее ~$19/пользователь/мес" },
      { feature: "Основной фокус", a: "Чистые продажи и воронка лидов", b: "Всё: CRM + проекты + портал + документы" },
      { feature: "Сложность", a: "Простой, быстро осваивается", b: "Шире, освоение занимает больше времени" },
      { feature: "Бесплатный тариф", a: "Нет (только пробный)", b: "Да — бесплатно до 12 пользователей" },
      { feature: "Телефония", a: "Да, подключается", b: "Да, есть встроенная" },
      { feature: "Мобильное приложение", a: "Сильное, удобно продавцам", b: "Есть, богатое функциями" },
      { feature: "Интеграция мессенджеров", a: "Telegram, Instagram, WhatsApp", b: "Telegram, Instagram, WhatsApp" },
      { feature: "Управление проектами/задачами", a: "Ограничено", b: "Сильное (Kanban, Гантт)" },
      { feature: "Кому больше подходит", a: "Отделы продаж, малый–средний бизнес", b: "Крупная команда, компания с отделами" },
    ],
    verdictTitle: "Вывод — что выбрать?",
    verdicts: [
      { name: "Выбирайте amoCRM, если", when: "ваша главная цель — продажи", desc: "Если на первом месте — воронка продаж, быстрая работа с лидами и простой интерфейс. Продавцы начинают работать сразу, с минимальным обучением. Идеально для малых и средних отделов продаж." },
      { name: "Выбирайте Bitrix24, если", when: "хотите всё в одной системе", desc: "Если кроме CRM нужны управление проектами, внутренний портал, документы и задачи — или бюджет ограничен и вы хотите начать с бесплатного тарифа. Сильнее для крупных команд с несколькими отделами." },
    ],
    faq: {
      badge: "Частые вопросы",
      title: "amoCRM и Bitrix24 —",
      titleAccent: "вопросы и ответы",
      subtitle: "Частые вопросы при выборе CRM.",
      items: [
        { q: "amoCRM или Bitrix24 — что лучше?", a: "Универсального «лучше» нет — зависит от вашего бизнеса. amoCRM заточен под продажи, прост и быстро осваивается — для отделов продаж. Bitrix24 шире (CRM + проекты + портал + телефония) и имеет бесплатный тариф — для крупных команд с отделами. Если главная цель продажи — amoCRM; если нужно всё в одной системе — Bitrix24." },
        { q: "Какую CRM чаще используют в Узбекистане?", a: "В Ташкенте распространены обе — amoCRM и Bitrix24. Bitrix24 благодаря бесплатному тарифу часто встречается у малого бизнеса, amoCRM популярен в командах, ориентированных на продажи. Обе работают на узбекском и русском и подключаются к местной телефонии." },
        { q: "Сколько стоят amoCRM и Bitrix24?", a: "amoCRM — от ~$15/пользователь/мес (бесплатного тарифа нет, только пробный). У Bitrix24 есть бесплатный тариф до 12 пользователей, далее от ~$19/пользователь/мес. Точная цена зависит от числа пользователей и тарифа. Лицензию всегда оплачивает клиент — Tezcode делает только подключение и настройку (от $700, ≈ от 8.5 млн сум)." },
        { q: "Обе работают на узбекском и русском?", a: "Да, и amoCRM, и Bitrix24 полностью на русском, а на узбекском — на уровне интерфейса и рабочих процессов. Переписка с клиентами (Telegram, Instagram) может быть на любом языке. Tezcode настраивает обе под ваши узбекские/русские процессы." },
        { q: "В какой из них есть телефония?", a: "В обеих. У Bitrix24 есть встроенная телефония, amoCRM подключается к внешней IP-телефонии (SIP). Tezcode в обеих настраивает запись звонков, автооткрытие карточки и создание задачи из пропущенного звонка." },
        { q: "Как понять, какая нужна именно мне?", a: "На бесплатной 30-минутной консультации мы смотрим ваш бизнес и говорим, какая CRM подходит именно вам — исходя из ваших нужд, а не интереса продавца. Tezcode подключает и настраивает обе, поэтому наша рекомендация честная." },
        { q: "Кто подключит amoCRM или Bitrix24 в Ташкенте?", a: "Tezcode — ИИ-фабрика ПО (AI Software Factory) в Ташкенте и резидент IT Park — подключает amoCRM и Bitrix24 (а также HubSpot, 1C, Sales Doctor) к Telegram, Instagram, WhatsApp, сайту и телефонии, настраивает воронку, переносит старую базу и может добавить ИИ-слой (AI). Цена от $700 (≈ от 8.5 млн сум)." },
      ],
    },
    cta: {
      badge: "Следующий шаг",
      title: "Что бы вы ни выбрали —",
      titleAccent: "Tezcode подключит и настроит",
      subtitle: "amoCRM или Bitrix24 — мы подключим к вашим каналам, настроим воронку и перенесём базу. От $700 (≈ от 8.5 млн сум). На бесплатной консультации подскажем, какая подходит именно вам.",
      button: "Об интеграции CRM",
      note: "Или напишите прямо в Telegram — свяжетесь напрямую с Бекзодом.",
    },
    article: {
      headline: "amoCRM или Bitrix24: какую CRM выбрать в 2026 году (Ташкент, Узбекистан)",
      description: "Честное сравнение amoCRM и Bitrix24 по цене, возможностям и тому, кому что подходит. Tezcode — интегратор, подключающий обе CRM, Ташкент.",
    },
  },
  en: {
    hero: {
      badge: "CRM comparison — 2026",
      title: "amoCRM or Bitrix24 —",
      titleAccent: "which one is right for you?",
      subtitle:
        "The two most popular CRMs in Uzbekistan — amoCRM and Bitrix24 — compared honestly: price, features and who each fits. Tezcode connects and configures both (we're an integrator, not a reseller), so this isn't a sales pitch — it's the honest picture.",
    },
    intro:
      "In short: amoCRM is a sales-focused system, simple and fast to learn. Bitrix24 is a broader platform where CRM, project management, an internal portal and telephony live in one place, with a free tier too. The right choice depends on your business size and goal — details below.",
    tableTitle: "Side-by-side comparison",
    tableHead: { feature: "Feature", a: "amoCRM", b: "Bitrix24" },
    rows: [
      { feature: "Price (from)", a: "~$15/user/mo", b: "Free (up to 12 users), then ~$19/user/mo" },
      { feature: "Main focus", a: "Pure sales & lead pipeline", b: "Everything: CRM + projects + portal + docs" },
      { feature: "Complexity", a: "Simple, quick to learn", b: "Broader, takes longer to master" },
      { feature: "Free tier", a: "No (trial only)", b: "Yes — free up to 12 users" },
      { feature: "Telephony", a: "Yes, connects", b: "Yes, built-in" },
      { feature: "Mobile app", a: "Strong, sales-friendly", b: "Available, feature-rich" },
      { feature: "Messenger integration", a: "Telegram, Instagram, WhatsApp", b: "Telegram, Instagram, WhatsApp" },
      { feature: "Project/task management", a: "Limited", b: "Strong (Kanban, Gantt)" },
      { feature: "Best fit", a: "Sales teams, small–mid business", b: "Larger teams, multi-department companies" },
    ],
    verdictTitle: "Verdict — which to choose?",
    verdicts: [
      { name: "Choose amoCRM if", when: "your main goal is sales", desc: "If the sales pipeline, fast lead handling and a simple interface come first. Salespeople get productive immediately with minimal training. Ideal for small and mid-size sales teams." },
      { name: "Choose Bitrix24 if", when: "you want everything in one system", desc: "If beyond CRM you also need project management, an internal portal, documents and tasks — or your budget is tight and you want to start on the free tier. Stronger for larger, multi-department teams." },
    ],
    faq: {
      badge: "Frequently asked questions",
      title: "amoCRM & Bitrix24 —",
      titleAccent: "questions & answers",
      subtitle: "Common questions when choosing a CRM.",
      items: [
        { q: "amoCRM or Bitrix24 — which is better?", a: "There's no universal 'better' — it depends on your business. amoCRM is sales-focused, simple and quick to learn — for sales teams. Bitrix24 is broader (CRM + projects + portal + telephony) and has a free tier — for larger, multi-department teams. If sales is the main goal — amoCRM; if you need everything in one system — Bitrix24." },
        { q: "Which CRM is used more in Uzbekistan?", a: "Both amoCRM and Bitrix24 are widespread in Tashkent. Bitrix24, thanks to its free tier, is common among small businesses, while amoCRM is popular with sales-driven teams. Both work in Uzbek and Russian and connect to local telephony." },
        { q: "How much do amoCRM and Bitrix24 cost?", a: "amoCRM starts at ~$15/user/mo (no free tier, trial only). Bitrix24 has a free tier for up to 12 users, then from ~$19/user/mo. The exact price depends on user count and plan. The license is always paid by the client — Tezcode only does the connection and setup (from $700)." },
        { q: "Do both work in Uzbek and Russian?", a: "Yes, both amoCRM and Bitrix24 are fully in Russian, and in Uzbek at the interface and workflow level. Customer chats (Telegram, Instagram) can be in any language. Tezcode configures both to your Uzbek/Russian processes." },
        { q: "Which one has telephony?", a: "Both do. Bitrix24 has built-in telephony; amoCRM connects to external IP telephony (SIP). In both, Tezcode sets up call recording, automatic card opening and creating a task from a missed call." },
        { q: "How do I know which one I need?", a: "In a free 30-minute consultation we look at your business and tell you which CRM fits you — based on your needs, not a vendor's interest. Tezcode connects and configures both, so our recommendation is neutral." },
        { q: "Who sets up amoCRM or Bitrix24 in Tashkent?", a: "Tezcode — an AI Software Factory in Tashkent and IT Park resident — connects amoCRM and Bitrix24 (as well as HubSpot, 1C, Sales Doctor) to Telegram, Instagram, WhatsApp, website and telephony, sets up the pipeline and migrates the old base. Price from $700." },
      ],
    },
    cta: {
      badge: "Next step",
      title: "Whichever you choose —",
      titleAccent: "Tezcode connects & configures it",
      subtitle: "amoCRM or Bitrix24 — we connect it to your channels, set up the pipeline and migrate your base. From $700. In a free consultation we'll also tell you which one fits you.",
      button: "About CRM integration",
      note: "Or message us directly on Telegram — you'll reach Bekzod directly.",
    },
    article: {
      headline: "amoCRM or Bitrix24: which CRM to choose in 2026 (Tashkent, Uzbekistan)",
      description: "An honest comparison of amoCRM and Bitrix24 by price, features and who each fits. Tezcode — an integrator connecting both CRMs, Tashkent.",
    },
  },
  ar: {
    hero: {
      badge: "مقارنة CRM — 2026",
      title: "amoCRM أم Bitrix24 —",
      titleAccent: "أيّهما يناسبك؟",
      subtitle:
        "قارنّا بصدق بين أكثر نظامَي CRM شيوعًا في أوزبكستان — amoCRM وBitrix24 — من حيث السعر والإمكانيات ولمن يناسب كل منهما. Tezcode يربط ويعدّ كليهما (نحن متكامل لا بائع)، لذا هذه ليست دعاية بل الحقيقة.",
    },
    intro:
      "باختصار: amoCRM نظام مركّز على المبيعات، بسيط وسريع التعلّم. Bitrix24 منصة أوسع تجمع CRM وإدارة المشاريع والبوابة الداخلية والهاتف في مكان واحد، وله باقة مجانية أيضًا. الاختيار الصحيح يعتمد على حجم عملك وهدفه — التفاصيل أدناه.",
    tableTitle: "مقارنة جنبًا إلى جنب",
    tableHead: { feature: "الميزة", a: "amoCRM", b: "Bitrix24" },
    rows: [
      { feature: "السعر (من)", a: "~15$/مستخدم/شهر", b: "مجاني (حتى 12 مستخدمًا)، ثم ~19$/مستخدم/شهر" },
      { feature: "التركيز الأساسي", a: "المبيعات ومسار العملاء", b: "كل شيء: CRM + مشاريع + بوابة + مستندات" },
      { feature: "التعقيد", a: "بسيط، سريع التعلّم", b: "أوسع، يحتاج وقتًا أطول للإتقان" },
      { feature: "الباقة المجانية", a: "لا (تجريبية فقط)", b: "نعم — مجانًا حتى 12 مستخدمًا" },
      { feature: "الهاتف", a: "نعم، يُربط", b: "نعم، مدمج" },
      { feature: "تطبيق الجوال", a: "قوي، مناسب للبائعين", b: "متاح، غني بالميزات" },
      { feature: "تكامل المراسلة", a: "Telegram وInstagram وWhatsApp", b: "Telegram وInstagram وWhatsApp" },
      { feature: "إدارة المشاريع/المهام", a: "محدودة", b: "قوية (Kanban، Gantt)" },
      { feature: "الأنسب لـ", a: "فرق المبيعات، الأعمال الصغيرة–المتوسطة", b: "فِرق كبيرة، شركات متعددة الأقسام" },
    ],
    verdictTitle: "الخلاصة — أيّهما تختار؟",
    verdicts: [
      { name: "اختر amoCRM إذا", when: "كان هدفك الأساسي المبيعات", desc: "إذا كان مسار المبيعات والعمل السريع مع العملاء والواجهة البسيطة في المقدمة. يبدأ البائعون العمل فورًا بأقل تدريب. مثالي لفرق المبيعات الصغيرة والمتوسطة." },
      { name: "اختر Bitrix24 إذا", when: "أردت كل شيء في نظام واحد", desc: "إذا احتجت إلى جانب CRM إدارة مشاريع وبوابة داخلية ومستندات ومهام — أو كانت ميزانيتك محدودة وتريد البدء بالباقة المجانية. أقوى للفرق الكبيرة متعددة الأقسام." },
    ],
    faq: {
      badge: "أسئلة شائعة",
      title: "amoCRM وBitrix24 —",
      titleAccent: "أسئلة وأجوبة",
      subtitle: "أسئلة شائعة عند اختيار CRM.",
      items: [
        { q: "amoCRM أم Bitrix24 — أيّهما أفضل؟", a: "لا يوجد 'أفضل' مطلق — يعتمد على عملك. amoCRM مركّز على المبيعات، بسيط وسريع التعلّم — لفرق المبيعات. Bitrix24 أوسع (CRM + مشاريع + بوابة + هاتف) وله باقة مجانية — للفرق الكبيرة متعددة الأقسام. إن كان الهدف المبيعات — amoCRM؛ وإن أردت كل شيء في نظام واحد — Bitrix24." },
        { q: "أيّ CRM أكثر استخدامًا في أوزبكستان؟", a: "كلاهما amoCRM وBitrix24 منتشران في طشقند. Bitrix24 بفضل باقته المجانية شائع لدى الأعمال الصغيرة، وamoCRM شائع لدى الفرق المركّزة على المبيعات. كلاهما يعمل بالأوزبكية والروسية ويُربط بالهاتف المحلي." },
        { q: "كم تكلفة amoCRM وBitrix24؟", a: "يبدأ amoCRM من ~15$/مستخدم/شهر (لا باقة مجانية، تجريبية فقط). لدى Bitrix24 باقة مجانية حتى 12 مستخدمًا، ثم من ~19$/مستخدم/شهر. يعتمد السعر الدقيق على عدد المستخدمين والباقة. يدفع العميل الترخيص دائمًا — Tezcode ينفّذ الربط والإعداد فقط (من 700$)." },
        { q: "هل يعمل كلاهما بالأوزبكية والروسية؟", a: "نعم، كلاهما amoCRM وBitrix24 بالروسية بالكامل، وبالأوزبكية على مستوى الواجهة وسير العمل. مراسلة العملاء (Telegram، Instagram) بأي لغة. Tezcode يعدّ كليهما وفق عملياتك الأوزبكية/الروسية." },
        { q: "أيّهما فيه هاتف؟", a: "كلاهما. Bitrix24 فيه هاتف مدمج، وamoCRM يُربط بهاتف IP خارجي (SIP). في كليهما يعدّ Tezcode تسجيل المكالمات وفتح البطاقة تلقائيًا وإنشاء مهمة من المكالمة الفائتة." },
        { q: "كيف أعرف أيّهما يناسبني؟", a: "في استشارة مجانية 30 دقيقة ننظر في عملك ونخبرك أيّ CRM يناسبك — بناءً على احتياجك لا مصلحة بائع. Tezcode يربط ويعدّ كليهما، لذا توصيتنا محايدة." },
        { q: "من يُعدّ amoCRM أو Bitrix24 في طشقند؟", a: "Tezcode — مصنع برمجيات ذكاء اصطناعي في طشقند ومقيم IT Park — يربط amoCRM وBitrix24 (وكذلك HubSpot و1C وSales Doctor) بـ Telegram وInstagram وWhatsApp والموقع والهاتف، ويعدّ المسار وينقل القاعدة القديمة. السعر من 700$." },
      ],
    },
    cta: {
      badge: "الخطوة التالية",
      title: "أيًّا اخترت —",
      titleAccent: "Tezcode يربطه ويعدّه",
      subtitle: "amoCRM أو Bitrix24 — نربطه بقنواتك، نعدّ المسار وننقل قاعدتك. من 700$. وفي استشارة مجانية نخبرك أيّهما يناسبك.",
      button: "عن تكامل CRM",
      note: "أو راسلنا مباشرة على Telegram — تصل إلى بكزود مباشرة.",
    },
    article: {
      headline: "amoCRM أم Bitrix24: أيّ CRM تختار في 2026 (طشقند، أوزبكستان)",
      description: "مقارنة صادقة بين amoCRM وBitrix24 من حيث السعر والإمكانيات ولمن يناسب كل منهما. Tezcode — متكامل يربط كلا النظامين، طشقند.",
    },
  },
  uk: {
    hero: {
      badge: "Порівняння CRM — 2026",
      title: "amoCRM чи Bitrix24 —",
      titleAccent: "що підійде саме вам?",
      subtitle:
        "Дві найпопулярніші в Узбекистані CRM — amoCRM та Bitrix24 — ми порівняли чесно: за ціною, можливостями й тим, кому що підходить. Tezcode підключає та налаштовує обидві (ми не продавець, а інтегратор), тож це не реклама, а правда.",
    },
    intro:
      "Коротко: amoCRM — система, заточена під продажі, проста й швидка в освоєнні. Bitrix24 — ширша платформа, де CRM, керування проєктами, корпоративний портал і телефонія в одному місці, є й безкоштовний тариф. Правильний вибір залежить від розміру та мети вашого бізнесу — докладніше нижче.",
    tableTitle: "Порівняння пліч-о-пліч",
    tableHead: { feature: "Характеристика", a: "amoCRM", b: "Bitrix24" },
    rows: [
      { feature: "Ціна (від)", a: "~$15/користувач/міс", b: "Безкоштовно (до 12 користувачів), далі ~$19/користувач/міс" },
      { feature: "Основний фокус", a: "Чисті продажі та воронка лідів", b: "Усе: CRM + проєкти + портал + документи" },
      { feature: "Складність", a: "Простий, швидко освоюється", b: "Ширший, освоєння займає більше часу" },
      { feature: "Безкоштовний тариф", a: "Немає (лише пробний)", b: "Так — безкоштовно до 12 користувачів" },
      { feature: "Телефонія", a: "Так, підключається", b: "Так, є вбудована" },
      { feature: "Мобільний застосунок", a: "Сильний, зручний продавцям", b: "Є, багатий функціями" },
      { feature: "Інтеграція месенджерів", a: "Telegram, Instagram, WhatsApp", b: "Telegram, Instagram, WhatsApp" },
      { feature: "Керування проєктами/задачами", a: "Обмежене", b: "Сильне (Kanban, Гантт)" },
      { feature: "Кому найбільше підходить", a: "Відділи продажів, малий–середній бізнес", b: "Велика команда, компанія з відділами" },
    ],
    verdictTitle: "Висновок — що обрати?",
    verdicts: [
      { name: "Обирайте amoCRM, якщо", when: "ваша головна мета — продажі", desc: "Якщо на першому місці — воронка продажів, швидка робота з лідами та простий інтерфейс. Продавці починають працювати одразу, з мінімальним навчанням. Ідеально для малих і середніх відділів продажів." },
      { name: "Обирайте Bitrix24, якщо", when: "хочете все в одній системі", desc: "Якщо крім CRM потрібні керування проєктами, внутрішній портал, документи та задачі — або бюджет обмежений і ви хочете почати з безкоштовного тарифу. Сильніший для великих команд із кількома відділами." },
    ],
    faq: {
      badge: "Часті запитання",
      title: "amoCRM та Bitrix24 —",
      titleAccent: "запитання та відповіді",
      subtitle: "Часті запитання при виборі CRM.",
      items: [
        { q: "amoCRM чи Bitrix24 — що краще?", a: "Універсального «краще» немає — залежить від вашого бізнесу. amoCRM заточений під продажі, простий і швидко освоюється — для відділів продажів. Bitrix24 ширший (CRM + проєкти + портал + телефонія) і має безкоштовний тариф — для великих команд із відділами. Якщо головна мета продажі — amoCRM; якщо потрібно все в одній системі — Bitrix24." },
        { q: "Яку CRM частіше використовують в Узбекистані?", a: "У Ташкенті поширені обидві — amoCRM та Bitrix24. Bitrix24 завдяки безкоштовному тарифу часто зустрічається в малому бізнесі, amoCRM популярний у командах, орієнтованих на продажі. Обидві працюють узбецькою та російською і підключаються до місцевої телефонії." },
        { q: "Скільки коштують amoCRM та Bitrix24?", a: "amoCRM — від ~$15/користувач/міс (безкоштовного тарифу немає, лише пробний). У Bitrix24 є безкоштовний тариф до 12 користувачів, далі від ~$19/користувач/міс. Точна ціна залежить від кількості користувачів і тарифу. Ліцензію завжди оплачує клієнт — Tezcode робить лише підключення та налаштування (від $700)." },
        { q: "Обидві працюють узбецькою та російською?", a: "Так, і amoCRM, і Bitrix24 повністю російською, а узбецькою — на рівні інтерфейсу та робочих процесів. Листування з клієнтами (Telegram, Instagram) може бути будь-якою мовою. Tezcode налаштовує обидві під ваші узбецькі/російські процеси." },
        { q: "У якій із них є телефонія?", a: "В обох. У Bitrix24 є вбудована телефонія, amoCRM підключається до зовнішньої IP-телефонії (SIP). В обох Tezcode налаштовує запис дзвінків, автовідкриття картки та створення задачі з пропущеного дзвінка." },
        { q: "Як зрозуміти, яка потрібна саме мені?", a: "На безкоштовній 30-хвилинній консультації ми дивимося ваш бізнес і кажемо, яка CRM підходить саме вам — виходячи з ваших потреб, а не інтересу продавця. Tezcode підключає та налаштовує обидві, тож наша рекомендація чесна." },
        { q: "Хто підключить amoCRM або Bitrix24 в Ташкенті?", a: "Tezcode — AI Software Factory у Ташкенті та резидент IT Park — підключає amoCRM та Bitrix24 (а також HubSpot, 1C, Sales Doctor) до Telegram, Instagram, WhatsApp, сайту та телефонії, налаштовує воронку й переносить стару базу. Ціна від $700." },
      ],
    },
    cta: {
      badge: "Наступний крок",
      title: "Що б ви не обрали —",
      titleAccent: "Tezcode підключить і налаштує",
      subtitle: "amoCRM чи Bitrix24 — ми підключимо до ваших каналів, налаштуємо воронку й перенесемо базу. Від $700. На безкоштовній консультації підкажемо, яка підходить саме вам.",
      button: "Про інтеграцію CRM",
      note: "Або напишіть прямо в Telegram — зв'яжетеся напряму з Бекзодом.",
    },
    article: {
      headline: "amoCRM чи Bitrix24: яку CRM обрати у 2026 році (Ташкент, Узбекистан)",
      description: "Чесне порівняння amoCRM та Bitrix24 за ціною, можливостями й тим, кому що підходить. Tezcode — інтегратор, що підключає обидві CRM, Ташкент.",
    },
  },
};
