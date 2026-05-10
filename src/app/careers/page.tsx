"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <>
      <div className="border-b border-line">
        <div className="bg-ink text-bg px-5 md:px-8 py-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-bg/55 mb-4">(01) &mdash; Careers</div>
            <h1 className="font-serif text-[clamp(48px,6vw,100px)] leading-[0.96] tracking-[-0.025em] max-w-[12ch]">
              Join the<br />team.
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-bg/75 max-w-[52ch]">
              We are always looking for people who enjoy a challenge and have a thirst for knowledge.
            </p>
          </div>
        </div>
      </div>

      <section className="px-5 md:px-8 py-24 bg-bg-2 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-20">
            {/* Left Column: Text */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="font-serif text-[clamp(28px,3vw,42px)] leading-tight tracking-[-0.01em]">
                  You enjoy a challenge?
                </h2>
                <p className="text-ink-2 leading-relaxed">
                  You have a thirst for knowledge and a desire to be one of the best?
                </p>
              </div>

              <div className="pt-10 border-t border-line">
                <p className="text-ink-2 leading-relaxed italic">
                  &ldquo;Then benefit from the Stencil Engineering culture. At Stencil Engineering, we draw on each other&apos;s capacities and experiences, to inspire and motivate one another.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-bg p-8 md:p-12 border border-line shadow-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 gap-8"
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  >
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-3" htmlFor="c-name">Full Name</label>
                      <input className="bg-transparent border-b border-line py-2 pb-3 text-ink font-sans text-base outline-none w-full focus:border-ink placeholder:text-ink-3/40" id="c-name" type="text" placeholder="Your Name" required />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-3" htmlFor="c-email">Email Address</label>
                      <input className="bg-transparent border-b border-line py-2 pb-3 text-ink font-sans text-base outline-none w-full focus:border-ink placeholder:text-ink-3/40" id="c-email" type="email" placeholder="email@example.com" required />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-3" htmlFor="c-phone">Contact Number</label>
                      <input className="bg-transparent border-b border-line py-2 pb-3 text-ink font-sans text-base outline-none w-full focus:border-ink placeholder:text-ink-3/40" id="c-phone" type="tel" placeholder="+91 00000 00000" required />
                    </div>

                    <div className="flex flex-col gap-4 pt-4">
                      <label className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-3">Resume Upload</label>
                      <div className="relative">
                        <input 
                          type="file" 
                          id="c-file" 
                          className="hidden" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                        />
                        <label 
                          htmlFor="c-file" 
                          className="inline-flex items-center gap-3 px-6 py-3 border border-dashed border-ink-3/50 rounded-lg cursor-pointer hover:border-ink transition-colors group w-full"
                        >
                          <span className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity">&darr;</span>
                          <span className="text-sm text-ink-2 truncate">
                            {fileName || "Choose file (PDF, DOCX)"}
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mt-6">
                      <button type="submit" className="bg-ink text-bg px-10 py-4 rounded-full text-[13px] font-medium tracking-[0.02em] hover:opacity-90 transition-opacity">
                        Submit Application &rarr;
                      </button>
                      <button 
                        type="reset" 
                        onClick={() => { setFileName(null); }}
                        className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-3 hover:text-ink transition-colors"
                      >
                       &mdash; Clear
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-16 h-16 bg-[#2f5d3a] rounded-full flex items-center justify-center text-bg text-2xl mb-6">
                      ✓
                    </div>
                    <h3 className="font-serif text-2xl mb-3">Application Received.</h3>
                    <p className="text-ink-2 max-w-[30ch]">
                      Our recruitment team will review your profile and get back to you if there is a match.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 font-mono text-[11px] tracking-[0.08em] uppercase text-ink border-b border-ink pb-1"
                    >
                      Send another application
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
