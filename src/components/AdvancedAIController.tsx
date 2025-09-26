'use client'
import React, { useState, useEffect } from 'react'
import { AI_PERSONALITIES } from '@/lib/advanced-llm'

interface AdvancedAIControllerProps {
  onClose?: () => void
}

const AdvancedAIController: React.FC<AdvancedAIControllerProps> = ({ onClose }) => {
  const [activeService, setActiveService] = useState<string>('chat')
  const [selectedPersonality, setSelectedPersonality] = useState<string>('SOPHIA')
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<any>({})

  const services = [
    { id: 'chat', name: '🤖 Advanced AI Chat', description: 'Personalized conversation with AI personalities' },
    { id: 'content', name: '✍️ Content Strategy', description: 'AI-powered content and marketing strategy' },
    { id: 'intent', name: '🧠 Intent Analysis', description: 'Analyze customer intent and behavior' },
    { id: 'flow', name: '💬 Conversation Flow', description: 'Smart conversation management' },
    { id: 'seo', name: '🔍 SEO Optimization', description: 'AI-driven SEO content optimization' }
  ]

  const handleServiceCall = async (service: string, data: any) => {
    setLoading(true)
    try {
      const response = await fetch('/api/ai/advanced', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: service, ...data })
      })
      
      const result = await response.json()
      setResults(result)
    } catch (error) {
      console.error('Advanced AI Service Error:', error)
      setResults({ error: 'Service temporarily unavailable' })
    } finally {
      setLoading(false)
    }
  }

  const renderServiceInterface = () => {
    switch (activeService) {
      case 'chat':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-pink-300">Select AI Personality</label>
              <select
                value={selectedPersonality}
                onChange={(e) => setSelectedPersonality(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-pink-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {Object.entries(AI_PERSONALITIES).map(([key, personality]) => (
                  <option key={key} value={key}>
                    {personality.name} - {personality.personality}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-pink-300">Your Message</label>
              <textarea
                value={formData.message || ''}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Ask anything about our services..."
                className="w-full p-3 bg-gray-800 border border-pink-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 h-24"
              />
            </div>
            
            <button
              onClick={() => handleServiceCall('personalizedChat', {
                messages: [{ role: 'user', content: formData.message }],
                personalityId: selectedPersonality,
                context: {
                  sessionId: `session-${Date.now()}`,
                  previousMessages: [],
                  location: 'Ranchi',
                  serviceInterest: 'premium services'
                }
              })}
              disabled={loading || !formData.message}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? '🤖 AI Thinking...' : '💬 Chat with AI'}
            </button>
          </div>
        )

      case 'content':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-pink-300">Content Topic</label>
              <input
                type="text"
                value={formData.topic || ''}
                onChange={(e) => setFormData({...formData, topic: e.target.value})}
                placeholder="e.g., VIP Escort Services in Ranchi"
                className="w-full p-3 bg-gray-800 border border-pink-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-pink-300">Target Audience</label>
              <input
                type="text"
                value={formData.audience || ''}
                onChange={(e) => setFormData({...formData, audience: e.target.value})}
                placeholder="e.g., High-end business clients"
                className="w-full p-3 bg-gray-800 border border-pink-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-pink-300">Content Type</label>
              <select
                value={formData.contentType || 'blog'}
                onChange={(e) => setFormData({...formData, contentType: e.target.value})}
                className="w-full p-3 bg-gray-800 border border-pink-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="blog">Blog Post</option>
                <option value="social">Social Media</option>
                <option value="email">Email Campaign</option>
                <option value="seo">SEO Content</option>
                <option value="advertising">Advertisement</option>
              </select>
            </div>
            
            <button
              onClick={() => handleServiceCall('contentStrategy', {
                topic: formData.topic,
                targetAudience: formData.audience,
                contentType: formData.contentType
              })}
              disabled={loading || !formData.topic || !formData.audience}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? '⚡ Generating Strategy...' : '✍️ Generate Content Strategy'}
            </button>
          </div>
        )

      case 'intent':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-pink-300">Customer Message</label>
              <textarea
                value={formData.customerMessage || ''}
                onChange={(e) => setFormData({...formData, customerMessage: e.target.value})}
                placeholder="Enter customer message to analyze..."
                className="w-full p-3 bg-gray-800 border border-pink-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 h-24"
              />
            </div>
            
            <button
              onClick={() => handleServiceCall('intentAnalysis', {
                message: formData.customerMessage,
                context: {
                  sessionId: `analysis-${Date.now()}`,
                  previousMessages: [],
                  location: 'Ranchi',
                  serviceInterest: 'general inquiry'
                }
              })}
              disabled={loading || !formData.customerMessage}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? '🧠 Analyzing Intent...' : '🎯 Analyze Customer Intent'}
            </button>
          </div>
        )

      case 'seo':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-pink-300">Content to Optimize</label>
              <textarea
                value={formData.content || ''}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                placeholder="Enter your content to optimize for SEO..."
                className="w-full p-3 bg-gray-800 border border-pink-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 h-24"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-pink-300">Target Keywords</label>
              <input
                type="text"
                value={formData.keywords || ''}
                onChange={(e) => setFormData({...formData, keywords: e.target.value})}
                placeholder="escort services, ranchi, premium companions"
                className="w-full p-3 bg-gray-800 border border-pink-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            
            <button
              onClick={() => handleServiceCall('seoOptimize', {
                content: formData.content,
                targetKeywords: formData.keywords?.split(',').map((k: string) => k.trim()) || [],
                contentType: 'page'
              })}
              disabled={loading || !formData.content || !formData.keywords}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? '🔍 Optimizing SEO...' : '⚡ Optimize for SEO'}
            </button>
          </div>
        )

      default:
        return <div>Select a service to get started</div>
    }
  }

  const renderResults = () => {
    if (!results) return null
    
    if (results.error) {
      return (
        <div className="bg-red-900/20 border border-red-500 p-4 rounded-lg">
          <p className="text-red-400">❌ Error: {results.error}</p>
        </div>
      )
    }

    return (
      <div className="bg-gray-800/50 border border-pink-300 p-4 rounded-lg max-h-96 overflow-y-auto">
        <h3 className="text-pink-300 font-semibold mb-3">🎯 AI Results</h3>
        <pre className="text-white text-sm whitespace-pre-wrap">
          {JSON.stringify(results.data, null, 2)}
        </pre>
        {results.personality && (
          <p className="text-pink-300 text-sm mt-2">🤖 Responded by: {results.personality}</p>
        )}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-pink-500 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            🚀 Advanced LLM Controller
          </h2>
          {onClose && (
            <button
              onClick={onClose}
              className="text-pink-300 hover:text-pink-100 text-2xl"
            >
              ✕
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Service Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-pink-300 mb-4">🎛️ AI Services</h3>
            <div className="space-y-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-pink-600/20 border-pink-500 text-pink-100'
                      : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-pink-400'
                  }`}
                >
                  <div className="font-medium">{service.name}</div>
                  <div className="text-xs opacity-75">{service.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Interface */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-pink-300 mb-4">
              ⚡ {services.find(s => s.id === activeService)?.name}
            </h3>
            <div className="space-y-6">
              {renderServiceInterface()}
              {renderResults()}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            🤖 Advanced AI powered by OpenAI GPT-4 & GPT-3.5-turbo | Real-time processing
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdvancedAIController