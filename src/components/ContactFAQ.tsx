'use client';
import { useState } from 'react';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const contactFaqs = [
    {
      question: "How to quickly contact escorts in Ranchi for booking?",
      answer: "Contact escorts in Ranchi instantly by calling +91-9372662471 or WhatsApp. We provide 24/7 booking assistance with 5-minute response time. You can also fill our online contact form for detailed booking requirements. All contact methods ensure complete privacy and professional service."
    },
    {
      question: "What information is needed when contacting for escort services in Ranchi?",
      answer: "When contacting for escort services in Ranchi, provide: your preferred location (Central Ranchi, HEC Colony, Kanke Road, etc.), service duration, type of companion desired, contact number, and any special requirements. This helps us match you with the perfect escort and provide instant confirmation."
    },
    {
      question: "Are contact details for escorts in Ranchi verified and safe?",
      answer: "Yes, all contact methods for escorts in Ranchi are completely verified and safe. Our phone number +91-9372662471, WhatsApp, and email are authentic business contacts. We maintain strict privacy protocols, secure communication, and professional conduct in all interactions."
    },
    {
      question: "How quickly do escorts in Ranchi respond to contact requests?",
      answer: "Escorts in Ranchi respond to contact requests within 5 minutes during business hours and within 15 minutes for 24/7 availability. Call or WhatsApp +91-9372662471 for immediate response. Email inquiries receive professional replies within 1 hour with detailed service information."
    },
    {
      question: "Can I contact escorts in Ranchi for different locations and areas?",
      answer: "Yes, you can contact us for escort services across all Ranchi locations including Central Ranchi, HEC Colony, Kanke Road, Lalpur, Hinoo, Bariatu, Doranda, Ratu Road, Circular Road, and Argora. We provide location-specific contact assistance and area-wise service coordination."
    },
    {
      question: "Is there a contact form to book escorts in Ranchi online?",
      answer: "Yes, we provide a comprehensive online contact form for booking escorts in Ranchi. Fill in your details including location, service type, duration, and requirements. The form ensures privacy and generates instant WhatsApp booking confirmation for your convenience."
    },
    {
      question: "What are the best times to contact escort services in Ranchi?",
      answer: "Contact escort services in Ranchi anytime as we're available 24/7. Peak hours (10 AM - 10 PM) get instant response, while late night (10 PM - 6 AM) gets response within 15 minutes. Weekend bookings are highly recommended to be made in advance for better availability."
    },
    {
      question: "How to contact for emergency or last-minute escort booking in Ranchi?",
      answer: "For emergency or last-minute escort booking in Ranchi, immediately call +91-9372662471. We provide urgent booking services with escorts available within 30-45 minutes across Central Ranchi, HEC Colony, and main areas. WhatsApp provides instant location and availability confirmation."
    },
    {
      question: "Are contact communications with Ranchi escort services completely private?",
      answer: "Absolutely. All contact communications with Ranchi escort services are completely private and confidential. We use secure communication channels, encrypted messaging, private phone lines, and strict data protection protocols. Your privacy and discretion are guaranteed throughout the contact process."
    },
    {
      question: "Can I contact to get rates and pricing for escorts in Ranchi?",
      answer: "Yes, contact +91-9372662471 to get detailed rates and pricing for escorts in Ranchi. We provide transparent pricing for different service categories including VIP escorts, celebrity companions, elite models, and standard services. Rates vary by location, duration, and companion category with special package options available."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100 to-rose-100 px-6 py-3 rounded-full shadow-lg mb-6 border border-pink-200">
                <div className="bg-pink-500 text-white p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-bold text-pink-800">CONTACT FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">
                Contact Escorts in Ranchi - Frequently Asked Questions
              </h2>
              <p className="text-xl text-pink-600 leading-relaxed">
                Get all your questions answered about contacting and booking premium escort services in Ranchi
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">Why Choose Our Contact Service?</h3>
                <ul className="space-y-3 text-pink-600">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 text-lg">✓</span>
                    <span><strong>5-Minute Response:</strong> Instant reply to all contact requests via call, WhatsApp, or email for escorts in Ranchi.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 text-lg">✓</span>
                    <span><strong>24/7 Availability:</strong> Round-the-clock contact support for booking escort services across all Ranchi locations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 text-lg">✓</span>
                    <span><strong>Verified Contact Details:</strong> All contact information is authentic, secure, and professionally managed.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2 text-lg">✓</span>
                    <span><strong>Complete Privacy Protection:</strong> Confidential communication with encrypted messaging and secure contact protocols.</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">Multiple Contact Methods</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-pink-100 rounded-lg p-4 hover:bg-pink-200 transition-colors">
                    <div className="flex items-center mb-2">
                      <div className="bg-pink-500 text-white p-2 rounded mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <strong className="text-pink-700">Direct Phone</strong>
                    </div>
                    <div className="text-sm text-pink-600">+91-9372662471 - Instant booking confirmation</div>
                  </div>
                  
                  <div className="bg-green-100 rounded-lg p-4 hover:bg-green-200 transition-colors">
                    <div className="flex items-center mb-2">
                      <div className="bg-green-500 text-white p-2 rounded mr-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                      </div>
                      <strong className="text-green-700">WhatsApp</strong>
                    </div>
                    <div className="text-sm text-green-600">Chat booking with instant location sharing</div>
                  </div>

                  <div className="bg-blue-100 rounded-lg p-4 hover:bg-blue-200 transition-colors">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-500 text-white p-2 rounded mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <strong className="text-blue-700">Online Form</strong>
                    </div>
                    <div className="text-sm text-blue-600">Detailed booking with privacy protection</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">Contact Process for Escorts in Ranchi</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-pink-600 mb-2">1</div>
                  <div className="text-sm text-gray-700">
                    <strong>Contact Us:</strong> Call, WhatsApp, or fill online form
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-pink-600 mb-2">2</div>
                  <div className="text-sm text-gray-700">
                    <strong>Instant Response:</strong> 5-minute confirmation with details
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-pink-600 mb-2">3</div>
                  <div className="text-sm text-gray-700">
                    <strong>Profile Selection:</strong> Choose from available verified escorts
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-pink-600 mb-2">4</div>
                  <div className="text-sm text-gray-700">
                    <strong>Service Delivery:</strong> Professional companion at your location
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-6">
            Contact FAQs - Escorts in Ranchi Booking Questions
          </h2>
          <p className="text-lg text-pink-600 max-w-4xl mx-auto">
            Comprehensive answers about contacting, booking, and service procedures for escort services in Ranchi
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {contactFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-start hover:bg-pink-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-bold text-pink-800 pr-4 text-lg leading-tight">{faq.question}</h3>
                  <span className={`text-pink-600 transform transition-transform flex-shrink-0 text-xl ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="bg-pink-50 rounded-lg p-4">
                      <p className="text-pink-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-pink-800 mb-6">Ready to Contact Premium Escorts in Ranchi?</h3>
            <p className="text-pink-700 mb-8 text-lg">
              Get instant response, verified profiles, and professional service delivery across all Ranchi locations
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a 
                href="tel:+919372662471" 
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white p-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex flex-col items-center gap-3"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>📞 Call Now</div>
                <div className="text-sm opacity-90">Instant Response</div>
              </a>

              <a 
                href="https://wa.me/919372662471?text=Hi%2C%20I%20would%20like%20to%20book%20escort%20services%20in%20Ranchi" 
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white p-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex flex-col items-center gap-3"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>💬 WhatsApp</div>
                <div className="text-sm opacity-90">Chat Booking</div>
              </a>

              <a 
                href="mailto:sanjanadotsingh@gmail.com?subject=Escort%20Service%20Contact%20-%20Ranchi&body=Hi%2C%20I%20would%20like%20to%20contact%20for%20escort%20services%20in%20Ranchi.%20Please%20provide%20details%20about%20availability%20and%20contact%20process." 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex flex-col items-center gap-3"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>📧 Email Us</div>
                <div className="text-sm opacity-90">Detailed Inquiry</div>
              </a>
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-pink-600">24/7</div>
                  <div className="text-sm text-pink-700">Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600">5 Min</div>
                  <div className="text-sm text-pink-700">Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600">100%</div>
                  <div className="text-sm text-pink-700">Verified</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600">100%</div>
                  <div className="text-sm text-pink-700">Private</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600">All</div>
                  <div className="text-sm text-pink-700">Areas</div>
                </div>
              </div>
            </div>

            <p className="text-sm text-pink-600 mt-6">
              Available across all Ranchi locations • Verified Profiles • Complete Privacy • Professional Service • Instant Booking Confirmation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}