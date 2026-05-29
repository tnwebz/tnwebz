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
    id: "technova",
    title: "TechNova Solutions — Mobile App",
    description:
      "A game-changing mobile app with incredibly intuitive interface and smooth performance across all devices.",
    websiteName: "TechNova Solutions",
    websiteUrl: "https://technova.io",
    websiteDescription:
      "Cross-platform mobile application for tech consulting firm with real-time project tracking and client portal.",
    image:
      "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    screenshots: Array.from({ length: 6 }).map((_, i) => ({
      src: `https://picsum.photos/seed/tn-${i}/${i % 3 === 0 ? 1080 : 1920}/${i % 3 === 0 ? 1920 : 1080}`,
      alt: `TechNova screenshot ${i + 1}`,
      ratio: i % 3 === 0 ? 9 / 16 : 16 / 9,
    })),
  },
  {
    id: "horizon",
    title: "Horizon Inc — Corporate Website",
    description:
      "A premium corporate website that dramatically improved online presence and lead generation by 65%.",
    websiteName: "Horizon Inc",
    websiteUrl: "https://horizon-inc.com",
    websiteDescription:
      "Modern corporate website with advanced animations, CMS integration, and SEO-optimized architecture.",
    image:
      "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
    screenshots: Array.from({ length: 6 }).map((_, i) => ({
      src: `https://picsum.photos/seed/hz-${i}/${i % 2 === 0 ? 1920 : 1080}/${i % 2 === 0 ? 1080 : 1920}`,
      alt: `Horizon screenshot ${i + 1}`,
      ratio: i % 2 === 0 ? 16 / 9 : 9 / 16,
    })),
  },
  {
    id: "datastream",
    title: "DataStream Analytics — Dashboard",
    description:
      "A complex real-time analytics dashboard that handles massive data beautifully with interactive visualizations.",
    websiteName: "DataStream Analytics",
    websiteUrl: "https://datastream.dev",
    websiteDescription:
      "Enterprise-grade analytics dashboard with real-time data streaming, interactive charts, and role-based access.",
    image:
      "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
    screenshots: Array.from({ length: 6 }).map((_, i) => ({
      src: `https://picsum.photos/seed/ds-${i}/${i % 3 === 1 ? 1080 : 1920}/${i % 3 === 1 ? 1920 : 1080}`,
      alt: `DataStream screenshot ${i + 1}`,
      ratio: i % 3 === 1 ? 9 / 16 : 16 / 9,
    })),
  },
  {
    id: "greenleaf",
    title: "GreenLeaf Organics — E-Commerce",
    description:
      "An organic food e-commerce site delivered ahead of schedule. Ranked on the first page of Google within weeks.",
    websiteName: "GreenLeaf Organics",
    websiteUrl: "https://greenleaforganics.in",
    websiteDescription:
      "Organic food marketplace with subscription model, inventory management, and SEO-first architecture.",
    image:
      "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    screenshots: Array.from({ length: 6 }).map((_, i) => ({
      src: `https://picsum.photos/seed/gl-${i}/${i % 2 === 0 ? 1920 : 1080}/${i % 2 === 0 ? 1080 : 1920}`,
      alt: `GreenLeaf screenshot ${i + 1}`,
      ratio: i % 2 === 0 ? 16 / 9 : 9 / 16,
    })),
  },
];
