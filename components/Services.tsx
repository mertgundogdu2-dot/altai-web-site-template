export default function Services({ config }: { config: any }) {
  return (
    <section id="hizmetler" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="section-title">Hizmetlerimiz</h3>
          <p className="section-subtitle">Profesyonel ekibimizle size en iyi hizmeti sunuyoruz</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {(config.content.services || []).map((s: any, i: number) => (
            <div key={i} className="card p-8 group cursor-default">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform group-hover:scale-110" style={{ background: `${config.design.primaryColor}15` }}>
                {['🎯','⚡','🏆','💡','🔧','📊','🎨','🚀','💎','🌟'][i % 10]}
              </div>
              <h4 className="text-lg font-semibold mb-3 tracking-tight" style={{ color: 'var(--secondary)' }}>{s.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
