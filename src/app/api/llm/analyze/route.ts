import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required for analysis' },
        { status: 400 }
      );
    }

    // Analyze text for service intent and preferences
    const analysis = await analyzeText(text);

    return NextResponse.json({
      analysis,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('LLM Analysis Error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze text' },
      { status: 500 }
    );
  }
}

async function analyzeText(text: string) {
  const lowerText = text.toLowerCase();
  
  // Service type analysis
  const serviceTypes = {
    vip: lowerText.includes('vip') || lowerText.includes('premium') || lowerText.includes('luxury'),
    celebrity: lowerText.includes('celebrity') || lowerText.includes('famous') || lowerText.includes('star'),
    elite: lowerText.includes('elite') || lowerText.includes('model') || lowerText.includes('high-class'),
    local: lowerText.includes('local') || lowerText.includes('nearby') || lowerText.includes('area'),
    independent: lowerText.includes('independent') || lowerText.includes('freelance'),
    travel: lowerText.includes('travel') || lowerText.includes('trip') || lowerText.includes('journey'),
    event: lowerText.includes('event') || lowerText.includes('party') || lowerText.includes('function'),
    outcall: lowerText.includes('outcall') || lowerText.includes('visit') || lowerText.includes('home')
  };

  // Demographics analysis
  const demographics = {
    college: lowerText.includes('college') || lowerText.includes('young') || lowerText.includes('student'),
    milf: lowerText.includes('milf') || lowerText.includes('mature') || lowerText.includes('experienced'),
    housewife: lowerText.includes('housewife') || lowerText.includes('married') || lowerText.includes('bhabhi'),
    bengali: lowerText.includes('bengali') || lowerText.includes('bangla'),
    nepali: lowerText.includes('nepali') || lowerText.includes('nepal'),
    russian: lowerText.includes('russian') || lowerText.includes('foreign') || lowerText.includes('international')
  };

  // Location analysis
  const locations = {
    central: lowerText.includes('central') || lowerText.includes('center'),
    hinoo: lowerText.includes('hinoo'),
    kanke: lowerText.includes('kanke'),
    lalpur: lowerText.includes('lalpur'),
    hec: lowerText.includes('hec') || lowerText.includes('colony'),
    bariatu: lowerText.includes('bariatu'),
    doranda: lowerText.includes('doranda'),
    ratu: lowerText.includes('ratu'),
    circular: lowerText.includes('circular'),
    argora: lowerText.includes('argora')
  };

  // Intent analysis
  const intents = {
    booking: lowerText.includes('book') || lowerText.includes('appointment') || lowerText.includes('reserve'),
    pricing: lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('rate') || lowerText.includes('charge'),
    availability: lowerText.includes('available') || lowerText.includes('free') || lowerText.includes('time'),
    contact: lowerText.includes('contact') || lowerText.includes('phone') || lowerText.includes('call') || lowerText.includes('whatsapp'),
    information: lowerText.includes('info') || lowerText.includes('detail') || lowerText.includes('about') || lowerText.includes('tell')
  };

  // Sentiment analysis (basic)
  const sentiment = {
    urgent: lowerText.includes('urgent') || lowerText.includes('asap') || lowerText.includes('immediately'),
    polite: lowerText.includes('please') || lowerText.includes('thank') || lowerText.includes('kindly'),
    specific: lowerText.includes('specific') || lowerText.includes('particular') || lowerText.includes('exact')
  };

  // Generate primary recommendation
  let primaryService = 'vip-escorts'; // default
  if (serviceTypes.celebrity) primaryService = 'celebrity-services';
  else if (serviceTypes.elite) primaryService = 'elite-models';
  else if (serviceTypes.local) primaryService = 'local-beauties';
  else if (serviceTypes.travel) primaryService = 'travel-companion';
  else if (demographics.college) primaryService = 'college-girls-escorts';
  else if (demographics.milf) primaryService = 'milf-escorts';
  else if (demographics.bengali) primaryService = 'bengali-escorts';

  return {
    serviceTypes,
    demographics,
    locations,
    intents,
    sentiment,
    confidence: calculateConfidence(serviceTypes, demographics, locations, intents),
    primaryRecommendation: primaryService,
    suggestedAction: determineSuggestedAction(intents)
  };
}

function calculateConfidence(serviceTypes: any, demographics: any, locations: any, intents: any): number {
  const totalIndicators = Object.values({...serviceTypes, ...demographics, ...locations, ...intents}).filter(Boolean).length;
  return Math.min(totalIndicators * 0.15, 1); // Max confidence of 1.0
}

function determineSuggestedAction(intents: any): string {
  if (intents.booking) return 'direct_booking';
  if (intents.contact) return 'show_contact';
  if (intents.pricing) return 'show_pricing_info';
  if (intents.availability) return 'check_availability';
  return 'provide_information';
}