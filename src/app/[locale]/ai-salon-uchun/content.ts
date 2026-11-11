import type { ServicePageContent } from "@/components/service-page/types";
import { TEAM_SIZE } from "@/content/team";

// Industry landing /ai-salon-uchun — target queries: "go'zallik saloni uchun
// dastur", "salon avtomatlashtirish", "onlayn bron dasturi",
// "beauty salon CRM", RU "автоматизация салона красоты".
// Beauty/wellness is a high-volume, booking-heavy vertical in UZ where an AI
// agent (bookings, reminders, no-show cut) drives clear ROI — aisolution
// monetises the same industry. Bundles Tezcode's real assets — AI agent
// (bookings), CRM/loyalty, reminders — into one intent. Answer-first hero for
// AI-Overview extractability. uz master + ru/en/ar/uk. Confirmed capabilities only.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "Salon uchun AI — Toshkent",
      title1: "Go'zallik saloni uchun",
      titleAccent: "AI va onlayn bron",
      title2: "",
      subtitle:
        "Go'zallik saloni uchun AI va avtomatlashtirish — bu onlayn bron, eslatma, mijozlar bazasi va sodiqlikni bitta tizimga bog'lab, administrator ishini yengillashtiradigan yechim. AI agent Telegram va Instagram'da 24/7 bron qabul qiladi, eslatma yuborib kelmay qolishni kamaytiradi, mijozni CRM'ga yozadi. Tezcode — Toshkentdagi AI Software Factory — buni salon, barbershop va klinikaga o'zbek va rus tilida o'rnatadi.",
      trust: "IT Park rezidenti • Bepul demo • Telegram/Instagram bron • Toshkent va butun O'zbekiston",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "Salonga nima foyda?",
    },
    capabilities: {
      badge: "Imkoniyatlar",
      title: "Salonga AI",
      titleAccent: "nima beradi?",
      subtitle:
        "Bron va mijoz bilan aloqani avtomatlashtiramiz — administrator kam charchaydi, mijoz kelmay qolishi kamayadi, takror tashrif ko'payadi.",
      items: [
        { icon: "calendar", title: "Onlayn bron 24/7", desc: "Mijoz Telegram yoki Instagram'da usta va vaqtni o'zi tanlab bron qiladi — administrator band bo'lsa ham, kechasi ham. Jadval to'qnashuvi bo'lmaydi." },
        { icon: "bell", title: "Eslatma (kelmay qolishga qarshi)", desc: "Bron oldidan avtomatik eslatma yuboriladi — mijoz unutmaydi. Kelmay qolish (no-show) sezilarli kamayadi." },
        { icon: "message-circle", title: "AI agent javob beradi", desc: "Narx, xizmatlar, ish vaqti, manzil — tez-tez beriladigan savollarga AI agent darhol javob beradi, administratorni chalg'itmaydi." },
        { icon: "users", title: "Mijozlar bazasi va tarix", desc: "Har mijozning tashrif tarixi, sevimli usta va xizmatlari saqlanadi. Qaytgan mijozga shaxsiy taklif yuboriladi." },
        { icon: "flame", title: "Sodiqlik va aksiya", desc: "Tug'ilgan kun tabrigi, chegirma, «3-tashrif bepul» kabi aksiyalar avtomatik yuboriladi — mijoz qaytadi." },
        { icon: "bar-chart-2", title: "Hisobot va tahlil", desc: "Qaysi usta band, qaysi xizmat mashhur, daromad va band soatlar — rahbar salonni raqamlar bilan ko'radi." },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "4 qadamda",
      titleAccent: "avtomatlashtirilgan salonga",
      subtitle: "Birinchi 30 daqiqa bepul. Keyin har qadam yozma taklif, aniq narx va aniq muddat bilan.",
      steps: [
        { num: "01", title: "Bepul konsultatsiya", desc: "Salonda bron qanday olinadi, administrator qayerda ko'p vaqt yo'qotadi, kelmay qolish qancha — 30 daqiqada aniqlaymiz.", icon: "search" },
        { num: "02", title: "Yechim rejasi + taklif", desc: "Faqat onlayn bronmi yoki bron + CRM + sodiqlik — aniq reja, narx va muddat bilan texnik taklif (TZ).", icon: "clipboard-list" },
        { num: "03", title: "O'rnatish va sozlash", desc: "AI agentni Telegram/Instagram'ga ulaymiz, ustalar va xizmatlar jadvalini kiritamiz, eslatma va CRM'ni sozlaymiz.", icon: "wrench" },
        { num: "04", title: "O'qitish + qo'llab-quvvatlash", desc: "Administratorni o'rgatamiz, ishga tushiramiz va keyin ham qo'llab-quvvatlaymiz. Xizmat yoki narx o'zgarsa — tizim yangilanadi.", icon: "life-buoy" },
      ],
    },
    examples: {
      badge: "Ssenariylar",
      title: "Qaysi salonga",
      titleAccent: "qanday foyda?",
      subtitle: "Tipik ssenariylar — maqsad bitta: bron oson, kelmay qolish kam, mijoz qaytadi.",
      items: [
        { tag: "01", title: "Go'zallik saloni", desc: "Soch, tirnoq, kosmetologiya — mijoz AI agent orqali usta va vaqtni tanlaydi, eslatma oladi, tarixi saqlanadi." },
        { tag: "02", title: "Barbershop", desc: "Band soatlarda AI agent bronni o'zi qabul qiladi, navbat aniq, administrator faqat murakkab holatlar bilan." },
        { tag: "03", title: "Kosmetologiya / klinika", desc: "Qabul va muolaja bron, oldindan tayyorgarlik bo'yicha eslatma — CoreMed tibbiy tajribamiz qo'l keladi." },
        { tag: "04", title: "SPA va massaj", desc: "Vaqt bron qilish, eslatma, sodiqlik — mijoz qaytadan yozishda qulay va tez." },
        { tag: "05", title: "Ko'p filialli tarmoq", desc: "Barcha filial bitta tizimda: qaysi filial band, qaysi usta mashhur, daromad — rahbar real vaqtda ko'radi." },
        { tag: "06", title: "Yakka usta / xususiy ustaxona", desc: "Instagram'dan kelgan bronni AI agent avtomatik oladi, eslatma yuboradi — yakka usta uchun arzon va tez start." },
      ],
    },
    tech: {
      badge: "Nega Tezcode",
      title: "Bizni boshqalardan",
      titleAccent: "nima ajratadi?",
      subtitle: "Salonni avtomatlashtiruvchi ko'p. Tanlashda mana bu farqlarga qarang.",
      items: [
        { name: "O'zbek va rus tilida AI agent", desc: "AI agent o'zbek (lotin/kirill) va rus tilida tabiiy ishlaydi — mijozingiz o'z tilida bemalol bron qiladi. Tayyor xorijiy platformalar aynan shu yerda qiynaladi." },
        { name: "Instagram + Telegram birga", desc: "O'zbekistonda salon mijozi ko'proq Instagram va Telegram'da. AI agent ikkala kanalda ham bron oladi — mijoz qayerdan yozsa ham." },
        { name: "IT Park rasmiy rezidenti", desc: "Tezcode — IT Park Uzbekistan rezidenti (guvohnoma №6237). Rasmiy shartnoma va hujjatlashtirilgan majburiyatlar bilan ishlaymiz." },
        { name: `${TEAM_SIZE} kishilik in-house jamoa`, desc: "Frilanser emas — Toshkentdagi doimiy jamoa. O'rnatilgandan keyin ham qo'llab-quvvatlash davom etadi." },
        { name: "CRM va sodiqlik ichkarida", desc: "CoreMed — o'z mahsulotimiz. Bron, mijoz bazasi va sodiqlikni bitta tizimda bog'lab beramiz." },
        { name: "Kelmay qolishni kamaytirish", desc: "Avtomatik eslatma no-show'ni sezilarli kamaytiradi — bu to'g'ridan-to'g'ri daromadingizni oshiradi." },
      ],
    },
    pricing: {
      badge: "Narx",
      title: "Narx nimaga",
      titleAccent: "bog'liq?",
      subtitle:
        "Salon yechimida narx qaysi qismlarni olishingizga bog'liq — faqat onlayn bronmi yoki bron + CRM + sodiqlik. Aniq narxni TZ'dan keyin yozma beramiz.",
      factors: [
        { title: "Onlayn bron (AI agent)", price: "$400 dan", desc: "Telegram/Instagram'da onlayn bron, usta/vaqt tanlash, avtomatik eslatma. Yakka usta va kichik salon uchun tez start." },
        { title: "Bron + AI + CRM", price: "Loyiha bo'yicha", desc: "Erkin savolga javob beradigan AI, mijozlar bazasi, tarix va sodiqlik." },
        { title: "Ko'p filialli / to'liq", price: "Individual", desc: "Bir necha filial, hisobot, integratsiya, sodiqlik dasturi — hajmga qarab TZ'da." },
      ],
      note:
        "Aniq narx bepul konsultatsiya va TZ'dan keyin yozma taklifda beriladi. To'lov: 30% oldindan, qolgani bosqichma-bosqich.",
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Saloningizni",
      titleAccent: "avtomatlashtiraylikmi?",
      subtitle: "30 daqiqalik bepul konsultatsiyada bron jarayoningizni ko'rib, nimani avtomatlashtirishni va aniq narxni aytamiz. Majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Salon uchun AI —",
      titleAccent: "savol va javoblar",
      subtitle: "Salon va barbershop avtomatlashtirish bo'yicha ko'p so'raladigan savollar.",
      items: [
        { q: "Go'zallik saloni uchun onlayn bron qanday ishlaydi?", a: "Mijoz Telegram yoki Instagram'da AI agentga yozadi, usta va bo'sh vaqtni o'zi tanlaydi va bron qiladi — 24/7, administrator band bo'lsa ham. Jadval avtomatik yangilanadi, to'qnashuv bo'lmaydi." },
        { q: "Onlayn bron kelmay qolishni (no-show) kamaytiradimi?", a: "Ha. Bron oldidan avtomatik eslatma yuboriladi (masalan bir kun va bir soat oldin). Mijoz unutmaydi, kelmay qolish sezilarli kamayadi — bu daromadingizga to'g'ridan-to'g'ri ta'sir qiladi." },
        { q: "AI agent o'zbek tilida ishlaydimi?", a: "Ha. AI agent o'zbek (lotin va kirill) va rus tilida ishlaydi. Mijoz o'z tilida bron qiladi va savol beradi — Tezcode buni alohida sozlaydi." },
        { q: "Narxi qancha?", a: "Onlayn bron uchun AI agent $400 dan boshlanadi. CRM va sodiqlik qo'shilsa narx oshadi. Aniq summa Tezcode (IT Park rezidenti) bilan bepul konsultatsiya va TZ'dan keyin yozma beriladi." },
        { q: "Mijozlar bazasi va tarix saqlanadimi?", a: "Ha. Har mijozning tashrif tarixi, sevimli usta va xizmatlari CRM'da saqlanadi. Shu asosda qaytgan mijozga shaxsiy taklif va aksiya yuboriladi." },
      ],
    },
    related: {
      badge: "Bog'liq xizmatlar",
      title: "Salon yechimining",
      titleAccent: "qismlari",
      subtitle: "Salon avtomatlashtirishni tashkil qiluvchi Tezcode yechimlari.",
      links: [
        { href: "/ai-agent", label: "AI agent", desc: "Telegram/Instagram'da bron, savol-javob va eslatma — 24/7 ishlaydigan AI agent." },
        { href: "/biznes-avtomatlashtirish", label: "Biznes avtomatlashtirish", desc: "Savdo, xizmat ko'rsatish, ombor va hisobot jarayonlari — sohangizga moslangan bitta tizimda." },
      ],
    },
    service: {
      name: "Go'zallik saloni uchun AI va onlayn bron — Tezcode",
      description:
        "Go'zallik saloni, barbershop va klinika uchun AI va avtomatlashtirish Toshkentda: Telegram/Instagram onlayn bron, avtomatik eslatma (no-show kamaytirish), AI agent, mijozlar bazasi va sodiqlik. O'zbek va rus tilida. Tezcode — IT Park rezidenti, O'zbekiston.",
      serviceType: "Salon avtomatlashtirish / go'zallik saloni uchun AI",
    },
  },
  ru: {
    hero: {
      badge: "ИИ (AI) для салона — Ташкент",
      title1: "Для салона красоты —",
      titleAccent: "ИИ и онлайн-запись",
      title2: "",
      subtitle:
        "ИИ (AI) и автоматизация для салона красоты — это решение, которое связывает онлайн-запись, напоминания, базу клиентов и лояльность в одну систему и облегчает работу администратора. ИИ-агент принимает запись в Telegram и Instagram 24/7, шлёт напоминания и снижает неявки, заносит клиента в CRM. Tezcode — AI Software Factory в Ташкенте — внедряет это в салонах, барбершопах и клиниках на узбекском и русском.",
      trust: "Резидент IT Park • Бесплатное демо • Запись в Telegram/Instagram • Ташкент и весь Узбекистан",
      ctaPrimary: "Заказать бесплатную консультацию",
      ctaSecondary: "Что даёт салону?",
    },
    capabilities: {
      badge: "Возможности",
      title: "Что ИИ даёт",
      titleAccent: "салону?",
      subtitle:
        "Автоматизируем запись и общение с клиентом — администратор меньше устаёт, неявок меньше, клиенты возвращаются чаще.",
      items: [
        { icon: "calendar", title: "Онлайн-запись 24/7", desc: "Клиент сам выбирает мастера и время в Telegram или Instagram — даже когда администратор занят или ночью. Нет накладок в расписании." },
        { icon: "bell", title: "Напоминания (против неявок)", desc: "Перед записью автоматически уходит напоминание — клиент не забудет. Неявки (no-show) заметно снижаются." },
        { icon: "message-circle", title: "ИИ-агент (AI) отвечает", desc: "Цена, услуги, часы работы, адрес — на частые вопросы ИИ-агент отвечает мгновенно, не отвлекая администратора." },
        { icon: "users", title: "База клиентов и история", desc: "История визитов, любимый мастер и услуги каждого клиента сохраняются. Вернувшемуся клиенту — персональное предложение." },
        { icon: "flame", title: "Лояльность и акции", desc: "Поздравление с днём рождения, скидка, «3-й визит бесплатно» — акции уходят автоматически, клиент возвращается." },
        { icon: "bar-chart-2", title: "Отчёты и аналитика", desc: "Кто из мастеров загружен, какая услуга популярна, выручка и часы пик — руководитель видит салон в цифрах." },
      ],
    },
    process: {
      badge: "Как мы работаем",
      title: "За 4 шага",
      titleAccent: "к автоматизированному салону",
      subtitle: "Первые 30 минут бесплатно. Далее каждый шаг — с письменным предложением, точной ценой и сроком.",
      steps: [
        { num: "01", title: "Бесплатная консультация", desc: "Как принимается запись, где администратор теряет время, сколько неявок — определяем за 30 минут.", icon: "search" },
        { num: "02", title: "План решения + предложение", desc: "Только онлайн-запись или запись + CRM + лояльность — готовим ТЗ с точным планом, ценой и сроком.", icon: "clipboard-list" },
        { num: "03", title: "Установка и настройка", desc: "Подключаем ИИ-агента к Telegram/Instagram, вносим расписание мастеров и услуг, настраиваем напоминания и CRM.", icon: "wrench" },
        { num: "04", title: "Обучение + поддержка", desc: "Обучаем администратора, запускаем и поддерживаем далее. Меняются услуги или цены — система обновляется.", icon: "life-buoy" },
      ],
    },
    examples: {
      badge: "Сценарии",
      title: "Какому салону",
      titleAccent: "какая польза?",
      subtitle: "Типовые сценарии — цель одна: запись проще, неявок меньше, клиент возвращается.",
      items: [
        { tag: "01", title: "Салон красоты", desc: "Волосы, ногти, косметология — клиент выбирает мастера и время через ИИ-агента, получает напоминание, история сохраняется." },
        { tag: "02", title: "Барбершоп", desc: "В час пик ИИ-агент сам принимает запись, очередь чёткая, администратор — только со сложными случаями." },
        { tag: "03", title: "Косметология / клиника", desc: "Запись на приём и процедуру, напоминание о подготовке — здесь помогает наш медицинский опыт CoreMed." },
        { tag: "04", title: "SPA и массаж", desc: "Бронь времени, напоминания, лояльность — клиенту удобно и быстро записаться снова." },
        { tag: "05", title: "Сеть филиалов", desc: "Все филиалы в одной системе: кто загружен, какой мастер популярен, выручка — руководитель видит в реальном времени." },
        { tag: "06", title: "Частный мастер", desc: "Запись из Instagram ИИ-агент принимает автоматически, шлёт напоминание — дешёвый и быстрый старт для частного мастера." },
      ],
    },
    tech: {
      badge: "Почему Tezcode",
      title: "Что отличает нас",
      titleAccent: "от других?",
      subtitle: "Автоматизаторов салонов много. При выборе смотрите на эти отличия.",
      items: [
        { name: "ИИ-агент на узбекском и русском", desc: "ИИ-агент естественно работает на узбекском (латиница/кириллица) и русском — клиент свободно записывается на своём языке. Готовые зарубежные платформы не справляются именно с этим." },
        { name: "Instagram + Telegram вместе", desc: "В Узбекистане клиент салона чаще в Instagram и Telegram. ИИ-агент принимает запись в обоих — откуда бы ни написал клиент." },
        { name: "Официальный резидент IT Park", desc: "Tezcode — резидент IT Park Uzbekistan (свидетельство №6237). Работаем по официальному договору с задокументированными обязательствами." },
        { name: `In-house команда из ${TEAM_SIZE} человек`, desc: "Не фрилансер — постоянная команда в Ташкенте. Поддержка продолжается и после внедрения." },
        { name: "CRM и лояльность внутри", desc: "CoreMed — наш продукт. Связываем запись, базу клиентов и лояльность в одной системе." },
        { name: "Снижение неявок", desc: "Автоматические напоминания заметно снижают no-show — а это напрямую повышает вашу выручку." },
      ],
    },
    pricing: {
      badge: "Цена",
      title: "От чего зависит",
      titleAccent: "цена?",
      subtitle:
        "Цена решения для салона зависит от состава — только онлайн-запись или запись + CRM + лояльность. Точную цену даём письменно после ТЗ.",
      factors: [
        { title: "Онлайн-запись (ИИ-агент)", price: "от $400 (≈ от 5 млн сум)", desc: "Онлайн-запись в Telegram/Instagram, выбор мастера/времени, автонапоминания. Быстрый старт для частного мастера и небольшого салона." },
        { title: "Запись + ИИ + CRM", price: "По проекту", desc: "ИИ (AI) на свободные вопросы, база клиентов, история и лояльность." },
        { title: "Сеть / полное", price: "Индивидуально", desc: "Несколько филиалов, отчёты, интеграции, программа лояльности — по объёму в ТЗ." },
      ],
      note:
        "Точная цена — в письменном предложении после бесплатной консультации и ТЗ. Оплата: 30% предоплата, остальное поэтапно.",
    },
    cta: {
      badge: "Время начать",
      title: "Автоматизируем",
      titleAccent: "ваш салон?",
      subtitle: "За 30 минут бесплатной консультации посмотрим ваш процесс записи, что автоматизировать и сколько это стоит. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "ИИ для салона —",
      titleAccent: "вопросы и ответы",
      subtitle: "Частые вопросы об автоматизации салона и барбершопа.",
      items: [
        { q: "Как работает онлайн-запись для салона красоты?", a: "Клиент пишет ИИ-агенту в Telegram или Instagram, сам выбирает мастера и свободное время и записывается — 24/7, даже когда администратор занят. Расписание обновляется автоматически, накладок нет." },
        { q: "Снижает ли онлайн-запись неявки (no-show)?", a: "Да. Перед записью автоматически уходит напоминание (например за день и за час). Клиент не забудет, неявки заметно снижаются — а это напрямую влияет на выручку." },
        { q: "Работает ли ИИ-агент на узбекском?", a: "Да. ИИ-агент работает на узбекском (латиница и кириллица) и русском. Клиент записывается и задаёт вопросы на своём языке — Tezcode настраивает это отдельно." },
        { q: "Сколько это стоит?", a: "ИИ-агент для онлайн-записи от $400 (≈ от 5 млн сум). С CRM и лояльностью цена растёт. Точная сумма — письменно после бесплатной консультации с Tezcode (резидент IT Park) и ТЗ." },
        { q: "Сохраняется ли база клиентов и история?", a: "Да. История визитов, любимый мастер и услуги каждого клиента хранятся в CRM. На этой основе вернувшемуся клиенту уходит персональное предложение и акция." },
      ],
    },
    related: {
      badge: "Связанные услуги",
      title: "Составляющие",
      titleAccent: "решения для салона",
      subtitle: "Решения Tezcode, из которых складывается автоматизация салона.",
      links: [
        { href: "/ai-agent", label: "ИИ-агент (AI)", desc: "ИИ-агент для записи, вопросов-ответов и напоминаний в Telegram/Instagram — 24/7." },
        { href: "/biznes-avtomatlashtirish", label: "Автоматизация бизнеса", desc: "Заказы, склад, CRM и отчётность в согласованном рабочем процессе." },
      ],
    },
    service: {
      name: "ИИ (AI) и онлайн-запись для салона красоты — Tezcode",
      description:
        "ИИ (AI) и автоматизация для салона красоты, барбершопа и клиники в Ташкенте: онлайн-запись в Telegram/Instagram, автонапоминания (снижение неявок), ИИ-агент, база клиентов и лояльность. На узбекском и русском. Tezcode — резидент IT Park, Узбекистан.",
      serviceType: "Автоматизация салона / ИИ для салона красоты",
    },
  },
  en: {
    hero: {
      badge: "AI for salons — Tashkent",
      title1: "For beauty salons —",
      titleAccent: "AI and online booking",
      title2: "",
      subtitle:
        "AI and automation for a beauty salon means one system that ties together online booking, reminders, the customer base and loyalty — easing the front desk's work. An AI agent takes bookings on Telegram and Instagram 24/7, sends reminders that cut no-shows, and writes customers to the CRM. Tezcode — an AI Software Factory in Tashkent — sets this up for salons, barbershops and clinics in Uzbek and Russian.",
      trust: "IT Park resident • Free demo • Telegram/Instagram booking • Tashkent and all of Uzbekistan",
      ctaPrimary: "Request a free consultation",
      ctaSecondary: "What does it do for a salon?",
    },
    capabilities: {
      badge: "Capabilities",
      title: "What AI gives",
      titleAccent: "a salon",
      subtitle: "We automate booking and customer communication — the front desk tires less, no-shows drop, customers return more often.",
      items: [
        { icon: "calendar", title: "Online booking 24/7", desc: "The customer picks a specialist and time themselves on Telegram or Instagram — even when the desk is busy or at night. No schedule clashes." },
        { icon: "bell", title: "Reminders (against no-shows)", desc: "A reminder is sent automatically before the appointment — the customer won't forget. No-shows drop noticeably." },
        { icon: "message-circle", title: "AI agent answers", desc: "Price, services, hours, address — the AI agent answers frequent questions instantly, without distracting the desk." },
        { icon: "users", title: "Customer base and history", desc: "Each customer's visit history, favorite specialist and services are stored. A returning customer gets a personal offer." },
        { icon: "flame", title: "Loyalty and promos", desc: "Birthday greetings, discounts, '3rd visit free' — promos go out automatically, and customers return." },
        { icon: "bar-chart-2", title: "Reports and analytics", desc: "Which specialists are busy, which service is popular, revenue and peak hours — leadership sees the salon in numbers." },
      ],
    },
    process: {
      badge: "How we work",
      title: "To an automated salon",
      titleAccent: "in 4 steps",
      subtitle: "The first 30 minutes are free. Then every step comes with a written proposal, exact price and timeline.",
      steps: [
        { num: "01", title: "Free consultation", desc: "How bookings are taken, where the desk loses time, how many no-shows — we figure it out in 30 minutes.", icon: "search" },
        { num: "02", title: "Solution plan + proposal", desc: "Online booking only, or booking + CRM + loyalty — we prepare a spec with an exact plan, price and timeline.", icon: "clipboard-list" },
        { num: "03", title: "Setup and configuration", desc: "We connect the AI agent to Telegram/Instagram, enter the specialist and service schedule, and set up reminders and CRM.", icon: "wrench" },
        { num: "04", title: "Training + support", desc: "We train the desk, launch and support you afterward. When services or prices change, the system is updated.", icon: "life-buoy" },
      ],
    },
    examples: {
      badge: "Scenarios",
      title: "Which salon",
      titleAccent: "gains what?",
      subtitle: "Typical scenarios — one goal: easier booking, fewer no-shows, returning customers.",
      items: [
        { tag: "01", title: "Beauty salon", desc: "Hair, nails, cosmetology — the customer picks a specialist and time via the AI agent, gets a reminder, history is saved." },
        { tag: "02", title: "Barbershop", desc: "At peak hours the AI agent takes bookings itself, the queue is clear, the desk handles only complex cases." },
        { tag: "03", title: "Cosmetology / clinic", desc: "Booking appointments and procedures, prep reminders — our CoreMed medical experience helps here." },
        { tag: "04", title: "SPA and massage", desc: "Time booking, reminders, loyalty — it's easy and fast for the customer to book again." },
        { tag: "05", title: "Multi-branch chain", desc: "All branches in one system: who's busy, which specialist is popular, revenue — leadership sees it in real time." },
        { tag: "06", title: "Solo specialist", desc: "The AI agent takes Instagram bookings automatically and sends reminders — a cheap, fast start for a solo specialist." },
      ],
    },
    tech: {
      badge: "Why Tezcode",
      title: "What sets us",
      titleAccent: "apart?",
      subtitle: "Many companies automate salons. When choosing, look at these differences.",
      items: [
        { name: "AI agent in Uzbek and Russian", desc: "The AI agent works naturally in Uzbek (Latin/Cyrillic) and Russian — the customer books freely in their language. Off-the-shelf foreign platforms fail exactly here." },
        { name: "Instagram + Telegram together", desc: "In Uzbekistan salon customers are mostly on Instagram and Telegram. The AI agent takes bookings on both — wherever the customer writes." },
        { name: "Official IT Park resident", desc: "Tezcode is a resident of IT Park Uzbekistan (certificate №6237). We work under an official contract with documented commitments." },
        { name: "14+ person in-house team", desc: "Not a freelancer — a permanent team in Tashkent. Support continues after deployment." },
        { name: "CRM and loyalty in-house", desc: "CoreMed is our own product. We tie booking, the customer base and loyalty into one system." },
        { name: "Cutting no-shows", desc: "Automatic reminders noticeably cut no-shows — which directly raises your revenue." },
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "What the price",
      titleAccent: "depends on",
      subtitle:
        "The price of a salon solution depends on the scope — online booking only, or booking + CRM + loyalty. We quote the exact price in writing after the spec.",
      factors: [
        { title: "Online booking (AI agent)", price: "from $400", desc: "Online booking on Telegram/Instagram, specialist/time selection, auto-reminders. A fast start for a solo specialist and small salon." },
        { title: "Booking + AI + CRM", price: "Per project", desc: "AI for free-form questions, customer base, history and loyalty." },
        { title: "Chain / full", price: "Custom", desc: "Multiple branches, reports, integrations, a loyalty program — by scope in the spec." },
      ],
      note:
        "The exact price is in the written proposal after a free consultation and spec. Payment: 30% upfront, the rest in stages.",
    },
    cta: {
      badge: "Time to start",
      title: "Shall we automate",
      titleAccent: "your salon?",
      subtitle: "In a 30-minute free consultation we'll look at your booking process, what to automate and what it costs. No obligation.",
      button: "Message us on Telegram",
      note: "Or email tezcode@tezcode.dev — you'll reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked questions",
      title: "AI for salons —",
      titleAccent: "questions & answers",
      subtitle: "Common questions about salon and barbershop automation.",
      items: [
        { q: "How does online booking for a beauty salon work?", a: "The customer writes to the AI agent on Telegram or Instagram, picks a specialist and a free time slot, and books — 24/7, even when the desk is busy. The schedule updates automatically, with no clashes." },
        { q: "Does online booking reduce no-shows?", a: "Yes. A reminder is sent automatically before the appointment (for example a day and an hour before). The customer won't forget, and no-shows drop noticeably — which directly affects revenue." },
        { q: "Does the AI agent work in Uzbek?", a: "Yes. The AI agent works in Uzbek (Latin and Cyrillic) and Russian. The customer books and asks questions in their language — Tezcode tunes this separately." },
        { q: "How much does it cost?", a: "An AI agent for online booking from $400. With CRM and loyalty the price rises. The exact figure is quoted in writing after a free consultation with Tezcode (IT Park resident) and the spec." },
        { q: "Are the customer base and history saved?", a: "Yes. Each customer's visit history, favorite specialist and services are stored in the CRM. On that basis a returning customer gets a personal offer and promo." },
      ],
    },
    related: {
      badge: "Related services",
      title: "Parts of the",
      titleAccent: "salon solution",
      subtitle: "Tezcode solutions that make up salon automation.",
      links: [
        { href: "/ai-agent", label: "AI agent", desc: "An AI agent for bookings, Q&A and reminders on Telegram/Instagram — 24/7." },
        { href: "/biznes-avtomatlashtirish", label: "Business automation", desc: "Sales, service, warehouse and reporting processes — in one system tailored to your industry." },
      ],
    },
    service: {
      name: "AI and online booking for beauty salons — Tezcode",
      description:
        "AI and automation for beauty salons, barbershops and clinics in Tashkent: online booking on Telegram/Instagram, auto-reminders (cutting no-shows), an AI agent, customer base and loyalty. In Uzbek and Russian. Tezcode — IT Park resident, Uzbekistan.",
      serviceType: "Salon automation / AI for beauty salons",
    },
  },
  ar: {
    hero: {
      badge: "AI لصالونات التجميل — طشقند",
      title1: "لصالونات التجميل —",
      titleAccent: "الذكاء الاصطناعي والحجز أونلاين",
      title2: "",
      subtitle:
        "الذكاء الاصطناعي والأتمتة لصالون التجميل هو حل يربط الحجز أونلاين والتذكيرات وقاعدة العملاء والولاء في نظام واحد ويخفّف عمل موظف الاستقبال. يستقبل وكيل AI الحجز على Telegram وInstagram على مدار الساعة، ويرسل تذكيرات تقلّل الغياب، ويسجّل العميل في CRM. Tezcode — مصنع برمجيات الذكاء الاصطناعي في طشقند — يركّبه للصالونات والحلاقين والعيادات بالأوزبكية والروسية.",
      trust: "مقيم في IT Park • عرض تجريبي مجاني • حجز عبر Telegram/Instagram • طشقند وكل أوزبكستان",
      ctaPrimary: "اطلب استشارة مجانية",
      ctaSecondary: "ماذا يقدّم للصالون؟",
    },
    capabilities: {
      badge: "الإمكانيات",
      title: "ماذا يقدّم AI",
      titleAccent: "للصالون؟",
      subtitle: "نؤتمت الحجز والتواصل مع العميل — يتعب الاستقبال أقل، ويقلّ الغياب، ويعود العملاء أكثر.",
      items: [
        { icon: "calendar", title: "حجز أونلاين 24/7", desc: "يختار العميل الأخصائي والوقت بنفسه على Telegram أو Instagram — حتى عند انشغال الاستقبال أو ليلاً. دون تعارض في الجدول." },
        { icon: "bell", title: "تذكيرات (ضد الغياب)", desc: "يُرسَل تذكير تلقائيًا قبل الموعد — لا ينسى العميل. ينخفض الغياب بشكل ملحوظ." },
        { icon: "message-circle", title: "وكيل AI يجيب", desc: "السعر والخدمات وساعات العمل والعنوان — يجيب الوكيل فورًا عن الأسئلة الشائعة دون إشغال الاستقبال." },
        { icon: "users", title: "قاعدة العملاء والسجل", desc: "يُحفَظ سجل زيارات كل عميل وأخصائيه المفضّل وخدماته. ويحصل العائد على عرض شخصي." },
        { icon: "flame", title: "الولاء والعروض", desc: "تهنئة عيد ميلاد، خصم، «الزيارة الثالثة مجانًا» — تُرسَل العروض تلقائيًا فيعود العميل." },
        { icon: "bar-chart-2", title: "التقارير والتحليل", desc: "من الأخصائيين مشغول، أي خدمة رائجة، الإيراد وساعات الذروة — ترى الإدارة الصالون بالأرقام." },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "إلى صالون مؤتمت",
      titleAccent: "في 4 خطوات",
      subtitle: "أول 30 دقيقة مجانية. ثم كل خطوة بعرض مكتوب وسعر ومدة محددين.",
      steps: [
        { num: "01", title: "استشارة مجانية", desc: "كيف يُستقبَل الحجز، وأين يضيع وقت الاستقبال، وكم الغياب — نحدّده في 30 دقيقة.", icon: "search" },
        { num: "02", title: "خطة الحل + العرض", desc: "حجز أونلاين فقط أو حجز + CRM + ولاء — نُعدّ مواصفات بخطة وسعر ومدة دقيقة.", icon: "clipboard-list" },
        { num: "03", title: "التركيب والإعداد", desc: "نربط الوكيل بـ Telegram/Instagram، وندخل جدول الأخصائيين والخدمات، ونضبط التذكيرات وCRM.", icon: "wrench" },
        { num: "04", title: "التدريب + الدعم", desc: "ندرّب الاستقبال ونطلق وندعم لاحقًا. عند تغيّر الخدمات أو الأسعار يُحدَّث النظام.", icon: "life-buoy" },
      ],
    },
    examples: {
      badge: "سيناريوهات",
      title: "أي صالون",
      titleAccent: "يكسب ماذا؟",
      subtitle: "سيناريوهات نموذجية — هدف واحد: حجز أسهل، غياب أقل، عودة العميل.",
      items: [
        { tag: "01", title: "صالون تجميل", desc: "شعر، أظافر، تجميل — يختار العميل الأخصائي والوقت عبر وكيل AI، ويحصل على تذكير، ويُحفَظ السجل." },
        { tag: "02", title: "حلاق (باربر)", desc: "في الذروة يستقبل الوكيل الحجز بنفسه، والطابور واضح، والاستقبال للحالات المعقّدة فقط." },
        { tag: "03", title: "تجميل / عيادة", desc: "حجز المواعيد والإجراءات وتذكير التحضير — تفيد خبرتنا الطبية CoreMed هنا." },
        { tag: "04", title: "سبا ومساج", desc: "حجز الوقت والتذكيرات والولاء — يسهل على العميل الحجز مجددًا بسرعة." },
        { tag: "05", title: "سلسلة فروع", desc: "كل الفروع في نظام واحد: من مشغول، أي أخصائي رائج، الإيراد — تراه الإدارة في الوقت الفعلي." },
        { tag: "06", title: "أخصائي مستقل", desc: "يستقبل الوكيل حجز Instagram تلقائيًا ويرسل تذكيرًا — بداية رخيصة وسريعة للمستقل." },
      ],
    },
    tech: {
      badge: "لماذا Tezcode",
      title: "ما الذي يميّزنا",
      titleAccent: "عن غيرنا؟",
      subtitle: "شركات كثيرة تؤتمت الصالونات. عند الاختيار انظر إلى هذه الفروق.",
      items: [
        { name: "وكيل AI بالأوزبكية والروسية", desc: "يعمل الوكيل بطبيعية بالأوزبكية (لاتيني/سيريلي) والروسية — يحجز العميل بلغته بحرية. المنصات الأجنبية الجاهزة تفشل هنا." },
        { name: "Instagram + Telegram معًا", desc: "في أوزبكستان عميل الصالون غالبًا على Instagram وTelegram. يستقبل الوكيل الحجز في كليهما." },
        { name: "مقيم رسمي في IT Park", desc: "Tezcode مقيم في IT Park Uzbekistan (شهادة №6237). نعمل بعقد رسمي وبالتزامات موثّقة." },
        { name: `فريق داخلي من ${TEAM_SIZE} شخصًا`, desc: "لسنا مستقلين — فريق دائم في طشقند. يستمر الدعم بعد التركيب." },
        { name: "CRM والولاء بالداخل", desc: "CoreMed من منتجاتنا. نربط الحجز وقاعدة العملاء والولاء في نظام واحد." },
        { name: "تقليل الغياب", desc: "التذكيرات التلقائية تقلّل الغياب بشكل ملحوظ — وهذا يرفع إيرادك مباشرة." },
      ],
    },
    pricing: {
      badge: "السعر",
      title: "علام يعتمد",
      titleAccent: "السعر؟",
      subtitle:
        "يعتمد سعر حل الصالون على المكوّنات — حجز أونلاين فقط أو حجز + CRM + ولاء. نقدّم السعر الدقيق كتابةً بعد المواصفات.",
      factors: [
        { title: "حجز أونلاين (وكيل AI)", price: "من 400$", desc: "حجز أونلاين عبر Telegram/Instagram، اختيار الأخصائي/الوقت، تذكيرات تلقائية. بداية سريعة للمستقل والصالون الصغير." },
        { title: "حجز + AI + CRM", price: "حسب المشروع", desc: "ذكاء اصطناعي للأسئلة الحرة، قاعدة عملاء، سجل وولاء." },
        { title: "سلسلة / كامل", price: "مخصّص", desc: "عدة فروع، تقارير، تكاملات، برنامج ولاء — حسب الحجم في المواصفات." },
      ],
      note:
        "السعر الدقيق في العرض المكتوب بعد الاستشارة المجانية والمواصفات. الدفع: 30% مقدمًا والباقي على مراحل.",
    },
    cta: {
      badge: "وقت البدء",
      title: "هل نؤتمت",
      titleAccent: "صالونك؟",
      subtitle: "في استشارة مجانية 30 دقيقة ننظر في عملية الحجز، وماذا نؤتمت، وكم يكلّف. دون التزام.",
      button: "راسلنا على Telegram",
      note: "أو راسل tezcode@tezcode.dev — تصل إلى بكزود مباشرة.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "AI للصالون —",
      titleAccent: "أسئلة وأجوبة",
      subtitle: "أسئلة شائعة عن أتمتة الصالون والحلاق.",
      items: [
        { q: "كيف يعمل الحجز أونلاين لصالون التجميل؟", a: "يكتب العميل إلى وكيل AI على Telegram أو Instagram، ويختار الأخصائي ووقتًا متاحًا ويحجز — 24/7 حتى عند انشغال الاستقبال. يُحدَّث الجدول تلقائيًا دون تعارض." },
        { q: "هل يقلّل الحجز أونلاين الغياب؟", a: "نعم. يُرسَل تذكير تلقائيًا قبل الموعد (مثلًا قبل يوم وقبل ساعة). لا ينسى العميل، وينخفض الغياب بشكل ملحوظ — وهذا يؤثّر مباشرة على الإيراد." },
        { q: "هل يعمل وكيل AI بالأوزبكية؟", a: "نعم. يعمل الوكيل بالأوزبكية (لاتيني وسيريلي) والروسية. يحجز العميل ويسأل بلغته — يعدّ Tezcode ذلك منفصلًا." },
        { q: "كم يكلّف؟", a: "وكيل AI للحجز أونلاين من 400$. مع CRM والولاء يرتفع السعر. السعر الدقيق كتابةً بعد استشارة مجانية مع Tezcode (مقيم IT Park) والمواصفات." },
        { q: "هل تُحفَظ قاعدة العملاء والسجل؟", a: "نعم. يُحفَظ سجل زيارات كل عميل وأخصائيه المفضّل وخدماته في CRM. وعلى هذا الأساس يُرسَل للعائد عرض شخصي." },
      ],
    },
    related: {
      badge: "خدمات ذات صلة",
      title: "مكوّنات",
      titleAccent: "حل الصالون",
      subtitle: "حلول Tezcode التي تتكوّن منها أتمتة الصالون.",
      links: [
        { href: "/ai-agent", label: "وكيل AI", desc: "وكيل AI للحجز والأسئلة والتذكيرات على Telegram/Instagram — 24/7." },
        { href: "/biznes-avtomatlashtirish", label: "أتمتة الأعمال", desc: "البيع والخدمات والمخزون والتقارير — في نظام واحد مصمم لمجالك." },
      ],
    },
    service: {
      name: "AI والحجز أونلاين لصالونات التجميل — Tezcode",
      description:
        "AI والأتمتة لصالونات التجميل والحلاقين والعيادات في طشقند: حجز أونلاين على Telegram/Instagram، تذكيرات تلقائية (تقليل الغياب)، وكيل AI، قاعدة عملاء وولاء. بالأوزبكية والروسية. Tezcode — مقيم في IT Park، أوزبكستان.",
      serviceType: "أتمتة الصالون / AI لصالونات التجميل",
    },
  },
  uk: {
    hero: {
      badge: "AI для салону — Ташкент",
      title1: "Для салону краси —",
      titleAccent: "AI та онлайн-запис",
      title2: "",
      subtitle:
        "AI та автоматизація для салону краси — це рішення, що пов'язує онлайн-запис, нагадування, базу клієнтів і лояльність в одну систему та полегшує роботу адміністратора. AI-агент приймає запис у Telegram та Instagram 24/7, надсилає нагадування й знижує неявки, пише клієнта в CRM. Tezcode — AI Software Factory у Ташкенті — впроваджує це в салонах, барбершопах і клініках узбецькою та російською.",
      trust: "Резидент IT Park • Безкоштовне демо • Запис у Telegram/Instagram • Ташкент і весь Узбекистан",
      ctaPrimary: "Замовити безкоштовну консультацію",
      ctaSecondary: "Що дає салону?",
    },
    capabilities: {
      badge: "Можливості",
      title: "Що AI дає",
      titleAccent: "салону?",
      subtitle: "Автоматизуємо запис і спілкування з клієнтом — адміністратор менше втомлюється, неявок менше, клієнти повертаються частіше.",
      items: [
        { icon: "calendar", title: "Онлайн-запис 24/7", desc: "Клієнт сам обирає майстра і час у Telegram чи Instagram — навіть коли адміністратор зайнятий або вночі. Без накладок у розкладі." },
        { icon: "bell", title: "Нагадування (проти неявок)", desc: "Перед записом автоматично надходить нагадування — клієнт не забуде. Неявки (no-show) помітно знижуються." },
        { icon: "message-circle", title: "AI-агент відповідає", desc: "Ціна, послуги, години роботи, адреса — на часті питання AI-агент відповідає миттєво, не відволікаючи адміністратора." },
        { icon: "users", title: "База клієнтів та історія", desc: "Історія візитів, улюблений майстер і послуги кожного клієнта зберігаються. Клієнту, що повернувся, — персональна пропозиція." },
        { icon: "flame", title: "Лояльність та акції", desc: "Привітання з днем народження, знижка, «3-й візит безкоштовно» — акції надходять автоматично, клієнт повертається." },
        { icon: "bar-chart-2", title: "Звіти та аналітика", desc: "Хто з майстрів завантажений, яка послуга популярна, виручка і години пік — керівник бачить салон у цифрах." },
      ],
    },
    process: {
      badge: "Як ми працюємо",
      title: "До автоматизованого салону",
      titleAccent: "за 4 кроки",
      subtitle: "Перші 30 хвилин безкоштовно. Далі кожен крок — з письмовою пропозицією, точною ціною та строком.",
      steps: [
        { num: "01", title: "Безкоштовна консультація", desc: "Як приймається запис, де адміністратор втрачає час, скільки неявок — визначаємо за 30 хвилин.", icon: "search" },
        { num: "02", title: "План рішення + пропозиція", desc: "Тільки онлайн-запис чи запис + CRM + лояльність — готуємо ТЗ з точним планом, ціною та строком.", icon: "clipboard-list" },
        { num: "03", title: "Встановлення та налаштування", desc: "Підключаємо AI-агента до Telegram/Instagram, вносимо розклад майстрів і послуг, налаштовуємо нагадування та CRM.", icon: "wrench" },
        { num: "04", title: "Навчання + підтримка", desc: "Навчаємо адміністратора, запускаємо і підтримуємо далі. Змінюються послуги чи ціни — система оновлюється.", icon: "life-buoy" },
      ],
    },
    examples: {
      badge: "Сценарії",
      title: "Якому салону",
      titleAccent: "яка користь?",
      subtitle: "Типові сценарії — одна мета: запис простіший, неявок менше, клієнт повертається.",
      items: [
        { tag: "01", title: "Салон краси", desc: "Волосся, нігті, косметологія — клієнт обирає майстра і час через AI-агента, отримує нагадування, історія зберігається." },
        { tag: "02", title: "Барбершоп", desc: "У пік AI-агент сам приймає запис, черга чітка, адміністратор — лише зі складними випадками." },
        { tag: "03", title: "Косметологія / клініка", desc: "Запис на прийом і процедуру, нагадування про підготовку — стає в пригоді наш медичний досвід CoreMed." },
        { tag: "04", title: "SPA та масаж", desc: "Бронь часу, нагадування, лояльність — клієнту зручно й швидко записатися знову." },
        { tag: "05", title: "Мережа філій", desc: "Усі філії в одній системі: хто завантажений, який майстер популярний, виручка — керівник бачить у реальному часі." },
        { tag: "06", title: "Приватний майстер", desc: "Запис з Instagram AI-агент приймає автоматично, надсилає нагадування — дешевий і швидкий старт для приватного майстра." },
      ],
    },
    tech: {
      badge: "Чому Tezcode",
      title: "Що вирізняє нас",
      titleAccent: "з-поміж інших?",
      subtitle: "Автоматизаторів салонів багато. Обираючи, дивіться на ці відмінності.",
      items: [
        { name: "AI-агент узбецькою та російською", desc: "AI-агент природно працює узбецькою (латиниця/кирилиця) та російською — клієнт вільно записується своєю мовою. Готові зарубіжні платформи падають саме тут." },
        { name: "Instagram + Telegram разом", desc: "В Узбекистані клієнт салону частіше в Instagram та Telegram. AI-агент приймає запис в обох." },
        { name: "Офіційний резидент IT Park", desc: "Tezcode — резидент IT Park Uzbekistan (свідоцтво №6237). Працюємо за офіційним договором із задокументованими зобов'язаннями." },
        { name: `In-house команда з ${TEAM_SIZE} осіб`, desc: "Не фрилансер — постійна команда в Ташкенті. Підтримка триває після впровадження." },
        { name: "CRM і лояльність всередині", desc: "CoreMed — наш продукт. Пов'язуємо запис, базу клієнтів і лояльність в одній системі." },
        { name: "Зниження неявок", desc: "Автоматичні нагадування помітно знижують no-show — а це прямо підвищує вашу виручку." },
      ],
    },
    pricing: {
      badge: "Ціна",
      title: "Від чого залежить",
      titleAccent: "ціна?",
      subtitle:
        "Ціна рішення для салону залежить від складу — тільки онлайн-запис чи запис + CRM + лояльність. Точну ціну даємо письмово після ТЗ.",
      factors: [
        { title: "Онлайн-запис (AI-агент)", price: "від $400", desc: "Онлайн-запис у Telegram/Instagram, вибір майстра/часу, автонагадування. Швидкий старт для приватного майстра й невеликого салону." },
        { title: "Запис + AI + CRM", price: "За проєктом", desc: "AI на вільні питання, база клієнтів, історія та лояльність." },
        { title: "Мережа / повне", price: "Індивідуально", desc: "Кілька філій, звіти, інтеграції, програма лояльності — за обсягом у ТЗ." },
      ],
      note:
        "Точна ціна — у письмовій пропозиції після безкоштовної консультації та ТЗ. Оплата: 30% передоплата, решта поетапно.",
    },
    cta: {
      badge: "Час починати",
      title: "Автоматизуємо",
      titleAccent: "ваш салон?",
      subtitle: "За 30 хвилин безкоштовної консультації подивимося ваш процес запису, що автоматизувати й скільки це коштує. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "AI для салону —",
      titleAccent: "запитання та відповіді",
      subtitle: "Часті запитання про автоматизацію салону та барбершопа.",
      items: [
        { q: "Як працює онлайн-запис для салону краси?", a: "Клієнт пише AI-агенту в Telegram чи Instagram, сам обирає майстра і вільний час і записується — 24/7, навіть коли адміністратор зайнятий. Розклад оновлюється автоматично, без накладок." },
        { q: "Чи знижує онлайн-запис неявки (no-show)?", a: "Так. Перед записом автоматично надходить нагадування (наприклад за день і за годину). Клієнт не забуде, неявки помітно знижуються — а це прямо впливає на виручку." },
        { q: "Чи працює AI-агент узбецькою?", a: "Так. AI-агент працює узбецькою (латиниця і кирилиця) та російською. Клієнт записується й ставить питання своєю мовою — Tezcode налаштовує це окремо." },
        { q: "Скільки це коштує?", a: "AI-агент для онлайн-запису від $400. З CRM і лояльністю ціна зростає. Точна сума — письмово після безкоштовної консультації з Tezcode (резидент IT Park) та ТЗ." },
        { q: "Чи зберігається база клієнтів та історія?", a: "Так. Історія візитів, улюблений майстер і послуги кожного клієнта зберігаються в CRM. На цій основі клієнту, що повернувся, надходить персональна пропозиція та акція." },
      ],
    },
    related: {
      badge: "Пов'язані послуги",
      title: "Складові",
      titleAccent: "рішення для салону",
      subtitle: "Рішення Tezcode, з яких складається автоматизація салону.",
      links: [
        { href: "/ai-agent", label: "AI-агент", desc: "AI-агент для запису, питань-відповідей і нагадувань у Telegram/Instagram — 24/7." },
        { href: "/biznes-avtomatlashtirish", label: "Автоматизація бізнесу", desc: "Торгівля, послуги, склад і звітність — в одній системі під вашу галузь." },
      ],
    },
    service: {
      name: "AI та онлайн-запис для салону краси — Tezcode",
      description:
        "AI та автоматизація для салону краси, барбершопа і клініки в Ташкенті: онлайн-запис у Telegram/Instagram, автонагадування (зниження неявок), AI-агент, база клієнтів і лояльність. Узбецькою та російською. Tezcode — резидент IT Park, Узбекистан.",
      serviceType: "Автоматизація салону / AI для салону краси",
    },
  },
};
