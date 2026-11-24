"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { AppStoreIcon, GitHubIcon, LinkedInIcon } from "./ui/BrandIcons";
import {
  APP_STORE_URL,
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  type Dictionary,
} from "@/lib/i18n";
import { MagneticButton } from "./ui/MagneticButton";
import { SpotlightCard } from "./ui/SpotlightCard";
import { SplitTextReveal } from "./ui/SplitTextReveal";

interface ContactSectionProps {
  dict: Dictionary;
}

export function ContactSection({ dict }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = CONTACT_EMAIL;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl border-t border-white/[0.07] px-6 py-24 sm:px-10 sm:py-36"
    >
      <SpotlightCard
        spotlightColor="rgba(229, 169, 59, 0.14)"
        className="relative overflow-hidden px-6 py-14 sm:px-12 sm:py-20 lg:px-16"
      >
        {/* Ambient architectural glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[540px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(229,169,59,0.2)_0%,rgba(56,189,248,0.08)_45%,transparent_75%)] blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="font-mono text-xs font-medium tracking-[0.22em] text-[#E5A93B] uppercase">
            {dict.contact.eyebrow}
          </span>

          <h2 className="mt-5 text-4xl leading-[1.14] font-semibold tracking-[-0.035em] text-[#F5F5F7] sm:text-6xl">
            <SplitTextReveal as="span" text={dict.contact.heading} inView />
          </h2>

          <p className="mt-4 font-serif text-2xl italic text-white/75 sm:text-3xl">
            {dict.contact.subheading}
          </p>

          {/* Direct Clickable Email Display */}
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              data-cursor="open"
              className="group inline-flex max-w-full items-center gap-3 rounded-full border border-white/[0.14] bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] sm:px-8 sm:py-4 sm:text-xl"
            >
              <Mail className="h-4 w-4 shrink-0 text-[#E5A93B] sm:h-5 sm:w-5" />
              <span className="break-all font-mono tracking-tight sm:break-normal">
                {CONTACT_EMAIL}
              </span>
            </a>

            {/* Primary Mailto + Magnetic Copy Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                href={`mailto:${CONTACT_EMAIL}`}
                cursorMode="open"
                className="group bg-[#F5F5F7] px-7 py-3.5 text-sm font-semibold text-[#050507] shadow-[0_0_40px_rgba(255,255,255,0.14)] hover:bg-white"
              >
                <span>{dict.contact.emailCta}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>

              <MagneticButton
                onClick={handleCopyEmail}
                cursorMode="copy"
                ariaLabel={dict.contact.copyEmail}
                className="min-w-[168px] border border-white/[0.14] bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white hover:border-white/30 hover:bg-white/[0.09]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-2 text-emerald-400"
                    >
                      <Check className="h-4 w-4" />
                      <span>{dict.contact.copiedEmail}</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-2"
                    >
                      <Copy className="h-4 w-4 text-white/70" />
                      <span>{dict.contact.copyEmail}</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </MagneticButton>
            </div>

            <span role="status" aria-live="polite" className="sr-only">
              {copied ? dict.contact.copiedEmail : ""}
            </span>
          </div>

          <p className="mt-6 text-xs text-white/45">{dict.contact.responseNote}</p>

          {/* Verified External Profiles */}
          <div className="mt-12 grid grid-cols-1 gap-4 text-left md:grid-cols-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-white">
                  <GitHubIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {dict.contact.githubTitle}
                  </div>
                  <div className="mt-0.5 text-xs text-[#9898A6]">
                    {dict.contact.githubSubtitle}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-white/45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-sky-400">
                  <LinkedInIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {dict.contact.linkedinTitle}
                  </div>
                  <div className="mt-0.5 text-xs text-[#9898A6]">
                    {dict.contact.linkedinSubtitle}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-white/45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center">
                  <AppStoreIcon className="h-11 w-11" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {dict.contact.appStoreTitle}
                  </div>
                  <div className="mt-0.5 text-xs text-[#9898A6]">
                    {dict.contact.appStoreSubtitle}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-white/45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
