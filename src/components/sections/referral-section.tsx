"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Gift,
  ChevronDown,
  Send,
  Sparkles,
  ShieldCheck,
  Share2,
  X,
} from "lucide-react";

export const ReferralSection: React.FC = () => {
  // Form visibility state
  const [showForm, setShowForm] = useState(false);

  // Form State
  const [referrerName, setReferrerName] = useState("");
  const [referrerPhone, setReferrerPhone] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  // Accordion toggle for rules
  const [showRules, setShowRules] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!referrerName || !referrerPhone || !clientName || !clientContact) {
      alert("Please fill in all required fields.");
      return;
    }

    const message =
      `*🚀 NEW REFERRAL SUBMISSION (10% Commission Program)*\n\n` +
      `*👤 Referrer Details (Your Info):*\n` +
      `• *Name:* ${referrerName.trim()}\n` +
      `• *Phone/WhatsApp:* ${referrerPhone.trim()}\n\n` +
      `*🤝 Referred Person Details:*\n` +
      `• *Client Name:* ${clientName.trim()}\n` +
      `• *Phone/Email:* ${clientContact.trim()}\n` +
      `• *Project Notes:* ${projectDetails.trim() || "N/A"}\n\n` +
      `---\n*Sent from TNWebz Refer & Earn Portal*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918608113558?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="refer-and-earn"
      className="relative py-20 px-4 md:px-8 lg:px-12 bg-slate-50/80 border-t border-slate-200/80 overflow-hidden"
    >
      {/* Background Soft Atmospheric Red Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-red-800 text-xs md:text-sm font-semibold tracking-wide uppercase shadow-xs">
            <Gift className="w-4 h-4 text-red-600 animate-pulse" />
            <span>Refer & Earn Program</span>
            <span className="bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full">
              10% REWARD
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Refer a Project, <span className="text-red-600">Earn 10%</span>{" "}
            Commission
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Know a business or individual looking for a high-converting website,
            web app, or mobile app? Refer them to TNWebz and receive a{" "}
            <strong className="text-slate-900 font-semibold">10% cash payout</strong>{" "}
            upon successful project payment.
          </p>

          {/* Big Red Trigger Button */}
          {!showForm && (
            <div className="pt-4 flex justify-center">
              <Button
                type="button"
                size="lg"
                onClick={() => setShowForm(true)}
                className="h-16 px-10 text-xl font-extrabold text-white bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-700 hover:to-red-600 shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 transition-all flex items-center justify-center gap-3 rounded-2xl cursor-pointer hover:scale-105 active:scale-95"
              >
                <Gift className="w-7 h-7" />
                <span>Refer and Earn 10%</span>
              </Button>
            </div>
          )}
        </div>

        {/* Main Referral Form Card (Shown on clicking the Big Red Button) */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/40 relative">
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Gift className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-slate-900">
                      Submit Your Referral
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                    aria-label="Close Form"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Section 1: Referrer Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <Share2 className="w-5 h-5 text-red-600" />
                      <h4 className="text-lg font-bold text-slate-900">
                        1. Your Information (The Referrer)
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="referrerName" className="text-slate-700 font-medium">
                          Your Full Name <span className="text-red-600">*</span>
                        </Label>
                        <Input
                          id="referrerName"
                          type="text"
                          placeholder="e.g. John Doe"
                          value={referrerName}
                          onChange={(e) => setReferrerName(e.target.value)}
                          required
                          className="bg-slate-50/50 border-slate-200 focus:bg-white focus:border-red-500 transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="referrerPhone" className="text-slate-700 font-medium">
                          Your WhatsApp / Phone Number <span className="text-red-600">*</span>
                        </Label>
                        <Input
                          id="referrerPhone"
                          type="tel"
                          placeholder="e.g. +91 98765 43210"
                          value={referrerPhone}
                          onChange={(e) => setReferrerPhone(e.target.value)}
                          required
                          className="bg-slate-50/50 border-slate-200 focus:bg-white focus:border-red-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Referred Person Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <Sparkles className="w-5 h-5 text-red-600" />
                      <h4 className="text-lg font-bold text-slate-900">
                        2. Referred Person / Client Information
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="clientName" className="text-slate-700 font-medium">
                          Client / Business Name <span className="text-red-600">*</span>
                        </Label>
                        <Input
                          id="clientName"
                          type="text"
                          placeholder="e.g. Alex Smith / Acme Corp"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          required
                          className="bg-slate-50/50 border-slate-200 focus:bg-white focus:border-red-500 transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="clientContact" className="text-slate-700 font-medium">
                          Client Phone / Email <span className="text-red-600">*</span>
                        </Label>
                        <Input
                          id="clientContact"
                          type="text"
                          placeholder="e.g. +91 91234 56789 or client@email.com"
                          value={clientContact}
                          onChange={(e) => setClientContact(e.target.value)}
                          required
                          className="bg-slate-50/50 border-slate-200 focus:bg-white focus:border-red-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <Label htmlFor="projectDetails" className="text-slate-700 font-medium">
                        Project Details / Requirements <span className="text-slate-400 font-normal">(Optional)</span>
                      </Label>
                      <Textarea
                        id="projectDetails"
                        placeholder="Tell us a little bit about what project they need (e.g. E-Commerce Website, Mobile App, Local Business Redesign...)"
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        rows={3}
                        className="bg-slate-50/50 border-slate-200 focus:bg-white focus:border-red-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 space-y-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-13 text-base font-bold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35 transition-all flex items-center justify-center gap-2 rounded-xl cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      <span>Submit Referral via WhatsApp</span>
                    </Button>
                    <p className="text-center text-xs text-slate-500">
                      Clicking submit opens WhatsApp with your pre-filled referral details directly to TNWebz.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pure Text Rules Section with Dropdown Toggle */}
        <div className="pt-2 space-y-4">
          <button
            type="button"
            onClick={() => setShowRules((prev) => !prev)}
            className="inline-flex items-center gap-2 text-slate-900 hover:text-red-600 font-bold transition-colors cursor-pointer text-lg md:text-xl group"
            aria-expanded={showRules}
          >
            <ShieldCheck className="w-5 h-5 text-red-600" />
            <span>Rules & Program Details</span>
            <motion.div
              animate={{ rotate: showRules ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-red-600 transition-colors" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showRules && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="pt-2 pl-2 md:pl-4 space-y-3 text-slate-700 text-base md:text-lg leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="font-bold text-red-600 shrink-0">1.</span>
                    <span>Fill the referring person detail.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="font-bold text-red-600 shrink-0">2.</span>
                    <span>
                      Once the referred person is confirmed for project,{" "}
                      <strong className="font-bold text-slate-900">CONFIRMATION</strong> msg will send to your WhatsApp.
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="font-bold text-red-600 shrink-0">3.</span>
                    <span>
                      Once they <strong className="font-bold text-slate-900">PAID</strong>, your 10% amount will be transferred to you.
                    </span>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
