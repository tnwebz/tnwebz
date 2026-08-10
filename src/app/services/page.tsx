// src/app/services/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/seo-utils";

export const metadata: Metadata = {
  title: "Website & App Development Services",
  description:
    "Explore the full range of website and app development services offered by TNWebz in Chennai. From business websites and e-commerce to mobile apps and website maintenance.",
  alternates: {
    canonical: "https://tnwebz.com/services",
  },
  openGraph: {
    title: "Website & App Development Services | TNWebz",
    description:
      "Explore the full range of website and app development services offered by TNWebz in Chennai.",
    url: "https://tnwebz.com/services",
    siteName: "TNWebz",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website & App Development Services | TNWebz",
    description:
      "Explore the full range of website and app development services offered by TNWebz in Chennai.",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://tnwebz.com" },
  { name: "Services", url: "https://tnwebz.com/services" },
]);

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-28 md:pt-36">
        <nav aria-label="Breadcrumb" className="text-sm text-zinc-500 mb-8">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-zinc-900 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-zinc-300">
              /
            </li>
            <li className="text-zinc-900 font-medium">Services</li>
          </ol>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-16">
        <p className="text-zinc-600 text-sm font-medium uppercase tracking-wider mb-4">
          Our Services
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 mb-6 tracking-tight max-w-3xl">
          Website & App Development Services
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
          We help businesses in Chennai and surrounding areas build their digital
          presence. From custom websites and e-commerce stores to web
          applications and mobile apps — we deliver solutions that work for your
          business.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white border border-zinc-200/80 rounded-xl p-8 hover:border-zinc-400 hover:shadow-[0_20px_40px_rgba(0,0,0,0.02),0_1px_3px_rgba(0,0,0,0.01)] transition-all"
            >
              <h2 className="text-xl font-medium text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors">
                {service.name}
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {service.heroDescription}
              </p>
              <span className="text-sm text-zinc-500 flex items-center gap-1 font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20 border-t border-zinc-200/60 text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 mb-4">
          Not Sure What You Need?
        </h2>
        <p className="text-zinc-600 max-w-lg mx-auto mb-8">
          Tell us about your project and we&apos;ll recommend the right approach.
          No commitment required.
        </p>
        <a
          href="https://wa.me/918608113558"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-zinc-950 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-zinc-800 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
        >
          <svg
            className="h-5 w-5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          Let&apos;s Talk on WhatsApp
        </a>
      </section>
    </main>
  );
}
