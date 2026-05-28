"use client";

import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Headphones, Globe, TrendingUp } from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  showGraph?: boolean;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: <Headphones className="h-6 w-6 sm:h-7 sm:w-7 text-[#2019fe]" />,
    title: "Lifetime Support",
    description: "24/7 dedicated assistance for your digital product",
  },
  {
    icon: <Globe className="h-6 w-6 sm:h-7 sm:w-7 text-[#2019fe]" />,
    title: "Free Domain & Hosting",
    description: "Lifetime domain and hosting included at no extra cost",
  },
  {
    icon: <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-500" />,
    title: "Growth Rate",
    description: "Proven track record of boosting client businesses",
    showGraph: true,
  },
];

const CARD_SIZES = [
  "h-[180px] w-[140px] sm:h-[240px] sm:w-[185px] lg:h-[320px] lg:w-[240px]",
  "h-[150px] w-[115px] sm:h-[200px] sm:w-[155px] lg:h-[270px] lg:w-[200px]",
  "h-[130px] w-[100px] sm:h-[175px] sm:w-[135px] lg:h-[235px] lg:w-[175px]",
] as const;

const SUBTEXT =
  "We build premium digital experiences that help businesses grow. From stunning websites to powerful apps — your vision, our code.";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

function useTypewriter(text: string, speed = 26) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        setDone(true);
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, speed]);

  return { displayed, done };
}

function GrowthGraph() {
  return (
    <svg
      viewBox="0 0 120 40"
      className="w-full h-10 sm:h-12 lg:h-14 mt-1"
      fill="none"
    >
      <defs>
        <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0 35 Q10 33 20 30 T40 25 T60 18 T80 12 T100 7 T120 2"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
      />
      <motion.path
        d="M0 35 Q10 33 20 30 T40 25 T60 18 T80 12 T100 7 T120 2 V40 H0 Z"
        fill="url(#graphGrad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      />
      <motion.circle
        cx="120"
        cy="2"
        r="3"
        fill="#10b981"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 2.5 }}
      />
    </svg>
  );
}

function BuildYourHeadline() {
  return (
    <motion.h1
      className="font-heading text-[clamp(2.25rem,11vw,5.5rem)] font-normal leading-[0.95] tracking-tight text-black"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0, 1, 1, 0.4, 1],
        y: [20, 0, 0, 0, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeInOut",
      }}
    >
      Build your
    </motion.h1>
  );
}

function DigitalPresenceHeadline() {
  return (
    <motion.span
      className="font-heading text-[clamp(2rem,9vw,4.75rem)] font-normal leading-[0.9] tracking-tight text-black"
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: [0, 1, 1, 0.4, 1],
        y: [16, 0, 0, 0, 0],
      }}
      transition={{
        duration: 5,
        delay: 0.35,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeInOut",
      }}
    >
      digital presence
    </motion.span>
  );
}

function TypewriterBlock() {
  const { displayed, done } = useTypewriter(SUBTEXT, 26);

  return (
    <div className="mt-5 flex flex-col gap-4 sm:mt-6 md:mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-10">
      <p className="max-w-full text-sm leading-relaxed text-zinc-600 sm:max-w-md sm:text-[15px]">
        {displayed}
        <span
          className={`ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-zinc-400 ${
            done ? "animate-blink" : ""
          }`}
          aria-hidden="true"
        />
      </p>
      <div className="lg:pt-[0.2em]">
        <DigitalPresenceHeadline />
      </div>
    </div>
  );
}

function FeatureCardGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex w-full max-w-full items-end justify-center gap-2 sm:items-center sm:gap-3 md:gap-4 lg:gap-5">
      {FEATURE_CARDS.map((card, index) => (
        <motion.button
          key={card.title}
          type="button"
          onClick={() => setActiveIndex(index)}
          className={`relative shrink-0 overflow-hidden rounded-2xl bg-white flex flex-col items-center justify-center p-3 sm:p-4 lg:p-5 text-center transition-shadow ${CARD_SIZES[index]} ${
            activeIndex === index
              ? "ring-2 ring-[#2019fe]/40 ring-offset-1 ring-offset-transparent sm:ring-offset-2 shadow-xl shadow-[#2019fe]/10"
              : "ring-1 ring-black/8 shadow-md shadow-black/5"
          }`}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
          aria-label={card.title}
          aria-pressed={activeIndex === index}
        >
          <div className="mb-2 sm:mb-3 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-50 border border-slate-100">
            {card.icon}
          </div>
          <h3 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-zinc-900 mb-1 leading-tight">
            {card.title}
          </h3>
          <p className="text-[8px] sm:text-[10px] lg:text-xs text-zinc-500 leading-snug hidden sm:block">
            {card.description}
          </p>
          {card.showGraph && <GrowthGraph />}
        </motion.button>
      ))}
    </div>
  );
}

export function HeroSection() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-white">
      <div className="relative z-10 flex min-h-[100dvh] flex-col px-4 py-5 sm:px-8 sm:py-6 lg:px-14">
        {/* Header */}
        <header className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <a
              href="/"
              className="text-lg sm:text-xl font-bold tracking-tight"
            >
              <span className="text-black">tn</span>
              <span className="text-[#2019fe]">webz</span>
            </a>
            <a
              href="#contact"
              className="shrink-0 border border-black px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.18em]"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile nav */}
          <nav className="flex gap-4 overflow-x-auto pb-1 text-[10px] text-zinc-600 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 whitespace-nowrap hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop nav */}
          <nav className="hidden items-center justify-center gap-8 text-xs text-zinc-600 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-8 py-6 sm:gap-10 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-16">
          <div className="flex w-full flex-col justify-center lg:max-w-[48%]">
            <BuildYourHeadline />
            <TypewriterBlock />
          </div>

          <div className="flex w-full flex-1 items-center justify-center lg:justify-end">
            <FeatureCardGallery />
          </div>
        </div>

        {/* Footer Bar */}
        <footer className="flex flex-col gap-4 pb-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="text-[10px] leading-relaxed text-zinc-500 sm:text-[11px]">
            <p>{today}</p>
            <p className="mt-1 text-black">Creative direction</p>
          </div>
          <div className="flex gap-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black sm:gap-6 sm:text-[11px] sm:tracking-[0.15em]">
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60"
            >
              Behance
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60"
            >
              Instagram
            </a>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
}
