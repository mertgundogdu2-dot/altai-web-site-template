import { loadConfig } from '../../lib/loadConfig';
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
  const sector = (config.business.sector || '').toLowerCase();

  const is = (...keys: string[]) => keys.some((k) => sector.includes(k));

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
