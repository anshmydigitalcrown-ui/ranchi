import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    sitemap: 'https://ranchi-mu.vercel.app/sitemap.xml',
    host: 'https://ranchi-mu.vercel.app',
  }
}