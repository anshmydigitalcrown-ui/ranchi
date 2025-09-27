import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Travel Companion in Ranchi 💎 Travel Escort Services | Call +91-9372662471',
  description: 'Premium travel companion services in Ranchi offering sophisticated companions for business trips, vacations, and travel experiences. Professional travel escorts available.',
  keywords: [
    'travel companion Ranchi',
    'travel escorts Ranchi',
    'business travel companions',
    'vacation companions',
    'travel escort services',
    'companion for travel',
    'travel partner escorts',
    'business trip escorts',
    'holiday companions',
    'travel escort booking',
    'professional travel companions',
    'touring companions',
    'travel girlfriend experience',
    'vacation escort services',
    'travel companionship Ranchi'
  ],
  authors: [{ name: 'Ranchi Travel Companions' }],
  creator: 'Ranchi Travel Companion Services',
  publisher: 'Ranchi Premium Travel Escorts',
  metadataBase: new URL('https://natasharai.in'),
  alternates: {
    canonical: '/services/travel-companion',
  },
  openGraph: {
    title: 'Travel Companion in Ranchi 💎 Travel Escort Services',
    description: 'Experience premium travel companion services in Ranchi with sophisticated escorts for business trips, vacations, and travel experiences.',
    url: '/services/travel-companion',
    siteName: 'Ranchi Travel Companions',
    locale: 'en_US',
    type: 'website',
  },
}

const faqData = [
  {
    question: "What are travel companion services in Ranchi?",
    answer: "Travel companion services in Ranchi provide sophisticated companions for business trips, vacations, and travel experiences. Our travel escorts offer professional companionship during your journey, ensuring you have engaging conversation and pleasant company throughout your travels."
  },
  {
    question: "Are travel companions available for business trips?",
    answer: "Yes, our travel companions in Ranchi specialize in business travel, corporate trips, conferences, and professional events. Call +91-9372662471 for travel companion booking with professional, articulate companions perfect for business environments and networking events."
  },
  {
    question: "Do travel escorts accompany on vacations?",
    answer: "Absolutely. Our travel escorts in Ranchi provide vacation companionship for holidays, leisure trips, sightseeing tours, and recreational travel with engaging personality, cultural knowledge, and adventurous spirit for memorable vacation experiences."
  },
  {
    question: "How to book travel companion services safely?",
    answer: "Book travel companion services in Ranchi safely by calling +91-9372662471 or WhatsApp. Our verified travel booking process includes companion verification, travel documentation, itinerary planning, and professional travel protocols for secure and enjoyable experiences."
  },
  {
    question: "Do travel companions provide overnight services?",
    answer: "Yes, our travel companions in Ranchi provide overnight travel services for extended trips, multi-day journeys, business tours, and vacation packages with professional accommodation arrangements and complete travel companionship throughout your journey."
  },
  {
    question: "Are travel companion services confidential?",
    answer: "Absolutely. Travel companion services in Ranchi maintain complete confidentiality with discrete travel arrangements, professional conduct during public appearances, privacy protection, and confidential service protocols suitable for business executives and private travelers."
  }
]

export default function TravelCompanionPage() {
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
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="font-bold">TRAVEL EXPERIENCES</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Travel Companion in <span className="text-pink-200">Ranchi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Sophisticated Companions for Business Trips, Vacations & Travel Experiences
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Travel Companion: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20travel%20companion%20services%20in%20Ranchi" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Travel Companion
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-pink-100 text-lg">✓ Business Travel • ✓ Vacation Companion • ✓ Cultural Tours • ✓ Professional Service • ✓ 24/7 Available</p>
            </div>
          </div>
        </section>

        {/* Service Image Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Travel Companion Services</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Experience exceptional travel companionship with our travel companion services in Ranchi. Our sophisticated companions make your business trips and vacations more enjoyable with engaging conversation and professional presence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Professional companions for business and leisure travel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Perfect for conferences, vacations, and cultural tours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Sophisticated conversation and cultural knowledge</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/travel companion.webp"
                    alt="Travel Companion in Ranchi - Sophisticated Travel Escorts"
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

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about travel companion services in Ranchi</p>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Travel Companion in Ranchi Now!</h2>
              <p className="text-xl mb-8">Sophisticated companions available for business trips, vacations, and travel experiences</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call Travel Companion: +91-9372662471
                </a>
                <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20travel%20companion%20services%20in%20Ranchi" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                  WhatsApp Travel Companion
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

