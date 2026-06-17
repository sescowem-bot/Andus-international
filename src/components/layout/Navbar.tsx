"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/data";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      {/* ── Main navbar ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-nav border-b border-slate-200/80 py-3"
            : "bg-white/80 backdrop-blur-md border-b border-transparent py-4"
        )}
        role="banner"
      >
        <div className="container-xl flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="ANDUS International Home">
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-brand-gradient flex items-center justify-center shadow-brand-sm group-hover:shadow-brand transition-shadow duration-300">
                <span className="font-sans font-bold text-white text-sm">A</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white animate-badge-blink" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-slate-900 text-[1.05rem] leading-none tracking-tight">
                ANDUS
              </span>
              <span className="font-mono text-[9px] text-green-700/70 tracking-[0.22em] uppercase leading-none mt-0.5">
                International
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children ? handleMouseEnter(link.label) : undefined}
                onMouseLeave={() => link.children ? handleMouseLeave() : undefined}
              >
                {link.children ? (
                  <button
                    className={cn(
                      "nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors",
                      pathname.startsWith(link.href) && "text-green-700 bg-green-50"
                    )}
                    aria-expanded={activeDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={cn(
                        "transition-transform duration-200 text-slate-400",
                        activeDropdown === link.label && "rotate-180 text-green-600"
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "nav-link px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors block",
                      pathname === link.href && "text-green-700 bg-green-50"
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Mega dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[320px]"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.12)] border border-slate-200/80 overflow-hidden">
                        {/* Header */}
                        <div className="px-5 pt-5 pb-3 border-b border-slate-100 bg-slate-50/60">
                          <p className="text-xs font-semibold tracking-widest uppercase text-green-700 font-mono">
                            Our Services
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">Seven divisions. One trusted partner.</p>
                        </div>
                        {/* Items */}
                        <div className="p-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group",
                                pathname === child.href
                                  ? "bg-green-50 text-green-700"
                                  : "hover:bg-slate-50 text-slate-700 hover:text-green-700"
                              )}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="text-lg w-7 text-center">{child.icon}</span>
                              <span className="text-sm font-medium flex-1">{child.label}</span>
                              <ArrowRight size={12} className="text-slate-300 group-hover:text-green-500 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          ))}
                        </div>
                        {/* Footer CTA */}
                        <div className="px-4 pb-4 pt-2 border-t border-slate-100">
                          <Link
                            href="/services"
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-700 text-white text-xs font-semibold hover:bg-green-600 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All Services <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE.phone[0]}`}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-green-700 transition-colors font-mono"
              aria-label={`Call ${SITE.phone[0]}`}
            >
              <Phone size={12} className="text-green-600" />
              {SITE.phone[0]}
            </a>
            <div className="w-px h-4 bg-slate-200" />
            <Link
              href="/loan-application"
              className="btn-primary text-sm"
            >
              Apply for a Loan
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 z-50 h-full w-[min(340px,90vw)] bg-white shadow-2xl lg:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                  <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center">
                    <span className="font-bold text-white text-sm">A</span>
                  </div>
                  <span className="font-bold text-slate-900 text-base">ANDUS</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer body */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-0.5">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    {link.children ? (
                      <>
                        <button
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
                            mobileExpanded === link.label
                              ? "bg-green-50 text-green-700"
                              : "text-slate-800 hover:bg-slate-50"
                          )}
                          onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        >
                          {link.label}
                          <ChevronDown
                            size={14}
                            className={cn("text-slate-400 transition-transform duration-200", mobileExpanded === link.label && "rotate-180 text-green-600")}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden ml-3 pl-3 border-l-2 border-green-100 mt-1 mb-2 space-y-0.5"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-green-700 hover:bg-green-50 transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <span className="text-base">{child.icon}</span>
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
                          pathname === link.href
                            ? "bg-green-50 text-green-700"
                            : "text-slate-800 hover:bg-slate-50"
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Drawer footer */}
              <div className="px-4 pb-6 pt-3 border-t border-slate-100 space-y-3">
                <Link
                  href="/loan-application"
                  className="btn-primary w-full justify-center py-3.5 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply for a Loan
                </Link>
                <a
                  href={`tel:${SITE.phone[0]}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 text-slate-600 text-sm hover:border-green-200 hover:text-green-700 transition-colors"
                >
                  <Phone size={14} />
                  {SITE.phone[0]}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
