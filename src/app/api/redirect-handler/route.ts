/**
 * COMPREHENSIVE REDIRECT AND CACHE BUSTING SOLUTION
 * This file ensures all redirect URLs are properly handled with cache invalidation
 */

// Force cache invalidation
export const dynamic = 'force-dynamic'
export const revalidate = 0

import { NextRequest, NextResponse } from 'next/server'

const REDIRECT_MAPPINGS = {
  '/rates': '/services',
  '/booking': '/contact', 
  '/testimonials': '/about'
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const pathname = url.pathname
  
  // Check if this is one of our redirect URLs
  const redirectTo = REDIRECT_MAPPINGS[pathname as keyof typeof REDIRECT_MAPPINGS]
  
  if (redirectTo) {
    // Force permanent redirect with cache headers
    const response = NextResponse.redirect(new URL(redirectTo, request.url), 301)
    
    // Add cache-busting headers
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    
    return response
  }
  
  return NextResponse.next()
}