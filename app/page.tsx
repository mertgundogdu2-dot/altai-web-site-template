import { listDemos } from '../lib/loadConfig';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function Home() {
  const demos = listDemos();

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-6 bg-[#0a0a0a] text-white px-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-2xl mb-6 shadow-lg">
          A
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Altai Digital</h1>
        <p className="text-white/40 text-lg">AI-Powered Demo Websites</p>
      </div>

      {demos.length > 0 ? (
        <div className="flex flex-col gap-3 w-full max-w-md mt-4">
          {demos.map((d) => (
            <Link
              key={d}
              href={`/${d}`}
              className="group flex items-center justify-between px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-blue-400 hover:text-blue-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <span className="font-medium">
                {d.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
              <svg className="w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-white/30 mt-4">Henüz demo oluşturulmamış</p>
      )}
    </div>
  );
}
