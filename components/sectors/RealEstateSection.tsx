"use client";
import { motion } from "framer-motion";

export default function RealEstateSection({ config }: { config: any }) {
  const properties = config.content.sectorData?.properties || [];
  if (!properties.length) return null;
  const pc = config.design.primaryColor;

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase" style={{ background: `${pc}10`, color: pc }}>Portföy</span>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: config.design.secondaryColor }}>Öne Çıkan İlanlar</h3>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 relative" style={{ background: `linear-gradient(135deg, ${pc}15, ${config.design.secondaryColor}15)` }}>
                <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-30">🏠</div>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: pc }}>{p.type}</span>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2" style={{ color: config.design.secondaryColor }}>{p.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{p.area}</span>
                  <span className="font-bold text-lg" style={{ color: pc }}>{p.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
