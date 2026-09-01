// Lighter product page for TezDetal — a TezCode Labs venture (Live).
// Introduces the product on tezcode.dev and links out to tezdetal.uz.
export type TezDetalLang = "uz" | "ru" | "en" | "ar" | "uk";

export type TezDetalFeature = { icon: string; title: string; desc: string };
export type TezDetalStep = { num: string; title: string; desc: string };
export type TezDetalFaqItem = { q: string; a: string };

export type TezDetalCopy = {
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
  features: { badge: string; title: string; titleAccent: string; items: TezDetalFeature[] };
  steps: { badge: string; title: string; titleAccent: string; items: TezDetalStep[] };
  faq: { badge: string; title: string; titleAccent: string; subtitle: string; items: TezDetalFaqItem[] };
  ctaBlock: { title: string; subtitle: string; button: string };
};

export const TEZDETAL_URL = "https://tezdetal.uz";

export const TEZDETAL_CONTENT: Record<TezDetalLang, TezDetalCopy> = {
  uz: {
    meta: {
      title: "TezDetal — avto ehtiyot qismlar onlayn bozori",
      description:
        "TezDetal — O'zbekistondagi avto ehtiyot qismlar onlayn bozori. Yuzlab do'kon, minglab tovar bitta platformada: model, yil va OEM kod bo'yicha aniq qidiruv, original va analog qismlar, butun O'zbekiston bo'ylab yetkazib berish. Tezcode Labs mahsuloti.",
      ogTitle: "TezDetal — avtozapchast onlayn bozori | Tezcode",
      ogDescription:
        "Avto ehtiyot qismni model va OEM kod bo'yicha toping, xavfsiz to'lang, tez yetkazib olishing. Nexia, Malibu, Lacetti, Kia va boshqalar.",
    },
    hero: {
      badge: "Marketpleys · Avto ehtiyot qism",
      title: "TezDetal —",
      titleAccent: "avto ehtiyot qismlar bozori",
      subtitle:
        "O'zbekistondagi avto ehtiyot qismlar onlayn bozori. Yuzlab do'kon va minglab tovar bitta joyda — kerakli qismni model, yil yoki OEM kod bo'yicha toping, xavfsiz to'lang va tez yetkazib oling.",
      cta: "tezdetal.uz saytiga o'tish",
      ctaNote: "Butun O'zbekiston bo'ylab · Original va analog · O'zbek va rus tilida",
      statusLabel: "Live",
    },
    features: {
      badge: "Imkoniyatlar",
      title: "TezDetal",
      titleAccent: "nima beradi?",
      items: [
        { icon: "search", title: "Aniq qidiruv", desc: "Ehtiyot qismni avtomobil modeli, yili, dvigateli yoki OEM kodi bo'yicha filtrlang — mos keladiganini aniq toping." },
        { icon: "package", title: "Original va analog", desc: "Nexia, Malibu, Cobalt, Lacetti, Matiz, Spark, Gentra, Damas, Kia, Hyundai, Chery, BYD uchun original va analog qismlar bir joyda." },
        { icon: "truck", title: "Tez yetkazish", desc: "Butun O'zbekiston bo'ylab: Toshkent, Samarqand, Farg'ona, Andijon, Namangan, Buxoro va boshqa shaharlarga yetkazib beramiz." },
        { icon: "shield-check", title: "Xavfsiz xarid", desc: "Xavfsiz to'lov va 14 kunlik qaytarish kafolati — qism mos kelmasa yoki yoqmasa, muammosiz qaytarasiz." },
      ],
    },
    steps: {
      badge: "Qanday ishlaydi",
      title: "3 qadamda",
      titleAccent: "kerakli qism",
      items: [
        { num: "01", title: "Qismni toping", desc: "Model, yil yoki OEM kodni kiriting — TezDetal mos keladigan qismlarni ko'rsatadi." },
        { num: "02", title: "Solishtiring va tanlang", desc: "Original va analoglarni narx bo'yicha solishtiring, kerakli do'kondan buyurtma bering." },
        { num: "03", title: "To'lang va oling", desc: "Xavfsiz to'lang — qismni shahringizga tez yetkazib beramiz, mos kelmasa qaytarasiz." },
      ],
    },
    faq: {
      badge: "Savol-javob",
      title: "TezDetal haqida",
      titleAccent: "savol-javob",
      subtitle: "Eng ko'p so'raladigan savollarga qisqa javoblar.",
      items: [
        { q: "TezDetal nima?", a: "TezDetal — O'zbekistondagi avto ehtiyot qismlar onlayn bozori. Yuzlab do'kon va minglab tovar bitta platformada to'plangan: kerakli qismni model, yil yoki OEM kod bo'yicha topib, xavfsiz to'lab, uyingizga yetkazib olishing mumkin. Tezcode Labs mahsuloti, sayti: tezdetal.uz." },
        { q: "Original va analog qism farqi nima?", a: "Original qism ishlab chiqaruvchi zavod tomonidan chiqarilgan, analog esa boshqa ishonchli brend tomonidan bir xil o'lcham va vazifada tayyorlanadi. Analog odatda arzonroq. TezDetal'da ikkalasi ham ko'rsatiladi, narx va sifatni solishtirib tanlaysiz." },
        { q: "Yetkazib berish qancha vaqt oladi?", a: "TezDetal butun O'zbekiston bo'ylab yetkazib beradi — Toshkent, Samarqand, Farg'ona, Andijon, Namangan, Buxoro va boshqa shaharlarga. Muddat do'kon va shaharga bog'liq, aksariyat buyurtmalar bir necha kun ichida yetib boradi." },
        { q: "Qismni qaytarish mumkinmi?", a: "Ha. To'lov xavfsiz, qism esa 14 kunlik qaytarish kafolati bilan keladi — agar mos kelmasa yoki nuqsonli bo'lsa, muammosiz qaytarasiz. Boshlash uchun tezdetal.uz saytiga kiring." },
      ],
    },
    ctaBlock: {
      title: "Kerakli ehtiyot qismni toping",
      subtitle: "TezDetal — avto ehtiyot qismlar bozori. tezdetal.uz'da model yoki OEM kod bo'yicha qidirib boshlang.",
      button: "tezdetal.uz'ga o'tish",
    },
  },
  ru: {
    meta: {
      title: "TezDetal — онлайн-рынок автозапчастей в Узбекистане",
      description:
        "TezDetal — онлайн-рынок автозапчастей в Узбекистане. Сотни магазинов и тысячи товаров на одной платформе: точный поиск по модели, году и OEM-коду, оригинальные и аналоговые детали, доставка по всему Узбекистану. Продукт Tezcode Labs.",
      ogTitle: "TezDetal — маркетплейс автозапчастей | Tezcode",
      ogDescription:
        "Найдите деталь по модели и OEM-коду, оплатите безопасно и получите быстро. Nexia, Malibu, Lacetti, Kia и другие.",
    },
    hero: {
      badge: "Маркетплейс · Автозапчасти",
      title: "TezDetal —",
      titleAccent: "маркетплейс автозапчастей",
      subtitle:
        "Онлайн-рынок автозапчастей в Узбекистане. Сотни магазинов и тысячи товаров в одном месте — найдите нужную деталь по модели, году или OEM-коду, оплатите безопасно и получите быстро.",
      cta: "Перейти на tezdetal.uz",
      ctaNote: "По всему Узбекистану · Оригинал и аналог · На узбекском и русском",
      statusLabel: "Работает",
    },
    features: {
      badge: "Возможности",
      title: "Что даёт",
      titleAccent: "TezDetal?",
      items: [
        { icon: "search", title: "Точный поиск", desc: "Фильтруйте деталь по модели авто, году, двигателю или OEM-коду — и находите именно ту, что подходит." },
        { icon: "package", title: "Оригинал и аналог", desc: "Оригинальные и аналоговые детали для Nexia, Malibu, Cobalt, Lacetti, Matiz, Spark, Gentra, Damas, Kia, Hyundai, Chery, BYD в одном месте." },
        { icon: "truck", title: "Быстрая доставка", desc: "По всему Узбекистану: Ташкент, Самарканд, Фергана, Андижан, Наманган, Бухара и другие города." },
        { icon: "shield-check", title: "Безопасная покупка", desc: "Безопасная оплата и гарантия возврата 14 дней — если деталь не подошла, вернёте без проблем." },
      ],
    },
    steps: {
      badge: "Как это работает",
      title: "3 шага до",
      titleAccent: "нужной детали",
      items: [
        { num: "01", title: "Найдите деталь", desc: "Введите модель, год или OEM-код — TezDetal покажет подходящие детали." },
        { num: "02", title: "Сравните и выберите", desc: "Сравните оригинал и аналоги по цене, закажите в нужном магазине." },
        { num: "03", title: "Оплатите и получите", desc: "Оплатите безопасно — деталь быстро привезём в ваш город, не подойдёт — вернёте." },
      ],
    },
    faq: {
      badge: "Вопросы и ответы",
      title: "О TezDetal —",
      titleAccent: "вопросы и ответы",
      subtitle: "Короткие ответы на частые вопросы.",
      items: [
        { q: "Что такое TezDetal?", a: "TezDetal — онлайн-рынок автозапчастей в Узбекистане. Сотни магазинов и тысячи товаров собраны на одной платформе: нужную деталь можно найти по модели, году или OEM-коду, оплатить безопасно и получить с доставкой. Продукт Tezcode Labs, сайт: tezdetal.uz." },
        { q: "Чем отличается оригинал от аналога?", a: "Оригинальная деталь выпущена заводом-производителем, а аналог — другим надёжным брендом в том же размере и назначении, обычно дешевле. На TezDetal показаны оба варианта, и вы выбираете, сравнив цену и качество." },
        { q: "Сколько занимает доставка?", a: "TezDetal доставляет по всему Узбекистану — в Ташкент, Самарканд, Фергану, Андижан, Наманган, Бухару и другие города. Срок зависит от магазина и города, большинство заказов приходит за несколько дней." },
        { q: "Можно ли вернуть деталь?", a: "Да. Оплата безопасна, а деталь идёт с гарантией возврата 14 дней — если она не подошла или бракованная, вернёте без проблем. Чтобы начать, зайдите на tezdetal.uz." },
      ],
    },
    ctaBlock: {
      title: "Найдите нужную запчасть",
      subtitle: "TezDetal — маркетплейс автозапчастей. Начните поиск по модели или OEM-коду на tezdetal.uz.",
      button: "Перейти на tezdetal.uz",
    },
  },
  en: {
    meta: {
      title: "TezDetal — an online marketplace for car parts",
      description:
        "TezDetal is an online auto-parts marketplace in Uzbekistan. Hundreds of shops and thousands of items on one platform: precise search by model, year and OEM code, original and aftermarket parts, delivery across Uzbekistan. A Tezcode Labs product.",
      ogTitle: "TezDetal — an auto-parts marketplace | Tezcode",
      ogDescription:
        "Find a part by model and OEM code, pay securely and get it fast. Nexia, Malibu, Lacetti, Kia and more.",
    },
    hero: {
      badge: "Marketplace · Auto parts",
      title: "TezDetal —",
      titleAccent: "an auto-parts marketplace",
      subtitle:
        "An online auto-parts marketplace in Uzbekistan. Hundreds of shops and thousands of items in one place — find the part you need by model, year or OEM code, pay securely and get it fast.",
      cta: "Go to tezdetal.uz",
      ctaNote: "Across Uzbekistan · Original & aftermarket · In Uzbek and Russian",
      statusLabel: "Live",
    },
    features: {
      badge: "Features",
      title: "What does",
      titleAccent: "TezDetal give?",
      items: [
        { icon: "search", title: "Precise search", desc: "Filter a part by car model, year, engine or OEM code — and find exactly the one that fits." },
        { icon: "package", title: "Original & aftermarket", desc: "Original and aftermarket parts for Nexia, Malibu, Cobalt, Lacetti, Matiz, Spark, Gentra, Damas, Kia, Hyundai, Chery, BYD in one place." },
        { icon: "truck", title: "Fast delivery", desc: "Across Uzbekistan: Tashkent, Samarkand, Fergana, Andijan, Namangan, Bukhara and other cities." },
        { icon: "shield-check", title: "Safe purchase", desc: "Secure payment and a 14-day return guarantee — if a part doesn't fit, you return it without hassle." },
      ],
    },
    steps: {
      badge: "How it works",
      title: "3 steps to",
      titleAccent: "the right part",
      items: [
        { num: "01", title: "Find the part", desc: "Enter the model, year or OEM code — TezDetal shows the matching parts." },
        { num: "02", title: "Compare and choose", desc: "Compare original and aftermarket by price, order from the shop you want." },
        { num: "03", title: "Pay and receive", desc: "Pay securely — we deliver the part to your city fast, and you return it if it doesn't fit." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "About TezDetal —",
      titleAccent: "questions & answers",
      subtitle: "Short answers to the most common questions.",
      items: [
        { q: "What is TezDetal?", a: "TezDetal is an online auto-parts marketplace in Uzbekistan. Hundreds of shops and thousands of items are gathered on one platform: you can find the part you need by model, year or OEM code, pay securely and get it delivered. A Tezcode Labs product, site: tezdetal.uz." },
        { q: "What's the difference between original and aftermarket?", a: "An original part is made by the manufacturer's factory, while an aftermarket (analog) part is made by another trusted brand to the same size and purpose, usually cheaper. TezDetal shows both, so you choose after comparing price and quality." },
        { q: "How long does delivery take?", a: "TezDetal delivers across Uzbekistan — to Tashkent, Samarkand, Fergana, Andijan, Namangan, Bukhara and other cities. The time depends on the shop and city; most orders arrive within a few days." },
        { q: "Can I return a part?", a: "Yes. Payment is secure and the part comes with a 14-day return guarantee — if it doesn't fit or is defective, you return it without hassle. To start, go to tezdetal.uz." },
      ],
    },
    ctaBlock: {
      title: "Find the part you need",
      subtitle: "TezDetal is an auto-parts marketplace. Start searching by model or OEM code on tezdetal.uz.",
      button: "Go to tezdetal.uz",
    },
  },
  ar: {
    meta: {
      title: "TezDetal — سوق قطع غيار السيارات عبر الإنترنت",
      description:
        "TezDetal سوق إلكتروني لقطع غيار السيارات في أوزبكستان. مئات المتاجر وآلاف المنتجات على منصّة واحدة: بحث دقيق حسب الطراز والسنة ورمز OEM، قطع أصلية وبديلة، وتوصيل في جميع أنحاء أوزبكستان. منتج من Tezcode Labs.",
      ogTitle: "TezDetal — سوق قطع غيار السيارات | Tezcode",
      ogDescription:
        "ابحث عن القطعة حسب الطراز ورمز OEM، وادفع بأمان واستلمها بسرعة. Nexia وMalibu وLacetti وKia وغيرها.",
    },
    hero: {
      badge: "سوق · قطع غيار السيارات",
      title: "TezDetal —",
      titleAccent: "سوق قطع غيار السيارات",
      subtitle:
        "سوق إلكتروني لقطع غيار السيارات في أوزبكستان. مئات المتاجر وآلاف المنتجات في مكان واحد — ابحث عن القطعة التي تحتاجها حسب الطراز أو السنة أو رمز OEM، وادفع بأمان واستلمها بسرعة.",
      cta: "الانتقال إلى tezdetal.uz",
      ctaNote: "في جميع أنحاء أوزبكستان · أصلي وبديل · بالأوزبكية والروسية",
      statusLabel: "يعمل",
    },
    features: {
      badge: "الإمكانيات",
      title: "ماذا يقدّم",
      titleAccent: "TezDetal؟",
      items: [
        { icon: "search", title: "بحث دقيق", desc: "صفِّ القطعة حسب طراز السيارة أو سنتها أو محرّكها أو رمز OEM — واعثر على القطعة المناسبة تمامًا." },
        { icon: "package", title: "أصلي وبديل", desc: "قطع أصلية وبديلة لسيارات Nexia وMalibu وCobalt وLacetti وMatiz وSpark وGentra وDamas وKia وHyundai وChery وBYD في مكان واحد." },
        { icon: "truck", title: "توصيل سريع", desc: "في جميع أنحاء أوزبكستان: طشقند وسمرقند وفرغانة وأنديجان ونمنغان وبخارى ومدن أخرى." },
        { icon: "shield-check", title: "شراء آمن", desc: "دفع آمن وضمان إرجاع لمدة 14 يومًا — إذا لم تناسبك القطعة، تُرجعها دون عناء." },
      ],
    },
    steps: {
      badge: "كيف يعمل",
      title: "3 خطوات إلى",
      titleAccent: "القطعة المناسبة",
      items: [
        { num: "01", title: "اعثر على القطعة", desc: "أدخل الطراز أو السنة أو رمز OEM — يعرض TezDetal القطع المطابقة." },
        { num: "02", title: "قارن واختر", desc: "قارن الأصلي والبديل حسب السعر، واطلب من المتجر الذي تريده." },
        { num: "03", title: "ادفع واستلم", desc: "ادفع بأمان — نوصّل القطعة إلى مدينتك بسرعة، وتُرجعها إن لم تناسبك." },
      ],
    },
    faq: {
      badge: "الأسئلة الشائعة",
      title: "عن TezDetal —",
      titleAccent: "أسئلة وأجوبة",
      subtitle: "إجابات موجزة عن أكثر الأسئلة شيوعًا.",
      items: [
        { q: "ما هو TezDetal؟", a: "TezDetal سوق إلكتروني لقطع غيار السيارات في أوزبكستان. تجتمع مئات المتاجر وآلاف المنتجات على منصّة واحدة: يمكنك العثور على القطعة التي تحتاجها حسب الطراز أو السنة أو رمز OEM، والدفع بأمان واستلامها بالتوصيل. منتج من Tezcode Labs، الموقع: tezdetal.uz." },
        { q: "ما الفرق بين القطعة الأصلية والبديلة؟", a: "القطعة الأصلية من إنتاج مصنع الصانع، أما البديلة (الأنالوج) فمن إنتاج علامة موثوقة أخرى بالمقاس والوظيفة نفسها، وعادة بسعر أقل. يعرض TezDetal الاثنين لتختار بعد مقارنة السعر والجودة." },
        { q: "كم يستغرق التوصيل؟", a: "يوصّل TezDetal في جميع أنحاء أوزبكستان — إلى طشقند وسمرقند وفرغانة وأنديجان ونمنغان وبخارى ومدن أخرى. تعتمد المدة على المتجر والمدينة، وتصل معظم الطلبات خلال أيام قليلة." },
        { q: "هل يمكن إرجاع القطعة؟", a: "نعم. الدفع آمن والقطعة مشمولة بضمان إرجاع لمدة 14 يومًا — إذا لم تناسبك أو كانت معيبة، تُرجعها دون عناء. للبدء، انتقل إلى tezdetal.uz." },
      ],
    },
    ctaBlock: {
      title: "اعثر على القطعة التي تحتاجها",
      subtitle: "TezDetal سوق قطع غيار السيارات. ابدأ البحث حسب الطراز أو رمز OEM على tezdetal.uz.",
      button: "الانتقال إلى tezdetal.uz",
    },
  },
  uk: {
    meta: {
      title: "TezDetal — онлайн-ринок автозапчастин в Узбекистані",
      description:
        "TezDetal — онлайн-ринок автозапчастин в Узбекистані. Сотні магазинів і тисячі товарів на одній платформі: точний пошук за моделлю, роком і OEM-кодом, оригінальні та аналогові деталі, доставка по всьому Узбекистану. Продукт Tezcode Labs.",
      ogTitle: "TezDetal — маркетплейс автозапчастин | Tezcode",
      ogDescription:
        "Знайдіть деталь за моделлю та OEM-кодом, оплатіть безпечно й отримайте швидко. Nexia, Malibu, Lacetti, Kia та інші.",
    },
    hero: {
      badge: "Маркетплейс · Автозапчастини",
      title: "TezDetal —",
      titleAccent: "маркетплейс автозапчастин",
      subtitle:
        "Онлайн-ринок автозапчастин в Узбекистані. Сотні магазинів і тисячі товарів в одному місці — знайдіть потрібну деталь за моделлю, роком або OEM-кодом, оплатіть безпечно й отримайте швидко.",
      cta: "Перейти на tezdetal.uz",
      ctaNote: "По всьому Узбекистану · Оригінал і аналог · Узбецькою та російською",
      statusLabel: "Працює",
    },
    features: {
      badge: "Можливості",
      title: "Що дає",
      titleAccent: "TezDetal?",
      items: [
        { icon: "search", title: "Точний пошук", desc: "Фільтруйте деталь за моделлю авто, роком, двигуном або OEM-кодом — і знаходьте саме ту, що підходить." },
        { icon: "package", title: "Оригінал і аналог", desc: "Оригінальні та аналогові деталі для Nexia, Malibu, Cobalt, Lacetti, Matiz, Spark, Gentra, Damas, Kia, Hyundai, Chery, BYD в одному місці." },
        { icon: "truck", title: "Швидка доставка", desc: "По всьому Узбекистану: Ташкент, Самарканд, Фергана, Андижан, Наманган, Бухара та інші міста." },
        { icon: "shield-check", title: "Безпечна покупка", desc: "Безпечна оплата і гарантія повернення 14 днів — якщо деталь не підійшла, повернете без проблем." },
      ],
    },
    steps: {
      badge: "Як це працює",
      title: "3 кроки до",
      titleAccent: "потрібної деталі",
      items: [
        { num: "01", title: "Знайдіть деталь", desc: "Введіть модель, рік або OEM-код — TezDetal покаже відповідні деталі." },
        { num: "02", title: "Порівняйте й виберіть", desc: "Порівняйте оригінал та аналоги за ціною, замовте в потрібному магазині." },
        { num: "03", title: "Оплатіть і отримайте", desc: "Оплатіть безпечно — деталь швидко привеземо у ваше місто, не підійде — повернете." },
      ],
    },
    faq: {
      badge: "Питання та відповіді",
      title: "Про TezDetal —",
      titleAccent: "запитання та відповіді",
      subtitle: "Короткі відповіді на часті запитання.",
      items: [
        { q: "Що таке TezDetal?", a: "TezDetal — онлайн-ринок автозапчастин в Узбекистані. Сотні магазинів і тисячі товарів зібрані на одній платформі: потрібну деталь можна знайти за моделлю, роком або OEM-кодом, оплатити безпечно й отримати з доставкою. Продукт Tezcode Labs, сайт: tezdetal.uz." },
        { q: "Чим відрізняється оригінал від аналога?", a: "Оригінальна деталь випущена заводом-виробником, а аналог — іншим надійним брендом того самого розміру й призначення, зазвичай дешевше. На TezDetal показані обидва варіанти, і ви обираєте, порівнявши ціну та якість." },
        { q: "Скільки займає доставка?", a: "TezDetal доставляє по всьому Узбекистану — до Ташкента, Самарканда, Фергани, Андижана, Намангана, Бухари та інших міст. Термін залежить від магазину й міста, більшість замовлень надходить за кілька днів." },
        { q: "Чи можна повернути деталь?", a: "Так. Оплата безпечна, а деталь має гарантію повернення 14 днів — якщо вона не підійшла або бракована, повернете без проблем. Щоб почати, зайдіть на tezdetal.uz." },
      ],
    },
    ctaBlock: {
      title: "Знайдіть потрібну запчастину",
      subtitle: "TezDetal — маркетплейс автозапчастин. Почніть пошук за моделлю або OEM-кодом на tezdetal.uz.",
      button: "Перейти на tezdetal.uz",
    },
  },
};
