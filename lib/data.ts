// -----------------------------------------------------------------------------
// Dummy portfolio content.
// Replace the values below with your real information — the UI reads everything
// from this single file, so nothing else needs to change.
// -----------------------------------------------------------------------------

// Contact details live in `.env` so they aren't hardcoded here. Both must be
// referenced as full `process.env.NEXT_PUBLIC_*` expressions — Next.js inlines
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
    "Full Stack Engineer specializing in the MERN stack and Next.js. I turn ambitious ideas into production-grade products — from pixel-perfect interfaces to resilient APIs and databases that scale.",
  location: "Islamabad, Pakistan",
  availability: "Contact for freelance & full-time roles",
  email: contactEmail,
  phone: contactPhone,
  resumeUrl: "/resume.pdf",
  avatar: "", // add a path like "/avatar.jpg" — falls back to initials if empty
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/hammad-shafqat", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hammad-shafqat/", icon: "linkedin" },
  { label: "X", href: "https://x.com/HammadShafqat4", icon: "x" },
  { label: "Email", href: `mailto:${contactEmail}`, icon: "mail" },
] as const;

export const stats = [
  { value: "5+", label: "Years experience" },
  { value: "40+", label: "Projects shipped" },
  { value: "25+", label: "Happy clients" },
  { value: "12", label: "Open-source repos" },
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
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "tRPC",
    ],
  },
  {
    title: "Database & Cloud",
    icon: "database",
    skills: ["MongoDB", "PostgreSQL", "Prisma", "Redis", "AWS", "Docker"],
  },
  {
    title: "Tooling & Practices",
    icon: "wrench",
    skills: ["Git", "CI/CD", "Jest", "Playwright", "Figma", "Agile / Scrum"],
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
  accent: string; // used for the card's gradient thumbnail
};

export const projects: Project[] = [
  {
    title: "Nimbus Analytics",
    description:
      "A real-time analytics dashboard processing millions of events per day. Built a streaming pipeline with WebSockets and a virtualized data grid that stays smooth at scale.",
    tags: ["Next.js", "TypeScript", "WebSockets", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2025",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    title: "Orbit Commerce",
    description:
      "Headless e-commerce platform with Stripe checkout, inventory sync, and an admin CMS. Cut page load times by 60% with edge rendering and image optimization.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2024",
    accent: "from-sky-500 to-cyan-400",
  },
  {
    title: "Taskly",
    description:
      "Collaborative project management app with realtime boards, role-based access, and offline-first sync. Powers teams with drag-and-drop workflows.",
    tags: ["Next.js", "tRPC", "Prisma", "Redis"],
    liveUrl: "#",
    repoUrl: "#",
    year: "2024",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    title: "Lumen UI",
    description:
      "An open-source, accessible React component library with 40+ components, dark mode, and full keyboard support. 1.2k stars and growing.",
    tags: ["React", "TypeScript", "Storybook", "a11y"],
    liveUrl: "#",
    repoUrl: "#",
    year: "2023",
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Pulse Chat",
    description:
      "End-to-end encrypted messaging app with typing indicators, read receipts, and media sharing. Scaled to 10k concurrent connections.",
    tags: ["Socket.io", "Express", "MongoDB", "AWS"],
    liveUrl: "#",
    repoUrl: "#",
    year: "2023",
    accent: "from-rose-500 to-pink-500",
  },
  {
    title: "DevFolio CLI",
    description:
      "A command-line tool that scaffolds developer portfolios from a config file. Published to npm with 8k monthly downloads.",
    tags: ["Node.js", "TypeScript", "Ink", "npm"],
    repoUrl: "#",
    year: "2022",
    accent: "from-fuchsia-500 to-purple-500",
  },
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
    role: "Senior Full Stack Engineer",
    company: "Vertex Labs",
    period: "2023 — Present",
    location: "Islamabad, Pakistan",
    description:
      "Lead engineer on the core product team, owning architecture decisions across the stack.",
    highlights: [
      "Migrated a monolith to a modular Next.js architecture, improving build times by 45%.",
      "Mentored 4 engineers and established the team's code review and testing standards.",
      "Designed a caching layer that reduced average API latency from 320ms to 90ms.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Brightwave Studio",
    period: "2021 — 2023",
    location: "Remote",
    description:
      "Built and shipped client web apps end-to-end for startups and agencies.",
    highlights: [
      "Delivered 20+ production apps with React, Node.js, and MongoDB.",
      "Introduced CI/CD pipelines that cut deployment time from hours to minutes.",
      "Collaborated directly with designers to build a reusable component system.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Pixel & Co.",
    period: "2020 — 2021",
    location: "Manchester, UK",
    description:
      "Focused on crafting responsive, accessible interfaces for marketing sites and dashboards.",
    highlights: [
      "Rebuilt the flagship marketing site, boosting Lighthouse scores to 98+.",
      "Implemented an internationalization system supporting 6 languages.",
    ],
  },
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
      "Robust, well-documented REST and GraphQL APIs designed to scale with your product.",
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
