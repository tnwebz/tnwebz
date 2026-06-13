// src/lib/location-data.ts

export type EconomicZone = 'industrial' | 'tourism' | 'retail';

export interface LocationData {
  slug: string;
  cityName: string;
  zone: EconomicZone;
}

export const locations: LocationData[] = [
  // Industrial / IT Hubs
  { slug: 'sriperumbudur', cityName: 'Sriperumbudur', zone: 'industrial' },
  { slug: 'guindy', cityName: 'Guindy', zone: 'industrial' },
  { slug: 'guindy-industrial-estate', cityName: 'Guindy Industrial Estate', zone: 'industrial' },
  { slug: 'guindy-national-park', cityName: 'Guindy National Park', zone: 'industrial' },
  { slug: 'maraimalai-nagar', cityName: 'Maraimalai Nagar', zone: 'industrial' },
  { slug: 'kanchipuram', cityName: 'Kanchipuram', zone: 'industrial' },
  { slug: 'chengalpattu', cityName: 'Chengalpattu', zone: 'industrial' },
  // Tourism / Hospitality Hubs
  { slug: 'mahabalipuram', cityName: 'Mahabalipuram', zone: 'tourism' },
  // Retail / Education / Local Business Hubs
  { slug: 'chennai', cityName: 'Chennai', zone: 'retail' },
  { slug: 'avadi', cityName: 'Avadi', zone: 'retail' },
  { slug: 'vandalur', cityName: 'Vandalur', zone: 'retail' },
  { slug: 'guduvancheri', cityName: 'Guduvancheri', zone: 'retail' },
  { slug: 'tambaram', cityName: 'Tambaram', zone: 'retail' },
  { slug: 'tambaram-sanatorium', cityName: 'Tambaram Sanatorium', zone: 'retail' },
  { slug: 'tambaram-west', cityName: 'Tambaram West', zone: 'retail' },
  { slug: 'chromepet', cityName: 'Chromepet', zone: 'retail' },
  { slug: 'pallavaram', cityName: 'Pallavaram', zone: 'retail' },
];

export const getZoneCopy = (zone: EconomicZone) => {
  switch (zone) {
    case 'industrial':
      return {
        service: "Enterprise Web Development & Automation",
        painPoint: "inefficient supply chains and outdated B2B portals",
        description: "We engineer scalable B2B web applications, secure Python FastAPI backends, and automated logistics routing systems designed specifically for industrial and tech enterprises.",
        features: ["Custom ERP Dashboards", "n8n Data Automation", "High-Load API Architecture"]
      };
    case 'tourism':
      return {
        service: "Hospitality Web Design & Booking Systems",
        painPoint: "third-party booking fees and low direct conversions",
        description: "We build stunning, lightning-fast React websites for the tourism sector, integrating seamless direct booking automations and digital interactive menus.",
        features: ["Direct Booking Engines", "Automated WhatsApp Confirmations", "Immersive UI/UX Design"]
      };
    case 'retail':
    default:
      return {
        service: "Local Business Web Development & SEO",
        painPoint: "losing local leads to competitors with better digital presence",
        description: "We transform retail shops, clinics, and educational coaching centers with high-converting landing pages, LMS platforms, and automated WhatsApp lead-capture ecosystems.",
        features: ["Local SEO Domination", "Automated Lead Routing", "Custom React Frontends"]
      };
  }
};
