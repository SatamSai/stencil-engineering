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
  const [isImageLoading, setIsImageLoading] = React.useState(true);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);

  const handleImageAreaClick = (e: React.MouseEvent) => {
    const img = imgRef.current;
    if (!img || !img.naturalWidth || !img.naturalHeight) {
      return;
    }

    const rect = img.getBoundingClientRect();
    const imageRatio = img.naturalWidth / img.naturalHeight;
    const boxRatio = rect.width / rect.height;

    let renderedWidth = rect.width;
    let renderedHeight = rect.height;
    if (imageRatio > boxRatio) {
      renderedHeight = rect.width / imageRatio;
    } else {
      renderedWidth = rect.height * imageRatio;
    }

    const offsetX = (rect.width - renderedWidth) / 2;
    const offsetY = (rect.height - renderedHeight) / 2;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clickedOnVisibleImage =
      x >= offsetX && x <= offsetX + renderedWidth && y >= offsetY && y <= offsetY + renderedHeight;

    if (!clickedOnVisibleImage) onClose();
  };

  React.useEffect(() => {
    setIsImageLoading(true);
  }, [selectedIdx]);

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
          aria-label="Close"
          className="p-3 rounded-full bg-black/70 hover:bg-black/90 shadow-lg backdrop-blur-md transition-colors cursor-pointer text-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Main Image */}
      <div className="flex-1 relative flex items-center justify-center p-2 md:p-4 overflow-hidden">
        <AnimatePresence>
          {isImageLoading && (
            <motion.div
              key="image-loading-spinner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
              aria-live="polite"
              aria-label="Loading image"
            >
              <div className="h-14 w-14 rounded-full border-[3px] border-bg/30 border-t-bg animate-spin" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              ref={imgRef}
              src={project.images[selectedIdx]}
              alt={`${project.title} — ${selectedIdx + 1}`}
              fill
              quality={90}
              sizes="100vw"
              className="object-contain rounded-md shadow-2xl"
              onLoadingComplete={() => setIsImageLoading(false)}
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
                quality={60}
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
