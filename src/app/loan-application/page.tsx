import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/data";
import { CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Loan Application",
  description: "Apply for a loan with ANDUS International Nigeria. Consumer loans, SME financing, asset finance, and LPO funding. Fast approval, transparent terms.",
};

const REQUIREMENTS = [
  "Valid government-issued ID (National ID, Voter's Card, Driver's Licence, or International Passport)",
  "Recent utility bill or proof of residential address (not older than 3 months)",
  "Bank statement for the last 6 months",
  "Two passport photographs",
  "Employment letter / business registration documents (for business loans)",
  "Completed ANDUS loan application form",
];

export default function LoanApplicationPage() {
  return (
    <>
      <PageHeader
        label="Financial Services"
        title={<>Apply for a <em className="gold-text not-italic">Loan</em></>}
        description="Fast, transparent, and flexible loan processing designed around your needs. Start your application today and take the next step towards financial empowerment."
      />

      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal>
                <div className="premium-card rounded-2xl p-8 border border-andus-gold/10">
                  <h3 className="font-display text-xl text-andus-gold-light font-light mb-5">Loan Requirements</h3>
                  <ul className="space-y-3">
                    {REQUIREMENTS.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-andus-subtle">
                        <CheckCircle size={13} className="text-andus-gold/60 shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="premium-card rounded-2xl p-8">
                  <h3 className="font-display text-xl text-andus-white font-light mb-4">Need Help?</h3>
                  <p className="text-andus-subtle text-sm mb-5 leading-relaxed">
                    Our loan advisors are available to guide you through the application process.
                    Don&apos;t hesitate to reach out.
                  </p>
                  <div className="space-y-3">
                    {SITE.phone.map((p) => (
                      <a key={p} href={`tel:${p}`} className="flex items-center gap-3 text-sm text-andus-subtle hover:text-andus-gold transition-colors">
                        <Phone size={13} className="text-andus-gold/50" />
                        <span className="font-mono">{p}</span>
                      </a>
                    ))}
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%2C%20I%20would%20like%20to%20apply%20for%20a%20loan.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-andus-subtle hover:text-andus-gold transition-colors"
                    >
                      <span className="text-andus-gold/50 font-mono text-xs">WA</span>
                      <span className="font-mono">08129972493</span>
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="glass rounded-2xl p-6 border border-andus-border">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Min Amount", value: "₦50,000" },
                      { label: "Max Amount", value: "₦50M+" },
                      { label: "Min Tenor", value: "3 months" },
                      { label: "Max Tenor", value: "36 months" },
                    ].map((s) => (
                      <div key={s.label} className="text-center py-3 bg-andus-black/40 rounded-lg">
                        <div className="font-mono text-[10px] text-andus-subtle mb-1">{s.label}</div>
                        <div className="text-andus-gold text-sm font-medium">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Form */}
            <Reveal delay={80} className="lg:col-span-3">
              <div className="glass rounded-2xl p-10 border border-andus-gold/10">
                <h3 className="font-display text-2xl text-andus-white font-light mb-2">Loan Application Form</h3>
                <p className="text-andus-subtle text-sm mb-8">Fill in the details below and our team will contact you within 24 hours.</p>

                <form action={`mailto:${SITE.email}`} method="post" encType="text/plain" className="space-y-5">
                  {/* Personal */}
                  <div>
                    <h4 className="font-mono text-xs text-andus-gold tracking-widest uppercase mb-4">Personal Information</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {["First Name", "Last Name"].map((f) => (
                        <div key={f}>
                          <label className="block font-mono text-xs text-andus-subtle mb-2">{f}</label>
                          <input type="text" required className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text placeholder-andus-subtle/40 focus:outline-none focus:border-andus-gold/40 transition-colors" placeholder={f} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-andus-subtle mb-2">Phone Number</label>
                      <input type="tel" required className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text placeholder-andus-subtle/40 focus:outline-none focus:border-andus-gold/40 transition-colors" placeholder="080 0000 0000" />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-andus-subtle mb-2">Email Address</label>
                      <input type="email" className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text placeholder-andus-subtle/40 focus:outline-none focus:border-andus-gold/40 transition-colors" placeholder="email@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-andus-subtle mb-2">Residential Address</label>
                    <input type="text" required className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text placeholder-andus-subtle/40 focus:outline-none focus:border-andus-gold/40 transition-colors" placeholder="Full home address" />
                  </div>

                  {/* Loan */}
                  <div className="pt-2">
                    <h4 className="font-mono text-xs text-andus-gold tracking-widest uppercase mb-4">Loan Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs text-andus-subtle mb-2">Loan Type</label>
                        <select className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text focus:outline-none focus:border-andus-gold/40 transition-colors">
                          <option>Consumer Loan</option>
                          <option>SME Financing</option>
                          <option>Asset Finance</option>
                          <option>LPO Funding</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-xs text-andus-subtle mb-2">Amount Required (₦)</label>
                        <input type="number" required className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text placeholder-andus-subtle/40 focus:outline-none focus:border-andus-gold/40 transition-colors" placeholder="500,000" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-andus-subtle mb-2">Repayment Period</label>
                      <select className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text focus:outline-none focus:border-andus-gold/40 transition-colors">
                        <option>3 months</option>
                        <option>6 months</option>
                        <option>12 months</option>
                        <option>18 months</option>
                        <option>24 months</option>
                        <option>36 months</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-andus-subtle mb-2">Employment Status</label>
                      <select className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text focus:outline-none focus:border-andus-gold/40 transition-colors">
                        <option>Employed (Salary)</option>
                        <option>Self-Employed</option>
                        <option>Business Owner</option>
                        <option>Contractor</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-andus-subtle mb-2">Purpose of Loan</label>
                    <textarea rows={3} required className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text placeholder-andus-subtle/40 focus:outline-none focus:border-andus-gold/40 transition-colors resize-none" placeholder="Briefly describe the purpose of this loan..." />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="w-full py-4 rounded-lg bg-andus-gold text-andus-black font-semibold hover:bg-andus-gold-light hover:shadow-gold-sm transition-all duration-300">
                      Submit Application
                    </button>
                    <p className="text-andus-subtle text-xs text-center mt-3">
                      By submitting, you consent to ANDUS contacting you regarding your application. All information is kept strictly confidential.
                    </p>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
