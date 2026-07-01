"use client"

import { SiteHeader } from "@/components/site-header"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider text-gray-900 dark:text-gray-100">
                Our Services
              </h2>
              <div className="text-left space-y-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Agos Capital operates globally, providing private strategic advisory, consulting and arranging capital
                  flows wherever needed.
                </p>
              </div>
            </div>
          </div>
        </section>
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
