import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Real Estate & Construction",
  description: "Residential & commercial property sales, land acquisition, and quality construction projects across Nigeria.",
};

const OFFERINGS = [
  { title: "Property Sales", desc: "Residential and commercial properties across strategic Nigerian locations — verified titles, transparent pricing.", icon: "🏠" },
  { title: "Land Acquisition", desc: "Strategic land sourcing and purchase advisory, including due diligence and title verification.", icon: "📍" },
  { title: "Residential Construction", desc: "Quality home construction from foundation to finishing — built to your specification and budget.", icon: "🏗" },
  { title: "Commercial Projects", desc: "Office complexes, warehouses, retail spaces, and commercial developments managed end-to-end.", icon: "🏢" },
  { title: "Property Advisory", desc: "Expert guidance on real estate investment, valuation, and portfolio strategy in Nigeria.", icon: "💡" },
  { title: "Renovation Works", desc: "Complete renovation and refurbishment of existing residential and commercial properties.", icon: "🔨" },
];

export default function RealEstatePage() {
  return (
    <>
      <PageHeader
        label="Real Estate & Construction · Division 03"
        title={<>Properties Built for<br /><em className="gold-text not-italic">Lasting Value</em></>}
        description="Residential and commercial property sales, strategic land acquisition, and premium construction — creating spaces that stand as testaments to quality craftsmanship."
      />
      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <h2 className="font-display font-light text-4xl text-andus-white">What We Offer</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFERINGS.map((o, i) => (
              <Reveal key={o.title} delay={i * 70}>
                <div className="premium-card rounded-2xl p-7 h-full group">
                  <div className="text-3xl mb-4">{o.icon}</div>
                  <h3 className="font-display text-xl text-andus-white font-light mb-3 group-hover:text-andus-gold-light transition-colors">{o.title}</h3>
                  <p className="text-andus-subtle text-sm leading-relaxed">{o.desc}</p>
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
