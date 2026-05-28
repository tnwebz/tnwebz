"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

import Link from "next/link";
import { clients, type ClientProject } from "@/lib/data";

/* ──────────────────────────────────────────────
   Animated Image (lazy reveal on scroll)
   ────────────────────────────────────────────── */

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
  const isInView = useInView(ref, { once: true });
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div
      ref={ref}
      className="bg-slate-100 relative w-full rounded-lg border border-slate-200 overflow-hidden"
      style={{ aspectRatio: ratio }}
    >
      <img
        alt={alt}
        src={imgSrc}
        className={`size-full rounded-lg object-cover opacity-0 transition-all duration-1000 ease-in-out ${
          isInView && !isLoading ? "opacity-100" : ""
        }`}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        onError={() => setImgSrc(`https://placehold.co/800x450/ebeaff/2019fe?text=${encodeURIComponent(alt)}`)}
      />
    </div>
  );
}

/* ──────────────────────────────────────────────
   Main Export
   ────────────────────────────────────────────── */

export function WorksSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <p className="text-[#2019fe] font-medium text-sm tracking-wider uppercase">
              Portfolio
            </p>
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl text-zinc-900">
              Our Clients Experience
            </h2>
            <p className="max-w-lg text-zinc-600">
              Discover how we help businesses build exceptional digital
              experiences. Each project tells a unique success story.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {clients.map((client) => (
              <CarouselItem
                key={client.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <div className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={client.image}
                      alt={client.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/800x600/ebeaff/2019fe?text=${encodeURIComponent(client.websiteName)}`;
                        e.currentTarget.onerror = null;
                      }}
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {client.title}
                      </div>
                      <div className="mb-8 line-clamp-2 text-white/80 md:mb-12 lg:mb-9">
                        {client.description}
                      </div>
                      <Link
                        href={`/work/${client.id}`}
                        className="flex items-center text-sm font-medium text-white hover:text-[#a8a5ff] transition-colors cursor-pointer"
                      >
                        View Works{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {clients.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#2019fe]" : "bg-[#2019fe]/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>


    </section>
  );
}
