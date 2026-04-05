import { loadConfig } from '../../lib/loadConfig';
import { normalizeSector } from '../../lib/sectorImages';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import Reviews from '../../components/Reviews';
import Pricing from '../../components/Pricing';
import Carousel from '../../components/Carousel';
import CTA from '../../components/CTA';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import RestaurantSection from '../../components/sectors/RestaurantSection';
import ClinicSection from '../../components/sectors/ClinicSection';
import RealEstateSection from '../../components/sectors/RealEstateSection';
import LawyerSection from '../../components/sectors/LawyerSection';
import BeautySection from '../../components/sectors/BeautySection';
import HotelSection from '../../components/sectors/HotelSection';
import EducationSection from '../../components/sectors/EducationSection';
import EcommerceSection from '../../components/sectors/EcommerceSection';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DemoPage({ params }: { params: { demo: string } }) {
  const config = loadConfig(params.demo);

  // Demo bulunamadiysa
  if (!config.business.name || config.business.name === 'Demo Site') {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-6">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-2xl mb-6 shadow-lg">A</div>
          <h1 className="text-2xl font-bold mb-3">Demo Hazırlanıyor</h1>
          <p className="text-white/50 mb-6">Bu demo site henüz oluşturulmamış veya hazırlanma aşamasında.</p>
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors font-medium">
            Tüm Demolar
          </a>
        </div>
      </main>
    );
  }

  const sector = normalizeSector(config.business.sector || '');
  const is = (...keys: string[]) => keys.some((k) => sector === k || sector.includes(k));

  return (
    <main className="overflow-hidden">
      <Header config={config} />
      <Hero config={config} />
      <About config={config} />

      {/* Sector-specific sections */}
      {is('restoran', 'kafe', 'cafe', 'yemek') && <RestaurantSection config={config} />}
      {is('klinik', 'dis', 'saglik', 'doktor', 'hastane') && <ClinicSection config={config} />}
      {is('emlak', 'gayrimenkul') && <RealEstateSection config={config} />}
      {is('avukat', 'hukuk') && <LawyerSection config={config} />}
      {is('guzellik', 'estetik', 'spa') && <BeautySection config={config} />}
      {is('kuafor', 'berber', 'sac') && <BeautySection config={config} />}
      {is('otel', 'hotel', 'konaklama', 'pansiyon') && <HotelSection config={config} />}
      {is('egitim', 'kurs', 'okul') && <EducationSection config={config} />}
      {is('eticaret', 'magaza', 'shop') && <EcommerceSection config={config} />}

      <Services config={config} />
      <Carousel config={config} />
      <Reviews config={config} />
      <Pricing config={config} />
      <CTA config={config} />
      <Contact config={config} />
      <Footer config={config} />
    </main>
  );
}
