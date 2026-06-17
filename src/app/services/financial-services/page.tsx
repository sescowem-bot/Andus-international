import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Services",
  description: "Fast, flexible loans and financial consultation for individuals and businesses across Nigeria. Consumer loans, SME financing, asset finance, and LPO funding.",
};

const LOAN_TYPES = [
  {
    title: "Consumer Loans",
    description: "Personal loans for individuals to meet everyday needs — from education to medical expenses, home improvement, and more.",
    amount: "₦50k – ₦5M",
    tenor: "3 – 18 months",
    features: ["Quick approval", "Flexible repayment", "Minimal documentation", "Competitive rates"],
  },
  {
    title: "SME Financing",
    description: "Tailored credit facilities for small and medium enterprises to fund operations, expansion, and working capital needs.",
    amount: "₦500k – ₦20M",
    tenor: "6 – 24 months",
    features: ["Business-specific terms", "Growth capital", "Low collateral options", "Business advisory included"],
  },
  {
    title: "Asset Finance",
    description: "Finance for the acquisition of productive assets — equipment, machinery, vehicles, and business tools.",
    amount: "₦1M – ₦50M",
    tenor: "12 – 36 months",
    features: ["Asset-backed security", "Structured repayments", "Tax-efficient structure", "Asset advisory"],
  },
  {
    title: "LPO Funding",
    description: "Local Purchase Order financing that empowers contractors and suppliers to fulfill contracts without cash flow constraints.",
    amount: "Up to 80% of LPO value",
    tenor: "On project completion",
    features: ["Fast disbursement", "Contract-based", "Government & private LPOs", "Seamless processing"],
  },
];

const PROCESS = [
  { step: "01", title: "Enquire", desc: "Contact us by phone, WhatsApp, or visit our office to discuss your needs." },
  { step: "02", title: "Apply", desc: "Complete our simple application form with basic personal and financial information." },
  { step: "03", title: "Assessment", desc: "Our team reviews your application quickly with full transparency on requirements." },
  { step: "04", title: "Approval", desc: "Receive a clear offer with terms, rates, and repayment schedule." },
  { step: "05", title: "Disbursement", desc: "Funds disbursed directly to your account — fast, secure, and straightforward." },
];

export default function FinancialServicesPage() {
  return (
    <>
      <PageHeader
        label="Financial Services · Division 01"
        title={<>Accessible Finance<br />for Every <em className="gold-text not-italic">Nigerian</em></>}
        description="Fast, flexible loan products and financial consultation designed to unlock opportunity — for individuals, entrepreneurs, and businesses at every stage."
      />

      {/* Loan products */}
      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <p className="section-label mb-4">Loan Products</p>
            <h2 className="font-display font-light text-4xl text-andus-white">Find the Right Financing</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {LOAN_TYPES.map((loan, i) => (
              <Reveal key={loan.title} delay={i * 80}>
                <div className="premium-card rounded-2xl p-8 h-full group">
                  <h3 className="font-display text-2xl text-andus-white font-light mb-3 group-hover:text-andus-gold-light transition-colors">{loan.title}</h3>
                  <p className="text-andus-subtle leading-relaxed mb-6">{loan.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-andus-muted/40 rounded-xl p-4">
                      <div className="font-mono text-xs text-andus-subtle mb-1">Loan Amount</div>
                      <div className="text-andus-gold font-medium text-sm">{loan.amount}</div>
                    </div>
                    <div className="bg-andus-muted/40 rounded-xl p-4">
                      <div className="font-mono text-xs text-andus-subtle mb-1">Tenor</div>
                      <div className="text-andus-gold font-medium text-sm">{loan.tenor}</div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {loan.features.map((f) => (
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
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-andus-black">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <p className="section-label mb-4">How It Works</p>
            <h2 className="font-display font-light text-4xl text-andus-white">Simple. Transparent. Fast.</h2>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.step} delay={i * 80}>
                <div className="relative text-center group">
                  {i < PROCESS.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-andus-gold/30 to-transparent z-10" />
                  )}
                  <div className="w-12 h-12 rounded-full border border-andus-gold/30 bg-andus-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:border-andus-gold/60 group-hover:bg-andus-gold/20 transition-all">
                    <span className="font-mono text-xs text-andus-gold">{step.step}</span>
                  </div>
                  <h4 className="font-medium text-andus-text mb-2 text-sm">{step.title}</h4>
                  <p className="text-andus-subtle text-xs leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-andus-dark border-t border-andus-border/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-andus-white font-light mb-4">Ready to Apply?</h2>
            <p className="text-andus-subtle mb-8">Take the first step towards financial empowerment. Our team is ready to guide you through the process.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/loan-application"
                className="group flex items-center gap-2 px-8 py-4 rounded-lg bg-andus-gold text-andus-black font-semibold hover:bg-andus-gold-light hover:shadow-gold-sm transition-all"
              >
                Start Your Application <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/2348129972493?text=Hello%20ANDUS%2C%20I%20am%20interested%20in%20a%20loan."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-lg border border-andus-border text-andus-text hover:border-andus-gold/30 hover:text-andus-gold transition-all"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
