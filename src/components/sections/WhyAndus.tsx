import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";
import { WHY_REASONS } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhyAndus() {
  return (
    <section className="section bg-slate-50" id="why-andus">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl opacity-60 translate-x-1/2 -translate-y-1/3 pointer-events-none" />

      <div className="container-xl relative">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left */}
          <div>
            <Reveal>
              <span className="eyebrow-pill mb-5 inline-flex">Why Choose ANDUS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                The Partner Nigeria{" "}
                <span className="brand-text">Can Depend On</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                We combine deep local expertise with professional standards — ensuring every client
                receives transparent, timely, and trustworthy service across all seven divisions.
              </p>
            </Reveal>

            {/* CAC block */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-gradient-to-br from-green-700 to-green-900 p-7 text-white relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center font-extrabold text-base">CAC</div>
                    <div>
                      <div className="font-bold text-sm">Officially Registered</div>
                      <div className="text-white/60 text-xs font-mono mt-0.5">Corporate Affairs Commission · Nigeria</div>
                    </div>
                  </div>
                  <div className="h-px bg-white/15 mb-5" />
                  <div className="grid grid-cols-2 gap-2.5 mb-6">
                    {["Financial Services","Oil & Gas Supply","Real Estate","Automobile & Logistics","Agriculture","CAC Registration"].map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-green-300 hover:text-white transition-colors"
                  >
                    Learn more about us <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Reasons list */}
          <StaggerContainer className="space-y-3 pt-2" stagger={0.06}>
            {WHY_REASONS.map((reason) => (
              <StaggerItem key={reason.title}>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 flex items-start gap-4 group hover:border-green-200 hover:shadow-card transition-all duration-300">
                  <div className="icon-box flex-shrink-0 text-xl">{reason.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-green-700 transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{reason.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}
