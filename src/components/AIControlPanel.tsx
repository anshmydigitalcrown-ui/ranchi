'use client'

/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from 'react'

interface AIControlPanelProps {
  isOpen: boolean
  onClose: () => void
}

interface AIHealthStatus {
  success: boolean
  status: string
  timestamp: string
  services: {
    chatbot: boolean
    contentGeneration: boolean
    search: boolean
    translation: boolean
    analytics: boolean
  }
}

export default function AIControlPanel({ isOpen, onClose }: AIControlPanelProps) {
  const [healthStatus, setHealthStatus] = useState<AIHealthStatus | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'translate' | 'analytics'>('overview')
  
  // Content Generation
  const [contentType, setContentType] = useState<'service' | 'location'>('service')
  const [contentName, setContentName] = useState('')
  const [contentContext, setContentContext] = useState('')
  const [generatedContent, setGeneratedContent] = useState('')
  const [contentLoading, setContentLoading] = useState(false)
  
  // Translation
  const [translateText, setTranslateText] = useState('')
  const [sourceLanguage, setSourceLanguage] = useState('english')
  const [targetLanguage, setTargetLanguage] = useState('hindi')
  const [translatedText, setTranslatedText] = useState('')
  const [translateLoading, setTranslateLoading] = useState(false)
  
  // Analytics
  const [analyticsData, setAnalyticsData] = useState('')
  const [analyticsInsights, setAnalyticsInsights] = useState('')
  const [analyticsLoading, setAnalyticsLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      checkAIHealth()
    }
  }, [isOpen])

  const checkAIHealth = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/ai/health')
      const data = await response.json()
      setHealthStatus(data)
    } catch (error) {
      console.error('Health check failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const generateContent = async () => {
    if (!contentName.trim()) return
    
    setContentLoading(true)
    try {
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: contentType,
          name: contentName,
          context: contentContext
        })
      })
      
      const data = await response.json()
      if (data.success) {
        setGeneratedContent(data.content)
      }
    } catch (error) {
      console.error('Content generation failed:', error)
    } finally {
      setContentLoading(false)
    }
  }

  const translateContent = async () => {
    if (!translateText.trim()) return
    
    setTranslateLoading(true)
    try {
      const response = await fetch('/api/ai/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: translateText,
          sourceLanguage,
          targetLanguage
        })
      })
      
      const data = await response.json()
      if (data.success) {
        setTranslatedText(data.translation)
      }
    } catch (error) {
      console.error('Translation failed:', error)
    } finally {
      setTranslateLoading(false)
    }
  }

  const analyzeData = async () => {
    if (!analyticsData.trim()) return
    
    setAnalyticsLoading(true)
    try {
      const data = JSON.parse(analyticsData)
      const response = await fetch('/api/ai/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      const result = await response.json()
      if (result.success) {
        setAnalyticsInsights(result.insights)
      }
    } catch (error) {
      console.error('Analytics failed:', error)
    } finally {
      setAnalyticsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                ⚙️
              </div>
              <div>
                <h3 className="font-bold text-xl">AI Control Panel</h3>
                <p className="text-purple-100 text-sm">Manage all AI services and features</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'content', label: 'Content Gen', icon: '✍️' },
              { id: 'translate', label: 'Translation', icon: '🌍' },
              { id: 'analytics', label: 'Analytics', icon: '📈' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-semibold text-gray-800">AI Services Status</h4>
                <button
                  onClick={checkAIHealth}
                  disabled={isLoading}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )}
                  <span>Refresh</span>
                </button>
              </div>

              {healthStatus && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className={`p-6 rounded-xl border-2 ${
                    healthStatus.success
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="font-semibold text-gray-800">System Health</h5>
                      <span className={`w-3 h-3 rounded-full ${
                        healthStatus.success ? 'bg-green-400' : 'bg-red-400'
                      }`}></span>
                    </div>
                    <p className={`text-sm font-medium ${
                      healthStatus.success ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {healthStatus.status.toUpperCase()}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Last checked: {new Date(healthStatus.timestamp).toLocaleString()}
                    </p>
                  </div>

                  {Object.entries(healthStatus.services).map(([service, enabled]) => (
                    <div key={service} className={`p-6 rounded-xl border-2 ${
                      enabled
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-gray-800 capitalize">
                          {service.replace(/([A-Z])/g, ' $1').trim()}
                        </h5>
                        <span className={`w-3 h-3 rounded-full ${
                          enabled ? 'bg-blue-400' : 'bg-gray-400'
                        }`}></span>
                      </div>
                      <p className={`text-sm font-medium ${
                        enabled ? 'text-blue-700' : 'text-gray-500'
                      }`}>
                        {enabled ? 'ENABLED' : 'DISABLED'}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Content Generation Tab */}
          {activeTab === 'content' && (
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">AI Content Generation</h4>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                    <select
                      value={contentType}
                      onChange={(e) => setContentType(e.target.value as 'service' | 'location')}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="service">Service</option>
                      <option value="location">Location</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={contentName}
                      onChange={(e) => setContentName(e.target.value)}
                      placeholder="e.g., VIP Escorts or Central Ranchi"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Context (Optional)</label>
                  <textarea
                    value={contentContext}
                    onChange={(e) => setContentContext(e.target.value)}
                    placeholder="Any specific details or requirements..."
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                
                <button
                  onClick={generateContent}
                  disabled={!contentName.trim() || contentLoading}
                  className="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
                >
                  {contentLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <span>✍️</span>
                  )}
                  <span>{contentLoading ? 'Generating...' : 'Generate Content'}</span>
                </button>
                
                {generatedContent && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Generated Content</label>
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <pre className="whitespace-pre-wrap text-sm text-gray-800">{generatedContent}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Translation Tab */}
          {activeTab === 'translate' && (
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">AI Translation Service</h4>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Source Language</label>
                    <select
                      value={sourceLanguage}
                      onChange={(e) => setSourceLanguage(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="bengali">Bengali</option>
                      <option value="nepali">Nepali</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Language</label>
                    <select
                      value={targetLanguage}
                      onChange={(e) => setTargetLanguage(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="hindi">Hindi</option>
                      <option value="english">English</option>
                      <option value="bengali">Bengali</option>
                      <option value="nepali">Nepali</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Text to Translate</label>
                  <textarea
                    value={translateText}
                    onChange={(e) => setTranslateText(e.target.value)}
                    placeholder="Enter text to translate..."
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                
                <button
                  onClick={translateContent}
                  disabled={!translateText.trim() || translateLoading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
                >
                  {translateLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <span>🌍</span>
                  )}
                  <span>{translateLoading ? 'Translating...' : 'Translate'}</span>
                </button>
                
                {translatedText && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Translation</label>
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <p className="text-gray-800">{translatedText}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">AI Analytics & Insights</h4>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Analytics Data (JSON Format)</label>
                  <textarea
                    value={analyticsData}
                    onChange={(e) => setAnalyticsData(e.target.value)}
                    placeholder='{"pageViews": 1000, "uniqueVisitors": 750, "bounceRate": 0.3, "topPages": ["/services", "/contact"]}'
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent font-mono text-sm"
                  />
                </div>
                
                <button
                  onClick={analyzeData}
                  disabled={!analyticsData.trim() || analyticsLoading}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
                >
                  {analyticsLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <span>📈</span>
                  )}
                  <span>{analyticsLoading ? 'Analyzing...' : 'Analyze Data'}</span>
                </button>
                
                {analyticsInsights && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">AI Insights</label>
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <pre className="whitespace-pre-wrap text-sm text-gray-800">{analyticsInsights}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}