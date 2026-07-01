"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"

const advisoryPortfolio = [
  { title: "Equity Management Platform", description: "Advisory partner to an equity management platform." },
  {
    title: "Asset-Based Finance SaaS Platform",
    description: "Operating and advisory support for an asset-based finance SaaS platform.",
  },
  { title: "Digital Transformation Consultancy", description: "Advisory to a digital transformation consultancy." },
  {
    title: "Government Owned & Controlled Corporation (GOCC)",
    description: "Strategic advisory to a government owned and controlled corporation.",
  },
]

const valueCreationSegments = [
  "Private Capital LPs, GPs, Institutional Investors",
  "GOCCs, Finance entities, Public Sector institutions",
  "Seed and Series A firms",
  "Enterprise SaaS fintech firms",
  "Global Finance and Fintech Firms",
]

const privateCapitalPortfolio = [
  { title: "Front Office Credit Startup", description: "An early-stage front office credit startup." },
  { title: "Deep-Tech Visual AI Startup", description: "A deep-tech startup commercialising visual AI." },
  { title: "AI-Native Semiconductor Design Company", description: "An AI-native semiconductor design company." },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <SiteHeader />
      <main className="flex-1">
        {/* Intro */}
        <section className="w-full py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">What We Do</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground text-balance">
                Our Services
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
                Agos Capital operates globally, providing private strategic advisory, consulting and arranging capital
                flows wherever needed. We operate or advise companies where our involvement accelerates outcomes and
                provides immediate value.
              </p>
            </div>
          </div>
        </section>

        {/* Value Creation */}
        <section className="w-full py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto grid gap-14 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-lg shadow-brand/5">
                <Image
                  src="/images/value-creation-river.png"
                  alt="Aerial view of a river flowing through green forest"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Value Creation</p>
                  <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground text-balance">
                    Who we create value for
                  </h2>
                </div>
                <ul className="space-y-5">
                  {valueCreationSegments.map((segment, index) => (
                    <li key={segment} className="flex items-start gap-4">
                      <span className="font-serif text-2xl font-light text-brand/60 tabular-nums leading-none pt-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-medium text-foreground border-b border-border pb-4 flex-1">
                        {segment}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio - Advisory */}
        <section className="w-full py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="relative h-56 w-full overflow-hidden rounded-xl">
                <Image src="/images/advisory-flow.png" alt="Flowing water currents" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Portfolio</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white">Advisory</h2>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {advisoryPortfolio.map((item) => (
                  <Card
                    key={item.title}
                    className="group flex flex-col border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
                  >
                    <CardHeader>
                      <CardTitle className="font-serif text-lg font-medium leading-snug text-foreground">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground leading-relaxed">
                      <p className="text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto text-pretty">
                We operate or advise companies where our involvement accelerates outcomes and provides immediate value.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio - Private Capital */}
        <section className="w-full py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="relative h-56 w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/private-capital.png"
                  alt="Modern glass building reflecting sky"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Portfolio</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white">
                    Private Capital
                  </h2>
                </div>
              </div>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our approach is deeply personal, always private, and focused on win-win outcomes.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {privateCapitalPortfolio.map((item) => (
                  <Card
                    key={item.title}
                    className="group flex flex-col border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
                  >
                    <CardHeader>
                      <CardTitle className="font-serif text-lg font-medium leading-snug text-foreground">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground leading-relaxed">
                      <p className="text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto text-pretty">
                We only invest where our direct experience translates into real value for Agos investors.
              </p>
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
    </div>
  )
}
