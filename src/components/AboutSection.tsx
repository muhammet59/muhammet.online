"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion } from "motion/react";
import { Pause, Play } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { SpotlightCard } from "./ui/SpotlightCard";
import { SplitTextReveal } from "./ui/SplitTextReveal";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  dict: Dictionary;
}

function getOrpIndex(word: string): number {
  const len = word.length;
  if (len <= 1) return 0;
  if (len <= 5) return 1;
  if (len <= 9) return 2;
  return 3;
}

function subscribeReducedMotion(cb: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AboutSection({ dict }: AboutSectionProps) {
  const words = dict.about.interactiveCard.sampleWords;
  const [wordIndex, setWordIndex] = useState(0);
  const [userPlaying, setUserPlaying] = useState<boolean | null>(null);
  const [wpm, setWpm] = useState<number>(300);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );

  const isPlaying = userPlaying ?? !prefersReducedMotion;

  useEffect(() => {
    if (!isPlaying) return;
    const msPerWord = Math.round(60000 / wpm);
    const timer = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, msPerWord);

    return () => window.clearInterval(timer);
  }, [isPlaying, wpm, words.length]);

  const currentWord = words[wordIndex % words.length] ?? "";
  const orpIdx = getOrpIndex(currentWord);
  const prefix = currentWord.slice(0, orpIdx);
  const focalChar = currentWord.charAt(orpIdx);
  const suffix = currentWord.slice(orpIdx + 1);

  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl border-t border-white/[0.07] px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Left Editorial Column */}
        <div className="lg:col-span-7">
          <span className="font-mono text-xs font-medium tracking-[0.22em] text-[#E5A93B] uppercase">
            {dict.about.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold tracking-[-0.03em] text-[#F5F5F7] sm:text-5xl">
            <SplitTextReveal as="span" text={dict.about.heading} inView />
          </h2>

          <p className="mt-6 text-lg leading-relaxed font-medium text-white/85 sm:text-xl">
            {dict.about.lead}
          </p>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#9898A6]">
            {dict.about.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Authentic Dijkstra Philosophy Quote */}
          <blockquote className="mt-8 border-l-2 border-[#E5A93B]/70 pl-5">
            <p className="font-serif text-2xl italic tracking-tight text-white/90 sm:text-3xl">
              &ldquo;{dict.about.quote}&rdquo;
            </p>
            <footer className="mt-1.5 font-mono text-xs tracking-[0.14em] text-white/45 uppercase">
              — {dict.about.quoteAuthor}
            </footer>
          </blockquote>

          {/* Verified Key Metrics Strip */}
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {dict.about.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4"
              >
                <dt className="text-2xl font-semibold tracking-tight text-[#F5F5F7] sm:text-3xl">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-[#8E8E98]">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right Interactive Craft & Engineering Pillars Column */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          {/* Interactive Fovex-Inspired RSVP Optical Focus Micro-Engine */}
          <SpotlightCard
            spotlightColor="rgba(229, 169, 59, 0.16)"
            className="p-6"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] tracking-[0.14em] text-white/55 uppercase">
                {dict.about.interactiveCard.badge}
              </span>
              <span className="font-mono text-[11px] text-white/45">
                {wpm} {dict.about.interactiveCard.speedLabel}
              </span>
            </div>

            <h3 className="mt-3 text-base font-semibold text-white">
              {dict.about.interactiveCard.title}
            </h3>
            <p className="mt-1 text-xs text-[#8E8E98]">
              {dict.about.interactiveCard.subtitle}
            </p>

            {/* Pure AMOLED Focal Display */}
            <div className="relative mt-5 flex h-28 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.09] bg-black px-4">
              {/* Top & bottom optical calibration notches */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-[#E5A93B]/75"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-[#E5A93B]/75"
              />

              {/* ORP-aligned typography */}
              <div
                aria-live="off"
                className="grid w-full grid-cols-[minmax(0,0.75fr)_auto_minmax(0,1.25fr)] items-baseline font-mono text-xl font-semibold tracking-tight sm:text-2xl"
              >
                <span className="text-right text-white/90">{prefix}</span>
                <span className="text-[#E5A93B]">{focalChar}</span>
                <span className="text-left text-white/90">{suffix}</span>
              </div>

              <span className="absolute bottom-2 right-3 font-mono text-[9px] tracking-[0.12em] text-white/30">
                {String(wordIndex + 1).padStart(2, "0")}/{String(words.length).padStart(2, "0")}
              </span>
            </div>

            {/* Interactive Controls */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setUserPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.14] bg-white/[0.05] px-3.5 py-1.5 font-mono text-[11px] font-medium text-white transition-colors hover:bg-white/[0.12]"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-3 w-3" />
                    <span>{dict.about.interactiveCard.pauseLabel}</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3" />
                    <span>{dict.about.interactiveCard.playLabel}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-1 rounded-full border border-white/[0.09] bg-white/[0.02] p-0.5 font-mono text-[10px]">
                {[240, 300, 450].map((speed) => (
                  <button
                    key={speed}
                    type="button"
                    onClick={() => setWpm(speed)}
                    className={cn(
                      "rounded-full px-2.5 py-1 transition-colors",
                      wpm === speed
                        ? "bg-[#E5A93B] font-semibold text-black"
                        : "text-white/55 hover:text-white"
                    )}
                  >
                    {speed}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-3 font-mono text-[10px] tracking-[0.06em] text-white/40">
              {dict.about.interactiveCard.caption}
            </p>
          </SpotlightCard>

          {/* Engineering Pillars */}
          <div className="space-y-3">
            {dict.about.pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="rounded-2xl border border-white/[0.08] bg-[#0B0C10]/80 p-5 transition-colors hover:border-white/[0.15]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[11px] text-[#E5A93B]">
                    0{idx + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-white">{pillar.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#9898A6]">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
