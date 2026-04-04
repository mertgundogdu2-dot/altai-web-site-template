'use client';
import { useState, useEffect } from 'react';

export default function Header({ config }: { config: any }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ background: 'var(--primary)' }}>
            {config.business.name?.[0] || 'A'}
          </div>
          <div>
            <h1 className={`text-lg font-bold tracking-tight transition-colors ${scrolled ? '' : 'text-white'}`} style={scrolled ? { color: 'var(--secondary)' } : {}}>
              {config.business.name}
            </h1>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {['Hakkımızda', 'Hizmetler', 'Yorumlar', 'İletişim'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace('ı', 'i').replace('ü', 'u')}`}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {config.business.phone && (
            <a href={`tel:${config.business.phone}`}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${scrolled ? 'btn-primary' : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Ara
            </a>
          )}
          <button onClick={() => setMenuOpen(!menuOpen)} className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={menuOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"}/></svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-4 shadow-lg animate-fade">
          {['Hakkımızda', 'Hizmetler', 'Yorumlar', 'İletişim'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-700 font-medium border-b border-gray-50">{item}</a>
          ))}
          {config.business.phone && (
            <a href={`tel:${config.business.phone}`} className="btn-primary w-full mt-4 text-center">📞 {config.business.phone}</a>
          )}
        </div>
      )}
    </header>
  );
}
