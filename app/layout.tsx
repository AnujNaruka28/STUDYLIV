// import type { Metadata } from "next";
"use client"
import { Inter, /*Edu_SA_Beginner,*/ Roboto_Mono } from "next/font/google";

import "./globals.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Reviews from "./components/common/Reviews";
import { usePathname } from "next/navigation";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
// const eduSA = Edu_SA_Beginner({
//   subsets: ["latin"],
//   variable: "--font-edu-sa-beginner",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <html lang="en">
      <body
        className={`antialiased w-screen relative ${(path.split("/")[1] === "dashboard") ? "h-screen overflow-hidden" : "overflow-x-hidden"} h-full ${inter.variable} font-sans`}
      >
        <NavBar/>
        {children}
        {
          (path.split("/")[3] === "take" || path.split("/")[1] === "dashboard") ? (<></>) : (
            <>
              <Reviews/>
              <Footer/>
            </>
          )
        }
      </body>
    </html>
  );
}
