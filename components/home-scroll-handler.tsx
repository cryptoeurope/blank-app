"use client"

import { useEffect } from "react"

export default function HomeScrollHandler() {
  useEffect(() => {
    // Check if we need to scroll to strategies section
    const shouldScroll = localStorage.getItem("scrollToStrategies")

    if (shouldScroll === "true") {
      // Clear the flag
      localStorage.removeItem("scrollToStrategies")

      // Scroll to strategies section with a delay to ensure the page is fully loaded
      setTimeout(() => {
        const strategiesSection = document.getElementById("strategies")
        if (strategiesSection) {
          strategiesSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
    }
  }, [])

  return null
}
