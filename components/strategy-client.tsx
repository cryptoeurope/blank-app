"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Strategy } from "@/data/strategies"

interface StrategyClientProps {
  strategy: Strategy
  relatedStrategies: Strategy[]
}

export default function StrategyClient({ strategy, relatedStrategies }: StrategyClientProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-digital-pattern min-h-screen relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className={`bg-gradient-to-r ${strategy.color} text-white relative z-10`}>
        <div className="container mx-auto px-4 py-16">
          <Link href="/#strategies" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to all strategies
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Image
                  src={strategy.icon || "/placeholder.svg"}
                  alt={`${strategy.name} Icon`}
                  width={120}
                  height={120}
                  className="object-contain mx-auto"
                />
              </div>
            </div>

            <div className="md:w-3/4">
              <div className="flex items-center mb-2">
                <h1 className="text-4xl font-bold mr-3">{strategy.shortName}</h1>
                <span className="text-white/70">|</span>
                <p className="ml-3 text-xl text-white/90">{strategy.name}</p>
              </div>
              <p className="text-xl mb-6">{strategy.description}</p>

              {strategy.keyMetrics && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {strategy.keyMetrics.map((metric, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        {metric.icon}
                        <p className="ml-2 text-sm text-white/80">{metric.name}</p>
                      </div>
                      <p className="text-2xl font-bold">{metric.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-lg border border-blue-700/30">
              <h2 className="text-3xl font-bold mb-6 text-white">About {strategy.shortName}</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">{strategy.longDescription}</p>

              {strategy.benefits && (
                <>
                  <h3 className="text-2xl font-bold mb-4 text-white">Key Benefits</h3>
                  <ul className="space-y-3 mb-8">
                    {strategy.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-secondary text-white rounded-full p-1 mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {strategy.useCases && (
                <>
                  <h3 className="text-2xl font-bold mb-4 text-white">Use Cases</h3>
                  <ul className="space-y-3 mb-8">
                    {strategy.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-blue-500 text-white rounded-full p-1 mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-700/30">
              <h3 className="text-xl font-bold mb-4 text-white">Interested in {strategy.shortName}?</h3>
              <p className="text-gray-300 mb-6">
                Contact our team to learn more about how {strategy.shortName} can enhance your investment portfolio.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-secondary hover:bg-secondary/80 text-white text-center px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-700/30">
              <h3 className="text-lg font-bold mb-3 text-white">Related Strategies</h3>
              <ul className="space-y-3">
                {relatedStrategies.map((s) => (
                  <li key={s.id}>
                    <Link href={`/strategies/${s.id}`} className="flex items-center group">
                      <div className="w-8 h-8 mr-3 bg-blue-800/50 rounded-md p-1 flex items-center justify-center">
                        <Image
                          src={s.icon || "/placeholder.svg"}
                          alt={`${s.name} Icon`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-gray-300 group-hover:text-secondary transition-colors">{s.shortName}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
