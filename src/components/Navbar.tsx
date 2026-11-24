"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

const NAV_IDS = ["work", "about", "experience", "contact"] as const;

export function Navbar({ locale, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "work", label: dict.nav.work, href: "#work" },
    { id: "about", label: dict.nav.about, href: "#about" },
    { id: "experience", label: dict.nav.experience, href: "#experience" },
    { id: "contact", label: dict.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const targetLocaleHref = locale === "en" ? "/tr" : "/";

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[120] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        {dict.nav.skipToContent}
      </a>

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
        <motion.nav
          aria-label={dict.nav.primaryNavLabel}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-6",
            scrolled
              ? "border-white/[0.12] bg-[#090A0F]/82 shadow-[0_14px_45px_rgba(0,0,0,0.55)] backdrop-blur-xl"
              : "border-white/[0.06] bg-[#090A0F]/40 backdrop-blur-md"
          )}
        >
          {/* Left Wordmark */}
          <a
            href="#top"
            className="inline-flex items-baseline text-sm font-semibold tracking-[0.14em] text-[#F5F5F7] transition-opacity hover:opacity-80"
          >
            <span>MUHAMMET</span>
            <span className="text-white/45">.</span>
          </a>

          {/* Center / Right Desktop Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors duration-300",
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 360, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full border border-white/[0.1] bg-white/[0.07]"
                    />
                  )}
                  {item.label}
                </a>
              );
            })}

            {/* Divider */}
            <span aria-hidden="true" className="mx-2 h-4 w-px bg-white/[0.12]" />

            {/* Native EN / TR Switcher */}
            <div
              role="group"
              aria-label={dict.nav.switchLanguageLabel}
              className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.03] p-0.5 font-mono text-[11px]"
            >
              <Link
                href="/"
                hrefLang="en"
                className={cn(
                  "rounded-full px-2.5 py-1 transition-all duration-300",
                  locale === "en"
                    ? "bg-[#F5F5F7] font-semibold text-[#050507]"
                    : "text-white/55 hover:text-white"
                )}
              >
                EN
              </Link>
              <Link
                href="/tr"
                hrefLang="tr"
                className={cn(
                  "rounded-full px-2.5 py-1 transition-all duration-300",
                  locale === "tr"
                    ? "bg-[#F5F5F7] font-semibold text-[#050507]"
                    : "text-white/55 hover:text-white"
                )}
              >
                TR
              </Link>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={targetLocaleHref}
              hrefLang={locale === "en" ? "tr" : "en"}
              aria-label={dict.nav.switchLanguageLabel}
              className="rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1 font-mono text-[11px] font-medium text-white/85"
            >
              {locale === "en" ? "TR" : "EN"}
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? dict.nav.closeMenu : dict.nav.openMenu}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] text-white transition-colors hover:bg-white/[0.1]"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Full-Screen Editorial Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#050507]/96 px-6 pt-28 pb-10 backdrop-blur-2xl md:hidden"
          >
            <nav aria-label={dict.nav.mobileNavLabel} className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * index, duration: 0.35 }}
                  className="flex items-baseline justify-between border-b border-white/[0.08] py-4 text-3xl font-semibold tracking-tight text-[#F5F5F7]"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-white/35">0{index + 1}</span>
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center justify-between border-t border-white/[0.08] pt-6">
              <span className="font-mono text-xs text-white/50">
                {dict.nav.availableStatus}
              </span>
              <div className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.04] p-0.5 font-mono text-xs">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-full px-3 py-1",
                    locale === "en" ? "bg-white font-semibold text-black" : "text-white/60"
                  )}
                >
                  EN
                </Link>
                <Link
                  href="/tr"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-full px-3 py-1",
                    locale === "tr" ? "bg-white font-semibold text-black" : "text-white/60"
                  )}
                >
                  TR
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
