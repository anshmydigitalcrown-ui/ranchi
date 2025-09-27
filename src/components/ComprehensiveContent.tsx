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

          {/* Content - Centered Layout */}
          <div className="max-w-5xl mx-auto">
            
            {/* Main Content - Centered */}
            <div className="space-y-12">
              
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
                    Whether you&apos;re a business professional visiting Ranchi for corporate meetings, a tourist exploring 
                    the city&apos;s cultural attractions, or a local resident seeking sophisticated companionship for social 
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

              {/* Quick Contact - Centered */}
              <div className="bg-pink-500 text-white rounded-2xl p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Book Escorts in Ranchi Now</h3>
                <p className="mb-6 text-pink-100">
                  Professional escort services available 24/7 across all Ranchi locations
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <a 
                    href="tel:+919372662471" 
                    className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors"
                  >
                    📞 Call +91-9372662471
                  </a>
                  <a 
                    href="https://wa.me/919372662471" 
                    className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-colors flex items-center gap-2 justify-center"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp Booking
                  </a>
                </div>
                <div className="mt-6 text-pink-200 text-sm">
                  Available 24/7 • All Ranchi Areas • Instant Response
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}