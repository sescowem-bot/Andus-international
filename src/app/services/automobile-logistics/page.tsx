import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";
import { SITE } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Automobile & Logistics — Vehicle Import/Export & Freight Nigeria",
  description:
    "ANDUS International handles vehicle importation, goods import/export, freight logistics, customs clearing, agricultural commodity export, and warehousing across Nigeria.",
};

const SERVICES = [
  { num:"01", icon:"🚗", title:"Vehicle Importation",           desc:"Brand new and used vehicles — cars, trucks, buses, commercial vehicles — from the UK, USA, Japan, and other markets directly to Nigeria.",                              tags:["Cars","Trucks","Buses","Commercial"] },
  { num:"02", icon:"📦", title:"Goods Import & Export",         desc:"Import and export of consumer products, raw materials, machinery, electronics, and commodities — across all sectors and global corridors.",                               tags:["Consumer Goods","Raw Materials","Machinery"] },
  { num:"03", icon:"🌐", title:"Freight & Cargo Logistics",     desc:"End-to-end freight via sea, air, and land haulage. Safe movement of goods from origin to destination, on time and in full.",                                              tags:["Sea Freight","Air Freight","Land Haulage"] },
  { num:"04", icon:"✅", title:"Customs Clearing",              desc:"All customs clearing, import/export documentation, duty assessment, and port processing — ensuring your goods clear fast without complications.",                           tags:["Customs","Documentation","Port Clearing"] },
  { num:"05", icon:"🌾", title:"Agricultural Commodity Export", desc:"Export Nigerian agricultural commodities — cocoa, sesame, cashew, palm oil — to international buyers through verified and regulated trade channels.",                      tags:["Cocoa","Sesame","Cashew","Palm Oil"] },
  { num:"06", icon:"🏭", title:"Warehousing & Distribution",    desc:"Short and long-term warehousing with local distribution networks — goods stored safely and distributed efficiently to final delivery points across Nigeria.",             tags:["Storage","Last-Mile","Distribution"] },
];

const WHY = [
  { icon:"✅", title:"End-to-End Management",   body:"Every step from sourcing to shipping to delivery — you focus on your business while we handle logistics." },
  { icon:"🛡", title:"Full Documentation",      body:"Compliant with Nigerian and international trade regulations — protecting your business at every point." },
  { icon:"💰", title:"Competitive Rates",       body:"We leverage established trade relationships to offer competitive freight rates, maximising value on every shipment." },
  { icon:"🌐", title:"Global Network",          body:"Shipping partners spanning UK, USA, Europe, and Asia — giving you access to global markets through a trusted Nigerian partner." },
  { icon:"⏰", title:"On-Time Delivery",        body:"We track every shipment and keep you informed — ensuring your goods arrive when expected, every time." },
  { icon:"🤝", title:"Integrity in Every Deal", body:"Full transparency — no hidden costs, no surprises. Honest, professional logistics service you can depend on." },
];

export default function AutomobileLogisticsPage() {
  return (
    <>
      <PageHeader
        label="Automobile & Logistics · Division 04"
        title={<>Vehicle Import/Export &<br /><span className="brand-text">Freight Logistics</span></>}
        description="ANDUS International handles the import and export of vehicles and goods — connecting Nigerian businesses to global markets with reliable, end-to-end logistics support."
      />

      {/* Image strip */}
      <div className="bg-white border-b border-slate-100 py-8">
        <div className="container-xl">
          <div className="grid grid-cols-3 gap-4">
            {[
              { src:"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=85", alt:"Automobile Nigeria" },
              { src:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85",  alt:"Shipping port Nigeria" },
              { src:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=85",alt:"Cargo warehouse" },
            ].map((img) => (
              <div key={img.src} className="relative h-52 rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section bg-white">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Full Automobile & <span className="brand-text">Logistics Services</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              From vehicle importation to freight logistics and cargo clearing — ANDUS manages the full supply chain so you can focus on your business.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
            {SERVICES.map((s) => (
              <StaggerItem key={s.num}>
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden h-full group hover:border-green-200 hover:shadow-card transition-all duration-300">
                  <div className="h-1 bg-green-600" />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-2xl">{s.icon}</div>
                      <span className="font-mono text-xs text-slate-400">{s.num}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-green-700 transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => <span key={t} className="badge-green text-xs">{t}</span>)}
                    </div>
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
            <span className="eyebrow-pill mb-4 inline-flex">Why Choose ANDUS Logistics</span>
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

      {/* Full width image */}
      <div className="container-xl pb-16">
        <Reveal>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85"
              alt="ANDUS logistics trucks Nigeria"
              fill className="object-cover" sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent" />
            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white">
              <h3 className="text-2xl font-bold mb-2">Ready to Import or Export?</h3>
              <p className="text-white/75 text-sm mb-4 max-w-xs">Contact ANDUS International to discuss your automobile and logistics requirements.</p>
              <div className="flex gap-3">
                <a href={`tel:${SITE.phone[0]}`} className="btn-white text-sm">📞 Call Now</a>
                <a href={`https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%2C%20I%20need%20logistics%20services.`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-white/40 text-white text-sm font-semibold hover:border-white/70 transition-all">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <CTASection />
    </>
  );
}
