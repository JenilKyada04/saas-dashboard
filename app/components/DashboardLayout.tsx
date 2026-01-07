"use client";

import Sidebar from "../components/Sidebar";
import Footer from "./Footer";
import Header from "./Navbar";

import React from 'react'

function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <div className="flex">
       <Sidebar />
       <main className="flex-1 p-6 space-y-6">
         <Header />
          {children}
         <Footer />
       </main>
     </div>
  )
}

export default DashboardLayout

