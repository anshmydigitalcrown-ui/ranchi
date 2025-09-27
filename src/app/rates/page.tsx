import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Redirecting to Services & Rates - Natasha Rai Ranchi',
  robots: 'noindex, nofollow',
}

export default function RatesPage() {
  // Force immediate redirect
  redirect('/services')
  
  // Fallback content with timestamp for cache-busting
  const timestamp = new Date().getTime()
  
  return (
    <div>
      <meta httpEquiv="refresh" content="0;url=/services" />
      <script dangerouslySetInnerHTML={{__html: `
        window.location.href = '/services?t=${timestamp}';
      `}} />
      <p>Redirecting to services page... {timestamp}</p>
    </div>
  )
}