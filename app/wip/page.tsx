"use client"

import { SiteHeader } from "@/components/site-header"

export default function WipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-light tracking-wider text-gray-900 dark:text-gray-100 text-balance">
          Work in progress
        </h1>
      </main>
      <footer className="border-t dark:border-gray-700">
        <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Agos Capital. All rights reserved.</p>
          <nav className="flex gap-8 mt-4 sm:mt-0"></nav>
        </div>
      </footer>
    </div>
  )
}
