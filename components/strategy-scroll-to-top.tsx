"use client"

import { ChevronUp } from "lucide-react"

export default function StrategyScrollToTop() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 bg-blue-900/50 hover:bg-blue-800/70 text-white px-6 py-3 rounded-md transition-colors"
        aria-label="Scroll to top"
      >
        <span>Back to top</span>
        <ChevronUp className="h-4 w-4" />
      </button>
    </div>
  )
}
