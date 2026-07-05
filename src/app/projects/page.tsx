import { Suspense } from "react";
import { getProjectsWithImages } from "@/lib/projects";
import { ProjectsContent } from "@/components/projects/ProjectsContent";

import Image from "next/image";

export default function ProjectsPage() {
  const projects = getProjectsWithImages();

  return (
    <>
      <section className="relative h-[] min-h-[350px] overflow-hidden bg-ink px-10">
        <Image
          src="/All-Site-Pics/Atlas-Phase-1-2023/7.png"
          alt="Stencil Engineering portfolio"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" />
        <div className="relative z-20 h-full py-16 pt-20 flex flex-col justify-end text-white max-w-[1400px] mx-auto">
          <div className="text-[11px] tracking-[0.1em] text-[clamp(14px,1.4vw,24px)] pb-2 opacity-70">Projects</div>
          <h1 className="text-[clamp(48px,6vw,100px)] leading-[0.96] tracking-[-0.025em] max-w-[12ch] font-serif">
            Selected<br />work.
          </h1>
          <p className="mt-6 text-[20px] leading-relaxed text-white/80 max-w-[52ch]">
            A glimpse into the spaces we&apos;ve transformed and the experiences we&apos;ve elevated.
          </p>
        </div>
      </section>
      <Suspense fallback={<div className="py-24 text-center text-ink-3">Loading portfolio...</div>}>
        <ProjectsContent projects={projects} />
      </Suspense>
    </>
  );
}
