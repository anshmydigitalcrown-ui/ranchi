import { NextRequest, NextResponse } from 'next/server'
import { AIService } from '@/lib/ai-service'

export async function GET(request: NextRequest) {
  try {
    const isHealthy = await AIService.healthCheck()

    return NextResponse.json({
      success: isHealthy,
      status: isHealthy ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      services: {
        chatbot: process.env.AI_CHATBOT_ENABLED === 'true',
        contentGeneration: process.env.AI_CONTENT_GENERATION_ENABLED === 'true',
        search: process.env.AI_SEARCH_ENABLED === 'true',
        translation: process.env.AI_TRANSLATION_ENABLED === 'true',
        analytics: process.env.AI_ANALYTICS_ENABLED === 'true',
      }
    })

  } catch (error) {
    console.error('Health Check API Error:', error)
    return NextResponse.json(
      { 
        success: false,
        status: 'error',
        error: 'Health check failed',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}