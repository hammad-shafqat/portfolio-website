import type { Metadata } from "next";
import { Roboto, Urbanist } from "next/font/google";
import "./globals.css";

const display = Urbanist({
  variable: "--font-display-face",
  subsets: ["latin"],
});

const body = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hammad Shafqat | Full Stack MERN & Next.js Developer",
  description:
    "Portfolio of Hammad Shafqat, a Full Stack Software Engineer specializing in MERN Stack, Next.js, React, TypeScript, Node.js, Express.js, MongoDB, and scalable web application development.",
  keywords: [
    "Hammad Shafqat",
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Hammad Shafqat" }],
  creator: "Hammad Shafqat",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  openGraph: {
    title: "Hammad Shafqat | Full Stack MERN & Next.js Developer",
    description:
      "Explore my portfolio, projects, technical skills, and experience as a Full Stack Software Engineer.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hammad Shafqat | Full Stack MERN & Next.js Developer",
    description:
      "Portfolio showcasing my Full Stack development projects, skills, and experience.",
  },
};

// Runs synchronously in <head>, before first paint, so the correct theme is
// applied with no flash. Uses the saved preference, otherwise the OS setting.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t)t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";var r=document.documentElement;r.setAttribute("data-theme",t);r.style.colorScheme=t;}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
