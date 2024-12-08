import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/header";
import Footer from "./components/footer";
config.autoAddCss = false;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "KiranAhmed Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <AnnouncementBar/>
         <Header/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}