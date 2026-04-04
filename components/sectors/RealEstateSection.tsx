export default function RealEstateSection({ config }: { config: any }) {
  const properties = config.content.sectorData?.properties || [
    { title: 'Sarıyer\'de 3+1 Daire', type: 'Satılık', area: '140m²', price: 'Detay için arayın' },
    { title: 'Maslak\'ta Ofis Katı', type: 'Kiralık', area: '200m²', price: 'Detay için arayın' },
    { title: 'Tarabya\'da Villa', type: 'Satılık', area: '350m²', price: 'Detay için arayın' },
  ];
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-2" style={{color:'var(--primary)'}}>🏠 Portföyümüz</h3>
        <p className="text-center text-gray-500 mb-12">Size en uygun gayrimenkulü bulalım</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p: any, i: number) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="h-48 flex items-center justify-center text-5xl" style={{background:`linear-gradient(135deg, var(--primary)22, var(--secondary)22)`}}>🏢</div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{p.title}</h4>
                  <span className="text-xs px-2 py-1 rounded-full font-medium" style={{background:'var(--primary)15',color:'var(--primary)'}}>{p.type}</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">{p.area}</p>
                <p className="font-bold" style={{color:'var(--primary)'}}>{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={`tel:${config.business.phone}`} className="btn-primary px-8 py-4 text-lg">📞 Portföy Detayları İçin Arayın</a>
        </div>
      </div>
    </section>
  );
}
