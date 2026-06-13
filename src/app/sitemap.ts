// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { locations } from '@/lib/location-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.webz.in'; // Replace with your actual production domain

  // 1. Static Routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    // Add other static routes like /about, /contact here
  ];

  // 2. Dynamic Location Routes (SEO Traps)
  const dynamicLocationRoutes = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8, // Slightly lower priority than homepage, but high enough for local SEO
  }));

  return [...staticRoutes, ...dynamicLocationRoutes];
}
