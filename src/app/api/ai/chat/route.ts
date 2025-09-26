import { NextRequest, NextResponse } from 'next/server'
import { AIService, type ChatMessage } from '@/lib/ai-service'

export async function POST(request: NextRequest) {
  try {
    const { messages }: { messages: ChatMessage[] } = await request.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    const response = await AIService.generateChatResponse(messages)

    return NextResponse.json({
      success: true,
      response,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
}