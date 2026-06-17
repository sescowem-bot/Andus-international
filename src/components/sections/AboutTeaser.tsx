import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";

const MISSION_VISION = [
  {
    label: "Our Vision",
    icon: "👁",
    text: "To be Nigeria's most trusted, diversified, and impactful business group — known for ethical leadership and community transformation.",
  },
  {
    label: "Our Mission",
    icon: "🎯",
    text: "To provide accessible, transparent financial and business services that empower individuals and organizations to achieve their full potential.",
  },
];

const HIGHLIGHTS = [
  "CAC Registered & Fully Licensed",
  "7 Business Divisions, One Partner",
  "500+ Nigerian clients served",
  "Headquartered in Ogun State",
  "Community-centred, values-driven",
];

export default function AboutTeaser() {
  return (
    <section className="section bg-white" id="about">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: Copy */}
          <div>
            <Reveal>
              <span className="eyebrow-pill mb-5 inline-flex">A.N.D.U.S — Our Identity</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Built on <span className="brand-text">Trust,</span>{" "}
                Driven by{" "}
                <span className="text-green-700">Purpose</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-lg text-slate-500 leading-relaxed mb-5">
                ANDUS International is a licensed company committed to empowering lives and transforming
                communities through innovative financial services and diversified business operations across Nigeria.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Our name is not just a brand — it is a binding pledge. Every letter represents a core value:{" "}
                <strong className="text-slate-700 font-semibold">
                  Accountability, Nurturing, Dependability, Uniqueness, and Sustainability.
                </strong>
              </p>
            </Reveal>

            {/* Highlights list */}
            <Reveal delay={0.12}>
              <ul className="space-y-3 mb-10">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle size={11} className="text-green-600" />
                    </div>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16} className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary group">
                Read Our Story <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/services" className="btn-ghost group">
                Explore Services <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </Reveal>
          </div>

          {/* Right: Visual block */}
          <div className="space-y-5">
            {/* Mission / Vision cards */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-4 mb-5">
              {MISSION_VISION.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="card-surface p-6 rounded-2xl h-full group">
                    <div className="w-10 h-10 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-2 text-green-700">{item.label}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CAC card */}
            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-gradient-to-br from-green-700 to-green-900 p-7 text-white relative overflow-hidden">
                {/* decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center font-bold text-base">
                      CAC
                    </div>
                    <div>
                      <div className="font-bold text-sm">Officially Registered</div>
                      <div className="text-white/60 text-xs font-mono mt-0.5">Corporate Affairs Commission · Nigeria</div>
                    </div>
                  </div>
                  <div className="h-px bg-white/15 mb-5" />
                  <div className="grid grid-cols-2 gap-2.5">
                    {["Financial Services", "Oil & Gas Supply", "Real Estate", "Automobile & Logistics", "Agriculture", "CAC Registration"].map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
