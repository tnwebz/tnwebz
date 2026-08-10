// src/lib/seo-config.ts
// Centralized SEO configuration for TNWebz

export const SITE_CONFIG = {
  name: "TNWebz",
  url: "https://tnwebz.com",
  phone: "+91-8608113558",
  email: "tnwebzz@gmail.com",
  region: "Tamil Nadu, India",
  locale: "en_IN",
  social: {
    instagram: "https://www.instagram.com/tnwebz",
    linkedin: "https://www.linkedin.com/company/tnwebz/",
    youtube: "https://www.youtube.com/@TNWebz",
  },
} as const;

export const ALL_SERVICE_AREAS = [
  "Chennai",
  "Tambaram",
  "Tambaram West",
  "Tambaram Sanatorium",
  "Chromepet",
  "Pallavaram",
  "Guindy",
  "Guindy Industrial Estate",
  "Guindy National Park",
  "Avadi",
  "Vandalur",
  "Guduvancheri",
  "Sriperumbudur",
  "Maraimalai Nagar",
  "Kanchipuram",
  "Chengalpattu",
  "Mahabalipuram",
] as const;
