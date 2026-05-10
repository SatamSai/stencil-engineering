"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme, themes } = useTheme();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Spacer to prevent CLS when the fixed nav is active */}
      <div className="h-[88px] w-full" />

      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-6 bg-bg border-b border-line transition-all duration-300 ease-in-out ${scrolled ? "py-2.5 px-4 md:px-7" : "py-[18px] px-4 md:px-7"}`}>
        <Link href="/" className="flex items-center gap-3 shrink-0 relative">
          <div className={`relative transition-all duration-300 ease-in-out ${scrolled ? "h-[34px] w-[140px]" : "h-[52px] w-[214px]"}`}>
            <Image
              src="/stencil-logo-lockup.png"
              alt="Stencil Engineering Pvt Ltd"
              fill
              priority
              sizes="(max-width: 768px) 140px, 214px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-12 text-base text-ink shrink-1 justify-center">
          {NAV_ITEMS.map(item => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`whitespace-nowrap transition-colors duration-150 ${
                  isActive ? "text-accent font-medium border-b border-accent" : "text-ink hover:text-ink-2"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          {/* Multi-Theme Selector */}
          <div className="relative group">
            <button
              className="p-2 rounded-full hover:bg-ink/5 transition-colors flex items-center gap-2"
              aria-label="Change theme"
            >
              <div className="flex -space-x-1.5">
                <div className="w-3.5 h-3.5 rounded-full border border-line" style={{ backgroundColor: theme.colors.pageBg }} />
                <div className="w-3.5 h-3.5 rounded-full border border-line" style={{ backgroundColor: theme.colors.accent }} />
              </div>
              <span className="hidden lg:inline text-[10px] font-mono uppercase tracking-[0.05em] text-ink-3">Themes</span>
            </button>
            
            {/* Dropdown */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-bg border border-line shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60] py-2">
              <div className="px-3 pb-2 mb-2 border-b border-line">
                <span className="text-[9px] font-mono uppercase tracking-[0.1em] text-ink-3">Select System</span>
              </div>
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-ink/5 transition-colors text-left ${
                    theme.id === t.id ? "bg-ink/5" : ""
                  }`}
                >
                  <div className="w-4 h-4 rounded-full border border-line shrink-0" style={{ backgroundColor: t.colors.accent }} />
                  <span className={`text-[12px] font-medium ${theme.id === t.id ? "text-accent" : "text-ink"}`}>
                    {t.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <Link href="/contact" className="hidden sm:inline-flex bg-ink text-bg px-[18px] py-2.5 rounded-full text-[13px] font-medium tracking-[0.01em]">
            Contact Us &rarr;
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent p-0"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-[2px] bg-ink transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-ink transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-ink transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg transition-all duration-300 flex flex-col md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: scrolled ? 54 : 88 }}
      >
        <div className="flex flex-col px-8 pt-12 gap-2">
          {NAV_ITEMS.map(item => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`font-serif text-[36px] tracking-[-0.01em] leading-[1.4] py-2 border-b border-line transition-colors ${
                  isActive ? "text-accent" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="mt-auto px-8 pb-10">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex bg-accent text-bg px-8 py-4 rounded-full text-sm font-medium tracking-[0.02em]"
          >
            Start a project &rarr;
          </Link>
          <div className="mt-8 font-mono text-[11px] tracking-[0.08em] uppercase text-ink-3">
            +91 22 4890 1200
          </div>
        </div>
      </div>
    </>
  );
}
