"use client";
import { BentoGrid, BentoGridItem } from "./aceternity/bento-grid";
import { motion } from "framer-motion";

const ICONS = ["🎯", "⚡", "🏆", "💡", "🔧", "📊", "🎨", "🚀", "💎", "🌟"];

export default function Services({ config }: { config: any }) {
  const services = config.content.services || [];
  if (!services.length) return null;

  return (
    <section id="hizmetler" className="py-24 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: config.design.primaryColor }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: config.design.primaryColor }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase"
            style={{
              background: `${config.design.primaryColor}10`,
              color: config.design.primaryColor,
            }}
          >
            Hizmetlerimiz
          </span>
          <h3
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ color: config.design.secondaryColor }}
          >
            Profesyonel Çözümler
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ekibimizle size en iyi hizmeti sunuyoruz
          </p>
        </motion.div>

        <BentoGrid>
          {services.map((s: any, i: number) => (
            <BentoGridItem
              key={i}
              index={i}
              title={s.title}
              description={s.description}
              icon={ICONS[i % ICONS.length]}
              primaryColor={config.design.primaryColor}
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
