import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Redirecting to Contact & Booking - Natasha Rai Ranchi',
  robots: 'noindex, nofollow',
}

export default function BookingPage() {
  redirect('/contact')
  
  // Fallback content (won't be reached due to redirect)
  return (
    <div>
      <meta httpEquiv="refresh" content="0;url=/contact" />
      <script dangerouslySetInnerHTML={{__html: "window.location.href = '/contact';"}} />
      <p>Redirecting to contact page...</p>
    </div>
  )
}