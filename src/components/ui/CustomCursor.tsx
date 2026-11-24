"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface CustomCursorProps {
  labels: {
    view: string;
    open: string;
    copy: string;
    explore: string;
  };
}

type CursorMode = "default" | "pointer" | "view" | "open" | "copy" | "explore";

function subscribePointerEnv(cb: () => void) {
  const mqlPointer = window.matchMedia("(pointer: fine)");
  const mqlMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  mqlPointer.addEventListener("change", cb);
  mqlMotion.addEventListener("change", cb);
  return () => {
    mqlPointer.removeEventListener("change", cb);
    mqlMotion.removeEventListener("change", cb);
  };
}

function getPointerEnabled() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function CustomCursor({ labels }: CustomCursorProps) {
  const enabled = useSyncExternalStore(
    subscribePointerEnv,
    getPointerEnabled,
    () => false
  );
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 420, damping: 34, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 420, damping: 34, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      const tagged = target?.closest<HTMLElement>("[data-cursor]");
      if (tagged) {
        const nextMode = tagged.dataset.cursor as CursorMode;
        setMode(nextMode || "pointer");
        return;
      }

      const interactive = target?.closest("a, button, [role='button'], input");
      setMode(interactive ? "pointer" : "default");
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  const hasLabel = mode === "view" || mode === "open" || mode === "copy" || mode === "explore";
  const labelText = hasLabel ? labels[mode] : "";

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-md"
        animate={{
          width: hasLabel ? 76 : mode === "pointer" ? 40 : 18,
          height: hasLabel ? 32 : mode === "pointer" ? 40 : 18,
          backgroundColor: hasLabel
            ? "rgba(245, 245, 247, 0.94)"
            : mode === "pointer"
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(255, 255, 255, 0.02)",
          borderColor: hasLabel
            ? "rgba(255, 255, 255, 0.9)"
            : mode === "pointer"
              ? "rgba(255, 255, 255, 0.45)"
              : "rgba(255, 255, 255, 0.35)",
        }}
        transition={{ type: "spring", stiffness: 360, damping: 28 }}
      >
        {hasLabel ? (
          <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-[#050507]">
            {labelText}
          </span>
        ) : (
          <span
            className={`h-1 w-1 rounded-full bg-white transition-opacity duration-200 ${
              mode === "pointer" ? "opacity-0" : "opacity-80"
            }`}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
