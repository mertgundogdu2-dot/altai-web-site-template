"use client";
import { motion } from "framer-motion";

export default function BeautySection({ config }: { config: any }) {
  const sd = config.content.sectorData || {};
  const treatments = sd.treatments || sd.specialties || [];
  if (!treatments.length) return null;
  const pc = config.design.primaryColor;
  const icons = ["💅", "💆", "✨", "🌸", "💎", "🧴", "💜", "🌺"];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 relative overflow-hidden" style={{ background: `linear-gradient(180deg, white, ${pc}05)` }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase" style={{ background: `${pc}10`, color: pc }}>Uygulamalarımız</span>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: config.design.secondaryColor }}>Güzellik Hizmetleri</h3>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl" style={{ background: `linear-gradient(135deg, ${pc}15, ${pc}05)` }}>
                {icons[i % icons.length]}
              </div>
              <h4 className="font-bold text-lg mb-3" style={{ color: config.design.secondaryColor }}>{t.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t.description}</p>
              {t.price && <p className="mt-4 font-bold text-lg" style={{ color: pc }}>{t.price}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
