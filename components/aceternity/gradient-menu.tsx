"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function GradientMenu({
  businessName,
  phone,
  primaryColor,
  navItems = ["Hakkımızda", "Hizmetler", "Yorumlar", "Fiyatlar", "İletişim"],
}: {
  businessName: string;
  phone?: string;
  primaryColor?: string;
  navItems?: string[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toId = (s: string) =>
    s.toLowerCase().replace(/ı/g, "i").replace(/ü/g, "u").replace(/ö/g, "o").replace(/ş/g, "s").replace(/ç/g, "c").replace(/ğ/g, "g");

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.1)] border-b border-gray-100/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${primaryColor || "var(--primary)"}, ${primaryColor || "var(--primary)"}CC)`,
              }}
            >
              {businessName?.[0] || "A"}
            </div>
            <h1
              className={cn(
                "text-lg font-bold tracking-tight transition-colors duration-300",
                scrolled ? "text-gray-900" : "text-white"
              )}
            >
              {businessName}
            </h1>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${toId(item)}`}
                onMouseEnter={() => setActiveItem(item)}
                onMouseLeave={() => setActiveItem(null)}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
              >
                {activeItem === item && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: scrolled
                        ? `${primaryColor || "var(--primary)"}15`
                        : "rgba(255,255,255,0.1)",
                    }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10",
                    scrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"
                  )}
                >
                  {item}
                </span>
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            {phone && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${phone}`}
                className={cn(
                  "hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                  scrolled
                    ? "text-white shadow-lg hover:shadow-xl"
                    : "bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:bg-white/25"
                )}
                style={scrolled ? { background: `linear-gradient(135deg, ${primaryColor || "var(--primary)"}, ${primaryColor || "var(--primary)"}CC)` } : {}}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Ara
              </motion.a>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-gray-700" : "text-white"
              )}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={menuOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-4">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    href={`#${toId(item)}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-gray-700 font-medium border-b border-gray-50 hover:pl-2 transition-all"
                  >
                    {item}
                  </motion.a>
                ))}
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center justify-center gap-2 w-full mt-4 px-5 py-3 rounded-xl text-white font-semibold"
                    style={{ background: primaryColor || "var(--primary)" }}
                  >
                    Hemen Ara
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
