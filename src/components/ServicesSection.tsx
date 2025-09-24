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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
            Premium Services In Ranchi - Our Services
          </h2>
          <p className="text-lg text-pink-600 max-w-3xl mx-auto">
            Explore our wide range of premium services designed to provide you with the ultimate experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
              
              {/* Image Container - Fixed aspect ratio like reference */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                {/* Service Image - Properly fitted to show face and body */}
                {!imageErrors[service.id] ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-top w-full h-full"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      priority={service.id <= 3}
                      onError={() => handleImageError(service.id)}
                    />
                    
                    {/* Category Badge - Top right like reference */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wide">
                        ⭐ {service.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 flex items-center justify-center">
                    <div className="text-center text-pink-800">
                      <div className="text-4xl mb-2">🖼️</div>
                      <p className="text-sm font-semibold">{service.title}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section - Below Image like reference */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.subtitle}</p>
                <Link 
                  href={service.link}
                  className="block w-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-center font-bold transition-all duration-200 shadow-md hover:shadow-lg uppercase tracking-wide"
                >
                  Book {service.title}
                </Link>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/5 transition-all duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-lg"
          >
            View All Services
          </Link>
        </div>

        {/* Local Ranchi Location Services Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-800 mb-4">
              Available in Ranchi Locations
            </h3>
            <p className="text-lg text-pink-600">
              Our services are available across all major areas in Ranchi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {ranchiLocations.map((location, index) => (
              <Link
                key={index}
                href={location.link}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-4 text-center border border-pink-100 hover:border-pink-300"
              >
                <div className="text-pink-500 mb-2">
                  <span className="text-2xl">📍</span>
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-pink-600">
                  {location.name}
                </h4>
                <p className="text-xs text-gray-600 group-hover:text-pink-500">
                  {location.area}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/locations"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition-colors shadow-md"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}