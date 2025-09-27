import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle broken link redirects
  const { pathname } = request.nextUrl

  // Redirect broken links to proper pages
  if (pathname === '/rates') {
    return NextResponse.redirect(new URL('/services', request.url))
  }
  
  if (pathname === '/booking') {
    return NextResponse.redirect(new URL('/contact', request.url))
  }
  
  if (pathname === '/testimonials') {
    return NextResponse.redirect(new URL('/about', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}