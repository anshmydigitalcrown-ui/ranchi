import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Premium Ranchi Escorts 💎 5+ Years of Excellence & Trust',
  description: 'Discover our commitment to providing exceptional premium escort services in Ranchi with the highest standards of professionalism, expertise, and discretion since 2019.',
  keywords: [
    'about ranchi escorts',
    'premium escort services ranchi',
    'trusted escorts ranchi',
    'professional escort service',
    'ranchi companion services',
    'verified escorts ranchi',
    'elite escort agency ranchi',
    'discretion escort services',
    'licensed escort service ranchi',
    'quality escort companions'
  ],
  openGraph: {
    title: 'About Premium Ranchi Escorts - 5+ Years of Excellence & Trust',
    description: 'Discover our commitment to providing exceptional premium escort services in Ranchi with professional standards and complete discretion.',
    images: [{
      url: '/images/services/milf escorts.webp',
      width: 800,
      height: 600,
      alt: 'About Premium Ranchi Escorts - Excellence & Trust',
    }],
    type: 'website',
    siteName: 'Premium Ranchi Escorts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Premium Ranchi Escorts - Excellence & Trust',
    description: 'Discover our commitment to providing exceptional premium escort services in Ranchi with professional standards and complete discretion.',
    images: ['/images/services/milf escorts.webp'],
  }
}

export default function AboutPage() {
  const ranchiAreas = [
    { name: 'Ranchi Main City', desc: 'Central Business District' },
    { name: 'Hinoo Market Area', desc: 'Premium Residential Zone' },
    { name: 'Lalpur Township', desc: 'Educational Hub' },
    { name: 'Harmu Housing Board', desc: 'Residential Complex' },
    { name: 'Doranda Market', desc: 'Commercial Center' },
    { name: 'Ratu Road Junction', desc: 'Transport Hub' },
  ]

  const quickLinks = [
    'VIP Escorts Ranchi',
    'Celebrity Escorts',
    'Russian Escorts',
    'Elite Models',
    'College Girls',
    'Premium Services'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      
      <main>
        {/* Hero Section with MILF Escort Image */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white overflow-hidden">
          {/* Background Image - Full Size */}
          <div className="absolute inset-0">
            <Image
              src="/images/services/milf escorts.webp"
              alt="Premium Ranchi Escorts - About Us"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-bold text-white">ABOUT US</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Premium Ranchi Escorts
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              5+ Years of Premium Excellence & Trust
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
                href="https://wa.me/919372662471" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105 hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* Excellence Stats Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
                Premium Ranchi Escorts - Years of Excellence
              </h2>
              <p className="text-lg text-pink-600 max-w-3xl mx-auto">
                Our experience, expertise, authority, and trustworthiness make us Ranchi&apos;s #1 choice for premium escort services.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">5+</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
                <div className="text-sm text-gray-600">Since 2019</div>
              </div>
              <div className="text-center bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Satisfied Clients</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Verified Escorts</div>
                <div className="text-sm text-gray-600">Authentic Profiles</div>
              </div>
              <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Available Service</div>
                <div className="text-sm text-gray-600">Always Open</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story & Mission Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Story & Mission - Premium Ranchi Escorts
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Premium Ranchi Escorts has been the city&apos;s leading premium escort service provider for over 5 years, 
                  dedicated to connecting discerning clients with exceptional companions since 2019. We understand that 
                  each client has unique preferences and requirements, which is why we maintain a diverse selection of 
                  beautiful, intelligent, and sophisticated escorts across Ranchi.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission as Premium Ranchi Escorts is to provide safe, discreet, and professional escort services 
                  while maintaining the highest standards of quality and customer satisfaction. We believe in creating 
                  meaningful connections and memorable experiences for all our clients through our years of expertise 
                  and unwavering commitment to excellence.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-pink-600 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Why We&apos;re Ranchi&apos;s #1 Choice
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 5+ Years of trusted service in Ranchi</li>
                    <li>• 1000+ satisfied clients and growing</li>
                    <li>• 100% verified and authentic escort profiles</li>
                    <li>• Licensed and professional business operations</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-green-600 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Complete Trust & Discretion
                  </h3>
                  <p className="text-gray-700">
                    Your privacy and safety are our top priorities. All interactions with Premium Ranchi Escorts are 
                    completely confidential, discreet, and secure with our years of experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Coverage Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Premium Ranchi Escorts - Complete Service Coverage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience premium escort services across all major Ranchi locations with our expert companions and verified profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ranchiAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-xl shadow-lg mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-pink-600">{area.name}</h3>
                      <p className="text-sm text-gray-600">{area.desc}</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <span className="text-green-600 font-semibold text-sm">✓ Premium Coverage Available</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Expertise Makes Premium Ranchi Escorts #1 Choice
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Years of experience, hundreds of satisfied clients, and unwavering commitment to excellence define our expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-xl shadow-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Professional Training & Expertise</h3>
                </div>
                <p className="text-gray-700">
                  Our team undergoes continuous professional development to maintain the highest standards of service. 
                  Every member of Premium Ranchi Escorts is trained in customer service excellence, discretion protocols, 
                  and professional conduct.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-xl shadow-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Verified & Authenticated Companions</h3>
                </div>
                <p className="text-gray-700">
                  Every companion in our Premium Ranchi Escorts network undergoes thorough verification including 
                  background checks, health certifications, and professional assessments to ensure authentic and safe experiences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl shadow-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Industry Recognition & Trust</h3>
                </div>
                <p className="text-gray-700">
                  Premium Ranchi Escorts has earned recognition as the city&apos;s most trusted escort service through 
                  consistent quality, professional conduct, and exceptional customer satisfaction over our years of operation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-xl shadow-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Customer Satisfaction Guarantee</h3>
                </div>
                <p className="text-gray-700">
                  Our commitment to excellence ensures 100% customer satisfaction. We stand behind every service 
                  provided by Premium Ranchi Escorts with our satisfaction guarantee and professional support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Location & Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200/20 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-rose-200/20 to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl mb-6 border border-pink-200/50">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-bold text-pink-800 text-lg">CONTACT LOCATIONS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Find Premium Ranchi Escorts
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Contact us for premium escort services across Ranchi and surrounding areas with complete discretion and professionalism.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-pink-200/50 relative overflow-hidden hover:shadow-3xl transition-all duration-500">
                {/* Card Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-2xl shadow-lg mr-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m0 0H7m12 0v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1m12 0h-2m-4-2h6m0 0h2m-8-1V4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-pink-700 mb-1">Main Office</h3>
                      <p className="text-pink-600">Ranchi City Central</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-pink-50/80 p-4 rounded-xl border border-pink-200/50">
                      <div className="flex items-start">
                        <div className="bg-pink-500 text-white p-2 rounded-lg mr-4 mt-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 mb-1">Office Address</div>
                          <div className="text-gray-700">Main Road, Central Ranchi, Jharkhand 834001</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-pink-50/80 p-4 rounded-xl border border-pink-200/50">
                      <div className="flex items-start">
                        <div className="bg-pink-500 text-white p-2 rounded-lg mr-4 mt-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 mb-1">Direct Phone</div>
                          <div>
                            <a href="tel:+919372662471" className="text-pink-600 hover:text-pink-700 font-semibold hover:underline transition-colors">
                              +91-9372662471
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-pink-50/80 p-4 rounded-xl border border-pink-200/50">
                      <div className="flex items-start">
                        <div className="bg-pink-500 text-white p-2 rounded-lg mr-4 mt-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 mb-1">Service Hours</div>
                          <div className="text-green-600 font-semibold">24/7 Available</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-green-200/50 relative overflow-hidden hover:shadow-3xl transition-all duration-500">
                {/* Card Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-lg mr-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-700 mb-1">Service Coverage</h3>
                      <p className="text-green-600">Complete Metropolitan Area</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-green-50/80 p-4 rounded-xl border border-green-200/50">
                      <div className="flex items-start">
                        <div className="bg-green-500 text-white p-2 rounded-lg mr-4 mt-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 mb-1">Coverage Area</div>
                          <div className="text-gray-700">Complete Ranchi Metropolitan Region</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50/80 p-4 rounded-xl border border-green-200/50">
                      <div className="flex items-start">
                        <div className="bg-green-500 text-white p-2 rounded-lg mr-4 mt-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 mb-1">WhatsApp Chat</div>
                          <div>
                            <a href="https://wa.me/919372662471" className="text-green-600 hover:text-green-700 font-semibold hover:underline transition-colors">
                              +91-9372662471
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50/80 p-4 rounded-xl border border-green-200/50">
                      <div className="flex items-start">
                        <div className="bg-green-500 text-white p-2 rounded-lg mr-4 mt-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 mb-1">Email Support</div>
                          <div>
                            <a href="mailto:sanjanadotsingh@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors">
                              sanjanadotsingh@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50/80 p-4 rounded-xl border border-green-200/50">
                      <div className="flex items-start">
                        <div className="bg-green-500 text-white p-2 rounded-lg mr-4 mt-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 mb-1">Service Types</div>
                          <div className="text-purple-600 font-semibold">Outcall & Incall Available</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Escorts Links Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Premium Escorts In Ranchi - All Locations
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {ranchiAreas.concat([
                { name: 'Bariatu Colony', desc: 'Upscale Area' },
                { name: 'Circular Road', desc: 'City Center' },
                { name: 'Argora Industrial', desc: 'Industrial Zone' },
                { name: 'Khelgaon', desc: 'Sports Complex' }
              ]).map((area, index) => (
                <Link
                  key={index}
                  href="/services"
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center border border-pink-200 hover:border-pink-400"
                >
                  <div className="text-pink-600 font-semibold text-sm">
                    Escorts in {area.name.replace(/\s+(Area|Zone|Complex|Township|Junction|Colony)$/, '')}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Premium Ranchi Escorts
            </h2>
            <p className="text-xl mb-8">
              Get in touch with us today to book your premium companion experience. We&apos;re available 24/7 for your convenience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919372662471" 
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-colors shadow-lg flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: +91-9372662471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Now
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-pink-100 text-sm">
                <strong>Important Notice:</strong> All services are for adults 18+ only. We maintain strict confidentiality and professional standards.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}