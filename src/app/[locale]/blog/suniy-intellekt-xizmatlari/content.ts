import type { ArticleContent } from "@/components/blog/types";

// Pillar article: "Sun'iy intellekt xizmatlari O'zbekistonda (2026)".
// Targets the Uzbek query «sun'iy intellekt xizmatlari» and related searches
// («sun'iy intellekt nima», «sun'iy intellekt biznes uchun») — the rest of the
// site says "AI", this article deliberately uses the full Uzbek term
// «sun'iy intellekt» alongside it. Answer-first (TL;DR, question-style H2s,
// FAQ) so answer engines can lift a quotable answer.
//
// Prices reuse the figures already published on the site (ai-yechimlar-narxi-2026,
// tariflar, service pages): chatbot $339, agent $400, Telegram bot $279,
// avtomatlashtirish $400, CRM integratsiya $700, video analitika $990, MVP $1000.
// No fabricated client numbers or testimonials.

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "Sun'iy intellekt / Qo'llanma",
      title:
        "Sun'iy intellekt xizmatlari O'zbekistonda: turlari, narxi va qanday tanlash (2026)",
      subtitle:
        "Sun'iy intellekt (AI) nima, biznes uchun qanday xizmatlar bor — chatbot, AI agent, jarayon avtomatizatsiyasi, video analitika, ovozli assistent, hujjat AI — narxlari qancha va provayderni qanday tanlash — amaliy qo'llanma.",
      dateLabel: "2026-yil 26-avgust",
      readTime: "12 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "Sun'iy intellekt (AI) — matnni tushunish, qaror qabul qilish va vazifa bajarish kabi \"aqlli\" ishlarni dastur zimmasiga oladigan texnologiya. O'zbekistonda biznes uchun asosiy sun'iy intellekt xizmatlari: AI chatbot (mijozlarga 24/7 javob, $339 dan), AI agent (o'zi ish bajaradi, $400 dan), jarayon avtomatizatsiyasi ($400 dan), CRM/1C integratsiya ($700 dan), AI video analitika (mavjud kameralar bilan, $990 dan), Telegram bot ($279 dan) va buyurtma AI ilovalar (MVP $1000 dan). Zamonaviy modellar o'zbek va rus tilida ishlaydi. Provayder tanlashda portfelga, o'zbek tili tajribasiga, integratsiya imkoniyatiga va yozma taklifga qarang. Tezcode — Toshkentdagi AI Software Factory — shu xizmatlarning barchasini qiladi va bepul konsultatsiya beradi.",
    },
    sections: [
      {
        heading: "Sun'iy intellekt nima? (sodda tilda)",
        paragraphs: [
          "Sun'iy intellekt (inglizcha Artificial Intelligence, qisqacha AI) — odatda odam aqli talab qiladigan ishlarni bajara oladigan dasturiy texnologiya: matnni tushunish, savolga javob berish, rasmni tanish, qaror qabul qilish va vazifani rejalashtirish.",
          "2026-yilda \"sun'iy intellekt\" deganda ko'pincha katta til modellari (LLM) — GPT (OpenAI), Claude (Anthropic), Gemini (Google) — nazarda tutiladi. Bular erkin yozilgan matnni tushunadi, tabiiy javob beradi va tashqi tizimlar bilan ishlay oladi. Ilgari bot faqat tugma bosilganda javob bersa, endi sun'iy intellekt mijozning \"salom, qizimga sovg'a kerak edi, 200 minggacha nima bor?\" degan erkin savolini tushunib, katalogdan mos mahsulot topa oladi.",
          "Muhim nuqta: sun'iy intellekt — sehr emas, vosita. U sizning ma'lumotlaringiz (narxlar, katalog, qoidalar) bilan to'ldirilsa va tizimlaringizga (CRM, 1C, Telegram) ulansagina real foyda beradi. Shu sababli \"AI o'rnatib beramiz\" degan gapdan ko'ra \"qaysi jarayonni sun'iy intellekt bilan hal qilamiz\" degan savol muhimroq.",
          "Yana bir ko'p so'raladigan savol — sun'iy intellekt va AI bir xilmi? Ha, bu bitta tushunchaning ikki nomi: \"sun'iy intellekt\" — o'zbekcha atama, \"AI\" — inglizcha qisqartma. O'zbekistonda ikkalasi ham ishlatiladi, hujjat va rasmiy matnlarda ko'proq \"sun'iy intellekt\" uchraydi.",
        ],
      },
      {
        heading: "Sun'iy intellekt biznes uchun nima beradi?",
        paragraphs: [
          "Sun'iy intellekt biznes uchun avvalo vaqt va yo'qotilgan mijozlarni qaytaradi. O'zbekistondagi kichik va o'rta biznesda eng ko'p uchraydigan muammolar — bir xil savollarga qayta-qayta javob berish, kechqurun va dam olish kunlari mijozlarning javobsiz qolishi, ma'lumotni qo'lda bir tizimdan ikkinchisiga ko'chirish. Bularning hammasi sun'iy intellekt yaxshi bajaradigan ishlar.",
          "Halol baho ham kerak: sun'iy intellekt hamma muammoni hal qilmaydi va odamni butunlay almashtirmaydi. U takroriy, hajmli va zerikarli qismni oladi, xodimlar esa murakkab kelishuvlar va munosabatlarga vaqt topadi. Eng samarali model — gibrid: birinchi qatorda sun'iy intellekt, murakkab holatlarda odam.",
        ],
        bullets: [
          "24/7 javob — mijoz kechasi yoki bayramda yozsa ham darrov javob oladi, lid sovib qolmaydi.",
          "Takroriy ishlarni avtomatlashtirish — bir xil savollar, hisobot yig'ish, ma'lumot ko'chirish odam vaqtini yemaydi.",
          "Tezlik — mijoz minutlab kutmaydi, bu konversiyaga bevosita ta'sir qiladi.",
          "Bir xil sifat — sun'iy intellekt charchamaydi, kayfiyatga qaramay xushmuomala javob beradi.",
          "Ma'lumot va tahlil — har bir suhbat va jarayon yozilib boradi, qaror uchun real raqamlar paydo bo'ladi.",
          "Masshtab — mijozlar soni ikki baravar oshsa ham, xodim sonini ikki baravar oshirish shart emas.",
        ],
      },
      {
        heading: "O'zbekistonda qanday sun'iy intellekt xizmatlari bor?",
        paragraphs: [
          "\"Sun'iy intellekt xizmatlari\" — keng tushuncha. Amalda O'zbekiston bizneslari quyidagi yo'nalishlardan birini yoki bir nechtasini buyurtma qiladi. Har biri alohida muammoni hal qiladi:",
          "Bu turlarning to'liq ro'yxati va jarayoni Tezcode ning AI avtomatizatsiya sahifasida (tezcode.dev/ai-avtomatizatsiya) jamlangan; chatbot va agent bo'yicha alohida sahifalar — tezcode.dev/ai-chatbot va tezcode.dev/ai-agent.",
        ],
        bullets: [
          "AI chatbot — Telegram, Instagram, WhatsApp va saytda mijozlarga o'zbek/rus tilida 24/7 javob beradi, savollarni sizning bilim bazangizdan (narxlar, katalog, FAQ) oladi. Eng ko'p buyurtma qilinadigan sun'iy intellekt xizmati.",
          "AI agent — chatbotdan bir qadam oldinda: nafaqat javob beradi, balki ish bajaradi — qoldiqni tekshiradi, buyurtmani CRM/1C ga yozadi, hisob-faktura yuboradi, murakkab holatni operatorga uzatadi.",
          "Jarayon avtomatizatsiyasi — ichki ishlar uchun: hisobotlarni avtomatik yig'ish, ma'lumotni tizimlar orasida ko'chirish, hujjat tayyorlash, eslatma va bildirishnomalar.",
          "AI video analitika — mavjud IP kameralaringizni \"aqlli\" qiladi: odam sanash (footfall), yuz tanish orqali davomat, ish xavfsizligi nazorati, avtomobil raqamini o'qish (ANPR). Yangi kamera shart emas.",
          "Ovozli assistentlar — qo'ng'iroqlarga javob beradigan yoki ovozli buyruqni tushunadigan tizimlar: qabulga yozish, buyurtma holatini aytish, so'rovnoma o'tkazish. O'zbek tilida nutqni tanish sifati yildan-yilga yaxshilanmoqda.",
          "Hujjat AI — shartnoma, hisob-faktura, ariza va boshqa hujjatlardan ma'lumotni avtomatik o'qish, saralash va tizimga kiritish. Buxgalteriya va yuridik bo'limlar uchun ayniqsa foydali.",
          "CRM/1C integratsiya — sun'iy intellektni mavjud tizimlaringizga ulash: amoCRM, Bitrix24, 1C. Alohida xizmat sifatida ham, boshqa yechimlar tarkibida ham keladi.",
        ],
      },
      {
        heading: "Sun'iy intellekt xizmatlari narxi qancha? (2026)",
        paragraphs: [
          "Eng ko'p beriladigan savol — \"sun'iy intellekt xizmati qancha turadi?\". O'zbekiston bozorida 2026-yilda real boshlang'ich narxlar quyidagicha (Tezcode misolida, tezcode.dev/tariflar sahifasida ham berilgan):",
          "Aniq narx kanallar soniga, integratsiyalarga (CRM, 1C, to'lov tizimi) va murakkablikka bog'liq. To'g'ri tartib: avval bepul konsultatsiyada ehtiyoj aniqlanadi, keyin texnik topshiriq (TZ) asosida yozma taklif beriladi. To'lov odatda 30% oldindan, qolgani bosqichma-bosqich. \"Hammaga bir xil narx\" taklifidan ehtiyot bo'ling — u kamdan-kam real jarayonga to'g'ri keladi.",
        ],
        bullets: [
          "AI chatbot (Telegram, Instagram, WhatsApp, sayt) — $339 dan.",
          "AI agent (o'zi ish bajaradigan, CRM/1C ga yozadigan) — $400 dan.",
          "Telegram bot (buyurtma, Click/Payme to'lov) — $279 dan.",
          "Jarayon avtomatizatsiyasi (hisobot, ombor, ichki jarayonlar) — $400 dan.",
          "CRM/1C integratsiya (amoCRM, Bitrix24, 1C) — $700 dan.",
          "AI video analitika (odam sanash, davomat, ANPR) — $990 dan, bir martalik ulash.",
          "Buyurtma AI ilova (custom) — MVP $1000 dan, to'liq narx TZ dan keyin.",
        ],
      },
      {
        heading: "Sun'iy intellekt xizmatini kimdan olish kerak? Provayder tanlash mezonlari",
        paragraphs: [
          "O'zbekistonda sun'iy intellekt xizmatini taklif qiluvchilar ko'paymoqda: freelancerlar, kichik studiyalar, IT kompaniyalar. Sifat esa juda har xil. Tanlashda quyidagi mezonlarga qarang:",
          "Xavf belgilari ham bor: portfoliosiz \"hammasini qilamiz\" deyish, birinchi suhbatdayoq TZ siz aniq narx aytish, o'zbek tilini sinab ko'rsata olmaslik va qo'llab-quvvatlashsiz \"topshirdik — tamom\" yondashuvi. Bunday belgilar ko'rinsa, boshqa provayder qidiring.",
        ],
        bullets: [
          "Real ishlagan loyihalar — demo yoki jonli misol so'rang: bot bilan yozishib ko'ring, video analitika bo'lsa ekranini ko'ring.",
          "O'zbek tili tajribasi — tayyor xorijiy platformalar o'zbekchada ko'pincha qiynaladi; provayder uz/ru aralash muloqotni sinab ko'rsata olsin.",
          "Integratsiya imkoniyati — sizning CRM, 1C, to'lov tizimingiz bilan ishlay oladimi? Integratsiyasiz sun'iy intellekt faqat \"gapiradigan o'yinchoq\" bo'lib qoladi.",
          "Yozma taklif va TZ — narx va muddat og'zaki emas, texnik topshiriq asosida yozma berilishi kerak.",
          "Qo'llab-quvvatlash — ishga tushgandan keyin kim kuzatadi, yangilaydi va xatolarni tuzatadi? Bu shartnomada bo'lsin.",
          "Jamoa va manzil — real ofis va jamoasi bor kompaniya bilan ishlash freelancerga qaraganda barqarorroq (garov emas, lekin muhim signal).",
        ],
      },
      {
        heading: "Nimadan boshlash kerak? — 4 amaliy qadam",
        paragraphs: [
          "Sun'iy intellektni biznesga kiritish katta loyihadan boshlanishi shart emas. Eng to'g'ri yo'l — kichik, o'lchanadigan qadamdan boshlash:",
        ],
        bullets: [
          "1. Muammoni aniqlang — qaysi ish eng ko'p vaqt yeydi yoki qaysi joyda mijoz yo'qotasiz? Ko'pincha bu takroriy savollar yoki javobsiz qolgan kechki xabarlar.",
          "2. Bitta yo'nalish tanlang — hammasini birdan emas: avval masalan AI chatbot, natija ko'ringach agent yoki avtomatizatsiya qo'shiladi.",
          "3. Ma'lumotlaringizni tayyorlang — narxlar, katalog, ko'p so'raladigan savollar, biznes qoidalari. Sun'iy intellekt sifati sizning ma'lumotingiz sifatiga bog'liq.",
          "4. Konsultatsiya oling va sinab ko'ring — yaxshi provayder avval bepul konsultatsiyada ehtiyojni baholaydi, keyin kichik hajmda ishga tushirib, natijani o'lchaydi.",
        ],
      },
      {
        heading: "Tezcode sun'iy intellekt xizmatlari",
        paragraphs: [
          "Tezcode — 2024-yilda Toshkentda tashkil topgan, 16 kishilik AI Software Factory jamoasi. Yuqorida sanab o'tilgan sun'iy intellekt xizmatlarining barchasini qilamiz: AI chatbot va AI agentlar, jarayon avtomatizatsiyasi, AI video analitika, CRM/1C integratsiya va buyurtma AI ilovalar.",
          "Yechimlarni Claude (Anthropic) va GPT (OpenAI) modellari asosida quramiz, o'zbek va rus tilida (bitta suhbatda aralash bo'lsa ham) ishlashga sozlaymiz va mavjud tizimlaringizga — Telegram, Instagram, sayt, CRM, 1C — ulaymiz. Xizmatlar ro'yxati: tezcode.dev/ai-avtomatizatsiya, tezcode.dev/ai-chatbot va tezcode.dev/ai-agent sahifalarida.",
          "Boshlash uchun biror narsa sotib olish shart emas: avval bepul konsultatsiyada biznesingizga sun'iy intellekt qaysi ko'rinishda foyda berishini birga baholaymiz va yozma taklif tayyorlaymiz.",
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Sun'iy intellekt nima?",
          a: "Sun'iy intellekt (AI) — odatda odam aqli talab qiladigan ishlarni bajara oladigan dasturiy texnologiya: matnni tushunish, savolga javob berish, rasmni tanish va qaror qabul qilish. 2026-yilda bu ko'pincha GPT yoki Claude kabi katta til modellari asosidagi yechimlarni anglatadi. \"Sun'iy intellekt\" va \"AI\" — bitta tushunchaning o'zbekcha va inglizcha nomlari.",
        },
        {
          q: "Sun'iy intellekt xizmati qancha turadi?",
          a: "O'zbekistonda 2026-yilda boshlang'ich narxlar: AI chatbot $339 dan, AI agent $400 dan, Telegram bot $279 dan, jarayon avtomatizatsiyasi $400 dan, CRM/1C integratsiya $700 dan, AI video analitika $990 dan, buyurtma AI ilova (MVP) $1000 dan. Aniq narx kanallar, integratsiyalar va murakkablikka bog'liq — yozma taklif TZ dan keyin beriladi.",
        },
        {
          q: "AI o'zbek tilida ishlaydimi?",
          a: "Ha. Zamonaviy modellar (Claude, GPT) o'zbek tilida — lotin va kirill yozuvida, hatto bitta suhbatda o'zbek-rus aralash bo'lsa ham — ishlaydi. Sifat sozlashga bog'liq: tayyor xorijiy platformalar o'zbekchada ko'pincha qiynaladi, shuning uchun provayderdan o'zbekcha demo so'rang.",
        },
        {
          q: "Kichik biznesga sun'iy intellekt kerakmi?",
          a: "Agar kuniga o'nlab bir xil savolga javob bersangiz, kechqurun mijozlar javobsiz qolsa yoki ma'lumotni qo'lda ko'chirsangiz — ha, foyda beradi. Kichik biznes uchun kirish narxi ham past: Telegram bot $279 dan, AI chatbot $339 dan. Katta byudjet emas, to'g'ri tanlangan bitta yo'nalish muhim.",
        },
        {
          q: "Sun'iy intellekt xodimlarni almashtiradimi?",
          a: "Yo'q, to'g'ri qurilgan tizimda u odamni emas, takroriy ishni almashtiradi. Sun'iy intellekt birinchi qatorda ishlaydi (savollar, buyurtmalar, hisobotlar), murakkab va nozik holatlar odamga uzatiladi. Xodimlar qiymatli ishga vaqt topadi.",
        },
        {
          q: "Sun'iy intellekt yechimi qancha vaqtda ishga tushadi?",
          a: "Murakkablikka bog'liq: oddiy AI chatbot yoki Telegram bot nisbatan tez, ko'p integratsiyali AI agent yoki video analitika ko'proq vaqt oladi. Buyurtma AI ilovaning ishlovchi MVP versiyasi odatda 2-4 haftada tayyor bo'ladi. Aniq muddat tahlil bosqichidan keyin aytiladi.",
        },
      ],
    },
    cta: {
      title: "Biznesingizga sun'iy intellektni kiritmoqchimisiz?",
      subtitle:
        "Tezcode jamoasi biznesingizni tahlil qilib, qaysi sun'iy intellekt xizmati sizga real foyda berishini birga baholaydi. Bepul konsultatsiya oling.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "Искусственный интеллект / Руководство",
      title:
        "Услуги искусственного интеллекта в Узбекистане: виды, цены и как выбрать (2026)",
      subtitle:
        "Что такое искусственный интеллект (AI), какие услуги есть для бизнеса — чат-бот, ИИ-агент, автоматизация процессов, видеоаналитика, голосовые ассистенты, документный ИИ — сколько они стоят и как выбрать подрядчика — практическое руководство.",
      dateLabel: "26 августа 2026",
      readTime: "12 минут чтения",
    },
    tldr: {
      label: "Краткий ответ",
      text:
        "Искусственный интеллект (AI) — технология, которая берёт на себя «умные» задачи: понимание текста, принятие решений и выполнение работы. Основные услуги искусственного интеллекта для бизнеса в Узбекистане: ИИ-чат-бот (ответы клиентам 24/7, от $339), ИИ-агент (сам выполняет работу, от $400), автоматизация процессов (от $400), интеграция CRM/1С (от $700), ИИ-видеоаналитика (с существующими камерами, от $990), Telegram-бот (от $279) и заказные ИИ-приложения (MVP от $1000). Современные модели работают на узбекском и русском. При выборе подрядчика смотрите на портфолио, опыт с узбекским языком, возможности интеграции и письменное предложение. Tezcode — AI Software Factory в Ташкенте — делает все эти услуги и даёт бесплатную консультацию.",
    },
    sections: [
      {
        heading: "Что такое искусственный интеллект? (простым языком)",
        paragraphs: [
          "Искусственный интеллект (англ. Artificial Intelligence, сокращённо AI) — это программная технология, способная выполнять задачи, которые обычно требуют человеческого интеллекта: понимать текст, отвечать на вопросы, распознавать изображения, принимать решения и планировать работу.",
          "В 2026 году под «искусственным интеллектом» чаще всего понимают большие языковые модели (LLM) — GPT (OpenAI), Claude (Anthropic), Gemini (Google). Они понимают свободный текст, отвечают естественно и умеют работать с внешними системами. Если раньше бот отвечал только по нажатию кнопки, то теперь искусственный интеллект понимает свободный вопрос клиента «здравствуйте, нужен подарок дочке, что есть до 200 тысяч?» и находит подходящий товар в каталоге.",
          "Важный момент: искусственный интеллект — не магия, а инструмент. Он приносит реальную пользу, только когда наполнен вашими данными (цены, каталог, правила) и подключён к вашим системам (CRM, 1С, Telegram). Поэтому важнее не «поставить ИИ», а понять, какой процесс вы автоматизируете с помощью искусственного интеллекта.",
          "Ещё один частый вопрос — искусственный интеллект и AI это одно и то же? Да, это два названия одного понятия: «искусственный интеллект» — полный термин, «AI» — английская аббревиатура. В Узбекистане используются оба.",
        ],
      },
      {
        heading: "Что даёт искусственный интеллект бизнесу?",
        paragraphs: [
          "Прежде всего искусственный интеллект возвращает бизнесу время и потерянных клиентов. Самые частые проблемы малого и среднего бизнеса в Узбекистане — повторяющиеся ответы на одни и те же вопросы, клиенты без ответа вечером и в выходные, ручной перенос данных между системами. Всё это — задачи, которые искусственный интеллект выполняет хорошо.",
          "Нужна и честная оценка: искусственный интеллект не решает все проблемы и не заменяет человека полностью. Он берёт повторяющуюся, объёмную и рутинную часть, а сотрудники находят время на сложные сделки и отношения. Самая эффективная модель — гибрид: на первой линии искусственный интеллект, в сложных случаях — человек.",
        ],
        bullets: [
          "Ответ 24/7 — клиент получает ответ сразу, даже ночью или в праздник, лид не остывает.",
          "Автоматизация рутины — одинаковые вопросы, сбор отчётов и перенос данных перестают съедать время людей.",
          "Скорость — клиент не ждёт минутами, что напрямую влияет на конверсию.",
          "Стабильное качество — искусственный интеллект не устаёт и отвечает вежливо независимо от настроения.",
          "Данные и аналитика — каждый разговор и процесс записывается, появляются реальные цифры для решений.",
          "Масштаб — если клиентов стало вдвое больше, не обязательно вдвое увеличивать штат.",
        ],
      },
      {
        heading: "Какие услуги искусственного интеллекта есть в Узбекистане?",
        paragraphs: [
          "«Услуги искусственного интеллекта» — широкое понятие. На практике бизнесы в Узбекистане заказывают одно или несколько из следующих направлений. Каждое решает свою задачу:",
          "Полный список этих направлений собран на странице ИИ-автоматизации Tezcode (tezcode.dev/ai-avtomatizatsiya); отдельные страницы по чат-ботам и агентам — tezcode.dev/ai-chatbot и tezcode.dev/ai-agent.",
        ],
        bullets: [
          "ИИ-чат-бот — отвечает клиентам 24/7 на узбекском/русском в Telegram, Instagram, WhatsApp и на сайте, беря ответы из вашей базы знаний (цены, каталог, FAQ). Самая заказываемая услуга искусственного интеллекта.",
          "ИИ-агент — на шаг дальше чат-бота: не просто отвечает, а выполняет работу — проверяет остатки, записывает заказ в CRM/1С, отправляет счёт, передаёт сложный случай оператору.",
          "Автоматизация процессов — для внутренних задач: автоматический сбор отчётов, перенос данных между системами, подготовка документов, напоминания и уведомления.",
          "ИИ-видеоаналитика — делает ваши существующие IP-камеры «умными»: подсчёт людей (footfall), посещаемость по распознаванию лиц, контроль охраны труда, чтение автономеров (ANPR). Новые камеры не нужны.",
          "Голосовые ассистенты — системы, отвечающие на звонки или понимающие голосовые команды: запись на приём, статус заказа, опросы. Качество распознавания узбекской речи улучшается год от года.",
          "Документный ИИ — автоматическое чтение, сортировка и ввод в систему данных из договоров, счетов, заявлений и других документов. Особенно полезно бухгалтерии и юридическим отделам.",
          "Интеграция CRM/1С — подключение искусственного интеллекта к вашим существующим системам: amoCRM, Bitrix24, 1С. Идёт и как отдельная услуга, и в составе других решений.",
        ],
      },
      {
        heading: "Сколько стоят услуги искусственного интеллекта? (2026)",
        paragraphs: [
          "Самый частый вопрос — «сколько стоит услуга искусственного интеллекта?». Реальные стартовые цены на рынке Узбекистана в 2026 году такие (на примере Tezcode, они же указаны на странице tezcode.dev/tariflar):",
          "Точная цена зависит от количества каналов, интеграций (CRM, 1С, платёжная система) и сложности. Правильный порядок: сначала на бесплатной консультации определяется потребность, затем по техническому заданию (ТЗ) даётся письменное предложение. Оплата обычно 30% предоплата, остальное поэтапно. Остерегайтесь предложений «единая цена для всех» — они редко соответствуют реальному процессу.",
        ],
        bullets: [
          "ИИ-чат-бот (Telegram, Instagram, WhatsApp, сайт) — от $339.",
          "ИИ-агент (сам выполняет работу, пишет в CRM/1С) — от $400.",
          "Telegram-бот (заказы, оплата Click/Payme) — от $279.",
          "Автоматизация процессов (отчёты, склад, внутренние процессы) — от $400.",
          "Интеграция CRM/1С (amoCRM, Bitrix24, 1С) — от $700.",
          "ИИ-видеоаналитика (подсчёт людей, посещаемость, ANPR) — от $990, разовое подключение.",
          "Заказное ИИ-приложение (custom) — MVP от $1000, полная цена после ТЗ.",
        ],
      },
      {
        heading: "У кого заказать услугу искусственного интеллекта? Критерии выбора подрядчика",
        paragraphs: [
          "Предложений услуг искусственного интеллекта в Узбекистане всё больше: фрилансеры, небольшие студии, IT-компании. Качество при этом очень разное. При выборе смотрите на следующие критерии:",
          "Есть и тревожные признаки: «сделаем всё» без портфолио, точная цена без ТЗ в первом же разговоре, неспособность показать работу на узбекском языке и подход «сдали — и всё» без поддержки. Если видите такие признаки — ищите другого подрядчика.",
        ],
        bullets: [
          "Реальные проекты — просите демо или живой пример: попереписывайтесь с ботом, посмотрите экран видеоаналитики.",
          "Опыт с узбекским языком — готовые зарубежные платформы часто плохо справляются с узбекским; подрядчик должен показать смешанное uz/ru общение на деле.",
          "Возможности интеграции — сможет ли он работать с вашей CRM, 1С, платёжной системой? Без интеграции искусственный интеллект остаётся «говорящей игрушкой».",
          "Письменное предложение и ТЗ — цена и сроки должны даваться письменно на основе технического задания, а не устно.",
          "Поддержка — кто после запуска мониторит, обновляет и исправляет ошибки? Это должно быть в договоре.",
          "Команда и адрес — работать с компанией с реальным офисом и командой стабильнее, чем с фрилансером (не гарантия, но важный сигнал).",
        ],
      },
      {
        heading: "С чего начать? — 4 практических шага",
        paragraphs: [
          "Внедрение искусственного интеллекта не обязано начинаться с большого проекта. Правильный путь — начать с маленького, измеримого шага:",
        ],
        bullets: [
          "1. Определите проблему — какая работа съедает больше всего времени и где вы теряете клиентов? Чаще всего это повторяющиеся вопросы или вечерние сообщения без ответа.",
          "2. Выберите одно направление — не всё сразу: сначала, например, ИИ-чат-бот, а когда виден результат — добавляется агент или автоматизация.",
          "3. Подготовьте свои данные — цены, каталог, частые вопросы, бизнес-правила. Качество искусственного интеллекта зависит от качества ваших данных.",
          "4. Получите консультацию и попробуйте — хороший подрядчик сначала бесплатно оценит потребность, затем запустит на небольшом объёме и измерит результат.",
        ],
      },
      {
        heading: "Услуги искусственного интеллекта от Tezcode",
        paragraphs: [
          "Tezcode — команда AI Software Factory из 16 человек, основанная в Ташкенте в 2024 году. Мы делаем все перечисленные выше услуги искусственного интеллекта: ИИ-чат-боты и ИИ-агенты, автоматизацию процессов, ИИ-видеоаналитику, интеграцию CRM/1С и заказные ИИ-приложения.",
          "Решения строим на моделях Claude (Anthropic) и GPT (OpenAI), настраиваем работу на узбекском и русском (даже вперемешку в одном разговоре) и подключаем к вашим существующим системам — Telegram, Instagram, сайту, CRM, 1С. Список услуг — на страницах tezcode.dev/ai-avtomatizatsiya, tezcode.dev/ai-chatbot и tezcode.dev/ai-agent.",
          "Чтобы начать, ничего покупать не нужно: сначала на бесплатной консультации мы вместе оценим, в каком виде искусственный интеллект принесёт пользу вашему бизнесу, и подготовим письменное предложение.",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Что такое искусственный интеллект?",
          a: "Искусственный интеллект (AI) — программная технология, способная выполнять задачи, обычно требующие человеческого интеллекта: понимать текст, отвечать на вопросы, распознавать изображения и принимать решения. В 2026 году это чаще всего решения на базе больших языковых моделей вроде GPT или Claude. «Искусственный интеллект» и «AI» — названия одного и того же понятия.",
        },
        {
          q: "Сколько стоит услуга искусственного интеллекта?",
          a: "Стартовые цены в Узбекистане в 2026 году: ИИ-чат-бот от $339, ИИ-агент от $400, Telegram-бот от $279, автоматизация процессов от $400, интеграция CRM/1С от $700, ИИ-видеоаналитика от $990, заказное ИИ-приложение (MVP) от $1000. Точная цена зависит от каналов, интеграций и сложности — письменное предложение даётся после ТЗ.",
        },
        {
          q: "Работает ли ИИ на узбекском языке?",
          a: "Да. Современные модели (Claude, GPT) работают на узбекском — на латинице и кириллице, даже при смешанном узбекско-русском общении в одном разговоре. Качество зависит от настройки: готовые зарубежные платформы часто плохо справляются с узбекским, поэтому просите у подрядчика демо на узбекском.",
        },
        {
          q: "Нужен ли искусственный интеллект малому бизнесу?",
          a: "Если вы по десятку раз в день отвечаете на одни и те же вопросы, клиенты вечером остаются без ответа или вы вручную переносите данные — да, польза будет. Порог входа для малого бизнеса невысокий: Telegram-бот от $279, ИИ-чат-бот от $339. Важен не большой бюджет, а одно правильно выбранное направление.",
        },
        {
          q: "Заменит ли искусственный интеллект сотрудников?",
          a: "Нет, в правильно построенной системе он заменяет не человека, а рутину. Искусственный интеллект работает на первой линии (вопросы, заказы, отчёты), а сложные и деликатные случаи передаются человеку. Сотрудники получают время на ценную работу.",
        },
        {
          q: "За какое время запускается решение на искусственном интеллекте?",
          a: "Зависит от сложности: простой ИИ-чат-бот или Telegram-бот — относительно быстро, ИИ-агент с многими интеграциями или видеоаналитика — дольше. Рабочая MVP-версия заказного ИИ-приложения обычно готова за 2-4 недели. Точный срок называется после этапа анализа.",
        },
      ],
    },
    cta: {
      title: "Хотите внедрить искусственный интеллект в свой бизнес?",
      subtitle:
        "Команда Tezcode проанализирует ваш бизнес и вместе с вами оценит, какая услуга искусственного интеллекта даст вам реальную пользу. Получите бесплатную консультацию.",
      button: "Связаться через Telegram",
      note: "Обычно отвечаем в течение нескольких часов.",
    },
  },

  en: {
    hero: {
      badge: "Artificial intelligence / Guide",
      title:
        "Artificial intelligence services in Uzbekistan: types, prices and how to choose (2026)",
      subtitle:
        "What artificial intelligence (AI) is, which services exist for business — chatbots, AI agents, process automation, video analytics, voice assistants, document AI — what they cost and how to choose a provider — a practical guide.",
      dateLabel: "August 26, 2026",
      readTime: "12 min read",
    },
    tldr: {
      label: "Short answer",
      text:
        "Artificial intelligence (AI) is technology that takes on \"smart\" work: understanding text, making decisions and completing tasks. The main artificial intelligence services for business in Uzbekistan are: AI chatbots (24/7 customer replies, from $339), AI agents (they do the work themselves, from $400), process automation (from $400), CRM/1C integration (from $700), AI video analytics (with your existing cameras, from $990), Telegram bots (from $279) and custom AI applications (MVP from $1000). Modern models work in Uzbek and Russian. When choosing a provider, look at the portfolio, Uzbek-language experience, integration capability and a written proposal. Tezcode — an AI Software Factory in Tashkent — delivers all of these services and offers a free consultation.",
    },
    sections: [
      {
        heading: "What is artificial intelligence? (in plain language)",
        paragraphs: [
          "Artificial intelligence (AI) is software technology capable of doing work that usually requires human intelligence: understanding text, answering questions, recognizing images, making decisions and planning tasks.",
          "In 2026, \"artificial intelligence\" most often means large language models (LLMs) — GPT (OpenAI), Claude (Anthropic), Gemini (Google). They understand free-form text, respond naturally and can work with external systems. Where an old bot only replied when a button was pressed, artificial intelligence now understands a customer's free question — \"hi, I need a gift for my daughter, what do you have up to 200 thousand?\" — and finds a matching product in the catalog.",
          "An important point: artificial intelligence is not magic, it is a tool. It delivers real value only when it is filled with your data (prices, catalog, rules) and connected to your systems (CRM, 1C, Telegram). So the key question is not \"install AI\" but \"which process are we solving with artificial intelligence.\"",
          "Another common question — are artificial intelligence and AI the same thing? Yes, they are two names for one concept: \"artificial intelligence\" is the full term, \"AI\" is the English abbreviation. In Uzbekistan both are used.",
        ],
      },
      {
        heading: "What does artificial intelligence give a business?",
        paragraphs: [
          "Above all, artificial intelligence gives a business back its time and its lost customers. The most common problems of small and medium businesses in Uzbekistan are answering the same questions over and over, customers left unanswered in the evening and on weekends, and manual data transfer between systems. All of these are jobs artificial intelligence does well.",
          "An honest assessment is needed too: artificial intelligence does not solve every problem and does not fully replace people. It takes the repetitive, high-volume, tedious part, while employees find time for complex deals and relationships. The most effective model is a hybrid: artificial intelligence on the front line, a human for complex cases.",
        ],
        bullets: [
          "24/7 replies — the customer gets an instant answer even at night or on a holiday, and the lead does not go cold.",
          "Automating routine — repeated questions, report gathering and data transfer stop eating up people's time.",
          "Speed — the customer does not wait for minutes, which directly affects conversion.",
          "Consistent quality — artificial intelligence does not get tired and answers politely regardless of mood.",
          "Data and analytics — every conversation and process is recorded, producing real numbers for decisions.",
          "Scale — if the number of customers doubles, you do not have to double the headcount.",
        ],
      },
      {
        heading: "Which artificial intelligence services exist in Uzbekistan?",
        paragraphs: [
          "\"Artificial intelligence services\" is a broad concept. In practice, businesses in Uzbekistan order one or several of the following directions. Each solves its own problem:",
          "The full list of these directions is gathered on Tezcode's AI automation page (tezcode.dev/ai-avtomatizatsiya); dedicated pages for chatbots and agents are at tezcode.dev/ai-chatbot and tezcode.dev/ai-agent.",
        ],
        bullets: [
          "AI chatbot — answers customers 24/7 in Uzbek/Russian on Telegram, Instagram, WhatsApp and the website, drawing answers from your knowledge base (prices, catalog, FAQ). The most-ordered artificial intelligence service.",
          "AI agent — one step beyond a chatbot: it does not just answer, it does the work — checks stock, writes the order into CRM/1C, sends an invoice, hands complex cases to an operator.",
          "Process automation — for internal work: automatic report gathering, moving data between systems, preparing documents, reminders and notifications.",
          "AI video analytics — makes your existing IP cameras \"smart\": people counting (footfall), attendance via face recognition, workplace safety monitoring, license plate reading (ANPR). No new cameras needed.",
          "Voice assistants — systems that answer calls or understand voice commands: appointment booking, order status, surveys. Uzbek speech recognition quality improves year by year.",
          "Document AI — automatically reading, sorting and entering data from contracts, invoices, applications and other documents. Especially useful for accounting and legal departments.",
          "CRM/1C integration — connecting artificial intelligence to your existing systems: amoCRM, Bitrix24, 1C. Offered both as a standalone service and as part of other solutions.",
        ],
      },
      {
        heading: "How much do artificial intelligence services cost? (2026)",
        paragraphs: [
          "The most frequent question is \"how much does an artificial intelligence service cost?\" Realistic starting prices on the Uzbekistan market in 2026 are as follows (Tezcode's own, also listed at tezcode.dev/tariflar):",
          "The exact price depends on the number of channels, the integrations (CRM, 1C, payment system) and the complexity. The right order: first the need is identified in a free consultation, then a written proposal is given based on a technical specification. Payment is usually 30% upfront, the rest in stages. Be wary of \"one price for everyone\" offers — they rarely match a real process.",
        ],
        bullets: [
          "AI chatbot (Telegram, Instagram, WhatsApp, website) — from $339.",
          "AI agent (does the work itself, writes to CRM/1C) — from $400.",
          "Telegram bot (orders, Click/Payme payment) — from $279.",
          "Process automation (reports, inventory, internal processes) — from $400.",
          "CRM/1C integration (amoCRM, Bitrix24, 1C) — from $700.",
          "AI video analytics (people counting, attendance, ANPR) — from $990, one-time setup.",
          "Custom AI application — MVP from $1000, full price after the specification.",
        ],
      },
      {
        heading: "Who should you buy an artificial intelligence service from? Provider selection criteria",
        paragraphs: [
          "The number of artificial intelligence service providers in Uzbekistan is growing: freelancers, small studios, IT companies. Quality varies widely. When choosing, look at the following criteria:",
          "There are warning signs too: \"we do everything\" with no portfolio, an exact price without a specification in the very first conversation, inability to demonstrate Uzbek-language work, and a \"delivered — done\" approach with no support. If you see these signs, look for another provider.",
        ],
        bullets: [
          "Real delivered projects — ask for a demo or a live example: chat with the bot yourself, look at the video analytics screen.",
          "Uzbek-language experience — off-the-shelf foreign platforms often struggle with Uzbek; the provider should demonstrate mixed uz/ru conversation in practice.",
          "Integration capability — can they work with your CRM, 1C, payment system? Without integration, artificial intelligence remains a \"talking toy.\"",
          "A written proposal and specification — the price and timeline should be given in writing based on a technical specification, not verbally.",
          "Support — who monitors, updates and fixes issues after launch? This should be in the contract.",
          "Team and address — working with a company that has a real office and team is more stable than a freelancer (not a guarantee, but an important signal).",
        ],
      },
      {
        heading: "Where to start? — 4 practical steps",
        paragraphs: [
          "Bringing artificial intelligence into a business does not have to start with a big project. The right path is to start with a small, measurable step:",
        ],
        bullets: [
          "1. Identify the problem — which work eats the most time, and where do you lose customers? Most often it is repeated questions or evening messages left unanswered.",
          "2. Pick one direction — not everything at once: first, for example, an AI chatbot; once the result is visible, an agent or automation is added.",
          "3. Prepare your data — prices, catalog, common questions, business rules. The quality of artificial intelligence depends on the quality of your data.",
          "4. Get a consultation and try it — a good provider first assesses the need in a free consultation, then launches at a small volume and measures the result.",
        ],
      },
      {
        heading: "Artificial intelligence services from Tezcode",
        paragraphs: [
          "Tezcode is a 16-person AI Software Factory team founded in Tashkent in 2024. We deliver all the artificial intelligence services listed above: AI chatbots and AI agents, process automation, AI video analytics, CRM/1C integration and custom AI applications.",
          "We build the solutions on Claude (Anthropic) and GPT (OpenAI) models, tune them to work in Uzbek and Russian (even mixed within one conversation) and connect them to your existing systems — Telegram, Instagram, website, CRM, 1C. The service list is on the tezcode.dev/ai-avtomatizatsiya, tezcode.dev/ai-chatbot and tezcode.dev/ai-agent pages.",
          "To get started you do not have to buy anything: first, in a free consultation, we assess together in what form artificial intelligence will benefit your business, and prepare a written proposal.",
        ],
      },
    ],
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What is artificial intelligence?",
          a: "Artificial intelligence (AI) is software technology capable of doing work that usually requires human intelligence: understanding text, answering questions, recognizing images and making decisions. In 2026 this most often means solutions built on large language models like GPT or Claude. \"Artificial intelligence\" and \"AI\" are names for the same concept.",
        },
        {
          q: "How much does an artificial intelligence service cost?",
          a: "Starting prices in Uzbekistan in 2026: AI chatbot from $339, AI agent from $400, Telegram bot from $279, process automation from $400, CRM/1C integration from $700, AI video analytics from $990, custom AI application (MVP) from $1000. The exact price depends on channels, integrations and complexity — a written proposal is given after the specification.",
        },
        {
          q: "Does AI work in the Uzbek language?",
          a: "Yes. Modern models (Claude, GPT) work in Uzbek — in Latin and Cyrillic script, even with mixed Uzbek-Russian within one conversation. Quality depends on the tuning: off-the-shelf foreign platforms often struggle with Uzbek, so ask the provider for a demo in Uzbek.",
        },
        {
          q: "Does a small business need artificial intelligence?",
          a: "If you answer the same questions dozens of times a day, customers go unanswered in the evening, or you move data by hand — yes, it will help. The entry price for small business is low: a Telegram bot from $279, an AI chatbot from $339. What matters is not a big budget but one well-chosen direction.",
        },
        {
          q: "Will artificial intelligence replace employees?",
          a: "No — in a properly built system it replaces the routine, not the person. Artificial intelligence works on the front line (questions, orders, reports), while complex and delicate cases are handed to a human. Employees gain time for valuable work.",
        },
        {
          q: "How long does an artificial intelligence solution take to launch?",
          a: "It depends on complexity: a simple AI chatbot or Telegram bot is relatively fast, while an AI agent with many integrations or video analytics takes longer. A working MVP of a custom AI application is usually ready in 2-4 weeks. The exact timeline is given after the analysis stage.",
        },
      ],
    },
    cta: {
      title: "Want to bring artificial intelligence into your business?",
      subtitle:
        "The Tezcode team will analyze your business and assess together which artificial intelligence service will bring you real value. Get a free consultation.",
      button: "Contact via Telegram",
      note: "We usually reply within a few hours.",
    },
  },
};
