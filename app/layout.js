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
      <body className={roboto.className}>
        <Navbar />
        <div>{children}</div>
        <Links />
        <Footer />
      </body>
    </html>
  );
}
