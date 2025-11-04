<<<<<<< HEAD
import type { Metadata } from 'next';
=======
<<<<<<< HEAD
import type { Metadata } from 'next';
=======
import type { Metadata } from "next";
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
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
<<<<<<< HEAD
=======
=======
  title: "Keyteller - AI Business Innovation & Strategy",
  description: "Keyteller helps businesses leverage AI for innovation, strategy, and operational efficiency through workshops, think tanks, and consulting services.",
  keywords: ["Keyteller", "AI", "Business Strategy", "Innovation", "Workshops", "Consulting", "Product Design", "Strategy Sprints"],
  authors: [{ name: "Keyteller Team" }],
  openGraph: {
    title: "Keyteller - AI Business Innovation",
    description: "Transform your business with AI-powered strategy and innovation workshops",
    url: "https://keyteller.com",
    siteName: "Keyteller",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyteller - AI Business Innovation",
    description: "Transform your business with AI-powered strategy and innovation workshops",
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
  },
};

export default function RootLayout({
  children,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
<<<<<<< HEAD
=======
=======
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
        {children}
        <Toaster />
      </body>
    </html>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
