"use client";

import * as React from "react";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "@/data/projects.json";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectSkeleton } from "@/components/projects/ProjectSkeleton";
import { ImageViewerModal } from "@/components/projects/ImageViewerModal";
import { useRouter, useSearchParams } from "next/navigation";

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlType = searchParams.get("type");
  
  const [selectedProject, setSelectedProject] = React.useState<typeof projectsData[0] | null>(null);
  const [visibleCount, setVisibleCount] = React.useState(10);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  
  const types = ["All", ...Array.from(new Set(projectsData.map(p => p.type).filter(t => t && t.trim() !== "")))];
  
  const filter = urlType && types.includes(urlType) ? urlType : "All";
  const filteredProjects = filter === "All" ? projectsData : projectsData.filter(p => p.type === urlType);
  
  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const observerTarget = React.useRef(null);

  // Reset pagination when filter changes
  React.useEffect(() => {
    setVisibleCount(10);
  }, [filter]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoadingMore]);

  const loadMore = () => {
    setIsLoadingMore(true);
    // Artificial delay to show shimmers for a premium feel
    setTimeout(() => {
      setVisibleCount(prev => prev + 10);
      setIsLoadingMore(false);
    }, 800);
  };

  const handleFilterClick = (t: string) => {
    router.push(`/projects${t === "All" ? "" : `?type=${encodeURIComponent(t)}`}`, { scroll: false });
  };

  return (
    <>
      <section className="px-5 md:px-8 py-24 pb-[120px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Filters */}
            <div className="w-full lg:w-[200px] shrink-0 lg:sticky lg:top-[100px] self-start z-10">
              <h2 className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 mb-7 border-b border-line pb-3">Index</h2>
              <div className="flex flex-row lg:flex-col gap-3 flex-wrap lg:overflow-visible pb-4 lg:pb-0">
                {types.map(t => (
                  <button 
                    key={t}
                    onClick={() => handleFilterClick(t)}
                    className={`text-left bg-transparent p-0 font-serif tracking-[-0.01em] transition-all duration-300 whitespace-nowrap leading-[1.2] ${
                      filter === t 
                        ? "text-ink md:text-[28px] text-[22px] font-semibold" 
                        : "text-ink-3 md:text-[22px] text-[18px] font-normal hover:text-ink"
                    }`}
                  >
                    {t === "All" ? "Everything" : t}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid Area */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={filter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="grid grid-cols-12 gap-y-12 gap-x-4"
                >
                  {displayedProjects.map((project, idx) => {
                    const PATTERN = [
                      "col-span-12",
                      "col-span-12 md:col-span-7", 
                      "col-span-12 md:col-span-5",
                      "col-span-12 md:col-span-4", 
                      "col-span-12 md:col-span-4", 
                      "col-span-12 md:col-span-4",
                      "col-span-12 md:col-span-6", 
                      "col-span-12 md:col-span-6",
                      "col-span-12 md:col-span-5",
                      "col-span-12 md:col-span-7"
                    ];
                    const layoutSpan = PATTERN[idx % PATTERN.length];
                    
                    return (
                      <div key={project.id} className={layoutSpan}>
                        <ProjectCard 
                          project={project} 
                          onClick={() => setSelectedProject(project)} 
                        />
                      </div>
                    );
                  })}

                  {/* Dynamic Shimmers for more items */}
                  {isLoadingMore && (
                    <>
                      {/* Row 1: 3 columns */}
                      <div className="col-span-12 md:col-span-4"><ProjectSkeleton /></div>
                      <div className="col-span-12 md:col-span-4"><ProjectSkeleton /></div>
                      <div className="col-span-12 md:col-span-4"><ProjectSkeleton /></div>
                      
                      {/* Row 2: 2 columns (Asymmetric) */}
                      <div className="col-span-12 md:col-span-7"><ProjectSkeleton /></div>
                      <div className="col-span-12 md:col-span-5"><ProjectSkeleton /></div>
                      
                      {/* Row 3: 1 column Full Width or 3 columns */}
                      <div className="col-span-12 md:col-span-4"><ProjectSkeleton /></div>
                      <div className="col-span-12 md:col-span-8"><ProjectSkeleton /></div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Sentinel for IntersectionObserver */}
              <div ref={observerTarget} className="h-10 w-full" />
            </div>
            
          </div>
        </div>
      </section>

      {selectedProject && (
        <ImageViewerModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <div className="border-b border-line">
        <div className="bg-ink text-bg px-5 md:px-8 py-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-bg/55 mb-4">(04) &mdash; Portfolio</div>
            <h1 className="font-serif text-[clamp(48px,6vw,100px)] leading-[0.96] tracking-[-0.025em] max-w-[12ch]">
              Selected<br />work.
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-bg/75 max-w-[52ch]">
              A glimpse into the spaces we&apos;ve transformed and the experiences we&apos;ve elevated.
            </p>
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="py-24 text-center text-ink-3">Loading portfolio...</div>}>
        <ProjectsContent />
      </Suspense>
    </>
  );
}
