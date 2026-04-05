"use client";
import { motion } from "framer-motion";

export default function LawyerSection({ config }: { config: any }) {
  const sd = config.content.sectorData || {};
  const areas = sd.practiceAreas || sd.specialties || [];
  if (!areas.length) return null;
  const pc = config.design.primaryColor;
  const icons = ["⚖️", "📜", "🏛️", "🔒", "📋", "🤝", "💼", "🏢"];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase" style={{ background: `${pc}10`, color: pc }}>Faaliyet Alanları</span>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: config.design.secondaryColor }}>Hukuki Uzmanlıklarımız</h3>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((a: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-4">{icons[i % icons.length]}</div>
              <h4 className="font-bold mb-2" style={{ color: config.design.secondaryColor }}>{a.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
