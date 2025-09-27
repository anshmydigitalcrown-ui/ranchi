import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SEOContent from '@/components/SEOContent';
import LocationSEO from '@/components/LocationSEO';
import ComprehensiveContent from '@/components/ComprehensiveContent';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <SEOContent />
      <LocationSEO />
      <ComprehensiveContent />
      <FAQSection />
      <CTASection />
      <MapSection />
      <Footer />
    </main>
  );
}

