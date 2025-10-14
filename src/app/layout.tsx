import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/navbar/Navbar";

import { titleFont } from "../fonts/fonts";
import { Footer } from "../components/footer/Footer";
import { Sidebar } from "../components/navbar/Sidebar";
import SocialButtons from "../components/ui/SocialButtons";


export const metadata: Metadata = {
  title: "La casa de la semilla",
  description: "La casa de las semillas La casa de la semilla",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="es">
      <body className={`${titleFont.className} antialiased dark:bg-gray-900`}>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh">
          <Navbar />
          <Sidebar />
          {children}
          <SocialButtons />
          <Footer />
        </div>
      </body>
    </html>
  );
}
