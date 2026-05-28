import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorksSection } from "@/components/sections/works-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { Loader } from "@/components/ui/loader";

export default function Home() {
  return (
    <>
      <Loader />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
}
