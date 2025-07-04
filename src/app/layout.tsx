import { Toaster } from "sonner";
import { gasoekOne, bricolageGrotesque } from "./fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Lighthouse",
  description:
    "Lighthouse is a Product Studio and SaaS Launcher. We buy, build, and scale software tools.",

  // Open Graph metadata for social media sharing
  openGraph: {
    title: "Lighthouse",
    description:
      "Lighthouse is a Product Studio and SaaS Launcher. We buy, build, and scale software tools.",
    url: "https://www.lighthouselaunch.com",
    siteName: "Lighthouse",
    type: "website",
    images: [
      {
        url: "/Lighthouse-FacebookPost.png",
        width: 1200,
        height: 630,
        alt: "Lighthouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lighthouse",
    description:
      "Lighthouse is a Product Studio and SaaS Launcher. We buy, build, and scale software tools.",
    images: ["/Lighthouse-FacebookPost.png"], // Same image as Open Graph
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.lighthouselaunch.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gasoekOne.variable} ${bricolageGrotesque.variable} `}
    >
      <body>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
