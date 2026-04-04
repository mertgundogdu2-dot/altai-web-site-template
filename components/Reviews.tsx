export default function Reviews({ config }: { config: any }) {
  if(!config.content.testimonials?.length) return null;
  return (
    <section id="yorumlar" className="py-16 md:py-24 px-4" style={{background:'var(--secondary)'}}>
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Müşterilerimiz Ne Diyor?</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {config.content.testimonials.map((t:any,i:number)=>(
            <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="text-yellow-400 mb-3">{'★'.repeat(t.rating)}{'☆'.repeat(5-t.rating)}</div>
              <p className="text-white/90 mb-4 text-lg italic">&ldquo;{t.text}&rdquo;</p>
              <p className="text-white/60 font-medium">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
