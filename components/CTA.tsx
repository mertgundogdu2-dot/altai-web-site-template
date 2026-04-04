export default function CTA({ config }: { config: any }) {
  return (
    <section className="py-16 md:py-24 px-4 text-center" style={{background:`linear-gradient(135deg,var(--primary),var(--secondary))`}}>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{config.content.ctaText}</h3>
        <a href={`tel:${config.business.phone}`} className="inline-block px-10 py-4 bg-white rounded-lg font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1" style={{color:'var(--primary)'}}>📞 {config.content.ctaButton}</a>
      </div>
    </section>
  );
}
