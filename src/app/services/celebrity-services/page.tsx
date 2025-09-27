import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Celebrity Services in Ranchi 💎 High-Profile Companions | Call +91-9372662471',
  description: 'Premium celebrity escort services in Ranchi offering high-profile entertainment companions for exclusive events, elite social gatherings, and celebrity-style experiences. Book now!',
  keywords: [
    'celebrity escorts Ranchi',
    'high-profile companions Ranchi',
    'celebrity services Ranchi',
    'elite entertainment escorts',
    'celebrity style companions',
    'high-profile event escorts',
    'celebrity level escorts Ranchi',
    'exclusive celebrity services',
    'premium celebrity companions',
    'celebrity escort agency Ranchi',
    'high-end celebrity services',
    'sophisticated celebrity escorts',
    'luxury celebrity companionship',
    'professional celebrity services',
    'celebrity entertainment Ranchi'
  ],
  authors: [{ name: 'Ranchi Celebrity Services' }],
  creator: 'Ranchi Elite Celebrity Services',
  publisher: 'Ranchi Premium Celebrity Escorts',
  metadataBase: new URL('https://natasharai.in'),
  alternates: {
    canonical: '/services/celebrity-services',
  },
  openGraph: {
    title: 'Celebrity Services in Ranchi 💎 High-Profile Companions',
    description: 'Experience premium celebrity escort services in Ranchi with high-profile entertainment companions for exclusive events and celebrity-style experiences.',
    url: '/services/celebrity-services',
    siteName: 'Ranchi Celebrity Services',
    locale: 'en_US',
    type: 'website',
  },
}

const faqData = [
  {
    question: "What are celebrity escort services in Ranchi?",
    answer: "Celebrity escort services in Ranchi provide high-profile entertainment companions with celebrity-level presentation, sophistication, and charm. Our companions are trained for exclusive events, high-end social gatherings, and premium entertainment experiences with complete professionalism."
  },
  {
    question: "Are celebrity services available for high-profile events?",
    answer: "Yes, our celebrity escort services in Ranchi are perfect for high-profile events, corporate gatherings, exclusive parties, red-carpet events, and elite social functions. Call +91-9372662471 for celebrity companion booking with immediate confirmation and professional presentation."
  },
  {
    question: "What makes celebrity companions different from regular escorts?",
    answer: "Celebrity companions in Ranchi offer star-quality presentation, media training, event expertise, sophisticated conversation skills, and experience with high-profile clients. They maintain celebrity-level elegance and professionalism suitable for exclusive entertainment and public appearances."
  },
  {
    question: "How to book celebrity services in Ranchi safely?",
    answer: "Book celebrity services in Ranchi safely by calling +91-9372662471 or WhatsApp. Our verified celebrity booking process includes profile authentication, event briefing, security protocols, and confidentiality agreements. All celebrity companions are professionally trained and verified."
  },
  {
    question: "Do celebrity escorts provide event accompaniment?",
    answer: "Absolutely. Our celebrity escorts in Ranchi specialize in event accompaniment including corporate events, gala dinners, awards ceremonies, exclusive parties, business launches, and high-society gatherings with perfect etiquette and celebrity-level presentation across all Ranchi locations."
  },
  {
    question: "Are celebrity services completely confidential?",
    answer: "Yes, celebrity services in Ranchi maintain the highest confidentiality standards with NDAs, privacy protection, discrete arrival/departure, media handling protocols, and professional conduct suitable for high-profile clients and public figures."
  }
]

export default function CelebrityServicesPage() {
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
              <span className="font-bold">CELEBRITY ENTERTAINMENT</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Celebrity Services in <span className="text-pink-200">Ranchi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              High-Profile Entertainment Companions for Exclusive Events & Celebrity-Style Experiences
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Celebrity Booking: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20celebrity%20escort%20services%20in%20Ranchi" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Celebrity Booking
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-pink-100 text-lg">✓ Celebrity-Level Presentation • ✓ High-Profile Events • ✓ Media Training • ✓ Complete Discretion • ✓ 24/7 Available</p>
            </div>
          </div>
        </section>

        {/* Service Image Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Celebrity Escort Services</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Experience high-profile entertainment with our celebrity escort services in Ranchi. Our companions offer star-quality presentation for exclusive events and celebrity-style experiences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Star-quality presentation and celebrity-level charm</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Perfect for high-profile events and exclusive gatherings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Media training and sophisticated conversation skills</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/celebrity services.webp"
                    alt="Celebrity Services in Ranchi - High-Profile Entertainment Companions"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Celebrity Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience star-quality companionship with our celebrity-level escort services in Ranchi</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Celebrity-Level Presentation</h3>
                <p className="text-gray-600">Star-quality presentation with celebrity charm, sophisticated elegance, and media-ready appearance for high-profile engagements.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">High-Profile Events</h3>
                <p className="text-gray-600">Perfect for exclusive events, corporate functions, red-carpet occasions, and elite social gatherings with professional event expertise.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Media & Privacy Training</h3>
                <p className="text-gray-600">Professional media handling, privacy protection, and confidentiality protocols suitable for public figures and celebrity-level discretion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about celebrity escort services in Ranchi</p>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Celebrity Services in Ranchi Now!</h2>
              <p className="text-xl mb-8">High-profile entertainment companions available 24/7 for exclusive events and celebrity experiences</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call Celebrity Booking: +91-9372662471
                </a>
                <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20celebrity%20escort%20services%20in%20Ranchi" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Celebrity Booking
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Verified Gallery Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100 to-rose-100 px-6 py-3 rounded-full shadow-lg mb-6 border border-pink-200">
                <div className="bg-pink-500 text-white p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-bold text-pink-800">PREMIUM VERIFIED GALLERY</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Celebrity Services Premium Gallery</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">View our exclusive collection of verified celebrity-style companions with authentic photos and star-quality service details</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-pink-700 mb-2">100% Verified</h3>
                  <p className="text-sm text-gray-600">All photos authentic & verified</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-pink-700 mb-2">Celebrity Quality</h3>
                  <p className="text-sm text-gray-600">Star-level companions only</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-pink-700 mb-2">Complete Privacy</h3>
                  <p className="text-sm text-gray-600">Discreet & confidential</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-pink-700 mb-2">24/7 Available</h3>
                  <p className="text-sm text-gray-600">Instant booking support</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">⭐ Our premium gallery features verified celebrity-style companions with authentic photos, detailed service information, and instant booking availability. Experience star-quality companionship with complete discretion and professionalism.</p>
                
                <div className="flex justify-center">
                  <Link 
                    href="/gallery" 
                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 justify-center"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    View Premium Gallery
                  </Link>
                </div>
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

              <Link href="/services/event-companion" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/services/event companion.webp"
                      alt="Event Companion"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Event Companion</h3>
                    <p className="text-gray-600">Elegant event accompaniment</p>
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

