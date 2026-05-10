"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { STENCIL, SERVICES, SECTORS, STATS, CLIENTS, PROCESS, TESTIMONIALS, TEAM, CERTIFICATIONS } from "@/data/stencil";
import projectsData from "@/data/projects.json";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ImageViewerModal } from "@/components/projects/ImageViewerModal";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
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
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [filter, setFilter] = useState("All");
  
  const row1 = [
    "/client-logos/Abbott.png",
    "/client-logos/Fortis Hospitals Logo Vector.png",
    "/client-logos/ICICIPrudentialLifeInsurancejp.jpeg",
    "/client-logos/Johnson-Johnson-Logo.jpg",
    "/client-logos/Marriott_International-Logo.wine.png",
  ];
  const row2 = [
    "/client-logos/Nokia-Logo.wine.png",
    "/client-logos/Tata-logo.png",
    "/client-logos/Tech-mahindra-logo.png",
    "/client-logos/Wipro_Secondary Logo_Color_RGB.png",
    "/client-logos/mercedes-benz-seeklogo.png",
  ];
  const marquee1 = [...row1, ...row1];
  const marquee2 = [...row2, ...row2];
  
  const types = ["All", ...Array.from(new Set(projectsData.map(p => p.type)))];
  const filteredProjects = filter === "All" ? projectsData : projectsData.filter(p => p.type === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[680px] overflow-hidden bg-ink">
        <Image 
          src="/DSC_1684-scaled.jpg" 
          alt="Stencil Engineering project interior" 
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.62] saturate-[1.05]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/55" />
        <div className="relative h-full px-5 md:px-8 py-12 pb-10 flex flex-col justify-between text-white">
          <div className="flex justify-between items-start font-mono text-[11px] tracking-[0.08em] uppercase opacity-85">
            <div />
            <div className="text-right"><span>Established {STENCIL.estd}</span></div>
          </div>
          <h1 className="font-serif font-normal text-[clamp(56px,9vw,148px)] leading-[0.94] tracking-[-0.025em] max-w-[14ch]">
            Delivering on<br />our promises.
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-7 border-t border-white/20 font-mono text-[11px] tracking-[0.06em] uppercase">
            <div>
              <div className="text-bg/55 mb-1.5">Now Building</div>
              <div className="font-sans text-sm tracking-normal normal-case font-medium">Pfizer R&amp;D Block, Thane</div>
            </div>
            <div>
              <div className="text-bg/55 mb-1.5">Sectors</div>
              <div className="font-sans text-sm tracking-normal normal-case font-medium">MNC &middot; Healthcare &middot; Pharma &middot; Retail</div>
            </div>
            <div>
              <div className="text-bg/55 mb-1.5">Footprint</div>
              <div className="font-sans text-sm tracking-normal normal-case font-medium">4.2M sq ft delivered, 14 states</div>
            </div>
            <div>
              <div className="text-white/55 mb-1.5">Speak with us</div>
              <div className="font-sans text-sm tracking-normal normal-case font-medium">{STENCIL.phone}</div>
            </div>
          </div>
        </div>
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 rotate-90 origin-right font-mono text-[10px] tracking-[0.2em] uppercase text-bg/70">Scroll</div>
      </section>

      {/* Intro */}
      <section className="px-5 md:px-8 py-16 border-b border-line" id="about">
        <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">Overview</div>
        <p className="font-serif text-[clamp(28px,3vw,48px)] leading-[1.18] tracking-[-0.015em] max-w-[24ch]">
          We are leading interior designers and turnkey contractors, specializing in fitouts and corporate interiors.
        </p>
        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-[15px] leading-relaxed text-ink-2">
            Over 30 years, we have achieved eminence in creating sophisticated ambiences for a distinctive multifaceted client-community, ranging from Service, Healthcare, Insurance, Finance, Retail, Hospitality, Commercial to Business process outsourcing sectors.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-2">
            Our team is led by veteran interior design professionals having decades of versatile field experience in the interior design, contracting and allied operations. Together we pilot a well-balanced team of talents, specialising in diverse areas like project management, safety and quality assurance, financial planning to site supervision.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 md:px-8 py-[120px] bg-bg-2 border-b border-line" id="services">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-16 mb-[72px]">
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">(02) &mdash; Capabilities</div>
            <div>
              <h2 className="font-serif text-[clamp(36px,4.6vw,76px)] leading-none tracking-[-0.02em] max-w-[14ch]">One contract.<br />Every discipline.</h2>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-2 max-w-[52ch]">
                From the first space-planning sketch to the BMS commissioning report, we hold every trade in-house &mdash; so handovers are seams you don&apos;t see, and the client signs one contract, not twelve.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-line">
            {SERVICES.map((s, i) => (
              <div key={s} className="flex items-baseline gap-4 pr-6 py-[22px] border-b border-line hover:pl-3 transition-all">
                <span className="font-mono text-[11px] text-ink-3 min-w-7">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-[26px] leading-[1.05] tracking-[-0.01em]">{s}</span>
                <span className="ml-auto opacity-40 font-mono text-sm">&nearr;</span>
              </div>
            ))}
          </div>
          <div className="mt-24" id="sectors">
            <div className="flex justify-between items-baseline border-b border-line pb-4 mb-7">
              <h3 className="font-serif text-[32px] tracking-[-0.01em]">Sectors we build for</h3>
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3">06 verticals &middot; pan-India</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
              {SECTORS.map(s => (
                <div key={s.n} className="bg-bg-2 p-7 flex flex-col gap-3.5 min-h-[220px]">
                  <span className="font-mono text-[11px] text-accent tracking-[0.08em]">&mdash; {s.n}</span>
                  <span className="font-serif text-[28px] tracking-[-0.01em]">{s.name}</span>
                  <span className="text-sm leading-relaxed text-ink-2 mt-auto">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink text-bg px-5 md:px-8 py-24">
        <div className="col-span-full flex justify-between mb-16 font-mono text-[11px] tracking-[0.1em] uppercase text-bg/60">
            <span>(03) &mdash; In Numbers</span>
            <span>As of Q2 2026</span>
          </div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20 items-end">
          {STATS.map((s, i) => (
            <div key={i} className="pt-6 flex flex-col items-center">
              <div className="font-serif text-[clamp(64px,7.5vw,120px)] leading-[0.9] tracking-[-0.03em] flex items-baseline justify-center text-center">
                <AnimatedNumber value={s.val} decimals={s.decimals} />
                <span className="text-[0.6em] ml-1">{s.suffix}</span>
              </div>
              <div className="font-mono text-xs tracking-[0.08em] uppercase text-bg/65 mt-3.5 text-center">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Highlight */}
      <section className="bg-bg-2 border-b border-line px-5 md:px-8 py-16">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-12 md:gap-16">
          <div className="max-w-[40ch] text-center">
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 mb-4">Accredited Excellence</div>
            <h3 className="font-serif text-[clamp(28px,3vw,40px)] tracking-[-0.01em] leading-tight">Industry recognized quality &amp; safety standards.</h3>
          </div>
          
          <CertificationsGallery />
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="px-5 md:px-8 py-[120px] bg-bg border-b border-line" id="projects">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">(04) &mdash; Selected Work</div>
              <h2 className="font-serif text-[clamp(36px,4.6vw,76px)] leading-none tracking-[-0.02em]">Featured<br />Projects.</h2>
            </div>
            <Link href="/projects" className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-ink group">
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
      <section className="bg-bg-2 border-b border-line overflow-hidden" id="clients">
        <div className="flex justify-between items-baseline px-5 md:px-8 py-16 pb-8 max-w-[1400px] mx-auto">
          <div>
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">(05) &mdash; Clientele</div>
            <h2 className="font-serif text-[clamp(28px,3.2vw,48px)] tracking-[-0.015em]">In good company.</h2>
          </div>
          <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 hidden md:block">40+ marquee clients &middot; since 1989</span>
        </div>
        <div className="relative overflow-hidden border-t border-b border-line py-12 bg-white/40 flex flex-col gap-6">
          {/* Row 1: Forward */}
          <div className="marquee-container">
            {marquee1.map((logo, i) => (
              <div key={i} className="flex items-center justify-center px-10 h-20 w-[240px] shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                <div className="relative w-full h-[65%]">
                  <Image src={logo} alt="Client logo" fill className="object-contain" sizes="240px" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Row 2: Reverse */}
          <div className="marquee-container-reverse">
            {marquee2.map((logo, i) => (
              <div key={i} className="flex items-center justify-center px-10 h-20 w-[240px] shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                <div className="relative w-full h-[65%]">
                  <Image src={logo} alt="Client logo" fill className="object-contain" sizes="240px" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 md:px-8 py-[120px] pb-24 max-w-[1400px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 mb-6">(06) &mdash; Our Mission</div>
          <p className="font-serif italic text-[clamp(32px,4vw,64px)] leading-[1.18] tracking-[-0.015em] max-w-[22ch]">
            To offer a complete range of design, fitout and contracting solutions by delivering high-quality, cost-effective projects &mdash; with our clients&apos; relationship as our number one priority.
          </p>
          <div className="mt-8 font-mono text-[11px] tracking-[0.08em] uppercase text-ink-3">&mdash; Stencil Engineering, est. 1989</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 md:px-8 py-[120px] bg-bg-2 border-b border-line">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-baseline mb-16 pb-5 border-b border-line">
            <div>
              <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">(08) &mdash; In their words</div>
              <h2 className="font-serif text-[clamp(36px,4vw,64px)] tracking-[-0.02em]">Said about us.</h2>
            </div>
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 hidden md:block">4.8 &#9733; Google &middot; 60+ reviews</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-bg-2 px-9 py-10 flex flex-col gap-7 min-h-[360px]">
                <span className="font-serif text-[64px] leading-[0.5] text-accent">&ldquo;</span>
                <p className="font-serif text-[22px] leading-[1.32] tracking-[-0.005em]">{t.quote}</p>
                <div className="mt-auto flex flex-col gap-1">
                  <span className="text-sm font-medium">{t.name}</span>
                  <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-ink-3">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Contact CTA */}
      <section className="px-5 md:px-8 py-[120px] bg-ink text-bg text-center" id="contact">
        <div className="max-w-[1400px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-bg/55 mb-8">(10) &mdash; Contact</div>
          <h2 className="font-serif text-[clamp(40px,5vw,80px)] leading-[1.1] tracking-[-0.02em] mb-12 max-w-[15ch] mx-auto">
            Ready to build your next space?
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-4 px-12 py-6 bg-accent text-bg rounded-full text-lg font-medium transition-transform hover:scale-105 active:scale-95"
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