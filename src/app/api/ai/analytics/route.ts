import { NextRequest, NextResponse } from 'next/server'
import { AIService } from '@/lib/ai-service'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const insights = await AIService.analyzeUserBehavior(data)

    return NextResponse.json({
      success: true,
      insights,
      analyzedData: data,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Analytics API Error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze data' },
      { status: 500 }
    )
  }
}