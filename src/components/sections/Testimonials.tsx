import { TESTIMONIALS } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section bg-white" id="testimonials">
      <div className="container-xl">
        <Reveal className="text-center mb-14">
          <span className="eyebrow-pill mb-5 inline-flex">Client Stories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            What Our <span className="brand-text">Clients</span> Say
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Real experiences from real Nigerians who have trusted ANDUS International with their financial and business needs.
          </p>
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" stagger={0.08}>
          {TESTIMONIALS.map((t, i) => (
            <StaggerItem key={t.name}>
              <div
                className={`rounded-2xl p-7 h-full flex flex-col border transition-all duration-300 hover:-translate-y-1 ${
                  i === 1
                    ? "bg-gradient-to-br from-green-700 to-green-900 border-green-700 text-white shadow-brand-lg"
                    : "bg-white border-slate-200 shadow-card hover:shadow-card-hover hover:border-green-200"
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className={i === 1 ? "text-yellow-300 fill-yellow-300" : "text-yellow-400 fill-yellow-400"}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className={`text-sm leading-relaxed flex-1 mb-6 ${i === 1 ? "text-white/85" : "text-slate-600"}`}>
                  &ldquo;{t.body}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                      i === 1 ? "bg-white/15 text-white" : "bg-green-100 text-green-700"
                    }`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className={`font-bold text-sm ${i === 1 ? "text-white" : "text-slate-900"}`}>{t.name}</div>
                    <div className={`text-xs ${i === 1 ? "text-white/60" : "text-slate-400"}`}>{t.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Rating summary */}
        <Reveal delay={0.2} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <div>
            <div className="text-4xl font-extrabold text-slate-900 mb-1">5.0</div>
            <div className="flex justify-center gap-0.5 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-xs text-slate-500 font-medium">Average Rating</div>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden sm:block" />
          <div>
            <div className="text-4xl font-extrabold text-slate-900 mb-1">500<span className="text-green-600">+</span></div>
            <div className="text-xs text-slate-500 font-medium mt-1.5">Happy Clients</div>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden sm:block" />
          <div>
            <div className="text-4xl font-extrabold text-slate-900 mb-1">7</div>
            <div className="text-xs text-slate-500 font-medium mt-1.5">Business Divisions</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
