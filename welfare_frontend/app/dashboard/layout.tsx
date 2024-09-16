'use client'
import React, { useState } from 'react'
// import Sidebar from "./Sidebar"
import Sidebar from './sidebar';
import { Menu } from 'lucide-react'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <main className="flex bg-black h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col">
        <header className="bg-black p-4 lg:hidden">
          <button onClick={toggleSidebar} className="text-white">
            <Menu size={24} />
          </button>
        </header>

        <div className="flex-1 bg-white overflow-auto m-4 text-black rounded-xl">
          {children}
        </div>
      </div>
    </main>
  )
}