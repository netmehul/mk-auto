import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Electrolize } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const electrolize = Electrolize({
  variable: "--font-electrolize",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "MAHY Khooray Automotives",
  description: "Connecting Global Automotive Brands with the UAE",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${electrolize.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
