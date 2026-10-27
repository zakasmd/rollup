/**
 * RollUp.az - Main Application Logic (Neo-Futuristic Architecture)
 * High-Contrast, Educational Specs, Multi-Language, Interactive Gallery
 */

// ==========================================
// 1. TRANSLATIONS (i18n) DICTIONARY
// ==========================================
const translations = {
  az: {
    // Header
    nav_products: "Məhsullar",
    nav_anatomy: "Necə İşləyir?",
    nav_guide: "Müqayisə",
    nav_calc: "Kalkulyator",
    nav_portfolio: "Portfolio",
    portfolio_title: "Portfolio",
    nav_faq: "FAQ",
    nav_contact: "Əlaqə",
    btn_fast_order: "⚡ Sürətli Sifariş",

    // Hero (Sales-Oriented)
    hero_title_1: "SƏRGİ VƏ TƏDBİRLƏRDƏ SATIŞINIZI ARTIRIN —",
    hero_title_2: "BİRBAŞA İSTEHSALÇIDAN ROLL-UP STENDLƏR",
    hero_desc: "Müştərilərinizin diqqətini dərhal cəlb edən, 24 saata hazırlanan və 6 ay rəsmi zəmanətli portativ stendlər. Bu gün sifariş edin — istehsalçı qiymətinə yüksək keyfiyyət və xüsusi həcm endirimi qazanın!",
    btn_calc_quote: "⚡ Qiymət Hesabla",
    btn_wa_chat: "💬 WhatsApp ilə Sürətli Təklif",
    btn_view_catalog: "📐 Kataloqa Bax",
    stat_clients: "1,200+ Razı Şirkət",
    stat_warranty: "6 Ay Rəsmi Zəmanət",
    stat_delivery: "24 Saat Çatdırılma",

    // Terminal
    terminal_badge: "⚡ Sürətli Təklif & Sifariş Modulu",
    terminal_title: "1 Dəqiqəyə Sifarişinizi Konfiqurasiya Edin",
    terminal_subtitle: "Stand növünü və parametrləri seçin, bir toxunuşla birbaşa istehsalçıya sifariş və ya qiymət sorğusu göndərin.",
    term_step_product: "1. Məhsul Növü",
    term_hint_select: "Toxunaraq seçin",
    term_step_design: "2. Dizayn Vəziyyəti",
    term_design_ready: "Hazır Çap Faylım Var",
    term_design_need: "Dizayn Hazırlanmalıdır",
    term_step_urgency: "3. Təhvil Müddəti",
    term_urgency_24h: "Ekspress (24 saata hazır)",
    term_urgency_std: "Standart (2-3 iş günü)",
    term_qty_label: "Sifariş Sayı",
    term_name_label: "Adınız və ya Şirkətiniz",
    term_summary_title: "Seçilmiş Konfiqurasiya:",
    term_btn_wa: "WhatsApp ilə 1 Toxunuşla Sifariş Et",
    term_btn_submit: "Sorğu Göndər",

    // Anatomy Section
    anatomy_title: "Roll-Up Standın Quruluşu və İş Mexanizmi",
    anatomy_subtitle: "Keyfiyyətli stend necə olmalıdır? Hər bir detalın məqsədini 1 dəqiqədə öyrənin",
    anat_1_t: "1. Üst Sıxıcı Profil (Snap-Rail)",
    anat_1_d: "Baneri yuxarıdan dəmirtək möhkəm saxlayır, heç bir yapışqan tələb etmir və plakatın sallanmasının qarşısını alır.",
    anat_2_t: "2. Gücləndirilmiş Yay Mexanizmi",
    anat_2_d: "Baner alüminium kassetin içinə avtomatik və səlis bükülür. Daşınma zamanı plakat cızılmır və tozlanmır.",
    anat_3_t: "3. 1440 DPI Solmayan Çap",
    anat_3_d: "Xüsusi qoxusuz eko-solvent və UV boyalar sayəsində rənglər günəş altında solmur və parlamır.",
    anat_4_t: "4. Qalındivarlı Alüminium Gövdə",
    anat_4_d: "Ağırlaşdırılmış alt baza stendin qapalı və sərgi məkanlarında dik və möhkəm dayanmasını təmin edir.",

    // Comparison
    guide_title: "Roll-up Seçim Bələdçisi: Hansı Model Sizə Lazımdır?",
    guide_subtitle: "Roll-Up Silver, Roll-Up Premium və X-Banner modellərinin şəffaf müqayisəsi",
    guide_th_param: "Göstərici",
    guide_th_silver: "Roll-Up Silver (Standart)",
    guide_th_premium: "Roll-Up Premium (Lüks)",
    guide_th_xbanner: "X-Banner (Spider)",
    guide_row_base: "Baza Mexanizmi",
    guide_row_base_sil: "İki fırlanan alüminium ayaq",
    guide_row_base_prm: "Ayaqsız, ağır damla formalı baza",
    guide_row_base_x: "X formalı karbon lifli çubuqlar",
    guide_row_weight: "Çəki və Dözümlülük",
    guide_row_weight_sil: "2.2 kq (Orta sabitlik)",
    guide_row_weight_prm: "4.5 kq (Yüksək sabitlik)",
    guide_row_weight_x: "1.1 kq (Yüngül, qapalı məkan)",
    guide_row_setup: "Quraşdırma Vaxtı",
    guide_row_setup_sil: "60 saniyə",
    guide_row_setup_prm: "30 saniyə (çox asan)",
    guide_row_setup_x: "45 saniyə",
    guide_row_usage: "Tövsiyə Sahəsi",
    guide_row_usage_sil: "Seminarlar, sərgi pavilyonları, təqdimatlar",
    guide_row_usage_prm: "VIP tədbirlər, banklar, dövlət zalları",
    guide_row_usage_x: "Plakatı tez-tez dəyişən mağaza aksiyaları",
    guide_row_price: "Qiymət",

    // Catalog
    catalog_title: "Məhsul Kataloqu",
    catalog_subtitle: "Dəqiq texniki parametrlər, çoxsaylı şəkillər və birbaşa sifariş",
    cat_all: "Bütün Məhsullar",
    cat_rollup: "Roll-Up Standlar",
    cat_popup: "Pop-Up Divarlar",
    cat_promo: "Promo Masalar",
    cat_frames: "Çərçivə və Dirəklər",
    cat_outdoor: "Bayraqlar",
    search_placeholder: "Məhsul və ya ölçü axtarın...",
    btn_detail_modal: "Ətraflı İncələ",
    btn_order_wa: "WhatsApp-la Al",

    // Modal
    modal_size_label: "Ölçü Seçimi:",
    modal_specs_title: "Texniki Göstəricilər:",
    modal_spec_material: "Karkas Gövdəsi",
    modal_spec_weight: "Çəki",
    modal_spec_setup: "Quraşdırma Vaxtı",
    modal_spec_print: "Çap Növü",
    modal_spec_warranty: "Zəmanət",
    modal_purpose_title: "İstifadə Sahəsi:",
    modal_why_title: "Niyə Bu Modeli Seçməlisiniz?",
    modal_btn_wa: "💬 Bu Modeli WhatsApp ilə Sifariş Et",
    modal_btn_calc: "Kalkulyatorda Fərdiləşdir",
    modal_stock: "Stokda var — 24 saatda hazır",

    // Calculator
    calc_title: "Onlayn Qiymət Kalkulyatoru",
    calc_subtitle: "Ölçü, material və say seçərək real məbləği dərhal hesablayın",
    calc_prod_label: "Məhsul Növü",
    calc_size_label: "Ölçü",
    calc_mat_label: "Baner Materialı",
    calc_mat_std: "Standart Vinil (440 q/m²)",
    calc_mat_prm: "Döküm Premium Vinil (510 q/m²)",
    calc_mat_dbl: "İkitərəfli Blockout Parça",
    calc_qty_label: "Say (Ədəd)",
    calc_opt_design: "Dizayn xidməti lazımdır (+25 AZN)",
    calc_opt_delivery: "Şəhərdaxili çatdırılma (+8 AZN)",
    calc_total_label: "Yekun Məbləğ:",
    calc_discount_badge: "Həcm Endirimi Tətbiq Edildi!",
    calc_btn_order: "Sifarişi WhatsApp-a Göndər →",
    calc_note: "* 5+ ədədə 5%, 10+ ədədə 10% avtomatik həcm endirimi tətbiq olunur.",

    // FAQ
    faq_title: "Tez-Tez Verilən Suallar",
    faq_1_q: "Roll-up sifarişi nə qədər vaxta hazır olur?",
    faq_1_a: "Standart sifarişlər 24 saat ərzində təhvil verilir. Təcili hallarda eyni gün ərzində ekspress çap xidmətimiz mövcuddur.",
    faq_2_q: "Hazır dizayn faylım yoxdursa, necə edək?",
    faq_2_a: "Peşəkar qrafik dizaynerlərimiz sizin loqo və məlumatlarınız əsasında standartlara uyğun maketi qısa müddətdə hazırlayır.",
    faq_3_q: "Mexanizmə zəmanət verilirmi?",
    faq_3_a: "Bəli! Bütün alüminium karkaslarımıza 6 ay rəsmi zəmanət verilir.",
    faq_4_q: "Sonradan həmin karkasda baner şəklini dəyişmək mümkündürmü?",
    faq_4_a: "Bəli! Karkası saxlayaraq sadəcə yeni çap olunmuş şəkil sifariş verə bilərsiniz, bu da sizə 50%-dən çox qənaət qazandırır.",

    // Contact
    contact_title: "Bizimlə Əlaqə",
    contact_subtitle: "15 dəqiqə ərzində suallarınızı cavablandırmağa hazırıq",
    form_name: "Adınız və Soyadınız",
    form_phone: "Telefon Nömrəniz",
    form_product: "Maraqlandığınız Məhsul",
    form_message: "Əlavə qeydlər",
    btn_form_submit: "Sorğu Göndər",
    btn_form_wa: "Birbaşa WhatsApp-da Yaz",

    req_title: "Fayl Hazırlıq Qaydaları",
    req_1: "Formatlar: PDF, AI, TIFF, PSD və ya yüksək keyfiyyətli PNG",
    req_2: "Rəng Rejimi: Yalnız CMYK (RGB fayllarda rəng fərqi ola bilər)",
    req_3: "Həllolma (DPI): 1:1 miqyasda 150-300 DPI",
    req_4: "Kəsim sahəsi (Bleed): Hər tərəfdən 5 mm, alt tərəfdən roll-up üçün 10 sm",

    // Footer
    footer_desc: "Azərbaycanın etibarlı portativ reklam və sərgi sistemləri istehsalçısı.",
    footer_rights: "Bütün hüquqlar qorunur."
  },

  ru: {
    nav_products: "Продукция",
    nav_anatomy: "Как это работает?",
    nav_guide: "Сравнение",
    nav_calc: "Калькулятор",
    nav_portfolio: "Портфолио",
    portfolio_title: "Портфолио",
    nav_faq: "FAQ",
    nav_contact: "Контакты",
    btn_fast_order: "⚡ Быстрый Заказ",

    // Hero (Sales-Oriented)
    hero_title_1: "УВЕЛИЧЬТЕ ПРОДАЖИ НА ВЫСТАВКАХ И МЕРОПРИЯТИЯХ —",
    hero_title_2: "РОЛЛАП СТЕНДЫ НАПРЯМУЮ ОТ ПРОИЗВОДИТЕЛЯ",
    hero_desc: "Привлекайте клиентов с первых секунд. Изготовление за 24 часа, усиленный алюминиевый каркас и 6 месяцев гарантии. Закажите сегодня по цене производителя с оптовой скидкой!",
    btn_calc_quote: "⚡ Рассчитать Стоимость",
    btn_wa_chat: "💬 Экспресс-Запрос в WhatsApp",
    btn_view_catalog: "📐 Каталог Стендов",
    stat_clients: "1,200+ Клиентов",
    stat_warranty: "6 Месяцев Гарантии",
    stat_delivery: "Доставка за 24ч",

    // Terminal
    terminal_badge: "⚡ Экспресс Модуль Заказа и Расчета",
    terminal_title: "Сконфигурируйте Заказ за 1 Минуту",
    terminal_subtitle: "Выберите стенд и параметры, отправьте заявку или запрос цены напрямую производителю в 1 клик.",
    term_step_product: "1. Тип Стенда",
    term_hint_select: "Выберите кликом",
    term_step_design: "2. Макет Дизайна",
    term_design_ready: "Есть готовый макет",
    term_design_need: "Требуется разработка дизайна",
    term_step_urgency: "3. Срок Готовности",
    term_urgency_24h: "Экспресс (за 24 часа)",
    term_urgency_std: "Стандарт (2-3 дня)",
    term_qty_label: "Количество",
    term_name_label: "Ваше Имя или Компания",
    term_summary_title: "Выбранная конфигурация:",
    term_btn_wa: "Заказать в 1 Клик через WhatsApp",
    term_btn_submit: "Отправить Заявку",

    anatomy_title: "Анатомия и Механизм Работы Ролл-Апа",
    anatomy_subtitle: "Из чего состоит качественный стенд? Узнайте назначение каждой детали за 1 минуту",
    anat_1_t: "1. Зажимной Клик-Профиль",
    anat_1_d: "Надежно держит баннер сверху без клея и не дает полотну провисать.",
    anat_2_t: "2. Усиленный Пружинный Механизм",
    anat_2_d: "Баннер плавно скручивается внутрь алюминиевого корпуса, не царапаясь при перевозке.",
    anat_3_t: "3. Стойкая 1440 DPI UV-Печать",
    anat_3_d: "Сочные краски без запаха, устойчивые к выгоранию на солнце и влаге.",
    anat_4_t: "4. Толстостенный Корпус",
    anat_4_d: "Утяжеленная база обеспечивает идеальную устойчивость без раскачивания.",

    guide_title: "Гид по Выбору Ролл-Апа: Какая Модель Нужна Вам?",
    guide_subtitle: "Наглядное сравнение моделей Roll-Up Silver, Roll-Up Premium и X-Banner",
    guide_th_param: "Параметр",
    guide_th_silver: "Ролл-ап Silver (Стандарт)",
    guide_th_premium: "Ролл-ап Premium (Люкс)",
    guide_th_xbanner: "X-Баннер (Паук)",
    guide_row_base: "Конструкция основания",
    guide_row_base_sil: "Две поворотные алюминиевые ножки",
    guide_row_base_prm: "Без ножек, утяжеленная каплевидная база",
    guide_row_base_x: "Гибкие углепластиковые прутья",
    guide_row_weight: "Вес и устойчивость",
    guide_row_weight_sil: "2.2 кг (Средняя устойчивость)",
    guide_row_weight_prm: "4.5 кг (Высокая устойчивость)",
    guide_row_weight_x: "1.1 кг (Легкий, закрытые залы)",
    guide_row_setup: "Время сборки",
    guide_row_setup_sil: "60 секунд",
    guide_row_setup_prm: "30 секунд (очень просто)",
    guide_row_setup_x: "45 секунд",
    guide_row_usage: "Где использовать",
    guide_row_usage_sil: "Семинары, выставки, презентации",
    guide_row_usage_prm: "VIP-зоны, банки, официальные форумы",
    guide_row_usage_x: "Частая смена акций в магазинах",
    guide_row_price: "Цена",

    catalog_title: "Каталог Продукции",
    catalog_subtitle: "Точные параметры, много фото и удобный заказ",
    cat_all: "Вся Продукция",
    cat_rollup: "Ролл-ап Стенды",
    cat_popup: "Поп-ап Стены",
    cat_promo: "Промо-столы",
    cat_frames: "Рамки и Стойки",
    cat_outdoor: "Флаги",
    search_placeholder: "Поиск по названию или размеру...",
    btn_detail_modal: "Подробнее",
    btn_order_wa: "Заказ в WhatsApp",

    modal_size_label: "Выберите Размер:",
    modal_specs_title: "Технические Данные:",
    modal_spec_material: "Материал каркаса",
    modal_spec_weight: "Вес",
    modal_spec_setup: "Время сборки",
    modal_spec_print: "Тип печати",
    modal_spec_warranty: "Гарантия",
    modal_purpose_title: "Область применения:",
    modal_why_title: "Преимущества модели:",
    modal_btn_wa: "💬 Заказать в WhatsApp",
    modal_btn_calc: "Настроить в Калькуляторе",
    modal_stock: "В наличии — готовность за 24 часа",

    calc_title: "Онлайн Калькулятор Цен",
    calc_subtitle: "Точный расчет стоимости стенда под ваш тираж",
    calc_prod_label: "Тип продукции",
    calc_size_label: "Размер",
    calc_mat_label: "Материал полотна",
    calc_mat_std: "Стандартный винил (440 г/м²)",
    calc_mat_prm: "Премиум литой винил (510 г/м²)",
    calc_mat_dbl: "Двусторонний Blockout",
    calc_qty_label: "Количество (шт)",
    calc_opt_design: "Нужен макет дизайна (+25 AZN)",
    calc_opt_delivery: "Доставка по Баку (+8 AZN)",
    calc_total_label: "Итоговая сумма:",
    calc_discount_badge: "Скидка за объем применена!",
    calc_btn_order: "Отправить заказ в WhatsApp →",
    calc_note: "* Скидка 5% от 5 шт, скидка 10% от 10 шт.",

    faq_title: "Часто Задаваемые Вопросы",
    faq_1_q: "Сколько времени занимает изготовление?",
    faq_1_a: "Стандартные заказы готовы за 24 часа. Возможна срочная экспресс-печать в день заказа.",
    faq_2_q: "Что делать, если нет файла дизайна?",
    faq_2_a: "Наши дизайнеры разработают макет под ключ по вашим требованиям.",
    faq_3_q: "Предоставляется ли гарантия?",
    faq_3_a: "Да, на все алюминиевые каркасы действует гарантия 6 месяцев.",
    faq_4_q: "Можно ли заменить баннер в этом же корпусе?",
    faq_4_a: "Да! Каркас многоразовый — вы можете просто заказать перепечатку полотна с экономией более 50%.",

    contact_title: "Связаться с Нами",
    contact_subtitle: "Ответим на любые вопросы в течение 15 минут",
    form_name: "Ваше Имя",
    form_phone: "Номер телефона",
    form_product: "Интересующий товар",
    form_message: "Примечания",
    btn_form_submit: "Отправить Запрос",
    btn_form_wa: "Написать в WhatsApp",

    req_title: "Требования к Макетам",
    req_1: "Форматы: PDF, AI, TIFF, PSD или качественный PNG",
    req_2: "Цветовой профиль: Только CMYK (в RGB возможны искажения цвета)",
    req_3: "Разрешение (DPI): В масштабе 1:1 от 150 до 300 DPI",
    req_4: "Вылеты под обрез: 5 мм со всех сторон, снизу 10 см для роллапа",

    footer_desc: "Надежный производитель мобильных выставочных систем в Баку.",
    footer_rights: "Все права защищены."
  },

  en: {
    nav_products: "Products",
    nav_anatomy: "How it Works",
    nav_guide: "Comparison",
    nav_calc: "Calculator",
    nav_portfolio: "Portfolio",
    portfolio_title: "Portfolio",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    btn_fast_order: "⚡ Fast Order",

    // Hero (Sales-Oriented)
    hero_title_1: "BOOST YOUR SALES AT EXPOS & EVENTS —",
    hero_title_2: "ROLL-UP BANNERS DIRECT FROM MAKER",
    hero_desc: "Capture client attention instantly. 24-hour express production, heavy-duty aluminum hardware, and 6-month warranty. Order today at manufacturer prices with exclusive volume discounts!",
    btn_calc_quote: "⚡ Calculate Price",
    btn_wa_chat: "💬 Instant WhatsApp Quote",
    btn_view_catalog: "📐 Browse Catalog",
    stat_clients: "1,200+ Clients",
    stat_warranty: "6-Month Warranty",
    stat_delivery: "24h Turnaround",

    // Terminal
    terminal_badge: "⚡ Quick Quote & Order Terminal",
    terminal_title: "Configure Your Order in 1 Minute",
    terminal_subtitle: "Select display hardware and parameters, dispatch your order or quote inquiry directly to the maker in 1 click.",
    term_step_product: "1. Hardware Model",
    term_hint_select: "Tap to select",
    term_step_design: "2. Graphic Design",
    term_design_ready: "Print file ready",
    term_design_need: "Design service needed",
    term_step_urgency: "3. Turnaround Time",
    term_urgency_24h: "Express (within 24h)",
    term_urgency_std: "Standard (2-3 days)",
    term_qty_label: "Quantity",
    term_name_label: "Your Name or Company",
    term_summary_title: "Selected Configuration:",
    term_btn_wa: "1-Click Order via WhatsApp",
    term_btn_submit: "Submit Request",

    anatomy_title: "Roll-Up Anatomy & Internal Mechanism",
    anatomy_subtitle: "What makes a premium display stand? Learn the purpose of each component in 1 minute",
    anat_1_t: "1. Top Snap-Rail Profile",
    anat_1_d: "Firmly grips the graphic with zero adhesives, keeping the banner taut and perfectly aligned.",
    anat_2_t: "2. Heavy-Duty Spring Cartridge",
    anat_2_d: "Smoothly retracts the banner into the aluminum cassette, preventing scratches during transit.",
    anat_3_t: "3. 1440 DPI Fade-Proof Print",
    anat_3_d: "Odorless eco-solvent and UV inks ensure vivid contrast without sun fading or spotlight glare.",
    anat_4_t: "4. Thick Aluminum Chassis",
    anat_4_d: "Weighted base prevents rocking and ensures rock-solid stability in high-traffic halls.",

    guide_title: "Roll-Up Buyer's Guide: Which Model Do You Need?",
    guide_subtitle: "Honest side-by-side comparison of Roll-Up Silver, Roll-Up Premium, and X-Banner",
    guide_th_param: "Specification",
    guide_th_silver: "Roll-Up Silver (Standard)",
    guide_th_premium: "Roll-Up Premium (Luxury)",
    guide_th_xbanner: "X-Banner (Spider)",
    guide_row_base: "Base Footprint",
    guide_row_base_sil: "Twin swivel-out aluminum feet",
    guide_row_base_prm: "Footless, weighted teardrop base",
    guide_row_base_x: "X-shaped carbon fiber arms",
    guide_row_weight: "Weight & Stability",
    guide_row_weight_sil: "2.2 kg (Moderate stability)",
    guide_row_weight_prm: "4.5 kg (High stability, self-standing)",
    guide_row_weight_x: "1.1 kg (Lightweight, indoor only)",
    guide_row_setup: "Assembly Time",
    guide_row_setup_sil: "60 seconds",
    guide_row_setup_prm: "30 seconds (ultra smooth)",
    guide_row_setup_x: "45 seconds",
    guide_row_usage: "Best For",
    guide_row_usage_sil: "Seminars, expo booths, presentations",
    guide_row_usage_prm: "VIP venues, executive banks, forums",
    guide_row_usage_x: "Frequent promotional banner swaps",
    guide_row_price: "Price",

    catalog_title: "Display Catalog",
    catalog_subtitle: "Accurate specifications, multiple gallery angles, and fast ordering",
    cat_all: "All Products",
    cat_rollup: "Roll-Up Stands",
    cat_popup: "Pop-Up Walls",
    cat_promo: "Promo Tables",
    cat_frames: "Frames & Stands",
    cat_outdoor: "Flags",
    search_placeholder: "Search product or size...",
    btn_detail_modal: "View Details",
    btn_order_wa: "Order via WhatsApp",

    modal_size_label: "Select Size:",
    modal_specs_title: "Hardware Specifications:",
    modal_spec_material: "Chassis Material",
    modal_spec_weight: "Weight",
    modal_spec_setup: "Setup Time",
    modal_spec_print: "Print Quality",
    modal_spec_warranty: "Warranty",
    modal_purpose_title: "Recommended Use Cases:",
    modal_why_title: "Why Choose This Hardware:",
    modal_btn_wa: "💬 Order via WhatsApp",
    modal_btn_calc: "Customize in Calculator",
    modal_stock: "In Stock — Ready within 24h",

    calc_title: "Interactive Price Calculator",
    calc_subtitle: "Configure specifications for an instant accurate estimate",
    calc_prod_label: "Product Type",
    calc_size_label: "Dimensions",
    calc_mat_label: "Media Substrate",
    calc_mat_std: "Standard Vinyl (440 gsm)",
    calc_mat_prm: "Premium Cast Vinyl (510 gsm)",
    calc_mat_dbl: "Double-sided Blockout Fabric",
    calc_qty_label: "Quantity (pcs)",
    calc_opt_design: "Need graphic design support (+25 AZN)",
    calc_opt_delivery: "Express local delivery (+8 AZN)",
    calc_total_label: "Estimated Total:",
    calc_discount_badge: "Volume Discount Applied!",
    calc_btn_order: "Send Order to WhatsApp →",
    calc_note: "* 5% off for 5+ pcs, 10% off for 10+ pcs.",

    faq_title: "Frequently Asked Questions",
    faq_1_q: "How fast is turnaround time?",
    faq_1_a: "Standard production takes 24 hours. Same-day express printing is available.",
    faq_2_q: "What if I do not have a print file?",
    faq_2_a: "Our graphic designers can prepare a print-ready banner layout based on your logo and brief.",
    faq_3_q: "Is there a warranty on hardware?",
    faq_3_a: "Yes, all aluminum mechanisms carry a 6-month official replacement warranty.",
    faq_4_q: "Can the banner graphic be replaced later?",
    faq_4_a: "Yes! Hardware is reusable — re-skin with new graphics anytime and save over 50%.",

    contact_title: "Contact Us",
    contact_subtitle: "Ready to assist you within 15 minutes",
    form_name: "Full Name",
    form_phone: "Phone Number",
    form_product: "Interested Product",
    form_message: "Notes",
    btn_form_submit: "Submit Request",
    btn_form_wa: "Chat on WhatsApp",

    req_title: "Print File Requirements",
    req_1: "Formats: PDF, AI, TIFF, PSD or high-resolution PNG",
    req_2: "Color Mode: CMYK only (RGB files may have color shifts)",
    req_3: "Resolution (DPI): 150-300 DPI at 1:1 scale",
    req_4: "Bleed: 5 mm on sides/top, 10 cm at bottom for roll-up leader",

    footer_desc: "Trusted portable display hardware manufacturer in Baku.",
    footer_rights: "All rights reserved."
  }
};

// ==========================================
// 2. PRODUCT CATALOG DATABASE
// ==========================================
const products = [
  {
    id: "rollup-silver",
    category: "rollup",
    badge: "bestseller",
    basePrice: 35,
    images: [
      "assets/images/rollup-silver.png",
      "assets/images/rollup-case-detail.jpg",
      "assets/images/hero.jpg"
    ],
    sizes: [
      { name: "85 x 200 sm", price: 35, default: true },
      { name: "100 x 200 sm", price: 55 },
      { name: "120 x 200 sm", price: 75 },
      { name: "150 x 200 sm", price: 95 },
      { name: "200 x 200 sm", price: 140 }
    ],
    specs: {
      material: "Gümüşü Anodlaşdırılmış Alüminium",
      weight: "2.2 kq (Orta ağırlıq)",
      setup: "60 saniyə (3 sadə hərəkət)",
      print: "1440 DPI Solmayan Eko-Solvent",
      warranty: "6 ay rəsmi karkas zəmanəti"
    },
    educational: {
      az: {
        title: "Roll Up Silver (Standart Model)",
        shortDesc: "İki fırlanan ayaqlı ən çox satılan portativ sərgi stendi.",
        purpose: "Konfranslar, ticarət sərgiləri, seminar zalları, mağaza və aptek girişləri, ofis qəbul otaqları.",
        whyChoose: "Büdcəyə ən uyğun variantdır. İki fırlanan alüminium ayağı stendin döşəmədə sabit qalmasını təmin edir. Daxili yay mexanizmi baneri saniyələr içində yığır və parça çantasında çiyninizdə asanlıqla daşıya bilərsiniz.",
        fullDesc: "Roll Up Silver — dünyada ən çox istifadə olunan portativ reklam sistemidir. Tədbir bitdikdən sonra baneri çıxarmağa ehtiyac yoxdur, sadəcə yuxarı çubuğu çıxarın və baner özü avtomatik alüminium kassetin içinə bükülür. Karkas çoxdəfəlikdir — gələcəkdə sadəcə yeni çap sifariş verib karkası yenidən istifadə edə bilərsiniz."
      },
      ru: {
        title: "Ролл-ап Silver (Стандартная Модель)",
        shortDesc: "Самая популярная и доступная модель с двумя поворотными ножками для устойчивости.",
        purpose: "Конференции, выставки, торговые залы, аптеки, презентации и промо-акции.",
        whyChoose: "Оптимальное соотношение цены и качества. Две ножки обеспечивают устойчивость на любом ровном полу.",
        fullDesc: "Roll Up Silver — проверенная временем рабочая лошадка мобильной рекламы. Корпус многоразовый: после окончания текущей рекламной кампании можно просто заменить баннерное полотно."
      },
      en: {
        title: "Roll Up Silver (Standard Model)",
        shortDesc: "Most popular and budget-friendly retractable roll-up banner stand with twin feet.",
        purpose: "Trade shows, conferences, retail stores, showroom lobbies, and educational seminars.",
        whyChoose: "Best value for money. Twin fold-out stabilizing feet ensure solid balance. Protected inside carrying bag.",
        fullDesc: "Roll Up Silver is the global benchmark for portable advertising. The aluminum cassette protects your graphics during transit."
      }
    }
  },
  {
    id: "rollup-premium",
    category: "rollup",
    badge: "premium",
    basePrice: 85,
    images: [
      "assets/images/rollup-premium.png",
      "assets/images/rollup-case-detail.jpg"
    ],
    sizes: [
      { name: "85 x 200 sm", price: 85, default: true },
      { name: "100 x 200 sm", price: 110 },
      { name: "120 x 200 sm", price: 135 },
      { name: "150 x 200 sm", price: 175 },
      { name: "200 x 200 sm", price: 230 },
      { name: "200 x 300 sm", price: 290 }
    ],
    specs: {
      material: "Qalındivarlı Damla Formalı Alüminium + Xrom Qapaqlar",
      weight: "4.5 kq (Ağırlaşdırılmış baza)",
      setup: "30 saniyə (Ayaqsız açılış)",
      print: "1440 DPI Ultra HD Foto Çap",
      warranty: "1 il gücləndirilmiş zəmanət"
    },
    educational: {
      az: {
        title: "Roll Up Premium (Damla Formalı Lüks Model)",
        shortDesc: "Ayaqsız dik duran, xrom parıltılı yan qapaqlara malik elit roll-up.",
        purpose: "VIP tədbirlər, bank filialları, dövlət konfransları, lüks butiklər və beynəlxalq forumlar.",
        whyChoose: "Standart modeldən 2 dəfə daha ağırdır (4.5 kq) və qabağa çıxan fırlanan ayaqları YOXDUR. Xüsusi damla (teardrop) forması sayəsində heç kimin ayağı ilişmir və arxitekturası olduqca eleqant görünür.",
        fullDesc: "Roll Up Premium — ən yüksək səviyyəli təqdimatlar üçün nəzərdə tutulub. Yan tərəflərindəki güzgü kimi parıldayan xrom qapaqlar və qalın alüminium profil stendə premium korporativ görkəm bəxş edir."
      },
      ru: {
        title: "Ролл-ап Premium (Каплевидный Люкс)",
        shortDesc: "Элитный устойчивый стенд без выступающих ножек с зеркальными хромированными крышками.",
        purpose: "VIP-зоны, банковские офисы, международные форумы, автосалоны и премиум ритейл.",
        whyChoose: "В два раза тяжелее стандарта (4.5 кг), благодаря чему стоит мертво без поворотных ножек.",
        fullDesc: "Roll Up Premium подчеркивает статус вашей компании. Каплевидное основание с хромированными накладками смотрится великолепно."
      },
      en: {
        title: "Roll Up Premium (Teardrop Luxury)",
        shortDesc: "Elite footless design with weighted teardrop base and polished chrome end caps.",
        purpose: "VIP exhibitions, executive forums, bank lobbies, premium auto dealerships, and galleries.",
        whyChoose: "Twice as heavy as standard (4.5 kg) for supreme stability without protruding feet. Prevents tripping hazards.",
        fullDesc: "Roll Up Premium communicates prestige. The aerodynamic cast-aluminum base with mirror-finish chrome caps gives your brand a high-end look."
      }
    }
  },
  {
    id: "xbanner",
    category: "rollup",
    badge: "economy",
    basePrice: 24,
    images: [
      "assets/images/xbanner.jpg",
      "assets/images/xbanner-detail.jpg"
    ],
    sizes: [
      { name: "60 x 160 sm", price: 24, default: true },
      { name: "80 x 180 sm", price: 34 },
      { name: "120 x 200 sm", price: 55 }
    ],
    specs: {
      material: "Elastik Karbon Lifli Qollar & Metal Qovşaq",
      weight: "1.1 kq (Ultra Yüngül)",
      setup: "45 saniyə (Gərmə mexanizmi)",
      print: "4 Küncdən Lyüversli Çap",
      warranty: "6 ay"
    },
    educational: {
      az: {
        title: "X-Banner (Spider / Hörümçək Stend)",
        shortDesc: "Ən qənaətcil və baneri saniyələr içində dəyişdirilə bilən yüngül stend.",
        purpose: "Mövsümi endirim aksiyaları, restoran menyuları, ticarət nöqtələri, qapalı sərgi sahələri.",
        whyChoose: "Əgər şəkli tez-tez dəyişmək istəyirsinizsə, X-Banner ən sərfəli variantdır. 4 küncündəki lülələrdən taxılır və heç bir mürəkkəb alət tələb etmir.",
        fullDesc: "X-Banner elastik karbon çubuqların gərilməsi prinsipi ilə işləyir. Çox yüngüldür (cəmi 1.1 kq), qatlananda çətir ölçüsünə düşür. Yalnız qapalı məkanlar üçün tövsiyə edilir."
      },
      ru: {
        title: "X-Баннер (Стенд Паук)",
        shortDesc: "Самый экономичный мобильный стенд с моментальной сменой рекламного полотна.",
        purpose: "Сезонные акции, меню ресторанов, промо-точки, закрытые выставочные залы.",
        whyChoose: "Идеален для частой смены плакатов. Смена занимает 20 секунд.",
        fullDesc: "X-Banner использует гибкие прутья для натяжения полотна. Складывается в компактный чехол."
      },
      en: {
        title: "X-Banner (Spider Tension Stand)",
        shortDesc: "Ultra-affordable, featherlight display with 20-second graphic changeovers.",
        purpose: "Seasonal retail sales, restaurant promotions, internal office notices, pop-up events.",
        whyChoose: "If you change artwork frequently, X-Banner is unbeatable. Hooks onto 4 corner eyelets with zero tools.",
        fullDesc: "X-Banner uses carbon fiber tension rods to hold the vinyl flat. Weighs only 1.1 kg and folds compactly."
      }
    }
  },
  {
    id: "lbanner",
    category: "rollup",
    badge: "popular",
    basePrice: 30,
    images: [
      "assets/images/lbanner.webp",
      "assets/images/rollup-case-detail.jpg"
    ],
    sizes: [
      { name: "80 x 200 sm", price: 30, default: true },
      { name: "100 x 200 sm", price: 45 }
    ],
    specs: {
      material: "L-formal Alüminium Profil & Arxa Dirək",
      weight: "1.8 kq",
      setup: "1 dəqiqə",
      print: "Yuxarı və Aşağı Sıxıcı Profil",
      warranty: "6 ay"
    },
    educational: {
      az: {
        title: "LUX L-Banner Stend",
        shortDesc: "Zərif L formalı baza ilə minimalistik və döşəmədən başlayan sərgi stendi.",
        purpose: "Butiklər, rəsm qalereyaları, memarlıq sərgiləri və dar sahəli qəbullar.",
        whyChoose: "Roll-up-dan fərqli olaraq altda qalın kasset olmur, baner düz döşəmə səviyyəsindən başlayır.",
        fullDesc: "L-Banner yuxarıdan və aşağıdan alüminium sıxıcı profillərlə bərkidilir. Arxadakı dirək baneri şaquli şəkildə düz saxlayır."
      },
      ru: {
        title: "LUX L-Баннер Стенд",
        shortDesc: "Изящный стенд без громоздкой кассеты — баннер начинается от самого пола.",
        purpose: "Бутики, галереи, стильные офисы и презентации.",
        whyChoose: "Минималистичный дизайн. За счет клик-профилей сверху и снизу выглядит очень стильно.",
        fullDesc: "L-образная опора сзади удерживает плакат строго вертикально."
      },
      en: {
        title: "LUX L-Banner Stand",
        shortDesc: "Minimalist graphic display where artwork extends from floor to top rail.",
        purpose: "Boutique fashion stores, architectural presentations, art exhibitions.",
        whyChoose: "No bulky floor cassette — graphics flow directly from floor level, giving an ultra-clean look.",
        fullDesc: "Snap rails top and bottom grip the media firmly with a tensioned rear pole."
      }
    }
  },
  {
    id: "popup-xpression",
    category: "popup",
    badge: "bestseller",
    basePrice: 480,
    images: [
      "assets/images/popup-xpression.jpg",
      "assets/images/exhibition-booth.jpg"
    ],
    sizes: [
      { name: "230 x 300 sm (3x4 Modul)", price: 480, default: true },
      { name: "230 x 230 sm (3x3 Modul)", price: 390 },
      { name: "230 x 380 sm (3x5 Modul)", price: 580 }
    ],
    specs: {
      material: "Qatlanan Akkordeon Alüminium Tor + Maqnitli PVC Panellər",
      weight: "17.5 kq (Təkərli çamadan daxil)",
      setup: "7-10 dəqiqə (Alətsiz)",
      print: "Laminasiyalı 1440 DPI UV Maqnitli Çap",
      warranty: "1 il rəsmi zəmanət"
    },
    educational: {
      az: {
        title: "X-Pression Pop-Up Sərgi Divarı (3x4)",
        shortDesc: "Böyük beynəlxalq sərgilər və fotozonalar üçün nəhəng, tikişsiz maqnitli arxa divar.",
        purpose: "Ekspo mərkəzləri, beynəlxalq sərgilər, mətbuat brifinqləri, fotosessiyalar və sponsor zonaları.",
        whyChoose: "Bir çamadanın içində daşınan bu sistem açıldıqda 3 metr enində nəhəng və möhtəşəm sərgi divarına çevrilir. Maqnitli birləşmələr panelləri tikişsiz birləşdirir.",
        fullDesc: "Pop-up karkası bir neçə dəqiqəyə açılır və üzərinə sərt maqnitli foto panellər düzülür. Çamadanı təkərlidir və asanlıqla daşınır."
      },
      ru: {
        title: "Поп-Ап Пресс-Волл X-Pression",
        shortDesc: "Масштабная магнитная стена-трансформер для серьезных выставочных экспозиций.",
        purpose: "Выставочные центры, международные форумы, пресс-воллы, брендированные фотозоны.",
        whyChoose: "Трансформируется из кейса на колесах в огромную 3-метровую стену без инструментов.",
        fullDesc: "Магнитные ребра жесткости обеспечивают идеальное стыкование панелей без щелей."
      },
      en: {
        title: "X-Pression Pop-Up Exhibition Wall",
        shortDesc: "Seamless magnetic expandable backdrop wall for major expos & photozones.",
        purpose: "Expo centers, trade shows, red-carpet photo backdrops, press conferences.",
        whyChoose: "Expands from a wheeled flight case into a massive 3-meter seamless exhibition booth wall in under 10 minutes.",
        fullDesc: "Features magnetic strut bars for automatic alignment of heavy-duty laminated graphic panels."
      }
    }
  },
  {
    id: "popup-spring",
    category: "popup",
    badge: "popular",
    basePrice: 480,
    images: [
      "assets/images/popup-spring.jpg",
      "assets/images/exhibition-booth.jpg"
    ],
    sizes: [
      { name: "230 x 300 sm Yaylı", price: 480, default: true },
      { name: "230 x 380 sm Yaylı", price: 590 }
    ],
    specs: {
      material: "Yaylı Gücləndirilmiş Alüminium Tor",
      weight: "18.5 kq",
      setup: "5 dəqiqə",
      print: "1440 DPI UV Çap",
      warranty: "1 il"
    },
    educational: {
      az: {
        title: "Spring Pop-Up 3x4 (Yaylı Model)",
        shortDesc: "Sürətli yaylı kilidləmə sistemi ilə quraşdırılan ən dözümlü sərgi divarı.",
        purpose: "Tez-tez səfər edən korporativ şirkətlər, regional sərgilər və təqdimatlar.",
        whyChoose: "Daxili yaylı birləşmələri sayəsində karkas özü avtomatik açılır və kilidlənir.",
        fullDesc: "Spring Pop-Up ağır istismar şərtləri üçün hazırlanıb. Çoxsaylı yığılıb-sökülmələrə qarşı ən davamlı modeldir."
      },
      ru: {
        title: "Spring Поп-Ап 3x4 (Пружинный)",
        shortDesc: "Усиленный каркас с пружинными замками для максимальной надежности при частых сборках.",
        purpose: "Регулярные выездные выставки, гастролирующие презентации и форумы.",
        whyChoose: "Пружины помогают раскрыть конструкцию мгновенно.",
        fullDesc: "Утолщенный алюминиевый профиль гарантирует долговечность."
      },
      en: {
        title: "Spring Pop-Up 3x4 (Heavy-Duty)",
        shortDesc: "Reinforced spring-assisted expanding framework built for frequent assembly.",
        purpose: "Touring expos, frequent roadshows, high-volume conference calendars.",
        whyChoose: "Internal springs assist in popping open the frame effortlessly.",
        fullDesc: "Engineered with thick-walled aluminum alloy tubing for repeated expo tours."
      }
    }
  },
  {
    id: "promo-table",
    category: "promo",
    badge: "bestseller",
    basePrice: 120,
    images: [
      "assets/images/promo-table.png",
      "assets/images/promo-table-detail.jpg"
    ],
    sizes: [
      { name: "80 x 80 x 40 sm + Friza", price: 120, default: true },
      { name: "100 x 85 x 45 sm Geniş", price: 155 }
    ],
    specs: {
      material: "Sərt Zərbəyə Dözümlü Polistirol + Daxili Rəf",
      weight: "6.5 kq",
      setup: "2 dəqiqə",
      print: "Laminasiyalı Suya Dözümlü Çap",
      warranty: "6 ay"
    },
    educational: {
      az: {
        title: "Promo Masa (Dadım & Təqdimat Stendi)",
        shortDesc: "Daxili rəfli, qatlanan və yuxarı başlıqlı (frizalı) promo masa.",
        purpose: "Supermarketlərdə dadım aksiyaları, məhsul sınaqları, təqdimat günləri.",
        whyChoose: "İçərisində 15 kq-a qədər məhsul saxlamağa imkan verən möhkəm rəfi var. Yuxarı friz uzaqdan brendi görünən edir.",
        fullDesc: "Promo masa asanlıqla silinib təmizlənir, çantasında rahat daşınır."
      },
      ru: {
        title: "Промо-стол (Дегустационная Стойка)",
        shortDesc: "Складной функциональный стол с полкой для запаса продукции и верхним фризом.",
        purpose: "Дегустации в супермаркетах, промо-акции, раздача листовок.",
        whyChoose: "Внутренняя полка выдерживает до 15 кг товара. Верхний топер виден издалека.",
        fullDesc: "Выполнен из прочного белого полистирола с защитной ламинацией."
      },
      en: {
        title: "Promo Tasting Table (Standard)",
        shortDesc: "Portable sampling station with internal product storage shelf and overhead header.",
        purpose: "Supermarket food tastings, retail sampling campaigns, product demos.",
        whyChoose: "Internal storage shelf holds up to 15 kg. Header catches eye-level attention.",
        fullDesc: "Constructed from high-impact washable polystyrene with Oxford carry bag."
      }
    }
  },
  {
    id: "promo-counter",
    category: "promo",
    badge: "premium",
    basePrice: 280,
    images: [
      "assets/images/promo-counter.jpg",
      "assets/images/promo-table-detail.jpg"
    ],
    sizes: [
      { name: "100 x 90 x 40 sm Lüks", price: 280, default: true },
      { name: "120 x 95 x 45 sm Geniş", price: 340 }
    ],
    specs: {
      material: "Taxta Naxışlı MDF Üst Masa + Maqnitli Karkas",
      weight: "12 kq",
      setup: "3 dəqiqə",
      print: "1440 DPI UV Maqnitli Qrafika",
      warranty: "1 il"
    },
    educational: {
      az: {
        title: "Pop-Up Counter (Lüks Sərgi Qeydiyyat Masası)",
        shortDesc: "Taxta üst lövhəli, möhkəm maqnitli karkaslı elit qəbul və resepşn masası.",
        purpose: "Sərgi stendində ziyarətçiləri qarşılama, qeydiyyat, noutbuk qoyulması.",
        whyChoose: "40 kq-a qədər yük daşıyır və çox prestijli ofis mebeli təəssüratı yaradır.",
        fullDesc: "Pop-Up Counter qatlanan alüminium çərçivə və qalın MDF lövhədən ibarətdir."
      },
      ru: {
        title: "Pop-Up Counter (Люкс Ресепшн)",
        shortDesc: "Презентабельная стойка регистрации со столешницей под дерево для выставок.",
        purpose: "Встреча гостей на выставках, регистрация, размещение ноутбуков.",
        whyChoose: "Выдерживает до 40 кг. Смотрится как солидная стационарная мебель.",
        fullDesc: "Идеально сочетается с задней стеной Pop-Up."
      },
      en: {
        title: "Pop-Up Counter (Luxury Reception Desk)",
        shortDesc: "Prestige expo registration counter featuring timber-look top and magnetic frame.",
        purpose: "Expo booth greeting desk, attendee registration, hosting laptops.",
        whyChoose: "Supports up to 40 kg. Combines permanence with quick assembly.",
        fullDesc: "Pairs flawlessly with our Pop-Up exhibition backdrops."
      }
    }
  },
  {
    id: "frames",
    category: "frames",
    badge: "popular",
    basePrice: 10,
    images: [
      "assets/images/frames.jpg",
      "assets/images/snap-frame-detail.jpg"
    ],
    sizes: [
      { name: "A4 (21 x 29.7 sm)", price: 10, default: true },
      { name: "A3 (29.7 x 42 sm)", price: 16 },
      { name: "A2 (42 x 59.4 sm)", price: 25 },
      { name: "A1 (59.4 x 84.1 sm)", price: 38 },
      { name: "50 x 70 sm", price: 32 },
      { name: "70 x 100 sm", price: 55 }
    ],
    specs: {
      material: "25 mm Anodlaşdırılmış Alüminium Klik Profil",
      weight: "0.5 - 2.5 kq",
      setup: "10 saniyədə poster dəyişimi",
      print: "Antirefleks Qoruyucu PVC Təbəqə Daxil",
      warranty: "2 il"
    },
    educational: {
      az: {
        title: "Klik Çərçivələr (Alüminium Snap Frame)",
        shortDesc: "Dörd tərəfi yaylı açılan və posteri divardan çıxarmadan dəyişdirilən çərçivələr.",
        purpose: "Ofislər, lift daxili elanlar, kinoteatrlar, kafelər, ticarət mərkəzləri.",
        whyChoose: "Profillər barmaqla qaldırılır, köhnə poster çıxarılır, yenisi qoyulur və qapaqlar bağlanır.",
        fullDesc: "25 mm enində mat gümüşü profillər günəş altında paslanmır və rəngini itirmir."
      },
      ru: {
        title: "Клик-Рамки (Алюминиевый Snap Frame)",
        shortDesc: "Защелкивающийся профиль: быстрая смена постеров без снятия рамки со стены.",
        purpose: "Офисы, лифты, торговые центры, кинотеатры, рестораны.",
        whyChoose: "Смена плаката за 10 секунд без инструментов.",
        fullDesc: "Анодированный алюминий с подпружиненными планками."
      },
      en: {
        title: "Aluminum Snap Frames (Click Frame)",
        shortDesc: "Front-loading spring-hinged snap borders for instant poster replacement.",
        purpose: "Corporate offices, elevator lobbies, movie theaters, retail chains.",
        whyChoose: "Snap open the four sides, drop in new graphic, and snap shut in 10 seconds.",
        fullDesc: "Anodized 25mm matte silver profile with anti-glare protective sheet."
      }
    }
  },
  {
    id: "poster-stand",
    category: "frames",
    badge: "economy",
    basePrice: 65,
    images: [
      "assets/images/poster-stand.jpg",
      "assets/images/frames.jpg"
    ],
    sizes: [
      { name: "A4 Ölçülü Xrom", price: 65, default: true },
      { name: "A3 Ölçülü Xrom", price: 85 }
    ],
    specs: {
      material: "Parlaq Xrom Kaplama Polad Dirək & Ağır Baza",
      weight: "3.5 kq",
      setup: "Vertikal və horizontal tənzimlənən bucaq",
      print: "Antirefleks Qoruyucu Başlıq",
      warranty: "1 il"
    },
    educational: {
      az: {
        title: "Xrom Poster Qabı (İnfo Stend)",
        shortDesc: "Tənzimlənən baxış bucağına malik zərif döşəmə yönləndirmə və menyu stendi.",
        purpose: "Restoran və otel girişləri, avtosalonlar, klinika qeydiyyatları, muzeylər.",
        whyChoose: "Başlığı istənilən vaxt həm dik, həm də yan bucağa çevrilə bilir. Ağır altlıq aşmasının qarşısını alır.",
        fullDesc: "Xrom örtüklü info dirəyi menyu və istiqamət lövhələrini göz səviyyəsində təqdim edir."
      },
      ru: {
        title: "Хромированная Инфо-Стойка",
        shortDesc: "Напольный указатель с регулируемым углом наклона и поворотом рамки.",
        purpose: "Входы в рестораны, отели, автосалоны, клиники, музеи.",
        whyChoose: "Рамка легко поворачивается вертикально или горизонтально.",
        fullDesc: "Элегантный хромированный металл создает атмосферу солидности."
      },
      en: {
        title: "Chrome Information Floor Stand",
        shortDesc: "Adjustable-angle free-standing floor display for menus, notices, and wayfinding.",
        purpose: "Hotel foyers, fine dining entrances, car dealerships, clinics.",
        whyChoose: "Snap frame rotates portrait or landscape and tilts smoothly.",
        fullDesc: "Polished chrome finish with a heavy weighted circular base."
      }
    }
  },
  {
    id: "brochure-stand",
    category: "frames",
    badge: "popular",
    basePrice: 150,
    images: [
      "assets/images/brochure-stand.jpg"
    ],
    sizes: [
      { name: "A4 6 Gözlü Ziqzaq", price: 150, default: true }
    ],
    specs: {
      material: "Alüminium Əsas + Şəffaf Pleksi Rəflər",
      weight: "5.5 kq (Metal çamadan daxil)",
      setup: "15 saniyə (Ziqzaq açılış)",
      print: "Zərbəyə Davamlı Alüminium Çamadan Daxil",
      warranty: "1 il"
    },
    educational: {
      az: {
        title: "Ziqzaq Broşür Stendi (A4 6 Gözlü)",
        shortDesc: "Kataloq və flayerlər üçün saniyələr içində açılan ikitərəfli ziqzaq stend.",
        purpose: "Bütün növ sərgilər, ticarət salonları, turizm agentlikləri və ofislər.",
        whyChoose: "İkitərəfli 6 ədəd A4 rəfi var. Xüsusi alüminium çamadanı ilə istənilən səfərə aparılır.",
        fullDesc: "Kataloqlarınızın sərgi masasında səpələnməsinin qarşısını alır."
      },
      ru: {
        title: "Складная Буклетница Зиг-Заг",
        shortDesc: "Двусторонняя металлическая подставка для каталогов А4 с жестким кейсом.",
        purpose: "Любые выставки, туристические агентства, автосалоны.",
        whyChoose: "6 полок А4. Раскладывается за 15 секунд в алюминиевом чемодане.",
        fullDesc: "Компактная в сложенном виде и солидная в раскрытом."
      },
      en: {
        title: "Zig-Zag Folding Literature Stand",
        shortDesc: "Double-sided 6-tier brochure rack that expands instantly, with aluminum flight case.",
        purpose: "Exhibitions, tourism centers, corporate lobbies.",
        whyChoose: "Holds A4 catalogs on both sides (3 front, 3 back). Includes locked flight case.",
        fullDesc: "Prevents messy literature tables at expos."
      }
    }
  },
  {
    id: "flag-5m",
    category: "outdoor",
    badge: "premium",
    basePrice: 350,
    images: [
      "assets/images/flag-5m.webp"
    ],
    sizes: [
      { name: "3 Metr Hündürlük", price: 240 },
      { name: "4 Metr Hündürlük", price: 290 },
      { name: "5 Metr Hündürlük (Lüks)", price: 350, default: true }
    ],
    specs: {
      material: "Elastik Karbon-Alüminium Dirək + 15L Su Çəni Altlıq",
      weight: "14 kq (Su ilə dolu olanda)",
      setup: "3 dəqiqə",
      print: "İkitərəfli Görünən Sublimasiya Çapı",
      warranty: "1 il karkas zəmanəti"
    },
    educational: {
      az: {
        title: "Reklam Bayrağı 5 m (Yelkən / Damla)",
        shortDesc: "Güclü küləyə dözümlü, 15L su çənli və uzaqdan diqqət çəkən çöl reklam bayrağı.",
        purpose: "Avtosalonlar, YDM-lər, stadion tədbirləri, festival və açıq hava sərgiləri.",
        whyChoose: "Hündürlüyü 5 metr olduğu üçün yüzlərlə metr uzaqdan aydın görünür. Altlığı su ilə dolur.",
        fullDesc: "Sublimasiya çapı həm ön, həm də arxa tərəfdən eyni dərəcədə parlaq görünür."
      },
      ru: {
        title: "Рекламный Флаг 5м (Виндер / Парус)",
        shortDesc: "Уличный флагшток с водоналивным баком 15л, устойчивый к штормовому ветру.",
        purpose: "Автосалоны, АЗС, фестивали, открытые стадионы.",
        whyChoose: "Высота 5 метров обеспечивает видимость за сотни метров.",
        fullDesc: "Сублимационная печать пробивает ткань насквозь."
      },
      en: {
        title: "Outdoor Promotional Flag 5m (Teardrop / Feather)",
        shortDesc: "High-visibility 5m outdoor wind banner with 15L water-weighted stability base.",
        purpose: "Dealerships, gas stations, sports arenas, outdoor festivals.",
        whyChoose: "At 5 meters tall, it dominates outdoor sightlines with rotomolded water base.",
        fullDesc: "Vivid dye-sublimation penetrates the porous flag knit."
      }
    }
  }
];

// ==========================================
// 3. APPLICATION STATE & INITIALIZATION
// ==========================================
let currentLang = localStorage.getItem("rollup_lang") || "az";
let currentTheme = localStorage.getItem("rollup_theme") || "dark";
let activeCategory = "all";
let searchQuery = "";
let selectedProductForModal = null;
let currentModalSelectedSize = null;

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage(currentLang);
  renderCatalog();
  initCalculator();
  initModalEvents();
  initFaqAccordion();
  initMobileMenu();
  initContactForm();
});

// ==========================================
// 4. THEME CONTROLLER (Enforced Dark Theme)
// ==========================================
function initTheme() {
  const root = document.documentElement;
  root.classList.remove("theme-light");
  localStorage.removeItem("rollup_theme");
}

// ==========================================
// 5. LANGUAGE CONTROLLER
// ==========================================
function initLanguage(lang) {
  if (!translations[lang]) lang = "az";
  currentLang = lang;
  localStorage.setItem("rollup_lang", lang);

  ["az", "ru", "en"].forEach(l => {
    document.querySelectorAll(`.lang-btn-${l}`).forEach(btn => {
      if (l === lang) {
        btn.classList.add("bg-[#00e5ff]", "text-[#050811]", "font-extrabold");
        btn.classList.remove("text-slate-400");
      } else {
        btn.classList.remove("bg-[#00e5ff]", "text-[#050811]", "font-extrabold");
        btn.classList.add("text-slate-400");
      }
    });
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  renderCatalog();
  populateCalculatorProducts();
  calculateTotalPrice();
  if (selectedProductForModal) {
    updateModalContent(selectedProductForModal);
  }
}

window.setLanguage = function(lang) {
  initLanguage(lang);
};

// ==========================================
// 6. PRODUCT CATALOG RENDERING
// ==========================================
function renderCatalog() {
  const container = document.getElementById("productGrid");
  if (!container) return;

  const filtered = products.filter(p => {
    const matchesCat = activeCategory === "all" || p.category === activeCategory;
    const data = p.educational[currentLang] || p.educational.az;
    const title = data.title.toLowerCase();
    const desc = data.shortDesc.toLowerCase();
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || title.includes(q) || desc.includes(q) || p.sizes.some(s => s.name.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-500">
        <p class="text-base font-semibold">${currentLang === 'az' ? 'Axtarışa uyğun məhsul tapılmadı.' : 'Товары не найдены.'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prod => {
    const data = prod.educational[currentLang] || prod.educational.az;
    const defaultSize = prod.sizes.find(s => s.default) || prod.sizes[0];

    return `
      <article class="cyber-card flex flex-col justify-between group relative overflow-hidden" data-product-id="${prod.id}">
        <!-- Image Area -->
        <div class="aspect-[4/3] bg-[#070b16] p-5 flex items-center justify-center overflow-hidden cursor-pointer" onclick="openProductModal('${prod.id}')">
          <img src="${prod.images[0]}" alt="${data.title}" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy">
        </div>

        <!-- Body Info -->
        <div class="p-5 flex-1 flex flex-col justify-between bg-[#0c1222] border-t border-[#1a253d]">
          <div>
            <h3 class="font-bold text-base text-white group-hover:text-[#00e5ff] transition-colors cursor-pointer leading-snug line-clamp-1" onclick="openProductModal('${prod.id}')">
              ${data.title}
            </h3>
            <p class="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
              ${data.shortDesc}
            </p>
            
            <div class="mt-3.5 pt-3 border-t border-[#1a253d] flex items-center justify-between text-[11px] text-slate-400">
              <span class="flex items-center gap-1 font-semibold text-slate-300">⏱️ ${prod.specs.setup}</span>
              <span class="flex items-center gap-1 font-semibold text-emerald-400">🛡️ 6 ay</span>
            </div>
          </div>

          <!-- Price & Buttons (100% High Contrast) -->
          <div class="mt-4 pt-3 border-t border-[#1a253d] flex items-center justify-between gap-2">
            <div>
              <span class="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">${currentLang === 'az' ? 'Qiymət:' : 'Цена:'}</span>
              <span class="text-xl font-extrabold text-[#00e5ff] font-heading">${defaultSize.price} AZN</span>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="openProductModal('${prod.id}')" class="btn-dark px-3 py-2 text-xs">
                ${translations[currentLang].btn_detail_modal}
              </button>
              <button onclick="orderProductDirectWhatsApp('${prod.id}')" class="btn-wa px-3.5 py-2 text-xs flex items-center gap-1">
                <span>WA</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

window.filterCategory = function(cat, buttonEl) {
  activeCategory = cat;
  document.querySelectorAll(".filter-chip").forEach(btn => btn.classList.remove("active"));
  buttonEl?.classList.add("active");
  renderCatalog();
};

window.handleSearch = function(query) {
  searchQuery = query;
  renderCatalog();
};

// ==========================================
// 7. PRODUCT MODAL CONTROLLER
// ==========================================
function initModalEvents() {
  const modal = document.getElementById("productModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const backdrop = document.getElementById("modalBackdrop");

  closeBtn?.addEventListener("click", closeProductModal);
  backdrop?.addEventListener("click", closeProductModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal?.classList.contains("hidden")) {
      closeProductModal();
    }
  });
}

window.openProductModal = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  selectedProductForModal = prod;
  currentModalSelectedSize = prod.sizes.find(s => s.default) || prod.sizes[0];

  updateModalContent(prod);

  const modal = document.getElementById("productModal");
  modal?.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

window.closeProductModal = function() {
  const modal = document.getElementById("productModal");
  modal?.classList.add("hidden");
  document.body.style.overflow = "";
};

function updateModalContent(prod) {
  const data = prod.educational[currentLang] || prod.educational.az;
  const langPack = translations[currentLang];

  const titleEl = document.getElementById("modalTitle");
  const descEl = document.getElementById("modalDesc");
  const purposeEl = document.getElementById("modalPurpose");
  const whyEl = document.getElementById("modalWhyChoose");

  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.fullDesc;
  if (purposeEl) purposeEl.textContent = data.purpose;
  if (whyEl) whyEl.textContent = data.whyChoose;

  updateModalPrice();

  const stockEl = document.getElementById("modalStock");
  if (stockEl) stockEl.textContent = langPack.modal_stock;

  const mainImg = document.getElementById("modalMainImage");
  if (mainImg) {
    mainImg.src = prod.images[0];
    mainImg.alt = data.title;
  }

  const thumbsContainer = document.getElementById("modalThumbs");
  if (thumbsContainer) {
    thumbsContainer.innerHTML = prod.images.map((imgSrc, idx) => `
      <button onclick="switchModalImage('${imgSrc}', this)" class="thumb-pill ${idx === 0 ? 'active' : ''} w-16 h-16 rounded-xl overflow-hidden border-2 border-[#1e2942] bg-[#070b16] p-1 flex-shrink-0 transition-all">
        <img src="${imgSrc}" class="w-full h-full object-contain" alt="thumb">
      </button>
    `).join("");
  }

  const sizeContainer = document.getElementById("modalSizes");
  if (sizeContainer) {
    sizeContainer.innerHTML = prod.sizes.map(s => {
      const isSelected = s.name === currentModalSelectedSize.name;
      return `
        <button onclick="selectModalSize('${s.name}')" class="px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all ${isSelected ? 'bg-[#00e5ff] text-[#050811] border-[#00e5ff] shadow-md shadow-[#00e5ff]/30' : 'bg-[#10172a] text-slate-300 border-[#1e2942] hover:border-[#00e5ff]'}">
          ${s.name} (${s.price} AZN)
        </button>
      `;
    }).join("");
  }

  const specsContainer = document.getElementById("modalSpecs");
  if (specsContainer) {
    specsContainer.innerHTML = `
      <div class="flex justify-between py-1.5 border-b border-[#1e2942]">
        <span class="text-slate-400">${langPack.modal_spec_material}:</span>
        <span class="font-bold text-white text-right">${prod.specs.material}</span>
      </div>
      <div class="flex justify-between py-1.5 border-b border-[#1e2942]">
        <span class="text-slate-400">${langPack.modal_spec_weight}:</span>
        <span class="font-bold text-white text-right">${prod.specs.weight}</span>
      </div>
      <div class="flex justify-between py-1.5 border-b border-[#1e2942]">
        <span class="text-slate-400">${langPack.modal_spec_setup}:</span>
        <span class="font-bold text-emerald-400 text-right">${prod.specs.setup}</span>
      </div>
      <div class="flex justify-between py-1.5 border-b border-[#1e2942]">
        <span class="text-slate-400">${langPack.modal_spec_print}:</span>
        <span class="font-bold text-white text-right">${prod.specs.print}</span>
      </div>
      <div class="flex justify-between py-1.5">
        <span class="text-slate-400">${langPack.modal_spec_warranty}:</span>
        <span class="font-bold text-[#00e5ff] text-right">${prod.specs.warranty}</span>
      </div>
    `;
  }

  const waBtn = document.getElementById("modalWaBtn");
  if (waBtn) {
    waBtn.onclick = () => {
      sendModalWhatsAppOrder(prod, currentModalSelectedSize);
    };
  }

  const calcBtn = document.getElementById("modalCalcBtn");
  if (calcBtn) {
    calcBtn.onclick = () => {
      closeProductModal();
      const calcSection = document.getElementById("calculator");
      calcSection?.scrollIntoView({ behavior: "smooth" });
      const prodSelect = document.getElementById("calcProduct");
      if (prodSelect) {
        prodSelect.value = prod.id;
        populateCalculatorSizes();
        const sizeSelect = document.getElementById("calcSize");
        if (sizeSelect && currentModalSelectedSize) {
          sizeSelect.value = currentModalSelectedSize.name;
        }
        calculateTotalPrice();
      }
    };
  }
}

window.switchModalImage = function(src, btnEl) {
  const mainImg = document.getElementById("modalMainImage");
  if (mainImg) {
    mainImg.style.opacity = "0.2";
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = "1";
    }, 120);
  }
  document.querySelectorAll(".thumb-pill").forEach(el => el.classList.remove("active"));
  btnEl?.classList.add("active");
};

window.selectModalSize = function(sizeName) {
  if (!selectedProductForModal) return;
  const sizeObj = selectedProductForModal.sizes.find(s => s.name === sizeName);
  if (sizeObj) {
    currentModalSelectedSize = sizeObj;
    updateModalPrice();
    updateModalContent(selectedProductForModal);
  }
};

function updateModalPrice() {
  const priceEl = document.getElementById("modalPrice");
  if (priceEl && currentModalSelectedSize) {
    priceEl.textContent = `${currentModalSelectedSize.price} AZN`;
  }
}

function sendModalWhatsAppOrder(prod, sizeObj) {
  const data = prod.educational[currentLang] || prod.educational.az;
  let text = `Salam RollUp.az! Mən "${data.title}" sifariş etmək istəyirəm.\n• Ölçü: ${sizeObj.name}\n• Qiymət: ${sizeObj.price} AZN\nZəhmət olmasa sifarişin çatdırılması ilə bağlı məlumat verərdiniz.`;
  const url = `https://wa.me/994502333754?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

window.orderProductDirectWhatsApp = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;
  const defaultSize = prod.sizes.find(s => s.default) || prod.sizes[0];
  sendModalWhatsAppOrder(prod, defaultSize);
};

// ==========================================
// 8. PRICE CALCULATOR
// ==========================================
function initCalculator() {
  populateCalculatorProducts();

  const prodSelect = document.getElementById("calcProduct");
  const sizeSelect = document.getElementById("calcSize");
  const matSelect = document.getElementById("calcMaterial");
  const qtyInput = document.getElementById("calcQty");
  const qtyMinus = document.getElementById("calcQtyMinus");
  const qtyPlus = document.getElementById("calcQtyPlus");
  const designChk = document.getElementById("calcDesign");
  const deliveryChk = document.getElementById("calcDelivery");
  const orderBtn = document.getElementById("calcOrderBtn");

  prodSelect?.addEventListener("change", () => {
    populateCalculatorSizes();
    calculateTotalPrice();
  });

  sizeSelect?.addEventListener("change", calculateTotalPrice);
  matSelect?.addEventListener("change", calculateTotalPrice);
  designChk?.addEventListener("change", calculateTotalPrice);
  deliveryChk?.addEventListener("change", calculateTotalPrice);

  qtyInput?.addEventListener("input", calculateTotalPrice);

  qtyMinus?.addEventListener("click", () => {
    if (!qtyInput) return;
    let v = parseInt(qtyInput.value || "1", 10);
    if (v > 1) {
      qtyInput.value = v - 1;
      calculateTotalPrice();
    }
  });

  qtyPlus?.addEventListener("click", () => {
    if (!qtyInput) return;
    let v = parseInt(qtyInput.value || "1", 10);
    qtyInput.value = v + 1;
    calculateTotalPrice();
  });

  orderBtn?.addEventListener("click", sendCalculatorWhatsApp);

  calculateTotalPrice();
}

function populateCalculatorProducts() {
  const prodSelect = document.getElementById("calcProduct");
  if (!prodSelect) return;
  const currentVal = prodSelect.value;

  prodSelect.innerHTML = products.map(p => {
    const data = p.educational[currentLang] || p.educational.az;
    return `<option value="${p.id}">${data.title}</option>`;
  }).join("");

  if (currentVal && products.some(p => p.id === currentVal)) {
    prodSelect.value = currentVal;
  }
  populateCalculatorSizes();
}

function populateCalculatorSizes() {
  const prodSelect = document.getElementById("calcProduct");
  const sizeSelect = document.getElementById("calcSize");
  if (!prodSelect || !sizeSelect) return;

  const prod = products.find(p => p.id === prodSelect.value) || products[0];
  if (!prod) return;

  sizeSelect.innerHTML = prod.sizes.map(s => `
    <option value="${s.name}" data-price="${s.price}">${s.name} (${s.price} AZN)</option>
  `).join("");
}

function calculateTotalPrice() {
  const prodSelect = document.getElementById("calcProduct");
  const sizeSelect = document.getElementById("calcSize");
  const matSelect = document.getElementById("calcMaterial");
  const qtyInput = document.getElementById("calcQty");
  const designChk = document.getElementById("calcDesign");
  const deliveryChk = document.getElementById("calcDelivery");
  const totalEl = document.getElementById("calcTotalDisplay");
  const discountBadge = document.getElementById("calcDiscountTag");

  if (!prodSelect || !sizeSelect || !totalEl) return;

  const selectedSizeOpt = sizeSelect.options[sizeSelect.selectedIndex];
  const baseSizePrice = selectedSizeOpt ? parseFloat(selectedSizeOpt.getAttribute("data-price") || "0") : 0;

  const matVal = matSelect?.value || "std";
  let matExtra = 0;
  if (matVal === "prm") matExtra = 15;
  if (matVal === "dbl") matExtra = 40;

  const itemPrice = baseSizePrice + matExtra;
  let qty = parseInt(qtyInput?.value || "1", 10);
  if (isNaN(qty) || qty < 1) qty = 1;

  let subtotal = itemPrice * qty;

  let discountPercent = 0;
  if (qty >= 10) {
    discountPercent = 10;
  } else if (qty >= 5) {
    discountPercent = 5;
  }

  if (discountPercent > 0) {
    subtotal = subtotal * (1 - discountPercent / 100);
    if (discountBadge) {
      discountBadge.classList.remove("hidden");
      discountBadge.textContent = `${discountPercent}% ${translations[currentLang].calc_discount_badge}`;
    }
  } else {
    discountBadge?.classList.add("hidden");
  }

  if (designChk?.checked) subtotal += 25;
  if (deliveryChk?.checked) subtotal += 8;

  const finalTotal = Math.round(subtotal);
  totalEl.textContent = `${finalTotal} AZN`;
}

function sendCalculatorWhatsApp() {
  const prodSelect = document.getElementById("calcProduct");
  const sizeSelect = document.getElementById("calcSize");
  const matSelect = document.getElementById("calcMaterial");
  const qtyInput = document.getElementById("calcQty");
  const designChk = document.getElementById("calcDesign");
  const deliveryChk = document.getElementById("calcDelivery");
  const totalEl = document.getElementById("calcTotalDisplay");

  const prodObj = products.find(p => p.id === prodSelect?.value);
  const prodTitle = prodObj?.educational[currentLang]?.title || "RollUp Məhsulu";
  const size = sizeSelect?.value || "";
  const matText = matSelect?.options[matSelect.selectedIndex]?.text || "";
  const qty = qtyInput?.value || "1";
  const design = designChk?.checked ? 'Bəli (+25 AZN)' : 'Xeyr';
  const delivery = deliveryChk?.checked ? 'Bəli (+8 AZN)' : 'Xeyr';
  const total = totalEl?.textContent || "";

  let msg = `*RollUp.az - Rəsmi Qiymət Təklifi:*\n` +
            `• Məhsul: ${prodTitle}\n` +
            `• Ölçü: ${size}\n` +
            `• Baner Materialı: ${matText}\n` +
            `• Say: ${qty} ədəd\n` +
            `• Dizayn xidməti: ${design}\n` +
            `• Çatdırılma: ${delivery}\n` +
            `• *Yekun Məbləğ: ${total}*\n\n` +
            `Zəhmət olmasa sifarişi qeydə alasınız.`;

  const url = `https://wa.me/994502333754?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// ==========================================
// 9. FAQ ACCORDION
// ==========================================
function initFaqAccordion() {
  document.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-btn");
    const content = item.querySelector(".faq-content");
    const arrow = item.querySelector(".faq-arrow");

    btn?.addEventListener("click", () => {
      const isOpen = !content?.classList.contains("hidden");
      document.querySelectorAll(".faq-content").forEach(c => c.classList.add("hidden"));
      document.querySelectorAll(".faq-arrow").forEach(a => a.classList.remove("rotate-180"));

      if (!isOpen) {
        content?.classList.remove("hidden");
        arrow?.classList.add("rotate-180");
      }
    });
  });
}

// ==========================================
// 10. MOBILE MENU & CONTACT
// ==========================================
function initMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeMobileMenuBtn");

  menuBtn?.addEventListener("click", () => {
    mobileNav?.classList.toggle("hidden");
  });

  closeBtn?.addEventListener("click", () => {
    mobileNav?.classList.add("hidden");
  });

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav?.classList.add("hidden");
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const waDirectBtn = document.getElementById("contactWaBtn");

  // Terminal Chip selection toggle
  document.querySelectorAll("#contactForm .terminal-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const parent = chip.parentElement;
      if (parent) {
        parent.querySelectorAll(".terminal-chip").forEach(c => c.classList.remove("selected"));
        chip.classList.add("selected");
      }
    });
  });

  function getSelectedConfig() {
    const activeProd = document.querySelector("#contactForm [data-product].selected")?.getAttribute("data-product") || "Roll Up Silver";
    const activeDesign = document.querySelector("#contactForm [data-design].selected")?.getAttribute("data-design") === "need" ? "Dizayn hazırlanmalıdır (+25 AZN)" : "Hazır çap faylı var (0 AZN)";
    const activeUrgency = document.querySelector("#contactForm [data-urgency].selected")?.getAttribute("data-urgency") === "24h" ? "Ekspress 24 Saat" : "Standart 2-3 iş günü";
    const name = form?.name?.value.trim() || "";
    const phone = form?.phone?.value.trim() || "";
    const msg = form?.message?.value.trim() || "";

    return { activeProd, activeDesign, activeUrgency, name, phone, msg };
  }

  function sendToWhatsApp() {
    const { activeProd, activeDesign, activeUrgency, name, phone, msg } = getSelectedConfig();
    const text = `Salam RollUp.az! Saytdan yeni sifariş konfiqurasiyası göndərirəm:\n\n` +
      `📌 Məhsul: ${activeProd}\n` +
      `🎨 Dizayn: ${activeDesign}\n` +
      `⚡ Müddət: ${activeUrgency}\n` +
      `👤 Ad/Şirkət: ${name || "Qeyd edilməyib"}\n` +
      `📞 Telefon: ${phone || "Qeyd edilməyib"}` +
      (msg ? `\n📝 Qeyd: ${msg}` : "");

    const url = `https://wa.me/994502333754?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    sendToWhatsApp();
  });

  waDirectBtn?.addEventListener("click", () => {
    sendToWhatsApp();
  });
}

