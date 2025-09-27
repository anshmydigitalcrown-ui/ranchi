import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle broken link redirects
  const { pathname } = request.nextUrl

  // Redirect broken links to proper pages with cache-busting
  if (pathname === '/rates' || pathname === '/rates/') {
    const response = NextResponse.redirect(new URL('/services', request.url), 301)
    // Add cache-busting headers
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    return response
  }
  
  if (pathname === '/booking' || pathname === '/booking/') {
    const response = NextResponse.redirect(new URL('/contact', request.url), 301)
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    return response
  }
  
  if (pathname === '/testimonials' || pathname === '/testimonials/') {
    const response = NextResponse.redirect(new URL('/about', request.url), 301)
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    return response
  }

  // Add security headers to all responses
  const response = NextResponse.next()
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}