import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ansh Agarwal | Software Engineer",
  description:
    "Portfolio of Ansh Agarwal — Computer Science student and aspiring Software Engineer focused on Java, Spring Boot, Python, and building practical, impactful applications.",
  applicationName: "Ansh Agarwal Portfolio",
  authors: [{ name: "Ansh Agarwal" }],
  keywords: [
    "Ansh Agarwal",
    "Software Engineer",
    "Portfolio",
    "Java",
    "Spring Boot",
    "Python",
    "Full Stack",
    "Next.js",
    "React",
  ],
  openGraph: {
    type: "website",
    title: "Ansh Agarwal | Software Engineer",
    description:
      "Portfolio of Ansh Agarwal — projects, experience, and contact.",
    siteName: "Ansh Agarwal",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ansh Agarwal — Portfolio",
      },
    ],
  },
  // No icons here on purpose (you said you want to remove the tab icon)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
