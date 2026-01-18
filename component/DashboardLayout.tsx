"use client";

import { Suspense } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Navbar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div className="p-6">Loading dashboard...</div>}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex-1 ml-0 md:ml-64 flex flex-col">
          <header className="fixed top-0 left-0 md:left-64 right-0 h-16 bg-white z-40 border-b">
            <Header />
          </header>

          <main className="mt-16 flex-1 overflow-y-auto">
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </Suspense>
  );
}
