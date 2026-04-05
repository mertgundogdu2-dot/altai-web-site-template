"use client";
import { motion } from "framer-motion";
import { getSectorImage, normalizeSector } from "@/lib/sectorImages";

export default function Services({ config }: { config: any }) {
  const services = config.content.services || [];
  if (!services.length) return null;
  const pc = config.design.primaryColor;
  const sector = normalizeSector(config.business.sector || "");

  return (
    <section id="hizmetler" className="py-24 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none" style={{ background: pc }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none" style={{ background: pc }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase" style={{ background: `${pc}10`, color: pc }}>
            Hizmetlerimiz
          </span>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: config.design.secondaryColor }}>
            Profesyonel Çözümler
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ekibimizle size en iyi hizmeti sunuyoruz
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s: any, i: number) => {
            const isLarge = i === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${isLarge ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <div className={`overflow-hidden ${isLarge ? "aspect-[21/9]" : "aspect-[16/9]"}`}>
                  <img
                    src={s.image || getSectorImage(sector, i + 2)}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2 tracking-tight" style={{ color: config.design.secondaryColor }}>
                    {s.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
