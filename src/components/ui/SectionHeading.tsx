"use client";
import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ className, title, subtitle, centered = false, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center flex flex-col items-center", className)} {...props}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className={cn("h-1 bg-accent mt-6 origin-left", centered ? "w-24 origin-center" : "w-16")}
      />
    </div>
  )
}
