"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ImageViewerModalProps {
  project: {
    id: string;
    title: string;
    type: string;
    images: string[];
  };
  onClose: () => void;
}

export function ImageViewerModal({ project, onClose }: ImageViewerModalProps) {
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      const selectedBtn = scrollRef.current.children[selectedIdx] as HTMLElement;
      if (selectedBtn) {
        selectedBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [selectedIdx]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Close Button */}
      <div className="absolute top-6 right-6 z-20">
        <button 
          onClick={onClose}
          className="p-2.5 rounded-full bg-bg/10 hover:bg-bg/20 text-bg transition-colors cursor-pointer"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Main Image */}
      <div className="flex-1 relative flex items-center justify-center p-2 md:p-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIdx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={project.images[selectedIdx]}
              alt={`${project.title} — ${selectedIdx + 1}`}
              fill
              priority
              className="object-contain rounded-md shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Strip */}
      <div className="h-[110px] bg-black/40 flex items-center border-t border-bg/10 px-4 md:px-8 overflow-x-auto relative z-10 w-full">
        <div ref={scrollRef} className="flex gap-3 mx-auto min-w-max pb-2">
          {project.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`relative h-16 w-[100px] rounded-md overflow-hidden shrink-0 cursor-pointer transition-all hover:scale-105 border-none bg-transparent p-0 ${
                idx === selectedIdx ? "outline-2 outline-accent outline-offset-[3px] opacity-100" : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image 
                src={img} 
                alt="" 
                fill
                sizes="100px"
                className="object-cover" 
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
