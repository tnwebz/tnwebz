"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 sm:px-8 lg:px-14",
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm border-b border-zinc-200/50"
          : "bg-white/20 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <a href="/" className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
            tnwebz
          </a>

          {/* Desktop nav - aligned right next to button or centered */}
          <nav className="hidden items-center justify-center gap-10 text-base text-zinc-600 md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-black font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="shrink-0 border border-black px-5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white sm:px-8 sm:py-3 sm:text-base sm:tracking-[0.18em]"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile nav */}
        <nav className="flex gap-4 overflow-x-auto text-sm sm:text-base text-zinc-600 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap hover:text-black font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
