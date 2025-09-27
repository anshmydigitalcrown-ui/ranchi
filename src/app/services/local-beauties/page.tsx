import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Local Beauties in Ranchi 💎 Local Escorts | Call +91-9372662471',
  description: 'Premium local beauty escort services in Ranchi featuring gorgeous local companions who know the city intimately. Experience authentic local hospitality and companionship.',
  keywords: [
    'local beauties Ranchi',
    'local escorts Ranchi',
    'local call girls Ranchi',
    'local companions Ranchi',
    'Ranchi local girls',
    'local beauty services',
    'hometown escorts Ranchi',
    'local area escorts',
    'Ranchi girls services',
    'local escort agency',
    'beautiful local women',
    'native escorts Ranchi',
    'regional beauty services',
    'local hospitality escorts',
    'authentic local companions'
  ],
  authors: [{ name: 'Ranchi Local Beauties' }],
  creator: 'Ranchi Local Beauty Services',
  publisher: 'Ranchi Premium Local Escorts',
  metadataBase: new URL('https://natasharai.in'),
  alternates: {
    canonical: '/services/local-beauties',
  },
  openGraph: {
    title: 'Local Beauties in Ranchi 💎 Local Escorts',
    description: 'Experience premium local beauty escort services in Ranchi with gorgeous local companions offering authentic hospitality and intimate city knowledge.',
    url: '/services/local-beauties',
    siteName: 'Ranchi Local Beauties',
    locale: 'en_US',
    type: 'website',
  },
}

const faqData = [
  {
    question: "What are local beauty escort services in Ranchi?",
    answer: "Local beauty escort services in Ranchi feature gorgeous native companions who possess intimate knowledge of the city, local culture, and authentic hospitality. Our local beauties provide genuine connections with hometown charm and regional expertise."
  },
  {
    question: "Are local beauties available for city tours?",
    answer: "Yes, our local beauties in Ranchi specialize in city tours, cultural experiences, local sightseeing, and authentic regional hospitality. Call +91-9372662471 for local beauty booking with city expertise and personalized local experiences."
  },
  {
    question: "What makes local beauties special compared to other escorts?",
    answer: "Local beauties in Ranchi offer authentic hometown knowledge, cultural insights, regional language skills, local connections, and genuine hospitality. They provide authentic experiences with native charm and intimate familiarity with Ranchi's best locations and culture."
  },
  {
    question: "How to book local beauty services in Ranchi safely?",
    answer: "Book local beauty services in Ranchi safely by calling +91-9372662471 or WhatsApp. Our verified local booking process includes local verification, cultural compatibility check, safety protocols, and authentic local companion selection. All local beauties are verified residents."
  },
  {
    question: "Do local beauties provide authentic cultural experiences?",
    answer: "Absolutely. Our local beauties in Ranchi provide authentic cultural experiences, traditional hospitality, local cuisine guidance, cultural tours, and genuine regional interactions across all Ranchi neighborhoods with native expertise and hometown pride."
  },
  {
    question: "Are local beauty services culturally appropriate?",
    answer: "Yes, local beauty services in Ranchi maintain cultural sensitivity with respect for local traditions, appropriate conduct, cultural awareness, and professional behavior suitable for authentic regional experiences and respectful cultural interactions."
  }
]

export default function LocalBeautiesPage() {
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
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span className="font-bold">LOCAL HOSPITALITY</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Local Beauties in <span className="text-pink-200">Ranchi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Gorgeous Local Companions with Intimate City Knowledge & Authentic Hospitality
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Local Beauties: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20local%20beauty%20escort%20services%20in%20Ranchi" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Local Beauties
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-pink-100 text-lg">✓ Local Knowledge • ✓ Cultural Expertise • ✓ Authentic Hospitality • ✓ City Tours • ✓ 24/7 Available</p>
            </div>
          </div>
        </section>

        {/* Service Image Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Local Beauty Services</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Experience authentic local hospitality with our local beauty escort services in Ranchi. Our gorgeous local companions offer genuine connections with intimate city knowledge and cultural expertise.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Native Ranchi beauties with intimate city knowledge</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Authentic cultural experiences and local hospitality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Perfect city tours and regional cultural insights</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/local beauties.webp"
                    alt="Local Beauties in Ranchi - Gorgeous Local Companions"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Local Beauties?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience authentic local charm with our local beauty escort services in Ranchi</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Intimate City Knowledge</h3>
                <p className="text-gray-600">Local beauties with deep knowledge of Ranchi&apos;s best locations, hidden gems, cultural spots, and authentic experiences.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12a1 1 0 01-.117-1.993L9 10h2a1 1 0 01.117 1.993L11 12H9zm-4-5a1 1 0 01-.117-1.993L5 5h10a1 1 0 01.117 1.993L15 7H5zm4-4a1 1 0 01-.117-1.993L9 1h2a1 1 0 01.117 1.993L11 3H9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Cultural Expertise</h3>
                <p className="text-gray-600">Authentic cultural experiences with native insights, traditional knowledge, and genuine regional hospitality.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Hometown Charm</h3>
                <p className="text-gray-600">Genuine hometown warmth and hospitality with authentic local connections and regional pride.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Local Beauties Premium Gallery</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">View our exclusive collection of verified local beauty companions with authentic photos and area-specific service details</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">🏛️ Our premium gallery features verified local Ranchi companions with authentic photos, detailed service information, and instant booking availability. Experience authentic local charm with complete cultural understanding and discretion.</p>
                
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

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about local beauty escort services in Ranchi</p>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Local Beauties in Ranchi Now!</h2>
              <p className="text-xl mb-8">Gorgeous local companions available 24/7 for authentic hospitality and city expertise</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call Local Beauties: +91-9372662471
                </a>
                <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20local%20beauty%20escort%20services%20in%20Ranchi" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                  WhatsApp Local Beauties
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
              <Link href="/services/independent-services" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/services/independent services.webp"
                      alt="Independent Services"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Independent Services</h3>
                    <p className="text-gray-600">Self-employed professional companions</p>
                  </div>
                </div>
              </Link>

              <Link href="/services/housewife-escorts" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/services/housewife escorts.webp"
                      alt="Housewife Escorts"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Housewife Escorts</h3>
                    <p className="text-gray-600">Mature housewife companions</p>
                  </div>
                </div>
              </Link>

              <Link href="/services/college-girls-escorts" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/services/college girls escorts.webp"
                      alt="College Girls Escorts"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">College Girls Escorts</h3>
                    <p className="text-gray-600">Young college girl companions</p>
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

