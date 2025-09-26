import { NextRequest, NextResponse } from 'next/server'
import { AIService } from '@/lib/ai-service'

export async function POST(request: NextRequest) {
  try {
    const { type, name, context } = await request.json()

    if (!type || !name) {
      return NextResponse.json(
        { error: 'Type and name are required' },
        { status: 400 }
      )
    }

    if (!['service', 'location'].includes(type)) {
      return NextResponse.json(
        { error: 'Type must be either "service" or "location"' },
        { status: 400 }
      )
    }

    const content = await AIService.generateContent(type, name, context)

    return NextResponse.json({
      success: true,
      content,
      type,
      name,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Content Generation API Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    )
  }
}