'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: string;
}

interface SmartSearchProps {
  placeholder?: string;
  className?: string;
  compact?: boolean;
}

export default function SmartSearch({ 
  placeholder = "Search services, locations, or ask me anything...",
  className = "",
  compact = false
}: SmartSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setAiSuggestion('');
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    setIsOpen(true);

    try {
      // Get recommendations based on search query
      const recResponse = await fetch('/api/llm/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (recResponse.ok) {
        const recData = await recResponse.json();
        setResults(recData.recommendations.slice(0, 6));
      }

      // Get AI analysis for suggestion
      const analysisResponse = await fetch('/api/llm/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: searchQuery }),
      });

      if (analysisResponse.ok) {
        const analysisData = await analysisResponse.json();
        
        // Generate AI suggestion based on analysis
        let suggestion = '';
        if (analysisData.analysis.intents.booking) {
          suggestion = "Looking to make a booking? Contact us at +91-9372662471 for immediate assistance.";
        } else if (analysisData.analysis.intents.pricing) {
          suggestion = "For detailed pricing information, please call us directly for transparent rates.";
        } else if (analysisData.analysis.confidence > 0.5) {
          suggestion = `Based on your search, you might be interested in our ${analysisData.analysis.primaryRecommendation.replace('-', ' ')} service.`;
        } else {
          suggestion = "Need help finding what you're looking for? Our AI assistant can provide personalized recommendations.";
        }
        
        setAiSuggestion(suggestion);
      }

    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
      setAiSuggestion("I'm having trouble with search right now. Please contact us directly at +91-9372662471.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
    // Debounce search
    const timeoutId = setTimeout(() => {
      handleSearch(newQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(query);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service': return 'text-pink-600 bg-pink-100';
      case 'location': return 'text-blue-600 bg-blue-100';
      case 'contact': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={() => query && setIsOpen(true)}
          placeholder={placeholder}
          className={`w-full ${compact ? 'px-4 py-2' : 'px-6 py-4'} pr-12 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-sm`}
        />
        
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {isLoading && (
            <div className="w-4 h-4 border-2 border-pink-600 border-t-transparent rounded-full animate-spin"></div>
          )}
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query || aiSuggestion) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
          {/* AI Suggestion */}
          {aiSuggestion && (
            <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 border-b border-gray-100">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 mb-1">AI Suggestion</p>
                  <p className="text-sm text-gray-600">{aiSuggestion}</p>
                </div>
              </div>
            </div>
          )}

          {/* Search Results */}
          {results.length > 0 && (
            <div className="p-2">
              <p className="text-xs text-gray-500 px-3 py-2 font-medium">SEARCH RESULTS</p>
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  onClick={() => setIsOpen(false)}
                  className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                      {result.type}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">{result.title}</h4>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{result.description}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          )}

          {/* No Results */}
          {!isLoading && query && results.length === 0 && !aiSuggestion && (
            <div className="p-6 text-center">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-gray-500 text-sm">No results found for "{query}"</p>
              <p className="text-gray-400 text-xs mt-1">Try different keywords or contact us directly</p>
            </div>
          )}

          {/* Contact CTA */}
          <div className="p-4 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-800">Need immediate assistance?</p>
                <p className="text-xs text-gray-600">Our team is available 24/7</p>
              </div>
              <div className="flex gap-2">
                <a 
                  href="tel:+919372662471"
                  className="px-3 py-1 bg-pink-600 text-white text-xs font-medium rounded-full hover:bg-pink-700 transition-colors"
                >
                  Call
                </a>
                <a 
                  href="https://wa.me/919372662471"
                  className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full hover:bg-green-700 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}