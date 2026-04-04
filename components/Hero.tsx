export default function Hero({ config }: { config: any }) {
  const hasImage = config.design?.heroImage;
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {hasImage ? (
        <>
          <img src={config.design.heroImage} alt="" className="absolute inset-0 w-full h-full object-cover scale-105" style={{ filter: 'brightness(0.4)' }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${config.design.secondaryColor}80 0%, ${config.design.primaryColor}40 50%, ${config.design.secondaryColor}CC 100%)` }} />
        </>
      ) : (
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)` }} />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
        {/* Badge */}
        <div className="animate-fade-in mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
            {config.business.googleRating > 0 && (
              <>
                <span className="text-yellow-400">{'★'.repeat(Math.round(config.business.googleRating))}</span>
                <span>{config.business.googleRating}/5</span>
                <span className="text-white/50">•</span>
              </>
            )}
            <span>{config.business.address}</span>
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight animate-fade-in" style={{ animationDelay: '0.15s' }}>
          {config.content.heroTitle}
        </h1>

        <p className="text-xl md:text-2xl text-white/75 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {config.content.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.45s' }}>
          <a href={`tel:${config.business.phone}`} className="btn-primary text-lg px-10 py-5 shadow-2xl">
            {config.content.ctaButton || 'Bizi Arayın'}
          </a>
          <a href={`https://wa.me/${(config.business.phone || '').replace(/\D/g, '')}`} className="btn-whatsapp text-lg px-10 py-5">
            💬 WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
