import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://natasharai.in'),
  title: "Escorts in Ranchi - Premium VIP Services | Natasha Rai 24/7",
  description: "Book verified escorts in Ranchi with 100% authentic profiles. Premium VIP escort services available 24/7 across all Ranchi locations - Central Ranchi, Kanke Road, HEC Colony. Safe, discreet, professional.",
  keywords: [
    'escorts in ranchi',
    'ranchi escorts',
    'escort services ranchi',
    'vip escorts ranchi',
    'premium escorts ranchi',
    'professional escorts ranchi',
    'verified escorts ranchi',
    'ranchi call girls',
    'elite escorts ranchi',
    'outcall services ranchi',
    'ranchi companions',
    'celebrity escorts ranchi',
    'independent escorts ranchi',
    'mature escorts ranchi',
    'travel companions ranchi',
    'event escorts ranchi',
    'hotel escorts ranchi',
    'natasha rai ranchi'
  ],
  verification: {
    google: '42c583345d4bdb6b'
  },
  openGraph: {
    title: 'Escorts in Ranchi - Premium VIP Services | Natasha Rai 24/7',
    description: 'Book verified escorts in Ranchi with authentic profiles. Premium escort services available 24/7 across all Ranchi locations. Safe, discreet, professional.',
    url: 'https://natasharai.in',
    siteName: 'Natasha Rai - Escorts in Ranchi',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/icon-512.svg',
        width: 512,
        height: 512,
        alt: 'Natasha Rai - Premium Escorts in Ranchi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escorts in Ranchi - Premium VIP Services | Natasha Rai 24/7',
    description: 'Book verified escorts in Ranchi with authentic profiles. Premium escort services available 24/7 across all Ranchi locations.',
    images: ['/icon-512.svg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://natasharai.in',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/icon-16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/icon-32.svg', sizes: '32x32', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' }
    ],
    other: [
      { url: '/icon-512.svg', sizes: '512x512', type: 'image/svg+xml', rel: 'icon' }
    ]
  },
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="42c583345d4bdb6b" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon-32.svg" sizes="32x32" type="image/svg+xml" />
        <link rel="icon" href="/icon-16.svg" sizes="16x16" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Natasha Rai - Premium Escorts in Ranchi",
              "image": "https://natasharai.in/icon-512.svg",
              "description": "Premium escort services in Ranchi with verified profiles. Professional VIP escorts, celebrity companions, elite models available 24/7 across all Ranchi locations.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ranchi",
                "addressRegion": "Jharkhand",
                "addressCountry": "IN"
              },
              "telephone": "+91-9372662471",
              "url": "https://natasharai.in",
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 23.3441,
                  "longitude": 85.3096
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Escort Services in Ranchi",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "VIP Escorts in Ranchi",
                      "description": "Premium VIP escort services with elite companions"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Celebrity Escorts in Ranchi",
                      "description": "Celebrity-like glamorous escort companions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Outcall Escort Services Ranchi",
                      "description": "Professional outcall escort services to hotels and residences"
                    }
                  }
                ]
              },
              "areaServed": [
                "Central Ranchi",
                "Kanke Road",
                "HEC Colony", 
                "Lalpur",
                "Hinoo",
                "Bariatu",
                "Doranda",
                "Ratu Road",
                "Circular Road",
                "Argora"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

