"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, STATS, CLIENT_LOGOS_ROW1, CLIENT_LOGOS_ROW2 } from "@/data/stencil";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ImageViewerModal } from "@/components/projects/ImageViewerModal";
import { motion, useInView, animate, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { CertificationsGallery } from "@/components/ui/CertificationsGallery";
import type { Project } from "@/lib/projects";

function AnimatedNumber({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1],
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

interface HomeContentProps {
  projects: Project[];
}

const HERO_IMAGES = [
  { src: "/DSC_1684-scaled.jpg", alt: "Stencil Engineering project interior" },
  { src: "/All-Site-Pics/Wipro-Mumbai/DSC_1177.jpg", alt: "Stencil Engineering project interior 2" },
  { src: "/All-Site-Pics/DSP Mutual Fund Bangalore/6.jpg", alt: "DSP Mutual Fund, Bangalore office interior" },
  { src: "/All-Site-Pics/Olive_UpGrad_Education/atlas-skilltech-university-upgrad-living-8-1536x1015.jpg", alt: "Atlas SkillTech University UpGrad living space" },
  { src: "/All-Site-Pics/Equinox/DSC_0067-HDR-Pano-Edit.jpg", alt: "Equinox project interior" },
  { src: "/All-Site-Pics/Wipro-Mumbai/DSC_1039.jpg", alt: "Wipro Mumbai office interior" },
];

const CAROUSEL_INTERVAL = 5000;

export default function HomeContent({ projects }: HomeContentProps) {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 250]);
  const yText = useTransform(scrollY, [0, 1000], [0, 100]);

  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const marquee1 = [...CLIENT_LOGOS_ROW1, ...CLIENT_LOGOS_ROW1];
  const marquee2 = [...CLIENT_LOGOS_ROW2, ...CLIENT_LOGOS_ROW2];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[680px] overflow-hidden bg-ink p-16">
        {/* Carousel images */}
        <AnimatePresence>
          {HERO_IMAGES.map((img, i) =>
            i === activeSlide ? (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ y: yImage }}
                className="absolute -inset-[15%] z-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover brightness-[0.5] saturate-[1.05]"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 z-10 pointer-events-none" />

        <motion.div style={{ y: yText }} className="relative z-20 h-full py-10 flex flex-col justify-center text-white max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-4 max-w-3xl mb-[15vh] mt-10">
            <h1 className="font-sans font-normal text-[clamp(48px,8vw,120px)] leading-[1.05] tracking-[-0.03em]">
              Delivering on<br />our promises
            </h1>
            <p className="text-[clamp(14px,1.5vw,32px)] text-white font-normal leading-relaxed max-w-[44ch]">
              Leading Interior Designers &amp; Turnkey Contractors since 1991. Delivering excellence across India.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white text-ink text-[16px] tracking-[0.04em] px-6 py-3 rounded-full transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg hover:bg-white/95"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/60 text-white text-[16px] tracking-[0.04em] px-6 py-3 rounded-full transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-white/10 hover:border-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <div
              key={i}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === activeSlide ? "w-8 bg-white" : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 md:px-10 py-16" id="about">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[13px] tracking-[0.1em] text-[clamp(14px,1.4vw,24px)] pb-2">About Us</div>
          <p className="text-[clamp(28px,3.1vw,48px)] leading-[1.18] tracking-[-0.015em] max-w-[24ch] text-accent">
            We are leading interior designers and turnkey contractors, specializing in fitouts and corporate interiors.
          </p>
          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-[17px] leading-relaxed">
              With a legacy of over three decades, Stencil Engineering Pvt. Ltd. has been at the forefront of transforming commercial spaces into inspiring and high-performance environments. As independent Interior Designers and Turnkey Contractors, we specialize in delivering comprehensive fit-out solutions tailored to the evolving needs of modern businesses. Our commitment to quality and attention to detail make us a leader in fit-out contracting in India.
            </p>
            <p className="text-[17px] leading-relaxed">
              Our team is led by veteran interior design professionals having decades of versatile field experience in the interior design, contracting and allied operations. Together we pilot a well-balanced team of talents, specializing in diverse areas like project management, safety and quality assurance, financial planning to site supervision.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 md:px-10 py-16" style={{background: '#edededb8'}} id="services">
        <div className="max-w-[1400px] mx-auto">
         <div className="text-[11px] tracking-[0.1em] text-[clamp(14px,1.4vw,24px)] pb-2">Services</div>
          <div style={{marginBottom: '24px'}}>
            <h2 className="text-[clamp(28px,3.1vw,48px)] leading-none tracking-[-0.02em] max-w-[14ch] text-accent">One contract.<br />Every discipline.</h2>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-2 max-w-[80ch]">
              Renowned for our commitment, responsiveness and innovation, we work with our customers to provide practical solutions to their individual requirements. We provide innovative design development, value engineering, quality manufacturing and professional installation for the retail, commercial, leisure, public and industrial sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-line">
            {SERVICES.map((s, i) => (
              <div key={s} className="flex items-baseline gap-[10px] py-[20px] pr-[10px] pl-0 border-b border-line hover:pl-3 transition-[padding-left] duration-200">
                <span className="text-[11px] text-ink-3 min-w-7 text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-[23px] leading-[1.05] tracking-[-0.01em]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{background: '#2b5573'}} className="text-bg px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="font-serif text-[clamp(56px,6.5vw,100px)] leading-[0.9] tracking-[-0.03em] flex items-baseline">
                  <AnimatedNumber value={s.val} decimals={s.decimals} />
                  <span className="ml-1">{s.suffix}</span>
                </div>
                <div className="tracking-[0.08em] text-[18px] text-bg/65 mt-4">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="px-10 py-16" style={{background: '#edededb8'}} id="projects">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="tracking-[0.1em] text-[clamp(14px,1.4vw,24px)] pb-2">Selected Work</div>
              <h2 className="font-serif text-[clamp(28px,3.1vw,48px)] leading-none tracking-[-0.02em] text-accent">Featured Projects</h2>
            </div>
            <Link href="/projects" className="hidden sm:inline-flex items-center gap-2 text-[13px] tracking-[0.02em] font-medium bg-bg-2 text-bg px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out group">
              View All <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['wipro-mumbai', 'atlas-phase-1-2023', 'club-mahindra-ashtamudi', 'hcg-manavata-cancer-centre-nashik']
              .map((id) => projects.find((p) => p.id === id))
              .filter(Boolean)
              .map((project) => (
              <ProjectCard
                key={project!.id}
                project={project!}
                onClick={() => setSelectedProject(project!)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="overflow-hidden px-5 md:px-10 py-16 pb-8" id="clients">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-baseline">
            <div>
              <div className="tracking-[0.1em] text-[clamp(14px,1.4vw,24px)] pb-2">Clientele</div>
              <h2 className="font-serif text-accent text-[clamp(28px,3.1vw,48px)] tracking-[-0.015em]">In good company</h2>
            </div>
          </div>
          <div className="relative overflow-hidden py-12 bg-white/40 flex flex-col gap-6">
            <div className="marquee-container">
              {marquee1.map((logo, i) => (
                <div key={i} className="flex items-center justify-center px-10 h-28 w-[240px] shrink-0 transition-all duration-500">
                  <div 
                    className="w-full h-full transition-all duration-500"
                    style={{
                      backgroundImage: `url("${logo.src}")`,
                      backgroundSize: `${logo.scale}%`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="marquee-container-reverse">
              {marquee2.map((logo, i) => (
                <div key={i} className="flex items-center justify-center px-10 h-28 w-[240px] shrink-0 transition-all duration-500">
                  <div 
                    className="w-full h-full transition-all duration-500"
                    style={{
                      backgroundImage: `url("${logo.src}")`,
                      backgroundSize: `${logo.scale}%`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Highlight */}
      <section className="px-10 md:10 py-16" style={{background: '#edededb8'}}>
        <div className="max-w-[1400px] mx-auto flex flex-col gap-4">
          <div className="max-w-[45ch]">
            <div className="tracking-[0.1em] text-[clamp(14px,1.4vw,24px)] pb-2">Accredited Excellence</div>
            <h3 className="font-serif text-[clamp(28px,3.1vw,40px)] tracking-[-0.01em] leading-tight text-accent">Industry recognized quality <br/>&amp; safety standards</h3>
          </div>

          <CertificationsGallery />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="10 py-16 bg-white text-bg text-center" id="contact">
        <div className="max-w-[1400px] mx-auto">
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
