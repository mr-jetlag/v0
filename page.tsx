"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Moon, Sun, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Declare YT as a global variable
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" })

  // Add ref for the video container
  const videoContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Effect to handle video positioning
  useEffect(() => {
    // Create YouTube Player
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    let player: any

    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player("youtube-player", {
        videoId: "tu8DoBIOLv8",
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: "tu8DoBIOLv8",
          plasyinline: 1,
          controls: 0,
          color: "white",
          showinfo: 0,
          start: 10,
          rel: 0,
          enablejsapi: 1,
          modestbranding: 1,
          mute: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo()
          },
        },
      })
    }

    return () => {
      if (player) {
        player.destroy()
      }
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleContactClick = () => {
    setShowContactForm(true)
  }

  const handleCloseForm = () => {
    setShowContactForm(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server or API
    console.log("Form submitted:", formData)
    // For demonstration, we'll just log the data and close the form
    alert("Thank you for your enquiry. We will get back to you soon. Data:", formData)
    setShowContactForm(false)
    setFormData({ name: "", phone: "", email: "", enquiry: "" }) // Reset form
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="container mx-auto px-4 lg:px-6 h-24 flex items-center justify-between border-b dark:border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src={
              darkMode
                ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agos%20Dark%20Logo-Sisj0KrYxd2TsEI1TanU6PHNQp6VhT.png"
                : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agos%20Light%20Logo-pArHvH4wCElHOcPwLw4tLiqXlxtpUj.png"
            }
            alt="Agos Capital Logo"
            width={50}
            height={50}
            className="transition-all duration-300"
          />
          <span className="ml-4 text-xl font-light tracking-wider text-gray-900 dark:text-gray-100">AGOS CAPITAL</span>
        </Link>
        <nav className="flex gap-8 items-center">
          <Link
            className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            href="#clients"
          >
            Clients
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            href="#investors"
          >
            Investors
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <div className="relative w-full h-full">
              <div
                id="youtube-player"
                className="w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-y-16 pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white">
                We are Agos.
              </h1>
              <p className="text-xl text-gray-200">
                We believe capital should flow to where it's needed most.
              </p>
              <div className="flex justify-center gap-4">
             {/*     <Button
                  onClick={handleContactClick}
                  variant="outline"
                  className="text-gray border-white hover:bg-white/10 px-8"
                >
                  Contact Us
                </Button>
              */}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider text-gray-900 dark:text-gray-100">
                About Us
              </h2>
              <div className="text-left space-y-6">
                <p className="text-gray-600 dark:text-gray-300">
                  "Agos" is the Tagalog word for the flow of a river or the ocean current. After decades of work in the
                  global capital markets, we at Agos Capital understand that the concept of flow and growth are
                  intimately linked:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    Strong flows of capital, to provide the driving force for innovation, growth and to weather adverse
                    conditions.
                  </li>
                  <li>
                    The "flow state", the melting together of action and consciousness into a continuous state of deep
                    work where teams and companies do their greatest work.
                  </li>
                  <li>
                    Knowledge flow, the open sharing of experience and information in the service of a greater purpose
                    and to the benefit of the whole.
                  </li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300">
                  Agos Capital operates globally, providing private strategic advisory, consulting and arranging capital
                  flows wherever needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="w-full py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-light tracking-wider text-gray-900 dark:text-gray-100">
                  Our Clients
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  At Agos Capital, we provide transformational consulting and advisory services to global firms.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Private Capital Markets</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>Transactional advisory and operational consulting </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Portfolio Companies & Startups</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>Product/market fit, Direct Operation / Fractional CxO Services, Board Advisor</p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Enterprise SaaS Companies</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>Product Advisory, Go to Market planning, Execution</p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Global Consultancies</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>Foundational Private Markets Training; Deal Advisory; Vendor selections</p>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center space-y-8">
                <p className="text-gray-600 dark:text-gray-300">
                  Working with clients who share our goals and values, we are able to provide immediate value and
                  meaningful long term impact – up to and including private market exits.
                </p>
                <p></p>
                 <Link
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  href="https://calendly.com/contact-agoscapital/30min?back=1"
                >
                  <Button
                  // onClick={handleContactClick}
                  variant="outline"
                  className="text-gray border-white hover:bg-white/10 px-8"
                  >
                    Client Advisory <ArrowRight className="ml-2 h-4 w-4"/>
                  </Button>
                 </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="investors" className="w-full py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-light tracking-wider text-gray-900 dark:text-gray-100">
                  Our Investment Approach
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Our investment approach is deeply personal, always private, and focused on win-win outcomes. Current
                  Agos Capital portfolio companies include:
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Corporate Secretarial Services</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>
                      A publicly listed provider, one of the fastest growing companies in Singapore with expansions into
                      Australia, the UK and US. <i>Private debt facility.</i>
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">AI Startup</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>
                      A pre-seed startup commercialising proprietary AI models from a Tier 1 government deeptech agency.
                      <i>Angel Round, common equity.</i>
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Private Debt and CLO Markets</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>
                      A disruptive CLO challenger firm supported by the largest ratings, data and analytics firm in the
                      world. <i>Series A, common equity.</i>
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center space-y-8">
                <p className="text-gray-600 dark:text-gray-300">
                  We only invest in companies where our direct experience provide insights into the eventual exit. We
                  only operate or advise companies where direct involvement accelerates outcomes and provides direct
                  value to our partners.
                </p>
                <p></p>
                <Link
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  href="https://calendly.com/contact-agoscapital/30min?back=1"
                >
                  <Button
                    // onClick={handleContactClick}
                    variant="outline"
                    className="text-gray border-white hover:bg-white/10 px-8"
                  >
                    Co-Investment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>  
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t dark:border-gray-700">
        <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Agos Capital. All rights reserved.</p>
          <nav className="flex gap-8 mt-4 sm:mt-0">
          </nav>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Contact Us</h2>
              <Button variant="ghost" size="icon" onClick={handleCloseForm}>
                <X className="h-6 w-6" />
              </Button>
            </div>
              <form 
                onSubmit={handlePost} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="enquiry">Your Enquiry</Label>
                <Input
                  id="enquiry"
                  name="enquiry"
                  type="enquiry"
                  value={formData.enquiry}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Submit
              </Button>
            </form> 
          </div>
        </div>
      )}
    </div>
  )
}

