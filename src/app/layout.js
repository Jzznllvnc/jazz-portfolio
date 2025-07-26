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
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}