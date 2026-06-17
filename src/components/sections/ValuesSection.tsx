import { VALUES } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";

export default function ValuesSection() {
  return (
    <section className="section bg-white" id="values">
      {/* Top tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(15,107,58,0.06)_0%,transparent_65%)] pointer-events-none" />

      <div className="container-xl relative">
        <Reveal className="text-center mb-14">
          <span className="eyebrow-pill mb-5 inline-flex">Core Values</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            The <span className="brand-text">A.N.D.U.S</span> Covenant
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Every letter in our name is a promise we make to every client, partner, and community we serve.
          </p>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5" stagger={0.07}>
          {VALUES.map((value) => (
            <StaggerItem key={value.letter}>
              <div className="card-premium rounded-2xl p-6 text-center group h-full flex flex-col relative overflow-hidden">
                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Letter box */}
                <div className="w-14 h-14 rounded-2xl bg-green-50 border-2 border-green-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-700 group-hover:border-green-700 transition-all duration-300">
                  <span className="text-2xl font-extrabold text-green-700 group-hover:text-white transition-colors duration-300">
                    {value.letter}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-3 group-hover:text-green-700 transition-colors">
                  {value.word}
                </h3>

                <div className="h-px bg-slate-100 mb-3" />

                <p className="text-slate-500 text-sm leading-relaxed flex-1">{value.description}</p>

                <div className="mt-4 font-mono text-[10px] text-slate-400 tracking-widest">
                  {value.letter} · ANDUS
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
