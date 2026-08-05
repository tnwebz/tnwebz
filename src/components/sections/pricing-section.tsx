"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import NumberFlow from "@number-flow/react";
import {
  Globe,
  CheckCheck,
  Server,
  Shield,
  Users,
  Palette,
  Search,
  Pencil,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useAdmin } from "@/lib/AdminContext";
import { db } from "@/lib/firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

const defaultPlans = [
  {
    name: "Starter",
    description:
      "Perfect for small businesses and personal brands looking to establish their online presence.",
    price: 3999,
    yearlyPrice: 2999,
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Free Lifetime Domain", icon: <Globe size={20} /> },
      { text: "Free Lifetime Hosting", icon: <Server size={20} /> },
      { text: "SEO Friendly", icon: <Search size={20} /> },
    ],
    includes: [
      "Everything included:",
      "Customized UI",
      "User Friendly Design",
      "Responsive Layout",
    ],
  },
  {
    name: "Professional",
    description:
      "Ideal for growing businesses that need a polished and feature-rich website.",
    price: 14999,
    yearlyPrice: 11999,
    buttonText: "Get Started",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "Free Lifetime Domain", icon: <Globe size={20} /> },
      { text: "SEO Friendly", icon: <Search size={20} /> },
      { text: "Customized UI", icon: <Palette size={20} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "User Friendly Design",
      "Advanced Animations",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced solution with industrial-grade architecture for large-scale applications Starts From.",
    price: 29999,
    yearlyPrice: 23999,
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Industrial Grade", icon: <Shield size={20} /> },
      { text: "Multiple User Handling", icon: <Users size={20} /> },
      { text: "Free Lifetime Domain", icon: <Globe size={20} /> },
    ],
    includes: [
      "Everything in Professional, plus:",
      "SEO Friendly",
      "Customized UI",
      "User Friendly Design",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-50 mx-auto flex w-fit rounded-full bg-neutral-50 border border-gray-200 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "0"
              ? "text-white"
              : "text-zinc-500 hover:text-zinc-900"
          }`}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-red-600/30 border-red-600 bg-gradient-to-t from-red-700 via-red-600 to-red-700"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">One-time</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit sm:h-12 h-8 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "1"
              ? "text-white"
              : "text-zinc-500 hover:text-zinc-900"
          }`}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-red-600/30 border-red-600 bg-gradient-to-t from-red-700 via-red-600 to-red-700"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            With Maintenance
            <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-900 border border-red-200">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export function PricingSection() {
  const { isAdmin } = useAdmin();
  const [plans, setPlans] = useState(defaultPlans);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Professional");
  const pricingRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Admin Edit Modal state
  const [editingPlan, setEditingPlan] = useState<(typeof defaultPlans)[0] | null>(null);
  const [editPrice, setEditPrice] = useState<number>(0);
  const [editYearlyPrice, setEditYearlyPrice] = useState<number>(0);
  const [isSaving, setIsSaving] = useState(false);

  // Sync pricing with Firestore database
  useEffect(() => {
    const docRef = doc(db, "settings", "pricing");
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          if (data.prices) {
            setPlans((prev) =>
              prev.map((plan) => {
                const updated = data.prices[plan.name];
                if (updated) {
                  return {
                    ...plan,
                    price: typeof updated.price === "number" ? updated.price : plan.price,
                    yearlyPrice: typeof updated.yearlyPrice === "number" ? updated.yearlyPrice : plan.yearlyPrice,
                  };
                }
                return plan;
              })
            );
          }
        }
      },
      (error) => {
        console.error("Error fetching pricing from Firestore:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleSavePrice = async () => {
    if (!editingPlan) return;
    setIsSaving(true);

    const priceMap: Record<string, { price: number; yearlyPrice: number }> = {};
    plans.forEach((p) => {
      if (p.name === editingPlan.name) {
        priceMap[p.name] = {
          price: editPrice,
          yearlyPrice: editYearlyPrice,
        };
      } else {
        priceMap[p.name] = {
          price: p.price,
          yearlyPrice: p.yearlyPrice,
        };
      }
    });

    // Optimistically update UI
    setPlans((prev) =>
      prev.map((p) =>
        p.name === editingPlan.name
          ? { ...p, price: editPrice, yearlyPrice: editYearlyPrice }
          : p
      )
    );

    try {
      const docRef = doc(db, "settings", "pricing");
      await setDoc(docRef, { prices: priceMap }, { merge: true });
      setEditingPlan(null);
    } catch (error) {
      console.error("Failed to save price to Firestore:", error);
      alert("Failed to save price change to database.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.scrollWidth / plans.length;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / plans.length;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.35,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <section
      className="w-full px-4 pt-20 pb-16 min-h-screen relative bg-[#f5f5f3]"
      id="pricing"
      ref={pricingRef}
    >
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, transparent 70%)
          `,
          opacity: 0.06,
          mixBlendMode: "multiply",
        }}
      />

      <div className="text-center mb-6 max-w-3xl mx-auto">
        <TimelineContent
          as="h2"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="md:text-6xl sm:text-4xl text-3xl font-medium text-zinc-900 mb-4"
        >
          Plans that work best for your{" "}
          <TimelineContent
            as="span"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="border border-dashed border-zinc-900 px-2 py-1 rounded-xl bg-zinc-200/50 capitalize inline-block"
          >
            business
          </TimelineContent>
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={2}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="sm:text-base text-sm text-zinc-600 sm:w-[70%] w-[80%] mx-auto"
        >
          Trusted by businesses across India. We build premium digital
          experiences at honest prices. Explore which option fits your needs.
        </TimelineContent>
      </div>

      <TimelineContent
        as="div"
        animationNum={3}
        timelineRef={pricingRef}
        customVariants={revealVariants}
      >
        <PricingSwitch onSwitch={togglePricingPeriod} />
      </TimelineContent>

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex md:grid overflow-x-auto snap-x snap-mandatory lg:grid-cols-3 md:grid-cols-2 max-w-7xl w-full gap-6 md:gap-8 py-10 mx-auto px-4 sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={4 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="w-[85vw] sm:w-[350px] md:w-auto flex-shrink-0 snap-center"
          >
            <Card
              onClick={() => setSelectedPlan(plan.name)}
              className={`relative border-neutral-200 cursor-pointer transition-all duration-300 ${
                selectedPlan === plan.name
                  ? "ring-2 ring-zinc-900 bg-white shadow-xl shadow-zinc-900/5"
                  : "bg-white/60 hover:border-zinc-400 hover:bg-white"
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-semibold text-zinc-900 mb-2">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <div>
                      <span className="bg-zinc-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-zinc-600 mb-4">{plan.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-semibold text-zinc-900">
                      ₹
                      <NumberFlow
                        value={isYearly ? plan.yearlyPrice : plan.price}
                        className="text-4xl font-semibold"
                      />
                    </span>
                    <span className="text-zinc-600 ml-1">
                      /{isYearly ? "with maintenance" : "one-time"}
                    </span>
                  </div>

                  {/* Tiny Admin Edit Button */}
                  {isAdmin && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingPlan(plan);
                        setEditPrice(plan.price);
                        setEditYearlyPrice(plan.yearlyPrice);
                      }}
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-red-100 hover:bg-red-200 text-red-800 border border-red-200 transition-all cursor-pointer shadow-xs shrink-0"
                      title="Edit Plan Price (Admin Only)"
                    >
                      <Pencil className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <a
                  href="#contact"
                  className={`w-full mb-6 p-4 text-xl font-medium rounded-xl cursor-pointer transition-all duration-300 block text-center ${
                    selectedPlan === plan.name
                      ? "bg-zinc-900 shadow-lg shadow-zinc-900/20 border border-zinc-800 text-white hover:bg-zinc-800"
                      : "bg-white shadow-sm border border-neutral-200 text-zinc-900 hover:border-zinc-400"
                  }`}
                >
                  {plan.buttonText}
                </a>
                <ul className="space-y-2 font-semibold py-5">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-neutral-800 grid place-content-center mt-0.5 mr-3">
                        {feature.icon}
                      </span>
                      <span className="text-sm text-zinc-600">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-4 border-t border-neutral-200">
                  <h4 className="font-medium text-base text-zinc-900 mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2 font-semibold">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="h-6 w-6 bg-zinc-100 border border-zinc-300 rounded-full grid place-content-center mt-0.5 mr-3">
                          <CheckCheck className="h-4 w-4 text-zinc-900" />
                        </span>
                        <span className="text-sm text-zinc-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>

      <div className="flex justify-center gap-2 md:hidden mt-2 mb-8">
        {plans.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? "w-6 bg-zinc-900" : "w-2 bg-neutral-300"
            }`}
            aria-label={`Go to pricing plan ${index + 1}`}
          />
        ))}
      </div>

      {/* Admin Price Edit Modal */}
      <AnimatePresence>
        {isAdmin && editingPlan && (
          <div
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200"
            onClick={() => setEditingPlan(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-neutral-200 relative space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <Pencil className="w-5 h-5 text-red-600" />
                  <h3 className="text-xl font-bold text-zinc-900">
                    Edit {editingPlan.name} Price
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setEditingPlan(null)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700">
                    One-time Price (₹)
                  </label>
                  <input
                    type="number"
                    value={editPrice}
                    onChange={(e) => setEditPrice(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-red-500 font-semibold text-lg"
                    placeholder="e.g. 3999"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700">
                    With Maintenance Price (₹)
                  </label>
                  <input
                    type="number"
                    value={editYearlyPrice}
                    onChange={(e) => setEditYearlyPrice(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-red-500 font-semibold text-lg"
                    placeholder="e.g. 2999"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingPlan(null)}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-zinc-200 text-zinc-700 font-medium hover:bg-zinc-50 transition-colors cursor-pointer"
                  disabled={isSaving}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSavePrice}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  disabled={isSaving}
                >
                  {isSaving ? "Saving..." : "Save Price"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
