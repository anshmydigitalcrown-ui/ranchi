// Multi-Model LLM Testing API
import { NextRequest, NextResponse } from 'next/server'
import { AdvancedLLMService, LLM_MODELS } from '@/lib/advanced-llm'

export async function POST(request: NextRequest) {
  try {
    const { message, testAllModels = false } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    if (testAllModels) {
      // Test response from all available models
      const modelTests = await Promise.allSettled([
        testModel(message, LLM_MODELS.GPT35_TURBO, 'GPT-3.5 Turbo'),
        testModel(message, LLM_MODELS.GPT35_TURBO_16K, 'GPT-3.5 Turbo 16K'),
        testModel(message, LLM_MODELS.GPT4, 'GPT-4'),
        testModel(message, LLM_MODELS.GPT4_TURBO, 'GPT-4 Turbo')
      ])

      const results = modelTests.map((result, index) => {
        const modelNames = ['GPT-3.5 Turbo', 'GPT-3.5 Turbo 16K', 'GPT-4', 'GPT-4 Turbo']
        const modelKeys = Object.values(LLM_MODELS)
        
        return {
          model: modelNames[index],
          modelKey: modelKeys[index],
          status: result.status,
          data: result.status === 'fulfilled' ? result.value : null,
          error: result.status === 'rejected' ? result.reason.message : null
        }
      })

      return NextResponse.json({
        success: true,
        message: 'Multi-model test completed',
        results,
        testedAt: new Date().toISOString()
      })
    } else {
      // Test with single default model
      const result = await testModel(message, LLM_MODELS.GPT35_TURBO, 'GPT-3.5 Turbo')
      
      return NextResponse.json({
        success: true,
        model: 'GPT-3.5 Turbo',
        data: result,
        testedAt: new Date().toISOString()
      })
    }
  } catch (error) {
    console.error('LLM Test Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

async function testModel(message: string, model: string, modelName: string) {
  const testContext = {
    sessionId: `test-${Date.now()}`,
    previousMessages: [],
    location: 'Ranchi',
    serviceInterest: 'premium services'
  }

  const personality = {
    name: 'Test Assistant',
    personality: 'professional and helpful',
    expertise: ['Testing', 'AI Models', 'Performance Analysis'],
    tone: 'professional' as const,
    languages: ['English', 'Hindi']
  }

  const messages = [{ role: 'user' as const, content: message }]

  return await AdvancedLLMService.generatePersonalizedResponse(
    messages,
    personality,
    testContext,
    model
  )
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'LLM Test API is running',
    availableModels: {
      'GPT-3.5 Turbo': LLM_MODELS.GPT35_TURBO,
      'GPT-3.5 Turbo 16K': LLM_MODELS.GPT35_TURBO_16K,
      'GPT-4': LLM_MODELS.GPT4,
      'GPT-4 Turbo': LLM_MODELS.GPT4_TURBO
    },
    endpoints: {
      'Single Model Test': 'POST /api/ai/test-models with { message: "your test message" }',
      'Multi-Model Test': 'POST /api/ai/test-models with { message: "your test message", testAllModels: true }'
    }
  })
}