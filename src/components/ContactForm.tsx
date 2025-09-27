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
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-all duration-200 text-gray-900 font-medium placeholder-gray-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-all duration-200 text-gray-900 font-medium placeholder-gray-500"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-3">
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-all duration-200 text-gray-900 font-medium placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-bold text-gray-900 mb-3">
                  Preferred Location in Ranchi *
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-all duration-200 text-gray-900 font-medium appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23666' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '12px' }}
                >
                  <option value="" className="text-gray-500">Select Location</option>
                  {ranchiLocations.map((location, index) => (
                    <option key={index} value={location} className="text-gray-900 font-medium">{location}</option>
                  ))}
                  <option value="Other" className="text-gray-900 font-medium">Other Location in Ranchi</option>
                </select>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-bold text-gray-900 mb-3">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-all duration-200 text-gray-900 font-medium appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23666' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '12px' }}
                >
                  <option value="" className="text-gray-500">Select Service Type</option>
                  {serviceTypes.map((service, index) => (
                    <option key={index} value={service} className="text-gray-900 font-medium">{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-bold text-gray-900 mb-3">
                Duration *
              </label>
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-all duration-200 text-gray-900 font-medium appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23666' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '12px' }}
              >
                <option value="" className="text-gray-500">Select Duration</option>
                <option value="2 Hours" className="text-gray-900 font-medium">2 Hours</option>
                <option value="4 Hours" className="text-gray-900 font-medium">4 Hours</option>
                <option value="6 Hours" className="text-gray-900 font-medium">6 Hours</option>
                <option value="Overnight (12 Hours)" className="text-gray-900 font-medium">Overnight (12 Hours)</option>
                <option value="Full Day (24 Hours)" className="text-gray-900 font-medium">Full Day (24 Hours)</option>
                <option value="Weekend Package" className="text-gray-900 font-medium">Weekend Package</option>
                <option value="Custom Duration" className="text-gray-900 font-medium">Custom Duration</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-3">
                Additional Requirements (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white shadow-sm transition-all duration-200 resize-none text-gray-900 font-medium placeholder-gray-500"
                placeholder="Please specify any special requirements, preferred time, or additional information..."
              />
            </div>

            <div className="flex items-start space-x-3 bg-white p-4 rounded-xl border-2 border-gray-200">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleInputChange}
                required
                className="mt-1 w-5 h-5 text-pink-600 bg-white border-2 border-gray-400 rounded focus:ring-pink-500 focus:ring-2"
              />
              <label htmlFor="privacy" className="text-sm text-gray-800 font-medium leading-relaxed cursor-pointer">
                I agree that I am 18+ years old and understand that this is for legitimate escort services. I consent to be contacted for booking confirmation and service details. Complete privacy and discretion guaranteed. *
              </label>
            </div>

            <div className="text-center pt-8">
              <button
                type="submit"
                disabled={isSubmitting || !formData.privacy}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:transform-none border-0"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-3 border-white border-t-transparent"></div>
                    <span className="font-bold">Submitting...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span className="font-bold">Send Booking Request</span>
                  </div>
                )}
              </button>
              
              <p className="text-gray-600 font-medium mt-4 text-sm">
                🔒 Your information is secure and will only be used for booking purposes
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200 rounded-xl p-8 text-center mt-8">
              <h3 className="font-bold text-pink-800 mb-6 text-lg">🎯 What Happens Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
                  <div className="text-pink-600 font-black text-3xl mb-3">1</div>
                  <div className="text-gray-800">
                    <strong className="text-gray-900 font-bold">Instant Confirmation:</strong><br/>
                    <span className="font-medium">We respond within 5 minutes via call/WhatsApp</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
                  <div className="text-pink-600 font-black text-3xl mb-3">2</div>
                  <div className="text-gray-800">
                    <strong className="text-gray-900 font-bold">Profile Selection:</strong><br/>
                    <span className="font-medium">Choose from verified available companions</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
                  <div className="text-pink-600 font-black text-3xl mb-3">3</div>
                  <div className="text-gray-800">
                    <strong className="text-gray-900 font-bold">Service Delivery:</strong><br/>
                    <span className="font-medium">Professional companion arrives at your location</span>
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

