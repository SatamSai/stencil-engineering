"use client";

import { STENCIL } from "@/data/stencil";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[] min-h-[350px] overflow-hidden bg-ink px-8">
        <Image
          src="/All-Site-Pics/Karix/DSC_1581-scaled.jpg"
          alt="Contact Stencil Engineering"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" />
        <div className="relative z-20 h-full py-16 pt-20 flex flex-col justify-end text-white max-w-[1400px] mx-auto">
          <div className="text-[11px] tracking-[0.1em] text-[clamp(14px,1.4vw,24px)] pb-2 opacity-70">Start a project</div>
          <h1 className="text-[clamp(48px,6vw,100px)] leading-[0.96] tracking-[-0.025em] max-w-[15ch] font-serif">
            Let's build<br />something lasting.
          </h1>
          <p className="mt-6 text-[20px] leading-relaxed text-white/80 max-w-[52ch]">
            We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border-l-2 border-accent pl-7 py-2 flex flex-col gap-3"
              >
                <div className="text-[18px] tracking-[0.12em] uppercase text-ink-3">Email</div>
                <div className="flex flex-col gap-2">
                  <div className="text-[17px] leading-relaxed text-ink-2">
                    For enquiries, reach out to us
                  </div>
                  <a href={`mailto:${STENCIL.email}`} className="text-[20px] font-serif text-accent hover:opacity-70 transition-opacity">
                    {STENCIL.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border-l-2 border-accent pl-7 py-2 flex flex-col gap-3"
              >
                <div className="text-[18px] tracking-[0.12em] uppercase text-ink-3">Careers</div>
                <div className="flex flex-col gap-2">
                  <div className="text-[17px] leading-relaxed text-ink-2">
                    To join us, get in touch
                  </div>
                  <a href={`mailto:${STENCIL.careersEmail}`} className="text-[20px] font-serif text-accent hover:opacity-70 transition-opacity">
                    {STENCIL.careersEmail}
                  </a>
                </div>
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="sm:col-span-2 border-l-2 border-accent pl-7 py-2 flex flex-col gap-3"
              >
                <div className="text-[18px] tracking-[0.12em] uppercase text-ink-3">Head Office</div>
                <div className="text-[22px] font-serif text-accent leading-snug max-w-[42ch]">{STENCIL.address}</div>
              </motion.div>

              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border-l-2 border-accent pl-7 py-2 flex flex-col gap-3"
              >
                <div className="text-[18px] tracking-[0.12em] uppercase text-ink-3">Hours</div>
                <div className="text-[22px] font-serif text-accent">Mon&ndash;Sat</div>
                <div className="text-[17px] text-ink-2">09:30 &ndash; 19:00 IST</div>
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border-l-2 border-accent pl-7 py-2 flex flex-col gap-3"
              >
                <div className="text-[18px] tracking-[0.12em] uppercase text-ink-3">Phone</div>
                <a
                  href={`tel:${STENCIL.phone.replace(/[^\d+]/g, "")}`}
                  className="text-[20px] font-serif text-accent hover:opacity-70 transition-opacity"
                >
                  {STENCIL.phone}
                </a>
              </motion.div>

              <motion.div
                custom={5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="sm:col-span-2 border-l-2 border-accent pl-7 py-2 flex flex-col gap-4"
              >
                <div className="text-[18px] tracking-[0.12em] uppercase text-ink-3">Follow Us</div>
                <div className="flex gap-5">
                  <a href="https://www.linkedin.com/company/stencil-engineering-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/stencil_engineering" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] bg-bg-2 overflow-hidden shadow-sm mt-10"
            >
              <iframe
                title="Stencil Engineering head office location"
                src="https://www.google.com/maps?cid=2550254215874091729&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
