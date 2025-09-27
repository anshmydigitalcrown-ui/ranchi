export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 to-pink-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Book Premium Escorts in Ranchi - Available 24/7
          </h2>
          <p className="text-xl text-pink-100 mb-8 leading-relaxed">
            Ready to experience the finest escort services in Ranchi? Contact us now for verified profiles, 
            instant booking confirmation, and professional companions across all Ranchi locations.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center text-pink-100">
              <span className="mr-2">🔒</span>
              <span>Complete Privacy Protection</span>
            </div>
            <div className="flex items-center text-pink-100">
              <span className="mr-2">🕒</span>
              <span>24/7 Escort Services Ranchi</span>
            </div>
            <div className="flex items-center text-pink-100">
              <span className="mr-2">⭐</span>
              <span>100% Verified Escorts</span>
            </div>
            <div className="flex items-center text-pink-100">
              <span className="mr-2">✅</span>
              <span>All Ranchi Areas Covered</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+919372662471" 
                className="bg-white hover:bg-pink-50 text-pink-600 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg flex items-center gap-2 justify-center"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call +91-9372662471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg flex items-center gap-2 justify-center"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Book via WhatsApp
              </a>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-pink-200 text-sm">Verified Escorts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5000+</div>
              <div className="text-pink-200 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-pink-200 text-sm">Service in Ranchi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">⭐ 4.9</div>
              <div className="text-pink-200 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

