import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });
export const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
