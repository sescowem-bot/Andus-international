import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerChildren";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Real Estate & Construction — Properties Built for Lasting Value",
  description:
    "ANDUS International offers residential & commercial property sales, land acquisition, and quality construction in Ogun State and across Nigeria.",
};

const OFFERINGS = [
  { icon:"🏠", title:"Property Sales",          desc:"Residential and commercial properties across strategic Nigerian locations — verified land titles, transparent pricing, and trusted agents.",   tags:["Residential","Commercial","Verified"] },
  { icon:"📍", title:"Land Acquisition",        desc:"Strategic land sourcing and purchase advisory — including due diligence, survey verification, title documentation, and C of O assistance.",   tags:["Land","Survey","C of O"] },
  { icon:"🏗", title:"Residential Construction",desc:"Quality home construction from foundation to finishing — built to your specification, timeline, and budget with certified contractors.",        tags:["New Build","Finishing","Budget Plans"] },
  { icon:"🏢", title:"Commercial Projects",     desc:"Office complexes, warehouses, retail spaces, and commercial developments — designed, managed, and delivered end-to-end.",                      tags:["Office","Warehouse","Retail"] },
  { icon:"💡", title:"Property Advisory",       desc:"Expert guidance on real estate investment, portfolio strategy, property valuation, and market analysis in the Ogun/Lagos corridor.",          tags:["Investment","Valuation","Strategy"] },
  { icon:"🔨", title:"Renovation Works",        desc:"Complete interior and exterior renovation of existing residential and commercial properties — modern finishing, on time, within budget.",       tags:["Interior","Exterior","Modern"] },
];

const WHY_OGUN = [
  "Border with Lagos — direct access to Nigeria's commercial capital",
  "Lagos-Ibadan expressway rehabilitation driving infrastructure growth",
  "Land values in Magboro, Mowe, Ibafo appreciating 200–400% in 5 years",
  "Lower construction costs compared to Lagos Island and Mainland",
  "Government investment in industrial estates and road networks",
  "ANDUS is headquartered in Magboro — deep local market knowledge",
];

export default function RealEstatePage() {
  return (
    <>
      <PageHeader
        label="Real Estate & Construction · Division 03"
        title={<>Properties Built for <span className="brand-text">Lasting Value</span></>}
        description="Residential and commercial property sales, strategic land acquisition, and premium construction — creating spaces that stand as testaments to quality craftsmanship across Nigeria."
      />

      {/* Image strip */}
      <div className="bg-white border-b border-slate-100 py-8">
        <div className="container-xl grid grid-cols-3 gap-4">
          {[
            "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=85",
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=85",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=85",
          ].map((src, i) => (
            <div key={i} className="relative h-52 rounded-xl overflow-hidden">
              <Image src={src} alt="ANDUS real estate Nigeria" fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
      </div>

      {/* Offerings */}
      <section className="section bg-white">
        <div className="container-xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow-pill mb-4 inline-flex">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              End-to-End <span className="brand-text">Real Estate Solutions</span>
            </h2>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.07}>
            {OFFERINGS.map((o) => (
              <StaggerItem key={o.title}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full group hover:border-green-200 hover:shadow-card transition-all duration-300">
                  <div className="text-3xl mb-4">{o.icon}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-green-700 transition-colors">{o.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{o.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {o.tags.map((t) => <span key={t} className="badge-green text-xs">{t}</span>)}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Ogun State */}
      <section className="section bg-slate-50">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <Reveal>
              <span className="eyebrow-pill mb-4 inline-flex">Market Insight</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                Why Ogun State Is Nigeria&apos;s <span className="brand-text">Smartest Real Estate Market</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                As Lagos runs out of affordable land and infrastructure strain grows, savvy investors are
                turning to Ogun State — and the numbers are compelling. ANDUS is headquartered here
                and has unmatched local knowledge of the market.
              </p>
              <ul className="space-y-3">
                {WHY_OGUN.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-7">
                <a href={`tel:${SITE.phone[0]}`} className="btn-primary">📞 Speak to Our Team</a>
                <a href={`https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%2C%20I%20am%20interested%20in%20real%20estate.`} target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp Us</a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-card">
                <Image src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=85"
                  alt="Real estate Ogun State Nigeria" fill className="object-cover" sizes="50vw" />
                <div className="absolute bottom-4 left-4 bg-green-700 text-white rounded-xl px-4 py-3">
                  <div className="font-mono text-[10px] text-green-300 tracking-widest uppercase mb-1">Headquartered In</div>
                  <div className="font-bold text-sm">Magboro, Ogun State</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
