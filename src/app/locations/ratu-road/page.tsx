import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Escorts in Ratu Road 💎 Premium Services | Call Now +91-9372662471',
  description: 'Premium escorts in Ratu Road with verified profiles and professional services. Available 24/7 at Ratu Road Junction and surrounding areas. Call +91-9372662471 for instant booking.',
  keywords: [
    'escorts in ratu road', 'ratu road escorts', 'escorts ratu road ranchi', 'ratu road junction escorts', 'escort service ratu road',
    'ratu road call girls', 'premium escorts ratu road', 'vip escorts ratu road junction', 'independent escorts ratu road',
    'verified escorts ratu road', 'professional escorts ratu road market', 'elite escorts ratu road ranchi', 
    'high class escorts ratu road', 'luxury escorts ratu road', 'model escorts ratu road', 'housewife escorts ratu road',
    'college girl escorts ratu road', 'mature escorts ratu road', 'russian escorts ratu road', 'foreign escorts ratu road',
    'outcall escorts ratu road', 'incall escorts ratu road', 'hotel escorts ratu road', '24x7 escorts ratu road'
  ],
  openGraph: {
    title: 'Premium Escorts in Ratu Road | Verified Companions | Call +91-9372662471',
    description: 'Book verified premium escorts in Ratu Road area. Professional companions available 24/7 at Ratu Road Junction, Market, and residential areas. Instant booking with complete privacy.',
    url: 'https://ranchiescorts.in/locations/ratu-road',
    siteName: 'Ranchi Escorts',
    type: 'website',
    locale: 'en_IN',
    images: [{
      url: '/images/services/premium-services.webp',
      width: 1200,
      height: 630,
      alt: 'Premium Escorts in Ratu Road - Professional Companions'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Escorts in Ratu Road | Professional Companions',
    description: 'Verified premium escorts available 24/7 in Ratu Road area. Professional service with complete privacy. Call +91-9372662471',
    images: ['/images/services/premium-services.webp']
  },
  alternates: {
    canonical: 'https://ranchiescorts.in/locations/ratu-road'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
}

export default function RatuRoadPage() {
  const services = Array.from({length:5}, (_, i) => ({
    id: i+1, 
    title: `${['VIP Escorts', 'Celebrity Escorts', 'Elite Models', 'Premium Services', 'Independent Escorts'][i]} in Ratu Road`, 
    subtitle: `${['Premium companions', 'Star-like companions', 'Professional models', 'Luxury experience', 'Professional independent companions'][i]} in Ratu Road area`, 
    category: ['VIP', 'CELEBRITY', 'ELITE', 'PREMIUM', 'INDEPENDENT'][i], 
    image: ['/images/services/vip escorts.webp', '/images/services/celebrity services.webp', '/images/services/elite models.webp', '/images/services/premium services.webp', '/images/services/independent services.webp'][i], 
    link: "tel:+919372662471"
  }));

  const areas = [
    { name: "Ratu Road Junction", description: "Major junction connecting multiple city areas", landmarks: "Junction Point, Transport Hub, Commercial Areas", responseTime: "10-15 minutes" },
    { name: "Ratu Road Market", description: "Commercial market area with shops and services", landmarks: "Market Complex, Shopping Areas, Local Businesses", responseTime: "10-15 minutes" },
    { name: "Ratu Road Residential", description: "Residential areas along Ratu Road", landmarks: "Housing Colonies, Schools, Community Centers", responseTime: "12-18 minutes" },
    { name: "Ratu Road Extension", description: "Extended road area with development projects", landmarks: "New Developments, Modern Facilities", responseTime: "15-20 minutes" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      <main>
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/services/vip escorts.webp" alt="Escorts in Ratu Road" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-500/80 to-rose-600/90"></div>
          </div>
          <div className="relative max-w-6xl mx-auto z-10">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <div className="bg-white text-pink-600 p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <span className="font-bold text-white">RATU ROAD</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Escorts in Ratu Road</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">Premium Verified Companions at Ratu Road Junction & Surrounding Areas</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Call Now: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Ratu%20Road" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                WhatsApp Booking
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-8 text-center">Premium Escort Services in Ratu Road</h2>
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

        {/* Why Choose Ratu Road Escorts Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Why Choose Our Ratu Road Escort Services?</h2>
              <p className="text-xl text-gray-700">Professional companions at Ratu Road Junction and major transport hub</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-pink-700 mb-4">Transport Hub Location</h3>
                <p className="text-gray-600">Strategic location at Ratu Road Junction ensures easy accessibility from all parts of Ranchi city</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-pink-700 mb-4">Quick Response Time</h3>
                <p className="text-gray-600">Fastest escort availability in Ratu Road area with 10-15 minute response time for urgent bookings</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-pink-700 mb-4">Commercial Area Expertise</h3>
                <p className="text-gray-600">Extensive knowledge of Ratu Road market areas, commercial complexes, and discrete meeting locations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Verification & Safety Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Complete Safety & Verification</h2>
              <p className="text-xl text-gray-700">Your safety and privacy are paramount in Ratu Road area services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Junction Verified</h3>
                <p className="text-gray-600 text-sm">All escorts verified at Ratu Road Junction checkpoint for authenticity</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Health Certified</h3>
                <p className="text-gray-600 text-sm">Regular medical screening from nearby Ratu Road healthcare facilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Discrete Service</h3>
                <p className="text-gray-600 text-sm">Complete privacy protection using Ratu Road area knowledge</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Transport Hub Rated</h3>
                <p className="text-gray-600 text-sm">Top-rated escorts specializing in Ratu Road Junction area</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">Ratu Road Areas We Cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {areas.map((area, i) => (
                <div key={i} className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-pink-700 mb-4">{area.name}</h3>
                  <p className="text-gray-700 mb-4">{area.description}</p>
                  <p className="text-gray-600 text-sm mb-4">{area.landmarks}</p>
                  <p className="text-green-600 font-semibold mb-4">Response: {area.responseTime}</p>
                  <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-bold">Book Now</a>
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
              <p className="text-xl text-gray-700">Common questions about Ratu Road escort services</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: How quickly can you arrange escorts at Ratu Road Junction?</h3>
                <p className="text-gray-700">A: We provide the fastest escort services at Ratu Road Junction with typical response times of 10-15 minutes. Being located at a major transport hub, our escorts can reach any location in the Ratu Road area quickly and efficiently.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: Which specific areas in Ratu Road do you cover?</h3>
                <p className="text-gray-700">A: We provide comprehensive coverage across Ratu Road Junction, Ratu Road Market, residential areas, and the extended Ratu Road zone. Our services include the commercial complex, shopping areas, and all nearby residential colonies.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: Are your Ratu Road escorts available for both incall and outcall?</h3>
                <p className="text-gray-700">A: Yes, we offer both incall and outcall services in the Ratu Road area. For incall, we can recommend discrete locations near Ratu Road Junction. For outcall, our escorts can visit your hotel, residence, or preferred location in the area.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: What makes Ratu Road location advantageous for escort services?</h3>
                <p className="text-gray-700">A: Ratu Road Junction is a major transport hub connecting multiple city areas, making it highly accessible. The area has commercial facilities, hotels, and discrete meeting venues, plus excellent connectivity to all parts of Ranchi.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: Do you provide hotel recommendations near Ratu Road?</h3>
                <p className="text-gray-700">A: Absolutely! We have partnerships with several discrete hotels and accommodations near Ratu Road Junction and market area. We can recommend suitable venues based on your preferences and budget requirements.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: What are your rates for Ratu Road escort services?</h3>
                <p className="text-gray-700">A: Our rates are competitive and vary based on escort selection, service duration, and specific requirements. Being a major junction area, we offer premium services at reasonable rates. Contact us for detailed pricing information.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: How do you ensure safety in the busy Ratu Road area?</h3>
                <p className="text-gray-700">A: We have enhanced safety protocols for the busy Ratu Road Junction area including escort tracking, emergency contacts, safe meeting points, and coordination with local security. All escorts are briefed on area-specific safety measures.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-700 mb-4">Q: Can you arrange services during peak traffic hours at Ratu Road?</h3>
                <p className="text-gray-700">A: Yes, our escorts are familiar with Ratu Road traffic patterns and peak hours. We plan bookings accordingly and have alternative routes mapped out to ensure timely arrivals even during busy commercial hours.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Premium Escorts in Ratu Road Now!</h2>
            <p className="text-xl mb-8">Professional verified companions available 24/7 at Ratu Road Junction</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Ratu%20Road" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


