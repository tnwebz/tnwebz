// src/app/locations/[city]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TargetedLandingPage from '@/components/TargetedLandingPage';
import { locations, getZoneCopy } from '@/lib/location-data';

// 1. Generate Static Params for all 20 locations
export function generateStaticParams() {
  return locations.map((location) => ({
    city: location.slug,
  }));
}

// 2. Dynamically Generate SEO Metadata based on Industry Zone
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const location = locations.find(loc => loc.slug === params.city);
  if (!location) return { title: 'Location Not Found' };

  const copy = getZoneCopy(location.zone);

  return {
    title: `${copy.service} | TNWebz Digital Studio in ${location.cityName}`,
    description: copy.description,
    alternates: {
      canonical: `https://www.tnwebz.com/locations/${location.slug}`,
    },
    openGraph: {
      title: `Expert Web Development in ${location.cityName}`,
      description: copy.description,
      url: `https://www.tnwebz.com/locations/${location.slug}`,
      siteName: 'TNWebz Digital Studio',
      locale: 'en_IN',
      type: 'website',
    },
  };
}

// 3. Render the Page Component
export default function LocationPage({ params }: { params: { city: string } }) {
  const location = locations.find(loc => loc.slug === params.city);
  
  if (!location) {
    notFound();
  }

  const copy = getZoneCopy(location.zone);

  return (
    <TargetedLandingPage 
      cityName={location.cityName} 
      copy={copy} 
    />
  );
}
