import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Escorts in Hinoo 💎 Premium Services | Call Now +91-9372662471',
  description: 'Premium escorts in Hinoo with verified profiles and professional services. Available 24/7 in Hinoo Market Area and residential localities. Call +91-9372662471 for instant booking.',
  keywords: [
    'escorts in hinoo',
    'hinoo escorts',
    'escorts hinoo ranchi',
    'hinoo market escorts',
    'escort service hinoo',
    'call girls in hinoo',
    'premium escorts hinoo',
    'vip escorts hinoo',
    'independent escorts hinoo',
    'elite escorts hinoo',
    'professional escorts hinoo',
    'verified escorts hinoo',
    'escort booking hinoo'
  ]
}

export default function HinooPage() {
  const hinooServices = [
    { id: 1, title: "VIP Escorts in Hinoo", subtitle: "Premium VIP companions in Hinoo market area", category: "VIP", image: "/images/services/vip escorts.webp", link: "tel:+919372662471" },
    { id: 2, title: "Celebrity Escorts Hinoo", subtitle: "Star-like companions in Hinoo locality", category: "CELEBRITY", image: "/images/services/celebrity services.webp", link: "tel:+919372662471" },
    { id: 3, title: "Elite Models Hinoo", subtitle: "Professional models in Hinoo residential areas", category: "ELITE", image: "/images/services/elite models.webp", link: "tel:+919372662471" },
    { id: 4, title: "Premium Services Hinoo", subtitle: "Luxury experience in Hinoo market vicinity", category: "PREMIUM", image: "/images/services/premium services.webp", link: "tel:+919372662471" },
    { id: 5, title: "Independent Escorts Hinoo", subtitle: "Professional independent companions", category: "INDEPENDENT", image: "/images/services/independent services.webp", link: "tel:+919372662471" },
    { id: 6, title: "Russian Escorts Hinoo", subtitle: "International beauties in Hinoo area", category: "RUSSIAN", image: "/images/services/russian escorts.webp", link: "tel:+919372662471" },
    { id: 7, title: "College Girls Hinoo", subtitle: "Young vibrant companions near Hinoo", category: "COLLEGE", image: "/images/services/college girls escorts.webp", link: "tel:+919372662471" },
    { id: 8, title: "MILF Escorts Hinoo", subtitle: "Experienced mature companions", category: "MATURE", image: "/images/services/milf escorts.webp", link: "tel:+919372662471" },
    { id: 9, title: "Outcall Services Hinoo", subtitle: "Visit you at Hinoo residences and hotels", category: "OUTCALL", image: "/images/services/outcall services.jpg", link: "tel:+919372662471" },
    { id: 10, title: "Event Companion Hinoo", subtitle: "Elegant companions for local events", category: "EVENT", image: "/images/services/event companion.webp", link: "tel:+919372662471" }
  ];

  const hinooAreas = [
    { name: "Hinoo Market Area", description: "Primary commercial market with shops, restaurants, and business establishments", landmarks: "Market Complex, Commercial Shops, Local Restaurants", responseTime: "10-15 minutes" },
    { name: "Hinoo Residential Colony", description: "Peaceful residential areas with family housing and local amenities", landmarks: "Housing Societies, Community Centers, Schools", responseTime: "12-18 minutes" },
    { name: "Hinoo Main Road", description: "Main thoroughfare connecting to other parts of Ranchi", landmarks: "Transport Hub, Bus Stops, Commercial Centers", responseTime: "10-15 minutes" },
    { name: "Hinoo Extension Area", description: "Extended residential development with modern housing", landmarks: "New Housing Projects, Modern Amenities, Shopping Areas", responseTime: "15-20 minutes" }
  ];

  const faqs = [
    { question: "Are escorts in Hinoo available 24/7?", answer: "Yes, escorts in Hinoo are available 24/7 across Hinoo Market Area, residential colonies, and main road vicinity. Call +91-9372662471 anytime for immediate booking and confirmation. Our Hinoo escort services provide round-the-clock availability with verified companions ready to meet within 10-20 minutes." },
    { question: "How to book escorts in Hinoo safely and quickly?", answer: "Book escorts in Hinoo safely by calling +91-9372662471 or WhatsApp. Our verified booking process includes: profile verification, secure payment, location confirmation, and privacy protection. All Hinoo escorts are 100% verified with authentic photos and professional service standards." },
    { question: "Which areas in Hinoo do you cover for escort services?", answer: "We provide escort services across all Hinoo areas including Market Area, residential colonies, main road, extension areas, housing societies, and surrounding localities. Our Hinoo escorts can reach any location within 10-20 minutes with complete discretion." },
    { question: "What types of escort services are available in Hinoo?", answer: "Hinoo offers comprehensive escort services including VIP escorts, celebrity companions, elite models, independent escorts, Russian beauties, college girls, MILF escorts, outcall services, event companions, and travel partners. All services available 24/7 with verified profiles." },
    { question: "Are Hinoo escort profiles verified and authentic?", answer: "Yes, all escort profiles in Hinoo are 100% verified and authentic. We conduct thorough verification including identity checks, photo authenticity, health screening, and professional background verification. This ensures genuine and safe escort services in Hinoo." },
    { question: "How quickly can escorts reach my location in Hinoo?", answer: "Escorts in Hinoo can reach your location within 10-20 minutes depending on the specific area. Market area and main road get 10-15 minute response, while extension areas get 15-20 minute response. We provide real-time location tracking and updates." },
    { question: "What are the rates for escort services in Hinoo?", answer: "Escort service rates in Hinoo vary based on companion category and service duration. VIP and celebrity escorts have premium pricing while standard services have competitive rates. Contact +91-9372662471 for detailed pricing, special packages, and Hinoo area-specific rates." },
    { question: "Is privacy guaranteed with Hinoo escort services?", answer: "Absolutely. Privacy and discretion are guaranteed with all Hinoo escort services. We maintain strict confidentiality protocols, secure communication channels, discrete service delivery, and professional conduct. Your privacy is our top priority in Hinoo." },
    { question: "Can I book outcall services to residential areas in Hinoo?", answer: "Yes, outcall services are available to all residential areas, housing societies, hotels, and locations in Hinoo. Our escorts provide professional visits across Market Area, residential colonies, and main road vicinity. We ensure discrete arrival and professional service delivery at your preferred location." },
    { question: "How to contact for emergency escort booking in Hinoo?", answer: "For emergency escort booking in Hinoo, immediately call +91-9372662471. We provide urgent booking services with escorts available within 10-15 minutes across Market Area and main road locations. WhatsApp provides instant location sharing and real-time availability confirmation." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/services/vip escorts.webp" alt="Escorts in Hinoo" fill className="object-cover object-center" priority />
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
              <span className="font-bold text-white">HINOO</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Escorts in Hinoo</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">Premium Verified Companions in Hinoo Market Area & Residential Localities</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105 hover:shadow-xl transform hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                Call Now: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Hinoo" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                WhatsApp Booking
              </a>
            </div>
            <div className="mt-8"><p className="text-pink-100 text-lg">✓ Verified Profiles • ✓ 10-15 Min Response • ✓ Complete Privacy • ✓ 24/7 Available</p></div>
          </div>
        </section>

        {/* Service Stats */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Why Choose Escorts in Hinoo?</h2>
              <p className="text-lg text-pink-600 max-w-4xl mx-auto">Professional escort services in Hinoo with verified companions and guaranteed satisfaction</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { time: "10-15", label: "Minutes Response", desc: "Fast Market Service", color: "pink" },
                { time: "100%", label: "Verified Profiles", desc: "Authentic Hinoo Escorts", color: "green" },
                { time: "All", label: "Hinoo Areas", desc: "Complete Coverage", color: "blue" },
                { time: "100%", label: "Private Service", desc: "Complete Discretion", color: "purple" }
              ].map((stat, i) => (
                <div key={i} className={`text-center bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <div className={`bg-gradient-to-r from-${stat.color}-500 to-${stat.color === 'pink' ? 'rose' : stat.color === 'green' ? 'emerald' : stat.color === 'blue' ? 'cyan' : 'pink'}-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {stat.color === 'pink' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                      {stat.color === 'green' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                      {stat.color === 'blue' && <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>}
                      {stat.color === 'purple' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />}
                    </svg>
                  </div>
                  <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.time}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Premium Escort Services in Hinoo</h2>
              <p className="text-lg text-pink-600 max-w-4xl mx-auto">Explore our wide range of verified escort services available 24/7 in Hinoo areas</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {hinooServices.map((service) => (
                <div key={service.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-pink-100 hover:border-pink-300">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image src={service.image} alt={service.title} fill className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw" priority={service.id <= 5} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-2 right-2 z-10"><span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg uppercase tracking-wide backdrop-blur-sm">{service.category}</span></div>
                    </div>
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="text-sm font-bold text-gray-800 mb-1 line-clamp-1">{service.title}</h3>
                    <p className="text-gray-600 mb-3 text-xs leading-relaxed line-clamp-2">{service.subtitle}</p>
                    <a href={service.link} className="block w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-center font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-xs uppercase tracking-wide transform hover:scale-105">Call Now</a>
                  </div>
                  <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/5 transition-all duration-300 rounded-xl pointer-events-none"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="tel:+919372662471" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>Book Hinoo Escorts Now</span>
              </a>
            </div>
          </div>
        </section>

        {/* Areas Coverage */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Hinoo Areas We Cover</h2>
              <p className="text-lg text-pink-600 max-w-4xl mx-auto">Professional escort services across all major Hinoo locations with guaranteed response times</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hinooAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-2xl shadow-lg mr-4">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-pink-700 mb-1">{area.name}</h3>
                      <p className="text-green-600 font-semibold">Response: {area.responseTime}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl"><h4 className="font-bold text-gray-800 mb-2">Description</h4><p className="text-gray-700 text-sm">{area.description}</p></div>
                    <div className="bg-white p-4 rounded-xl"><h4 className="font-bold text-gray-800 mb-2">Key Landmarks</h4><p className="text-gray-700 text-sm">{area.landmarks}</p></div>
                    <div className="text-center pt-4"><a href="tel:+919372662471" className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-bold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Book in {area.name}</a></div>
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
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="font-bold text-pink-800">HINOO FAQ</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">Escorts in Hinoo - Frequently Asked Questions</h2>
                  <p className="text-xl text-pink-600 leading-relaxed">Get complete information about escort services, booking process, and availability in Hinoo</p>
                </div>
                <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl p-6 text-center">
                  <h3 className="text-2xl font-bold text-pink-800 mb-4">Premium Escorts in Hinoo - Complete Information</h3>
                  <p className="text-pink-700 text-lg leading-relaxed">Experience premium companionship services in Hinoo with our carefully verified escorts. Available 24/7 across Hinoo Market Area, residential colonies, main road, and extension areas. We offer VIP escorts, celebrity companions, elite models, independent professionals, Russian beauties, and college girls with complete privacy and professional service delivery throughout Hinoo.</p>
                </div>
              </div>
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-6">Hinoo Escorts - Complete Service Guide</h2>
              <p className="text-lg text-pink-600 max-w-4xl mx-auto">Detailed answers about escort services, booking procedures, and professional companionship in Hinoo areas</p>
            </div>
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="p-6">
                      <h3 className="font-bold text-pink-800 text-lg leading-tight mb-4">{faq.question}</h3>
                      <div className="bg-pink-50 rounded-lg p-4"><p className="text-pink-700 leading-relaxed">{faq.answer}</p></div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Premium Escorts in Hinoo Now!</h2>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">Professional verified companions available 24/7 across Hinoo Market Area & Residential Localities</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call Now: +91-9372662471
                </a>
                <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Hinoo" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl flex items-center gap-3 hover:scale-105">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                  WhatsApp Booking
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {[{val:"10-15",lbl:"Minutes Response"},{val:"100%",lbl:"Verified"},{val:"24/7",lbl:"Available"},{val:"100%",lbl:"Private"}].map((s,i)=><div key={i}><div className="text-2xl font-bold">{s.val}</div><div className="text-sm text-pink-100">{s.lbl}</div></div>)}
                </div>
              </div>
              <div className="mt-6"><p className="text-pink-100 text-lg"><strong>Hinoo Coverage:</strong> Market Area • Residential Colonies • Main Road • Extension Areas • Housing Societies • Commercial Centers</p></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}