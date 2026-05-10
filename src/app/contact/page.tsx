"use client";

import { useState } from "react";
import { STENCIL } from "@/data/stencil";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="px-5 md:px-8 py-[120px] bg-ink text-bg" id="contact">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-16 mb-[72px]">
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-bg/55">(01) &mdash; Start a project</div>
            <div>
              <h1 className="font-serif text-[clamp(48px,6.5vw,120px)] leading-[0.96] tracking-[-0.025em] max-w-[12ch]">Tell us about<br />the <em className="italic text-[#e9c8b4]">space</em>.</h1>
              <p className="mt-6 text-[15px] leading-relaxed text-bg/75 max-w-[52ch]">
                A quick brief is enough to get started. We&apos;ll come back within one working day with a few questions and a sense of the path forward &mdash; at no obligation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pt-12 border-t border-bg/[.18]">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-7 gap-x-6" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] tracking-[0.08em] uppercase text-bg/55" htmlFor="f-name">Name</label>
                <input className="bg-transparent border-b border-bg/30 py-2 pb-3 text-bg font-sans text-base outline-none w-full focus:border-bg placeholder:text-bg/30" id="f-name" type="text" placeholder="Riya Kapoor" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] tracking-[0.08em] uppercase text-bg/55" htmlFor="f-company">Company</label>
                <input className="bg-transparent border-b border-bg/30 py-2 pb-3 text-bg font-sans text-base outline-none w-full focus:border-bg placeholder:text-bg/30" id="f-company" type="text" placeholder="Acme Pharma Pvt Ltd" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] tracking-[0.08em] uppercase text-bg/55" htmlFor="f-email">Email</label>
                <input className="bg-transparent border-b border-bg/30 py-2 pb-3 text-bg font-sans text-base outline-none w-full focus:border-bg placeholder:text-bg/30" id="f-email" type="email" placeholder="riya@acme.in" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] tracking-[0.08em] uppercase text-bg/55" htmlFor="f-phone">Phone</label>
                <input className="bg-transparent border-b border-bg/30 py-2 pb-3 text-bg font-sans text-base outline-none w-full focus:border-bg placeholder:text-bg/30" id="f-phone" type="tel" placeholder="+91 98xxx xxxxx" />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="font-mono text-[11px] tracking-[0.08em] uppercase text-bg/55" htmlFor="f-sector">Sector / Type</label>
                <input className="bg-transparent border-b border-bg/30 py-2 pb-3 text-bg font-sans text-base outline-none w-full focus:border-bg placeholder:text-bg/30" id="f-sector" type="text" placeholder="e.g. R&D lab fitout, 12,000 sq ft, Pune" />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="font-mono text-[11px] tracking-[0.08em] uppercase text-bg/55" htmlFor="f-msg">Brief</label>
                <textarea className="bg-transparent border-b border-bg/30 py-2 pb-3 text-bg font-sans text-base outline-none w-full focus:border-bg placeholder:text-bg/30 resize-none min-h-[60px]" id="f-msg" rows={3} placeholder="A few sentences on scope, timeline, and any constraints" />
              </div>
              <button type="submit" className={`sm:col-span-2 mt-4 inline-flex items-center gap-4 px-8 py-4 text-sm font-medium tracking-[0.02em] rounded-full justify-self-start cursor-pointer transition-opacity hover:opacity-[0.88] ${submitted ? "bg-[#2f5d3a] text-bg pointer-events-none" : "bg-accent text-bg"}`}>
                {submitted ? "✓ Brief received — we'll be in touch" : "Send brief →"}
              </button>
            </form>
            <div className="flex flex-col gap-9">
              <div className="pb-6 border-b border-bg/[.18]">
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-bg/55 mb-3">Speak with a project lead</div>
                <div className="font-serif text-[28px] tracking-[-0.01em] leading-[1.2]">{STENCIL.phone}</div>
              </div>
              <div className="pb-6 border-b border-bg/[.18]">
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-bg/55 mb-3">Email</div>
                <div className="font-serif text-[28px] tracking-[-0.01em] leading-[1.2]">{STENCIL.email}</div>
              </div>
              <div className="pb-6 border-b border-bg/[.18]">
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-bg/55 mb-3">Studio</div>
                <div className="font-serif text-[28px] tracking-[-0.01em] leading-[1.2]">{STENCIL.address}</div>
              </div>
              <div className="pb-6 border-b border-bg/[.18]">
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-bg/55 mb-3">Hours</div>
                <div className="font-serif text-[28px] tracking-[-0.01em] leading-[1.2]">Mon&ndash;Sat &middot; 09:30 &ndash; 19:00 IST</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
