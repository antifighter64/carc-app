import type { MetadataRoute } from 'next'
import { PAIRS } from '@/lib/compare-data'

const BASE = 'https://www.carc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/pricing', '/search', '/tools/negotiation', '/compare'].map(p => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.8,
  }))
  const compareRoutes = PAIRS.map(p => ({
    url: `${BASE}/compare/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))
  return [...staticRoutes, ...compareRoutes]
}
