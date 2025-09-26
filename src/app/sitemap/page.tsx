import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap - All Pages | Premium Escort Services in Ranchi',
  description: 'Complete sitemap of all premium escort service pages and locations in Ranchi. Find VIP escorts, celebrity services, elite models, and location-specific companions across all Ranchi areas.',
  keywords: [
    'sitemap Ranchi escorts',
    'all pages escort services',
    'Ranchi locations escorts',
    'complete service directory',
    'escort services sitemap',
    'all Ranchi areas',
    'premium escort pages',
    'VIP services directory',
    'location guide escorts',
    'service categories Ranchi'
  ],
  authors: [{ name: 'Ranchi Premium Escorts' }],
  creator: 'Ranchi Elite Services',
  publisher: 'Ranchi Premium Escorts',
  metadataBase: new URL('https://ranchi-mu.vercel.app'),
  alternates: {
    canonical: '/sitemap',
  },
  openGraph: {
    title: 'Complete Sitemap - All Premium Escort Services & Locations in Ranchi',
    description: 'Browse all premium escort service pages and locations in Ranchi. Complete directory of VIP escorts, celebrity services, and location-specific companions.',
    url: '/sitemap',
    siteName: 'Ranchi Premium Escorts',
    locale: 'en_US',
    type: 'website',
  },
}

export default function SitemapPage() {
  const services = [
    { name: 'VIP Escorts', url: '/services/vip-escorts' },
    { name: 'Celebrity Services', url: '/services/celebrity-services' },
    { name: 'Elite Models', url: '/services/elite-models' },
    { name: 'Independent Services', url: '/services/independent-services' },
    { name: 'Local Beauties', url: '/services/local-beauties' },
    { name: 'Outcall Services', url: '/services/outcall-services' },
    { name: 'Premium Services', url: '/services/premium-services' },
    { name: 'Travel Companion', url: '/services/travel-companion' },
    { name: 'Event Companion', url: '/services/event-companion' },
    { name: 'MILF Escorts', url: '/services/milf-escorts' },
    { name: 'Housewife Escorts', url: '/services/housewife-escorts' },
    { name: 'Bengali Escorts', url: '/services/bengali-escorts' },
    { name: 'College Girls Escorts', url: '/services/college-girls-escorts' },
    { name: 'Nepali Escorts', url: '/services/nepali-escorts' },
    { name: 'Russian Escorts', url: '/services/russian-escorts' },
  ]

  const locations = [
    { name: 'Central Ranchi', url: '/locations/central-ranchi' },
    { name: 'Hinoo', url: '/locations/hinoo' },
    { name: 'Kanke Road', url: '/locations/kanke-road' },
    { name: 'Lalpur', url: '/locations/lalpur' },
    { name: 'HEC Colony', url: '/locations/hec-colony' },
    { name: 'Bariatu', url: '/locations/bariatu' },
    { name: 'Doranda', url: '/locations/doranda' },
    { name: 'Ratu Road', url: '/locations/ratu-road' },
    { name: 'Circular Road', url: '/locations/circular-road' },
    { name: 'Argora', url: '/locations/argora' },
  ]

  const mainPages = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Contact', url: '/contact' },
    { name: 'Premium Gallery', url: '/gallery' },
    { name: 'All Services', url: '/services' },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-500 to-rose-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Website Sitemap
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Browse all premium escort service pages and locations in Ranchi. 
              Find exactly what you're looking for with our comprehensive site directory.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-pink-100 text-lg">
                ✓ All Service Categories • ✓ All Ranchi Locations • ✓ Premium Gallery • ✓ Contact Information
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Pages */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-pink-200 pb-2">
                Main Pages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mainPages.map((page) => (
                  <Link 
                    key={page.url}
                    href={page.url}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300 border-l-4 border-pink-500 group"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600">
                        {page.name}
                      </h3>
                      <svg className="w-5 h-5 text-pink-500 group-hover:text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{page.url}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Premium Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-pink-200 pb-2">
                Premium Services ({services.length} Categories)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <Link 
                    key={service.url}
                    href={service.url}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300 border-l-4 border-pink-500 group"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600">
                        {service.name}
                      </h3>
                      <svg className="w-5 h-5 text-pink-500 group-hover:text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{service.url}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Ranchi Locations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-pink-200 pb-2">
                Ranchi Locations ({locations.length} Areas)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {locations.map((location) => (
                  <Link 
                    key={location.url}
                    href={location.url}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300 border-l-4 border-pink-500 group"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600">
                        {location.name}
                      </h3>
                      <svg className="w-5 h-5 text-pink-500 group-hover:text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{location.url}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* SEO Information */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Website Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-pink-700 mb-2">{mainPages.length}</h3>
                  <p className="text-sm text-gray-600">Main Pages</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 9V3.5L22 12l-9 8.5V15c-6 0-10 4.5-11 10 1-7 4-13 11-16z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-pink-700 mb-2">{services.length}</h3>
                  <p className="text-sm text-gray-600">Service Categories</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-pink-700 mb-2">{locations.length}</h3>
                  <p className="text-sm text-gray-600">Ranchi Locations</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 13.5L8.5 16 12 18.5 15.5 16 12 13.5z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-pink-700 mb-2">{mainPages.length + services.length + locations.length}</h3>
                  <p className="text-sm text-gray-600">Total Pages</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700 mb-4">
                  🌟 All pages are optimized for SEO, mobile-responsive, and updated regularly with fresh content for the best user experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 justify-center"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    Contact Us
                  </Link>
                  <Link 
                    href="/services" 
                    className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 justify-center"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                    Browse Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}