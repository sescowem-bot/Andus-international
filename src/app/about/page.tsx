import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ValuesSection from "@/components/sections/ValuesSection";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About ANDUS International",
  description:
    "Learn about ANDUS International Nigeria Limited — a licensed, multi-sector business group built on Accountability, Nurturing, Dependability, Uniqueness, and Sustainability.",
};

const TIMELINE = [
  { year: "2019", event: "ANDUS International Nigeria Limited founded and CAC registered in Ogun State." },
  { year: "2020", event: "Launched Financial Services division, providing consumer and SME loans across Southwest Nigeria." },
  { year: "2021", event: "Expanded into Oil & Gas supply and Real Estate & Construction divisions." },
  { year: "2022", event: "Automobile & Logistics and Agriculture divisions launched, serving cross-sector clients." },
  { year: "2023", event: "General Contracting and CAC Registration divisions added, completing our seven-division model." },
  { year: "2024", event: "Surpassed 500+ client milestone, cementing ANDUS as a trusted name in Nigerian business." },
  { year: "2025+", event: "Scaling operations, expanding geographic reach, and deepening community impact across Nigeria." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Our Story"
        title={<>Built on <em className="gold-text not-italic">Trust,</em><br />Driven by Purpose</>}
        description="ANDUS International is a licensed, multi-sector business group committed to empowering lives and transforming communities across Nigeria through seven dedicated business divisions."
      />

      {/* Mission & Vision */}
      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                label: "Our Vision",
                content: "To be the most trusted, diversified, and impactful business group in Nigeria, known for ethical leadership, community transformation, and excellence across all our business divisions.",
              },
              {
                label: "Our Mission",
                content: "To provide accessible and transparent financial and business services that empower individuals and organizations to achieve their full potential, transforming lives and communities across Nigeria.",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 100}>
                <div className="premium-card rounded-2xl p-10 h-full border border-andus-gold/10">
                  <div className="w-10 h-10 rounded-lg bg-andus-gold/10 border border-andus-gold/20 flex items-center justify-center mb-6">
                    <span className="text-andus-gold text-xl">{i === 0 ? "👁" : "🎯"}</span>
                  </div>
                  <h3 className="font-display text-2xl text-andus-gold-light font-light mb-4">{item.label}</h3>
                  <p className="text-andus-subtle leading-relaxed text-lg">{item.content}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats */}
          <Reveal className="text-center mb-16">
            <p className="section-label mb-4">By the Numbers</p>
            <h2 className="font-display font-light text-4xl text-andus-white">ANDUS in Figures</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="premium-card rounded-2xl p-8 text-center">
                  <div className="font-display text-5xl font-light text-andus-white mb-2">
                    <AnimatedCounter target={parseInt(stat.number)} suffix={stat.suffix} />
                  </div>
                  <div className="font-mono text-xs text-andus-subtle tracking-wider uppercase">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-andus-black" id="timeline">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <p className="section-label mb-4">Our Journey</p>
            <h2 className="font-display font-light text-4xl text-andus-white">The ANDUS Timeline</h2>
          </Reveal>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-andus-gold/30 via-andus-gold/20 to-transparent" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 60}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-andus-gold border-2 border-andus-black mt-1.5" />

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="premium-card rounded-xl p-6">
                        <div className="font-mono text-sm text-andus-gold mb-2">{item.year}</div>
                        <p className="text-andus-subtle text-sm leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />
      <CTASection />
    </>
  );
}
