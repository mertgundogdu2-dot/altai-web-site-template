import config from '../config.json';

const icons = ['🎯', '⚡', '🏆', '💡', '🔧', '📊', '🎨', '🚀'];

export default function Services() {
  return (
    <section id="hizmetler" className="section bg-white">
      <div className="container-main">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--secondary)' }}>Hizmetlerimiz</h3>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Size en iyi hizmeti sunmak için buradayız</p>
        <div className="grid md:grid-cols-3 gap-8">
          {config.content.services.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="text-3xl mb-4">{icons[i % icons.length]}</div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--secondary)' }}>{s.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
