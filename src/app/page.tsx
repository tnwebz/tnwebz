import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorksSection } from "@/components/sections/works-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ChatSection } from "@/components/sections/chat-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ReferralSection } from "@/components/sections/referral-section";
import { Loader } from "@/components/ui/loader";

export default function Home() {
  return (
    <>
      <Loader />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <PricingSection />
      <ChatSection />
      <ContactSection />
      <ReferralSection />
    </>
  );
}

