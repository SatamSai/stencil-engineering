import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
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

const CERTS = ["ISO 9001 : 2015", "ISO 14001 : 2015", "ISO 45001 : 2018", "OHSAS 18001 : 2007"];

export function Footer() {
  return (
    <footer className="bg-bg border-t border-line px-4 md:px-8 py-16 md:py-12 bg-bg-2">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-white">
          {/* Sitemap */}
          <div>
            <div className="text-[14px] tracking-[0.1em] mb-5 font-medium uppercase">Sitemap</div>
            <div className="flex flex-col gap-2.5 text-sm">
              {SITEMAP.map(x => (
                <Link key={x.label} href={x.href} className="hover:underline">{x.label}</Link>
              ))}
            </div>
          </div>
          {/* Project Types */}
          <div>
            <div className="text-[14px] tracking-[0.1em] mb-5 font-medium uppercase">Project Types</div>
            <div className="flex flex-col gap-2.5 text-sm">
              {PROJECT_CATEGORIES.map(cat => (
                <Link key={cat.label} href={cat.href} className="hover:underline">{cat.label}</Link>
              ))}
            </div>
          </div>
          {/* Contact */}
          <div className="lg:col-start-4">
            <div className="text-[14px] tracking-[0.1em] mb-5 font-medium uppercase">Contact</div>
            <div className="flex flex-col gap-4 text-sm opacity-80">
              <p className="leading-relaxed max-w-[28ch]">
                {STENCIL.address}
              </p>
              <div className="flex flex-col gap-2">
                <span>{STENCIL.phone}</span>
                <a href={`mailto:${STENCIL.email}`} className="hover:underline">{STENCIL.email}</a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row justify-between items-center text-[13px] tracking-[0.06em] gap-4 text-white">
          <span>&copy; 2026 {STENCIL.fullName}</span>
          <div className="flex gap-[18px]">
            <a href="https://www.linkedin.com/company/stencil-engineering-pvt-ltd/" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
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
            <a href="https://www.instagram.com/stencil_engineering" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
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
        </div>
      </div>
    </footer>
  );
}
