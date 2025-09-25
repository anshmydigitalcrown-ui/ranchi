import Link from 'next/link';

export default function ContactLocation() {
  const ranchiLocations = [
    {
      name: 'Central Ranchi',
      areas: ['Main Road', 'Circular Road', 'Commercial Complex'],
      description: 'Primary business district with premium hotels and corporate offices',
      coverage: 'Complete Central Area',
      responseTime: '15-20 minutes',
      link: '/locations/central-ranchi'
    },
    {
      name: 'HEC Colony',
      areas: ['Heavy Engineering Corporation', 'MECON Area', 'Industrial Zone'],
      description: 'Industrial area with corporate housing and government establishments',
      coverage: 'HEC Zone & MECON',
      responseTime: '20-25 minutes',
      link: '/locations/hec-colony'
    },
    {
      name: 'Kanke Road',
      areas: ['Kanke', 'Psychiatric Hospital Area', 'BIT Campus'],
      description: 'Educational hub with multiple institutions and residential complexes',
      coverage: 'Kanke Road Area',
      responseTime: '25-30 minutes',
      link: '/locations/kanke-road'
    },
    {
      name: 'Lalpur',
      areas: ['Lalpur Township', 'Sahid Nagar', 'Green Valley'],
      description: 'Residential township with modern amenities and shopping centers',
      coverage: 'Lalpur Township',
      responseTime: '20-25 minutes',
      link: '/locations/lalpur'
    },
    {
      name: 'Hinoo',
      areas: ['Hinoo Market', 'Daily Market', 'Residential Area'],
      description: 'Commercial market area with dense residential population',
      coverage: 'Hinoo Market Zone',
      responseTime: '25-30 minutes',
      link: '/locations/hinoo'
    },
    {
      name: 'Bariatu',
      areas: ['Bariatu Housing Colony', 'Road No. 3', 'Shopping Complex'],
      description: 'Planned housing colony with modern infrastructure',
      coverage: 'Bariatu Housing',
      responseTime: '30-35 minutes',
      link: '/locations/bariatu'
    },
    {
      name: 'Doranda',
      areas: ['Doranda Market', 'Railway Colony', 'Government Quarters'],
      description: 'Railway hub with government offices and residential quarters',
      coverage: 'Doranda Station Area',
      responseTime: '25-30 minutes',
      link: '/locations/doranda'
    },
    {
      name: 'Ratu Road',
      areas: ['Ratu Road Junction', 'Power Grid Area', 'New Market'],
      description: 'Major junction connecting multiple city areas',
      coverage: 'Ratu Road Junction',
      responseTime: '30-35 minutes',
      link: '/locations/ratu-road'
    },
    {
      name: 'Argora Industrial Area',
      areas: ['Argora Industrial Estate', 'Factory Area', 'Workers Colony'],
      description: 'Industrial belt with manufacturing units and worker settlements',
      coverage: 'Argora Industrial Zone',
      responseTime: '35-40 minutes',
      link: '/locations/argora'
    },
    {
      name: 'Circular Road',
      areas: ['Central Market', 'Banking District', 'Medical College Road'],
      description: 'Commercial hub with banking and educational facilities',
      coverage: 'Circular Road Area',
      responseTime: '15-20 minutes',
      link: '/locations/circular-road'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-rose-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-rose-100 rounded-full px-6 py-3 mb-6 border border-pink-200">
            <div className="bg-pink-500 text-white p-2 rounded-full mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-pink-700 font-bold">Location Coverage</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Service Areas in Ranchi
          </h2>
          
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Professional escort services available across all major locations in Ranchi with guaranteed response times and verified companions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ranchiLocations.map((location, index) => (
            <Link
              key={index}
              href={location.link || `tel:+919372662471`}
              className="block bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-pink-100/50 relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
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
                    <h3 className="text-2xl font-bold text-pink-700 mb-1 group-hover:text-pink-800 transition-colors">{location.name}</h3>
                    <p className="text-pink-600 font-medium group-hover:text-pink-700 transition-colors">{location.coverage}</p>
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
                          className="bg-white text-pink-600 px-3 py-1 rounded-full text-sm font-medium border border-pink-200 group-hover:bg-pink-100 transition-colors"
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
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold group-hover:from-pink-600 group-hover:to-rose-600 transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:scale-105">
                      {location.link?.includes('/locations/') ? 'View Details' : 'Book Now'}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Contact Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-3xl shadow-2xl border border-pink-300">
            <h3 className="text-2xl font-bold mb-4">Quick Location Bookings</h3>
            <p className="text-pink-100 mb-6">Call now for instant availability across all Ranchi locations</p>
            
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
      </div>
    </section>
  );
}