import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";

const POSTS: Record<string, {
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
}> = {
  "how-to-access-sme-loans-in-nigeria": {
    category: "Financial Services",
    title: "How Nigerian SMEs Can Access Business Loans in 2025",
    date: "April 20, 2025",
    readTime: "6 min read",
    excerpt: "A practical guide to understanding loan eligibility, documentation requirements, and how to position your business for successful financing.",
    content: [
      "Access to credit remains one of the most significant challenges facing small and medium enterprises (SMEs) in Nigeria. Yet, with the right preparation and the right financial partner, securing business financing is far more achievable than many entrepreneurs believe.",
      "## Understanding Eligibility",
      "Most lenders in Nigeria — including ANDUS International — assess SME loan applications against a core set of criteria: business registration status, cash flow history, repayment capacity, and the purpose of the funding. A formally registered business with a consistent revenue record is significantly more likely to secure financing than an informal operation.",
      "This is why CAC registration is not just a legal formality — it is a gateway to formal credit. Businesses that take the step of formalisation immediately expand their access to financial services.",
      "## Documentation You Need",
      "The typical documentation package for an SME loan in Nigeria includes: a valid government-issued ID for directors, your CAC certificate and MEMART (for limited companies), six months of bank statements, a completed loan application form, and evidence of the business operation such as invoices, contracts, or trade records.",
      "Some lenders also request a business plan or financial projections, particularly for growth-stage loans or LPO funding. Having these documents organised and ready significantly accelerates the approval timeline.",
      "## How to Position Your Business for Approval",
      "Beyond documentation, lenders evaluate the character and capacity of the borrower. A clean repayment record on existing loans — whether personal or business — is a strong signal. Equally, a clear and compelling explanation of how the loan will be deployed, and how repayments will be funded, gives lenders confidence.",
      "For businesses without a prior credit history, starting with a smaller loan amount and demonstrating timely repayment is the smartest strategy for building creditworthiness over time.",
      "## Working With ANDUS",
      "At ANDUS International, we have designed our SME financing products specifically for the Nigerian business reality. We offer flexible repayment schedules, minimal collateral requirements for qualifying borrowers, and a transparent process with no hidden fees.",
      "Our loan advisors work with each applicant individually — understanding your specific business context and structuring the most appropriate financing solution. We believe in building relationships, not just processing applications.",
      "## Take the First Step",
      "If you are ready to explore financing for your business, reach out to our team today. Whether you need working capital, equipment financing, or LPO funding, ANDUS is ready to serve you with speed, integrity, and genuine care.",
    ],
  },
  "cac-registration-guide-nigeria": {
    category: "CAC Registration",
    title: "The Complete Guide to Registering Your Business with CAC in Nigeria",
    date: "March 15, 2025",
    readTime: "8 min read",
    excerpt: "Step-by-step: everything you need to know about business name registration, limited liability incorporation, and maintaining CAC compliance for Nigerian entrepreneurs.",
    content: [
      "Registering your business with the Corporate Affairs Commission (CAC) is one of the most important steps any Nigerian entrepreneur can take. It transforms your venture from an informal operation into a legally recognised entity — unlocking access to banking, credit, government contracts, and the trust of corporate clients.",
      "## Why CAC Registration Matters",
      "Beyond legal compliance, a registered business enjoys tangible commercial advantages. Banks and financial institutions require CAC documents to open corporate accounts. Government and large private sector contracts are often exclusively available to registered entities. And in the eyes of clients and partners, a formally registered business commands greater credibility and confidence.",
      "## Types of Business Registration in Nigeria",
      "The CAC recognises several business structures, each suited to different scales and purposes. A Business Name registration is ideal for sole traders and simple partnerships — it is the fastest and most affordable option. A Private Limited Company (Ltd) provides limited liability protection for shareholders and is appropriate for most SMEs seeking to grow. A Public Limited Company (PLC) is suited for larger enterprises with complex ownership. And Incorporated Trustees covers NGOs, foundations, and religious bodies.",
      "## The Registration Process",
      "The CAC registration process begins with a name availability search to confirm your chosen business name is available. Once confirmed, the relevant forms and supporting documents are prepared and submitted through the CAC's online portal. For limited companies, a Memorandum and Articles of Association (MEMART) must also be prepared and filed.",
      "Processing timelines vary by structure: business name registrations typically take three to five business days, while limited company incorporations may take five to fourteen business days depending on CAC workload.",
      "## Post-Incorporation Compliance",
      "Registration is not a one-time event. CAC-registered entities have ongoing compliance obligations including the filing of Annual Returns — a yearly declaration confirming the company's current status, directors, and shareholding. Failure to file Annual Returns can result in penalties or loss of good standing.",
      "ANDUS International handles all post-incorporation filings on behalf of clients, including Annual Returns, changes of directors or address, share capital increases, and Certified True Copy requests.",
      "## Let ANDUS Handle It",
      "Our CAC Registration team manages the entire process from name search to certificate collection — so you can focus on building your business. Contact us today for a quote and get your business formally registered quickly and affordably.",
    ],
  },
  "real-estate-investment-ogun-state": {
    category: "Real Estate",
    title: "Why Ogun State Is Becoming Nigeria's Most Attractive Real Estate Market",
    date: "February 28, 2025",
    readTime: "5 min read",
    excerpt: "With Lagos overflow, improved infrastructure, and rising land values, Ogun State is emerging as the smart investor's destination for residential and commercial property.",
    content: [
      "For years, Lagos dominated Nigeria's real estate investment conversation. But as land prices in the commercial capital reach stratospheric levels and infrastructure strain grows more evident, sophisticated investors are turning their attention to Ogun State — and the numbers are compelling.",
      "## The Lagos Overflow Effect",
      "Ogun State shares a border with Lagos and has become the primary beneficiary of the overflow of residential and commercial development as the mega-city runs out of affordable space. Towns like Sagamu, Magboro, Mowe, Ibafo, and Redemption City have seen land values double and triple in the last five years as Lagos-based professionals and investors look just beyond the border for value.",
      "## Infrastructure Investment",
      "The Ogun State government and federal authorities have significantly increased infrastructure investment in recent years — road expansions, the Lagos-Ibadan expressway rehabilitation, improved power infrastructure, and industrial estate development. These investments make Ogun State increasingly viable not just as a residential destination but as a commercial and industrial hub.",
      "## Affordability and Returns",
      "A plot of land in Magboro or Mowe that cost ₦500,000 five years ago is today valued at ₦2–₦4 million or more, depending on location and infrastructure. For residential construction, building costs in Ogun State remain lower than in Lagos, while rental yields and property values continue to appreciate strongly.",
      "## ANDUS's Position in Ogun Real Estate",
      "ANDUS International is headquartered in Magboro, Ogun State, and has been actively involved in residential development, land acquisition advisory, and construction projects across the state. Our local knowledge and established land relationships give our clients a significant advantage — access to verified titles, realistic pricing, and development guidance.",
      "## The Time to Act Is Now",
      "Real estate investment windows do not stay open forever. The Ogun State opportunity is real and documented — but as more investors recognise it, the window of affordability narrows. Contact ANDUS today to explore available land and property opportunities.",
    ],
  },
  "solar-energy-for-nigerian-businesses": {
    category: "General Contracting",
    title: "Solar Energy as a Business Strategy: A Nigerian Perspective",
    date: "February 10, 2025",
    readTime: "7 min read",
    excerpt: "How forward-thinking Nigerian businesses are eliminating grid dependency, cutting energy costs by up to 70%, and protecting operations through solar power investments.",
    content: [
      "For Nigerian businesses, energy is not just an operational input — it is one of the largest cost centres and most critical risk factors. The unreliability of the national grid has long forced businesses to depend on diesel generators, at enormous cost to both the bottom line and the environment. Solar energy has emerged as the definitive strategic answer.",
      "## The True Cost of Generator Dependency",
      "A medium-sized Nigerian business running a 50KVA generator for 12 hours daily consumes approximately 25–30 litres of diesel per hour, amounting to ₦3–₦5 million per month at current pump prices. Over five years, this represents ₦150–₦300 million in energy expenditure — with no asset created.",
      "A comparable solar installation, amortised over the same period, costs significantly less — and unlike diesel, the sun sends no invoices.",
      "## The Solar Value Proposition",
      "A properly designed solar system for a Nigerian business delivers four core benefits: energy cost reduction of 60–80%, operational continuity independent of grid or diesel supply, a depreciating asset that retains value, and a meaningful reduction in carbon footprint that increasingly matters to international partners and clients.",
      "## Industrial vs. Commercial Installations",
      "The approach to solar differs meaningfully between industrial and commercial applications. Industrial facilities — factories, cold chains, processing plants — require large-scale systems often exceeding 100KVA, with sophisticated battery banks and sometimes grid-tie configurations. Commercial offices, restaurants, and retail operations typically need smaller systems in the 10–50KVA range.",
      "ANDUS International's contracting team is experienced in both categories, with completed installations ranging from residential systems to a 150KVA industrial installation at a Sagamu manufacturing facility.",
      "## What a Good Installation Looks Like",
      "A professional solar installation begins with a proper energy audit — understanding your actual consumption patterns, peak loads, and critical circuits. From this audit, our engineers size the system correctly, source quality components from trusted suppliers, and execute installation with minimal disruption to your operations.",
      "Post-installation, we provide system documentation, operator training, and ongoing maintenance advisory to protect your investment.",
      "## Making the Investment Decision",
      "Solar is capital-intensive upfront but strongly positive over a three-to-five year horizon for most Nigerian businesses. ANDUS can also assist qualifying clients in structuring asset finance for solar installations through our Financial Services division — making the transition to solar financially accessible without a single large outlay.",
      "Reach out to our contracting team for a free energy assessment and project quotation.",
    ],
  },
  "agribusiness-opportunities-nigeria-2025": {
    category: "Agriculture",
    title: "Top Agribusiness Opportunities in Nigeria for 2025",
    date: "January 22, 2025",
    readTime: "6 min read",
    excerpt: "From fish farming to piggery, poultry to crop export — explore the high-yield agricultural sectors shaping Nigeria's food economy.",
    content: [
      "Nigeria's agricultural sector is undergoing a quiet revolution. Driven by population growth, import substitution policies, and a growing awareness of food security imperatives, agribusiness is producing returns that rival — and in some cases exceed — traditional investment vehicles.",
      "## Fish Farming (Aquaculture)",
      "Catfish and tilapia farming remain among the most accessible and reliably profitable agribusiness ventures in Nigeria. With a production cycle of four to six months and strong domestic demand, a well-managed fish farm can generate returns of 40–60% annually. The key to success is water quality management, feed quality, and disease prevention.",
      "## Piggery",
      "Commercial pig farming has seen significant growth in Nigeria's South and Southwest, driven by strong demand from restaurants, hotels, and direct consumers. Pigs have a relatively short production cycle, high feed conversion efficiency, and can be sold in multiple market channels — live, processed, or as sausage. ANDUS's own piggery operation demonstrates the commercial viability of this sector.",
      "## Poultry (Broiler & Layers)",
      "Poultry remains one of the most liquid agricultural investments — broilers reach market weight in six to eight weeks, and layer operations generate daily cash flow through egg sales. The key challenges — feed costs and disease management — are manageable with proper planning and biosecurity protocols.",
      "## Crop Cultivation for Export",
      "Nigeria's agricultural export opportunity is significantly underexploited. Crops like sesame, cashew, cocoa, shea, and ginger command strong international prices and have established export channels. For investors willing to work with smallholder farmers or manage their own cultivation, export-oriented crop farming offers both scale and premium pricing.",
      "## How ANDUS Supports Agribusiness",
      "ANDUS International operates its own farming operations and understands the practical realities of Nigerian agriculture from the inside. We can connect agricultural entrepreneurs with financing through our financial services division, land through our real estate division, and contracting support for farm infrastructure through our general contracting division.",
      "Contact our team to discuss how ANDUS can support your agribusiness ambitions in 2025.",
    ],
  },
  "petroleum-supply-management-nigeria": {
    category: "Oil & Gas",
    title: "Managing Petroleum Supply Chains for Nigerian Industrial Operations",
    date: "January 8, 2025",
    readTime: "5 min read",
    excerpt: "How industrial and manufacturing businesses across Nigeria can secure reliable, cost-effective petroleum product supply.",
    content: [
      "For Nigerian industrial and manufacturing operations, petroleum products — diesel in particular — are not optional inputs. They are the lifeline of operations in a grid-constrained environment. Yet many businesses manage their fuel supply reactively, creating unnecessary cost, operational risk, and administrative burden.",
      "## The Strategic Approach to Fuel Supply",
      "Businesses that treat fuel supply as a strategic procurement function rather than a day-to-day purchasing task consistently achieve better pricing, higher reliability, and lower administrative overhead. This means establishing formal supply agreements with trusted petroleum suppliers, negotiating volume-based pricing, and setting minimum inventory levels to protect against supply disruptions.",
      "## The Hidden Costs of Poor Fuel Management",
      "Beyond pump price, fuel supply mismanagement carries significant hidden costs: production downtime when fuel runs out, premium pricing paid during supply emergencies, tank storage costs from over-purchasing, and the management time consumed by ad hoc purchasing. A structured supply agreement eliminates most of these costs.",
      "## What to Look for in a Petroleum Supplier",
      "A quality petroleum supplier for industrial operations should offer: product quality guarantees with traceable sourcing, reliable delivery schedules with contractual commitments, flexible payment terms for established clients, and responsive account management for urgent requirements.",
      "ANDUS International's Oil & Gas division meets all of these criteria. We supply AGO, PMS, DPK, and LPG to industrial estates, factories, fleet operators, and commercial facilities across Southwest Nigeria.",
      "## Building a Supply Agreement",
      "For industrial clients consuming more than 5,000 litres per week, ANDUS offers structured supply agreements with volume pricing, scheduled delivery, and dedicated account management. These agreements protect your operations and provide cost certainty in an environment where fuel prices can be volatile.",
      "Contact our petroleum supply team today to discuss a supply agreement tailored to your operational requirements.",
    ],
  },
};

type PageParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-andus-black">
        <div className="text-center">
          <h1 className="font-display text-4xl text-andus-white mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-andus-gold hover:text-andus-gold-light transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-andus-black">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-andus-subtle hover:text-andus-gold transition-colors text-sm mb-8 font-mono"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 rounded-full border border-andus-gold/30 text-andus-gold text-xs font-mono mb-5">
              {post.category}
            </span>

            <h1 className="font-display font-light text-4xl md:text-5xl text-andus-white leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-andus-subtle text-sm font-mono">
              <div className="flex items-center gap-2">
                <Calendar size={13} className="text-andus-gold/50" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-andus-gold/50" />
                {post.readTime}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-andus-gold/20 to-transparent" />
      </section>

      {/* Article body */}
      <section className="py-20 bg-andus-dark">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="text-andus-text text-xl leading-relaxed mb-10 font-light border-l-2 border-andus-gold/40 pl-6">
              {post.excerpt}
            </p>
          </Reveal>

          <div className="space-y-6">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <Reveal key={i} delay={i * 30}>
                    <h2 className="font-display text-2xl text-andus-white font-light mt-10 mb-2">
                      {block.replace("## ", "")}
                    </h2>
                    <div className="w-12 h-px bg-andus-gold/40" />
                  </Reveal>
                );
              }
              return (
                <Reveal key={i} delay={i * 20}>
                  <p className="text-andus-subtle leading-relaxed text-[1.05rem]">{block}</p>
                </Reveal>
              );
            })}
          </div>

          {/* CTA strip */}
          <Reveal delay={100} className="mt-16">
            <div className="glass rounded-2xl p-8 border border-andus-gold/10 text-center">
              <h3 className="font-display text-2xl text-andus-white font-light mb-3">
                Ready to Work with ANDUS?
              </h3>
              <p className="text-andus-subtle text-sm mb-6">
                Get in touch with our team for personalised guidance across any of our seven business divisions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-andus-gold text-andus-black font-semibold text-sm hover:bg-andus-gold-light transition-all"
                >
                  Contact Our Team <ArrowRight size={14} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-andus-border text-andus-text text-sm hover:border-andus-gold/30 hover:text-andus-gold transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* More posts */}
      <section className="py-16 bg-andus-black border-t border-andus-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="flex items-center justify-between mb-8">
            <h3 className="font-display text-2xl text-andus-white font-light">More Insights</h3>
            <Link href="/blog" className="flex items-center gap-2 text-andus-gold text-sm hover:text-andus-gold-light transition-colors">
              View All <ArrowRight size={14} />
            </Link>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {Object.entries(POSTS)
              .filter(([s]) => s !== slug)
              .slice(0, 3)
              .map(([s, p], i) => (
                <Reveal key={s} delay={i * 60}>
                  <Link href={`/blog/${s}`} className="block premium-card rounded-xl p-6 group h-full">
                    <span className="font-mono text-xs text-andus-gold/70 mb-3 block">{p.category}</span>
                    <h4 className="font-display text-lg text-andus-white font-light mb-2 leading-snug group-hover:text-andus-gold-light transition-colors line-clamp-2">
                      {p.title}
                    </h4>
                    <div className="flex items-center gap-2 text-andus-subtle text-xs font-mono mt-3">
                      <Clock size={11} />{p.readTime}
                    </div>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
