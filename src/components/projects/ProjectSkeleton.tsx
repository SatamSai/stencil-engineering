"use client";

import * as React from "react";

interface ProjectSkeletonProps {
  className?: string;
}

export function ProjectSkeleton({ className }: ProjectSkeletonProps) {
  return (
    <div className={`flex flex-col gap-3.5 ${className}`}>
      {/* Image Block */}
      <div className="relative overflow-hidden bg-bg-2 h-[50vh] max-h-[520px] shimmer-wrapper" />
      
      {/* Metadata Line */}
      <div className="flex justify-between items-baseline">
        <div className="h-5 w-48 shimmer-wrapper rounded" />
        <div className="h-3 w-12 shimmer-wrapper rounded" />
      </div>
      
      {/* Type & Size Line */}
      <div className="flex gap-4">
        <div className="h-3 w-20 shimmer-wrapper rounded" />
        <div className="h-3 w-24 shimmer-wrapper rounded" />
      </div>
    </div>
  );
}
