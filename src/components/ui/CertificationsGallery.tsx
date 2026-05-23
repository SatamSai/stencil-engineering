import Image from "next/image";
import { CERTIFICATIONS } from "@/data/stencil";

export function CertificationsGallery() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-20">
      {CERTIFICATIONS.map((cert) => (
        <div 
          key={cert.id} 
          className="flex flex-col items-center text-center gap-2 md:gap-3 w-[100px] md:w-[120px]"
        >
          <div className="relative w-full aspect-[1/1.41] overflow-hidden">
            <Image 
              src={cert.image} 
              alt={cert.name}
              fill
              unoptimized
              className="object-contain mix-blend-multiply"
              sizes="(max-width: 768px) 100px, 120px"
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-1.5">
            <div className=" text-[8px] md:text-[9px] tracking-[0.05em] uppercase text-accent leading-none">{cert.name}</div>
            <div className="font-serif text-[13px] md:text-[15px] leading-tight text-ink">{cert.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
