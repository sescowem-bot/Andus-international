import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

interface PageHeaderProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
  size?: "default" | "lg";
}

export default function PageHeader({
  label, title, description,
  centered = true, className, size = "default",
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative pt-32 pb-20 overflow-hidden bg-white",
        className
      )}
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />

      {/* Top radial tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(15,107,58,0.07)_0%,transparent_70%)] pointer-events-none" />

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />

      <div className={cn("container-xl relative z-10", centered && "text-center")}>
        <Reveal>
          {label && (
            <div className={cn("mb-5", centered && "flex justify-center")}>
              <span className="eyebrow-pill">{label}</span>
            </div>
          )}
          <h1
            className={cn(
              "font-bold tracking-tight text-slate-900 leading-[1.05]",
              size === "lg"
                ? "text-5xl md:text-6xl lg:text-7xl"
                : "text-4xl md:text-5xl lg:text-6xl",
              centered && "mx-auto"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-5 text-lg md:text-xl text-slate-500 leading-relaxed",
                centered && "max-w-3xl mx-auto"
              )}
            >
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
