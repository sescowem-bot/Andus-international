import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import CACApplicationForm from "@/components/sections/CACApplicationForm";
import { CAC_REGISTRATION_TYPES } from "@/lib/data";

export const metadata: Metadata = {
  title: "CAC Registration — Business Registration Made Simple",
  description:
    "ANDUS International handles your CAC registration from start to finish — Business Name, Limited Companies, NGO/Trustees, and more. Fast, affordable, stress-free across Nigeria.",
};

const WHY_ANDUS_CAC = [
  { title: "Fast Turnaround",       body: "Business Name in 3–5 days. Private Limited (Ltd) in 5–10 working days.",                icon: "⚡" },
  { title: "Transparent Pricing",   body: "Full cost quoted upfront — no hidden fees, no surprises, ever.",                        icon: "💰" },
  { title: "End-to-End Service",    body: "Name search to certificate delivery — we handle every step completely.",                 icon: "✅" },
  { title: "Fully Legitimate",      body: "CAC-registered agent. Official portals only — 100% authentic certificates.",            icon: "🛡" },
];

export default function CACRegistrationPage() {
  return (
    <>
      <PageHeader
        label="CAC Registration · Fast & Affordable"
        title={<>Business <span className="brand-text">Registration</span><br />Made Simple</>}
        description="ANDUS International handles your CAC registration from start to finish — Business Name, Limited Companies, Incorporated Trustees, and more. Stress-free, transparent, and fast."
      />

      {/* Pills */}
      <div className="bg-white border-b border-slate-100 py-4">
        <div className="container-xl flex flex-wrap gap-3 justify-center">
          {["Business Name","Private Limited (Ltd)","Public Limited (PLC)","Inc. Trustees","Post-Incorporation","TIN & Tax"].map((p) => (
            <span key={p} className="badge-green">{p}</span>
          ))}
        </div>
      </div>

      {/* Registration Types */}
      <section className="section bg-white" id="types">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">Registration Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Choose Your <span className="brand-text">Business Structure</span>
            </h2>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
            {CAC_REGISTRATION_TYPES.map((type) => (
              <StaggerItem key={type.id}>
                <div className="card-premium rounded-2xl overflow-hidden h-full group">
                  {/* Top accent bar — gradient for first, solid for others */}
                  <div className={`h-1 ${type.badge === "Most Popular" ? "bg-gradient-to-r from-green-700 to-green-400" : type.badge === "Most Common" ? "bg-gradient-to-r from-green-700 to-amber-400" : "bg-green-600"}`} />
                  <div className="p-6">
                    {/* Badge */}
                    {type.badge && (
                      <div className="mb-3">
                        <span className="badge-green text-xs">{type.badge}</span>
                      </div>
                    )}
                    <div className="text-3xl mb-4">{type.icon}</div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-green-700 transition-colors">{type.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{type.description}</p>

                    {/* Timeline */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200 mb-4">
                      <span className="font-mono text-[10px] text-slate-500">Timeline:</span>
                      <span className="text-green-700 font-bold text-xs">{type.timeline}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1.5">
                      {type.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                          <CheckCircle size={11} className="text-green-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose ANDUS for CAC */}
      <section className="section bg-slate-50" id="why">
        <div className="container-xl">
          <Reveal className="text-center mb-10">
            <span className="eyebrow-pill mb-4 inline-flex">Why Choose ANDUS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              We Make <span className="brand-text">Registration</span> Stress-Free
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Fast, transparent, and accurate — ANDUS handles your registration from start to finish so you can focus on building your business.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_ANDUS_CAC.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center group hover:border-green-200 hover:shadow-card transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-green-700 transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section bg-white" id="pricing">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Simple, <span className="brand-text">Transparent</span> Pricing
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              All-inclusive pricing — government CAC fees, our service charge, and processing all included. Contact us for current rates.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "Starter", title: "Business Name",
                note: "Contact us for pricing",
                timeline: "3–5 working days",
                features: ["Name availability search","CAC form preparation","Application filing","Certificate of Registration"],
                highlight: false,
              },
              {
                label: "Most Popular", title: "Private Limited (Ltd)",
                note: "Contact us for pricing",
                timeline: "5–10 working days",
                features: ["Name availability search","Memorandum & Articles","Director registration","Certificate of Incorporation","Status Report C02/C07","TIN Registration"],
                highlight: true,
              },
              {
                label: "Non-Profit", title: "Incorporated Trustees",
                note: "Contact us for pricing",
                timeline: "10–20 working days",
                features: ["Name availability search","Constitution drafting","Newspaper publication","CAC form preparation & filing","Certificate of Registration"],
                highlight: false,
              },
            ].map((plan, i) => (
              <Reveal key={plan.title} delay={i * 0.08}>
                <div className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  plan.highlight
                    ? "bg-gradient-to-br from-green-700 to-green-900 text-white shadow-[0_20px_48px_rgba(0,112,60,0.3)]"
                    : "bg-white border border-slate-200 shadow-card hover:shadow-card-hover hover:border-green-200 transition-all"
                }`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-400 rounded-full text-green-900 text-xs font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className={`font-mono text-[10px] tracking-widest uppercase mb-2 ${plan.highlight ? "text-green-300" : "text-green-700"}`}>
                    {plan.label}
                  </div>
                  <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.title}</h3>
                  <div className={`font-mono text-xs mb-4 ${plan.highlight ? "text-green-300" : "text-slate-500"}`}>{plan.note}</div>

                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-5 ${plan.highlight ? "bg-white/15" : "bg-slate-50 border border-slate-200"}`}>
                    <span className={`font-mono text-[10px] ${plan.highlight ? "text-white/70" : "text-slate-500"}`}>Timeline:</span>
                    <span className={`font-bold text-xs ${plan.highlight ? "text-white" : "text-green-700"}`}>{plan.timeline}</span>
                  </div>

                  <ul className="space-y-2.5 flex-1 mb-7">
                    {plan.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-white/80" : "text-slate-600"}`}>
                        <CheckCircle size={13} className={plan.highlight ? "text-green-300 shrink-0" : "text-green-500 shrink-0"} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#apply"
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                      plan.highlight
                        ? "bg-white text-green-700 hover:bg-green-50"
                        : "bg-green-700 text-white hover:bg-green-600"
                    }`}
                  >
                    Apply Now <ArrowRight size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="section bg-slate-50" id="apply">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">Online Application System</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Apply for CAC Registration <span className="brand-text">Online</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              Complete the form below. Our team receives your application instantly and contacts you within{" "}
              <strong className="text-slate-700">24 hours</strong> to confirm next steps.
            </p>
          </Reveal>

          <CACApplicationForm />
        </div>
      </section>

      <CTASection />
    </>
  );
}
