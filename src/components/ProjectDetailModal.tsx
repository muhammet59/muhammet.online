"use client";

import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Globe, X } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { IosProject } from "@/lib/projects";
import { IPhoneMockup } from "./IPhoneMockup";
import { cn } from "@/lib/utils";

interface ProjectDetailModalProps {
  project: IosProject | null;
  initialSlide?: number;
  onClose: () => void;
  locale: Locale;
  dict: Dictionary;
}

export function ProjectDetailModal({
  project,
  initialSlide = 0,
  onClose,
  locale,
  dict,
}: ProjectDetailModalProps) {
  const [activeSlide, setActiveSlide] = useState(initialSlide);

  if (!project) return null;

  const totalSlides = project.screenshots.length;
  const goPrev = () => setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goNext = () => setActiveSlide((prev) => (prev + 1) % totalSlides);

  return (
    <Dialog.Root open={Boolean(project)} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed top-1/2 left-1/2 z-[90] max-h-[90svh] w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[32px] border border-white/[0.12] bg-[#0B0C11] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.85)] focus:outline-none sm:p-8 lg:p-10"
        >
          {/* Ambient top glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-1/4 h-56 w-96 rounded-full opacity-35 blur-3xl"
            style={{ backgroundColor: project.accentHex }}
          />

          {/* Header row */}
          <div className="relative z-10 flex items-start justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[15px] border border-white/[0.14] shadow-lg">
                <Image
                  src={project.icon}
                  alt={`${project.name[locale]} app icon`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Dialog.Title className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {project.name[locale]}
                  </Dialog.Title>
                  <span
                    className="rounded-full border px-2.5 py-0.5 font-mono text-[11px]"
                    style={{
                      borderColor: `${project.accentHex}55`,
                      color: project.accentHex,
                      backgroundColor: `${project.accentHex}14`,
                    }}
                  >
                    v{project.version}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-[#9898A6]">{project.subtitle[locale]}</p>
              </div>
            </div>

            <Dialog.Close
              aria-label={dict.work.modalClose}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] text-white/75 transition-colors hover:bg-white/[0.12] hover:text-white"
            >
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>

          {/* Content Grid */}
          <div className="relative z-10 mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left Interactive Device Gallery */}
            <div className="flex flex-col items-center lg:col-span-5">
              <IPhoneMockup
                src={project.screenshots[activeSlide]}
                alt={`${project.name[locale]} ${dict.work.screenCounter} ${activeSlide + 1}`}
                accentHex={project.accentHex}
                interactiveTilt={false}
              />

              {/* Gallery Controls */}
              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label={dict.work.prevScreen}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] text-white/80 transition-colors hover:bg-white/[0.1]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-1.5">
                  {project.screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`${dict.work.screenCounter} ${idx + 1}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        idx === activeSlide ? "w-6 bg-white" : "w-1.5 bg-white/25 hover:bg-white/50"
                      )}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label={dict.work.nextScreen}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] text-white/80 transition-colors hover:bg-white/[0.1]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Deep-Dive Specifications */}
            <div className="flex flex-col justify-between gap-7 lg:col-span-7">
              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.18em] text-white/45 uppercase">
                    {dict.work.modalOverview}
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-[#D1D1DC]">
                    {project.longDescription[locale]}
                  </p>
                </div>

                {/* Verified Capabilities */}
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.18em] text-white/45 uppercase">
                    {dict.work.modalHighlights}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {project.highlights[locale].map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#B6B6C4]"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: project.accentHex }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.18em] text-white/45 uppercase">
                    {dict.work.modalStack}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack[locale].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 font-mono text-xs text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specs Grid */}
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.18em] text-white/45 uppercase">
                    {dict.work.modalSpecs}
                  </h3>
                  <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3">
                      <dt className="font-mono text-[10px] text-white/40 uppercase">
                        {dict.work.platformLabel}
                      </dt>
                      <dd className="mt-1 text-xs font-medium text-white">{project.platform}</dd>
                    </div>
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3">
                      <dt className="font-mono text-[10px] text-white/40 uppercase">
                        {dict.work.minOsLabel}
                      </dt>
                      <dd className="mt-1 text-xs font-medium text-white">{project.minOs}</dd>
                    </div>
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3">
                      <dt className="font-mono text-[10px] text-white/40 uppercase">
                        {dict.work.releaseLabel}
                      </dt>
                      <dd className="mt-1 text-xs font-medium text-white">
                        {project.released[locale]}
                      </dd>
                    </div>
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3">
                      <dt className="font-mono text-[10px] text-white/40 uppercase">
                        {dict.work.languagesLabel}
                      </dt>
                      <dd className="mt-1 text-xs font-medium text-white">
                        {project.languages.join(" · ")}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Action Footer */}
              <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5">
                <a
                  href={project.appStoreUrl[locale]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F7] px-6 py-3 text-sm font-semibold text-[#050507] transition-all hover:bg-white"
                >
                  <span>{dict.work.openAppStore}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                {project.portalUrl && (
                  <a
                    href={project.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/[0.09]"
                  >
                    <Globe className="h-4 w-4 text-white/70" />
                    <span>{dict.work.openLivePortal}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
