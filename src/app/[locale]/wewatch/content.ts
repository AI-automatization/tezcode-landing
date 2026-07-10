// Lighter product page for WeWatch — a ready (Live) TezCode Labs venture.
// The page introduces the product on tezcode.dev and links out to wewatch.uz.
export type WeWatchLang = "uz" | "ru" | "en" | "ar" | "uk";

export type WeWatchFeature = { icon: string; title: string; desc: string };
export type WeWatchStep = { num: string; title: string; desc: string };
export type WeWatchFaqItem = { q: string; a: string };

export type WeWatchCopy = {
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
  features: { badge: string; title: string; titleAccent: string; items: WeWatchFeature[] };
  steps: { badge: string; title: string; titleAccent: string; items: WeWatchStep[] };
  faq: { badge: string; title: string; titleAccent: string; subtitle: string; items: WeWatchFaqItem[] };
  ctaBlock: { title: string; subtitle: string; button: string };
};

export const WEWATCH_URL = "https://wewatch.uz";

export const WEWATCH_CONTENT: Record<WeWatchLang, WeWatchCopy> = {
  uz: {
    meta: {
      title: "WeWatch — do'stlar bilan online birga video ko'rish (Watch Party)",
      description:
        "WeWatch — do'stlar bilan bir vaqtda (sinxron) film va video ko'rish platformasi. YouTube, Rutube, VK Video yoki URL'dan video, real-time chat va do'stlar tizimi. Tezcode Labs mahsuloti.",
      ogTitle: "WeWatch — do'stlar bilan birga video ko'rish | Tezcode",
      ogDescription:
        "Do'stlaringiz bilan masofadan turib bir vaqtda film va video ko'ring — sinxron, chat bilan. Bepul.",
    },
    hero: {
      badge: "Video · Watch Party",
      title: "WeWatch —",
      titleAccent: "do'stlar bilan birga tomosha",
      subtitle:
        "Masofadan turib do'stlaringiz bilan bir vaqtda film va video ko'ring. Kimdir pauza bossa — hammada to'xtaydi. YouTube, Rutube, VK Video yoki to'g'ridan URL'dan.",
      cta: "wewatch.uz saytiga o'tish",
      ctaNote: "Bepul · O'zbek va rus tilida",
      statusLabel: "Ishlamoqda",
    },
    features: {
      badge: "Imkoniyatlar",
      title: "WeWatch",
      titleAccent: "nima qila oladi?",
      items: [
        { icon: "play", title: "Sinxron ko'rish", desc: "Video hammaning ekranida bir daqiqada o'ynaydi. Pauza, oldinga o'tish — hammada bir vaqtda." },
        { icon: "link", title: "Ko'p manba", desc: "YouTube, Rutube, VK Video yoki to'g'ridan URL — istagan videoni xonaga qo'yasiz." },
        { icon: "message-circle", title: "Real-time chat", desc: "Video yonida jonli chat — do'stlar bilan taassurot almashib, birga kuling." },
        { icon: "users", title: "Do'stlar tizimi", desc: "Do'st qo'shish, taklif qilish, kim online ekanini ko'rish — hammasi bitta joyda." },
      ],
    },
    steps: {
      badge: "Qanday ishlaydi",
      title: "3 qadamda",
      titleAccent: "birga tomosha",
      items: [
        { num: "01", title: "Xona oching", desc: "Videoni tanlang (YouTube/Rutube/VK yoki URL) va xona yarating." },
        { num: "02", title: "Do'stlarni taklif qiling", desc: "Havolani yuboring — do'stlaringiz bir bosishda qo'shiladi." },
        { num: "03", title: "Birga ko'ring", desc: "Video hammada sinxron o'ynaydi, yonida chat — go'yo bitta xonadasiz." },
      ],
    },
    faq: {
      badge: "Savol-javob",
      title: "WeWatch haqida",
      titleAccent: "savol-javob",
      subtitle: "Eng ko'p so'raladigan savollarga qisqa javoblar.",
      items: [
        { q: "WeWatch nima?", a: "WeWatch — do'stlar bilan masofadan turib bir vaqtda (sinxron) film va video ko'rish platformasi (Watch Party). Video hammaning ekranida bir xil daqiqada o'ynaydi, yonida real-time chat bo'ladi. Tezcode Labs mahsuloti, sayti: wewatch.uz." },
        { q: "Qaysi manbalardan video ko'rish mumkin?", a: "YouTube, Rutube, VK Video va to'g'ridan URL orqali. Xonaga videoni qo'yasiz, do'stlaringiz bir bosishda qo'shiladi va hamma birga ko'radi." },
        { q: "WeWatch bepulmi?", a: "Ha, WeWatch'dan foydalanish bepul. O'zbek va rus tillarida ishlaydi. Boshlash uchun wewatch.uz saytiga kiring." },
        { q: "Do'stim bilan qanday birga ko'raman?", a: "wewatch.uz'da xona oching, videoni tanlang va havolani do'stingizga yuboring. U qo'shilgach, video ikkalangizda ham sinxron o'ynaydi — kimdir pauza bossa, ikkalangizda ham to'xtaydi." },
      ],
    },
    ctaBlock: {
      title: "Do'stlaringiz bilan birga tomosha qilishni boshlang",
      subtitle: "WeWatch tayyor va bepul. wewatch.uz'da xona oching.",
      button: "wewatch.uz'ga o'tish",
    },
  },
  ru: {
    meta: {
      title: "WeWatch — смотреть видео вместе с друзьями онлайн (Watch Party)",
      description:
        "WeWatch — платформа для синхронного просмотра фильмов и видео с друзьями. YouTube, Rutube, VK Video или видео по URL, real-time чат и система друзей. Продукт Tezcode Labs.",
      ogTitle: "WeWatch — смотреть видео вместе с друзьями | Tezcode",
      ogDescription:
        "Смотрите фильмы и видео с друзьями одновременно, на расстоянии — синхронно, с чатом. Бесплатно.",
    },
    hero: {
      badge: "Видео · Watch Party",
      title: "WeWatch —",
      titleAccent: "смотрите вместе с друзьями",
      subtitle:
        "Смотрите фильмы и видео с друзьями одновременно, находясь в разных местах. Кто-то нажал паузу — остановилось у всех. YouTube, Rutube, VK Video или прямой URL.",
      cta: "Перейти на wewatch.uz",
      ctaNote: "Бесплатно · На узбекском и русском",
      statusLabel: "Работает",
    },
    features: {
      badge: "Возможности",
      title: "Что умеет",
      titleAccent: "WeWatch?",
      items: [
        { icon: "play", title: "Синхронный просмотр", desc: "Видео идёт на экране у всех в одну и ту же секунду. Пауза, перемотка — сразу у всех." },
        { icon: "link", title: "Много источников", desc: "YouTube, Rutube, VK Video или прямой URL — добавляете любое видео в комнату." },
        { icon: "message-circle", title: "Real-time чат", desc: "Живой чат рядом с видео — делитесь эмоциями и смейтесь вместе с друзьями." },
        { icon: "users", title: "Система друзей", desc: "Добавляйте друзей, приглашайте, смотрите кто онлайн — всё в одном месте." },
      ],
    },
    steps: {
      badge: "Как это работает",
      title: "3 шага до",
      titleAccent: "совместного просмотра",
      items: [
        { num: "01", title: "Откройте комнату", desc: "Выберите видео (YouTube/Rutube/VK или URL) и создайте комнату." },
        { num: "02", title: "Пригласите друзей", desc: "Отправьте ссылку — друзья присоединяются в один клик." },
        { num: "03", title: "Смотрите вместе", desc: "Видео синхронно у всех, рядом чат — как будто вы в одной комнате." },
      ],
    },
    faq: {
      badge: "Вопросы и ответы",
      title: "О WeWatch —",
      titleAccent: "вопросы и ответы",
      subtitle: "Короткие ответы на частые вопросы.",
      items: [
        { q: "Что такое WeWatch?", a: "WeWatch — платформа для синхронного (одновременного) просмотра фильмов и видео с друзьями на расстоянии (Watch Party). Видео идёт у всех в одну секунду, рядом real-time чат. Продукт Tezcode Labs, сайт: wewatch.uz." },
        { q: "Из каких источников можно смотреть?", a: "YouTube, Rutube, VK Video и прямой URL. Добавляете видео в комнату, друзья присоединяются в один клик, и все смотрят вместе." },
        { q: "WeWatch бесплатный?", a: "Да, пользоваться WeWatch бесплатно. Работает на узбекском и русском. Чтобы начать, зайдите на wewatch.uz." },
        { q: "Как смотреть вместе с другом?", a: "На wewatch.uz откройте комнату, выберите видео и отправьте ссылку другу. Когда он присоединится, видео идёт синхронно у обоих — кто-то нажал паузу, остановилось у обоих." },
      ],
    },
    ctaBlock: {
      title: "Начните смотреть вместе с друзьями",
      subtitle: "WeWatch готов и бесплатен. Откройте комнату на wewatch.uz.",
      button: "Перейти на wewatch.uz",
    },
  },
  en: {
    meta: {
      title: "WeWatch — watch videos together with friends online (Watch Party)",
      description:
        "WeWatch is a platform for watching films and videos together with friends in sync. YouTube, Rutube, VK Video or a URL, real-time chat and a friends system. A Tezcode Labs product.",
      ogTitle: "WeWatch — watch videos together with friends | Tezcode",
      ogDescription:
        "Watch films and videos with friends at the same time, from anywhere — in sync, with chat. Free.",
    },
    hero: {
      badge: "Video · Watch Party",
      title: "WeWatch —",
      titleAccent: "watch together with friends",
      subtitle:
        "Watch films and videos with friends at the same time from different places. Someone hits pause — it pauses for everyone. YouTube, Rutube, VK Video or a direct URL.",
      cta: "Go to wewatch.uz",
      ctaNote: "Free · In Uzbek and Russian",
      statusLabel: "Live",
    },
    features: {
      badge: "Features",
      title: "What can",
      titleAccent: "WeWatch do?",
      items: [
        { icon: "play", title: "Synced playback", desc: "The video plays on everyone's screen at the same second. Pause and seek happen for everyone at once." },
        { icon: "link", title: "Many sources", desc: "YouTube, Rutube, VK Video or a direct URL — drop any video into the room." },
        { icon: "message-circle", title: "Real-time chat", desc: "A live chat next to the video — react and laugh together with your friends." },
        { icon: "users", title: "Friends system", desc: "Add friends, invite them, see who's online — all in one place." },
      ],
    },
    steps: {
      badge: "How it works",
      title: "3 steps to",
      titleAccent: "watching together",
      items: [
        { num: "01", title: "Open a room", desc: "Pick a video (YouTube/Rutube/VK or URL) and create a room." },
        { num: "02", title: "Invite friends", desc: "Share the link — friends join in one click." },
        { num: "03", title: "Watch together", desc: "The video is synced for everyone, chat on the side — as if you're in one room." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "About WeWatch —",
      titleAccent: "questions & answers",
      subtitle: "Short answers to the most common questions.",
      items: [
        { q: "What is WeWatch?", a: "WeWatch is a platform for watching films and videos together with friends in sync, from anywhere (Watch Party). The video plays for everyone at the same second, with a real-time chat on the side. A Tezcode Labs product, site: wewatch.uz." },
        { q: "Which sources can I watch from?", a: "YouTube, Rutube, VK Video and direct URLs. You drop a video into the room, friends join in one click, and everyone watches together." },
        { q: "Is WeWatch free?", a: "Yes, WeWatch is free to use. It works in Uzbek and Russian. To start, go to wewatch.uz." },
        { q: "How do I watch together with a friend?", a: "On wewatch.uz, open a room, pick a video and send the link to your friend. Once they join, the video plays in sync for both of you — if someone hits pause, it pauses for both." },
      ],
    },
    ctaBlock: {
      title: "Start watching together with friends",
      subtitle: "WeWatch is live and free. Open a room on wewatch.uz.",
      button: "Go to wewatch.uz",
    },
  },
  ar: {
    meta: {
      title: "WeWatch — شاهد الفيديو مع أصدقائك عبر الإنترنت (Watch Party)",
      description:
        "WeWatch منصّة لمشاهدة الأفلام والفيديو مع الأصدقاء بشكل متزامن. YouTube أو Rutube أو VK Video أو رابط مباشر، دردشة فورية ونظام أصدقاء. منتج من Tezcode Labs.",
      ogTitle: "WeWatch — شاهد الفيديو مع أصدقائك | Tezcode",
      ogDescription:
        "شاهد الأفلام والفيديو مع أصدقائك في الوقت نفسه من أي مكان — متزامن مع دردشة. مجانًا.",
    },
    hero: {
      badge: "فيديو · Watch Party",
      title: "WeWatch —",
      titleAccent: "شاهدوا معًا مع الأصدقاء",
      subtitle:
        "شاهد الأفلام والفيديو مع أصدقائك في الوقت نفسه من أماكن مختلفة. إذا ضغط أحدهم إيقافًا مؤقتًا — يتوقف عند الجميع. YouTube وRutube وVK Video أو رابط مباشر.",
      cta: "الانتقال إلى wewatch.uz",
      ctaNote: "مجانًا · بالأوزبكية والروسية",
      statusLabel: "يعمل",
    },
    features: {
      badge: "الإمكانيات",
      title: "ماذا يفعل",
      titleAccent: "WeWatch؟",
      items: [
        { icon: "play", title: "تشغيل متزامن", desc: "يعمل الفيديو على شاشة الجميع في الثانية نفسها. الإيقاف والتقديم يحدثان للجميع دفعة واحدة." },
        { icon: "link", title: "مصادر متعددة", desc: "YouTube أو Rutube أو VK Video أو رابط مباشر — أضف أي فيديو إلى الغرفة." },
        { icon: "message-circle", title: "دردشة فورية", desc: "دردشة حية بجانب الفيديو — شاركوا المشاعر واضحكوا معًا." },
        { icon: "users", title: "نظام الأصدقاء", desc: "أضف الأصدقاء، وادعهم، وشاهد من متصل — كل ذلك في مكان واحد." },
      ],
    },
    steps: {
      badge: "كيف يعمل",
      title: "3 خطوات إلى",
      titleAccent: "المشاهدة معًا",
      items: [
        { num: "01", title: "افتح غرفة", desc: "اختر فيديو (YouTube/Rutube/VK أو رابط) وأنشئ غرفة." },
        { num: "02", title: "ادعُ أصدقاءك", desc: "أرسل الرابط — ينضم الأصدقاء بنقرة واحدة." },
        { num: "03", title: "شاهدوا معًا", desc: "الفيديو متزامن للجميع، والدردشة بالجانب — وكأنكم في غرفة واحدة." },
      ],
    },
    faq: {
      badge: "الأسئلة الشائعة",
      title: "عن WeWatch —",
      titleAccent: "أسئلة وأجوبة",
      subtitle: "إجابات موجزة عن أكثر الأسئلة شيوعًا.",
      items: [
        { q: "ما هو WeWatch؟", a: "WeWatch منصّة لمشاهدة الأفلام والفيديو مع الأصدقاء بشكل متزامن من أي مكان (Watch Party). يعمل الفيديو للجميع في الثانية نفسها مع دردشة فورية بالجانب. منتج من Tezcode Labs، الموقع: wewatch.uz." },
        { q: "من أي مصادر يمكن المشاهدة؟", a: "YouTube وRutube وVK Video والروابط المباشرة. تضيف فيديو إلى الغرفة، وينضم الأصدقاء بنقرة واحدة، ويشاهد الجميع معًا." },
        { q: "هل WeWatch مجاني؟", a: "نعم، استخدام WeWatch مجاني. يعمل بالأوزبكية والروسية. للبدء، انتقل إلى wewatch.uz." },
        { q: "كيف أشاهد مع صديق؟", a: "على wewatch.uz، افتح غرفة، اختر فيديو وأرسل الرابط لصديقك. عند انضمامه، يعمل الفيديو متزامنًا لكليكما — إذا ضغط أحدكما إيقافًا مؤقتًا، يتوقف لكليكما." },
      ],
    },
    ctaBlock: {
      title: "ابدأ المشاهدة مع أصدقائك",
      subtitle: "WeWatch جاهز ومجاني. افتح غرفة على wewatch.uz.",
      button: "الانتقال إلى wewatch.uz",
    },
  },
  uk: {
    meta: {
      title: "WeWatch — дивитися відео разом із друзями онлайн (Watch Party)",
      description:
        "WeWatch — платформа для синхронного перегляду фільмів і відео з друзями. YouTube, Rutube, VK Video або відео за URL, real-time чат і система друзів. Продукт Tezcode Labs.",
      ogTitle: "WeWatch — дивитися відео разом із друзями | Tezcode",
      ogDescription:
        "Дивіться фільми та відео з друзями одночасно, на відстані — синхронно, з чатом. Безкоштовно.",
    },
    hero: {
      badge: "Відео · Watch Party",
      title: "WeWatch —",
      titleAccent: "дивіться разом із друзями",
      subtitle:
        "Дивіться фільми та відео з друзями одночасно, перебуваючи в різних місцях. Хтось натиснув паузу — зупинилося у всіх. YouTube, Rutube, VK Video або прямий URL.",
      cta: "Перейти на wewatch.uz",
      ctaNote: "Безкоштовно · Узбецькою та російською",
      statusLabel: "Працює",
    },
    features: {
      badge: "Можливості",
      title: "Що вміє",
      titleAccent: "WeWatch?",
      items: [
        { icon: "play", title: "Синхронний перегляд", desc: "Відео йде на екрані у всіх в одну й ту саму секунду. Пауза, перемотка — одразу у всіх." },
        { icon: "link", title: "Багато джерел", desc: "YouTube, Rutube, VK Video або прямий URL — додаєте будь-яке відео в кімнату." },
        { icon: "message-circle", title: "Real-time чат", desc: "Живий чат поруч із відео — діліться емоціями та смійтеся разом із друзями." },
        { icon: "users", title: "Система друзів", desc: "Додавайте друзів, запрошуйте, бачте хто онлайн — усе в одному місці." },
      ],
    },
    steps: {
      badge: "Як це працює",
      title: "3 кроки до",
      titleAccent: "спільного перегляду",
      items: [
        { num: "01", title: "Відкрийте кімнату", desc: "Виберіть відео (YouTube/Rutube/VK або URL) і створіть кімнату." },
        { num: "02", title: "Запросіть друзів", desc: "Надішліть посилання — друзі приєднуються в один клік." },
        { num: "03", title: "Дивіться разом", desc: "Відео синхронне у всіх, поруч чат — ніби ви в одній кімнаті." },
      ],
    },
    faq: {
      badge: "Питання та відповіді",
      title: "Про WeWatch —",
      titleAccent: "запитання та відповіді",
      subtitle: "Короткі відповіді на часті запитання.",
      items: [
        { q: "Що таке WeWatch?", a: "WeWatch — платформа для синхронного (одночасного) перегляду фільмів і відео з друзями на відстані (Watch Party). Відео йде у всіх в одну секунду, поруч real-time чат. Продукт Tezcode Labs, сайт: wewatch.uz." },
        { q: "З яких джерел можна дивитися?", a: "YouTube, Rutube, VK Video і прямі URL. Додаєте відео в кімнату, друзі приєднуються в один клік, і всі дивляться разом." },
        { q: "WeWatch безкоштовний?", a: "Так, користуватися WeWatch безкоштовно. Працює узбецькою та російською. Щоб почати, зайдіть на wewatch.uz." },
        { q: "Як дивитися разом із другом?", a: "На wewatch.uz відкрийте кімнату, виберіть відео і надішліть посилання другові. Коли він приєднається, відео йде синхронно в обох — хтось натиснув паузу, зупинилося в обох." },
      ],
    },
    ctaBlock: {
      title: "Почніть дивитися разом із друзями",
      subtitle: "WeWatch готовий і безкоштовний. Відкрийте кімнату на wewatch.uz.",
      button: "Перейти на wewatch.uz",
    },
  },
};
