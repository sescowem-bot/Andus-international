import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment & Cooperative",
  description: "Join the ANDUS Investment & Cooperative programme and earn returns while supporting Nigerian economic growth.",
};

const PLANS = [
  {
    tier: "Starter",
    min: "₦50,000",
    max: "₦499,999",
    returns: "12% p.a.",
    period: "6 – 12 months",
    features: ["Quarterly interest payments", "Secure investment certificate", "Dedicated advisor", "Easy liquidation"],
    highlight: false,
  },
  {
    tier: "Growth",
    min: "₦500,000",
    max: "₦4,999,999",
    returns: "15% p.a.",
    period: "12 – 24 months",
    features: ["Monthly interest payments", "Premium investment certificate", "Priority advisor access", "Compounding option available"],
    highlight: true,
  },
  {
    tier: "Enterprise",
    min: "₦5,000,000",
    max: "₦50,000,000+",
    returns: "Negotiated",
    period: "Custom tenure",
    features: ["Custom terms & structure", "Executive relationship manager", "Quarterly portfolio review", "Group investment options"],
    highlight: false,
  },
];

export default function InvestmentPage() {
  return (
    <>
      <PageHeader
        label="Investment & Cooperative"
        title={<>Grow Your Wealth with<br /><em className="gold-text not-italic">ANDUS</em></>}
        description="Partner with ANDUS International and put your capital to work across our seven business divisions — earning competitive returns while contributing to Nigeria's economic growth."
      />

      {/* Why invest */}
      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <p className="section-label mb-4">Why Invest With Us</p>
            <h2 className="font-display font-light text-4xl text-andus-white">Capital That Works for Nigeria</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: TrendingUp, title: "Competitive Returns", desc: "Earn above-market returns anchored by ANDUS's diversified revenue streams across seven business divisions." },
              { icon: Shield, title: "Secure & Regulated", desc: "All investments are managed under full CAC compliance with transparent documentation and regular reporting." },
              { icon: Users, title: "Community Impact", desc: "Your investment directly funds loans to Nigerian SMEs, infrastructure, and agricultural development — creating real impact." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="premium-card rounded-2xl p-8 text-center group h-full">
                  <div className="w-12 h-12 rounded-xl bg-andus-gold/10 border border-andus-gold/20 flex items-center justify-center mx-auto mb-5 group-hover:border-andus-gold/40 transition-colors">
                    <item.icon size={20} className="text-andus-gold" />
                  </div>
                  <h3 className="font-display text-xl text-andus-white font-light mb-3 group-hover:text-andus-gold-light transition-colors">{item.title}</h3>
                  <p className="text-andus-subtle text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Investment Plans */}
          <Reveal className="text-center mb-12">
            <p className="section-label mb-4">Investment Plans</p>
            <h2 className="font-display font-light text-4xl text-andus-white">Choose Your Investment Tier</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.tier} delay={i * 80}>
                <div className={`relative rounded-2xl p-8 h-full flex flex-col ${plan.highlight ? "bg-andus-gold/10 border-2 border-andus-gold/40 shadow-gold" : "premium-card"}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-andus-gold rounded-full text-andus-black text-xs font-bold font-mono">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-display text-2xl text-andus-white font-light mb-1">{plan.tier}</h3>
                    <p className="font-mono text-xs text-andus-subtle">{plan.min} – {plan.max}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-andus-border/50">
                    <div className="font-display text-4xl text-andus-gold font-light leading-none mb-1">{plan.returns}</div>
                    <div className="font-mono text-xs text-andus-subtle">Tenor: {plan.period}</div>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-andus-subtle">
                        <div className="w-1.5 h-1.5 rounded-full bg-andus-gold/60 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 group ${
                      plan.highlight
                        ? "bg-andus-gold text-andus-black hover:bg-andus-gold-light"
                        : "border border-andus-border text-andus-text hover:border-andus-gold/30 hover:text-andus-gold"
                    }`}
                  >
                    Start Investing <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
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
