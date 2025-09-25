import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Escorts in Kanke Road 💎 Premium Services | Call Now +91-9372662471',
  description: 'Premium escorts in Kanke Road with verified profiles and professional services. Available 24/7 in Kanke Area, residential colonies. Call +91-9372662471 for instant booking.',
  keywords: [
    'escorts in kanke road',
    'kanke road escorts',
    'escorts kanke road',
    'kanke escorts ranchi',
    'escort service kanke road',
    'call girls in kanke road',
    'escorts kanke area ranchi',
    'premium escorts kanke road',
    'vip escorts kanke road',
    'independent escorts kanke road',
    'elite escorts kanke road',
    'professional escorts kanke road',
    'verified escorts kanke road',
    'escort booking kanke road'
  ],
  openGraph: {
    title: 'Escorts in Kanke Road - Premium Services | 24/7 Available',
    description: 'Premium escorts in Kanke Road with verified profiles and professional services. Available 24/7 across Kanke Area and residential colonies.',
    images: [{
      url: '/images/services/vip escorts.webp',
      width: 800,
      height: 600,
      alt: 'Escorts in Kanke Road - Premium Services',
    }],
    type: 'website',
    siteName: 'Premium Ranchi Escorts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escorts in Kanke Road - Premium Services Available 24/7',
    description: 'Premium escorts in Kanke Road with verified profiles and professional services. Call +91-9372662471 for instant booking.',
    images: ['/images/services/vip escorts.webp'],
  }
}

export default function KankeRoadPage() {
  // Service cards matching home page structure
  const kankeRoadServices = [
    {
      id: 1,
      title: "VIP Escorts in Kanke Road",
      subtitle: "Premium VIP companions in Kanke residential area",
      category: "VIP",
      image: "/images/services/vip escorts.webp",
      link: "tel:+919372662471"
    },
    {
      id: 2,
      title: "Celebrity Escorts Kanke Road",
      subtitle: "Star-like companions in Kanke Area",
      category: "CELEBRITY",
      image: "/images/services/celebrity services.webp",
      link: "tel:+919372662471"
    },
    {
      id: 3,
      title: "Elite Models Kanke Road",
      subtitle: "Professional models in Kanke colonies",
      category: "ELITE",
      image: "/images/services/elite models.webp",
      link: "tel:+919372662471"
    },
    {
      id: 4,
      title: "Premium Services Kanke Road",
      subtitle: "Luxury experience in Kanke residential areas",
      category: "PREMIUM",
      image: "/images/services/premium services.webp",
      link: "tel:+919372662471"
    },
    {
      id: 5,
      title: "Independent Escorts Kanke Road",
      subtitle: "Professional independent companions",
      category: "INDEPENDENT",
      image: "/images/services/independent services.webp",
      link: "tel:+919372662471"
    },
    {
      id: 6,
      title: "Russian Escorts Kanke Road",
      subtitle: "International beauties in Kanke area",
      category: "RUSSIAN",
      image: "/images/services/russian escorts.webp",
      link: "tel:+919372662471"
    },
    {
      id: 7,
      title: "College Girls Kanke Road",
      subtitle: "Young vibrant companions near Kanke",
      category: "COLLEGE",
      image: "/images/services/college girls escorts.webp",
      link: "tel:+919372662471"
    },
    {
      id: 8,
      title: "MILF Escorts Kanke Road",
      subtitle: "Experienced mature companions",
      category: "MATURE",
      image: "/images/services/milf escorts.webp",
      link: "tel:+919372662471"
    },
    {
      id: 9,
      title: "Outcall Services Kanke Road",
      subtitle: "Visit you at residential colonies and hotels",
      category: "OUTCALL",
      image: "/images/services/outcall services.jpg",
      link: "tel:+919372662471"
    },
    {
      id: 10,
      title: "Event Companion Kanke Road",
      subtitle: "Elegant companions for private events",
      category: "EVENT",
      image: "/images/services/event companion.webp",
      link: "tel:+919372662471"
    }
  ];

  const kankeAreas = [
    {
      name: "Kanke Main Road",
      description: "Primary road connecting Kanke with educational institutions and residential areas",
      landmarks: "Kanke Dam, Educational Institutions, Residential Colonies",
      responseTime: "15-20 minutes"
    },
    {
      name: "Kanke Residential Area",
      description: "Peaceful residential colonies with private houses and apartments",
      landmarks: "Housing Societies, Private Residences, Local Markets",
      responseTime: "15-20 minutes"
    },
    {
      name: "Kanke Dam Area",
      description: "Scenic area near Kanke Dam with resorts and picnic spots",
      landmarks: "Kanke Dam, Resorts, Tourist Spots",
      responseTime: "20-25 minutes"
    },
    {
      name: "BIT Mesra Campus Area",
      description: "Area around BIT Mesra campus with student accommodations",
      landmarks: "BIT Campus, Student Hostels, Educational Centers",
      responseTime: "18-25 minutes"
    }
  ];

  const faqs = [
    {
      question: "Are escorts in Kanke Road available 24/7?",
      answer: "Yes, escorts in Kanke Road are available 24/7 across Kanke Area, residential colonies, and Dam area. Call +91-9372662471 anytime for immediate booking and confirmation. Our Kanke Road escort services provide round-the-clock availability with verified companions ready to meet within 15-25 minutes."
    },
    {
      question: "How to book escorts in Kanke Road safely and quickly?",
      answer: "Book escorts in Kanke Road safely by calling +91-9372662471 or WhatsApp. Our verified booking process includes: profile verification, secure payment, location confirmation, and privacy protection. All Kanke Road escorts are 100% verified with authentic photos and professional service standards."
    },
    {
      question: "Which areas in Kanke Road do you cover for escort services?",
      answer: "We provide escort services across all Kanke Road areas including Main Road, residential colonies, Kanke Dam area, BIT Mesra campus vicinity, housing societies, and surrounding localities. Our Kanke Road escorts can reach any location within 15-25 minutes with complete discretion."
    },
    {
      question: "What types of escort services are available in Kanke Road?",
      answer: "Kanke Road offers comprehensive escort services including VIP escorts, celebrity companions, elite models, independent escorts, Russian beauties, college girls, MILF escorts, outcall services, event companions, and travel partners. All services available 24/7 with verified profiles."
    },
    {
      question: "Are Kanke Road escort profiles verified and authentic?",
      answer: "Yes, all escort profiles in Kanke Road are 100% verified and authentic. We conduct thorough verification including identity checks, photo authenticity, health screening, and professional background verification. This ensures genuine and safe escort services in Kanke Road."
    },
    {
      question: "How quickly can escorts reach my location in Kanke Road?",
      answer: "Escorts in Kanke Road can reach your location within 15-25 minutes depending on the specific area. Main Road areas get 15-20 minute response, while Dam and campus areas get 20-25 minute response. We provide real-time location tracking and updates."
    },
    {
      question: "What are the rates for escort services in Kanke Road?",
      answer: "Escort service rates in Kanke Road vary based on companion category and service duration. VIP and celebrity escorts have premium pricing while standard services have competitive rates. Contact +91-9372662471 for detailed pricing, special packages, and Kanke Road area-specific rates."
    },
    {
      question: "Is privacy guaranteed with Kanke Road escort services?",
      answer: "Absolutely. Privacy and discretion are guaranteed with all Kanke Road escort services. We maintain strict confidentiality protocols, secure communication channels, discrete service delivery, and professional conduct. Your privacy is our top priority in Kanke Road."
    },
    {
      question: "Can I book outcall services to hotels near Kanke Road?",
      answer: "Yes, outcall services are available to all hotels, resorts, residences, and locations in Kanke Road area. Our escorts provide professional hotel visits across residential areas, Dam vicinity, and campus locations. We ensure discrete arrival and professional service delivery at your preferred location."
    },
    {
      question: "How to contact for emergency escort booking in Kanke Road?",
      answer: "For emergency escort booking in Kanke Road, immediately call +91-9372662471. We provide urgent booking services with escorts available within 15-20 minutes across Main Road and residential areas. WhatsApp provides instant location sharing and real-time availability confirmation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/services/vip escorts.webp"
              alt="Escorts in Kanke Road"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-500/80 to-rose-600/90"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto z-10">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 border border-white/30">
              <div className="bg-white text-pink-600 p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-bold text-white">KANKE ROAD</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Escorts in Kanke Road
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Premium Verified Companions in Kanke Area, Residential Colonies & Dam Vicinity
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+919372662471" 
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105 hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Now: +91-9372662471
              </a>
              <a 
                href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Kanke%20Road" 
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Booking
              </a>
            </div>
            
            <div className="mt-8">
              <p className="text-pink-100 text-lg">
                ✓ Verified Profiles • ✓ 15-20 Min Response • ✓ Complete Privacy • ✓ 24/7 Available
              </p>
            </div>
          </div>
        </section>

        {/* Service Stats */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
                Why Choose Escorts in Kanke Road?
              </h2>
              <p className="text-lg text-pink-600 max-w-4xl mx-auto">
                Professional escort services in Kanke Road with verified companions and guaranteed satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-pink-600 mb-2">15-20</div>
                <div className="text-gray-700 font-medium">Minutes Response</div>
                <div className="text-sm text-gray-600">Quick Kanke Area Service</div>
              </div>

              <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Verified Profiles</div>
                <div className="text-sm text-gray-600">Authentic Kanke Escorts</div>
              </div>

              <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">All</div>
                <div className="text-gray-700 font-medium">Kanke Areas</div>
                <div className="text-sm text-gray-600">Complete Coverage</div>
              </div>

              <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Private Service</div>
                <div className="text-sm text-gray-600">Complete Discretion</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Cards Section - Gallery Style */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
                Premium Escort Services in Kanke Road
              </h2>
              <p className="text-lg text-pink-600 max-w-4xl mx-auto">
                Explore our wide range of verified escort services available 24/7 in Kanke Road areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kankeRoadServices.slice(0, 9).map((service) => (
                <div key={service.id} className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  
                  {/* Image Container */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      priority={service.id <= 3}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg uppercase tracking-wide">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.subtitle}</p>
                    <a 
                      href={service.link}
                      className="block w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg text-center font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a 
                href="tel:+919372662471"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Book Kanke Road Escorts Now</span>
              </a>
            </div>
          </div>
        </section>

        {/* Kanke Areas Coverage */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
                Kanke Road Areas We Cover
              </h2>
              <p className="text-lg text-pink-600 max-w-4xl mx-auto">
                Professional escort services across all major Kanke Road locations with guaranteed response times
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {kankeAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-2xl shadow-lg mr-4">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-pink-700 mb-1">{area.name}</h3>
                      <p className="text-green-600 font-semibold">Response: {area.responseTime}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-bold text-gray-800 mb-2">Description</h4>
                      <p className="text-gray-700 text-sm">{area.description}</p>
                    </div>

                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-bold text-gray-800 mb-2">Key Landmarks</h4>
                      <p className="text-gray-700 text-sm">{area.landmarks}</p>
                    </div>

                    <div className="text-center pt-4">
                      <a 
                        href="tel:+919372662471"
                        className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-bold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Book in {area.name}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-pink-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100 to-rose-100 px-6 py-3 rounded-full shadow-lg mb-6 border border-pink-200">
                    <div className="bg-pink-500 text-white p-2 rounded-full">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-bold text-pink-800">KANKE ROAD FAQ</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">
                    Escorts in Kanke Road - Frequently Asked Questions
                  </h2>
                  <p className="text-xl text-pink-600 leading-relaxed">
                    Get complete information about escort services, booking process, and availability in Kanke Road
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl p-6 text-center">
                  <h3 className="text-2xl font-bold text-pink-800 mb-4">Premium Escorts in Kanke Road - Complete Information</h3>
                  <p className="text-pink-700 text-lg leading-relaxed">
                    Experience premium companionship services in Kanke Road with our carefully verified escorts. 
                    Available 24/7 across Kanke Area, residential colonies, Dam vicinity, and campus areas. 
                    We offer VIP escorts, celebrity companions, elite models, independent professionals, Russian beauties, 
                    and college girls with complete privacy and professional service delivery throughout Kanke Road.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-6">
                Kanke Road Escorts - Complete Service Guide
              </h2>
              <p className="text-lg text-pink-600 max-w-4xl mx-auto">
                Detailed answers about escort services, booking procedures, and professional companionship in Kanke Road areas
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="p-6">
                      <h3 className="font-bold text-pink-800 text-lg leading-tight mb-4">{faq.question}</h3>
                      <div className="bg-pink-50 rounded-lg p-4">
                        <p className="text-pink-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Book Premium Escorts in Kanke Road Now!
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Professional verified companions available 24/7 across Kanke Area, Residential Colonies & Dam Vicinity
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <a 
                  href="tel:+919372662471" 
                  className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: +91-9372662471
                </a>
                <a 
                  href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Kanke%20Road" 
                  className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Booking
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">15-20</div>
                    <div className="text-sm text-pink-100">Minutes Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-pink-100">Verified</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-pink-100">Available</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-pink-100">Private</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-pink-100 text-lg">
                  <strong>Kanke Road Coverage:</strong> Main Road • Residential Colonies • Dam Area • Campus Vicinity • Housing Societies • Educational Areas
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}