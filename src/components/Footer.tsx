import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-pink-400 mb-4">
              Pink<span className="text-pink-600">Ranchi</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium services providing high-class companions for discerning gentlemen. 
              Discretion, quality, and satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:+919372662471" 
                className="text-pink-400 hover:text-pink-300 transition-colors"
                aria-label="Call us"
              >
                📞
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="text-green-400 hover:text-green-300 transition-colors"
                aria-label="WhatsApp us"
              >
                💬
              </a>
              <a 
                href="mailto:contact@pinkranchi.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
                aria-label="Email us"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* Premium Services */}
          <div>
            <h3 className="text-xl font-semibold text-pink-400 mb-4">Premium Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/vip" className="text-gray-400 hover:text-pink-400 transition-colors">
                  VIP Services
                </Link>
              </li>
              <li>
                <Link href="/services/celebrity" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Celebrity Services
                </Link>
              </li>
              <li>
                <Link href="/services/elite" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Elite Models
                </Link>
              </li>
              <li>
                <Link href="/services/premium" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Premium Models
                </Link>
              </li>
              <li>
                <Link href="/services/travel" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Travel Companion
                </Link>
              </li>
              <li>
                <Link href="/services/event" className="text-gray-400 hover:text-pink-400 transition-colors">
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
                <Link href="/booking" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/rates" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Rates
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-pink-400 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <div>
                  <a href="tel:+919372662471" className="text-gray-400 hover:text-pink-400 transition-colors">
                    +91 9372662471
                  </a>
                  <div className="text-sm text-gray-500">WhatsApp Available</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <div>
                  <a href="mailto:contact@pinkranchi.com" className="text-gray-400 hover:text-pink-400 transition-colors">
                    contact@pinkranchi.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🕒</span>
                <div>
                  <span className="text-gray-400">24/7 Service</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
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
              © 2025 Pink Ranchi. All Rights Reserved. Premium Services In Ranchi.
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
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
        <a 
          href="https://wa.me/919372662471" 
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="WhatsApp"
        >
          💬
        </a>
        <a 
          href="tel:+919372662471" 
          className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Call"
        >
          📞
        </a>
      </div>
    </footer>
  );
}