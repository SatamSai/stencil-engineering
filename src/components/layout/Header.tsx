"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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

      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-6 bg-bg shadow-[0_2px_24px_0_rgba(0,0,0,0.14)] transition-all duration-300 ease-in-out ${scrolled ? "py-2.5 px-4 md:px-7" : "py-[18px] px-4 md:px-7"}`}>
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

        {/* Desktop links + Actions */}
        <div className="flex items-center gap-6 xl:gap-8 shrink-0">
          <div className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-12 text-base text-ink justify-end">
            {NAV_ITEMS.map(item => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 ${
                    isActive ? "text-accent after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-accent after:scale-x-100" : "text-ink hover:text-ink/90 after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-ink after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link href="/contact" className="hidden sm:inline-flex text-white px-[18px] py-2.5 rounded-full text-[13px] font-medium tracking-[0.01em] transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:opacity-90 active:scale-95" style={{ backgroundColor: '#2b5573' }}>
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
            Contact Us &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
