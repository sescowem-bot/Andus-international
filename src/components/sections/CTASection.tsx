import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-green-950" />

      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      {/* Content */}
      <div className="relative z-10 py-24 md:py-32">
        <div className="container-xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white/80 font-mono tracking-widest uppercase mb-8">
              Get Started Today
            </span>

            <h2
              id="cta-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
            >
              Ready to Take the Next Step
              <br />
              <span className="text-green-300">with ANDUS?</span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
              Whether you need a loan, petroleum supply, property, logistics, or contracting —
              our team is ready to serve you with speed, transparency, and integrity.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/loan-application" className="btn-white-lg group w-full sm:w-auto justify-center">
              Apply for a Loan
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-200 w-full sm:w-auto"
            >
              Explore Services
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-white/70">
              {SITE.phone.map((p) => (
                <a key={p} href={`tel:${p}`} className="flex items-center gap-2 hover:text-white transition-colors font-mono">
                  <Phone size={14} className="text-green-300" /> {p}
                </a>
              ))}
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors font-mono"
              >
                <MessageCircle size={14} className="text-green-300" /> WhatsApp: 08129972493
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
