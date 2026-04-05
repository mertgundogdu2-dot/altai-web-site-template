"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function Pricing({ config }: { config: any }) {
  const sectorData = config.content.sectorData || {};
  const plans: PricingPlan[] = sectorData.pricing || [];
  if (!plans.length) return null;

  const pc = config.design.primaryColor;

  return (
    <section id="fiyatlar" className="py-24 md:py-32 px-4 md:px-8 bg-gray-50/50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${pc} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase"
            style={{ background: `${pc}10`, color: pc }}
          >
            Fiyatlandırma
          </span>
          <h3
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ color: config.design.secondaryColor }}
          >
            Size Uygun Plan
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            İhtiyaçlarınıza göre en uygun paketi seçin
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={cn(
                "relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2",
                plan.popular
                  ? "bg-white shadow-2xl border-2 scale-105"
                  : "bg-white shadow-md border border-gray-100 hover:shadow-xl"
              )}
              style={plan.popular ? { borderColor: pc } : {}}
            >
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-white text-xs font-bold"
                  style={{ background: pc }}
                >
                  En Popüler
                </div>
              )}

              <h4 className="text-xl font-bold mb-2" style={{ color: config.design.secondaryColor }}>
                {plan.title}
              </h4>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold" style={{ color: pc }}>
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="12" fill={`${pc}15`} />
                      <path d="M8 12l3 3 5-5" stroke={pc} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${config.business.phone}`}
                className={cn(
                  "block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all",
                  plan.popular
                    ? "text-white shadow-lg"
                    : "border-2 hover:shadow-md"
                )}
                style={
                  plan.popular
                    ? { background: `linear-gradient(135deg, ${pc}, ${pc}CC)` }
                    : { borderColor: `${pc}40`, color: pc }
                }
              >
                Hemen Başla
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
