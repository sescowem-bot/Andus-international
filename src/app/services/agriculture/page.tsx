import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Agriculture & Livestock",
  description: "Integrated farming operations — piggery, cattle, fish farming, poultry, and crop cultivation — contributing to Nigeria's food security.",
};

const FARMING = [
  { title: "Piggery", desc: "Commercial pig farming with quality breeds, modern rearing practices, and supply to processors and markets.", icon: "🐷" },
  { title: "Cattle Rearing", desc: "Beef cattle farming for domestic meat supply — responsibly managed with attention to animal health and quality.", icon: "🐄" },
  { title: "Fish Farming", desc: "Catfish and tilapia aquaculture operations supporting Nigeria's growing demand for affordable protein.", icon: "🐟" },
  { title: "Poultry Farming", desc: "Broiler and layer production — eggs and poultry meat supplied to markets, hotels, and households.", icon: "🐔" },
  { title: "Crop Cultivation", desc: "Seasonal and perennial crop farming contributing to food security and agricultural commerce in Nigeria.", icon: "🌾" },
  { title: "Agro-Processing", desc: "Value-added processing of agricultural produce for extended shelf life and market reach.", icon: "🌱" },
];

export default function AgriculturePage() {
  return (
    <>
      <PageHeader
        label="Agriculture & Livestock · Division 05"
        title={<>Feeding Nigeria,<br /><em className="gold-text not-italic">Securing Tomorrow</em></>}
        description="Integrated farming operations spanning piggery, cattle rearing, fish farming, poultry, and crop cultivation — actively contributing to Nigeria's food security agenda."
      />
      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FARMING.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="premium-card rounded-2xl p-7 h-full group">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="font-display text-xl text-andus-white font-light mb-3 group-hover:text-andus-gold-light transition-colors">{f.title}</h3>
                  <p className="text-andus-subtle text-sm leading-relaxed">{f.desc}</p>
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
