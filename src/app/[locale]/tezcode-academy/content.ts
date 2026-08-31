import type { ServicePageContent } from "@/components/service-page/types";

// Content for /tezcode-academy — TezCode Academy, Tezcode's AI education center.
// Courses, bootcamps, workshops and corporate trainings for developers and
// business owners, focused on AI, automation and modern software engineering.
// Only confirmed Tezcode facts (AI Software Factory in Tashkent, 2024, founder
// Bekzod Mirzaaliyev, ~14 in-house developers, IT Park resident, real products
// RAOS / AI Office / CoreMed as teaching material). No prices, dates or student
// counts are promised — CTAs are about consultation / enrollment interest.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "TezCode Academy — AI ta'lim markazi",
      title1: "TezCode Academy",
      titleAccent: "— AI bilan qurishni o'rganing",
      title2: "",
      subtitle:
        "Dasturchilar va biznes egalari uchun AI kurslari, bootcamp, workshop va korporativ treninglar. Amaliyot birinchi o'rinda — ishlab turgan AI Software Factory muhandislaridan o'rganasiz.",
      trust: "Bepul 30 daqiqa konsultatsiya • Amaliy loyihalar • Ishlab turgan jamoadan",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "Formatlarni ko'rish",
    },
    capabilities: {
      badge: "Formatlar",
      title: "Qanday o'qitish",
      titleAccent: "formatlari bor?",
      subtitle:
        "Har bir format amaliyotga qurilgan: nazariya kam, real kod va real loyihalar ko'p.",
      items: [
        { icon: "book-open", title: "AI kurslari", desc: "Sun'iy intellekt, prompt engineering, AI agentlar va RAG asoslari. Noldan boshlab, har dars real misol bilan." },
        { icon: "rocket", title: "Dasturchilik bootcamp", desc: "Zamonaviy web va backend muhandislik intensivi. Bir necha hafta ichida real ishlovchi loyiha quramiz." },
        { icon: "bar-chart-2", title: "Biznes uchun AI workshop", desc: "Biznes egalari va menejerlar uchun: AI qayerda foyda keltiradi, jarayonni qanday avtomatlashtirish mumkin." },
        { icon: "users", title: "Korporativ trening", desc: "Jamoangizni o'z ofisingizda yoki online o'qitamiz. Dasturchilaringizni AI vositalari bilan tezlashtiramiz." },
        { icon: "message-circle", title: "Mentorlik", desc: "Individual yo'l-yo'riq: Tezcode muhandisi bilan real kod ustida ishlab, tezroq o'sasiz." },
        { icon: "clipboard-list", title: "Amaliy loyihalar", desc: "Har o'quvchi kursni real, ishlaydigan mahsulot bilan tugatadi — portfolioga qo'shsa bo'ladigan natija." },
      ],
    },
    process: {
      badge: "Qanday o'qiymiz",
      title: "4 qadamda",
      titleAccent: "o'rganing",
      subtitle: "Birinchi 30 daqiqa bepul. Keyin qurish orqali o'rganamiz — nazariya emas, amaliyot.",
      steps: [
        { num: "01", title: "Yozilish va tanishuv", desc: "Darajangiz va maqsadingizni aniqlaymiz, mos formatni tanlaymiz. Bepul konsultatsiya, majburiyat yo'q.", icon: "message-circle" },
        { num: "02", title: "Qurish orqali o'rganish", desc: "Har dars real kod va real vazifa. AI vositalari bilan zamonaviy usulda ishlaymiz.", icon: "zap" },
        { num: "03", title: "Real loyiha", desc: "Kurs oxirida ishlaydigan mahsulot quramiz — RAOS va AI Office kabi real Tezcode mahsulotlari misol bo'ladi.", icon: "rocket" },
        { num: "04", title: "Sertifikat va keyingi qadam", desc: "Yakuniy sertifikat, portfolio va o'sish yo'li: staj, hamkorlik yoki ishga qabul imkoniyati.", icon: "check-circle-2" },
      ],
    },
    examples: {
      badge: "Nega Tezcode'da",
      title: "Ishlab turgan",
      titleAccent: "Software Factory'dan o'rganing",
      subtitle: "Bizni oddiy kurslardan ajratib turadigan asosiy farqlar.",
      items: [
        { tag: "01", title: "Amaliyotchilar o'qitadi", desc: "Nazariyotchi emas — har kuni real mahsulot yozadigan Tezcode muhandislari dars beradi. O'rgatilgan narsa amalda ishlaydi." },
        { tag: "02", title: "AI-first dastur", desc: "Dasturimiz zamonaviy AI vositalari atrofida qurilgan. Siz kelajakning ish uslubini bugundan o'rganasiz." },
        { tag: "03", title: "Real mahsulotlar o'quv materiali", desc: "RAOS, AI Office va CoreMed kabi real Tezcode mahsulotlari case sifatida ochib beriladi — kitobdagi soxta misol emas." },
        { tag: "04", title: "Ishga va hamkorlikka yo'l", desc: "Eng kuchli o'quvchilar uchun staj, loyihada ishtirok yoki jamoaga qo'shilish imkoniyati ochiq. Founder Bekzod Mirzaaliyev Telegram'da." },
      ],
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "O'qish yo'lingizni",
      titleAccent: "muhokama qilaylik",
      subtitle: "30 daqiqalik bepul konsultatsiyada sizga mos formatni tanlaymiz. Hech qanday majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "TezCode Academy haqida ko'p so'raladigan savollar.",
      items: [
        { q: "TezCode Academy kimlar uchun?", a: "Ikki toifa uchun: dasturchilar (yangi boshlovchidan tajribalisigacha) va biznes egalari/menejerlar. Dasturchilar zamonaviy muhandislik va AI vositalarini o'rganadi, biznes egalari esa AI qayerda foyda keltirishini tushunadi." },
        { q: "Oldindan bilim kerakmi?", a: "Formatga bog'liq. AI kurslari va biznes workshop yangi boshlovchilar uchun ochiq. Bootcamp uchun kompyuter bilan ishlash va asosiy mantiq yetarli — qolganini birga o'rganamiz." },
        { q: "Online yoki offline o'qitasizmi?", a: "Ikkalasi ham. Toshkentdagi ofisimizda offline dars, shuningdek online format mavjud. Korporativ trening bo'lsa, jamoangiz joyiga ham chiqamiz." },
        { q: "Korporativ trening tashkil qilasizmi?", a: "Ha. Kompaniyangiz jamoasini AI va zamonaviy muhandislik bo'yicha o'qitamiz — sizning ehtiyoj va texnologiyalaringizga moslab dastur tuzamiz. Batafsili konsultatsiyada kelishamiz." },
        { q: "Sertifikat beriladimi?", a: "Ha. Kursni real loyiha bilan yakunlagan o'quvchi Tezcode sertifikatini oladi. Muhimi — portfolioda ishlaydigan mahsulot va real amaliyot tajribasi qoladi." },
        { q: "Narx qancha?", a: "Aniq narx format, davomiylik va guruh/individual tanloviga bog'liq. Konsultatsiya bepul — u yerda sizga mos yo'nalish va shartlarni birga aniqlaymiz." },
      ],
    },
    related: {
      badge: "Yana ko'ring",
      title: "Tezcode bilan",
      titleAccent: "keyingi qadam",
      subtitle: "Bog'liq yo'nalishlar — o'qishdan ishlashgacha.",
      links: [
        { href: "/hire-developers", label: "Dasturchi yollash", desc: "Tayyor, kuchli jamoa kerakmi? In-house dasturchilarni yollash yoki jamoa kuchaytirish." },
        { href: "/blog", label: "Blog", desc: "AI, avtomatizatsiya va zamonaviy muhandislik bo'yicha amaliy maqolalar va qo'llanmalar." },
        { href: "/ai-agent", label: "AI agentlar", desc: "AI agentlar biznesda qanday ishlaydi — real yechimlarni ko'rib chiqing." },
      ],
    },
    service: {
      name: "TezCode Academy — AI ta'lim markazi, Toshkent",
      description:
        "TezCode Academy — Tezcode'ning AI ta'lim markazi. Dasturchilar va biznes egalari uchun AI kurslari, bootcamp, workshop va korporativ treninglar. Amaliyot birinchi o'rinda, ishlab turgan Software Factory muhandislaridan.",
      serviceType: "Ta'lim / AI va dasturlash kurslari",
    },
  },

  ru: {
    hero: {
      badge: "TezCode Academy — центр ИИ-образования",
      title1: "TezCode Academy",
      titleAccent: "— учитесь строить с ИИ",
      title2: "",
      subtitle:
        "ИИ-курсы, буткемпы, воркшопы и корпоративные тренинги для разработчиков и владельцев бизнеса. Практика на первом месте — вы учитесь у инженеров действующей AI Software Factory.",
      trust: "Бесплатная 30-минутная консультация • Практические проекты • От действующей команды",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Смотреть форматы",
    },
    capabilities: {
      badge: "Форматы",
      title: "Какие форматы",
      titleAccent: "обучения есть?",
      subtitle:
        "Каждый формат построен на практике: минимум теории, максимум реального кода и реальных проектов.",
      items: [
        { icon: "book-open", title: "ИИ-курсы", desc: "Искусственный интеллект, prompt engineering, ИИ-агенты и основы RAG. С нуля, каждый урок на реальном примере." },
        { icon: "rocket", title: "Буткемп по разработке", desc: "Интенсив по современной web и backend инженерии. За несколько недель строим реальный рабочий проект." },
        { icon: "bar-chart-2", title: "ИИ-воркшоп для бизнеса", desc: "Для владельцев и менеджеров: где ИИ приносит пользу и как автоматизировать процессы." },
        { icon: "users", title: "Корпоративный тренинг", desc: "Обучаем вашу команду у вас в офисе или онлайн. Ускоряем ваших разработчиков с помощью ИИ-инструментов." },
        { icon: "message-circle", title: "Менторство", desc: "Индивидуальное сопровождение: работаете над реальным кодом с инженером Tezcode и растёте быстрее." },
        { icon: "clipboard-list", title: "Практические проекты", desc: "Каждый ученик завершает курс реальным рабочим продуктом — результат, который можно добавить в портфолио." },
      ],
    },
    process: {
      badge: "Как учимся",
      title: "4 шага к",
      titleAccent: "знаниям",
      subtitle: "Первые 30 минут бесплатно. Дальше учимся через практику — не теория, а создание.",
      steps: [
        { num: "01", title: "Запись и знакомство", desc: "Определяем ваш уровень и цель, подбираем подходящий формат. Консультация бесплатна, без обязательств.", icon: "message-circle" },
        { num: "02", title: "Учимся, создавая", desc: "Каждый урок — реальный код и реальная задача. Работаем современно, с ИИ-инструментами.", icon: "zap" },
        { num: "03", title: "Реальный проект", desc: "В конце курса строим рабочий продукт — реальные продукты Tezcode вроде RAOS и AI Office служат примером.", icon: "rocket" },
        { num: "04", title: "Сертификат и следующий шаг", desc: "Итоговый сертификат, портфолио и путь роста: стажировка, сотрудничество или возможность найма.", icon: "check-circle-2" },
      ],
    },
    examples: {
      badge: "Почему в Tezcode",
      title: "Учитесь у действующей",
      titleAccent: "Software Factory",
      subtitle: "Ключевые отличия от обычных курсов.",
      items: [
        { tag: "01", title: "Преподают практики", desc: "Не теоретики — инженеры Tezcode, которые каждый день пишут реальный продукт. То, чему учат, работает на практике." },
        { tag: "02", title: "AI-first программа", desc: "Наша программа построена вокруг современных ИИ-инструментов. Вы осваиваете способ работы будущего уже сегодня." },
        { tag: "03", title: "Реальные продукты как материал", desc: "Реальные продукты Tezcode — RAOS, AI Office и CoreMed — разбираются как кейсы, а не выдуманные примеры из учебника." },
        { tag: "04", title: "Путь к работе и сотрудничеству", desc: "Для сильнейших учеников открыты стажировка, участие в проекте или присоединение к команде. Основатель Бекзод Мирзаалиев в Telegram." },
      ],
    },
    cta: {
      badge: "Время начать",
      title: "Обсудим",
      titleAccent: "ваш путь обучения",
      subtitle: "На бесплатной 30-минутной консультации подберём подходящий формат. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Частые вопросы о TezCode Academy.",
      items: [
        { q: "Для кого TezCode Academy?", a: "Для двух категорий: разработчики (от новичков до опытных) и владельцы бизнеса/менеджеры. Разработчики осваивают современную инженерию и ИИ-инструменты, а владельцы бизнеса понимают, где ИИ приносит пользу." },
        { q: "Нужны ли предварительные знания?", a: "Зависит от формата. ИИ-курсы и бизнес-воркшоп открыты для новичков. Для буткемпа достаточно уверенно работать за компьютером и понимать базовую логику — остальному научим вместе." },
        { q: "Обучение онлайн или офлайн?", a: "И то, и другое. Офлайн-занятия в нашем офисе в Ташкенте, а также онлайн-формат. При корпоративном тренинге выезжаем к вашей команде." },
        { q: "Проводите ли корпоративные тренинги?", a: "Да. Обучаем команду вашей компании по ИИ и современной инженерии — составляем программу под ваши потребности и технологии. Детали согласуем на консультации." },
        { q: "Выдаёте ли сертификат?", a: "Да. Ученик, завершивший курс реальным проектом, получает сертификат Tezcode. Главное — в портфолио остаётся рабочий продукт и реальный практический опыт." },
        { q: "Сколько это стоит?", a: "Точная цена зависит от формата, длительности и того, групповое обучение или индивидуальное. Консультация бесплатна — на ней вместе определим подходящее направление и условия." },
      ],
    },
    related: {
      badge: "Смотрите также",
      title: "Следующий шаг",
      titleAccent: "с Tezcode",
      subtitle: "Связанные направления — от обучения до работы.",
      links: [
        { href: "/hire-developers", label: "Нанять разработчиков", desc: "Нужна готовая сильная команда? Наём in-house разработчиков или усиление вашей команды." },
        { href: "/blog", label: "Блог", desc: "Практические статьи и руководства по ИИ, автоматизации и современной инженерии." },
        { href: "/ai-agent", label: "ИИ-агенты", desc: "Как ИИ-агенты работают в бизнесе — посмотрите реальные решения." },
      ],
    },
    service: {
      name: "TezCode Academy — центр ИИ-образования, Ташкент",
      description:
        "TezCode Academy — центр ИИ-образования Tezcode. ИИ-курсы, буткемпы, воркшопы и корпоративные тренинги для разработчиков и владельцев бизнеса. Практика на первом месте, от инженеров действующей Software Factory.",
      serviceType: "Образование / курсы по ИИ и программированию",
    },
  },

  en: {
    hero: {
      badge: "TezCode Academy — AI education center",
      title1: "TezCode Academy",
      titleAccent: "— learn to build with AI",
      title2: "",
      subtitle:
        "AI courses, bootcamps, workshops and corporate trainings for developers and business owners. Practice first — you learn from the engineers of a working AI Software Factory.",
      trust: "Free 30-min consultation • Hands-on projects • From a working team",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "View formats",
    },
    capabilities: {
      badge: "Formats",
      title: "Which learning",
      titleAccent: "formats do we offer?",
      subtitle:
        "Every format is built on practice: little theory, lots of real code and real projects.",
      items: [
        { icon: "book-open", title: "AI courses", desc: "Artificial intelligence, prompt engineering, AI agents and RAG fundamentals. From scratch, every lesson on a real example." },
        { icon: "rocket", title: "Developer bootcamp", desc: "An intensive in modern web and backend engineering. In a few weeks we build a real, working project." },
        { icon: "bar-chart-2", title: "Business AI workshop", desc: "For owners and managers: where AI adds value and how to automate your processes." },
        { icon: "users", title: "Corporate training", desc: "We train your team at your office or online. We speed up your developers with AI tooling." },
        { icon: "message-circle", title: "Mentorship", desc: "One-on-one guidance: work on real code with a Tezcode engineer and grow faster." },
        { icon: "clipboard-list", title: "Hands-on projects", desc: "Every student finishes the course with a real, working product — a result you can add to your portfolio." },
      ],
    },
    process: {
      badge: "How we learn",
      title: "Learn in",
      titleAccent: "4 steps",
      subtitle: "First 30 minutes are free. Then we learn by building — practice, not theory.",
      steps: [
        { num: "01", title: "Enroll & intro", desc: "We assess your level and goal and pick the right format. The consultation is free, no obligations.", icon: "message-circle" },
        { num: "02", title: "Learn by building", desc: "Every lesson is real code and a real task. We work the modern way, with AI tooling.", icon: "zap" },
        { num: "03", title: "Real project", desc: "By the end of the course we build a working product — real Tezcode products like RAOS and AI Office serve as case material.", icon: "rocket" },
        { num: "04", title: "Certificate & next step", desc: "A final certificate, a portfolio and a growth path: internship, collaboration or a hiring opportunity.", icon: "check-circle-2" },
      ],
    },
    examples: {
      badge: "Why at Tezcode",
      title: "Learn from a working",
      titleAccent: "Software Factory",
      subtitle: "The key differences from ordinary courses.",
      items: [
        { tag: "01", title: "Taught by practitioners", desc: "Not theorists — Tezcode engineers who ship real products every day. What they teach works in practice." },
        { tag: "02", title: "AI-first curriculum", desc: "Our curriculum is built around modern AI tools. You learn the way of working of the future, today." },
        { tag: "03", title: "Real products as material", desc: "Real Tezcode products — RAOS, AI Office and CoreMed — are broken down as cases, not made-up textbook examples." },
        { tag: "04", title: "Path to hiring & collaboration", desc: "For the strongest students, an internship, project involvement or joining the team is open. Founder Bekzod Mirzaaliyev is on Telegram." },
      ],
    },
    cta: {
      badge: "Time to start",
      title: "Let's discuss",
      titleAccent: "your learning path",
      subtitle: "We'll pick the right format in a free 30-minute consultation. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "Common questions about TezCode Academy.",
      items: [
        { q: "Who is TezCode Academy for?", a: "Two audiences: developers (from beginner to experienced) and business owners/managers. Developers master modern engineering and AI tools, while business owners learn where AI actually adds value." },
        { q: "Do I need prior knowledge?", a: "It depends on the format. AI courses and the business workshop are open to beginners. For the bootcamp, being comfortable with a computer and basic logic is enough — we learn the rest together." },
        { q: "Is training online or offline?", a: "Both. Offline sessions at our Tashkent office, plus an online format. For corporate training we can also come to your team's location." },
        { q: "Do you run corporate trainings?", a: "Yes. We train your company's team on AI and modern engineering — we design the program around your needs and stack. We agree on details during the consultation." },
        { q: "Do you issue a certificate?", a: "Yes. A student who finishes the course with a real project receives a Tezcode certificate. Most importantly, you keep a working product in your portfolio and real hands-on experience." },
        { q: "How much does it cost?", a: "The exact price depends on the format, duration and group vs. one-on-one. The consultation is free — there we define the right track and terms together." },
      ],
    },
    related: {
      badge: "See also",
      title: "Next step",
      titleAccent: "with Tezcode",
      subtitle: "Related tracks — from learning to working.",
      links: [
        { href: "/hire-developers", label: "Hire developers", desc: "Need a ready, strong team? Hire in-house developers or strengthen your team." },
        { href: "/blog", label: "Blog", desc: "Practical articles and guides on AI, automation and modern engineering." },
        { href: "/ai-agent", label: "AI agents", desc: "How AI agents work in business — explore real solutions." },
      ],
    },
    service: {
      name: "TezCode Academy — AI education center, Tashkent",
      description:
        "TezCode Academy is Tezcode's AI education center. AI courses, bootcamps, workshops and corporate trainings for developers and business owners. Practice first, from the engineers of a working Software Factory.",
      serviceType: "Education / AI and programming courses",
    },
  },

  ar: {
    hero: {
      badge: "TezCode Academy — مركز تعليم الذكاء الاصطناعي",
      title1: "TezCode Academy",
      titleAccent: "— تعلّم البناء بالذكاء الاصطناعي",
      title2: "",
      subtitle:
        "دورات ذكاء اصطناعي، معسكرات تدريبية، ورش عمل وتدريبات مؤسسية للمطورين وأصحاب الأعمال. الممارسة أولاً — تتعلّم من مهندسي مصنع برمجيات بالذكاء الاصطناعي يعمل فعلاً.",
      trust: "استشارة 30 دقيقة مجانية • مشاريع عملية • من فريق يعمل فعلاً",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "عرض الصيغ",
    },
    capabilities: {
      badge: "الصيغ",
      title: "أي صيغ",
      titleAccent: "تعليمية نقدّم؟",
      subtitle:
        "كل صيغة مبنية على الممارسة: قليل من النظرية، وكثير من الكود الحقيقي والمشاريع الحقيقية.",
      items: [
        { icon: "book-open", title: "دورات الذكاء الاصطناعي", desc: "الذكاء الاصطناعي، هندسة الأوامر، وكلاء AI وأساسيات RAG. من الصفر، كل درس على مثال حقيقي." },
        { icon: "rocket", title: "معسكر تدريبي للمطورين", desc: "برنامج مكثّف في هندسة الويب والخلفية الحديثة. خلال أسابيع نبني مشروعاً حقيقياً يعمل." },
        { icon: "bar-chart-2", title: "ورشة AI للأعمال", desc: "لأصحاب الأعمال والمدراء: أين يضيف الذكاء الاصطناعي قيمة وكيف تؤتمت عملياتك." },
        { icon: "users", title: "تدريب مؤسسي", desc: "ندرّب فريقك في مكتبك أو عبر الإنترنت. نسرّع مطوريك بأدوات الذكاء الاصطناعي." },
        { icon: "message-circle", title: "الإرشاد الفردي", desc: "توجيه فردي: تعمل على كود حقيقي مع مهندس Tezcode وتنمو أسرع." },
        { icon: "clipboard-list", title: "مشاريع عملية", desc: "كل طالب ينهي الدورة بمنتج حقيقي يعمل — نتيجة يمكن إضافتها إلى معرض أعمالك." },
      ],
    },
    process: {
      badge: "كيف نتعلّم",
      title: "تعلّم في",
      titleAccent: "4 خطوات",
      subtitle: "أول 30 دقيقة مجانية. ثم نتعلّم بالبناء — ممارسة لا نظرية.",
      steps: [
        { num: "01", title: "التسجيل والتعارف", desc: "نحدد مستواك وهدفك ونختار الصيغة المناسبة. الاستشارة مجانية، بلا التزام.", icon: "message-circle" },
        { num: "02", title: "التعلّم بالبناء", desc: "كل درس كود حقيقي ومهمة حقيقية. نعمل بالطريقة الحديثة، بأدوات الذكاء الاصطناعي.", icon: "zap" },
        { num: "03", title: "مشروع حقيقي", desc: "في نهاية الدورة نبني منتجاً يعمل — منتجات Tezcode الحقيقية مثل RAOS وAI Office تُستخدم كحالات دراسية.", icon: "rocket" },
        { num: "04", title: "شهادة والخطوة التالية", desc: "شهادة ختامية، معرض أعمال ومسار نمو: تدريب، تعاون أو فرصة توظيف.", icon: "check-circle-2" },
      ],
    },
    examples: {
      badge: "لماذا في Tezcode",
      title: "تعلّم من مصنع برمجيات",
      titleAccent: "يعمل فعلاً",
      subtitle: "الفروق الرئيسية عن الدورات العادية.",
      items: [
        { tag: "01", title: "يدرّس ممارسون", desc: "ليسوا منظّرين — مهندسو Tezcode الذين يبنون منتجات حقيقية كل يوم. ما يعلّمونه يعمل في الواقع." },
        { tag: "02", title: "منهج AI-first", desc: "منهجنا مبني حول أدوات الذكاء الاصطناعي الحديثة. تتعلّم أسلوب عمل المستقبل اليوم." },
        { tag: "03", title: "منتجات حقيقية كمادة", desc: "منتجات Tezcode الحقيقية — RAOS وAI Office وCoreMed — تُحلَّل كحالات، لا أمثلة كتب مصطنعة." },
        { tag: "04", title: "طريق إلى التوظيف والتعاون", desc: "للطلاب الأقوى فرصة تدريب أو مشاركة في مشروع أو الانضمام للفريق. المؤسس بكزود ميرزااليف على Telegram." },
      ],
    },
    cta: {
      badge: "وقت البدء",
      title: "لنناقش",
      titleAccent: "مسار تعلّمك",
      subtitle: "سنختار الصيغة المناسبة في استشارة مجانية مدتها 30 دقيقة. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع بكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أسئلة شائعة عن TezCode Academy.",
      items: [
        { q: "لمن TezCode Academy؟", a: "لفئتين: المطورون (من المبتدئ إلى المحترف) وأصحاب الأعمال/المدراء. يتقن المطورون الهندسة الحديثة وأدوات AI، بينما يفهم أصحاب الأعمال أين يضيف الذكاء الاصطناعي قيمة." },
        { q: "هل أحتاج معرفة مسبقة؟", a: "يعتمد على الصيغة. دورات AI وورشة الأعمال مفتوحة للمبتدئين. للمعسكر التدريبي يكفي التعامل بثقة مع الحاسوب وفهم المنطق الأساسي — نتعلّم الباقي معاً." },
        { q: "هل التدريب عبر الإنترنت أم حضوري؟", a: "كلاهما. جلسات حضورية في مكتبنا بطشقند، إضافة إلى صيغة عبر الإنترنت. وفي التدريب المؤسسي يمكننا الحضور إلى مقر فريقك." },
        { q: "هل تقدّمون تدريباً مؤسسياً؟", a: "نعم. ندرّب فريق شركتك على الذكاء الاصطناعي والهندسة الحديثة — نصمّم البرنامج حول احتياجاتك وتقنياتك. نتفق على التفاصيل في الاستشارة." },
        { q: "هل تصدرون شهادة؟", a: "نعم. الطالب الذي ينهي الدورة بمشروع حقيقي يحصل على شهادة Tezcode. والأهم أنه يحتفظ بمنتج يعمل في معرض أعماله وخبرة عملية حقيقية." },
        { q: "كم التكلفة؟", a: "السعر الدقيق يعتمد على الصيغة والمدة والاختيار بين مجموعة أو فردي. الاستشارة مجانية — نحدّد فيها المسار والشروط المناسبة معاً." },
      ],
    },
    related: {
      badge: "انظر أيضاً",
      title: "الخطوة التالية",
      titleAccent: "مع Tezcode",
      subtitle: "مسارات مرتبطة — من التعلّم إلى العمل.",
      links: [
        { href: "/hire-developers", label: "توظيف مطورين", desc: "تحتاج فريقاً جاهزاً وقوياً؟ توظيف مطورين داخليين أو تعزيز فريقك." },
        { href: "/blog", label: "المدونة", desc: "مقالات وأدلة عملية عن الذكاء الاصطناعي والأتمتة والهندسة الحديثة." },
        { href: "/ai-agent", label: "وكلاء AI", desc: "كيف يعمل وكلاء الذكاء الاصطناعي في الأعمال — استكشف حلولاً حقيقية." },
      ],
    },
    service: {
      name: "TezCode Academy — مركز تعليم الذكاء الاصطناعي، طشقند",
      description:
        "TezCode Academy هو مركز تعليم الذكاء الاصطناعي التابع لـ Tezcode. دورات AI، معسكرات تدريبية، ورش عمل وتدريبات مؤسسية للمطورين وأصحاب الأعمال. الممارسة أولاً، من مهندسي مصنع برمجيات يعمل فعلاً.",
      serviceType: "التعليم / دورات الذكاء الاصطناعي والبرمجة",
    },
  },

  uk: {
    hero: {
      badge: "TezCode Academy — центр AI-освіти",
      title1: "TezCode Academy",
      titleAccent: "— вчіться будувати з AI",
      title2: "",
      subtitle:
        "AI-курси, буткемпи, воркшопи та корпоративні тренінги для розробників і власників бізнесу. Практика на першому місці — ви вчитеся в інженерів діючої AI Software Factory.",
      trust: "Безкоштовна 30-хв консультація • Практичні проекти • Від діючої команди",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Дивитись формати",
    },
    capabilities: {
      badge: "Формати",
      title: "Які формати",
      titleAccent: "навчання є?",
      subtitle:
        "Кожен формат побудований на практиці: мінімум теорії, максимум реального коду та реальних проектів.",
      items: [
        { icon: "book-open", title: "AI-курси", desc: "Штучний інтелект, prompt engineering, AI-агенти та основи RAG. З нуля, кожен урок на реальному прикладі." },
        { icon: "rocket", title: "Буткемп з розробки", desc: "Інтенсив із сучасної web і backend інженерії. За кілька тижнів будуємо реальний робочий проект." },
        { icon: "bar-chart-2", title: "AI-воркшоп для бізнесу", desc: "Для власників і менеджерів: де AI приносить користь і як автоматизувати процеси." },
        { icon: "users", title: "Корпоративний тренінг", desc: "Навчаємо вашу команду у вас в офісі або онлайн. Прискорюємо ваших розробників за допомогою AI-інструментів." },
        { icon: "message-circle", title: "Менторство", desc: "Індивідуальний супровід: працюєте над реальним кодом з інженером Tezcode і зростаєте швидше." },
        { icon: "clipboard-list", title: "Практичні проекти", desc: "Кожен учень завершує курс реальним робочим продуктом — результат, який можна додати до портфоліо." },
      ],
    },
    process: {
      badge: "Як навчаємось",
      title: "Навчайтесь у",
      titleAccent: "4 кроки",
      subtitle: "Перші 30 хвилин безкоштовно. Далі вчимося через практику — не теорія, а створення.",
      steps: [
        { num: "01", title: "Запис і знайомство", desc: "Визначаємо ваш рівень і мету, добираємо відповідний формат. Консультація безкоштовна, без зобов'язань.", icon: "message-circle" },
        { num: "02", title: "Навчання через створення", desc: "Кожен урок — реальний код і реальне завдання. Працюємо сучасно, з AI-інструментами.", icon: "zap" },
        { num: "03", title: "Реальний проект", desc: "Наприкінці курсу будуємо робочий продукт — реальні продукти Tezcode як RAOS та AI Office слугують прикладом.", icon: "rocket" },
        { num: "04", title: "Сертифікат і наступний крок", desc: "Підсумковий сертифікат, портфоліо та шлях зростання: стажування, співпраця чи можливість найму.", icon: "check-circle-2" },
      ],
    },
    examples: {
      badge: "Чому в Tezcode",
      title: "Вчіться в діючої",
      titleAccent: "Software Factory",
      subtitle: "Ключові відмінності від звичайних курсів.",
      items: [
        { tag: "01", title: "Викладають практики", desc: "Не теоретики — інженери Tezcode, які щодня створюють реальний продукт. Те, чого навчають, працює на практиці." },
        { tag: "02", title: "AI-first програма", desc: "Наша програма побудована навколо сучасних AI-інструментів. Ви опановуєте спосіб роботи майбутнього вже сьогодні." },
        { tag: "03", title: "Реальні продукти як матеріал", desc: "Реальні продукти Tezcode — RAOS, AI Office і CoreMed — розбираються як кейси, а не вигадані приклади з підручника." },
        { tag: "04", title: "Шлях до роботи та співпраці", desc: "Для найсильніших учнів відкриті стажування, участь у проекті чи приєднання до команди. Засновник Бекзод Мірзаалієв у Telegram." },
      ],
    },
    cta: {
      badge: "Час починати",
      title: "Обговоримо",
      titleAccent: "ваш шлях навчання",
      subtitle: "На безкоштовній 30-хвилинній консультації доберемо відповідний формат. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "Часті запитання про TezCode Academy.",
      items: [
        { q: "Для кого TezCode Academy?", a: "Для двох категорій: розробники (від новачків до досвідчених) і власники бізнесу/менеджери. Розробники опановують сучасну інженерію та AI-інструменти, а власники бізнесу розуміють, де AI приносить користь." },
        { q: "Чи потрібні попередні знання?", a: "Залежить від формату. AI-курси та бізнес-воркшоп відкриті для новачків. Для буткемпу достатньо впевнено працювати за комп'ютером і розуміти базову логіку — решти навчимо разом." },
        { q: "Навчання онлайн чи офлайн?", a: "І те, і те. Офлайн-заняття в нашому офісі в Ташкенті, а також онлайн-формат. За корпоративного тренінгу виїжджаємо до вашої команди." },
        { q: "Чи проводите корпоративні тренінги?", a: "Так. Навчаємо команду вашої компанії з AI та сучасної інженерії — складаємо програму під ваші потреби й технології. Деталі узгоджуємо на консультації." },
        { q: "Чи видаєте сертифікат?", a: "Так. Учень, який завершив курс реальним проектом, отримує сертифікат Tezcode. Головне — у портфоліо залишається робочий продукт і реальний практичний досвід." },
        { q: "Скільки це коштує?", a: "Точна ціна залежить від формату, тривалості та вибору група/індивідуально. Консультація безкоштовна — на ній разом визначимо відповідний напрям та умови." },
      ],
    },
    related: {
      badge: "Дивіться також",
      title: "Наступний крок",
      titleAccent: "з Tezcode",
      subtitle: "Пов'язані напрями — від навчання до роботи.",
      links: [
        { href: "/hire-developers", label: "Найняти розробників", desc: "Потрібна готова сильна команда? Найм in-house розробників або посилення вашої команди." },
        { href: "/blog", label: "Блог", desc: "Практичні статті та посібники з AI, автоматизації та сучасної інженерії." },
        { href: "/ai-agent", label: "AI-агенти", desc: "Як AI-агенти працюють у бізнесі — перегляньте реальні рішення." },
      ],
    },
    service: {
      name: "TezCode Academy — центр AI-освіти, Ташкент",
      description:
        "TezCode Academy — центр AI-освіти Tezcode. AI-курси, буткемпи, воркшопи та корпоративні тренінги для розробників і власників бізнесу. Практика на першому місці, від інженерів діючої Software Factory.",
      serviceType: "Освіта / курси з AI та програмування",
    },
  },
};
