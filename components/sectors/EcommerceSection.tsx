"use client";
import { motion } from "framer-motion";
import { getSectorImage } from "@/lib/sectorImages";

export default function EcommerceSection({ config }: { config: any }) {
  const sd = config.content.sectorData || {};
  const products = sd.products || sd.categories || [];
  if (!products.length) return null;
  const pc = config.design.primaryColor;

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase" style={{ background: `${pc}10`, color: pc }}>Ürünler</span>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: config.design.secondaryColor }}>Öne Çıkan Ürünler</h3>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img src={p.image || getSectorImage("eticaret", i)} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-sm mb-1" style={{ color: config.design.secondaryColor }}>{p.title}</h4>
                {p.price && <p className="font-bold" style={{ color: pc }}>{p.price}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
