export default function ClinicSection({ config }: { config: any }) {
  const specialties = config.content.sectorData?.specialties || config.content.services || [];
  const doctors = config.content.sectorData?.doctors || [];
  return (
    <>
      {/* Uzmanlik alanlari */}
      <section className="py-16 px-4 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-2" style={{color:'var(--primary)'}}>🏥 Uzmanlık Alanlarımız</h3>
          <p className="text-center text-gray-500 mb-12">En güncel tedavi yöntemleri ile hizmetinizdeyiz</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((s: any, i: number) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition border border-blue-100">
                <div className="text-3xl mb-3">{['🦷','😊','🔬','💎','🩺','⚕️'][i%6]}</div>
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doktor profilleri */}
      {doctors.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12" style={{color:'var(--secondary)'}}>👨‍⚕️ Uzman Kadromuz</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((d: any, i: number) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl" style={{background:'var(--primary)',color:'white'}}>{d.name?.[0]||'D'}</div>
                  <h4 className="font-semibold text-lg">{d.name}</h4>
                  <p className="text-sm" style={{color:'var(--primary)'}}>{d.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Randevu CTA */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4" style={{color:'var(--secondary)'}}>Online Randevu Alın</h3>
          <p className="text-gray-600 mb-6">Hemen arayın veya WhatsApp'tan randevunuzu oluşturun</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${config.business.phone}`} className="btn-primary px-8 py-4 text-lg">📞 Hemen Ara</a>
            <a href={`https://wa.me/${(config.business.phone||'').replace(/\D/g,'')}`} className="px-8 py-4 bg-green-500 text-white rounded-lg font-semibold text-lg hover:bg-green-600 transition">💬 WhatsApp Randevu</a>
          </div>
        </div>
      </section>
    </>
  );
}
