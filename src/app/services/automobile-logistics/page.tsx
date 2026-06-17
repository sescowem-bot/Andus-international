import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Automobile & Logistics",
  description: "Vehicle import/export, freight logistics, customs clearance, and warehousing across Nigeria.",
};

const SERVICES = [
  { title: "Vehicle Import & Export", desc: "Full-cycle vehicle importation and export services — sourcing, shipping, documentation, and delivery.", icon: "🚢" },
  { title: "Freight Logistics", desc: "Reliable freight movement by road, sea, and air across Nigeria and international corridors.", icon: "🚛" },
  { title: "Customs Clearance", desc: "Expert customs documentation and clearance at Nigerian ports — fast, accurate, fully compliant.", icon: "📋" },
  { title: "Warehousing", desc: "Secure storage facilities for goods in transit, with inventory management and distribution support.", icon: "🏭" },
  { title: "Fleet Management", desc: "Fleet procurement, maintenance advisory, and operational support for businesses with vehicle assets.", icon: "🚗" },
  { title: "Last-Mile Delivery", desc: "Efficient last-mile delivery solutions for businesses needing reliable distribution within Nigeria.", icon: "📦" },
];

export default function AutomobilePage() {
  return (
    <>
      <PageHeader
        label="Automobile & Logistics · Division 04"
        title={<>Moving Goods and Vehicles<br /><em className="gold-text not-italic">Across Borders</em></>}
        description="End-to-end vehicle import/export, freight logistics, customs clearance, and secure warehousing — powering Nigeria's trade corridors with precision and reliability."
      />
      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="premium-card rounded-2xl p-7 h-full group">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-display text-xl text-andus-white font-light mb-3 group-hover:text-andus-gold-light transition-colors">{s.title}</h3>
                  <p className="text-andus-subtle text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
