export default function RestaurantSection({ config }: { config: any }) {
  const menu = config.content.sectorData?.menu || config.content.services || [];
  return (
    <section className="py-16 px-4 bg-amber-50/50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-2" style={{color:'var(--primary)'}}>🍽️ Menümüz</h3>
        <p className="text-center text-gray-500 mb-12">Özenle hazırlanan lezzetlerimiz</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((item: any, i: number) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-amber-100">
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
              {item.price && <p className="mt-3 font-bold" style={{color:'var(--primary)'}}>{item.price}</p>}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={`https://wa.me/${(config.business.phone||'').replace(/\D/g,'')}`} className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-lg font-semibold text-lg hover:bg-green-600 transition">
            💬 WhatsApp ile Rezervasyon
          </a>
        </div>
      </div>
    </section>
  );
}
