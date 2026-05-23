"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { STENCIL, SERVICES, SECTORS, STATS, CLIENTS, PROCESS, TESTIMONIALS, TEAM, CERTIFICATIONS } from "@/data/stencil";
import projectsData from "@/data/projects.json";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ImageViewerModal } from "@/components/projects/ImageViewerModal";
import { motion, AnimatePresence, useInView, animate, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { CertificationsGallery } from "@/components/ui/CertificationsGallery";

function AnimatedNumber({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1], // easeOutQuart
        onUpdate: (latest) => setDisplayValue(latest),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {new Intl.NumberFormat().format(
        Number(displayValue.toFixed(decimals))
      )}
    </span>
  );
}

export default function HomePage() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 250]);
  const yText = useTransform(scrollY, [0, 1000], [0, 100]);

  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [filter, setFilter] = useState("All");
  
  const row1 = [
    "/client-logos/Abbott.png",
    "/client-logos/Fortis Hospitals Logo Vector.png",
    "/client-logos/ICICIPrudentialLifeInsurancejp.jpeg",
    "/client-logos/Johnson-Johnson-Logo.jpg",
    "/client-logos/Marriott_International-Logo.wine.png",
    "/client-logos/accenture.png",
    "/client-logos/dhl.png",
  ];
  const row2 = [
    "/client-logos/Nokia-Logo.wine.png",
    "/client-logos/Tata-logo.png",
    "/client-logos/Tech-mahindra-logo.png",
    "/client-logos/Wipro_Secondary Logo_Color_RGB.png",
    "/client-logos/mercedes-benz-seeklogo.png",
    "/client-logos/godrej.png",
    "/client-logos/ss-logo.png",
  ];
  const marquee1 = [...row1, ...row1];
  const marquee2 = [...row2, ...row2];
  
  const types = ["All", ...Array.from(new Set(projectsData.map(p => p.type)))];
  const filteredProjects = filter === "All" ? projectsData : projectsData.filter(p => p.type === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[680px] overflow-hidden bg-ink">
        <motion.div style={{ y: yImage }} className="absolute -inset-[15%] z-0">
          <Image
            src="/DSC_1684-scaled.jpg"
            alt="Stencil Engineering project interior"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.5] saturate-[1.05]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 z-10 pointer-events-none" />
        <motion.div style={{ y: yText }} className="relative z-20 h-full px-5 md:px-10 py-10 flex flex-col justify-center text-white">
          <div className="absolute top-10 right-5 md:right-10 flex justify-end font-mono text-[11px] tracking-[0.1em] uppercase text-white/50">
            <span>Est. {STENCIL.estd}</span>
          </div>
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="font-sans font-normal text-[clamp(48px,8vw,120px)] leading-[0.92] tracking-[-0.03em]">
              Delivering on<br />our promises
            </h1>
            <p className="text-[clamp(14px,1.5vw,32px)] text-white font-normal leading-relaxed max-w-[44ch]">
              Leading Interior Designers &amp; Turnkey Contractors since 1989. Delivering excellence across India.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 bg-white text-ink text-[16px] tracking-[0.04em] px-6 py-3 rounded-full transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg hover:bg-white/95"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/60 text-white text-[16px] tracking-[0.04em] px-6 py-3 rounded-full transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-white/10 hover:border-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="px-5 md:px-8 py-16 border-b border-line" id="about">
        <div className=" text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">About Us</div>
        <p className="font-serif text-[clamp(28px,3vw,48px)] leading-[1.18] tracking-[-0.015em] max-w-[24ch] text-accent">
          We are leading interior designers and turnkey contractors, specializing in fitouts and corporate interiors.
        </p>
        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-[15px] leading-relaxed text-ink-2">
            Over 35 years, we have achieved eminence in creating sophisticated ambiences for a distinctive multifaceted client-community, ranging from Service, Healthcare, Insurance, Finance, Retail, Hospitality, Commercial to Business process outsourcing sectors.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-2">
            Our team is led by veteran interior design professionals having decades of versatile field experience in the interior design, contracting and allied operations. Together we pilot a well-balanced team of talents, specialising in diverse areas like project management, safety and quality assurance, financial planning to site supervision.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 md:px-8 py-16 border-b border-line" style={{background: '#edededb8'}} id="services">
        <div className="max-w-[1400px] mx-auto">
         <div className=" text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">Services</div>
          <div style={{marginBottom: '48px'}}>
            <h2 className="text-[clamp(36px,4.6vw,76px)] leading-none tracking-[-0.02em] max-w-[14ch]">One contract.<br />Every discipline.</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-2 max-w-[52ch]">
              From the first space-planning sketch to the BMS commissioning report, we hold every trade in-house &mdash; so handovers are seams you don&apos;t see, and the client signs one contract, not twelve.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-line">
            {SERVICES.map((s, i) => (
              <div key={s} className="flex items-baseline gap-[10px] py-[20px] pr-[10px] pl-0 border-b border-line hover:pl-3 transition-[padding-left] duration-200">
                <span className="text-[11px] text-ink-3 min-w-7 text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-[26px] leading-[1.05] tracking-[-0.01em]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{background: '#009FBE'}} className="text-bg px-8 py-[65px]">
        <div className="max-w-[1400px] mx-auto">
          <div className=" text-[11px] tracking-[0.1em] uppercase text-bg/60 mb-14">
            <span>In Numbers</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="font-serif text-[clamp(56px,6.5vw,100px)] leading-[0.9] tracking-[-0.03em] flex items-baseline">
                  <AnimatedNumber value={s.val} decimals={s.decimals} />
                  <span className="ml-1">{s.suffix}</span>
                </div>
                <div className="text-xs tracking-[0.08em] uppercase text-bg/65 mt-4">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="px-5 md:px-8 py-[120px] bg-bg border-b border-line" style={{background: '#edededb8'}} id="projects">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className=" text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">(04) &mdash; Selected Work</div>
              <h2 className="font-serif text-[clamp(36px,4.6vw,76px)] leading-none tracking-[-0.02em] text-accent">Featured<br />Projects.</h2>
            </div>
            <Link href="/projects" className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-ink group">
              View all projects <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.slice(0, 4).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="border-b border-line overflow-hidden" id="clients">
        <div className="flex justify-between items-baseline px-5 md:px-8 py-16 pb-8 max-w-[1400px] mx-auto">
          <div>
            <div className=" text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">Clientele</div>
            <h2 className="font-serif text-accent text-[clamp(28px,3.2vw,48px)] tracking-[-0.015em]">In good company.</h2>
          </div>
        </div>
        <div className="relative overflow-hidden py-12 bg-white/40 flex flex-col gap-6">
          {/* Row 1: Forward */}
          <div className="marquee-container">
            {marquee1.map((logo, i) => (
              <div key={i} className="flex items-center justify-center px-10 h-20 w-[240px] shrink-0 transition-all duration-500">
                <div className="relative w-full h-[65%]">
                  <Image src={logo} alt="Client logo" fill className="object-contain" sizes="240px" />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Reverse */}
          <div className="marquee-container-reverse">
            {marquee2.map((logo, i) => (
              <div key={i} className="flex items-center justify-center px-10 h-20 w-[240px] shrink-0 transition-all duration-500">
                <div className="relative w-full h-[65%]">
                  <Image src={logo} alt="Client logo" fill className="object-contain" sizes="240px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Highlight */}
      <section className="bg-bg-2 border-b border-line px-5 md:px-8 py-16" style={{background: '#edededb8'}}>
        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-12 md:gap-16">
          <div className="max-w-[40ch] text-center">
            <div className=" text-[11px] tracking-[0.1em] uppercase text-ink-3 mb-4">Accredited Excellence</div>
            <h3 className="font-serif text-[clamp(28px,3vw,40px)] tracking-[-0.01em] leading-tight">Industry recognized quality &amp; safety standards.</h3>
          </div>
          
          <CertificationsGallery />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-5 md:px-8 py-[120px] bg-white text-bg text-center" id="contact">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[11px] tracking-[0.1em] uppercase text-bg/55 mb-8">(10) &mdash; Contact</div>
          <h2 className="font-serif text-[clamp(40px,5vw,80px)] text-accent leading-[1.1] tracking-[-0.02em] mb-12 max-w-[15ch] mx-auto">
            Ready to build your next space?
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-4 px-12 py-6 bg-accent rounded-full text-lg font-medium transition-transform hover:scale-105 active:scale-95"
          >
            Get in touch &rarr;
          </Link>
        </div>
      </section>

      {selectedProject && (
        <ImageViewerModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}