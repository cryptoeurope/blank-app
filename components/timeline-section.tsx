"use client"

import type React from "react"
import { Clock, TrendingUp, Zap, BarChart2, Users, Globe } from "lucide-react"

interface TimelinePhase {
  title: string
  period: string
  points: string[]
  icon: React.ReactNode
  color: string
}

export default function TimelineSection() {
  const timelinePhases: TimelinePhase[] = [
    {
      title: "Establishing Foundations",
      period: "Year 0-1",
      points: [
        "Formation of ALRI and assembly of a core team of experts.",
        "Initial development and backtesting of proprietary algorithms.",
      ],
      icon: <Clock className="h-6 w-6" />,
      color: "from-blue-400 to-cyan-300",
    },
    {
      title: "Strategic Expansion",
      period: "Year 1-2",
      points: [
        "Deployment of trading strategies to live markets.",
        "First capital milestone achieved: Managing $1 million in live capital.",
      ],
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-cyan-400 to-blue-400",
    },
    {
      title: "Innovation and Growth",
      period: "Year 2-3",
      points: [
        "Introduction of advanced machine learning models.",
        "Arbitrage Trading",
        "Expansion of the team and diversification of strategies.",
      ],
      icon: <Zap className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Scaling and Optimization",
      period: "Year 3-4",
      points: [
        "Scaling live capital management to $5 million.",
        "Optimization of trading systems for efficiency and accuracy.",
      ],
      icon: <BarChart2 className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Broadening Horizons",
      period: "Year 4-5",
      points: [
        "Targeting a capital management goal of $10 million.",
        "Establishing partnerships with institutional investors.",
      ],
      icon: <Users className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Future Outlook",
      period: "Beyond Year 5",
      points: [
        "Pioneering into propfirm and broker markets.",
        "Continual innovation to maintain a competitive edge in quantitative finance.",
      ],
      icon: <Globe className="h-6 w-6" />,
      color: "from-cyan-600 to-blue-600",
    },
  ]

  return (
    <section id="timeline" className="py-20 bg-digital-pattern relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">TIMELINE</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our strategic roadmap outlines our journey from establishment to future growth.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line connecting timeline boxes */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-300 to-blue-600 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {timelinePhases.map((phase, index) => (
              <div
                key={index}
                className={`relative z-10 ${index % 2 === 0 ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"} md:w-5/12`}
              >
                {/* Connection dot */}
                <div className="hidden md:block absolute top-6 w-6 h-6 rounded-full bg-white shadow-glow-cyan left-0 md:left-auto md:right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-1 rounded-full bg-cyan-400"></div>
                </div>

                {/* Timeline box */}
                <div
                  className={`bg-blue-900/80 backdrop-blur-sm border border-blue-700/50 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:translate-y-[-5px] relative`}
                >
                  {/* Add subtle background pattern to each box */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-400/30 rounded-full blur-xl"></div>
                  </div>

                  {/* Gradient header */}
                  <div className={`bg-gradient-to-r ${phase.color} p-4 flex items-center relative z-10`}>
                    <div className="bg-white/20 rounded-full p-2 mr-3">{phase.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                      <p className="text-white/80 text-sm">{phase.period}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 relative z-10">
                    <ul className="space-y-2">
                      {phase.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start text-gray-200">
                          <span className="text-cyan-400 mr-2 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Design elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Add some CSS for the glow effect */}
      <style jsx>{`
        .shadow-glow-cyan {
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.5);
        }
      `}</style>
    </section>
  )
}
