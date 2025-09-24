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
              
              {/* Image Container - Vertical aspect ratio for full-size display */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50">
                {/* Service Image - Full vertical display without cropping */}
                {!imageErrors[service.id] ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain w-full h-full rounded-t-2xl"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      priority={service.id <= 3}
                      onError={() => handleImageError(service.id)}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg uppercase tracking-wide">
                        {service.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 flex items-center justify-center rounded-t-2xl">
                    <div className="text-center text-pink-800">
                      <div className="text-4xl mb-2">🖼️</div>
                      <p className="text-sm font-semibold">{service.title}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section - Below Image */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.subtitle}</p>
                <Link 
                  href={service.link}
                  className="block w-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-center font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
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
      </div>
    </section>
  );
}