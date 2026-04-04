export default function Reviews({ config }: { config: any }) {
  if (!config.content.testimonials?.length) return null;
  return (
    <section id="yorumlar" className="section-padding" style={{ background: 'var(--secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Müşterilerimiz Ne Diyor?</h3>
          <p className="text-white/50 text-lg mb-14">Güvenilir hizmet, mutlu müşteriler</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.content.testimonials.map((t: any, i: number) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill={s <= t.rating ? '#facc15' : '#374151'}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white/85 mb-6 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'var(--primary)', color: 'white' }}>
                  {t.name?.[0]}
                </div>
                <span className="text-white/60 font-medium">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
