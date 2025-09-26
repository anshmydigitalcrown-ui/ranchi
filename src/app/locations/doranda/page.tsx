import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Escorts in Doranda 💎 Premium VIP Services 24/7 | Call +91-9372662471',
  description: 'Premium escorts in Doranda Ranchi with verified profiles, professional services available 24/7. VIP escorts near Doranda Market, Railway Station. Instant booking +91-9372662471.',
  keywords: [
    'escorts in doranda',
    'doranda escorts',
    'escorts doranda ranchi',
    'doranda market escorts',
    'escort service doranda',
    'call girls in doranda',
    'premium escorts doranda',
    'vip escorts doranda',
    'independent escorts doranda',
    'elite escorts doranda',
    'professional escorts doranda',
    'verified escorts doranda',
    'escort booking doranda',
    'doranda escorts near me',
    'best escorts doranda',
    'top escorts doranda',
    'luxury escorts doranda',
    'high class escorts doranda',
    'doranda station escorts',
    'doranda railway escorts'
  ],
  openGraph: {
    title: 'Escorts in Doranda - Premium VIP Services Available 24/7',
    description: 'Premium escorts in Doranda Ranchi with verified profiles and professional services. VIP companions available 24/7 near Doranda Market.',
    images: [{
      url: '/images/services/vip escorts.webp',
      width: 1200,
      height: 630,
      alt: 'Premium Escorts in Doranda - VIP Services',
    }],
    type: 'website',
    siteName: 'Premium Ranchi Escorts',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escorts in Doranda - Premium VIP Services 24/7',
    description: 'Premium verified escorts in Doranda with professional services. Call +91-9372662471 for instant booking.',
    images: ['/images/services/vip escorts.webp'],
    creator: '@RanchiEscorts',
  },
  alternates: {
    canonical: '/locations/doranda',
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

export default function DorandaPage() {
  const services = [
    { id: 1, title: "VIP Escorts in Doranda", subtitle: "Premium companions in Doranda market area", category: "VIP", image: "/images/services/vip escorts.webp", link: "tel:+919372662471" },
    { id: 2, title: "Celebrity Escorts Doranda", subtitle: "Star-like companions in Doranda locality", category: "CELEBRITY", image: "/images/services/celebrity services.webp", link: "tel:+919372662471" },
    { id: 3, title: "Elite Models Doranda", subtitle: "Professional models in market vicinity", category: "ELITE", image: "/images/services/elite models.webp", link: "tel:+919372662471" },
    { id: 4, title: "Premium Services Doranda", subtitle: "Luxury experience in Doranda area", category: "PREMIUM", image: "/images/services/premium services.webp", link: "tel:+919372662471" },
    { id: 5, title: "Independent Escorts Doranda", subtitle: "Professional independent companions", category: "INDEPENDENT", image: "/images/services/independent services.webp", link: "tel:+919372662471" }
  ];

  const areas = [
    { name: "Doranda Market", description: "Primary commercial market with shops and business establishments", landmarks: "Market Complex, Commercial Shops, Trading Centers", responseTime: "10-15 minutes" },
    { name: "Doranda Station Area", description: "Railway station vicinity with transport facilities", landmarks: "Railway Station, Transport Hub, Hotels", responseTime: "10-15 minutes" },
    { name: "Doranda Residential", description: "Residential areas with family housing", landmarks: "Housing Colonies, Schools, Community Centers", responseTime: "12-18 minutes" },
    { name: "Doranda Commercial Zone", description: "Business and commercial establishments area", landmarks: "Offices, Banks, Commercial Buildings", responseTime: "10-15 minutes" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      <main>
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/services/vip escorts.webp" alt="Escorts in Doranda" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-500/80 to-rose-600/90"></div>
          </div>
          <div className="relative max-w-6xl mx-auto z-10">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <div className="bg-white text-pink-600 p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <span className="font-bold text-white">DORANDA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Escorts in Doranda</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">Premium Verified Companions in Doranda Market & Commercial Areas</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Call Now: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Doranda" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                WhatsApp Booking
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Premium Escort Services in Doranda</h2>
              <p className="text-lg text-pink-600 max-w-4xl mx-auto">Explore verified escort services available 24/7 in Doranda areas</p>
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

        {/* Why Choose Doranda Escorts Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Why Choose Our Doranda Escort Services?</h2>
              <p className="text-xl text-gray-700">Professional companions in Doranda&apos;s commercial and residential heart</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-pink-700 mb-4">100% Verified Profiles</h3>
                <p className="text-gray-600">All escorts undergo strict verification and background checks for your safety and satisfaction in Doranda</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-pink-700 mb-4">24/7 Availability</h3>
                <p className="text-gray-600">Round-the-clock escort services in all Doranda areas with instant booking confirmation</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-pink-700 mb-4">Local Area Expertise</h3>
                <p className="text-gray-600">Deep knowledge of Doranda&apos;s premium locations, hotels, and discrete meeting venues</p>
              </div>
            </div>
          </div>
        </section>

        {/* Verification & Safety Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Complete Safety & Verification</h2>
              <p className="text-xl text-gray-700">Your safety and privacy are our top priorities in Doranda</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">ID Verified</h3>
                <p className="text-gray-600 text-sm">Government ID verification for all Doranda escorts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Medical Check</h3>
                <p className="text-gray-600 text-sm">Regular health screening and STD testing completed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Privacy Secure</h3>
                <p className="text-gray-600 text-sm">100% confidential bookings and discrete services</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">5-Star Rated</h3>
                <p className="text-gray-600 text-sm">Consistently top-rated escorts in Doranda area</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Doranda Areas We Cover</h2>
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

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-700">Common questions about Doranda escort services</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: Are Doranda escorts available 24/7?</h3>
                <p className="text-gray-700">A: Yes, we provide 24/7 escort services in all Doranda areas including the main market, commercial zones, and residential sectors. Our companions are available for incall and outcall bookings throughout the day and night.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: Which areas in Doranda do you cover?</h3>
                <p className="text-gray-700">A: We provide services across all major Doranda locations including Doranda Market, Commercial Complex, residential areas near Doranda Railway Station, and surrounding neighborhoods. Our response time is typically 15-30 minutes depending on your location.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: How do I verify escort authenticity in Doranda?</h3>
                <p className="text-gray-700">A: All our Doranda escorts undergo strict verification including government ID checks, medical screening, and background verification. We provide recent photos and detailed profiles to ensure complete transparency and authenticity.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: What are your rates for Doranda escort services?</h3>
                <p className="text-gray-700">A: Our rates vary based on escort selection, service duration, and specific requirements. Contact us directly for detailed pricing information. We offer competitive rates for premium escort services in the Doranda area.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: Is privacy guaranteed for Doranda bookings?</h3>
                <p className="text-gray-700">A: Absolutely. We maintain complete confidentiality for all clients. Our discrete booking process, secure payment options, and professional approach ensure your privacy is fully protected throughout the Doranda escort service experience.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: How quickly can you arrange escort services in Doranda?</h3>
                <p className="text-gray-700">A: We typically arrange escort services within 30-60 minutes for Doranda locations. For advance bookings, we can guarantee specific escort availability and timing. Emergency bookings are also available with premium charges.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: Do you provide hotel recommendations in Doranda?</h3>
                <p className="text-gray-700">A: Yes, we can recommend discrete and comfortable hotels near Doranda Market and commercial areas. Our team has extensive knowledge of local accommodations that ensure privacy and comfort for your escort service experience.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: What safety measures are in place for Doranda escorts?</h3>
                <p className="text-gray-700">A: We prioritize safety with regular health screenings, background checks, emergency contact protocols, and 24/7 support. All Doranda escorts are trained in safety procedures and client interaction protocols for secure service delivery.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Premium Escorts in Doranda Now!</h2>
            <p className="text-xl mb-8">Professional verified companions available 24/7 in Doranda Market & Commercial Areas</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Now: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Doranda" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
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


