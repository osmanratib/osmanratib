import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/layout/Cursor";
import SmoothScroll from "@/components/providers/SmoothScroll";
import PageTransition from "@/components/motion/PageTransition";

export const metadata: Metadata = {
  title: "Osman Ratib — Software Engineer & Digital Craftsman",
  description:
    "Editorial / Swiss-gallery portfolio of Osman Ratib, a web developer from Bangladesh building digital experiences with Next.js, TypeScript, and motion design.",
  keywords: [
    "Osman Ratib",
    "Web Developer",
    "Software Engineer",
    "Bangladesh",
    "Next.js",
    "TypeScript",
    "Awwwards",
    "GSAP",
  ],
  authors: [{ name: "Osman Ratib", url: "https://osmanratib.dev" }],
  creator: "Osman Ratib",
  metadataBase: new URL("https://osmanratib.dev"),
  openGraph: {
    title: "Osman Ratib — Software Engineer & Digital Craftsman",
    description: "Editorial monograph & interactive portfolio of Osman Ratib.",
    url: "https://osmanratib.dev",
    siteName: "Osman Ratib Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osman Ratib — Software Engineer & Digital Craftsman",
    description: "Editorial monograph & interactive portfolio of Osman Ratib.",
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
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans">
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
