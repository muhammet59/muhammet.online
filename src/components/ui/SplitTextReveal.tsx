"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  inView?: boolean;
}

export function SplitTextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  as = "p",
  inView = false,
}: SplitTextRevealProps) {
  const words = text.split(" ");
  const Component = motion[as];

  return (
    <Component
      className={cn("inline", className)}
      initial="hidden"
      animate={inView ? undefined : "visible"}
      whileInView={inView ? "visible" : undefined}
      viewport={inView ? { once: true, amount: 0.2 } : undefined}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {words.map((word, idx) => (
        <span key={`${word}-${idx}`} className="inline-block py-[0.04em]">
          <motion.span
            className="inline-block will-change-[transform,opacity,filter]"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                filter: "blur(8px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
          {idx < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Component>
  );
}
