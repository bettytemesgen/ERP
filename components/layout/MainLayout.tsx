"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({ children, title }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1">
        <Header title={title} />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}