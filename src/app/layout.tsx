import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/lib/components/navbar/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issue tracker",
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
        className={inter.className}
      >
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
