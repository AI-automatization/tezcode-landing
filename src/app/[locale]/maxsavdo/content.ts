// Lighter product page for MaxSavdo — a TezCode Labs venture (Free Beta).
// Introduces the product on tezcode.dev and links out to maxsavdo.uz.
export type MaxSavdoLang = "uz" | "ru" | "en" | "ar" | "uk";

export type MaxSavdoFeature = { icon: string; title: string; desc: string };
export type MaxSavdoStep = { num: string; title: string; desc: string };
export type MaxSavdoFaqItem = { q: string; a: string };

export type MaxSavdoCopy = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
    ctaNote: string;
    statusLabel: string;
  };
  features: { badge: string; title: string; titleAccent: string; items: MaxSavdoFeature[] };
  steps: { badge: string; title: string; titleAccent: string; items: MaxSavdoStep[] };
  faq: { badge: string; title: string; titleAccent: string; subtitle: string; items: MaxSavdoFaqItem[] };
  ctaBlock: { title: string; subtitle: string; button: string };
};

export const MAXSAVDO_URL = "https://maxsavdo.uz";

export const MAXSAVDO_CONTENT: Record<MaxSavdoLang, MaxSavdoCopy> = {
  uz: {
    meta: {
      title: "MaxSavdo — Telegram'da 5 daqiqada do'kon va checkout",
      description:
        "MaxSavdo — Telegram'ga o'rnatilgan do'kon va checkout platformasi. Telegram Mini App do'kon, sotuvchi kabineti (tovar, buyurtma, analitika) va real-time xaridor↔sotuvchi chat. Tezcode Labs mahsuloti.",
      ogTitle: "MaxSavdo — Telegram'da do'kon ochish | Tezcode",
      ogDescription:
        "Telegram'da 5 daqiqada do'kon oching: tovar, buyurtma, to'lov va chat — bitta joyda. Free Beta.",
    },
    hero: {
      badge: "E-commerce · Telegram",
      title: "MaxSavdo —",
      titleAccent: "Telegram'da do'kon ochish",
      subtitle:
        "5 daqiqada Telegram'da do'kon oching. Tovar joylang, buyurtma qabul qiling, xaridor bilan yozishing — DM-savdo bilan yirik marketpleys o'rtasidagi bo'shliqni to'ldiradi.",
      cta: "maxsavdo.uz saytiga o'tish",
      ctaNote: "Free Beta · Komissiyasiz · O'zbek va rus tilida",
      statusLabel: "Beta",
    },
    features: {
      badge: "Imkoniyatlar",
      title: "MaxSavdo",
      titleAccent: "nima beradi?",
      items: [
        { icon: "store", title: "Telegram Mini App do'kon", desc: "To'liq do'kon Telegram ichida ochiladi — xaridor ilovadan chiqmasdan tovarlarni ko'radi va buyurtma beradi." },
        { icon: "package", title: "Sotuvchi kabineti", desc: "Tovar, buyurtma va omborni bitta paneldan boshqaring. Web xaridor versiyasi va admin panel ham bor." },
        { icon: "message-circle", title: "Xaridor↔sotuvchi chat", desc: "Real-time chat — xaridor savol beradi, siz javob berasiz, buyurtma yo'qolmaydi." },
        { icon: "bar-chart-2", title: "Analitika", desc: "Sotuvlar, buyurtmalar va mijozlar bo'yicha statistika — biznesingizni raqamlar bilan ko'rasiz." },
      ],
    },
    steps: {
      badge: "Qanday ishlaydi",
      title: "3 qadamda",
      titleAccent: "Telegram do'koni",
      items: [
        { num: "01", title: "Do'kon oching", desc: "Ro'yxatdan o'ting va do'koningizni yarating — 5 daqiqa, texnik bilim shart emas." },
        { num: "02", title: "Tovar joylang", desc: "Mahsulotlar, narx va rasmlarni qo'shing — do'koningiz darhol tayyor." },
        { num: "03", title: "Sota boshlang", desc: "Havolani ulashing — xaridorlar Telegram'da ko'radi, buyurtma beradi, siz chat orqali yakunlaysiz." },
      ],
    },
    faq: {
      badge: "Savol-javob",
      title: "MaxSavdo haqida",
      titleAccent: "savol-javob",
      subtitle: "Eng ko'p so'raladigan savollarga qisqa javoblar.",
      items: [
        { q: "MaxSavdo nima?", a: "MaxSavdo — Telegram'ga o'rnatilgan do'kon va checkout platformasi. O'zbekistondagi kichik sotuvchilar Telegram'da 5 daqiqada do'kon ochib, tovar joylaydi, buyurtma qabul qiladi va xaridor bilan yozishadi. Tezcode Labs mahsuloti, sayti: maxsavdo.uz." },
        { q: "Telegram do'koni oddiy kanaldan nimasi bilan farq qiladi?", a: "Kanalda tovar tarqoq, buyurtma DM'da adashadi. MaxSavdo'da to'liq do'kon (katalog, savat, buyurtma, to'lov) Telegram Mini App ichida ishlaydi, sotuvchi kabineti esa hamma buyurtma va mijozni bir joyda saqlaydi." },
        { q: "MaxSavdo qancha turadi?", a: "Hozir MaxSavdo Free Beta bosqichida — bepul. O'zbek va rus tillarida ishlaydi. Boshlash uchun maxsavdo.uz saytiga kiring." },
        { q: "Kimlar uchun mos?", a: "Instagram/Telegram orqali DM-savdo qiladigan kichik sotuvchilar uchun: kiyim, kosmetika, aksessuar, oziq-ovqat va boshqalar. Yirik marketpleysga o'tishga tayyor bo'lmagan, lekin tartibli do'kon xohlaganlar uchun." },
      ],
    },
    ctaBlock: {
      title: "Telegram'da do'koningizni oching",
      subtitle: "MaxSavdo hozir Free Beta — bepul. maxsavdo.uz'da 5 daqiqada boshlang.",
      button: "maxsavdo.uz'ga o'tish",
    },
  },
  ru: {
    meta: {
      title: "MaxSavdo — магазин в Telegram за 5 минут с checkout",
      description:
        "MaxSavdo — платформа магазина и checkout, встроенная в Telegram. Telegram Mini App магазин, кабинет продавца (товары, заказы, аналитика) и real-time чат покупатель↔продавец. Продукт Tezcode Labs.",
      ogTitle: "MaxSavdo — открыть магазин в Telegram | Tezcode",
      ogDescription:
        "Откройте магазин в Telegram за 5 минут: товары, заказы, оплата и чат — в одном месте. Free Beta.",
    },
    hero: {
      badge: "E-commerce · Telegram",
      title: "MaxSavdo —",
      titleAccent: "магазин в Telegram",
      subtitle:
        "Откройте магазин в Telegram за 5 минут. Размещайте товары, принимайте заказы, общайтесь с покупателем — закрывает разрыв между DM-продажами и крупным маркетплейсом.",
      cta: "Перейти на maxsavdo.uz",
      ctaNote: "Free Beta · Без комиссии · На узбекском и русском",
      statusLabel: "Beta",
    },
    features: {
      badge: "Возможности",
      title: "Что даёт",
      titleAccent: "MaxSavdo?",
      items: [
        { icon: "store", title: "Магазин в Telegram Mini App", desc: "Полноценный магазин открывается внутри Telegram — покупатель смотрит товары и оформляет заказ, не выходя из приложения." },
        { icon: "package", title: "Кабинет продавца", desc: "Управляйте товарами, заказами и складом из одной панели. Есть веб-версия для покупателя и админ-панель." },
        { icon: "message-circle", title: "Чат покупатель↔продавец", desc: "Real-time чат — покупатель спрашивает, вы отвечаете, заказ не теряется." },
        { icon: "bar-chart-2", title: "Аналитика", desc: "Статистика по продажам, заказам и клиентам — вы видите бизнес в цифрах." },
      ],
    },
    steps: {
      badge: "Как это работает",
      title: "3 шага до",
      titleAccent: "магазина в Telegram",
      items: [
        { num: "01", title: "Откройте магазин", desc: "Зарегистрируйтесь и создайте магазин — 5 минут, без технических знаний." },
        { num: "02", title: "Добавьте товары", desc: "Добавьте товары, цены и фото — магазин сразу готов." },
        { num: "03", title: "Начните продавать", desc: "Поделитесь ссылкой — покупатели смотрят в Telegram, оформляют заказ, вы завершаете через чат." },
      ],
    },
    faq: {
      badge: "Вопросы и ответы",
      title: "О MaxSavdo —",
      titleAccent: "вопросы и ответы",
      subtitle: "Короткие ответы на частые вопросы.",
      items: [
        { q: "Что такое MaxSavdo?", a: "MaxSavdo — платформа магазина и checkout, встроенная в Telegram. Мелкие продавцы в Узбекистане за 5 минут открывают магазин в Telegram, размещают товары, принимают заказы и общаются с покупателем. Продукт Tezcode Labs, сайт: maxsavdo.uz." },
        { q: "Чем магазин в Telegram отличается от обычного канала?", a: "В канале товары разрознены, заказы теряются в DM. В MaxSavdo полноценный магазин (каталог, корзина, заказ, оплата) работает внутри Telegram Mini App, а кабинет продавца хранит все заказы и клиентов в одном месте." },
        { q: "Сколько стоит MaxSavdo?", a: "Сейчас MaxSavdo на этапе Free Beta — бесплатно. Работает на узбекском и русском. Чтобы начать, зайдите на maxsavdo.uz." },
        { q: "Кому подходит?", a: "Мелким продавцам, которые продают через DM в Instagram/Telegram: одежда, косметика, аксессуары, продукты и другое. Тем, кто ещё не готов к крупному маркетплейсу, но хочет упорядоченный магазин." },
      ],
    },
    ctaBlock: {
      title: "Откройте свой магазин в Telegram",
      subtitle: "MaxSavdo сейчас Free Beta — бесплатно. Начните за 5 минут на maxsavdo.uz.",
      button: "Перейти на maxsavdo.uz",
    },
  },
  en: {
    meta: {
      title: "MaxSavdo — a Telegram store with checkout in 5 minutes",
      description:
        "MaxSavdo is a store & checkout platform built into Telegram. A Telegram Mini App storefront, a seller cabinet (products, orders, analytics) and a real-time buyer↔seller chat. A Tezcode Labs product.",
      ogTitle: "MaxSavdo — open a store in Telegram | Tezcode",
      ogDescription:
        "Open a store in Telegram in 5 minutes: products, orders, payments and chat — in one place. Free Beta.",
    },
    hero: {
      badge: "E-commerce · Telegram",
      title: "MaxSavdo —",
      titleAccent: "a store in Telegram",
      subtitle:
        "Open a store in Telegram in 5 minutes. List products, take orders, chat with the buyer — it closes the gap between DM-selling and a big marketplace.",
      cta: "Go to maxsavdo.uz",
      ctaNote: "Free Beta · No commission · In Uzbek and Russian",
      statusLabel: "Beta",
    },
    features: {
      badge: "Features",
      title: "What does",
      titleAccent: "MaxSavdo give?",
      items: [
        { icon: "store", title: "Telegram Mini App storefront", desc: "A full store opens inside Telegram — the buyer browses products and places an order without leaving the app." },
        { icon: "package", title: "Seller cabinet", desc: "Manage products, orders and stock from one panel. There's a web buyer version and an admin panel too." },
        { icon: "message-circle", title: "Buyer↔seller chat", desc: "Real-time chat — the buyer asks, you answer, and no order gets lost." },
        { icon: "bar-chart-2", title: "Analytics", desc: "Stats on sales, orders and customers — you see your business in numbers." },
      ],
    },
    steps: {
      badge: "How it works",
      title: "3 steps to",
      titleAccent: "a Telegram store",
      items: [
        { num: "01", title: "Open a store", desc: "Sign up and create your store — 5 minutes, no technical skills needed." },
        { num: "02", title: "Add products", desc: "Add products, prices and photos — your store is ready right away." },
        { num: "03", title: "Start selling", desc: "Share the link — buyers browse in Telegram, place orders, and you close via chat." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "About MaxSavdo —",
      titleAccent: "questions & answers",
      subtitle: "Short answers to the most common questions.",
      items: [
        { q: "What is MaxSavdo?", a: "MaxSavdo is a store & checkout platform built into Telegram. Small sellers in Uzbekistan open a store in Telegram in 5 minutes, list products, take orders and chat with the buyer. A Tezcode Labs product, site: maxsavdo.uz." },
        { q: "How is a Telegram store different from a regular channel?", a: "In a channel products are scattered and orders get lost in DMs. In MaxSavdo a full store (catalogue, cart, order, payment) runs inside a Telegram Mini App, and the seller cabinet keeps every order and customer in one place." },
        { q: "How much does MaxSavdo cost?", a: "MaxSavdo is currently in Free Beta — free. It works in Uzbek and Russian. To start, go to maxsavdo.uz." },
        { q: "Who is it for?", a: "Small sellers who sell via DMs on Instagram/Telegram: clothing, cosmetics, accessories, food and more. For those not yet ready for a big marketplace but who want an organized store." },
      ],
    },
    ctaBlock: {
      title: "Open your store in Telegram",
      subtitle: "MaxSavdo is currently Free Beta — free. Start in 5 minutes on maxsavdo.uz.",
      button: "Go to maxsavdo.uz",
    },
  },
  ar: {
    meta: {
      title: "MaxSavdo — متجر في تيليجرام خلال 5 دقائق مع checkout",
      description:
        "MaxSavdo منصّة متجر ودفع مدمجة في تيليجرام. واجهة متجر Telegram Mini App، لوحة بائع (منتجات، طلبات، تحليلات) ودردشة فورية بين المشتري والبائع. منتج من Tezcode Labs.",
      ogTitle: "MaxSavdo — افتح متجرًا في تيليجرام | Tezcode",
      ogDescription:
        "افتح متجرًا في تيليجرام خلال 5 دقائق: منتجات وطلبات ودفع ودردشة — في مكان واحد. نسخة تجريبية مجانية.",
    },
    hero: {
      badge: "تجارة إلكترونية · تيليجرام",
      title: "MaxSavdo —",
      titleAccent: "متجر في تيليجرام",
      subtitle:
        "افتح متجرًا في تيليجرام خلال 5 دقائق. اعرض المنتجات، استقبل الطلبات، وتحدّث مع المشتري — يسدّ الفجوة بين البيع عبر الرسائل والأسواق الكبيرة.",
      cta: "الانتقال إلى maxsavdo.uz",
      ctaNote: "نسخة تجريبية مجانية · بدون عمولة · بالأوزبكية والروسية",
      statusLabel: "Beta",
    },
    features: {
      badge: "الإمكانيات",
      title: "ماذا يقدّم",
      titleAccent: "MaxSavdo؟",
      items: [
        { icon: "store", title: "متجر Telegram Mini App", desc: "يفتح متجر كامل داخل تيليجرام — يتصفّح المشتري المنتجات ويقدّم الطلب دون مغادرة التطبيق." },
        { icon: "package", title: "لوحة البائع", desc: "أدر المنتجات والطلبات والمخزون من لوحة واحدة. توجد أيضًا نسخة ويب للمشتري ولوحة إدارة." },
        { icon: "message-circle", title: "دردشة المشتري والبائع", desc: "دردشة فورية — يسأل المشتري وتجيب أنت، ولا يضيع أي طلب." },
        { icon: "bar-chart-2", title: "التحليلات", desc: "إحصاءات عن المبيعات والطلبات والعملاء — ترى عملك بالأرقام." },
      ],
    },
    steps: {
      badge: "كيف يعمل",
      title: "3 خطوات إلى",
      titleAccent: "متجر تيليجرام",
      items: [
        { num: "01", title: "افتح متجرًا", desc: "سجّل وأنشئ متجرك — 5 دقائق، دون معرفة تقنية." },
        { num: "02", title: "أضف المنتجات", desc: "أضف المنتجات والأسعار والصور — متجرك جاهز فورًا." },
        { num: "03", title: "ابدأ البيع", desc: "شارك الرابط — يتصفّح المشترون في تيليجرام ويقدّمون الطلبات، وتُنهيها عبر الدردشة." },
      ],
    },
    faq: {
      badge: "الأسئلة الشائعة",
      title: "عن MaxSavdo —",
      titleAccent: "أسئلة وأجوبة",
      subtitle: "إجابات موجزة عن أكثر الأسئلة شيوعًا.",
      items: [
        { q: "ما هو MaxSavdo؟", a: "MaxSavdo منصّة متجر ودفع مدمجة في تيليجرام. يفتح صغار البائعين في أوزبكستان متجرًا في تيليجرام خلال 5 دقائق، ويعرضون المنتجات ويستقبلون الطلبات ويتحدثون مع المشتري. منتج من Tezcode Labs، الموقع: maxsavdo.uz." },
        { q: "بمَ يختلف متجر تيليجرام عن قناة عادية؟", a: "في القناة تكون المنتجات مبعثرة وتضيع الطلبات في الرسائل. في MaxSavdo يعمل متجر كامل (كتالوج، سلة، طلب، دفع) داخل Telegram Mini App، وتحفظ لوحة البائع كل الطلبات والعملاء في مكان واحد." },
        { q: "كم تكلفة MaxSavdo؟", a: "MaxSavdo حاليًا في نسخة تجريبية مجانية (Free Beta) — مجانًا. يعمل بالأوزبكية والروسية. للبدء، انتقل إلى maxsavdo.uz." },
        { q: "لمن هو مناسب؟", a: "لصغار البائعين الذين يبيعون عبر الرسائل في إنستغرام/تيليجرام: ملابس ومستحضرات تجميل وإكسسوارات وأطعمة وغيرها. لمن لم يستعدّوا بعد لسوق كبير لكنهم يريدون متجرًا منظّمًا." },
      ],
    },
    ctaBlock: {
      title: "افتح متجرك في تيليجرام",
      subtitle: "MaxSavdo حاليًا نسخة تجريبية مجانية — مجانًا. ابدأ خلال 5 دقائق على maxsavdo.uz.",
      button: "الانتقال إلى maxsavdo.uz",
    },
  },
  uk: {
    meta: {
      title: "MaxSavdo — магазин у Telegram за 5 хвилин із checkout",
      description:
        "MaxSavdo — платформа магазину та checkout, вбудована в Telegram. Магазин Telegram Mini App, кабінет продавця (товари, замовлення, аналітика) і real-time чат покупець↔продавець. Продукт Tezcode Labs.",
      ogTitle: "MaxSavdo — відкрити магазин у Telegram | Tezcode",
      ogDescription:
        "Відкрийте магазин у Telegram за 5 хвилин: товари, замовлення, оплата і чат — в одному місці. Free Beta.",
    },
    hero: {
      badge: "E-commerce · Telegram",
      title: "MaxSavdo —",
      titleAccent: "магазин у Telegram",
      subtitle:
        "Відкрийте магазин у Telegram за 5 хвилин. Розміщуйте товари, приймайте замовлення, спілкуйтеся з покупцем — закриває розрив між DM-продажами і великим маркетплейсом.",
      cta: "Перейти на maxsavdo.uz",
      ctaNote: "Free Beta · Без комісії · Узбецькою та російською",
      statusLabel: "Beta",
    },
    features: {
      badge: "Можливості",
      title: "Що дає",
      titleAccent: "MaxSavdo?",
      items: [
        { icon: "store", title: "Магазин у Telegram Mini App", desc: "Повноцінний магазин відкривається всередині Telegram — покупець переглядає товари й оформлює замовлення, не виходячи з застосунку." },
        { icon: "package", title: "Кабінет продавця", desc: "Керуйте товарами, замовленнями і складом з однієї панелі. Є веб-версія для покупця й адмін-панель." },
        { icon: "message-circle", title: "Чат покупець↔продавець", desc: "Real-time чат — покупець запитує, ви відповідаєте, і замовлення не губиться." },
        { icon: "bar-chart-2", title: "Аналітика", desc: "Статистика з продажів, замовлень і клієнтів — ви бачите бізнес у цифрах." },
      ],
    },
    steps: {
      badge: "Як це працює",
      title: "3 кроки до",
      titleAccent: "магазину в Telegram",
      items: [
        { num: "01", title: "Відкрийте магазин", desc: "Зареєструйтеся і створіть магазин — 5 хвилин, без технічних знань." },
        { num: "02", title: "Додайте товари", desc: "Додайте товари, ціни й фото — магазин одразу готовий." },
        { num: "03", title: "Почніть продавати", desc: "Поділіться посиланням — покупці переглядають у Telegram, оформлюють замовлення, ви завершуєте через чат." },
      ],
    },
    faq: {
      badge: "Питання та відповіді",
      title: "Про MaxSavdo —",
      titleAccent: "запитання та відповіді",
      subtitle: "Короткі відповіді на часті запитання.",
      items: [
        { q: "Що таке MaxSavdo?", a: "MaxSavdo — платформа магазину та checkout, вбудована в Telegram. Дрібні продавці в Узбекистані за 5 хвилин відкривають магазин у Telegram, розміщують товари, приймають замовлення і спілкуються з покупцем. Продукт Tezcode Labs, сайт: maxsavdo.uz." },
        { q: "Чим магазин у Telegram відрізняється від звичайного каналу?", a: "У каналі товари розрізнені, замовлення губляться в DM. У MaxSavdo повноцінний магазин (каталог, кошик, замовлення, оплата) працює всередині Telegram Mini App, а кабінет продавця зберігає всі замовлення і клієнтів в одному місці." },
        { q: "Скільки коштує MaxSavdo?", a: "Зараз MaxSavdo на етапі Free Beta — безкоштовно. Працює узбецькою та російською. Щоб почати, зайдіть на maxsavdo.uz." },
        { q: "Кому підходить?", a: "Дрібним продавцям, які продають через DM в Instagram/Telegram: одяг, косметика, аксесуари, продукти та інше. Тим, хто ще не готовий до великого маркетплейсу, але хоче впорядкований магазин." },
      ],
    },
    ctaBlock: {
      title: "Відкрийте свій магазин у Telegram",
      subtitle: "MaxSavdo зараз Free Beta — безкоштовно. Почніть за 5 хвилин на maxsavdo.uz.",
      button: "Перейти на maxsavdo.uz",
    },
  },
};
