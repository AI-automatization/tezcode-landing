import json

translations = {
    'ru': {
        'trust': '✓ 14 дней бесплатно · ✓ Карта не требуется · ✓ Начните за 5 минут',
        'stat_clients': 'Клиент', 'stat_years': 'Лет опыта', 'stat_sectors': 'Отрасль',
        'cta_primary': 'Бесплатное демо', 'cta_secondary': 'Связаться с нами',
        'testimonials_title': 'Клиенты о нас',
        'testimonials_subtitle': 'Реальные результаты, реальные предприниматели',
        'dilfuza_quote': 'После подключения RAOS экономим 800 000 сум в месяц. Касса точная, склад автоматический.',
        'aziz_quote': 'Раньше платил 2 млн бухгалтеру. Теперь с RAOS сам делаю отчёты.',
        'munira_quote': 'С Carevy очередь в клинике на 40% быстрее. Пациенты благодарят.',
        'floating_tg': 'Написать в Telegram', 'floating_wa': 'Написать в WhatsApp', 'floating_label': 'Связаться с нами',
    },
    'en': {
        'trust': '✓ 14 days free · ✓ No credit card · ✓ Start in 5 minutes',
        'stat_clients': 'Clients', 'stat_years': 'Years', 'stat_sectors': 'Sectors',
        'cta_primary': 'Get free demo', 'cta_secondary': 'Contact us',
        'testimonials_title': 'Customer stories',
        'testimonials_subtitle': 'Real results from real entrepreneurs',
        'dilfuza_quote': 'After RAOS we save 800K UZS every month. Cashier accurate, inventory automatic.',
        'aziz_quote': 'I used to pay 2M to an accountant. Now with RAOS I do my own reports.',
        'munira_quote': 'With Carevy clinic queue is 40% faster. Patients are grateful.',
        'floating_tg': 'Message on Telegram', 'floating_wa': 'Message on WhatsApp', 'floating_label': 'Contact us',
    },
    'ar': {
        'trust': '✓ 14 يومًا مجانًا · ✓ بطاقة غير مطلوبة · ✓ ابدأ في 5 دقائق',
        'stat_clients': 'عميل', 'stat_years': 'سنوات', 'stat_sectors': 'قطاع',
        'cta_primary': 'احصل على عرض مجاني', 'cta_secondary': 'اتصل بنا',
        'testimonials_title': 'عملاؤنا عنا',
        'testimonials_subtitle': 'نتائج حقيقية من رواد أعمال حقيقيين',
        'dilfuza_quote': 'بعد ربط RAOS نوفر 800 ألف سوم شهريًا. الكاشير دقيق والمخزون تلقائي.',
        'aziz_quote': 'كنت أدفع 2 مليون للمحاسب. الآن مع RAOS أقوم بالتقارير بنفسي.',
        'munira_quote': 'مع Carevy طابور العيادة أسرع بنسبة 40%. المرضى يشكروننا.',
        'floating_tg': 'الكتابة عبر Telegram', 'floating_wa': 'الكتابة عبر WhatsApp', 'floating_label': 'اتصل بنا',
    },
    'uk': {
        'trust': '✓ 14 днів безкоштовно · ✓ Картка не потрібна · ✓ Почніть за 5 хвилин',
        'stat_clients': 'Клієнтів', 'stat_years': 'Років', 'stat_sectors': 'Галузь',
        'cta_primary': 'Безкоштовне демо', 'cta_secondary': "Зв'язатися з нами",
        'testimonials_title': 'Клієнти про нас',
        'testimonials_subtitle': 'Реальні результати від реальних підприємців',
        'dilfuza_quote': 'Після RAOS економимо 800 тис. сум на місяць. Каса точна, склад автоматичний.',
        'aziz_quote': 'Раніше платив 2 млн бухгалтеру. Тепер з RAOS сам роблю звіти.',
        'munira_quote': 'З Carevy черга в клініці на 40% швидша. Пацієнти вдячні.',
        'floating_tg': 'Написати в Telegram', 'floating_wa': 'Написати у WhatsApp', 'floating_label': "Зв'язатися",
    },
}

for lang, tr in translations.items():
    f = f'C:/Users/User/Desktop/tezcode-landing/src/messages/{lang}.json'
    with open(f, 'r', encoding='utf-8') as fp:
        data = json.load(fp)

    data['hero']['trust'] = tr['trust']
    data['hero']['stat_clients'] = tr['stat_clients']
    data['hero']['stat_years'] = tr['stat_years']
    data['hero']['stat_sectors'] = tr['stat_sectors']
    data['hero']['cta_primary'] = tr['cta_primary']
    data['hero']['cta_secondary'] = tr['cta_secondary']

    data['testimonials'] = {
        'title': tr['testimonials_title'],
        'subtitle': tr['testimonials_subtitle'],
        'items': {
            'dilfuza': {
                'name': 'Dilfuza X.' if lang != 'ar' else 'دلفوزة',
                'role': data['team']['members']['firdavs'].get('role', 'Owner') if False else (
                    'Продуктовый магазин · Юнусабад' if lang == 'ru' else
                    'Grocery store · Yunusabad' if lang == 'en' else
                    'متجر بقالة · يونوس آباد' if lang == 'ar' else
                    'Продуктовий магазин · Юнусабад'),
                'quote': tr['dilfuza_quote'],
                'metric': '+800K' if lang != 'ar' else '+٨٠٠ ألف',
            },
            'aziz': {
                'name': 'Aziz aka' if lang != 'ar' else 'عزيز',
                'role': (
                    'Электроника · Чиланзар' if lang == 'ru' else
                    'Electronics store · Chilanzar' if lang == 'en' else
                    'متجر إلكترونيات · جيلانزار' if lang == 'ar' else
                    'Електроніка · Чиланзар'),
                'quote': tr['aziz_quote'],
                'metric': '−2M' if lang != 'ar' else '−٢ مليون',
            },
            'munira': {
                'name': 'Dr. Munira' if lang != 'ar' else 'د. منيرة',
                'role': (
                    'Директор клиники · Мирзо Улугбек' if lang == 'ru' else
                    'Clinic director · Mirzo Ulugbek' if lang == 'en' else
                    'مديرة العيادة · ميرزو أولوغبيك' if lang == 'ar' else
                    'Директор клініки · Мірзо Улугбек'),
                'quote': tr['munira_quote'],
                'metric': '40%' if lang != 'ar' else '٪٤٠',
            },
        },
    }

    data['floating'] = {
        'telegram': tr['floating_tg'],
        'whatsapp': tr['floating_wa'],
        'label': tr['floating_label'],
    }

    with open(f, 'w', encoding='utf-8') as fp:
        json.dump(data, fp, ensure_ascii=False, indent=2)
    print(f'{lang}: testimonials + floating + hero new keys added')
