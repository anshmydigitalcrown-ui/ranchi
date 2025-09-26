import { NextRequest, NextResponse } from 'next/server'
import { AIService, type TranslationRequest } from '@/lib/ai-service'

export async function POST(request: NextRequest) {
  try {
    const { text, sourceLanguage, targetLanguage }: TranslationRequest = await request.json()

    if (!text || !sourceLanguage || !targetLanguage) {
      return NextResponse.json(
        { error: 'Text, source language, and target language are required' },
        { status: 400 }
      )
    }

    const translation = await AIService.translateContent({
      text,
      sourceLanguage,
      targetLanguage
    })

    return NextResponse.json({
      success: true,
      translation,
      originalText: text,
      sourceLanguage,
      targetLanguage,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Translation API Error:', error)
    return NextResponse.json(
      { error: 'Failed to translate content' },
      { status: 500 }
    )
  }
}