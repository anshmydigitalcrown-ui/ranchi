import type { Metadata } from 'next';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Professional Escort Services in Ranchi - VIP, Elite Models, Celebrity Companions | 24/7 Available',
  description: 'Premium escort services in Ranchi including VIP escorts, elite models, celebrity companions, travel escorts, outcall services. 100% verified profiles, 24/7 availability across all Ranchi locations including Main Road, Kanke Road, HEC Colony, Lalpur, Hinoo, Bariatu, Doranda, Ratu Road, Circular Road, Argora.',
  keywords: 'Ranchi escort services, VIP escorts Ranchi, elite models Ranchi, celebrity escorts, outcall services Ranchi, independent escorts, travel companions',
  openGraph: {
    title: 'Professional Escort Services in Ranchi - VIP, Elite Models, Celebrity Companions',
    description: 'Premium escort services in Ranchi with verified profiles, complete privacy, and 24/7 availability across all major Ranchi locations.',
    url: '/services',
    type: 'website',
  }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Services Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-pink-500 to-pink-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Escort Services in Ranchi
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Professional companionship services with 100% verified profiles, complete privacy protection, 
            and 24/7 availability across all major Ranchi locations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+919372662471" 
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors shadow-lg"
            >
              📞 Book Now: +91-9372662471
            </a>
            <a 
              href="https://wa.me/919372662471" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              💬 WhatsApp Booking
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Verified Profiles</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Ranchi Locations</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold">9</div>
              <div className="text-sm">Service Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-pink-800 mb-6">
                Complete Guide to Escort Services in Ranchi
              </h2>
              <p className="text-xl text-pink-600 leading-relaxed">
                Discover premium companionship services with professional escorts, verified profiles, 
                and complete discretion across all major Ranchi areas
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-pink-800 mb-4">🏆 Premium Quality</h3>
                <p className="text-pink-700">
                  All our escort companions are carefully selected, professionally trained, and maintain 
                  the highest standards of elegance, intelligence, and sophistication for discerning clients.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-pink-800 mb-4">🛡️ Complete Privacy</h3>
                <p className="text-pink-700">
                  Your privacy and confidentiality are our top priorities. We maintain strict data protection, 
                  discrete service delivery, and professional conduct for all Ranchi escort bookings.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-pink-800 mb-4">📍 Wide Coverage</h3>
                <p className="text-pink-700">
                  Our escort services cover all major Ranchi locations including hotels, residences, 
                  business centers, and event venues with prompt, professional service delivery.
                </p>
              </div>
            </div>
            
            {/* Detailed Service Information */}
            <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl p-8 mb-12">
              <h3 className="text-3xl font-bold text-pink-800 mb-6 text-center">
                Comprehensive Escort Services Across Ranchi
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-pink-700 mb-4">Service Categories Available:</h4>
                  <ul className="space-y-2 text-pink-600">
                    <li>🌟 <strong>VIP Escort Services:</strong> Premium companions for exclusive events and gatherings</li>
                    <li>👑 <strong>Celebrity Companions:</strong> High-profile escorts for sophisticated clientele</li>
                    <li>💎 <strong>Elite Model Services:</strong> Professional models for fashion events and parties</li>
                    <li>✈️ <strong>Travel Companions:</strong> Perfect partners for business trips and vacations</li>
                    <li>🎭 <strong>Event Escorts:</strong> Elegant companions for social and corporate events</li>
                    <li>🏠 <strong>Outcall Services:</strong> Convenient home and hotel visit services</li>
                    <li>🆓 <strong>Independent Escorts:</strong> Professional independent companions</li>
                    <li>🏡 <strong>Local Beauties:</strong> Authentic local companions from Ranchi</li>
                    <li>💼 <strong>Premium Services:</strong> Luxury escort experiences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-pink-700 mb-4">Coverage Areas in Ranchi:</h4>
                  <ul className="space-y-2 text-pink-600">
                    <li>📍 <strong>Main Road:</strong> Central Ranchi business district</li>
                    <li>📍 <strong>Kanke Road:</strong> Kanke area and surroundings</li>
                    <li>📍 <strong>HEC Colony:</strong> Heavy Engineering Corporation area</li>
                    <li>📍 <strong>Lalpur:</strong> Lalpur Township and residential areas</li>
                    <li>📍 <strong>Hinoo:</strong> Hinoo Market and commercial zones</li>
                    <li>📍 <strong>Bariatu:</strong> Bariatu Housing Colony</li>
                    <li>📍 <strong>Doranda:</strong> Doranda Market and surrounding areas</li>
                    <li>📍 <strong>Ratu Road:</strong> Ratu Road Junction and vicinity</li>
                    <li>📍 <strong>Circular Road:</strong> City Center and downtown area</li>
                    <li>📍 <strong>Argora:</strong> Argora Industrial area</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}