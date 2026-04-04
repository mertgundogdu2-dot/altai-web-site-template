import fs from 'fs';
import path from 'path';
import defaultConfig from '../config.json';

export interface SiteConfig {
  business: { name: string; sector: string; slogan: string; phone: string; address: string; email: string; googleRating: number; reviewCount: number; googleMapsUrl: string; };
  design: { primaryColor: string; secondaryColor: string; accentColor: string; fontFamily: string; heroLayout: string; heroImage: string; };
  content: { heroTitle: string; heroSubtitle: string; aboutText: string; services: Array<{title:string;description:string}>; testimonials: Array<{name:string;text:string;rating:number}>; ctaText: string; ctaButton: string; sectorData?: any; };
  meta: { title: string; description: string; };
}

export function loadConfig(slug: string): SiteConfig {
  try {
    const configPath = path.join(process.cwd(), 'demos', slug, 'config.json');
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    }
  } catch {}
  return defaultConfig as unknown as SiteConfig;
}

export function listDemos(): string[] {
  try {
    const demosDir = path.join(process.cwd(), 'demos');
    if (!fs.existsSync(demosDir)) return [];
    return fs.readdirSync(demosDir).filter(d => {
      const configPath = path.join(demosDir, d, 'config.json');
      return fs.existsSync(configPath);
    });
  } catch { return []; }
}
