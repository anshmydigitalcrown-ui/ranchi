export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 to-pink-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl text-pink-100 mb-8 leading-relaxed">
            Book your premium companion today and discover the difference that true professionalism makes.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center text-pink-100">
              <span className="mr-2">🔒</span>
              <span>Discretion guaranteed</span>
            </div>
            <div className="flex items-center text-pink-100">
              <span className="mr-2">🕒</span>
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center text-pink-100">
              <span className="mr-2">⭐</span>
              <span>Premium quality assured</span>
            </div>
            <div className="flex items-center text-pink-100">
              <span className="mr-2">✅</span>
              <span>100% Professional</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+919372662471" 
              className="bg-white hover:bg-pink-50 text-pink-600 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              📞 Call Now
            </a>
            <a 
              href="https://wa.me/919372662471" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-pink-200 text-sm">Discreet</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Premium</div>
              <div className="text-pink-200 text-sm">Quality</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-pink-200 text-sm">Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5000+</div>
              <div className="text-pink-200 text-sm">Satisfied</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}