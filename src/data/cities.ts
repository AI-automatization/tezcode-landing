import type { ServiceLang } from "@/components/service-page/types";

// City data for the /pos-tizimi/[city] programmatic landing pages.
// Each city has a UNIQUE local-market blurb (intro) describing that city's real
// retail / trade character — written genuinely distinct per city to avoid thin
// "doorway page" duplication. uz + ru are written fully; en/ar/uk are faithful
// city-specific translations of the same blurb (never empty, never generic).
//
// ONLY confirmed, well-known geographic/market facts (famous bazaars, trade
// centers, regional business profile). NO fabricated client counts or numbers.

export type City = {
  slug: string;
  name: Record<ServiceLang, string>;
  // Region/viloyat name shown in metadata + schema areaServed.
  region: Record<ServiceLang, string>;
  // The unique local-market blurb that MUST render visibly per city.
  intro: Record<ServiceLang, string>;
};

export const CITIES: City[] = [
  {
    slug: "toshkent",
    name: { uz: "Toshkent", ru: "Ташкент", en: "Tashkent", ar: "طشقند", uk: "Ташкент" },
    region: { uz: "Toshkent shahri", ru: "город Ташкент", en: "Tashkent city", ar: "مدينة طشقند", uk: "місто Ташкент" },
    intro: {
      uz: "Toshkent — O'zbekistonning savdo poytaxti: Chorsu va Oloy bozorlaridan tortib Samarqand Darvoza, Compass va Next kabi yirik savdo markazlarigacha. Bu yerda oziq-ovqat do'konlari, kiyim-kechak butiklari, elektronika do'konlari va ko'p filialli tarmoqlar zich joylashgan — har biri tez kassa, aniq ombor va markazlashtirilgan hisobotga muhtoj. RAOS aynan shu sur'atga moslangan.",
      ru: "Ташкент — торговая столица Узбекистана: от базаров Чорсу и Алайский до крупных торговых центров вроде Samarqand Darvoza, Compass и Next. Здесь плотно сосредоточены продуктовые магазины, бутики одежды, точки электроники и сети с филиалами — каждому нужна быстрая касса, точный склад и централизованная отчётность. RAOS создан под этот темп.",
      en: "Tashkent is Uzbekistan's commercial capital — from the Chorsu and Oloy bazaars to large malls like Samarqand Darvoza, Compass and Next. Grocery shops, clothing boutiques, electronics stores and multi-branch chains are packed in densely, each needing a fast register, accurate stock and centralized reporting. RAOS is built for exactly this pace.",
      ar: "طشقند هي العاصمة التجارية لأوزبكستان — من أسواق تشورسو وألاي إلى مراكز تجارية كبرى مثل Samarqand Darvoza وCompass وNext. تتكدس هنا متاجر البقالة وبوتيكات الملابس ومحلات الإلكترونيات والسلاسل متعددة الفروع، وكل منها يحتاج كاشير سريع ومخزون دقيق وتقارير مركزية. RAOS مصمم لهذا الإيقاع.",
      uk: "Ташкент — торгова столиця Узбекистану: від базарів Чорсу та Алайський до великих торгових центрів на кшталт Samarqand Darvoza, Compass і Next. Тут щільно зосереджені продуктові магазини, бутіки одягу, точки електроніки та мережі з філіями — кожному потрібна швидка каса, точний склад і централізована звітність. RAOS створений під цей темп.",
    },
  },
  {
    slug: "samarqand",
    name: { uz: "Samarqand", ru: "Самарканд", en: "Samarkand", ar: "سمرقند", uk: "Самарканд" },
    region: { uz: "Samarqand viloyati", ru: "Самаркандская область", en: "Samarkand region", ar: "ولاية سمرقند", uk: "Самаркандська область" },
    intro: {
      uz: "Samarqand — Ipak yo'lining qadimiy savdo chorrahasi, bugun ham gavjum Siyob bozori va turistik oqim bilan yashaydigan shahar. Hunarmandchilik, non, quruq mevalar va sovg'a-suvenir savdosi yonida zamonaviy do'kon va kafelar tez rivojlanmoqda. Mavsumiy turist oqimida tez kassa va aniq qoldiq nazorati ayniqsa zarur — RAOS internetsiz ham to'xtamay ishlaydi.",
      ru: "Самарканд — древний торговый перекрёсток Великого шёлкового пути, и сегодня живущий многолюдным базаром Сиаб и потоком туристов. Рядом с ремёслами, лепёшками, сухофруктами и сувенирной торговлей быстро растут современные магазины и кафе. В сезонном турпотоке особенно важны быстрая касса и точный контроль остатков — RAOS работает без остановки даже без интернета.",
      en: "Samarkand is an ancient Silk Road trade crossroads, still alive today with the bustling Siyob bazaar and a steady tourist flow. Alongside crafts, bread, dried fruits and souvenir trade, modern shops and cafes are growing fast. In the seasonal tourist rush a fast register and accurate stock control matter most — RAOS keeps running even offline.",
      ar: "سمرقند مفترق طرق تجاري قديم على طريق الحرير، ولا تزال اليوم تعجّ بسوق سياب وتدفّق السياح. إلى جانب الحرف اليدوية والخبز والفواكه المجففة وتجارة الهدايا، تنمو المتاجر والمقاهي الحديثة بسرعة. في موسم السياحة، الكاشير السريع وضبط المخزون الدقيق هما الأهم — وRAOS يعمل دون توقف حتى بلا إنترنت.",
      uk: "Самарканд — давній торговий перехрестя Великого шовкового шляху, що й сьогодні живе багатолюдним базаром Сіаб і потоком туристів. Поряд із ремеслами, коржами, сухофруктами та сувенірною торгівлею швидко зростають сучасні магазини й кафе. У сезонному турпотоці особливо важливі швидка каса й точний контроль залишків — RAOS працює без зупинки навіть без інтернету.",
    },
  },
  {
    slug: "buxoro",
    name: { uz: "Buxoro", ru: "Бухара", en: "Bukhara", ar: "بخارى", uk: "Бухара" },
    region: { uz: "Buxoro viloyati", ru: "Бухарская область", en: "Bukhara region", ar: "ولاية بخارى", uk: "Бухарська область" },
    intro: {
      uz: "Buxoro — gumbazli savdo rastalari (Toqi Zargaron, Toqi Sarrofon) bilan mashhur, asrlar davomida savdogarlar shahri bo'lib kelgan joy. Zardo'zlik, gilam, mis buyumlar va sovg'a do'konlari yonida oziq-ovqat va kundalik savdo nuqtalari ham faol. Tor rastalardagi kichik do'konlar uchun sodda, tez va arzon POS kerak — RAOS bitta planshetda ham to'liq ishlaydi.",
      ru: "Бухара — город под куполами торговых рядов (Токи Заргарон, Токи Саррофон), веками бывший городом купцов. Рядом с золотым шитьём, коврами, изделиями из меди и сувенирными лавками активна и продуктовая, повседневная торговля. Маленьким магазинам в тесных рядах нужен простой, быстрый и недорогой POS — RAOS полноценно работает даже на одном планшете.",
      en: "Bukhara is famed for its domed trading rows (Toqi Zargaron, Toqi Sarrofon) and was a city of merchants for centuries. Alongside gold embroidery, carpets, copperware and souvenir stalls, grocery and everyday trade is busy too. Small shops in the narrow rows need a simple, fast, affordable POS — RAOS runs fully even on a single tablet.",
      ar: "تشتهر بخارى بصفوفها التجارية المقببة (توقي زرغرون، توقي ساروفون)، وكانت لقرون مدينة التجار. إلى جانب التطريز الذهبي والسجاد والنحاسيات ومحلات الهدايا، تنشط أيضاً تجارة البقالة اليومية. تحتاج المتاجر الصغيرة في الصفوف الضيقة إلى نظام POS بسيط وسريع وميسور — وRAOS يعمل بالكامل حتى على جهاز لوحي واحد.",
      uk: "Бухара славиться купольними торговими рядами (Токі Заргарон, Токі Сарофон) і століттями була містом купців. Поряд із золотим шиттям, килимами, виробами з міді та сувенірними крамницями активна й продуктова, повсякденна торгівля. Маленьким магазинам у тісних рядах потрібен простий, швидкий і недорогий POS — RAOS повноцінно працює навіть на одному планшеті.",
    },
  },
  {
    slug: "andijon",
    name: { uz: "Andijon", ru: "Андижан", en: "Andijan", ar: "أنديجان", uk: "Андижан" },
    region: { uz: "Andijon viloyati", ru: "Андижанская область", en: "Andijan region", ar: "ولاية أنديجان", uk: "Андижанська область" },
    intro: {
      uz: "Andijon — Farg'ona vodiysining yirik savdo va sanoat markazi, zich aholisi va keng dehqon bozorlari bilan ajralib turadi. Eski Shahar bozori, avtomobil va ehtiyot qism savdosi, oziq-ovqat va ulgurji do'konlar bu yerda doimiy aylanmada. Yuqori sotuv hajmida har bir mahsulot qoldig'ini real vaqtda ko'rish muhim — RAOS ombor va kassani bitta tizimda birlashtiradi.",
      ru: "Андижан — крупный торгово-промышленный центр Ферганской долины, выделяющийся плотным населением и обширными дехканскими базарами. Старогородской рынок, торговля автомобилями и запчастями, продукты и оптовые магазины здесь в постоянном обороте. При высоком объёме продаж важно видеть остаток каждого товара в реальном времени — RAOS объединяет склад и кассу в одной системе.",
      en: "Andijan is a major trade and industrial hub of the Fergana Valley, marked by a dense population and large farmers' bazaars. The Old City market, car and spare-parts trade, groceries and wholesale shops are in constant turnover here. With high sales volume, seeing each item's stock in real time matters — RAOS unites warehouse and register in one system.",
      ar: "أنديجان مركز تجاري وصناعي كبير في وادي فرغانة، يتميّز بكثافة سكانية وأسواق فلاحية واسعة. سوق المدينة القديمة وتجارة السيارات وقطع الغيار والبقالة ومتاجر الجملة في دوران مستمر هنا. مع حجم المبيعات الكبير، تتبع رصيد كل منتج لحظياً أمر مهم — وRAOS يوحّد المخزون والكاشير في نظام واحد.",
      uk: "Андижан — великий торгово-промисловий центр Ферганської долини, що вирізняється щільним населенням і просторими дехканськими базарами. Старомістський ринок, торгівля автомобілями та запчастинами, продукти й оптові магазини тут у постійному обороті. За високого обсягу продажів важливо бачити залишок кожного товару в реальному часі — RAOS поєднує склад і касу в одній системі.",
    },
  },
  {
    slug: "namangan",
    name: { uz: "Namangan", ru: "Наманган", en: "Namangan", ar: "نمنغان", uk: "Наманган" },
    region: { uz: "Namangan viloyati", ru: "Наманганская область", en: "Namangan region", ar: "ولاية نمنغان", uk: "Наманганська область" },
    intro: {
      uz: "Namangan — Farg'ona vodiysidagi yirik shaharlardan biri, kuchli to'qimachilik, tikuvchilik va dehqonchilik an'analari bilan tanilgan. Chorsu va Yangi bozorlardagi mato, kiyim va oziq-ovqat savdosi yonida ko'plab oilaviy do'konlar ishlaydi. O'lcham va rang variantlari ko'p bo'lgan kiyim do'konlari uchun aniq variant hisobi zarur — RAOS har bir variant qoldig'ini alohida yuritadi.",
      ru: "Наманган — один из крупнейших городов Ферганской долины, известный сильными традициями текстиля, пошива и сельского хозяйства. Рядом с торговлей тканями, одеждой и продуктами на базарах Чорсу и Янги работает множество семейных магазинов. Магазинам одежды с множеством размеров и цветов нужен точный учёт вариантов — RAOS ведёт остаток каждого варианта отдельно.",
      en: "Namangan is one of the largest cities of the Fergana Valley, known for strong textile, tailoring and farming traditions. Alongside fabric, clothing and grocery trade at the Chorsu and Yangi bazaars, many family-run shops operate. Clothing stores with many sizes and colors need accurate variant tracking — RAOS keeps each variant's stock separately.",
      ar: "نمنغان من أكبر مدن وادي فرغانة، معروفة بتقاليد قوية في النسيج والخياطة والزراعة. إلى جانب تجارة الأقمشة والملابس والبقالة في سوقي تشورسو ويانغي، تعمل متاجر عائلية كثيرة. تحتاج متاجر الملابس بمقاسات وألوان متعددة إلى تتبّع دقيق للخيارات — وRAOS يحتفظ برصيد كل خيار على حدة.",
      uk: "Наманган — одне з найбільших міст Ферганської долини, відоме сильними традиціями текстилю, пошиття та сільського господарства. Поряд із торгівлею тканинами, одягом і продуктами на базарах Чорсу та Янгі працює безліч сімейних магазинів. Магазинам одягу з безліччю розмірів і кольорів потрібен точний облік варіантів — RAOS веде залишок кожного варіанта окремо.",
    },
  },
  {
    slug: "fargona",
    name: { uz: "Farg'ona", ru: "Фергана", en: "Fergana", ar: "فرغانة", uk: "Фергана" },
    region: { uz: "Farg'ona viloyati", ru: "Ферганская область", en: "Fergana region", ar: "ولاية فرغانة", uk: "Ферганська область" },
    intro: {
      uz: "Farg'ona — keng, rejali ko'chalari bilan ajralib turadigan vodiy markazi, kuchli qishloq xo'jaligi va oziq-ovqat savdosi bilan yashaydi. Markaziy dehqon bozori, gullar, mevalar va kundalik tovarlar savdosi shaharning yuragida. Mevali-sabzavotli do'konlar uchun tez aylanma va kamomadni nazorat qilish muhim — RAOS kam qolgan mahsulot haqida o'z vaqtida ogohlantiradi.",
      ru: "Фергана — центр долины с широкими, регулярными улицами, живущий сильным сельским хозяйством и продуктовой торговлей. Центральный дехканский рынок, цветы, фрукты и повседневные товары — в самом сердце города. Овоще-фруктовым магазинам важны быстрый оборот и контроль недостачи — RAOS вовремя предупреждает о низком остатке.",
      en: "Fergana is a valley center distinguished by wide, regular streets, living off strong agriculture and grocery trade. The central farmers' market, flowers, fruit and everyday goods sit in the heart of the city. Produce shops need fast turnover and shrinkage control — RAOS warns in time about low stock.",
      ar: "فرغانة مركز الوادي بشوارعه الواسعة المنتظمة، تعيش على زراعة قوية وتجارة بقالة. السوق الفلاحي المركزي والزهور والفواكه والسلع اليومية في قلب المدينة. تحتاج متاجر الخضار والفواكه إلى دوران سريع وضبط للعجز — وRAOS ينبّه في الوقت المناسب عند انخفاض المخزون.",
      uk: "Фергана — центр долини з широкими, регулярними вулицями, що живе сильним сільським господарством і продуктовою торгівлею. Центральний дехканський ринок, квіти, фрукти та повсякденні товари — у самому серці міста. Овочево-фруктовим магазинам важливі швидкий оборот і контроль нестачі — RAOS вчасно попереджає про низький залишок.",
    },
  },
  {
    slug: "nukus",
    name: { uz: "Nukus", ru: "Нукус", en: "Nukus", ar: "نوكوس", uk: "Нукус" },
    region: { uz: "Qoraqalpog'iston Respublikasi", ru: "Республика Каракалпакстан", en: "Republic of Karakalpakstan", ar: "جمهورية قره قلباقستان", uk: "Республіка Каракалпакстан" },
    intro: {
      uz: "Nukus — Qoraqalpog'istonning poytaxti, mintaqaning savdo va ma'muriy markazi. Bu yerda do'konlar keng hududga tarqalgan aholiga xizmat qiladi, internet va elektr ta'minoti har doim ham barqaror emas. Aynan shu sharoitda offline-first POS hayotiy zarur — RAOS internet uzilsa ham kassani to'xtatmaydi, ma'lumotni lokal saqlaydi va ulanish tiklanganda sinxronlaydi.",
      ru: "Нукус — столица Каракалпакстана, торговый и административный центр региона. Здесь магазины обслуживают население, разбросанное на обширной территории, а интернет и электроснабжение не всегда стабильны. Именно в таких условиях offline-first POS жизненно необходим — RAOS не останавливает кассу при обрыве связи, хранит данные локально и синхронизирует при восстановлении.",
      en: "Nukus is the capital of Karakalpakstan and the region's trade and administrative center. Here shops serve a population spread across a vast territory, where internet and power supply aren't always stable. In exactly these conditions an offline-first POS is vital — RAOS doesn't stop the register when the connection drops, stores data locally and syncs when back online.",
      ar: "نوكوس عاصمة قره قلباقستان والمركز التجاري والإداري للإقليم. تخدم المتاجر هنا سكاناً منتشرين على مساحة شاسعة، حيث الإنترنت والكهرباء ليسا مستقرين دائماً. في مثل هذه الظروف يكون نظام POS الذي يعمل دون إنترنت ضرورياً — وRAOS لا يوقف الكاشير عند انقطاع الاتصال، ويحفظ البيانات محلياً ويزامنها عند عودة الاتصال.",
      uk: "Нукус — столиця Каракалпакстану, торговий та адміністративний центр регіону. Тут магазини обслуговують населення, розкидане на великій території, де інтернет та електропостачання не завжди стабільні. Саме в таких умовах offline-first POS життєво необхідний — RAOS не зупиняє касу при обриві зв'язку, зберігає дані локально й синхронізує при відновленні.",
    },
  },
  {
    slug: "qarshi",
    name: { uz: "Qarshi", ru: "Карши", en: "Qarshi", ar: "قارشي", uk: "Карші" },
    region: { uz: "Qashqadaryo viloyati", ru: "Кашкадарьинская область", en: "Qashqadaryo region", ar: "ولاية قشقداريا", uk: "Кашкадар'їнська область" },
    intro: {
      uz: "Qarshi — Qashqadaryo viloyatining markazi, qadimiy savdo yo'llari ustida joylashgan, gaz-energetika va qishloq xo'jaligi mintaqasi. Markaziy bozor, don-mahsulotlari, chorvachilik va kundalik savdo shahar iqtisodining asosi. Tez o'sayotgan do'konlar uchun bitta do'kondan filiallar tarmog'iga o'tish oson bo'lishi kerak — RAOS bir nechta filialni bitta dashboarddan boshqaradi.",
      ru: "Карши — центр Кашкадарьинской области, расположенный на древних торговых путях, регион газа, энергетики и сельского хозяйства. Центральный базар, зерновые, животноводство и повседневная торговля — основа экономики города. Растущим магазинам важно легко перейти от одной точки к сети филиалов — RAOS управляет несколькими филиалами из одного дашборда.",
      en: "Qarshi is the center of the Qashqadaryo region, set on ancient trade routes — a region of gas, energy and agriculture. The central bazaar, grain, livestock and everyday trade form the city's economy. Growing shops need an easy move from one store to a branch network — RAOS manages multiple branches from a single dashboard.",
      ar: "قارشي مركز ولاية قشقداريا، تقع على طرق تجارية قديمة، وهي منطقة غاز وطاقة وزراعة. السوق المركزي والحبوب والثروة الحيوانية والتجارة اليومية أساس اقتصاد المدينة. تحتاج المتاجر المتنامية إلى انتقال سهل من نقطة واحدة إلى شبكة فروع — وRAOS يدير عدة فروع من لوحة واحدة.",
      uk: "Карші — центр Кашкадар'їнської області, розташований на давніх торгових шляхах, регіон газу, енергетики та сільського господарства. Центральний базар, зернові, тваринництво й повсякденна торгівля — основа економіки міста. Зростаючим магазинам важливо легко перейти від однієї точки до мережі філій — RAOS керує кількома філіями з одного дашборда.",
    },
  },
  {
    slug: "jizzax",
    name: { uz: "Jizzax", ru: "Джизак", en: "Jizzakh", ar: "جيزاك", uk: "Джизак" },
    region: { uz: "Jizzax viloyati", ru: "Джизакская область", en: "Jizzakh region", ar: "ولاية جيزاك", uk: "Джизацька область" },
    intro: {
      uz: "Jizzax — Toshkent va Samarqand orasidagi muhim tranzit va savdo nuqtasi, paxtachilik va don yetishtirish mintaqasi. Trassa bo'yidagi do'konlar, markaziy bozor va yangi ochilayotgan savdo nuqtalari shahar savdosini shakllantiradi. Yo'l ustidagi yangi do'kon uchun tez ishga tushadigan, sodda POS kerak — RAOS sozlash va mahsulot bazasini ko'chirishni tez bajaradi.",
      ru: "Джизак — важный транзитный и торговый пункт между Ташкентом и Самаркандом, регион хлопководства и зерна. Придорожные магазины, центральный базар и новые торговые точки формируют торговлю города. Новому магазину у трассы нужен быстро запускаемый, простой POS — RAOS быстро выполняет настройку и перенос базы товаров.",
      en: "Jizzakh is an important transit and trade point between Tashkent and Samarkand, a region of cotton and grain. Roadside shops, the central bazaar and newly opening outlets shape the city's commerce. A new shop by the highway needs a quick-to-launch, simple POS — RAOS handles setup and product-base migration fast.",
      ar: "جيزاك نقطة عبور وتجارة مهمة بين طشقند وسمرقند، منطقة قطن وحبوب. المتاجر على جانب الطريق والسوق المركزي والمنافذ الجديدة تشكّل تجارة المدينة. يحتاج متجر جديد قرب الطريق السريع إلى نظام POS بسيط سريع التشغيل — وRAOS ينجز الإعداد ونقل قاعدة المنتجات بسرعة.",
      uk: "Джизак — важливий транзитний і торговий пункт між Ташкентом і Самаркандом, регіон бавовництва й зерна. Придорожні магазини, центральний базар і нові торгові точки формують торгівлю міста. Новому магазину біля траси потрібен швидкий у запуску, простий POS — RAOS швидко виконує налаштування й перенесення бази товарів.",
    },
  },
  {
    slug: "navoiy",
    name: { uz: "Navoiy", ru: "Навои", en: "Navoiy", ar: "نوائي", uk: "Навої" },
    region: { uz: "Navoiy viloyati", ru: "Навоийская область", en: "Navoiy region", ar: "ولاية نوائي", uk: "Навоїйська область" },
    intro: {
      uz: "Navoiy — yirik kon-metallurgiya va sanoat shahri, rejali qurilgan, barqaror ish haqi oluvchi aholisi bilan ajralib turadi. Bu yerda zamonaviy supermarketlar, kiyim va elektronika do'konlari, restoran-kafelar barqaror talab bilan ishlaydi. Barqaror sotuv oqimida sotuvchilar samaradorligi va kunlik foydani aniq ko'rish muhim — RAOS avtomatik hisobot va analitika beradi.",
      ru: "Навои — крупный горно-металлургический и промышленный город, отличающийся плановой застройкой и населением со стабильным доходом. Здесь со стабильным спросом работают современные супермаркеты, магазины одежды и электроники, рестораны и кафе. При устойчивом потоке продаж важно чётко видеть эффективность продавцов и дневную прибыль — RAOS даёт автоматические отчёты и аналитику.",
      en: "Navoiy is a major mining-metallurgical and industrial city, marked by planned development and a population with steady income. Here modern supermarkets, clothing and electronics stores, restaurants and cafes run on stable demand. With a steady sales flow, clearly seeing cashier performance and daily profit matters — RAOS provides automatic reports and analytics.",
      ar: "نوائي مدينة تعدينية ومعدنية وصناعية كبيرة، تتميّز بتخطيط عمراني وسكان بدخل ثابت. تعمل هنا بطلب مستقر متاجر سوبر ماركت حديثة ومتاجر ملابس وإلكترونيات ومطاعم ومقاهٍ. مع تدفق مبيعات ثابت، من المهم رؤية أداء البائعين والربح اليومي بوضوح — وRAOS يقدّم تقارير وتحليلات تلقائية.",
      uk: "Навої — велике гірничо-металургійне та промислове місто, що вирізняється плановою забудовою й населенням зі стабільним доходом. Тут зі стабільним попитом працюють сучасні супермаркети, магазини одягу та електроніки, ресторани й кафе. За стійкого потоку продажів важливо чітко бачити ефективність продавців і денний прибуток — RAOS дає автоматичні звіти й аналітику.",
    },
  },
  {
    slug: "urganch",
    name: { uz: "Urganch", ru: "Ургенч", en: "Urgench", ar: "أورغنش", uk: "Ургенч" },
    region: { uz: "Xorazm viloyati", ru: "Хорезмская область", en: "Khorezm region", ar: "ولاية خوارزم", uk: "Хорезмська область" },
    intro: {
      uz: "Urganch — Xorazm viloyatining markazi va Xiva turizmiga eshik bo'lgan shahar. Markaziy bozor, oziq-ovqat va kundalik savdo yonida turistlarga mo'ljallangan sovg'a va hunarmandchilik do'konlari faol. Mintaqa chekkasida internet uzilishlari bo'lib turadi, shuning uchun ishonchli, internetsiz ishlaydigan kassa kerak — RAOS ma'lumotni yo'qotmaydi va uzluksiz ishlaydi.",
      ru: "Ургенч — центр Хорезмской области и ворота к туризму Хивы. Рядом с центральным базаром, продуктовой и повседневной торговлей активны сувенирные и ремесленные магазины для туристов. На окраине региона случаются обрывы интернета, поэтому нужна надёжная касса, работающая без сети — RAOS не теряет данные и работает непрерывно.",
      en: "Urgench is the center of the Khorezm region and the gateway to Khiva's tourism. Alongside the central bazaar, grocery and everyday trade, souvenir and craft shops for tourists are active. On the region's edge internet outages happen, so a reliable register that works offline is needed — RAOS doesn't lose data and runs uninterrupted.",
      ar: "أورغنش مركز ولاية خوارزم وبوابة سياحة خيوة. إلى جانب السوق المركزي وتجارة البقالة اليومية، تنشط متاجر الهدايا والحرف للسياح. على أطراف الإقليم تحدث انقطاعات للإنترنت، لذا يلزم كاشير موثوق يعمل دون شبكة — وRAOS لا يفقد البيانات ويعمل دون انقطاع.",
      uk: "Ургенч — центр Хорезмської області та ворота до туризму Хіви. Поряд із центральним базаром, продуктовою й повсякденною торгівлею активні сувенірні та ремісничі магазини для туристів. На околиці регіону трапляються обриви інтернету, тож потрібна надійна каса, що працює без мережі — RAOS не втрачає дані й працює безперервно.",
    },
  },
  {
    slug: "termiz",
    name: { uz: "Termiz", ru: "Термез", en: "Termez", ar: "ترمذ", uk: "Термез" },
    region: { uz: "Surxondaryo viloyati", ru: "Сурхандарьинская область", en: "Surxondaryo region", ar: "ولاية سرخانداريا", uk: "Сурхандар'їнська область" },
    intro: {
      uz: "Termiz — O'zbekistonning eng janubidagi chegara shahri, Afg'oniston bilan savdo va tranzit oqimida muhim nuqta. Chegara savdosi, ulgurji bazalar, oziq-ovqat va import tovarlari shahar bozorini jonlantiradi. Ulgurji va chakana aralash sotuvda aniq qoldiq va naqd/karta/aralash to'lov hisobi muhim — RAOS turli to'lov turlarini va omborni bir joyda yuritadi.",
      ru: "Термез — самый южный приграничный город Узбекистана, важный пункт в торговле и транзите с Афганистаном. Приграничная торговля, оптовые базы, продукты и импортные товары оживляют рынок города. При смешанных оптово-розничных продажах важны точный остаток и учёт оплаты наличными/картой/смешанной — RAOS ведёт разные виды оплаты и склад в одном месте.",
      en: "Termez is Uzbekistan's southernmost border city, an important point in trade and transit with Afghanistan. Cross-border trade, wholesale depots, groceries and imported goods enliven the city's market. In mixed wholesale-retail sales, accurate stock and cash/card/split payment tracking matter — RAOS handles different payment types and inventory in one place.",
      ar: "ترمذ أقصى مدينة حدودية جنوب أوزبكستان، ونقطة مهمة في التجارة والعبور مع أفغانستان. التجارة الحدودية ومستودعات الجملة والبقالة والسلع المستوردة تنشّط سوق المدينة. في المبيعات المختلطة بالجملة والتجزئة، يهمّ المخزون الدقيق وتتبّع الدفع نقداً/بطاقة/مختلط — وRAOS يدير أنواع الدفع المختلفة والمخزون في مكان واحد.",
      uk: "Термез — найпівденніше прикордонне місто Узбекистану, важливий пункт у торгівлі й транзиті з Афганістаном. Прикордонна торгівля, оптові бази, продукти й імпортні товари пожвавлюють ринок міста. За змішаних оптово-роздрібних продажів важливі точний залишок і облік оплати готівкою/карткою/змішаної — RAOS веде різні види оплати й склад в одному місці.",
    },
  },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
