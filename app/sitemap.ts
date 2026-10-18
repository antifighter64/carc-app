import type { MetadataRoute } from 'next'
import { PAIRS } from '@/lib/compare-data'
import { ARTICLES } from '@/lib/news'
import { LISTS } from '@/lib/top10'

const BASE = 'https://www.carc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/pricing', '/search', '/tools/negotiation', '/compare', '/news', '/top-10', '/privacy', '/terms', '/affiliate-disclosure'].map(p => ({
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
  const newsRoutes = ARTICLES.map(a => ({
    url: `${BASE}/news/${a.slug}`,
    lastModified: new Date(a.dateISO),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  const top10Routes = LISTS.map(l => ({
    url: `${BASE}/top-10/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))
  return [...staticRoutes, ...compareRoutes, ...newsRoutes, ...top10Routes]
}
