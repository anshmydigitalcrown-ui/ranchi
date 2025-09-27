import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Premium Escort Services in Ranchi 💎 #1 Elite Companionship Across All Ranchi Locations',
  description: 'Discover comprehensive premium escort services available in every major Ranchi location. From elite VIP services to international models - verified companions everywhere with 24/7 service and complete discretion.',
  keywords: [
    'escort services Ranchi',
    'premium escorts Ranchi',
    'elite companions Ranchi',
    'VIP escort services Ranchi',
    'professional escorts Ranchi',
    'Ranchi escort girls',
    'luxury escorts Ranchi',
    'high-class escorts Ranchi',
    'independent escorts Ranchi',
    'call girls Ranchi',
    'escort agency Ranchi',
    'celebrity escorts Ranchi',
    'local escorts Ranchi',
    'travel companions Ranchi',
    'event escorts Ranchi',
    'international models Ranchi',
    'college escorts Ranchi',
    'mature escorts Ranchi',
    'specialized escort services',
    'verified escorts Ranchi',
    'location based escorts',
    'area specific companions',
    'discretion guaranteed',
    'quality assured',
    'premium companionship Ranchi'
  ],
  authors: [{ name: 'Ranchi Premium Escorts' }],
  creator: 'Ranchi Elite Services',
  publisher: 'Ranchi Premium Escorts',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://natasharai.in'),
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Premium Escort Services in Ranchi 💎 #1 Elite Companionship',
    description: 'Experience comprehensive premium escort services in Ranchi with verified elite companions, luxury experiences, and professional discretion. Available 24/7 across all Ranchi locations with complete location coverage.',
    url: 'https://natasharai.in/services',
    siteName: 'Ranchi Premium Escorts',
    type: 'website',
    images: [
      {
        url: '/images/services/premium-services.webp',
        width: 1200,
        height: 630,
        alt: 'Premium Escort Services in Ranchi - Elite Companionship Across All Locations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Escort Services in Ranchi 💎 Elite Companionship',
    description: 'Experience comprehensive premium escort services in Ranchi with verified elite companions and professional discretion across all locations.',
    images: ['/images/services/premium-services.webp'],
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
  },
}

export default function ServicesPage() {
  const services = [
    {
      name: 'VIP Escorts',
      description: 'Luxury companions for elite experiences',
      image: '/images/services/vip escorts.webp',
      details: 'Celebrity-level companions, platinum experiences, exclusive venues, and luxury amenities with complete discretion.',
      link: '/services/vip-escorts'
    },
    {
      name: 'Celebrity Services',
      description: 'High-profile entertainment companions',
      image: '/images/services/celebrity services.webp',
      details: 'Elite celebrity-style companions for high-profile events, entertainment, and exclusive social gatherings.',
      link: '/services/celebrity-services'
    },
    {
      name: 'Elite Models',
      description: 'Professional model companions',
      image: '/images/services/elite models.webp',
      details: 'Professional models with stunning beauty, sophistication, and international experience for premium companionship.',
      link: '/services/elite-models'
    },
    {
      name: 'Independent Services',
      description: 'Personal independent companions',
      image: '/images/services/independent services.webp',
      details: 'Independent professional companions offering personalized services with complete freedom and flexibility.',
      link: '/services/independent-services'
    },
    {
      name: 'Local Beauties',
      description: 'Charming local Ranchi companions',
      image: '/images/services/local beauties.webp',
      details: 'Beautiful local Ranchi companions with area knowledge, cultural understanding, and authentic charm.',
      link: '/services/local-beauties'
    },
    {
      name: 'Outcall Services',
      description: 'Professional outcall companions',
      image: '/images/services/outcall services.jpg',
      details: 'Professional outcall services to your location with verified companions and complete discretion guaranteed.',
      link: '/services/outcall-services'
    },
    {
      name: 'Premium Services',
      description: 'Exclusive premium experiences',
      image: '/images/services/premium services.webp',
      details: 'Exclusive premium experiences with luxury amenities, high-end venues, and sophisticated companionship.',
      link: '/services/premium-services'
    },
    {
      name: 'Travel Companion',
      description: 'Sophisticated travel partners',
      image: '/images/services/travel companion.webp',
      details: 'Sophisticated travel companions for business trips, vacations, and international travel with cultural awareness.',
      link: '/services/travel-companion'
    },
    {
      name: 'Event Companion',
      description: 'Elegant event accompaniment',
      image: '/images/services/event companion.webp',
      details: 'Elegant companions for corporate events, social gatherings, parties, and special occasions with perfect etiquette.',
      link: '/services/event-companion'
    },
    {
      name: 'MILF Escorts',
      description: 'Experienced mature women companions',
      image: '/images/services/milf escorts.webp',
      details: 'Sophisticated mature women with life experience, wisdom, and refined companionship for discerning clients.',
      link: '/services/milf-escorts'
    },
    {
      name: 'Housewife Escorts',
      description: 'Elegant housewife companions',
      image: '/images/services/housewife escorts.webp',
      details: 'Charming housewife companions offering warmth, care, and authentic domestic elegance with professional service.',
      link: '/services/housewife-escorts'
    },
    {
      name: 'College Girls Escorts',
      description: 'Young vibrant college companions',
      image: '/images/services/college girls escorts.webp',
      details: 'Fresh, energetic college companions with youthful enthusiasm, modern outlook, and intelligent conversation.',
      link: '/services/college-girls-escorts'
    },
    {
      name: 'Bengali Escorts',
      description: 'Beautiful Bengali cultural companions',
      image: '/images/services/bengali escorts.webp',
      details: 'Elegant Bengali companions with rich cultural heritage, artistic sensibility, and traditional charm.',
      link: '/services/bengali-escorts'
    },
    {
      name: 'Nepali Escorts',
      description: 'Charming Nepali companions',
      image: '/images/services/nepali escorts.webp',
      details: 'Beautiful Nepali companions with mountain charm, natural beauty, and gentle caring nature.',
      link: '/services/nepali-escorts'
    },
    {
      name: 'Russian Escorts',
      description: 'International Russian beauties',
      image: '/images/services/russian escorts.webp',
      details: 'Stunning Russian companions with international appeal, sophisticated elegance, and European charm.',
      link: '/services/russian-escorts'
    },
    {
      name: 'Bhabhi Escorts',
      description: 'Sophisticated bhabhi companions',
      image: '/images/services/bhabhi escorts.webp',
      link: '/services/housewife-escorts',
      details: 'Mature, caring bhabhi companions offering warmth, understanding, and traditional Indian hospitality.',
    },
    {
      name: 'South Indian Escorts',
      description: 'Beautiful South Indian companions',
      image: '/images/services/south indian escorts.webp',
      link: '/services/independent-services',
      details: 'Elegant South Indian companions with classical beauty, cultural grace, and traditional values.',
    },
    {
      name: 'Premium Model Escorts',
      description: 'Elite premium model companions',
      image: '/images/services/premium model escorts.webp',
      link: '/services/premium-services',
      details: 'Professional model companions with runway experience, photogenic beauty, and high-fashion elegance.',
    },
    {
      name: 'Mature Escorts',
      description: 'Refined mature women companions',
      image: '/images/services/mature escorts.webp',
      link: '/services/milf-escorts',
      details: 'Sophisticated mature companions with life experience, emotional intelligence, and refined conversation.',
    },
    {
      name: 'Foreign Escorts',
      description: 'International foreign companions',
      image: '/images/services/foreign escorts.webp',
      link: '/services/russian-escorts',
      details: 'Exotic foreign companions from various countries offering international charm, cultural diversity, and global sophistication.',
    },
  ]

  const locations = [
    { name: 'Central Ranchi', desc: 'Central Business District' },
    { name: 'Hinoo', desc: 'Market & Residential Area' },
    { name: 'Lalpur', desc: 'Township & Educational Hub' },
    { name: 'HEC Colony', desc: 'Industrial & Corporate Zone' },
    { name: 'Doranda', desc: 'Railway & Commercial Center' },
    { name: 'Kanke Road', desc: 'Educational & Medical Hub' },
    { name: 'Bariatu', desc: 'Housing Colony Area' },
    { name: 'Ratu Road', desc: 'Junction & Transport Hub' },
    { name: 'Circular Road', desc: 'Banking & City Center' },
    { name: 'Argora', desc: 'Industrial Estate Zone' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      
      <main>
        {/* Hero Section with Image */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-6xl mx-auto z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Escort Services 💎
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-medium">
              #1 Elite Companionship Across All Ranchi Locations
            </p>
            <p className="text-lg mb-8 max-w-4xl mx-auto">
              Discover our comprehensive premium escort services available in every major
              Ranchi location. From elite VIP services to celebrity companions, from business district to 
              residential areas - verified companions everywhere.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">All Locations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm">Verified Escorts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">20</div>
                <div className="text-sm">Service Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Complete Discretion</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="tel:+919372662471"
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call Premium Line
              </a>
              <a
                href="https://wa.me/919372662471?text=Hi,%20I%20need%20escort%20services%20in%20Ranchi"
                className="bg-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-300 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Locations
              </a>
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Premium Service Categories ⭐
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive escort services across specialized categories and demographics,
                available in every Ranchi location with verified companions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {services.slice(0, 15).map((service, index) => (
                <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-xl">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-contain w-full h-full"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        priority={index <= 6}
                      />
                      <div className="absolute top-3 right-3">
                        <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          ⭐ {service.name.split(' ').slice(-1)[0].toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <Link 
                      href={service.link || '#'}
                      className="block w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-center font-semibold transition-all duration-300"
                    >
                      Book {service.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Service Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold text-pink-600 mb-4">🌟 Elite VIP Services</h3>
                <p className="text-gray-700 mb-4">
                  Celebrity-level companions, platinum experiences, exclusive venues, and luxury
                  amenities with complete discretion and privacy.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Luxury hotel experiences</li>
                  <li>• Private venue arrangements</li>
                  <li>• Celebrity-style companions</li>
                  <li>• Platinum service guarantee</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold text-pink-600 mb-4">🌍 International Models</h3>
                <p className="text-gray-700 mb-4">
                  Russian, European, Arab, and international companions with global
                  sophistication and multilingual capabilities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• International beauty standards</li>
                  <li>• Multilingual communication</li>
                  <li>• Cultural sophistication</li>
                  <li>• Global etiquette training</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold text-pink-600 mb-4">🎓 College & Young</h3>
                <p className="text-gray-700 mb-4">
                  Fresh youthful energy, college students, and vibrant young companions
                  with modern outlook and enthusiasm.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Youthful vibrant energy</li>
                  <li>• Modern communication style</li>
                  <li>• Educational backgrounds</li>
                  <li>• Fresh perspectives</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold text-pink-600 mb-4">👩‍💼 Professional & Mature</h3>
                <p className="text-gray-700 mb-4">
                  Sophisticated mature women, working professionals, and experienced companions
                  with business acumen and life experience.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Professional backgrounds</li>
                  <li>• Business understanding</li>
                  <li>• Mature sophistication</li>
                  <li>• Life experience wisdom</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold text-pink-600 mb-4">⚙️ Specialized Services</h3>
                <p className="text-gray-700 mb-4">
                  Customized experiences, special requirements, and personalized companionship
                  tailored to your specific needs and preferences.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Custom experiences</li>
                  <li>• Special requirements</li>
                  <li>• Personalized service</li>
                  <li>• Flexible arrangements</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold text-pink-600 mb-4">✈️ Travel & Events</h3>
                <p className="text-gray-700 mb-4">
                  Travel companions, event escorts, and social gathering companionship
                  with perfect etiquette and social skills.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Travel companionship</li>
                  <li>• Event accompaniment</li>
                  <li>• Social gathering skills</li>
                  <li>• Perfect etiquette</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Premium Location Services Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-transparent rounded-full transform -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-rose-200/20 to-transparent rounded-full transform translate-x-40 translate-y-40"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl mb-6 border border-pink-200/50">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-bold text-pink-800 text-lg">ELITE LOCATIONS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Premium Location Services
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Elite escort services available across all major Ranchi locations with
                area-specific expertise and verified local companions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {locations.map((location, index) => (
                <Link
                  key={index}
                  href={`/locations/${location.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group relative overflow-hidden"
                >
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-pink-200/50 hover:border-pink-400/60 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden">
                    {/* Card Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-white to-rose-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Location Icon */}
                    <div className="relative z-10 flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 px-4 py-2 rounded-full">
                            <span className="text-pink-600 font-bold text-sm">PREMIUM AREA</span>
                          </div>
                        </div>
                        
                        <h3 className="text-pink-600 font-bold text-xl mb-2 group-hover:text-pink-700 transition-colors">
                          {location.name} Escorts
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
                          {location.desc}
                        </p>
                        
                        {/* Service Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
                            Local Expertise
                          </div>
                          <div className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-medium">
                            24/7 Available
                          </div>
                          <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                            Verified
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow Indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <div className="bg-pink-500 text-white p-2 rounded-full shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Border Animation */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Enhanced Location Coverage Details */}
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-pink-200/50 relative overflow-hidden">
              {/* Card Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-rose-200/30 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full shadow-lg mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                    </svg>
                    <span className="font-bold">COMPLETE COVERAGE</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Complete Ranchi Coverage
                  </h3>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Our comprehensive location-based services ensure premium escort availability 
                    across every major Ranchi area with dedicated local expertise.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 mb-4 inline-block">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m0 0H7m12 0v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1m12 0h-2m-4-2h6m0 0h2m-8-1V4" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-3 text-xl">Business Districts</h4>
                    <p className="text-gray-600">Main City, Lalpur, Doranda commercial areas</p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 mb-4 inline-block">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0h6m0 0h3a1 1 0 001-1V10M9 21v-6a1 1 0 011-1h4a1 1 0 011 1v6" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-3 text-xl">Residential Areas</h4>
                    <p className="text-gray-600">Hinoo, Bariatu, Harmu premium localities</p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-4 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 mb-4 inline-block">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-3 text-xl">Specialized Zones</h4>
                    <p className="text-gray-600">IT Sector, Medical, Educational hubs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose Our Premium Services? 🏆
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the difference with our comprehensive location-based services,
                verified companions, and commitment to excellence across every Ranchi area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Complete Coverage</h3>
                <p className="text-gray-600">
                  Services available in every Ranchi location with local expertise and
                  area-specific knowledge for perfect companion matching.
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Verified Quality</h3>
                <p className="text-gray-600">
                  All companions thoroughly verified across every location with quality assurance
                  standards, background checks, and professional training.
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">👤</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Service</h3>
                <p className="text-gray-600">
                  Dedicated service managers for each location ensuring personalized attention,
                  care, and customized experiences for every client.
                </p>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="mt-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold text-center mb-8">Premium Service Guarantees</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔒</div>
                  <div className="font-semibold">100% Discretion</div>
                  <div className="text-sm opacity-90">Complete privacy guaranteed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⏰</div>
                  <div className="font-semibold">24/7 Availability</div>
                  <div className="text-sm opacity-90">Round the clock service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">✨</div>
                  <div className="font-semibold">Premium Quality</div>
                  <div className="text-sm opacity-90">Highest standards maintained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">
                    <svg className="w-8 h-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="font-semibold">Instant Response</div>
                  <div className="text-sm opacity-90">Quick booking & confirmation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-rose-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions ❓
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our location-based escort services across Ranchi.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-600 mb-4">
                    🗺️ Which Ranchi locations do you provide escort services?
                  </h3>
                  <p className="text-gray-700">
                    We provide premium escort services across all major Ranchi locations including
                    Ranchi Main City, Hinoo, Lalpur, Harmu, Doranda, Kadru, Kanke, Bariatu,
                    Ratu Road, Khelgaon, and all other areas with verified local companions
                    who have complete area knowledge and cultural understanding.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-600 mb-4">
                    📞 How do I book escort services in specific Ranchi locations?
                  </h3>
                  <p className="text-gray-700">
                    Call our premium line at +91-9372662471 or WhatsApp to book escorts in any
                    Ranchi location. Our dedicated team will arrange verified companions in your 
                    preferred area with complete discretion, local expertise, and personalized 
                    service matching your requirements.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-600 mb-4">
                    ✅ Are all escorts verified across different Ranchi areas?
                  </h3>
                  <p className="text-gray-700">
                    Yes, all escorts across every Ranchi location are thoroughly verified,
                    professional, and provide safe companionship with complete background 
                    verification, quality standards, area-specific training, and ongoing 
                    quality assurance monitoring.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-600 mb-4">
                    ⭐ What makes your location-based escort services unique?
                  </h3>
                  <p className="text-gray-700">
                    Our location-specific services offer local expertise, area familiarity, 
                    premium venues knowledge, verified local companions, tailored experiences 
                    for each Ranchi district, dedicated location managers, and comprehensive 
                    quality service ensuring satisfaction.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-600 mb-4">
                    💰 What are your service rates across different locations?
                  </h3>
                  <p className="text-gray-700">
                    Our rates vary based on location, service type, and companion category. 
                    Premium areas and specialized services have different pricing structures. 
                    Contact us directly for detailed pricing information and customized 
                    packages tailored to your preferences and budget.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-600 mb-4">
                    🔒 How do you ensure discretion and privacy?
                  </h3>
                  <p className="text-gray-700">
                    We maintain strict confidentiality protocols, secure communication channels, 
                    verified companion backgrounds, private meeting arrangements, and complete 
                    data protection. Your privacy and discretion are our highest priorities 
                    across all Ranchi locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect Across Ranchi 🌟
            </h2>
            <p className="text-xl mb-8">
              Ready to experience premium escort services in your preferred Ranchi location?
              Contact our location specialists for immediate assistance.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-pink-400 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-pink-400 outline-none"
                />
                <select className="w-full p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-pink-400 outline-none">
                  <option>Preferred Ranchi Location</option>
                  {locations.map((location) => (
                    <option key={location.name} value={location.name}>{location.name}</option>
                  ))}
                </select>
                <select className="w-full p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-pink-400 outline-none">
                  <option>Service Category</option>
                  <option>VIP Services</option>
                  <option>Elite Models</option>
                  <option>Celebrity Services</option>
                  <option>Travel Companion</option>
                  <option>Event Companion</option>
                  <option>Independent Services</option>
                </select>
              </div>
              <textarea
                placeholder="Your Requirements & Preferences"
                rows={4}
                className="w-full p-3 rounded-lg text-gray-800 mt-4 focus:ring-2 focus:ring-pink-400 outline-none"
              ></textarea>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold mt-4 transition-colors flex items-center gap-2 justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
                </svg>
                Request Premium Service
              </button>
            </div>

            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="font-semibold">Call Premium Line</div>
                <div className="text-sm">+91-9372662471</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div className="font-semibold">WhatsApp Available</div>
                <div className="text-sm">Instant Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
                  </svg>
                </div>
                <div className="font-semibold">24/7 Service</div>
                <div className="text-sm">Always Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* All Locations Grid Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Premium Escorts In Ranchi - All Locations
              </h2>
              <p className="text-lg text-gray-600">
                Complete coverage across all Ranchi areas with verified companions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {locations.map((location, index) => (
                <Link
                  key={index}
                  href={`/locations/${location.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-pink-50 hover:bg-pink-100 p-4 rounded-lg text-center transition-colors border border-pink-200 hover:border-pink-300"
                >
                  <div className="text-pink-600 font-semibold text-sm">
                    Escorts in {location.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

