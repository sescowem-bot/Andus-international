import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ANDUS International Nigeria. Phone, WhatsApp, email, and office address.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get in Touch"
        title={<>We&apos;re Here to<br /><em className="gold-text not-italic">Serve You</em></>}
        description="Whether you have a question, need a quote, or are ready to begin — our team is available and eager to assist."
      />

      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-5">
              <Reveal>
                <h2 className="font-display text-3xl text-andus-white font-light mb-8">Contact Information</h2>
              </Reveal>

              {[
                { icon: Phone, label: "Phone Lines", value: SITE.phone.join(" · "), href: `tel:${SITE.phone[0]}` },
                { icon: MessageSquare, label: "WhatsApp", value: "08129972493 — Chat with us directly", href: `https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%2C%20I%20have%20an%20enquiry.` },
                { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: MapPin, label: "Office Address", value: SITE.address, href: undefined },
                { icon: Clock, label: "Business Hours", value: SITE.hours, href: undefined },
              ].map((contact, i) => (
                <Reveal key={contact.label} delay={i * 60}>
                  <div className="premium-card rounded-xl p-6 flex items-start gap-5 group">
                    <div className="w-10 h-10 rounded-lg bg-andus-gold/10 border border-andus-gold/20 flex items-center justify-center shrink-0 group-hover:border-andus-gold/40 transition-colors">
                      <contact.icon size={16} className="text-andus-gold" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-andus-subtle mb-1">{contact.label}</div>
                      {contact.href ? (
                        <a href={contact.href} className="text-andus-text text-sm hover:text-andus-gold transition-colors" target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-andus-text text-sm">{contact.value}</span>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Contact form */}
            <Reveal delay={100}>
              <div className="glass rounded-2xl p-10 border border-andus-gold/10">
                <h3 className="font-display text-2xl text-andus-white font-light mb-2">Send Us a Message</h3>
                <p className="text-andus-subtle text-sm mb-8">We&apos;ll respond within one business day.</p>

                <form action={`mailto:${SITE.email}`} method="post" encType="text/plain" className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-andus-subtle mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        required
                        className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text placeholder-andus-subtle/50 focus:outline-none focus:border-andus-gold/40 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-andus-subtle mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        required
                        className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text placeholder-andus-subtle/50 focus:outline-none focus:border-andus-gold/40 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-andus-subtle mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text placeholder-andus-subtle/50 focus:outline-none focus:border-andus-gold/40 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-andus-subtle mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text placeholder-andus-subtle/50 focus:outline-none focus:border-andus-gold/40 transition-colors"
                      placeholder="080 0000 0000"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-andus-subtle mb-2">Service of Interest</label>
                    <select
                      name="service"
                      className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text focus:outline-none focus:border-andus-gold/40 transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option>Financial Services / Loans</option>
                      <option>Oil & Gas Supply</option>
                      <option>Real Estate & Construction</option>
                      <option>Automobile & Logistics</option>
                      <option>Agriculture & Livestock</option>
                      <option>General Contracting</option>
                      <option>CAC Registration</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-andus-subtle mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full bg-andus-black/60 border border-andus-border rounded-lg px-4 py-3 text-sm text-andus-text placeholder-andus-subtle/50 focus:outline-none focus:border-andus-gold/40 transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-andus-gold text-andus-black font-semibold text-sm hover:bg-andus-gold-light hover:shadow-gold-sm transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
