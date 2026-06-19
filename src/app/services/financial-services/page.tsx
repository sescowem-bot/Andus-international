import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Financial Services — Fast, Flexible Loans for Nigerians",
  description:
    "ANDUS International offers consumer loans, SME financing, asset finance, LPO funding, and financial consultation. Fast approval, transparent terms, no hidden fees.",
};

const LOAN_PRODUCTS = [
  {
    title:       "Consumer Loans",
    description: "Personal loans for individuals to meet everyday needs — education, medical expenses, home improvement, and more.",
    amount:      "₦50,000 – ₦5,000,000",
    tenor:       "3 – 18 months",
    features:    ["Quick approval", "Flexible repayment", "Minimal documentation", "Competitive interest rates"],
    accent:      "from-green-700 to-green-800",
  },
  {
    title:       "SME Financing",
    description: "Tailored credit facilities for small and medium enterprises to fund operations, expansion, and working capital needs.",
    amount:      "₦500,000 – ₦20,000,000",
    tenor:       "6 – 24 months",
    features:    ["Business-specific terms", "Growth capital", "Low collateral options", "Business advisory included"],
    accent:      "from-green-600 to-green-700",
  },
  {
    title:       "Asset Finance",
    description: "Finance for the acquisition of productive assets — equipment, machinery, vehicles, and business tools that generate income.",
    amount:      "₦1,000,000 – ₦50,000,000",
    tenor:       "12 – 36 months",
    features:    ["Asset-backed security", "Structured repayments", "Tax-efficient structure", "Asset advisory service"],
    accent:      "from-green-800 to-green-900",
  },
  {
    title:       "LPO Funding",
    description: "Local Purchase Order financing that empowers contractors and suppliers to fulfil contracts without cash flow constraints.",
    amount:      "Up to 80% of LPO value",
    tenor:       "On project completion",
    features:    ["Fast disbursement", "Contract-based facility", "Government & private LPOs", "Seamless processing"],
    accent:      "from-green-700 to-green-900",
  },
];

const PROCESS = [
  { step:"01", title:"Enquire",      desc:"Contact us by phone, WhatsApp, or visit our office to discuss your financial needs." },
  { step:"02", title:"Apply",        desc:"Complete our simple application form with basic personal and financial information." },
  { step:"03", title:"Assessment",   desc:"Our team reviews your application quickly with full transparency on requirements." },
  { step:"04", title:"Approval",     desc:"Receive a clear offer with terms, interest rate, and repayment schedule." },
  { step:"05", title:"Disbursement", desc:"Funds credited directly to your account — fast, secure, and straightforward." },
];

const WHY = [
  { icon:"🛡", title:"Licensed Money Lender",     body:"ANDUS is fully registered with CAC and licensed as a money lender — all loans are legally structured and transparent." },
  { icon:"⚡", title:"Fast Processing",            body:"Loan decisions in as little as 24–72 hours. We respect your time and work efficiently to get you funded quickly." },
  { icon:"💰", title:"No Hidden Fees",             body:"All charges are disclosed upfront — interest rates, processing fees, and repayment schedules clearly stated before you sign." },
  { icon:"🤝", title:"Flexible Terms",             body:"Repayment plans tailored to your income cycle and financial capacity — not a one-size-fits-all approach." },
  { icon:"📍", title:"Community-Centred",          body:"We understand the Nigerian financial landscape. Our products are designed for real Nigerian realities and needs." },
  { icon:"📊", title:"Financial Consultation",     body:"Beyond loans, our advisors provide guidance on financial planning, business growth, and investment opportunities." },
];

export default function FinancialServicesPage() {
  return (
    <>
      <PageHeader
        label="Financial Services · Division 01"
        title={<>Accessible Finance for <span className="brand-text">Every Nigerian</span></>}
        description="Fast, flexible loan products and financial consultation designed to unlock opportunity — for individuals, entrepreneurs, and businesses at every stage of growth."
        size="lg"
      />

      {/* Trust strip */}
      <div className="bg-white border-b border-slate-100 py-4">
        <div className="container-xl flex flex-wrap gap-3 justify-center">
          {["Licensed Money Lender","No Hidden Fees","24–72hr Approval","Consumer Loans","SME Financing","Asset Finance","LPO Funding"].map((p) => (
            <span key={p} className="badge-green">{p}</span>
          ))}
        </div>
      </div>

      {/* Loan products */}
      <section className="section bg-white">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">Loan Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Find the Right <span className="brand-text">Financing</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Four flexible loan products designed specifically for the Nigerian individual and business owner.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" stagger={0.08}>
            {LOAN_PRODUCTS.map((loan) => (
              <StaggerItem key={loan.title}>
                <div className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-green-200 transition-all duration-300 overflow-hidden h-full group">
                  {/* Top accent */}
                  <div className={`h-1 bg-gradient-to-r ${loan.accent}`} />
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                      {loan.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{loan.description}</p>

                    {/* Amount + Tenor */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                        <div className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mb-1">Loan Amount</div>
                        <div className="text-green-700 font-bold text-sm">{loan.amount}</div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                        <div className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mb-1">Tenor</div>
                        <div className="text-green-700 font-bold text-sm">{loan.tenor}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {loan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-slate-500">
                          <CheckCircle size={13} className="text-green-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA row */}
          <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/loan-application" className="btn-primary-lg group">
              Apply Now — It&apos;s Free <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%2C%20I%20am%20interested%20in%20a%20loan.`}
              target="_blank" rel="noopener noreferrer"
              className="btn-outline-lg"
            >
              WhatsApp Enquiry
            </a>
          </Reveal>
        </div>
      </section>

      {/* Why ANDUS Financial */}
      <section className="section bg-slate-50">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Your <span className="brand-text">Trusted</span> Financial Partner
            </h2>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
            {WHY.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 group hover:border-green-200 hover:shadow-card transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-xl mb-4 group-hover:bg-green-100 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-green-700 transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Simple. <span className="brand-text">Transparent.</span> Fast.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {PROCESS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="text-center group relative">
                  {/* Connector line */}
                  {i < PROCESS.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-green-200 to-slate-200 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full border-2 border-green-200 bg-white flex items-center justify-center mx-auto mb-4 group-hover:border-green-600 group-hover:bg-green-50 transition-all shadow-sm">
                      <span className="font-mono text-xs font-bold text-green-700">{step.step}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-2">{step.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Ready to Apply?
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Take the first step towards financial empowerment. Our team is ready to guide you
                through the process with speed, transparency, and genuine care.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link href="/loan-application" className="btn-primary-lg group">
                  Start Your Application <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%2C%20I%20would%20like%20to%20apply%20for%20a%20loan.`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-outline-lg"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                {SITE.phone.map((p) => (
                  <a key={p} href={`tel:${p}`} className="flex items-center gap-2 hover:text-green-700 transition-colors font-mono">
                    <Phone size={13} className="text-green-600" /> {p}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
