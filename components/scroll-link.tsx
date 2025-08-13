"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { scrollToSection } from "@/utils/scroll-to-section"

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function ScrollLink({ href, children, className }: ScrollLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // If it's a hash link
    if (href.startsWith("/#")) {
      const id = href.substring(2) // Remove the '/#' part

      // If we're already on the homepage, just scroll
      if (window.location.pathname === "/" || window.location.pathname === "") {
        scrollToSection(id)
      } else {
        // Navigate to homepage then scroll
        router.push("/")
        setTimeout(() => {
          scrollToSection(id)
        }, 300) // Give a bit more time for page transition
      }
    } else {
      // Regular navigation
      router.push(href)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
