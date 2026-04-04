import config from '../config.json';

export default function Contact() {
  return (
    <section id="iletisim" className="section bg-white">
      <div className="container-main">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--secondary)' }}>İletişim</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div><p className="font-semibold">Adres</p><p className="text-gray-600">{config.business.address}</p></div>
            </div>
            {config.business.phone && (
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div><p className="font-semibold">Telefon</p><a href={`tel:${config.business.phone}`} className="text-gray-600 hover:underline">{config.business.phone}</a></div>
              </div>
            )}
            {config.business.email && (
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div><p className="font-semibold">E-posta</p><a href={`mailto:${config.business.email}`} className="text-gray-600 hover:underline">{config.business.email}</a></div>
              </div>
            )}
            {config.business.googleRating > 0 && (
              <div className="flex items-start gap-4">
                <span className="text-2xl">⭐</span>
                <div><p className="font-semibold">Google Puanı</p><p className="text-gray-600">{config.business.googleRating}/5 ({config.business.reviewCount} yorum)</p></div>
              </div>
            )}
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h4 className="font-semibold mb-4">Bize Ulaşın</h4>
            <form className="space-y-4">
              <input type="text" placeholder="Adınız" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none" />
              <input type="tel" placeholder="Telefon" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none" />
              <textarea placeholder="Mesajınız" rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none" />
              <button type="button" className="btn-primary w-full">Gönder</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
