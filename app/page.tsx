import config from '../config.json';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Reviews />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
