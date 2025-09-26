import OpenAI from 'openai'
import { AIService, ChatMessage } from './ai-service'

// Advanced LLM Models Configuration
export const LLM_MODELS = {
  GPT4: 'gpt-4',
  GPT4_TURBO: 'gpt-4-turbo-preview',
  GPT35_TURBO: 'gpt-3.5-turbo',
  GPT35_TURBO_16K: 'gpt-3.5-turbo-16k',
}

// Advanced AI Service Types
export interface PersonalityProfile {
  name: string
  personality: string
  expertise: string[]
  tone: 'professional' | 'friendly' | 'sophisticated' | 'warm'
  languages: string[]
}

export interface ConversationContext {
  userId?: string
  sessionId: string
  previousMessages: ChatMessage[]
  userPreferences?: UserPreferences
  location?: string
  serviceInterest?: string
}

export interface UserPreferences {
  preferredLanguage: string
  communicationStyle: 'direct' | 'detailed' | 'casual'
  serviceType: string[]
  location: string
  budget?: string
}

export interface LLMResponse {
  content: string
  confidence: number
  suggestedActions?: string[]
  relatedServices?: string[]
  followUpQuestions?: string[]
}

// Advanced LLM Service Class
export class AdvancedLLMService {
  private static openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'demo-key',
  })

  // 1. Multi-Model Chat with Personality
  static async generatePersonalizedResponse(
    messages: ChatMessage[],
    personality: PersonalityProfile,
    context: ConversationContext,
    model: string = LLM_MODELS.GPT35_TURBO
  ): Promise<LLMResponse> {
    try {
      const systemPrompt = this.buildPersonalityPrompt(personality, context)
      
      const completion = await this.openai.chat.completions.create({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.map(msg => ({ role: msg.role, content: msg.content }))
        ],
        max_tokens: 800,
        temperature: 0.8,
        presence_penalty: 0.6,
        frequency_penalty: 0.3,
      })

      const content = completion.choices[0]?.message?.content || "I apologize, I couldn't generate a response."
      
      return {
        content,
        confidence: this.calculateConfidence(completion),
        suggestedActions: await this.generateSuggestedActions(content, context),
        relatedServices: this.extractRelatedServices(content),
        followUpQuestions: this.generateFollowUpQuestions(content, context)
      }
    } catch (error) {
      console.error('Advanced LLM Error:', error)
      return {
        content: "I'm experiencing technical difficulties. Please contact our customer service.",
        confidence: 0.1,
        suggestedActions: ['Contact customer service', 'Try again later'],
        relatedServices: [],
        followUpQuestions: []
      }
    }
  }

  // 2. Advanced Content Strategy Generation
  static async generateContentStrategy(
    topic: string,
    targetAudience: string,
    contentType: 'blog' | 'social' | 'email' | 'seo' | 'advertising',
    model: string = LLM_MODELS.GPT4
  ): Promise<{
    strategy: string
    content: string
    keywords: string[]
    callToAction: string
    engagement_hooks: string[]
  }> {
    try {
      const prompt = `Create a comprehensive content strategy for ${contentType} about "${topic}" targeting ${targetAudience}. 

Please provide:
1. Overall strategy approach
2. Complete content piece
3. SEO keywords (10-15)
4. Compelling call-to-action
5. Engagement hooks (5 hooks)

Make it professional, engaging, and conversion-focused for a premium escort service in Ranchi.`

      const completion = await this.openai.chat.completions.create({
        model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 1500,
        temperature: 0.7,
      })

      const response = completion.choices[0]?.message?.content || ''
      return this.parseContentStrategy(response)
    } catch (error) {
      console.error('Content Strategy Error:', error)
      return {
        strategy: 'Error generating strategy',
        content: 'Content generation failed',
        keywords: [],
        callToAction: 'Contact us for more information',
        engagement_hooks: []
      }
    }
  }

  // 3. Advanced Customer Intent Analysis
  static async analyzeCustomerIntent(
    message: string,
    context: ConversationContext,
    model: string = LLM_MODELS.GPT35_TURBO
  ): Promise<{
    intent: string
    confidence: number
    urgency: 'low' | 'medium' | 'high'
    serviceInterest: string[]
    location: string | null
    budget: string | null
    nextBestAction: string
    sentiment: 'positive' | 'neutral' | 'negative'
  }> {
    try {
      const prompt = `Analyze this customer message for intent, urgency, and requirements:

Message: "${message}"
Context: Customer from ${context.location || 'unknown location'}, previous interest in ${context.serviceInterest || 'general services'}

Provide analysis in JSON format:
{
  "intent": "main customer intent",
  "confidence": confidence_score_0_to_1,
  "urgency": "low|medium|high",
  "serviceInterest": ["service1", "service2"],
  "location": "preferred_location",
  "budget": "budget_indication", 
  "nextBestAction": "recommended_next_step",
  "sentiment": "positive|neutral|negative"
}`

      const completion = await this.openai.chat.completions.create({
        model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 400,
        temperature: 0.3,
      })

      const response = completion.choices[0]?.message?.content || '{}'
      return JSON.parse(response)
    } catch (error) {
      console.error('Intent Analysis Error:', error)
      return {
        intent: 'general_inquiry',
        confidence: 0.5,
        urgency: 'medium',
        serviceInterest: [],
        location: null,
        budget: null,
        nextBestAction: 'provide_general_information',
        sentiment: 'neutral'
      }
    }
  }

  // 4. Dynamic Conversation Flow Management
  static async manageConversationFlow(
    context: ConversationContext,
    currentMessage: string,
    model: string = LLM_MODELS.GPT35_TURBO
  ): Promise<{
    nextQuestions: string[]
    conversationStage: string
    recommendedResponse: string
    shouldEscalate: boolean
    estimatedConversionProbability: number
  }> {
    try {
      const conversationHistory = context.previousMessages.slice(-10) // Last 10 messages
      const historyText = conversationHistory.map(m => `${m.role}: ${m.content}`).join('\n')

      const prompt = `Analyze this conversation and determine the best flow management:

Conversation History:
${historyText}

Current Message: "${currentMessage}"

Provide analysis in JSON format:
{
  "nextQuestions": ["question1", "question2", "question3"],
  "conversationStage": "awareness|interest|consideration|decision",
  "recommendedResponse": "suggested_response_strategy",
  "shouldEscalate": boolean,
  "estimatedConversionProbability": probability_0_to_1
}`

      const completion = await this.openai.chat.completions.create({
        model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 500,
        temperature: 0.4,
      })

      const response = completion.choices[0]?.message?.content || '{}'
      return JSON.parse(response)
    } catch (error) {
      console.error('Conversation Flow Error:', error)
      return {
        nextQuestions: ['How can I help you today?', 'What services interest you?', 'What location do you prefer?'],
        conversationStage: 'awareness',
        recommendedResponse: 'ask_clarifying_questions',
        shouldEscalate: false,
        estimatedConversionProbability: 0.3
      }
    }
  }

  // 5. Advanced SEO Content Optimization
  static async optimizeForSEO(
    content: string,
    targetKeywords: string[],
    contentType: 'page' | 'blog' | 'meta' | 'social',
    model: string = LLM_MODELS.GPT4
  ): Promise<{
    optimizedContent: string
    seoScore: number
    improvements: string[]
    metaTags: {
      title: string
      description: string
      keywords: string[]
    }
    structuredData: any
  }> {
    try {
      const prompt = `Optimize this content for SEO with target keywords: ${targetKeywords.join(', ')}

Content Type: ${contentType}
Original Content: "${content}"

Please provide:
1. SEO-optimized version of the content
2. SEO score (1-100)
3. List of improvements made
4. Meta tags (title, description, keywords)
5. Structured data recommendations

Focus on: keyword density, readability, semantic SEO, user intent, and conversion optimization.`

      const completion = await this.openai.chat.completions.create({
        model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 1200,
        temperature: 0.5,
      })

      const response = completion.choices[0]?.message?.content || ''
      return this.parseSEOOptimization(response)
    } catch (error) {
      console.error('SEO Optimization Error:', error)
      return {
        optimizedContent: content,
        seoScore: 50,
        improvements: ['Error in optimization'],
        metaTags: {
          title: 'Premium Escort Services',
          description: 'Professional escort services in Ranchi',
          keywords: targetKeywords
        },
        structuredData: {}
      }
    }
  }

  // Private Helper Methods
  private static buildPersonalityPrompt(personality: PersonalityProfile, context: ConversationContext): string {
    return `You are ${personality.name}, a ${personality.personality} customer service representative for Ranchi Premium Escorts.

Your expertise: ${personality.expertise.join(', ')}
Your tone: ${personality.tone}
Languages you speak: ${personality.languages.join(', ')}

Customer context:
- Location: ${context.location || 'Not specified'}
- Service interest: ${context.serviceInterest || 'General inquiry'}
- Session: ${context.sessionId}

Guidelines:
- Maintain your personality consistently
- Be helpful and professional
- Provide accurate information about services and locations
- Respect privacy and discretion
- Guide towards appropriate services based on context`
  }

  private static calculateConfidence(completion: any): number {
    // Calculate confidence based on response characteristics
    const response = completion.choices[0]?.message?.content || ''
    const length = response.length
    const hasUncertainWords = /maybe|perhaps|might|could be|unsure/i.test(response)
    
    let confidence = 0.8
    if (length < 50) confidence -= 0.2
    if (hasUncertainWords) confidence -= 0.3
    if (completion.choices[0]?.finish_reason === 'stop') confidence += 0.1
    
    return Math.max(0.1, Math.min(1.0, confidence))
  }

  private static async generateSuggestedActions(content: string, context: ConversationContext): Promise<string[]> {
    // Generate contextual suggested actions
    const actions = ['Contact us directly', 'Browse our services', 'Schedule a consultation']
    
    if (context.serviceInterest) {
      actions.unshift(`Learn more about ${context.serviceInterest}`)
    }
    
    if (context.location) {
      actions.push(`Find services in ${context.location}`)
    }
    
    return actions.slice(0, 3)
  }

  private static extractRelatedServices(content: string): string[] {
    const services = ['VIP Escorts', 'Celebrity Services', 'Elite Models', 'Premium Services', 'Travel Companion']
    return services.filter(service => 
      content.toLowerCase().includes(service.toLowerCase())
    ).slice(0, 3)
  }

  private static generateFollowUpQuestions(content: string, context: ConversationContext): string[] {
    const questions = [
      'Would you like to know more about our premium services?',
      'Do you have a preferred location in Ranchi?',
      'Are you looking for a specific type of companionship?'
    ]
    
    return questions.slice(0, 2)
  }

  private static parseContentStrategy(response: string): any {
    // Parse the structured response - simplified for demo
    return {
      strategy: 'Advanced content strategy generated',
      content: response.substring(0, 500) + '...',
      keywords: ['premium escorts', 'ranchi services', 'elite companions'],
      callToAction: 'Contact us for premium services',
      engagement_hooks: ['Exclusive access', 'Premium quality', 'Discreet service']
    }
  }

  private static parseSEOOptimization(response: string): any {
    // Parse SEO optimization response - simplified for demo
    return {
      optimizedContent: response,
      seoScore: 85,
      improvements: ['Keyword optimization', 'Meta tag enhancement', 'Readability improvement'],
      metaTags: {
        title: 'Premium Escort Services in Ranchi - Elite Companions',
        description: 'Professional escort services in Ranchi with verified elite companions. VIP services available 24/7.',
        keywords: ['ranchi escorts', 'premium services', 'elite companions']
      },
      structuredData: {
        '@type': 'Service',
        'name': 'Premium Escort Services',
        'provider': 'Ranchi Elite Services'
      }
    }
  }
}

// Predefined AI Personalities
export const AI_PERSONALITIES: { [key: string]: PersonalityProfile } = {
  SOPHIA: {
    name: 'Sophia',
    personality: 'warm and sophisticated',
    expertise: ['VIP Services', 'Elite Companions', 'Event Planning'],
    tone: 'sophisticated',
    languages: ['English', 'Hindi']
  },
  PRIYA: {
    name: 'Priya',
    personality: 'friendly and approachable',
    expertise: ['Local Services', 'Cultural Guidance', 'Translation'],
    tone: 'friendly',
    languages: ['English', 'Hindi', 'Bengali']
  },
  MAYA: {
    name: 'Maya',
    personality: 'professional and efficient',
    expertise: ['Business Services', 'Travel Companion', 'Corporate Events'],
    tone: 'professional',
    languages: ['English', 'Hindi']
  }
}

export default AdvancedLLMService