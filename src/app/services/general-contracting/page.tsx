import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "General Contractors — Building with Precision & Integrity",
  description:
    "ANDUS International provides building construction, electrical & solar installations, metal fabrication, and renovation works across Nigeria. Delivered on time, within budget.",
};

const SERVICES = [
  { icon:"🏗", title:"Building Construction",       desc:"Residential and commercial building construction from foundation to completion — quality workmanship, certified contractors, guaranteed results.",     tags:["Residential","Commercial","Foundation to Finish"] },
  { icon:"⚡", title:"Electrical Installations",    desc:"Industrial, commercial, and residential electrical installations by certified engineers, compliant with Nigerian Electrical Safety Standards.",         tags:["Industrial","Commercial","Residential"] },
  { icon:"☀️", title:"Solar Energy Systems",        desc:"Solar PV design, supply, and installation for homes, offices, and industrial facilities — eliminating grid dependency and cutting energy costs.",       tags:["Solar PV","Off-Grid","Hybrid"] },
  { icon:"🔧", title:"Metal Fabrication",           desc:"Custom metal fabrication — gates, railings, roofing structures, industrial frames, tanks, and bespoke metalwork crafted to specification.",           tags:["Gates","Railings","Industrial"] },
  { icon:"🏠", title:"Renovation Works",            desc:"Complete interior and exterior renovation of residential and commercial spaces — modern finishing, quality materials, professional execution.",          tags:["Interior","Exterior","Modern"] },
  { icon:"📊", title:"Project Management",          desc:"End-to-end construction project management — ensuring timely delivery, cost control, quality assurance, and clear client communication throughout.",     tags:["Timeline","Budget","Quality"] },
];

const SOLAR_BENEFITS = [
  "Eliminate generator diesel costs — save ₦1M–₦5M+ per year",
  "Zero grid dependency — operations run 24/7 uninterrupted",
  "10–25 year system lifespan with minimal maintenance",
  "Significant reduction in carbon footprint",
  "Asset financing available through ANDUS Financial Services",
];

export default function GeneralContractingPage() {
  return (
    <>
      <PageHeader
        label="General Contractors · Division 06"
        title={<>Building with Precision<br />and <span className="brand-text">Integrity</span></>}
        description="Professional building construction, electrical and solar installations, metal fabrication, and renovation works — delivered on time, within budget, and to exacting quality standards."
      />

      {/* Images */}
      <div className="bg-white border-b border-slate-100 py-8">
        <div className="container-xl grid grid-cols-3 gap-4">
          {[
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85",
            "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=85",
          ].map((src, i) => (
            <div key={i} className="relative h-52 rounded-xl overflow-hidden">
              <Image src={src} alt="ANDUS contracting Nigeria" fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="section bg-white">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Complete <span className="brand-text">Contracting Solutions</span>
            </h2>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.07}>
            {SERVICES.map((s) => (
              <StaggerItem key={s.title}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full group hover:border-green-200 hover:shadow-card transition-all duration-300">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-green-700 transition-colors">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => <span key={t} className="badge-green text-xs">{t}</span>)}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Solar spotlight */}
      <section className="section bg-slate-50">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <Reveal>
              <span className="eyebrow-pill mb-4 inline-flex">Solar Energy Solutions</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                Eliminate Generator Costs with <span className="brand-text">Solar Power</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Nigerian businesses spend millions annually on diesel generators. ANDUS designs and installs
                solar energy systems that eliminate this recurring cost while providing reliable, 24/7 power —
                a strategic investment that pays for itself within 2–4 years.
              </p>
              <ul className="space-y-3 mb-7">
                {SOLAR_BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${SITE.phone[0]}`} className="btn-primary">📞 Get a Free Assessment</a>
                <a href={`https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%2C%20I%20am%20interested%20in%20solar%20installation.`} target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp Us</a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/5 rounded-full" />
                <div className="relative z-10">
                  <div className="text-5xl mb-5">☀️</div>
                  <h3 className="font-bold text-2xl mb-3">150KVA Installation</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-5">
                    ANDUS recently completed a 150KVA industrial solar installation at a Sagamu
                    manufacturing facility — eliminating grid dependency and reducing energy costs by 70%.
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {[["150KVA","System Size"],["70%","Cost Saved"],["Zero","Downtime"]].map(([val, lbl]) => (
                      <div key={lbl} className="bg-white/10 rounded-xl p-3 text-center">
                        <div className="font-bold text-lg text-white">{val}</div>
                        <div className="text-xs text-white/60 mt-1">{lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
