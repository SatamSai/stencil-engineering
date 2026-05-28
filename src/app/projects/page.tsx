import { Suspense } from "react";
import { getProjectsWithImages } from "@/lib/projects";
import { ProjectsContent } from "@/components/projects/ProjectsContent";

export default function ProjectsPage() {
  const projects = getProjectsWithImages();

  return (
    <>
      <div className="p-8 pt-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[clamp(48px,6vw,100px)] text-accent leading-[0.96] tracking-[-0.025em] max-w-[12ch]">
            Selected<br />work.
          </h1>
          <p className="mt-6 text-[20px] leading-relaxed text-bg/75 max-w-[52ch]">
            A glimpse into the spaces we&apos;ve transformed and the experiences we&apos;ve elevated.
          </p>
        </div>
      </div>
      <Suspense fallback={<div className="py-24 text-center text-ink-3">Loading portfolio...</div>}>
        <ProjectsContent projects={projects} />
      </Suspense>
    </>
  );
}
