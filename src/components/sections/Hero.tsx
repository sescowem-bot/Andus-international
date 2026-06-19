"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users, CheckCircle, TrendingUp, Phone } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { SITE } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const TRUST_PILLS = [
  { icon: Shield,     label: "Fully Registered & Licensed" },
  { icon: Award,      label: "CAC Certified"               },
  { icon: Users,      label: "500+ Clients Served"         },
  { icon: TrendingUp, label: "5+ Years Excellence"         },
];

const CHECKLIST = [
  "Fast loan processing — decisions in 24–72 hrs",
  "No hidden fees — fully transparent terms",
  "Licensed money lender operating across Nigeria",
  "Seven business divisions under one trusted roof",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_-5%,rgba(0,112,60,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50 rounded-full blur-3xl opacity-60 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-50 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-14 xl:gap-20 items-center py-16 md:py-24">

        {/* LEFT: Copy */}
        <div>
          {/* Live badge */}
          <motion.div {...fadeUp(0.05)} className="mb-7">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-xs font-semibold text-green-700 font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-badge-blink" />
              Licensed Financial Institution · Nigeria
            </span>
          </motion.div>

          {/* Headline - CMS-aware via data-cms */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.04] mb-6"
            data-cms="hero__heading"
          >
            Empowering{" "}
            <span className="relative inline-block">
              <span className="brand-text">Lives,</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8" fill="none"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
              >
                <path d="M2 6 Q50 2 100 5 Q150 8 198 4" stroke="#00703C" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
              </svg>
            </span>
            <br />
            Transforming{" "}
            <span className="text-green-700">Communities</span>
          </motion.h1>

          {/* Sub - CMS-aware */}
          <motion.p
            {...fadeUp(0.15)}
            className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl"
            data-cms="hero__description"
          >
            ANDUS International Nigeria Limited — your trusted partner across{" "}
            <strong className="text-slate-700 font-semibold">seven business divisions</strong>{" "}
            delivering accessible finance, petroleum supply, real estate, automobile logistics,
            agricultural services, and contracting with unwavering integrity.
          </motion.p>

          {/* Checklist */}
          <motion.ul {...fadeUp(0.2)} className="space-y-2.5 mb-9">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle size={15} className="text-green-500 shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div {...fadeUp(0.25)} className="flex flex-wrap gap-4 mb-10">
            <Link href="/loan-application" className="btn-primary-lg group">
              Apply for a Loan
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/investment" className="btn-outline-lg group">
              Start Investing
            </Link>
          </motion.div>

          {/* Trust pills */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 pt-6 border-t border-slate-100">
            {TRUST_PILLS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Icon size={13} className="text-green-600" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Visual card with real company image */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          {/* Main card */}
          <div className="relative bg-white rounded-3xl border border-slate-200 shadow-[0_24px_64px_rgba(0,0,0,0.1)] overflow-hidden">
            {/* Green top accent */}
            <div className="h-1.5 bg-gradient-to-r from-green-700 to-green-500 w-full" />

            {/* Real company image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={SITE.images.hero}
                alt="ANDUS International Nigeria — Professional Team"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 0px, 440px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
              {/* Live badge overlay */}
              <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-green-700 rounded-full text-white text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-badge-blink" />
                Trusted Partner · Nigeria
              </div>
            </div>

            <div className="p-7">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-mono text-[10px] text-green-700 tracking-[0.2em] uppercase mb-1">A · N · D · U · S</p>
                  <h3 className="font-bold text-slate-900 text-base">At a Glance</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-green-700 flex items-center justify-center shadow-sm">
                  <span className="font-bold text-white text-sm">NG</span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { n: 7,   s: "",  l: "Business Divisions"   },
                  { n: 500, s: "+", l: "Clients Served"       },
                  { n: 5,   s: "+", l: "Years Active"         },
                  { n: 100, s: "%", l: "CAC Licensed"         },
                ].map((stat) => (
                  <div
                    key={stat.l}
                    className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-green-200 hover:bg-green-50/40 transition-colors"
                  >
                    <div className="text-3xl font-extrabold text-slate-900 leading-none mb-1 tabular-nums">
                      <AnimatedCounter target={stat.n} suffix={stat.s} />
                    </div>
                    <div className="text-xs text-slate-500 font-medium">{stat.l}</div>
                  </div>
                ))}
              </div>

              {/* Feature list */}
              <div className="space-y-2 mb-6">
                {[
                  "Fully Registered & Licensed Money Lender",
                  "Fast Loan Approval — 24 to 72 Hours",
                  "Community-Centred, Values-Driven Service",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle size={11} className="text-green-600" />
                    </div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA strip */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/loan-application"
                  className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-green-700 text-white text-xs font-bold hover:bg-green-600 transition-colors shadow-sm"
                >
                  Apply Now <ArrowRight size={11} />
                </Link>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Hello%20ANDUS%20International%2C%20I%20would%20like%20to%20make%20an%20enquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-green-50 hover:text-green-700 transition-colors border border-slate-200"
                >
                  <Phone size={11} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-6 bg-white rounded-xl px-4 py-3 shadow-card border border-slate-200 text-xs z-10"
          >
            <div className="font-semibold text-green-700 font-mono text-[10px] mb-0.5">Ogun State, Nigeria</div>
            <div className="text-slate-500">Proudly Nigerian</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -right-6 bg-white rounded-xl px-4 py-3 shadow-card border border-slate-200 text-xs z-10"
          >
            <div className="font-semibold text-green-700 font-mono text-[10px] mb-0.5">7 Divisions</div>
            <div className="text-slate-500">One Trusted Partner</div>
          </motion.div>

          <div className="absolute -inset-4 rounded-[2.5rem] border border-green-100 -z-10 pointer-events-none" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-green-400 opacity-50" />
        <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
