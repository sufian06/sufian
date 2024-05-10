import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abu Sufian - Web developer",
  description: "I am javascript web developer",
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
        style={{ backgroundColor: "#0F172A", color: "#E2E8F0" }}
      >
        {children}
      </body>
    </html>
  );
}
