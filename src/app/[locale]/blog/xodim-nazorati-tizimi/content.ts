import type { ArticleContent } from "@/components/blog/types";

// Article: "How to choose an employee monitoring / task-tracking system"
// (WorkControl as the worked example). Answer-first (TL;DR + question H2s + FAQ)
// for answer-engine citation. uz master; ru full translation; other locales
// fall back to uz at render time.

export const CONTENT: ArticleContent = {
  uz: {
    hero: {
      badge: "HR / Nazorat",
      title: "Xodimlar ish vaqti va vazifalarini nazorat qilish tizimi qanday tanlanadi",
      subtitle:
        "Xodimlar ish vaqti, vazifalar va samaradorlikni nazorat qilish tizimini tanlash bo'yicha amaliy qo'llanma — qaysi imkoniyatlar shart, nazorat va ishonch muvozanati va eng ko'p uchraydigan xatolar.",
      dateLabel: "2026-yil 7-iyun",
      readTime: "7 daqiqa o'qish",
    },
    tldr: {
      label: "Qisqacha javob",
      text:
        "Xodim nazorati tizimini tanlashda 5 ta narsaga e'tibor bering: (1) vazifalarni topshirish va bajarilishini kuzatish, (2) ish vaqti va davomat hisobi, (3) tushunarli samaradorlik hisobotlari, (4) bo'lim va xodim kesimida ko'rinish, (5) ortiqcha kuzatuvsiz — xodimni bezdirmaydigan muvozanat. Eng katta xato — tizimni faqat \"kuzatuv\" deb tushunish: maqsad — ayblash emas, balki vazifa va natijani shaffof qilish.",
    },
    sections: [
      {
        heading: "Xodim nazorati tizimi nima va nega kerak?",
        paragraphs: [
          "Xodim nazorati (yoki ish/vazifa boshqaruvi) tizimi — bu kimga qaysi vazifa berilgani, u qachon bajarilishi va xodimlar ish vaqti qanday o'tayotganini bitta joydan ko'rsatadigan dastur. Oddiy qilib aytganda, vazifa + ish vaqti + hisobot bitta tizimda.",
          "Vazifalar Telegram, qog'oz yoki og'zaki berilganda, ular yo'qoladi, kim nima qilayotgani noaniq bo'ladi va rahbar \"ish bo'ldimi?\" deb har birini alohida so'rashga majbur bo'ladi. Nazorat tizimi shu noaniqlikni yo'qotadi: har vazifaning egasi, muddati va holati ko'rinib turadi.",
        ],
      },
      {
        heading: "Qaysi imkoniyatlarga e'tibor berish kerak?",
        paragraphs: [
          "Jamoaning hajmidan qat'i nazar, quyidagi imkoniyatlar deyarli har bir tashkilot uchun foydali:",
        ],
        bullets: [
          "Vazifa boshqaruvi — vazifa topshirish, muddat qo'yish, bajarilish holatini kuzatish.",
          "Ish vaqti va davomat — kim qachon ishga keldi/ketdi, ish soatlari hisobi.",
          "Samaradorlik hisobotlari — bajarilgan vazifalar, kechikishlar, xodim va bo'lim kesimida natija.",
          "Rol va kirish huquqi — rahbar umumiy ko'rinishni, xodim esa o'z vazifalarini ko'radi.",
          "Eslatma va bildirishnoma — muddat yaqinlashganda yoki vazifa berilganda ogohlantirish.",
          "Filial/bo'lim kesimi — bir nechta bo'lim yoki jamoani bitta joydan kuzatish.",
        ],
      },
      {
        heading: "Nazorat va ishonch muvozanati nega muhim?",
        paragraphs: [
          "Bu — ko'pchilik e'tibordan chetda qoldiradigan, lekin eng nozik nuqta. Agar tizim faqat \"kuzatuv\" sifatida joriy etilsa, xodimlar bezadi, ishonchsizlik paydo bo'ladi va samaradorlik tushadi.",
          "To'g'ri yondashuv — tizimni shaffoflik vositasi sifatida ko'rsatish: kim nima ustida ishlayapti, qaysi vazifa qanchaga cho'zildi, qayerda yordam kerak. Maqsad — xodimni ayblash emas, jamoaning ishini ravon qilish. WorkControl aynan shu yondashuvga — vazifa va natijani ko'rsatishga — qaratilgan.",
        ],
      },
      {
        heading: "Eng ko'p uchraydigan xatolar",
        paragraphs: ["Rahbarlar nazorat tizimini tanlashda ko'pincha quyidagi xatolarga yo'l qo'yadi:"],
        bullets: [
          "Tizimni faqat \"josuslik\" deb tushunish — bu jamoa ishonchini buzadi, asosiy maqsad shaffoflik bo'lishi kerak.",
          "Murakkab tizim tanlash — xodimlar ishlatmaydigan darajada chalkash bo'lsa, foydasi bo'lmaydi.",
          "Hisobotlarni e'tiborsiz qoldirish — ma'lumot yig'ilsa-yu, tahlil bo'lmasa, qaror chiqmaydi.",
          "Mahalliy qo'llab-quvvatlash yo'qligi — muammo chiqqanda o'zbek/rus tilida yordam muhim.",
        ],
      },
      {
        heading: "WorkControl — xodim va vazifa nazorati misolida",
        paragraphs: [
          "WorkControl — Tezcode tomonidan yaratilgan, xodimlarning ish va vazifalarini nazorat qilish tizimi. Vazifalarni topshirish, bajarilishini kuzatish va jamoaning ish ko'rinishini bitta joydan boshqarish imkonini beradi.",
          "U vazifa va natijani shaffof qilishga qaratilgan: rahbar umumiy holatni ko'radi, xodim o'z vazifalarini biladi. Agar jamoangiz uchun mos nazorat tizimini tanlashda yordam kerak bo'lsa, jamoamiz bilan bog'lanib bepul maslahat olishingiz mumkin.",
        ],
      },
    ],
    faq: {
      title: "Tez-tez beriladigan savollar",
      items: [
        {
          q: "Kichik jamoa uchun ham nazorat tizimi kerakmi?",
          a: "Ha. Hatto 3-5 kishilik jamoada ham vazifalar Telegram yoki og'zaki berilsa yo'qoladi. Tizim har vazifaning egasi va muddatini aniq ko'rsatadi, rahbar vaqtini tejaydi.",
        },
        {
          q: "Bu xodimlarni \"kuzatish\" degani emasmi?",
          a: "To'g'ri ishlatilsa — yo'q. Maqsad ayblash emas, vazifa va natijani shaffof qilish: kim nima ustida ishlayapti, qayerda yordam kerak. Shaffoflik jamoa ishonchini oshiradi.",
        },
        {
          q: "Tizim ish samaradorligini qanday oshiradi?",
          a: "Vazifalar aniq ko'rinadi, muddatlar nazoratda bo'ladi, kechikishlar sezilib turadi va hisobotlar orqali rahbar to'g'ri qaror qabul qiladi.",
        },
        {
          q: "Bir nechta bo'lim yoki filialni kuzatsa bo'ladimi?",
          a: "Ha. Zamonaviy tizimlar bir nechta bo'lim yoki jamoani bitta joydan, bo'lim kesimida hisobot bilan kuzatish imkonini beradi.",
        },
        {
          q: "Xodimlar yangi tizimni tez o'rganadimi?",
          a: "Bu tizimning soddaligiga bog'liq. Murakkab tizimni xodimlar ishlatmaydi. Shuning uchun sodda va tushunarli interfeysli yechim tanlash muhim.",
        },
        {
          q: "Nazorat tizimi O'zbekistonda qancha turadi?",
          a: "Narx jamoa hajmi va kerakli imkoniyatlarga bog'liq. To'g'ri yondashuv — avval ehtiyojni aniqlab, keyin narxni so'rash. Tezcode bilan bog'lansangiz, aniq taklif beramiz.",
        },
      ],
    },
    cta: {
      title: "Jamoangiz uchun mos nazorat tizimini tanlashda yordam kerakmi?",
      subtitle:
        "Tezcode jamoasi ish jarayoningizni tahlil qilib, WorkControl asosida mos yechimni tavsiya qiladi. Bepul maslahat oling.",
      button: "Telegram orqali bog'lanish",
      note: "Javob odatda bir necha soat ichida.",
    },
  },

  ru: {
    hero: {
      badge: "HR / Контроль",
      title: "Как выбрать систему контроля рабочего времени и задач сотрудников",
      subtitle:
        "Практическое руководство по выбору системы контроля рабочего времени, задач и продуктивности сотрудников — какие функции обязательны, баланс контроля и доверия и частые ошибки.",
      dateLabel: "7 июня 2026",
      readTime: "7 минут чтения",
    },
    tldr: {
      label: "Краткий ответ",
      text:
        "При выборе системы контроля сотрудников обратите внимание на 5 вещей: (1) постановка задач и отслеживание их выполнения, (2) учёт рабочего времени и посещаемости, (3) понятные отчёты по продуктивности, (4) видимость по отделам и сотрудникам, (5) баланс — без избыточной слежки, которая демотивирует. Главная ошибка — воспринимать систему только как «слежку»: цель не обвинять, а сделать задачи и результат прозрачными.",
    },
    sections: [
      {
        heading: "Что такое система контроля сотрудников и зачем она нужна?",
        paragraphs: [
          "Система контроля сотрудников (или управления работой/задачами) — это программа, которая из одного места показывает, кому какая задача поставлена, когда она должна быть выполнена и как проходит рабочее время. Проще говоря, задачи + рабочее время + отчёты в одной системе.",
          "Когда задачи ставятся в Telegram, на бумаге или устно — они теряются, непонятно, кто чем занят, и руководитель вынужден спрашивать каждого «готово?». Система контроля устраняет эту неопределённость: у каждой задачи виден владелец, срок и статус.",
        ],
      },
      {
        heading: "На какие функции обращать внимание?",
        paragraphs: [
          "Независимо от размера команды, следующие функции полезны почти любой организации:",
        ],
        bullets: [
          "Управление задачами — постановка задач, сроки, отслеживание статуса выполнения.",
          "Рабочее время и посещаемость — кто когда пришёл/ушёл, учёт рабочих часов.",
          "Отчёты по продуктивности — выполненные задачи, просрочки, результат по сотрудникам и отделам.",
          "Роли и права доступа — руководитель видит общую картину, сотрудник — свои задачи.",
          "Напоминания и уведомления — оповещение при приближении срока или постановке задачи.",
          "Срез по филиалам/отделам — контроль нескольких отделов или команд из одного места.",
        ],
      },
      {
        heading: "Почему важен баланс контроля и доверия?",
        paragraphs: [
          "Это самый тонкий момент, который многие упускают. Если систему внедряют только как «слежку», сотрудники демотивируются, появляется недоверие и продуктивность падает.",
          "Правильный подход — показать систему как инструмент прозрачности: кто над чем работает, какая задача затянулась, где нужна помощь. Цель — не обвинять сотрудника, а сделать работу команды слаженной. WorkControl ориентирован именно на это — показать задачи и результат.",
        ],
      },
      {
        heading: "Самые частые ошибки",
        paragraphs: ["Руководители при выборе системы контроля часто допускают ошибки:"],
        bullets: [
          "Воспринимают систему только как «слежку» — это разрушает доверие, главная цель — прозрачность.",
          "Выбирают слишком сложную систему — если сотрудники ею не пользуются, пользы нет.",
          "Игнорируют отчёты — если данные собираются, но не анализируются, решения не появляются.",
          "Нет местной поддержки — при проблеме важна помощь на узбекском/русском.",
        ],
      },
      {
        heading: "На примере WorkControl — контроль сотрудников и задач",
        paragraphs: [
          "WorkControl — система контроля работы и задач сотрудников, созданная Tezcode. Позволяет ставить задачи, отслеживать их выполнение и управлять рабочей картиной команды из одного места.",
          "Она ориентирована на прозрачность задач и результата: руководитель видит общую картину, сотрудник знает свои задачи. Если нужна помощь в выборе подходящей системы контроля для вашей команды, свяжитесь с нашей командой и получите бесплатную консультацию.",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Нужна ли система контроля маленькой команде?",
          a: "Да. Даже в команде из 3-5 человек задачи, поставленные в Telegram или устно, теряются. Система показывает владельца и срок каждой задачи и экономит время руководителя.",
        },
        {
          q: "Это ведь не «слежка» за сотрудниками?",
          a: "При правильном использовании — нет. Цель не обвинять, а сделать задачи и результат прозрачными: кто над чем работает, где нужна помощь. Прозрачность повышает доверие в команде.",
        },
        {
          q: "Как система повышает продуктивность?",
          a: "Задачи видны ясно, сроки под контролем, просрочки заметны, а отчёты помогают руководителю принимать верные решения.",
        },
        {
          q: "Можно ли контролировать несколько отделов или филиалов?",
          a: "Да. Современные системы позволяют контролировать несколько отделов или команд из одного места с отчётами по срезам.",
        },
        {
          q: "Быстро ли сотрудники освоят новую систему?",
          a: "Это зависит от простоты системы. Сложной системой сотрудники не пользуются. Поэтому важно выбрать решение с простым и понятным интерфейсом.",
        },
        {
          q: "Сколько стоит система контроля в Узбекистане?",
          a: "Цена зависит от размера команды и нужных функций. Правильный подход — сначала определить потребности, затем узнать цену. Свяжитесь с Tezcode, и мы дадим точное предложение.",
        },
      ],
    },
    cta: {
      title: "Нужна помощь в выборе подходящей системы контроля для вашей команды?",
      subtitle:
        "Команда Tezcode проанализирует ваши рабочие процессы и порекомендует решение на базе WorkControl. Получите бесплатную консультацию.",
      button: "Связаться через Telegram",
      note: "Обычно отвечаем в течение нескольких часов.",
    },
  },
};
