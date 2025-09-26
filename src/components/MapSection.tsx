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
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call Now
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

