export default function Header({ config }: { config: any }) {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <div>
          <h1 className="text-xl font-bold" style={{ color: 'var(--primary)' }}>{config.business.name}</h1>
          <p className="text-xs text-gray-500">{config.business.slogan}</p>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#hizmetler" className="hover:text-gray-900 transition">Hizmetler</a>
          <a href="#yorumlar" className="hover:text-gray-900 transition">Yorumlar</a>
          <a href="#iletisim" className="hover:text-gray-900 transition">İletişim</a>
        </nav>
        {config.business.phone && (
          <a href={`tel:${config.business.phone}`} className="btn-primary text-sm flex items-center gap-2">📞 Ara</a>
        )}
      </div>
    </header>
  );
}
