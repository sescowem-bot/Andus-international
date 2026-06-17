import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of ANDUS International's completed and ongoing projects across financial services, real estate, construction, and contracting.",
};

const PROJECTS = [
  {
    id: "001",
    title: "Magboro Community Housing Development",
    category: "Real Estate & Construction",
    status: "Completed",
    year: "2024",
    description: "A 12-unit residential housing development in Magboro, Ogun State — designed for affordable homeownership with quality finishing and modern infrastructure.",
    outcomes: ["12 units completed", "₦180M project value", "100% occupation within 3 months"],
  },
  {
    id: "002",
    title: "SME Loan Disbursement Programme — Southwest Nigeria",
    category: "Financial Services",
    status: "Ongoing",
    year: "2023–Present",
    description: "A structured credit facility programme targeting small and medium enterprises across Ogun, Lagos, and Oyo States — empowering 200+ businesses with growth capital.",
    outcomes: ["200+ businesses funded", "₦500M+ disbursed", "85% repayment rate"],
  },
  {
    id: "003",
    title: "Industrial Solar Installation — Sagamu Factory Complex",
    category: "General Contracting",
    status: "Completed",
    year: "2024",
    description: "Installation of a 150KVA solar power system for a manufacturing facility in Sagamu, eliminating grid dependency and reducing energy costs by 70%.",
    outcomes: ["150KVA system installed", "70% energy cost reduction", "Zero-downtime installation"],
  },
  {
    id: "004",
    title: "Agricultural Piggery & Poultry Farm — Ijebu Ode",
    category: "Agriculture & Livestock",
    status: "Ongoing",
    year: "2022–Present",
    description: "A commercial integrated farming operation combining piggery and poultry production, supplying protein to local markets and processing partners in Ogun State.",
    outcomes: ["500+ pigs, 2,000+ birds", "Weekly market supply", "5 direct employees"],
  },
  {
    id: "005",
    title: "CAC Mass Registration Drive — Lagos & Ogun",
    category: "CAC Registration",
    status: "Completed",
    year: "2023",
    description: "A community outreach programme that formalised 150+ informal businesses across Lagos and Ogun States, supporting economic visibility and access to credit.",
    outcomes: ["150+ businesses registered", "₦3M in registration fees saved", "Community partnerships formed"],
  },
  {
    id: "006",
    title: "Diesel Supply Contract — Industrial Estate, Sagamu",
    category: "Oil & Gas",
    status: "Ongoing",
    year: "2023–Present",
    description: "A long-term petroleum supply agreement servicing an industrial estate of 20 factories with daily diesel delivery, ensuring uninterrupted industrial operations.",
    outcomes: ["20 factories served", "Daily supply reliability", "12,000+ litres per week"],
  },
];

const STATUS_COLORS: Record<string, string> = {
  Completed: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Ongoing: "text-andus-gold bg-andus-gold/10 border-andus-gold/20",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Our Work"
        title={<>Projects That Define<br /><em className="gold-text not-italic">Our Impact</em></>}
        description="A curated portfolio of ANDUS's completed and ongoing projects — from community housing and solar installations to mass SME loan programmes and agricultural operations."
      />

      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.id} delay={i * 60}>
                <div className="premium-card rounded-2xl p-8 flex flex-col h-full group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="space-y-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border font-mono ${STATUS_COLORS[project.status]}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${project.status === "Ongoing" ? "bg-andus-gold animate-pulse" : "bg-emerald-400"}`} />
                        {project.status}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-andus-subtle">{project.id}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="font-mono text-xs text-andus-gold/70 mb-2 tracking-wide">{project.category}</p>
                    <h3 className="font-display text-xl text-andus-white font-light mb-3 leading-snug group-hover:text-andus-gold-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-andus-subtle text-sm leading-relaxed mb-5">{project.description}</p>
                  </div>

                  {/* Outcomes */}
                  <div className="border-t border-andus-border/50 pt-5 space-y-2">
                    {project.outcomes.map((o) => (
                      <div key={o} className="flex items-center gap-2 text-xs text-andus-subtle">
                        <div className="w-1 h-1 rounded-full bg-andus-gold/50 shrink-0" />
                        {o}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 font-mono text-xs text-andus-subtle/50">{project.year}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
