"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    type: string;
    images: string[];
    location?: string;
    year?: string;
    size?: string;
  };
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [currentImageIdx, setCurrentImageIdx] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [hasHovered, setHasHovered] = React.useState(false);

  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isHovered && project.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIdx((prev) => (prev + 1) % project.images.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHasHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIdx(0);
  };

  return (
    <div 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col gap-3.5 cursor-pointer"
    >
      <div className="relative overflow-hidden bg-line h-[50vh] max-h-[520px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-[10000ms] ease-linear"
          >
            {/* Logic: 
                - Index 0 is ALWAYS rendered and has priority.
                - Higher indices are only rendered if the user has hovered at least once.
            */}
            {(currentImageIdx === 0 || hasHovered) && (
              <Image
                src={project.images[currentImageIdx]}
                alt={project.title}
                fill
                priority={currentImageIdx === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                loading={currentImageIdx === 0 ? "eager" : "lazy"}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {isHovered && project.images.length > 1 && (
          <div className="absolute top-3.5 right-3.5 flex gap-[5px] z-10">
            {project.images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-[5px] rounded-full transition-all duration-300 ${idx === currentImageIdx ? "w-4 bg-white" : "w-[5px] bg-white/50"}`}
              />
            ))}
          </div>
        )}

        <div className="absolute left-4 bottom-3.5 text-white/90 font-mono text-[10px] tracking-[0.08em] uppercase drop-shadow-lg pointer-events-none">
          {project.location || "MUMBAI, IN"}
        </div>
      </div>

      <div className="flex justify-between items-baseline">
        <span className="font-serif text-[18px] tracking-[-0.01em] leading-[1.1]">{project.title}</span>
        <span className=" text-[10px] tracking-[0.06em] uppercase text-ink-3 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3"/> View</span>
      </div>
      <div className=" text-[10px] tracking-[0.06em] uppercase text-ink-3 flex gap-4">
        <span>{project.type}</span>
        <span>{project.size || "45,000"} SQ FT</span>
      </div>
    </div>
  );
}
