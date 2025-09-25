import Image from 'next/image';

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
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-pink-600">
            <span className="bg-white px-4 py-2 rounded-full shadow-md">✨ 100% Verified</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md">🔒 Safe & Discreet</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md">⚡ Instant Booking</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md">🎯 Satisfaction Guaranteed</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919372662471" 
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now 24/7
            </a>
            <a 
              href="https://wa.me/919372662471" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
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