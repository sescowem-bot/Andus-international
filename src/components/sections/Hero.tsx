import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Entrance, ImageDrift } from "@/components/ui/PremiumMotion";

export default function Hero() {
  return (
    <section aria-labelledby="andus-hero-heading" className="relative isolate overflow-hidden bg-[#F7FAF6]">
      <div aria-hidden className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#D8ECD8] blur-[95px]" />
      <div className="container-xl relative grid items-center gap-9 pb-12 pt-[114px] lg:min-h-[650px] lg:grid-cols-[.99fr_1.01fr] lg:gap-12 lg:pb-12 lg:pt-[110px]">
        <div className="relative z-10 max-w-[640px] py-5">
          <Entrance>
            <div className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[.23em] text-[#277344]">
              <span className="h-[2px] w-8 bg-[#338B2E]" /> ANDUS International Nigeria Limited
            </div>
          </Entrance>
          <Entrance delay={0.08} distance={22}>
            <h1
              id="andus-hero-heading"
              className="mt-5 max-w-[660px] text-[clamp(2.85rem,4.5vw,4.65rem)] leading-[1.09] tracking-[-.048em] text-[#113C2C]"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600 }}
            >
              Empowering lives.<br />
              <span className="text-[#338B2E]">Transforming</span><br />
              communities.
            </h1>
          </Entrance>
          <Entrance delay={0.18}>
            <p className="mt-5 max-w-[535px] text-[15px] leading-[1.82] text-[#536F5D] sm:text-[16px]">
              Seven specialist divisions. One shared purpose. ANDUS works across financial services,
              energy, property, logistics, farming, construction and business registration in Nigeria.
            </p>
          </Entrance>
          <Entrance delay={0.24}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/services" className="group inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#005C38] px-6 py-3.5 text-[13px] font-bold text-white transition-colors hover:bg-[#177746]">
                Explore our divisions <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/about" className="group inline-flex min-h-12 items-center gap-3 rounded-lg border border-[#BED7C4] bg-white/80 px-6 py-3.5 text-[13px] font-bold text-[#005C38] transition-colors hover:bg-white">
                Discover our story <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Entrance>
          <Entrance delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#D3E6D6] pt-5 text-[11px] font-semibold uppercase tracking-[.055em] text-[#4D705B]">
              {["Seven divisions", "Five core values", "Nigeria-focused"].map(value => (
                <span key={value} className="inline-flex items-center gap-2"><Check size={14} className="text-[#338B2E]" />{value}</span>
              ))}
            </div>
          </Entrance>
        </div>
        <Entrance delay={0.12} className="relative lg:pl-3">
          <div className="relative">
            <ImageDrift className="relative h-[360px] overflow-hidden rounded-[20px] bg-[#B2C6B8] shadow-[0_22px_60px_rgba(6,59,35,.12)] sm:h-[475px] lg:h-[495px]">
              <Image src="/images/company/hero.webp" alt="ANDUS International corporate image" fill priority sizes="(max-width:1024px) 100vw, 49vw" className="object-cover object-center" />
            </ImageDrift>
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[135px] rounded-b-[20px] bg-gradient-to-t from-[#03291A]/60 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 text-white">
              <div><span className="block text-[10px] font-bold uppercase tracking-[.22em] text-white/80">Built on integrity</span><span className="mt-1 block text-[16px] font-bold">Driven by purpose.</span></div>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm"><ArrowDownRight size={19}/></span>
            </div>
          </div>
          <div className="absolute -left-4 top-7 z-10 hidden rounded-xl border border-[#D7E8DA] bg-white/95 px-4 py-3 shadow-[0_12px_35px_rgba(0,48,23,.10)] backdrop-blur-md sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[.19em] text-[#338B2E]">A.N.D.U.S.</p>
            <p className="mt-1 text-[12px] font-bold text-[#164932]">Our identity. Our promise.</p>
          </div>
        </Entrance>
      </div>
      <div className="border-t border-[#DDEAE0] bg-white/85">
        <div className="container-xl flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3.5">
          <span className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#338B2E]">Explore the ANDUS Group</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-semibold text-[#355C41]">
            <Link className="hover:text-[#148147]" href="/services/financial-services">Finance</Link>
            <Link className="hover:text-[#148147]" href="/services/real-estate">Real Estate</Link>
            <Link className="hover:text-[#148147]" href="/services/agriculture">Agriculture</Link>
            <Link className="hover:text-[#148147]" href="/services/cac-registration">Business Registration</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
