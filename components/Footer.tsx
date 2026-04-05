"use client";
import { motion } from "framer-motion";

export default function Footer({ config }: { config: any }) {
  const pc = config.design.primaryColor;

  return (
    <footer className="py-16 px-6 relative overflow-hidden" style={{ background: config.design.secondaryColor }}>
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${pc}66, transparent)` }} />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{ background: `linear-gradient(135deg, ${pc}, ${pc}CC)` }}
            >
              {config.business.name?.[0]}
            </div>
            <div>
              <p className="text-white font-bold text-lg">{config.business.name}</p>
              <p className="text-white/30 text-sm">{config.business.address}</p>
            </div>
          </motion.div>

          <div className="flex items-center gap-8">
            {config.business.phone && (
              <a href={`tel:${config.business.phone}`} className="text-white/50 hover:text-white transition text-sm flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                {config.business.phone}
              </a>
            )}
            {config.business.email && (
              <a href={`mailto:${config.business.email}`} className="text-white/50 hover:text-white transition text-sm flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                {config.business.email}
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">&copy; {new Date().getFullYear()} {config.business.name}. Tüm hakları saklıdır.</p>
          <p className="text-white/15 text-xs">
            Powered by{" "}
            <a href="https://altai.digital" className="text-white/30 hover:text-white/50 transition">
              Altai Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
