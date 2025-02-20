"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Moon, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
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
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="container mx-auto px-4 lg:px-6 h-24 flex items-center justify-between border-b dark:border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agos%20Dark%20Logo-Sisj0KrYxd2TsEI1TanU6PHNQp6VhT.png"
            alt="Agos Capital Logo"
            width={50}
            height={50}
            className={darkMode ? "brightness-200" : "brightness-0"}
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
        <section className="w-full py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-gray-900 dark:text-gray-100">
                Welcome to Agos Capital
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Your trusted partner in innovative financial solutions and strategic investments.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">Learn More</Button>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 px-8"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider text-gray-900 dark:text-gray-100">
                About Agos Capital
              </h2>
              <div className="text-left space-y-6">
                <p className="text-gray-600 dark:text-gray-300">
                  AGOS is the Tagalog word for the flow of a river or the ocean current. After decades of work in the
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
                  Agos Capital have provided transformational consulting and advisory services to global firms.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Investment Portfolio Companies</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>CxO or board advisory</p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Startup Fintech Firms</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>Product/market fit, direct operation via fractional CxO services</p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Enterprise SaaS Companies</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>Product advisory, go to market planning, execution</p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Global Consultancies</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>Foundational private markets training; deal advisory and assistance with selection</p>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center space-y-8">
                <p className="text-gray-600 dark:text-gray-300">
                  Working with clients who share our goals and values, we are able to provide immediate value and
                  meaningful long term impact – up to and including private market exits.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Contact Us for Advisory
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
                      Australia, the UK and US. Private debt facility.
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
                      Angel Round, common equity.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-100">Private Debt and CLO Markets</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <p>
                      A disruptive challenger firm supported by the largest ratings, data and analytics firm in the
                      world. Series A, common equity.
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
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Contact Us for Co-Investment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t dark:border-gray-700">
        <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Agos Capital. All rights reserved.</p>
          <nav className="flex gap-8 mt-4 sm:mt-0">
            <Link
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              href="mailto:hello@agoscapital.com"
            >
              hello@agoscapital.com
            </Link>
            <Link
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              href="mailto:investor@agoscapital.com"
            >
              investor@agoscapital.com
            </Link>
            <Link
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              href="https://www.agoscapital.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.agoscapital.com
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

