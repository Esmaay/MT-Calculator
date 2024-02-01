import type { Metadata } from "next";
import './globals.css';

import { Inter } from 'next/font/google';

import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MT Calculator",
  description: "Calculator voor Minetopia geld.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId="G-CNXQEXMR4T" />
        <SpeedInsights />
      </body>
    </html>
  );
}
