import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Redirecting to Services & Rates - Natasha Rai Ranchi',
  robots: 'noindex, nofollow',
}

export default function RatesPage() {
  redirect('/services')
  
  // Fallback content (won't be reached due to redirect)
  return (
    <div>
      <meta httpEquiv="refresh" content="0;url=/services" />
      <script dangerouslySetInnerHTML={{__html: "window.location.href = '/services';"}} />
      <p>Redirecting to services page...</p>
    </div>
  )
}