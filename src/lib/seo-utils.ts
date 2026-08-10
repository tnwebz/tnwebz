// src/lib/seo-utils.ts
// SEO utility functions for TNWebz

import { SITE_CONFIG } from "./seo-config";

/**
 * Generate BreadcrumbList JSON-LD structured data
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQPage JSON-LD structured data
 */
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Service JSON-LD structured data
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "ProfessionalService",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
    },
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
    },
  };
}

/**
 * Generate ProfessionalService JSON-LD for location pages
 */
export function generateLocalServiceSchema(location: {
  cityName: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.name,
    url: `${SITE_CONFIG.url}/locations/${location.slug}`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    description: location.description,
    areaServed: {
      "@type": "City",
      name: location.cityName,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    serviceType: [
      "Website Development",
      "Business Website Development",
      "E-commerce Website Development",
      "Web Application Development",
      "Mobile App Development",
      "Website Redesign",
      "Website Maintenance",
    ],
  };
}

/**
 * Generate CreativeWork JSON-LD for portfolio pages
 */
export function generateCreativeWorkSchema(project: {
  name: string;
  description: string;
  url: string;
  projectUrl: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: project.url,
    image: project.image,
    creator: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}
