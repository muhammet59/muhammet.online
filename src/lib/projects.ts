import type { Locale } from "./i18n";

export interface IosProject {
  id: string;
  slug: string;
  index: string;
  name: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  category: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  longDescription: Record<Locale, string>;
  role: Record<Locale, string>;
  platform: string;
  version: string;
  released: Record<Locale, string>;
  minOs: string;
  languages: string[];
  stack: Record<Locale, string[]>;
  highlights: Record<Locale, string[]>;
  accentHex: string;
  accentGlow: string;
  icon: string;
  screenshots: string[];
  appStoreUrl: Record<Locale, string>;
  portalUrl?: string;
}

export interface EngineeringProject {
  id: string;
  name: string;
  category: Record<Locale, string>;
  year: string;
  shortDescription: Record<Locale, string>;
  role: Record<Locale, string>;
  platform: string;
  stack: Record<Locale, string[]>;
  highlights: Record<Locale, string[]>;
  githubUrl: string;
  liveUrl?: string;
  accentHex: string;
  terminalLines: string[];
}

export const iosProjects: IosProject[] = [
  {
    id: "fovex",
    slug: "fovex",
    index: "01",
    name: {
      en: "Fovex",
      tr: "Fovex",
    },
    subtitle: {
      en: "Next-Gen RSVP Speed Reader & Books",
      tr: "Yeni Nesil RSVP Hızlı Kitap Okuyucu",
    },
    category: {
      en: "Books & Productivity",
      tr: "Kitap & Üretkenlik",
    },
    shortDescription: {
      en: "Cognitive-focus RSVP speed reader built for PDF and EPUB libraries. Delivers words to a calibrated optical focal point at up to 1,000+ WPM with pure AMOLED dark mode and zero cloud uploads.",
      tr: "PDF ve EPUB kütüphaneleri için geliştirilen bilişsel odak odaklı RSVP hızlı okuyucu. Kelimeleri 1.000+ kelime/dk hıza kadar optik odak noktasına taşır; saf AMOLED karanlık mod ve sıfır bulut yüklemesi sunar.",
    },
    longDescription: {
      en: "Fovex reimagines long-form digital reading for books, research papers, and work documents. By streaming words directly to a single focal point, it eliminates saccadic eye fatigue while keeping every imported PDF and EPUB file encrypted and strictly on-device.",
      tr: "Fovex; kitaplar, araştırma makaleleri ve iş dokümanları için dijital okumayı yeniden yorumlar. Kelimeleri tek bir odak noktasına akıtarak göz yorgunluğunu azaltırken, içe aktarılan tüm PDF ve EPUB dosyalarını tamamen cihaz içinde ve gizli tutar.",
    },
    role: {
      en: "Creator, iOS Developer & UI/UX Designer",
      tr: "Yaratıcı, iOS Geliştirici & UI/UX Tasarımcı",
    },
    platform: "iOS & iPadOS",
    version: "1.0.1",
    released: {
      en: "Nov 2026",
      tr: "Kasım 2026",
    },
    minOs: "iOS 17.6+",
    languages: ["EN"],
    stack: {
      en: ["Swift", "SwiftUI", "PDF & EPUB Engine", "AMOLED UI", "On-Device Privacy"],
      tr: ["Swift", "SwiftUI", "PDF & EPUB Motoru", "AMOLED Arayüz", "Cihaz İçi Gizlilik"],
    },
    highlights: {
      en: [
        "Focal-point RSVP reading engine engineered for speeds up to 1,000+ WPM",
        "Instant local import for PDF and EPUB books, research papers, and reports",
        "100% on-device privacy architecture with zero cloud uploads",
        "Pitch-black AMOLED reading mode crafted for comfortable night sessions",
      ],
      tr: [
        "1.000+ kelime/dakika hıza kadar çalışan optik odak noktalı RSVP okuma motoru",
        "PDF ve EPUB kitaplar, makaleler ve raporlar için anında yerel içe aktarma",
        "Sıfır bulut yüklemesi ile %100 cihaz içi gizlilik mimarisi",
        "Gece okumaları için özel tasarlanmış saf siyah AMOLED karanlık mod",
      ],
    },
    accentHex: "#E5A93B",
    accentGlow: "rgba(229, 169, 59, 0.22)",
    icon: "/images/projects/fovex/icon.jpg",
    screenshots: [
      "/images/projects/fovex/screen-1.jpg",
      "/images/projects/fovex/screen-2.jpg",
      "/images/projects/fovex/screen-3.jpg",
      "/images/projects/fovex/screen-4.jpg",
      "/images/projects/fovex/screen-5.jpg",
    ],
    appStoreUrl: {
      en: "https://apps.apple.com/us/app/fovex-fast-speed-reader/id6827594369",
      tr: "https://apps.apple.com/tr/app/fovex-speed-reader-books/id6827594369",
    },
    portalUrl: "https://muhammet59.github.io",
  },
  {
    id: "butcem",
    slug: "butcem",
    index: "02",
    name: {
      en: "Bütçem",
      tr: "Bütçem",
    },
    subtitle: {
      en: "Personal Finance, Budget & Expense Log",
      tr: "Kişisel Finans, Bütçe & Gelir Gider Takibi",
    },
    category: {
      en: "Finance & Business",
      tr: "Finans & İş",
    },
    shortDescription: {
      en: "A calm, multi-account personal finance suite in six languages. Automates bank CSV statement parsing, calculates monthly savings simulations, tracks partial debts, and locks balances behind Face ID.",
      tr: "Altı dilde sunulan çok hesaplı kişisel finans uygulaması. Banka CSV ekstrelerini otomatik ayrıştırır, aylık birikim simülasyonları hesaplar, parçalı borç/alacak takibi yapar ve bakiyeleri Face ID ile korur.",
    },
    longDescription: {
      en: "Actively refined through v2.6.1, Bütçem brings cash, checking accounts, credit cards, and investments into a single cohesive net-worth overview. Thoughtful safeguards—like 80%/100% category threshold alerts, stealth balance mode, and customizable biometric lock timeouts—make financial clarity effortless.",
      tr: "v2.6.1 sürümüne dek özenle geliştirilen Bütçem; nakit, vadesiz hesaplar, kredi kartları ve yatırımları tek bir net varlık görünümünde birleştirir. %80/%100 kategori bütçe uyarıları, gizli bakiye modu ve biyometrik kilit zaman aşımı ile finansal kontrolü sadeleştirir.",
    },
    role: {
      en: "Creator, iOS Developer & Product Designer",
      tr: "Yaratıcı, iOS Geliştirici & Ürün Tasarımcısı",
    },
    platform: "iOS & iPadOS",
    version: "2.6.1",
    released: {
      en: "Dec 2025",
      tr: "Aralık 2025",
    },
    minOs: "iOS 17.0+",
    languages: ["EN", "TR", "DE", "FR", "IT", "ES"],
    stack: {
      en: ["Swift", "SwiftUI", "CSV Parser", "Face ID / Touch ID", "Cloud Sync", "6 Locales"],
      tr: ["Swift", "SwiftUI", "CSV Ayrıştırıcı", "Face ID / Touch ID", "Bulut Eşitleme", "6 Dil"],
    },
    highlights: {
      en: [
        "Automated bank & credit card CSV statement import with instant category mapping",
        "Real-time 80% and 100% category budget threshold alerts",
        "Partial debt & loan ledger plus monthly savings target simulations",
        "Biometric Face ID / Touch ID protection, stealth balance mode & multi-account net worth",
      ],
      tr: [
        "Anında kategori eşleştirmeli otomatik banka ve kredi kartı CSV ekstre içe aktarma",
        "Kategori bütçelerinde %80 ve %100 eşiklerinde gerçek zamanlı akıllı uyarılar",
        "Parçalı borç/alacak takibi ve aylık birikim hedefi simülasyonları",
        "Face ID / Touch ID biyometrik kilit, gizli bakiye modu ve çok hesaplı net varlık görünümü",
      ],
    },
    accentHex: "#10B981",
    accentGlow: "rgba(16, 185, 129, 0.22)",
    icon: "/images/projects/butcem/icon.jpg",
    screenshots: [
      "/images/projects/butcem/screen-1.jpg",
      "/images/projects/butcem/screen-2.jpg",
      "/images/projects/butcem/screen-3.jpg",
      "/images/projects/butcem/screen-4.jpg",
      "/images/projects/butcem/screen-5.jpg",
    ],
    appStoreUrl: {
      en: "https://apps.apple.com/us/app/b%C3%BCt%C3%A7em-budget-expense-log/id6756084973",
      tr: "https://apps.apple.com/tr/app/b%C3%BCt%C3%A7em-budget-expense-log/id6756084973",
    },
  },
  {
    id: "moire",
    slug: "moire",
    index: "03",
    name: {
      en: "Moiré",
      tr: "Moiré",
    },
    subtitle: {
      en: "Digital Fashion Studio & Virtual Try-On",
      tr: "Dijital Moda Stüdyosu & Sanal Deneme",
    },
    category: {
      en: "Lifestyle & Photo",
      tr: "Yaşam Tarzı & Fotoğraf",
    },
    shortDescription: {
      en: "A quiet-luxury virtual fitting room and digital wardrobe studio. Combines vision models with personalized body proportions to render realistic garment drapes, lighting, and textures before purchase.",
      tr: "Sade lüks estetiğiyle tasarlanmış sanal deneme kabini ve dijital gardırop stüdyosu. Kişiselleştirilmiş vücut ölçüleriyle görsel yapay zekâyı birleştirerek kumaş dökümü ve ışığı gerçekçi biçimde önizler.",
    },
    longDescription: {
      en: "Moiré bridges editorial luxury aesthetics with computer vision. Users input personalized silhouette proportions and upload garments to generate studio-grade virtual try-ons, then curate their favorite combinations inside a minimalist digital closet.",
      tr: "Moiré, editoryal moda estetiğini bilgisayarlı görü teknolojisiyle buluşturur. Kullanıcılar kişisel vücut oranlarını tanımlayarak kıyafetleri stüdyo kalitesinde sanal olarak deneyebilir ve favori kombinlerini minimalist bir dijital gardıropta düzenleyebilir.",
    },
    role: {
      en: "Creator, iOS Developer & Art Direction",
      tr: "Yaratıcı, iOS Geliştirici & Sanat Yönetimi",
    },
    platform: "iOS & iPadOS",
    version: "1.0.1",
    released: {
      en: "Mar 2026",
      tr: "Mart 2026",
    },
    minOs: "iOS 17.0+",
    languages: ["EN"],
    stack: {
      en: ["Swift", "SwiftUI", "Vision AI Pipeline", "Image Processing", "Digital Wardrobe"],
      tr: ["Swift", "SwiftUI", "Görsel AI Akışı", "Görüntü İşleme", "Dijital Gardırop"],
    },
    highlights: {
      en: [
        "Photorealistic virtual try-on pipeline simulating fabric drape, shadows, and lighting",
        "Personalized body proportion and silhouette modeling for accurate garment fit",
        "Minimalist digital wardrobe to curate, organize, and revisit outfit combinations",
        "Quiet-luxury editorial interface crafted natively for iOS & iPadOS",
      ],
      tr: [
        "Kumaş dökümü, gölge ve ışığı simüle eden fotogerçekçi sanal kıyafet deneme akışı",
        "Gerçekçi uyum için kişiselleştirilmiş vücut ölçüleri ve silüet modellemesi",
        "Kombinleri kaydetmek ve düzenlemek için minimalist dijital gardırop",
        "iOS & iPadOS için native olarak kurgulanmış editoryal 'quiet luxury' arayüz",
      ],
    },
    accentHex: "#D4A373",
    accentGlow: "rgba(212, 163, 115, 0.22)",
    icon: "/images/projects/moire/icon.jpg",
    screenshots: [
      "/images/projects/moire/screen-1.jpg",
      "/images/projects/moire/screen-2.jpg",
      "/images/projects/moire/screen-3.jpg",
      "/images/projects/moire/screen-4.jpg",
      "/images/projects/moire/screen-5.jpg",
    ],
    appStoreUrl: {
      en: "https://apps.apple.com/us/app/moir%C3%A9-fashion-studio/id6759585162",
      tr: "https://apps.apple.com/tr/app/moir%C3%A9-fashion-studio/id6759585162",
    },
  },
  {
    id: "blockrix",
    slug: "blockrix",
    index: "04",
    name: {
      en: "Blockrix",
      tr: "Blockrix",
    },
    subtitle: {
      en: "Neon Block Puzzle Action Game",
      tr: "Neon Blok Bulmaca & Aksiyon Oyunu",
    },
    category: {
      en: "Games & Puzzle",
      tr: "Oyun & Bulmaca",
    },
    shortDescription: {
      en: "A kinetic evolution of classic block puzzles with a rising board mechanic, 300+ handcrafted levels, strategic power-ups, custom tactile haptics, iCloud sync, and global Game Center leaderboards.",
      tr: "Yükselen oyun tahtası mekaniği, 300'den fazla özenle tasarlanmış bölüm, stratejik güçlendirmeler, dokunsal titreşim geri bildirimi, iCloud senkronizasyonu ve Game Center liderlik tablolarıyla modern blok bulmaca oyunu.",
    },
    longDescription: {
      en: "Designed around crisp responsiveness and tactile craft, Blockrix pairs a neon visual identity with strategic abilities—Ion Beam, Nova Blast, and Spectrum Surge—alongside an Endless endurance mode and cross-device Apple iCloud progression.",
      tr: "Akıcı tepki süresi ve dokunsal his odağıyla tasarlanan Blockrix; Ion Beam, Nova Blast ve Spectrum Surge gibi stratejik güçlendirmeleri, Sonsuz Mod dayanıklılık mücadelesini ve Apple cihazları arası iCloud ilerleme senkronizasyonunu bir araya getirir.",
    },
    role: {
      en: "Creator, Game Developer & Motion Design",
      tr: "Yaratıcı, Oyun Geliştirici & Hareket Tasarımı",
    },
    platform: "iOS & iPadOS",
    version: "1.1",
    released: {
      en: "Jan 2026",
      tr: "Ocak 2026",
    },
    minOs: "iOS 17.6+",
    languages: ["EN"],
    stack: {
      en: ["Swift", "Game Center", "iCloud Sync", "Core Haptics", "Custom Animations"],
      tr: ["Swift", "Game Center", "iCloud Eşitleme", "Core Haptics", "Özel Animasyonlar"],
    },
    highlights: {
      en: [
        "300+ handcrafted levels with progressive difficulty plus Endless survival mode",
        "Strategic power-up system: Ion Beam, Nova Blast, and Spectrum Surge",
        "Real-time global Game Center leaderboards and seamless iCloud progress sync",
        "Tuned Core Haptics feedback and responsive high-frame-rate neon animations",
      ],
      tr: [
        "Dengeli zorluk eğrisine sahip 300+ özgün bölüm ve Sonsuz dayanıklılık modu",
        "Stratejik güçlendirmeler: Ion Beam, Nova Blast ve Spectrum Surge",
        "Gerçek zamanlı küresel Game Center liderlik tabloları ve iCloud ilerleme senkronizasyonu",
        "Özel kalibre edilmiş Core Haptics dokunsal geri bildirimi ve akıcı neon animasyonlar",
      ],
    },
    accentHex: "#38BDF8",
    accentGlow: "rgba(56, 189, 248, 0.22)",
    icon: "/images/projects/blockrix/icon.jpg",
    screenshots: [
      "/images/projects/blockrix/screen-1.jpg",
      "/images/projects/blockrix/screen-2.jpg",
      "/images/projects/blockrix/screen-3.jpg",
    ],
    appStoreUrl: {
      en: "https://apps.apple.com/us/app/blockrix/id6758270454",
      tr: "https://apps.apple.com/tr/app/blockrix/id6758270454",
    },
  },
];

export const engineeringProjects: EngineeringProject[] = [
  {
    id: "hepsiburada-automation",
    name: "HepsiburadaTestAutomation",
    category: {
      en: "E2E QA Automation",
      tr: "Uçtan Uca QA Otomasyonu",
    },
    year: "2023",
    shortDescription: {
      en: "Automated Java 20 & Selenium WebDriver 4 end-to-end test suite verifying Hepsiburada's search, product selection, newest review sorting, and shopping cart integrity.",
      tr: "Hepsiburada üzerinde ürün arama, ürün seçimi, en yeni yorumları filtreleme ve sepet doğrulama akışlarını test eden Java 20 ve Selenium WebDriver 4 otomasyon paketi.",
    },
    role: {
      en: "QA Automation Developer",
      tr: "Test Otomasyon Geliştiricisi",
    },
    platform: "Web / JVM",
    stack: {
      en: ["Java 20", "Selenium 4.11", "JUnit 5", "Maven", "WebDriverManager", "Log4j"],
      tr: ["Java 20", "Selenium 4.11", "JUnit 5", "Maven", "WebDriverManager", "Log4j"],
    },
    highlights: {
      en: [
        "Automated home -> search -> product detail -> newest review -> cart assertion flow",
        "Single-command reproducible CLI execution via `mvn clean test`",
        "Structured logging and automated browser driver provisioning",
      ],
      tr: [
        "Ana sayfa -> arama -> ürün detay -> en yeni yorum -> sepet doğrulama uçtan uca akışı",
        "`mvn clean test` ile tek komutla tekrarlanabilir terminal çalıştırma",
        "Yapısal Log4j günlükleme ve otomatik WebDriver sürücü yönetimi",
      ],
    },
    githubUrl: "https://github.com/muhammet59/HepsiburadaTestAutomation",
    accentHex: "#F97316",
    terminalLines: [
      "$ mvn clean test",
      "[INFO] Running Hepsiburada E2E Suite (JDK 20)",
      "  ✓ Navigate to home page",
      "  ✓ Search product & select listing",
      "  ✓ Sort reviews by newest & verify",
      "  ✓ Add to cart & assert cart state",
      "[INFO] BUILD SUCCESS",
    ],
  },
  {
    id: "amazon-automation",
    name: "AmazonTestAutomation",
    category: {
      en: "E2E QA Automation",
      tr: "Uçtan Uca QA Otomasyonu",
    },
    year: "2023",
    shortDescription: {
      en: "End-to-end automated browser verification framework for Amazon's core shopping funnel, engineered with Selenium WebDriver 4, JUnit Jupiter, Maven Surefire, and Log4j.",
      tr: "Amazon temel alışveriş hunisini doğrulamak için Selenium WebDriver 4, JUnit Jupiter, Maven Surefire ve Log4j ile geliştirilmiş uçtan uca tarayıcı test çatısı.",
    },
    role: {
      en: "QA Automation Developer",
      tr: "Test Otomasyon Geliştiricisi",
    },
    platform: "Web / JVM",
    stack: {
      en: ["Java 20", "Selenium 4.11", "JUnit 5", "Maven Surefire", "Log4j"],
      tr: ["Java 20", "Selenium 4.11", "JUnit 5", "Maven Surefire", "Log4j"],
    },
    highlights: {
      en: [
        "Covers home navigation, product query execution, cart addition, and state verification",
        "Zero manual WebDriver setup using WebDriverManager",
        "Modular Maven configuration with clean Log4j XML diagnostics",
      ],
      tr: [
        "Ana sayfa, ürün arama, sepete ekleme ve sepet doğrulama adımlarını kapsar",
        "WebDriverManager ile manuel sürücü kurulumu gerektirmeyen çalışma",
        "Modüler Maven yapılandırması ve Log4j XML tanılama kayıtları",
      ],
    },
    githubUrl: "https://github.com/muhammet59/AmazonTestAutomation",
    accentHex: "#818CF8",
    terminalLines: [
      "$ mvn clean test -Dsuite=amazon",
      "[INFO] WebDriverManager :: Chrome ready",
      "  ✓ Open Amazon storefront",
      "  ✓ Query target product catalog",
      "  ✓ Add item & open shopping cart",
      "  ✓ Assert item presence in cart",
      "[INFO] Tests run: PASS · 0 failures",
    ],
  },
];
