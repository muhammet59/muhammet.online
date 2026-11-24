export type Locale = "en" | "tr";

export const SITE_URL = "https://muhammet.online";
export const CONTACT_EMAIL = "muhammtydin@icloud.com";
export const GITHUB_URL = "https://github.com/muhammet59";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/muhammet-aydin-234529229/";
export const APP_STORE_URL =
  "https://apps.apple.com/tr/developer/muhammet-aydin/id1858413104";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    localeCode: string;
  };
  nav: {
    work: string;
    about: string;
    skills: string;
    experience: string;
    contact: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    primaryNavLabel: string;
    mobileNavLabel: string;
    switchLanguageLabel: string;
    availableStatus: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2Prefix: string;
    headlineAccent: string;
    headlineLine2Suffix: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    scrollPrompt: string;
    telemetryRole: string;
    telemetryFocus: string;
    telemetryPlatforms: string;
    interactiveHint: string;
  };
  marquee: string[];
  work: {
    eyebrow: string;
    heading: string;
    subheading: string;
    iosHeading: string;
    iosNote: string;
    engineeringHeading: string;
    engineeringNote: string;
    roleLabel: string;
    platformLabel: string;
    versionLabel: string;
    releaseLabel: string;
    languagesLabel: string;
    minOsLabel: string;
    viewCaseStudy: string;
    openAppStore: string;
    openGithub: string;
    openLivePortal: string;
    modalOverview: string;
    modalHighlights: string;
    modalStack: string;
    modalSpecs: string;
    modalClose: string;
    prevScreen: string;
    nextScreen: string;
    screenCounter: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    quote: string;
    quoteAuthor: string;
    pillarsTitle: string;
    pillars: {
      title: string;
      description: string;
    }[];
    interactiveCard: {
      badge: string;
      title: string;
      subtitle: string;
      speedLabel: string;
      playLabel: string;
      pauseLabel: string;
      sampleWords: string[];
      caption: string;
    };
    metrics: {
      value: string;
      label: string;
    }[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    subheading: string;
    allLabel: string;
    categories: {
      id: string;
      name: string;
      summary: string;
      items: {
        name: string;
        detail: string;
        context: string;
      }[];
    }[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    subheading: string;
    entries: {
      period: string;
      role: string;
      organization: string;
      location: string;
      summary: string;
      highlights: string[];
      tags: string[];
    }[];
    educationHeading: string;
    education: {
      period: string;
      degree: string;
      institution: string;
      field: string;
    }[];
    certificationsHeading: string;
    certifications: {
      date: string;
      title: string;
      issuer: string;
    }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    emailCta: string;
    copyEmail: string;
    copiedEmail: string;
    directLabel: string;
    githubTitle: string;
    githubSubtitle: string;
    linkedinTitle: string;
    linkedinSubtitle: string;
    appStoreTitle: string;
    appStoreSubtitle: string;
    responseNote: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    backToTop: string;
  };
  cursor: {
    view: string;
    open: string;
    copy: string;
    explore: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Muhammet Aydın — Independent Software Developer",
      description:
        "Personal portfolio of Muhammet Aydın. Designing and building native iOS applications, modern web interfaces, and reliable software with precision.",
      ogTitle: "Muhammet Aydın — Independent Software Developer",
      ogDescription:
        "Native iOS applications, modern web architecture, and thoughtful interaction design.",
      localeCode: "en_US",
    },
    nav: {
      work: "Work",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      skipToContent: "Skip to main content",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      primaryNavLabel: "Primary Navigation",
      mobileNavLabel: "Mobile Navigation",
      switchLanguageLabel: "Switch language to Turkish",
      availableStatus: "Independent Studio · iOS & Web",
    },
    hero: {
      eyebrow: "INDEPENDENT SOFTWARE DEVELOPER · IOS & WEB",
      headlineLine1: "Building digital experiences",
      headlineLine2Prefix: "with ",
      headlineAccent: "precision",
      headlineLine2Suffix: " and purpose.",
      supporting:
        "I design and develop software experiences, from native iOS applications published on the App Store to modern, craft-driven web products.",
      primaryCta: "Explore My Work",
      secondaryCta: "Get in Touch",
      scrollPrompt: "Scroll to explore",
      telemetryRole: "Software Developer",
      telemetryFocus: "iOS, Web & Test Automation",
      telemetryPlatforms: "Istanbul · 4 App Store Releases",
      interactiveHint: "",
    },
    marquee: [
      "SWIFT & SWIFTUI",
      "INTERACTION DESIGN",
      "NATIVE IOS ARCHITECTURE",
      "TEST AUTOMATION",
      "CALM TECHNOLOGY",
      "NEXT.JS & TYPESCRIPT",
      "APP STORE RELEASES",
    ],
    work: {
      eyebrow: "SELECTED WORK",
      heading: "Shipped products & software craft.",
      subheading:
        "Every project listed below is real and publicly verifiable—from native iOS applications live on the App Store to open-source test automation frameworks on GitHub.",
      iosHeading: "App Store Releases",
      iosNote: "Native iOS & iPadOS applications built end-to-end",
      engineeringHeading: "Automation & Open Source",
      engineeringNote: "Automated end-to-end testing frameworks on GitHub",
      roleLabel: "Role",
      platformLabel: "Platform",
      versionLabel: "Version",
      releaseLabel: "Released",
      languagesLabel: "Languages",
      minOsLabel: "Minimum OS",
      viewCaseStudy: "Inspect Details",
      openAppStore: "View on App Store",
      openGithub: "View Repository",
      openLivePortal: "Visit Web Portal",
      modalOverview: "Overview",
      modalHighlights: "Verified Capabilities",
      modalStack: "Architecture & Technologies",
      modalSpecs: "Release Specifications",
      modalClose: "Close project details",
      prevScreen: "Previous screenshot",
      nextScreen: "Next screenshot",
      screenCounter: "Screen",
    },
    about: {
      eyebrow: "ABOUT ME",
      heading: "Clarity in code. Restraint in design.",
      lead: "I build software that respects the user's attention—combining native Apple platform development, modern web architecture, and disciplined automated testing.",
      paragraphs: [
        "My work spans the complete product lifecycle: shaping interaction models and typography, writing clean Swift and TypeScript architectures, localizing experiences for international audiences, and shipping directly to the App Store.",
        "Rooted in software development fundamentals and test automation with Java and Selenium, I value systems that remain calm, predictable, and maintainable long after launch. Good software feels effortless precisely because every edge case has been considered.",
      ],
      quote: "Simplicity is prerequisite for reliability.",
      quoteAuthor: "Edsger W. Dijkstra",
      pillarsTitle: "Development Principles",
      pillars: [
        {
          title: "Craft Over Cleverness",
          description:
            "Readable architectures, deliberate motion, and pixel-level spacing discipline. Code is written once and maintained continuously.",
        },
        {
          title: "Quiet Reliability",
          description:
            "On-device privacy, biometric protection, deterministic tests, and resilient workflows that hold up under everyday use.",
        },
        {
          title: "End-to-End Ownership",
          description:
            "From initial UI/UX composition and iOS development to localization, privacy portals, and App Store release management.",
        },
      ],
      interactiveCard: {
        badge: "FOVEX · RSVP ENGINE",
        title: "Optical Focus Reader",
        subtitle: "Inspired by Fovex — focal-point typography built in React.",
        speedLabel: "WPM",
        playLabel: "Play",
        pauseLabel: "Pause",
        sampleWords: [
          "Simplicity",
          "is",
          "prerequisite",
          "for",
          "reliability.",
          "Precision",
          "shapes",
          "every",
          "pixel,",
          "every",
          "frame,",
          "and",
          "every",
          "interaction.",
        ],
        caption: "Live optimal-recognition-point (ORP) alignment",
      },
      metrics: [
        { value: "4", label: "Published App Store Apps" },
        { value: "6", label: "Languages in Bütçem" },
        { value: "iOS 17+", label: "Native Apple Architecture" },
        { value: "E2E", label: "Automated QA Discipline" },
      ],
    },
    skills: {
      eyebrow: "TECHNICAL SKILLS",
      heading: "Tools verified in production.",
      subheading:
        "A focused inventory of languages, frameworks, and engineering systems actively used across my shipped App Store applications and public GitHub repositories.",
      allLabel: "All Disciplines",
      categories: [
        {
          id: "apple",
          name: "Apple Ecosystem",
          summary: "Native iOS & iPadOS development, system frameworks, and App Store shipping.",
          items: [
            {
              name: "Swift & SwiftUI",
              detail: "Declarative native interfaces across iPhone and iPad",
              context: "Fovex, Bütçem, Moiré, Blockrix",
            },
            {
              name: "iCloud & Cloud Sync",
              detail: "Seamless multi-device state and level progression sync",
              context: "Blockrix, Bütçem",
            },
            {
              name: "Face ID / Touch ID",
              detail: "Biometric LocalAuthentication with custom lock timeouts",
              context: "Bütçem",
            },
            {
              name: "Core Haptics & Game Center",
              detail: "Tactile gameplay feedback and global real-time leaderboards",
              context: "Blockrix",
            },
            {
              name: "PDF & EPUB Parsing",
              detail: "On-device document ingestion with zero cloud dependency",
              context: "Fovex",
            },
            {
              name: "App Localization",
              detail: "Multi-market localization across EN, TR, DE, FR, IT, and ES",
              context: "Bütçem",
            },
          ],
        },
        {
          id: "web",
          name: "Web Technologies",
          summary: "Modern TypeScript frontends, motion choreography, and responsive architecture.",
          items: [
            {
              name: "TypeScript",
              detail: "Strict type-safe application and UI architecture",
              context: "muhammet.online",
            },
            {
              name: "React & Next.js",
              detail: "App Router, SEO metadata, static rendering & performance",
              context: "muhammet.online",
            },
            {
              name: "Tailwind CSS",
              detail: "Design-token systems and fluid responsive layouts",
              context: "muhammet.online",
            },
            {
              name: "Motion & GSAP",
              detail: "Scroll-linked choreography and GPU-accelerated micro-interactions",
              context: "muhammet.online",
            },
            {
              name: "HTML5 & CSS3",
              detail: "Semantic product portals, privacy & support pages",
              context: "muhammet59.github.io",
            },
          ],
        },
        {
          id: "development",
          name: "Core Languages",
          summary: "Foundational languages spanning mobile, backend logic, scripting, and web.",
          items: [
            {
              name: "Swift",
              detail: "Primary language for native Apple platform products",
              context: "4 App Store Releases",
            },
            {
              name: "Java (JDK 20)",
              detail: "Object-oriented architecture and automated test suites",
              context: "GitHub Repositories",
            },
            {
              name: "TypeScript",
              detail: "Modern web engineering and interactive UI systems",
              context: "Web Architecture",
            },
            {
              name: "Python",
              detail: "Scripting, utilities, and algorithmic problem solving",
              context: "GitHub Repositories",
            },
          ],
        },
        {
          id: "testing",
          name: "Testing & Automation",
          summary: "Automated browser verification, assertion pipelines, and reproducible builds.",
          items: [
            {
              name: "Selenium WebDriver 4",
              detail: "Automated browser E2E flows for e-commerce user journeys",
              context: "Hepsiburada & Amazon Suites",
            },
            {
              name: "REST API & Postman",
              detail: "API endpoint verification, request workflows, and regression checks",
              context: "NETAŞ · BTK Certification",
            },
            {
              name: "JUnit 5 & Apache Maven",
              detail: "Structured Java test suites and Surefire CLI test execution",
              context: "Hepsiburada & Amazon Suites",
            },
            {
              name: "Jira & Defect Tracking",
              detail: "Bug reproduction, structured issue reporting, and dev handoff",
              context: "NETAŞ · Perkotek",
            },
          ],
        },
        {
          id: "workflow",
          name: "Tools & Workflow",
          summary: "Release engineering, version control, and calm developer environments.",
          items: [
            {
              name: "Xcode & App Store Connect",
              detail: "Archiving, TestFlight validation, metadata & review releases",
              context: "App Store Publishing",
            },
            {
              name: "Git & GitHub",
              detail: "Version control, GitHub Pages hosting, and clean commit history",
              context: "All Public & Private Work",
            },
            {
              name: "macOS / POSIX",
              detail: "Terminal-first workflows, automation, and build tooling",
              context: "Daily Environment",
            },
            {
              name: "UI/UX & Interaction Design",
              detail: "Minimalist interfaces, typography hierarchy, and motion systems",
              context: "Product Design",
            },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "EXPERIENCE & BACKGROUND",
      heading: "Verified development trajectory.",
      subheading:
        "Hands-on software development across independent Apple platform products, technical software support, and telecommunications QA automation.",
      entries: [
        {
          period: "2025 — Present",
          role: "Independent iOS & Software Developer",
          organization: "App Store & Web · Independent Practice",
          location: "Istanbul, Turkey",
          summary:
            "Designing, building, and maintaining native iOS and iPadOS applications published on the Apple App Store alongside modern web experiences—owning architecture, UI/UX, localization, and release management end-to-end.",
          highlights: [
            "Shipped four universal iOS/iPadOS applications: Fovex (RSVP speed reader), Bütçem (6-language personal finance tracker), Moiré (virtual fashion studio), and Blockrix (neon block-puzzle game with Game Center).",
            "Iterated Bütçem through v2.6.1 across six markets (EN, TR, DE, FR, IT, ES) with CSV statement parsing, Face ID lock, and smart budget alerts.",
            "Built supporting web portals and muhammet.online with Next.js, TypeScript, Motion, and GSAP.",
          ],
          tags: ["Swift", "SwiftUI", "iOS 17+", "Next.js", "TypeScript"],
        },
        {
          period: "Sep 2024 — Mar 2025",
          role: "Software Support Specialist",
          organization: "Perkotek Zaman Kontrol ve Güvenlik Sistemleri",
          location: "Istanbul, Turkey",
          summary:
            "Delivered software installation, technical diagnostics, and live remote troubleshooting for enterprise Time & Attendance (PDKS), biometric access control, and turnstile software systems.",
          highlights: [
            "Configured TCP/IP network and hardware device settings while resolving software service issues remotely via AnyDesk and TeamViewer.",
            "Investigated customer-reported defects, reproduced software bugs, and collaborated directly with the development team through resolution.",
            "Managed end-to-end technical support workflows ensuring continuity for business-critical access systems.",
          ],
          tags: ["Software Support", "PDKS Systems", "TCP/IP Networking", "Bug Triage"],
        },
        {
          period: "Oct 2022 — Apr 2023",
          role: "Software Test Automation Intern",
          organization: "NETAŞ",
          location: "Istanbul, Turkey",
          summary:
            "Contributed to functional, regression, and API testing pipelines for enterprise telecommunications software during a 7-month software internship.",
          highlights: [
            "Executed Java-based automated test scenarios and documented reproducible software defect reports in Jira.",
            "Supported REST API verification and endpoint validation workflows using Postman.",
            "Built public Selenium WebDriver 4 + JUnit 5 e-commerce E2E automation suites on GitHub following the internship.",
          ],
          tags: ["Java", "Test Automation", "Postman", "REST API", "Jira"],
        },
      ],
      educationHeading: "Education",
      education: [
        {
          period: "Sep 2025 — Present",
          degree: "Bachelor's Degree",
          institution: "Ankara University",
          field: "Electronic Commerce and Management",
        },
        {
          period: "Sep 2021 — Jul 2023",
          degree: "Associate Degree",
          institution: "Istanbul Bilgi University",
          field: "Computer Programming",
        },
      ],
      certificationsHeading: "Certifications",
      certifications: [
        {
          date: "Aug 2023",
          title: "Java Training for Software Test Automation Engineers",
          issuer: "Information and Communication Technologies Authority (BTK)",
        },
        {
          date: "Aug 2023",
          title: "API and API Testing Certification",
          issuer: "Information and Communication Technologies Authority (BTK)",
        },
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      heading: "Have something interesting in mind?",
      subheading: "Let's build something meaningful.",
      emailCta: "Send an Email",
      copyEmail: "Copy Address",
      copiedEmail: "Copied to Clipboard",
      directLabel: "Direct Email",
      githubTitle: "GitHub",
      githubSubtitle: "Public repositories & test automation suites",
      linkedinTitle: "LinkedIn",
      linkedinSubtitle: "Professional profile & network",
      appStoreTitle: "App Store",
      appStoreSubtitle: "Published iOS & iPadOS applications",
      responseNote: "Open to thoughtful collaborations, product development, and iOS/Web roles.",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Designed & built with precision.",
      backToTop: "Back to top",
    },
    cursor: {
      view: "VIEW",
      open: "OPEN",
      copy: "COPY",
      explore: "EXPLORE",
    },
  },
  tr: {
    meta: {
      title: "Muhammet Aydın — Bağımsız Yazılım Geliştirici",
      description:
        "Muhammet Aydın'ın kişisel yazılım portfolyosu. Özenle tasarlanmış native iOS uygulamaları, modern web deneyimleri ve güvenilir yazılım ürünleri.",
      ogTitle: "Muhammet Aydın — Bağımsız Yazılım Geliştirici",
      ogDescription:
        "Native iOS uygulamaları, modern web mimarisi ve rafine etkileşim tasarımı.",
      localeCode: "tr_TR",
    },
    nav: {
      work: "Projeler",
      about: "Hakkımda",
      skills: "Yetenekler",
      experience: "Deneyim",
      contact: "İletişim",
      skipToContent: "Ana içeriğe geç",
      openMenu: "Gezinme menüsünü aç",
      closeMenu: "Gezinme menüsünü kapat",
      primaryNavLabel: "Ana Gezinme",
      mobileNavLabel: "Mobil Gezinme",
      switchLanguageLabel: "Dili İngilizce olarak değiştir",
      availableStatus: "Bağımsız Geliştirici · iOS & Web",
    },
    hero: {
      eyebrow: "BAĞIMSIZ YAZILIM GELİŞTİRİCİ · IOS & WEB",
      headlineLine1: "Dijital deneyimleri",
      headlineLine2Prefix: "",
      headlineAccent: "hassasiyet",
      headlineLine2Suffix: " ve amaçla inşa ediyorum.",
      supporting:
        "App Store'da yayında olan native iOS uygulamalarından modern ve rafine web ürünlerine kadar uçtan uca yazılım deneyimleri tasarlayıp geliştiriyorum.",
      primaryCta: "Çalışmalarımı Keşfet",
      secondaryCta: "İletişime Geç",
      scrollPrompt: "Keşfetmek için kaydır",
      telemetryRole: "Yazılım Geliştirici",
      telemetryFocus: "iOS, Web & Test Otomasyonu",
      telemetryPlatforms: "İstanbul · 4 App Store Uygulaması",
      interactiveHint: "",
    },
    marquee: [
      "SWIFT & SWIFTUI",
      "ETKİLEŞİM TASARIMI",
      "NATIVE IOS MİMARİSİ",
      "TEST OTOMASYONU",
      "SAKİN TEKNOLOJİ",
      "NEXT.JS & TYPESCRIPT",
      "APP STORE UYGULAMALARI",
    ],
    work: {
      eyebrow: "SEÇİLİ ÇALIŞMALAR",
      heading: "Yayındaki ürünler ve yazılım zanaatı.",
      subheading:
        "Aşağıdaki her proje gerçek ve kamuya açık olarak doğrulanabilirdir — App Store'da yayında olan native iOS uygulamalarından GitHub üzerindeki açık kaynak test otomasyon projelerine kadar.",
      iosHeading: "App Store Uygulamaları",
      iosNote: "Uçtan uca tasarlanıp geliştirilen native iOS & iPadOS uygulamaları",
      engineeringHeading: "Test Otomasyonu & Açık Kaynak",
      engineeringNote: "GitHub üzerindeki uçtan uca test otomasyon projeleri",
      roleLabel: "Rol",
      platformLabel: "Platform",
      versionLabel: "Sürüm",
      releaseLabel: "Yayın",
      languagesLabel: "Diller",
      minOsLabel: "Minimum OS",
      viewCaseStudy: "Detayları İncele",
      openAppStore: "App Store'da Aç",
      openGithub: "Repoyu İncele",
      openLivePortal: "Web Portalını Aç",
      modalOverview: "Genel Bakış",
      modalHighlights: "Doğrulanmış Özellikler",
      modalStack: "Mimari & Teknolojiler",
      modalSpecs: "Yayın Bilgileri",
      modalClose: "Proje detaylarını kapat",
      prevScreen: "Önceki ekran görüntüsü",
      nextScreen: "Sonraki ekran görüntüsü",
      screenCounter: "Ekran",
    },
    about: {
      eyebrow: "HAKKIMDA",
      heading: "Kodda berraklık. Tasarımda yalınlık.",
      lead: "Kullanıcının dikkatine saygı duyan yazılımlar üretiyorum — Apple ekosistemi uygulama geliştirme, modern web mimarisi ve disiplinli test otomasyonunu bir araya getirerek.",
      paragraphs: [
        "Çalışmalarım ürün yaşam döngüsünün tamamını kapsar: etkileşim modellerini ve tipografiyi şekillendirmek, temiz Swift ve TypeScript mimarileri kurmak, uygulamaları çok dilli pazarlara uyarlamak ve doğrudan App Store'da yayınlamak.",
        "Java ve Selenium temelli yazılım geliştirme ve test otomasyonu pratiğim sayesinde, yayından uzun süre sonra bile öngörülebilir, sakin ve sürdürülebilir kalan sistemler kurmaya önem veriyorum. İyi yazılım zahmetsiz hissedilir; çünkü her detay önceden düşünülmüştür.",
      ],
      quote: "Sadelik, güvenilirliğin ön koşuludur.",
      quoteAuthor: "Edsger W. Dijkstra",
      pillarsTitle: "Geliştirme İlkeleri",
      pillars: [
        {
          title: "Gösteriş Yerine Zanaat",
          description:
            "Okunabilir mimari, anlamlı hareket tasarımı ve piksel düzeyinde boşluk dengesi. Kod bir kez yazılır, defalarca okunur.",
        },
        {
          title: "Sessiz Güvenilirlik",
          description:
            "Cihaz içi gizlilik, biyometrik güvenlik, deterministik testler ve günlük kullanımda aksamayan dayanıklı akışlar.",
        },
        {
          title: "Uçtan Uca Sahiplenme",
          description:
            "İlk arayüz eskizinden iOS mimarisine, yerelleştirmeden gizlilik portallarına ve App Store yayın süreçlerine kadar tam sorumluluk.",
        },
      ],
      interactiveCard: {
        badge: "FOVEX · RSVP MOTORU",
        title: "Optik Odak Okuyucu",
        subtitle: "Fovex'ten esinlenen, React ile geliştirilmiş odak noktası tipografisi.",
        speedLabel: "K/DK",
        playLabel: "Oynat",
        pauseLabel: "Duraklat",
        sampleWords: [
          "Sadelik,",
          "güvenilirliğin",
          "en",
          "temel",
          "koşuludur.",
          "Hassasiyet,",
          "her",
          "pikseli,",
          "her",
          "kareyi",
          "ve",
          "her",
          "etkileşimi",
          "şekillendirir.",
        ],
        caption: "Canlı optik odak noktası (ORP) hizalaması",
      },
      metrics: [
        { value: "4", label: "Yayında App Store Uygulaması" },
        { value: "6", label: "Bütçem Uygulama Dili" },
        { value: "iOS 17+", label: "Native Apple Mimarisi" },
        { value: "E2E", label: "Test Otomasyon Disiplini" },
      ],
    },
    skills: {
      eyebrow: "TEKNİK YETENEKLER",
      heading: "Gerçek ürünlerde doğrulanmış araçlar.",
      subheading:
        "Yayındaki App Store uygulamalarımda ve halka açık GitHub repolarımda aktif olarak kullandığım diller, framework'ler ve mühendislik sistemleri.",
      allLabel: "Tüm Alanlar",
      categories: [
        {
          id: "apple",
          name: "Apple Ekosistemi",
          summary: "Native iOS & iPadOS geliştirme, sistem framework'leri ve App Store yayınlama.",
          items: [
            {
              name: "Swift & SwiftUI",
              detail: "iPhone ve iPad genelinde modern deklaratif arayüzler",
              context: "Fovex, Bütçem, Moiré, Blockrix",
            },
            {
              name: "iCloud & Bulut Senkronizasyonu",
              detail: "Apple cihazları arasında kesintisiz veri ve ilerleme senkronizasyonu",
              context: "Blockrix, Bütçem",
            },
            {
              name: "Face ID / Touch ID",
              detail: "Özelleştirilebilir zaman aşımına sahip biyometrik kilit",
              context: "Bütçem",
            },
            {
              name: "Core Haptics & Game Center",
              detail: "Dokunsal oyun geri bildirimi ve küresel anlık liderlik tabloları",
              context: "Blockrix",
            },
            {
              name: "PDF & EPUB İşleme",
              detail: "Bulut bağımlılığı olmadan tamamen cihaz içi doküman ayrıştırma",
              context: "Fovex",
            },
            {
              name: "Çoklu Dil Yerelleştirme",
              detail: "EN, TR, DE, FR, IT ve ES pazarları için tam yerelleştirme",
              context: "Bütçem",
            },
          ],
        },
        {
          id: "web",
          name: "Web Teknolojileri",
          summary: "Modern TypeScript arayüzleri, hareket tasarımı ve duyarlı mimari.",
          items: [
            {
              name: "TypeScript",
              detail: "Katı tip güvenli uygulama ve bileşen mimarisi",
              context: "muhammet.online",
            },
            {
              name: "React & Next.js",
              detail: "App Router, SEO metadata, statik üretim ve performans optimizasyonu",
              context: "muhammet.online",
            },
            {
              name: "Tailwind CSS",
              detail: "Tasarım belirteçleri ve akışkan responsive düzenler",
              context: "muhammet.online",
            },
            {
              name: "Motion & GSAP",
              detail: "Kaydırma tabanlı koreografi ve GPU hızlandırmalı mikro etkileşimler",
              context: "muhammet.online",
            },
            {
              name: "HTML5 & CSS3",
              detail: "Anlamsal ürün portalları, gizlilik ve destek sayfaları",
              context: "muhammet59.github.io",
            },
          ],
        },
        {
          id: "development",
          name: "Temel Diller",
          summary: "Mobil, yazılım mantığı, betik geliştirme ve web dilleri.",
          items: [
            {
              name: "Swift",
              detail: "Native Apple platform ürünleri için ana geliştirme dili",
              context: "4 App Store Yayını",
            },
            {
              name: "Java (JDK 20)",
              detail: "Nesne yönelimli tasarım ve otomatik test paketleri",
              context: "GitHub Repoları",
            },
            {
              name: "TypeScript",
              detail: "Modern web mühendisliği ve etkileşimli arayüz sistemleri",
              context: "Web Mimarisi",
            },
            {
              name: "Python",
              detail: "Betik geliştirme, araçlar ve algoritmik problem çözme",
              context: "GitHub Repoları",
            },
          ],
        },
        {
          id: "testing",
          name: "Test & Otomasyon",
          summary: "Otomatik tarayıcı doğrulama, test akışları ve tekrarlanabilir derlemeler.",
          items: [
            {
              name: "Selenium WebDriver 4",
              detail: "E-ticaret kullanıcı yolculukları için uçtan uca tarayıcı testleri",
              context: "Hepsiburada & Amazon Paketleri",
            },
            {
              name: "REST API & Postman",
              detail: "API uç nokta doğrulama, istek akışları ve regresyon kontrolleri",
              context: "NETAŞ · BTK Sertifikası",
            },
            {
              name: "JUnit 5 & Apache Maven",
              detail: "Yapısal Java test paketleri ve Surefire CLI test çalıştırma",
              context: "Hepsiburada & Amazon Paketleri",
            },
            {
              name: "Jira & Hata Takibi",
              detail: "Hata yeniden üretme, yapısal kayıt açma ve geliştirme ekibi koordinasyonu",
              context: "NETAŞ · Perkotek",
            },
          ],
        },
        {
          id: "workflow",
          name: "Araçlar & İş Akışı",
          summary: "Yayın mühendisliği, sürüm kontrolü ve yalın geliştirici ortamları.",
          items: [
            {
              name: "Xcode & App Store Connect",
              detail: "Arşivleme, TestFlight doğrulama, metadata ve inceleme süreçleri",
              context: "App Store Yayınlama",
            },
            {
              name: "Git & GitHub",
              detail: "Sürüm kontrolü, GitHub Pages barındırma ve temiz commit geçmişi",
              context: "Tüm Projeler",
            },
            {
              name: "macOS / POSIX",
              detail: "Terminal odaklı iş akışları, otomasyon ve derleme araçları",
              context: "Günlük Ortam",
            },
            {
              name: "UI/UX & Etkileşim Tasarımı",
              detail: "Minimalist arayüzler, tipografi hiyerarşisi ve hareket sistemleri",
              context: "Ürün Tasarımı",
            },
          ],
        },
      ],
    },
    experience: {
      eyebrow: "DENEYİM & EĞİTİM",
      heading: "Doğrulanmış yazılım yolculuğu.",
      subheading:
        "Bağımsız Apple platform ürünleri, kurumsal yazılım teknik desteği ve telekomünikasyon test otomasyonu süreçlerinde gerçek saha deneyimi.",
      entries: [
        {
          period: "2025 — Günümüz",
          role: "Bağımsız iOS & Yazılım Geliştirici",
          organization: "App Store & Web · Bağımsız Çalışma",
          location: "İstanbul, Türkiye",
          summary:
            "Apple App Store'da yayınlanan native iOS/iPadOS uygulamaları ile modern web deneyimlerini ürün mimarisinden UI/UX tasarımına, yerelleştirmeden yayın süreçlerine kadar uçtan uca geliştiriyorum.",
          highlights: [
            "Dört evrensel iOS/iPadOS uygulaması yayınlandı: Fovex (RSVP hızlı okuyucu), Bütçem (6 dilli kişisel finans uygulaması), Moiré (sanal moda stüdyosu) ve Blockrix (Game Center destekli neon blok bulmaca oyunu).",
            "Bütçem uygulaması CSV banka ekstresi ayrıştırma, Face ID güvenliği ve akıllı bütçe uyarılarıyla 6 dilde (TR, EN, DE, FR, IT, ES) v2.6.1 sürümüne ulaştırıldı.",
            "Next.js, TypeScript, Motion ve GSAP ile muhammet.online ve ürün destek portalları inşa edildi.",
          ],
          tags: ["Swift", "SwiftUI", "iOS 17+", "Next.js", "TypeScript"],
        },
        {
          period: "Eyl 2024 — Mar 2025",
          role: "Yazılım Destek Uzmanı",
          organization: "Perkotek Zaman Kontrol ve Güvenlik Sistemleri",
          location: "İstanbul, Türkiye",
          summary:
            "Personel Devam Kontrol Sistemleri (PDKS), biyometrik geçiş kontrol ve turnike yazılımları için kurulum, teknik destek ve uzaktan sorun giderme süreçlerini yürüttüm.",
          highlights: [
            "AnyDesk ve TeamViewer üzerinden uzaktan destek vererek cihaz IP/ağ yapılandırmalarını gerçekleştirdim ve yazılım servis sorunlarını çözdüm.",
            "Müşteri destek taleplerini takip ederek yazılım hatalarını test ettim ve çözüm için geliştirme ekibiyle doğrudan koordinasyon sağladım.",
            "İş sürekliliği gerektiren geçiş ve zaman kontrol sistemlerinde teknik destek süreçlerini uçtan uca yönettim.",
          ],
          tags: ["Yazılım Desteği", "PDKS Sistemleri", "TCP/IP Ağ", "Hata Analizi"],
        },
        {
          period: "Eki 2022 — Nis 2023",
          role: "Yazılım Test Otomasyon Stajyeri",
          organization: "NETAŞ",
          location: "İstanbul, Türkiye",
          summary:
            "7 aylık yazılım stajı boyunca telekomünikasyon sistemlerinin fonksiyonel, regresyon ve API test süreçlerinde aktif görev aldım.",
          highlights: [
            "Java tabanlı test otomasyon senaryolarını çalıştırarak tespit edilen yazılım hatalarını Jira üzerinden raporladım.",
            "Postman kullanarak REST API test ve uç nokta doğrulama süreçlerine destek verdim.",
            "Staj sonrasında GitHub üzerinde Selenium WebDriver 4 + JUnit 5 tabanlı açık kaynak e-ticaret E2E test projeleri geliştirdim.",
          ],
          tags: ["Java", "Test Otomasyonu", "Postman", "REST API", "Jira"],
        },
      ],
      educationHeading: "Eğitim",
      education: [
        {
          period: "Eyl 2025 — Günümüz",
          degree: "Lisans",
          institution: "Ankara Üniversitesi",
          field: "Elektronik Ticaret ve Yönetimi",
        },
        {
          period: "Eyl 2021 — Tem 2023",
          degree: "Ön Lisans",
          institution: "İstanbul Bilgi Üniversitesi",
          field: "Bilgisayar Programcılığı",
        },
      ],
      certificationsHeading: "Sertifikalar",
      certifications: [
        {
          date: "Ağu 2023",
          title: "Yazılım Test Otomasyon Mühendisleri için Java Eğitimi",
          issuer: "Bilgi Teknolojileri ve İletişim Kurumu (BTK)",
        },
        {
          date: "Ağu 2023",
          title: "API ve API Testi Sertifikası",
          issuer: "Bilgi Teknolojileri ve İletişim Kurumu (BTK)",
        },
      ],
    },
    contact: {
      eyebrow: "İLETİŞİM",
      heading: "Aklınızda ilgi çekici bir proje mi var?",
      subheading: "Anlamlı ve kalıcı bir şeyler inşa edelim.",
      emailCta: "E-posta Gönder",
      copyEmail: "Adresi Kopyala",
      copiedEmail: "Panoya Kopyalandı",
      directLabel: "Doğrudan E-posta",
      githubTitle: "GitHub",
      githubSubtitle: "Açık kaynak repolar ve test otomasyon paketleri",
      linkedinTitle: "LinkedIn",
      linkedinSubtitle: "Profesyonel profil ve iletişim ağı",
      appStoreTitle: "App Store",
      appStoreSubtitle: "Yayındaki iOS & iPadOS uygulamaları",
      responseNote: "Nitelikli iş birlikleri, ürün geliştirme ve iOS/Web fırsatlarına açığım.",
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
      builtWith: "Özenle tasarlandı ve geliştirildi.",
      backToTop: "Yukarı çık",
    },
    cursor: {
      view: "İNCELE",
      open: "AÇ",
      copy: "KOPYALA",
      explore: "KEŞFET",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
