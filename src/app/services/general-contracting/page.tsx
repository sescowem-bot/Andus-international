import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "General Contracting",
  description: "Professional building construction, electrical & solar installations, metal fabrication, and renovation works across Nigeria.",
};

const SERVICES = [
  { title: "Building Construction", desc: "Residential and commercial building construction from foundation to completion — quality workmanship guaranteed.", icon: "🏗" },
  { title: "Electrical Installations", desc: "Industrial, commercial, and residential electrical installations by certified engineers to Nigerian standards.", icon: "⚡" },
  { title: "Solar Energy Systems", desc: "Solar PV design, supply, and installation for homes, offices, and industrial facilities across Nigeria.", icon: "☀️" },
  { title: "Metal Fabrication", desc: "Custom metal fabrication — gates, railings, roofing structures, industrial frames, and bespoke metalwork.", icon: "🔧" },
  { title: "Renovation Works", desc: "Complete interior and exterior renovation of residential and commercial spaces to modern standards.", icon: "🏠" },
  { title: "Project Management", desc: "End-to-end construction project management ensuring timely delivery, cost control, and quality assurance.", icon: "📊" },
];

export default function GeneralContractingPage() {
  return (
    <>
      <PageHeader
        label="General Contracting · Division 06"
        title={<>Building with Precision<br />and <em className="gold-text not-italic">Integrity</em></>}
        description="Professional building construction, electrical and solar installations, metal fabrication, and renovation works — delivered on time, within budget, to exacting standards."
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
