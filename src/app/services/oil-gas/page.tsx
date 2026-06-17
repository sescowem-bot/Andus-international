import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Oil & Gas Supply",
  description: "Reliable petroleum products supply — diesel, petrol, kerosene, LPG, and lubricants — for homes, businesses, and industries across Nigeria.",
};

const PRODUCTS = [
  { name: "Diesel (AGO)", desc: "Automotive Gas Oil for generators, trucks, and industrial equipment — reliable supply with competitive pricing.", icon: "⛽" },
  { name: "Premium Motor Spirit", desc: "Premium petrol for vehicles, supplied in bulk and retail quantities to stations and fleet operators.", icon: "🛢" },
  { name: "Kerosene (DPK)", desc: "Dual Purpose Kerosene for domestic cooking, lighting, and industrial applications.", icon: "🔥" },
  { name: "Liquefied Petroleum Gas", desc: "LPG supply for cooking, commercial kitchens, and industrial processes — safe and efficient.", icon: "💨" },
  { name: "Lubricants", desc: "Engine oils, transmission fluids, and industrial lubricants from trusted brands.", icon: "🛞" },
];

export default function OilGasPage() {
  return (
    <>
      <PageHeader
        label="Oil & Gas · Division 02"
        title={<>Reliable Petroleum<br /><em className="gold-text not-italic">Supply</em> Across Nigeria</>}
        description="Dependable supply of petroleum products ensuring homes, businesses, and industries across Nigeria never run dry — delivered with safety, speed, and professionalism."
      />

      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <p className="section-label mb-4">Our Products</p>
            <h2 className="font-display font-light text-4xl text-andus-white">What We Supply</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <div className="premium-card rounded-2xl p-7 h-full group">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-display text-xl text-andus-white font-light mb-3 group-hover:text-andus-gold-light transition-colors">{p.name}</h3>
                  <p className="text-andus-subtle text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-andus-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="section-label mb-4">Why Choose Us</p>
              <h2 className="font-display font-light text-3xl text-andus-white mb-6">Your Dependable Fuel Partner</h2>
              <ul className="space-y-4">
                {["Reliable, uninterrupted supply chain", "Competitive bulk and retail pricing", "Quality-assured products from certified depots", "Safe delivery by trained personnel", "Flexible payment and supply agreements", "Serving homes, stations, factories, and fleets"].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-andus-subtle text-sm">
                    <CheckCircle size={14} className="text-andus-gold/60 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="glass rounded-2xl p-8 border border-andus-gold/10">
                <h3 className="font-display text-xl text-andus-white font-light mb-6">Request a Supply Quote</h3>
                <p className="text-andus-subtle text-sm mb-6">Contact our petroleum supply team for competitive pricing on bulk and retail orders.</p>
                <div className="space-y-3">
                  <a href="tel:08068833012" className="block w-full text-center px-6 py-3 rounded-lg bg-andus-gold text-andus-black font-semibold text-sm hover:bg-andus-gold-light transition-all">
                    Call 08068833012
                  </a>
                  <a href="https://wa.me/2348129972493?text=Hello%20ANDUS%2C%20I%20need%20petroleum%20supply." target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 rounded-lg border border-andus-border text-andus-text text-sm hover:border-andus-gold/30 hover:text-andus-gold transition-all">
                    WhatsApp Enquiry
                  </a>
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
