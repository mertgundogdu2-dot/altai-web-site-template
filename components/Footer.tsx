export default function Footer({ config }: { config: any }) {
  return (
    <footer className="py-8 px-4 text-center text-sm" style={{background:'var(--secondary)'}}>
      <p className="text-white/80 font-medium mb-2">{config.business.name}</p>
      <p className="text-white/40">{config.business.address}</p>
      <p className="mt-4 text-white/20">Powered by <a href="https://altai.digital" className="text-white/40 hover:text-white/60 transition">Altai Digital</a></p>
    </footer>
  );
}
