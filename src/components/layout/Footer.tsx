import Link from "next/link";
import { SITE, SERVICES, NAV_LINKS } from "@/lib/data";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const SOCIAL_ICONS = [
  { Icon: Linkedin,  href: SITE.socials.linkedin,  label: "LinkedIn"  },
  { Icon: Twitter,   href: SITE.socials.twitter,   label: "Twitter"   },
  { Icon: Facebook,  href: SITE.socials.facebook,  label: "Facebook"  },
  { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400" role="contentinfo">

      {/* ── Top CTA strip ── */}
      <div className="border-b border-slate-800">
        <div className="container-xl py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-green-500 font-mono mb-3">
                Get Started Today
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Ready to grow with{" "}
                <span className="text-green-400">ANDUS?</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/loan-application"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold text-sm hover:bg-green-500 transition-colors shadow-brand-sm"
              >
                Apply for a Loan
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 text-sm font-medium hover:border-green-600 hover:text-green-400 transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group" aria-label="ANDUS International Home">
              <div className="w-9 h-9 rounded-lg bg-brand-gradient flex items-center justify-center shadow-brand-sm">
                <span className="font-bold text-white text-sm">A</span>
              </div>
              <div>
                <div className="font-bold text-white text-base leading-none">ANDUS</div>
                <div className="font-mono text-[9px] text-green-500/70 tracking-[0.22em] uppercase mt-0.5">International · NG</div>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              A CAC-registered, multi-sector business group empowering Nigerian individuals
              and organizations through seven dedicated business divisions.
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {SOCIAL_ICONS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 hover:border-green-600 hover:text-green-400 hover:bg-green-950 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-green-500 font-mono mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <ArrowUpRight
                      size={12}
                      className="text-slate-600 group-hover:text-green-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                    />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-green-500 font-mono mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About ANDUS",     href: "/about"            },
                { label: "Our Values",      href: "/about#values"     },
                { label: "All Services",    href: "/services"         },
                { label: "Projects",        href: "/projects"         },
                { label: "Blog & Insights", href: "/blog"             },
                { label: "Investment",      href: "/investment"       },
                { label: "Loan Application",href: "/loan-application" },
                { label: "Contact Us",      href: "/contact"          },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <ArrowUpRight
                      size={12}
                      className="text-slate-600 group-hover:text-green-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-green-500 font-mono mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              {SITE.phone.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p}`}
                    className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <Phone size={13} className="mt-0.5 text-green-600 shrink-0" />
                    <span className="font-mono">{p}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-green-400 transition-colors"
                >
                  <Phone size={13} className="mt-0.5 text-green-600 shrink-0" />
                  <span className="font-mono">WhatsApp: 08129972493</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={13} className="mt-0.5 text-green-600 shrink-0" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin size={13} className="mt-0.5 text-green-600 shrink-0" />
                  <span>{SITE.address}</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <Clock size={13} className="mt-0.5 text-green-600 shrink-0" />
                  <span>{SITE.hours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {year}{" "}
            <span className="text-slate-400">{SITE.fullName}.</span>{" "}
            All rights reserved. CAC Registered.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="font-mono text-green-900/80">NGR-CAC-2020</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
