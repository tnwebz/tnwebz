"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X, Shield, ShieldCheck } from "lucide-react";
import { useAdmin } from "@/lib/AdminContext";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
  { href: "#refer-and-earn", label: "Refer & Earn" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isAdmin, toggleAdmin } = useAdmin();
  const [clickCount, setClickCount] = useState(0);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Password modal state
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShieldClick = () => {
    setClickCount((prev) => prev + 1);

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    clickTimeoutRef.current = setTimeout(() => {
      setClickCount(0);
    }, 1000); // reset count after 1s
  };

  useEffect(() => {
    if (!isAdmin && clickCount >= 3) {
      setClickCount(0);
      setShowPasswordModal(true);
      setPasswordError("");
      setPasswordInput("");
    } else if (isAdmin && clickCount >= 2) {
      toggleAdmin();
      setClickCount(0);
    }
  }, [clickCount, isAdmin, toggleAdmin]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "777") {
      toggleAdmin();
      setShowPasswordModal(false);
      setPasswordInput("");
    } else {
      setPasswordError("Incorrect password!");
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 sm:px-8 lg:py-6 lg:px-16",
          isScrolled || isMenuOpen
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-zinc-200/50"
            : "bg-white/20 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Desktop Shield */}
              <button
                onClick={handleShieldClick}
                className="hidden md:flex items-center justify-center text-zinc-400 hover:text-zinc-600 transition-colors"
                aria-label="Toggle Mode"
              >
                {isAdmin ? (
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                ) : (
                  <Shield className="h-5 w-5" />
                )}
              </button>
              <a
                href="/"
                className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-black"
              >
                <Image
                  src="/icon.svg"
                  alt="TNWebz Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
                TNWebz
              </a>
            </div>

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
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
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
              {/* Mobile Shield */}
              <button
                onClick={handleShieldClick}
                className="flex items-center justify-start text-zinc-400 hover:text-zinc-600 transition-colors pt-2 border-t border-zinc-100"
                aria-label="Toggle Mode"
              >
                {isAdmin ? (
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                ) : (
                  <Shield className="h-5 w-5" />
                )}
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowPasswordModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-6">
              <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Admin Access</h3>
              <p className="text-sm text-zinc-500 mt-1">
                Please enter the security PIN to continue.
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                autoFocus
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setPasswordError("");
                }}
                placeholder="Enter PIN"
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all mb-2 font-mono text-center tracking-widest text-lg"
              />
              {passwordError && (
                <p className="text-sm text-red-500 mb-4">{passwordError}</p>
              )}
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-zinc-200 text-zinc-700 font-medium hover:bg-zinc-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-black text-white font-medium hover:bg-zinc-800 transition-colors"
                >
                  Unlock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
