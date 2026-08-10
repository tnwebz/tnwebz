// src/app/locations/[city]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPageContent } from "@/components/sections/location-page-content";
import { locations, getLocationBySlug } from "@/lib/location-data";
import {
  generateLocalServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo-utils";

// Generate static params for all locations
export function generateStaticParams() {
  return locations.map((location) => ({
    city: location.slug,
  }));
}

// Generate metadata for each location page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: location.title,
    description: location.metaDescription,
    alternates: {
      canonical: `https://tnwebz.com/locations/${location.slug}`,
    },
    openGraph: {
      title: `${location.title} | TNWebz`,
      description: location.metaDescription,
      url: `https://tnwebz.com/locations/${location.slug}`,
      siteName: "TNWebz",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${location.title} | TNWebz`,
      description: location.metaDescription,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    notFound();
  }

  // Structured data
  const localServiceSchema = generateLocalServiceSchema({
    cityName: location.cityName,
    slug: location.slug,
    description: location.metaDescription,
  });

  const faqSchema =
    location.faqs.length > 0 ? generateFAQSchema(location.faqs) : null;

  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: "Home",
      url: "https://tnwebz.com",
    },
    {
      name: location.cityName,
      url: `https://tnwebz.com/locations/${location.slug}`,
    },
  ]);

  const schemas: any[] = [localServiceSchema, breadcrumbSchema];

  if (faqSchema) {
    schemas.push(faqSchema);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />

      <LocationPageContent data={location} />
    </>
  );
}
