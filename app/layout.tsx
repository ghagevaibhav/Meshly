import type { Metadata } from "next";
import {Work_Sans} from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});
const workMono = Work_Sans({
  subsets: ['latin'],
  variable: "--font-work-mono",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Figma Alternative",
  description: "A minimalist Figma Alternative made using Fabric.js and Liveblocks for real time collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} bg-primary-grey-200 ${workMono.variable} antialiased`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
