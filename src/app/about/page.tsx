"use client";

import Image from "next/image";
import { STENCIL, TEAM, CERTIFICATIONS, TESTIMONIALS } from "@/data/stencil";
import { motion } from "framer-motion";
import { useState } from "react";
import { CertificationsGallery } from "@/components/ui/CertificationsGallery";

export default function AboutPage() {

  return (
    <>
      {/* About Us */}
      <section className="px-5 md:px-8 py-[120px] border-b border-line">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[clamp(36px,4vw,64px)] tracking-[-0.02em] mb-10">About Us</h2>
          <p className="text-[15px] leading-relaxed text-ink-2 mb-6">
            Stencil Engineering Pvt Ltd. is a Civil Interior and Exterior Turnkey design and execution firm with expertise in 2005 with expertise in corporate, hospitality, Retail, Pharma /Healthcare and MNC&apos;s projects. Here at Stencil Engineering Pvt ltd, we nature ideas, give them a beautiful form, fill them with myriad colours, and implement them to create a better space around us that instigates a better mood: be it to live work or to play!
          </p>
          <p className="text-[15px] leading-relaxed text-ink-2 mb-6">
            Our Group&apos;s mission is simple, to Design and Execute end-to end solutions that meets client expectations and to pioneer extraordinary design ideas to a lavish reality.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-2">
            We are committed to archiving the highest level of design with a turnkey approach though their services offered. Our designers and execution team successfully participate in projects from the initial concepts, furniture and decorative item selections, construction, document production, budgeting projects coordination always with precision, professionalism, Attention to detail, exceptional customer service and expert project management skills. We deeply focus on the quality, safety, cost effectiveness and the time line we promise to our customers. Over two decades, Stencil Engineering Pvt Ltd is consistently recognized for its business acumen and the innovative design solutions that impeccably blends the functional and the aesthetic requirements.
          </p>
        </div>
      </section>

      {/* Why Stencil Engineering */}
      <section className="px-5 md:px-8 py-[120px] border-b border-line">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[clamp(36px,4vw,64px)] tracking-[-0.02em] mb-10">Why Stencil Engineering?</h2>
          <p className="text-[15px] leading-relaxed text-ink-2">
            We are a design- stalwart organization, offering turnkey services backed by industry Experts. Implementing latest technology. We believe in innovation, along with implementation of out-of-the-box ideas to create an experience for our clients. We design a space keeping in mind the client requirements and basic do&apos;s and don&apos;ts of the space. Bringing versatile designs that not just captivates the eye but also plans for a specious and intelligently built space
          </p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="px-5 md:px-8 py-[120px] border-b border-line">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[clamp(36px,4vw,64px)] tracking-[-0.02em] mb-10">Our Philosophy</h2>
          <p className="text-[15px] leading-relaxed text-ink-2 mb-6">
            Design. Deploy. Develop – With our in-house team of professionals from different verticals, we offer the best that flourishes any given space.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-2 mb-6">
            Already have a suitable designs for your space? – We liaison with architects and consultants and deploy value addition,
          </p>
          <p className="text-[15px] leading-relaxed text-ink-2">
            We are a design &amp; deploy firm – with our large pool of skilled workmen , we contribute in developing The space by coordinating with vendors and ensure that the site developed within the expected deadlines.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-5 md:px-8 py-[120px] border-b border-line">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-[clamp(36px,4vw,64px)] tracking-[-0.02em] mb-6">Leadership</h2>
            <p className="text-[15px] leading-relaxed text-ink-2 max-w-[72ch]">
              Our executive team members aren&apos;t just managing the directions and vision of our Company, but they are also some of the most influential and renowned people in the interior industry. Their diverse backgrounds and expertise contribute directly to our unique vision and our success.
            </p>
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
    </>
  );
}
