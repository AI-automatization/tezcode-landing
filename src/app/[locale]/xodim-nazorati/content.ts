import type { ServicePageContent } from "@/components/service-page/types";

// Content for /xodim-nazorati — target keywords: "xodim nazorati", "xodim nazorati tizimi",
// "xodimlar nazorati tizimi", "ish vaqti nazorati", "davomat tizimi", "vazifa boshqaruv",
// "система контроля сотрудников", "контроль сотрудников программа Ташкент",
// "учёт рабочего времени", "staff monitoring system Uzbekistan".
// SERVICE page: Tezcode builds a staff-monitoring system for the client's business
// (no ready-made product, no subscription price). Modules described: task management,
// work time & attendance, lateness, KPI, projects/departments, branch view, Telegram
// notifications, manager reports, web dashboard. Free consultation, 30% upfront.
// NO screen recording / keylogging claims (we don't do that), no fabricated client counts,
// no fixed timelines or prices.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "Xodim nazorati tizimi yaratish · Toshkent",
      title1: "Biznesingiz uchun",
      titleAccent: "xodim nazorati tizimi",
      title2: "yaratamiz",
      subtitle:
        "Xodim nazorati tizimi — bu har bir xodimning vazifalari, ish vaqti, davomati va samaradorligini bitta dashboardda ko'rsatadigan dastur: rahbar kim nima bilan band, kim qancha ulgurgan va kim kechikayotganini taxminsiz, aniq raqamlarda ko'radi. Toshkentdagi AI Software Factory Tezcode bunday tizimni biznesingiz tuzilmasiga moslab quradi: vazifa boshqaruvi, davomat, KPI hisobotlari va Telegram bildirishnomalari bitta tizimda.",
      trust: "IT Park rezidenti • Bepul konsultatsiya • To'lov: 30% oldindan",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "Tizim nima qila oladi?",
    },
    capabilities: {
      badge: "Imkoniyatlar",
      title: "Tizim",
      titleAccent: "nima qila oladi?",
      subtitle:
        "Ehtiyojingizga qarab tizimga quyidagi modullarni kiritamiz — vazifa berishdan hisobotgacha jamoa ishini bitta joydan boshqarasiz. Ofisda ham, masofada ham, filiallarda ham.",
      items: [
        { icon: "check-circle-2", title: "Vazifa boshqaruvi", desc: "Vazifa berish, muddat, mas'ul va holat (bajarilmoqda / tugadi). Har bir topshiriq kimga berilgani va qay holatdaligi ko'rinadi — hech narsa yo'qolmaydi." },
        { icon: "timer", title: "Ish vaqti va davomat", desc: "Kim qachon ish boshladi va tugatdi — davomat qog'ozsiz, aniq hisobda. Oy oxirida davomat jadvali tayyor turadi." },
        { icon: "calendar", title: "Kechikish va ish jadvali", desc: "Kechikish va erta ketishlar avtomatik qayd etiladi. Rahbar intizom holatini alohida so'rab o'tirmaydi — hisobotda ko'radi." },
        { icon: "trending-up", title: "Samaradorlik (KPI)", desc: "Har xodim nechta vazifa bajardi, qancha vaqtda. Kim ulguryapti, kim ortda — subyektiv fikr emas, aniq raqam." },
        { icon: "folder-open", title: "Loyiha va bo'limlar", desc: "Vazifalarni loyiha, bo'lim yoki jamoa bo'yicha guruhlash. Katta jamoa ham tartibli va ko'z oldida." },
        { icon: "globe", title: "Filial va masofaviy ko'rinish", desc: "Bir nechta filial, nuqta yoki masofaviy jamoa ishini markazdan kuzatish. Har bo'limning holati alohida ko'rinadi." },
        { icon: "bell", title: "Telegram bildirishnomalari", desc: "Muddat yaqinlashganda, vazifa berilganda yoki o'zgarganda xodim va rahbarga avtomatik xabar — Telegram orqali ham." },
        { icon: "bar-chart-2", title: "Rahbar hisoboti", desc: "Kunlik va haftalik hisobot: bajarilgan ish, davomat, kechikish, yuklama. Rahbar bir qarashda jamoa holatini ko'radi." },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "4 qadamda",
      titleAccent: "tartibli jamoaga",
      subtitle: "Birinchi konsultatsiya bepul. Keyin har qadam aniq narx va aniq muddat bilan.",
      steps: [
        { num: "01", title: "Bepul konsultatsiya", desc: "Jamoangiz qanday ishlashini o'rganamiz va qanday tizim kerakligini birga aniqlaymiz. Majburiyat yo'q: tizim foyda bermasa, ochiq aytamiz.", icon: "message-circle" },
        { num: "02", title: "Ishlab chiqish", desc: "Bo'limlar, rollar, vazifa turlari va hisobot shakllari — tizimni jamoangiz tuzilmasiga moslab quramiz.", icon: "wrench" },
        { num: "03", title: "O'rgatish", desc: "Xodim va rahbarlarni o'zimiz o'rgatamiz, tizimdan foydalanishni jonli ko'rsatamiz.", icon: "zap" },
        { num: "04", title: "Ishga tushirish + qo'llab-quvvatlash", desc: "Jonli ishga tushiramiz, birinchi haftalarda kuzatib boramiz va doimiy qo'llab-quvvatlaymiz.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Kimlar uchun",
      title: "Xodim nazorati tizimi qaysi",
      titleAccent: "jamoalar uchun?",
      subtitle: "Ofis, masofaviy yoki aralash jamoa — hammasi uchun.",
      items: [
        { tag: "01", title: "Ofis jamoalari", desc: "Vazifa, muddat, davomat va hisobot — rahbar har kuni holatdan xabardar, yig'ilishlar qisqaradi." },
        { tag: "02", title: "Masofaviy / remote jamoa", desc: "Kim nima ustida ishlayapti, qancha ulgurdi — masofadan ham ofisdagidek aniq ko'rinadi." },
        { tag: "03", title: "Filiallar va xizmat ko'rsatish", desc: "Bir nechta nuqta yoki brigadaning ishini markazdan kuzatish — har filial holati alohida hisobotda." },
        { tag: "04", title: "Loyiha jamoalari", desc: "Loyiha bo'yicha vazifa taqsimoti, muddat nazorati va yuklama balansi — kim bo'sh, kim ortiqcha yuklangan." },
      ],
    },
    tech: {
      badge: "Tizim qanday quriladi",
      title: "Tizim ichida",
      titleAccent: "nima bo'ladi?",
      subtitle:
        "Xodimlar uchun maxsus qurilmalarsiz — brauzer va Telegram yetarli.",
      items: [
        { name: "Veb dashboard", desc: "Rahbar va xodimlar uchun brauzerda ishlaydigan panel — kompyuterda ham, smartfonda ham ochiladi. Alohida qurilma shart emas." },
        { name: "Rollar va ruxsatlar", desc: "Rahbar, bo'lim boshlig'i va xodim har xil huquq bilan kiradi: har kim faqat o'ziga tegishli ma'lumotni ko'radi." },
        { name: "Telegram integratsiyasi", desc: "Eslatma va bildirishnomalar xodimlar allaqachon ishlatayotgan Telegram'ga boradi — yangi ilova o'rgatish shart emas." },
        { name: "Hisobot moduli", desc: "Kunlik va haftalik hisobotlar — bajarilgan vazifa, davomat, kechikish, yuklama — avtomatik shakllanadi, qo'lda yig'ilmaydi." },
        { name: "Toshkentdagi jamoa", desc: "Tizimni Tezcode jamoasi Toshkentda ishlab chiqadi va qo'llab-quvvatlaydi: yangi ehtiyoj chiqsa, so'rov to'g'ridan-to'g'ri ishlab chiquvchilarga yetadi." },
        { name: "IT Park rezidenti", desc: "Tezcode — IT Park Uzbekistan rasmiy rezidenti (guvohnoma №6237). Rasmiy shartnoma va hujjatlashtirilgan majburiyatlar bilan ishlaymiz." },
      ],
    },
    pricing: {
      badge: "Narx",
      title: "Narx nimaga",
      titleAccent: "bog'liq?",
      subtitle:
        "Narx tizim hajmi va kerakli modullarga bog'liq — bepul konsultatsiyadan keyin yozma taklif beramiz.",
      factors: [
        { title: "Modullar soni", desc: "Vazifa, davomat, KPI, filiallar, Telegram bildirishnomalari — tizimga qancha modul kerak bo'lsa, ishlab chiqish hajmi shuncha bo'ladi." },
        { title: "Moslashtirish hajmi", desc: "Bo'limlar, rollar, vazifa turlari va hisobot shakllari qanchalik chuqur moslashtirilsa, ish shuncha ko'p bo'ladi." },
        { title: "O'rgatish va joriy etish", desc: "Katta yoki ko'p filialli jamoada bosqichma-bosqich joriy etamiz — muddat konsultatsiyadan keyin aniqlanadi." },
      ],
      note:
        "Aniq narx bepul konsultatsiya va ehtiyojlarni aniqlashdan keyin yozma taklifda beriladi. To'lov: 30% oldindan, qolgani bosqichma-bosqich. Yashirin to'lovlar yo'q — hammasi shartnomada.",
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Jamoa ishini",
      titleAccent: "tartibga solamizmi?",
      subtitle: "Bepul konsultatsiyada jamoangizga qanday xodim nazorati tizimi kerakligini birga aniqlaymiz. Majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "Xodim nazorati tizimi haqida ko'p so'raladigan 5 savol.",
      items: [
        { q: "Xodim nazorati tizimi nima va u nimani nazorat qiladi?", a: "Xodim nazorati tizimi — xodimlarning ish jarayonini bitta joyda ko'rsatadigan dastur. U uchta narsani nazorat qiladi: vazifalar (kim, nima, qachongacha), ish vaqti va davomat (kelish-ketish, kechikish) hamda samaradorlik (har xodim qancha vazifani qancha vaqtda bajargani). Rahbar buni aniq raqamlarda ko'radi — qog'oz jurnal va taxminlarsiz. Maqsad — josuslik emas, ish jarayonini shaffof va tartibli qilish." },
        { q: "Xodimlar ekrani yoki yozishmalarini kuzatadimi?", a: "Yo'q. Biz quradigan tizim ekran yozuvi, klaviatura kuzatuvi yoki shaxsiy yozishmalarni o'qish bilan shug'ullanmaydi. Tizim faqat ish ko'rsatkichlarini qayd etadi: vazifa, davomat, muddat va natija. Xodimlar qaysi ma'lumot yig'ilishini ochiq biladi — bu ishonchni buzmaydi, aksincha baholashni shaffof va adolatli qiladi." },
        { q: "Narxi qancha va to'lov qanday?", a: "Narx tizim hajmi, kerakli modullar va moslashtirish chuqurligiga bog'liq — aniq summani bepul konsultatsiyadan keyin yozma taklifda beramiz. To'lov: 30% oldindan, qolgani bosqichma-bosqich. Yashirin to'lovlar yo'q." },
        { q: "Qancha vaqtda ishga tushadi?", a: "Muddat tizim hajmiga bog'liq: kerakli modullar va filiallar soni aniqlangach, aniq jadvalni yozma aytamiz. Katta yoki ko'p filialli jamoada bosqichma-bosqich joriy etamiz. Xodimlar uchun maxsus qurilma shart emas — oddiy kompyuter yoki smartfon brauzeri va Telegram yetarli." },
        { q: "Xodimlar davomatini avtomatlashtirmoqchiman — qanday boshlayman?", a: "Bepul konsultatsiyadan boshlang — jamoangiz qanday ishlashini o'rganib, qanday tizim kerakligini aniqlaymiz. Keyin qog'oz jurnal yoki Excel'dagi ma'lumotlarni yangi tizimga o'tkazamiz: kelish-ketish tizimda qayd etiladi, hisobot avtomatik shakllanadi. Ishlar uchun 30% oldindan to'lanadi, qolgani bosqichma-bosqich. Bog'lanish: Telegram yoki +998 91 777 66 09." },
      ],
    },
    related: {
      badge: "Bog'liq xizmatlar",
      title: "Sizga yana",
      titleAccent: "foydali bo'lishi mumkin",
      subtitle: "Xodim nazoratiga yaqin Tezcode yechimlari.",
      links: [
        { href: "/pos-tizimi", label: "POS tizimi (RAOS)", desc: "Savdo nuqtasi uchun kassa, ombor va hisobot — xodim nazorati bilan birga do'kon to'liq nazoratda." },
        { href: "/biznes-avtomatlashtirish", label: "Biznes avtomatlashtirish", desc: "Hujjat, hisobot va jarayonlarni tartibga solish — nazorat tizimiga tabiiy davom." },
      ],
    },
    service: {
      name: "Xodim nazorati tizimi yaratish | Tezcode",
      description:
        "Xodim nazorati tizimini ishlab chiqish: vazifa boshqaruvi, ish vaqti va davomat, kechikish nazorati, samaradorlik (KPI), filiallar ko'rinishi, rahbar hisoboti, Telegram bildirishnoma. Tezcode — IT Park rezidenti. Toshkent va butun O'zbekiston.",
      serviceType: "Xodim nazorati tizimini ishlab chiqish",
    },
  },

  ru: {
    hero: {
      badge: "Разработка системы контроля сотрудников · Ташкент",
      title1: "Система контроля",
      titleAccent: "сотрудников",
      title2: "под ваш бизнес",
      subtitle:
        "Система контроля сотрудников — это программа, которая показывает задачи, рабочее время, посещаемость и эффективность каждого сотрудника в одном дашборде: руководитель точно видит, кто чем занят, сколько успел и кто опаздывает — в цифрах, без догадок. Tezcode, AI Software Factory в Ташкенте, разрабатывает такую систему под структуру вашего бизнеса: управление задачами, посещаемость, KPI-отчёты и уведомления в Telegram в одной системе.",
      trust: "Резидент IT Park • Бесплатная консультация • Оплата: 30% предоплата",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Что умеет система?",
    },
    capabilities: {
      badge: "Возможности",
      title: "Что умеет",
      titleAccent: "система?",
      subtitle:
        "В зависимости от задач включаем в систему эти модули — от постановки задачи до отчёта вы управляете работой команды из одного места. В офисе, удалённо и в филиалах.",
      items: [
        { icon: "check-circle-2", title: "Управление задачами", desc: "Постановка задач, сроки, ответственный и статус (в работе / готово). Видно, кому поручено и в каком состоянии каждое задание — ничего не теряется." },
        { icon: "timer", title: "Рабочее время и посещаемость", desc: "Кто когда начал и закончил работу — точный учёт без бумажного журнала. В конце месяца табель посещаемости уже готов." },
        { icon: "calendar", title: "Опоздания и график работы", desc: "Опоздания и ранние уходы фиксируются автоматически. Руководителю не нужно спрашивать о дисциплине — он видит её в отчёте." },
        { icon: "trending-up", title: "Эффективность (KPI)", desc: "Сколько задач выполнил каждый сотрудник и за какое время. Кто успевает, кто отстаёт — не субъективное мнение, а цифры." },
        { icon: "folder-open", title: "Проекты и отделы", desc: "Группировка задач по проекту, отделу или команде. Даже большая команда остаётся упорядоченной и на виду." },
        { icon: "globe", title: "Филиалы и удалённая работа", desc: "Работа нескольких филиалов, точек или удалённой команды видна из центра. Состояние каждого подразделения — отдельно." },
        { icon: "bell", title: "Уведомления в Telegram", desc: "При приближении срока, назначении или изменении задачи сотрудник и руководитель получают автоматическое уведомление — в том числе в Telegram." },
        { icon: "bar-chart-2", title: "Отчёт руководителю", desc: "Дневной и недельный отчёт: выполненная работа, посещаемость, опоздания, загрузка. Руководитель видит состояние команды с одного взгляда." },
      ],
    },
    process: {
      badge: "Как работаем",
      title: "4 шага до",
      titleAccent: "упорядоченной команды",
      subtitle: "Первая консультация бесплатно. Дальше каждый шаг с точной ценой и сроком.",
      steps: [
        { num: "01", title: "Бесплатная консультация", desc: "Изучаем, как работает команда, и вместе определяем, какая система нужна. Без обязательств: если система не окупится — скажем честно.", icon: "message-circle" },
        { num: "02", title: "Разработка", desc: "Отделы, роли, типы задач и формы отчётов — строим систему под структуру вашей команды.", icon: "wrench" },
        { num: "03", title: "Обучение", desc: "Сами обучаем сотрудников и руководителей и показываем работу с системой вживую.", icon: "zap" },
        { num: "04", title: "Запуск + поддержка", desc: "Запускаем, сопровождаем в первые недели и поддерживаем постоянно.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Для кого",
      title: "Для каких команд",
      titleAccent: "система контроля сотрудников?",
      subtitle: "Офис, удалёнка или смешанная команда — для всех.",
      items: [
        { tag: "01", title: "Офисные команды", desc: "Задачи, сроки, посещаемость и отчёты — руководитель в курсе каждый день, совещания становятся короче." },
        { tag: "02", title: "Удалённая команда", desc: "Кто над чем работает и сколько успел — на расстоянии видно так же точно, как в офисе." },
        { tag: "03", title: "Филиалы и сервис", desc: "Контроль работы нескольких точек или бригад из центра — состояние каждого филиала в отдельном отчёте." },
        { tag: "04", title: "Проектные команды", desc: "Распределение задач по проекту, контроль сроков и баланс загрузки — кто свободен, кто перегружен." },
      ],
    },
    tech: {
      badge: "Как строится система",
      title: "Что будет",
      titleAccent: "внутри системы?",
      subtitle: "Без специального оборудования для сотрудников — достаточно браузера и Telegram.",
      items: [
        { name: "Веб-дашборд", desc: "Панель для руководителя и сотрудников работает в браузере — и на компьютере, и на смартфоне. Отдельное устройство не нужно." },
        { name: "Роли и права доступа", desc: "Руководитель, начальник отдела и сотрудник входят с разными правами: каждый видит только те данные, которые его касаются." },
        { name: "Интеграция с Telegram", desc: "Напоминания и уведомления приходят в Telegram, которым сотрудники уже пользуются — обучать новому приложению не нужно." },
        { name: "Модуль отчётов", desc: "Дневные и недельные отчёты — выполненные задачи, посещаемость, опоздания, загрузка — формируются автоматически, без ручного сбора." },
        { name: "Команда в Ташкенте", desc: "Систему разрабатывает и поддерживает команда Tezcode в Ташкенте: новая потребность доходит напрямую до разработчиков." },
        { name: "Резидент IT Park", desc: "Tezcode — официальный резидент IT Park Uzbekistan (свидетельство №6237). Работаем по официальному договору с задокументированными обязательствами." },
      ],
    },
    pricing: {
      badge: "Цена",
      title: "От чего зависит",
      titleAccent: "стоимость?",
      subtitle:
        "Цена зависит от объёма системы и нужных модулей — после бесплатной консультации даём письменное предложение.",
      factors: [
        { title: "Количество модулей", desc: "Задачи, посещаемость, KPI, филиалы, уведомления в Telegram — чем больше модулей нужно, тем больше объём разработки." },
        { title: "Объём настройки", desc: "Чем глубже настраиваются отделы, роли, типы задач и формы отчётов, тем больше работы." },
        { title: "Обучение и внедрение", desc: "В большой или многофилиальной команде внедряем поэтапно — срок определяется после консультации." },
      ],
      note:
        "Точная цена даётся письменно после бесплатной консультации и уточнения потребностей. Оплата: 30% предоплата, остальное поэтапно. Скрытых платежей нет — всё в договоре.",
    },
    cta: {
      badge: "Время начать",
      title: "Наведём порядок",
      titleAccent: "в работе команды?",
      subtitle: "На бесплатной консультации вместе определим, какая система контроля сотрудников нужна вашей команде. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "5 самых частых вопросов о системе контроля сотрудников.",
      items: [
        { q: "Что такое система контроля сотрудников и что она контролирует?", a: "Система контроля сотрудников — это программа, которая показывает рабочий процесс сотрудников в одном месте. Она контролирует три вещи: задачи (кто, что, к какому сроку), рабочее время и посещаемость (приход-уход, опоздания) и эффективность (сколько задач и за какое время выполнил каждый сотрудник). Руководитель видит это в точных цифрах — без бумажного журнала и догадок. Цель — не слежка, а прозрачность и порядок в работе." },
        { q: "Следит ли система за экраном или перепиской сотрудников?", a: "Нет. Система, которую мы строим, не занимается записью экрана, отслеживанием клавиатуры или чтением личной переписки. Она фиксирует только рабочие показатели: задачи, посещаемость, сроки и результаты. Сотрудники открыто знают, какие данные собираются — это не подрывает доверие, а делает оценку прозрачной и справедливой." },
        { q: "Сколько стоит и как устроена оплата?", a: "Цена зависит от объёма системы, нужных модулей и глубины настройки — точную сумму даём письменно после бесплатной консультации. Оплата: 30% предоплата, остальное поэтапно. Скрытых платежей нет." },
        { q: "Сколько времени до запуска?", a: "Срок зависит от объёма системы: когда определены нужные модули и количество филиалов, называем точный график письменно. В большой или многофилиальной команде внедряем поэтапно. Специального оборудования для сотрудников не нужно — достаточно браузера на компьютере или смартфоне и Telegram." },
        { q: "Хочу автоматизировать учёт посещаемости сотрудников — с чего начать?", a: "Начните с бесплатной консультации — изучим, как работает ваша команда, и определим, какая система нужна. Затем переносим данные из бумажного журнала или Excel в новую систему: приход-уход фиксируется в системе, отчёты формируются автоматически. За работы — 30% предоплата, остальное поэтапно. Связаться: Telegram или +998 91 777 66 09." },
      ],
    },
    related: {
      badge: "Связанные услуги",
      title: "Вам также может",
      titleAccent: "быть полезно",
      subtitle: "Решения Tezcode, близкие к контролю сотрудников.",
      links: [
        { href: "/pos-tizimi", label: "POS-система (RAOS)", desc: "Касса, склад и отчёты для торговой точки — вместе с контролем сотрудников магазин полностью под контролем." },
        { href: "/biznes-avtomatlashtirish", label: "Автоматизация бизнеса", desc: "Порядок в документах, отчётах и процессах — естественное продолжение системы контроля." },
      ],
    },
    service: {
      name: "Разработка системы контроля сотрудников | Tezcode",
      description:
        "Разработка системы контроля сотрудников: управление задачами, рабочее время и посещаемость, контроль опозданий, эффективность (KPI), обзор филиалов, отчёт руководителю, уведомления в Telegram. Tezcode — резидент IT Park. Ташкент и весь Узбекистан.",
      serviceType: "Разработка системы контроля сотрудников",
    },
  },

  en: {
    hero: {
      badge: "Staff monitoring system development · Tashkent",
      title1: "A staff monitoring system",
      titleAccent: "built for your business",
      title2: "",
      subtitle:
        "A staff monitoring system is software that shows every employee's tasks, work time, attendance and performance in one dashboard: the manager sees exactly who is doing what, how much they've done and who is late — in numbers, not guesses. Tezcode, the AI Software Factory in Tashkent, builds such a system around your business structure: task management, attendance, KPI reports and Telegram notifications in one system.",
      trust: "IT Park resident • Free consultation • Payment: 30% upfront",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "What can the system do?",
    },
    capabilities: {
      badge: "Capabilities",
      title: "What can",
      titleAccent: "the system do?",
      subtitle:
        "Depending on your needs, we build these modules into the system — from assigning a task to the report, you manage your team's work from one place. In the office, remotely and across branches.",
      items: [
        { icon: "check-circle-2", title: "Task management", desc: "Assign tasks with deadlines, owners and status (in progress / done). You see who owns every assignment and where it stands — nothing slips through." },
        { icon: "timer", title: "Work time & attendance", desc: "Who started and finished when — accurate, paperless time tracking. At month-end the attendance sheet is already there." },
        { icon: "calendar", title: "Lateness & work schedule", desc: "Late arrivals and early leaves are recorded automatically. The manager doesn't have to ask about discipline — it's in the report." },
        { icon: "trending-up", title: "Performance (KPI)", desc: "How many tasks each person completed and in what time. Who's keeping up and who's behind — hard numbers, not opinions." },
        { icon: "folder-open", title: "Projects & departments", desc: "Group tasks by project, department or team. Even a large team stays organized and visible." },
        { icon: "globe", title: "Branch & remote view", desc: "Track the work of several branches, locations or a remote team from the center. Each unit's status is visible separately." },
        { icon: "bell", title: "Telegram notifications", desc: "When a deadline nears, a task is assigned or changed, the employee and manager get an automatic notification — including via Telegram." },
        { icon: "bar-chart-2", title: "Manager report", desc: "Daily and weekly reports: work done, attendance, lateness, workload. The manager sees the team's state at a glance." },
      ],
    },
    process: {
      badge: "How we work",
      title: "4 steps to an",
      titleAccent: "organized team",
      subtitle: "The first consultation is free. Then every step has a clear price and timeline.",
      steps: [
        { num: "01", title: "Free consultation", desc: "We study how your team works and define together what system you need. No obligations: if the system won't pay off, we say so honestly.", icon: "message-circle" },
        { num: "02", title: "Development", desc: "Departments, roles, task types and report formats — we build the system to match your team's structure.", icon: "wrench" },
        { num: "03", title: "Training", desc: "We train staff and managers ourselves and show how to work with the system live.", icon: "zap" },
        { num: "04", title: "Launch + support", desc: "We go live, monitor the first weeks and support you continuously.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Who it's for",
      title: "Which teams is a",
      titleAccent: "staff monitoring system for?",
      subtitle: "Office, remote or hybrid team — for all of them.",
      items: [
        { tag: "01", title: "Office teams", desc: "Tasks, deadlines, attendance and reports — the manager stays informed daily and meetings get shorter." },
        { tag: "02", title: "Remote teams", desc: "Who's working on what and how much they've done — as clearly visible from afar as in the office." },
        { tag: "03", title: "Branches & field service", desc: "Track the work of several locations or crews from the center — each branch's state in its own report." },
        { tag: "04", title: "Project teams", desc: "Task distribution per project, deadline control and workload balance — who is free and who is overloaded." },
      ],
    },
    tech: {
      badge: "How the system is built",
      title: "What goes",
      titleAccent: "inside the system?",
      subtitle: "No special hardware for your staff — a browser and Telegram are enough.",
      items: [
        { name: "Web dashboard", desc: "A browser-based panel for managers and staff — opens on a computer or a smartphone. No separate device needed." },
        { name: "Roles & access rights", desc: "Manager, department head and employee log in with different rights: everyone sees only the data that concerns them." },
        { name: "Telegram integration", desc: "Reminders and notifications go to Telegram — the app your staff already uses. No new app to teach." },
        { name: "Reporting module", desc: "Daily and weekly reports — completed tasks, attendance, lateness, workload — are generated automatically, with no manual collection." },
        { name: "Team in Tashkent", desc: "The Tezcode team in Tashkent develops and supports the system: a new need reaches the developers directly." },
        { name: "IT Park resident", desc: "Tezcode is an official resident of IT Park Uzbekistan (certificate No. 6237). We work under an official contract with documented obligations." },
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "What does the price",
      titleAccent: "depend on?",
      subtitle:
        "The price depends on the scope of the system and the modules you need — we give a written proposal after a free consultation.",
      factors: [
        { title: "Number of modules", desc: "Tasks, attendance, KPI, branches, Telegram notifications — the more modules the system needs, the larger the development scope." },
        { title: "Depth of customization", desc: "The more departments, roles, task types and report formats need customizing, the more work there is." },
        { title: "Training & rollout", desc: "For a large or multi-branch team we roll out in stages — the timeline is set after the consultation." },
      ],
      note:
        "The exact price comes in writing after the free consultation and needs analysis. Payment: 30% upfront, the rest step by step. No hidden fees — everything is in the contract.",
    },
    cta: {
      badge: "Time to start",
      title: "Bring order to",
      titleAccent: "your team's work?",
      subtitle: "In a free consultation we'll define together what staff monitoring system your team needs. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "The 5 most common questions about staff monitoring systems.",
      items: [
        { q: "What is a staff monitoring system, and what does it track?", a: "A staff monitoring system is software that shows your team's work in one place. It tracks three things: tasks (who, what, by when), work time and attendance (check-in/out, lateness), and performance (how many tasks each employee completed and how fast). The manager sees it in precise numbers — without paper logs or guessing. The goal is transparency and order in the workflow, not surveillance." },
        { q: "Does it watch employees' screens or messages?", a: "No. The system we build does no screen recording, keystroke logging or reading of private messages. It records work metrics only: tasks, attendance, deadlines and results. Employees know openly what data is collected — that doesn't damage trust; it makes evaluation transparent and fair." },
        { q: "How much does it cost and how does payment work?", a: "The price depends on the scope of the system, the modules you need and the depth of customization — the exact figure comes in writing after a free consultation. Payment: 30% upfront, the rest step by step. No hidden fees." },
        { q: "How long until it's running?", a: "The timeline depends on the scope of the system: once the required modules and number of branches are defined, we give the exact schedule in writing. For a large or multi-branch team we roll out in stages. No special hardware is needed for your staff — a browser on a computer or smartphone plus Telegram is enough." },
        { q: "I want to automate employee attendance tracking — where do I start?", a: "Start with a free consultation — we study how your team works and define what system you need. Then we migrate your data from paper logs or Excel into the new system: check-ins and check-outs are recorded in the system and reports are generated automatically. The work is 30% upfront, the rest step by step. Contact us via Telegram or +998 91 777 66 09." },
      ],
    },
    related: {
      badge: "Related services",
      title: "You may also",
      titleAccent: "find useful",
      subtitle: "Tezcode solutions close to staff monitoring.",
      links: [
        { href: "/pos-tizimi", label: "POS system (RAOS)", desc: "Checkout, inventory and reports for a retail point — together with staff monitoring, the store is fully under control." },
        { href: "/biznes-avtomatlashtirish", label: "Business automation", desc: "Order in documents, reports and processes — a natural continuation of the monitoring system." },
      ],
    },
    service: {
      name: "Staff monitoring system development | Tezcode",
      description:
        "Staff monitoring system development: task management, work time and attendance, lateness control, performance (KPI), branch overview, manager reports, Telegram notifications. Tezcode — IT Park resident. Tashkent and all of Uzbekistan.",
      serviceType: "Staff monitoring system development",
    },
  },

  ar: {
    hero: {
      badge: "تطوير نظام مراقبة الموظفين · طشقند",
      title1: "نظام مراقبة الموظفين",
      titleAccent: "مصمَّم لعملك",
      title2: "",
      subtitle:
        "نظام مراقبة الموظفين هو برنامج يعرض مهام كل موظف ووقت عمله وحضوره وأداءه في لوحة واحدة: يرى المدير بدقة من يعمل على ماذا وكم أنجز ومن تأخر — بالأرقام لا بالتخمين. تبني Tezcode — مصنع برمجيات AI في طشقند — هذا النظام وفق بنية عملك: إدارة المهام، الحضور، تقارير KPI وإشعارات Telegram في نظام واحد.",
      trust: "مقيم رسمي في IT Park • استشارة مجانية • الدفع: 30% مقدمًا",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "ماذا يفعل النظام؟",
    },
    capabilities: {
      badge: "الإمكانيات",
      title: "ماذا يفعل",
      titleAccent: "النظام؟",
      subtitle: "حسب احتياجك نبني هذه الوحدات في النظام — من إسناد المهمة إلى التقرير تدير عمل فريقك من مكان واحد. في المكتب وعن بُعد وفي الفروع.",
      items: [
        { icon: "check-circle-2", title: "إدارة المهام", desc: "إسناد المهام مع المواعيد والمسؤول والحالة (قيد التنفيذ / منجز). يظهر لمن أُسندت كل مهمة وأين وصلت — لا يضيع شيء." },
        { icon: "timer", title: "وقت العمل والحضور", desc: "من بدأ العمل وانتهى ومتى — تتبع دقيق للوقت بلا ورق. في نهاية الشهر يكون كشف الحضور جاهزاً." },
        { icon: "calendar", title: "التأخير وجدول العمل", desc: "يُسجَّل التأخير والانصراف المبكر تلقائياً. لا يحتاج المدير للسؤال عن الانضباط — يراه في التقرير." },
        { icon: "trending-up", title: "الأداء (KPI)", desc: "كم مهمة أنجز كل موظف وفي أي وقت. من يلحق ومن يتأخر — أرقام دقيقة لا آراء." },
        { icon: "folder-open", title: "المشاريع والأقسام", desc: "تجميع المهام حسب المشروع أو القسم أو الفريق. حتى الفريق الكبير يبقى منظَّماً ومرئياً." },
        { icon: "globe", title: "عرض الفروع والعمل عن بُعد", desc: "متابعة عمل عدة فروع أو مواقع أو فريق عن بُعد من المركز. حالة كل وحدة تظهر على حدة." },
        { icon: "bell", title: "إشعارات Telegram", desc: "عند اقتراب الموعد أو إسناد مهمة أو تغييرها، يتلقى الموظف والمدير إشعاراً تلقائياً — بما في ذلك عبر Telegram." },
        { icon: "bar-chart-2", title: "تقرير للمدير", desc: "تقارير يومية وأسبوعية: العمل المنجز، الحضور، التأخير، حجم العمل. يرى المدير حالة الفريق بنظرة واحدة." },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "4 خطوات إلى",
      titleAccent: "فريق منظَّم",
      subtitle: "الاستشارة الأولى مجانية. ثم كل خطوة بسعر وموعد واضحين.",
      steps: [
        { num: "01", title: "استشارة مجانية", desc: "ندرس كيف يعمل فريقك ونحدد معاً النظام الذي تحتاجه. بلا التزام: إن لم يكن النظام مجدياً — نقولها بصراحة.", icon: "message-circle" },
        { num: "02", title: "التطوير", desc: "الأقسام والأدوار وأنواع المهام وأشكال التقارير — نبني النظام ليناسب بنية فريقك.", icon: "wrench" },
        { num: "03", title: "التدريب", desc: "ندرّب الموظفين والمدراء بأنفسنا ونعرض العمل على النظام مباشرة.", icon: "zap" },
        { num: "04", title: "الإطلاق + الدعم", desc: "نطلق النظام، نتابعه في الأسابيع الأولى وندعمك باستمرار.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "لمن",
      title: "لأي فرق",
      titleAccent: "نظام مراقبة الموظفين؟",
      subtitle: "مكتب، عن بُعد أو فريق مختلط — للجميع.",
      items: [
        { tag: "01", title: "فرق المكاتب", desc: "المهام والمواعيد والحضور والتقارير — المدير على اطلاع يومياً والاجتماعات تصبح أقصر." },
        { tag: "02", title: "فريق عن بُعد", desc: "من يعمل على ماذا وكم أنجز — واضح عن بُعد بنفس دقة المكتب." },
        { tag: "03", title: "الفروع والخدمة الميدانية", desc: "متابعة عمل عدة مواقع أو فرق من المركز — حالة كل فرع في تقرير خاص." },
        { tag: "04", title: "فرق المشاريع", desc: "توزيع المهام حسب المشروع، مراقبة المواعيد وتوازن حجم العمل — من متاح ومن محمَّل فوق طاقته." },
      ],
    },
    tech: {
      badge: "كيف يُبنى النظام",
      title: "ماذا سيكون داخل",
      titleAccent: "النظام؟",
      subtitle: "بلا أجهزة خاصة للموظفين — يكفي متصفح وTelegram.",
      items: [
        { name: "لوحة تحكم ويب", desc: "لوحة تعمل في المتصفح للمدير والموظفين — تُفتح على الكمبيوتر والهاتف الذكي. لا حاجة لجهاز منفصل." },
        { name: "الأدوار والصلاحيات", desc: "المدير ورئيس القسم والموظف يدخلون بصلاحيات مختلفة: كلٌّ يرى فقط البيانات التي تخصه." },
        { name: "تكامل مع Telegram", desc: "التذكيرات والإشعارات تصل إلى Telegram الذي يستخدمه الموظفون أصلاً — لا حاجة لتعليم تطبيق جديد." },
        { name: "وحدة التقارير", desc: "تقارير يومية وأسبوعية — المهام المنجزة، الحضور، التأخير، حجم العمل — تتكوّن تلقائياً دون جمع يدوي." },
        { name: "فريق في طشقند", desc: "يطوّر فريق Tezcode في طشقند النظام ويدعمه: أي احتياج جديد يصل مباشرة إلى المطورين." },
        { name: "مقيم في IT Park", desc: "Tezcode مقيم رسمي في IT Park Uzbekistan (شهادة رقم 6237). نعمل بعقد رسمي والتزامات موثّقة." },
      ],
    },
    pricing: {
      badge: "السعر",
      title: "على ماذا يعتمد",
      titleAccent: "السعر؟",
      subtitle:
        "يعتمد السعر على حجم النظام والوحدات المطلوبة — نقدّم عرضاً كتابياً بعد الاستشارة المجانية.",
      factors: [
        { title: "عدد الوحدات", desc: "المهام والحضور وKPI والفروع وإشعارات Telegram — كلما زادت الوحدات المطلوبة، زاد حجم التطوير." },
        { title: "عمق التخصيص", desc: "كلما زاد تخصيص الأقسام والأدوار وأنواع المهام وأشكال التقارير، زاد حجم العمل." },
        { title: "التدريب والتطبيق", desc: "في الفرق الكبيرة أو متعددة الفروع نطبّق على مراحل — يُحدَّد الموعد بعد الاستشارة." },
      ],
      note:
        "يُقدَّم السعر الدقيق كتابةً بعد الاستشارة المجانية وتحديد الاحتياجات. الدفع: 30% مقدمًا والباقي على مراحل. لا رسوم خفية — كل شيء في العقد.",
    },
    cta: {
      badge: "وقت البدء",
      title: "ننظّم عمل",
      titleAccent: "فريقك؟",
      subtitle: "في استشارة مجانية نحدد معاً نظام مراقبة الموظفين الذي يحتاجه فريقك. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع بكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أكثر 5 أسئلة شيوعاً عن أنظمة مراقبة الموظفين.",
      items: [
        { q: "ما هو نظام مراقبة الموظفين وما الذي يراقبه؟", a: "نظام مراقبة الموظفين برنامج يعرض سير عمل الموظفين في مكان واحد. يراقب ثلاثة أشياء: المهام (من، ماذا، بأي موعد)، وقت العمل والحضور (الدخول والخروج والتأخير)، والأداء (كم مهمة أنجز كل موظف وبأي سرعة). يرى المدير ذلك بأرقام دقيقة — دون سجل ورقي أو تخمين. الهدف الشفافية والنظام في سير العمل — وليس التجسس." },
        { q: "هل يراقب شاشات الموظفين أو مراسلاتهم؟", a: "لا. النظام الذي نبنيه لا يقوم بتسجيل الشاشة أو تتبّع لوحة المفاتيح أو قراءة الرسائل الخاصة. يسجّل مؤشرات العمل فقط: المهام والحضور والمواعيد والنتائج. يعرف الموظفون بوضوح ما البيانات التي تُجمع — وهذا لا يهدم الثقة بل يجعل التقييم شفافاً وعادلاً." },
        { q: "كم التكلفة وكيف يتم الدفع؟", a: "يعتمد السعر على حجم النظام والوحدات المطلوبة وعمق التخصيص — يُقدَّم السعر الدقيق كتابةً بعد استشارة مجانية. الدفع: 30% مقدمًا والباقي على مراحل. لا رسوم خفية." },
        { q: "كم يستغرق حتى التشغيل؟", a: "يعتمد الموعد على حجم النظام: بعد تحديد الوحدات المطلوبة وعدد الفروع نعطي الجدول الدقيق كتابةً. في الفرق الكبيرة أو متعددة الفروع نطبّق على مراحل. لا حاجة لأجهزة خاصة للموظفين — يكفي متصفح على حاسوب أو هاتف ذكي وTelegram." },
        { q: "أريد أتمتة تسجيل حضور الموظفين — من أين أبدأ؟", a: "ابدأ باستشارة مجانية — ندرس كيف يعمل فريقك ونحدد النظام الذي تحتاجه. ثم ننقل بياناتك من السجل الورقي أو Excel إلى النظام الجديد: يُسجَّل الدخول والخروج في النظام وتتكوّن التقارير تلقائياً. الأعمال: 30% مقدمًا والباقي على مراحل. للتواصل: Telegram أو ‎+998 91 777 66 09." },
      ],
    },
    related: {
      badge: "خدمات ذات صلة",
      title: "قد يفيدك",
      titleAccent: "أيضاً",
      subtitle: "حلول Tezcode القريبة من مراقبة الموظفين.",
      links: [
        { href: "/pos-tizimi", label: "نظام POS (RAOS)", desc: "كاشير ومخزون وتقارير لنقطة البيع — مع مراقبة الموظفين يصبح المتجر تحت السيطرة الكاملة." },
        { href: "/biznes-avtomatlashtirish", label: "أتمتة الأعمال", desc: "نظام في المستندات والتقارير والعمليات — امتداد طبيعي لنظام المراقبة." },
      ],
    },
    service: {
      name: "تطوير نظام مراقبة الموظفين | Tezcode",
      description:
        "تطوير نظام مراقبة الموظفين: إدارة المهام، وقت العمل والحضور، مراقبة التأخير، الأداء (KPI)، عرض الفروع، تقارير المدير، إشعارات Telegram. Tezcode — مقيم في IT Park. طشقند وكل أوزبكستان.",
      serviceType: "تطوير نظام مراقبة الموظفين",
    },
  },

  uk: {
    hero: {
      badge: "Розробка системи контролю співробітників · Ташкент",
      title1: "Система контролю",
      titleAccent: "співробітників",
      title2: "під ваш бізнес",
      subtitle:
        "Система контролю співробітників — це програма, яка показує завдання, робочий час, відвідуваність і ефективність кожного співробітника в одному дашборді: керівник точно бачить, хто чим зайнятий, скільки встиг і хто запізнюється — у цифрах, без здогадок. Tezcode, AI Software Factory в Ташкенті, розробляє таку систему під структуру вашого бізнесу: управління завданнями, відвідуваність, KPI-звіти та сповіщення в Telegram в одній системі.",
      trust: "Резидент IT Park • Безкоштовна консультація • Оплата: 30% передоплата",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Що вміє система?",
    },
    capabilities: {
      badge: "Можливості",
      title: "Що вміє",
      titleAccent: "система?",
      subtitle:
        "Залежно від потреб включаємо в систему ці модулі — від постановки завдання до звіту ви керуєте роботою команди з одного місця. В офісі, віддалено та у філіях.",
      items: [
        { icon: "check-circle-2", title: "Управління завданнями", desc: "Постановка завдань, терміни, відповідальний і статус (у роботі / готово). Видно, кому доручено і в якому стані кожне завдання — нічого не губиться." },
        { icon: "timer", title: "Робочий час і відвідуваність", desc: "Хто коли почав і закінчив роботу — облік без паперу, точний. Наприкінці місяця табель відвідуваності вже готовий." },
        { icon: "calendar", title: "Запізнення та графік роботи", desc: "Запізнення та ранні виходи фіксуються автоматично. Керівнику не треба питати про дисципліну — він бачить її у звіті." },
        { icon: "trending-up", title: "Ефективність (KPI)", desc: "Скільки завдань виконав кожен співробітник і за який час. Хто встигає, хто відстає — не суб'єктивна думка, а цифри." },
        { icon: "folder-open", title: "Проєкти та відділи", desc: "Групування завдань за проєктом, відділом або командою. Навіть велика команда лишається впорядкованою і на видноті." },
        { icon: "globe", title: "Філії та віддалена робота", desc: "Робота кількох філій, точок або віддаленої команди видна з центру. Стан кожного підрозділу — окремо." },
        { icon: "bell", title: "Сповіщення в Telegram", desc: "При наближенні терміну, призначенні або зміні завдання співробітник і керівник отримують автоматичне сповіщення — зокрема в Telegram." },
        { icon: "bar-chart-2", title: "Звіт керівнику", desc: "Денний і тижневий звіт: виконана робота, відвідуваність, запізнення, навантаження. Керівник бачить стан команди з одного погляду." },
      ],
    },
    process: {
      badge: "Як працюємо",
      title: "4 кроки до",
      titleAccent: "впорядкованої команди",
      subtitle: "Перша консультація безкоштовна. Далі кожен крок з точною ціною та терміном.",
      steps: [
        { num: "01", title: "Безкоштовна консультація", desc: "Вивчаємо, як працює команда, і разом визначаємо, яка система потрібна. Без зобов'язань: якщо система не окупиться — скажемо чесно.", icon: "message-circle" },
        { num: "02", title: "Розробка", desc: "Відділи, ролі, типи завдань і форми звітів — будуємо систему під структуру вашої команди.", icon: "wrench" },
        { num: "03", title: "Навчання", desc: "Самі навчаємо співробітників і керівників та показуємо роботу із системою наживо.", icon: "zap" },
        { num: "04", title: "Запуск + підтримка", desc: "Запускаємо, супроводжуємо в перші тижні та підтримуємо постійно.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Для кого",
      title: "Для яких команд",
      titleAccent: "система контролю співробітників?",
      subtitle: "Офіс, віддалена або змішана команда — для всіх.",
      items: [
        { tag: "01", title: "Офісні команди", desc: "Завдання, терміни, відвідуваність і звіти — керівник у курсі щодня, наради стають коротшими." },
        { tag: "02", title: "Віддалена команда", desc: "Хто над чим працює і скільки встиг — на відстані видно так само точно, як в офісі." },
        { tag: "03", title: "Філії та сервіс", desc: "Контроль роботи кількох точок або бригад з центру — стан кожної філії в окремому звіті." },
        { tag: "04", title: "Проєктні команди", desc: "Розподіл завдань за проєктом, контроль термінів і баланс навантаження — хто вільний, хто перевантажений." },
      ],
    },
    tech: {
      badge: "Як будується система",
      title: "Що буде",
      titleAccent: "всередині системи?",
      subtitle: "Без спеціального обладнання для співробітників — достатньо браузера і Telegram.",
      items: [
        { name: "Веб-дашборд", desc: "Панель для керівника та співробітників працює у браузері — і на комп'ютері, і на смартфоні. Окремий пристрій не потрібен." },
        { name: "Ролі та права доступу", desc: "Керівник, начальник відділу та співробітник входять з різними правами: кожен бачить лише ті дані, що його стосуються." },
        { name: "Інтеграція з Telegram", desc: "Нагадування та сповіщення приходять у Telegram, яким співробітники вже користуються — навчати новому застосунку не потрібно." },
        { name: "Модуль звітів", desc: "Денні та тижневі звіти — виконані завдання, відвідуваність, запізнення, навантаження — формуються автоматично, без ручного збору." },
        { name: "Команда в Ташкенті", desc: "Систему розробляє і підтримує команда Tezcode в Ташкенті: нова потреба доходить напряму до розробників." },
        { name: "Резидент IT Park", desc: "Tezcode — офіційний резидент IT Park Uzbekistan (свідоцтво №6237). Працюємо за офіційним договором із задокументованими зобов'язаннями." },
      ],
    },
    pricing: {
      badge: "Ціна",
      title: "Від чого залежить",
      titleAccent: "вартість?",
      subtitle:
        "Ціна залежить від обсягу системи та потрібних модулів — після безкоштовної консультації даємо письмову пропозицію.",
      factors: [
        { title: "Кількість модулів", desc: "Завдання, відвідуваність, KPI, філії, сповіщення в Telegram — що більше модулів потрібно, то більший обсяг розробки." },
        { title: "Обсяг налаштування", desc: "Що глибше налаштовуються відділи, ролі, типи завдань і форми звітів, то більше роботи." },
        { title: "Навчання та впровадження", desc: "У великій або багатофілійній команді впроваджуємо поетапно — термін визначається після консультації." },
      ],
      note:
        "Точна ціна дається письмово після безкоштовної консультації та уточнення потреб. Оплата: 30% передоплата, решта поетапно. Прихованих платежів немає — все в договорі.",
    },
    cta: {
      badge: "Час починати",
      title: "Наведемо порядок",
      titleAccent: "у роботі команди?",
      subtitle: "На безкоштовній консультації разом визначимо, яка система контролю співробітників потрібна вашій команді. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "5 найчастіших запитань про систему контролю співробітників.",
      items: [
        { q: "Що таке система контролю співробітників і що вона контролює?", a: "Система контролю співробітників — це програма, яка показує робочий процес співробітників в одному місці. Вона контролює три речі: завдання (хто, що, до якого терміну), робочий час і відвідуваність (прихід-вихід, запізнення) та ефективність (скільки завдань і за який час виконав кожен співробітник). Керівник бачить це в точних цифрах — без паперового журналу і здогадок. Мета — прозорість і порядок у роботі, а не стеження." },
        { q: "Чи стежить система за екраном або листуванням співробітників?", a: "Ні. Система, яку ми будуємо, не записує екран, не відстежує клавіатуру і не читає особисте листування. Вона фіксує лише робочі показники: завдання, відвідуваність, терміни й результати. Співробітники відкрито знають, які дані збираються — це не підриває довіру, а робить оцінку прозорою і справедливою." },
        { q: "Скільки коштує і як влаштована оплата?", a: "Ціна залежить від обсягу системи, потрібних модулів і глибини налаштування — точну суму даємо письмово після безкоштовної консультації. Оплата: 30% передоплата, решта поетапно. Прихованих платежів немає." },
        { q: "Скільки часу до запуску?", a: "Термін залежить від обсягу системи: коли визначено потрібні модулі та кількість філій, називаємо точний графік письмово. У великій або багатофілійній команді впроваджуємо поетапно. Спеціальне обладнання для співробітників не потрібне — достатньо браузера на комп'ютері чи смартфоні та Telegram." },
        { q: "Хочу автоматизувати облік відвідуваності співробітників — з чого почати?", a: "Почніть із безкоштовної консультації — вивчимо, як працює ваша команда, і визначимо, яка система потрібна. Потім переносимо дані з паперового журналу чи Excel у нову систему: прихід-вихід фіксується в системі, звіти формуються автоматично. За роботи — 30% передоплата, решта поетапно. Зв'язатися: Telegram або +998 91 777 66 09." },
      ],
    },
    related: {
      badge: "Пов'язані послуги",
      title: "Вам також може",
      titleAccent: "бути корисно",
      subtitle: "Рішення Tezcode, близькі до контролю співробітників.",
      links: [
        { href: "/pos-tizimi", label: "POS-система (RAOS)", desc: "Каса, склад і звіти для торгової точки — разом із контролем співробітників магазин повністю під контролем." },
        { href: "/biznes-avtomatlashtirish", label: "Автоматизація бізнесу", desc: "Порядок у документах, звітах і процесах — природне продовження системи контролю." },
      ],
    },
    service: {
      name: "Розробка системи контролю співробітників | Tezcode",
      description:
        "Розробка системи контролю співробітників: управління завданнями, робочий час і відвідуваність, контроль запізнень, ефективність (KPI), огляд філій, звіт керівнику, сповіщення в Telegram. Tezcode — резидент IT Park. Ташкент і весь Узбекистан.",
      serviceType: "Розробка системи контролю співробітників",
    },
  },
};
