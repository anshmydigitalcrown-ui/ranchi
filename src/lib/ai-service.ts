import OpenAI from 'openai'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'demo-key',
})

// AI Configuration
export const AI_CONFIG = {
  chatbot: process.env.AI_CHATBOT_ENABLED === 'true',
  contentGeneration: process.env.AI_CONTENT_GENERATION_ENABLED === 'true',
  search: process.env.AI_SEARCH_ENABLED === 'true',
  translation: process.env.AI_TRANSLATION_ENABLED === 'true',
  analytics: process.env.AI_ANALYTICS_ENABLED === 'true',
}

// AI Service Types
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp?: Date
}

export interface AISearchResult {
  title: string
  description: string
  url: string
  relevance: number
  category: 'service' | 'location' | 'general'
}

export interface TranslationRequest {
  text: string
  sourceLanguage: string
  targetLanguage: string
}

// OpenAI Service Functions
export class AIService {
  // 1. Chatbot Service
  static async generateChatResponse(messages: ChatMessage[]): Promise<string> {
    if (!AI_CONFIG.chatbot) {
      return "AI Chatbot is currently disabled. Please contact us directly for assistance."
    }

    try {
      const systemPrompt = `You are a professional customer service assistant for Ranchi Premium Escorts, a high-end escort service in Ranchi, India. 

Guidelines:
- Be professional, discreet, and respectful
- Provide helpful information about services and locations
- Never share explicit content
- Direct users to contact forms for booking
- Maintain confidentiality and privacy
- Answer questions about services, locations, and general inquiries
- If you don't know something, direct them to contact customer service

Available Services: VIP Escorts, Celebrity Services, Elite Models, Independent Services, Local Beauties, Outcall Services, Premium Services, Travel Companion, Event Companion, MILF Escorts, Housewife Escorts, Bengali Escorts, College Girls Escorts, Nepali Escorts, Russian Escorts

Available Locations: Central Ranchi, Hinoo, Kanke Road, Lalpur, HEC Colony, Bariatu, Doranda, Ratu Road, Circular Road, Argora`

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.map(msg => ({ role: msg.role, content: msg.content }))
        ],
        max_tokens: 500,
        temperature: 0.7,
      })

      return completion.choices[0]?.message?.content || "I apologize, I couldn't generate a response. Please try again or contact us directly."
    } catch (error) {
      console.error('AI Chat Error:', error)
      return "I'm experiencing technical difficulties. Please contact our customer service for immediate assistance."
    }
  }

  // 2. Content Generation Service
  static async generateContent(type: 'service' | 'location', name: string, context?: string): Promise<string> {
    if (!AI_CONFIG.contentGeneration) {
      return "AI Content Generation is currently disabled."
    }

    try {
      const prompt = type === 'service' 
        ? `Generate professional, SEO-optimized content for ${name} escort service in Ranchi. Include benefits, features, and call-to-action. Keep it tasteful and professional. ${context || ''}`
        : `Generate professional, SEO-optimized content for ${name} location in Ranchi for escort services. Include area description, accessibility, and local attractions. ${context || ''}`

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { 
            role: "system", 
            content: "You are a professional content writer for a premium escort service. Create tasteful, professional, and SEO-optimized content." 
          },
          { role: "user", content: prompt }
        ],
        max_tokens: 800,
        temperature: 0.8,
      })

      return completion.choices[0]?.message?.content || "Content generation failed. Please try again."
    } catch (error) {
      console.error('AI Content Generation Error:', error)
      return "Content generation is temporarily unavailable."
    }
  }

  // 3. Smart Search Service
  static async intelligentSearch(query: string): Promise<AISearchResult[]> {
    if (!AI_CONFIG.search) {
      return []
    }

    try {
      const services = [
        'VIP Escorts', 'Celebrity Services', 'Elite Models', 'Independent Services',
        'Local Beauties', 'Outcall Services', 'Premium Services', 'Travel Companion',
        'Event Companion', 'MILF Escorts', 'Housewife Escorts', 'Bengali Escorts',
        'College Girls Escorts', 'Nepali Escorts', 'Russian Escorts'
      ]

      const locations = [
        'Central Ranchi', 'Hinoo', 'Kanke Road', 'Lalpur', 'HEC Colony',
        'Bariatu', 'Doranda', 'Ratu Road', 'Circular Road', 'Argora'
      ]

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a search assistant for Ranchi Premium Escorts. Analyze the user's query and suggest relevant services and locations. Return a JSON array of results with title, description, url, relevance (0-1), and category.
            
Available Services: ${services.join(', ')}
Available Locations: ${locations.join(', ')}

Format: [{"title": "...", "description": "...", "url": "...", "relevance": 0.9, "category": "service|location|general"}]`
          },
          { role: "user", content: `Search query: "${query}"` }
        ],
        max_tokens: 1000,
        temperature: 0.3,
      })

      const response = completion.choices[0]?.message?.content || '[]'
      return JSON.parse(response)
    } catch (error) {
      console.error('AI Search Error:', error)
      return []
    }
  }

  // 4. Translation Service
  static async translateContent({ text, sourceLanguage, targetLanguage }: TranslationRequest): Promise<string> {
    if (!AI_CONFIG.translation) {
      return "Translation service is currently disabled."
    }

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a professional translator. Translate the text from ${sourceLanguage} to ${targetLanguage}. Maintain the professional and respectful tone appropriate for a premium service website.`
          },
          { role: "user", content: text }
        ],
        max_tokens: 1500,
        temperature: 0.3,
      })

      return completion.choices[0]?.message?.content || "Translation failed. Please try again."
    } catch (error) {
      console.error('AI Translation Error:', error)
      return "Translation service is temporarily unavailable."
    }
  }

  // 5. Analytics & Insights Service
  static async analyzeUserBehavior(data: any): Promise<string> {
    if (!AI_CONFIG.analytics) {
      return "Analytics service is currently disabled."
    }

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a web analytics expert. Analyze user behavior data and provide actionable insights for improving website performance and user experience."
          },
          { 
            role: "user", 
            content: `Analyze this user behavior data and provide insights: ${JSON.stringify(data)}`
          }
        ],
        max_tokens: 600,
        temperature: 0.5,
      })

      return completion.choices[0]?.message?.content || "Analysis failed. Please try again."
    } catch (error) {
      console.error('AI Analytics Error:', error)
      return "Analytics service is temporarily unavailable."
    }
  }

  // Health Check
  static async healthCheck(): Promise<boolean> {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello" }],
        max_tokens: 10,
      })
      return !!completion.choices[0]?.message?.content
    } catch (error) {
      console.error('AI Health Check Failed:', error)
      return false
    }
  }
}

export { openai }