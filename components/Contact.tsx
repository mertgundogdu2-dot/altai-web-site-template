export default function Contact({ config }: { config: any }) {
  return (
    <section id="iletisim" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="section-title">İletişim</h3>
          <p className="section-subtitle">Sorularınız için bize ulaşın</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: '📍', label: 'Adres', value: config.business.address },
              { icon: '📞', label: 'Telefon', value: config.business.phone, href: `tel:${config.business.phone}` },
              { icon: '✉️', label: 'E-posta', value: config.business.email, href: `mailto:${config.business.email}` },
            ].filter(i => i.value).map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 card rounded-xl">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                  {item.href ? <a href={item.href} className="font-medium hover:underline" style={{ color: 'var(--primary)' }}>{item.value}</a> : <p className="font-medium text-gray-700">{item.value}</p>}
                </div>
              </div>
            ))}
            {config.business.googleRating > 0 && (
              <div className="flex items-center gap-3 p-4 card rounded-xl">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Google Puanı</p>
                  <p className="font-bold text-lg" style={{ color: 'var(--primary)' }}>{config.business.googleRating}/5 <span className="text-sm font-normal text-gray-400">({config.business.reviewCount} yorum)</span></p>
                </div>
              </div>
            )}
          </div>
          <div className="lg:col-span-3 card p-8">
            <h4 className="font-bold text-xl mb-6" style={{ color: 'var(--secondary)' }}>Bize Mesaj Gönderin</h4>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Adınız Soyadınız" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition"/>
                <input type="tel" placeholder="Telefon Numaranız" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition"/>
              </div>
              <input type="email" placeholder="E-posta Adresiniz" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition"/>
              <textarea placeholder="Mesajınız..." rows={4} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition resize-none"/>
              <button type="button" className="btn-primary w-full text-lg py-4">Mesaj Gönder</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
