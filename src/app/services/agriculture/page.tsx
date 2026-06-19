import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Farming & Livestock — Feeding Nigeria, Securing Tomorrow",
  description:
    "ANDUS International operates integrated farming — piggery, cattle rearing, fish farming, poultry, and crop cultivation — contributing to Nigeria's food security agenda.",
};

const FARMING = [
  { icon:"🐷", title:"Piggery",            desc:"Commercial pig farming with quality breeds, modern rearing practices, and supply to processors and markets across Nigeria.",              tags:["Piglets","Pork","Commercial"] },
  { icon:"🐄", title:"Cattle Rearing",     desc:"Beef cattle farming for domestic meat supply — responsibly managed with attention to animal health, nutrition, and quality output.",     tags:["Beef","Dairy","Livestock"] },
  { icon:"🐟", title:"Fish Farming",       desc:"Catfish and tilapia aquaculture operations supporting Nigeria's growing demand for affordable, high-quality protein.",                   tags:["Catfish","Tilapia","Aquaculture"] },
  { icon:"🐔", title:"Poultry Farming",    desc:"Broiler and layer production — fresh eggs and poultry meat supplied to markets, hotels, restaurants, and households.",                  tags:["Broilers","Layers","Eggs"] },
  { icon:"🌾", title:"Crop Cultivation",   desc:"Seasonal and perennial crop farming contributing to food security and agricultural commerce in Ogun State and beyond.",                 tags:["Seasonal","Perennial","Export"] },
  { icon:"🌱", title:"Agro-Processing",    desc:"Value-added processing of agricultural produce for extended shelf life, improved quality, and wider domestic and export market reach.", tags:["Processing","Value-Add","Export"] },
];

const IMPACT = [
  { num:"6",    label:"Farming Operations",   sub:"Across key agricultural sectors"    },
  { num:"100%", label:"Nigerian-Sourced",     sub:"Locally produced, community-driven" },
  { num:"500+", label:"Market Connections",   sub:"Buyers, processors, and retailers"  },
];

export default function AgriculturePage() {
  return (
    <>
      <PageHeader
        label="Farming & Livestock · Division 05"
        title={<>Feeding Nigeria,<br /><span className="brand-text">Securing Tomorrow</span></>}
        description="Integrated farming operations spanning piggery, cattle rearing, fish farming, poultry, and crop cultivation — actively contributing to Nigeria's food security agenda and agricultural economy."
      />

      {/* Hero image */}
      <div className="bg-white border-b border-slate-100 py-8">
        <div className="container-xl">
          <div className="grid grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=85",
              "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=85",
              "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=85",
            ].map((src, i) => (
              <div key={i} className="relative h-52 rounded-xl overflow-hidden">
                <Image src={src} alt="ANDUS farming Nigeria" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact stats */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 py-12">
        <div className="container-xl">
          <div className="grid grid-cols-3 gap-0">
            {IMPACT.map((item, i) => (
              <div key={item.label} className={`text-center px-6 py-4 ${i < 2 ? "border-r border-white/20" : ""}`}>
                <div className="text-4xl font-extrabold text-white mb-1">{item.num}</div>
                <div className="font-bold text-white text-sm mb-1">{item.label}</div>
                <div className="text-white/60 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Farming operations */}
      <section className="section bg-white">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">Our Farming Operations</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Integrated <span className="brand-text">Agricultural Services</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              From piggery to poultry, fish farming to crop cultivation — ANDUS operates across the full agricultural value chain.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.07}>
            {FARMING.map((f) => (
              <StaggerItem key={f.title}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full group hover:border-green-200 hover:shadow-card transition-all duration-300">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-green-700 transition-colors">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{f.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((t) => <span key={t} className="badge-green text-xs">{t}</span>)}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Food security mission */}
      <section className="section bg-slate-50">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <Reveal>
              <span className="eyebrow-pill mb-4 inline-flex">Our Agricultural Mission</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                Contributing to Nigeria&apos;s <span className="brand-text">Food Security</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                Nigeria&apos;s growing population demands a stronger, more reliable domestic food production system.
                ANDUS International is doing its part — operating integrated farming facilities that supply
                fresh, quality produce directly to markets, processors, and consumers.
              </p>
              <p className="text-slate-500 leading-relaxed mb-7">
                Our farming operations are community-centred, employing local labour and sourcing
                locally — reinvesting in the communities we serve while building sustainable
                agricultural enterprises that stand the test of time.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${SITE.phone[0]}`} className="btn-primary">📞 {SITE.phone[0]}</a>
                <a href={`https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%2C%20I%20am%20interested%20in%20your%20farming%20operations.`}
                  target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp Enquiry</a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=85"
                  alt="ANDUS farming operations Nigeria"
                  fill className="object-cover" sizes="50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
