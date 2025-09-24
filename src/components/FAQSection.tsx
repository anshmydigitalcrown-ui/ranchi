'use client';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I book a service?",
      answer: "Simply browse our gallery, choose your preferred option, and contact us via phone or WhatsApp to make a booking."
    },
    {
      question: "Are your services verified?",
      answer: "Yes, all our services are thoroughly verified and are genuine professionals in the industry."
    },
    {
      question: "Do you provide outcall services?",
      answer: "Yes, we provide both incall and outcall services. Our professionals can visit your hotel, home, or preferred location."
    },
    {
      question: "Is my privacy protected?",
      answer: "Absolutely. We maintain complete discretion and confidentiality for all our clients."
    },
    {
      question: "What are your rates?",
      answer: "Our rates vary depending on the service and duration. Contact us for detailed pricing information."
    },
    {
      question: "How quickly can someone reach me?",
      answer: "Typically, our professionals can reach your location within 45 minutes to 1 hour after booking confirmation."
    },
    {
      question: "What areas do you cover?",
      answer: "We cover all major areas in Ranchi including downtown, residential areas, and business districts."
    },
    {
      question: "Are your services available 24/7?",
      answer: "Yes, we provide 24/7 services for your convenience. You can contact us anytime."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-pink-600 max-w-3xl mx-auto">
            Find answers to the most common questions about our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-pink-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-semibold text-pink-800 pr-4">{faq.question}</h3>
                  <span className={`text-pink-600 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-pink-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-pink-700 mb-6">
            Still have questions? Don&apos;t hesitate to reach out to us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919372662471" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              📞 Call Us Now
            </a>
            <a 
              href="https://wa.me/919372662471" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}