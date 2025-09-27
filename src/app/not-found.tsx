import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-200">
      <Header />
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-center p-8 max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-pink-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Page Not Found</h2>
          <p className="text-pink-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          {/* Quick Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link 
              href="/services" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 block"
            >
              View Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 block"
            >
              Contact Us
            </Link>
            <Link 
              href="/" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 block"
            >
              Go Home
            </Link>
          </div>
          
          {/* Popular Pages */}
          <div className="text-sm text-pink-600">
            <p className="mb-2">Looking for something specific? Try these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="/services" className="underline hover:text-pink-800">Services & Rates</Link>
              <span>•</span>
              <Link href="/contact" className="underline hover:text-pink-800">Booking & Contact</Link>
              <span>•</span>
              <Link href="/about" className="underline hover:text-pink-800">Reviews & Testimonials</Link>
              <span>•</span>
              <Link href="/gallery" className="underline hover:text-pink-800">Gallery</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

