"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { type ClientProject } from "@/lib/data";

function AnimatedImage({
  alt,
  src,
  ratio,
}: {
  alt: string;
  src: string;
  ratio: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div
      ref={ref}
      className="relative w-full rounded-xl overflow-hidden bg-zinc-50 border border-zinc-200/50 shadow-[0_20px_40px_rgba(0,0,0,0.02),0_1px_3px_rgba(0,0,0,0.01)]"
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 bg-zinc-100 animate-pulse" style={{ opacity: isLoading ? 1 : 0, transition: "opacity 0.5s ease" }} />
      <img
        alt={alt}
        src={imgSrc}
        className={`size-full object-cover transition-all duration-1000 ease-[0.16,1,0.3,1] ${
          isInView && !isLoading ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
        }`}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        onError={() =>
          setImgSrc(
            `https://placehold.co/800x450/ebeaff/2019fe?text=${encodeURIComponent(
              alt
            )}`
          )
        }
      />
    </div>
  );
}

export function WorkDetailClient({ client }: { client: ClientProject }) {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-zinc-200">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-20"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors group"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-zinc-200 group-hover:border-zinc-300 shadow-sm transition-all group-hover:-translate-x-1">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Home
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-24"
        >
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="text-zinc-900 font-medium text-sm tracking-wider uppercase mb-4">
              {client.title}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-zinc-950 mb-6 tracking-tight">
              {client.websiteName}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-lg leading-relaxed">
              {client.websiteDescription}
            </p>
            <a
              href={client.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-950/10 transition-all active:scale-[0.98]"
            >
              Visit Live Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 shadow-[0_20px_40px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] border border-zinc-200/60 relative">
              <img
                src={client.image}
                alt={client.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-900">
              Gallery
            </h2>
            <div className="flex-1 h-px bg-zinc-200"></div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {client.screenshots.map((shot, index) => (
              <AnimatedImage
                key={`${client.id}-${index}`}
                alt={shot.alt}
                src={shot.src}
                ratio={shot.ratio}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
