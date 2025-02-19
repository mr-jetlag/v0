import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agos%20Dark%20Logo-Sisj0KrYxd2TsEI1TanU6PHNQp6VhT.png"
            alt="Agos Capital Logo"
            width={60}
            height={60}
            className="brightness-200"
          />
          <span className="ml-4 text-xl font-light tracking-wider">AGOS CAPITAL</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#clients">
            Clients
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#investors">
            Investors
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-light tracking-wider sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Agos Capital
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Your trusted partner in innovative financial solutions and strategic investments.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
                <Button variant="outline" className="text-gray-300 border-gray-700 hover:bg-gray-800">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-wider sm:text-4xl md:text-5xl text-center mb-8">
              About Agos Capital
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <p className="text-gray-300">
                  "Agos" is the Tagalog word for the flow of a river or the ocean current. After decades of work in the
                  global capital markets, we at Agos Capital understand that the concept of flow and growth are
                  intimately linked:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
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
                <p className="text-gray-300">
                  Agos Capital operates globally, providing private strategic advisory, consulting and arranging capital
                  flows wherever needed.
                </p>
              </div>
              <div className="lg:pl-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agos%20Dark%20Logo-Sisj0KrYxd2TsEI1TanU6PHNQp6VhT.png"
                  alt="Agos Capital Logo"
                  width={400}
                  height={400}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="clients" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-wider sm:text-4xl md:text-5xl text-center mb-8">Our Clients</h2>
            <p className="text-gray-300 text-center mb-8">
              Agos Capital have provided transformational consulting and advisory services to global firms.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-100">Investment Portfolio Companies</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>CxO or board advisory</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-100">Startup Fintech Firms</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Product/market fit, direct operation via fractional CxO services</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-100">Enterprise SaaS Companies</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Product advisory, go to market planning, execution</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-100">Global Consultancies</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Foundational private markets training; deal advisory and assistance with selection</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-300 text-center mt-8">
              Working with clients who share our goals and values, we are able to provide immediate value and meaningful
              long term impact – up to and including private market exits.
            </p>
            <div className="text-center mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Us for Advisory
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section id="investors" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-light tracking-wider sm:text-4xl md:text-5xl text-center mb-8">
              Our Investment Approach
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Our investment approach is deeply personal, always private, and focused on win-win outcomes. Current Agos
              Capital portfolio companies include:
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-100">Corporate Secretarial Services</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    A publicly listed provider, one of the fastest growing companies in Singapore with expansions into
                    Australia, the UK and US. Private debt facility.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-100">AI Startup</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    A pre-seed startup commercialising proprietary AI models from a Tier 1 government deeptech agency.
                    Angel Round, common equity.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-100">Private Debt and CLO Markets</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    A disruptive challenger firm supported by the largest ratings, data and analytics firm in the world.
                    Series A, common equity.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-300 text-center mt-8">
              We only invest in companies where our direct experience provide insights into the eventual exit. We only
              operate or advise companies where direct involvement accelerates outcomes and provides direct value to our
              partners.
            </p>
            <div className="text-center mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Us for Co-Investment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 Agos Capital. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-gray-400 hover:text-blue-400 transition-colors"
            href="mailto:hello@agoscapital.com"
          >
            hello@agoscapital.com
          </Link>
          <Link
            className="text-xs text-gray-400 hover:text-blue-400 transition-colors"
            href="mailto:investor@agoscapital.com"
          >
            investor@agoscapital.com
          </Link>
          <Link
            className="text-xs text-gray-400 hover:text-blue-400 transition-colors"
            href="https://www.agoscapital.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.agoscapital.com
          </Link>
        </nav>
      </footer>
    </div>
  )
}

