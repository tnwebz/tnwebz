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
    title: "Lens & Light — Photography Studio",
    description:
      "A premium showcase for professional photography. Increased booking inquiries by 120% through a stunning visual portfolio.",
    websiteName: "Lens & Light Studio",
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
    id: "lightup-candles",
    title: "Light'Up Candles — E-Commerce",
    description:
      "A warm, inviting e-commerce experience for artisan candles. Elevated brand perception and boosted online sales by 95%.",
    websiteName: "Light'Up Candles",
    websiteUrl: "https://candles-beige.vercel.app/",
    websiteDescription:
      "Premium artisan candle storefront with immersive product showcases, seamless checkout flow, and a warm editorial design language.",
    image: "/c (1).png",
    screenshots: [
      { src: "/c (1).png", alt: "Candles homepage hero", ratio: 16 / 9 },
      { src: "/c (2).png", alt: "Product collection grid", ratio: 16 / 9 },
      { src: "/c (3).png", alt: "Product detail page", ratio: 16 / 9 },
      { src: "/c (4).png", alt: "Shopping cart experience", ratio: 16 / 9 },
      { src: "/c (5).png", alt: "Brand story section", ratio: 16 / 9 },
      { src: "/c (6).png", alt: "Footer and contact", ratio: 16 / 9 },
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
    id: "skill-forge",
    title: "Skill Forge — LMS Platform",
    description:
      "A powerful learning management system that transformed online education delivery, increasing course completion rates by 60%.",
    websiteName: "Skill Forge",
    websiteUrl: "#",
    websiteDescription:
      "Feature-rich LMS platform with interactive course modules, progress tracking, certification workflows, and a sleek learner dashboard.",
    image: "/e (1).jpeg",
    screenshots: [
      { src: "/e (1).jpeg", alt: "LMS dashboard overview", ratio: 16 / 9 },
      { src: "/e (2).jpeg", alt: "Course catalog", ratio: 16 / 9 },
      { src: "/e (3).jpeg", alt: "Lesson player interface", ratio: 16 / 9 },
      { src: "/e (4).jpeg", alt: "Progress tracking", ratio: 16 / 9 },
      { src: "/e (5).jpeg", alt: "Quiz and assessments", ratio: 16 / 9 },
      { src: "/e (6).jpeg", alt: "Certification page", ratio: 16 / 9 },
      { src: "/e (7).jpeg", alt: "Student profile", ratio: 16 / 9 },
      { src: "/e (8).jpeg", alt: "Admin panel", ratio: 16 / 9 },
      { src: "/e (9).jpeg", alt: "Analytics and reports", ratio: 16 / 9 },
    ],
  },
];
