import { SERVICES, SECTORS } from "@/data/stencil";

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 md:px-8 py-16 border-b border-line" id="services">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-16 mb-[72px]">
            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3 pb-4">(01) &mdash; Capabilities</div>
            <div>
              <h1 className="font-serif text-[clamp(36px,4.6vw,76px)] leading-none tracking-[-0.02em] max-w-[14ch]">One contract.<br />Every discipline.</h1>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-2 max-w-[52ch]">
                From the first space-planning sketch to the BMS commissioning report, we hold every trade in-house &mdash; so handovers are seams you don&apos;t see, and the client signs one contract, not twelve.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-line">
            {SERVICES.map((s, i) => (
              <div key={s} className="flex items-baseline gap-4 pr-6 py-[22px] border-b border-line hover:pl-3 transition-all">
                <span className="font-mono text-[11px] text-ink-3 min-w-7">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-[26px] leading-[1.05] tracking-[-0.01em]">{s}</span>
                <span className="ml-auto opacity-40 font-mono text-sm">&nearr;</span>
              </div>
            ))}
          </div>
          <div className="mt-24" id="sectors">
            <div className="flex justify-between items-baseline border-b border-line pb-4 mb-7">
              <h2 className="font-serif text-[32px] tracking-[-0.01em]">Sectors we build for</h2>
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-3">06 verticals &middot; pan-India</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
              {SECTORS.map(s => (
                <div key={s.n} className="bg-bg-2 p-7 flex flex-col gap-3.5 min-h-[220px]">
                  <span className="font-mono text-[11px] text-accent tracking-[0.08em]">&mdash; {s.n}</span>
                  <span className="font-serif text-[28px] tracking-[-0.01em]">{s.name}</span>
                  <span className="text-sm leading-relaxed text-ink-2 mt-auto">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
