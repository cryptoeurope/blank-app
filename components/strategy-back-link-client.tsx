"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function StrategyBackLinkClient() {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Navigate to the homepage
    router.push("/")

    // Set a flag in localStorage to indicate we need to scroll to strategies
    localStorage.setItem("scrollToStrategies", "true")
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
