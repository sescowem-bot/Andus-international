import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-andus-black flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-andus-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center px-6 max-w-lg mx-auto">
        <div className="font-display text-[10rem] text-andus-gold/10 leading-none font-bold select-none mb-0">
          404
        </div>
        <div className="-mt-8 mb-6">
          <h1 className="font-display text-4xl text-andus-white font-light mb-4">Page Not Found</h1>
          <p className="text-andus-subtle leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-lg bg-andus-gold text-andus-black font-semibold text-sm hover:bg-andus-gold-light hover:shadow-gold-sm transition-all duration-300"
          >
            Go Home <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg border border-andus-border text-andus-text text-sm hover:border-andus-gold/30 hover:text-andus-gold transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-andus-subtle">
          {[
            { label: "Financial Services", href: "/services/financial-services" },
            { label: "Loan Application", href: "/loan-application" },
            { label: "About ANDUS", href: "/about" },
            { label: "All Services", href: "/services" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-andus-gold transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
