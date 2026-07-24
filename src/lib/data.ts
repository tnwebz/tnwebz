export interface ClientProject {
  id: string;
  title: string;
  description: string;
  websiteName: string;
  websiteUrl: string;
  websiteDescription: string;
  image: string;
  screenshots: { src: string; alt: string; ratio: number }[];
}

export const clients: ClientProject[] = [
  {
    id: "photo-studio",
    title: "Sathya Photography Studio",
    description:
      "A premium showcase for professional photography. Increased booking inquiries by 120% through a stunning visual portfolio.",
    websiteName: "Sathya Photography Studio",
    websiteUrl: "https://photography-phi-three.vercel.app",
    websiteDescription:
      "High-end photography portfolio with dynamic galleries, smooth cinematic transitions, and an integrated booking system.",
    image: "/c1.png",
    screenshots: [
      { src: "/m (1).png", alt: "Studio homepage gallery", ratio: 16 / 9 },
      { src: "/m (2).png", alt: "Portfolio showcase", ratio: 16 / 9 },
      { src: "/m (3).png", alt: "Service details", ratio: 16 / 9 },
      { src: "/m (4).png", alt: "Client testimonials", ratio: 16 / 9 },
      { src: "/m (5).png", alt: "Booking calendar", ratio: 16 / 9 },
      { src: "/m (6).png", alt: "Contact and location", ratio: 16 / 9 },
    ],
  },
  {
    id: "gprs-photography",
    title: "GPRS PHOTOGRAPHIC STUDIO",
    description:
      "A premier photography & cinematography studio specializing in candid wedding stories, portraits, and cinematic films.",
    websiteName: "GPRS PHOTOGRAPHIC STUDIO",
    websiteUrl: "https://www.gprsphotography.com/",
    websiteDescription:
      "Professional photography and cinematography studio capturing timeless moments, wedding stories, and creative editorial portraits.",
    image: "/c (1).png",
    screenshots: [
      { src: "/c (1).png", alt: "GPRS Photography homepage hero", ratio: 16 / 9 },
      { src: "/c (2).png", alt: "GPRS Wedding portfolio gallery", ratio: 16 / 9 },
      { src: "/c (3).png", alt: "GPRS Photography services", ratio: 16 / 9 },
      { src: "/c (4).png", alt: "GPRS Studio cinematic showcase", ratio: 16 / 9 },
      { src: "/c (5).png", alt: "GPRS Photography story", ratio: 16 / 9 },
      { src: "/c (6).png", alt: "GPRS Contact and booking", ratio: 16 / 9 },
    ],
  },
  {
    id: "dino-gym",
    title: "Dino Gym — Fitness Website",
    description:
      "A bold, high-energy fitness website that drove membership sign-ups by 80% with an immersive visual experience.",
    websiteName: "Dino Gym",
    websiteUrl: "https://dinogym-sepia.vercel.app/",
    websiteDescription:
      "Dynamic fitness brand website with powerful imagery, class schedules, trainer profiles, and a seamless membership portal.",
    image: "/g (1).png",
    screenshots: [
      { src: "/g (1).png", alt: "Gym homepage hero", ratio: 16 / 9 },
      { src: "/g (2).png", alt: "Class schedule overview", ratio: 16 / 9 },
      { src: "/g (3).png", alt: "Trainer profiles", ratio: 16 / 9 },
      { src: "/g (4).png", alt: "Membership plans", ratio: 16 / 9 },
      { src: "/g (5).png", alt: "Workout gallery", ratio: 16 / 9 },
      { src: "/g (6).png", alt: "Testimonials section", ratio: 16 / 9 },
      { src: "/g (7).png", alt: "Contact and location", ratio: 16 / 9 },
    ],
  },
  {
    id: "dry-fruits-nuts",
    title: "Dry Fruits & Nuts — E-Commerce",
    description:
      "A clean, appetite-driven storefront for premium dry fruits. Streamlined checkout flow increased conversions by 70%.",
    websiteName: "Dry Fruits & Nuts",
    websiteUrl: "https://nuts-green.vercel.app/checkout.html",
    websiteDescription:
      "Artisan dry-fruit marketplace with curated product displays, nutritional info cards, and a frictionless checkout experience.",
    image: "/n (1).png",
    screenshots: [
      { src: "/n (1).png", alt: "Store homepage hero", ratio: 16 / 9 },
      { src: "/n (2).png", alt: "Product catalog grid", ratio: 16 / 9 },
      { src: "/n (3).png", alt: "Product detail view", ratio: 16 / 9 },
      { src: "/n (4).png", alt: "Cart and checkout", ratio: 16 / 9 },
      { src: "/n (5).png", alt: "About and brand story", ratio: 16 / 9 },
    ],
  },
  {
    id: "armburst-gym",
    title: "ARMBURST Gym — Fitness Center",
    description:
      "A bold, high-intensity website for ARMBURST Gym. Elevated the brand's online presence and streamlined membership inquiries.",
    websiteName: "ARMBURST Gym",
    websiteUrl: "https://armburstgym.tnwebz.com",
    websiteDescription:
      "Modern fitness center website showcasing state-of-the-art facilities, specialized training programs, expert coaches, and membership details.",
    image: "/e (1).png",
    screenshots: [
      { src: "/e (1).png", alt: "ARMBURST Gym homepage hero", ratio: 16 / 9 },
    ],
  },
];
