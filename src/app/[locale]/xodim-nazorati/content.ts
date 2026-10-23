import type { ServicePageContent } from "@/components/service-page/types";

// Content for /xodim-nazorati — target keywords: "xodim nazorati", "xodim nazorati tizimi",
// "xodimlar nazorati tizimi", "ish vaqti nazorati", "davomat tizimi", "vazifa boshqaruv",
// "контроль сотрудников программа Ташкент", "учёт рабочего времени",
// "staff monitoring system Uzbekistan". Product: WorkControl (Tezcode's own product).
// Only confirmed facts: task management, work time & attendance, lateness, KPI, projects/
// departments, branch view, Telegram notifications, manager reports, web dashboard,
// subscription by team size, setup+training in days, free demo, 30% upfront for rollout.
// NO screen recording / keylogging claims (we don't do that), no fabricated client counts.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "Xodim nazorati tizimi — WorkControl · Toshkent",
      title1: "Jamoangiz uchun",
      titleAccent: "xodim nazorati tizimi — WorkControl",
      title2: "",
      subtitle:
        "Xodim nazorati tizimi — bu har bir xodimning vazifalari, ish vaqti, davomati va samaradorligini bitta dashboardda ko'rsatadigan dastur: rahbar kim nima bilan band, kim qancha ulgurgan va kim kechikayotganini taxminsiz, aniq raqamlarda ko'radi. WorkControl — Toshkentdagi AI Software Factory Tezcode'ning o'z mahsuloti: vazifa boshqaruvi, davomat, KPI hisobotlari va Telegram bildirishnomalari bitta tizimda.",
      trust: "IT Park rezidenti • Bepul demo • To'lov: 30% oldindan",
      ctaPrimary: "Bepul demo so'rang",
      ctaSecondary: "WorkControl nima qila oladi?",
    },
    capabilities: {
      badge: "Imkoniyatlar",
      title: "WorkControl",
      titleAccent: "nima qila oladi?",
      subtitle:
        "Vazifa berishdan hisobotgacha — jamoa ishini bitta joydan boshqaring. Ofisda ham, masofada ham, filiallarda ham.",
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
      badge: "Qanday boshlaymiz",
      title: "4 qadamda",
      titleAccent: "tartibli jamoaga",
      subtitle: "Birinchi demo bepul. Keyin har qadam aniq narx va aniq muddat bilan.",
      steps: [
        { num: "01", title: "Bepul demo", desc: "Jamoangiz qanday ishlashini o'rganamiz va WorkControl'ni jonli ko'rsatamiz. Majburiyat yo'q: tizim foyda bermasa, ochiq aytamiz.", icon: "message-circle" },
        { num: "02", title: "Sozlash", desc: "Bo'limlar, rollar, vazifa turlari va hisobot shakllari — jamoangiz tuzilmasiga moslab sozlaymiz.", icon: "wrench" },
        { num: "03", title: "O'rgatish", desc: "Xodim va rahbarlarni o'zimiz o'rgatamiz. Interfeys sodda — odatda bitta sessiya yetarli.", icon: "zap" },
        { num: "04", title: "Ishga tushirish + qo'llab-quvvatlash", desc: "Jonli ishga tushiramiz, birinchi haftalarda kuzatib boramiz va doimiy qo'llab-quvvatlaymiz.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Kimlar uchun",
      title: "WorkControl qaysi",
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
      badge: "Tizim qanday qurilgan",
      title: "WorkControl",
      titleAccent: "ichida nima bor?",
      subtitle:
        "Murakkab o'rnatish va maxsus qurilmalarsiz — brauzer va Telegram yetarli.",
      items: [
        { name: "Veb dashboard", desc: "Rahbar va xodimlar uchun brauzerda ishlaydigan panel — kompyuterda ham, smartfonda ham ochiladi. Alohida qurilma yoki server shart emas." },
        { name: "Rollar va ruxsatlar", desc: "Rahbar, bo'lim boshlig'i va xodim har xil huquq bilan kiradi: har kim faqat o'ziga tegishli ma'lumotni ko'radi." },
        { name: "Telegram integratsiyasi", desc: "Eslatma va bildirishnomalar xodimlar allaqachon ishlatayotgan Telegram'ga boradi — yangi ilova o'rgatish shart emas." },
        { name: "Hisobot moduli", desc: "Kunlik va haftalik hisobotlar — bajarilgan vazifa, davomat, kechikish, yuklama — avtomatik shakllanadi, qo'lda yig'ilmaydi." },
        { name: "Tezcode'ning o'z mahsuloti", desc: "WorkControl — RAOS va CoreMed qatori Tezcode'ning o'z mahsuloti. Kod va jamoa Toshkentda: yangi ehtiyoj chiqsa, so'rov to'g'ridan-to'g'ri ishlab chiquvchilarga yetadi." },
        { name: "IT Park rezidenti", desc: "Tezcode — IT Park Uzbekistan rasmiy rezidenti (guvohnoma №6237). Rasmiy shartnoma va hujjatlashtirilgan majburiyatlar bilan ishlaymiz." },
      ],
    },
    pricing: {
      badge: "Narx",
      title: "Narx nimaga",
      titleAccent: "bog'liq?",
      subtitle:
        "WorkControl $35/oy dan boshlanadi. Aniq tarif jamoa hajmi va xodimlar soniga bog'liq — bepul demodan keyin yozma taklif beramiz.",
      factors: [
        { title: "Xodimlar soni", price: "$35/oy dan", desc: "Obuna narxi jamoa hajmiga qarab hisoblanadi: 10 kishilik jamoa bilan 100 kishilik kompaniya uchun narx har xil bo'ladi." },
        { title: "Sozlash hajmi", desc: "Bo'limlar, rollar, vazifa turlari va hisobot shakllari qanchalik chuqur moslashtirilsa, joriy etish ishi shuncha ko'p bo'ladi." },
        { title: "O'rgatish va joriy etish", desc: "Sozlash va o'rgatish odatda bir necha kun. Katta yoki ko'p filialli jamoada bosqichma-bosqich joriy etamiz — muddat demodan keyin aniqlanadi." },
      ],
      note:
        "Aniq narx bepul demo va ehtiyojlarni aniqlashdan keyin yozma taklifda beriladi. To'lov: 30% oldindan, qolgani bosqichma-bosqich. Yashirin to'lovlar yo'q — hammasi shartnomada.",
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Jamoa ishini",
      titleAccent: "tartibga solamizmi?",
      subtitle: "Bepul demoda WorkControl sizning jamoangizda qanday ishlashini ko'rasiz. Majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "Xodim nazorati tizimi va WorkControl haqida ko'p so'raladigan 5 savol.",
      items: [
        { q: "Xodim nazorati tizimi nima va WorkControl nimani nazorat qiladi?", a: "Xodim nazorati tizimi — xodimlarning ish jarayonini bitta joyda ko'rsatadigan dastur. WorkControl uchta narsani nazorat qiladi: vazifalar (kim, nima, qachongacha), ish vaqti va davomat (kelish-ketish, kechikish) hamda samaradorlik (har xodim qancha vazifani qancha vaqtda bajargani). Rahbar buni aniq raqamlarda ko'radi — qog'oz jurnal va taxminlarsiz. Maqsad — josuslik emas, ish jarayonini shaffof va tartibli qilish." },
        { q: "Xodimlar ekrani yoki yozishmalarini kuzatadimi?", a: "Yo'q. WorkControl ekran yozuvi, klaviatura kuzatuvi yoki shaxsiy yozishmalarni o'qish bilan shug'ullanmaydi. Tizim faqat ish ko'rsatkichlarini qayd etadi: vazifa, davomat, muddat va natija. Xodimlar qaysi ma'lumot yig'ilishini ochiq biladi — bu ishonchni buzmaydi, aksincha baholashni shaffof va adolatli qiladi." },
        { q: "Narxi qancha va to'lov qanday?", a: "WorkControl $35/oy dan boshlanadi. Narx obuna asosida bo'lib, xodimlar soni va sozlash hajmiga bog'liq — aniq tarifni bepul demodan keyin yozma taklifda beramiz. Joriy etish to'lovi: 30% oldindan, qolgani bosqichma-bosqich. Yashirin to'lovlar yo'q." },
        { q: "Qancha vaqtda ishga tushadi?", a: "Sozlash va o'rgatish odatda bir necha kun oladi — bu oylab cho'ziladigan IT loyiha emas. Katta yoki ko'p filialli jamoada muddat biroz uzayadi; aniq jadvalni demodan keyin yozma aytamiz. Maxsus qurilma shart emas — oddiy kompyuter yoki smartfon brauzeri va Telegram yetarli." },
        { q: "Xodimlar davomatini avtomatlashtirmoqchiman — qanday boshlayman?", a: "Bepul demodan boshlang — tizimni jamoangiz misolida jonli ko'rasiz. Keyin qog'oz jurnal yoki Excel'dagi ma'lumotlarni WorkControl'ga o'tkazamiz: kelish-ketish tizimda qayd etiladi, hisobot avtomatik shakllanadi. Joriy etish ishlari uchun 30% oldindan to'lanadi, qolgani bosqichma-bosqich. Demoga yozilish: Telegram yoki +998 91 777 66 09." },
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
      name: "WorkControl — xodimlar ish nazorati tizimi | Tezcode",
      description:
        "Xodim nazorati tizimi WorkControl: vazifa boshqaruvi, ish vaqti va davomat, kechikish nazorati, samaradorlik (KPI), filiallar ko'rinishi, rahbar hisoboti, Telegram bildirishnoma. Tezcode — IT Park rezidenti. Toshkent va butun O'zbekiston.",
      serviceType: "Xodim nazorati / vazifa va ish vaqti boshqaruvi",
    },
  },

  ru: {
    hero: {
      badge: "Контроль сотрудников — WorkControl · Ташкент",
      title1: "Система контроля",
      titleAccent: "сотрудников — WorkControl",
      title2: "",
      subtitle:
        "Система контроля сотрудников — это программа, которая показывает задачи, рабочее время, посещаемость и эффективность каждого сотрудника в одном дашборде: руководитель точно видит, кто чем занят, сколько успел и кто опаздывает — в цифрах, без догадок. WorkControl — собственный продукт Tezcode, AI Software Factory в Ташкенте: управление задачами, посещаемость, KPI-отчёты и уведомления в Telegram в одной системе.",
      trust: "Резидент IT Park • Бесплатное демо • Оплата: 30% предоплата",
      ctaPrimary: "Запросить демо",
      ctaSecondary: "Что умеет WorkControl?",
    },
    capabilities: {
      badge: "Возможности",
      title: "Что умеет",
      titleAccent: "WorkControl?",
      subtitle:
        "От постановки задачи до отчёта — управляйте работой команды из одного места. В офисе, удалённо и в филиалах.",
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
      badge: "Как начинаем",
      title: "4 шага до",
      titleAccent: "упорядоченной команды",
      subtitle: "Первое демо бесплатно. Дальше каждый шаг с точной ценой и сроком.",
      steps: [
        { num: "01", title: "Бесплатное демо", desc: "Изучаем, как работает команда, и показываем WorkControl вживую. Без обязательств: если система не окупится — скажем честно.", icon: "message-circle" },
        { num: "02", title: "Настройка", desc: "Отделы, роли, типы задач и формы отчётов — настраиваем под структуру вашей команды.", icon: "wrench" },
        { num: "03", title: "Обучение", desc: "Сами обучаем сотрудников и руководителей. Интерфейс простой — обычно достаточно одной сессии.", icon: "zap" },
        { num: "04", title: "Запуск + поддержка", desc: "Запускаем, сопровождаем в первые недели и поддерживаем постоянно.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Для кого",
      title: "Для каких",
      titleAccent: "команд WorkControl?",
      subtitle: "Офис, удалёнка или смешанная команда — для всех.",
      items: [
        { tag: "01", title: "Офисные команды", desc: "Задачи, сроки, посещаемость и отчёты — руководитель в курсе каждый день, совещания становятся короче." },
        { tag: "02", title: "Удалённая команда", desc: "Кто над чем работает и сколько успел — на расстоянии видно так же точно, как в офисе." },
        { tag: "03", title: "Филиалы и сервис", desc: "Контроль работы нескольких точек или бригад из центра — состояние каждого филиала в отдельном отчёте." },
        { tag: "04", title: "Проектные команды", desc: "Распределение задач по проекту, контроль сроков и баланс загрузки — кто свободен, кто перегружен." },
      ],
    },
    tech: {
      badge: "Как устроена система",
      title: "Что внутри",
      titleAccent: "WorkControl?",
      subtitle: "Без сложной установки и специального оборудования — достаточно браузера и Telegram.",
      items: [
        { name: "Веб-дашборд", desc: "Панель для руководителя и сотрудников работает в браузере — и на компьютере, и на смартфоне. Отдельное устройство или сервер не нужны." },
        { name: "Роли и права доступа", desc: "Руководитель, начальник отдела и сотрудник входят с разными правами: каждый видит только те данные, которые его касаются." },
        { name: "Интеграция с Telegram", desc: "Напоминания и уведомления приходят в Telegram, которым сотрудники уже пользуются — обучать новому приложению не нужно." },
        { name: "Модуль отчётов", desc: "Дневные и недельные отчёты — выполненные задачи, посещаемость, опоздания, загрузка — формируются автоматически, без ручного сбора." },
        { name: "Собственный продукт Tezcode", desc: "WorkControl — наш продукт, как RAOS и CoreMed. Код и команда в Ташкенте: новая потребность доходит напрямую до разработчиков." },
        { name: "Резидент IT Park", desc: "Tezcode — официальный резидент IT Park Uzbekistan (свидетельство №6237). Работаем по официальному договору с задокументированными обязательствами." },
      ],
    },
    pricing: {
      badge: "Цена",
      title: "От чего зависит",
      titleAccent: "стоимость?",
      subtitle:
        "WorkControl — от $35/мес. Точный тариф зависит от размера команды и числа сотрудников — после бесплатного демо даём письменное предложение.",
      factors: [
        { title: "Число сотрудников", price: "от $35/мес", desc: "Стоимость подписки считается по размеру команды: для команды из 10 человек и компании из 100 цена будет разной." },
        { title: "Объём настройки", desc: "Чем глубже настраиваются отделы, роли, типы задач и формы отчётов, тем больше работы по внедрению." },
        { title: "Обучение и внедрение", desc: "Настройка и обучение обычно занимают несколько дней. В большой или многофилиальной команде внедряем поэтапно — срок определяется после демо." },
      ],
      note:
        "Точная цена даётся письменно после бесплатного демо и уточнения потребностей. Оплата: 30% предоплата, остальное поэтапно. Скрытых платежей нет — всё в договоре.",
    },
    cta: {
      badge: "Время начать",
      title: "Наведём порядок",
      titleAccent: "в работе команды?",
      subtitle: "На бесплатном демо увидите, как WorkControl работает в вашей команде. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "5 самых частых вопросов о системе контроля сотрудников WorkControl.",
      items: [
        { q: "Что такое система контроля сотрудников и что контролирует WorkControl?", a: "Система контроля сотрудников — это программа, которая показывает рабочий процесс сотрудников в одном месте. WorkControl контролирует три вещи: задачи (кто, что, к какому сроку), рабочее время и посещаемость (приход-уход, опоздания) и эффективность (сколько задач и за какое время выполнил каждый сотрудник). Руководитель видит это в точных цифрах — без бумажного журнала и догадок. Цель — не слежка, а прозрачность и порядок в работе." },
        { q: "Следит ли система за экраном или перепиской сотрудников?", a: "Нет. WorkControl не занимается записью экрана, отслеживанием клавиатуры или чтением личной переписки. Система фиксирует только рабочие показатели: задачи, посещаемость, сроки и результаты. Сотрудники открыто знают, какие данные собираются — это не подрывает доверие, а делает оценку прозрачной и справедливой." },
        { q: "Сколько стоит и как устроена оплата?", a: "WorkControl — от $35/мес. Цена по подписке зависит от числа сотрудников и объёма настройки — точный тариф даём письменно после бесплатного демо. Оплата за внедрение: 30% предоплата, остальное поэтапно. Скрытых платежей нет." },
        { q: "Сколько времени до запуска?", a: "Настройка и обучение обычно занимают несколько дней — это не IT-проект на месяцы. В большой или многофилиальной команде срок немного больше; точный график назовём письменно после демо. Специального оборудования не нужно — достаточно браузера на компьютере или смартфоне и Telegram." },
        { q: "Хочу автоматизировать учёт посещаемости сотрудников — с чего начать?", a: "Начните с бесплатного демо — увидите систему вживую на примере вашей команды. Затем мы переносим данные из бумажного журнала или Excel в WorkControl: приход-уход фиксируется в системе, отчёты формируются автоматически. За работы по внедрению — 30% предоплата, остальное поэтапно. Записаться на демо: Telegram или +998 91 777 66 09." },
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
      name: "WorkControl — система контроля сотрудников | Tezcode",
      description:
        "Система контроля сотрудников WorkControl: управление задачами, рабочее время и посещаемость, контроль опозданий, эффективность (KPI), обзор филиалов, отчёт руководителю, уведомления в Telegram. Tezcode — резидент IT Park. Ташкент и весь Узбекистан.",
      serviceType: "Контроль сотрудников / управление задачами и временем",
    },
  },

  en: {
    hero: {
      badge: "Staff monitoring system — WorkControl · Tashkent",
      title1: "A staff monitoring system",
      titleAccent: "for your team — WorkControl",
      title2: "",
      subtitle:
        "A staff monitoring system is software that shows every employee's tasks, work time, attendance and performance in one dashboard: the manager sees exactly who is doing what, how much they've done and who is late — in numbers, not guesses. WorkControl is Tezcode's own product — built by the AI Software Factory in Tashkent: task management, attendance, KPI reports and Telegram notifications in one system.",
      trust: "IT Park resident • Free demo • Payment: 30% upfront",
      ctaPrimary: "Request a free demo",
      ctaSecondary: "What can WorkControl do?",
    },
    capabilities: {
      badge: "Capabilities",
      title: "What can",
      titleAccent: "WorkControl do?",
      subtitle:
        "From assigning a task to the report — manage your team's work from one place. In the office, remotely and across branches.",
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
      badge: "How we start",
      title: "4 steps to an",
      titleAccent: "organized team",
      subtitle: "The first demo is free. Then every step has a clear price and timeline.",
      steps: [
        { num: "01", title: "Free demo", desc: "We study how your team works and show WorkControl live. No obligations: if the system won't pay off, we say so honestly.", icon: "message-circle" },
        { num: "02", title: "Setup", desc: "Departments, roles, task types and report formats — configured to match your team's structure.", icon: "wrench" },
        { num: "03", title: "Training", desc: "We train staff and managers ourselves. The interface is simple — one session is usually enough.", icon: "zap" },
        { num: "04", title: "Launch + support", desc: "We go live, monitor the first weeks and support you continuously.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Who it's for",
      title: "Which teams",
      titleAccent: "is WorkControl for?",
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
      title: "What's inside",
      titleAccent: "WorkControl?",
      subtitle: "No complicated installation or special hardware — a browser and Telegram are enough.",
      items: [
        { name: "Web dashboard", desc: "A browser-based panel for managers and staff — opens on a computer or a smartphone. No separate device or server needed." },
        { name: "Roles & access rights", desc: "Manager, department head and employee log in with different rights: everyone sees only the data that concerns them." },
        { name: "Telegram integration", desc: "Reminders and notifications go to Telegram — the app your staff already uses. No new app to teach." },
        { name: "Reporting module", desc: "Daily and weekly reports — completed tasks, attendance, lateness, workload — are generated automatically, with no manual collection." },
        { name: "Tezcode's own product", desc: "WorkControl is our own product, alongside RAOS and CoreMed. Code and team are in Tashkent: a new need reaches the developers directly." },
        { name: "IT Park resident", desc: "Tezcode is an official resident of IT Park Uzbekistan (certificate No. 6237). We work under an official contract with documented obligations." },
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "What does the price",
      titleAccent: "depend on?",
      subtitle:
        "WorkControl starts from $35/mo. The exact rate depends on team size and headcount — we give a written proposal after a free demo.",
      factors: [
        { title: "Number of employees", price: "from $35/mo", desc: "The subscription is priced by team size: a 10-person team and a 100-person company pay differently." },
        { title: "Depth of setup", desc: "The more departments, roles, task types and report formats need customizing, the more rollout work there is." },
        { title: "Training & rollout", desc: "Setup and training usually take a few days. For a large or multi-branch team we roll out in stages — the timeline is set after the demo." },
      ],
      note:
        "The exact price comes in writing after the free demo and needs analysis. Payment: 30% upfront, the rest step by step. No hidden fees — everything is in the contract.",
    },
    cta: {
      badge: "Time to start",
      title: "Bring order to",
      titleAccent: "your team's work?",
      subtitle: "In a free demo you'll see how WorkControl works in your team. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "The 5 most common questions about the WorkControl staff monitoring system.",
      items: [
        { q: "What is a staff monitoring system, and what does WorkControl track?", a: "A staff monitoring system is software that shows your team's work in one place. WorkControl tracks three things: tasks (who, what, by when), work time and attendance (check-in/out, lateness), and performance (how many tasks each employee completed and how fast). The manager sees it in precise numbers — without paper logs or guessing. The goal is transparency and order in the workflow, not surveillance." },
        { q: "Does it watch employees' screens or messages?", a: "No. WorkControl does no screen recording, keystroke logging or reading of private messages. The system records work metrics only: tasks, attendance, deadlines and results. Employees know openly what data is collected — that doesn't damage trust; it makes evaluation transparent and fair." },
        { q: "How much does it cost and how does payment work?", a: "WorkControl starts from $35/mo. The subscription price depends on the number of employees and the depth of setup — the exact rate comes in writing after a free demo. Rollout payment: 30% upfront, the rest step by step. No hidden fees." },
        { q: "How long until it's running?", a: "Setup and training usually take a few days — this is not a months-long IT project. For a large or multi-branch team it takes somewhat longer; we give the exact schedule in writing after the demo. No special hardware is needed — a browser on a computer or smartphone plus Telegram is enough." },
        { q: "I want to automate employee attendance tracking — where do I start?", a: "Start with a free demo — you'll see the system live on your team's example. Then we migrate your data from paper logs or Excel into WorkControl: check-ins and check-outs are recorded in the system and reports are generated automatically. Rollout work is 30% upfront, the rest step by step. Book a demo via Telegram or +998 91 777 66 09." },
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
      name: "WorkControl — staff monitoring system | Tezcode",
      description:
        "WorkControl staff monitoring system: task management, work time and attendance, lateness control, performance (KPI), branch overview, manager reports, Telegram notifications. Tezcode — IT Park resident. Tashkent and all of Uzbekistan.",
      serviceType: "Staff monitoring / task and time management",
    },
  },

  ar: {
    hero: {
      badge: "نظام مراقبة الموظفين — WorkControl · طشقند",
      title1: "نظام مراقبة الموظفين",
      titleAccent: "لفريقك — WorkControl",
      title2: "",
      subtitle:
        "نظام مراقبة الموظفين هو برنامج يعرض مهام كل موظف ووقت عمله وحضوره وأداءه في لوحة واحدة: يرى المدير بدقة من يعمل على ماذا وكم أنجز ومن تأخر — بالأرقام لا بالتخمين. WorkControl منتج خاص بشركة Tezcode — مصنع برمجيات AI في طشقند: إدارة المهام، الحضور، تقارير KPI وإشعارات Telegram في نظام واحد.",
      trust: "مقيم رسمي في IT Park • عرض تجريبي مجاني • الدفع: 30% مقدمًا",
      ctaPrimary: "اطلب عرضاً تجريبياً مجانياً",
      ctaSecondary: "ماذا يفعل WorkControl؟",
    },
    capabilities: {
      badge: "الإمكانيات",
      title: "ماذا يفعل",
      titleAccent: "WorkControl؟",
      subtitle: "من إسناد المهمة إلى التقرير — أدر عمل فريقك من مكان واحد. في المكتب وعن بُعد وفي الفروع.",
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
      badge: "كيف نبدأ",
      title: "4 خطوات إلى",
      titleAccent: "فريق منظَّم",
      subtitle: "العرض التجريبي الأول مجاني. ثم كل خطوة بسعر وموعد واضحين.",
      steps: [
        { num: "01", title: "عرض تجريبي مجاني", desc: "ندرس كيف يعمل فريقك ونعرض WorkControl مباشرة. بلا التزام: إن لم يكن النظام مجدياً — نقولها بصراحة.", icon: "message-circle" },
        { num: "02", title: "الإعداد", desc: "الأقسام والأدوار وأنواع المهام وأشكال التقارير — نضبطها لتناسب بنية فريقك.", icon: "wrench" },
        { num: "03", title: "التدريب", desc: "ندرّب الموظفين والمدراء بأنفسنا. الواجهة بسيطة — جلسة واحدة تكفي عادةً.", icon: "zap" },
        { num: "04", title: "الإطلاق + الدعم", desc: "نطلق النظام، نتابعه في الأسابيع الأولى وندعمك باستمرار.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "لمن",
      title: "لأي",
      titleAccent: "فرق WorkControl؟",
      subtitle: "مكتب، عن بُعد أو فريق مختلط — للجميع.",
      items: [
        { tag: "01", title: "فرق المكاتب", desc: "المهام والمواعيد والحضور والتقارير — المدير على اطلاع يومياً والاجتماعات تصبح أقصر." },
        { tag: "02", title: "فريق عن بُعد", desc: "من يعمل على ماذا وكم أنجز — واضح عن بُعد بنفس دقة المكتب." },
        { tag: "03", title: "الفروع والخدمة الميدانية", desc: "متابعة عمل عدة مواقع أو فرق من المركز — حالة كل فرع في تقرير خاص." },
        { tag: "04", title: "فرق المشاريع", desc: "توزيع المهام حسب المشروع، مراقبة المواعيد وتوازن حجم العمل — من متاح ومن محمَّل فوق طاقته." },
      ],
    },
    tech: {
      badge: "كيف بُني النظام",
      title: "ماذا يوجد داخل",
      titleAccent: "WorkControl؟",
      subtitle: "بلا تركيب معقّد أو أجهزة خاصة — يكفي متصفح وTelegram.",
      items: [
        { name: "لوحة تحكم ويب", desc: "لوحة تعمل في المتصفح للمدير والموظفين — تُفتح على الكمبيوتر والهاتف الذكي. لا حاجة لجهاز أو خادم منفصل." },
        { name: "الأدوار والصلاحيات", desc: "المدير ورئيس القسم والموظف يدخلون بصلاحيات مختلفة: كلٌّ يرى فقط البيانات التي تخصه." },
        { name: "تكامل مع Telegram", desc: "التذكيرات والإشعارات تصل إلى Telegram الذي يستخدمه الموظفون أصلاً — لا حاجة لتعليم تطبيق جديد." },
        { name: "وحدة التقارير", desc: "تقارير يومية وأسبوعية — المهام المنجزة، الحضور، التأخير، حجم العمل — تتكوّن تلقائياً دون جمع يدوي." },
        { name: "منتج Tezcode الخاص", desc: "WorkControl منتجنا الخاص، مثل RAOS وCoreMed. الكود والفريق في طشقند: أي احتياج جديد يصل مباشرة إلى المطورين." },
        { name: "مقيم في IT Park", desc: "Tezcode مقيم رسمي في IT Park Uzbekistan (شهادة رقم 6237). نعمل بعقد رسمي والتزامات موثّقة." },
      ],
    },
    pricing: {
      badge: "السعر",
      title: "على ماذا يعتمد",
      titleAccent: "السعر؟",
      subtitle:
        "يبدأ WorkControl من 35$ شهرياً. يعتمد السعر الدقيق على حجم الفريق وعدد الموظفين — نقدّم عرضاً كتابياً بعد العرض التجريبي المجاني.",
      factors: [
        { title: "عدد الموظفين", price: "من 35$ شهرياً", desc: "يُحسب الاشتراك حسب حجم الفريق: فريق من 10 أشخاص وشركة من 100 يدفعان بشكل مختلف." },
        { title: "عمق الإعداد", desc: "كلما زاد تخصيص الأقسام والأدوار وأنواع المهام وأشكال التقارير، زاد عمل التطبيق." },
        { title: "التدريب والتطبيق", desc: "يستغرق الإعداد والتدريب عادةً بضعة أيام. في الفرق الكبيرة أو متعددة الفروع نطبّق على مراحل — يُحدَّد الموعد بعد العرض التجريبي." },
      ],
      note:
        "يُقدَّم السعر الدقيق كتابةً بعد العرض التجريبي المجاني وتحديد الاحتياجات. الدفع: 30% مقدمًا والباقي على مراحل. لا رسوم خفية — كل شيء في العقد.",
    },
    cta: {
      badge: "وقت البدء",
      title: "ننظّم عمل",
      titleAccent: "فريقك؟",
      subtitle: "في عرض تجريبي مجاني سترى كيف يعمل WorkControl في فريقك. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع بكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أكثر 5 أسئلة شيوعاً عن نظام مراقبة الموظفين WorkControl.",
      items: [
        { q: "ما هو نظام مراقبة الموظفين وما الذي يراقبه WorkControl؟", a: "نظام مراقبة الموظفين برنامج يعرض سير عمل الموظفين في مكان واحد. يراقب WorkControl ثلاثة أشياء: المهام (من، ماذا، بأي موعد)، وقت العمل والحضور (الدخول والخروج والتأخير)، والأداء (كم مهمة أنجز كل موظف وبأي سرعة). يرى المدير ذلك بأرقام دقيقة — دون سجل ورقي أو تخمين. الهدف الشفافية والنظام في سير العمل — وليس التجسس." },
        { q: "هل يراقب شاشات الموظفين أو مراسلاتهم؟", a: "لا. لا يقوم WorkControl بتسجيل الشاشة أو تتبّع لوحة المفاتيح أو قراءة الرسائل الخاصة. يسجّل النظام مؤشرات العمل فقط: المهام والحضور والمواعيد والنتائج. يعرف الموظفون بوضوح ما البيانات التي تُجمع — وهذا لا يهدم الثقة بل يجعل التقييم شفافاً وعادلاً." },
        { q: "كم التكلفة وكيف يتم الدفع؟", a: "يبدأ WorkControl من 35$ شهرياً. سعر الاشتراك يعتمد على عدد الموظفين وعمق الإعداد — يُقدَّم السعر الدقيق كتابةً بعد عرض تجريبي مجاني. دفع التطبيق: 30% مقدمًا والباقي على مراحل. لا رسوم خفية." },
        { q: "كم يستغرق حتى التشغيل؟", a: "يستغرق الإعداد والتدريب عادةً بضعة أيام — ليس مشروعاً تقنياً يمتد لأشهر. في الفرق الكبيرة أو متعددة الفروع يطول الوقت قليلاً؛ نعطي الجدول الدقيق كتابةً بعد العرض التجريبي. لا حاجة لأجهزة خاصة — يكفي متصفح على حاسوب أو هاتف ذكي وTelegram." },
        { q: "أريد أتمتة تسجيل حضور الموظفين — من أين أبدأ؟", a: "ابدأ بالعرض التجريبي المجاني — ترى النظام مباشرةً على مثال فريقك. ثم ننقل بياناتك من السجل الورقي أو Excel إلى WorkControl: يُسجَّل الدخول والخروج في النظام وتتكوّن التقارير تلقائياً. أعمال التطبيق: 30% مقدمًا والباقي على مراحل. للحجز: Telegram أو ‎+998 91 777 66 09." },
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
      name: "WorkControl — نظام مراقبة الموظفين | Tezcode",
      description:
        "نظام مراقبة الموظفين WorkControl: إدارة المهام، وقت العمل والحضور، مراقبة التأخير، الأداء (KPI)، عرض الفروع، تقارير المدير، إشعارات Telegram. Tezcode — مقيم في IT Park. طشقند وكل أوزبكستان.",
      serviceType: "مراقبة الموظفين / إدارة المهام والوقت",
    },
  },

  uk: {
    hero: {
      badge: "Контроль співробітників — WorkControl · Ташкент",
      title1: "Система контролю",
      titleAccent: "співробітників — WorkControl",
      title2: "",
      subtitle:
        "Система контролю співробітників — це програма, яка показує завдання, робочий час, відвідуваність і ефективність кожного співробітника в одному дашборді: керівник точно бачить, хто чим зайнятий, скільки встиг і хто запізнюється — у цифрах, без здогадок. WorkControl — власний продукт Tezcode, AI Software Factory в Ташкенті: управління завданнями, відвідуваність, KPI-звіти та сповіщення в Telegram в одній системі.",
      trust: "Резидент IT Park • Безкоштовне демо • Оплата: 30% передоплата",
      ctaPrimary: "Запросити демо",
      ctaSecondary: "Що вміє WorkControl?",
    },
    capabilities: {
      badge: "Можливості",
      title: "Що вміє",
      titleAccent: "WorkControl?",
      subtitle:
        "Від постановки завдання до звіту — керуйте роботою команди з одного місця. В офісі, віддалено та у філіях.",
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
      badge: "Як починаємо",
      title: "4 кроки до",
      titleAccent: "впорядкованої команди",
      subtitle: "Перше демо безкоштовне. Далі кожен крок з точною ціною та терміном.",
      steps: [
        { num: "01", title: "Безкоштовне демо", desc: "Вивчаємо, як працює команда, і показуємо WorkControl наживо. Без зобов'язань: якщо система не окупиться — скажемо чесно.", icon: "message-circle" },
        { num: "02", title: "Налаштування", desc: "Відділи, ролі, типи завдань і форми звітів — налаштовуємо під структуру вашої команди.", icon: "wrench" },
        { num: "03", title: "Навчання", desc: "Самі навчаємо співробітників і керівників. Інтерфейс простий — зазвичай достатньо однієї сесії.", icon: "zap" },
        { num: "04", title: "Запуск + підтримка", desc: "Запускаємо, супроводжуємо в перші тижні та підтримуємо постійно.", icon: "rocket" },
      ],
    },
    examples: {
      badge: "Для кого",
      title: "Для яких",
      titleAccent: "команд WorkControl?",
      subtitle: "Офіс, віддалена або змішана команда — для всіх.",
      items: [
        { tag: "01", title: "Офісні команди", desc: "Завдання, терміни, відвідуваність і звіти — керівник у курсі щодня, наради стають коротшими." },
        { tag: "02", title: "Віддалена команда", desc: "Хто над чим працює і скільки встиг — на відстані видно так само точно, як в офісі." },
        { tag: "03", title: "Філії та сервіс", desc: "Контроль роботи кількох точок або бригад з центру — стан кожної філії в окремому звіті." },
        { tag: "04", title: "Проєктні команди", desc: "Розподіл завдань за проєктом, контроль термінів і баланс навантаження — хто вільний, хто перевантажений." },
      ],
    },
    tech: {
      badge: "Як побудована система",
      title: "Що всередині",
      titleAccent: "WorkControl?",
      subtitle: "Без складної інсталяції та спеціального обладнання — достатньо браузера і Telegram.",
      items: [
        { name: "Веб-дашборд", desc: "Панель для керівника та співробітників працює у браузері — і на комп'ютері, і на смартфоні. Окремий пристрій чи сервер не потрібні." },
        { name: "Ролі та права доступу", desc: "Керівник, начальник відділу та співробітник входять з різними правами: кожен бачить лише ті дані, що його стосуються." },
        { name: "Інтеграція з Telegram", desc: "Нагадування та сповіщення приходять у Telegram, яким співробітники вже користуються — навчати новому застосунку не потрібно." },
        { name: "Модуль звітів", desc: "Денні та тижневі звіти — виконані завдання, відвідуваність, запізнення, навантаження — формуються автоматично, без ручного збору." },
        { name: "Власний продукт Tezcode", desc: "WorkControl — наш продукт, як RAOS і CoreMed. Код і команда в Ташкенті: нова потреба доходить напряму до розробників." },
        { name: "Резидент IT Park", desc: "Tezcode — офіційний резидент IT Park Uzbekistan (свідоцтво №6237). Працюємо за офіційним договором із задокументованими зобов'язаннями." },
      ],
    },
    pricing: {
      badge: "Ціна",
      title: "Від чого залежить",
      titleAccent: "вартість?",
      subtitle:
        "WorkControl — від $35/міс. Точний тариф залежить від розміру команди та кількості співробітників — після безкоштовного демо даємо письмову пропозицію.",
      factors: [
        { title: "Кількість співробітників", price: "від $35/міс", desc: "Вартість підписки рахується за розміром команди: для команди з 10 осіб і компанії зі 100 ціна буде різною." },
        { title: "Обсяг налаштування", desc: "Що глибше налаштовуються відділи, ролі, типи завдань і форми звітів, то більше роботи з впровадження." },
        { title: "Навчання та впровадження", desc: "Налаштування і навчання зазвичай займають кілька днів. У великій або багатофілійній команді впроваджуємо поетапно — термін визначається після демо." },
      ],
      note:
        "Точна ціна дається письмово після безкоштовного демо та уточнення потреб. Оплата: 30% передоплата, решта поетапно. Прихованих платежів немає — все в договорі.",
    },
    cta: {
      badge: "Час починати",
      title: "Наведемо порядок",
      titleAccent: "у роботі команди?",
      subtitle: "На безкоштовному демо побачите, як WorkControl працює у вашій команді. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "5 найчастіших запитань про систему контролю співробітників WorkControl.",
      items: [
        { q: "Що таке система контролю співробітників і що контролює WorkControl?", a: "Система контролю співробітників — це програма, яка показує робочий процес співробітників в одному місці. WorkControl контролює три речі: завдання (хто, що, до якого терміну), робочий час і відвідуваність (прихід-вихід, запізнення) та ефективність (скільки завдань і за який час виконав кожен співробітник). Керівник бачить це в точних цифрах — без паперового журналу і здогадок. Мета — прозорість і порядок у роботі, а не стеження." },
        { q: "Чи стежить система за екраном або листуванням співробітників?", a: "Ні. WorkControl не записує екран, не відстежує клавіатуру і не читає особисте листування. Система фіксує лише робочі показники: завдання, відвідуваність, терміни й результати. Співробітники відкрито знають, які дані збираються — це не підриває довіру, а робить оцінку прозорою і справедливою." },
        { q: "Скільки коштує і як влаштована оплата?", a: "WorkControl — від $35/міс. Ціна за підпискою залежить від кількості співробітників та обсягу налаштування — точний тариф даємо письмово після безкоштовного демо. Оплата за впровадження: 30% передоплата, решта поетапно. Прихованих платежів немає." },
        { q: "Скільки часу до запуску?", a: "Налаштування і навчання зазвичай займають кілька днів — це не IT-проєкт на місяці. У великій або багатофілійній команді термін трохи довший; точний графік назвемо письмово після демо. Спеціальне обладнання не потрібне — достатньо браузера на комп'ютері чи смартфоні та Telegram." },
        { q: "Хочу автоматизувати облік відвідуваності співробітників — з чого почати?", a: "Почніть із безкоштовного демо — побачите систему наживо на прикладі вашої команди. Потім ми переносимо дані з паперового журналу чи Excel у WorkControl: прихід-вихід фіксується в системі, звіти формуються автоматично. За роботи з впровадження — 30% передоплата, решта поетапно. Записатися на демо: Telegram або +998 91 777 66 09." },
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
      name: "WorkControl — система контролю роботи співробітників | Tezcode",
      description:
        "Система контролю співробітників WorkControl: управління завданнями, робочий час і відвідуваність, контроль запізнень, ефективність (KPI), огляд філій, звіт керівнику, сповіщення в Telegram. Tezcode — резидент IT Park. Ташкент і весь Узбекистан.",
      serviceType: "Контроль співробітників / управління завданнями та часом",
    },
  },
};
