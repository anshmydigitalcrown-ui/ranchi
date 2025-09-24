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
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              📞 Call Now 24/7
            </a>
            <a 
              href="https://wa.me/919372662471" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              💬 WhatsApp Fast
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