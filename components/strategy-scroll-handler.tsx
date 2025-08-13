"use client"

import { useEffect } from "react"

export default function StrategyScrollHandler() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return null
}
