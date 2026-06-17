import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Seven business divisions under one trusted roof — Financial Services, Oil & Gas, Real Estate, Automobile & Logistics, Agriculture, General Contracting, and CAC Registration.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Seven Divisions"
        title={<>Everything Your<br /><em className="gold-text not-italic">Business Needs</em></>}
        description="From personal finance to petroleum supply, real estate to formal business registration — ANDUS delivers comprehensive solutions built for Nigeria."
      />

      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 50}>
              <Link href={service.href} className="block premium-card rounded-2xl p-8 md:p-10 group">
                <div className="grid md:grid-cols-[80px_1fr_200px] gap-8 items-start">
                  {/* Number & Icon */}
                  <div className="flex flex-col items-start gap-3">
                    <span className="font-mono text-xs text-andus-subtle">{service.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-andus-gold/10 border border-andus-gold/20 flex items-center justify-center text-2xl group-hover:border-andus-gold/40 transition-colors">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-andus-white font-light mb-3 group-hover:text-andus-gold-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-andus-subtle leading-relaxed mb-5 max-w-2xl">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span key={f} className="px-3 py-1 rounded-full bg-andus-muted/50 text-xs text-andus-subtle border border-andus-border/50">{f}</span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-end">
                    <div className="flex items-center gap-2 text-andus-gold text-sm font-medium">
                      Explore <ArrowRight size={15} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
