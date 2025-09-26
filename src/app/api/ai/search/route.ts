import { NextRequest, NextResponse } from 'next/server'
import { AIService } from '@/lib/ai-service'

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      )
    }

    const results = await AIService.intelligentSearch(query)

    return NextResponse.json({
      success: true,
      results,
      query,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Search API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process search request' },
      { status: 500 }
    )
  }
}