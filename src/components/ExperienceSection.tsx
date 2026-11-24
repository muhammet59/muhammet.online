"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Award, GraduationCap } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { SpotlightCard } from "./ui/SpotlightCard";
import { SplitTextReveal } from "./ui/SplitTextReveal";

interface ExperienceSectionProps {
  dict: Dictionary;
}

export function ExperienceSection({ dict }: ExperienceSectionProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 70%"],
  });

  const spineScale = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
  });

  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl border-t border-white/[0.07] px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="max-w-3xl">
        <span className="font-mono text-xs font-medium tracking-[0.22em] text-[#E5A93B] uppercase">
          {dict.experience.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl leading-[1.15] font-semibold tracking-[-0.03em] text-[#F5F5F7] sm:text-5xl">
          <SplitTextReveal as="span" text={dict.experience.heading} inView />
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#9898A6] sm:text-lg">
          {dict.experience.subheading}
        </p>
      </div>

      {/* Editorial Vertical Timeline */}
      <div ref={timelineRef} className="relative mt-14 pl-7 sm:pl-12">
        {/* Static track line */}
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-px bg-white/[0.1] sm:left-[15px]"
        />
        {/* Scroll-drawn luminous spine */}
        <motion.div
          aria-hidden="true"
          style={{ scaleY: spineScale }}
          className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-[#E5A93B] via-white/80 to-sky-400 sm:left-[15px]"
        />

        <div className="space-y-8">
          {dict.experience.entries.map((entry, idx) => (
            <motion.article
              key={`${entry.period}-${entry.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Timeline Node Marker */}
              <span
                aria-hidden="true"
                className="absolute top-7 -left-7 flex h-4 w-4 items-center justify-center rounded-full border border-[#E5A93B]/70 bg-[#050507] sm:-left-12 sm:ml-[8px]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#E5A93B]" />
              </span>

              <SpotlightCard
                spotlightColor="rgba(229, 169, 59, 0.1)"
                className="p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                  {/* Left Period & Organization */}
                  <div className="lg:col-span-4">
                    <span className="inline-block rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1 font-mono text-xs font-medium text-[#E5A93B]">
                      {entry.period}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#F5F5F7]">
                      {entry.role}
                    </h3>
                    <p className="mt-1 text-sm text-white/65">{entry.organization}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-white/40 uppercase">
                      {entry.location}
                    </p>
                  </div>

                  {/* Right Summary, Verified Highlights & Tags */}
                  <div className="lg:col-span-8">
                    <p className="text-base leading-relaxed text-[#B6B6C4]">
                      {entry.summary}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {entry.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-[#9898A6]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/45"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1 font-mono text-[11px] text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Education & Certifications Editorial Grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Education */}
        <SpotlightCard
          spotlightColor="rgba(229, 169, 59, 0.1)"
          className="p-6 sm:p-8"
        >
          <div className="flex items-center gap-2.5 border-b border-white/[0.08] pb-4">
            <GraduationCap className="h-4 w-4 text-[#E5A93B]" />
            <h3 className="font-mono text-xs font-medium tracking-[0.18em] text-white/75 uppercase">
              {dict.experience.educationHeading}
            </h3>
          </div>

          <div className="mt-6 space-y-6">
            {dict.experience.education.map((edu) => (
              <div
                key={`${edu.institution}-${edu.field}`}
                className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline"
              >
                <div>
                  <h4 className="text-base font-semibold text-[#F5F5F7]">
                    {edu.institution}
                  </h4>
                  <p className="mt-0.5 text-sm text-[#9898A6]">
                    {edu.field} ·{" "}
                    <span className="text-white/55">{edu.degree}</span>
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[11px] text-[#E5A93B]/85">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* Certifications */}
        <SpotlightCard
          spotlightColor="rgba(56, 189, 248, 0.1)"
          className="p-6 sm:p-8"
        >
          <div className="flex items-center gap-2.5 border-b border-white/[0.08] pb-4">
            <Award className="h-4 w-4 text-sky-400" />
            <h3 className="font-mono text-xs font-medium tracking-[0.18em] text-white/75 uppercase">
              {dict.experience.certificationsHeading}
            </h3>
          </div>

          <div className="mt-6 space-y-6">
            {dict.experience.certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline"
              >
                <div>
                  <h4 className="text-base font-semibold text-[#F5F5F7]">
                    {cert.title}
                  </h4>
                  <p className="mt-0.5 text-sm text-[#9898A6]">{cert.issuer}</p>
                </div>
                <span className="shrink-0 font-mono text-[11px] text-sky-400/85">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
