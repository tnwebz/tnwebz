"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 sm:px-8 lg:py-6 lg:px-16",
        isScrolled || isMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-zinc-200/50"
          : "bg-white/20 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex flex-col">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-black">
            <Image src="/icon.svg" alt="TNWebz Logo" width={36} height={36} className="object-contain" />
            tnwebz
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center justify-center gap-10 text-sm text-zinc-600 md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
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

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col gap-4 text-base font-medium text-zinc-600 md:hidden pb-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-black block"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
