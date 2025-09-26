'use client'

/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link'

export default function AIHeroButtons() {
  const handleTryAI = () => {
    // This will trigger the AI Hub to open
    const event = new CustomEvent('openAIChat')
    window.dispatchEvent(event)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <button 
        onClick={handleTryAI}
        className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
      >
        <span>💬</span>
        <span>Try AI Assistant</span>
      </button>
      <Link 
        href="#features" 
        className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center space-x-2"
      >
        <span>🔍</span>
        <span>Explore Features</span>
      </Link>
    </div>
  )
}