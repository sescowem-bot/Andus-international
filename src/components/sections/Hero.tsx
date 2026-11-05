import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight, ArrowRight, Check, ShieldCheck} from "lucide-react";
import {Entrance} from "@/components/ui/PremiumMotion";

/** Media source: the original ANDUS HOME page provided by the site owner.
 * The people/team photo and secondary company photo are permanently bundled WebP assets.
 * Uses no WordPress URL or remote image, and the photos remain visible without JS.
 */
export default function Hero(){
 return <section aria-labelledby="andus-hero-heading" className="relative isolate overflow-hidden border-b border-[#DCE9DF] bg-[#F5FAF6]">
  <div aria-hidden className="pointer-events-none absolute inset-0">
   <Image src="/images/divisions/real-estate.webp" alt="" fill priority={false} sizes="100vw" className="object-cover opacity-[.055]" />
   <div className="absolute inset-0 bg-gradient-to-r from-[#F5FAF6]/95 via-[#F5FAF6]/90 to-[#F5FAF6]/80"/>
  </div>
  <div className="container-xl relative grid items-center gap-7 pb-9 pt-[112px] sm:gap-8 sm:pt-[118px] lg:min-h-[565px] lg:grid-cols-[1fr_.96fr] lg:gap-10 lg:pb-11 lg:pt-[108px]">
   <div className="relative z-10 max-w-[655px]">
    <Entrance><p className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-[#237344]"><span className="h-0.5 w-8 bg-[#338B2E]"/>ANDUS International Nigeria Limited</p></Entrance>
    <Entrance delay={.08} distance={18}>
     <h1 id="andus-hero-heading" className="mt-4 max-w-[670px] text-[clamp(2.65rem,4.5vw,4.6rem)] font-bold leading-[1.08] tracking-[-.045em] text-[#083F2C]" style={{fontFamily:"Fraunces, Georgia, serif"}}>
      Empowering <span className="text-[#338B2E]">Lives,</span><br/>Transforming<br/>Communities.
     </h1>
    </Entrance>
    <Entrance delay={.14}>
     <p className="mt-4 text-[12px] font-extrabold uppercase tracking-[.1em] text-[#29794A]">Financial Services · Oil &amp; Gas · Real Estate &amp; More</p>
     <p className="mt-4 max-w-[550px] text-[15px] leading-[1.8] text-[#526D59]">
      One group with seven specialist divisions in Nigeria. Discover financial services, petroleum supply, property, logistics, farming, contracting and business registration.
     </p>
    </Entrance>
    <Entrance delay={.20}>
     <div className="mt-6 flex flex-wrap gap-3">
      <Link href="/services" className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#005C38] px-6 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#338B2E]">Explore Our Divisions <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></Link>
      <Link href="/about" className="group inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#B9D4C0] bg-white px-6 py-3 text-[13px] font-bold text-[#005C38] transition-colors hover:bg-[#EAF5ED]">About ANDUS <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/></Link>
     </div>
    </Entrance>
    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#CBDECF] pt-4 text-[11px] font-semibold text-[#456B50]">
      {["Seven business divisions","Five core values","Based in Nigeria"].map(label=><span key={label} className="inline-flex items-center gap-2"><Check size={15} className="text-[#338B2E]"/>{label}</span>)}
    </div>
   </div>
   <div className="relative z-10">
    <div className="relative ml-auto max-w-[650px] overflow-visible">
     <div className="relative h-[345px] overflow-hidden rounded-[19px] bg-[#E0EBE2] shadow-[0_20px_60px_rgba(6,61,32,.14)] sm:h-[445px] lg:h-[465px]">
      <Image src="/images/company/hero.webp" alt="The original ANDUS International homepage company photograph" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover object-center"/>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-t from-[#052F20]/90 via-[#052F20]/30 to-transparent"/>
      <div className="absolute bottom-5 left-5 right-5 text-white sm:left-7"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/85">Serving Nigeria</p><p className="mt-1 max-w-[360px] text-xl font-bold leading-snug sm:text-2xl">Excellence &amp; Accountability</p></div>
     </div>
     <div className="absolute -left-2 top-5 z-20 rounded-xl border border-[#DAE9DD] bg-white/95 px-4 py-3 shadow-[0_10px_35px_rgba(2,39,18,.12)] backdrop-blur-md sm:-left-5 sm:top-7"><p className="text-[13px] font-extrabold tracking-[.16em] text-[#005C38]">A · N · D · U · S</p><p className="mt-1 text-[11px] font-semibold text-[#496B55]">Our Values · Our Commitment</p></div>
     <div className="absolute -bottom-4 -right-2 z-20 flex items-center gap-3 rounded-xl border border-[#E1E9E2] bg-white p-2.5 pr-5 shadow-[0_14px_38px_rgba(5,48,25,.12)] sm:-right-5 sm:bottom-7">
       <div className="relative h-[54px] w-[60px] overflow-hidden rounded-lg"><Image src="/images/company/about.webp" alt="ANDUS International company activities" fill sizes="60px" className="object-cover"/></div>
       <div><span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#338B2E]"><ShieldCheck size={13}/> Our identity</span><p className="mt-1 text-[12px] font-bold text-[#103D2A]">Integrity in every division.</p></div>
     </div>
    </div>
   </div>
  </div>
  <div className="border-t border-[#E0ECE2] bg-white/90">
    <div className="container-xl flex flex-wrap items-center justify-between gap-x-5 gap-y-2 py-3.5">
      <span className="text-[10px] font-extrabold uppercase tracking-[.17em] text-[#338B2E]">Discover the ANDUS Group</span>
      <nav aria-label="Explore divisions" className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-bold text-[#315F41]">
       <Link className="hover:text-[#338B2E]" href="/services/financial-services">Finance</Link>
       <Link className="hover:text-[#338B2E]" href="/services/real-estate">Real Estate</Link>
       <Link className="hover:text-[#338B2E]" href="/services/agriculture">Agriculture</Link>
       <Link className="hover:text-[#338B2E]" href="/services/cac-registration">CAC Registration</Link>
      </nav>
    </div>
  </div>
 </section>
}