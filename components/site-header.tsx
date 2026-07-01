"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header className="container mx-auto px-4 lg:px-6 h-24 flex items-center justify-between border-b dark:border-gray-700">
      <Link className="flex items-center justify-center" href="/">
        <span className="inline-flex dark:bg-[#101827]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agos%20Light%20Logo-pArHvH4wCElHOcPwLw4tLiqXlxtpUj.png"
            alt="Agos Capital Logo"
            width={50}
            height={50}
            className="transition-all duration-300 dark:invert dark:mix-blend-screen"
          />
        </span>
        <span className="ml-4 text-xl font-light tracking-wider text-gray-900 dark:text-gray-100">AGOS CAPITAL</span>
      </Link>
      <nav className="flex gap-8 items-center">
        <Link
          className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          href="/#about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          href="/wip"
        >
          WIP
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </nav>
    </header>
  )
}
