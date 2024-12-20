import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptCoin Invest",
  description: "Generated by yours truly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Cryptcoin Invest</title>
      </head>
      <body className={inter.className}>
      <Toaster position="top-right"></Toaster>
      <div>{children}</div>
        </body>
    </html>
  );
}
