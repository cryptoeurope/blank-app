"use client"

import type React from "react"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { scrollToSection } from "@/utils/scroll-to-section"

export default function StrategyBackLink() {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Navigate to homepage then scroll to strategies section
    router.push("/")

    // Give a bit more time for page transition
    setTimeout(() => {
      scrollToSection("strategies")
    }, 300)
  }

  return (
    <a
      href="/#strategies"
      onClick={handleClick}
      className="inline-flex items-center text-white/80 hover:text-white mb-6"
    >
      <ArrowLeft className="mr-2 h-4 w-4" /> Back to all strategies
    </a>
  )
}
