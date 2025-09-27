import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import SmartChat from '@/components/SmartChat';
import SmartRecommendations from '@/components/SmartRecommendations';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      
      {/* AI-Powered Recommendations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SmartRecommendations 
            context="homepage premium escorts ranchi vip services"
            maxItems={4}
            title="✨ AI Recommendations Just for You"
            className="mx-auto max-w-4xl"
          />
        </div>
      </section>
      
      <FAQSection />
      <CTASection />
      <MapSection />
      <Footer />
      
      {/* Smart AI Chat Widget */}
      <SmartChat position="bottom-right" theme="pink" />
    </main>
  );
}

