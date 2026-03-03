import { Inter } from "next/font/google";
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jzznllvnc.tech';
const siteUrl = rawSiteUrl.startsWith('http') ? rawSiteUrl : `https://${rawSiteUrl}`;
const ogImagePath = '/images/touser.png';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jazznelle Vince | Portfolio",
  description: "Creative Portfolio of Jazznelle Vince",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jazznelle Vince | Portfolio",
    description: "Creative Portfolio of Jazznelle Vince",
    url: siteUrl,
    siteName: 'Jazznelle Vince Portfolio',
    images: [
      {
        url: ogImagePath,
        alt: 'Jazznelle Vince Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jazznelle Vince | Portfolio",
    description: "Creative Portfolio of Jazznelle Vince",
    images: [ogImagePath],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />

        {/* Custom Style definitions for your fonts */}
        <style>{`
          .font-abel {
            font-family: "Abel", sans-serif;
          }
          .font-righteous {
            font-family: "Righteous", sans-serif;
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}
        <Analytics />
      </body>
    </html>
  );
}
