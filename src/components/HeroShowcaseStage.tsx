"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { iosProjects, type IosProject } from "@/lib/projects";
import { AppStoreIcon } from "./ui/BrandIcons";
import { cn } from "@/lib/utils";

interface HeroShowcaseStageProps {
  locale: Locale;
  onSelectProject: (project: IosProject, initialSlide?: number) => void;
}

export function HeroShowcaseStage({
  locale,
  onSelectProject,
}: HeroShowcaseStageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 24, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 24, mass: 0.6 });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const badgeTranslateX = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const badgeTranslateY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    if (isPaused) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % iosProjects.length);
    }, 4600);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const activeApp = iosProjects[activeIndex];

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsPaused(false);
  };

  return (
    <div
      ref={stageRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={handlePointerLeave}
      className="relative mx-auto flex w-full max-w-[440px] flex-col items-center justify-center py-4 lg:max-w-none"
    >
      {/* Dynamic app-colored ambient studio backlight */}
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        animate={{ backgroundColor: activeApp.accentHex }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.18] blur-[90px] sm:h-[360px] sm:w-[360px]"
      />

      {/* 3D Perspective Floating Titanium iPhone */}
      <div className="relative flex items-center justify-center [perspective:1400px]">
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          {/* Floating Live App Info Glass Card (Right Parallax Layer) */}
          <motion.button
            type="button"
            onClick={() => onSelectProject(activeApp, 0)}
            data-cursor="view"
            style={{ x: badgeTranslateX, y: badgeTranslateY }}
            className="absolute -right-6 top-14 z-30 hidden items-center gap-3 rounded-2xl border border-white/[0.14] bg-[#0C0D12]/88 px-3.5 py-2.5 text-left shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-colors hover:border-white/30 xl:flex"
          >
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-[10px] border border-white/[0.14]">
              <Image
                src={activeApp.icon}
                alt={`${activeApp.name[locale]} icon`}
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <span>{activeApp.name[locale]}</span>
                <ArrowUpRight className="h-3 w-3 text-white/50" />
              </div>
              <div className="font-mono text-[10px] text-white/50">
                v{activeApp.version} · {activeApp.platform}
              </div>
            </div>
          </motion.button>

          {/* Floating App Store Verified Pill (Left Bottom Parallax Layer) */}
          <motion.a
            href={activeApp.appStoreUrl[locale]}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="open"
            style={{
              x: useTransform(badgeTranslateX, (v) => -v * 0.8),
              y: useTransform(badgeTranslateY, (v) => -v * 0.8),
            }}
            className="absolute bottom-14 -left-10 z-30 hidden items-center gap-2.5 rounded-2xl border border-white/[0.14] bg-[#0C0D12]/88 px-3.5 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-colors hover:border-white/30 xl:flex"
          >
            <AppStoreIcon className="h-9 w-9 shrink-0" />
            <div>
              <div className="text-[11px] font-semibold leading-tight text-white">
                App Store
              </div>
              <div className="text-[10px] leading-tight text-white/50">
                {activeApp.category[locale]}
              </div>
            </div>
          </motion.a>

          {/* Sculpted iPhone 16 Pro Frame */}
          <button
            type="button"
            onClick={() => onSelectProject(activeApp, 0)}
            data-cursor="view"
            aria-label={`${activeApp.name[locale]} — ${activeApp.subtitle[locale]}`}
            className="group relative block w-[224px] cursor-pointer text-left focus:outline-none sm:w-[248px] lg:w-[264px]"
          >
            {/* Side hardware buttons */}
            <span
              aria-hidden="true"
              className="absolute top-[86px] -left-[3px] h-6 w-[3px] rounded-l-sm bg-gradient-to-b from-white/40 via-white/15 to-white/30"
            />
            <span
              aria-hidden="true"
              className="absolute top-[124px] -left-[3px] h-10 w-[3px] rounded-l-sm bg-gradient-to-b from-white/35 via-white/15 to-white/25"
            />
            <span
              aria-hidden="true"
              className="absolute top-[174px] -left-[3px] h-10 w-[3px] rounded-l-sm bg-gradient-to-b from-white/35 via-white/15 to-white/25"
            />
            <span
              aria-hidden="true"
              className="absolute top-[138px] -right-[3px] h-14 w-[3px] rounded-r-sm bg-gradient-to-b from-white/35 via-white/15 to-white/25"
            />

            <div className="relative rounded-[44px] border border-white/[0.22] bg-gradient-to-b from-[#2C2E36] via-[#13141A] to-[#20222A] p-[7px] shadow-[0_34px_90px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.28)] transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="relative overflow-hidden rounded-[37px] bg-black ring-1 ring-white/[0.08]">
                {/* Dynamic Island */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-2.5 left-1/2 z-20 flex h-[19px] w-[72px] -translate-x-1/2 items-center justify-end rounded-full bg-black/95 px-2 ring-1 ring-white/[0.06]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#131826] ring-1 ring-sky-400/25" />
                </div>

                {/* Live App Screenshot */}
                <div className="relative aspect-[600/1300] w-full overflow-hidden bg-[#08090C]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeApp.id}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.985 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={activeApp.screenshots[0]}
                        alt={`${activeApp.name[locale]} — ${activeApp.subtitle[locale]}`}
                        fill
                        priority
                        sizes="(max-width: 640px) 224px, (max-width: 1024px) 248px, 264px"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Specular glass reflection */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.07]"
                  />
                </div>

                {/* Home Indicator */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-1.5 left-1/2 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-white/45"
                />
              </div>
            </div>
          </button>
        </motion.div>
      </div>

      {/* macOS / iOS Glass App Dock Switcher */}
      <div className="relative z-20 mt-6 flex items-center gap-2 rounded-2xl border border-white/[0.1] bg-[#0B0C11]/85 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        {iosProjects.map((app, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={app.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={app.name[locale]}
              aria-pressed={isActive}
              className={cn(
                "group relative flex items-center gap-2 rounded-xl p-1.5 transition-all duration-300",
                isActive
                  ? "bg-white/[0.1] pr-3 ring-1 ring-white/[0.16]"
                  : "opacity-65 hover:bg-white/[0.05] hover:opacity-100"
              )}
            >
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-[9px] border border-white/[0.14]">
                <Image
                  src={app.icon}
                  alt={app.name[locale]}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="overflow-hidden whitespace-nowrap text-left"
                >
                  <div className="text-xs font-semibold leading-tight text-white">
                    {app.name[locale]}
                  </div>
                  <div className="font-mono text-[10px] leading-tight text-white/50">
                    v{app.version}
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
