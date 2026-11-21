import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/layout/Cursor";
import SmoothScroll from "@/components/providers/SmoothScroll";
import PageTransition from "@/components/motion/PageTransition";

export const metadata: Metadata = {
  title: "Osman Ratib — Creative Developer & UI Engineer",
  description:
    "Clean, high-performance portfolio of Osman Ratib, a creative developer and UI engineer building modern web experiences with Next.js, TypeScript, and fluid motion.",
  keywords: [
    "Osman Ratib",
    "Creative Developer",
    "Software Engineer",
    "UI Engineer",
    "Next.js",
    "TypeScript",
    "Inter",
    "Portfolio",
  ],
  authors: [{ name: "Osman Ratib", url: "https://osmanratib.dev" }],
  creator: "Osman Ratib",
  metadataBase: new URL("https://osmanratib.dev"),
  openGraph: {
    title: "Osman Ratib — Creative Developer & UI Engineer",
    description: "High-performance digital products, clean typography, and modern web architectures.",
    url: "https://osmanratib.dev",
    siteName: "Osman Ratib Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osman Ratib — Creative Developer & UI Engineer",
    description: "High-performance digital products, clean typography, and modern web architectures.",
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
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white font-sans">
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
