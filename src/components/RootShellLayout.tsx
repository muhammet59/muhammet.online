import type { ReactNode } from "react";
import { Instrument_Serif, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import type { Locale } from "@/lib/i18n";
import "@/app/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

interface RootShellLayoutProps {
  locale: Locale;
  children: ReactNode;
}

export function RootShellLayout({ locale, children }: RootShellLayoutProps) {
  return (
    <html
      lang={locale}
      className={`${plusJakarta.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-[#050507] text-[#F5F5F7] selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
