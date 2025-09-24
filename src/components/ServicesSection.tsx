import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "VIP Services",
      subtitle: "Premium VIP Service",
      category: "VIP",
      image: "/images/services/vip-service.jpg",
      link: "/services/vip"
    },
    {
      id: 2,
      title: "Celebrity Services",
      subtitle: "Star-Like Companions",
      category: "CELEBRITY",
      image: "/images/services/celebrity-service.jpg",
      link: "/services/celebrity"
    },
    {
      id: 3,
      title: "Elite Models",
      subtitle: "Professional Model Services",
      category: "ELITE",
      image: "/images/services/elite-models.jpg",
      link: "/services/elite"
    },
    {
      id: 4,
      title: "Premium Services",
      subtitle: "Luxury Premium Experience",
      category: "PREMIUM",
      image: "/images/services/premium-service.jpg",
      link: "/services/premium"
    },
    {
      id: 5,
      title: "Local Beauties",
      subtitle: "Regional beauties from different states",
      category: "LOCAL",
      image: "/images/services/local-beauties.jpg",
      link: "/services/local"
    },
    {
      id: 6,
      title: "Travel Companion",
      subtitle: "Perfect companions for business trips",
      category: "TRAVEL",
      image: "/images/services/travel-companion.jpg",
      link: "/services/travel"
    },
    {
      id: 7,
      title: "Event Companion",
      subtitle: "Elegant companions for social events",
      category: "EVENT",
      image: "/images/services/event-companion.jpg",
      link: "/services/event"
    },
    {
      id: 8,
      title: "Outcall Services",
      subtitle: "Visit you at your preferred location",
      category: "OUTCALL",
      image: "/images/services/outcall-service.jpg",
      link: "/services/outcall"
    },
    {
      id: 9,
      title: "Independent Services",
      subtitle: "Professional independent companions",
      category: "INDEPENDENT",
      image: "/images/services/independent-service.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-80">
                {/* Placeholder background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-400"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {service.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-pink-200 mb-4">{service.subtitle}</p>
                  <Link 
                    href={service.link}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-center font-semibold transition-colors w-full"
                  >
                    Book {service.title}
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
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