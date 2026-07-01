"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  const [darkMode, setDarkMode] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Load the saved preference on mount so it persists across pages
  useEffect(() => {
    const stored = localStorage.getItem("darkMode")
    if (stored !== null) {
      setDarkMode(stored === "true")
    } else {
      // Fall back to the current class in case it was set before hydration
      setDarkMode(document.documentElement.classList.contains("dark"))
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    // Wait until the stored preference is loaded so we don't clobber it
    // with the initial `false` value on every page mount.
    if (!loaded) return
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", String(darkMode))
  }, [darkMode, loaded])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        <Link className="flex items-center gap-3 group" href="/">
          <span className="inline-flex dark:bg-[#101827]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agos%20Light%20Logo-pArHvH4wCElHOcPwLw4tLiqXlxtpUj.png"
              alt="Agos Capital Logo"
              width={44}
              height={44}
              className="transition-all duration-300 dark:invert dark:mix-blend-screen"
            />
          </span>
          <span className="font-serif text-2xl font-medium tracking-[0.2em] text-foreground">AGOS</span>
        </Link>
        <nav className="flex gap-8 items-center">
          <Link
            className="relative text-sm font-medium text-muted-foreground hover:text-brand transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            href="/#about"
          >
            About
          </Link>
          <Link
            className="relative text-sm font-medium text-muted-foreground hover:text-brand transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            href="/services"
          >
            Our Services
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="text-muted-foreground hover:text-brand"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </div>
    </header>
  )
}
