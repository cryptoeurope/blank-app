"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import ScrollLink from "./scroll-link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-digital text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12">
                <Image
                  src="/alri-main-logo.png"
                  alt="ALRI Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ScrollLink href="/#about" className="hover:text-secondary transition-colors">
              About Us
            </ScrollLink>
            <ScrollLink href="/#team" className="hover:text-secondary transition-colors">
              Our Team
            </ScrollLink>
            <ScrollLink href="/#strategies" className="hover:text-secondary transition-colors">
              Strategies
            </ScrollLink>
            <ScrollLink href="/#values" className="hover:text-secondary transition-colors">
              Values
            </ScrollLink>
            <ScrollLink href="/#goals" className="hover:text-secondary transition-colors">
              Goals
            </ScrollLink>
            <Link
              href="/contact"
              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <ScrollLink
              href="/#about"
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </ScrollLink>
            <ScrollLink
              href="/#team"
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </ScrollLink>
            <ScrollLink
              href="/#strategies"
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Strategies
            </ScrollLink>
            <ScrollLink
              href="/#values"
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Values
            </ScrollLink>
            <ScrollLink
              href="/#goals"
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Goals
            </ScrollLink>
            <Link
              href="/contact"
              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors inline-block w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
