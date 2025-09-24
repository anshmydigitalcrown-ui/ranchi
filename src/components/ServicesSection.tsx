"use client";

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "VIP Escorts",
      subtitle: "Premium VIP Service",
      category: "VIP",
      image: "/images/services/vip escorts.webp",
      link: "/services/vip"
    },
    {
      id: 2,
      title: "Celebrity Services",
      subtitle: "Star-Like Companions",
      category: "CELEBRITY",
      image: "/images/services/celebrity services.webp",
      link: "/services/celebrity"
    },
    {
      id: 3,
      title: "Elite Models",
      subtitle: "Professional Model Services",
      category: "ELITE",
      image: "/images/services/elite models.webp",
      link: "/services/elite"
    },
    {
      id: 4,
      title: "Premium Services",
      subtitle: "Luxury Premium Experience",
      category: "PREMIUM",
      image: "/images/services/premium services.webp",
      link: "/services/premium"
    },
    {
      id: 5,
      title: "Local Beauties",
      subtitle: "Regional beauties from different states",
      category: "LOCAL",
      image: "/images/services/local beauties.webp",
      link: "/services/local"
    },
    {
      id: 6,
      title: "Travel Companion",
      subtitle: "Perfect companions for business trips",
      category: "TRAVEL",
      image: "/images/services/travel companion.webp",
      link: "/services/travel"
    },
    {
      id: 7,
      title: "Event Companion",
      subtitle: "Elegant companions for social events",
      category: "EVENT",
      image: "/images/services/event companion.webp",
      link: "/services/event"
    },
    {
      id: 8,
      title: "Outcall Services",
      subtitle: "Visit you at your preferred location",
      category: "OUTCALL",
      image: "/images/services/outcall services.jpg",
      link: "/services/outcall"
    },
    {
      id: 9,
      title: "Independent Services",
      subtitle: "Professional independent companions",
      category: "INDEPENDENT",
      image: "/images/services/independent services.webp",
      link: "/services/independent"
    },
    {
      id: 10,
      title: "MILF Escorts",
      subtitle: "Experienced mature women companions",
      category: "MATURE",
      image: "/images/services/milf escorts.webp",
      link: "/services/milf"
    },
    {
      id: 11,
      title: "Housewife Escorts",
      subtitle: "Elegant housewife companions",
      category: "HOUSEWIFE",
      image: "/images/services/housewife escorts.webp",
      link: "/services/housewife"
    },
    {
      id: 12,
      title: "College Girls Escorts",
      subtitle: "Young vibrant college companions",
      category: "COLLEGE",
      image: "/images/services/college girls escorts.webp",
      link: "/services/college"
    },
    {
      id: 13,
      title: "Bengali Escorts",
      subtitle: "Beautiful Bengali cultural companions",
      category: "BENGALI",
      image: "/images/services/bengali escorts.webp",
      link: "/services/bengali"
    },
    {
      id: 14,
      title: "Nepali Escorts",
      subtitle: "Charming Nepali companions",
      category: "NEPALI",
      image: "/images/services/nepali escorts.webp",
      link: "/services/nepali"
    },
    {
      id: 15,
      title: "Russian Escorts",
      subtitle: "International Russian beauties",
      category: "RUSSIAN",
      image: "/images/services/russian escorts.webp",
      link: "/services/russian"
    },
    {
      id: 16,
      title: "Bhabhi Escorts",
      subtitle: "Sophisticated bhabhi companions",
      category: "BHABHI",
      image: "/images/services/bhabhi escorts.webp",
      link: "/services/bhabhi"
    },
    {
      id: 17,
      title: "South Indian Escorts",
      subtitle: "Beautiful South Indian companions",
      category: "SOUTH INDIAN",
      image: "/images/services/south indian escorts.webp",
      link: "/services/south-indian"
    },
    {
      id: 18,
      title: "Premium Model Escorts",
      subtitle: "Elite premium model companions",
      category: "PREMIUM MODEL",
      image: "/images/services/premium model escorts.webp",
      link: "/services/premium-model"
    },
    {
      id: 19,
      title: "Mature Escorts",
      subtitle: "Refined mature women companions",
      category: "MATURE",
      image: "/images/services/mature escorts.webp",
      link: "/services/mature"
    },
    {
      id: 20,
      title: "Foreign Escorts",
      subtitle: "International foreign companions",
      category: "FOREIGN",
      image: "/images/services/foreign escorts.webp",
      link: "/services/foreign"
    }
  ];

  // 10 Local Ranchi Location Services
  const ranchiLocations = [
    { name: "Main Road", area: "Central Ranchi", link: "/locations/main-road" },
    { name: "Kanke Road", area: "Kanke Area", link: "/locations/kanke-road" },
    { name: "HEC Colony", area: "Heavy Engineering Corporation", link: "/locations/hec-colony" },
    { name: "Lalpur", area: "Lalpur Township", link: "/locations/lalpur" },
    { name: "Hinoo", area: "Hinoo Market Area", link: "/locations/hinoo" },
    { name: "Bariatu", area: "Bariatu Housing Colony", link: "/locations/bariatu" },
    { name: "Doranda", area: "Doranda Market", link: "/locations/doranda" },
    { name: "Ratu Road", area: "Ratu Road Junction", link: "/locations/ratu-road" },
    { name: "Circular Road", area: "City Center", link: "/locations/circular-road" },
    { name: "Argora", area: "Argora Industrial Area", link: "/locations/argora" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Premium Escort Services in Ranchi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exclusive collection of professional escort services with verified companions, 
            complete discretion, and 24/7 availability across all Ranchi locations
          </p>
          <div className="mt-6 flex items-center justify-center gap-8 text-sm text-pink-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span>20+ Service Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span>100% Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span>Complete Privacy</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-pink-50 to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-pink-100 hover:border-pink-300">
              
              {/* Icon and Category Section */}
              <div className="relative p-6 text-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Service Icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">
                      {service.id <= 5 ? '💎' : 
                       service.id <= 10 ? '👑' :
                       service.id <= 15 ? '🌟' : '💕'}
                    </span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-pink-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                  {service.subtitle}
                </p>

                {/* Features List */}
                <div className="mb-5">
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li className="flex items-center justify-center gap-2">
                      <span className="w-1 h-1 bg-pink-500 rounded-full"></span>
                      <span>Professional & Verified</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <span className="w-1 h-1 bg-pink-500 rounded-full"></span>
                      <span>24/7 Available</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <span className="w-1 h-1 bg-pink-500 rounded-full"></span>
                      <span>Complete Discretion</span>
                    </li>
                  </ul>
                </div>

                {/* Book Now Button */}
                <Link 
                  href={service.link}
                  className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 group-hover:shadow-pink-500/25"
                >
                  <span>Book Now</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-300/20 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-rose-300/20 to-transparent rounded-full translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Book Your Perfect Companion?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Choose from our premium collection of verified escorts and experience the finest companionship services in Ranchi
            </p>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:shadow-pink-500/25"
            >
              <span>View All Services</span>
              <div className="bg-white/20 rounded-full p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Local Ranchi Location Services Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
              Available Across All Ranchi Locations
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our premium escort services are available in every major area of Ranchi with local expertise and verified companions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4">
            {ranchiLocations.map((location, index) => (
              <Link
                key={index}
                href={location.link}
                className="group relative bg-gradient-to-br from-white to-pink-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 text-center border border-pink-100 hover:border-pink-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Location icon */}
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">📍</span>
                  </div>
                  
                  <h4 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-pink-600 transition-colors duration-300">
                    {location.name}
                  </h4>
                  <p className="text-xs text-gray-600 group-hover:text-pink-500 transition-colors duration-300">
                    {location.area}
                  </p>
                </div>
                
                {/* Hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-all duration-300 pointer-events-none"></div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/locations"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>View All Locations</span>
              <div className="bg-white/20 rounded-full p-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}