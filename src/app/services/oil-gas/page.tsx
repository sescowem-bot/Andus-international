import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Oil & Gas Supply — Reliable Petroleum Products Across Nigeria",
  description:
    "ANDUS International supplies diesel (AGO), petrol (PMS), kerosene (DPK), LPG, and lubricants to homes, businesses, and industries across Nigeria. Reliable, competitive, on-time.",
};

const PRODUCTS = [
  { name:"Diesel (AGO)",             desc:"Automotive Gas Oil for generators, trucks, and industrial equipment — reliable bulk and retail supply with competitive pricing.", icon:"⛽", tags:["Bulk Supply","Retail","Industrial"] },
  { name:"Premium Motor Spirit",     desc:"Premium petrol for vehicles — supplied in bulk and retail quantities to fuel stations and fleet operators across Nigeria.",        icon:"🛢", tags:["Bulk","Retail","Fleet"] },
  { name:"Kerosene (DPK)",           desc:"Dual Purpose Kerosene for domestic cooking, lighting, and industrial applications — consistent quality and reliable supply.",    icon:"🔥", tags:["Domestic","Industrial","Lighting"] },
  { name:"Liquefied Petroleum Gas",  desc:"LPG supply for cooking, commercial kitchens, and industrial processes — delivered safely and efficiently.",                       icon:"💨", tags:["Cooking","Commercial","Industrial"] },
  { name:"Lubricants",               desc:"Engine oils, transmission fluids, and industrial lubricants from trusted brands — for vehicles, machinery, and equipment.",      icon:"🛞", tags:["Engine Oil","Transmission","Industrial"] },
];

const WHY = [
  { icon:"✅", title:"End-to-End Management",  body:"Every step — sourcing, delivery, and account management handled by our dedicated petroleum supply team." },
  { icon:"🛡", title:"Quality Assured",        body:"All products sourced from certified depots and verified suppliers — no adulteration, full quality assurance." },
  { icon:"💰", title:"Competitive Rates",      body:"We leverage established trade relationships to offer competitive pricing on bulk and retail orders." },
  { icon:"🌐", title:"Reliable Supply Chain",  body:"Consistent, uninterrupted supply even during periods of scarcity — our clients keep running." },
  { icon:"⏰", title:"On-Time Delivery",       body:"Scheduled and emergency delivery available — we track every order and keep you informed at all times." },
  { icon:"🤝", title:"Integrity in Every Deal",body:"Full transparency — no hidden costs, no surprises. Honest, professional petroleum supply service always." },
];

export default function OilGasPage() {
  return (
    <>
      <PageHeader
        label="Oil & Gas · Division 02"
        title={<>Reliable Petroleum <span className="brand-text">Supply</span> Across Nigeria</>}
        description="Dependable supply of diesel, petroleum, kerosene, LPG, and lubricants — ensuring homes, businesses, and industries across Nigeria never run dry. Delivered with safety, speed, and professionalism."
      />

      {/* Image strip */}
      <div className="bg-white border-b border-slate-100 py-8">
        <div className="container-xl">
          <div className="grid grid-cols-3 gap-4">
            {[
              { src:"https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=85", alt:"Oil refinery Nigeria", h:"h-52" },
              { src:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=85", alt:"Petroleum supply trucks",  h:"h-52" },
              { src:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85", alt:"Fuel station Nigeria",      h:"h-52" },
            ].map((img) => (
              <div key={img.src} className={`relative ${img.h} rounded-xl overflow-hidden`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="section bg-white">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              What We <span className="brand-text">Supply</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Full range of petroleum products for domestic, commercial, and industrial use — sourced reliably and delivered efficiently.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.07}>
            {PRODUCTS.map((p) => (
              <StaggerItem key={p.name}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full group hover:border-green-200 hover:shadow-card transition-all duration-300">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-green-700 transition-colors">{p.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="badge-green text-xs">{t}</span>)}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why ANDUS */}
      <section className="section bg-slate-50">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">Why Choose ANDUS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Your Cargo, <span className="brand-text">Our Commitment</span>
            </h2>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
            {WHY.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 group hover:border-green-200 hover:shadow-card transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-xl mb-4 group-hover:bg-green-100 transition-colors">
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

      {/* Quote CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Request a Supply Quote</h2>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Contact our petroleum supply team for competitive pricing on bulk and retail orders.
                Supply agreements available for industrial clients consuming 5,000+ litres per week.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${SITE.phone[0]}`} className="btn-primary">📞 {SITE.phone[0]}</a>
                <a href={`https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%2C%20I%20need%20petroleum%20supply.`} target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp Enquiry</a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-7 text-white relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/5 rounded-full" />
                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-4">Supply Agreement Benefits</h3>
                  <ul className="space-y-3">
                    {["Volume-based competitive pricing","Scheduled daily/weekly delivery","Dedicated account manager","Emergency supply support","Monthly account reconciliation"].map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-white/85">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-300 shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
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
