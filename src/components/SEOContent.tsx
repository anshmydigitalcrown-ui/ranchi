'use client';

export default function SEOContent() {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main SEO Content Block */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-pink-100">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">
                Premium Escorts in Ranchi - Professional Companion Services
              </h2>
              <p className="text-xl text-pink-600 leading-relaxed max-w-4xl mx-auto">
                Experience the finest escort services in Ranchi with verified profiles, professional companions, 
                and complete privacy protection. Available 24/7 across all major Ranchi locations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-12">
              {/* Left Column - Service Benefits */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center gap-3">
                    <span className="bg-pink-500 text-white p-2 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Why Choose Our Ranchi Escort Services?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-pink-500 mt-1">✓</span>
                      <div>
                        <strong className="text-pink-700">100% Verified Escorts:</strong>
                        <span className="text-pink-600"> All escorts in Ranchi undergo thorough verification including authentic photos, identity checks, and health screening.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-500 mt-1">✓</span>
                      <div>
                        <strong className="text-pink-700">Professional Companions:</strong>
                        <span className="text-pink-600"> Educated, well-mannered, and sophisticated escorts available for all types of social and private occasions.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-500 mt-1">✓</span>
                      <div>
                        <strong className="text-pink-700">Complete Privacy Protection:</strong>
                        <span className="text-pink-600"> Strict confidentiality, secure booking process, and discreet service delivery guaranteed.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-500 mt-1">✓</span>
                      <div>
                        <strong className="text-pink-700">24/7 Availability:</strong>
                        <span className="text-pink-600"> Round-the-clock escort services across all major areas of Ranchi with quick response times.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Service Types */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center gap-3">
                    <span className="bg-pink-500 text-white p-2 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Types of Escort Services in Ranchi
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <strong className="text-pink-700">VIP Escorts</strong>
                      <p className="text-pink-600">Premium high-class companions</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <strong className="text-pink-700">Celebrity Services</strong>
                      <p className="text-pink-600">Star-like glamorous escorts</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <strong className="text-pink-700">Elite Models</strong>
                      <p className="text-pink-600">Professional model escorts</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <strong className="text-pink-700">Travel Companions</strong>
                      <p className="text-pink-600">Business trip escorts</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <strong className="text-pink-700">Event Escorts</strong>
                      <p className="text-pink-600">Social gathering companions</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <strong className="text-pink-700">Outcall Services</strong>
                      <p className="text-pink-600">Hotel and home visits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas in Ranchi */}
            <div className="bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 rounded-2xl p-8 mb-8">
              <h3 className="text-3xl font-bold text-pink-800 text-center mb-8">
                Escort Services Available Across All Ranchi Locations
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { name: "Central Ranchi", desc: "Main Road, Commercial Hub" },
                  { name: "Kanke Road", desc: "Kanke Area, IT Sector" },
                  { name: "HEC Colony", desc: "Heavy Engineering Area" },
                  { name: "Lalpur", desc: "Lalpur Township" },
                  { name: "Hinoo", desc: "Market Area, Shopping" },
                  { name: "Bariatu", desc: "Housing Colony" },
                  { name: "Doranda", desc: "Market, Railway Station" },
                  { name: "Ratu Road", desc: "Road Junction Area" },
                  { name: "Circular Road", desc: "City Center Hub" },
                  { name: "Argora", desc: "Industrial Area" }
                ].map((area, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                    <div className="text-pink-500 mb-2">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-pink-700 text-sm mb-1">{area.name}</h4>
                    <p className="text-xs text-pink-600">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Process */}
            <div className="bg-gradient-to-r from-pink-800 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold text-center mb-8">
                How to Book Escorts in Ranchi - Simple 4-Step Process
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Browse Gallery", desc: "View verified escort profiles with authentic photos and detailed information" },
                  { step: "2", title: "Select Companion", desc: "Choose your preferred escort based on preferences and requirements" },
                  { step: "3", title: "Confirm Booking", desc: "Discuss details, location, duration and confirm your booking securely" },
                  { step: "4", title: "Enjoy Service", desc: "Meet your professional companion and enjoy premium escort service in Ranchi" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white text-pink-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-pink-100">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional SEO Content */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-pink-800 mb-6">
                Why Ranchi Clients Choose Our Escort Services
              </h3>
              <div className="space-y-4 text-pink-700">
                <p className="leading-relaxed">
                  <strong>Professional Excellence:</strong> Our escorts in Ranchi are carefully selected professionals 
                  who understand the importance of discretion, punctuality, and quality service delivery.
                </p>
                <p className="leading-relaxed">
                  <strong>Local Expertise:</strong> With extensive knowledge of Ranchi areas, our escorts can 
                  provide perfect companionship for business meetings, social events, or private occasions.
                </p>
                <p className="leading-relaxed">
                  <strong>Safety First:</strong> All our Ranchi escort services prioritize client safety with 
                  verified profiles, health screening, and secure booking processes.
                </p>
                <p className="leading-relaxed">
                  <strong>Customized Experience:</strong> Whether you need a travel companion, event escort, 
                  or private companion in Ranchi, we tailor services to your specific requirements.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-pink-800 mb-6">
                Premium Escort Categories Available in Ranchi
              </h3>
              <div className="space-y-3">
                {[
                  "Independent Professional Escorts",
                  "Elite Model Companions",
                  "Celebrity-like Service Providers",
                  "Mature Experienced Companions",
                  "College-level Young Escorts", 
                  "International Foreign Escorts",
                  "Local Regional Beauty Escorts",
                  "Business Travel Companions",
                  "Social Event Escort Partners",
                  "Private Occasion Companions"
                ].map((category, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                    <span className="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="text-pink-700 font-medium">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}