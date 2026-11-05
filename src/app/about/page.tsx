import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SITE, VALUES, COMPANY_STORY } from "@/lib/data";
import { Entrance, HoverLift, ImageDrift } from "@/components/ui/PremiumMotion";

export const metadata: Metadata = {
  title: "About ANDUS International",
  description: "Learn about ANDUS International Nigeria Limited, our mission, vision and A.N.D.U.S core values.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <header className="border-b border-[#E3EEE5] bg-[#F7FAF6] pt-[112px]">
        <div className="container-xl grid gap-7 pb-9 pt-4 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div>
            <Entrance>
              <p className="text-[11px] font-extrabold uppercase tracking-[.23em] text-[#338B2E]">The ANDUS story / About us</p>
              <h1 className="mt-3 text-[clamp(2.7rem,4.5vw,4.3rem)] leading-[1.13] tracking-[-.045em] text-[#103C2B]" style={{fontFamily:'Fraunces, Georgia, serif',fontWeight:600}}>
                Built on integrity.<br /><span className="text-[#338B2E]">Driven by purpose.</span>
              </h1>
            </Entrance>
          </div>
          <Entrance delay={0.1}>
            <p className="max-w-[500px] text-[15px] leading-[1.8] text-[#55715F]">
              Empowering individuals, businesses and communities in Nigeria through a diversified range of services and a promise of dependable relationships.
            </p>
          </Entrance>
        </div>
      </header>

      <section className="py-9 sm:py-12" aria-labelledby="andus-story-title">
        <div className="container-xl grid items-start gap-7 lg:grid-cols-[.9fr_1.1fr] lg:gap-10">
          <Entrance className="relative">
            <ImageDrift className="relative h-[355px] overflow-hidden rounded-[18px] bg-[#E6EFE7] sm:h-[465px] lg:h-[555px]">
              <Image
                src="/images/company/about.webp"
                alt="Professional team member at work, from the original ANDUS website"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </ImageDrift>
            <div className="absolute -bottom-3 right-4 rounded-xl border border-[#A4D2AC] bg-[#063D2B] px-5 py-4 text-white shadow-lg sm:-right-3">
              <span className="block text-[11px] font-bold uppercase tracking-[.24em] text-[#BDE8B3]">A.N.D.U.S.</span>
              <span className="mt-1 block text-[12px] font-semibold">Our identity</span>
            </div>
          </Entrance>

          <div className="min-w-0 lg:py-1">
            <Entrance delay={0.05}>
              <p className="text-[11px] font-extrabold uppercase tracking-[.21em] text-[#338B2E]">Established in Nigeria</p>
              <h2 id="andus-story-title" className="mt-3 max-w-xl text-[clamp(1.85rem,2.7vw,2.8rem)] leading-[1.22] tracking-[-.035em] text-[#0D3B29]" style={{fontFamily:'Fraunces, Georgia, serif',fontWeight:600}}>
                A business group with a binding pledge.
              </h2>
              <p className="mt-4 text-[14px] leading-[1.85] text-[#4F6B59] sm:text-[15px]">{COMPANY_STORY.story}</p>
              <p className="mt-3 text-[14px] leading-[1.85] text-[#4F6B59]">The name ANDUS reflects five guiding principles: <strong className="text-[#123F2B]">Accountability, Nurturing, Dependability, Uniqueness and Sustainability.</strong></p>
            </Entrance>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Entrance delay={0.12}>
                <article className="h-full rounded-[15px] border-t-[3px] border-[#005C38] bg-[#EFF7F1] p-5">
                  <h3 className="text-[20px] font-bold text-[#005C38]" style={{fontFamily:'Fraunces, Georgia, serif'}}>Our Vision</h3>
                  <p className="mt-2 text-[13px] leading-[1.78] text-[#476954]">{COMPANY_STORY.vision}</p>
                </article>
              </Entrance>
              <Entrance delay={0.17}>
                <article className="h-full rounded-[15px] border-t-[3px] border-[#338B2E] bg-[#F4F8EC] p-5">
                  <h3 className="text-[20px] font-bold text-[#237A36]" style={{fontFamily:'Fraunces, Georgia, serif'}}>Our Mission</h3>
                  <p className="mt-2 text-[13px] leading-[1.78] text-[#476954]">{COMPANY_STORY.mission}</p>
                </article>
              </Entrance>
            </div>
            <Entrance delay={0.2}>
              <Link href="/services" className="mt-6 inline-flex items-center gap-2 border-b-2 border-[#338B2E] pb-1.5 text-[13px] font-bold text-[#005C38] transition hover:gap-3">
                Explore all seven divisions <ArrowUpRight size={17} />
              </Link>
            </Entrance>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E2EDE4] bg-[#F7FAF7] py-10 sm:py-12" aria-labelledby="andus-values-title">
        <div className="container-xl">
          <Entrance>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[.22em] text-[#338B2E]">The A.N.D.U.S. Covenant</p>
                <h2 id="andus-values-title" className="mt-2 text-3xl tracking-[-.03em] text-[#0D3C28] sm:text-[2.4rem]" style={{fontFamily:'Fraunces, Georgia, serif',fontWeight:600}}>Five letters. Five commitments.</h2>
              </div>
              <p className="max-w-[390px] text-[13px] leading-7 text-[#5A7560]">A guiding principle behind each decision, relationship and business division.</p>
            </div>
          </Entrance>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((value, i) => (
              <Entrance key={`${value.letter}-${i}`} delay={i * 0.06} className="h-full">
                <HoverLift className="h-full">
                  <article className="h-full rounded-xl border border-[#D9E8DD] bg-white px-5 py-5">
                    <div className="flex items-center justify-between"><strong className="text-[37px] font-bold leading-none text-[#338B2E]" style={{fontFamily:'Fraunces, Georgia, serif'}}>{value.letter}</strong><CheckCircle2 size={17} className="text-[#88B897]" /></div>
                    <h3 className="mt-4 text-[16px] font-bold text-[#173D2C]">{value.word}</h3>
                    <p className="mt-2 text-[12.5px] leading-[1.75] text-[#587362]">{value.description}</p>
                  </article>
                </HoverLift>
              </Entrance>
            ))}
          </div>
        </div>
      </section>
      <section className="py-9 sm:py-11">
        <div className="container-xl flex flex-wrap items-center justify-between gap-5 rounded-[17px] bg-[#06452D] px-7 py-8 text-white sm:px-10">
          <div><span className="text-[11px] font-bold uppercase tracking-[.2em] text-[#C1E7B8]">Next conversation</span><h2 className="mt-2 text-[26px] font-semibold" style={{fontFamily:'Fraunces, Georgia, serif'}}>Let’s build something meaningful.</h2><p className="mt-1 text-[13px] text-white/75">ANDUS International · {SITE.address}</p></div>
          <Link href="/contact" className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#005C38] transition hover:bg-[#E9F8EC]">Get in touch <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
        </div>
      </section>
    </main>
  );
}
