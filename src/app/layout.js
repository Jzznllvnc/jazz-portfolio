import { Inter, Abel, Righteous } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"], variable: "--font-abel" });
const righteous = Righteous({ subsets: ["latin"], weight: ["400"], variable: "--font-righteous" });

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
      <body className={`${inter.className} ${abel.variable} ${righteous.variable}`}>{children}
        <Analytics />
      </body>
    </html>
  );
}
