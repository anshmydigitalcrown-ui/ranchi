'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  recommendations?: Array<{
    title: string;
    description: string;
    url: string;
    type: string;
  }>;
}

interface SmartChatProps {
  position?: 'bottom-right' | 'bottom-left';
  theme?: 'pink' | 'default';
}

export default function SmartChat({ position = 'bottom-right', theme = 'pink' }: SmartChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Natasha, your AI assistant. I can help you with information about our premium escort services in Ranchi. What can I help you with today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Get LLM response
      const chatResponse = await fetch('/api/llm/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: inputText,
          context: messages.slice(-3).map(m => `${m.isUser ? 'User' : 'Assistant'}: ${m.text}`).join('\n')
        }),
      });

      if (!chatResponse.ok) throw new Error('Failed to get response');
      const chatData = await chatResponse.json();

      // Get recommendations
      const recResponse = await fetch('/api/llm/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: inputText }),
      });

      let recommendations = [];
      if (recResponse.ok) {
        const recData = await recResponse.json();
        recommendations = recData.recommendations.slice(0, 3); // Limit to 3 recommendations
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: chatData.response,
        isUser: false,
        timestamp: new Date(),
        recommendations: recommendations.length > 0 ? recommendations : undefined
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble responding right now. Please contact us directly at +91-9372662471 for immediate assistance.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const positionClasses = position === 'bottom-right' 
    ? 'bottom-4 right-4' 
    : 'bottom-4 left-4';

  const themeColors = theme === 'pink' 
    ? {
        primary: 'bg-pink-600 hover:bg-pink-700',
        secondary: 'bg-pink-50 border-pink-200',
        accent: 'text-pink-600',
        button: 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
      }
    : {
        primary: 'bg-blue-600 hover:bg-blue-700',
        secondary: 'bg-blue-50 border-blue-200',
        accent: 'text-blue-600',
        button: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
      };

  return (
    <div className={`fixed ${positionClasses} z-50`}>
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className={`${themeColors.primary} text-white p-4 rounded-t-lg flex justify-between items-center`}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold">N</span>
              </div>
              <div>
                <h3 className="font-semibold">Natasha AI</h3>
                <p className="text-xs opacity-90">Always here to help</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser 
                    ? `${themeColors.button} text-white` 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  
                  {/* Recommendations */}
                  {message.recommendations && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs opacity-70">Suggested for you:</p>
                      {message.recommendations.map((rec, index) => (
                        <Link 
                          key={index}
                          href={rec.url}
                          className={`block p-2 ${themeColors.secondary} rounded border hover:shadow-sm transition-all text-sm`}
                          onClick={() => setIsOpen(false)}
                        >
                          <p className={`font-medium ${themeColors.accent}`}>{rec.title}</p>
                          <p className="text-xs text-gray-600 mt-1">{rec.description}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-xs opacity-50 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our services..."
                className="flex-1 p-2 border border-gray-300 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows={1}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
                className={`${themeColors.button} text-white p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${themeColors.button} text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}