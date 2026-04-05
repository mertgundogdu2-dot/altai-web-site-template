"use client";
import { InfiniteMovingCards } from "./aceternity/infinite-moving-cards";
import { motion } from "framer-motion";

export default function Reviews({ config }: { config: any }) {
  const testimonials = config.content.testimonials || [];
  if (!testimonials.length) return null;

  const items = testimonials.map((t: any) => ({
    quote: t.text,
    name: t.name,
    rating: t.rating,
  }));

  return (
    <section
      id="yorumlar"
      className="py-24 md:py-32 px-4 md:px-8 relative overflow-hidden"
      style={{ background: config.design.secondaryColor }}
    >
      {/* Radial gradient decoration */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${config.design.primaryColor}33, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase bg-white/10 text-white/70">
            Müşteri Yorumları
          </span>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Müşterilerimiz Ne Diyor?
          </h3>
          <p className="text-white/40 text-lg">Güvenilir hizmet, mutlu müşteriler</p>
        </motion.div>

        <InfiniteMovingCards
          items={items}
          direction="left"
          speed="slow"
          primaryColor={config.design.primaryColor}
        />

        {testimonials.length > 2 && (
          <div className="mt-4">
            <InfiniteMovingCards
              items={[...items].reverse()}
              direction="right"
              speed="normal"
              primaryColor={config.design.primaryColor}
            />
          </div>
        )}
      </div>
    </section>
  );
}
