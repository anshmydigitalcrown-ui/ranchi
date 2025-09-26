import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import AIHub from "@/components/AIHub";

export const metadata: Metadata = {
  title: "Ranchi Escorts - Premium Elite Companions | VIP Services 24/7",
  description: "Premium escort services in Ranchi with verified companions. VIP escorts, celebrity services, elite models available 24/7 across all Ranchi locations with complete discretion.",
  keywords: [
    'ranchi escorts',
    'vip escorts ranchi',
    'elite escorts ranchi',
    'premium escorts',
    'ranchi companions',
    'escort services ranchi'
  ],
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon-32.svg" sizes="32x32" type="image/svg+xml" />
        <link rel="icon" href="/icon-16.svg" sizes="16x16" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
      </head>
      <body className="antialiased">
        {children}
        <AIHub />
      </body>
    </html>
  );
}

