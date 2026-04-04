import config from '../config.json';

export default function CTA() {
  return (
    <section className="section text-center" style={{ background: `linear-gradient(135deg, var(--primary), var(--secondary))` }}>
      <div className="container-main">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{config.content.ctaText}</h3>
        <a href={`tel:${config.business.phone}`} className="inline-block px-10 py-4 bg-white rounded-lg font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1" style={{ color: 'var(--primary)' }}>
          📞 {config.content.ctaButton}
        </a>
      </div>
    </section>
  );
}
