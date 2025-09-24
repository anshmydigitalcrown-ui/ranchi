export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-800 mb-6">
              Welcome to Ranchi
            </h1>
            <p className="text-lg md:text-xl text-pink-600 mb-8 max-w-3xl mx-auto">
              Experience the beauty of pink-themed design with modern Next.js technology
            </p>
            <div className="space-x-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Get Started
              </button>
              <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-60"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-pink-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-pink-500 rounded-full opacity-30"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-pink-800 text-center mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Beautiful Design</h3>
              <p className="text-pink-600">
                Stunning pink-themed interface that catches the eye and provides excellent user experience.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Fast Performance</h3>
              <p className="text-pink-600">
                Built with Next.js 15 and optimized for speed and performance across all devices.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Responsive</h3>
              <p className="text-pink-600">
                Fully responsive design that works perfectly on mobile, tablet, and desktop devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-pink-100 text-lg mb-8">
            Join thousands of users who love our pink-themed experience
          </p>
          <button className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
            Start Your Journey
          </button>
        </div>
      </section>
    </main>
  );
}