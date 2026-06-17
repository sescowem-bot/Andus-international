import type { Metadata } from "next";
import Hero          from "@/components/sections/Hero";
import StatsBand     from "@/components/sections/StatsBand";
import AboutTeaser   from "@/components/sections/AboutTeaser";
import ServicesGrid  from "@/components/sections/ServicesGrid";
import ValuesSection from "@/components/sections/ValuesSection";
import WhyAndus      from "@/components/sections/WhyAndus";
import Testimonials  from "@/components/sections/Testimonials";
import CTASection    from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "ANDUS International Nigeria | Empowering Lives, Transforming Communities",
  description:
    "Licensed Nigerian business group offering financial services, oil & gas supply, real estate, automobile logistics, agriculture, general contracting, and CAC registration. Apply for a loan today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <AboutTeaser />
      <ServicesGrid />
      <ValuesSection />
      <WhyAndus />
      <Testimonials />
      <CTASection />
    </>
  );
}
