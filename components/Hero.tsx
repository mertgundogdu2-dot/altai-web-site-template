export default function Hero({ config }: { config: any }) {
  const hasImage = config.design?.heroImage;
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 pt-16 overflow-hidden" style={{ background: hasImage ? 'none' : `linear-gradient(135deg, var(--secondary) 0%, ${config.design.primaryColor}22 100%)` }}>
      {hasImage && (
        <>
          <img src={config.design.heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}
      <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{config.content.heroTitle}</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">{config.content.heroSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${config.business.phone}`} className="btn-primary text-lg px-8 py-4">{config.content.ctaButton || 'Bizi Arayın'}</a>
          <a href="#hizmetler" className="px-8 py-4 rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition font-semibold">Hizmetlerimiz</a>
        </div>
        {config.business.googleRating > 0 && (
          <div className="mt-12 flex items-center justify-center gap-2 text-white/80">
            <span className="text-yellow-400">{'★'.repeat(Math.round(config.business.googleRating))}</span>
            <span className="font-semibold">{config.business.googleRating}</span>
            <span className="text-sm">({config.business.reviewCount} yorum)</span>
          </div>
        )}
      </div>
    </section>
  );
}
