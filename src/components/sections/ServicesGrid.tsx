import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Entrance, HoverLift } from "@/components/ui/PremiumMotion";

export default function ServicesGrid() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-24 bg-white py-11 sm:py-14">
      <div className="container-xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <Entrance>
            <p className="text-[11px] font-extrabold uppercase tracking-[.22em] text-[#338B2E]">Our capabilities / 01 — 07</p>
            <h2 id="services-heading" className="mt-3 text-[clamp(2.25rem,3.3vw,3.3rem)] leading-[1.13] tracking-[-.035em] text-[#103D2B]" style={{fontFamily:'Fraunces, Georgia, serif',fontWeight:600}}>
              Seven divisions. <span className="text-[#338B2E]">One purpose.</span>
            </h2>
          </Entrance>
          <Entrance delay={0.1}>
            <p className="max-w-[380px] text-[13px] leading-[1.8] text-[#587361]">From capital and energy to property, agriculture and business registration. Explore the full range of ANDUS services.</p>
          </Entrance>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Entrance key={service.id} delay={Math.min(index, 5) * 0.045} className="h-full">
              <HoverLift className="h-full">
                <Link href={service.href} className="group block h-full overflow-hidden rounded-[16px] border border-[#E0EBE3] bg-white transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(3,54,27,.10)]">
                  <div className="relative h-[187px] overflow-hidden bg-[#DDE9DF]">
                    <Image src={service.image} alt={`${service.title} at ANDUS International`} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.055]" />
                    <span className="absolute right-4 top-4 rounded-full border border-white/50 bg-[#053621]/75 px-3 py-1.5 text-[11px] font-bold tracking-[.08em] text-white backdrop-blur-sm">{String(index + 1).padStart(2, "0")} / 07</span>
                  </div>
                  <div className="px-5 pb-5 pt-4">
                    <h3 className="text-[19px] font-bold leading-tight text-[#103E2B]">{service.title}</h3>
                    <p className="mt-2 min-h-[49px] text-[13px] leading-[1.8] text-[#587260]">{service.short}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {service.features.slice(0, 2).map(feature => <span key={feature} className="rounded-full border border-[#DDEBE0] bg-[#F7FAF7] px-2.5 py-1 text-[10px] font-semibold text-[#56745E]">{feature}</span>)}
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-[#EDF2ED] pt-3 text-[12px] font-extrabold text-[#005C38]"><span>Explore division</span><ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
                  </div>
                </Link>
              </HoverLift>
            </Entrance>
          ))}
        </div>
      </div>
    </section>
  );
}
