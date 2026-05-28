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
      {/* Hero */}
      <section className="relative h-[42vh] min-h-[290px] overflow-hidden bg-ink">
        <Image
          src="/All-Site-Pics/Equinox/DSC_0067-HDR-Pano-Edit.jpg"
          alt="Stencil Engineering services"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />
        <div className="relative z-20 h-full px-5 md:px-10 flex flex-col justify-end pb-16 md:pb-20 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 max-w-3xl"
          >
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-serif font-normal text-[clamp(44px,7vw,108px)] leading-[1.02] tracking-[-0.03em]"
            >
              Every discipline.<br />One contract.
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-[clamp(15px,1.5vw,20px)] text-white/75 leading-relaxed max-w-[50ch]"
            >
              From the first sketch to final commissioning, Stencil manages every trade
              in-house — so nothing falls through the gaps.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Three primary services */}
      <section className="px-5 md:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="font-serif text-[11px] tracking-[0.14em] text-ink-3">What do we offer</span>
            <h2 className="font-serif text-[clamp(28px,3.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-accent mt-2 max-w-[22ch]">
              Comprehensive Service Offerings
            </h2>
            <p className="font-sans text-[15px] text-ink-2 mt-4 max-w-[48ch] leading-relaxed">
              We provide customized interior solutions tailored every project need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MAIN_SERVICES.map((svc, i) => (
              <motion.div
                key={svc.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-sm bg-ink flex flex-col"
                style={{ minHeight: "520px" }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover brightness-[0.5] group-hover:brightness-[0.4] group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
                  <span className="font-serif text-[10px] tracking-[0.12em] text-white/50 mb-3">
                    {svc.subtitle}
                  </span>
                  <h3 className="font-serif text-[clamp(26px,2.5vw,36px)] leading-[1.1] tracking-[-0.015em] mb-4">
                    {svc.title}
                  </h3>
                  <p className="text-[15px] text-white/70 leading-relaxed max-w-[38ch] mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-5 md:px-10 bg-paper">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-[12px] tracking-[0.12em] uppercase text-ink-3 border-b border-ink-3 pb-1">
              Our Process
            </span>
            <h2 className="font-sans font-bold text-[clamp(32px,4vw,60px)] leading-[1.06] tracking-[-0.02em] text-ink mt-6 max-w-[22ch] mx-auto">
              Our Streamlined Service And Support Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {[
              {
                num: "01",
                title: "Initial Consultation and Assessment",
                body: "We collaborate with clients to understand their specific requirements and project goals, ensuring alignment on expectations and project scope for a smooth and efficient workflow.",
              },
              {
                num: "02",
                title: "Technical and Execution Planning",
                body: "Using the provided concepts, we develop detailed technical and execution drawings, ensuring every aspect of the project, including materials and timelines, is clearly defined and aligned with client expectations.",
              },
              {
                num: "03",
                title: "Project Delivery and Aftercare",
                body: "Upon project completion, we offer a 1-year defects liability period to address any post-handover issues. Our team is available for ongoing support and maintenance to ensure long-term satisfaction.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="px-0 md:px-10 py-10 first:pl-0 last:pr-0"
              >
                <span className="font-sans text-[13px] text-ink-3">{step.num}</span>
                <h3 className="font-sans font-bold text-[clamp(17px,1.5vw,22px)] leading-[1.25] text-ink mt-5">
                  {step.title}
                </h3>
                <p className="mt-4 font-sans text-[15px] text-ink-2 leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="px-5 md:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-3">Industries</span>
            <h2 className="font-serif text-[clamp(28px,3.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-accent mt-2">
              Sectors we serve
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECTORS.map((sector, i) => (
              <motion.div
                key={sector.n}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-sm"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={SECTOR_IMAGES[sector.name] ?? "/DSC_1684-scaled.jpg"}
                  alt={sector.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover brightness-[0.6] group-hover:brightness-[0.45] group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-between text-white">
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/50">
                    {sector.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-[clamp(22px,2vw,30px)] leading-[1.1] tracking-[-0.01em] mb-2">
                      {sector.name}
                    </h3>
                    <p className="text-[13px] text-white/70 leading-relaxed max-w-[32ch] opacity-0 group-hover:opacity-100 transition-opacity duration-400">
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
