import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TNWebz — Premium Web & App Development Studio",
  description:
    "TNWebz is a premium freelancing studio specializing in custom website development, mobile app development, and SEO-optimized digital solutions. Transform your ideas into stunning digital experiences.",
  keywords: [
    "web development",
    "app development",
    "freelancing",
    "website design",
    "mobile app",
    "SEO",
    "TNWebz",
  ],
  authors: [{ name: "TNWebz" }],
  openGraph: {
    title: "TNWebz — Premium Web & App Development Studio",
    description:
      "Transform your ideas into stunning digital experiences with TNWebz.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
