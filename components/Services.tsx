const icons = ['🎯','⚡','🏆','💡','🔧','📊','🎨','🚀'];
export default function Services({ config }: { config: any }) {
  return (
    <section id="hizmetler" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{color:'var(--secondary)'}}>Hizmetlerimiz</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {(config.content.services||[]).map((s:any,i:number)=>(
            <div key={i} className="p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="text-3xl mb-4">{icons[i%icons.length]}</div>
              <h4 className="text-lg font-semibold mb-2" style={{color:'var(--secondary)'}}>{s.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
