"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectSkeleton } from "@/components/projects/ProjectSkeleton";
import { ImageViewerModal } from "@/components/projects/ImageViewerModal";
import type { Project } from "@/lib/projects";

interface ProjectsContentProps {
  projects: Project[];
}

export function ProjectsContent({ projects }: ProjectsContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlType = searchParams.get("type");

  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = React.useState(10);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

  const types = ["All", ...Array.from(new Set(projects.map((p) => p.type).filter((t) => t && t.trim() !== "")))];

  const filter = urlType && types.includes(urlType) ? urlType : "All";
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const observerTarget = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const loadMoreTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasMoreRef = React.useRef(hasMore);
  const isLoadingMoreRef = React.useRef(isLoadingMore);

  const [prevFilter, setPrevFilter] = React.useState(filter);
  if (filter !== prevFilter) {
    setPrevFilter(filter);
    setVisibleCount(10);
  }

  React.useEffect(() => {
    hasMoreRef.current = hasMore;
    isLoadingMoreRef.current = isLoadingMore;
  }, [hasMore, isLoadingMore]);

  const loadMore = React.useCallback(() => {
    setIsLoadingMore(true);
    loadMoreTimeoutRef.current = setTimeout(() => {
      setVisibleCount((prev) => prev + 10);
      setIsLoadingMore(false);
    }, 800);
  }, []);

  React.useEffect(() => {
    return () => {
      if (loadMoreTimeoutRef.current) {
        clearTimeout(loadMoreTimeoutRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMoreRef.current && !isLoadingMoreRef.current) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);

  const handleFilterClick = (t: string) => {
    router.push(`/projects${t === "All" ? "" : `?type=${encodeURIComponent(t)}`}`, { scroll: false });
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section ref={contentRef} className="px-5 md:px-8 py-24 pb-[120px]" style={{ background: "#edededb8" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-[200px] shrink-0 lg:sticky lg:top-[100px] self-start z-10">
              <h2 className=" text-[11px] tracking-[0.1em] uppercase text-ink-3 mb-7 border-b border-line pb-3">Index</h2>
              <div className="flex flex-row lg:flex-col gap-3 flex-wrap lg:overflow-visible pb-4 lg:pb-0">
                {types.map((t) => (
                  <button
                    key={t}
                    onClick={() => handleFilterClick(t)}
                    className={`text-left bg-transparent p-0 tracking-[-0.01em] transition-all duration-300 whitespace-nowrap leading-[1.2] ${
                      filter === t
                        ? "text-accent md:text-[28px] text-[22px] font-semibold"
                        : "text-ink-3 md:text-[22px] text-[18px] font-normal hover:text-ink"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={filter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-12"
                >
                  {displayedProjects.map((project, index) => (
                    <div key={project.id}>
                      <ProjectCard
                        project={project}
                        priority={index < 2}
                        onClick={() => setSelectedProject(project)}
                      />
                    </div>
                  ))}

                  {isLoadingMore && (
                    <>
                      <div><ProjectSkeleton /></div>
                      <div><ProjectSkeleton /></div>
                      <div><ProjectSkeleton /></div>
                      <div><ProjectSkeleton /></div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div ref={observerTarget} className="h-10 w-full" />
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ImageViewerModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
