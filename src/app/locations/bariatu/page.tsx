import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Escorts in Bariatu 💎 Premium VIP Services 24/7 | Call +91-9372662471',
  description: 'Premium escorts in Bariatu Ranchi with verified profiles, professional services available 24/7. VIP escorts, elite models in Bariatu Housing Colony. Instant booking +91-9372662471.',
  keywords: [
    'escorts in bariatu',
    'bariatu escorts',
    'escorts bariatu ranchi',
    'bariatu housing colony escorts',
    'escort service bariatu',
    'call girls in bariatu',
    'premium escorts bariatu',
    'vip escorts bariatu',
    'independent escorts bariatu',
    'elite escorts bariatu',
    'professional escorts bariatu',
    'verified escorts bariatu',
    'escort booking bariatu',
    'bariatu escorts near me',
    'best escorts bariatu',
    'top escorts bariatu',
    'luxury escorts bariatu',
    'high class escorts bariatu',
    'escort services bariatu ranchi',
    'bariatu escort agency'
  ],
  openGraph: {
    title: 'Escorts in Bariatu - Premium VIP Services Available 24/7',
    description: 'Premium escorts in Bariatu Ranchi with verified profiles and professional services. VIP companions available 24/7 in Bariatu Housing Colony.',
    images: [{
      url: '/images/services/vip escorts.webp',
      width: 1200,
      height: 630,
      alt: 'Premium Escorts in Bariatu - VIP Services',
    }],
    type: 'website',
    siteName: 'Premium Ranchi Escorts',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escorts in Bariatu - Premium VIP Services 24/7',
    description: 'Premium verified escorts in Bariatu with professional services. Call +91-9372662471 for instant booking.',
    images: ['/images/services/vip escorts.webp'],
    creator: '@RanchiEscorts',
  },
  alternates: {
    canonical: '/locations/bariatu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function BariatuPage() {
  const services = [
    { id: 1, title: "VIP Escorts in Bariatu", subtitle: "Premium companions in Bariatu housing colony", category: "VIP", image: "/images/services/vip escorts.webp", link: "tel:+919372662471" },
    { id: 2, title: "Celebrity Escorts Bariatu", subtitle: "Star-like companions in Bariatu area", category: "CELEBRITY", image: "/images/services/celebrity services.webp", link: "tel:+919372662471" },
    { id: 3, title: "Elite Models Bariatu", subtitle: "Professional models in housing colony", category: "ELITE", image: "/images/services/elite models.webp", link: "tel:+919372662471" },
    { id: 4, title: "Premium Services Bariatu", subtitle: "Luxury experience in Bariatu residential area", category: "PREMIUM", image: "/images/services/premium services.webp", link: "tel:+919372662471" },
    { id: 5, title: "Independent Escorts Bariatu", subtitle: "Professional independent companions", category: "INDEPENDENT", image: "/images/services/independent services.webp", link: "tel:+919372662471" }
  ];

  const areas = [
    { name: "Bariatu Housing Colony", description: "Primary residential housing colony with modern amenities", landmarks: "Housing Blocks, Community Centers, Parks", responseTime: "12-18 minutes" },
    { name: "Bariatu Market Area", description: "Local commercial market with shops and services", landmarks: "Market Complex, Commercial Shops, Services", responseTime: "10-15 minutes" },
    { name: "Bariatu Main Road", description: "Main connecting road with transport facilities", landmarks: "Transport Hub, Bus Routes, Commercial Areas", responseTime: "10-15 minutes" },
    { name: "Bariatu Extension", description: "Extended residential development area", landmarks: "New Housing Projects, Modern Facilities", responseTime: "15-20 minutes" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      <main>
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/services/vip escorts.webp" alt="Escorts in Bariatu" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-500/80 to-rose-600/90"></div>
          </div>
          <div className="relative max-w-6xl mx-auto z-10">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <div className="bg-white text-pink-600 p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <span className="font-bold text-white">BARIATU</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Escorts in Bariatu</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">Premium Verified Companions in Bariatu Housing Colony & Residential Areas</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Call Now: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Bariatu" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                WhatsApp Booking
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Premium Escort Services in Bariatu</h2>
              <p className="text-lg text-pink-600 max-w-4xl mx-auto">Explore verified escort services available 24/7 in Bariatu areas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 9).map((service) => (
                <div key={service.id} className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                    <div className="absolute top-3 right-3 z-10"><span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg uppercase">{service.category}</span></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.subtitle}</p>
                    <a href={service.link} className="block w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg text-center font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">Call Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-pink-800 mb-6">Why Choose Our Escorts in Bariatu?</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500 text-white p-2 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-pink-700 mb-2">Premium Housing Colony Access</h3>
                      <p className="text-gray-700">Specialized escorts familiar with Bariatu Housing Colony layout, residential protocols, and discrete access ensuring seamless service delivery in this upscale residential area.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500 text-white p-2 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-pink-700 mb-2">100% Verified Profiles</h3>
                      <p className="text-gray-700">All Bariatu escorts undergo rigorous verification including identity authentication, health certificates, and professional training ensuring authentic, safe, and reliable companions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500 text-white p-2 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-pink-700 mb-2">VIP & Celebrity Services</h3>
                      <p className="text-gray-700">Premium VIP escort experiences in Bariatu featuring celebrity-style companions, luxury amenities, and exclusive services tailored for discerning clients in this upscale area.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500 text-white p-2 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-pink-700 mb-2">24/7 Quick Response</h3>
                      <p className="text-gray-700">Round-the-clock escort services in Bariatu with fastest response times (10-18 minutes) and instant booking confirmation through +91-9372662471 for immediate assistance.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="/images/services/elite models.webp" 
                  alt="Premium Escorts in Bariatu Housing Colony" 
                  width={500} 
                  height={600} 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-2xl shadow-lg">
                  <p className="font-bold text-lg">Available Now</p>
                  <p className="text-sm opacity-90">Bariatu Housing Colony</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-pink-800 mb-12 text-center">Frequently Asked Questions - Escorts in Bariatu</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-700 mb-3">How do I book an escort in Bariatu Housing Colony?</h3>
                  <p className="text-gray-700">Simply call +91-9372662471 for instant booking in Bariatu Housing Colony. Our escorts are familiar with colony protocols and provide discrete services with quick 10-18 minute response times.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-700 mb-3">Are escorts available near Bariatu Market Area?</h3>
                  <p className="text-gray-700">Yes, our escorts provide services throughout Bariatu including Market Area, Main Road, Extension areas, and all residential complexes with professional and discrete arrangements.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-700 mb-3">What makes Bariatu escort services premium?</h3>
                  <p className="text-gray-700">Our Bariatu escorts are specially trained for upscale residential areas, undergo strict verification, offer VIP experiences, and provide celebrity-style services matching the premium housing colony environment.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-700 mb-3">Do you provide outcall services in Bariatu?</h3>
                  <p className="text-gray-700">Professional outcall services available throughout Bariatu to housing colony residences, guest houses, and approved venues with complete discretion and verified companions.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-700 mb-3">What are response times for Bariatu escorts?</h3>
                  <p className="text-gray-700">Quick response times: 10-15 minutes for Market Area and Main Road, 12-18 minutes for Housing Colony, and 15-20 minutes for Extension areas with guaranteed arrival confirmation.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-700 mb-3">Are your escorts safe and verified in Bariatu?</h3>
                  <p className="text-gray-700">All Bariatu escorts undergo comprehensive verification including identity checks, health screenings, background verification, and professional training ensuring complete safety and authenticity.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-700 mb-3">What services are available in Bariatu?</h3>
                  <p className="text-gray-700">Complete range including VIP escorts, celebrity services, elite models, independent companions, premium services, travel companions, and customized experiences in Bariatu.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-700 mb-3">How is privacy maintained in residential areas?</h3>
                  <p className="text-gray-700">Complete privacy through secure communication, discrete entry protocols, confidential arrangements, and professional conduct ensuring absolute discretion in Bariatu Housing Colony.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Bariatu Areas We Cover</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {areas.map((area, i) => (
                <div key={i} className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-pink-700 mb-4">{area.name}</h3>
                  <p className="text-gray-700 mb-2">{area.description}</p>
                  <p className="text-gray-600 text-sm mb-4">{area.landmarks}</p>
                  <p className="text-green-600 font-semibold">Response: {area.responseTime}</p>
                  <a href="tel:+919372662471" className="mt-4 inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-bold transition-all duration-300">Book Now</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Premium Escorts in Bariatu Now!</h2>
            <p className="text-xl mb-8">Professional verified companions available 24/7 in Bariatu Housing Colony</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Now: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Bariatu" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Booking
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


