'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    serviceType: '',
    duration: '',
    message: '',
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const serviceTypes = [
    'VIP Escorts',
    'Celebrity Escorts',
    'Elite Models',
    'Russian Escorts',
    'College Girls',
    'Independent Services',
    'Travel Companion',
    'Event Companion',
    'Outcall Services',
    'Premium Services'
  ];

  const ranchiLocations = [
    'Main Road Central',
    'Kanke Road Area',
    'HEC Colony',
    'Lalpur Township',
    'Hinoo Market Area',
    'Bariatu Colony',
    'Doranda Market',
    'Ratu Road Junction',
    'Circular Road',
    'Argora Industrial'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, just redirect to WhatsApp with form data
      const message = `Hi! I would like to book escort services in Ranchi.
      
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Service Type: ${formData.serviceType}
Duration: ${formData.duration}
Additional Message: ${formData.message}

Please confirm availability and provide booking details.`;

      const whatsappUrl = `https://wa.me/919372662471?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        serviceType: '',
        duration: '',
        message: '',
        privacy: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-6">
            Book Escorts in Ranchi - Quick Contact Form
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fill out this form to book premium escort services in Ranchi. We guarantee instant response and complete privacy.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-2xl p-8 md:p-12">
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center">
                <div className="bg-green-500 text-white p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-800">Booking Request Sent Successfully!</h3>
                  <p className="text-green-700">We will contact you within 5 minutes for confirmation.</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-center">
                <div className="bg-red-500 text-white p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-red-800">Submission Error</h3>
                  <p className="text-red-700">Please try calling +91-9372662471 directly for immediate assistance.</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-colors"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2">
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-bold text-gray-800 mb-2">
                  Preferred Location in Ranchi *
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-colors"
                >
                  <option value="">Select Location</option>
                  {ranchiLocations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                  <option value="Other">Other Location in Ranchi</option>
                </select>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-bold text-gray-800 mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-colors"
                >
                  <option value="">Select Service Type</option>
                  {serviceTypes.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-bold text-gray-800 mb-2">
                Duration *
              </label>
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-colors"
              >
                <option value="">Select Duration</option>
                <option value="2 Hours">2 Hours</option>
                <option value="4 Hours">4 Hours</option>
                <option value="6 Hours">6 Hours</option>
                <option value="Overnight (12 Hours)">Overnight (12 Hours)</option>
                <option value="Full Day (24 Hours)">Full Day (24 Hours)</option>
                <option value="Weekend Package">Weekend Package</option>
                <option value="Custom Duration">Custom Duration</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-2">
                Additional Requirements (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-colors resize-none"
                placeholder="Please specify any special requirements, preferred time, or additional information..."
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleInputChange}
                required
                className="mt-1 mr-3 w-5 h-5 text-pink-600 border-2 border-pink-300 rounded focus:ring-pink-500"
              />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                I agree that I am 18+ years old and understand that this is for legitimate escort services. I consent to be contacted for booking confirmation and service details. Complete privacy and discretion guaranteed. *
              </label>
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting || !formData.privacy}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Booking Request
                  </div>
                )}
              </button>
            </div>

            <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 text-center">
              <h3 className="font-bold text-pink-800 mb-3">What Happens Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-pink-600 font-bold text-2xl mb-2">1</div>
                  <div className="text-gray-700">
                    <strong>Instant Confirmation:</strong> We respond within 5 minutes via call/WhatsApp
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-pink-600 font-bold text-2xl mb-2">2</div>
                  <div className="text-gray-700">
                    <strong>Profile Selection:</strong> Choose from verified available companions
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-pink-600 font-bold text-2xl mb-2">3</div>
                  <div className="text-gray-700">
                    <strong>Service Delivery:</strong> Professional companion arrives at your location
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}