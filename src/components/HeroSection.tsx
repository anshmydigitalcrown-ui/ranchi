import Image from 'next/image';
import SmartSearch from './SmartSearch';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-800 mb-6">
            #1 Premium Services In Ranchi
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-8">
            🌟 High Class VIP & Celebrity Services | 24/7 Ranchi Service
          </h2>
          <p className="text-lg md:text-xl text-pink-700 mb-8 max-w-4xl mx-auto">
            Experience the finest services in Ranchi with our premium companions. Our professional and 
            beautiful Ranchi services are available for outcall services across all Ranchi areas.
          </p>

          {/* AI-Powered Smart Search */}
          <div className="mb-8 max-w-2xl mx-auto">
            <SmartSearch 
              placeholder="🤖 Ask AI: What services do you need in Ranchi?"
              className="w-full"
            />
            <p className="text-sm text-pink-600 mt-2 flex items-center justify-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI-powered search with instant recommendations
            </p>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-pink-600">
            <span className="bg-white px-4 py-2 rounded-full shadow-md">✨ 100% Verified</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md">🔒 Safe & Discreet</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md">⚡ Instant Booking</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md">🤖 AI Assistant</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md">🎯 Satisfaction Guaranteed</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919372662471" 
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call Now 24/7
            </a>
            <a 
              href="https://wa.me/919372662471" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-1.091-4.778-3.078-6.563-1.986-1.784-4.504-2.863-7.321-2.864-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.26-.846zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.966-.94 1.164-.174.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              WhatsApp Fast
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-pink-600">5000+</div>
            <div className="text-pink-700">Verified Services</div>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-pink-600">100%</div>
            <div className="text-pink-700">Safe & Discreet</div>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-pink-600">⭐ 4.8/5</div>
            <div className="text-pink-700">Rating (2847+ Reviews)</div>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-pink-600">24/7</div>
            <div className="text-pink-700">Instant Booking</div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-pink-700">
              <div>🏙️ All Ranchi Areas Covered</div>
              <div>⏱️ 30-Min Arrival Time</div>
              <div>🎯 Premium Quality Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

