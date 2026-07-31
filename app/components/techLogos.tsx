import type { ComponentType, SVGProps } from "react";
import {
  SiCloudinary,
  SiDigitalocean,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiJira,
  SiMongodb,
  SiMongoose,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTanstack,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Code, Server } from "./icons";

type Logo = ComponentType<SVGProps<SVGSVGElement>>;

/* Brand marks keyed by the skill names used in `lib/data.ts`. Anything without
   an official logo (Zustand, REST APIs) falls back to a monogram tile. */
export const techLogos: Record<string, Logo> = {
  // Frontend
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Redux: SiRedux,
  "Redux Toolkit": SiRedux,
  "Framer Motion": SiFramer,
  "TanStack Query": SiTanstack,

  // Backend
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": Code,
  "Stripe API": SiStripe,
  "Next.js API Routes": SiNextdotjs,
  WebSockets: Server,
  "Socket.IO": SiSocketdotio,

  // Database & cloud
  MongoDB: SiMongodb,
  Mongoose: SiMongoose,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  Redis: SiRedis,
  DigitalOcean: SiDigitalocean,

  // Tooling
  Git: SiGit,
  GitHub: SiGithub,
  Jira: SiJira,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  Cloudinary: SiCloudinary,
  Stripe: SiStripe,
  Postman: SiPostman,
};

/* Short monogram for skills that have no brand mark of their own. */
export const techMonograms: Record<string, string> = {
  Zustand: "Z",
};

export function getTechMonogram(skill: string) {
  return techMonograms[skill] ?? skill.slice(0, 2).toUpperCase();
}
