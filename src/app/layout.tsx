import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/layout/Cursor";
import SmoothScroll from "@/components/providers/SmoothScroll";
import PageTransition from "@/components/motion/PageTransition";

export const metadata: Metadata = {
  title: "Osman Ratib — Full-Stack Creative Developer & UI Architect",
  description:
    "Portfolio of Osman Ratib, a full-stack creative developer from Bangladesh building high-performance digital flagships, tactile micro-interactions, and scalable design architectures.",
  keywords: [
    "Osman Ratib",
    "Creative Developer",
    "Software Engineer",
    "UI Architect",
    "Next.js 16",
    "TypeScript",
    "GSAP",
    "Tailwind CSS",
    "Bangladesh",
    "Awwwards",
  ],
  authors: [{ name: "Osman Ratib", url: "https://osmanratib.dev" }],
  creator: "Osman Ratib",
  metadataBase: new URL("https://osmanratib.dev"),
  openGraph: {
    title: "Osman Ratib — Full-Stack Creative Developer & UI Architect",
    description: "High-performance digital flagships, motion-driven UI, and modern web architectures.",
    url: "https://osmanratib.dev",
    siteName: "Osman Ratib Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osman Ratib — Full-Stack Creative Developer & UI Architect",
    description: "High-performance digital flagships, motion-driven UI, and modern web architectures.",
    creator: "@osmanratib",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-zinc-950 selection:bg-black selection:text-white font-sans">
        <SmoothScroll>
          <Cursor />
          <Header />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
