'use client';

export default function MapSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
            Our Service Areas
          </h2>
          <p className="text-lg text-pink-600 max-w-3xl mx-auto">
            We provide services across all major areas in Ranchi and surrounding regions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-pink-100 rounded-xl shadow-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58878.86088516683!2d85.2676436!3d23.3440997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1642779234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Ranchi Service Areas"
              ></iframe>
            </div>
          </div>

          {/* Service Areas Info */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-pink-800 mb-6">
                We Cover All Major Areas
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="text-pink-700">
                  <div className="font-semibold mb-2">Main Areas:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Ranchi City Center</li>
                    <li>• Harmu Road</li>
                    <li>• Kanke Road</li>
                    <li>• Doranda</li>
                    <li>• Hinoo</li>
                    <li>• Lalpur</li>
                  </ul>
                </div>
                <div className="text-pink-700">
                  <div className="font-semibold mb-2">Business Areas:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• Commercial Complex</li>
                    <li>• Hotel Areas</li>
                    <li>• Airport Road</li>
                    <li>• Railway Station</li>
                    <li>• Mall Areas</li>
                    <li>• IT Parks</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-pink-600 mr-2">📍</span>
                  <span className="font-semibold text-pink-800">Service Coverage</span>
                </div>
                <p className="text-pink-700 text-sm">
                  Complete Ranchi city and surrounding areas within 25km radius
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-pink-600 mr-2">⏱️</span>
                  <span className="font-semibold text-pink-800">Response Time</span>
                </div>
                <p className="text-pink-700 text-sm">
                  30-60 minutes arrival time depending on your location
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="tel:+919372662471" 
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors text-center"
                >
                  📞 Call Now
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors text-center"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}