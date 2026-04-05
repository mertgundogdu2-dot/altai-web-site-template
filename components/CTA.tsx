"use client";
import { motion } from "framer-motion";

export default function CTA({ config }: { config: any }) {
  const pc = config.design.primaryColor;
  const sc = config.design.secondaryColor;

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${pc}, ${sc})` }}>
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ background: "white" }}
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-48 h-48 rounded-full blur-3xl opacity-15"
        style={{ background: "white" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            {config.content.ctaText}
          </h3>
          <p className="text-white/50 text-lg md:text-xl mb-12 max-w-xl mx-auto">
            Size özel çözümlerimiz hakkında bilgi almak için hemen iletişime geçin
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${config.business.phone}`}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] transition-all"
              style={{ color: pc }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              {config.content.ctaButton}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${(config.business.phone || "").replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-bold text-lg text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all"
            >
              WhatsApp ile Yazın
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
