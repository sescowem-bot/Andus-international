import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import MediaShowcase from "@/components/sections/MediaShowcase";
import Reveal from "@/components/ui/Reveal";
import { VALUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "ANDUS International Nigeria | Empowering Lives, Transforming Communities",
  description: "Seven specialist divisions in finance, energy, real estate, logistics, farming, contracting and business registration.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />

      <section className="border-y border-[#E3EEE5] bg-white py-12 sm:py-16" aria-labelledby="about-home-heading">
        <div className="container-xl grid items-center gap-8 lg:grid-cols-[0.91fr_1.09fr] lg:gap-12">
          <Reveal className="relative">
            <div className="relative h-[410px] overflow-hidden rounded-[18px] bg-[#EAF2EC] shadow-[0_18px_45px_rgba(5,56,30,.09)] sm:h-[525px] lg:h-[555px]">
              <Image
                src="/images/company/about.webp"
                alt="ANDUS International office professional speaking with a client by phone"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover object-center"
              />
              <span className="absolute left-5 top-5 rounded-full bg-[#005C38] px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-white shadow-md">
                ANDUS International
              </span>
            </div>
          </Reveal>

          <div className="min-w-0">
            <Reveal>
              <p className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-[#338B2E]">
                <span className="h-[2px] w-7 bg-[#338B2E]" />
                About ANDUS International
              </p>
              <h2 id="about-home-heading" className="mt-4 text-[clamp(2.35rem,3.8vw,3.7rem)] font-bold leading-[1.11] tracking-[-.035em] text-[#103B2B]" style={{fontFamily:"Fraunces, Georgia, serif"}}>
                Built on <span className="text-[#338B2E]">Trust,</span><br />
                Driven by Purpose
              </h2>
              <p className="mt-5 text-[15px] leading-[1.82] text-[#536E5B]">
                ANDUS International Nigeria Limited is committed to empowering lives and
                transforming communities through financial services and diversified business operations.
              </p>
              <p className="mt-4 text-[15px] leading-[1.82] text-[#536E5B]">
                Our name is more than a brand. Every letter represents a guiding value:
                <strong className="font-semibold text-[#164B34]"> Accountability, Nurturing,
                Dependability, Uniqueness and Sustainability.</strong>
              </p>
            </Reveal>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Reveal delay={0.06}>
                <article className="h-full rounded-[14px] border-t-[3px] border-[#005C38] bg-[#EEF7F0] px-5 py-5">
                  <h3 className="text-[18px] font-bold text-[#005C38]" style={{fontFamily:"Fraunces, Georgia, serif"}}>Our Vision</h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-[#506C5A]">
                    To be a trusted, diversified and impactful business group in Nigeria,
                    known for ethical leadership and sustainable community development.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={0.12}>
                <article className="h-full rounded-[14px] border-t-[3px] border-[#338B2E] bg-[#F6FAF5] px-5 py-5">
                  <h3 className="text-[18px] font-bold text-[#005C38]" style={{fontFamily:"Fraunces, Georgia, serif"}}>Our Mission</h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-[#506C5A]">
                    To provide accessible and transparent financial and business services
                    that empower individuals and organisations.
                  </p>
                </article>
              </Reveal>
            </div>

            <Reveal delay={0.16}>
              <Link href="/about" className="mt-6 inline-flex items-center gap-2 border-b-2 border-[#338B2E] pb-1.5 text-[13px] font-bold text-[#005C38] transition-colors hover:text-[#338B2E]">
                Learn more about ANDUS <ArrowUpRight size={17} />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="container-xl mt-7 border-t border-[#E4EDE5] pt-5">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[.16em] text-[#338B2E]">Our core values</span>
            {VALUES.map((item) => <span key={item.word} className="text-[12px] font-semibold text-[#4E7158]">{item.word}</span>)}
          </div>
        </div>
      </section>

      <MediaShowcase limit={3} />
      <section className="bg-white py-12 sm:py-16">
        <div className="container-xl">
          <div className="relative overflow-hidden rounded-[20px] bg-[#005C38] px-8 py-11 text-white sm:px-12 sm:py-14">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B8EAAA]">Next steps</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">Tell us what you're working towards.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/85">Choose a division or contact the ANDUS team to discuss available services and the right next step.</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-[#005C38]">
              Speak with us <ArrowRight size={17} />
            </Link>
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[54px] border-white/5" aria-hidden="true" />
          </div>
        </div>
      </section>
    </>
  );
}
