'use client';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What escort services are available in Ranchi?",
      answer: "We provide premium escort services in Ranchi including VIP escorts, celebrity companions, elite models, travel companions, event escorts, outcall services, and independent professional companions. All services are available 24/7 across Ranchi including Main Road, Kanke Road, HEC Colony, Lalpur, Hinoo, Bariatu, Doranda, Ratu Road, Circular Road, and Argora areas."
    },
    {
      question: "How to book escort services in Ranchi safely?",
      answer: "To book escort services in Ranchi safely, contact us through our verified phone number or WhatsApp. Browse our verified gallery, select your preferred companion, discuss requirements, confirm booking details, and make secure payment. We ensure 100% verified profiles, complete privacy protection, and professional service standards."
    },
    {
      question: "Are Ranchi escort services available for outcall?",
      answer: "Yes, we provide outcall escort services throughout Ranchi. Our professional companions can visit your hotel, residence, or preferred location in any area of Ranchi. Outcall services include hotel visits, home services, party companionship, business event escorts, and travel companion services with complete discretion and privacy."
    },
    {
      question: "What are the rates for escort services in Ranchi?",
      answer: "Escort service rates in Ranchi vary based on service type, duration, and companion category. VIP escorts, celebrity services, elite models have premium pricing. Standard rates include hourly, overnight, and multi-day packages. Contact us for detailed pricing information, special packages, and customized service rates."
    },
    {
      question: "Which areas in Ranchi do you provide escort services?",
      answer: "We provide escort services across all major Ranchi locations including Main Road (Central Ranchi), Kanke Road area, HEC Colony, Lalpur Township, Hinoo Market area, Bariatu Housing Colony, Doranda Market, Ratu Road Junction, Circular Road (City Center), Argora Industrial area, and all surrounding residential and commercial areas."
    },
    {
      question: "Are escort profiles verified in Ranchi?",
      answer: "Yes, all escort profiles in our Ranchi directory are 100% verified. We conduct thorough verification including identity verification, photo authenticity checks, health screening, professional background checks, and regular profile updates. This ensures genuine, safe, and professional escort services for all clients in Ranchi."
    },
    {
      question: "How quickly can escorts reach my location in Ranchi?",
      answer: "Our escort services in Ranchi typically reach your location within 30-60 minutes after booking confirmation. Response time depends on your location within Ranchi, companion availability, and traffic conditions. We provide real-time updates and maintain punctuality for all bookings across Ranchi areas."
    },
    {
      question: "Is privacy guaranteed with Ranchi escort services?",
      answer: "Absolutely. We guarantee complete privacy and confidentiality for all Ranchi escort service bookings. We maintain strict data protection, discrete service delivery, confidential communication, secure payment processing, and professional conduct. Your privacy and discretion are our top priorities in all Ranchi escort services."
    },
    {
      question: "What types of companions are available in Ranchi?",
      answer: "Ranchi offers diverse companion types including college girls, working professionals, models, actresses, independent escorts, housewives, mature companions, foreign escorts, local beauties, and celebrity-like companions. All categories available for dinner dates, social events, business meetings, travel companionship, and private services."
    },
    {
      question: "How to contact escort services in Ranchi 24/7?",
      answer: "Contact Ranchi escort services 24/7 through multiple channels: Call our verified phone number, send WhatsApp messages, use our online booking form, or visit our office. We provide round-the-clock customer support, instant booking confirmation, emergency assistance, and multilingual support for all Ranchi escort service inquiries."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        {/* SEO Optimized Content Above FAQ */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">
                Ranchi Escort Services - Complete Information Guide
              </h2>
              <p className="text-xl text-pink-600 leading-relaxed">
                Professional escort services in Ranchi with verified profiles, 24/7 availability, and complete privacy protection
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">Why Choose Our Ranchi Escort Services?</h3>
                <ul className="space-y-3 text-pink-600">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span><strong>100% Verified Profiles:</strong> All escorts in Ranchi are thoroughly verified with authentic photos and genuine information.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span><strong>24/7 Availability:</strong> Round-the-clock escort services across all major Ranchi locations and surrounding areas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span><strong>Complete Privacy:</strong> Strict confidentiality and discretion guaranteed for all Ranchi escort service bookings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span><strong>Professional Service:</strong> Experienced, educated, and well-mannered companions for all types of occasions.</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-pink-700 mb-4">Service Areas in Ranchi</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-pink-600">
                  <div className="bg-pink-100 rounded-lg p-3">
                    <strong>Central Ranchi:</strong><br />
                    Main Road, Circular Road, Commercial areas
                  </div>
                  <div className="bg-pink-100 rounded-lg p-3">
                    <strong>Residential Areas:</strong><br />
                    HEC Colony, Bariatu, Lalpur Township
                  </div>
                  <div className="bg-pink-100 rounded-lg p-3">
                    <strong>Business Districts:</strong><br />
                    Kanke Road, Hinoo Market, Argora
                  </div>
                  <div className="bg-pink-100 rounded-lg p-3">
                    <strong>Popular Locations:</strong><br />
                    Doranda, Ratu Road, Hotel areas
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">Professional Escort Services in Ranchi</h3>
              <p className="text-pink-700 text-lg leading-relaxed">
                Experience premium companionship services in Ranchi with our carefully selected and verified escorts. 
                We offer VIP escorts, celebrity companions, elite models, independent professionals, travel companions, 
                and event escorts. Available for dinner dates, social gatherings, business events, hotel visits, 
                outcall services, and private companionship across all major Ranchi locations.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
            Frequently Asked Questions About Ranchi Escort Services
          </h2>
          <p className="text-lg text-pink-600 max-w-4xl mx-auto">
            Get detailed answers about escort services, booking process, safety measures, pricing, availability, and service areas in Ranchi
          </p>
        </div>

        {/* Horizontal FAQ Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
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

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-pink-800 mb-4">Ready to Book Premium Escort Services in Ranchi?</h3>
            <p className="text-pink-700 mb-8 text-lg">
              Contact us now for verified escorts, instant booking confirmation, and professional service delivery across Ranchi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919372662471" 
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📞 Call Now: +91-9372662471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                💬 WhatsApp Booking
              </a>
            </div>
            <p className="text-sm text-pink-600 mt-6">
              Available 24/7 • Verified Profiles • Complete Privacy • Professional Service • All Ranchi Areas Covered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}