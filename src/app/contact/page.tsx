"use client";

import { useState } from "react";
import { STENCIL } from "@/data/stencil";
import Image from "next/image";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
            Tell us about<br />the <em className="italic">space</em>.
          </h1>
          <p className="mt-6 text-[20px] leading-relaxed text-white/80 max-w-[52ch]">
            A quick brief is enough to get started. We&apos;ll come back within one working day with a few questions and a sense of the path forward.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-7 gap-x-6" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <div className="flex flex-col gap-2">
                <label className=" text-[11px] tracking-[0.08em] uppercase text-ink-3" htmlFor="f-name">Name</label>
                <input className="bg-transparent border-b border-line py-2 pb-3 text-ink font-sans text-base outline-none w-full focus:border-ink placeholder:text-ink-3" id="f-name" type="text" placeholder="Riya Kapoor" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className=" text-[11px] tracking-[0.08em] uppercase text-ink-3" htmlFor="f-company">Company</label>
                <input className="bg-transparent border-b border-line py-2 pb-3 text-ink font-sans text-base outline-none w-full focus:border-ink placeholder:text-ink-3" id="f-company" type="text" placeholder="Acme Pharma Pvt Ltd" />
              </div>
              <div className="flex flex-col gap-2">
                <label className=" text-[11px] tracking-[0.08em] uppercase text-ink-3" htmlFor="f-email">Email</label>
                <input className="bg-transparent border-b border-line py-2 pb-3 text-ink font-sans text-base outline-none w-full focus:border-ink placeholder:text-ink-3" id="f-email" type="email" placeholder="riya@acme.in" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className=" text-[11px] tracking-[0.08em] uppercase text-ink-3" htmlFor="f-phone">Phone</label>
                <input className="bg-transparent border-b border-line py-2 pb-3 text-ink font-sans text-base outline-none w-full focus:border-ink placeholder:text-ink-3" id="f-phone" type="tel" placeholder="+91 98xxx xxxxx" />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className=" text-[11px] tracking-[0.08em] uppercase text-ink-3" htmlFor="f-sector">Sector / Type</label>
                <input className="bg-transparent border-b border-line py-2 pb-3 text-ink font-sans text-base outline-none w-full focus:border-ink placeholder:text-ink-3" id="f-sector" type="text" placeholder="e.g. R&D lab fitout, 12,000 sq ft, Pune" />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className=" text-[11px] tracking-[0.08em] uppercase text-ink-3" htmlFor="f-msg">Brief</label>
                <textarea className="bg-transparent border-b border-line py-2 pb-3 text-ink font-sans text-base outline-none w-full focus:border-ink placeholder:text-ink-3 resize-none min-h-[60px]" id="f-msg" rows={3} placeholder="A few sentences on scope, timeline, and any constraints" />
              </div>
              <button type="submit" className={`sm:col-span-2 mt-4 inline-flex items-center gap-4 px-10 py-4 text-[13px] font-medium tracking-[0.02em] rounded-full justify-self-start cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg active:scale-95 ${submitted ? "bg-bg-2 text-bg pointer-events-none" : "bg-bg-2 text-bg"}`}>
                {submitted ? "✓ Brief received — we'll be in touch" : "Send brief →"}
              </button>
            </form>
            <div className="flex flex-col gap-2">
              <div className="pb-2 mb-4 border-b border-line">
                <div className="text-[11px] tracking-[0.08em] uppercase text-ink-3 mb-3">Speak with a project lead</div>
                <div className="text-[17px] font-medium py-2">{STENCIL.phone}</div>
              </div>
              <div className="pb-2 mb-4 border-b border-line">
                <div className="text-[11px] tracking-[0.08em] uppercase text-ink-3 mb-3">Email</div>
                <div className="text-[17px] font-medium py-2">{STENCIL.email}</div>
              </div>
              <div className="pb-2 mb-4 border-b border-line">
                <div className="text-[11px] tracking-[0.08em] uppercase text-ink-3 mb-3">Studio</div>
                <div className="text-[17px] font-medium py-2">{STENCIL.address}</div>
              </div>
              <div className="pb-2 mb-4 border-b border-line">
                <div className="text-[11px] tracking-[0.08em] uppercase text-ink-3 mb-3">Hours</div>
                <div className="text-[17px] font-medium py-2">Mon&ndash;Sat &middot; 09:30 &ndash; 19:00 IST</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
