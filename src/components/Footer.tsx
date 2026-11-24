"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import {
  APP_STORE_URL,
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";
import { AppStoreIcon } from "./ui/BrandIcons";
import { cn } from "@/lib/utils";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

const emptySubscribe = () => () => {};

export function Footer({ locale, dict }: FooterProps) {
  const year = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  return (
    <footer className="border-t border-white/[0.07] bg-[#050507]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center sm:px-10">
        <div>
          <div className="text-sm font-semibold tracking-[0.12em] text-[#F5F5F7]">
            MUHAMMET AYDIN<span className="text-white/45">.</span>
          </div>
          <p className="mt-1.5 text-xs text-white/45">
            &copy; {year} Muhammet Aydın. {dict.footer.rights}{" "}
            <span className="hidden sm:inline">· {dict.footer.builtWith}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-white"
          >
            <AppStoreIcon className="h-5 w-5" />
            <span>App Store</span>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/55 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/55 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-white/55 transition-colors hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>

          {/* Language Selector */}
          <div className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.03] p-0.5 font-mono text-[11px]">
            <Link
              href="/"
              hrefLang="en"
              className={cn(
                "rounded-full px-2.5 py-0.5 transition-colors",
                locale === "en"
                  ? "bg-white font-semibold text-black"
                  : "text-white/55 hover:text-white"
              )}
            >
              EN
            </Link>
            <Link
              href="/tr"
              hrefLang="tr"
              className={cn(
                "rounded-full px-2.5 py-0.5 transition-colors",
                locale === "tr"
                  ? "bg-white font-semibold text-black"
                  : "text-white/55 hover:text-white"
              )}
            >
              TR
            </Link>
          </div>

          <a
            href="#top"
            aria-label={dict.footer.backToTop}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] text-white/65 transition-colors hover:border-white/30 hover:text-white"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
