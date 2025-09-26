import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AIHeroButtons from '@/components/AIHeroButtons'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI-Powered Features - Smart Technology Integration | Ranchi Premium Escorts',
  description: 'Experience cutting-edge AI technology with our intelligent chatbot, smart search, content generation, translation services, and advanced analytics for enhanced user experience.',
  keywords: [
    'AI chatbot escort services',
    'smart search escorts ranchi',
    'AI powered escort website',
    'intelligent customer service',
    'automated translation services',
    'AI analytics escort business',
    'machine learning escort platform',
    'artificial intelligence ranchi',
    'smart technology escorts',
    'automated customer support'
  ],
  authors: [{ name: 'Ranchi Premium Escorts AI Team' }],
  creator: 'Ranchi Elite Services',
  publisher: 'Ranchi Premium Escorts',
  metadataBase: new URL('https://ranchi-mu.vercel.app'),
  alternates: {
    canonical: '/ai-features',
  },
  openGraph: {
    title: 'AI-Powered Features - Smart Technology Integration',
    description: 'Experience cutting-edge AI technology with intelligent chatbot, smart search, and advanced analytics.',
    url: '/ai-features',
    siteName: 'Ranchi Premium Escorts',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AIFeaturesPage() {
  const aiFeatures = [
    {
      title: 'AI Chatbot Assistant',
      description: 'Get instant responses to your queries with our intelligent AI assistant. Available 24/7 for customer support, service information, and general inquiries.',
      icon: '💬',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Natural language processing',
        '24/7 availability',
        'Multi-language support',
        'Context-aware responses',
        'Privacy-focused conversations'
      ]
    },
    {
      title: 'Smart Search Engine',
      description: 'Find exactly what you\'re looking for with our AI-powered search that understands natural language queries and provides personalized results.',
      icon: '🔍',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Natural language queries',
        'Intelligent result ranking',
        'Category-based filtering',
        'Location-aware search',
        'Personalized recommendations'
      ]
    },
    {
      title: 'Content Generation',
      description: 'Automated content creation for services and locations using advanced AI models to ensure fresh, relevant, and SEO-optimized content.',
      icon: '✍️',
      color: 'from-green-500 to-emerald-500',
      features: [
        'SEO-optimized content',
        'Multiple content types',
        'Brand voice consistency',
        'Automated updates',
        'Quality assurance'
      ]
    },
    {
      title: 'Translation Services',
      description: 'Break language barriers with our AI translation service supporting multiple Indian and international languages for better accessibility.',
      icon: '🌍',
      color: 'from-orange-500 to-red-500',
      features: [
        'Multi-language support',
        'Context-aware translation',
        'Cultural sensitivity',
        'Real-time translation',
        'Quality preservation'
      ]
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain insights into user behavior and website performance with AI-driven analytics that provide actionable business intelligence.',
      icon: '📈',
      color: 'from-indigo-500 to-purple-500',
      features: [
        'User behavior analysis',
        'Performance insights',
        'Predictive analytics',
        'Custom reporting',
        'Business intelligence'
      ]
    },
    {
      title: 'AI Control Panel',
      description: 'Manage all AI services from a centralized dashboard with health monitoring, configuration options, and performance metrics.',
      icon: '⚙️',
      color: 'from-teal-500 to-blue-500',
      features: [
        'Service health monitoring',
        'Configuration management',
        'Performance metrics',
        'Real-time status',
        'Admin controls'
      ]
    }
  ]

  const benefits = [
    {
      title: 'Enhanced User Experience',
      description: 'AI-powered features provide personalized, efficient, and intuitive interactions.',
      icon: '🎯'
    },
    {
      title: 'Improved Accessibility',
      description: 'Multi-language support and smart search make our services accessible to diverse users.',
      icon: '🌐'
    },
    {
      title: 'Better Customer Support',
      description: '24/7 AI assistant ensures immediate response to customer inquiries and concerns.',
      icon: '🤝'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Advanced analytics provide insights for better business decisions and service improvements.',
      icon: '📊'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl backdrop-blur-sm">
                  🤖
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Premium Services
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
                Experience the future of escort services with cutting-edge artificial intelligence 
                technology designed for enhanced user experience and superior customer service.
              </p>

              <AIHeroButtons />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { label: 'AI Services', value: '6+' },
                  { label: 'Languages', value: '4+' },
                  { label: 'Response Time', value: '<1s' },
                  { label: 'Availability', value: '24/7' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-purple-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive AI suite enhances every aspect of your experience with intelligent, 
                responsive, and personalized services powered by cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                  
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose AI-Enhanced Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI integration brings measurable improvements to your experience, 
                making our services more accessible, efficient, and personalized than ever before.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Experience AI-Powered Services Today
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              Join thousands of satisfied customers who have experienced the future of escort services 
              with our advanced AI technology. Get started now and see the difference intelligence makes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Contact Us Now</span>
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
                <span>Browse Services</span>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🔒', title: 'Privacy First', desc: 'AI respects your privacy and confidentiality' },
                { icon: '⚡', title: 'Lightning Fast', desc: 'Instant responses and real-time processing' },
                { icon: '🎯', title: 'Accurate Results', desc: 'Precision-driven AI for perfect matches' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-pink-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}