import { listDemos } from '../lib/loadConfig';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function Home() {
  const demos = listDemos();
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'20px',fontFamily:'Inter,sans-serif',background:'#0a0a0a',color:'#fff'}}>
      <h1 style={{fontSize:'2rem',fontWeight:700}}>Altai Digital — Demo Siteleri</h1>
      <p style={{color:'#666'}}>Powered by AI</p>
      {demos.length > 0 ? (
        <div style={{display:'flex',flexDirection:'column',gap:'10px',width:'100%',maxWidth:'400px',padding:'0 20px'}}>
          {demos.map(d => (
            <Link key={d} href={`/${d}`} style={{padding:'14px 24px',background:'#1a1a2e',border:'1px solid #333',borderRadius:'12px',color:'#3b82f6',textDecoration:'none',fontSize:'15px',transition:'all 0.2s'}}>
              {d.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase())}
            </Link>
          ))}
        </div>
      ) : <p style={{color:'#444'}}>Henuz demo olusturulmamis</p>}
    </div>
  );
}
