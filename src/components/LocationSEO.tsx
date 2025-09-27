'use client';

export default function LocationSEO() {
  const ranchiAreas = [
    {
      name: "Central Ranchi",
      description: "Main commercial hub with premium hotels and business centers",
      landmarks: ["Main Road", "Commercial Complex", "City Center"],
      features: ["24/7 availability", "Quick response", "Hotel visits", "Business meetings"]
    },
    {
      name: "Kanke Road", 
      description: "IT sector area with modern facilities and corporate offices",
      landmarks: ["IT Park", "Corporate Offices", "Shopping Malls"],
      features: ["Professional escorts", "Business companions", "Travel partners", "Event escorts"]
    },
    {
      name: "HEC Colony",
      description: "Heavy Engineering Corporation residential area",
      landmarks: ["HEC Township", "Residential Complex", "Club Houses"],
      features: ["Outcall services", "Home visits", "Private meetings", "Discreet service"]
    },
    {
      name: "Lalpur",
      description: "Premium township with upscale residential areas",
      landmarks: ["Lalpur Township", "Residential Areas", "Community Centers"],
      features: ["Elite escorts", "Premium service", "Privacy guaranteed", "Luxury companions"]
    },
    {
      name: "Hinoo Market",
      description: "Popular shopping and commercial district",
      landmarks: ["Hinoo Market", "Shopping Complex", "Commercial Area"],
      features: ["Shopping companions", "Social escorts", "Event partners", "Dinner dates"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">
              Premium Escorts Available in All Ranchi Areas
            </h2>
            <p className="text-xl text-pink-600 max-w-4xl mx-auto leading-relaxed">
              Our verified escort services cover every major location in Ranchi with professional companions 
              available 24/7 for all types of occasions - business meetings, social events, travel, and private companionship.
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {ranchiAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-pink-100">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{area.name}</h3>
                      <p className="text-pink-100">Escort Services Available</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-pink-700 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-pink-800 mb-3">Key Landmarks:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.landmarks.map((landmark, i) => (
                        <span key={i} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-pink-800 mb-3">Service Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {area.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-pink-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Types by Location */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-pink-800 text-center mb-10">
              Comprehensive Escort Services Across Ranchi Locations
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-pink-700 flex items-center gap-2">
                  <span className="bg-pink-500 text-white p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </span>
                  Elite & VIP Services
                </h4>
                <ul className="space-y-2 text-pink-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    High-class VIP escorts in all areas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    Celebrity-like glamorous companions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    Elite model escort services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    Premium luxury companions
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-pink-700 flex items-center gap-2">
                  <span className="bg-pink-500 text-white p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Occasion-based Services
                </h4>
                <ul className="space-y-2 text-pink-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    Business meeting companions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    Social event escorts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    Travel companion services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    Dinner date partners
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-pink-700 flex items-center gap-2">
                  <span className="bg-pink-500 text-white p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </span>
                  Location Services
                </h4>
                <ul className="space-y-2 text-pink-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    Hotel outcall services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    Home visit companions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    Office area meetups
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    Public place companions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-pink-600 to-pink-700 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">
                Book Verified Escorts in Any Ranchi Location
              </h3>
              <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
                Professional escort services available 24/7 across all major Ranchi areas. 
                Verified profiles, instant booking, complete privacy, and satisfaction guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919372662471" 
                  className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  Call +91-9372662471
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}