import { loadConfig, listDemos } from '../../lib/loadConfig';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Reviews from '../../components/Reviews';
import CTA from '../../components/CTA';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
// Sektor ozel bilesenler
import RestaurantSection from '../../components/sectors/RestaurantSection';
import ClinicSection from '../../components/sectors/ClinicSection';
import RealEstateSection from '../../components/sectors/RealEstateSection';

export async function generateStaticParams() {
  return listDemos().map(demo => ({ demo }));
}

export default function DemoPage({ params }: { params: { demo: string } }) {
  const config = loadConfig(params.demo);
  const sector = (config.business.sector || '').toLowerCase();

  return (
    <main>
      <Header config={config} />
      <Hero config={config} />
      {/* Sektore ozel bilesenler */}
      {(sector.includes('restoran') || sector.includes('kafe') || sector.includes('cafe')) && <RestaurantSection config={config} />}
      {(sector.includes('klinik') || sector.includes('dis') || sector.includes('saglik') || sector.includes('doktor')) && <ClinicSection config={config} />}
      {(sector.includes('emlak') || sector.includes('gayrimenkul')) && <RealEstateSection config={config} />}
      <Services config={config} />
      <Reviews config={config} />
      <CTA config={config} />
      <Contact config={config} />
      <Footer config={config} />
    </main>
  );
}
