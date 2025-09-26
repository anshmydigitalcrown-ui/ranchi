import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Premium Gallery 💎 Elite Ranchi Escorts | Verified Photos & Services',
  description: 'Explore our premium gallery of elite Ranchi escorts with verified photos and comprehensive service portfolio. Browse VIP escorts, celebrity services, elite models and more premium companionship options.',
  keywords: [
    'ranchi escorts gallery',
    'premium escorts photos',
    'elite ranchi escorts',
    'vip escorts gallery',
    'celebrity services ranchi',
    'elite models gallery',
    'independent escorts photos',
    'luxury companions ranchi',
    'premium service gallery',
    'verified escorts photos',
    'high-class escorts ranchi',
    'professional escorts gallery',
    'escort service photos',
    'premium companionship gallery',
    'ranchi escort portfolio'
  ],
  openGraph: {
    title: 'Premium Gallery - Elite Ranchi Escorts | Verified Photos & Services',
    description: 'Explore our premium gallery of elite Ranchi escorts with verified photos and comprehensive service portfolio.',
    images: ['/images/gallery/kavita bhabhi.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Gallery - Elite Ranchi Escorts | Verified Photos & Services',
    description: 'Explore our premium gallery of elite Ranchi escorts with verified photos and comprehensive service portfolio.',
    images: ['/images/gallery/kavita bhabhi.webp'],
  }
}

export default function GalleryPage() {
  const galleryImages = [
    '/images/gallery/kavita bhabhi.webp',
    '/images/gallery/pinki bhabhi.webp', 
    '/images/gallery/riya bhabhi.webp',
    '/images/gallery/saumya bhabhi.webp',
    '/images/gallery/savita bhabhi.webp'
  ]

  const premiumServices = [
    {
      name: 'VIP Escorts',
      description: 'Luxury companions for elite experiences with celebrity-level service, platinum experiences, exclusive venues, and luxury amenities with complete discretion. Our VIP escorts are carefully selected for their sophistication, beauty, and ability to provide exceptional companionship for discerning clients.',
      image: '/images/services/vip escorts.webp',
      features: ['Celebrity-level companions', 'Platinum experiences', 'Exclusive venues', 'Luxury amenities', 'Complete discretion']
    },
    {
      name: 'Celebrity Services',
      description: 'High-profile entertainment companions offering elite celebrity-style companionship for high-profile events, entertainment, and exclusive social gatherings. Experience the glamour and sophistication of celebrity-level service with our premium companions.',
      image: '/images/services/celebrity services.webp',
      features: ['High-profile events', 'Entertainment companions', 'Exclusive gatherings', 'Celebrity-style service', 'Glamorous experiences']
    },
    {
      name: 'Elite Models',
      description: 'Professional model companions with stunning beauty, sophistication, and international experience for premium companionship. Our elite models combine physical beauty with intelligence and charm for the ultimate luxury experience.',
      image: '/images/services/elite models.webp',
      features: ['Professional models', 'Stunning beauty', 'International experience', 'Sophisticated charm', 'Premium companionship']
    },
    {
      name: 'Independent Services',
      description: 'Personal independent companions offering personalized services with complete freedom and flexibility. Experience authentic connections with our independent professionals who provide genuine, personalized attention and companionship.',
      image: '/images/services/independent services.webp',
      features: ['Independent professionals', 'Personalized services', 'Complete flexibility', 'Authentic connections', 'Genuine attention']
    },
    {
      name: 'Local Beauties',
      description: 'Beautiful local Ranchi companions with area knowledge, cultural understanding, and authentic charm. Our local beauties offer the perfect combination of regional familiarity and sophisticated companionship for an authentic Ranchi experience.',
      image: '/images/services/local beauties.webp',
      features: ['Local area knowledge', 'Cultural understanding', 'Authentic charm', 'Regional familiarity', 'Sophisticated service']
    },
    {
      name: 'Outcall Services',
      description: 'Professional outcall services to your location with verified companions and complete discretion guaranteed. Enjoy the convenience of premium companionship at your preferred location with our professional outcall services.',
      image: '/images/services/outcall services.jpg',
      features: ['Your location service', 'Verified companions', 'Complete discretion', 'Convenient booking', 'Professional service']
    },
    {
      name: 'Premium Services',
      description: 'Exclusive premium experiences with luxury amenities, high-end venues, and sophisticated companionship. Our premium services offer the ultimate in luxury and exclusivity for clients who demand the very best in every aspect.',
      image: '/images/services/premium services.webp',
      features: ['Exclusive experiences', 'Luxury amenities', 'High-end venues', 'Sophisticated companions', 'Ultimate luxury']
    },
    {
      name: 'Travel Companion',
      description: 'Sophisticated travel companions for business trips, vacations, and international travel with cultural awareness. Experience seamless travel with our cultured companions who enhance every journey with their sophistication and adaptability.',
      image: '/images/services/travel companion.webp',
      features: ['Business trips', 'Vacation companionship', 'International travel', 'Cultural awareness', 'Sophisticated partners']
    },
    {
      name: 'Event Companion',
      description: 'Elegant companions for corporate events, social gatherings, parties, and special occasions with perfect etiquette. Make every event memorable with our elegant companions who excel in social settings and formal occasions.',
      image: '/images/services/event companion.webp',
      features: ['Corporate events', 'Social gatherings', 'Special occasions', 'Perfect etiquette', 'Elegant presence']
    },
    {
      name: 'MILF Escorts',
      description: 'Sophisticated mature women with life experience, wisdom, and refined companionship for discerning clients. Our experienced companions offer the perfect blend of maturity, sophistication, and understanding for clients seeking meaningful connections.',
      image: '/images/services/milf escorts.webp',
      features: ['Life experience', 'Sophisticated wisdom', 'Refined companionship', 'Mature understanding', 'Meaningful connections']
    }
  ]

  const faqs = [
    {
      question: 'What types of companions are featured in your premium gallery?',
      answer: 'Our premium gallery showcases a diverse selection of elite companions including VIP escorts, celebrity-style companions, professional models, independent companions, local beauties, and sophisticated mature companions. All profiles are verified and represent our commitment to quality and authenticity.'
    },
    {
      question: 'Are all photos in the gallery verified and authentic?',
      answer: 'Yes, all photos in our gallery are 100% verified and authentic. We maintain strict verification standards to ensure complete authenticity and transparency. Every companion undergoes a comprehensive verification process before being featured in our premium gallery.'
    },
    {
      question: 'How do I book services from companions shown in the gallery?',
      answer: 'You can book services by calling +91-9372662471 or contacting us via WhatsApp. Our booking process is discreet and professional. Simply mention your preferred companion or service type, and our team will arrange everything according to your requirements.'
    },
    {
      question: 'What premium services are available through your gallery companions?',
      answer: 'We offer comprehensive premium services including VIP companionship, celebrity-style entertainment, elite model experiences, independent personal services, outcall services, travel companionship, event accompaniment, and specialized mature companion services. All services maintain the highest standards of professionalism and discretion.'
    },
    {
      question: 'Do you provide services across all Ranchi locations?',
      answer: 'Yes, our gallery companions provide services across all major Ranchi locations including Central Ranchi, Kanke Road, HEC Colony, Lalpur, Hinoo, Bariatu, Doranda, Ratu Road, Circular Road, and Argora. We ensure comprehensive coverage with location-specific expertise.'
    },
    {
      question: 'What makes your gallery companions premium and elite?',
      answer: 'Our gallery companions are carefully selected based on beauty, sophistication, education, charm, and professionalism. They undergo comprehensive screening, maintain high standards of personal presentation, possess excellent communication skills, and are trained in social etiquette and cultural awareness.'
    },
    {
      question: 'Are outcall services available for all gallery companions?',
      answer: 'Yes, outcall services are available for most of our gallery companions. We provide professional outcall services to hotels, residences, and approved venues across Ranchi with complete discretion and verified companions ensuring your privacy and satisfaction.'
    },
    {
      question: 'How do you ensure privacy and discretion for gallery bookings?',
      answer: 'We maintain the highest standards of privacy and discretion. All communications are confidential, booking details are secured, companions are trained in discretion protocols, and we use encrypted communication channels. Your privacy is our absolute priority.'
    },
    {
      question: 'Can I request specific services or experiences from gallery companions?',
      answer: 'Yes, we offer customized experiences based on your preferences. Whether you need companionship for business events, social gatherings, travel, or personal time, our companions can provide tailored services to meet your specific requirements while maintaining professionalism.'
    },
    {
      question: 'What are the rates for premium gallery companion services?',
      answer: 'Our rates vary based on the type of service, duration, and specific requirements. We offer competitive premium pricing for our elite services. For detailed rate information and package options, please contact us directly at +91-9372662471 for a personalized consultation.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/gallery/kavita bhabhi.webp"
              alt="Premium Ranchi Escorts Gallery"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-500/80 to-rose-600/90"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto z-10">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <div className="bg-white text-pink-600 p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-bold text-white">PREMIUM GALLERY</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Escorts Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Verified Elite Companions & Premium Services Portfolio
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+919372662471" 
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call Now: +91-9372662471
              </a>
              <a 
                href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20from%20your%20premium%20gallery" 
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Gallery
              </a>
            </div>
          </div>
        </section>

        {/* Premium Gallery Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Premium Verified Gallery</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our exclusive collection of verified premium companions with authentic photos and professional services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Gallery Images */}
              {galleryImages.map((image, index) => (
                <div key={`gallery-${index}`} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-xl">
                      <Image
                        src={image}
                        alt={`Premium Companion ${index + 1}`}
                        fill
                        className="object-contain w-full h-full"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          ⭐ VIP
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Premium VIP Escorts</h3>
                    <p className="text-gray-600 text-sm mb-3">Elite luxury companions offering sophisticated VIP experiences with complete discretion and premium service standards.</p>
                    <div className="flex items-center gap-2 text-pink-600 text-sm mb-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Verified Authentic Photos</span>
                    </div>
                    <div className="flex items-center gap-2 text-pink-600 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Available 24/7 Ranchi</span>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Service Images */}
              {premiumServices.map((service, index) => (
                <div key={`service-${index}`} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-xl">
                      <Image
                        src={service.image}
                        alt={`Premium ${service.name} Service`}
                        fill
                        className="object-contain w-full h-full"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {service.name === 'Celebrity Services' ? '⭐ CELEBRITY' : 
                           service.name === 'Elite Models' ? '⭐ ELITE' : 
                           service.name === 'VIP Escorts' ? '⭐ VIP' : '⭐ PREMIUM'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {service.name === 'VIP Escorts' ? 'Elite luxury companions offering sophisticated VIP experiences with complete discretion and premium service standards.' :
                       service.name === 'Celebrity Services' ? 'High-profile entertainment companions providing celebrity-style glamorous experiences for exclusive events and gatherings.' :
                       service.name === 'Elite Models' ? 'Professional fashion models combining stunning beauty with intelligence, sophistication, and international experience.' :
                       service.name === 'Independent Services' ? 'Personalized independent companions offering authentic connections with complete flexibility and genuine attention.' :
                       service.name === 'Local Beauties' ? 'Beautiful Ranchi companions with local cultural knowledge, area expertise, and authentic regional charm.' :
                       service.name === 'Outcall Services' ? 'Professional outcall companions providing verified services at your preferred location with complete discretion.' :
                       service.name === 'Premium Services' ? 'Exclusive premium experiences featuring luxury amenities, high-end venues, and sophisticated companionship.' :
                       service.name === 'Travel Companion' ? 'Cultured travel partners for business trips, vacations, and international journeys with cultural awareness.' :
                       service.name === 'Event Companion' ? 'Elegant companions perfect for corporate events, social gatherings, and special occasions with impeccable etiquette.' :
                       'Sophisticated mature women offering life experience, wisdom, and refined companionship for discerning clients.'}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-pink-600 text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold">Verified Authentic</span>
                      </div>
                      <div className="flex items-center gap-2 text-pink-600 text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold">Available All Ranchi</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Services Content */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Premium Services Details</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive information about our elite companionship services designed for discerning clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {premiumServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-pink-700 mb-4">{service.name}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-pink-600 mb-3">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="bg-pink-500 text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-pink-200">
                    <div className="flex gap-3">
                      <Link
                        href={
                          service.name === 'VIP Escorts' ? '/services/vip-escorts' :
                          service.name === 'Celebrity Services' ? '/services/celebrity-services' :
                          service.name === 'Elite Models' ? '/services/elite-models' :
                          service.name === 'Independent Services' ? '/services/independent-services' :
                          service.name === 'Local Beauties' ? '/services/local-beauties' :
                          service.name === 'Outcall Services' ? '/services/outcall-services' :
                          service.name === 'Premium Services' ? '/services/premium-services' :
                          service.name === 'Travel Companion' ? '/services/travel-companion' :
                          service.name === 'Event Companion' ? '/services/event-companion' :
                          '/services/milf-escorts'
                        }
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        View Details
                      </Link>
                      <a 
                        href="tel:+919372662471" 
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                        Book {service.name}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Premium Gallery FAQ</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Frequently asked questions about our premium gallery companions and elite services
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-pink-700 mb-3 flex items-start gap-3">
                    <div className="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Premium Gallery Companions Now!</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Experience elite companionship with our verified premium gallery companions available 24/7 across all Ranchi locations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:+919372662471" 
                className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                📞 Call: +91-9372662471
              </a>
              <a 
                href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20from%20your%20premium%20gallery" 
                className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                💬 WhatsApp Gallery
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}