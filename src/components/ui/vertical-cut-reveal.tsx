"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface VerticalCutRevealProps {
  children: string;
  splitBy?: "words" | "characters";
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center";
  reverse?: boolean;
  transition?: Record<string, unknown>;
  className?: string;
}

export function VerticalCutReveal({
  children,
  splitBy = "words",
  staggerDuration = 0.1,
  staggerFrom = "first",
  reverse = false,
  transition = {},
  className,
}: VerticalCutRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const target = ref.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  const items =
    splitBy === "words" ? children.split(" ") : children.split("");

  const getDelay = (index: number) => {
    if (staggerFrom === "center") {
      const center = Math.floor(items.length / 2);
      return Math.abs(index - center) * staggerDuration;
    }
    if (staggerFrom === "last") {
      return (items.length - 1 - index) * staggerDuration;
    }
    return index * staggerDuration;
  };

  if (shouldReduceMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {items.map((item, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{
              y: reverse ? "-100%" : "100%",
              opacity: 0,
            }}
            animate={
              isInView
                ? {
                    y: "0%",
                    opacity: 1,
                  }
                : {
                    y: reverse ? "-100%" : "100%",
                    opacity: 0,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 30,
              delay: getDelay(index),
              ...transition,
            }}
          >
            {item}
            {splitBy === "words" && index < items.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
