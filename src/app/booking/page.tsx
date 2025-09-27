import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Redirecting to Contact & Booking - Natasha Rai Ranchi',
  robots: 'noindex, nofollow',
}

export default function BookingPage() {
  // Force immediate redirect
  redirect('/contact')
  
  // Fallback content with timestamp for cache-busting
  const timestamp = new Date().getTime()
  
  return (
    <div>
      <meta httpEquiv="refresh" content="0;url=/contact" />
      <script dangerouslySetInnerHTML={{__html: `
        window.location.href = '/contact?t=${timestamp}';
      `}} />
      <p>Redirecting to contact page... {timestamp}</p>
    </div>
  )
}