"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesSection() {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const handleImageError = (serviceId: number) => {
    setImageErrors(prev => ({...prev, [serviceId]: true}));
  };
  const services = [
    {
      id: 1,
      title: "VIP Escorts",
      subtitle: "Premium VIP Service",
      category: "VIP",
      image: "/images/services/vip escorts.webp",
      link: "/services/vip-escorts"
    },
    {
      id: 2,
      title: "Celebrity Services",
      subtitle: "Star-Like Companions",
      category: "CELEBRITY",
      image: "/images/services/celebrity services.webp",
      link: "/services/celebrity-services"
    },
    {
      id: 3,
      title: "Elite Models",
      subtitle: "Professional Model Services",
      category: "ELITE",
      image: "/images/services/elite models.webp",
      link: "/services/elite-models"
    },
    {
      id: 4,
      title: "Premium Services",
      subtitle: "Luxury Premium Experience",
      category: "PREMIUM",
      image: "/images/services/premium services.webp",
      link: "/services/premium-services"
    },
    {
      id: 5,
      title: "Local Beauties",
      subtitle: "Regional beauties from different states",
      category: "LOCAL",
      image: "/images/services/local beauties.webp",
      link: "/services/local-beauties"
    },
    {
      id: 6,
      title: "Travel Companion",
      subtitle: "Perfect companions for business trips",
      category: "TRAVEL",
      image: "/images/services/travel companion.webp",
      link: "/services/travel-companion"
    },
    {
      id: 7,
      title: "Event Companion",
      subtitle: "Elegant companions for social events",
      category: "EVENT",
      image: "/images/services/event companion.webp",
      link: "/services/event-companion"
    },
    {
      id: 8,
      title: "Outcall Services",
      subtitle: "Visit you at your preferred location",
      category: "OUTCALL",
      image: "/images/services/outcall services.jpg",
      link: "/services/outcall-services"
    },
    {
      id: 9,
      title: "Independent Services",
      subtitle: "Professional independent companions",
      category: "INDEPENDENT",
      image: "/images/services/independent services.webp",
      link: "/services/independent-services"
    },
    {
      id: 10,
      title: "MILF Escorts",
      subtitle: "Experienced mature women companions",
      category: "MATURE",
      image: "/images/services/milf escorts.webp",
      link: "/services/milf-escorts"
    },
    {
      id: 11,
      title: "Housewife Escorts",
      subtitle: "Elegant housewife companions",
      category: "HOUSEWIFE",
      image: "/images/services/housewife escorts.webp",
      link: "/services/housewife-escorts"
    },
    {
      id: 12,
      title: "College Girls Escorts",
      subtitle: "Young vibrant college companions",
      category: "COLLEGE",
      image: "/images/services/college girls escorts.webp",
      link: "/services/college-girls-escorts"
    },
    {
      id: 13,
      title: "Bengali Escorts",
      subtitle: "Beautiful Bengali cultural companions",
      category: "BENGALI",
      image: "/images/services/bengali escorts.webp",
      link: "/services/bengali-escorts"
    },
    {
      id: 14,
      title: "Nepali Escorts",
      subtitle: "Charming Nepali companions",
      category: "NEPALI",
      image: "/images/services/nepali escorts.webp",
      link: "/services/nepali-escorts"
    },
    {
      id: 15,
      title: "Russian Escorts",
      subtitle: "International Russian beauties",
      category: "RUSSIAN",
      image: "/images/services/russian escorts.webp",
      link: "/services/russian-escorts"
    },
    {
      id: 16,
      title: "Bhabhi Escorts",
      subtitle: "Sophisticated bhabhi companions",
      category: "BHABHI",
      image: "/images/services/bhabhi escorts.webp",
      link: "/services/housewife-escorts"
    },
    {
      id: 17,
      title: "South Indian Escorts",
      subtitle: "Beautiful South Indian companions",
      category: "SOUTH INDIAN",
      image: "/images/services/south indian escorts.webp",
      link: "/services/independent-services"
    },
    {
      id: 18,
      title: "Premium Model Escorts",
      subtitle: "Elite premium model companions",
      category: "PREMIUM MODEL",
      image: "/images/services/premium model escorts.webp",
      link: "/services/premium-services"
    },
    {
      id: 19,
      title: "Mature Escorts",
      subtitle: "Refined mature women companions",
      category: "MATURE",
      image: "/images/services/mature escorts.webp",
      link: "/services/milf-escorts"
    },
    {
      id: 20,
      title: "Foreign Escorts",
      subtitle: "International foreign companions",
      category: "FOREIGN",
      image: "/images/services/foreign escorts.webp",
      link: "/services/russian-escorts"
    }
  ];

  // 10 Local Ranchi Location Services
  const ranchiLocations = [
    { name: "Central Ranchi", area: "Main Road, Circular Road", link: "/locations/central-ranchi" },
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
            Premium Services In Ranchi - Our Services
          </h2>
          <p className="text-lg text-pink-600 max-w-3xl mx-auto">
            Explore our wide range of premium services designed to provide you with the ultimate experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 15).map((service) => (
            <div key={service.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-xl">
                  {!imageErrors[service.id] ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain w-full h-full"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      priority={service.id <= 6}
                      onError={() => handleImageError(service.id)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 flex items-center justify-center">
                      <div className="text-center text-pink-800">
                        <div className="text-2xl mb-1">🖼️</div>
                        <p className="text-xs font-semibold">{service.title}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ {service.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.subtitle}</p>
                <Link 
                  href={service.link}
                  className="block w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-center font-semibold transition-all duration-300"
                >
                  Book {service.title}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>View All Services</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Enhanced Local Ranchi Location Services Section */}
        <div className="mt-16 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-300/20 to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
          
          <div className="relative z-10 p-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-4 border border-pink-200/50">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-bold text-pink-800 text-sm">PREMIUM LOCATIONS</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
                Available in Ranchi Locations
              </h3>
              <p className="text-lg text-pink-600 max-w-2xl mx-auto">
                Our services are available across all major areas in Ranchi
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4">
              {ranchiLocations.map((location, index) => (
                <Link
                  key={index}
                  href={location.link}
                  className="group relative overflow-hidden"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 text-center border border-pink-200/50 hover:border-pink-400/60 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
                    {/* Card Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Location Pin Icon */}
                    <div className="relative z-10 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Location Name */}
                    <div className="relative z-10">
                      <h4 className="font-bold text-gray-800 text-sm mb-2 group-hover:text-pink-600 transition-colors duration-300">
                        {location.name}
                      </h4>
                      <p className="text-xs text-gray-600 group-hover:text-pink-500 transition-colors duration-300 line-clamp-2">
                        {location.area}
                      </p>
                    </div>

                    {/* Hover Effect Indicator */}
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <div className="bg-pink-500 text-white p-1 rounded-full">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link 
                href="/locations"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 hover:from-pink-600 hover:via-pink-700 hover:to-rose-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>View All Locations</span>
                <div className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 group-hover:translate-x-1 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}