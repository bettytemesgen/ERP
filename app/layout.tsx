// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus ERP | Factory Management",
  description: "Advanced ERP for furniture manufacturing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen bg-gray-50">
          {/* Main Sidebar */}
          <Sidebar />
          
          <div className="flex-1 flex flex-col">
            {/* Header now accepts an optional title */}
            <Header />
            
            <main className="p-8 max-w-7xl mx-auto w-full">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}