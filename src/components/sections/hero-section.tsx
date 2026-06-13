"use client";

import { motion, Variants } from "framer-motion";
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
    text: "Tamil Nadu, India",
    href: "#",
  },
];

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineReveal: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2 + i * 0.12,
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
      }),
    );
  }, []);

  return (
    <section className="relative min-h-[90dvh] lg:min-h-[100dvh] overflow-hidden bg-[#f5f5f3]">
      {/* ─── MOBILE VIEW (Preserved from original) ─── */}
      <div className="relative z-10 flex min-h-[90dvh] lg:min-h-[100dvh] flex-col lg:hidden">
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
                  <motion.span
                    custom={i}
                    variants={lineReveal}
                    className="block"
                  >
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
                href="https://wa.me/918608113558"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-zinc-950 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-zinc-800 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 sm:px-8 sm:py-4 sm:text-base"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
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
                  <motion.span
                    custom={i}
                    variants={lineReveal}
                    className="block"
                  >
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
          ></motion.div>

          {/* Bottom Center / Right Text Block */}
          <motion.div
            className="absolute bottom-12 right-0 w-[45%] flex flex-col gap-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-xl leading-relaxed text-zinc-800 font-medium max-w-lg">
              We craft premium digital experiences that help businesses grow.
              From stunning websites to powerful applications — your vision, our
              expertise, delivered with precision.
            </p>
            <p className="text-lg leading-relaxed text-zinc-500 max-w-lg">
              Creativity begins where meaning ends. When logic steps back, form
              takes control. What remains is pure visual intent.
            </p>
            <div className="mt-4">
              <a
                href="https://wa.me/918608113558"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-zinc-950 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-zinc-800"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
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
