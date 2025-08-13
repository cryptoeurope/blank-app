import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ALRI - Quantitative Finance Solutions",
  description: "ALRI is synonymous with innovation, shaping the future of quantitative finance with precision.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
