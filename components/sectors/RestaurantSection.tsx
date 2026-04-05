"use client";
import { motion } from "framer-motion";
import { getSectorImage } from "@/lib/sectorImages";

export default function RestaurantSection({ config }: { config: any }) {
  const menu = config.content.sectorData?.menu || [];
  if (!menu.length) return null;
  const pc = config.design.primaryColor;
  const sector = (config.business.sector || "").toLowerCase().includes("kafe") ? "kafe" : "restoran";

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-5 pointer-events-none" style={{ background: pc }} />
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase" style={{ background: `${pc}10`, color: pc }}>Menü</span>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: config.design.secondaryColor }}>Lezzetlerimiz</h3>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menu.map((item: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image || getSectorImage(sector, i)}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.price && (
                  <span className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-sm font-bold text-white backdrop-blur-sm" style={{ background: `${pc}CC` }}>
                    {item.price}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg mb-1" style={{ color: config.design.secondaryColor }}>{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
