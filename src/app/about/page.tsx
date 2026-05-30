"use client";

import Image from "next/image";
import { STENCIL, TEAM, CERTIFICATIONS, TESTIMONIALS } from "@/data/stencil";
import { motion } from "framer-motion";
import { useState } from "react";
import { CertificationsGallery } from "@/components/ui/CertificationsGallery";

export default function AboutPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[] min-h-[350px] overflow-hidden bg-ink px-8">
        <Image
          src="/All-Site-Pics/Karix/DSC_1428-scaled.jpg" 
          alt="About Stencil Engineering" 
          fill 
          priority
          className="object-cover brightness-[0.5]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" />
        <div className="relative z-20 h-full py-16 pt-20 flex flex-col justify-end text-white max-w-[1400px] mx-auto">
          <div className="text-[11px] tracking-[0.1em] text-[clamp(14px,1.4vw,24px)] pb-2 opacity-70">About us</div>
          <h1 className="text-[clamp(48px,6vw,100px)] leading-[0.96] tracking-[-0.025em] max-w-[15ch] font-serif">
            Dedicated to<br />the <em className="italic">detail</em>.
          </h1>
          <p className="mt-6 text-[20px] leading-relaxed text-white/80 max-w-[52ch]">
            A design-stalwart organization offering turnkey services backed by industry experts since 2005.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(28px,3.5vw,52px)] leading-[1.1] tracking-[-0.02em] text-accent font-serif mb-8">
                A Civil Interior and Exterior Turnkey design and execution firm with expertise since 2005.
              </h2>
              <p className="text-[17px] leading-relaxed text-ink-2 max-w-[52ch]">
                Stencil Engineering Pvt Ltd. specialize in corporate, hospitality, Retail, Pharma/Healthcare and MNCs projects. We nurture ideas, give them a beautiful form, fill them with myriad colors, and implement them to create a better space around us that instigates a better mood &mdash; be it to live, work, or play!
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-bg-2 overflow-hidden shadow-sm">
              <Image
                src="/All-Site-Pics/Karix/DSC_1527-scaled.jpg" 
                alt="Stencil Engineering interior 1" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Commitment */}
      <section className="px-8 py-16" style={{ background: '#edededb8' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] bg-bg-2 overflow-hidden shadow-sm lg:order-1">
              <Image 
                src="/All-Site-Pics/Karix/DSC_1650-scaled.jpg" 
                alt="Stencil Engineering interior 2" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="text-[clamp(28px,3.1vw,48px)] leading-[1.1] tracking-[-0.02em] text-accent font-serif mb-9">Precision and Professionalism.</h2>
              <div className="space-y-6">
                <p className="text-[17px] leading-relaxed text-ink">
                  Our mission is simple: to Design and Execute end-to-end solutions that meet client expectations and to pioneer extraordinary design ideas into a lavish reality. We are committed to achieving the highest level of design with a turnkey approach through our offered services.
                </p>
                <p className="text-[17px] leading-relaxed text-ink">
                  We deeply focus on quality, safety, cost-effectiveness, and the timelines we promise. Over two decades, we have been recognized for business acumen and innovative design solutions that blend functional and aesthetic requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stencil */}
      <section className="px-8 py-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[clamp(28px,3.1vw,48px)] leading-[1.1] tracking-[-0.02em] text-accent font-serif mb-9">Why Stencil Engineering?</h2>
          <p className="text-[20px] leading-relaxed text-ink-2 max-w-[54ch] mb-12">
            We are a design-stalwart organization, offering turnkey services backed by industry experts and the latest technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-line flex flex-col gap-4">
              <div className="text-accent font-serif text-2xl">Innovation</div>
              <p className="text-sm leading-relaxed text-ink-2">Implementing out-of-the-box ideas to create a unique experience for our clients.</p>
            </div>
            <div className="p-8 border border-line flex flex-col gap-4">
              <div className="text-accent font-serif text-2xl">Versatility</div>
              <p className="text-sm leading-relaxed text-ink-2">Designs that not just captivate the eye but also optimize for spacious, intelligent built use.</p>
            </div>
            <div className="p-8 border border-line flex flex-col gap-4">
              <div className="text-accent font-serif text-2xl">Reliability</div>
              <p className="text-sm leading-relaxed text-ink-2">Maintaining basic do&apos;s and don&apos;ts of the space while keeping client requirements paramount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-8 py-16" style={{ background: '#edededb8' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="text-[11px] tracking-[0.1em] text-[clamp(14px,1.4vw,24px)] pb-2">Leadership</div>
            <h2 className="text-[clamp(28px,3.1vw,48px)] leading-[1.1] tracking-[-0.02em] text-accent font-serif mb-6">Expert Management</h2>
            <p className="text-[17px] leading-relaxed text-ink-2 max-w-[72ch]">
              Our executive team members aren&apos;t just managing the directions and vision of our Company; they are some of the most influential and renowned people in the interior industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white/90 text-[13px] leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="text-[26px] font-serif leading-tight mb-2 text-accent">{member.name}</div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-ink-3">{member.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
