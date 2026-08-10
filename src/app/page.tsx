import { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorksSection } from "@/components/sections/works-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ChatSection } from "@/components/sections/chat-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ReferralSection } from "@/components/sections/referral-section";
import { Loader } from "@/components/ui/loader";

export const metadata: Metadata = {
  title: "Website & App Development Company in Chennai | TNWebz",
  description:
    "TNWebz is a website and app development studio in Chennai, Tamil Nadu. We design and develop custom websites, business websites, e-commerce stores, web applications, and mobile apps for businesses across Chennai and surrounding areas.",
  alternates: {
    canonical: "https://tnwebz.com",
  },
  openGraph: {
    title: "Website & App Development Company in Chennai | TNWebz",
    description:
      "TNWebz builds custom websites, mobile apps, and web applications for businesses in Chennai and surrounding areas.",
    url: "https://tnwebz.com",
    type: "website",
  },
};

// JSON-LD structured data for the homepage
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TNWebz",
  url: "https://tnwebz.com",
  logo: "https://tnwebz.com/icon.svg",
  description:
    "Website and app development studio in Chennai, Tamil Nadu specializing in custom websites, business websites, e-commerce stores, web applications, and mobile apps.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8608113558",
    contactType: "customer service",
    email: "tnwebzz@gmail.com",
    availableLanguage: ["English", "Tamil"],
  },
  sameAs: [
    "https://www.instagram.com/tnwebz",
    "https://www.linkedin.com/company/tnwebz/",
    "https://www.youtube.com/@TNWebz",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TNWebz",
  url: "https://tnwebz.com",
  description:
    "Website and app development studio serving businesses in Chennai, Tamil Nadu.",
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TNWebz",
  url: "https://tnwebz.com",
  telephone: "+91-8608113558",
  email: "tnwebzz@gmail.com",
  description:
    "Website and app development studio specializing in custom websites, business websites, e-commerce development, web applications, and mobile app development for businesses in Chennai and surrounding areas.",
  areaServed: [
    { "@type": "City", name: "Chennai" },
    { "@type": "City", name: "Tambaram" },
    { "@type": "City", name: "Guindy" },
    { "@type": "City", name: "Sriperumbudur" },
    { "@type": "City", name: "Kanchipuram" },
    { "@type": "City", name: "Chengalpattu" },
    { "@type": "City", name: "Mahabalipuram" },
    { "@type": "City", name: "Avadi" },
    { "@type": "City", name: "Vandalur" },
    { "@type": "City", name: "Guduvancheri" },
    { "@type": "City", name: "Maraimalai Nagar" },
    { "@type": "City", name: "Chromepet" },
    { "@type": "City", name: "Pallavaram" },
  ],
  serviceType: [
    "Website Development",
    "Business Website Development",
    "E-commerce Website Development",
    "Web Application Development",
    "Mobile App Development",
    "Website Redesign",
    "Website Maintenance",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <main>
      {/* Structured Data — invisible to users */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            websiteSchema,
            professionalServiceSchema,
          ]),
        }}
      />
      <Loader />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <PricingSection />
      <ChatSection />
      <ContactSection />
      <ReferralSection />
    </main>
  );
}
