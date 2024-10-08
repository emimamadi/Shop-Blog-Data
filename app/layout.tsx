import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";
import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLOG    *    PRODUCT   *    DATA",
  description: "BLOG * PRODUCT * DATA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  );
}
