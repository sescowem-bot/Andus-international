"use client";
import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/data";

export default function ContactPage() {
  const [status, setStatus]     = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", phone:"", service:"", message:"",
  });

  function update(e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.firstName || !formData.message || !formData.email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const CONTACTS = [
    { icon: Phone,          label: "Phone Lines",      value: SITE.phone.join("  ·  "),      href: `tel:${SITE.phone[0]}`,      external: false },
    { icon: MessageCircle,  label: "WhatsApp",         value: "08129972493 — Chat with us",  href: `https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%20International%2C%20I%20would%20like%20to%20make%20an%20enquiry.`, external: true },
    { icon: Mail,           label: "Email Address",    value: SITE.email,                    href: `mailto:${SITE.email}`,       external: false },
    { icon: MapPin,         label: "Office Address",   value: SITE.address,                  href: undefined,                    external: false },
    { icon: Clock,          label: "Business Hours",   value: SITE.hours,                    href: undefined,                    external: false },
  ];

  return (
    <>
      <PageHeader
        label="Get in Touch"
        title={<>We&apos;re Here to <span className="brand-text">Serve You</span></>}
        description="Whether you have a question, need a quote, or are ready to begin — our team is available and eager to assist across all seven of our business divisions."
      />

      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Contact info */}
            <div>
              <Reveal>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact Information</h2>
                <p className="text-slate-500 text-sm mb-8">Reach us by phone, WhatsApp, or email — we respond within one business day.</p>
              </Reveal>

              <div className="space-y-4">
                {CONTACTS.map((c, i) => (
                  <Reveal key={c.label} delay={i * 0.06}>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 group hover:border-green-200 hover:shadow-card transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                        <c.icon size={17} className="text-green-700" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mb-1">{c.label}</div>
                        {c.href ? (
                          <a
                            href={c.href}
                            target={c.external ? "_blank" : undefined}
                            rel={c.external ? "noopener noreferrer" : undefined}
                            className="text-slate-700 text-sm font-medium hover:text-green-700 transition-colors"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <span className="text-slate-700 text-sm">{c.value}</span>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Quick actions */}
              <Reveal delay={0.3} className="mt-8">
                <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-7 text-white relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/5 rounded-full" />
                  <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-3">Quick Actions</h3>
                    <div className="space-y-3">
                      <a
                        href={`https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%20International%2C%20I%20would%20like%20to%20make%20an%20enquiry.`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm font-semibold transition-all"
                      >
                        <MessageCircle size={16} className="text-green-300" />
                        Chat on WhatsApp Now
                      </a>
                      <a
                        href="/loan-application"
                        className="flex items-center gap-3 px-4 py-3 bg-white text-green-700 hover:bg-green-50 rounded-xl text-sm font-bold transition-all"
                      >
                        <Phone size={16} />
                        Apply for a Loan Today
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact form */}
            <Reveal delay={0.1}>
              <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-green-700 to-green-400" />
                <div className="p-8">
                  {status === "sent" ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle size={28} className="text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                      <p className="text-slate-500 text-sm mb-6">
                        Thank you for reaching out. Our team will respond within one business day.
                      </p>
                      <button
                        onClick={() => { setStatus("idle"); setFormData({ firstName:"",lastName:"",email:"",phone:"",service:"",message:"" }); }}
                        className="btn-outline text-sm"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Send Us a Message</h3>
                      <p className="text-slate-500 text-sm mb-7">We&apos;ll respond within one business day.</p>

                      {status === "error" && (
                        <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                          ⚠️ Something went wrong. Please try again or contact us via WhatsApp.
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="label-field">First Name *</label>
                            <input name="firstName" value={formData.firstName} onChange={update} required
                              className="input" placeholder="John" />
                          </div>
                          <div>
                            <label className="label-field">Last Name</label>
                            <input name="lastName" value={formData.lastName} onChange={update}
                              className="input" placeholder="Doe" />
                          </div>
                        </div>
                        <div>
                          <label className="label-field">Email Address *</label>
                          <input name="email" type="email" value={formData.email} onChange={update} required
                            className="input" placeholder="john@example.com" />
                        </div>
                        <div>
                          <label className="label-field">Phone Number</label>
                          <input name="phone" type="tel" value={formData.phone} onChange={update}
                            className="input" placeholder="080 0000 0000" />
                        </div>
                        <div>
                          <label className="label-field">Service of Interest</label>
                          <div className="relative">
                            <select name="service" value={formData.service} onChange={update} className="input appearance-none pr-8">
                              <option value="">Select a service...</option>
                              <option>Financial Services / Loans</option>
                              <option>Oil & Gas Supply</option>
                              <option>Real Estate & Construction</option>
                              <option>Automobile & Logistics</option>
                              <option>Farming & Livestock</option>
                              <option>General Contractors</option>
                              <option>CAC Registration</option>
                              <option>Investment / Cooperative</option>
                              <option>General Enquiry</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="label-field">Message *</label>
                          <textarea name="message" value={formData.message} onChange={update} required rows={4}
                            className="input resize-none" placeholder="Tell us how we can help you..." />
                        </div>
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="btn-primary w-full justify-center py-3.5 disabled:opacity-60"
                        >
                          {status === "sending" ? "Sending..." : "Send Message"}
                        </button>
                        <p className="text-xs text-slate-400 text-center">
                          By submitting, you consent to ANDUS contacting you. All information is kept strictly confidential.
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
