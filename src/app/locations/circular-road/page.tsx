import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Escorts in Circular Road 💎 Premium Services | Call Now +91-9372662471',
  description: 'Premium escorts in Circular Road with verified profiles and professional services. Available 24/7 near Central Market and surrounding areas. Call +91-9372662471 for instant booking.',
  keywords: ['escorts in circular road', 'circular road escorts', 'escorts circular road ranchi', 'central market escorts', 'escort service circular road']
}

export default function CircularRoadPage() {
  const services = Array.from({length:5}, (_, i) => ({
    id: i+1, 
    title: `${['Foreign Escorts', 'College Girls', 'MILF Escorts', 'Independent Girls', 'VIP Services'][i]} in Circular Road`, 
    subtitle: `${['International companions', 'Young companions', 'Mature companions', 'Independent professionals', 'VIP experiences'][i]} in Circular Road area`, 
    category: ['FOREIGN', 'COLLEGE', 'MILF', 'INDEPENDENT', 'VIP'][i], 
    image: ['/images/services/foreign escorts.webp', '/images/services/college girls escorts.webp', '/images/services/milf escorts.webp', '/images/services/independent services.webp', '/images/services/vip escorts.webp'][i], 
    link: "tel:+919372662471"
  }));

  const areas = [
    { name: "Central Market Area", description: "Main commercial hub near Circular Road", landmarks: "Central Market, Shopping Complex, Business Centers", responseTime: "8-12 minutes" },
    { name: "Circular Road Junction", description: "Major road junction connecting multiple routes", landmarks: "Traffic Circle, Transport Hub, Commercial Buildings", responseTime: "10-15 minutes" },
    { name: "Bank Road Crossing", description: "Banking and financial district area", landmarks: "Banks, ATMs, Financial Institutions, Offices", responseTime: "12-18 minutes" },
    { name: "Medical College Road", description: "Educational and medical facilities area", landmarks: "Medical Colleges, Hospitals, Student Areas", responseTime: "15-20 minutes" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      <main>
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/services/foreign escorts.webp" alt="Escorts in Circular Road" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-500/80 to-rose-600/90"></div>
          </div>
          <div className="relative max-w-6xl mx-auto z-10">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <div className="bg-white text-pink-600 p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <span className="font-bold text-white">CIRCULAR ROAD</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Escorts in Circular Road</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">Premium Verified Companions Near Central Market & Banking District</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                Call Now: +91-9372662471
              </a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Circular%20Road" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                WhatsApp Booking
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-8 text-center">Premium Escort Services in Circular Road</h2>
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

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">Circular Road Areas We Cover</h2>
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

        <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Premium Escorts in Circular Road Now!</h2>
            <p className="text-xl mb-8">Professional verified companions available 24/7 near Central Market</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-2xl">Call: +91-9372662471</a>
              <a href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Circular%20Road" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-2xl">WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}