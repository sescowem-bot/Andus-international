import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CAC Registration",
  description: "Business Name, Limited Liability Company, PLC, NGO/Trustees & post-incorporation registration — fast, affordable, fully handled across Nigeria.",
};

const REGISTRATION_TYPES = [
  {
    type: "Business Name",
    desc: "Register your business name with CAC for sole traders and partnerships. Fast, affordable, and fully managed.",
    timeline: "3–5 business days",
    features: ["Name availability search", "Application filing", "Certificate collection", "Post-registration support"],
  },
  {
    type: "Limited Liability Company",
    desc: "Incorporate your private limited company (Ltd) with full CAC compliance — including MEMART and share structure.",
    timeline: "5–10 business days",
    features: ["CAC name reservation", "MEMART drafting", "Director registration", "Tax registration support"],
  },
  {
    type: "Public Limited Company",
    desc: "PLC incorporation for larger enterprises with complex ownership structures and public shareholding requirements.",
    timeline: "10–15 business days",
    features: ["Regulatory compliance", "Share structure advisory", "Full documentation", "Post-incorporation filings"],
  },
  {
    type: "NGO / Trustees",
    desc: "Register non-governmental organizations, foundations, and incorporated trustees for impact-driven entities.",
    timeline: "10–20 business days",
    features: ["Trustee registration", "Constitution drafting", "CAC filing", "Operational compliance"],
  },
];

const POST_INCORPORATION = [
  "Annual Returns Filing",
  "Change of Directors",
  "Change of Registered Address",
  "Increase in Share Capital",
  "Change of Company Name",
  "Certified True Copies (CTC)",
];

export default function CACRegistrationPage() {
  return (
    <>
      <PageHeader
        label="CAC Registration · Division 07"
        title={<>Formalise Your Business<br />with <em className="gold-text not-italic">Ease</em></>}
        description="Complete business registration services — Business Names, Limited Liability Companies, PLCs, NGOs/Trustees, and all post-incorporation requirements — fast, accurate, fully handled."
      />

      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <p className="section-label mb-4">Registration Types</p>
            <h2 className="font-display font-light text-4xl text-andus-white">Choose Your Structure</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {REGISTRATION_TYPES.map((r, i) => (
              <Reveal key={r.type} delay={i * 80}>
                <div className="premium-card rounded-2xl p-8 h-full group">
                  <h3 className="font-display text-2xl text-andus-white font-light mb-3 group-hover:text-andus-gold-light transition-colors">{r.type}</h3>
                  <p className="text-andus-subtle text-sm leading-relaxed mb-5">{r.desc}</p>
                  <div className="bg-andus-muted/40 rounded-lg px-4 py-2 inline-flex items-center gap-2 mb-5">
                    <span className="font-mono text-xs text-andus-subtle">Timeline:</span>
                    <span className="text-andus-gold text-xs font-medium">{r.timeline}</span>
                  </div>
                  <ul className="space-y-2">
                    {r.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-andus-subtle">
                        <CheckCircle size={13} className="text-andus-gold/60 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Post-incorporation */}
          <Reveal>
            <div className="premium-card rounded-2xl p-8 border border-andus-gold/10">
              <h3 className="font-display text-2xl text-andus-white font-light mb-2">Post-Incorporation Services</h3>
              <p className="text-andus-subtle mb-8">Already registered? We handle all your ongoing CAC compliance and filing requirements.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {POST_INCORPORATION.map((s) => (
                  <div key={s} className="flex items-center gap-3 text-sm text-andus-subtle py-2 border-b border-andus-border/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-andus-gold/50 shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-andus-black border-t border-andus-border/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-andus-white font-light mb-4">Start Your Registration Today</h2>
            <p className="text-andus-subtle mb-8">Let our experts handle your CAC registration from start to finish. Contact us now.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group flex items-center gap-2 px-8 py-4 rounded-lg bg-andus-gold text-andus-black font-semibold hover:bg-andus-gold-light transition-all">
                Get a Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/2348129972493?text=Hello%20ANDUS%2C%20I%20need%20CAC%20registration." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-lg border border-andus-border text-andus-text hover:border-andus-gold/30 hover:text-andus-gold transition-all">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
