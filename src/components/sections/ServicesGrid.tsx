import Link from "next/link";
import { SERVICES } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid() {
  return (
    <section className="section bg-slate-50" id="services">
      {/* Subtle tint top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(15,107,58,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-xl relative">
        <Reveal className="text-center mb-14">
          <span className="eyebrow-pill mb-5 inline-flex">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Seven Divisions.{" "}
            <span className="brand-text">One</span>{" "}
            <span className="text-green-700">Trusted Partner.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From personal finance to petroleum supply, real estate to CAC registration —
            ANDUS delivers comprehensive solutions built for Nigeria&apos;s growth.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Featured card — spans 2 cols */}
          <Reveal className="md:col-span-2" delay={0}>
            <Link href={SERVICES[0].href} className="block h-full group">
              <div className="h-full rounded-2xl bg-gradient-to-br from-green-700 to-green-900 p-8 text-white relative overflow-hidden border border-green-800 transition-all duration-300 group-hover:shadow-brand-lg group-hover:-translate-y-1 min-h-[280px]">
                {/* BG decoration */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-7">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-2xl">
                      {SERVICES[0].icon}
                    </div>
                    <span className="font-mono text-xs text-white/50">{SERVICES[0].number}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 leading-snug">{SERVICES[0].title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-6">{SERVICES[0].description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {SERVICES[0].features.slice(0, 3).map((f) => (
                      <span key={f} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-white/85 font-medium">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-green-300">
                    Explore Service
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Remaining 6 services */}
          <StaggerContainer className="contents" stagger={0.06}>
            {SERVICES.slice(1).map((service) => (
              <StaggerItem key={service.id}>
                <Link href={service.href} className="block h-full group">
                  <div className="card-premium h-full p-6 rounded-2xl min-h-[200px] flex flex-col">
                    <div className="flex items-start justify-between mb-5">
                      <div className="icon-box text-xl">{service.icon}</div>
                      <span className="font-mono text-xs text-slate-400">{service.number}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug group-hover:text-green-700 transition-colors flex-1">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{service.short}</p>
                    <div className="flex items-center gap-1.5 text-green-700 text-xs font-semibold mt-auto">
                      Learn More
                      <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Link href="/services" className="btn-outline group">
            View All Services
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
