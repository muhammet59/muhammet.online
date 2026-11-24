"use client";

import { useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface IPhoneMockupProps {
  src: string;
  alt: string;
  accentHex: string;
  priority?: boolean;
  className?: string;
  interactiveTilt?: boolean;
}

export function IPhoneMockup({
  src,
  alt,
  accentHex,
  priority = false,
  className,
  interactiveTilt = true,
}: IPhoneMockupProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 24 });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactiveTilt || e.pointerType !== "mouse" || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(nx);
    pointerY.set(ny);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      ref={frameRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn("relative mx-auto [perspective:1200px]", className)}
    >
      <motion.div
        style={interactiveTilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        className="relative mx-auto w-[230px] sm:w-[258px] lg:w-[274px]"
      >
        {/* Subtle titanium outer shadow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 rounded-[52px] opacity-40 blur-2xl transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 40%, ${accentHex}44, transparent 72%)`,
          }}
        />

        {/* Side hardware buttons */}
        <span
          aria-hidden="true"
          className="absolute top-[92px] -left-[3px] h-7 w-[3px] rounded-l-sm bg-gradient-to-b from-white/40 via-white/15 to-white/30"
        />
        <span
          aria-hidden="true"
          className="absolute top-[134px] -left-[3px] h-11 w-[3px] rounded-l-sm bg-gradient-to-b from-white/35 via-white/15 to-white/25"
        />
        <span
          aria-hidden="true"
          className="absolute top-[188px] -left-[3px] h-11 w-[3px] rounded-l-sm bg-gradient-to-b from-white/35 via-white/15 to-white/25"
        />
        <span
          aria-hidden="true"
          className="absolute top-[146px] -right-[3px] h-16 w-[3px] rounded-r-sm bg-gradient-to-b from-white/35 via-white/15 to-white/25"
        />

        {/* Titanium outer chassis */}
        <div className="relative rounded-[44px] border border-white/[0.22] bg-gradient-to-b from-[#2A2C34] via-[#121318] to-[#1E2028] p-[7px] shadow-[0_32px_80px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(255,255,255,0.3)]">
          {/* Inner black glass bezel */}
          <div className="relative overflow-hidden rounded-[37px] bg-black ring-1 ring-white/[0.08]">
            {/* Dynamic Island */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-2.5 left-1/2 z-20 flex h-[20px] w-[76px] -translate-x-1/2 items-center justify-end rounded-full bg-black/95 px-2 ring-1 ring-white/[0.06]"
            >
              <span className="h-2 w-2 rounded-full bg-[#131826] ring-1 ring-sky-400/25" />
            </div>

            {/* 19.5:9 App Store Screen Container */}
            <div className="relative aspect-[600/1300] w-full overflow-hidden bg-[#08090C]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    sizes="(max-width: 640px) 230px, (max-width: 1024px) 258px, 274px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Subtle diagonal glass reflection */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07]"
              />
            </div>

            {/* Bottom Home Indicator */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-1.5 left-1/2 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-white/45"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
