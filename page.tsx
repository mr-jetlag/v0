"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, ChevronDown, X } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

// Declare YT as a global variable
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" })

  // Add ref for the video container
  const videoContainerRef = useRef<HTMLDivElement>(null)

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
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <div className="relative w-full h-full">
              <div
                id="youtube-player"
                className="w-[195.56vw] h-[110vw] min-w-[195.56vh] min-h-[110vh] -translate-y-12 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" /> {/* Overlay */}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/70">
                Private Strategic Advisory &amp; Capital
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white text-balance">
                We are Agos.
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light max-w-xl mx-auto text-pretty">
                We believe capital should flow to where it&apos;s needed most.
              </p>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
            <Link
              href="#about"
              aria-label="Scroll to about section"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white/80 transition-colors hover:border-white hover:text-white"
            >
              <ChevronDown className="h-5 w-5" />
            </Link>
          </div>
        </section>

        <section id="about" className="w-full py-24 md:py-32 bg-secondary scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-10">
              <div className="text-center space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">About Us</p>
                <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground text-balance">
                  Where flow and growth meet
                </h2>
              </div>
              <div className="text-left space-y-6 max-w-2xl mx-auto">
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  &ldquo;Agos&rdquo; is the Tagalog word for the flow of a river or the ocean current. After decades of
                  work in the global capital markets, we at Agos Capital understand that the concept of flow and growth
                  are intimately linked:
                </p>
                <ul className="space-y-4">
                  {[
                    "Strong flows of capital, to provide the driving force for innovation, growth and to weather adverse conditions.",
                    'The "flow state", the melting together of action and consciousness into a continuous state of deep work where teams and companies do their greatest work.',
                    "Knowledge flow, the open sharing of experience and information in the service of a greater purpose and to the benefit of the whole.",
                  ].map((point) => (
                    <li key={point} className="flex gap-4 text-muted-foreground leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="w-full py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-14">
              <div className="text-center space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Who We Serve</p>
                <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground text-balance">
                  Our Clients
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                  At Agos Capital, we provide transformational consulting and advisory services to global firms.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Private Capital Markets",
                    body: "Transactional advisory and operational consulting.",
                  },
                  {
                    title: "Portfolio Companies & Startups",
                    body: "Product/market fit, Direct Operation / Fractional CxO Services, Board Advisor.",
                  },
                  {
                    title: "Enterprise SaaS Companies",
                    body: "Product Advisory, Go to Market planning, Execution.",
                  },
                  {
                    title: "Global Consultancies",
                    body: "Foundational Private Markets Training; Deal Advisory; Vendor selections.",
                  },
                ].map((item) => (
                  <Card
                    key={item.title}
                    className="group border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
                  >
                    <CardHeader>
                      <CardTitle className="font-serif text-xl font-medium text-foreground">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground leading-relaxed">
                      <p>{item.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center space-y-8">
                <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Working with clients who share our goals and values, we are able to provide immediate value and
                  meaningful long term impact &ndash; up to and including private market exits.
                </p>
                <Link href="https://calendly.com/contact-agoscapital/30min?back=1">
                  <Button className="bg-brand text-brand-foreground hover:bg-brand/90 px-8 h-11 group">
                    Client Advisory
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="investors" className="w-full py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-14">
              <div className="text-center space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Investing</p>
                <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground text-balance">
                  Our Investment Approach
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Our investment approach is deeply personal, always private, and focused on win-win outcomes. Current
                  Agos Capital portfolio companies include:
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Corporate Secretarial Services",
                    body: "A publicly listed provider, one of the fastest growing companies in Singapore with expansions into Australia, the UK and US.",
                    tag: "Private debt facility",
                  },
                  {
                    title: "AI Startup",
                    body: "A pre-seed startup commercialising proprietary AI models from a Tier 1 government deeptech agency.",
                    tag: "Angel Round, common equity",
                  },
                  {
                    title: "Private Debt and CLO Markets",
                    body: "A disruptive CLO challenger firm supported by the largest ratings, data and analytics firm in the world.",
                    tag: "Series A, common equity",
                  },
                ].map((item) => (
                  <Card
                    key={item.title}
                    className="group flex flex-col border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
                  >
                    <CardHeader>
                      <CardTitle className="font-serif text-xl font-medium text-foreground">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                      <p>{item.body}</p>
                      <span className="inline-flex w-fit items-center rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-medium text-brand">
                        {item.tag}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center space-y-8">
                <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                  We only invest in companies where our direct experience provide insights into the eventual exit. We
                  only operate or advise companies where direct involvement accelerates outcomes and provides direct
                  value to our partners.
                </p>
                <Link href="https://calendly.com/contact-agoscapital/30min?back=1">
                  <Button className="bg-brand text-brand-foreground hover:bg-brand/90 px-8 h-11 group">
                    Co-Investment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-medium tracking-[0.2em] text-foreground">AGOS</span>
            <span className="text-sm text-muted-foreground">Capital</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Agos Capital. All rights reserved.</p>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-card text-card-foreground rounded-xl border border-border p-6 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-serif text-2xl font-medium text-foreground">Contact Us</h2>
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
              <Button type="submit" className="w-full bg-brand text-brand-foreground hover:bg-brand/90">
                Submit
              </Button>
            </form> 
          </div>
        </div>
      )}
    </div>
  )
}

