import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keymaster Venture Studio - Building Venture Systems Together",
  description: "Keymaster Venture Studio helps founders build foundational systems and infrastructure. We specialize in venture architecture, ecosystem design, AI systems, and sustainable growth for early-stage startups.",
  keywords: ["Keymaster", "Venture Studio", "Venture Architecture", "Ecosystem Design", "AI Systems", "Startup Consulting", "Growth Strategy", "Product Discovery", "Think Tank", "Founder Programs"],
  authors: [{ name: "Keymaster Venture Studio Team" }],
  creator: "Keymaster Venture Studio",
  publisher: "Keymaster Venture Studio",
  metadataBase: new URL('https://keymaster.vc'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Keymaster Venture Studio - Building Venture Systems Together",
    description: "We build foundational systems for startups. Venture architecture, ecosystem design, AI systems integration, and sustainable growth.",
    url: "https://keymaster.vc",
    siteName: "Keymaster Venture Studio",
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: '/images/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Keymaster Venture Studio - Building Venture Systems Together',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keymaster Venture Studio - Building Venture Systems Together",
    description: "We build foundational systems for startups. Venture architecture, ecosystem design, AI systems integration, and sustainable growth.",
    images: ['/images/home-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}