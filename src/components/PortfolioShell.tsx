"use client";

import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { IosProject } from "@/lib/projects";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { ManifestoMarquee } from "./ManifestoMarquee";
import { SelectedWorkSection } from "./SelectedWorkSection";
import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { ScrollProgress } from "./ui/ScrollProgress";
import { CustomCursor } from "./ui/CustomCursor";

interface PortfolioShellProps {
  locale: Locale;
  dict: Dictionary;
}

export function PortfolioShell({ locale, dict }: PortfolioShellProps) {
  const [selectedModal, setSelectedModal] = useState<{
    project: IosProject;
    initialSlide: number;
  } | null>(null);

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem("muhammet-locale", locale);
    } catch {
      // Ignore storage restrictions
    }
  }, [locale]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#050507] text-[#F5F5F7]">
        {/* Ultra-fine static grain texture overlay */}
        <div
          aria-hidden="true"
          className="bg-grain pointer-events-none fixed inset-0 z-[70] opacity-[0.032] mix-blend-overlay"
        />

        <ScrollProgress />
        <CustomCursor labels={dict.cursor} />
        <Navbar locale={locale} dict={dict} />

        <main>
          <HeroSection
            locale={locale}
            dict={dict}
            onSelectProject={(project, initialSlide = 0) =>
              setSelectedModal({ project, initialSlide })
            }
          />
          <ManifestoMarquee items={dict.marquee} />
          <SelectedWorkSection
            locale={locale}
            dict={dict}
            onSelectProject={(project, initialSlide = 0) =>
              setSelectedModal({ project, initialSlide })
            }
          />
          <AboutSection dict={dict} />
          <ExperienceSection dict={dict} />
          <ContactSection dict={dict} />
        </main>

        <Footer locale={locale} dict={dict} />

        <ProjectDetailModal
          key={
            selectedModal
              ? `${selectedModal.project.id}-${selectedModal.initialSlide}`
              : "closed"
          }
          project={selectedModal?.project ?? null}
          initialSlide={selectedModal?.initialSlide ?? 0}
          onClose={() => setSelectedModal(null)}
          locale={locale}
          dict={dict}
        />
      </div>
    </MotionConfig>
  );
}
