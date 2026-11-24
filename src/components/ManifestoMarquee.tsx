"use client";

interface ManifestoMarqueeProps {
  items: string[];
}

export function ManifestoMarquee({ items }: ManifestoMarqueeProps) {
  const repeated = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-white/[0.07] bg-[#08090D]/70 py-4"
    >
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#050507] to-transparent sm:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#050507] to-transparent sm:w-36" />

      <div className="animate-marquee flex w-max items-center gap-10">
        {repeated.map((label, idx) => (
          <div key={`${label}-${idx}`} className="flex items-center gap-10">
            <span className="font-mono text-[11px] font-medium tracking-[0.26em] text-white/40 uppercase">
              {label}
            </span>
            <span className="text-xs text-white/20">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
