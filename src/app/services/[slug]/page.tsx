// src/app/services/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services-data";
import { ServicePageContent } from "@/components/sections/service-page-content";
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo-utils";

// Generate static params for all services
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Dynamic SEO metadata per service page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `https://tnwebz.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | TNWebz`,
      description: service.metaDescription,
      url: `https://tnwebz.com/services/${service.slug}`,
      siteName: "TNWebz",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | TNWebz`,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.slug);

  // Structured data
  const serviceSchema = generateServiceSchema({
    name: service.name,
    description: service.overview,
    url: `https://tnwebz.com/services/${service.slug}`,
  });

  const faqSchema = generateFAQSchema(service.faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://tnwebz.com" },
    { name: "Services", url: "https://tnwebz.com/services" },
    { name: service.name, url: `https://tnwebz.com/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]),
        }}
      />
      <ServicePageContent
        service={service}
        relatedServices={relatedServices.map((s) => ({
          slug: s.slug,
          name: s.name,
          shortName: s.shortName,
        }))}
      />
    </>
  );
}
