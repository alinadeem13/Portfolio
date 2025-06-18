import type { Metadata } from "next";
import { Smooch_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const smoochSans = Smooch_Sans({
  variable: "--font-smooch-sans",
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Nadeem's Portfolio",
  description:
    "Welcome to my portfolio website! Here, you can explore my projects, skills, and experiences. I'm a passionate developer with a love for creating innovative solutions. Feel free to reach out if you'd like to collaborate or learn more about my work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${smoochSans.variable} ${roboto.variable}`}>
      <body
        className={` font-roboto bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen flex flex-col `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
