import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jazznelle Vince | Portfolio",
  description: "Creative Portfolio of Jazznelle Vince",
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
        
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Custom Style for the new font */}
        <style>{`
          .font-abel {
            font-family: "Abel", sans-serif;
          }
          .font-righteous {
            font-family: "Righteous", sans-serif;
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}