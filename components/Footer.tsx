export default function Footer({ config }: { config: any }) {
  return (
    <footer className="py-12 px-6" style={{ background: 'var(--secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold" style={{ background: 'var(--primary)' }}>
              {config.business.name?.[0]}
            </div>
            <div>
              <p className="text-white font-semibold">{config.business.name}</p>
              <p className="text-white/40 text-sm">{config.business.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {config.business.phone && <a href={`tel:${config.business.phone}`} className="text-white/60 hover:text-white transition text-sm">📞 {config.business.phone}</a>}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">&copy; {new Date().getFullYear()} {config.business.name}. Tüm hakları saklıdır.</p>
          <p className="text-white/20 text-xs">Powered by <a href="https://altai.digital" className="text-white/40 hover:text-white/60 transition">Altai Digital</a></p>
        </div>
      </div>
    </footer>
  );
}
