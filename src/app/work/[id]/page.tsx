import { Metadata } from "next";
import { clients } from "@/lib/data";
import { notFound } from "next/navigation";
import { WorkDetailClient } from "@/components/sections/work-detail-client";
import { generateCreativeWorkSchema, generateBreadcrumbSchema } from "@/lib/seo-utils";

export async function generateStaticParams() {
  return clients.map((client) => ({
    id: client.id,
  }));
}

// SEO metadata for each portfolio project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const client = clients.find((c) => c.id === id);
  if (!client) return { title: "Project Not Found" };

  return {
    title: `${client.websiteName} — Website Project by TNWebz`,
    description: `${client.websiteDescription} View this website development project by TNWebz, a web development studio in Chennai.`,
    alternates: {
      canonical: `https://tnwebz.com/work/${client.id}`,
    },
    openGraph: {
      title: `${client.websiteName} — Website Project by TNWebz`,
      description: client.websiteDescription,
      url: `https://tnwebz.com/work/${client.id}`,
      siteName: "TNWebz",
      locale: "en_IN",
      type: "article",
      images: client.image
        ? [
            {
              url: `https://tnwebz.com${client.image}`,
              alt: `${client.websiteName} website screenshot`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${client.websiteName} — Website Project by TNWebz`,
      description: client.websiteDescription,
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = clients.find((c) => c.id === id);

  if (!client) {
    notFound();
  }

  // Structured data for the portfolio project
  const creativeWorkSchema = generateCreativeWorkSchema({
    name: client.websiteName,
    description: client.websiteDescription,
    url: `https://tnwebz.com/work/${client.id}`,
    projectUrl: client.websiteUrl,
    image: `https://tnwebz.com${client.image}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://tnwebz.com" },
    { name: "Portfolio", url: "https://tnwebz.com/#portfolio" },
    { name: client.websiteName, url: `https://tnwebz.com/work/${client.id}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([creativeWorkSchema, breadcrumbSchema]),
        }}
      />
      <WorkDetailClient client={client} />
    </>
  );
}

