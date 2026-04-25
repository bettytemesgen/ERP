import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* This Flex container creates the Sidebar + Content split */}
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          
          <div className="flex-1 flex flex-col">
            <Header />
            {/* The page content (Dashboard) goes here */}
            <main className="p-8 max-w-7xl mx-auto w-full">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}