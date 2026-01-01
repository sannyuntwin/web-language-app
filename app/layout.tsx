import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LangLearn - Learn Foreign Languages for Myanmar Students 🇺🇸🇹🇭🇨🇳🇯🇵",
  description: "Myanmar students can learn English, Thai, Chinese & Japanese with structured lessons, vocabulary practice, and comprehensive testing. 🌍✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#ffffff', color: '#171717' }}
      >
        {children}
      </body>
    </html>
  );
}
