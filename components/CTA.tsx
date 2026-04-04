export default function CTA({ config }: { config: any }) {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: `linear-gradient(135deg, var(--primary), var(--secondary))` }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{config.content.ctaText}</h3>
        <p className="text-white/60 text-lg mb-10">Size özel çözümlerimiz hakkında bilgi almak için hemen iletişime geçin</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${config.business.phone}`} className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1" style={{ color: 'var(--primary)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            {config.content.ctaButton}
          </a>
          <a href={`https://wa.me/${(config.business.phone || '').replace(/\D/g, '')}`} className="btn-whatsapp text-lg px-10 py-5">
            💬 WhatsApp ile Yazın
          </a>
        </div>
      </div>
    </section>
  );
}
