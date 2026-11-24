"use client";

import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { IosProject } from "@/lib/projects";
import { HeroShowcaseStage } from "./HeroShowcaseStage";
import { MagneticButton } from "./ui/MagneticButton";
import { SplitTextReveal } from "./ui/SplitTextReveal";

interface HeroSectionProps {
  locale: Locale;
  dict: Dictionary;
  onSelectProject: (project: IosProject, initialSlide?: number) => void;
}

export function HeroSection({
  locale,
  dict,
  onSelectProject,
}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-x-clip pt-28 pb-10 sm:pt-32 lg:pt-36"
    >
      {/* Subtle architectural grid & soft studio top light */}
      <div
        aria-hidden="true"
        className="bg-precision-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_20%,#000_35%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-44 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.075)_0%,rgba(229,169,59,0.035)_42%,transparent_72%)] blur-3xl"
      />

      {/* Main Balanced Editorial Hero Grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Editorial Typography Column */}
        <div className="lg:col-span-6">
          {/* Clean Apple-style Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 font-mono text-[11px] font-medium tracking-[0.18em] text-white/55 uppercase"
          >
            {dict.hero.eyebrow}
          </motion.p>

          {/* Oversized Editorial Headline with safe vertical & italic padding */}
          <h1 className="text-[clamp(2.35rem,4.6vw,4.35rem)] leading-[1.12] font-semibold tracking-[-0.03em] text-[#F5F5F7]">
            <SplitTextReveal
              as="span"
              text={dict.hero.headlineLine1}
              delay={0.06}
              stagger={0.045}
              className="block"
            />
            <span className="mt-0.5 block">
              {dict.hero.headlineLine2Prefix && (
                <SplitTextReveal
                  as="span"
                  text={dict.hero.headlineLine2Prefix.trim()}
                  delay={0.2}
                  stagger={0.045}
                />
              )}
              {dict.hero.headlineLine2Prefix ? " " : ""}
              <motion.span
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.75,
                  delay: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-luminous-gradient -mx-1.5 inline-block px-1.5 pb-1 font-serif text-[1.12em] font-normal italic tracking-[-0.01em]"
              >
                {dict.hero.headlineAccent}
              </motion.span>{" "}
              <SplitTextReveal
                as="span"
                text={dict.hero.headlineLine2Suffix.trim()}
                delay={0.34}
                stagger={0.045}
              />
            </span>
          </h1>

          {/* Supporting narrative */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.44,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-lg text-base leading-relaxed text-[#9898A6] sm:text-lg"
          >
            {dict.hero.supporting}
          </motion.p>

          {/* Magnetic CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.56,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#work"
              cursorMode="explore"
              className="group bg-[#F5F5F7] px-7 py-3.5 text-sm font-semibold text-[#050507] shadow-[0_0_40px_rgba(255,255,255,0.14)] hover:bg-white"
            >
              <span>{dict.hero.primaryCta}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              cursorMode="open"
              className="group border border-white/[0.14] bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-[#F5F5F7] backdrop-blur-md hover:border-white/30 hover:bg-white/[0.07]"
            >
              <span>{dict.hero.secondaryCta}</span>
              <ArrowDownRight className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-white" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Interactive Live App Store Showcase Stage */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <HeroShowcaseStage
            locale={locale}
            onSelectProject={onSelectProject}
          />
        </motion.div>
      </div>

      {/* Quiet Editorial Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.85, delay: 0.75 }}
        className="relative z-10 mx-auto mt-10 w-full max-w-7xl px-6 sm:px-10"
      >
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/50">
            <span className="text-white/75">{dict.hero.telemetryPlatforms}</span>
            <span aria-hidden="true" className="hidden text-white/20 sm:inline">
              /
            </span>
            <span className="hidden sm:inline">{dict.hero.telemetryFocus}</span>
          </div>

          <a
            href="#work"
            className="group inline-flex items-center gap-3 text-xs font-medium tracking-[0.06em] text-white/55 transition-colors hover:text-white"
          >
            <span>{dict.hero.scrollPrompt}</span>
            <span className="relative flex h-6 w-4 items-start justify-center rounded-full border border-white/25 p-1">
              <motion.span
                animate={{ y: [0, 7, 0], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-1 rounded-full bg-white"
              />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
