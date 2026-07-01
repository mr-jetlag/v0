"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"

const advisoryPortfolio = [
  { title: "Equity Management Platform", description: "Advisory partner to an equity management platform." },
  { title: "Asset-Based Finance SaaS Platform", description: "Operating and advisory support for an asset-based finance SaaS platform." },
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
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SiteHeader />
      <main className="flex-1">
        {/* Intro */}
        <section className="w-full py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider text-gray-900 dark:text-gray-100">
                Our Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Agos Capital operates globally, providing private strategic advisory, consulting and arranging capital
                flows wherever needed. We operate or advise companies where our involvement accelerates outcomes and
                provides immediate value.
              </p>
            </div>
          </div>
        </section>

        {/* Value Creation */}
        <section className="w-full py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-gray-900 dark:text-gray-100 text-center mb-12">
              Value Creation
            </h2>
            <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/value-creation-river.png"
                    alt="Aerial view of a river flowing through green forest"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <ul className="space-y-6">
                {valueCreationSegments.map((segment) => (
                  <li
                    key={segment}
                    className="border-l-2 border-gray-300 dark:border-gray-600 pl-4 text-lg font-medium text-gray-700 dark:text-gray-200"
                  >
                    {segment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Portfolio - Advisory */}
        <section className="w-full py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image src="/images/advisory-flow.png" alt="Flowing water currents" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <h2 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-light tracking-wider text-white">
                  Portfolio &ndash; Advisory
                </h2>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {advisoryPortfolio.map((item) => (
                  <Card key={item.title} className="dark:bg-gray-900 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-base text-gray-900 dark:text-gray-100">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-600 dark:text-gray-300">
                      <p className="text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-gray-600 dark:text-gray-300">
                We operate or advise companies where our involvement accelerates outcomes and provides immediate value.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio - Private Capital */}
        <section className="w-full py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/private-capital.png"
                  alt="Modern glass building reflecting sky"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <h2 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-light tracking-wider text-white">
                  Portfolio &ndash; Private Capital
                </h2>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Our approach is deeply personal, always private, and focused on win-win outcomes.
              </p>
              <div className="grid gap-8 sm:grid-cols-3">
                {privateCapitalPortfolio.map((item) => (
                  <Card key={item.title} className="dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-base text-gray-900 dark:text-gray-100">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-600 dark:text-gray-300">
                      <p className="text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-gray-600 dark:text-gray-300">
                We only invest where our direct experience translates into real value for Agos investors.
              </p>
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
