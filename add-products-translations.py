import json

translations = {
    'ru': {
        'title': 'Наши Продукты', 'subtitle': '8 продуктов — каждый эксперт в своей области',
        'raos_tagline': 'Программа торговли',
        'raos_desc': 'POS для любого магазина — склад, касса, клиент, отчёт в одной программе.',
        'ai_office_tagline': 'AI оркестратор',
        'ai_office_desc': 'Агенты 12 отделов — chat-first, 0 шагов регистрации.',
        'hamshirago_tagline': 'Домашняя медсестра + клиника',
        'hamshirago_desc': 'Вызов медсестры на дом + управление клиникой по всему Ташкенту.',
        'wewatch_tagline': 'Совместный просмотр видео',
        'wewatch_desc': 'Платформа для совместного онлайн-просмотра видео с друзьями.',
        'workcontrol_tagline': 'Контроль команды',
        'workcontrol_desc': 'Время, задачи, отчёты сотрудников — в одной панели.',
        'ventra_tagline': 'Анализ трендов',
        'ventra_desc': 'Тренды e-commerce, мониторинг конкурентов, отслеживание цен.',
        'ai_trade_tagline': 'Торговый бот',
        'ai_trade_desc': 'Автоматизированная торговля с AI — рыночные сигналы и портфель.',
        'savdo_tagline': 'No-code конструктор',
        'savdo_desc': 'Конструктор для создания торговых приложений (no-code).',
        'live': 'Работает', 'beta': 'Бета', 'soon': 'Скоро',
        'view_all': 'Смотреть все',
    },
    'en': {
        'title': 'Our Products', 'subtitle': '8 products — each an expert in its field',
        'raos_tagline': 'Trading software',
        'raos_desc': 'POS for any store — inventory, cashier, customer, reports in one app.',
        'ai_office_tagline': 'AI orchestrator',
        'ai_office_desc': '12 department agents — chat-first, 0-step signup.',
        'hamshirago_tagline': 'Home nurse + clinic',
        'hamshirago_desc': 'Home nurse calls + clinic management across Tashkent.',
        'wewatch_tagline': 'Watch videos together',
        'wewatch_desc': 'Platform for watching videos online together with friends.',
        'workcontrol_tagline': 'Team control',
        'workcontrol_desc': 'Employee time, tasks, reports — in one dashboard.',
        'ventra_tagline': 'Trend analysis',
        'ventra_desc': 'E-commerce trends, competitor monitoring, price tracking.',
        'ai_trade_tagline': 'Trading bot',
        'ai_trade_desc': 'AI-powered automated trading — market signals and portfolio.',
        'savdo_tagline': 'No-code builder',
        'savdo_desc': 'Builder for creating commerce apps (no-code).',
        'live': 'Live', 'beta': 'Beta', 'soon': 'Soon',
        'view_all': 'View all',
    },
    'ar': {
        'title': 'منتجاتنا', 'subtitle': '8 منتجات — كل واحد خبير في مجاله',
        'raos_tagline': 'برنامج المبيعات',
        'raos_desc': 'نقطة بيع لأي متجر — مخزون، صندوق، عميل، تقارير.',
        'ai_office_tagline': 'منسق الذكاء الاصطناعي',
        'ai_office_desc': 'وكلاء 12 قسماً.',
        'hamshirago_tagline': 'ممرضة منزلية + عيادة',
        'hamshirago_desc': 'استدعاء ممرضة منزلية في طشقند.',
        'wewatch_tagline': 'مشاهدة الفيديو معاً',
        'wewatch_desc': 'منصة لمشاهدة الفيديو مع الأصدقاء.',
        'workcontrol_tagline': 'إدارة الفريق',
        'workcontrol_desc': 'وقت الموظفين والمهام — في لوحة واحدة.',
        'ventra_tagline': 'تحليل الاتجاهات',
        'ventra_desc': 'اتجاهات التجارة الإلكترونية ومراقبة المنافسين.',
        'ai_trade_tagline': 'روبوت تداول',
        'ai_trade_desc': 'تداول آلي بالذكاء الاصطناعي.',
        'savdo_tagline': 'منشئ بدون كود',
        'savdo_desc': 'منشئ تطبيقات التجارة (بدون كود).',
        'live': 'نشط', 'beta': 'بيتا', 'soon': 'قريباً',
        'view_all': 'عرض الكل',
    },
    'uk': {
        'title': 'Наші Продукти', 'subtitle': '8 продуктів — кожен експерт у своїй галузі',
        'raos_tagline': 'Програма продажів',
        'raos_desc': 'POS для будь-якого магазину — склад, каса, клієнт, звіти.',
        'ai_office_tagline': 'AI оркестратор',
        'ai_office_desc': 'Агенти 12 відділів — chat-first.',
        'hamshirago_tagline': 'Домашня медсестра + клініка',
        'hamshirago_desc': 'Виклик медсестри додому в Ташкенті.',
        'wewatch_tagline': 'Спільний перегляд відео',
        'wewatch_desc': 'Платформа для спільного перегляду відео з друзями.',
        'workcontrol_tagline': 'Контроль команди',
        'workcontrol_desc': 'Час, завдання співробітників — в одній панелі.',
        'ventra_tagline': 'Аналіз трендів',
        'ventra_desc': 'Тренди e-commerce, моніторинг конкурентів.',
        'ai_trade_tagline': 'Торговий бот',
        'ai_trade_desc': 'AI-автоматизована торгівля.',
        'savdo_tagline': 'No-code конструктор',
        'savdo_desc': 'Конструктор додатків для торгівлі (no-code).',
        'live': 'Працює', 'beta': 'Бета', 'soon': 'Скоро',
        'view_all': 'Дивитись усі',
    },
}

def build_products(tr):
    return {
        'title': tr['title'],
        'subtitle': tr['subtitle'],
        'raos': {'name': 'RAOS', 'tagline': tr['raos_tagline'], 'description': tr['raos_desc'], 'status': 'Live', 'division': 'Systems', 'url': 'https://raos.uz'},
        'ai_office': {'name': 'AI Office', 'tagline': tr['ai_office_tagline'], 'description': tr['ai_office_desc'], 'status': 'Beta', 'division': 'AI', 'url': '#'},
        'hamshirago': {'name': 'Carevy', 'tagline': tr['hamshirago_tagline'], 'description': tr['hamshirago_desc'], 'status': 'Beta', 'division': 'Labs', 'url': 'https://hamshirago.uz'},
        'wewatch': {'name': 'WeWatch', 'tagline': tr['wewatch_tagline'], 'description': tr['wewatch_desc'], 'status': 'Soon', 'division': 'Labs', 'url': '#'},
        'workcontrol': {'name': 'WorkControl', 'tagline': tr['workcontrol_tagline'], 'description': tr['workcontrol_desc'], 'status': 'Live', 'division': 'Systems', 'url': '#'},
        'ventra': {'name': 'Ventra', 'tagline': tr['ventra_tagline'], 'description': tr['ventra_desc'], 'status': 'Soon', 'division': 'Labs', 'url': '#'},
        'ai_trade': {'name': 'AI-Trade', 'tagline': tr['ai_trade_tagline'], 'description': tr['ai_trade_desc'], 'status': 'Beta', 'division': 'AI', 'url': '#'},
        'savdo_builder': {'name': 'Savdo-Builder', 'tagline': tr['savdo_tagline'], 'description': tr['savdo_desc'], 'status': 'Soon', 'division': 'Labs', 'url': '#'},
        'status_labels': {'Live': tr['live'], 'Beta': tr['beta'], 'Soon': tr['soon']},
        'view_all': tr['view_all'],
    }

for lang, tr in translations.items():
    f = f'C:/Users/User/Desktop/tezcode-landing/src/messages/{lang}.json'
    with open(f, 'r', encoding='utf-8') as fp:
        data = json.load(fp)
    new_data = {}
    inserted = False
    for k, v in data.items():
        if k == 'solutions' and not inserted:
            new_data['products'] = build_products(tr)
            inserted = True
        new_data[k] = v
    if not inserted:
        new_data['products'] = build_products(tr)
    with open(f, 'w', encoding='utf-8') as fp:
        json.dump(new_data, fp, ensure_ascii=False, indent=2)
    print(f'{lang}: products added')
