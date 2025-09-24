import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

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
  metadataBase: new URL('https://ranchi-mu.vercel.app'),
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Premium Escort Services in Ranchi 💎 #1 Elite Companionship',
    description: 'Experience comprehensive premium escort services in Ranchi with verified elite companions, luxury experiences, and professional discretion. Available 24/7 across all Ranchi locations with complete location coverage.',
    url: 'https://ranchi-mu.vercel.app/services',
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
    },
    {
      name: 'Celebrity Services',
      description: 'High-profile entertainment companions',
      image: '/images/services/celebrity services.webp',
      details: 'Elite celebrity-style companions for high-profile events, entertainment, and exclusive social gatherings.',
    },
    {
      name: 'Elite Models',
      description: 'Professional model companions',
      image: '/images/services/elite models.webp',
      details: 'Professional models with stunning beauty, sophistication, and international experience for premium companionship.',
    },
    {
      name: 'Independent Services',
      description: 'Personal independent companions',
      image: '/images/services/independent services.webp',
      details: 'Independent professional companions offering personalized services with complete freedom and flexibility.',
    },
    {
      name: 'Local Beauties',
      description: 'Charming local Ranchi companions',
      image: '/images/services/local beauties.webp',
      details: 'Beautiful local Ranchi companions with area knowledge, cultural understanding, and authentic charm.',
    },
    {
      name: 'Outcall Services',
      description: 'Professional outcall companions',
      image: '/images/services/outcall services.jpg',
      details: 'Professional outcall services to your location with verified companions and complete discretion guaranteed.',
    },
    {
      name: 'Premium Services',
      description: 'Exclusive premium experiences',
      image: '/images/services/premium services.webp',
      details: 'Exclusive premium experiences with luxury amenities, high-end venues, and sophisticated companionship.',
    },
    {
      name: 'Travel Companion',
      description: 'Sophisticated travel partners',
      image: '/images/services/travel companion.webp',
      details: 'Sophisticated travel companions for business trips, vacations, and international travel with cultural awareness.',
    },
    {
      name: 'Event Companion',
      description: 'Elegant event accompaniment',
      image: '/images/services/event companion.webp',
      details: 'Elegant companions for corporate events, social gatherings, parties, and special occasions with perfect etiquette.',
    },
    {
      name: 'MILF Escorts',
      description: 'Experienced mature women companions',
      image: '/images/services/milf escorts.webp',
      details: 'Sophisticated mature women with life experience, wisdom, and refined companionship for discerning clients.',
    },
    {
      name: 'Housewife Escorts',
      description: 'Elegant housewife companions',
      image: '/images/services/housewife escorts.webp',
      details: 'Charming housewife companions offering warmth, care, and authentic domestic elegance with professional service.',
    },
    {
      name: 'College Girls Escorts',
      description: 'Young vibrant college companions',
      image: '/images/services/college girls escorts.webp',
      details: 'Fresh, energetic college companions with youthful enthusiasm, modern outlook, and intelligent conversation.',
    },
    {
      name: 'Bengali Escorts',
      description: 'Beautiful Bengali cultural companions',
      image: '/images/services/bengali escorts.webp',
      details: 'Elegant Bengali companions with rich cultural heritage, artistic sensibility, and traditional charm.',
    },
    {
      name: 'Nepali Escorts',
      description: 'Charming Nepali companions',
      image: '/images/services/nepali escorts.webp',
      details: 'Beautiful Nepali companions with mountain charm, natural beauty, and gentle caring nature.',
    },
    {
      name: 'Russian Escorts',
      description: 'International Russian beauties',
      image: '/images/services/russian escorts.webp',
      details: 'Stunning Russian companions with international appeal, sophisticated elegance, and European charm.',
    },
    {
      name: 'Bhabhi Escorts',
      description: 'Sophisticated bhabhi companions',
      image: '/images/services/bhabhi escorts.webp',
      details: 'Mature, caring bhabhi companions offering warmth, understanding, and traditional Indian hospitality.',
    },
    {
      name: 'South Indian Escorts',
      description: 'Beautiful South Indian companions',
      image: '/images/services/south indian escorts.webp',
      details: 'Elegant South Indian companions with classical beauty, cultural grace, and traditional values.',
    },
    {
      name: 'Premium Model Escorts',
      description: 'Elite premium model companions',
      image: '/images/services/premium model escorts.webp',
      details: 'Professional model companions with runway experience, photogenic beauty, and high-fashion elegance.',
    },
    {
      name: 'Mature Escorts',
      description: 'Refined mature women companions',
      image: '/images/services/mature escorts.webp',
      details: 'Sophisticated mature companions with life experience, emotional intelligence, and refined conversation.',
    },
  ]

  const locations = [
    { name: 'Ranchi Main City', desc: 'Central Business District' },
    { name: 'Hinoo', desc: 'Premium Residential Area' },
    { name: 'Lalpur', desc: 'Educational Hub' },
    { name: 'Harmu', desc: 'Housing Board Area' },
    { name: 'Doranda', desc: 'Commercial Center' },
    { name: 'Kadru', desc: 'IT Sector Zone' },
    { name: 'Kanke', desc: 'Medical College Area' },
    { name: 'Bariatu', desc: 'Upscale Locality' },
    { name: 'Ratu Road', desc: 'Airport Connectivity' },
    { name: 'Khelgaon', desc: 'Sports Complex Area' }
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
                <div className="text-2xl font-bold">19</div>
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
                href="tel:+919876543210"
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
              >
                📞 Call Premium Line
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi,%20I%20need%20escort%20services%20in%20Ranchi"
                className="bg-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-300 transition-colors"
              >
                📱 WhatsApp Locations
              </a>
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Premium Service Categories ⭐
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive escort services across specialized categories and demographics,
                available in every Ranchi location with verified companions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={service.image}
                      alt={`${service.name} - Premium Escort Services in Ranchi`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    <p className="text-sm text-gray-500">{service.details}</p>
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

        {/* Location Services Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-rose-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Premium Location Services 📍
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Elite escort services available across all major Ranchi locations with
                area-specific expertise and verified local companions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {locations.map((location, index) => (
                <Link
                  key={index}
                  href={`/locations/${location.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-pink-400"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-pink-600 font-bold text-lg">{location.name} Escorts</div>
                      <div className="text-sm text-gray-600 mt-1">{location.desc}</div>
                      <div className="text-xs text-pink-500 mt-2">Premium Area Coverage</div>
                    </div>
                    <div className="text-pink-400 text-2xl">📍</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Location Coverage Details */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Complete Ranchi Coverage 🗺️
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Our comprehensive location-based services ensure premium escort availability 
                across every major Ranchi area with dedicated local expertise.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">🏢</div>
                  <h4 className="font-bold text-gray-800 mb-2">Business Districts</h4>
                  <p className="text-sm text-gray-600">Main City, Lalpur, Doranda commercial areas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🏠</div>
                  <h4 className="font-bold text-gray-800 mb-2">Residential Areas</h4>
                  <p className="text-sm text-gray-600">Hinoo, Bariatu, Harmu premium localities</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="font-bold text-gray-800 mb-2">Specialized Zones</h4>
                  <p className="text-sm text-gray-600">IT Sector, Medical, Educational hubs</p>
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
                  <div className="text-3xl mb-2">📞</div>
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
                    Call our premium line at +91-9876543210 or WhatsApp to book escorts in any
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
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold mt-4 transition-colors">
                🚀 Request Premium Service
              </button>
            </div>

            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">📞</div>
                <div className="font-semibold">Call Premium Line</div>
                <div className="text-sm">+91-9876543210</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-semibold">WhatsApp Available</div>
                <div className="text-sm">Instant Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">🕐</div>
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
                  href={`/escorts-${location.name.toLowerCase().replace(/\s+/g, '-')}`}
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