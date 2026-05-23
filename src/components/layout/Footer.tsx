import Link from "next/link";
import Image from "next/image";
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
            <div className="text-[14px] tracking-[0.1em] mb-5 font-medium">Sitemap</div>
            <div className="flex flex-col gap-2.5 text-sm">
              {SITEMAP.map(x => (
                <Link key={x.label} href={x.href} className="hover:underline">{x.label}</Link>
              ))}
            </div>
          </div>
          {/* Project Types */}
          <div>
            <div className="text-[14px] tracking-[0.1em] mb-5 font-medium">Project Types</div>
            <div className="flex flex-col gap-2.5 text-sm">
              {PROJECT_CATEGORIES.map(cat => (
                <Link key={cat.label} href={cat.href} className="hover:underline">{cat.label}</Link>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row justify-between items-center text-[13px] tracking-[0.06em] gap-4 text-white">
          <span>&copy; 2026 {STENCIL.fullName}</span>
          <div className="flex gap-[18px]">
            <a href="#" className="hover:underline inline-flex items-center gap-0.5">LinkedIn <ArrowUpRight className="w-3 h-3"/></a>
            <a href="#" className="hover:underline inline-flex items-center gap-0.5">Instagram <ArrowUpRight className="w-3 h-3"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
