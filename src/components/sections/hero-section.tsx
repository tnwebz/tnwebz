"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const contactItems = [
  {
    icon: <Phone className="h-5 w-5" />,
    text: "+91 8608113558",
    href: "tel:+918608113558",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    text: "tnwebzz@gmail.com",
    href: "mailto:tnwebzz@gmail.com",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    text: "Thoothukudi, Tamil Nadu, India",
    href: "#",
  },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineReveal = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2 + (i * 0.12)
    },
  }),
};

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
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f5f5f3]">
      {/* ─── MOBILE VIEW (Preserved from original) ─── */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col lg:hidden">
        <div className="flex flex-1 flex-col">
          <motion.div
            className="flex w-full flex-col justify-center px-6 pt-28 pb-10 sm:px-10 sm:pt-32 md:pt-36"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Heading */}
            <h1
              className="font-black uppercase leading-[0.92] tracking-tight text-zinc-950 flex flex-col"
              style={{
                fontSize: "clamp(2.6rem, 7.5vw, 5.2rem)",
                fontFamily: "'Inter', 'Arial Black', sans-serif",
              }}
            >
              {["Build Your", "Website", "As You", "Like"].map((line, i) => (
                <span key={i} className="block overflow-hidden pb-1">
                  <motion.span custom={i} variants={lineReveal} className="block">
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-zinc-500 sm:text-base md:mt-8"
            >
              We craft premium digital experiences that help businesses grow.
              From stunning websites to powerful applications — your vision, our
              expertise, delivered with precision.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeUp} className="mt-8 md:mt-10">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-3 rounded-full bg-zinc-950 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-zinc-800 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 sm:px-8 sm:py-4 sm:text-base"
              >
                <span className="flex h-3 w-3 items-center justify-center rounded-full border-2 border-white/60 transition-colors group-hover:border-white" />
                Let&apos;s Talk
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-col gap-4 pl-6 sm:pl-10 md:mt-14"
            >
              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  variants={fadeUp}
                  className="group flex items-center gap-3 text-zinc-700 transition-colors hover:text-zinc-950"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium sm:text-base">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ─── DESKTOP VIEW (New layout matching reference) ─── */}
      <div className="relative z-10 hidden lg:flex min-h-[100dvh] w-full flex-col px-12 py-12 xl:px-16 xl:py-16">
        


        {/* Main Content Area */}
        <div className="flex-1 relative w-full mt-16">
          
          {/* Main Heading (Left Center) */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-3/5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <h1
              className="font-serif text-zinc-900 flex flex-col"
              style={{
                fontSize: "clamp(6rem, 8.5vw, 10rem)",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
                fontWeight: 500,
              }}
            >
              {["Build Your", "Website", "As You Like"].map((line, i) => (
                <span key={i} className="block overflow-hidden pb-2 pt-1">
                  <motion.span custom={i} variants={lineReveal} className="block">
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Floating Middle Right Elements (Socials / Contact) */}
          <motion.div
            className="absolute right-0 top-[40%] -translate-y-1/2 flex gap-8 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <a href="mailto:tnwebzz@gmail.com" className="hover:text-zinc-900 transition-colors">Email</a>
            <a href="tel:+918608113558" className="hover:text-zinc-900 transition-colors">Call</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Location</a>
          </motion.div>

          {/* Bottom Center / Right Text Block */}
          <motion.div
            className="absolute bottom-12 right-0 w-[45%] flex flex-col gap-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-xl leading-relaxed text-zinc-800 font-medium max-w-lg">
              We craft premium digital experiences that help businesses grow. From stunning websites to powerful applications — your vision, our expertise, delivered with precision.
            </p>
            <p className="text-lg leading-relaxed text-zinc-500 max-w-lg">
              Creativity begins where meaning ends. When logic steps back, form takes control. What remains is pure visual intent.
            </p>
            <div className="mt-4">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-3 rounded-full bg-zinc-950 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-zinc-800"
              >
                <span className="flex h-3 w-3 items-center justify-center rounded-full border-2 border-white/60 transition-colors group-hover:border-white" />
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Corners (MICRORITM) */}
        <div className="w-full flex justify-between items-end mt-12">
          <motion.div 
            className="text-sm font-medium text-zinc-500 tracking-wide"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Creative direction
          </motion.div>
          
          <motion.div 
            className="text-sm font-medium text-zinc-500 tracking-wide"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {today || "04 February 2026"}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
