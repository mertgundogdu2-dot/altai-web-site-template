"use client";
import { motion } from "framer-motion";
import { getSectorImage } from "@/lib/sectorImages";

export default function HotelSection({ config }: { config: any }) {
  const sd = config.content.sectorData || {};
  const rooms = sd.rooms || [];
  const amenities = sd.amenities || [];
  if (!rooms.length && !amenities.length) return null;
  const pc = config.design.primaryColor;

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {rooms.length > 0 && (
          <>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase" style={{ background: `${pc}10`, color: pc }}>Odalar</span>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: config.design.secondaryColor }}>Konaklama Seçenekleri</h3>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {rooms.map((r: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group rounded-3xl bg-white border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="h-56 overflow-hidden relative">
                    <img src={r.image || getSectorImage("otel", i)} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2" style={{ color: config.design.secondaryColor }}>{r.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{r.description}</p>
                    {r.price && <p className="font-bold text-xl" style={{ color: pc }}>{r.price}<span className="text-sm font-normal text-gray-400"> / gece</span></p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
        {amenities.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map((a: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xl">{a.icon || "✓"}</span>
                <span className="text-sm font-medium text-gray-700">{a.title || a}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
