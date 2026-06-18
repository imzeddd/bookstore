import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "The GridTalk — Books About Speed, Machines & Motorsport",
    template: "%s | The GridTalk",
  },
  description:
    "The GridTalk publishes books about Formula 1, motorsport, and the automobile world. Written for fans who want the full story.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The GridTalk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-white antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
