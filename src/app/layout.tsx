import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { AdminProvider } from "@/lib/AdminContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tnwebz.com"),
  title: {
    default: "Website & App Development Company in Chennai | TNWebz",
    template: "%s | TNWebz",
  },
  description:
    "TNWebz is a website and app development studio in Chennai, Tamil Nadu. We build custom websites, business websites, e-commerce stores, web applications, and mobile apps for businesses across Chennai, Tambaram, Guindy, Kanchipuram, and surrounding areas.",
  keywords: [
    "website development Chennai",
    "web developer Chennai",
    "app development Chennai",
    "website designer Chennai",
    "business website development",
    "e-commerce development",
    "mobile app development",
    "TNWebz",
  ],
  authors: [{ name: "TNWebz" }],
  creator: "TNWebz",
  publisher: "TNWebz",
  alternates: {
    canonical: "https://tnwebz.com",
  },
  openGraph: {
    title: "Website & App Development Company in Chennai | TNWebz",
    description:
      "TNWebz builds custom websites, mobile apps, and web applications for businesses in Chennai and surrounding areas. Transform your ideas into stunning digital experiences.",
    url: "https://tnwebz.com",
    siteName: "TNWebz",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website & App Development Company in Chennai | TNWebz",
    description:
      "TNWebz builds custom websites, mobile apps, and web applications for businesses in Chennai and surrounding areas.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AdminProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </AdminProvider>
      </body>
    </html>
  );
}
