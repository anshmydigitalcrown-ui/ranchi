import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Redirecting to About & Testimonials - Natasha Rai Ranchi',
  robots: 'noindex, nofollow',
}

export default function TestimonialsPage() {
  // Force immediate redirect
  redirect('/about')
  
  // Fallback content with timestamp for cache-busting
  const timestamp = new Date().getTime()
  
  return (
    <div>
      <meta httpEquiv="refresh" content="0;url=/about" />
      <script dangerouslySetInnerHTML={{__html: `
        window.location.href = '/about?t=${timestamp}';
      `}} />
      <p>Redirecting to about page... {timestamp}</p>
    </div>
  )
}