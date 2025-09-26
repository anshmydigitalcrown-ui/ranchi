import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Premium Services in Ranchi 💎 Luxury Escort Services | Call +91-9372662471',
  description: 'Exclusive premium escort services in Ranchi offering luxury companions for high-end experiences. Professional, discreet, and sophisticated premium companionship.',
  keywords: [
    'premium services Ranchi',
    'luxury escorts Ranchi',
    'premium escort services',
    'high-end companions Ranchi',
    'luxury companionship',
    'premium call girls',
    'exclusive escorts Ranchi',
    'luxury escort agency',
    'premium escort booking',
    'sophisticated companions',
    'luxury adult services',
    'premium escort experience',
    'high-class escorts Ranchi',
    'luxury escort services',
    'premium adult entertainment'
  ],
  authors: [{ name: 'Ranchi Premium Services' }],
  creator: 'Ranchi Premium Escort Services',
  publisher: 'Ranchi Luxury Premium Escorts',
  metadataBase: new URL('https://ranchi-mu.vercel.app'),
  alternates: {
    canonical: '/services/premium-services',
  },
  openGraph: {
    title: 'Premium Services in Ranchi 💎 Luxury Escort Services',
    description: 'Experience exclusive premium escort services in Ranchi with luxury companions offering sophisticated and high-end experiences.',
    url: '/services/premium-services',
    siteName: 'Ranchi Premium Services',
    locale: 'en_US',
    type: 'website',
  },
}

const faqData = [
  {
    question: "What are premium escort services in Ranchi?",
    answer: "Premium escort services in Ranchi offer luxury companions for high-end experiences with sophisticated presentation, exclusive amenities, and personalized attention. Our premium services include luxury companions, upscale venues, and premium entertainment experiences."
  },
  {
    question: "Are premium services available for luxury events?",
    answer: "Yes, our premium services in Ranchi are perfect for luxury events, corporate functions, high-end parties, and exclusive gatherings. Call +91-9372662471 for premium escort booking with luxury amenities and sophisticated companionship."
  },
  {
    question: "What makes premium services different from regular escorts?",
    answer: "Premium services in Ranchi offer luxury presentation, exclusive amenities, high-end venues, sophisticated companions, personalized attention, and premium experiences. They provide upscale companionship with luxury standards and exclusive service quality."
  },
  {
    question: "How to book premium services in Ranchi safely?",
    answer: "Book premium services in Ranchi safely by calling +91-9372662471 or WhatsApp. Our verified premium booking process includes luxury verification, exclusive companion selection, premium amenities arrangement, and confidential luxury service protocols."
  },
  {
    question: "Do premium services include luxury accommodations?",
    answer: "Absolutely. Our premium services in Ranchi include luxury accommodations, high-end venues, exclusive locations, premium amenities, and sophisticated environments across all Ranchi areas with complete luxury experience packages."
  },
  {
    question: "Are premium services completely confidential?",
    answer: "Yes, premium services in Ranchi maintain the highest confidentiality standards with luxury privacy protection, discrete premium arrangements, exclusive service protocols, and professional discretion suitable for high-end clientele."
  }
]

export default function PremiumServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/50 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 border border-white/30">
              <div className="bg-white text-pink-600 p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="font-bold">LUXURY EXPERIENCES</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Premium Services in <span className="text-pink-200">Ranchi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Exclusive Luxury Companions for High-End Experiences & Sophisticated Entertainment
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Premium: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20premium%20escort%20services%20in%20Ranchi" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Premium
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-pink-100 text-lg">✓ Luxury Companions • ✓ High-End Venues • ✓ Exclusive Amenities • ✓ Sophisticated Experience • ✓ 24/7 Available</p>
            </div>
          </div>
        </section>

        {/* Service Image Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Premium Escort Services</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Experience the ultimate in luxury companionship with our premium escort services in Ranchi. Our exclusive companions offer sophisticated experiences with luxury amenities and personalized attention.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Luxury companions with sophisticated presentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Exclusive venues and premium amenities included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Personalized attention and high-end experiences</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/premium services.webp"
                    alt="Premium Services in Ranchi - Exclusive Luxury Companions"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Premium Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience luxury companionship with our premium escort services in Ranchi</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Luxury Standards</h3>
                <p className="text-gray-600">Premium companions with luxury presentation, sophisticated elegance, and high-end service standards for exclusive experiences.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Exclusive Venues</h3>
                <p className="text-gray-600">Access to high-end venues, luxury accommodations, and exclusive locations for premium entertainment experiences.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12a1 1 0 01-.117-1.993L9 10h2a1 1 0 01.117 1.993L11 12H9zm-4-5a1 1 0 01-.117-1.993L5 5h10a1 1 0 01.117 1.993L15 7H5zm4-4a1 1 0 01-.117-1.993L9 1h2a1 1 0 01.117 1.993L11 3H9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Personalized Service</h3>
                <p className="text-gray-600">Customized experiences with personalized attention, tailored services, and premium amenities for luxury clientele.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about premium escort services in Ranchi</p>
            </div>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Premium Services in Ranchi Now!</h2>
              <p className="text-xl mb-8">Luxury companions available 24/7 for exclusive experiences and sophisticated entertainment</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call Premium: +91-9372662471
                </a>
                <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20premium%20escort%20services%20in%20Ranchi" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                  WhatsApp Premium
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Other Premium Services</h2>
              <p className="text-xl text-gray-600">Explore our complete range of premium escort services in Ranchi</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/services/vip-escorts" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/services/vip escorts.webp"
                      alt="VIP Escorts"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">VIP Escorts</h3>
                    <p className="text-gray-600">Luxury companions for elite experiences</p>
                  </div>
                </div>
              </Link>

              <Link href="/services/celebrity-services" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/services/celebrity services.webp"
                      alt="Celebrity Services"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Celebrity Services</h3>
                    <p className="text-gray-600">High-profile celebrity companions</p>
                  </div>
                </div>
              </Link>

              <Link href="/services/elite-models" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/services/elite models.webp"
                      alt="Elite Models"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Elite Models</h3>
                    <p className="text-gray-600">Professional model companions</p>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/services" className="inline-flex items-center gap-3 bg-pink-600 text-white px-8 py-4 rounded-full font-bold hover:bg-pink-700 transition-colors shadow-lg hover:shadow-xl">
                View All Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}