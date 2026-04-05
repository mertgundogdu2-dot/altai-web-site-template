"use client";
import { motion } from "framer-motion";
import { getSectorImage, normalizeSector } from "@/lib/sectorImages";

export default function BeautySection({ config }: { config: any }) {
  const sd = config.content.sectorData || {};
  const treatments = sd.treatments || sd.specialties || [];
  if (!treatments.length) return null;
  const pc = config.design.primaryColor;
  const ns = normalizeSector(config.business.sector || "");
  const sector = ns === "kuafor" ? "kuafor" : "guzellik";

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 relative overflow-hidden" style={{ background: `linear-gradient(180deg, white, ${pc}05)` }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase" style={{ background: `${pc}10`, color: pc }}>Uygulamalarımız</span>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: config.design.secondaryColor }}>
            {sector === "kuafor" ? "Saç & Bakım Hizmetleri" : "Güzellik Hizmetleri"}
          </h3>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={t.image || getSectorImage(sector, i)} alt={t.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 text-center">
                <h4 className="font-bold text-lg mb-2" style={{ color: config.design.secondaryColor }}>{t.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{t.description}</p>
                {t.price && <p className="font-bold text-lg" style={{ color: pc }}>{t.price}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
