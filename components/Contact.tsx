"use client";
import { motion } from "framer-motion";

export default function Contact({ config }: { config: any }) {
  const pc = config.design.primaryColor;

  return (
    <section id="iletisim" className="py-24 md:py-32 px-4 md:px-8 bg-gray-50/80 relative">
      <div className="max-w-7xl mx-auto">
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
            İletişim
          </span>
          <h3
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ color: config.design.secondaryColor }}
          >
            Bize Ulaşın
          </h3>
          <p className="text-gray-400 text-lg">Sorularınız için bize ulaşın</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: "📍", label: "Adres", value: config.business.address },
              { icon: "📞", label: "Telefon", value: config.business.phone, href: `tel:${config.business.phone}` },
              { icon: "✉️", label: "E-posta", value: config.business.email, href: `mailto:${config.business.email}` },
            ]
              .filter((i) => i.value)
              .map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium hover:underline" style={{ color: pc }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-700">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            {config.business.googleRating > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Google Puanı</p>
                  <p className="font-bold text-lg" style={{ color: pc }}>
                    {config.business.googleRating}/5{" "}
                    <span className="text-sm font-normal text-gray-400">({config.business.reviewCount} yorum)</span>
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
          >
            <h4 className="font-bold text-xl mb-6" style={{ color: config.design.secondaryColor }}>
              Bize Mesaj Gönderin
            </h4>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50/50"
                />
                <input
                  type="tel"
                  placeholder="Telefon Numaranız"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50/50"
                />
              </div>
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50/50"
              />
              <textarea
                placeholder="Mesajınız..."
                rows={4}
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition resize-none bg-gray-50/50"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full py-4 rounded-xl font-semibold text-white text-lg transition-all shadow-lg hover:shadow-xl"
                style={{ background: `linear-gradient(135deg, ${pc}, ${pc}CC)` }}
              >
                Mesaj Gönder
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
