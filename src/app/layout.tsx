import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "PageForge — Books That Change How You Think",
    template: "%s | PageForge",
  },
  description:
    "Discover books on productivity, self-development, and psychology by bestselling author Alex Morgan. Instant digital downloads and print editions.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PageForge",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
