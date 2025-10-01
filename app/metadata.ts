// app/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ansh Agarwal | Portfolio",
  description: "Aspiring Entrepreneur",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png" },
  },
};