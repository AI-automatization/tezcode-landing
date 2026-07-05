import type { ServicePageContent } from "@/components/service-page/types";

// Content for /ai-avtomatizatsiya — Tezcode's MAIN category hub.
// Target queries: "AI avtomatizatsiya" / "biznesni AI bilan avtomatlashtirish" /
// "AI-автоматизация бизнеса Ташкент". Entity phrase woven in:
// "Toshkentda biznes uchun AI avtomatlashtirish".
// Only confirmed Tezcode facts are used (home Hero: javob 2 soat→1 soniya,
// hisobot 3 soat→1 daqiqa; ROICalculator: xatolar −90%; PricingTiers:
// Starter $0 / Pro $200/oy / Enterprise custom; to'lov 30% oldindan).
// No fabricated client counts or percentages.
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "AI avtomatlashtirish — Tezcode, Toshkent",
      title1: "Biznesingizni",
      titleAccent: "AI bilan avtomatlashtiring",
      title2: "",
      subtitle:
        "AI avtomatlashtirish — bu hisobot tuzish, mijoz savollariga javob berish, buyurtmani qayd etish kabi takroriy ishlarni sun'iy intellektga topshirish. AI Excel va 1C'dan ma'lumotni o'zi yig'adi, Telegram'da 24/7 javob beradi, sotuv va omborni kuzatadi — odam faqat nazorat qiladi va qaror qabul qiladi. Tezcode Software Factory Toshkentda biznes uchun AI avtomatlashtirish yechimlarini jarayoningizga moslab quradi: 3 soatlik hisobot 1 daqiqada tayyor bo'ladi, mijozga javob 2 soatdan soniyalarga tushadi, qo'lda kiritishdagi xatolar 90% gacha kamayadi.",
      trust: "Bepul 30 daqiqa konsultatsiya • To'lov: 30% oldindan",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "Nima avtomatlashtira olamiz?",
    },
    capabilities: {
      badge: "Imkoniyatlar",
      title: "Nima",
      titleAccent: "avtomatlashtira olamiz?",
      subtitle:
        "Qo'lda qilinadigan har takroriy ish — AI uchun nomzod. Quyida Toshkent va butun O'zbekiston bo'ylab bizdan eng ko'p so'raladigan yo'nalishlar — har birida real ssenariy bilan.",
      items: [
        {
          icon: "bar-chart-2",
          title: "Avtomatik hisobot",
          desc: "Ssenariy: buxgalter har oqshom Excel, 1C va savdo tizimidan raqamlarni qo'lda ko'chiradi — bunga 3 soat ketadi. AI shu ma'lumotni o'zi yig'ib, kunlik va oylik hisobotni 1 daqiqada tayyorlaydi va Telegram'ga yuboradi. Qo'lda ko'chirishdagi xatolar 90% gacha kamayadi.",
        },
        {
          icon: "message-circle",
          title: "AI mijoz xizmati",
          desc: "Ssenariy: mijoz kechqurun narx so'rab yozadi, operator esa ertalab javob beradi — o'rtacha 2 soat kutish. AI chatbot Telegram va veb-saytda 24/7 ishlaydi: narx, katalog, buyurtma holati kabi savollarga soniyalarda javob beradi, murakkab holatni operatorga to'liq kontekst bilan uzatadi.",
        },
        {
          icon: "shopping-cart",
          title: "Sotuv va lidlarni avtomatlashtirish",
          desc: "Ssenariy: reklamadan 20 ta lid keldi, menejer 12 tasiga qayta yozishni unutdi. AI har yangi mijozni avtomatik qayd qiladi, eslatma yuboradi, kerakli bo'limga yo'naltiradi va javobsiz qolgan lidni menejerga qaytaradi. Hech bir buyurtma yo'qolmaydi.",
        },
        {
          icon: "package",
          title: "Ombor va buyurtma nazorati",
          desc: "Ssenariy: ombordagi mahsulot tugab qolgani sotuv paytida ma'lum bo'ladi. AI qoldiqni doimiy kuzatadi: mahsulot belgilangan chegaradan kamaysa ogohlantiradi, buyurtma holatini kuzatib boradi, yetkazib berish haqida mijozga o'zi xabar yuboradi.",
        },
        {
          icon: "file-text",
          title: "Hujjat va shartnoma tahlili",
          desc: "Ssenariy: 40 betlik shartnomadan kerakli bandni topish uchun yarim kun o'qish kerak. AI hujjatlardan sana, summa, majburiyat kabi kerakli ma'lumotni ajratib oladi, shartnomalarni qisqa xulosaga aylantiradi va savolingizga aynan qaysi banddan javob topganini ko'rsatadi.",
        },
        {
          icon: "link-2",
          title: "Tizimlarni o'zaro ulash",
          desc: "Ssenariy: buyurtma Telegram'da keladi, ma'lumot Google Sheets'da, hisob-kitob 1C'da — hammasini odam qo'lda ko'chiradi. Biz Telegram, Google Sheets, 1C, Click/Payme va CRM'ni bitta avtomatik oqimga bog'laymiz: ma'lumot bir joyga kirsa, qolgan tizimlarga o'zi tarqaladi.",
        },
      ],
    },
    tech: {
      badge: "Texnologiyalar",
      title: "Qanday texnologiyalar",
      titleAccent: "bilan quramiz?",
      subtitle:
        "Har loyihaga moda uchun emas, masalaga mos vosita tanlaymiz. Asosiy stack — sinalgan va O'zbekiston bozorida real ishlayotgan texnologiyalar.",
      items: [
        {
          name: "OpenAI GPT-4o",
          desc: "Tabiiy tilni tushunish, mijoz bilan suhbat va murakkab matnli vazifalar uchun asosiy model.",
        },
        {
          name: "Claude (Anthropic)",
          desc: "Uzun hujjatlar, shartnoma tahlili va ishonchli, xavfsiz javob talab qilinadigan jarayonlar uchun.",
        },
        {
          name: "LangChain / LangGraph",
          desc: "Ko'p qadamli avtomatlashtirish mantiqi: vositalarni chaqirish, shartli oqimlar va bir nechta AI agentni birga ishlatish.",
        },
        {
          name: "RAG (Retrieval-Augmented Generation)",
          desc: "AI sizning bazangiz — narxlar, hujjatlar, FAQ — asosida javob beradi, o'zidan to'qib chiqarmaydi.",
        },
        {
          name: "Vektor baza (pgvector / Pinecone)",
          desc: "Ma'lumotni ma'no bo'yicha qidirish: AI katta hujjat va yozishmalardan kerakli qismni soniyalarda topadi.",
        },
        {
          name: "Integratsiya (Telegram, 1C, CRM)",
          desc: "Telegram Bot API, AmoCRM, Bitrix24, 1C, Google Sheets, Click/Payme — AI mavjud tizimingiz ichida ishlaydi.",
        },
      ],
    },
    process: {
      badge: "Qanday ishlaymiz",
      title: "4 qadamda",
      titleAccent: "AI yechimga",
      subtitle:
        "Birinchi 30 daqiqa bepul. Keyin har qadam yozma taklif, aniq narx va aniq muddat bilan boradi — jarayonning qayerida turganingizni doim bilasiz.",
      steps: [
        {
          num: "01",
          title: "Bepul konsultatsiya",
          desc: "30 daqiqada biznesingizni o'rganamiz: qaysi ish jamoangizdan eng ko'p vaqt olyapti, qayerda xato va kechikish ko'p. Shu yerdayoq nimani avtomatlashtirish real foyda berishini aytamiz. Hech qanday majburiyat yo'q — kelishmasak ham reja sizda qoladi.",
          icon: "message-circle",
        },
        {
          num: "02",
          title: "AI auditi + yozma taklif",
          desc: "Jarayonlaringizni chuqur ko'rib chiqamiz: qaysi qadamlarni AI bajara oladi, qaysi tizimlar bilan integratsiya kerak, qayerda odam nazorati qolishi shart. Natija — texnik topshiriq (TZ), aniq narx va muddat yozilgan taklif. Narx TZ'dan keyin qat'iy belgilanadi.",
          icon: "search",
        },
        {
          num: "03",
          title: "MVP yaratish",
          desc: "2-4 hafta ichida ishlovchi AI yechimning birinchi versiyasini qo'lingizga beramiz. Har hafta demo ko'rsatamiz: siz real ma'lumotda sinab, fikr bildirasiz — yo'nalishni erta to'g'rilaymiz, oxirida kutilmagan natija chiqmaydi.",
          icon: "zap",
        },
        {
          num: "04",
          title: "Joriy etish + qo'llab-quvvatlash",
          desc: "Yechimni ish tizimingizga ulaymiz, jamoangizni o'rgatamiz va birinchi haftalarda ishlashini birga kuzatamiz. AI javoblari sifatini tekshirib boramiz, kerak joyda sozlaymiz — tizim vaqt o'tgani sari yaxshilanadi, eskirmaydi.",
          icon: "rocket",
        },
      ],
    },
    examples: {
      badge: "Real misollar",
      title: "Biz qurgan",
      titleAccent: "AI yechimlar",
      subtitle:
        "Tezcode AI'ni mijozlarga sotibgina qolmaydi — o'z mahsulotlarida har kuni ishlatadi. Quyidagilar real ishlab turgan misollar.",
      items: [
        {
          tag: "01",
          title: "AI Office — 12 bo'limli virtual ofis",
          desc: "Sotuv, HR, marketing va boshqa bo'limlar uchun AI agentlar tizimi. Tezcode o'zi aynan shu tizim bilan 14 dasturchi va ko'plab loyihani boshqaradi — ya'ni sizga taklif qilayotgan yechimimizni avval o'zimizda sinaganmiz.",
        },
        {
          tag: "02",
          title: "RAOS — savdo avtomatizatsiyasi",
          desc: "Do'konlar uchun POS tizimi: kassa, ombor va hisobot bir joyda. Sotuv ma'lumoti avtomatik yig'iladi, kunlik xulosa o'zi tuziladi — qo'lda Excel to'ldirish umuman yo'q.",
        },
        {
          tag: "03",
          title: "Salomat AI — ovozli tibbiy yordamchi",
          desc: "CoreMed ekotizimida bemor bilan ovoz orqali gaplashadigan AI assistent. Bu oddiy chatbotdan ancha murakkab daraja — jiddiy AI mahsulotni ham boshidan oxirigacha qura olishimizning isboti.",
        },
        {
          tag: "04",
          title: "Telegram bot avtomatizatsiyasi",
          desc: "Buyurtma qabul qilish, to'lovni tekshirish, eslatma yuborish, kunlik hisobotni Telegram'ga jo'natish. Kichik biznes uchun eng arzon va eng tez boshlanadigan avtomatlashtirish yo'li.",
        },
      ],
    },
    pricing: {
      badge: "Narxlar",
      title: "Narx qanday",
      titleAccent: "shakllanadi?",
      subtitle:
        "Yashirin to'lovlar yo'q: tayyor tariflar ochiq, individual loyiha narxi esa texnik topshiriq (TZ) tasdiqlangandan keyin qat'iy belgilanadi.",
      factors: [
        {
          title: "Starter",
          price: "$0",
          desc: "Kichik biznes uchun boshlang'ich daraja: 1 mahsulot, 3 xodimgacha, bazaviy AI yordamchi va Telegram orqali qo'llab-quvvatlash. AI avtomatlashtirishni xarajatsiz sinab ko'rish uchun eng qulay yo'l.",
        },
        {
          title: "Pro",
          price: "$200/oy",
          desc: "O'sayotgan biznes uchun: cheksiz mahsulot, 30 xodimgacha, kengaytirilgan AI (12 agent), WhatsApp + Telegram bot, o'z domeningiz va 24/7 qo'llab-quvvatlash.",
        },
        {
          title: "Individual loyiha",
          price: "TZ'dan keyin",
          desc: "Jarayoningizga noldan quriladigan AI yechim: chuqur integratsiya (1C, CRM, to'lov tizimlari), maxsus mantiqlar. Aniq narx va muddat AI audit hamda TZ tasdiqlangach yoziladi.",
        },
      ],
      note: "To'lov tartibi: 30% oldindan, qolgani bosqichma-bosqich — har bosqichda ishlovchi natijani ko'rasiz. Konsultatsiya va dastlabki baholash bepul.",
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Qaysi ishni AI ga",
      titleAccent: "topshirsangiz bo'ladi?",
      subtitle:
        "30 daqiqalik bepul konsultatsiyada aniqlaymiz. Hech qanday majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle:
        "Toshkentda biznes uchun AI avtomatlashtirish haqida mijozlardan eng ko'p eshitadigan savollarimiz — qisqa va aniq javoblar bilan.",
      items: [
        {
          q: "AI avtomatlashtirish nima va oddiy dasturdan farqi nimada?",
          a: "AI avtomatlashtirish — takroriy ishlarni (hisobot tuzish, savolga javob berish, ma'lumot kiritish) sun'iy intellekt yordamida odam aralashuvisiz bajartirish. Oddiy dastur faqat oldindan yozilgan qat'iy qoidalar bo'yicha ishlaydi, AI esa erkin yozilgan matnni tushunadi, vaziyatga qarab javob tanlaydi va yangi holatlarga moslashadi. Shuning uchun mijoz bilan suhbat yoki hujjat tahlili kabi ishlarni faqat AI uddalaydi.",
        },
        {
          q: "Narxi qancha?",
          a: "Tayyor tariflar: Starter — $0 (kichik biznes uchun boshlang'ich imkoniyatlar), Pro — $200/oy (kengaytirilgan AI, 30 xodimgacha, 24/7 qo'llab-quvvatlash). Jarayoningizga maxsus quriladigan individual yechim narxi texnik topshiriq (TZ) tasdiqlangandan keyin qat'iy belgilanadi. To'lov 30% oldindan, qolgani bosqichma-bosqich.",
        },
        {
          q: "Qancha vaqtda tayyor bo'ladi?",
          a: "Oddiy avtomatlashtirish (Telegram bot, avtomatik hisobot) — 1-2 hafta. To'liqroq AI yechimning ishlovchi MVP versiyasi — 2-4 hafta. Har hafta demo ko'rsatamiz, shuning uchun natijani oxirgi kunni kutmasdan kuzatib borasiz.",
        },
        {
          q: "Qaysi sohalarga to'g'ri keladi?",
          a: "Takroriy jarayoni bor har qanday soha: savdo va do'konlar (kassa, ombor, hisobot), klinikalar (yozilish, navbat, eslatma), ta'lim markazlari (lidlar, to'lov nazorati), logistika (buyurtma holati, xabarnoma), xizmat ko'rsatish (mijoz savollari, band qilish). Konsultatsiyada aynan sizning sohangizdagi eng foydali nuqtani aniqlab beramiz.",
        },
        {
          q: "1C, CRM va mavjud tizimlarim bilan integratsiya bo'ladimi?",
          a: "Ha, bu bizning asosiy ishimiz. Telegram, Google Sheets, 1C, AmoCRM, Bitrix24, Click/Payme kabi to'lov tizimlari bilan integratsiya quramiz. Maqsad — AI sizni yangi dasturga majburlamasdan, hozirgi ish oqimingiz ichida ishlashi. Tizimlaringiz ro'yxatini konsultatsiyada ko'rib chiqamiz.",
        },
        {
          q: "AI o'zbek tilida ishlaydimi?",
          a: "Ha. Bizning AI yechimlar o'zbek (lotin va kiril), rus va ingliz tillarida mijoz bilan muloqot qila oladi. Mijoz qaysi tilda yozsa, bot o'sha tilda javob beradi. O'zbekiston bozori uchun bu bizda standart talab sifatida hisobga olinadi.",
        },
        {
          q: "Ma'lumotlarim xavfsizligi qanday ta'minlanadi?",
          a: "Maxfiy ma'lumotlar siz nazorat qiladigan muhitda saqlanadi, kirish huquqlari rollar bo'yicha cheklanadi. AI modelga faqat vazifa uchun zarur ma'lumot uzatiladi. Talab bo'lsa, ma'lumotni tashqariga chiqarmaydigan arxitektura variantini ham ko'rib chiqamiz — xavfsizlik talablari konsultatsiyada yozma kelishiladi.",
        },
        {
          q: "Kichik biznesga to'g'ri keladimi?",
          a: "Ha, hatto eng ko'p aynan kichik biznes murojaat qiladi. Starter tarif $0 dan boshlanadi, Telegram bot yoki avtomatik hisobot kabi yechimlar katta byudjetsiz joriy etiladi. Hammasini birdan avtomatlashtirish shart emas — eng ko'p vaqt oladigan bitta jarayondan boshlaymiz, natijani ko'rgach kengaytirasiz.",
        },
        {
          q: "Sarflangan pul qachon qaytadi (ROI)?",
          a: "Bu avtomatlashtirilayotgan jarayonga bog'liq. Hisob oddiy: agar xodim har kuni 3 soatini hisobotga sarflasa va AI buni 1 daqiqaga tushirsa, oyiga ~60 soat ish vaqti bo'shaydi — buni xodim maoshiga ko'paytirib, tejamni o'zingiz ko'rasiz. Konsultatsiyada sizning raqamlaringiz bilan taxminiy ROI hisobini birga qilamiz.",
        },
        {
          q: "Shartnoma va qo'llab-quvvatlash qanday bo'ladi?",
          a: "Har loyiha yozma shartnoma bilan boshlanadi: unda ish hajmi, muddat, narx va to'lov bosqichlari (30% oldindan) aniq yoziladi. Topshirgandan keyin tashlab ketmaymiz: jamoangizni o'rgatamiz, ishlashini kuzatamiz, Pro tarifda 24/7 qo'llab-quvvatlash kiradi.",
        },
        {
          q: "AI xato qilsa nima bo'ladi?",
          a: "AI'ni nazoratsiz qoldirmaymiz. Muhim qarorlar (to'lov, shartnoma, katta chegirma) doim odam tasdig'idan o'tadi, AI ishonchsiz holatda javobni operatorga uzatadi. RAG texnologiyasi tufayli bot faqat sizning bazangizdagi ma'lumotga tayanadi — o'zidan to'qib javob bermaydi. Joriy etishdan keyin javoblar sifatini birga kuzatib, sozlab boramiz.",
        },
        {
          q: "Nimadan boshlash kerak?",
          a: "Eng to'g'ri boshlanish — 30 daqiqalik bepul konsultatsiya. Unda jamoangiz qaysi ishga eng ko'p vaqt sarflashini aniqlaymiz va qaysi avtomatlashtirish eng tez natija berishini aytamiz. Texnik bilim talab qilinmaydi — jarayoningizni oddiy so'zlab bersangiz kifoya.",
        },
      ],
    },
    related: {
      badge: "Bog'liq xizmatlar",
      title: "Sizga yana",
      titleAccent: "foydali bo'lishi mumkin",
      subtitle: "AI avtomatlashtirishga yaqin Tezcode yechimlari — har biri alohida sahifada batafsil.",
      links: [
        {
          href: "/ai-agent",
          label: "AI agent",
          desc: "O'zi qaror qabul qiladigan va vazifani boshidan oxirigacha bajaradigan AI agentlar — avtomatlashtirishning keyingi darajasi.",
        },
        {
          href: "/ai-chatbot",
          label: "AI chatbot",
          desc: "24/7 mijoz xizmati va lid yig'ish uchun AI chatbot — avtomatlashtirishning eng tez natija beradigan qismi.",
        },
        {
          href: "/telegram-bot-biznes",
          label: "Biznes uchun Telegram bot",
          desc: "Buyurtma, to'lov va xabarnomalarni Telegram orqali avtomatlashtirish — O'zbekistonda eng ommabop kanal.",
        },
        {
          href: "/biznes-avtomatlashtirish",
          label: "Biznes avtomatlashtirish",
          desc: "Takroriy qo'l ishlarini tizimlashtirib, vaqt va xarajatni tejaydigan klassik avtomatlashtirish.",
        },
      ],
    },
    service: {
      name: "AI avtomatlashtirish xizmati — Tezcode",
      description:
        "Toshkentda biznes uchun AI avtomatlashtirish: avtomatik hisobot, AI chatbot, sotuv va ombor avtomatizatsiyasi, 1C/CRM/Telegram integratsiyasi. Tezcode Software Factory, O'zbekiston.",
      serviceType: "AI avtomatlashtirish / sun'iy intellekt yechimlari",
    },
  },

  ru: {
    hero: {
      badge: "AI-автоматизация — Tezcode, Ташкент",
      title1: "Автоматизируйте бизнес",
      titleAccent: "с помощью ИИ",
      title2: "",
      subtitle:
        "AI-автоматизация — это передача рутинных задач искусственному интеллекту: составление отчётов, ответы клиентам, регистрация заказов. ИИ сам собирает данные из Excel и 1C, отвечает в Telegram 24/7, следит за продажами и складом — человек только контролирует и принимает решения. Tezcode Software Factory строит решения AI-автоматизации бизнеса в Ташкенте под ваши процессы: отчёт, занимавший 3 часа, готов за 1 минуту, ответ клиенту сокращается с 2 часов до секунд, ошибки ручного ввода снижаются до 90%.",
      trust: "Бесплатная 30-мин консультация • Оплата: 30% предоплата",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Что можем автоматизировать?",
    },
    capabilities: {
      badge: "Возможности",
      title: "Что мы можем",
      titleAccent: "автоматизировать?",
      subtitle:
        "Любая повторяющаяся ручная работа — кандидат на автоматизацию с ИИ. Ниже направления, которые чаще всего заказывают в Ташкенте и по всему Узбекистану — каждое с реальным сценарием.",
      items: [
        {
          icon: "bar-chart-2",
          title: "Автоматические отчёты",
          desc: "Сценарий: бухгалтер каждый вечер вручную переносит цифры из Excel, 1C и торговой системы — уходит 3 часа. ИИ сам собирает эти данные, готовит дневной и месячный отчёт за 1 минуту и отправляет в Telegram. Ошибки ручного переноса снижаются до 90%.",
        },
        {
          icon: "message-circle",
          title: "ИИ-поддержка клиентов",
          desc: "Сценарий: клиент пишет вечером и спрашивает цену, оператор отвечает утром — в среднем 2 часа ожидания. AI-чатбот работает в Telegram и на сайте 24/7: отвечает на вопросы о цене, каталоге и статусе заказа за секунды, а сложные случаи передаёт оператору с полным контекстом.",
        },
        {
          icon: "shopping-cart",
          title: "Автоматизация продаж и лидов",
          desc: "Сценарий: с рекламы пришло 20 лидов, менеджер забыл написать 12 из них. ИИ автоматически фиксирует каждого нового клиента, отправляет напоминания, направляет в нужный отдел и возвращает менеджеру лиды без ответа. Ни одна заявка не теряется.",
        },
        {
          icon: "package",
          title: "Контроль склада и заказов",
          desc: "Сценарий: о том, что товар закончился, узнают в момент продажи. ИИ постоянно следит за остатками: предупреждает, когда товар опускается ниже порога, отслеживает статус заказа и сам уведомляет клиента о доставке.",
        },
        {
          icon: "file-text",
          title: "Анализ документов и договоров",
          desc: "Сценарий: чтобы найти нужный пункт в договоре на 40 страниц, нужно полдня чтения. ИИ извлекает из документов даты, суммы и обязательства, превращает договоры в короткое резюме и показывает, из какого именно пункта взят ответ на ваш вопрос.",
        },
        {
          icon: "link-2",
          title: "Связывание систем",
          desc: "Сценарий: заказ приходит в Telegram, данные — в Google Sheets, учёт — в 1C, и всё переносит человек вручную. Мы связываем Telegram, Google Sheets, 1C, Click/Payme и CRM в единый автоматический поток: данные вводятся один раз и сами расходятся по остальным системам.",
        },
      ],
    },
    tech: {
      badge: "Технологии",
      title: "На каких технологиях",
      titleAccent: "мы строим?",
      subtitle:
        "Для каждого проекта выбираем инструмент под задачу, а не под моду. Основной стек — проверенные технологии, реально работающие на рынке Узбекистана.",
      items: [
        {
          name: "OpenAI GPT-4o",
          desc: "Основная модель для понимания естественного языка, диалога с клиентом и сложных текстовых задач.",
        },
        {
          name: "Claude (Anthropic)",
          desc: "Для длинных документов, анализа договоров и процессов, где нужны надёжные, безопасные ответы.",
        },
        {
          name: "LangChain / LangGraph",
          desc: "Многошаговая логика автоматизации: вызов инструментов, условные потоки и совместная работа нескольких AI-агентов.",
        },
        {
          name: "RAG (Retrieval-Augmented Generation)",
          desc: "ИИ отвечает на основе вашей базы — цены, документы, FAQ — и не выдумывает от себя.",
        },
        {
          name: "Векторная база (pgvector / Pinecone)",
          desc: "Поиск данных по смыслу: ИИ за секунды находит нужный фрагмент в больших документах и переписках.",
        },
        {
          name: "Интеграция (Telegram, 1C, CRM)",
          desc: "Telegram Bot API, AmoCRM, Bitrix24, 1C, Google Sheets, Click/Payme — ИИ работает внутри вашей текущей системы.",
        },
      ],
    },
    process: {
      badge: "Как мы работаем",
      title: "4 шага до",
      titleAccent: "ИИ-решения",
      subtitle:
        "Первые 30 минут бесплатно. Дальше каждый шаг идёт с письменным предложением, точной ценой и сроком — вы всегда знаете, на каком этапе находитесь.",
      steps: [
        {
          num: "01",
          title: "Бесплатная консультация",
          desc: "За 30 минут изучаем ваш бизнес: какая работа отнимает у команды больше всего времени, где чаще всего ошибки и задержки. Уже на встрече говорим, автоматизация чего даст реальную выгоду. Без обязательств — даже если не договоримся, план останется у вас.",
          icon: "message-circle",
        },
        {
          num: "02",
          title: "ИИ-аудит + письменное предложение",
          desc: "Глубоко разбираем процессы: какие шаги может выполнять ИИ, с какими системами нужна интеграция, где обязательно остаётся контроль человека. Результат — техническое задание (ТЗ) и предложение с точной ценой и сроком. Цена фиксируется после ТЗ.",
          icon: "search",
        },
        {
          num: "03",
          title: "Создание MVP",
          desc: "За 2-4 недели отдаём первую рабочую версию ИИ-решения. Каждую неделю показываем демо: вы тестируете на реальных данных и даёте обратную связь — курс корректируем рано, и в конце не бывает неожиданного результата.",
          icon: "zap",
        },
        {
          num: "04",
          title: "Внедрение + поддержка",
          desc: "Подключаем решение к вашим системам, обучаем команду и первые недели вместе следим за работой. Проверяем качество ответов ИИ и донастраиваем — система со временем становится лучше, а не устаревает.",
          icon: "rocket",
        },
      ],
    },
    examples: {
      badge: "Реальные примеры",
      title: "ИИ-решения,",
      titleAccent: "которые мы построили",
      subtitle:
        "Tezcode не только продаёт ИИ клиентам — мы используем его в своих продуктах каждый день. Ниже реально работающие примеры.",
      items: [
        {
          tag: "01",
          title: "AI Office — виртуальный офис из 12 отделов",
          desc: "Система AI-агентов для продаж, HR, маркетинга и других отделов. Tezcode сам управляет с её помощью 14 разработчиками и множеством проектов — то есть решение, которое мы вам предлагаем, мы сначала проверили на себе.",
        },
        {
          tag: "02",
          title: "RAOS — автоматизация торговли",
          desc: "POS-система для магазинов: касса, склад и отчёты в одном месте. Данные о продажах собираются автоматически, дневная сводка формируется сама — ручного Excel нет вообще.",
        },
        {
          tag: "03",
          title: "Salomat AI — голосовой медицинский ассистент",
          desc: "В экосистеме CoreMed ИИ-ассистент общается с пациентом голосом. Это уровень значительно сложнее обычного чатбота — доказательство того, что мы способны построить серьёзный ИИ-продукт от начала до конца.",
        },
        {
          tag: "04",
          title: "Автоматизация через Telegram-бота",
          desc: "Приём заказов, проверка оплаты, напоминания, отправка дневного отчёта в Telegram. Самый доступный и быстрый способ начать автоматизацию для малого бизнеса.",
        },
      ],
    },
    pricing: {
      badge: "Цены",
      title: "Как формируется",
      titleAccent: "цена?",
      subtitle:
        "Никаких скрытых платежей: готовые тарифы открыты, а цена индивидуального проекта фиксируется после утверждения технического задания (ТЗ).",
      factors: [
        {
          title: "Starter",
          price: "$0",
          desc: "Стартовый уровень для малого бизнеса: 1 продукт, до 3 сотрудников, базовый AI-помощник и поддержка в Telegram. Самый удобный способ попробовать AI-автоматизацию без затрат.",
        },
        {
          title: "Pro",
          price: "$200/мес",
          desc: "Для растущего бизнеса: безлимитные продукты, до 30 сотрудников, продвинутый AI (12 агентов), WhatsApp + Telegram бот, свой домен и поддержка 24/7.",
        },
        {
          title: "Индивидуальный проект",
          price: "После ТЗ",
          desc: "ИИ-решение, построенное с нуля под ваш процесс: глубокая интеграция (1C, CRM, платёжные системы), особая логика. Точная цена и срок фиксируются после ИИ-аудита и утверждения ТЗ.",
        },
      ],
      note: "Порядок оплаты: 30% предоплата, остальное поэтапно — на каждом этапе вы видите рабочий результат. Консультация и первичная оценка бесплатны.",
    },
    cta: {
      badge: "Время начать",
      title: "Какую работу можно",
      titleAccent: "доверить ИИ?",
      subtitle: "Определим на бесплатной 30-минутной консультации. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle:
        "Вопросы об AI-автоматизации бизнеса в Ташкенте, которые мы слышим от клиентов чаще всего — с короткими и конкретными ответами.",
      items: [
        {
          q: "Что такое ИИ-автоматизация и чем она отличается от обычной программы?",
          a: "ИИ-автоматизация — это выполнение рутинных задач (отчёты, ответы на вопросы, ввод данных) искусственным интеллектом без участия человека. Обычная программа работает только по жёстко заданным правилам, а ИИ понимает свободный текст, подбирает ответ по ситуации и адаптируется к новым случаям. Поэтому диалог с клиентом или анализ документов под силу только ИИ.",
        },
        {
          q: "Сколько это стоит?",
          a: "Готовые тарифы: Starter — $0 (базовые возможности для малого бизнеса), Pro — $200/мес (продвинутый AI, до 30 сотрудников, поддержка 24/7). Цена индивидуального решения под ваш процесс фиксируется после утверждения технического задания (ТЗ). Оплата — 30% предоплата, остальное поэтапно.",
        },
        {
          q: "Сколько времени занимает разработка?",
          a: "Простая автоматизация (Telegram-бот, автоматический отчёт) — 1-2 недели. Рабочая MVP-версия более полного ИИ-решения — 2-4 недели. Каждую неделю показываем демо, поэтому результат вы видите по ходу, а не в последний день.",
        },
        {
          q: "Каким сферам это подходит?",
          a: "Любой сфере с повторяющимися процессами: торговля и магазины (касса, склад, отчёты), клиники (запись, очередь, напоминания), учебные центры (лиды, контроль оплат), логистика (статус заказа, уведомления), сервис (вопросы клиентов, бронирование). На консультации определим самую выгодную точку именно в вашей сфере.",
        },
        {
          q: "Будет ли интеграция с 1C, CRM и моими системами?",
          a: "Да, это наша основная работа. Строим интеграции с Telegram, Google Sheets, 1C, AmoCRM, Bitrix24, платёжными системами Click/Payme. Цель — чтобы ИИ работал внутри вашего текущего процесса, не заставляя переходить на новую программу. Список ваших систем разберём на консультации.",
        },
        {
          q: "Работает ли ИИ на узбекском языке?",
          a: "Да. Наши ИИ-решения общаются с клиентами на узбекском (латиница и кириллица), русском и английском. На каком языке пишет клиент — на том бот и отвечает. Для рынка Узбекистана это у нас стандартное требование.",
        },
        {
          q: "Как обеспечивается безопасность моих данных?",
          a: "Конфиденциальные данные хранятся в среде, которую контролируете вы, доступы ограничены по ролям. В ИИ-модель передаётся только то, что необходимо для задачи. При необходимости рассмотрим архитектуру, при которой данные не покидают ваш контур — требования к безопасности фиксируем письменно на консультации.",
        },
        {
          q: "Подходит ли это малому бизнесу?",
          a: "Да, чаще всего к нам обращается именно малый бизнес. Тариф Starter начинается с $0, а решения вроде Telegram-бота или автоматического отчёта внедряются без большого бюджета. Не обязательно автоматизировать всё сразу — начинаем с одного самого затратного по времени процесса, а после результата расширяете.",
        },
        {
          q: "Когда окупятся вложения (ROI)?",
          a: "Зависит от автоматизируемого процесса. Расчёт простой: если сотрудник тратит на отчёт 3 часа в день, а ИИ сокращает это до 1 минуты, освобождается ~60 часов работы в месяц — умножьте на зарплату сотрудника и увидите экономию. На консультации посчитаем ориентировочный ROI на ваших цифрах.",
        },
        {
          q: "Как устроены договор и поддержка?",
          a: "Каждый проект начинается с письменного договора: объём работ, срок, цена и этапы оплаты (30% предоплата) фиксируются явно. После сдачи не исчезаем: обучаем команду, следим за работой, в тарифе Pro включена поддержка 24/7.",
        },
        {
          q: "Что будет, если ИИ ошибётся?",
          a: "Мы не оставляем ИИ без контроля. Важные решения (оплата, договор, крупная скидка) всегда проходят подтверждение человеком, а в неуверенных случаях ИИ передаёт вопрос оператору. Благодаря технологии RAG бот опирается только на данные вашей базы — не выдумывает ответы. После внедрения вместе отслеживаем качество ответов и донастраиваем.",
        },
        {
          q: "С чего начать?",
          a: "Правильный старт — бесплатная 30-минутная консультация. На ней определяем, на какую работу ваша команда тратит больше всего времени, и какая автоматизация даст самый быстрый результат. Технические знания не нужны — достаточно простыми словами описать ваш процесс.",
        },
      ],
    },
    related: {
      badge: "Связанные услуги",
      title: "Вам также может",
      titleAccent: "быть полезно",
      subtitle: "Решения Tezcode, близкие к AI-автоматизации — каждое подробно на отдельной странице.",
      links: [
        {
          href: "/ai-agent",
          label: "AI-агент",
          desc: "AI-агенты, которые сами принимают решения и выполняют задачу от начала до конца — следующий уровень автоматизации.",
        },
        {
          href: "/ai-chatbot",
          label: "AI-чат-бот",
          desc: "AI-чат-бот для сервиса 24/7 и сбора лидов — самая быстрая по результату часть автоматизации.",
        },
        {
          href: "/telegram-bot-biznes",
          label: "Telegram-бот для бизнеса",
          desc: "Автоматизация заказов, оплат и уведомлений через Telegram — самый популярный канал в Узбекистане.",
        },
        {
          href: "/biznes-avtomatlashtirish",
          label: "Автоматизация бизнеса",
          desc: "Классическая автоматизация рутинных ручных задач — экономия времени и расходов.",
        },
      ],
    },
    service: {
      name: "Услуга ИИ-автоматизации — Tezcode",
      description:
        "AI-автоматизация бизнеса в Ташкенте: автоматические отчёты, AI-чатбот, автоматизация продаж и склада, интеграция с 1C/CRM/Telegram. Tezcode Software Factory, Узбекистан.",
      serviceType: "ИИ-автоматизация / решения на искусственном интеллекте",
    },
  },

  en: {
    hero: {
      badge: "AI automation — Tezcode, Tashkent",
      title1: "Automate your business",
      titleAccent: "with AI",
      title2: "",
      subtitle:
        "AI automation means handing repetitive work — building reports, answering customers, logging orders — to artificial intelligence. AI gathers data from Excel and 1C by itself, replies on Telegram 24/7, watches sales and inventory, while people only supervise and decide. Tezcode Software Factory builds AI automation for businesses in Tashkent around your processes: a report that took 3 hours is ready in 1 minute, customer replies drop from 2 hours to seconds, and manual-entry errors fall by up to 90%.",
      trust: "Free 30-min consultation • Payment: 30% upfront",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "What can we automate?",
    },
    capabilities: {
      badge: "Capabilities",
      title: "What can we",
      titleAccent: "automate?",
      subtitle:
        "Every repetitive manual task is a candidate for AI automation. Below are the directions requested most often in Tashkent and across Uzbekistan — each with a real scenario.",
      items: [
        {
          icon: "bar-chart-2",
          title: "Automated reports",
          desc: "Scenario: an accountant copies numbers from Excel, 1C and the sales system every evening — 3 hours gone. AI gathers that data itself, builds the daily and monthly report in 1 minute and pushes it to Telegram. Manual-copying errors drop by up to 90%.",
        },
        {
          icon: "message-circle",
          title: "AI customer support",
          desc: "Scenario: a customer asks for a price in the evening, the operator answers in the morning — 2 hours of waiting on average. An AI chatbot works on Telegram and your website 24/7: it answers price, catalogue and order-status questions in seconds and escalates complex cases to a human with full context.",
        },
        {
          icon: "shopping-cart",
          title: "Sales & lead automation",
          desc: "Scenario: 20 leads come from an ad, the manager forgets to follow up with 12 of them. AI logs every new lead automatically, sends reminders, routes them to the right team and returns unanswered leads to the manager. No order ever slips through.",
        },
        {
          icon: "package",
          title: "Inventory & order control",
          desc: "Scenario: you learn a product is out of stock at the moment of sale. AI watches stock continuously: it warns when an item drops below a threshold, tracks order status and notifies the customer about delivery by itself.",
        },
        {
          icon: "file-text",
          title: "Document & contract analysis",
          desc: "Scenario: finding one clause in a 40-page contract takes half a day of reading. AI extracts dates, amounts and obligations from documents, turns contracts into a short summary and shows exactly which clause the answer to your question comes from.",
        },
        {
          icon: "link-2",
          title: "Connecting your systems",
          desc: "Scenario: orders arrive on Telegram, data sits in Google Sheets, accounting in 1C — and a person retypes everything. We wire Telegram, Google Sheets, 1C, Click/Payme and CRM into one automated flow: data is entered once and propagates to the rest by itself.",
        },
      ],
    },
    tech: {
      badge: "Technology",
      title: "What technology",
      titleAccent: "do we build with?",
      subtitle:
        "For every project we pick the tool for the problem, not for fashion. The core stack is proven technology that really works in the Uzbekistan market.",
      items: [
        {
          name: "OpenAI GPT-4o",
          desc: "The core model for natural-language understanding, customer conversations and complex text tasks.",
        },
        {
          name: "Claude (Anthropic)",
          desc: "For long documents, contract analysis and processes that need reliable, safe answers.",
        },
        {
          name: "LangChain / LangGraph",
          desc: "Multi-step automation logic: tool calling, conditional flows and orchestrating several AI agents together.",
        },
        {
          name: "RAG (Retrieval-Augmented Generation)",
          desc: "AI answers from your knowledge base — prices, documents, FAQ — without making things up.",
        },
        {
          name: "Vector database (pgvector / Pinecone)",
          desc: "Semantic search: AI finds the right fragment in large documents and chat histories in seconds.",
        },
        {
          name: "Integration (Telegram, 1C, CRM)",
          desc: "Telegram Bot API, AmoCRM, Bitrix24, 1C, Google Sheets, Click/Payme — AI works inside your existing system.",
        },
      ],
    },
    process: {
      badge: "How we work",
      title: "4 steps to your",
      titleAccent: "AI solution",
      subtitle:
        "The first 30 minutes are free. After that every step comes with a written proposal, a fixed price and a clear timeline — you always know where the project stands.",
      steps: [
        {
          num: "01",
          title: "Free consultation",
          desc: "In 30 minutes we study your business: which work eats the most of your team's time, where errors and delays pile up. We tell you right there which automation would pay off. No obligations — even if we don't proceed, the plan stays with you.",
          icon: "message-circle",
        },
        {
          num: "02",
          title: "AI audit + written proposal",
          desc: "We dig into your processes: which steps AI can run, which systems need integration, where human oversight must stay. The result is a technical specification and a proposal with an exact price and timeline. The price is fixed after the spec.",
          icon: "search",
        },
        {
          num: "03",
          title: "Build the MVP",
          desc: "In 2-4 weeks you get the first working version of the AI solution. We demo weekly: you test on real data and give feedback — we correct course early, so there is no surprise at the end.",
          icon: "zap",
        },
        {
          num: "04",
          title: "Rollout + support",
          desc: "We connect the solution to your systems, train your team and watch it together during the first weeks. We monitor the quality of AI answers and keep tuning — the system improves over time instead of going stale.",
          icon: "rocket",
        },
      ],
    },
    examples: {
      badge: "Real examples",
      title: "AI solutions",
      titleAccent: "we have built",
      subtitle:
        "Tezcode doesn't just sell AI to clients — we use it in our own products every day. These are real, working examples.",
      items: [
        {
          tag: "01",
          title: "AI Office — a 12-department virtual office",
          desc: "A system of AI agents for sales, HR, marketing and more. Tezcode itself runs 14 developers and many projects with it — meaning the solution we offer you was tested on ourselves first.",
        },
        {
          tag: "02",
          title: "RAOS — retail automation",
          desc: "A POS system for stores: register, inventory and reports in one place. Sales data is gathered automatically and the daily summary builds itself — no manual Excel at all.",
        },
        {
          tag: "03",
          title: "Salomat AI — voice medical assistant",
          desc: "In the CoreMed ecosystem, an AI assistant talks to patients by voice. That is a level well beyond a simple chatbot — proof that we can build a serious AI product end to end.",
        },
        {
          tag: "04",
          title: "Telegram bot automation",
          desc: "Taking orders, verifying payments, sending reminders, pushing the daily report to Telegram. The most affordable and fastest way for a small business to start automating.",
        },
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "How is the price",
      titleAccent: "formed?",
      subtitle:
        "No hidden fees: the standard plans are public, and the price of a custom project is fixed after the technical specification is approved.",
      factors: [
        {
          title: "Starter",
          price: "$0",
          desc: "Entry level for small business: 1 product, up to 3 staff, a basic AI assistant and Telegram support. The easiest way to try AI automation at no cost.",
        },
        {
          title: "Pro",
          price: "$200/mo",
          desc: "For growing businesses: unlimited products, up to 30 staff, advanced AI (12 agents), WhatsApp + Telegram bot, your own domain and 24/7 support.",
        },
        {
          title: "Custom project",
          price: "After the spec",
          desc: "An AI solution built from scratch for your process: deep integration (1C, CRM, payment systems), custom logic. The exact price and timeline are fixed after the AI audit and spec approval.",
        },
      ],
      note: "Payment terms: 30% upfront, the rest per stage — you see a working result at every stage. The consultation and initial assessment are free.",
    },
    cta: {
      badge: "Time to start",
      title: "Which work could you",
      titleAccent: "hand to AI?",
      subtitle: "We'll figure it out in a free 30-minute consultation. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev — you reach Bekzod directly.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle:
        "The questions we hear most often about AI automation for business in Tashkent — with short, concrete answers.",
      items: [
        {
          q: "What is AI automation and how is it different from regular software?",
          a: "AI automation means having artificial intelligence perform repetitive tasks (reports, answering questions, data entry) without human involvement. Regular software only follows rigid, pre-written rules; AI understands free-form text, picks the right response for the situation and adapts to new cases. That is why customer conversations or document analysis are only feasible with AI.",
        },
        {
          q: "How much does it cost?",
          a: "Standard plans: Starter — $0 (entry features for small business), Pro — $200/mo (advanced AI, up to 30 staff, 24/7 support). The price of a custom solution built for your process is fixed after the technical specification is approved. Payment is 30% upfront, the rest per stage.",
        },
        {
          q: "How long does it take?",
          a: "Simple automation (a Telegram bot, an automated report) — 1-2 weeks. A working MVP of a fuller AI solution — 2-4 weeks. We demo every week, so you watch the result take shape instead of waiting for the last day.",
        },
        {
          q: "Which industries does it fit?",
          a: "Any industry with repetitive processes: retail and stores (register, inventory, reports), clinics (booking, queues, reminders), education centres (leads, payment tracking), logistics (order status, notifications), services (customer questions, reservations). In the consultation we pinpoint the most profitable spot in your specific field.",
        },
        {
          q: "Will it integrate with 1C, CRM and my existing systems?",
          a: "Yes — that is our core work. We build integrations with Telegram, Google Sheets, 1C, AmoCRM, Bitrix24 and payment systems like Click/Payme. The goal is for AI to work inside your current workflow instead of forcing you onto new software. We review your list of systems in the consultation.",
        },
        {
          q: "Does the AI work in Uzbek?",
          a: "Yes. Our AI solutions converse with customers in Uzbek (Latin and Cyrillic), Russian and English. Whatever language the customer writes in, the bot answers in the same one. For the Uzbekistan market we treat this as a standard requirement.",
        },
        {
          q: "How is my data kept safe?",
          a: "Sensitive data is stored in an environment you control, with role-based access restrictions. Only the data required for the task is passed to the AI model. If needed, we can design an architecture where data never leaves your perimeter — security requirements are agreed in writing during the consultation.",
        },
        {
          q: "Is it suitable for a small business?",
          a: "Yes — small businesses are actually our most frequent clients. The Starter plan begins at $0, and solutions like a Telegram bot or an automated report roll out without a big budget. You don't have to automate everything at once — we start with the one process that costs you the most time, and you expand after seeing results.",
        },
        {
          q: "When does the investment pay off (ROI)?",
          a: "It depends on the process being automated. The math is simple: if an employee spends 3 hours a day on a report and AI cuts that to 1 minute, about 60 working hours a month are freed — multiply by the employee's salary and you see the savings. In the consultation we estimate ROI together using your numbers.",
        },
        {
          q: "How do the contract and support work?",
          a: "Every project starts with a written contract: scope, timeline, price and payment stages (30% upfront) are stated explicitly. We don't disappear after delivery: we train your team, monitor the system, and the Pro plan includes 24/7 support.",
        },
        {
          q: "What happens if the AI makes a mistake?",
          a: "We never leave AI unsupervised. Important decisions (payments, contracts, large discounts) always pass through human confirmation, and in uncertain cases the AI hands the question to an operator. Thanks to RAG, the bot relies only on your knowledge base — it doesn't invent answers. After rollout we monitor answer quality together and keep tuning.",
        },
        {
          q: "Where should I start?",
          a: "The right start is a free 30-minute consultation. There we identify which work consumes most of your team's time and which automation will pay off fastest. No technical knowledge required — describing your process in plain words is enough.",
        },
      ],
    },
    related: {
      badge: "Related services",
      title: "You may also",
      titleAccent: "find useful",
      subtitle: "Tezcode solutions close to AI automation — each covered in detail on its own page.",
      links: [
        {
          href: "/ai-agent",
          label: "AI agent",
          desc: "AI agents that make decisions and complete tasks end to end — the next level of automation.",
        },
        {
          href: "/ai-chatbot",
          label: "AI chatbot",
          desc: "An AI chatbot for 24/7 customer service and lead capture — the fastest-payoff part of automation.",
        },
        {
          href: "/telegram-bot-biznes",
          label: "Telegram bot for business",
          desc: "Automating orders, payments and notifications via Telegram — the most popular channel in Uzbekistan.",
        },
        {
          href: "/biznes-avtomatlashtirish",
          label: "Business automation",
          desc: "Classic automation of repetitive manual work — saving time and costs.",
        },
      ],
    },
    service: {
      name: "AI automation service — Tezcode",
      description:
        "AI automation for business in Tashkent: automated reports, AI chatbots, sales and inventory automation, 1C/CRM/Telegram integration. Tezcode Software Factory, Uzbekistan.",
      serviceType: "AI automation / artificial intelligence solutions",
    },
  },

  ar: {
    hero: {
      badge: "أتمتة بالذكاء الاصطناعي — Tezcode، طشقند",
      title1: "أتمت أعمالك",
      titleAccent: "بالذكاء الاصطناعي",
      title2: "",
      subtitle:
        "أتمتة الذكاء الاصطناعي تعني تسليم الأعمال المتكررة — إعداد التقارير، الرد على العملاء، تسجيل الطلبات — إلى الذكاء الاصطناعي. يجمع الذكاء الاصطناعي البيانات من Excel و1C بنفسه، ويرد على Telegram على مدار الساعة، ويراقب المبيعات والمخزون — بينما يكتفي الإنسان بالإشراف واتخاذ القرار. تبني Tezcode Software Factory حلول أتمتة الذكاء الاصطناعي للأعمال في طشقند حول عملياتك: تقرير كان يستغرق 3 ساعات يجهز في دقيقة واحدة، والرد على العميل ينخفض من ساعتين إلى ثوانٍ، وأخطاء الإدخال اليدوي تقل بنسبة تصل إلى 90%.",
      trust: "استشارة 30 دقيقة مجانية • الدفع: 30% مقدمًا",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "ماذا يمكننا أتمتته؟",
    },
    capabilities: {
      badge: "الإمكانيات",
      title: "ماذا يمكننا",
      titleAccent: "أتمتته؟",
      subtitle:
        "كل مهمة يدوية متكررة مرشحة للأتمتة بالذكاء الاصطناعي. فيما يلي الاتجاهات الأكثر طلباً في طشقند وعموم أوزبكستان — كل واحدة مع سيناريو حقيقي.",
      items: [
        {
          icon: "bar-chart-2",
          title: "تقارير تلقائية",
          desc: "السيناريو: المحاسب ينقل الأرقام يدوياً كل مساء من Excel و1C ونظام المبيعات — تضيع 3 ساعات. الذكاء الاصطناعي يجمع هذه البيانات بنفسه، ويعدّ التقرير اليومي والشهري في دقيقة واحدة ويرسله إلى Telegram. أخطاء النقل اليدوي تقل بنسبة تصل إلى 90%.",
        },
        {
          icon: "message-circle",
          title: "دعم عملاء بالذكاء الاصطناعي",
          desc: "السيناريو: العميل يسأل عن السعر مساءً، والموظف يرد صباحاً — ساعتا انتظار في المتوسط. شات بوت AI يعمل على Telegram والموقع 24/7: يجيب عن أسئلة السعر والكتالوج وحالة الطلب في ثوانٍ، ويحوّل الحالات المعقدة إلى موظف مع السياق الكامل.",
        },
        {
          icon: "shopping-cart",
          title: "أتمتة المبيعات والعملاء المحتملين",
          desc: "السيناريو: وصل 20 عميلاً محتملاً من إعلان، ونسي المدير متابعة 12 منهم. الذكاء الاصطناعي يسجل كل عميل جديد تلقائياً، يرسل تذكيرات، يوجهه للقسم المناسب ويعيد العملاء بلا رد إلى المدير. لا يضيع أي طلب.",
        },
        {
          icon: "package",
          title: "مراقبة المخزون والطلبات",
          desc: "السيناريو: تكتشف نفاد المنتج لحظة البيع. الذكاء الاصطناعي يراقب المخزون باستمرار: ينبّه عندما ينخفض المنتج عن الحد، يتتبع حالة الطلب ويبلّغ العميل عن التسليم بنفسه.",
        },
        {
          icon: "file-text",
          title: "تحليل المستندات والعقود",
          desc: "السيناريو: العثور على بند واحد في عقد من 40 صفحة يستغرق نصف يوم قراءة. الذكاء الاصطناعي يستخرج التواريخ والمبالغ والالتزامات من المستندات، يحوّل العقود إلى ملخص قصير ويوضح من أي بند بالضبط جاء جواب سؤالك.",
        },
        {
          icon: "link-2",
          title: "ربط الأنظمة",
          desc: "السيناريو: الطلب يصل عبر Telegram، والبيانات في Google Sheets، والمحاسبة في 1C — وينقل كل شيء إنسان يدوياً. نربط Telegram وGoogle Sheets و1C وClick/Payme وCRM في تدفق تلقائي واحد: تُدخل البيانات مرة واحدة وتنتشر إلى البقية بنفسها.",
        },
      ],
    },
    tech: {
      badge: "التقنيات",
      title: "بأي تقنيات",
      titleAccent: "نبني؟",
      subtitle:
        "لكل مشروع نختار الأداة المناسبة للمشكلة لا للموضة. المكوّنات الأساسية تقنيات مجرّبة تعمل فعلاً في سوق أوزبكستان.",
      items: [
        {
          name: "OpenAI GPT-4o",
          desc: "النموذج الأساسي لفهم اللغة الطبيعية والمحادثة مع العملاء والمهام النصية المعقدة.",
        },
        {
          name: "Claude (Anthropic)",
          desc: "للمستندات الطويلة وتحليل العقود والعمليات التي تتطلب إجابات موثوقة وآمنة.",
        },
        {
          name: "LangChain / LangGraph",
          desc: "منطق أتمتة متعدد الخطوات: استدعاء الأدوات، التدفقات الشرطية وتنسيق عدة وكلاء AI معاً.",
        },
        {
          name: "RAG (Retrieval-Augmented Generation)",
          desc: "يجيب الذكاء الاصطناعي استناداً إلى قاعدتك — الأسعار والمستندات والأسئلة الشائعة — ولا يختلق شيئاً.",
        },
        {
          name: "قاعدة متجهات (pgvector / Pinecone)",
          desc: "بحث بالمعنى: يجد الذكاء الاصطناعي الجزء المطلوب في المستندات والمراسلات الكبيرة في ثوانٍ.",
        },
        {
          name: "التكامل (Telegram، 1C، CRM)",
          desc: "Telegram Bot API وAmoCRM وBitrix24 و1C وGoogle Sheets وClick/Payme — يعمل الذكاء الاصطناعي داخل نظامك الحالي.",
        },
      ],
    },
    process: {
      badge: "كيف نعمل",
      title: "4 خطوات إلى",
      titleAccent: "حل الذكاء الاصطناعي",
      subtitle:
        "أول 30 دقيقة مجانية. بعدها تسير كل خطوة بعرض مكتوب وسعر ثابت وموعد واضح — تعرف دائماً أين يقف المشروع.",
      steps: [
        {
          num: "01",
          title: "استشارة مجانية",
          desc: "في 30 دقيقة ندرس أعمالك: أي عمل يستهلك معظم وقت فريقك، وأين تتراكم الأخطاء والتأخيرات. نقول لك في اللقاء نفسه أي أتمتة ستعود بفائدة حقيقية. بلا التزام — حتى لو لم نتفق تبقى الخطة معك.",
          icon: "message-circle",
        },
        {
          num: "02",
          title: "تدقيق AI + عرض مكتوب",
          desc: "نغوص في عملياتك: أي خطوات يمكن للذكاء الاصطناعي تنفيذها، وأي أنظمة تحتاج تكاملاً، وأين يجب أن يبقى إشراف الإنسان. النتيجة — مواصفات فنية وعرض بسعر وموعد دقيقين. يُثبَّت السعر بعد المواصفات.",
          icon: "search",
        },
        {
          num: "03",
          title: "بناء MVP",
          desc: "خلال 2-4 أسابيع نسلّمك أول نسخة عاملة من حل الذكاء الاصطناعي. نعرض عرضاً تجريبياً كل أسبوع: تختبر على بيانات حقيقية وتعطي ملاحظات — نصحح المسار مبكراً فلا تكون في النهاية مفاجآت.",
          icon: "zap",
        },
        {
          num: "04",
          title: "التطبيق + الدعم",
          desc: "نربط الحل بأنظمتك، ندرّب فريقك ونراقب العمل معاً في الأسابيع الأولى. نتابع جودة إجابات الذكاء الاصطناعي ونواصل الضبط — يتحسن النظام مع الوقت بدل أن يتقادم.",
          icon: "rocket",
        },
      ],
    },
    examples: {
      badge: "أمثلة حقيقية",
      title: "حلول ذكاء اصطناعي",
      titleAccent: "بنيناها",
      subtitle:
        "لا تكتفي Tezcode ببيع الذكاء الاصطناعي للعملاء — بل نستخدمه في منتجاتنا يومياً. هذه أمثلة عاملة حقيقية.",
      items: [
        {
          tag: "01",
          title: "AI Office — مكتب افتراضي بـ 12 قسماً",
          desc: "منظومة وكلاء ذكاء اصطناعي للمبيعات والموارد البشرية والتسويق وغيرها. تدير Tezcode بها 14 مطوراً ومشاريع كثيرة — أي أن الحل الذي نعرضه عليك جرّبناه على أنفسنا أولاً.",
        },
        {
          tag: "02",
          title: "RAOS — أتمتة التجارة",
          desc: "نظام POS للمتاجر: الكاشير والمخزون والتقارير في مكان واحد. تُجمع بيانات المبيعات تلقائياً ويتكوّن الملخص اليومي بنفسه — بلا Excel يدوي إطلاقاً.",
        },
        {
          tag: "03",
          title: "Salomat AI — مساعد طبي صوتي",
          desc: "في منظومة CoreMed مساعد ذكي يحادث المريض بالصوت. هذا مستوى أعقد بكثير من شات بوت عادي — دليل على قدرتنا على بناء منتج ذكاء اصطناعي جاد من البداية إلى النهاية.",
        },
        {
          tag: "04",
          title: "أتمتة عبر بوت Telegram",
          desc: "استقبال الطلبات، التحقق من الدفع، التذكيرات، إرسال التقرير اليومي إلى Telegram. أرخص وأسرع طريقة للأعمال الصغيرة لبدء الأتمتة.",
        },
      ],
    },
    pricing: {
      badge: "الأسعار",
      title: "كيف يتشكل",
      titleAccent: "السعر؟",
      subtitle:
        "لا رسوم خفية: الباقات الجاهزة معلنة، وسعر المشروع المخصص يُثبَّت بعد اعتماد المواصفات الفنية.",
      factors: [
        {
          title: "Starter",
          price: "$0",
          desc: "المستوى الأول للأعمال الصغيرة: منتج واحد، حتى 3 موظفين، مساعد AI أساسي ودعم عبر Telegram. أسهل طريقة لتجربة أتمتة الذكاء الاصطناعي بلا تكلفة.",
        },
        {
          title: "Pro",
          price: "$200/شهرياً",
          desc: "للأعمال النامية: منتجات غير محدودة، حتى 30 موظفاً، AI متقدم (12 وكيلاً)، بوت WhatsApp + Telegram، نطاق خاص ودعم 24/7.",
        },
        {
          title: "مشروع مخصص",
          price: "بعد المواصفات",
          desc: "حل ذكاء اصطناعي يُبنى من الصفر لعمليتك: تكامل عميق (1C، CRM، أنظمة الدفع)، منطق خاص. يُثبَّت السعر والموعد الدقيقان بعد تدقيق AI واعتماد المواصفات.",
        },
      ],
      note: "نظام الدفع: 30% مقدماً والباقي على مراحل — ترى نتيجة عاملة في كل مرحلة. الاستشارة والتقييم الأولي مجانيان.",
    },
    cta: {
      badge: "وقت البدء",
      title: "أي عمل يمكنك",
      titleAccent: "تسليمه للذكاء الاصطناعي؟",
      subtitle: "سنحدد ذلك في استشارة مجانية مدتها 30 دقيقة. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev — تتواصل مباشرة مع بكزود.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle:
        "الأسئلة التي نسمعها من العملاء أكثر من غيرها عن أتمتة الذكاء الاصطناعي للأعمال في طشقند — مع إجابات قصيرة ومحددة.",
      items: [
        {
          q: "ما هي أتمتة الذكاء الاصطناعي وما الفرق عن البرنامج العادي؟",
          a: "أتمتة الذكاء الاصطناعي تعني تنفيذ المهام المتكررة (التقارير، الرد على الأسئلة، إدخال البيانات) بالذكاء الاصطناعي دون تدخل بشري. البرنامج العادي يعمل بقواعد جامدة مكتوبة مسبقاً فقط، أما الذكاء الاصطناعي فيفهم النص الحر ويختار الرد المناسب للموقف ويتكيف مع الحالات الجديدة. لذلك محادثة العميل أو تحليل المستندات لا يقدر عليهما إلا الذكاء الاصطناعي.",
        },
        {
          q: "كم التكلفة؟",
          a: "الباقات الجاهزة: Starter — $0 (إمكانيات أساسية للأعمال الصغيرة)، Pro — $200 شهرياً (AI متقدم، حتى 30 موظفاً، دعم 24/7). سعر الحل المخصص لعمليتك يُثبَّت بعد اعتماد المواصفات الفنية. الدفع 30% مقدماً والباقي على مراحل.",
        },
        {
          q: "كم يستغرق التطوير؟",
          a: "أتمتة بسيطة (بوت Telegram، تقرير تلقائي) — 1-2 أسبوع. نسخة MVP عاملة لحل أكمل — 2-4 أسابيع. نعرض عرضاً تجريبياً كل أسبوع، فترى النتيجة أثناء العمل لا في اليوم الأخير.",
        },
        {
          q: "أي المجالات تناسبها؟",
          a: "أي مجال فيه عمليات متكررة: التجارة والمتاجر (كاشير، مخزون، تقارير)، العيادات (حجز، طابور، تذكير)، مراكز التعليم (عملاء محتملون، متابعة الدفع)، اللوجستيات (حالة الطلب، إشعارات)، الخدمات (أسئلة العملاء، الحجز). في الاستشارة نحدد النقطة الأكثر ربحية في مجالك بالذات.",
        },
        {
          q: "هل يتكامل مع 1C وCRM وأنظمتي الحالية؟",
          a: "نعم، هذا عملنا الأساسي. نبني تكاملات مع Telegram وGoogle Sheets و1C وAmoCRM وBitrix24 وأنظمة الدفع Click/Payme. الهدف أن يعمل الذكاء الاصطناعي داخل سير عملك الحالي دون إجبارك على برنامج جديد. نراجع قائمة أنظمتك في الاستشارة.",
        },
        {
          q: "هل يعمل الذكاء الاصطناعي بالأوزبكية؟",
          a: "نعم. تتحاور حلولنا مع العملاء بالأوزبكية (لاتينية وسيريلية) والروسية والإنجليزية. بأي لغة يكتب العميل، يرد البوت بنفس اللغة. نعتبر ذلك متطلباً قياسياً لسوق أوزبكستان.",
        },
        {
          q: "كيف تُضمن سلامة بياناتي؟",
          a: "تُخزَّن البيانات الحساسة في بيئة تتحكم بها أنت، مع تقييد الصلاحيات حسب الأدوار. لا يُمرَّر إلى نموذج الذكاء الاصطناعي إلا ما تتطلبه المهمة. عند الحاجة ندرس بنية لا تغادر فيها البيانات نطاقك — نثبّت متطلبات الأمان كتابياً في الاستشارة.",
        },
        {
          q: "هل يناسب الأعمال الصغيرة؟",
          a: "نعم — الأعمال الصغيرة هي الأكثر لجوءاً إلينا. باقة Starter تبدأ من $0، وحلول مثل بوت Telegram أو التقرير التلقائي تُطبَّق بلا ميزانية كبيرة. لا يلزم أتمتة كل شيء دفعة واحدة — نبدأ بالعملية الأكثر استهلاكاً للوقت، وتتوسع بعد رؤية النتيجة.",
        },
        {
          q: "متى يسترد الاستثمار (ROI)؟",
          a: "يعتمد على العملية المؤتمتة. الحساب بسيط: إذا كان الموظف يقضي 3 ساعات يومياً في التقرير وخفّضها الذكاء الاصطناعي إلى دقيقة، يتحرر نحو 60 ساعة عمل شهرياً — اضربها في راتب الموظف لترى التوفير. في الاستشارة نحسب معاً ROI تقريبياً بأرقامك أنت.",
        },
        {
          q: "كيف يكون العقد والدعم؟",
          a: "يبدأ كل مشروع بعقد مكتوب: يُثبَّت فيه نطاق العمل والموعد والسعر ومراحل الدفع (30% مقدماً) بوضوح. لا نختفي بعد التسليم: ندرّب فريقك ونراقب النظام، وباقة Pro تشمل دعماً 24/7.",
        },
        {
          q: "ماذا يحدث إذا أخطأ الذكاء الاصطناعي؟",
          a: "لا نترك الذكاء الاصطناعي بلا رقابة. القرارات المهمة (الدفع، العقد، الخصم الكبير) تمر دائماً بتأكيد بشري، وفي الحالات غير المؤكدة يحيل الذكاء الاصطناعي السؤال إلى موظف. وبفضل تقنية RAG يعتمد البوت على بيانات قاعدتك فقط — لا يختلق إجابات. بعد التطبيق نراقب جودة الإجابات معاً ونواصل الضبط.",
        },
        {
          q: "من أين أبدأ؟",
          a: "البداية الصحيحة استشارة مجانية مدتها 30 دقيقة. نحدد فيها أي عمل يستهلك معظم وقت فريقك وأي أتمتة تعطي أسرع نتيجة. لا حاجة لمعرفة تقنية — يكفي وصف عمليتك بكلمات بسيطة.",
        },
      ],
    },
    related: {
      badge: "خدمات ذات صلة",
      title: "قد يفيدك",
      titleAccent: "أيضاً",
      subtitle: "حلول Tezcode القريبة من أتمتة الذكاء الاصطناعي — كل منها مفصّل في صفحة مستقلة.",
      links: [
        {
          href: "/ai-agent",
          label: "وكيل AI",
          desc: "وكلاء AI يتخذون القرارات وينجزون المهمة من البداية إلى النهاية — المستوى التالي من الأتمتة.",
        },
        {
          href: "/ai-chatbot",
          label: "شات بوت AI",
          desc: "شات بوت AI لخدمة العملاء 24/7 وجمع العملاء المحتملين — أسرع جزء من الأتمتة نتيجةً.",
        },
        {
          href: "/telegram-bot-biznes",
          label: "بوت Telegram للأعمال",
          desc: "أتمتة الطلبات والمدفوعات والإشعارات عبر Telegram — القناة الأكثر شعبية في أوزبكستان.",
        },
        {
          href: "/biznes-avtomatlashtirish",
          label: "أتمتة الأعمال",
          desc: "الأتمتة الكلاسيكية للمهام اليدوية المتكررة — توفير الوقت والتكاليف.",
        },
      ],
    },
    service: {
      name: "خدمة أتمتة الذكاء الاصطناعي — Tezcode",
      description:
        "أتمتة الأعمال بالذكاء الاصطناعي في طشقند: تقارير تلقائية، شات بوت AI، أتمتة المبيعات والمخزون، تكامل 1C/CRM/Telegram. Tezcode Software Factory، أوزبكستان.",
      serviceType: "أتمتة الذكاء الاصطناعي / حلول الذكاء الاصطناعي",
    },
  },

  uk: {
    hero: {
      badge: "AI-автоматизація — Tezcode, Ташкент",
      title1: "Автоматизуйте бізнес",
      titleAccent: "за допомогою ШІ",
      title2: "",
      subtitle:
        "AI-автоматизація — це передача рутинних завдань штучному інтелекту: складання звітів, відповіді клієнтам, реєстрація замовлень. ШІ сам збирає дані з Excel і 1C, відповідає в Telegram 24/7, стежить за продажами і складом — людина лише контролює і ухвалює рішення. Tezcode Software Factory будує рішення AI-автоматизації бізнесу в Ташкенті під ваші процеси: звіт, що займав 3 години, готовий за 1 хвилину, відповідь клієнту скорочується з 2 годин до секунд, помилки ручного введення зменшуються до 90%.",
      trust: "Безкоштовна 30-хв консультація • Оплата: 30% передоплата",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Що можемо автоматизувати?",
    },
    capabilities: {
      badge: "Можливості",
      title: "Що ми можемо",
      titleAccent: "автоматизувати?",
      subtitle:
        "Будь-яка повторювана ручна робота — кандидат на автоматизацію з ШІ. Нижче напрямки, які найчастіше замовляють у Ташкенті та по всьому Узбекистану — кожен із реальним сценарієм.",
      items: [
        {
          icon: "bar-chart-2",
          title: "Автоматичні звіти",
          desc: "Сценарій: бухгалтер щовечора вручну переносить цифри з Excel, 1C і торговельної системи — йде 3 години. ШІ сам збирає ці дані, готує денний і місячний звіт за 1 хвилину і надсилає в Telegram. Помилки ручного перенесення зменшуються до 90%.",
        },
        {
          icon: "message-circle",
          title: "ШІ-підтримка клієнтів",
          desc: "Сценарій: клієнт пише ввечері і питає ціну, оператор відповідає вранці — в середньому 2 години очікування. AI-чатбот працює в Telegram і на сайті 24/7: відповідає на питання про ціну, каталог і статус замовлення за секунди, а складні випадки передає оператору з повним контекстом.",
        },
        {
          icon: "shopping-cart",
          title: "Автоматизація продажів і лідів",
          desc: "Сценарій: з реклами прийшло 20 лідів, менеджер забув написати 12 із них. ШІ автоматично фіксує кожного нового клієнта, надсилає нагадування, спрямовує у потрібний відділ і повертає менеджеру ліди без відповіді. Жодна заявка не губиться.",
        },
        {
          icon: "package",
          title: "Контроль складу та замовлень",
          desc: "Сценарій: про те, що товар закінчився, дізнаються в момент продажу. ШІ постійно стежить за залишками: попереджає, коли товар опускається нижче порога, відстежує статус замовлення і сам повідомляє клієнта про доставку.",
        },
        {
          icon: "file-text",
          title: "Аналіз документів і договорів",
          desc: "Сценарій: щоб знайти потрібний пункт у договорі на 40 сторінок, треба пів дня читання. ШІ витягує з документів дати, суми та зобов'язання, перетворює договори на коротке резюме і показує, з якого саме пункту взято відповідь на ваше питання.",
        },
        {
          icon: "link-2",
          title: "Зв'язування систем",
          desc: "Сценарій: замовлення приходить у Telegram, дані — в Google Sheets, облік — в 1C, і все переносить людина вручну. Ми зв'язуємо Telegram, Google Sheets, 1C, Click/Payme і CRM в єдиний автоматичний потік: дані вводяться один раз і самі розходяться по решті систем.",
        },
      ],
    },
    tech: {
      badge: "Технології",
      title: "На яких технологіях",
      titleAccent: "ми будуємо?",
      subtitle:
        "Для кожного проєкту обираємо інструмент під задачу, а не під моду. Основний стек — перевірені технології, що реально працюють на ринку Узбекистану.",
      items: [
        {
          name: "OpenAI GPT-4o",
          desc: "Основна модель для розуміння природної мови, діалогу з клієнтом і складних текстових задач.",
        },
        {
          name: "Claude (Anthropic)",
          desc: "Для довгих документів, аналізу договорів і процесів, де потрібні надійні, безпечні відповіді.",
        },
        {
          name: "LangChain / LangGraph",
          desc: "Багатокрокова логіка автоматизації: виклик інструментів, умовні потоки і спільна робота кількох AI-агентів.",
        },
        {
          name: "RAG (Retrieval-Augmented Generation)",
          desc: "ШІ відповідає на основі вашої бази — ціни, документи, FAQ — і не вигадує від себе.",
        },
        {
          name: "Векторна база (pgvector / Pinecone)",
          desc: "Пошук даних за змістом: ШІ за секунди знаходить потрібний фрагмент у великих документах і листуваннях.",
        },
        {
          name: "Інтеграція (Telegram, 1C, CRM)",
          desc: "Telegram Bot API, AmoCRM, Bitrix24, 1C, Google Sheets, Click/Payme — ШІ працює всередині вашої поточної системи.",
        },
      ],
    },
    process: {
      badge: "Як ми працюємо",
      title: "4 кроки до",
      titleAccent: "ШІ-рішення",
      subtitle:
        "Перші 30 хвилин безкоштовно. Далі кожен крок іде з письмовою пропозицією, точною ціною і терміном — ви завжди знаєте, на якому етапі проєкт.",
      steps: [
        {
          num: "01",
          title: "Безкоштовна консультація",
          desc: "За 30 хвилин вивчаємо ваш бізнес: яка робота забирає у команди найбільше часу, де найчастіше помилки і затримки. Уже на зустрічі кажемо, автоматизація чого дасть реальну вигоду. Без зобов'язань — навіть якщо не домовимося, план залишиться у вас.",
          icon: "message-circle",
        },
        {
          num: "02",
          title: "ШІ-аудит + письмова пропозиція",
          desc: "Глибоко розбираємо процеси: які кроки може виконувати ШІ, з якими системами потрібна інтеграція, де обов'язково залишається контроль людини. Результат — технічне завдання (ТЗ) і пропозиція з точною ціною і терміном. Ціна фіксується після ТЗ.",
          icon: "search",
        },
        {
          num: "03",
          title: "Створення MVP",
          desc: "За 2-4 тижні віддаємо першу робочу версію ШІ-рішення. Щотижня показуємо демо: ви тестуєте на реальних даних і даєте відгук — курс коригуємо рано, і в кінці не буває несподіваного результату.",
          icon: "zap",
        },
        {
          num: "04",
          title: "Впровадження + підтримка",
          desc: "Підключаємо рішення до ваших систем, навчаємо команду і перші тижні разом стежимо за роботою. Перевіряємо якість відповідей ШІ і доналаштовуємо — система з часом стає кращою, а не застаріває.",
          icon: "rocket",
        },
      ],
    },
    examples: {
      badge: "Реальні приклади",
      title: "ШІ-рішення,",
      titleAccent: "які ми побудували",
      subtitle:
        "Tezcode не лише продає ШІ клієнтам — ми використовуємо його у своїх продуктах щодня. Нижче реально працюючі приклади.",
      items: [
        {
          tag: "01",
          title: "AI Office — віртуальний офіс із 12 відділів",
          desc: "Система AI-агентів для продажів, HR, маркетингу та інших відділів. Tezcode сам керує з її допомогою 14 розробниками і багатьма проєктами — тобто рішення, яке ми вам пропонуємо, ми спершу перевірили на собі.",
        },
        {
          tag: "02",
          title: "RAOS — автоматизація торгівлі",
          desc: "POS-система для магазинів: каса, склад і звіти в одному місці. Дані про продажі збираються автоматично, денне зведення формується саме — ручного Excel немає взагалі.",
        },
        {
          tag: "03",
          title: "Salomat AI — голосовий медичний асистент",
          desc: "В екосистемі CoreMed ШІ-асистент спілкується з пацієнтом голосом. Це рівень значно складніший за звичайний чатбот — доказ, що ми здатні побудувати серйозний ШІ-продукт від початку до кінця.",
        },
        {
          tag: "04",
          title: "Автоматизація через Telegram-бота",
          desc: "Прийом замовлень, перевірка оплати, нагадування, надсилання денного звіту в Telegram. Найдоступніший і найшвидший спосіб для малого бізнесу почати автоматизацію.",
        },
      ],
    },
    pricing: {
      badge: "Ціни",
      title: "Як формується",
      titleAccent: "ціна?",
      subtitle:
        "Жодних прихованих платежів: готові тарифи відкриті, а ціна індивідуального проєкту фіксується після затвердження технічного завдання (ТЗ).",
      factors: [
        {
          title: "Starter",
          price: "$0",
          desc: "Стартовий рівень для малого бізнесу: 1 продукт, до 3 співробітників, базовий AI-помічник і підтримка в Telegram. Найзручніший спосіб спробувати AI-автоматизацію без витрат.",
        },
        {
          title: "Pro",
          price: "$200/міс",
          desc: "Для зростаючого бізнесу: безлімітні продукти, до 30 співробітників, просунутий AI (12 агентів), WhatsApp + Telegram бот, свій домен і підтримка 24/7.",
        },
        {
          title: "Індивідуальний проєкт",
          price: "Після ТЗ",
          desc: "ШІ-рішення, побудоване з нуля під ваш процес: глибока інтеграція (1C, CRM, платіжні системи), особлива логіка. Точна ціна і термін фіксуються після ШІ-аудиту і затвердження ТЗ.",
        },
      ],
      note: "Порядок оплати: 30% передоплата, решта поетапно — на кожному етапі ви бачите робочий результат. Консультація і первинна оцінка безкоштовні.",
    },
    cta: {
      badge: "Час починати",
      title: "Яку роботу можна",
      titleAccent: "довірити ШІ?",
      subtitle: "Визначимо на безкоштовній 30-хвилинній консультації. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle:
        "Запитання про AI-автоматизацію бізнесу в Ташкенті, які ми чуємо від клієнтів найчастіше — з короткими і конкретними відповідями.",
      items: [
        {
          q: "Що таке ШІ-автоматизація і чим вона відрізняється від звичайної програми?",
          a: "ШІ-автоматизація — це виконання рутинних завдань (звіти, відповіді на питання, введення даних) штучним інтелектом без участі людини. Звичайна програма працює лише за жорстко заданими правилами, а ШІ розуміє вільний текст, підбирає відповідь за ситуацією і адаптується до нових випадків. Тому діалог із клієнтом або аналіз документів під силу лише ШІ.",
        },
        {
          q: "Скільки це коштує?",
          a: "Готові тарифи: Starter — $0 (базові можливості для малого бізнесу), Pro — $200/міс (просунутий AI, до 30 співробітників, підтримка 24/7). Ціна індивідуального рішення під ваш процес фіксується після затвердження технічного завдання (ТЗ). Оплата — 30% передоплата, решта поетапно.",
        },
        {
          q: "Скільки часу займає розробка?",
          a: "Проста автоматизація (Telegram-бот, автоматичний звіт) — 1-2 тижні. Робоча MVP-версія повнішого ШІ-рішення — 2-4 тижні. Щотижня показуємо демо, тож результат ви бачите в процесі, а не в останній день.",
        },
        {
          q: "Яким сферам це підходить?",
          a: "Будь-якій сфері з повторюваними процесами: торгівля і магазини (каса, склад, звіти), клініки (запис, черга, нагадування), навчальні центри (ліди, контроль оплат), логістика (статус замовлення, повідомлення), сервіс (питання клієнтів, бронювання). На консультації визначимо найвигіднішу точку саме у вашій сфері.",
        },
        {
          q: "Чи буде інтеграція з 1C, CRM і моїми системами?",
          a: "Так, це наша основна робота. Будуємо інтеграції з Telegram, Google Sheets, 1C, AmoCRM, Bitrix24, платіжними системами Click/Payme. Мета — щоб ШІ працював усередині вашого поточного процесу, не змушуючи переходити на нову програму. Список ваших систем розберемо на консультації.",
        },
        {
          q: "Чи працює ШІ узбецькою мовою?",
          a: "Так. Наші ШІ-рішення спілкуються з клієнтами узбецькою (латиниця і кирилиця), російською та англійською. Якою мовою пише клієнт — тією бот і відповідає. Для ринку Узбекистану це у нас стандартна вимога.",
        },
        {
          q: "Як забезпечується безпека моїх даних?",
          a: "Конфіденційні дані зберігаються в середовищі, яке контролюєте ви, доступи обмежені за ролями. У ШІ-модель передається лише те, що необхідно для задачі. За потреби розглянемо архітектуру, за якої дані не залишають ваш контур — вимоги до безпеки фіксуємо письмово на консультації.",
        },
        {
          q: "Чи підходить це малому бізнесу?",
          a: "Так, найчастіше до нас звертається саме малий бізнес. Тариф Starter починається з $0, а рішення на кшталт Telegram-бота чи автоматичного звіту впроваджуються без великого бюджету. Не обов'язково автоматизувати все одразу — починаємо з одного найвитратнішого за часом процесу, а після результату розширюєте.",
        },
        {
          q: "Коли окупляться вкладення (ROI)?",
          a: "Залежить від процесу, що автоматизується. Розрахунок простий: якщо співробітник витрачає на звіт 3 години на день, а ШІ скорочує це до 1 хвилини, звільняється ~60 годин роботи на місяць — помножте на зарплату співробітника і побачите економію. На консультації порахуємо орієнтовний ROI на ваших цифрах.",
        },
        {
          q: "Як влаштовані договір і підтримка?",
          a: "Кожен проєкт починається з письмового договору: обсяг робіт, термін, ціна та етапи оплати (30% передоплата) фіксуються явно. Після здачі не зникаємо: навчаємо команду, стежимо за роботою, у тарифі Pro включена підтримка 24/7.",
        },
        {
          q: "Що буде, якщо ШІ помилиться?",
          a: "Ми не залишаємо ШІ без контролю. Важливі рішення (оплата, договір, велика знижка) завжди проходять підтвердження людиною, а в непевних випадках ШІ передає питання оператору. Завдяки технології RAG бот спирається лише на дані вашої бази — не вигадує відповіді. Після впровадження разом відстежуємо якість відповідей і доналаштовуємо.",
        },
        {
          q: "З чого почати?",
          a: "Правильний старт — безкоштовна 30-хвилинна консультація. На ній визначаємо, на яку роботу ваша команда витрачає найбільше часу, і яка автоматизація дасть найшвидший результат. Технічні знання не потрібні — достатньо простими словами описати ваш процес.",
        },
      ],
    },
    related: {
      badge: "Пов'язані послуги",
      title: "Вам також може",
      titleAccent: "бути корисно",
      subtitle: "Рішення Tezcode, близькі до AI-автоматизації — кожне детально на окремій сторінці.",
      links: [
        {
          href: "/ai-agent",
          label: "AI-агент",
          desc: "AI-агенти, що самі ухвалюють рішення і виконують задачу від початку до кінця — наступний рівень автоматизації.",
        },
        {
          href: "/ai-chatbot",
          label: "AI-чат-бот",
          desc: "AI-чат-бот для сервісу 24/7 і збору лідів — найшвидша за результатом частина автоматизації.",
        },
        {
          href: "/telegram-bot-biznes",
          label: "Telegram-бот для бізнесу",
          desc: "Автоматизація замовлень, оплат і повідомлень через Telegram — найпопулярніший канал в Узбекистані.",
        },
        {
          href: "/biznes-avtomatlashtirish",
          label: "Автоматизація бізнесу",
          desc: "Класична автоматизація рутинної ручної роботи — економія часу та витрат.",
        },
      ],
    },
    service: {
      name: "Послуга ШІ-автоматизації — Tezcode",
      description:
        "AI-автоматизація бізнесу в Ташкенті: автоматичні звіти, AI-чатбот, автоматизація продажів і складу, інтеграція з 1C/CRM/Telegram. Tezcode Software Factory, Узбекистан.",
      serviceType: "ШІ-автоматизація / рішення на штучному інтелекті",
    },
  },
};
