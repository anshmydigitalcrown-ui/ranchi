import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Redirecting to About & Testimonials - Natasha Rai Ranchi',
  robots: 'noindex, nofollow',
}

export default function TestimonialsPage() {
  redirect('/about')
  
  // Fallback content (won't be reached due to redirect)
  return (
    <div>
      <meta httpEquiv="refresh" content="0;url=/about" />
      <script dangerouslySetInnerHTML={{__html: "window.location.href = '/about';"}} />
      <p>Redirecting to about page...</p>
    </div>
  )
}