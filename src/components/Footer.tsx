import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-pink-400 mb-4">
              Natasha<span className="text-pink-600">Rai</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium services providing high-class companions for discerning gentlemen. 
              Discretion, quality, and satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:+919372662471" 
                className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                aria-label="Call us"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                aria-label="WhatsApp us"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@natasharai.in" 
                className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                aria-label="Email us"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Premium Services */}
          <div>
            <h3 className="text-xl font-semibold text-pink-400 mb-4">Premium Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/vip-escorts" className="text-gray-400 hover:text-pink-400 transition-colors">
                  VIP Services
                </Link>
              </li>
              <li>
                <Link href="/services/celebrity-services" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Celebrity Services
                </Link>
              </li>
              <li>
                <Link href="/services/elite-models" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Elite Models
                </Link>
              </li>
              <li>
                <Link href="/services/premium-services" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Premium Models
                </Link>
              </li>
              <li>
                <Link href="/services/travel-companion" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Travel Companion
                </Link>
              </li>
              <li>
                <Link href="/services/event-companion" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Event Companion
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-pink-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-pink-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Booking & Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Services & Rates
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Reviews & Testimonials
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-pink-400 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-pink-500 p-2 rounded-full mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <a href="tel:+919372662471" className="text-gray-400 hover:text-pink-400 transition-colors">
                    +91 9372662471
                  </a>
                  <div className="text-sm text-gray-500">WhatsApp Available</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 p-2 rounded-full mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <a href="mailto:contact@natasharai.in" className="text-gray-400 hover:text-pink-400 transition-colors">
                    contact@natasharai.in
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 p-2 rounded-full mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11h14V7l-7-5zM8 18v-4h4v4H8zm6 0v-6H6v6H4V8l6-4.5L16 8v10h-2z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-400">24/7 Service</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-500 p-2 rounded-full mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <span className="text-gray-400">Ranchi, Jharkhand</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Natasha Rai. All Rights Reserved. Premium Services In Ranchi.
            </div>
            <div className="text-gray-500 text-sm">
              <span className="mr-4">Outcall & Incall</span>
              <span className="mr-4">|</span>
              <span className="mr-4">Discreet & Professional</span>
              <span className="mr-4">|</span>
              <span>18+ Only</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              This website is intended for adults 18+ only. All content is for entertainment purposes.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Contact Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
        <a 
          href="https://wa.me/919372662471" 
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 animate-pulse"
          aria-label="WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
        <a 
          href="tel:+919372662471" 
          className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3"
          aria-label="Call"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        </a>
      </div>
    </footer>
  );
}

