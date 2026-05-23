"use client";

import Image from "next/image";
import { STENCIL, TEAM, CERTIFICATIONS, TESTIMONIALS } from "@/data/stencil";
import { motion } from "framer-motion";
import { useState } from "react";
import { CertificationsGallery } from "@/components/ui/CertificationsGallery";

export default function AboutPage() {

  return (
    <>
      <section className="px-5 md:px-8 py-16 border-b border-line" id="about">
        <div className=" text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">(01) &mdash; About Us</div>
        <p className="text-[clamp(28px,3vw,48px)] leading-[1.18] tracking-[-0.015em] max-w-[24ch]">
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
          <div className=" text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4 mb-4">(02) &mdash; Leadership</div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mb-16 items-end border-b border-line pb-12">
            <h2 className="italic text-[clamp(28px,3.2vw,48px)] leading-[1.22] tracking-[-0.01em] text-ink">
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
                  <div className="text-[24px] leading-tight mb-1 text-ink">{member.name}</div>
                  <div className=" text-[10px] tracking-[0.08em] uppercase text-ink-3">{member.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8 py-[50px]" style={{background:"#edededb8"}}>
        <div className="max-w-[1400px] mx-auto">
          <div className=" text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4 mb-4">(03) &mdash; Accreditation</div>
          <h2 className="text-[clamp(32px,4vw,64px)] text-accent tracking-[-0.015em] mb-16 max-w-[15ch]">Built on trust and compliance.</h2>
          
          <CertificationsGallery />
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 md:px-8 py-[120px] border-b border-line">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-baseline mb-16 pb-5 border-b border-line">
            <div>
              <div className=" text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">(08) &mdash; In their words</div>
              <h2 className="text-[clamp(36px,4vw,64px)] tracking-[-0.02em] text-accent">Said about us.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="px-9 py-10 flex flex-col gap-7 min-h-[360px]" style={{background:"#fff"}}>
                <span className="text-[64px] leading-[0.5] text-accent">&ldquo;</span>
                <p className="text-[22px] leading-[1.32] tracking-[-0.005em]">{t.quote}</p>
                <div className="mt-auto flex flex-col gap-1">
                  <span className="text-sm font-medium">{t.name}</span>
                  <span className=" text-[11px] tracking-[0.06em] uppercase text-ink-3">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-12 pr-4 md:pr-0">
            <div className="flex items-center gap-4">
              <span className="text-[32px] font-serif text-green-600 flex items-baseline leading-none">
                4.8<span className="text-[20px] ml-1">&#9733;</span>
              </span>
              <div className="flex flex-col text-left justify-center border-l border-line pl-4">
                <span className="text-[13px] font-medium tracking-[0.02em] leading-tight text-ink">Google Reviews</span>
                <span className="text-[10px] tracking-[0.06em] uppercase text-ink-3 mt-[2px]">Based on 60+ clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
