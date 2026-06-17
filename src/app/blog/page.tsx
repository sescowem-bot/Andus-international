import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Business insights, financial tips, industry news, and expert perspectives from ANDUS International Nigeria.",
};

const POSTS = [
  {
    slug: "how-to-access-sme-loans-in-nigeria",
    category: "Financial Services",
    title: "How Nigerian SMEs Can Access Business Loans in 2025",
    excerpt: "A practical guide to understanding loan eligibility, documentation requirements, and how to position your business for successful financing with institutions like ANDUS International.",
    date: "April 20, 2025",
    readTime: "6 min read",
  },
  {
    slug: "cac-registration-guide-nigeria",
    category: "CAC Registration",
    title: "The Complete Guide to Registering Your Business with CAC in Nigeria",
    excerpt: "Step-by-step: everything you need to know about business name registration, limited liability incorporation, and maintaining CAC compliance for Nigerian entrepreneurs.",
    date: "March 15, 2025",
    readTime: "8 min read",
  },
  {
    slug: "real-estate-investment-ogun-state",
    category: "Real Estate",
    title: "Why Ogun State Is Becoming Nigeria's Most Attractive Real Estate Market",
    excerpt: "With Lagos overflow, improved infrastructure, and rising land values, Ogun State is emerging as the smart investor's destination for residential and commercial property.",
    date: "February 28, 2025",
    readTime: "5 min read",
  },
  {
    slug: "solar-energy-for-nigerian-businesses",
    category: "General Contracting",
    title: "Solar Energy as a Business Strategy: A Nigerian Perspective",
    excerpt: "How forward-thinking Nigerian businesses are eliminating grid dependency, cutting energy costs by up to 70%, and protecting operations through solar power investments.",
    date: "February 10, 2025",
    readTime: "7 min read",
  },
  {
    slug: "agribusiness-opportunities-nigeria-2025",
    category: "Agriculture",
    title: "Top Agribusiness Opportunities in Nigeria for 2025",
    excerpt: "From fish farming to piggery, poultry to crop export — explore the high-yield agricultural sectors that are shaping Nigeria's food economy in 2025 and beyond.",
    date: "January 22, 2025",
    readTime: "6 min read",
  },
  {
    slug: "petroleum-supply-management-nigeria",
    category: "Oil & Gas",
    title: "Managing Petroleum Supply Chains for Nigerian Industrial Operations",
    excerpt: "How industrial and manufacturing businesses across Nigeria can secure reliable, cost-effective petroleum product supply with the right partnerships and agreements.",
    date: "January 8, 2025",
    readTime: "5 min read",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Financial Services": "text-andus-gold border-andus-gold/30 bg-andus-gold/8",
  "CAC Registration": "text-purple-400 border-purple-400/30 bg-purple-400/8",
  "Real Estate": "text-blue-400 border-blue-400/30 bg-blue-400/8",
  "General Contracting": "text-orange-400 border-orange-400/30 bg-orange-400/8",
  "Agriculture": "text-emerald-400 border-emerald-400/30 bg-emerald-400/8",
  "Oil & Gas": "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Insights & Perspectives"
        title={<>Knowledge That<br /><em className="gold-text not-italic">Empowers</em></>}
        description="Expert insights, industry analysis, practical guides, and business intelligence from the ANDUS International team — helping you make better decisions."
      />

      <section className="py-24 bg-andus-dark">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured post */}
          <Reveal className="mb-8">
            <div className="premium-card rounded-2xl p-10 border border-andus-gold/10 group cursor-pointer hover:border-andus-gold/20 transition-all">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`px-3 py-1 rounded-full text-xs border font-mono ${CATEGORY_COLORS[POSTS[0].category]}`}>{POSTS[0].category}</span>
                    <span className="font-mono text-xs text-andus-subtle">Featured</span>
                  </div>
                  <h2 className="font-display text-3xl text-andus-white font-light mb-4 leading-snug group-hover:text-andus-gold-light transition-colors">
                    {POSTS[0].title}
                  </h2>
                  <p className="text-andus-subtle leading-relaxed mb-6">{POSTS[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-andus-subtle font-mono">
                      <span>{POSTS[0].date}</span>
                      <div className="flex items-center gap-1"><Clock size={11} />{POSTS[0].readTime}</div>
                    </div>
                    <div className="flex items-center gap-2 text-andus-gold text-sm font-medium">
                      Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                <div className="h-48 rounded-xl bg-gradient-to-br from-andus-gold/10 to-andus-muted/30 border border-andus-border flex items-center justify-center">
                  <span className="text-6xl opacity-40">📊</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.slice(1).map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link href={`/blog/${post.slug}`} className="block premium-card rounded-2xl p-8 h-full group flex flex-col">
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs border font-mono ${CATEGORY_COLORS[post.category] || "text-andus-gold border-andus-gold/30"}`}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-andus-white font-light mb-3 leading-snug group-hover:text-andus-gold-light transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-andus-subtle text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-andus-subtle font-mono border-t border-andus-border/40 pt-4">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-1"><Clock size={11} />{post.readTime}</div>
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
