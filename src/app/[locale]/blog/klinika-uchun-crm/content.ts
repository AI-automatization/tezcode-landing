import type { ArticleContent } from "@/components/blog/types";

// Article: "How to choose a CRM for a clinic in Uzbekistan" (ClinicaGo as the
// worked example). Answer-first structure (TL;DR + question H2s + FAQ) so answer
// engines can lift a clean, quotable answer. uz master; ru full translation;
// other locales fall back to uz at render time.

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "CRM / Klinika",
      title: "Klinika uchun CRM qanday tanlanadi",
      subtitle:
        "Klinika, tibbiyot markazi yoki stomatologiya uchun CRM tanlash bo'yicha amaliy qo'llanma — qaysi imkoniyatlar shart, rollar va moliyaviy nazorat nega muhim va eng ko'p uchraydigan xatolar.",
      dateLabel: "2026-yil 7-iyun",
      readTime: "8 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "Klinika uchun CRM tanlashda 5 ta narsaga e'tibor bering: (1) qabullarni va shifokor jadvalini bitta joydan boshqarish, (2) bemor bazasi va davolash tarixi, (3) moliyaviy hisobot — har bir to'lov va xarajat ko'rinib turishi, (4) rollar bo'yicha kirish huquqi (CEO, resepshyen, doktor, call-center alohida ko'radi), (5) eslatma va call-center moduli. Eng katta xato — oddiy savdo CRM'ini klinikaga moslashtirishga urinish: tibbiy jarayon (qabul, tashxis tarixi, shifokor jadvali) uchun maxsus tizim kerak.",
    },
    sections: [
      {
        heading: "Klinika CRM nima va oddiy CRM'dan farqi nimada?",
        paragraphs: [
          "Klinika CRM — bu klinikaning kundalik ishini bitta joydan boshqaradigan tizim: bemorlar bazasi, qabullar jadvali, shifokorlar ish vaqti, moliya va hisobotlar. Oddiy savdo CRM'idan farqi shundaki, u tibbiy jarayonga moslangan — bemor kartasi, tashxis va davolash tarixi, qabullar oqimi.",
          "Ko'p klinikalar dastlab Excel, qog'oz daftar yoki Telegram guruhlari bilan ishlaydi. Bemor ko'paygach, qabullar adashadi, bemor tarixi yo'qoladi, moliya tushunarsiz bo'lib qoladi va resepshyen telefon qo'ng'iroqlariga ko'milib qoladi. CRM shu tartibsizlikni bartaraf etadi.",
        ],
      },
      {
        heading: "Klinika CRM'ida qaysi imkoniyatlar shart?",
        paragraphs: [
          "Klinikaning hajmidan qat'i nazar, quyidagi imkoniyatlar deyarli har bir tibbiyot muassasasi uchun zarur:",
        ],
        bullets: [
          "Qabullar va shifokor jadvali — bo'sh vaqtlarni ko'rish, online yozilish, qayta yozilish va bekor qilishni boshqarish.",
          "Bemor bazasi va davolash tarixi — har bir bemorning oldingi qabullari, tashxislari va to'lovlari bir joyda.",
          "Moliyaviy hisobot — kunlik/oylik tushum, shifokor kesimida daromad, xarajatlar va qarzdorliklar.",
          "Rollar va kirish huquqi — CEO, resepshyen, shifokor va call-center har biri faqat o'ziga keragini ko'radi.",
          "Call-center moduli — kiruvchi qo'ng'iroqlar, bemorga aloqa tarixi va eslatmalar.",
          "Eslatmalar — bemorga qabul haqida SMS/eslatma, kelmaslik (no-show) holatlarini kamaytirish.",
        ],
      },
      {
        heading: "Rollar va kirish huquqi nega muhim?",
        paragraphs: [
          "Klinikada har bir xodim turli ma'lumotga ehtiyoj sezadi: resepshyenga qabullar jadvali kerak, shifokorga bemor tarixi, rahbarga esa moliyaviy ko'rinish. Hamma hamma narsani ko'rib tursa — bu ham xavfsizlik, ham tartib muammosi.",
          "Yaxshi klinika CRM'ida rol asosidagi kirish bo'ladi: CEO butun moliyani ko'radi, resepshyen faqat qabul va aloqani, shifokor o'z bemorlarini. Bu maxfiylikni saqlaydi va xatolarni kamaytiradi. Masalan, ClinicaGo aynan shu rollar (CEO, resepshyen, doktor, call-center) bilan ishlaydi.",
        ],
      },
      {
        heading: "Moliyaviy shaffoflik — eng ko'p e'tibordan chetda qoladigan jihat",
        paragraphs: [
          "Klinika egalarining ko'pchiligi kun oxirida \"bugun qancha tushdi?\" degan savolga aniq javob bera olmaydi. Naqd, karta va qarzga xizmatlar aralashib ketsa, haqiqiy daromad ko'rinmay qoladi.",
          "CRM har bir to'lovni qabulga bog'laydi: qaysi shifokor, qaysi xizmat, qancha tushdi va qancha xarajat bo'ldi. Shu orqali rahbar real foydani ko'radi va qaror qabul qiladi. Moliyaviy modulsiz CRM klinika uchun yarim yechim.",
        ],
      },
      {
        heading: "Klinika CRM tanlashda eng ko'p uchraydigan xatolar",
        paragraphs: ["Klinika rahbarlari CRM tanlashda ko'pincha quyidagi xatolarga yo'l qo'yadi:"],
        bullets: [
          "Oddiy savdo CRM'ini klinikaga moslashtirish — tibbiy jarayon (bemor kartasi, jadval, tarix) uchun u yetarli emas.",
          "Faqat qabul jadvaliga e'tibor berib, moliyani unutish — natijada daromad ko'rinmaydi.",
          "Rollarni hisobga olmaslik — hamma hamma narsani ko'rsa, maxfiylik va tartib buziladi.",
          "Mahalliy qo'llab-quvvatlash yo'qligi — muammo chiqqanda o'zbek/rus tilida tezkor yordam muhim.",
          "Ma'lumotni ko'chira olmaslik — bemor bazasini eksport qila olmasangiz, tizimga \"qulflanib\" qolasiz.",
        ],
      },
      {
        heading: "ClinicaGo — klinikalar uchun CRM misolida",
        paragraphs: [
          "ClinicaGo — Tezcode (CoreMed ekotizimi) tomonidan klinikalar uchun yaratilgan CRM. Qabullar, moliya, xodimlar va bemorlarni bitta joydan boshqarish imkonini beradi: rol asosidagi kirish (CEO, resepshyen, doktor, call-center), moliyaviy hisobot, kabinet va xodim jadvali, bemorlar bazasi va davolash tarixi hamda call-center moduli.",
          "U real klinikalarda foydalanilmoqda (app.clinicago.uz) va navbat vaqtini qisqartirish, moliyani shaffoflashtirish hamda bemor sodiqligini oshirishga yordam beradi. Agar klinikangiz uchun mos CRM tanlashda yordam kerak bo'lsa, jamoamiz bilan bog'lanib bepul maslahat olishingiz mumkin.",
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Kichik klinika yoki bitta shifokorli kabinet uchun ham CRM kerakmi?",
          a: "Ha. Hatto bitta shifokorli kabinetda ham CRM qabullarni tartibga soladi, bemor tarixini saqlaydi va kun oxirida moliyani aniq ko'rsatadi. Kichik joyda u resepshyen vaqtini ko'p tejaydi.",
        },
        {
          q: "Oddiy savdo CRM (masalan, do'kon uchun) klinikaga to'g'ri keladimi?",
          a: "Odatda yo'q. Klinikaga bemor kartasi, davolash tarixi, shifokor jadvali va tibbiy qabul oqimi kerak — oddiy savdo CRM'ida bular bo'lmaydi. Klinikaga moslangan tizim tanlash to'g'riroq.",
        },
        {
          q: "Bemor ma'lumotlari xavfsiz saqlanadimi?",
          a: "Yaxshi CRM rol asosidagi kirish beradi — har xodim faqat o'ziga keragini ko'radi. Bu bemor maxfiyligini saqlaydi va tasodifiy xatolarni kamaytiradi.",
        },
        {
          q: "CRM klinika daromadini oshirishga qanday yordam beradi?",
          a: "Eslatmalar orqali bemorning kelmaslik (no-show) holatlarini kamaytiradi, qayta yozilishni osonlashtiradi va moliyaviy ko'rinish orqali qaysi xizmat foydali ekanini ko'rsatadi.",
        },
        {
          q: "Mavjud bemor bazamizni yangi CRM'ga ko'chira olamizmi?",
          a: "Ha. Yaxshi tizim mavjud bemor ma'lumotlarini import qilish imkonini beradi, shunda noldan boshlamaysiz.",
        },
        {
          q: "Klinika CRM O'zbekistonda qancha turadi?",
          a: "Narx klinika hajmi, xodim soni va kerakli modullarga bog'liq. To'g'ri yondashuv — avval ehtiyojni aniqlab, keyin shu ehtiyojga mos narxni so'rash. Tezcode bilan bog'lansangiz, ehtiyojingizga qarab aniq taklif beramiz.",
        },
      ],
    },
    cta: {
      title: "Klinikangiz uchun mos CRM tanlashda yordam kerakmi?",
      subtitle:
        "Tezcode jamoasi klinikangiz jarayonini tahlil qilib, ClinicaGo asosida mos yechimni tavsiya qiladi. Bepul maslahat oling.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "CRM / Клиника",
      title: "Как выбрать CRM для клиники",
      subtitle:
        "Практическое руководство по выбору CRM для клиники, медцентра или стоматологии — какие функции обязательны, почему важны роли и финансовый контроль и частые ошибки.",
      dateLabel: "7 июня 2026",
      readTime: "8 минут чтения",
    },
    tldr: {
      label: "Краткий ответ",
      text:
        "При выборе CRM для клиники обратите внимание на 5 вещей: (1) управление приёмами и расписанием врачей из одного места, (2) база пациентов и история лечения, (3) финансовый отчёт — виден каждый платёж и расход, (4) доступ по ролям (CEO, ресепшен, врач, call-центр видят разное), (5) напоминания и модуль call-центра. Главная ошибка — пытаться приспособить обычную торговую CRM под клинику: для медицинского процесса (приём, история диагнозов, расписание врачей) нужна специализированная система.",
    },
    sections: [
      {
        heading: "Что такое CRM для клиники и чем она отличается от обычной?",
        paragraphs: [
          "CRM для клиники — это система, которая управляет ежедневной работой клиники из одного места: база пациентов, расписание приёмов, рабочее время врачей, финансы и отчёты. Отличие от обычной торговой CRM в том, что она заточена под медицинский процесс — карта пациента, история диагнозов и лечения, поток приёмов.",
          "Многие клиники сначала работают в Excel, бумажном журнале или Telegram-группах. С ростом числа пациентов приёмы путаются, история теряется, финансы становятся непрозрачными, а ресепшен тонет в телефонных звонках. CRM устраняет этот беспорядок.",
        ],
      },
      {
        heading: "Какие функции обязательны в CRM для клиники?",
        paragraphs: [
          "Независимо от размера клиники, следующие функции нужны почти любому медучреждению:",
        ],
        bullets: [
          "Приёмы и расписание врачей — просмотр свободных слотов, онлайн-запись, перенос и отмена.",
          "База пациентов и история лечения — прошлые приёмы, диагнозы и платежи каждого пациента в одном месте.",
          "Финансовый отчёт — выручка за день/месяц, доход по врачам, расходы и задолженности.",
          "Роли и права доступа — CEO, ресепшен, врач и call-центр видят только то, что нужно им.",
          "Модуль call-центра — входящие звонки, история контактов с пациентом и заметки.",
          "Напоминания — SMS/напоминание пациенту о приёме, снижение неявок (no-show).",
        ],
      },
      {
        heading: "Почему важны роли и права доступа?",
        paragraphs: [
          "В клинике каждому сотруднику нужны разные данные: ресепшену — расписание приёмов, врачу — история пациента, руководителю — финансовая картина. Если все видят всё — это проблема и безопасности, и порядка.",
          "В хорошей CRM для клиники есть доступ по ролям: CEO видит все финансы, ресепшен — только приёмы и контакты, врач — своих пациентов. Это сохраняет конфиденциальность и снижает ошибки. Например, ClinicaGo работает именно с такими ролями (CEO, ресепшен, врач, call-центр).",
        ],
      },
      {
        heading: "Финансовая прозрачность — самый недооценённый аспект",
        paragraphs: [
          "Большинство владельцев клиник в конце дня не могут точно ответить на вопрос «сколько сегодня заработали?». Когда наличные, карта и услуги в долг смешиваются, реальный доход не виден.",
          "CRM привязывает каждый платёж к приёму: какой врач, какая услуга, сколько поступило и сколько ушло на расходы. Так руководитель видит реальную прибыль и принимает решения. Без финансового модуля CRM — это половина решения для клиники.",
        ],
      },
      {
        heading: "Частые ошибки при выборе CRM для клиники",
        paragraphs: ["Руководители клиник часто допускают следующие ошибки:"],
        bullets: [
          "Приспосабливают обычную торговую CRM под клинику — для медпроцесса (карта пациента, расписание, история) её недостаточно.",
          "Смотрят только на расписание приёмов, забывая про финансы — в итоге доход не виден.",
          "Не учитывают роли — если все видят всё, нарушаются конфиденциальность и порядок.",
          "Нет местной поддержки — при проблеме важна быстрая помощь на узбекском/русском.",
          "Невозможно выгрузить данные — без экспорта базы пациентов вы «заперты» в системе.",
        ],
      },
      {
        heading: "На примере ClinicaGo — CRM для клиник",
        paragraphs: [
          "ClinicaGo — CRM для клиник, созданная Tezcode (экосистема CoreMed). Позволяет управлять приёмами, финансами, сотрудниками и пациентами из одного места: доступ по ролям (CEO, ресепшен, врач, call-центр), финансовый отчёт, расписание кабинетов и сотрудников, база пациентов и история лечения, модуль call-центра.",
          "Система используется в реальных клиниках (app.clinicago.uz) и помогает сократить время ожидания, сделать финансы прозрачными и повысить лояльность пациентов. Если нужна помощь в выборе подходящей CRM, свяжитесь с нашей командой и получите бесплатную консультацию.",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Нужна ли CRM маленькой клинике или кабинету с одним врачом?",
          a: "Да. Даже в кабинете с одним врачом CRM упорядочивает приёмы, хранит историю пациентов и в конце дня точно показывает финансы. В небольшом месте она сильно экономит время ресепшена.",
        },
        {
          q: "Подойдёт ли обычная торговая CRM (например, для магазина) для клиники?",
          a: "Обычно нет. Клинике нужны карта пациента, история лечения, расписание врачей и поток медицинских приёмов — в обычной торговой CRM их нет. Правильнее выбрать систему, заточенную под клинику.",
        },
        {
          q: "Безопасно ли хранятся данные пациентов?",
          a: "Хорошая CRM даёт доступ по ролям — каждый сотрудник видит только нужное ему. Это сохраняет конфиденциальность пациентов и снижает случайные ошибки.",
        },
        {
          q: "Как CRM помогает увеличить доход клиники?",
          a: "Через напоминания снижает неявки (no-show), упрощает повторную запись и через финансовую картину показывает, какая услуга прибыльна.",
        },
        {
          q: "Можно ли перенести существующую базу пациентов в новую CRM?",
          a: "Да. Хорошая система позволяет импортировать существующие данные пациентов, чтобы не начинать с нуля.",
        },
        {
          q: "Сколько стоит CRM для клиники в Узбекистане?",
          a: "Цена зависит от размера клиники, числа сотрудников и нужных модулей. Правильный подход — сначала определить потребности, затем узнать цену. Свяжитесь с Tezcode, и мы дадим точное предложение под ваши задачи.",
        },
      ],
    },
    cta: {
      title: "Нужна помощь в выборе подходящей CRM для вашей клиники?",
      subtitle:
        "Команда Tezcode проанализирует процессы вашей клиники и порекомендует решение на базе ClinicaGo. Получите бесплатную консультацию.",
      button: "Связаться через Telegram",
      note: "Обычно отвечаем в течение нескольких часов.",
    },
  },
};
