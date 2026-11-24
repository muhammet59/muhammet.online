import type { Metadata } from "next";
import {
  APP_STORE_URL,
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_URL,
  getDictionary,
  type Locale,
} from "./i18n";
import { iosProjects } from "./projects";

export function buildLocaleMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const canonicalPath = locale === "en" ? "/" : "/tr";
  const canonicalUrl = locale === "en" ? SITE_URL : `${SITE_URL}/tr`;

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    authors: [{ name: "Muhammet Aydın", url: SITE_URL }],
    creator: "Muhammet Aydın",
    publisher: "Muhammet Aydın",
    keywords:
      locale === "en"
        ? [
            "Muhammet Aydın",
            "iOS Developer",
            "Software Developer",
            "SwiftUI",
            "Creative Developer",
            "Next.js",
            "TypeScript",
            "Fovex",
            "Bütçem",
            "Moiré",
            "Blockrix",
            "Test Automation",
          ]
        : [
            "Muhammet Aydın",
            "iOS Geliştirici",
            "Yazılım Geliştirici",
            "SwiftUI",
            "Kreatif Geliştirici",
            "Next.js",
            "TypeScript",
            "Fovex",
            "Bütçem",
            "Moiré",
            "Blockrix",
            "Test Otomasyonu",
          ],
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/",
        tr: "/tr",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: "Muhammet Aydın",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      locale: dict.meta.localeCode,
      alternateLocale: locale === "en" ? ["tr_TR"] : ["en_US"],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function buildStructuredData(locale: Locale) {
  const isEn = locale === "en";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Muhammet Aydın",
        url: SITE_URL,
        email: `mailto:${CONTACT_EMAIL}`,
        jobTitle: isEn
          ? "Independent Software Developer"
          : "Bağımsız Yazılım Geliştirici",
        description: getDictionary(locale).meta.description,
        sameAs: [GITHUB_URL, LINKEDIN_URL, APP_STORE_URL, "https://muhammet59.github.io"],
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Istanbul Bilgi University",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Ankara University",
          },
        ],
        knowsAbout: [
          "iOS Development",
          "Swift",
          "SwiftUI",
          "TypeScript",
          "React",
          "Next.js",
          "Java",
          "Selenium WebDriver",
          "REST API Testing",
          "Postman",
          "Software Development",
          "UI/UX Design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Muhammet.online",
        inLanguage: isEn ? "en-US" : "tr-TR",
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      ...iosProjects.map((project) => ({
        "@type": "SoftwareApplication",
        name: `${project.name[locale]} — ${project.subtitle[locale]}`,
        operatingSystem: project.platform,
        applicationCategory: project.category.en,
        softwareVersion: project.version,
        url: project.appStoreUrl[locale],
        description: project.shortDescription[locale],
        author: {
          "@id": `${SITE_URL}/#person`,
        },
      })),
    ],
  };
}
