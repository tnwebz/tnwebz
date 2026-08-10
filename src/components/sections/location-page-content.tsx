// src/components/sections/location-page-content.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export interface LocationPageData {
  cityName: string;
  slug: string;
  title: string;
  h1: string;
  introduction: string;
  servicesIntro: string;
  businessTypes: { type: string; description: string }[];
  whyWebsite: string;
  nearbyAreas: { name: string; slug: string }[];
  faqs: { question: string; answer: string }[];
}

export function LocationPageContent({ data }: { data: LocationPageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f5f5f3]">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-28 md:pt-36">
        <nav aria-label="Breadcrumb" className="text-sm text-zinc-500 mb-8">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-zinc-900 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-zinc-300">
              /
            </li>
            <li>
              <Link
                href="/locations/chennai"
                className="hover:text-zinc-900 transition-colors"
              >
                Locations
              </Link>
            </li>
            <li aria-hidden="true" className="text-zinc-300">
              /
            </li>
            <li className="text-zinc-900 font-medium">{data.cityName}</li>
          </ol>
        </nav>
      </div>

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-6xl mx-auto px-4 sm:px-8 pb-16"
      >
        <motion.p
          variants={fadeUp}
          className="text-zinc-600 text-sm font-medium uppercase tracking-wider mb-4"
        >
          Website Development in {data.cityName}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 mb-6 tracking-tight max-w-3xl"
        >
          {data.h1}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg text-zinc-600 max-w-2xl leading-relaxed"
        >
          {data.introduction}
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-8">
          <a
            href="https://wa.me/918608113558"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-zinc-950 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-zinc-800 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.section>

      {/* Services in Location */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-t border-zinc-200/60">
        <h2 className="text-2xl font-medium text-zinc-900 mb-6">
          Website Development Services in {data.cityName}
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-8 max-w-3xl">
          {data.servicesIntro}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: "Website Development",
              slug: "website-development",
              desc: "Custom websites built for your business",
            },
            {
              name: "Business Websites",
              slug: "business-website-development",
              desc: "Professional websites for local businesses",
            },
            {
              name: "E-commerce",
              slug: "ecommerce-development",
              desc: "Online stores to sell your products",
            },
            {
              name: "Web Applications",
              slug: "web-application-development",
              desc: "Custom tools and dashboards",
            },
            {
              name: "Mobile Apps",
              slug: "mobile-app-development",
              desc: "Android and iOS applications",
            },
            {
              name: "Website Redesign",
              slug: "website-redesign",
              desc: "Modernize your existing website",
            },
          ].map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white border border-zinc-200/80 rounded-xl p-5 hover:border-zinc-400 transition-all"
            >
              <h3 className="text-zinc-900 font-medium mb-1 text-sm">
                {service.name}
              </h3>
              <p className="text-zinc-500 text-xs mb-2">{service.desc}</p>
              <span className="text-xs text-zinc-400 flex items-center gap-1 group-hover:text-zinc-600 transition-colors">
                Learn more
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Business Types */}
      {data.businessTypes.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-t border-zinc-200/60">
          <h2 className="text-2xl font-medium text-zinc-900 mb-8">
            Websites for Businesses in {data.cityName}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {data.businessTypes.map((bt, i) => (
              <div key={i} className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
                </span>
                <div>
                  <h3 className="text-zinc-900 font-medium text-sm mb-1">
                    {bt.type}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {bt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Why Your Business Needs a Website */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-t border-zinc-200/60">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-medium text-zinc-900">
              Why Choose TNWebz
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-zinc-600 leading-relaxed">{data.whyWebsite}</p>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-t border-zinc-200/60">
        <h2 className="text-2xl font-medium text-zinc-900 mb-8">
          Our Development Process
        </h2>
        <div className="space-y-6">
          {[
            {
              step: "Discovery",
              desc: "We discuss your business, goals, and what you need from your website.",
            },
            {
              step: "Design",
              desc: "We create designs that reflect your brand and appeal to your target audience.",
            },
            {
              step: "Development",
              desc: "We build your website with clean code, fast performance, and mobile responsiveness.",
            },
            {
              step: "Launch & Support",
              desc: "We launch your website and provide ongoing support to keep it running smoothly.",
            },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {i + 1}
                </span>
                {i < 3 && (
                  <span className="w-px flex-1 bg-zinc-200 mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-zinc-900 mb-1">
                  {step.step}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-t border-zinc-200/60">
          <h2 className="text-2xl font-medium text-zinc-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-zinc-200/80 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-zinc-900 font-medium text-sm pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Nearby Areas */}
      {data.nearbyAreas.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-t border-zinc-200/60">
          <h2 className="text-2xl font-medium text-zinc-900 mb-8">
            Nearby Areas We Serve
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-full text-sm hover:border-zinc-400 hover:text-zinc-900 transition-all"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-t border-zinc-200/60">
        <h2 className="text-2xl font-medium text-zinc-900 mb-8">
          Our Services
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            { name: "Website Development", slug: "website-development" },
            {
              name: "Business Website Development",
              slug: "business-website-development",
            },
            { name: "E-commerce Development", slug: "ecommerce-development" },
            { name: "Mobile App Development", slug: "mobile-app-development" },
            { name: "Website Redesign", slug: "website-redesign" },
            { name: "Website Maintenance", slug: "website-maintenance" },
          ].map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-full text-sm hover:border-zinc-400 hover:text-zinc-900 transition-all"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20 border-t border-zinc-200/60 text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 mb-4">
          Start Your Project in {data.cityName}
        </h2>
        <p className="text-zinc-600 max-w-lg mx-auto mb-8">
          Tell us about your project and we&apos;ll get back to you with a plan.
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
