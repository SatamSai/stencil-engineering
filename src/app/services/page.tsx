"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SECTORS, PROCESS } from "@/data/stencil";

const MAIN_SERVICES = [
  {
    id: "interior",
    title: "Interior Fit-Out",
    subtitle: "Concept to completion",
    desc: "We work closely with your architect, designer, or project manager to deliver top-quality interior fit-out services, including MEP, furniture, and finishes.",
    image: "/All-Site-Pics/Epicor/central-work-cafe-epicor-bangalore-india.jpeg",
  },
  {
    id: "design-build",
    title: "Design & Build",
    subtitle: "Start to finish, under one roof",
    desc: "We provide complete design and interior fit-out services in full turnkey solutions helping to reduce project risks and costs, and can lead to faster completion.",
    image: "/All-Site-Pics/Equinox/DSC_0067-HDR-Pano-Edit.jpg",
  },
  {
    id: "management",
    title: "Project Management",
    subtitle: "Rigorous control at every stage",
    desc: "Tight scheduling, daily HSE reporting, transparent cost control. Our project managers protect your interests and keep delivery on track — every day.",
    image: "/All-Site-Pics/Nokia/DSC_0245.JPG",
  },
];

const SECTOR_IMAGES: Record<string, string> = {
  "MNC Offices": "/All-Site-Pics/Karix/DSC_1428-scaled.jpg",
  "Healthcare": "/All-Site-Pics/Zynova/29.jpg",
  "Hospitality": "/All-Site-Pics/Club_Mahindra_Ashtamudi/00bb1e4752458ab4bda8169ced702601.jpg",
  "Pharma & R&D": "/All-Site-Pics/Takasago/WhatsApp Image 2024-03-28 at 6.10.33 PM (1).jpeg",
  "Retail": "/All-Site-Pics/Tira/Tira_Storeimage_Facade.jpg",
  "BFSI & Insurance": "/All-Site-Pics/KMRL/1-31-1600x900.jpg",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[] min-h-[350px] overflow-hidden bg-ink px-8">
        <Image
          src="/All-Site-Pics/Equinox/DSC_0067-HDR-Pano-Edit.jpg"
          alt="Stencil Engineering services"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" />
        <div className="relative z-20 h-full py-16 pt-20 flex flex-col justify-end text-white max-w-[1400px] mx-auto">
          <div className="text-[11px] tracking-[0.1em] text-[clamp(14px,1.4vw,24px)] pb-2 opacity-70">Services</div>
          <h1 className="font-serif font-normal text-[clamp(48px,6vw,100px)] leading-[0.96] tracking-[-0.025em] max-w-[12ch]">
            Every discipline.<br />One contract.
          </h1>
          <p className="mt-6 text-[20px] leading-relaxed text-white/80 max-w-[52ch]">
            From the first sketch to final commissioning, Stencil manages every trade in-house &mdash; so nothing falls through the gaps.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="text-[clamp(11px,1vw,14px)] tracking-[0.12em] uppercase text-accent/70 pb-3">What we do</div>
            <h2 className="font-serif text-[clamp(28px,3.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-accent max-w-[22ch]">
              Comprehensive interior turnkey solutions.
            </h2>
            <p className="text-[17px] text-ink-2 mt-6 max-w-[52ch] leading-relaxed">
              We provide customized interior solutions tailored to every project need, from fit-outs to full design & build management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MAIN_SERVICES.map((svc, i) => (
              <motion.div
                key={svc.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group relative overflow-hidden bg-ink-2 flex flex-col min-h-[560px]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover brightness-[0.55] group-hover:brightness-[0.4] group-hover:scale-[1.03] transition-all duration-1000 ease-out"
                  />
                </div>
                <div className="relative z-10 flex flex-col justify-end h-full p-10 text-white">
                  <div className="font-serif text-[11px] tracking-[0.12em] text-white/50 uppercase mb-4">
                    {svc.subtitle}
                  </div>
                  <h3 className="font-serif text-[clamp(28px,2.5vw,40px)] leading-[1.1] tracking-[-0.015em] mb-5">
                    {svc.title}
                  </h3>
                  <p className="text-[15px] text-white/70 leading-relaxed max-w-[38ch] opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden h-0 group-hover:h-auto">
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-8 py-20" style={{ background: '#edededb8' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10">
            <div className="text-[clamp(11px,1vw,14px)] tracking-[0.12em] uppercase text-accent/70 pb-3">Our Process</div>
            <h2 className="font-serif text-[clamp(28px,3.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-accent max-w-[22ch]">
              Streamlined Service and Support.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-line pt-12">
            {[
              {
                num: "01",
                title: "Initial Consultation",
                body: "We collaborate with clients to understand their specific requirements and project goals, ensuring alignment on expectations and project scope for a smooth and efficient workflow.",
              },
              {
                num: "02",
                title: "Execution Planning",
                body: "Using the provided concepts, we develop detailed technical and execution drawings, ensuring materials and timelines are clearly defined and aligned with client expectations.",
              },
              {
                num: "03",
                title: "Delivery and Aftercare",
                body: "Upon project completion, we offer a 1-year defects liability period to address any post-handover issues. Our team is available for ongoing support and maintenance.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="flex flex-col"
              >
                <span className="font-serif text-[18px] text-accent mb-6">{step.num}</span>
                <h3 className="font-serif text-[24px] leading-tight text-ink mb-4">
                  {step.title}
                </h3>
                <p className="text-[16px] text-ink-2 leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="px-8 py-20 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center">
            <div className="text-[clamp(11px,1vw,14px)] tracking-[0.12em] uppercase text-accent/70 pb-3">Industries</div>
            <h2 className="font-serif text-[clamp(28px,3.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-accent">
              Expertise across sectors.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTORS.map((sector, i) => (
              <motion.div
                key={sector.n}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group relative overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={SECTOR_IMAGES[sector.name] ?? "/DSC_1684-scaled.jpg"}
                  alt={sector.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover brightness-[0.55] group-hover:brightness-[0.4] group-hover:scale-[1.03] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <span className="font-serif text-[12px] tracking-[0.1em] text-white/50 uppercase">
                    {sector.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-[clamp(24px,2vw,32px)] leading-[1.1] tracking-[-0.01em] mb-3">
                      {sector.name}
                    </h3>
                    <p className="text-[13px] text-white/70 leading-relaxed max-w-[32ch] opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden h-0 group-hover:h-auto">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
