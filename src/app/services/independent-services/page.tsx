import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Independent Services in Ranchi 💎 Independent Escorts | Call +91-9372662471',
  description: 'Premium independent escort services in Ranchi featuring self-employed professional companions offering personalized experiences and genuine connections. Book now!',
  keywords: [
    'independent escorts Ranchi',
    'independent services Ranchi',
    'self employed escorts',
    'independent companions',
    'private escort services',
    'independent call girls',
    'freelance escorts Ranchi',
    'independent escort agency',
    'private companions Ranchi',
    'independent escort booking',
    'self managed escorts',
    'independent escort services',
    'genuine independent escorts',
    'professional independent services',
    'autonomous escort services'
  ],
  authors: [{ name: 'Ranchi Independent Services' }],
  creator: 'Ranchi Independent Escort Services',
  publisher: 'Ranchi Premium Independent Escorts',
  metadataBase: new URL('https://ranchi-mu.vercel.app'),
  alternates: {
    canonical: '/services/independent-services',
  },
  openGraph: {
    title: 'Independent Services in Ranchi 💎 Independent Escorts',
    description: 'Experience premium independent escort services in Ranchi with self-employed professional companions offering personalized and genuine experiences.',
    url: '/services/independent-services',
    siteName: 'Ranchi Independent Services',
    locale: 'en_US',
    type: 'website',
  },
}

const faqData = [
  {
    question: "What are independent escort services in Ranchi?",
    answer: "Independent escort services in Ranchi feature self-employed professional companions who operate autonomously, offering personalized experiences with genuine connections. Our independent escorts provide flexible, authentic companionship without agency restrictions."
  },
  {
    question: "Are independent escorts available for private meetings?",
    answer: "Yes, our independent escorts in Ranchi specialize in private meetings, personal companionship, intimate conversations, and customized experiences. Call +91-9372662471 for independent escort booking with direct communication and personalized service arrangements."
  },
  {
    question: "What makes independent escorts different from agency escorts?",
    answer: "Independent escorts in Ranchi offer direct communication, personalized service, flexible scheduling, authentic connections, and customized experiences. They manage their own services, ensuring genuine interactions and tailored companionship based on individual preferences."
  },
  {
    question: "How to book independent services in Ranchi safely?",
    answer: "Book independent services in Ranchi safely by calling +91-9372662471 or WhatsApp. Our verified independent booking process includes identity confirmation, service discussion, safety protocols, and direct communication. All independent escorts are professionally screened and verified."
  },
  {
    question: "Do independent escorts provide outcall services?",
    answer: "Absolutely. Our independent escorts in Ranchi provide outcall services to hotels, private residences, and discreet locations with complete professionalism and privacy protection across all Ranchi areas including incall options."
  },
  {
    question: "Are independent services completely confidential?",
    answer: "Yes, independent services in Ranchi maintain strict confidentiality with privacy protection, discrete meetings, personal data security, and professional discretion suitable for clients seeking authentic and private companionship experiences."
  }
]

export default function IndependentServicesPage() {
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
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <span className="font-bold">INDEPENDENT PROFESSIONALS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Independent Services in <span className="text-pink-200">Ranchi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Self-Employed Professional Companions for Personalized Experiences & Genuine Connections
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Independent: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20independent%20escort%20services%20in%20Ranchi" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Independent
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-pink-100 text-lg">✓ Self-Employed • ✓ Direct Communication • ✓ Personalized Service • ✓ Genuine Connections • ✓ 24/7 Available</p>
            </div>
          </div>
        </section>

        {/* Service Image Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Independent Escort Services</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Experience authentic companionship with our independent escort services in Ranchi. Our self-employed companions offer personalized experiences with genuine connections and flexible arrangements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Self-employed professionals with direct communication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Personalized experiences and flexible scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Genuine connections and authentic companionship</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/independent services.webp"
                    alt="Independent Services in Ranchi - Self-Employed Professional Companions"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Independent Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience authentic companionship with our independent escort services in Ranchi</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Direct Communication</h3>
                <p className="text-gray-600">Communicate directly with independent companions for personalized service arrangements and authentic interactions.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Flexible Services</h3>
                <p className="text-gray-600">Customized experiences with flexible scheduling and personalized service options tailored to your preferences.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Genuine Connections</h3>
                <p className="text-gray-600">Authentic relationships and genuine connections with independent companions focused on meaningful interactions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about independent escort services in Ranchi</p>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Independent Services in Ranchi Now!</h2>
              <p className="text-xl mb-8">Self-employed companions available 24/7 for personalized experiences and genuine connections</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call Independent: +91-9372662471
                </a>
                <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20independent%20escort%20services%20in%20Ranchi" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                  WhatsApp Independent
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
              <Link href="/services/local-beauties" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/services/local beauties.webp"
                      alt="Local Beauties"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Local Beauties</h3>
                    <p className="text-gray-600">Beautiful local companions</p>
                  </div>
                </div>
              </Link>

              <Link href="/services/outcall-services" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/services/outcall services.jpg"
                      alt="Outcall Services"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Outcall Services</h3>
                    <p className="text-gray-600">Professional outcall companions</p>
                  </div>
                </div>
              </Link>

              <Link href="/services/premium-services" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/services/premium services.webp"
                      alt="Premium Services"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Services</h3>
                    <p className="text-gray-600">Exclusive premium experiences</p>
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