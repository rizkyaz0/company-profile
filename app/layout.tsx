import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: {
    default: "Saramlam - Modern Web Development Solutions",
    template: "%s | Saramlam"
  },
  description: "Building modern web experiences with cutting-edge technology, beautiful design, and exceptional performance. We provide full-stack solutions for startups and enterprises.",
  keywords: [
    "web development",
    "next.js",
    "react",
    "typescript",
    "tailwind css",
    "modern web design",
    "full-stack development",
    "SaaS development",
    "web applications"
  ],
  authors: [{ name: "Saramlam Team" }],
  creator: "Saramlam",
  publisher: "Saramlam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://saramlam.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saramlam.com",
    title: "Saramlam - Modern Web Development Solutions",
    description: "Building modern web experiences with cutting-edge technology, beautiful design, and exceptional performance.",
    siteName: "Saramlam",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saramlam - Modern Web Development Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saramlam - Modern Web Development Solutions",
    description: "Building modern web experiences with cutting-edge technology, beautiful design, and exceptional performance.",
    images: ["/og-image.jpg"],
    creator: "@saramlam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
