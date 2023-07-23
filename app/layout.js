"use client";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Links from "@/components/Links/Links";
import Footer from "@/components/Footer/Footer";
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });
export const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content="Lodestone Patient care Hospital" />
        <meta
          name="description"
          content="Welcome to Lodestone patient care Hospital - where compassionate care meets cutting-edge medicine. Our dedicated team of professionals provides personalized treatment in a welcoming and modern facility. Your health and well-being are our priority, ensuring a comforting and healing experience throughout your journey to recovery. Lodestone patient care hospital for exceptional healthcare and support."
        />
        <meta name="keywords" content="Hospital, Patient, NHS, health, MRi" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </head>
      <body className={roboto.className}>
        <Navbar />
        <div>{children}</div>
        <Links />
        <Footer />
      </body>
    </html>
  );
}
