"use client";
import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/data";
import Link from "next/link";

const REQUIREMENTS = [
  "Valid government-issued ID (National ID, Voter's Card, Driver's Licence, or International Passport)",
  "Recent utility bill or proof of residential address (not older than 3 months)",
  "Bank statement for the last 6 months",
  "Two recent passport photographs",
  "Employment letter or business registration documents (for business loans)",
];

const LOAN_TYPES = [
  { id: "consumer",  label: "Consumer Loan",     min: "₦50,000",   max: "₦5,000,000",  tenor: "3–18 months"  },
  { id: "sme",       label: "SME Financing",     min: "₦500,000",  max: "₦20,000,000", tenor: "6–24 months"  },
  { id: "asset",     label: "Asset Finance",     min: "₦1,000,000",max: "₦50,000,000", tenor: "12–36 months" },
  { id: "lpo",       label: "LPO Funding",       min: "N/A",       max: "80% of LPO",  tenor: "On completion" },
];

type FormState = {
  firstName:string; lastName:string; phone:string; email:string; address:string;
  loanType:string; amount:string; period:string; employment:string; purpose:string;
};

const EMPTY: FormState = {
  firstName:"",lastName:"",phone:"",email:"",address:"",
  loanType:"Consumer Loan",amount:"",period:"6 months",employment:"",purpose:"",
};

export default function LoanApplicationPage() {
  const [form, setForm]     = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  function update(e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.phone || !form.amount || !form.purpose) return;
    setStatus("sending");
    try {
      const res  = await fetch("/api/loan", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHeader
        label="Financial Services"
        title={<>Apply for a <span className="brand-text">Loan</span></>}
        description="Fast, transparent, and flexible loan processing designed around your needs. Start your application today and take the next step towards financial empowerment."
      />

      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Loan types */}
              <Reveal>
                <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-green-700 to-green-400" />
                  <div className="p-6">
                    <h3 className="font-bold text-slate-900 text-base mb-5">Loan Products</h3>
                    <div className="space-y-3">
                      {LOAN_TYPES.map((lt) => (
                        <div key={lt.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-green-200 hover:bg-green-50/30 transition-all">
                          <div className="font-bold text-slate-900 text-sm mb-2">{lt.label}</div>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div>
                              <div className="text-slate-400 font-mono mb-0.5">MIN</div>
                              <div className="text-green-700 font-semibold">{lt.min}</div>
                            </div>
                            <div>
                              <div className="text-slate-400 font-mono mb-0.5">MAX</div>
                              <div className="text-green-700 font-semibold">{lt.max}</div>
                            </div>
                            <div>
                              <div className="text-slate-400 font-mono mb-0.5">TENOR</div>
                              <div className="text-slate-600 font-medium">{lt.tenor}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Requirements */}
              <Reveal delay={0.08}>
                <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6">
                  <h3 className="font-bold text-slate-900 text-base mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    {REQUIREMENTS.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm text-slate-500">
                        <CheckCircle size={13} className="text-green-500 shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Contact */}
              <Reveal delay={0.12}>
                <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full" />
                  <div className="relative z-10">
                    <h3 className="font-bold mb-2">Need Help?</h3>
                    <p className="text-white/70 text-xs mb-4 leading-relaxed">
                      Our loan advisors are available to guide you through the process.
                    </p>
                    <div className="space-y-2">
                      {SITE.phone.map((p) => (
                        <a key={p} href={`tel:${p}`}
                          className="flex items-center gap-2 text-xs text-white/80 hover:text-white transition-colors font-mono">
                          <Phone size={11} className="text-green-300" /> {p}
                        </a>
                      ))}
                      <a
                        href={`https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%2C%20I%20would%20like%20to%20apply%20for%20a%20loan.`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-green-300 hover:text-white transition-colors font-mono"
                      >
                        <span>WA</span> 08129972493
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={0.08} className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-green-700 to-green-400" />
                <div className="p-8">
                  {status === "sent" ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle size={28} className="text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Application Submitted!</h3>
                      <p className="text-slate-500 text-sm mb-2 max-w-xs mx-auto leading-relaxed">
                        Thank you, <strong>{form.firstName}</strong>. Our team will contact you within 24–72 hours to discuss your loan.
                      </p>
                      <p className="text-slate-400 text-xs mb-6">Loan Type: {form.loanType} · Amount: ₦{Number(form.amount||0).toLocaleString()}</p>
                      <div className="flex flex-wrap justify-center gap-3">
                        <a href={`tel:${SITE.phone[0]}`} className="btn-outline text-sm">
                          <Phone size={13} /> Call Us
                        </a>
                        <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
                          className="btn-primary text-sm">
                          WhatsApp Us <ArrowRight size={13} />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Loan Application Form</h3>
                      <p className="text-slate-500 text-sm mb-7">
                        Fill in the details below and our team will contact you within <strong>24–72 hours</strong>.
                      </p>

                      {status === "error" && (
                        <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                          ⚠️ Something went wrong. Please try again or contact us via WhatsApp at 08129972493.
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Personal */}
                        <div>
                          <div className="font-mono text-[10px] text-green-700 tracking-widest uppercase mb-4 pb-2 border-b border-slate-100">
                            Personal Information
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="label-field">First Name *</label>
                              <input name="firstName" value={form.firstName} onChange={update} required className="input" placeholder="First name" />
                            </div>
                            <div>
                              <label className="label-field">Last Name *</label>
                              <input name="lastName" value={form.lastName} onChange={update} required className="input" placeholder="Last name" />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="label-field">Phone Number *</label>
                            <input name="phone" type="tel" value={form.phone} onChange={update} required className="input" placeholder="08012345678" />
                          </div>
                          <div>
                            <label className="label-field">Email Address</label>
                            <input name="email" type="email" value={form.email} onChange={update} className="input" placeholder="email@example.com" />
                          </div>
                        </div>

                        <div>
                          <label className="label-field">Residential Address *</label>
                          <input name="address" value={form.address} onChange={update} required className="input" placeholder="Full home address" />
                        </div>

                        {/* Loan Details */}
                        <div>
                          <div className="font-mono text-[10px] text-green-700 tracking-widest uppercase mb-4 pb-2 border-b border-slate-100">
                            Loan Details
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="label-field">Loan Type</label>
                              <div className="relative">
                                <select name="loanType" value={form.loanType} onChange={update} className="input appearance-none pr-8">
                                  <option>Consumer Loan</option>
                                  <option>SME Financing</option>
                                  <option>Asset Finance</option>
                                  <option>LPO Funding</option>
                                </select>
                              </div>
                            </div>
                            <div>
                              <label className="label-field">Amount Required (₦) *</label>
                              <input name="amount" type="number" value={form.amount} onChange={update} required className="input" placeholder="500000" />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="label-field">Repayment Period</label>
                            <div className="relative">
                              <select name="period" value={form.period} onChange={update} className="input appearance-none pr-8">
                                {["3 months","6 months","12 months","18 months","24 months","36 months"].map(p => (
                                  <option key={p}>{p}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="label-field">Employment Status *</label>
                            <div className="relative">
                              <select name="employment" value={form.employment} onChange={update} required className="input appearance-none pr-8">
                                <option value="">Select...</option>
                                <option>Employed (Salary)</option>
                                <option>Self-Employed</option>
                                <option>Business Owner</option>
                                <option>Contractor</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="label-field">Purpose of Loan *</label>
                          <textarea name="purpose" value={form.purpose} onChange={update} required rows={3}
                            className="input resize-none"
                            placeholder="Briefly describe the purpose of this loan..." />
                        </div>

                        <button type="submit" disabled={status === "sending"}
                          className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60">
                          {status === "sending" ? "Submitting..." : "Submit Application"}
                          {status !== "sending" && <ArrowRight size={16} />}
                        </button>

                        <p className="text-xs text-slate-400 text-center">
                          By submitting, you consent to ANDUS contacting you regarding your application.
                          All information is kept strictly confidential.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
