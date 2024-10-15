import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/src/components/navbar/Navbar";

import { titleFont } from "./fonts/fonts";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "e-commerce seeds",
  description: "La casa de las semillas e-commerce",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body className={`${titleFont.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
