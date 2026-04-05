"use client";
import { motion } from "framer-motion";

export default function About({ config }: { config: any }) {
  if (!config.content.aboutText) return null;
  const pc = config.design.primaryColor;

  return (
    <section id="hakkimizda" className="py-24 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none" style={{ background: pc }} />
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase" style={{ background: `${pc}10`, color: pc }}>Hakkımızda</span>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight" style={{ color: config.design.secondaryColor }}>
            {config.business.name}
          </h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            {config.content.aboutText}
          </motion.p>
          {/* Stats */}
          {config.business.googleRating > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: `${config.business.googleRating}`, label: "Google Puanı", suffix: "/5" },
                { value: `${config.business.reviewCount}+`, label: "Müşteri Yorumu" },
                { value: "7/24", label: "Destek" },
                { value: "100%", label: "Memnuniyet" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold mb-1" style={{ color: pc }}>{s.value}{s.suffix || ""}</p>
                  <p className="text-gray-400 text-sm">{s.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
