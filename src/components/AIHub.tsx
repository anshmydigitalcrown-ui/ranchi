'use client'

/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import AIChatbot from './AIChatbot'
import AISearch from './AISearch'
import AIControlPanel from './AIControlPanel'
import AdvancedAIController from './AdvancedAIController'
import LLMDashboard from './LLMDashboard'

export default function AIHub() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isControlPanelOpen, setIsControlPanelOpen] = useState(false)
  const [isAdvancedAIOpen, setIsAdvancedAIOpen] = useState(false)
  const [isLLMDashboardOpen, setIsLLMDashboardOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const aiFeatures = [
    {
      id: 'chatbot',
      name: 'AI Assistant',
      description: '24/7 Customer Support',
      icon: '💬',
      color: 'from-blue-500 to-cyan-500',
      action: () => setIsChatbotOpen(true)
    },
    {
      id: 'search',
      name: 'Smart Search',
      description: 'AI-Powered Discovery',
      icon: '🔍',
      color: 'from-purple-500 to-pink-500',
      action: () => setIsSearchOpen(true)
    },
    {
      id: 'control',
      name: 'AI Control',
      description: 'Manage AI Services',
      icon: '⚙️',
      color: 'from-green-500 to-teal-500',
      action: () => setIsControlPanelOpen(true)
    },
    {
      id: 'advanced',
      name: 'Advanced LLM',
      description: 'GPT-4 & Advanced AI',
      icon: '🚀',
      color: 'from-pink-500 to-purple-500',
      action: () => setIsAdvancedAIOpen(true)
    },
    {
      id: 'dashboard',
      name: 'LLM Dashboard',
      description: 'Complete AI Control Center',
      icon: '📊',
      color: 'from-cyan-500 to-blue-500',
      action: () => setIsLLMDashboardOpen(true)
    }
  ]

  return (
    <>
      {/* AI Hub Floating Interface */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isMinimized ? 'transform scale-75' : ''
      }`}>
        {/* Main AI Hub Button */}
        <div className="relative">
          {/* Features Menu */}
          <div className={`absolute bottom-16 right-0 space-y-3 transition-all duration-300 ${
            isMinimized ? 'opacity-0 pointer-events-none transform translate-y-4' : 'opacity-100'
          }`}>
            {aiFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="flex items-center space-x-3 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Feature Label */}
                <div className="bg-white shadow-lg rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
                  <div className="text-sm font-semibold text-gray-800">{feature.name}</div>
                  <div className="text-xs text-gray-600">{feature.description}</div>
                </div>
                
                {/* Feature Button */}
                <button
                  onClick={feature.action}
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${feature.color} text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center text-xl relative overflow-hidden group`}
                >
                  <span className="relative z-10">{feature.icon}</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                </button>
              </div>
            ))}
          </div>

          {/* Main Hub Button */}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className={`w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-xl hover:shadow-2xl transform transition-all duration-300 flex items-center justify-center text-2xl relative overflow-hidden group ${
              isMinimized ? 'rotate-45' : 'hover:scale-105'
            }`}
          >
            <span className="relative z-10">🤖</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
            
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-ping opacity-20"></div>
            
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">AI</span>
            </div>
          </button>
        </div>

        {/* Status Indicator */}
        <div className={`mt-3 text-center transition-all duration-300 ${
          isMinimized ? 'opacity-0 transform translate-y-2' : 'opacity-100'
        }`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-md">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-700">AI Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Components */}
      <AIChatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
      <AISearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AIControlPanel isOpen={isControlPanelOpen} onClose={() => setIsControlPanelOpen(false)} />
      {isAdvancedAIOpen && <AdvancedAIController onClose={() => setIsAdvancedAIOpen(false)} />}
      {isLLMDashboardOpen && <LLMDashboard onClose={() => setIsLLMDashboardOpen(false)} />}

      {/* Background Overlay for Mobile */}
      {(isChatbotOpen || isSearchOpen || isControlPanelOpen || isAdvancedAIOpen || isLLMDashboardOpen) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden" 
          onClick={() => {
            setIsChatbotOpen(false)
            setIsSearchOpen(false)
            setIsControlPanelOpen(false)
            setIsAdvancedAIOpen(false)
            setIsLLMDashboardOpen(false)
          }}
        />
      )}

      {/* Global AI Styles */}
      <style jsx global>{`
        @keyframes ai-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.3); }
          50% { box-shadow: 0 0 30px rgba(236, 72, 153, 0.6); }
        }
        
        .ai-glow {
          animation: ai-glow 2s ease-in-out infinite;
        }
        
        .ai-feature-enter {
          animation: slideInRight 0.3s ease-out;
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}