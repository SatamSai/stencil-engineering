import Link from "next/link";
import Image from "next/image";
import { STENCIL } from "@/data/stencil";

const PROJECT_CATEGORIES = [
  { label: "Corporate", href: "/projects?type=Corporate" },
  { label: "Healthcare", href: "/projects?type=Healthcare" },
  { label: "Hospitality", href: "/projects?type=Hospitality" },
  { label: "Retail", href: "/projects?type=Retail" },
  { label: "Education", href: "/projects?type=Education" },
];

const SITEMAP = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const STUDIOS = ["Mumbai (HQ)", "Pune", "Bengaluru", "Ahmedabad", "Delhi NCR"];
const CERTS = ["ISO 9001 : 2015", "ISO 14001 : 2015", "ISO 45001 : 2018", "OHSAS 18001 : 2007"];

export function Footer() {
  return (
    <footer className="bg-bg border-t border-line px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-2 pr-0 lg:pr-16 flex flex-col justify-between">
            <div>
              <Image 
                src="/stencil-logo-lockup.png" 
                alt="Stencil Engineering" 
                width={180} 
                height={45} 
                className="h-9 w-auto" 
              />
              <p className="mt-8 text-sm leading-relaxed text-ink-2 max-w-[32ch]">
                Leading Interior Designers & Turnkey Contractors since 1989. Delivering excellence across India.
              </p>
            </div>
            <div className="mt-12 flex gap-4 text-ink-3">
              <a href="#" className="hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            </div>
          </div>
          {/* Sitemap */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 mb-5">Sitemap</div>
            <div className="flex flex-col gap-2.5 text-sm">
              {SITEMAP.map(x => (
                <Link key={x.label} href={x.href} className="text-ink-2 hover:text-ink">{x.label}</Link>
              ))}
            </div>
          </div>
          {/* Project Types */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 mb-5">Project Types</div>
            <div className="flex flex-col gap-2.5 text-sm">
              {PROJECT_CATEGORIES.map(cat => (
                <Link key={cat.label} href={cat.href} className="text-ink-2 hover:text-ink">{cat.label}</Link>
              ))}
            </div>
          </div>
          {/* Studios */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 mb-5">Studios</div>
            <div className="flex flex-col gap-2.5 text-sm">
              {STUDIOS.map(s => <span key={s} className="text-ink-2">{s}</span>)}
            </div>
          </div>
          {/* Certifications */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 mb-5">Certifications</div>
            <div className="flex flex-col gap-1.5 font-mono text-[11px] tracking-[0.05em] text-ink-3">
              {CERTS.map(c => <span key={c}>{c}</span>)}
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-line flex flex-col sm:flex-row justify-between items-center font-mono text-[11px] tracking-[0.06em] uppercase text-ink-3 gap-4">
          <span>&copy; 2026 {STENCIL.fullName}</span>
          <div className="flex gap-[18px]">
            <a href="#" className="hover:text-ink">LinkedIn &nearr;</a>
            <a href="#" className="hover:text-ink">Instagram &nearr;</a>
            <a href="#" className="hover:text-ink">Download Brochure &darr;</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
