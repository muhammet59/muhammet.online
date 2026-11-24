"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Eye, Globe, Layers, Terminal } from "lucide-react";
import { AppleGlyph, GitHubIcon } from "./ui/BrandIcons";
import type { Dictionary, Locale } from "@/lib/i18n";
import {
  engineeringProjects,
  iosProjects,
  type IosProject,
} from "@/lib/projects";
import { IPhoneMockup } from "./IPhoneMockup";
import { MagneticButton } from "./ui/MagneticButton";
import { SpotlightCard } from "./ui/SpotlightCard";
import { SplitTextReveal } from "./ui/SplitTextReveal";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface SelectedWorkSectionProps {
  locale: Locale;
  dict: Dictionary;
  onSelectProject: (project: IosProject, initialSlide?: number) => void;
}

function IosShowcaseCard({
  project,
  index,
  locale,
  dict,
  onSelect,
}: {
  project: IosProject;
  index: number;
  locale: Locale;
  dict: Dictionary;
  onSelect: (project: IosProject, initialSlide?: number) => void;
}) {
  const [activeShot, setActiveShot] = useState(0);
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <SpotlightCard
        spotlightColor={project.accentGlow}
        className="p-6 sm:p-8 lg:p-12"
      >
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12",
            reversed && "lg:[&>*:first-child]:order-2"
          )}
        >
          {/* Narrative & Specs Column */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              {/* Index + Category */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs tracking-[0.2em] text-white/40">
                  {project.index}
                </span>
                <span className="h-px w-6 bg-white/15" />
                <span
                  className="rounded-full border px-3 py-1 font-mono text-[11px] font-medium tracking-[0.08em]"
                  style={{
                    borderColor: `${project.accentHex}44`,
                    color: project.accentHex,
                    backgroundColor: `${project.accentHex}12`,
                  }}
                >
                  {project.category[locale]}
                </span>
                <span className="font-mono text-[11px] text-white/45">
                  v{project.version}
                </span>
              </div>

              {/* App Icon + Title */}
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[15px] border border-white/[0.16] shadow-[0_12px_30px_rgba(0,0,0,0.45)] sm:h-16 sm:w-16">
                  <Image
                    src={project.icon}
                    alt={`${project.name[locale]} icon`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.025em] text-[#F5F5F7] sm:text-4xl">
                    {project.name[locale]}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-white/60 sm:text-base">
                    {project.subtitle[locale]}
                  </p>
                </div>
              </div>

              {/* Editorial Description */}
              <p className="mt-6 text-base leading-relaxed text-[#A3A3B2]">
                {project.shortDescription[locale]}
              </p>

              {/* Key Role / Platform Specs */}
              <dl className="mt-7 grid grid-cols-2 gap-4 border-y border-white/[0.08] py-4 sm:grid-cols-3">
                <div>
                  <dt className="font-mono text-[10px] tracking-[0.14em] text-white/40 uppercase">
                    {dict.work.roleLabel}
                  </dt>
                  <dd className="mt-1 text-xs font-medium text-white/85">
                    {project.role[locale]}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] tracking-[0.14em] text-white/40 uppercase">
                    {dict.work.platformLabel}
                  </dt>
                  <dd className="mt-1 text-xs font-medium text-white/85">
                    {project.platform} · {project.minOs}
                  </dd>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <dt className="font-mono text-[10px] tracking-[0.14em] text-white/40 uppercase">
                    {dict.work.languagesLabel}
                  </dt>
                  <dd className="mt-1 text-xs font-medium text-white/85">
                    {project.languages.join(", ")}
                  </dd>
                </div>
              </dl>

              {/* Tech Stack Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack[locale].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[0.09] bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton
                href={project.appStoreUrl[locale]}
                target="_blank"
                rel="noopener noreferrer"
                cursorMode="open"
                className="group bg-[#F5F5F7] px-6 py-3 text-sm font-semibold text-[#050507] hover:bg-white"
              >
                <AppleGlyph className="h-4 w-4 -mt-0.5" />
                <span>{dict.work.openAppStore}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>

              <MagneticButton
                onClick={() => onSelect(project, activeShot)}
                cursorMode="view"
                className="border border-white/[0.14] bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/90 hover:border-white/30 hover:bg-white/[0.08]"
              >
                <Eye className="h-4 w-4 text-white/70" />
                <span>{dict.work.viewCaseStudy}</span>
              </MagneticButton>
            </div>
          </div>

          {/* Interactive Apple iPhone 16 Pro Showcase Stage */}
          <div className="relative lg:col-span-6">
            <div className="device-parallax-stage relative flex flex-col items-center justify-center rounded-[26px] border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-black/50 px-4 py-8 sm:px-8 sm:py-10">
              {/* Project-specific radial color identity */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
                style={{ backgroundColor: project.accentHex }}
              />

              <button
                type="button"
                onClick={() => onSelect(project, activeShot)}
                data-cursor="view"
                aria-label={`${project.name[locale]} — ${dict.work.viewCaseStudy}`}
                className="relative z-10 cursor-pointer focus:outline-none"
              >
                <IPhoneMockup
                  src={project.screenshots[activeShot]}
                  alt={`${project.name[locale]} ${dict.work.screenCounter} ${activeShot + 1}`}
                  accentHex={project.accentHex}
                  priority={index === 0}
                />
              </button>

              {/* Inline Interactive Screenshot Switcher */}
              <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-2">
                {project.screenshots.map((_, shotIdx) => {
                  const isActive = shotIdx === activeShot;
                  return (
                    <button
                      key={shotIdx}
                      type="button"
                      onClick={() => setActiveShot(shotIdx)}
                      aria-label={`${project.name[locale]} ${dict.work.screenCounter} ${shotIdx + 1}`}
                      className={cn(
                        "flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] transition-all duration-300",
                        isActive
                          ? "border-white/30 bg-white/12 text-white"
                          : "border-white/[0.08] bg-white/[0.02] text-white/45 hover:border-white/20 hover:text-white/80"
                      )}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full transition-colors"
                        style={{
                          backgroundColor: isActive ? project.accentHex : "rgba(255,255,255,0.25)",
                        }}
                      />
                      <span>0{shotIdx + 1}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.article>
  );
}

export function SelectedWorkSection({
  locale,
  dict,
  onSelectProject,
}: SelectedWorkSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || window.innerWidth < 1024 || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const stages = gsap.utils.toArray<HTMLElement>(".device-parallax-stage");
      stages.forEach((stage) => {
        gsap.fromTo(
          stage,
          { y: 18 },
          {
            y: -18,
            ease: "none",
            scrollTrigger: {
              trigger: stage,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32"
    >
      {/* Section Header */}
      <div className="max-w-3xl">
        <span className="font-mono text-xs font-medium tracking-[0.22em] text-[#E5A93B] uppercase">
          {dict.work.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl leading-[1.15] font-semibold tracking-[-0.03em] text-[#F5F5F7] sm:text-5xl">
          <SplitTextReveal as="span" text={dict.work.heading} inView />
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#9898A6] sm:text-lg">
          {dict.work.subheading}
        </p>
      </div>

      {/* Sub-header: App Store Releases */}
      <div className="mt-14 mb-8 flex flex-col justify-between gap-2 border-b border-white/[0.08] pb-4 sm:flex-row sm:items-end">
        <div className="flex items-center gap-2.5">
          <Layers className="h-4 w-4 text-[#E5A93B]" />
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {dict.work.iosHeading}
          </h3>
        </div>
        <p className="font-mono text-xs text-white/45">{dict.work.iosNote}</p>
      </div>

      {/* Asymmetric Editorial Showcase List */}
      <div className="space-y-10 sm:space-y-14">
        {iosProjects.map((project, index) => (
          <IosShowcaseCard
            key={project.id}
            project={project}
            index={index}
            locale={locale}
            dict={dict}
            onSelect={onSelectProject}
          />
        ))}
      </div>

      {/* Sub-header: Engineering & Open Source */}
      <div className="mt-24 mb-8 flex flex-col justify-between gap-2 border-b border-white/[0.08] pb-4 sm:flex-row sm:items-end">
        <div className="flex items-center gap-2.5">
          <Terminal className="h-4 w-4 text-sky-400" />
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {dict.work.engineeringHeading}
          </h3>
        </div>
        <p className="font-mono text-xs text-white/45">{dict.work.engineeringNote}</p>
      </div>

      {/* Bento Engineering Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {engineeringProjects.map((repo, idx) => (
          <motion.article
            key={repo.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <SpotlightCard
              spotlightColor={`${repo.accentHex}24`}
              className="flex h-full flex-col p-6"
            >
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  {/* Header meta */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] tracking-[0.12em] text-white/50 uppercase">
                      {repo.category[locale]}
                    </span>
                    <span className="rounded-full border border-white/[0.1] bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-white/60">
                      {repo.year}
                    </span>
                  </div>

                  <h4 className="mt-3 break-words font-mono text-lg font-semibold tracking-tight text-[#F5F5F7]">
                    {repo.name}
                  </h4>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#9898A6]">
                    {repo.shortDescription[locale]}
                  </p>

                  {/* Authentic Terminal Output Mockup */}
                  <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050609]">
                    <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3.5 py-2">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="ml-2 font-mono text-[10px] text-white/35">
                        {repo.platform}
                      </span>
                    </div>
                    <div className="space-y-1 overflow-x-auto p-3.5 font-mono text-[11px] leading-relaxed">
                      {repo.terminalLines.map((line, lineIdx) => (
                        <div
                          key={lineIdx}
                          className={cn(
                            "whitespace-pre-wrap break-words",
                            line.startsWith("$")
                              ? "text-white/90"
                              : line.includes("✓") || line.includes("SUCCESS") || line.includes("200")
                                ? "text-emerald-400/90"
                                : "text-white/50"
                          )}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {repo.stack[locale].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-0.5 font-mono text-[10px] text-white/65"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-4">
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="open"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-white/85 transition-colors hover:text-white"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" />
                      <span>{dict.work.openGithub}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/50" />
                    </a>

                    {repo.liveUrl && (
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="open"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E5A93B] transition-opacity hover:opacity-85"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        <span>{dict.work.openLivePortal}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
