"use client";
import { motion } from "framer-motion";
import { getSectorImage, normalizeSector } from "@/lib/sectorImages";

export default function ClinicSection({ config }: { config: any }) {
  const sd = config.content.sectorData || {};
  const specialties = sd.specialties || [];
  const doctors = sd.doctors || [];
  if (!specialties.length && !doctors.length) return null;
  const pc = config.design.primaryColor;
  const ns = normalizeSector(config.business.sector || "");
  const sector = ns === "disci" ? "disci" : "klinik";

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {specialties.length > 0 && (
          <>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase" style={{ background: `${pc}10`, color: pc }}>Uzmanlık Alanları</span>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: config.design.secondaryColor }}>Tedavi Alanlarımız</h3>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {specialties.map((s: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={s.image || getSectorImage(sector, i)}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="font-bold mb-2" style={{ color: config.design.secondaryColor }}>{s.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
        {doctors.length > 0 && (
          <>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight" style={{ color: config.design.secondaryColor }}>Uzman Kadromuz</h3>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((d: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src={d.image || `https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&q=80`}
                      alt={d.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: config.design.secondaryColor }}>{d.name}</h4>
                    <p className="text-sm" style={{ color: pc }}>{d.specialty}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
