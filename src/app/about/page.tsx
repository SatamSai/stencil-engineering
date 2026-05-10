"use client";

import Image from "next/image";
import { STENCIL, TEAM, CERTIFICATIONS } from "@/data/stencil";
import { motion } from "framer-motion";
import { useState } from "react";
import { CertificationsGallery } from "@/components/ui/CertificationsGallery";

export default function AboutPage() {

  return (
    <>
      <section className="px-5 md:px-8 py-16 border-b border-line" id="about">
        <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">(01) &mdash; About Us</div>
        <p className="font-serif text-[clamp(28px,3vw,48px)] leading-[1.18] tracking-[-0.015em] max-w-[24ch]">
          We are leading interior designers and turnkey contractors, specializing in fitouts and corporate interiors since {STENCIL.estd}.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-[15px] leading-relaxed text-ink-2">
            Over three decades, we have achieved eminence in creating sophisticated ambiences for a distinctive multifaceted client-community, ranging from Service, Healthcare, Insurance, Finance, Retail, Hospitality, Commercial to Business process outsourcing sectors.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-2">
            Our team is led by veteran interior design professionals having decades of versatile field experience in the interior design, contracting and allied operations. Together we pilot a well-balanced team of talents, specialising in diverse areas like project management, safety and quality assurance, financial planning to site supervision.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-8 py-[120px] border-b border-line">
        <div className="max-w-[1400px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4 mb-4">(02) &mdash; Leadership</div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mb-16 items-end border-b border-line pb-12">
            <h2 className="font-serif italic text-[clamp(28px,3.2vw,48px)] leading-[1.22] tracking-[-0.01em] text-ink">
              &ldquo;We don&apos;t sell square feet. We sell the certainty that on opening day, the lights will come on, the air will be cold, the floor will be flush, and the brand will feel itself in the room.&rdquo;
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <motion.div 
                key={member.name} 
                className="group flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-[3/4] bg-bg-2 overflow-hidden mb-6">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 pb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  >
                    <p className="text-white text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {member.bio}
                    </p>
                  </motion.div>
                </div>

                {/* Info Below Card */}
                <div className="bg-transparent">
                  <div className="font-serif text-[24px] leading-tight mb-1 text-ink">{member.name}</div>
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-3">{member.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8 py-[120px] bg-bg-2">
        <div className="max-w-[1400px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4 mb-4">(03) &mdash; Accreditation</div>
          <h2 className="font-serif text-[clamp(32px,4vw,64px)] tracking-[-0.015em] mb-16 max-w-[15ch]">Built on trust and compliance.</h2>
          
          <CertificationsGallery />
        </div>
      </section>
    </>
  );
}
