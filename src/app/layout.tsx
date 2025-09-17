import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShiftPoint Agency - Ultra High-Tech Consulting",
  description: "Transform your business with cutting-edge technology solutions, AI, cloud architecture, cybersecurity, and innovative digital experiences.",
  keywords: ["consulting", "technology", "AI", "cloud", "cybersecurity", "digital transformation"],
  authors: [{ name: "ShiftPoint Agency" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
