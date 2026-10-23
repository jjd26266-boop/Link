import { LanguageKey } from '../types';

export interface Translations {
  siteTitle: string;
  onlineNow: string;
  promoBannerText: string;
  promoWatchBtn: string;
  sponsoredTag: string;
  sponsoredAdTitle: string;
  sponsoredAdSubtitle: string;
  sponsoredAdBtn: string;
  sponsoredCardTitle: string;
  sponsoredCardSubtitle: string;
  sponsoredCardBtn: string;
  safeLinkPrefix: string;
  safeLinkBadge: string;
  videoClickNotice: string;
  watchVideoNowBtn: string;
  watchInPageBtn: string;
  copyLinkBtn: string;
  copiedSuccess: string;
  shareLinkBtn: string;
  directUrlLabel: string;
  floatingBarText: string;
  floatingBarBtn: string;
  views: string;
  likes: string;
  verifiedPublisher: string;
  serverSelection: string;
  fastCDN: string;
  directMirror: string;
  vipStream: string;
  bufferingTitle: string;
  bufferingSubtitle: string;
  unlockStreamBtn: string;
  relatedVideos: string;
  comments: string;
  addComment: string;
  postComment: string;
  settingsTitle: string;
  directLinkConfig: string;
  saveChanges: string;
  resetDefaults: string;
  shareModalTitle: string;
  themeToggle: string;
}

export const translations: Record<LanguageKey, Translations> = {
  en: {
    siteTitle: 'VideoHub',
    onlineNow: 'Online',
    promoBannerText: 'Unlimited High-Speed Video Streaming & Direct Links',
    promoWatchBtn: 'Watch',
    sponsoredTag: 'SPONSORED',
    sponsoredAdTitle: 'Ultra 4K Ultra-Fast Streaming Network',
    sponsoredAdSubtitle: 'No lag • Direct server connection • 0 buffering',
    sponsoredAdBtn: 'Stream Now',
    sponsoredCardTitle: 'Online HD Video Streaming Experience',
    sponsoredCardSubtitle: 'Full 1080p 60FPS high bitrate playback on mobile & desktop',
    sponsoredCardBtn: 'Visit',
    safeLinkPrefix: 'Safe Video Link',
    safeLinkBadge: 'Verified Secure SSL',
    videoClickNotice: 'Click the button below to watch the video',
    watchVideoNowBtn: 'Watch Video Now',
    watchInPageBtn: 'Watch In-Page',
    copyLinkBtn: 'Copy Link',
    copiedSuccess: 'Link copied to clipboard!',
    shareLinkBtn: 'Share Link',
    directUrlLabel: 'Direct Stream URL',
    floatingBarText: 'Enjoy High-Speed HD Video & Fast Buffering!',
    floatingBarBtn: 'Open',
    views: 'views',
    likes: 'Likes',
    verifiedPublisher: 'Verified Streamer',
    serverSelection: 'Active Server',
    fastCDN: 'Server 1: Fast CDN (Recommended)',
    directMirror: 'Server 2: Direct Mirror 1080p',
    vipStream: 'Server 3: VIP High Bitrate',
    bufferingTitle: 'Connecting to Secure HD Stream...',
    bufferingSubtitle: 'Direct high-speed buffer ready. Click unlock to stream.',
    unlockStreamBtn: '▶ Play Video in Full HD',
    relatedVideos: 'Recommended Videos For You',
    comments: 'User Comments',
    addComment: 'Leave a comment...',
    postComment: 'Send',
    settingsTitle: 'Landing Page Settings',
    directLinkConfig: 'Direct Link / Adsterra Smartlink URL',
    saveChanges: 'Save Configuration',
    resetDefaults: 'Reset Defaults',
    shareModalTitle: 'Share Video Link',
    themeToggle: 'Toggle Theme',
  },
  bn: {
    siteTitle: 'VideoHub',
    onlineNow: 'অনলাইনে আছেন',
    promoBannerText: 'আনলিমিটেড হাই-স্পিড ভিডিও স্ট্রিমিং এবং ডিরেক্ট লিংক',
    promoWatchBtn: 'দেখুন',
    sponsoredTag: 'বিজ্ঞাপন',
    sponsoredAdTitle: 'আল্ট্রা 4K সুপার-ফাস্ট স্ট্রিমিং নেটওয়ার্ক',
    sponsoredAdSubtitle: 'নো বাফারিং • হাই স্পিড সার্ভার কানেকশন',
    sponsoredAdBtn: 'এখনই স্ট্রিম করুন',
    sponsoredCardTitle: 'অনলাইন এইচডি ভিডিও স্ট্রিমিং এক্সপেরিয়েন্স',
    sponsoredCardSubtitle: 'সম্পূর্ণ 1080p 60FPS হাই বিটরেট মোবাইল ও কম্পিউটারে',
    sponsoredCardBtn: 'ভিজিট করুন',
    safeLinkPrefix: 'নিরাপদ ভিডিও লিংক',
    safeLinkBadge: 'ভেরিফায়েড নিরাপদ SSL',
    videoClickNotice: 'ভিডিওটি দেখতে নিচের বাটনে ক্লিক করুন',
    watchVideoNowBtn: 'এখনই ভিডিও দেখুন',
    watchInPageBtn: 'ইন-পেজ দেখুন',
    copyLinkBtn: 'লিংক কপি করুন',
    copiedSuccess: 'লিঙ্ক সফলভাবে কপি করা হয়েছে!',
    shareLinkBtn: 'লিংক শেয়ার করুন',
    directUrlLabel: 'ডিরেক্ট স্ট্রিম লিংক',
    floatingBarText: 'উপভোগ করুন হাই-স্পিড এইচডি ভিডিও এবং ফাস্ট বাফারিং!',
    floatingBarBtn: 'ওপেন করুন',
    views: 'ভিউ',
    likes: 'পছন্দ',
    verifiedPublisher: 'ভেরিফায়েড প্রকাশক',
    serverSelection: 'সক্রিয় সার্ভার',
    fastCDN: 'সার্ভার ১: ফাস্ট সিডিএন (সুপারিশকৃত)',
    directMirror: 'সার্ভার ২: ডিরেক্ট মিরর 1080p',
    vipStream: 'সার্ভার ৩: ভিআইপি হাই স্পিড',
    bufferingTitle: 'নিরাপদ এইচডি স্ট্রিমে সংযুক্ত হচ্ছে...',
    bufferingSubtitle: 'হাই-স্পিড ভিডিও বাফারিং সম্পন্ন। সম্পূর্ণ ভিডিও দেখতে আনলক করুন।',
    unlockStreamBtn: '▶ সম্পূর্ণ এইচডি ভিডিও প্লে করুন',
    relatedVideos: 'আপনার জন্য প্রস্তাবিত ভিডিও',
    comments: 'ব্যবহারকারীর মন্তব্য',
    addComment: 'একটি মন্তব্য লিখুন...',
    postComment: 'পোস্ট',
    settingsTitle: 'ল্যান্ডিং পেজ সেটিংস',
    directLinkConfig: 'ডিরেক্ট লিংক / Adsterra Smartlink URL',
    saveChanges: 'সেভ করুন',
    resetDefaults: 'রিসেট ডিফল্ট',
    shareModalTitle: 'ভিডিও লিংক শেয়ার করুন',
    themeToggle: 'থিম পরিবর্তন',
  },
  hi: {
    siteTitle: 'VideoHub',
    onlineNow: 'ऑनलाइन',
    promoBannerText: 'अनलिमिटेड हाई-स्पीड वीडियो स्ट्रीमिंग और डायरेक्ट लिंक्स',
    promoWatchBtn: 'देखें',
    sponsoredTag: 'प्रायोजित',
    sponsoredAdTitle: 'अल्ट्रा 4K सुपर-फास्ट स्ट्रीमिंग नेटवर्क',
    sponsoredAdSubtitle: 'कोई रुकावट नहीं • डायरेक्ट सर्वर कनेक्शन',
    sponsoredAdBtn: 'अभी स्ट्रीम करें',
    sponsoredCardTitle: 'ऑनलाइन एचडी वीडियो स्ट्रीमिंग अनुभव',
    sponsoredCardSubtitle: 'मोबाइल और डेस्कटॉप पर फुल 1080p 60FPS हाई बिटरेट',
    sponsoredCardBtn: 'देखें',
    safeLinkPrefix: 'सुरक्षित वीडियो लिंक',
    safeLinkBadge: 'सत्यापित सुरक्षित SSL',
    videoClickNotice: 'वीडियो देखने के लिए नीचे दिए गए बटन पर क्लिक करें',
    watchVideoNowBtn: 'अभी वीडियो देखें',
    watchInPageBtn: 'पेज में देखें',
    copyLinkBtn: 'लिंक कॉपी करें',
    copiedSuccess: 'लिंक कॉपी हो गया!',
    shareLinkBtn: 'लिंक साझा करें',
    directUrlLabel: 'डायरेक्ट स्ट्रीम URL',
    floatingBarText: 'हाई-स्पीड एचडी वीडियो और फास्ट बफरिंग का आनंद लें!',
    floatingBarBtn: 'खोलें',
    views: 'व्यूज',
    likes: 'लाइक्स',
    verifiedPublisher: 'सत्यापित स्ट्रीमर',
    serverSelection: 'सक्रिय सर्वर',
    fastCDN: 'सर्वर 1: फास्ट CDN (अनुशंसित)',
    directMirror: 'सर्वर 2: डायरेक्ट मिरर 1080p',
    vipStream: 'सर्वर 3: वीआईपी हाई बिटरेट',
    bufferingTitle: 'सुरक्षित एचडी स्ट्रीम से कनेक्ट हो रहा है...',
    bufferingSubtitle: 'डायरेक्ट हाई-स्पीड बफर तैयार है। अनलॉक करने के लिए क्लिक करें।',
    unlockStreamBtn: '▶ फुल एचडी में वीडियो चलाएं',
    relatedVideos: 'अनुशंसित वीडियो',
    comments: 'उपयोगकर्ता टिप्पणियां',
    addComment: 'एक टिप्पणी लिखें...',
    postComment: 'भेजें',
    settingsTitle: 'लैंडिंग पेज सेटिंग्स',
    directLinkConfig: 'डायरेक्ट लिंक / Adsterra Smartlink URL',
    saveChanges: 'सहेजें',
    resetDefaults: 'रीसेट करें',
    shareModalTitle: 'वीडियो लिंक शेयर करें',
    themeToggle: 'थीम बदलें',
  },
  es: {
    siteTitle: 'VideoHub',
    onlineNow: 'En Línea',
    promoBannerText: 'Transmisión de Video de Alta Velocidad Ilimitada y Enlaces Directos',
    promoWatchBtn: 'Ver',
    sponsoredTag: 'PATROCINADO',
    sponsoredAdTitle: 'Red de Transmisión Ultra 4K de Alta Velocidad',
    sponsoredAdSubtitle: 'Sin lag • Conexión directa al servidor • 0 búfer',
    sponsoredAdBtn: 'Ver Ahora',
    sponsoredCardTitle: 'Experiencia de Transmisión de Video HD Online',
    sponsoredCardSubtitle: 'Reproducción completa 1080p 60FPS en móvil y escritorio',
    sponsoredCardBtn: 'Visitar',
    safeLinkPrefix: 'Enlace de Video Seguro',
    safeLinkBadge: 'SSL Seguro Verificado',
    videoClickNotice: 'Haz clic en el botón de abajo para ver el video',
    watchVideoNowBtn: 'Ver Video Ahora',
    watchInPageBtn: 'Ver en la Página',
    copyLinkBtn: 'Copiar Enlace',
    copiedSuccess: '¡Enlace copiado al portapapeles!',
    shareLinkBtn: 'Compartir Enlace',
    directUrlLabel: 'URL de Transmisión Directa',
    floatingBarText: '¡Disfruta de Video HD de Alta Velocidad y Búfer Rápido!',
    floatingBarBtn: 'Abrir',
    views: 'vistas',
    likes: 'Me gusta',
    verifiedPublisher: 'Transmisor Verificado',
    serverSelection: 'Servidor Activo',
    fastCDN: 'Servidor 1: CDN Rápido (Recomendado)',
    directMirror: 'Servidor 2: Espejo Directo 1080p',
    vipStream: 'Servidor 3: VIP Alta Velocidad',
    bufferingTitle: 'Conectando a transmisión HD segura...',
    bufferingSubtitle: 'Búfer de alta velocidad listo. Haz clic para desbloquear.',
    unlockStreamBtn: '▶ Reproducir Video en Full HD',
    relatedVideos: 'Videos Recomendados',
    comments: 'Comentarios de Usuarios',
    addComment: 'Escribe un comentario...',
    postComment: 'Enviar',
    settingsTitle: 'Configuración de Página',
    directLinkConfig: 'Enlace Directo / Adsterra Smartlink URL',
    saveChanges: 'Guardar',
    resetDefaults: 'Restablecer',
    shareModalTitle: 'Compartir Enlace',
    themeToggle: 'Cambiar Tema',
  },
  ar: {
    siteTitle: 'VideoHub',
    onlineNow: 'متصل الآن',
    promoBannerText: 'بث فيديو عالي السرعة غير محدود وروابط مباشرة',
    promoWatchBtn: 'شاهد',
    sponsoredTag: 'إعلان ممول',
    sponsoredAdTitle: 'شبكة بث فائقة السرعة بدقة 4K',
    sponsoredAdSubtitle: 'بدون تقطيع • اتصال مباشر بالسيرفر',
    sponsoredAdBtn: 'شاهد الآن',
    sponsoredCardTitle: 'تجربة بث فيديو HD عبر الإنترنت',
    sponsoredCardSubtitle: 'تشغيل بدقة 1080p 60FPS بمعدل بت عالي على الجوال والكمبيوتر',
    sponsoredCardBtn: 'زيارة',
    safeLinkPrefix: 'رابط فيديو آمن',
    safeLinkBadge: 'شهادة SSL آمنة وموثقة',
    videoClickNotice: 'انقر فوق الزر أدناه لمشاهدة الفيديو',
    watchVideoNowBtn: 'شاهد الفيديو الآن',
    watchInPageBtn: 'مشاهدة في الصفحة',
    copyLinkBtn: 'نسخ الرابط',
    copiedSuccess: 'تم نسخ الرابط بنجاح!',
    shareLinkBtn: 'مشاركة الرابط',
    directUrlLabel: 'رابط البث المباشر',
    floatingBarText: 'استمتع بفيديو عالي الدقة وسرعة تشغيل فائقة!',
    floatingBarBtn: 'فتح',
    views: 'مشاهدة',
    likes: 'إعجاب',
    verifiedPublisher: 'ناشر معتمد',
    serverSelection: 'السيرفر النشط',
    fastCDN: 'سيرفر 1: CDN فائق السرعة (موصى به)',
    directMirror: 'سيرفر 2: سيرفر مباشر 1080p',
    vipStream: 'سيرفر 3: سيرفر VIP سريع',
    bufferingTitle: 'جاري الاتصال بسيرفر HD الآمن...',
    bufferingSubtitle: 'اكتمل التحميل المسبق. انقر لتشغيل الفيديو الآن.',
    unlockStreamBtn: '▶ تشغيل الفيديو بدقة Full HD',
    relatedVideos: 'فيديوهات مقترحة لك',
    comments: 'تعليقات المشاهدين',
    addComment: 'اكتب تعليقاً...',
    postComment: 'إرسال',
    settingsTitle: 'إعدادات صفحة الفيديو',
    directLinkConfig: 'رابط التحويل المباشر / Adsterra Smartlink',
    saveChanges: 'حفظ الإعدادات',
    resetDefaults: 'استعادة الافتراضي',
    shareModalTitle: 'مشاركة رابط الفيديو',
    themeToggle: 'تغيير السمة',
  },
};
