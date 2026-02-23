// script.js

/* Scroll animations */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optionally unobserve to avoid repeated triggers
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

/* --- Internationalization (i18n) --- */
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.community': 'Community',
        'nav.projects': 'Our Projects',
        'nav.contact': 'Contact',
        'btn.getInTouch': 'Get in Touch',
        'btn.viewListings': 'View Listings',
        'btn.talkAgent': 'Talk to an Agent',
        'btn.videoCall': 'Video Call',
        'hero.tagline': 'Exclusive Collection',
        'hero.headline': 'Find Your Dream Home — Premium Listings, Personalized Service',
        'hero.subcopy': 'Curated properties in premier neighborhoods with dedicated agents to guide you every step of the way.',
        'search.placeholder.location': 'Location (e.g., Beverly Hills)',
        'search.placeholder.min': 'Min $',
        'search.placeholder.max': 'Max $',
        'search.type.all': 'All Types',
        'search.type.house': 'House',
        'search.type.condo': 'Condo',
        'search.type.townhouse': 'Townhouse',
        'about.title': 'About Luxe Estates',
        'about.lead': 'Luxe Estates is a premier luxury real estate firm dedicated to delivering exceptional service, market expertise, and confidential client representation.',
        'about.cta': 'Speak with a Senior Agent',
        'form.name': 'Name',
        'form.email': 'Email',
        'form.message': 'Message',
        'form.name.placeholder': 'Your name',
        'form.email.placeholder': 'your@email.com',
        'form.message.placeholder': 'How can we help?',
        'projects.subcopy': 'Selected developments and restorations reflecting our design and development expertise.',
        'projects.latest': 'Latest Projects',
        'projects.recent': 'Recent Projects',
        'contact.title': 'Get Personalized Guidance',
        'contact.lead': 'Schedule a private consultation with a senior agent to discuss your goals.',
        'footer.legal': 'Terms & Privacy | Cookie Policy | Accessibility',
        'btn.viewDetails': 'View Details',
        'press.title': 'Press & Media',
        'press.lead': 'Latest news, press releases, and media resources from Luxe Estates.',
        'press.launchTitle': 'Launch of Riviera Residences',
        'press.launchDate': 'Jan 6, 2026',
        'press.launchSummary': 'Luxe Estates announces the launch of the Riviera Residences, a collection of waterfront homes featuring sustainable amenities and private marina access.',
        'press.download': 'Download Press Kit',
        'btn.search': 'Search',
        'search.noResults': 'No results found. Try broadening your search.',
        'btn.send': 'Send Message',
        'btn.videoCall': 'Video Call',
        'video.title': 'Start a Video Call',
        'video.lead': 'Connect instantly with a senior agent for a live walk-through or consultation.',
        'video.how.title': 'How it works',
        'video.how.step1': 'Click Start Video Call to open a secure meeting link.',
        'video.how.step2': 'Allow camera and microphone access for a live walkthrough.',
        'video.how.step3': 'Discuss your requirements and next steps with a senior agent.',
        'video.note': 'Meetings use Google Meet by default; you can also schedule a call if you prefer a set time.',
        'video.cta.now': 'Start Video Call',
        'video.schedule.title': 'Schedule a Call',
        'video.schedule.success': 'Thank you — your call request has been submitted.' ,
        'ratings.title': 'Ratings & Reviews',
        'ratings.lead': 'Unbiased feedback from our clients and partners.',
        'ratings.summary': 'Based on 1,482 verified client reviews'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Nosotros',
        'nav.community': 'Comunidad',
        'nav.projects': 'Nuestros Proyectos',
        'nav.contact': 'Contacto',
        'btn.getInTouch': 'Contactar',
        'btn.viewListings': 'Ver Propiedades',
        'btn.talkAgent': 'Hablar con un Agente',
        'btn.videoCall': 'Llamada de Video',
        'hero.tagline': 'Colección Exclusiva',
        'hero.headline': 'Encuentra la Casa de tus Sueños — Listados Premium, Servicio Personalizado',
        'hero.subcopy': 'Propiedades seleccionadas en zonas premium con agentes dedicados que te guían en cada paso.',
        'search.placeholder.location': 'Ubicación (ej., Beverly Hills)',
        'search.placeholder.min': 'Mín $',
        'search.placeholder.max': 'Máx $',
        'search.type.all': 'Todos los Tipos',
        'search.type.house': 'Casa',
        'search.type.condo': 'Condominio',
        'search.type.townhouse': 'Adosado',
        'about.title': 'Sobre Luxe Estates',
        'about.lead': 'Luxe Estates es una firma inmobiliaria de lujo dedicada a ofrecer un servicio excepcional, experiencia de mercado y representación confidencial para clientes.',
        'projects.latest': 'Proyectos Recientes',
        'projects.recent': 'Proyectos Anteriores',
        'contact.title': 'Guía Personalizada',
        'contact.lead': 'Agenda una consulta privada con un agente senior para hablar de tus objetivos.',
        'about.cta': 'Habla con un Agente Senior',
        'form.name': 'Nombre',
        'form.email': 'Correo',
        'form.message': 'Mensaje',
        'form.name.placeholder': 'Tu nombre',
        'form.email.placeholder': 'tu@email.com',
        'form.message.placeholder': '¿En qué podemos ayudar?',
        'projects.subcopy': 'Proyectos seleccionados y restauraciones que reflejan nuestra experiencia en diseño y desarrollo.',
        'footer.legal': 'Términos y Privacidad | Política de Cookies | Accesibilidad',
        'btn.viewDetails': 'Ver detalles',
        'press.title': 'Prensa y Medios',
        'press.lead': 'Últimas noticias, comunicados de prensa y recursos de medios de Luxe Estates.',
        'press.launchTitle': 'Lanzamiento de Riviera Residences',
        'press.launchDate': '6 de ene. de 2026',
        'press.launchSummary': 'Luxe Estates anuncia el lanzamiento de Riviera Residences, una colección de viviendas frente al mar con servicios sostenibles y acceso a marina privada.',
        'press.download': 'Descargar kit de prensa',
        'btn.search': 'Buscar',
        'search.noResults': 'No se han encontrado resultados. Intenta ampliar la búsqueda.',
        'btn.send': 'Enviar mensaje',
        'btn.videoCall': 'Llamada de Video',
        'video.title': 'Iniciar Llamada de Video',
        'video.lead': 'Conéctate al instante con un agente senior para una visita guiada o consulta.',
        'video.how.title': 'Cómo funciona',
        'video.how.step1': 'Haz clic en Iniciar Llamada de Video para abrir un enlace de reunión seguro.',
        'video.how.step2': 'Permite el acceso a la cámara y el micrófono para una visita en vivo.',
        'video.how.step3': 'Discute tus requisitos y los próximos pasos con un agente senior.',
        'video.note': 'Las reuniones usan Google Meet por defecto; también puedes programar una llamada si prefieres un horario.',
        'video.cta.now': 'Iniciar Llamada',
        'video.schedule.title': 'Programar una llamada',
        'video.schedule.success': 'Gracias — tu solicitud de llamada ha sido enviada.',
        'ratings.title': 'Calificaciones y Reseñas',
        'ratings.lead': 'Comentarios imparciales de nuestros clientes y socios.',
        'ratings.summary': 'Basado en 1.482 reseñas verificadas de clientes'
    },
    ar: {
        'nav.home': 'الرئيسية',
        'nav.about': 'معلومات عنا',
        'nav.community': 'المجتمع',
        'nav.projects': 'مشاريعنا',
        'nav.contact': 'اتصل بنا',
        'btn.getInTouch': 'تواصل معنا',
        'btn.viewListings': 'عرض العقارات',
        'btn.talkAgent': 'تحدث مع وكيل',
        'btn.videoCall': 'مكالمة فيديو',
        'hero.tagline': 'مجموعة حصرية',
        'hero.headline': 'اعثر على منزلك المثالي — قوائم مميزة، خدمة مخصصة',
        'hero.subcopy': 'عقارات مختارة في أرقى المناطق مع وكلاء مخصصين لمرافقتك في كل خطوة.',
        'search.placeholder.location': 'الموقع (مثال: بيفرلي هيلز)',
        'search.placeholder.min': 'الحد الأدنى $',
        'search.placeholder.max': 'الحد الأقصى $',
        'search.type.all': 'كل الأنواع',
        'search.type.house': 'منزل',
        'search.type.condo': 'شقة',
        'search.type.townhouse': 'تاون هاوس',
        'about.title': 'عن Luxe Estates',
        'about.lead': 'Luxe Estates هي شركة عقارية فاخرة مكرسة لتقديم خدمة استثنائية وخبرة سوقية وتمثيل سري للعملاء.',
        'projects.latest': 'أحدث المشاريع',
        'projects.recent': 'مشاريع سابقة',
        'contact.title': 'إرشاد شخصي',
        'contact.lead': 'حدد موعدًا لاستشارة خاصة مع وكيل أول لمناقشة أهدافك.',
        'about.cta': 'تحدث مع وكيل أول',
        'form.name': 'الاسم',
        'form.email': 'البريد الإلكتروني',
        'form.message': 'الرسالة',
        'form.name.placeholder': 'اسمك',
        'form.email.placeholder': 'البريد@الإلكتروني.com',
        'form.message.placeholder': 'كيف يمكننا المساعدة؟',
        'projects.subcopy': 'مشاريع مختارة وترميمات تعكس خبرتنا في التصميم والتطوير.',
        'footer.legal': 'الشروط والخصوصية | سياسة ملفات التعقب | إمكانية الوصول',
        'btn.viewDetails': 'عرض التفاصيل',
        'press.title': 'الأخبار والإعلام',
        'press.lead': 'أحدث الأخبار والبيانات الصحفية وموارد الإعلام من Luxe Estates.',
        'press.launchTitle': 'إطلاق Riviera Residences',
        'press.launchDate': '6 يناير 2026',
        'press.launchSummary': 'تعلن Luxe Estates عن إطلاق Riviera Residences، مجموعة من المنازل على الواجهة البحرية توفر مرافق مستدامة وإمكانية الوصول إلى مرسى خاص.',
        'press.download': 'تحميل حزمة الصحافة',
        'btn.search': 'بحث',
        'search.noResults': 'لم يتم العثور على نتائج. حاول توسيع نطاق البحث.',
        'btn.send': 'إرسال رسالة',
        'btn.videoCall': 'مكالمة فيديو',
        'video.title': 'بدء مكالمة فيديو',
        'video.lead': 'اتصل فورًا بوكيل أول لإجراء جولة مباشرة أو استشارة.',
        'video.how.title': 'كيفية العمل',
        'video.how.step1': 'انقر فوق بدء مكالمة فيديو لفتح رابط اجتماع آمن.',
        'video.how.step2': 'سمح بالوصول إلى الكاميرا والميكروفون للجولة المباشرة.',
        'video.how.step3': 'ناقش متطلباتك والخطوات التالية مع وكيل أول.',
        'video.note': 'تستخدم الاجتماعات Google Meet بشكل افتراضي؛ يمكنك أيضًا جدولة مكالمة إذا كنت تفضل وقتًا محددًا.',
        'video.cta.now': 'ابدأ المكالمة',
        'video.schedule.title': 'جدولة مكالمة',
        'video.schedule.success': 'شكرًا — تم إرسال طلب المكالمة الخاص بك.',
        'ratings.title': 'التقييمات والمراجعات',
        'ratings.lead': 'آراء غير متحيزة من عملائنا وشركائنا.',
        'ratings.summary': 'بناءً على 1,482 تقييمًا موثقًا من العملاء'
    },
    zh: {
        'nav.home': '首页',
        'nav.about': '关于我们',
        'nav.community': '社区',
        'nav.projects': '我们的项目',
        'nav.contact': '联系',
        'btn.getInTouch': '联系我们',
        'btn.viewListings': '查看房源',
        'btn.talkAgent': '联系代理',
        'btn.videoCall': '视频通话',
        'hero.tagline': '独家系列',
        'hero.headline': '寻找理想住所 — 高端房源，贴心服务',
        'hero.subcopy': '精心挑选的优质房源，资深经纪人全程为您服务。',
        'search.placeholder.location': '位置（例如：比佛利山庄）',
        'search.placeholder.min': '最低 $',
        'search.placeholder.max': '最高 $',
        'search.type.all': '所有类型',
        'search.type.house': '独栋',
        'search.type.condo': '公寓',
        'search.type.townhouse': '联排别墅',
        'about.title': '关于 Luxe Estates',
        'about.lead': 'Luxe Estates 是一家高端房地产公司，致力于提供卓越服务、专业市场洞察与保密客户代表。',
        'projects.latest': '最新项目',
        'projects.recent': '近期项目',
        'contact.title': '个性化指导',
        'contact.lead': '安排资深经纪人的私人咨询，讨论您的目标。',
        'about.cta': '与资深经纪人联系',
        'form.name': '姓名',
        'form.email': '电子邮件',
        'form.message': '留言',
        'form.name.placeholder': '您的姓名',
        'form.email.placeholder': 'your@email.com',
        'form.message.placeholder': '我们如何能帮您？',
        'projects.subcopy': '精选开发与修复项目，体现我们的设计与开发专业性。',
        'footer.legal': '条款与隐私 | Cookie 政策 | 无障碍',
        'btn.viewDetails': '查看详情',
        'press.title': '新闻与媒体',
        'press.lead': '来自 Luxe Estates 的最新消息、新闻稿和媒体资源。',
        'press.launchTitle': 'Riviera Residences 发布',
        'press.launchDate': '2026 年 1 月 6 日',
        'press.launchSummary': 'Luxe Estates 宣布发布 Riviera Residences，一系列滨水住宅，具有可持续设施和私人码头通道。',
        'press.download': '下载媒体包',
        'btn.search': '搜索',
        'search.noResults': '未找到结果。请尝试放宽搜索范围。',
        'btn.send': '发送消息',
        'btn.videoCall': '视频通话',
        'video.title': '开始视频通话',
        'video.lead': '立即与资深经纪人连接，进行实时带看或咨询。',
        'video.how.title': '操作流程',
        'video.how.step1': '点击“开始视频通话”打开安全会议链接。',
        'video.how.step2': '允许摄像头和麦克风访问以进行实时查看。',
        'video.how.step3': '与资深经纪人讨论需求和下一步安排。',
        'video.note': '会议默认使用 Google Meet；如果您更愿意安排固定时间，也可预约通话。',
        'video.cta.now': '开始视频通话',
        'video.schedule.title': '预约通话',
        'video.schedule.success': '谢谢 — 您的通话请求已提交。',
        'ratings.title': '评分与评价',
        'ratings.lead': '来自我们客户和合作伙伴的客观反馈。',
        'ratings.summary': '基于 1,482 条已验证客户评价'
    }
};

let currentLang = localStorage.getItem('luxe_lang') || 'en';

function applyTranslations(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('luxe_lang', lang);

    // Keep layout direction consistent (always LTR) to avoid inversion when selecting RTL languages like Arabic or Urdu.

    // Replace all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang][key];
        if (typeof text !== 'undefined') {
            if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'select') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Update placeholders for search inputs
    const loc = document.getElementById('location');
    if (loc) loc.placeholder = translations[lang]['search.placeholder.location'];
    const min = document.getElementById('minPrice');
    if (min) min.placeholder = translations[lang]['search.placeholder.min'];
    const max = document.getElementById('maxPrice');
    if (max) max.placeholder = translations[lang]['search.placeholder.max'];

    // Update select options text
    const typeSelect = document.getElementById('type');
    if (typeSelect) {
        typeSelect.querySelectorAll('option').forEach(opt => {
            const val = opt.value;
            if (val === '') opt.textContent = translations[lang]['search.type.all'];
            if (val === 'house') opt.textContent = translations[lang]['search.type.house'];
            if (val === 'condo') opt.textContent = translations[lang]['search.type.condo'];
            if (val === 'townhouse') opt.textContent = translations[lang]['search.type.townhouse'];
        });
    }

    // Update navbar dynamic items (re-render nav texts)
    document.querySelectorAll('[data-i18n-nav]').forEach(el => {
        const key = el.getAttribute('data-i18n-nav');
        el.textContent = translations[lang][key] || el.textContent;
    });

    // Re-render dynamic property content in the current language
    const currentGrid = document.getElementById('listings-grid');
    if (currentGrid) injectFeaturedProperties(propertyData);
}


/* Global UI initialization */
document.addEventListener('DOMContentLoaded', () => {
    injectNavbar();
    injectFooter();
    injectFeaturedProperties(propertyData);
    setupSearch();
    animateOnScroll();

    // Apply saved language immediately
    applyTranslations(currentLang);

    // Keep existing language selector behavior as backup (homepage selector)
    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (!btn) return;
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyTranslations(btn.getAttribute('data-lang'));
        });
    }

    // If navbar dropdown exists, set initial and listen for changes
    const navLang = document.getElementById('nav-lang');
    if (navLang) {
        navLang.value = currentLang;
        navLang.addEventListener('change', (e) => applyTranslations(e.target.value));
    }
});

const navItems = [
    { key: 'nav.home', name: 'Home', link: 'index.html' },
    { key: 'nav.about', name: 'About Us', link: 'about.html' },
    { key: 'nav.community', name: 'Community', link: 'community.html' },
    { key: 'nav.projects', name: 'Our Projects', link: 'projects.html' },
    { key: 'nav.contact', name: 'Contact', link: 'contact.html' },
];

function injectNavbar() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const header = document.createElement('header');
    header.className = 'navbar';

    const navHTML = `
        <div class="container">
            <a href="index.html" class="logo">LUXE ESTATES</a>
            <nav class="nav-links">
                ${navItems.map(item => `
                    <a href="${item.link}" class="${currentPage === item.link ? 'active' : ''}" data-i18n-nav="${item.key}">
                        ${item.name}
                    </a>
                `).join('')}
            </nav>
            <a href="get-in-touch.html" class="btn" data-i18n="btn.getInTouch">Get in Touch</a>
            <a href="video-call.html" class="btn btn-primary nav-video" data-i18n="btn.videoCall" aria-label="Start a Video Call" style="display:inline-flex; align-items:center; gap:0.5rem;">
                <img src="https://simpleicons.org/icons/zoom.svg" alt="" aria-hidden="true" style="width:18px;height:18px;" />
                <span>Video Call</span>
            </a>
            <a href="https://wa.me/15551234567" class="nav-whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="https://simpleicons.org/icons/whatsapp.svg" alt="WhatsApp" /></a>
            <select id="nav-lang" class="lang-dropdown" aria-label="Select language">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ar">العربية</option>
                <option value="zh">中文</option>
            </select>
        </div>
    `;

    header.innerHTML = navHTML;
    document.body.prepend(header);

    // Set the dropdown to current lang
    const langSel = document.getElementById('nav-lang');
    if (langSel) {
        langSel.value = currentLang;
        langSel.addEventListener('change', (e) => {
            applyTranslations(e.target.value);
            // update selected button states if present
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            const btn = document.querySelector(`.lang-btn[data-lang="${e.target.value}"]`);
            if (btn) btn.classList.add('active');
        });
    }
}

function injectFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="logo">LUXE ESTATES</div>
                    <p>Redefining luxury living with sustainable, community-focused developments across the globe.</p>
                    <div class="store-badges" style="margin-top:1rem;">
                        <a href="https://apps.apple.com/" target="_blank" rel="noopener">
                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                        </a>
                        <a href="https://play.google.com/store" target="_blank" rel="noopener" style="margin-left:0.75rem;">
                            <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Get it on Google Play" />
                        </a>
                    </div>

                    <div class="footer-social" style="margin-top:1.25rem; display:flex; gap:0.75rem; align-items:center;">
                        <span style="font-weight:600; color:var(--color-text-primary);">Luxe Estates</span>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
                            <img src="https://simpleicons.org/icons/facebook.svg" alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
                            <img src="https://simpleicons.org/icons/instagram.svg" alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
                            <img src="https://simpleicons.org/icons/linkedin.svg" alt="LinkedIn" />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube">
                            <img src="https://simpleicons.org/icons/youtube.svg" alt="YouTube" />
                        </a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="press.html">Press</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="projects.html">Latest Projects</a></li>
                        <li><a href="community.html">Community</a></li>
                        <li><a href="ratings.html">Ratings</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li>123 Luxury Lane</li>
                        <li>Beverly Hills, CA</li>
                        <li>+1 (555) 123-4567</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom" style="display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap; margin-top:1.5rem; border-top:1px solid rgba(255,255,255,0.03); padding-top:1rem;">
                <div class="footer-legal" data-i18n="footer.legal" style="color:var(--color-text-secondary); font-size:0.9rem;">Terms & Privacy | Cookie Policy | Accessibility</div>
                <div class="copyright" style="color:var(--color-text-secondary); font-size:0.9rem;">&copy; 2026 Luxe Estates. All rights reserved.</div>
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}

/* Sample property data (placeholder images from Unsplash) */
const propertyData = [
    {
        id: 1,
        title: 'Oceanfront Modern Villa',
        title_es: 'Villa Moderna Frente al Mar',
        title_ar: 'فيلا عصرية على الواجهة البحرية',
        title_zh: '海滨现代别墅',
        location: 'Malibu, CA',
        type: 'house',
        price: 12500000,
        beds: 5,
        baths: 6,
        sqft: 6800,
        img: 'https://images.unsplash.com/photo-1560185127-6e0ea2a6a51b?q=80&w=1400&auto=format&fit=crop',
        desc: 'Stunning ocean views, infinity pool, and contemporary finishes.',
        desc_es: 'Vistas al océano, piscina infinita y acabados contemporáneos.',
        desc_ar: 'إطلالات بحرية رائعة، مسبح إنفينيتي، وتشطيبات عصرية.',
        desc_zh: '壮观的海景、无边泳池和现代化装饰。'
    },
    {
        id: 2,
        title: 'Palm-Tree Estate',
        title_es: 'Finca Palmera',
        title_ar: 'عقار أشجار النخيل',
        title_zh: '棕榈庄园',
        location: 'Beverly Hills, CA',
        type: 'house',
        price: 18500000,
        beds: 7,
        baths: 8,
        sqft: 12000,
        img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1400&auto=format&fit=crop',
        desc: 'Private gated estate with resort-style grounds and staff quarters.',
        desc_es: 'Finca privada con áreas tipo resort y dependencias para el personal.',
        desc_ar: 'عقار محاط بسياج خاص مع مرافق على طراز المنتجعات ومساكن للموظفين.',
        desc_zh: '带私人门禁的庄园，度假式庭院和员工宿舍。'
    },
    {
        id: 3,
        title: 'Skyline Penthouse',
        title_es: 'Ático Skyline',
        title_ar: 'بنتهاوس أفق المدينة',
        title_zh: '天际线顶层公寓',
        location: 'New York, NY',
        type: 'condo',
        price: 4900000,
        beds: 3,
        baths: 3,
        sqft: 2600,
        img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop',
        desc: 'Panoramic city views, rooftop terrace, and concierge service.',
        desc_es: 'Vistas panorámicas, terraza en la azotea y servicio de conserjería.',
        desc_ar: 'إطلالات بانورامية على المدينة، تراس على السطح، وخدمة كونسيرج.',
        desc_zh: '全景城市景观、屋顶露台和礼宾服务。'
    },
    {
        id: 4,
        title: 'Waterfront Townhouse',
        title_es: 'Adosado Frente al Agua',
        title_ar: 'تاون هاوس على الواجهة المائية',
        title_zh: '滨水联排别墅',
        location: 'Miami, FL',
        type: 'townhouse',
        price: 2350000,
        beds: 4,
        baths: 4,
        sqft: 3800,
        img: 'https://images.unsplash.com/photo-1505691723518-36a5b60f95fd?q=80&w=1400&auto=format&fit=crop',
        desc: 'Modern finishes with private dock access and beach proximity.',
        desc_es: 'Acabados modernos con acceso a muelle privado y proximidad a la playa.',
        desc_ar: 'تشطيبات حديثة مع وصول إلى رصيف خاص وقرب من الشاطئ.',
        desc_zh: '现代化装饰，私人码头通道，靠近海滩。'
    },
    {
        id: 5,
        title: 'Historic Manor',
        title_es: 'Casa Señorial Histórica',
        title_ar: 'قصر تاريخي',
        title_zh: '历史庄园',
        location: 'Charlottesville, VA',
        type: 'house',
        price: 1475000,
        beds: 6,
        baths: 5,
        sqft: 7400,
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop',
        desc: 'Classic architecture, large acreage, and impeccably restored interiors.',
        desc_es: 'Arquitectura clásica, grandes terrenos y interiores perfectamente restaurados.',
        desc_ar: 'عمارة كلاسيكية، أراضٍ واسعة، وديكورات داخلية مُرممة بدقة.',
        desc_zh: '经典建筑，大面积土地，精美修复的室内装饰。'
    }
];

/* Render listing cards */
function injectFeaturedProperties(list = propertyData) {
    const grid = document.getElementById('listings-grid');
    if (!grid) return;

    grid.innerHTML = list.map(p => {
        // choose translated title/desc if available
        const title = currentLang === 'en' ? p.title : (p['title_' + currentLang] || p.title);
        const desc = currentLang === 'en' ? p.desc : (p['desc_' + currentLang] || p.desc);
        const typeLabel = translations[currentLang] && translations[currentLang]['search.type.' + p.type] ? translations[currentLang]['search.type.' + p.type] : p.type.toUpperCase();

        return `
        <div class="card fade-in" data-location="${p.location.toLowerCase()}" data-type="${p.type}" data-price="${p.price}">
            <div class="card-image">
                <img src="${p.img}" alt="${title}">
            </div>
            <div class="card-content">
                <div class="card-meta">${typeLabel} • ${p.location}</div>
                <h3>${title}</h3>
                <p>${desc}</p>
                <p style="margin-bottom:1rem; font-weight:600;">${formatPrice(p.price)} • ${p.beds} bd • ${p.baths} ba • ${p.sqft} sqft</p>
                <button class="btn" data-id="${p.id}" onclick="viewDetails(${p.id})">${translations[currentLang]['btn.viewDetails'] || 'View Details'}</button>
            </div>
        </div>
    `}).join('');

    // Re-run scroll animations observer on newly added items
    const fadeItems = document.querySelectorAll('.fade-in');
    fadeItems.forEach(item => observer.observe(item));
}

/* Simple search and filter */
function setupSearch() {
    const form = document.getElementById('search-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        filterProperties();
    });
}

function filterProperties() {
    const location = (document.getElementById('location')?.value || '').toLowerCase().trim();
    const type = document.getElementById('type')?.value || '';
    const min = parseInt(document.getElementById('minPrice')?.value || '0', 10);
    const maxRaw = document.getElementById('maxPrice')?.value || '';
    const max = maxRaw === '' ? Infinity : parseInt(maxRaw, 10);

    const results = propertyData.filter(p => {
        const matchesLocation = !location || p.location.toLowerCase().includes(location);
        const matchesType = !type || p.type === type;
        const matchesPrice = (!min || p.price >= min) && (!max || p.price <= max);
        return matchesLocation && matchesType && matchesPrice;
    });

    injectFeaturedProperties(results);
    if (results.length === 0) {
        const grid = document.getElementById('listings-grid');
        grid.innerHTML = `<p style="color:var(--color-text-secondary);">${translations[currentLang]['search.noResults'] || 'No results found. Try broadening your search.'}</p>`;
    }
}

/* Modal details */
function viewDetails(id) {
    const p = propertyData.find(x => x.id === id);
    if (!p) return;

    const modal = document.getElementById('property-modal');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <div style="display:flex; gap:1rem; flex-wrap:wrap;">
            <div style="flex:1 1 320px;">
                <img src="${p.img}" alt="${p.title}" style="width:100%; height:300px; object-fit:cover; border-radius:4px;">
            </div>
            <div style="flex:1 1 320px;">
                <h3 style="margin-top:0;">${p.title}</h3>
                <p style="color:var(--color-text-secondary);">${p.location} • ${formatPrice(p.price)}</p>
                <p style="margin-top:0.75rem;">${p.desc}</p>
                <ul style="margin-top:1rem; color:var(--color-text-secondary);">
                    <li><strong>${p.beds}</strong> beds</li>
                    <li><strong>${p.baths}</strong> baths</li>
                    <li><strong>${p.sqft}</strong> sqft</li>
                </ul>
                <div style="margin-top:1rem;"><a class="btn btn-primary" href="contact.html">Contact Agent</a></div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
}

// Modal close logic
document.addEventListener('click', (e) => {
    const modal = document.getElementById('property-modal');
    if (!modal) return;

    if (e.target.id === 'modal-close' || e.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }
});

/* Scroll animations (defined above) */

function animateOnScroll() {
    const items = document.querySelectorAll('.fade-in');
    items.forEach(i => observer.observe(i));
}

/* Utilities */
function formatPrice(n) {
    return '$' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

