import Image from "next/image";
import { CERTIFICATIONS } from "@/data/stencil";

export function CertificationsGallery() {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-8">
      {/* Top Row: 3 Items */}
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 lg:gap-32">
        {CERTIFICATIONS.slice(0, 3).map((cert) => (
          <div 
            key={cert.id} 
            className="flex flex-col items-center text-center gap-4 w-[160px] md:w-[200px]"
          >
            <div className="relative w-full aspect-[1/1.41] overflow-hidden">
              <Image 
                src={cert.image} 
                alt={cert.name}
                fill
                unoptimized
                className="object-contain mix-blend-multiply"
                sizes="(max-width: 768px) 160px, 200px"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-accent leading-none">{cert.name}</div>
              <div className="font-serif text-[16px] md:text-[20px] leading-tight text-ink">{cert.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row: 2 Items */}
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 lg:gap-32">
        {CERTIFICATIONS.slice(3, 5).map((cert) => (
          <div 
            key={cert.id} 
            className="flex flex-col items-center text-center gap-4 w-[160px] md:w-[200px]"
          >
            <div className="relative w-full aspect-[1/1.41] overflow-hidden">
              <Image 
                src={cert.image} 
                alt={cert.name}
                fill
                unoptimized
                className="object-contain mix-blend-multiply"
                sizes="(max-width: 768px) 160px, 200px"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-accent leading-none">{cert.name}</div>
              <div className="font-serif text-[16px] md:text-[20px] leading-tight text-ink">{cert.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
