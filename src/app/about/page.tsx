import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import ValuesSection from "@/components/sections/ValuesSection";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS, COMPANY_STORY, SITE } from "@/lib/data";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About ANDUS International | Fully Registered & Licensed Business Group",
  description:
    "ANDUS International Nigeria Limited — a fully registered and licensed, multi-sector company committed to empowering lives and transforming communities across Nigeria through accessible, integrity-driven services.",
};

const TIMELINE = [
  { year: "2019", event: "ANDUS International Nigeria Limited founded and registered with CAC in Ogun State. Licensed as a money lender." },
  { year: "2020", event: "Launched Financial Services division — providing consumer loans, SME financing, and LPO funding across Southwest Nigeria." },
  { year: "2021", event: "Expanded into Oil & Gas petroleum supply and Real Estate & Construction divisions." },
  { year: "2022", event: "Automobile & Logistics and Farming & Livestock divisions launched, serving diverse clients across Nigeria." },
  { year: "2023", event: "General Contracting and CAC Registration divisions added — completing our seven-division business model." },
  { year: "2024", event: "Surpassed 500+ client milestone across all divisions, cementing ANDUS as a trusted name in Nigerian business." },
  { year: "2025+", event: "Scaling operations, deepening community impact, and expanding geographic reach across Nigeria." },
];

const WHY_CHOOSE = [
  { title: "Fully Registered & Licensed",   body: "Fully registered with CAC and licensed as a money lender — operate with complete legal confidence.", icon: "🏛" },
  { title: "Client-First Always",            body: "Every product and service is designed around your real needs — accessible, transparent, and community-focused.", icon: "👥" },
  { title: "Fast & Reliable",               body: "We respond quickly, process efficiently, and deliver results — no unnecessary delays or hidden bureaucracy.", icon: "⚡" },
  { title: "Transparent Pricing",           body: "No hidden fees, no surprises. We quote clearly and deliver exactly what we promise at the price agreed.", icon: "💰" },
  { title: "Community Impact",              body: "Rooted in Ogun State, we invest in the communities we serve — our success is measured by the lives we transform.", icon: "📍" },
  { title: "7 Diversified Divisions",       body: "From finance to farming, oil & gas to real estate — one trusted partner for all your Nigerian business needs.", icon: "🏢" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Our Story · Our Mission · Our Values"
        title={
          <>About <span className="brand-text">ANDUS</span><br />International</>
        }
        description="A fully registered and licensed company, committed to empowering lives and transforming communities across Nigeria through innovative financial services and diversified business operations."
        size="lg"
      />

      {/* Trust pills */}
      <div className="bg-white border-b border-slate-100 py-4">
        <div className="container-xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {["Fully Registered & Licensed", "Licensed Money Lender", "7 Business Divisions", "CAC Certified", "Ogun State, Nigeria"].map((pill) => (
              <span key={pill} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-xs font-semibold text-green-700 font-mono">
                <CheckCircle size={11} className="text-green-600" /> {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* Left: Copy */}
            <div>
              <Reveal>
                <span className="eyebrow-pill mb-5 inline-flex">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Built on <span className="brand-text">Integrity</span>{" "}
                  & <span className="text-green-700">Service</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-slate-500 leading-relaxed mb-5 text-[1.05rem]">
                  {COMPANY_STORY.story}
                </p>
                <p className="text-slate-500 leading-relaxed mb-5">
                  Our name is not just a brand — it is a binding pledge. Every letter represents a
                  core value:{" "}
                  <strong className="text-slate-800 font-semibold">
                    Accountability, Nurturing, Dependability, Uniqueness, and Sustainability.
                  </strong>
                </p>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Licensed as a money lender and operating across seven key sectors, ANDUS delivers
                  trusted services with integrity at the centre of everything we do — from financial
                  services to oil & gas, real estate, automobile logistics, farming, general
                  contracting, and CAC registration.
                </p>
              </Reveal>
              <Reveal delay={0.12} className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary group">
                  Get In Touch <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/services" className="btn-ghost">
                  Our Services
                </Link>
              </Reveal>
            </div>

            {/* Right: Real image + stats */}
            <div>
              <Reveal delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] mb-5">
                  <Image
                    src={SITE.images.whoWeAre}
                    alt="ANDUS International Nigeria — Who We Are"
                    width={640}
                    height={420}
                    className="w-full h-[320px] md:h-[380px] object-cover"
                    priority
                  />
                  {/* Badge overlay */}
                  <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white rounded-xl px-4 py-3 border-l-[3px] border-green-500">
                    <div className="font-mono text-[10px] text-green-400 tracking-widest uppercase mb-1">Est. Nigeria</div>
                    <div className="text-sm font-medium">Fully Registered & Licensed</div>
                  </div>
                </div>
              </Reveal>

              {/* Stats */}
              <Reveal delay={0.15}>
                <div className="grid grid-cols-3 rounded-2xl overflow-hidden border border-slate-200 shadow-card">
                  {STATS.slice(0, 3).map((stat, i) => (
                    <div
                      key={stat.label}
                      className={`text-center py-6 px-4 ${i < 2 ? "border-r border-slate-200" : ""} hover:bg-green-50 transition-colors`}
                    >
                      <div className="text-3xl font-extrabold text-green-700 leading-none mb-1 tabular-nums">
                        <AnimatedCounter target={parseInt(stat.number)} suffix={stat.suffix} />
                      </div>
                      <div className="font-mono text-[10px] text-slate-500 tracking-wider uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section bg-slate-50">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">Mission & Vision</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              What Drives Us <span className="brand-text">Every Day</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Two clear purposes that guide every decision, every service, and every relationship at ANDUS International.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <Reveal delay={0.05}>
              <div className="bg-white rounded-2xl border border-slate-200 p-8 h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-2xl mb-5">🎯</div>
                <div className="font-mono text-xs text-green-700 tracking-widest uppercase mb-3">Our Mission</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Empowering People & Communities</h3>
                <p className="text-slate-500 leading-relaxed">{COMPANY_STORY.mission}</p>
              </div>
            </Reveal>
            {/* Vision */}
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-8 h-full relative overflow-hidden shadow-[0_20px_48px_rgba(0,112,60,0.28)] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-2xl mb-5">👁</div>
                  <div className="font-mono text-xs text-green-300 tracking-widest uppercase mb-3">Our Vision</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Nigeria&apos;s Most Trusted Business Group</h3>
                  <p className="text-white/80 leading-relaxed">{COMPANY_STORY.vision}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <ValuesSection />

      {/* WHY CHOOSE ANDUS */}
      <section className="section bg-slate-50" id="why-us">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              A Company You Can <span className="brand-text">Truly Trust</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              We don&apos;t just promise excellence — we live it every day across all seven of our business divisions.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
            {WHY_CHOOSE.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full group hover:border-green-200 hover:shadow-card transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-xl mb-4 group-hover:bg-green-100 group-hover:border-green-200 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-green-700 transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* REAL IMAGES STRIP */}
      <section className="bg-slate-50 pb-20">
        <div className="container-xl">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 rounded-2xl overflow-hidden h-52">
                <Image
                  src={SITE.images.about}
                  alt="ANDUS International — Contact & Support"
                  width={800}
                  height={208}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-52">
                <Image
                  src={SITE.images.whoWeAre}
                  alt="ANDUS International — Who We Are"
                  width={400}
                  height={208}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section bg-white" id="timeline">
        <div className="container-xl">
          <Reveal className="text-center mb-14">
            <span className="eyebrow-pill mb-4 inline-flex">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              The <span className="brand-text">ANDUS</span> Timeline
            </h2>
          </Reveal>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-green-200 to-transparent" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.06}>
                  <div className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start`}>
                    {/* Dot */}
                    <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-green-600 border-2 border-white shadow mt-2 shrink-0 z-10" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-card hover:shadow-card-hover hover:border-green-200 transition-all duration-300">
                        <div className="font-mono text-xs text-green-700 font-bold mb-2">{item.year}</div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
