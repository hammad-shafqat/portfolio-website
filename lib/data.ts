// -----------------------------------------------------------------------------
// Dummy portfolio content.
// Replace the values below with your real information - the UI reads everything
// from this single file, so nothing else needs to change.
// -----------------------------------------------------------------------------

// Contact details live in `.env` so they aren't hardcoded here. Both must be
// referenced as full `process.env.NEXT_PUBLIC_*` expressions - Next.js inlines
// them at build time by literal substitution, so a destructured or dynamic
// lookup (`process.env[name]`) would not be replaced and would be undefined
// in the browser.
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "";

export const profile = {
  name: "Hammad Shafqat",
  firstName: "Hammad",
  role: "Full Stack Software Engineer",
  tagline: "I build fast, accessible, and scalable web applications.",
  summary:
    "Full Stack Engineer specializing in the MERN stack and Next.js. I turn ambitious ideas into production-grade products - from pixel-perfect interfaces to resilient APIs and databases that scale.",
  location: "Islamabad, Pakistan",
  availability: "Contact for freelance & full-time roles",
  email: contactEmail,
  phone: contactPhone,
  resumeUrl: "https://drive.google.com/file/d/19fPaAhCbi3PlpxwzV07EmQaaIPlwbfCq/view?usp=sharing",
  avatar: "/profile.jpeg", // add a path like "/avatar.jpg" - falls back to initials if empty
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/hammad-shafqat", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hammad-shafqat/", icon: "linkedin" },
  { label: "X", href: "https://x.com/HammadShafqat4", icon: "x" },
  { label: "Email", href: `mailto:${contactEmail}`, icon: "mail" },
] as const;

export const stats = [
  { value: "1.5+", label: "Years experience" },
  { value: "5+", label: "Projects shipped" },
  { value: "2", label: "Professional roles" },
  { value: "3+", label: "Happy clients" },
] as const;

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "Redux",
      "Redux Toolkit",
      "Framer Motion",
      "TanStack Query"
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Stripe API",
      "Next.js API Routes",
      "WebSockets",
      "Socket.IO",
    ],
  },
  {
    title: "Database & Cloud",
    icon: "database",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Redis", "DigitalOcean"],
  },
  {
    title: "Tooling & Practices",
    icon: "wrench",
    skills: ["Git", "GitHub", "Jira", "Postman", "Vercel", "Netlify", "Cloudinary", "Stripe"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  year: string;
  accent: string; // gradient fallback shown when `image` is empty
  // Screenshot for the card thumbnail. Put the file in `public/` and reference
  // it from the base URL, e.g. "/project_1_demo.png". Remote URLs need a
  // matching `images.remotePatterns` entry in `next.config.ts`.
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Vizion Autos",
    description:
      "Vizion Autos is a UK vehicle marketplace where private sellers and dealers list cars for sale, while buyers browse, filter, and save listings. It features detailed vehicle ads, dealer profiles with reviews, Stripe-powered priority listing packages, email-verified authentication, favourites, address lookup, and automatic ad expiry.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "MongoDB",
      "Stripe",
      "Digital Ocean",
      "Framer Motion",
    ],
    liveUrl: "https://test-vizionautos.netlify.app",
    // repoUrl: "https://test-vizionautos.netlify.app",
    featured: true,
    year: "2026",
    accent: "from-indigo-500 to-violet-500",
    image: "/project_1_demo.png",
  },
  {
    title: "Vizion Autos Dealer Dashboard",
    description:
      "A subscription-based dealership management platform for a UK automotive marketplace. Dealers post detailed vehicle ads, track analytics, and respond to reviews under Stripe-enforced plan quotas, while admins onboard dealerships - backed by role-based auth, two-factor login, and Redis-cached session validation.",
    tags: ["Next.js", "Node.js", "Stripe", "MongoDB", "Redis", "TanStack Query", "Material UI", "Nodemailer", "Digital Ocean", "Netlify"],
    liveUrl: "https://dealer-vizionautos.netlify.app/",
    // repoUrl: "https://dealer-vizionautos.netlify.app/",
    featured: true,
    year: "2026",
    accent: "from-sky-500 to-cyan-400",
    image: "/project_2_demo.jpg",
  },
  {
    title: "Stay In",
    description:
      "Full-stack property booking platform for hotels, hostels, and private rentals. Features Stripe payments with host payouts, real-time host–guest chat, QR-code check-in, 360° panorama tours stitched with OpenCV, map-based search, reviews, favourites, and a blog with rich-text editing.",
    tags: ["Next.js", "TypeScript", "Node.js", "Prisma", "MongoDB", "Stripe", "OpenCV", "Socket.IO", "Leaflet", "Cloudinary"],
    liveUrl: "https://stayinnow.vercel.app",
    repoUrl: "https://github.com/hammad-shafqat/stay-in",
    featured: true,
    year: "2025",
    accent: "from-emerald-500 to-teal-400",
    image: "/project_3_demo.jpg",
  },
  // {
  //   title: "Work Syn Pro",
  //   description:
  //     "An open-source, accessible React component library with 40+ components, dark mode, and full keyboard support. 1.2k stars and growing.",
  //   tags: [ "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose"],
  //   // liveUrl: "https://github.com/hammad-shafqat/worksyncpro",
  //   repoUrl: "https://github.com/hammad-shafqat/worksyncpro",
  //   year: "2026",
  //   accent: "from-amber-500 to-orange-500",
  // },

];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
 {
    role: "Full Stack Engineer",
    company: "Vizion Autos",
    period: "Jan, 2026 - Present",
    location: "Islamabad, Pakistan",
    description:
      "Core full-stack engineer building two production platforms for a UK vehicle marketplace: a consumer car-listing site and a subscription-based dealership management portal.",
    highlights: [
      "Shipped the consumer marketplace end-to-end - detailed vehicle ads, dealer profiles with reviews, favourites, address lookup, and automatic ad expiry.",
      "Built the dealer portal with inventory management, ad posting, analytics dashboards, and admin tooling for onboarding dealerships and moderating reviews.",
      "Implemented a tiered subscription model where each package unlocks a distinct feature set and usage limits, gating dealer capabilities by their active plan.",
      "Integrated a full Stripe payment system - checkout, subscriptions, plan upgrades/downgrades, and webhook-driven quota enforcement tied to each package.",
      "Designed the full auth layer with role-based access control (consumer, dealer, admin), email-verified signup, and two-factor login, plus Redis-cached session validation and a MongoDB/Mongoose data layer built for scale.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Decimal Solution",
    period: "Feb, 2025 - May, 2025",
    location: "Islamabad, Pakistan",
    description:
      "Built responsive, data-driven UI and integrated backend APIs across the HR, inventory, and admin modules of an internal management platform.",
    highlights: [
      "Developed the inventory and admin modules with Next.js and Tailwind CSS, including dynamic dashboards with real-time data visualization.",
      "Integrated REST APIs and handled data fetching and state management for seamless frontend-backend communication.",
      "Implemented secure authentication and role-based access control to protect application routes across user roles.",
    ],
  },
  // {
  //   role: "Frontend Developer",
  //   company: "Pixel & Co.",
  //   period: "2020 - 2021",
  //   location: "Manchester, UK",
  //   description:
  //     "Focused on crafting responsive, accessible interfaces for marketing sites and dashboards.",
  //   highlights: [
  //     "Rebuilt the flagship marketing site, boosting Lighthouse scores to 98+.",
  //     "Implemented an internationalization system supporting 6 languages.",
  //   ],
  // },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Web App Development",
    description:
      "Full-stack applications built with modern frameworks, from concept to deployment.",
    icon: "code",
  },
  {
    title: "API & Backend Systems",
    description:
      "Robust, well-documented REST APIs designed to scale with your product.",
    icon: "server",
  },
  {
    title: "UI Engineering",
    description:
      "Accessible, responsive interfaces with pixel-perfect attention to detail.",
    icon: "sparkles",
  },
  {
    title: "Performance & Audits",
    description:
      "Deep-dive audits to speed up load times, improve Core Web Vitals, and cut costs.",
    icon: "gauge",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
