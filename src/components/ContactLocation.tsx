export default function ContactLocation() {
  const ranchiLocations = [
    {
      name: 'Central Ranchi',
      areas: ['Main Road', 'Circular Road', 'Commercial Complex'],
      description: 'Primary business district with premium hotels and corporate offices',
      coverage: 'Complete Central Area',
      responseTime: '15-20 minutes'
    },
    {
      name: 'HEC Colony',
      areas: ['HEC Township', 'Officer Colony', 'Residential Areas'],
      description: 'Premium residential zone with upscale housing complexes',
      coverage: 'Full HEC Area',
      responseTime: '20-25 minutes'
    },
    {
      name: 'Kanke Road Area',
      areas: ['Kanke Road', 'BIT Campus', 'Educational Zone'],
      description: 'Educational hub with institutes and student accommodations',
      coverage: 'Complete Kanke Region',
      responseTime: '25-30 minutes'
    },
    {
      name: 'Lalpur Township',
      areas: ['Lalpur', 'Housing Board', 'Residential Complex'],
      description: 'Modern residential township with planned infrastructure',
      coverage: 'Full Township Area',
      responseTime: '20-25 minutes'
    },
    {
      name: 'Hinoo Market',
      areas: ['Hinoo', 'Market Area', 'Shopping Complex'],
      description: 'Commercial and shopping district with retail outlets',
      coverage: 'Complete Market Zone',
      responseTime: '15-20 minutes'
    },
    {
      name: 'Bariatu Colony',
      areas: ['Bariatu', 'Housing Colony', 'Residential Zone'],
      description: 'Upscale residential area with modern amenities',
      coverage: 'Full Bariatu Region',
      responseTime: '25-30 minutes'
    },
    {
      name: 'Doranda Market',
      areas: ['Doranda', 'Commercial Area', 'Business Center'],
      description: 'Traditional commercial center with local businesses',
      coverage: 'Complete Doranda Area',
      responseTime: '20-25 minutes'
    },
    {
      name: 'Ratu Road Junction',
      areas: ['Ratu Road', 'Transport Hub', 'Junction Area'],
      description: 'Major transport junction connecting different city areas',
      coverage: 'Full Junction Region',
      responseTime: '15-20 minutes'
    },
    {
      name: 'Argora Industrial',
      areas: ['Argora', 'Industrial Area', 'Corporate Zone'],
      description: 'Industrial and corporate district with business establishments',
      coverage: 'Complete Industrial Zone',
      responseTime: '30-35 minutes'
    },
    {
      name: 'Harmu Housing',
      areas: ['Harmu', 'Housing Board', 'Colony Area'],
      description: 'Established housing board colony with residential facilities',
      coverage: 'Full Harmu Area',
      responseTime: '25-30 minutes'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200/20 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-rose-200/20 to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl mb-6 border border-pink-200/50">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-full shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="font-bold text-pink-800 text-lg">SERVICE LOCATIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Escorts in Ranchi - All Major Locations Covered
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Professional escort services available across all major Ranchi locations with verified companions and guaranteed response times
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ranchiLocations.map((location, index) => (
            <div 
              key={index} 
              className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-pink-100/50 relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
            >
              {/* Card Background Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-200/20 to-transparent rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-2xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-pink-700 mb-1">{location.name}</h3>
                    <p className="text-pink-600 font-medium">{location.coverage}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-pink-50/80 p-4 rounded-xl border border-pink-200/50">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <div className="bg-pink-500 text-white p-1 rounded mr-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m0 0H7m12 0v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1m12 0h-2m-4-2h6m0 0h2m-8-1V4" />
                        </svg>
                      </div>
                      Coverage Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {location.areas.map((area, areaIndex) => (
                        <span 
                          key={areaIndex} 
                          className="bg-white text-pink-600 px-3 py-1 rounded-full text-sm font-medium border border-pink-200 hover:bg-pink-100 transition-colors"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50/80 p-4 rounded-xl border border-green-200/50">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <div className="bg-green-500 text-white p-1 rounded mr-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Response Time
                    </h4>
                    <div className="text-green-700 font-semibold">{location.responseTime}</div>
                  </div>

                  <div className="bg-blue-50/80 p-4 rounded-xl border border-blue-200/50">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <div className="bg-blue-500 text-white p-1 rounded mr-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Description
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{location.description}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-pink-200">
                  <div className="flex justify-between items-center">
                    <div className="text-green-600 font-bold text-sm flex items-center">
                      <div className="bg-green-500 w-2 h-2 rounded-full mr-2 animate-pulse"></div>
                      Available Now
                    </div>
                    <a 
                      href={`tel:+919372662471`}
                      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-pink-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-2xl shadow-lg mr-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-700 mb-1">Instant Contact</h3>
                  <p className="text-pink-600">Call for immediate assistance</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-pink-50/80 p-4 rounded-xl border border-pink-200/50">
                  <div className="text-2xl font-bold text-pink-600 mb-2">+91-9372662471</div>
                  <div className="text-gray-600">Available 24/7 across all Ranchi locations</div>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href="tel:+919372662471" 
                    className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-3 rounded-xl font-bold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                  >
                    📞 Call Now
                  </a>
                  <a 
                    href="https://wa.me/919372662471?text=Hi%2C%20I%20need%20escort%20services%20in%20Ranchi" 
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-green-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-lg mr-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-1">Service Guarantee</h3>
                  <p className="text-green-600">Professional & Discrete</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50/80 p-3 rounded-xl border border-green-200/50 text-center">
                    <div className="text-lg font-bold text-green-600">100%</div>
                    <div className="text-xs text-gray-600">Verified</div>
                  </div>
                  <div className="bg-green-50/80 p-3 rounded-xl border border-green-200/50 text-center">
                    <div className="text-lg font-bold text-green-600">24/7</div>
                    <div className="text-xs text-gray-600">Available</div>
                  </div>
                  <div className="bg-green-50/80 p-3 rounded-xl border border-green-200/50 text-center">
                    <div className="text-lg font-bold text-green-600">100%</div>
                    <div className="text-xs text-gray-600">Private</div>
                  </div>
                  <div className="bg-green-50/80 p-3 rounded-xl border border-green-200/50 text-center">
                    <div className="text-lg font-bold text-green-600">5 Min</div>
                    <div className="text-xs text-gray-600">Response</div>
                  </div>
                </div>
                
                <div className="bg-green-50/80 p-4 rounded-xl border border-green-200/50">
                  <div className="text-green-700 font-medium text-center">
                    Professional escort services across all major Ranchi locations with complete privacy and satisfaction guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Popular Escort Service Areas in Ranchi</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {ranchiLocations.slice(0, 10).map((location, index) => (
              <a
                key={index}
                href="tel:+919372662471"
                className="bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-pink-200 hover:border-pink-400 text-center group"
              >
                <div className="text-pink-600 font-semibold text-sm group-hover:text-pink-700">
                  Escorts in {location.name.replace(/\s+(Area|Zone|Colony|Township|Junction)$/, '')}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}