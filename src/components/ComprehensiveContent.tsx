'use client';

export default function ComprehensiveContent() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Content Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">
              Complete Guide to Escort Services in Ranchi
            </h2>
            <p className="text-xl text-pink-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about premium escort services, booking process, safety measures, 
              and professional companionship services available 24/7 across all major Ranchi locations.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* About Escort Services in Ranchi */}
              <article className="bg-white rounded-2xl shadow-lg p-8 border border-pink-100">
                <h3 className="text-3xl font-bold text-pink-800 mb-6">
                  About Professional Escort Services in Ranchi
                </h3>
                <div className="prose prose-pink max-w-none">
                  <p className="text-pink-700 leading-relaxed mb-4">
                    Ranchi, the capital city of Jharkhand, offers a vibrant social scene with numerous opportunities 
                    for professional companionship services. Our premium escort services in Ranchi cater to discerning 
                    clients who value quality, discretion, and professionalism above all else.
                  </p>
                  <p className="text-pink-700 leading-relaxed mb-4">
                    Whether you're a business professional visiting Ranchi for corporate meetings, a tourist exploring 
                    the city's cultural attractions, or a local resident seeking sophisticated companionship for social 
                    events, our verified escort services provide the perfect solution for all your companionship needs.
                  </p>
                  <p className="text-pink-700 leading-relaxed">
                    Our escort services in Ranchi are available across all major areas including Central Ranchi, 
                    Kanke Road, HEC Colony, Lalpur, Hinoo, Bariatu, Doranda, Ratu Road, Circular Road, and Argora. 
                    Each location offers unique advantages for different types of meetings and occasions.
                  </p>
                </div>
              </article>

              {/* Service Categories */}
              <article className="bg-white rounded-2xl shadow-lg p-8 border border-pink-100">
                <h3 className="text-3xl font-bold text-pink-800 mb-6">
                  Types of Escort Services Available in Ranchi
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      category: "VIP & Elite Services",
                      services: ["Premium VIP Escorts", "Celebrity-like Companions", "Elite Model Services", "Luxury Companions"],
                      description: "High-end companionship services for exclusive events and premium occasions."
                    },
                    {
                      category: "Business & Travel",
                      services: ["Business Meeting Companions", "Travel Partners", "Corporate Event Escorts", "Conference Companions"],
                      description: "Professional escorts for business occasions, travel, and corporate events."
                    },
                    {
                      category: "Social & Events",
                      services: ["Dinner Date Partners", "Party Companions", "Social Event Escorts", "Wedding Companions"],
                      description: "Sophisticated companions for social gatherings and special occasions."
                    },
                    {
                      category: "Location-based Services",
                      services: ["Hotel Outcall Services", "Home Visit Companions", "Office Area Meetings", "Public Place Companions"],
                      description: "Flexible location-based services across all major Ranchi areas."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-pink-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-pink-800 mb-3">{item.category}</h4>
                      <p className="text-pink-600 mb-4 text-sm">{item.description}</p>
                      <ul className="space-y-1">
                        {item.services.map((service, i) => (
                          <li key={i} className="text-pink-700 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>

              {/* Booking Process */}
              <article className="bg-white rounded-2xl shadow-lg p-8 border border-pink-100">
                <h3 className="text-3xl font-bold text-pink-800 mb-6">
                  How to Book Escort Services in Ranchi - Step-by-Step Guide
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Browse Verified Profiles",
                      description: "Explore our gallery of verified escorts in Ranchi with authentic photos and detailed profiles including services offered, availability, and areas covered.",
                      tips: "All profiles are 100% verified with identity checks and photo authentication."
                    },
                    {
                      step: "2", 
                      title: "Select Your Companion",
                      description: "Choose your preferred escort based on your requirements, preferences, location in Ranchi, and the type of occasion or service needed.",
                      tips: "Consider factors like language skills, education level, and experience for the best match."
                    },
                    {
                      step: "3",
                      title: "Contact & Discuss Details",
                      description: "Contact us via phone or WhatsApp to discuss your requirements, preferred timing, duration, location in Ranchi, and any special requests.",
                      tips: "Be clear about your expectations and any specific requirements for the best service experience."
                    },
                    {
                      step: "4",
                      title: "Confirm Booking & Payment",
                      description: "Confirm your booking details including time, location, duration, and services. Complete the secure payment process and receive confirmation.",
                      tips: "We offer multiple secure payment options and provide instant booking confirmation."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-pink-800 mb-3">{item.title}</h4>
                        <p className="text-pink-700 leading-relaxed mb-2">{item.description}</p>
                        <div className="bg-pink-100 rounded-lg p-3">
                          <p className="text-sm text-pink-600">
                            <strong>Pro Tip:</strong> {item.tips}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Safety & Privacy */}
              <article className="bg-white rounded-2xl shadow-lg p-8 border border-pink-100">
                <h3 className="text-3xl font-bold text-pink-800 mb-6">
                  Safety, Privacy & Professional Standards
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-pink-700 mb-4">Safety Measures</h4>
                    <ul className="space-y-3">
                      {[
                        "100% verified escort profiles with ID checks",
                        "Regular health screening and wellness checks",
                        "Professional background verification process",
                        "Safe meeting locations and protocols",
                        "24/7 support and emergency assistance",
                        "Secure communication channels"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-pink-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-pink-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-pink-700 mb-4">Privacy Protection</h4>
                    <ul className="space-y-3">
                      {[
                        "Strict confidentiality and data protection",
                        "Discreet service delivery and communication",
                        "Secure booking and payment processing",
                        "Anonymous client profile management",
                        "Professional conduct and discretion",
                        "No sharing of personal information"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-pink-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-pink-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Quick Contact */}
              <div className="bg-pink-500 text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Book Escorts in Ranchi Now</h3>
                <p className="mb-6 text-pink-100">
                  Professional escort services available 24/7 across all Ranchi locations
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:+919372662471" 
                    className="block bg-white text-pink-600 px-6 py-3 rounded-full font-bold text-center hover:bg-pink-50 transition-colors"
                  >
                    📞 Call +91-9372662471
                  </a>
                  <a 
                    href="https://wa.me/919372662471" 
                    className="block bg-green-500 text-white px-6 py-3 rounded-full font-bold text-center hover:bg-green-600 transition-colors"
                  >
                    💬 WhatsApp Booking
                  </a>
                </div>
                <div className="mt-6 text-center text-pink-200 text-sm">
                  Available 24/7 • All Ranchi Areas • Instant Response
                </div>
              </div>

              {/* Service Highlights */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
                <h3 className="text-xl font-bold text-pink-800 mb-6">Service Highlights</h3>
                <div className="space-y-4">
                  {[
                    { icon: "✓", text: "100% Verified Escorts", color: "text-green-600" },
                    { icon: "🔒", text: "Complete Privacy", color: "text-blue-600" },
                    { icon: "⏰", text: "24/7 Availability", color: "text-purple-600" },
                    { icon: "📍", text: "All Ranchi Areas", color: "text-red-600" },
                    { icon: "⭐", text: "Premium Quality", color: "text-yellow-600" },
                    { icon: "💼", text: "Professional Service", color: "text-indigo-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className={`text-lg ${item.color}`}>{item.icon}</span>
                      <span className="text-pink-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Locations */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
                <h3 className="text-xl font-bold text-pink-800 mb-6">Popular Ranchi Areas</h3>
                <div className="space-y-3">
                  {[
                    "Central Ranchi (Main Road)",
                    "Kanke Road Area",
                    "HEC Colony",
                    "Lalpur Township", 
                    "Hinoo Market Area",
                    "Bariatu Colony",
                    "Doranda Station",
                    "Ratu Road Junction",
                    "Circular Road",
                    "Argora Industrial"
                  ].map((location, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 hover:bg-pink-50 rounded-lg transition-colors">
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-pink-700 text-sm font-medium">{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}