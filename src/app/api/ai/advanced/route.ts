// API Route for Advanced LLM Services
import { NextRequest, NextResponse } from 'next/server'
import { AdvancedLLMService, LLM_MODELS, AI_PERSONALITIES, ConversationContext, PersonalityProfile } from '@/lib/advanced-llm'

export async function POST(request: NextRequest) {
  try {
    const { action, ...params } = await request.json()

    switch (action) {
      case 'personalizedChat':
        return await handlePersonalizedChat(params)
      
      case 'contentStrategy':
        return await handleContentStrategy(params)
      
      case 'intentAnalysis':
        return await handleIntentAnalysis(params)
      
      case 'conversationFlow':
        return await handleConversationFlow(params)
      
      case 'seoOptimize':
        return await handleSEOOptimization(params)
      
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
  } catch (error) {
    console.error('Advanced LLM API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

async function handlePersonalizedChat(params: {
  messages: any[]
  personalityId: string
  context: ConversationContext
  model?: string
}) {
  const { messages, personalityId, context, model = LLM_MODELS.GPT35_TURBO } = params
  
  const personality = AI_PERSONALITIES[personalityId] || AI_PERSONALITIES.SOPHIA
  
  const response = await AdvancedLLMService.generatePersonalizedResponse(
    messages,
    personality,
    context,
    model
  )
  
  return NextResponse.json({
    success: true,
    data: response,
    personality: personality.name,
    timestamp: new Date().toISOString()
  })
}

async function handleContentStrategy(params: {
  topic: string
  targetAudience: string
  contentType: 'blog' | 'social' | 'email' | 'seo' | 'advertising'
  model?: string
}) {
  const { topic, targetAudience, contentType, model = LLM_MODELS.GPT4 } = params
  
  const strategy = await AdvancedLLMService.generateContentStrategy(
    topic,
    targetAudience,
    contentType,
    model
  )
  
  return NextResponse.json({
    success: true,
    data: strategy,
    generatedAt: new Date().toISOString()
  })
}

async function handleIntentAnalysis(params: {
  message: string
  context: ConversationContext
  model?: string
}) {
  const { message, context, model = LLM_MODELS.GPT35_TURBO } = params
  
  const analysis = await AdvancedLLMService.analyzeCustomerIntent(
    message,
    context,
    model
  )
  
  return NextResponse.json({
    success: true,
    data: analysis,
    analyzedAt: new Date().toISOString()
  })
}

async function handleConversationFlow(params: {
  context: ConversationContext
  currentMessage: string
  model?: string
}) {
  const { context, currentMessage, model = LLM_MODELS.GPT35_TURBO } = params
  
  const flowAnalysis = await AdvancedLLMService.manageConversationFlow(
    context,
    currentMessage,
    model
  )
  
  return NextResponse.json({
    success: true,
    data: flowAnalysis,
    analyzedAt: new Date().toISOString()
  })
}

async function handleSEOOptimization(params: {
  content: string
  targetKeywords: string[]
  contentType: 'page' | 'blog' | 'meta' | 'social'
  model?: string
}) {
  const { content, targetKeywords, contentType, model = LLM_MODELS.GPT4 } = params
  
  const optimization = await AdvancedLLMService.optimizeForSEO(
    content,
    targetKeywords,
    contentType,
    model
  )
  
  return NextResponse.json({
    success: true,
    data: optimization,
    optimizedAt: new Date().toISOString()
  })
}