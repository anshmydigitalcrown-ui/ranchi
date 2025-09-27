import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Enhanced system prompt for Ranchi escort services
    const systemPrompt = `You are Natasha, an AI assistant for natasharai.in - a premium escort service in Ranchi, Jharkhand. 

Your role:
- Provide helpful information about escort services in Ranchi
- Maintain a professional, friendly, and discreet tone
- Assist with booking inquiries and service information
- Answer questions about locations, pricing, and availability
- Always prioritize client discretion and privacy

Available services:
- VIP Escorts, Celebrity Services, Elite Models
- Independent Services, Local Beauties, Premium Services
- Travel Companion, Event Companion, Outcall Services
- Housewife Escorts, College Girls, MILF Escorts
- Bengali, Nepali, Russian Escorts

Locations covered:
- Central Ranchi, Hinoo, Kanke Road, Lalpur
- HEC Colony, Bariatu, Doranda, Ratu Road
- Circular Road, Argora

Contact: +91-9372662471 (Call/WhatsApp)

Keep responses helpful, professional, and within appropriate boundaries.`;

    // Simulate LLM response (in production, integrate with OpenAI, Anthropic, etc.)
    const response = await generateLLMResponse(message, systemPrompt, context);

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('LLM Chat Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}

// Mock LLM function - replace with actual LLM API calls
async function generateLLMResponse(message: string, systemPrompt: string, context?: string): Promise<string> {
  const lowerMessage = message.toLowerCase();

  // Service-related queries
  if (lowerMessage.includes('service') || lowerMessage.includes('escort')) {
    return "I can help you learn about our premium escort services in Ranchi. We offer VIP escorts, celebrity services, elite models, and more. Our companions are available 24/7 across all Ranchi locations with complete discretion. Would you like information about specific services or locations?";
  }

  // Location queries
  if (lowerMessage.includes('location') || lowerMessage.includes('area') || lowerMessage.includes('ranchi')) {
    return "We provide services across all major areas in Ranchi including Central Ranchi, Hinoo, Kanke Road, Lalpur, HEC Colony, Bariatu, Doranda, Ratu Road, Circular Road, and Argora. Our companions can visit your preferred location with complete discretion. Which area are you interested in?";
  }

  // Booking queries
  if (lowerMessage.includes('book') || lowerMessage.includes('appointment') || lowerMessage.includes('available')) {
    return "To make a booking or check availability, please contact us directly at +91-9372662471. You can call or WhatsApp us for immediate assistance. Our booking team will help you select the perfect companion and arrange your appointment with complete privacy.";
  }

  // Pricing queries
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate')) {
    return "Our pricing varies based on the service type, duration, and companion category. We offer competitive rates for all our premium services. For detailed pricing information, please contact us at +91-9372662471. Our team will provide you with transparent pricing for your specific requirements.";
  }

  // Contact queries
  if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('whatsapp')) {
    return "You can reach us at +91-9372662471 for immediate assistance. We're available on both call and WhatsApp 24/7. Our responsive booking team ensures quick replies and complete discretion in all communications.";
  }

  // General greeting or help
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('help')) {
    return "Hello! I'm Natasha, your AI assistant from natasharai.in. I'm here to help you with information about our premium escort services in Ranchi. Whether you need details about our companions, services, locations, or booking process, I'm happy to assist. What can I help you with today?";
  }

  // Default response
  return "Thank you for your inquiry! I'm here to assist you with information about our premium escort services in Ranchi. For specific questions about bookings, availability, or services, please contact us at +91-9372662471. How else can I help you today?";
}