// src/components/TargetedLandingPage.tsx
'use client';

import { motion } from 'framer-motion';

interface LandingPageProps {
  cityName: string;
  copy: {
    service: string;
    painPoint: string;
    description: string;
    features: string[];
  };
}

export default function TargetedLandingPage({ cityName, copy }: LandingPageProps) {
  // JSON-LD Schema for Local SEO Injection
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TNWebz Digital Studio",
    "image": "https://www.tnwebz.com/logo.png",
    "description": copy.description,
    "areaServed": {
      "@type": "City",
      "name": cityName
    },
    "serviceArea": {
      "@type": "Place",
      "name": cityName
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-24 px-6 md:px-12 lg:px-24">
      {/* Invisible SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto space-y-16">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Website Design & App Development Studio in <span className="text-blue-600">{cityName}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Are you losing revenue due to {copy.painPoint}? {copy.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {copy.features.map((feature, idx) => (
              <span key={idx} className="px-4 py-2 bg-slate-200 text-slate-800 rounded-full text-sm font-medium">
                {feature}
              </span>
            ))}
          </div>

          <button className="mt-8 px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-lg">
            Book a Free Technical Consultation
          </button>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-200 aspect-video flex items-center justify-center"
        >
          {/* Replace with actual Next/Image in production */}
          <p className="text-slate-500 font-medium">[ Portfolio Mockup Rendering Here ]</p>
        </motion.section>
      </div>
    </main>
  );
}
