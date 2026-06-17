import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/data";

export default function StatsBand() {
  return (
    <section className="relative bg-brand-gradient overflow-hidden" aria-label="Company statistics">
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="relative text-center px-6 py-10 md:py-12 group"
            >
              {/* Separator */}
              {i < STATS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/20" />
              )}
              {i % 2 === 0 && i > 0 && (
                <div className="md:hidden absolute top-0 left-1/4 right-1/4 h-px bg-white/20" />
              )}

              <div
                className="text-4xl md:text-5xl font-extrabold text-white leading-none mb-2 tabular-nums group-hover:scale-105 transition-transform duration-300"
                aria-label={`${stat.number}${stat.suffix} ${stat.label}`}
              >
                <AnimatedCounter target={parseInt(stat.number)} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-white/75 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-white/50 hidden md:block max-w-[140px] mx-auto leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
