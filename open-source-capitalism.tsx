import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, Lightbulb, Rocket, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function OpenSourceCapitalism() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto py-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold">☑POWERHOUSE</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="hover:text-green-400 transition-colors font-medium">
            Connect
          </Link>
          <Link href="#" className="hover:text-green-400 transition-colors font-medium">
            Fusion
          </Link>
          <Link href="#" className="hover:text-green-400 transition-colors font-medium">
            Academy
          </Link>
          <Link href="#" className="hover:text-green-400 transition-colors font-medium">
            About
          </Link>
        </nav>
        <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10 font-medium">
          Sign In
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 bg-grid-white/10"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                Open-Source Capitalism: Rethinking How We Build, Innovate, and Prosper
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 font-normal">
                A bold new approach that fuses free-market forces with open-source collaboration—for the benefit of
                everyone.
              </p>
              <p className="text-lg text-gray-400 mb-10 font-normal">
                Harnessing capitalism's raw power alongside the transparency and collaboration of open-source software to
                create an inclusive, sustainable economic model.
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-6 text-lg rounded-md">
                Join the Revolution <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] relative">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full animate-float stroke-white/30"
                style={{ strokeWidth: "0.8" }}
              >
                {/* Main circle */}
                <circle cx="200" cy="200" r="195" />
                
                {/* Horizontal latitude lines with perspective */}
                <path d="M5,200 Q200,200 395,200" className="stroke-white/40" />
                <path d="M14,120 Q200,140 386,120" />
                <path d="M14,280 Q200,260 386,280" />
                <path d="M35,60 Q200,100 365,60" />
                <path d="M35,340 Q200,300 365,340" />
                
                {/* Vertical longitude lines with perspective */}
                <path d="M200,5 Q200,200 200,395" className="stroke-white/40" />
                <path d="M120,14 Q140,200 120,386" />
                <path d="M280,14 Q260,200 280,386" />
                <path d="M60,35 Q100,200 60,365" />
                <path d="M340,35 Q300,200 340,365" />
                
                {/* Additional perspective lines */}
                <path d="M80,80 Q120,200 80,320" />
                <path d="M320,80 Q280,200 320,320" />
                <path d="M80,80 Q200,100 320,80" />
                <path d="M80,320 Q200,300 320,320" />
                
                {/* Middle region detail */}
                <path d="M160,160 Q200,180 240,160" />
                <path d="M160,240 Q200,220 240,240" />
                <path d="M160,160 Q180,200 160,240" />
                <path d="M240,160 Q220,200 240,240" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Open-Source Capitalism? */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">What Is Open-Source Capitalism?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <div className="mb-4">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Definition</h3>
              <p className="text-gray-400 font-normal">
                Open-Source Capitalism merges free-market principles with open, collaborative development.
              </p>
            </div>
            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <div className="mb-4">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Goal</h3>
              <p className="text-gray-400 font-normal">
                Create a level playing field so that building for the common good becomes profitable and scalable.
              </p>
            </div>
            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <div className="mb-4">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Why It Matters</h3>
              <p className="text-gray-400 font-normal">
                Tackles issues like the "tragedy of the commons," extreme wealth concentration, and the lack of
                sustainable funding for open-source innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now? The Problems We Aim to Solve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Why Now?</h2>
          <h3 className="text-xl md:text-2xl text-gray-400 mb-10 font-normal">The Problems We Aim to Solve</h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center mr-3">
                    1
                  </span>
                  Capitalism's Unstoppable Force
                </h4>
                <p className="text-gray-400 pl-11 font-normal">
                  It has unleashed unprecedented productivity and wealth—yet often neglects shared resources
                  (environment, public goods) and fosters inequality.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center mr-3">
                    2
                  </span>
                  Open Source Underfunded
                </h4>
                <p className="text-gray-400 pl-11 font-normal">
                  Though essential to modern tech (Linux, Kubernetes, Ethereum), open-source projects often rely on
                  sporadic grants or big-tech sponsorships.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center mr-3">
                    3
                  </span>
                  Lack of Incentives for Builders
                </h4>
                <p className="text-gray-400 pl-11 font-normal">
                  Many open-source contributors struggle to capture the value they create.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center mr-3">
                    4
                  </span>
                  DAOs & Decentralized Tech Underperforming
                </h4>
                <p className="text-gray-400 pl-11 font-normal">
                  Coordination failures and insufficient organizational structure lead to uncompetitive or fragmented
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Principles of Open-Source Capitalism */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            The Four Principles of Open-Source Capitalism
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl font-normal">
            At Powerhouse, we've distilled the core ideas into four guiding principles—each addressing a critical gap in
            traditional open source and traditional capitalism.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <div className="flex items-start mb-6">
                <div className="bg-green-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  1
                </div>
                <h3 className="text-xl font-bold">Coordination Through a Marketplace Platform</h3>
              </div>
              <p className="text-gray-400 mb-4 font-normal">
                Borrowing from successful marketplace models (like Airbnb), builders coordinate on transparent, open
                roadmaps.
              </p>
              <p className="text-gray-500 text-sm font-normal">
                <strong className="font-semibold">Why It Matters:</strong> Ensures efficient collaboration across
                roles—developers, designers, PMs, QA—while automating processes and preserving knowledge.
              </p>
            </div>

            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <div className="flex items-start mb-6">
                <div className="bg-green-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  2
                </div>
                <h3 className="text-xl font-bold">Profits Before Distribution</h3>
              </div>
              <p className="text-gray-400 mb-4 font-normal">
                Revenue-generating hubs (RGHs) use the open-source software to create value for end users, then share
                profits with builders.
              </p>
              <p className="text-gray-500 text-sm font-normal">
                <strong className="font-semibold">Why It Matters:</strong> Establishes real market feedback. Builders
                focus on quality and real demand, not just volunteer efforts or one-off grants.
              </p>
            </div>

            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <div className="flex items-start mb-6">
                <div className="bg-green-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  3
                </div>
                <h3 className="text-xl font-bold">Maximizing Value Capture (Commercial Licensing)</h3>
              </div>
              <p className="text-gray-400 mb-4 font-normal">
                A dual-licensing model—strong copyleft for open-source collaboration and commercial licenses for
                businesses that prefer not to open all their code.
              </p>
              <p className="text-gray-500 text-sm font-normal">
                <strong className="font-semibold">Why It Matters:</strong> Increases both adoption ("openness") and
                revenue for reinvestment ("reciprocation"), striking the right balance for sustainable growth.
              </p>
            </div>

            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <div className="flex items-start mb-6">
                <div className="bg-green-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  4
                </div>
                <h3 className="text-xl font-bold">Making Open Source Investable</h3>
              </div>
              <p className="text-gray-400 mb-4 font-normal">
                Introducing an "operational collateral fund" that can attract investor capital and sustain the network
                while ensuring profits flow back to contributors and investors.
              </p>
              <p className="text-gray-500 text-sm font-normal">
                <strong className="font-semibold">Why It Matters:</strong> Aligns the "booster rocket" of capitalist
                investment with open, community-driven creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works in Practice */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">How It Works in Practice</h2>
          <div className="max-w-3xl mb-12">
            <p className="text-xl text-gray-400 font-normal">
              Under Open-Source Capitalism, anyone can build or invest in open-source solutions—while businesses pay
              back into the network when they commercialize those solutions. This approach keeps innovation open and
              transparent, rewards contributors fairly, and fuels further development without relying on top-down
              control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-6">
                <Globe className="h-12 w-12 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Revenue-Generating Hubs (RGHs)</h3>
                <p className="text-gray-400 font-normal">
                  Companies or teams that package, sell, or otherwise monetize open-source offerings, sharing part of
                  their profits.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <Users className="h-12 w-12 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Builder Marketplaces</h3>
                <p className="text-gray-400 font-normal">
                  Platforms where developers, designers, product managers, and marketers pitch in to deliver features
                  and solutions on an open roadmap.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <Rocket className="h-12 w-12 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Retroactive Funding</h3>
                <p className="text-gray-400 font-normal">
                  Contributors are rewarded for successful outcomes, aligning incentive with real-world impact.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <Lightbulb className="h-12 w-12 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Commercial + Copyleft Licenses</h3>
                <p className="text-gray-400 font-normal">
                  Ensures that the code base stays open and robust, while businesses that can't share code pay licensing
                  fees back into the network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey So Far */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">The Journey So Far</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">MakerDAO's Radical Decentralization Experiment</h3>
              <p className="text-gray-400 font-normal">
                Lessons learned about the importance of organizational structure and accountability.
              </p>
            </div>

            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Powerhouse's Role</h3>
              <p className="text-gray-400 font-normal">
                Building on these insights, Powerhouse focuses on decentralized operations, governance frameworks, and
                builder tools to make Open-Source Capitalism a reality.
              </p>
            </div>

            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Ongoing Projects & Beta Programs</h3>
              <p className="text-gray-400 font-normal">
                Join our early access programs and be part of the first wave of Open-Source Capitalism implementations.
              </p>
              <Button
                variant="outline"
                className="mt-4 border-green-400 text-green-400 hover:bg-green-400/10 font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Impact & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Real-World Impact & Vision</h2>

          <div className="max-w-3xl mb-12">
            <p className="text-xl text-gray-400 font-normal">
              By merging capitalism's drive with a purpose-driven, open network ethos, we can spark unprecedented
              innovation—from software, to AI, to climate solutions. Think 'capitalism for the many, not just the few.'
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Case Studies (Coming Soon)</h3>
              <p className="text-gray-400 font-normal">
                Real examples of how open-source capitalism is already at work or in pilot phases.
              </p>
              <div className="mt-4 text-green-400 font-medium">Coming Q3 2024</div>
            </div>

            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Community Benefits</h3>
              <ul className="text-gray-400 space-y-2 font-normal">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>More inclusive innovation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>Pro-consumer competition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>Faster breakthroughs in crucial tech</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Ready to Help Shape the Future of Open-Source Capitalism?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl font-normal">
            Join our growing community of builders, investors, and visionaries who are creating a more equitable and
            innovative economic model.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
              <p className="text-gray-400 mb-6 font-normal">
                Connect with like-minded individuals and stay updated on the latest developments.
              </p>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold">Join Discord</Button>
            </div>

            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Become a Builder</h3>
              <p className="text-gray-400 mb-6 font-normal">
                Explore open bounties or builder platforms for active projects.
              </p>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold">
                View Opportunities
              </Button>
            </div>

            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Partner as an RGH</h3>
              <p className="text-gray-400 mb-6 font-normal">
                If you run or represent a business, integrate open-source solutions and share profits with contributors.
              </p>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold">Partner With Us</Button>
            </div>

            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Invest in the Future</h3>
              <p className="text-gray-400 mb-6 font-normal">
                Learn about how to back sustainable open-source initiatives financially.
              </p>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold">
                Investment Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-800 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-black/40 text-left font-bold">
                  Is Open-Source Capitalism the same as free software?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-black/20 text-gray-400 font-normal">
                  It builds on similar open-source principles but adds sustainable business and investment structures.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-800 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-black/40 text-left font-bold">
                  How do I earn money as a contributor?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-black/20 text-gray-400 font-normal">
                  By completing tasks and sharing in the revenue from RGHs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-800 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-black/40 text-left font-bold">
                  Can traditional companies adopt Open-Source Capitalism?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-black/20 text-gray-400 font-normal">
                  Yes—commercial licenses and RGH participation let them benefit from open innovation while compensating
                  the network.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-800 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-black/40 text-left font-bold">
                  Why not just use grants or donations?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-black/20 text-gray-400 font-normal">
                  Those can help but rarely scale or offer real market feedback. Profits-first aligns incentives
                  long-term.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Conclusion & Final Call to Action */}
      <section className="py-20 bg-gradient-to-b from-black to-green-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Join Us in Building Open-Source Capitalism
          </h2>

          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-xl text-gray-300 font-normal">
              Open-Source Capitalism reclaims the commons and democratizes access to powerful, revenue-generating
              technologies. By combining open-source collaboration with market-based rewards, we're shaping a future
              where doing the right thing is not just altruistic—it's profitable.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black/60 border-gray-700 text-white placeholder:text-gray-500 font-normal"
                />
                <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-6">
                  Join the Revolution
                </Button>
                <p className="text-xs text-gray-500 font-normal">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="text-green-400 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-green-400 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">☑POWERHOUSE</div>
              <p className="text-gray-400 text-sm font-normal">
                Decentralized operations toolkit for open organizations
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 font-normal">
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Connect
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Fusion
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Academy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 font-normal">
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 font-normal">
                <li>
                  <Link href="#" className="hover:text-green-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-normal">
              &copy; {new Date().getFullYear()} Powerhouse. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-green-400">
                Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400">
                Discord
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

