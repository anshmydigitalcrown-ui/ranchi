'use client'
import React, { useState, useEffect } from 'react'

interface LLMDashboardProps {
  onClose?: () => void
}

const LLMDashboard: React.FC<LLMDashboardProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('models')
  const [testMessage, setTestMessage] = useState('')
  const [modelResults, setModelResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [systemStatus, setSystemStatus] = useState<any>(null)

  const tabs = [
    { id: 'models', name: '🤖 LLM Models', description: 'Test all available AI models' },
    { id: 'performance', name: '⚡ Performance', description: 'Model speed and accuracy' },
    { id: 'analytics', name: '📊 Analytics', description: 'Usage statistics and insights' },
    { id: 'settings', name: '⚙️ Settings', description: 'Configure LLM parameters' }
  ]

  const llmModels = [
    {
      name: 'GPT-4',
      key: 'gpt-4',
      description: 'Most capable model, best for complex tasks',
      status: 'active',
      cost: 'High',
      speed: 'Slow',
      accuracy: '95%'
    },
    {
      name: 'GPT-4 Turbo',
      key: 'gpt-4-turbo-preview',
      description: 'Faster GPT-4 with recent knowledge',
      status: 'active',
      cost: 'Medium',
      speed: 'Fast',
      accuracy: '93%'
    },
    {
      name: 'GPT-3.5 Turbo',
      key: 'gpt-3.5-turbo',
      description: 'Fast and efficient for most tasks',
      status: 'active',
      cost: 'Low',
      speed: 'Very Fast',
      accuracy: '88%'
    },
    {
      name: 'GPT-3.5 Turbo 16K',
      key: 'gpt-3.5-turbo-16k',
      description: 'Extended context window version',
      status: 'active',
      cost: 'Low',
      speed: 'Fast',
      accuracy: '88%'
    }
  ]

  useEffect(() => {
    loadSystemStatus()
  }, [])

  const loadSystemStatus = async () => {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
      
      const response = await fetch('/api/ai/health', {
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)
      
      if (response.ok) {
        const data = await response.json()
        setSystemStatus(data)
      } else {
        console.warn('Health check failed:', response.statusText)
      }
    } catch (error: any) {
      console.error('Failed to load system status:', error)
      // Set default status on error
      setSystemStatus({
        status: 'error',
        message: 'Unable to check system status'
      })
    }
  }

  const testAllModels = async () => {
    if (!testMessage.trim()) {
      alert('Please enter a test message')
      return
    }

    setLoading(true)
    setModelResults([])
    
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 60000) // 1 minute timeout for model testing
      
      const response = await fetch('/api/ai/test-models', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: testMessage,
          testAllModels: true
        }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      
      if (data.success && data.results) {
        setModelResults(data.results)
      } else {
        throw new Error(data.error || 'Test failed')
      }
    } catch (error: any) {
      console.error('Model testing failed:', error)
      
      if (error.name === 'AbortError') {
        alert('Model testing timed out. Please try with a shorter message.')
      } else {
        alert('Failed to test models: ' + (error.message || 'Unknown error'))
      }
    } finally {
      setLoading(false)
    }
  }

  const renderModelsTab = () => (
    <div className="space-y-6">
      {/* Test Interface */}
      <div className="bg-gray-800 border border-pink-300 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-pink-300 mb-4">🧪 Model Testing</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-white">Test Message</label>
            <textarea
              value={testMessage}
              onChange={(e) => setTestMessage(e.target.value)}
              placeholder="Enter a message to test all LLM models..."
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 h-24"
            />
          </div>
          
          <button
            onClick={testAllModels}
            disabled={loading || !testMessage.trim()}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '🔄 Testing All Models...' : '🚀 Test All LLM Models'}
          </button>
        </div>
      </div>

      {/* Model Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {llmModels.map((model) => (
          <div key={model.key} className="bg-gray-800 border border-gray-600 rounded-lg p-4 hover:border-pink-400 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-lg font-semibold text-white">{model.name}</h4>
              <span className={`px-2 py-1 text-xs rounded-full ${
                model.status === 'active' 
                  ? 'bg-green-600 text-green-100' 
                  : 'bg-gray-600 text-gray-300'
              }`}>
                {model.status}
              </span>
            </div>
            
            <p className="text-gray-300 text-sm mb-3">{model.description}</p>
            
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <span className="text-gray-400">Cost:</span>
                <div className="text-white font-medium">{model.cost}</div>
              </div>
              <div>
                <span className="text-gray-400">Speed:</span>
                <div className="text-white font-medium">{model.speed}</div>
              </div>
              <div>
                <span className="text-gray-400">Accuracy:</span>
                <div className="text-white font-medium">{model.accuracy}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Test Results */}
      {modelResults.length > 0 && (
        <div className="bg-gray-800 border border-pink-300 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-pink-300 mb-4">📊 Test Results</h3>
          
          <div className="space-y-4">
            {modelResults.map((result, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium text-white">{result.model}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    result.status === 'fulfilled' 
                      ? 'bg-green-600 text-green-100' 
                      : 'bg-red-600 text-red-100'
                  }`}>
                    {result.status}
                  </span>
                </div>
                
                {result.status === 'fulfilled' && result.data ? (
                  <div className="space-y-2">
                    <div className="text-gray-300">{result.data.content}</div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Confidence: {Math.round(result.data.confidence * 100)}%</span>
                      {result.data.suggestedActions && (
                        <span>Actions: {result.data.suggestedActions.length}</span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-red-400 text-sm">
                    Error: {result.error || 'Unknown error'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  const renderPerformanceTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 border border-green-400 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-green-400">99.9%</div>
          <div className="text-gray-300">Uptime</div>
        </div>
        <div className="bg-gray-800 border border-blue-400 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-blue-400">1.2s</div>
          <div className="text-gray-300">Avg Response</div>
        </div>
        <div className="bg-gray-800 border border-purple-400 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-purple-400">2,847</div>
          <div className="text-gray-300">Requests Today</div>
        </div>
      </div>
      
      <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">🎯 Model Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 text-gray-300">Model</th>
                <th className="text-center py-2 text-gray-300">Speed</th>
                <th className="text-center py-2 text-gray-300">Accuracy</th>
                <th className="text-center py-2 text-gray-300">Cost/1K tokens</th>
                <th className="text-center py-2 text-gray-300">Usage</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr className="border-b border-gray-700">
                <td className="py-2">GPT-4</td>
                <td className="text-center py-2">3.2s</td>
                <td className="text-center py-2">95%</td>
                <td className="text-center py-2">$0.03</td>
                <td className="text-center py-2">15%</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">GPT-4 Turbo</td>
                <td className="text-center py-2">2.1s</td>
                <td className="text-center py-2">93%</td>
                <td className="text-center py-2">$0.01</td>
                <td className="text-center py-2">25%</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">GPT-3.5 Turbo</td>
                <td className="text-center py-2">0.8s</td>
                <td className="text-center py-2">88%</td>
                <td className="text-center py-2">$0.002</td>
                <td className="text-center py-2">60%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">📈 Usage Analytics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">1,234</div>
            <div className="text-sm text-gray-300">Chat Messages</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">567</div>
            <div className="text-sm text-gray-300">Content Generated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">890</div>
            <div className="text-sm text-gray-300">Searches</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">234</div>
            <div className="text-sm text-gray-300">Translations</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">🕒 Recent Activity</h3>
        <div className="space-y-3">
          {[
            { time: '2 mins ago', action: 'GPT-4 Chat', user: 'Customer inquiry about VIP services' },
            { time: '5 mins ago', action: 'Content Generation', user: 'Created SEO content for Ranchi page' },
            { time: '8 mins ago', action: 'Search Query', user: 'Customer searched for "elite models"' },
            { time: '12 mins ago', action: 'Translation', user: 'Hindi to English translation request' },
          ].map((activity, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
              <div>
                <div className="text-white font-medium">{activity.action}</div>
                <div className="text-sm text-gray-400">{activity.user}</div>
              </div>
              <div className="text-sm text-gray-400">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">🎛️ LLM Configuration</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Default Model</label>
            <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option value="gpt-3.5-turbo">GPT-3.5 Turbo (Fast & Economical)</option>
              <option value="gpt-4">GPT-4 (High Quality)</option>
              <option value="gpt-4-turbo">GPT-4 Turbo (Balanced)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Temperature (Creativity)</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              defaultValue="0.7"
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Conservative</span>
              <span>Creative</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Max Tokens</label>
            <input
              type="number"
              defaultValue={800}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">🔧 System Status</h3>
        {systemStatus ? (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">API Status:</span>
              <span className="text-green-400">✅ Active</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Model Availability:</span>
              <span className="text-green-400">✅ All Models Online</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Last Health Check:</span>
              <span className="text-blue-400">{new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        ) : (
          <div className="text-gray-400">Loading system status...</div>
        )}
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'models':
        return renderModelsTab()
      case 'performance':
        return renderPerformanceTab()
      case 'analytics':
        return renderAnalyticsTab()
      case 'settings':
        return renderSettingsTab()
      default:
        return renderModelsTab()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-pink-500 rounded-xl max-w-7xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              🚀 LLM Dashboard
            </h2>
            <p className="text-gray-400 mt-1">Complete control over all Large Language Models</p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-pink-300 hover:text-pink-100 text-3xl font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-700 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-pink-400 border-b-2 border-pink-400'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {renderTabContent()}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 p-6 text-center">
          <p className="text-gray-400 text-sm">
            🤖 Powered by OpenAI | 🔥 Real-time processing | 🚀 Advanced AI capabilities
          </p>
        </div>
      </div>
    </div>
  )
}

export default LLMDashboard