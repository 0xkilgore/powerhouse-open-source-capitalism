import type React from "react"
import { Inter } from "next/font/google"
import "../styles/grid-pattern.css"
import "@/app/globals.css"

// Import the Inter font with multiple weights for our proxima nova replacement
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata = {
  title: "Open-Source Capitalism | Powerhouse",
  description:
    "Discover how Open-Source Capitalism fuses free markets with open-source collaboration to create a more inclusive, profitable, and transparent economy.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'