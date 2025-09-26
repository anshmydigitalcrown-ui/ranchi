'use client'

/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AISearchResult } from '@/lib/ai-service'

interface AISearchProps {
  isOpen: boolean
  onClose: () => void
}

export default function AISearch({ isOpen, onClose }: AISearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<AISearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const performSearch = async () => {
    if (!query.trim()) return

    setIsLoading(true)
    setHasSearched(true)

    try {
      const response = await fetch('/api/ai/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })

      const data = await response.json()

      if (data.success) {
        setResults(data.results)
      } else {
        console.error('Search error:', data.error)
        setResults([])
      }
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      performSearch()
    }
  }

  const clearSearch = () => {
    setQuery('')
    setResults([])
    setHasSearched(false)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'service':
        return '🌟'
      case 'location':
        return '📍'
      default:
        return '📄'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'service':
        return 'bg-pink-100 text-pink-700 border-pink-200'
      case 'location':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                🔍
              </div>
              <div>
                <h3 className="font-bold text-xl">AI Smart Search</h3>
                <p className="text-pink-100 text-sm">Find exactly what you are looking for</p>
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
          
          {/* Search Input */}
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for services, locations, or ask a question..."
                className="w-full p-4 text-gray-800 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
                disabled={isLoading}
              />
            </div>
            <button
              onClick={performSearch}
              disabled={!query.trim() || isLoading}
              className="bg-white text-pink-600 hover:bg-pink-50 disabled:bg-gray-200 disabled:text-gray-400 px-6 py-4 rounded-xl transition-colors font-semibold shadow-lg flex items-center space-x-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-pink-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search</span>
                </>
              )}
            </button>
            {hasSearched && (
              <button
                onClick={clearSearch}
                className="bg-white/20 text-white hover:bg-white/30 px-4 py-4 rounded-xl transition-colors"
                title="Clear Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-6">
          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">AI is analyzing your search...</p>
              </div>
            </div>
          )}

          {!isLoading && hasSearched && results.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-8a8 8 0 018 8c0 2.218-.898 4.224-2.35 5.672L20 18a8 8 0 01-8 8c-2.218 0-4.224-.898-5.672-2.35L6 20a8 8 0 01-8-8c0-2.218.898-4.224 2.35-5.672L4 6a8 8 0 018-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-600 mb-4">Try different keywords or be more specific in your search.</p>
              <div className="text-sm text-gray-500">
                <p><strong>Tip:</strong> Try searching for:</p>
                <ul className="mt-2 space-y-1">
                  <li>• &quot;VIP escorts in Central Ranchi&quot;</li>
                  <li>• &quot;Premium services near Hinoo&quot;</li>
                  <li>• &quot;Elite models for events&quot;</li>
                </ul>
              </div>
            </div>
          )}

          {!isLoading && results.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-gray-800">
                  Search Results ({results.length})
                </h4>
                <div className="text-sm text-gray-500">
                  Powered by AI Intelligence
                </div>
              </div>

              {results
                .sort((a, b) => b.relevance - a.relevance)
                .map((result, index) => (
                  <Link
                    key={index}
                    href={result.url}
                    onClick={onClose}
                    className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-pink-300 transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl">{getCategoryIcon(result.category)}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(result.category)}`}>
                            {result.category.charAt(0).toUpperCase() + result.category.slice(1)}
                          </span>
                          <div className="flex items-center space-x-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i < Math.round(result.relevance * 5)
                                    ? 'bg-pink-400'
                                    : 'bg-gray-200'
                                }`}
                              />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">
                              {Math.round(result.relevance * 100)}% match
                            </span>
                          </div>
                        </div>
                        
                        <h5 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors mb-2">
                          {result.title}
                        </h5>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {result.description}
                        </p>
                        
                        <div className="flex items-center text-sm text-pink-600 group-hover:text-pink-700">
                          <span>{result.url}</span>
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          )}

          {!hasSearched && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Search</h3>
              <p className="text-gray-600 mb-6">
                Use natural language to find services, locations, or get recommendations
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <div className="text-pink-600 font-semibold mb-2">🌟 Services</div>
                  <p className="text-gray-600">VIP escorts, Elite models, Premium services</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-blue-600 font-semibold mb-2">📍 Locations</div>
                  <p className="text-gray-600">Central Ranchi, Hinoo, Kanke Road</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-purple-600 font-semibold mb-2">💬 Natural Queries</div>
                  <p className="text-gray-600">&quot;Best escorts near me&quot;, &quot;Luxury services&quot;</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}