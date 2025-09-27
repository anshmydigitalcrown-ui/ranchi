'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Recommendation {
  title: string;
  description: string;
  url: string;
  type: string;
}

interface SmartRecommendationsProps {
  context?: string;
  maxItems?: number;
  title?: string;
  className?: string;
}

export default function SmartRecommendations({ 
  context = 'general', 
  maxItems = 4, 
  title = 'Recommended for You',
  className = ''
}: SmartRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch('/api/llm/recommendations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: context }),
        });

        if (response.ok) {
          const data = await response.json();
          setRecommendations(data.recommendations.slice(0, maxItems));
        }
      } catch (error) {
        console.error('Failed to fetch recommendations:', error);
        // Fallback recommendations
        setRecommendations([
          {
            title: "VIP Escorts",
            description: "Premium companions for discerning clients",
            url: "/services/vip-escorts",
            type: "service"
          },
          {
            title: "Local Beauties",
            description: "Charming local companions",
            url: "/services/local-beauties",
            type: "service"
          },
          {
            title: "Central Ranchi",
            description: "Prime location services",
            url: "/locations/central-ranchi",
            type: "location"
          }
        ].slice(0, maxItems));
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [context, maxItems]);

  if (isLoading) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: maxItems }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-20 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return null;
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return (
          <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'location':
        return (
          <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'contact':
        return (
          <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      <div className={`grid grid-cols-1 ${maxItems > 2 ? 'md:grid-cols-2' : ''} gap-4`}>
        {recommendations.map((rec, index) => (
          <Link
            key={index}
            href={rec.url}
            className="group p-4 border border-gray-200 rounded-lg hover:border-pink-300 hover:shadow-md transition-all duration-300 bg-gradient-to-r from-white to-pink-50/30 hover:to-pink-50"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                {getTypeIcon(rec.type)}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                  {rec.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {rec.description}
                </p>
                <div className="mt-2 flex items-center text-xs text-pink-600">
                  <span className="capitalize">{rec.type}</span>
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* AI Attribution */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          AI-powered recommendations based on your interests
        </p>
      </div>
    </div>
  );
}