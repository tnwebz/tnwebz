// src/lib/services-data.ts
// Service definitions with SEO metadata for TNWebz

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  overview: string;
  benefits: string[];
  targetCustomers: string[];
  technologies: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[]; // slugs
  primaryKeywords: string[];
  secondaryKeywords: string[];
}

export const services: ServiceData[] = [
  {
    slug: "website-development",
    name: "Website Development",
    shortName: "Website Dev",
    title: "Website Development Services in Chennai",
    metaDescription:
      "Professional website development services by TNWebz in Chennai. We build custom, responsive, SEO-friendly websites tailored to your business needs. Get a modern website that converts visitors into customers.",
    h1: "Professional Website Development Services",
    heroDescription:
      "We design and develop custom websites that are fast, responsive, and built to help your business grow online. Every website we create is tailored to your specific goals, whether you need a portfolio site, a corporate website, or a multi-page web presence.",
    overview:
      "At TNWebz, website development means more than putting together a few pages. We take the time to understand your business, your customers, and your goals before writing a single line of code. The result is a website that looks great, loads fast, works on every device, and is built with clean code that search engines can easily understand.",
    benefits: [
      "Custom design tailored to your brand identity",
      "Responsive layout that works perfectly on mobile, tablet, and desktop",
      "Fast page load speeds for better user experience and SEO",
      "Clean, semantic code built with modern frameworks",
      "SEO-friendly structure to help search engines find your content",
      "Ongoing support and maintenance options available",
    ],
    targetCustomers: [
      "Small businesses looking to establish their online presence",
      "Professionals who need a portfolio or personal brand website",
      "Startups launching their first website",
      "Organizations that need a modern, functional website",
      "Businesses replacing an outdated or underperforming website",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    process: [
      {
        step: "Discovery & Planning",
        description:
          "We discuss your business goals, target audience, and website requirements. This helps us define the scope, structure, and design direction.",
      },
      {
        step: "Design & Prototyping",
        description:
          "We create wireframes and design mockups for your review. You see exactly how your website will look before development begins.",
      },
      {
        step: "Development",
        description:
          "Our developers build your website using modern frameworks with clean, maintainable code. We focus on performance and accessibility.",
      },
      {
        step: "Testing & Review",
        description:
          "We test your website across devices and browsers to ensure everything works perfectly. You review and request any final changes.",
      },
      {
        step: "Launch & Support",
        description:
          "We deploy your website and ensure a smooth launch. We also offer ongoing maintenance and support packages.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to develop a website?",
        answer:
          "A typical website takes 2 to 4 weeks depending on the complexity. Simple portfolio sites may take less time, while larger multi-page websites with custom features may take longer. We provide a clear timeline during the planning phase.",
      },
      {
        question: "Do you provide hosting and domain registration?",
        answer:
          "Yes. Our website development packages include domain registration and hosting setup. We help you get everything configured so your website is ready to go live.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely. Every website we build is fully responsive, meaning it automatically adapts to look great on phones, tablets, and desktop screens.",
      },
      {
        question: "Can I update the website content myself?",
        answer:
          "Depending on the solution we build, we can set up a content management system that allows you to update text, images, and other content without technical knowledge.",
      },
      {
        question: "Do you offer website maintenance after launch?",
        answer:
          "Yes. We offer ongoing maintenance plans that include regular updates, security checks, performance monitoring, and content updates.",
      },
    ],
    relatedServices: [
      "business-website-development",
      "ecommerce-development",
      "website-redesign",
      "website-maintenance",
    ],
    primaryKeywords: [
      "website development",
      "website developer",
      "web development services",
    ],
    secondaryKeywords: [
      "custom website development",
      "professional website development",
      "responsive website development",
      "modern website development",
      "SEO-friendly website development",
    ],
  },
  {
    slug: "business-website-development",
    name: "Business Website Development",
    shortName: "Business Websites",
    title: "Business Website Development in Chennai",
    metaDescription:
      "Get a professional business website built by TNWebz in Chennai. We create websites designed to attract customers, build credibility, and grow your business online.",
    h1: "Website Development for Your Business",
    heroDescription:
      "Your business deserves a website that works as hard as you do. We build professional business websites that establish your credibility online, attract new customers, and clearly communicate what you offer.",
    overview:
      "A business website is often the first impression a potential customer has of your company. At TNWebz, we build websites specifically for businesses — whether you run a retail shop, a professional service firm, a restaurant, a clinic, or a startup. We focus on creating websites that are not just visually appealing, but also strategically designed to drive inquiries and conversions.",
    benefits: [
      "Professional design that builds trust and credibility with customers",
      "Clear call-to-action elements to drive inquiries and leads",
      "Contact forms, maps, and WhatsApp integration for easy communication",
      "Service pages that clearly explain what you offer",
      "Optimized for local search to help nearby customers find you",
      "Fast loading and mobile-friendly for the best user experience",
    ],
    targetCustomers: [
      "Small and medium-sized businesses in Chennai and Tamil Nadu",
      "Service businesses such as clinics, salons, tutoring centers, and consultancies",
      "Retail businesses looking to establish an online presence",
      "Restaurants, cafes, and food businesses",
      "Freelancers and independent professionals",
      "Startups looking for their first business website",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    process: [
      {
        step: "Business Consultation",
        description:
          "We start by understanding your business model, your target customers, and what you want your website to achieve. This shapes everything that follows.",
      },
      {
        step: "Content & Structure Planning",
        description:
          "We plan the pages your website needs — homepage, about, services, contact — and help you organize your content for maximum impact.",
      },
      {
        step: "Design & Development",
        description:
          "We design and build your website with a focus on professionalism, speed, and usability. Every element is intentional.",
      },
      {
        step: "Review & Launch",
        description:
          "You review the website, we make any adjustments, and then we launch it with proper domain and hosting setup.",
      },
    ],
    faqs: [
      {
        question: "How much does a business website cost?",
        answer:
          "Our business website packages start from ₹4,000 for a starter website. The exact cost depends on the number of pages, features, and complexity. We provide a detailed quote after understanding your requirements.",
      },
      {
        question: "I already have a website. Can you improve it?",
        answer:
          "Yes. We offer website redesign services. We can rebuild or refresh your existing website while keeping what works and improving what doesn't.",
      },
      {
        question: "Will my business website show up on Google?",
        answer:
          "We build every website with SEO best practices — proper headings, meta tags, fast loading speeds, and mobile responsiveness. This gives your website the best foundation for search engine visibility.",
      },
      {
        question: "Can you add a contact form and WhatsApp button?",
        answer:
          "Yes. We integrate contact forms, WhatsApp chat buttons, phone links, and email links so your customers can reach you easily.",
      },
    ],
    relatedServices: [
      "website-development",
      "ecommerce-development",
      "website-redesign",
      "website-maintenance",
    ],
    primaryKeywords: [
      "business website",
      "website for small business",
      "business website development",
    ],
    secondaryKeywords: [
      "professional business website",
      "company website",
      "small business website",
      "service business website",
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-commerce Website Development",
    shortName: "E-commerce",
    title: "E-commerce Website Development in Chennai",
    metaDescription:
      "Build your online store with TNWebz in Chennai. We develop e-commerce websites with product catalogs, shopping carts, and secure checkout for businesses ready to sell online.",
    h1: "E-commerce Website Development",
    heroDescription:
      "Ready to sell your products online? We build e-commerce websites that make it easy for your customers to browse, select, and purchase — with a seamless shopping experience from start to checkout.",
    overview:
      "An e-commerce website is your 24/7 storefront. At TNWebz, we build online stores that are visually appealing, easy to navigate, and designed to convert browsers into buyers. Whether you sell physical products, digital goods, or services, we create an e-commerce experience that works for your business and your customers.",
    benefits: [
      "Product catalogs with search and filter functionality",
      "Shopping cart and secure checkout process",
      "Mobile-optimized shopping experience",
      "Product image galleries and detailed descriptions",
      "Order management and inventory basics",
      "Integration with payment and delivery services",
    ],
    targetCustomers: [
      "Retail businesses wanting to sell products online",
      "Food and beverage businesses needing online ordering",
      "Artisan and handmade goods sellers",
      "Small businesses expanding to e-commerce",
      "Businesses looking to complement their physical store with online sales",
    ],
    technologies: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    process: [
      {
        step: "Store Planning",
        description:
          "We discuss your product range, pricing structure, delivery model, and how you want customers to interact with your store.",
      },
      {
        step: "Design & UX",
        description:
          "We design the storefront, product pages, cart, and checkout flow with a focus on conversion and ease of use.",
      },
      {
        step: "Development & Integration",
        description:
          "We build the store with product management, cart functionality, and checkout integration.",
      },
      {
        step: "Testing & Launch",
        description:
          "We test the full purchase flow, optimize for speed, and launch your online store.",
      },
    ],
    faqs: [
      {
        question: "Do you build e-commerce websites?",
        answer:
          "Yes. We build custom e-commerce websites with product catalogs, shopping carts, and checkout functionality tailored to your business needs.",
      },
      {
        question: "Can customers pay online on my e-commerce site?",
        answer:
          "Yes. We can integrate payment gateways so your customers can pay securely online during checkout.",
      },
      {
        question: "Can I manage my products myself?",
        answer:
          "Depending on the solution, we can set up a product management system that lets you add, edit, and remove products without developer assistance.",
      },
    ],
    relatedServices: [
      "website-development",
      "business-website-development",
      "web-application-development",
      "website-maintenance",
    ],
    primaryKeywords: [
      "ecommerce website development",
      "ecommerce developer",
      "online store development",
    ],
    secondaryKeywords: [
      "e-commerce website Chennai",
      "online shop development",
      "shopping website",
    ],
  },
  {
    slug: "web-application-development",
    name: "Web Application Development",
    shortName: "Web Apps",
    title: "Web Application Development in Chennai",
    metaDescription:
      "Custom web application development by TNWebz in Chennai. We build interactive web apps, dashboards, portals, and business tools using modern technologies.",
    h1: "Custom Web Application Development",
    heroDescription:
      "Need more than a website? We build custom web applications — interactive tools, dashboards, portals, and platforms that solve specific business problems and streamline your operations.",
    overview:
      "A web application goes beyond a traditional website. It is an interactive tool that your team or customers use to accomplish specific tasks. At TNWebz, we build custom web applications using modern frameworks and clean architecture. Whether you need an internal dashboard, a client portal, a booking system, or a custom business tool, we design and develop solutions that are reliable, fast, and easy to use.",
    benefits: [
      "Custom-built to solve your specific business challenges",
      "Interactive user interfaces with real-time data",
      "Secure user authentication and role management",
      "Scalable architecture that grows with your business",
      "API integrations with external services",
      "Cross-platform — works on any device with a browser",
    ],
    targetCustomers: [
      "Businesses needing internal tools or dashboards",
      "Companies requiring client portals or booking systems",
      "Startups building their core product as a web app",
      "Organizations digitizing manual workflows",
      "Businesses needing custom data management solutions",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Firebase",
      "Python FastAPI",
      "Tailwind CSS",
    ],
    process: [
      {
        step: "Requirements Analysis",
        description:
          "We define the problem your web application needs to solve, the users who will use it, and the features required.",
      },
      {
        step: "Architecture & Design",
        description:
          "We plan the technical architecture, design the user interface, and create interactive prototypes.",
      },
      {
        step: "Iterative Development",
        description:
          "We build the application in stages, delivering working features for your review at each milestone.",
      },
      {
        step: "Testing & Deployment",
        description:
          "We thoroughly test the application, address feedback, and deploy it to production.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a website and a web application?",
        answer:
          "A website primarily displays information — like a portfolio or company site. A web application is interactive — users log in, input data, perform actions, and get results. Examples include booking systems, dashboards, and client portals.",
      },
      {
        question: "How long does web application development take?",
        answer:
          "Web applications vary significantly in complexity. A simple booking tool might take 4 to 6 weeks. A more complex dashboard or portal could take 2 to 3 months. We provide detailed timelines after the requirements analysis.",
      },
      {
        question: "Can you integrate my web app with other services?",
        answer:
          "Yes. We build web applications that can integrate with external APIs, payment gateways, messaging services, and other business tools.",
      },
    ],
    relatedServices: [
      "website-development",
      "mobile-app-development",
      "ecommerce-development",
      "website-maintenance",
    ],
    primaryKeywords: [
      "web application development",
      "custom web application",
      "web app development",
    ],
    secondaryKeywords: [
      "web app developer Chennai",
      "custom web app",
      "business web application",
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortName: "Mobile Apps",
    title: "Mobile App Development Company in Chennai",
    metaDescription:
      "Mobile app development services by TNWebz in Chennai. We build Android and iOS mobile applications for businesses that need to reach customers on their phones.",
    h1: "Mobile App Development for Your Business",
    heroDescription:
      "Reach your customers where they spend most of their time — on their phones. We develop mobile applications that provide a smooth, native-feeling experience on Android and iOS devices.",
    overview:
      "A mobile app can transform how your business interacts with customers. At TNWebz, we build mobile applications that are fast, intuitive, and designed for real-world use. Whether you need an app for customer engagement, internal operations, or a product-based business, we deliver mobile solutions that work reliably and look great.",
    benefits: [
      "Native-quality experience on Android and iOS",
      "Push notifications to keep your users engaged",
      "Offline functionality where needed",
      "Smooth animations and intuitive navigation",
      "Integration with device features (camera, location, contacts)",
      "App store submission and deployment support",
    ],
    targetCustomers: [
      "Businesses wanting to provide a mobile experience to customers",
      "Service businesses needing appointment or booking apps",
      "E-commerce businesses wanting a mobile shopping app",
      "Startups building a mobile-first product",
      "Organizations needing internal mobile tools for their teams",
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "REST APIs"],
    process: [
      {
        step: "App Strategy & Planning",
        description:
          "We define the app's purpose, target users, core features, and platform requirements (Android, iOS, or both).",
      },
      {
        step: "UI/UX Design",
        description:
          "We design the app screens, user flows, and interactions following mobile design best practices.",
      },
      {
        step: "Development",
        description:
          "We build the app with a focus on performance, reliability, and a polished user experience.",
      },
      {
        step: "Testing & Launch",
        description:
          "We test the app on real devices, fix any issues, and help you submit it to the app stores.",
      },
    ],
    faqs: [
      {
        question: "Do you develop apps for both Android and iOS?",
        answer:
          "Yes. We can build apps for Android, iOS, or both platforms depending on your requirements and target audience.",
      },
      {
        question: "How much does mobile app development cost?",
        answer:
          "Mobile app costs depend on the complexity and features required. We provide a detailed estimate after understanding your app requirements during the planning phase.",
      },
      {
        question: "Can my mobile app connect to my website?",
        answer:
          "Yes. We can build your mobile app to share data with your website through APIs, so both platforms stay in sync.",
      },
    ],
    relatedServices: [
      "web-application-development",
      "website-development",
      "ecommerce-development",
    ],
    primaryKeywords: [
      "mobile app development",
      "app developer",
      "mobile application development",
      "Android app development",
      "iOS app development",
    ],
    secondaryKeywords: [
      "mobile app developer Chennai",
      "app development company",
      "business mobile app",
    ],
  },
  {
    slug: "website-redesign",
    name: "Website Redesign",
    shortName: "Redesign",
    title: "Website Redesign Services in Chennai",
    metaDescription:
      "Redesign your existing website with TNWebz in Chennai. We modernize outdated websites with fresh designs, faster performance, and better user experience without losing your existing content.",
    h1: "Website Redesign & Modernization",
    heroDescription:
      "Is your current website outdated, slow, or not bringing in results? We redesign existing websites with modern design, improved performance, and better user experience — while preserving what already works.",
    overview:
      "An outdated website can hurt your business. It may load slowly, look unprofessional on phones, or fail to communicate what you offer clearly. At TNWebz, we take your existing website and rebuild it from the ground up — with a modern design, faster loading speeds, mobile responsiveness, and better structure for both users and search engines. We preserve your existing content and brand while upgrading everything else.",
    benefits: [
      "Modern, professional design that reflects your current brand",
      "Improved performance and faster page load speeds",
      "Mobile-responsive layout for all devices",
      "Better content organization and user navigation",
      "SEO improvements to help you rank better in search results",
      "Smooth transition with no loss of existing content or SEO value",
    ],
    targetCustomers: [
      "Businesses with websites that look outdated or unprofessional",
      "Companies whose websites are slow or don't work well on mobile",
      "Businesses that have outgrown their current website design",
      "Organizations wanting to refresh their online brand presence",
      "Businesses whose websites aren't generating leads or inquiries",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    process: [
      {
        step: "Website Audit",
        description:
          "We review your current website — what works, what doesn't, what content to keep, and what needs to change.",
      },
      {
        step: "Redesign Planning",
        description:
          "We plan the new structure, layout, and design direction based on your goals and feedback.",
      },
      {
        step: "Rebuild & Development",
        description:
          "We rebuild your website with modern technology, transferring your existing content into the new design.",
      },
      {
        step: "Testing & Launch",
        description:
          "We test the redesigned site, set up redirects from old URLs if needed, and launch the new version.",
      },
    ],
    faqs: [
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We specialize in taking outdated or underperforming websites and rebuilding them with modern design and technology. We preserve your content and brand while upgrading everything else.",
      },
      {
        question: "Will I lose my Google ranking if I redesign?",
        answer:
          "Not if done correctly. We set up proper redirects from old URLs to new ones and maintain your SEO structure. In most cases, a well-executed redesign improves your search rankings.",
      },
      {
        question: "How long does a website redesign take?",
        answer:
          "A typical redesign takes 2 to 4 weeks, depending on the size of the existing site and the scope of changes. We provide a timeline during the planning phase.",
      },
    ],
    relatedServices: [
      "website-development",
      "business-website-development",
      "website-maintenance",
    ],
    primaryKeywords: [
      "website redesign",
      "website revamp",
      "redesign existing website",
    ],
    secondaryKeywords: [
      "website modernization",
      "website refresh",
      "rebuild website",
    ],
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    shortName: "Maintenance",
    title: "Website Maintenance & Support Services in Chennai",
    metaDescription:
      "Reliable website maintenance and support by TNWebz in Chennai. We keep your website updated, secure, and performing well with regular maintenance, content updates, and technical support.",
    h1: "Website Maintenance & Ongoing Support",
    heroDescription:
      "A website isn't a one-time project — it needs regular care to stay fast, secure, and up-to-date. We provide ongoing website maintenance and support so you can focus on running your business.",
    overview:
      "Launching a website is just the beginning. Over time, websites need updates, security patches, content changes, and performance monitoring. At TNWebz, we offer website maintenance services that keep your site running smoothly. Whether you need regular content updates, technical fixes, security monitoring, or performance optimization, we handle it so you don't have to worry about your website going down or becoming outdated.",
    benefits: [
      "Regular updates to keep your website current and secure",
      "Performance monitoring and speed optimization",
      "Content updates — text, images, pages — handled for you",
      "Technical bug fixes and troubleshooting",
      "Backup management to protect your data",
      "Priority support when issues arise",
    ],
    targetCustomers: [
      "Businesses with existing websites that need regular upkeep",
      "Companies without an in-house technical team",
      "Businesses that want to focus on operations, not website management",
      "Organizations requiring frequent content updates",
      "Businesses concerned about website security and uptime",
    ],
    technologies: ["React", "Next.js", "Firebase", "Vercel"],
    process: [
      {
        step: "Website Assessment",
        description:
          "We review your current website's technical health, performance, and maintenance needs.",
      },
      {
        step: "Maintenance Plan",
        description:
          "We create a maintenance schedule tailored to your website — covering updates, backups, monitoring, and support.",
      },
      {
        step: "Ongoing Care",
        description:
          "We execute regular maintenance tasks, apply updates, and handle any content changes you request.",
      },
      {
        step: "Monthly Reporting",
        description:
          "We provide periodic updates on what maintenance was performed and the status of your website.",
      },
    ],
    faqs: [
      {
        question: "Do you provide website maintenance?",
        answer:
          "Yes. We offer ongoing website maintenance plans that include security updates, performance monitoring, content updates, and technical support.",
      },
      {
        question: "What does website maintenance include?",
        answer:
          "Our maintenance covers regular updates, security patches, performance monitoring, content changes, backup management, and priority technical support.",
      },
      {
        question: "How often do you perform maintenance?",
        answer:
          "The frequency depends on your plan and website needs. Typically, we perform checks and updates on a weekly or monthly basis, with immediate response for urgent issues.",
      },
    ],
    relatedServices: [
      "website-development",
      "website-redesign",
      "business-website-development",
    ],
    primaryKeywords: [
      "website maintenance",
      "website support",
      "website updates",
    ],
    secondaryKeywords: [
      "website maintenance services",
      "website care plan",
      "ongoing website support",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string): ServiceData[] {
  const current = getServiceBySlug(currentSlug);
  if (!current) return [];
  return current.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceData => s !== undefined);
}
