import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { clacon } from "@/styles/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serial Project Prototype",
  description: "Serial Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clacon.className}>{children}</body>
    </html>
  );
}
