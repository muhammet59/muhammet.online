"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  cursorMode?: "view" | "open" | "copy" | "explore";
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  href,
  target,
  rel,
  onClick,
  type = "button",
  ariaLabel,
  cursorMode,
  strength = 0.24,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.35 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    className: cn(
      "inline-flex items-center justify-center gap-2.5 rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white/80",
      className
    ),
    "aria-label": ariaLabel,
    "data-cursor": cursorMode,
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      {href ? (
        <a href={href} target={target} rel={rel} onClick={onClick} {...sharedProps}>
          {children}
        </a>
      ) : (
        <button type={type} onClick={onClick} {...sharedProps}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
