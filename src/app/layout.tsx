import type { Metadata } from "next";
import { clacon } from "@/assets/fonts";
import "@/styles/global.css";

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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={clacon.className}>{children}</body>
    </html>
  );
}
