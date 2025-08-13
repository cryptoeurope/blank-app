import { CheckCircle2, Circle } from "lucide-react"

interface RoadmapItem {
  quarter: string
  title: string
  description: string
  completed: boolean
}

export default function RoadmapSection() {
  const roadmap2024: RoadmapItem[] = [
    {
      quarter: "Q1 2024",
      title: "Foundation Building",
      description:
        "Establish core team and initial infrastructure. Begin development of proprietary trading algorithms.",
      completed: true,
    },
    {
      quarter: "Q2 2024",
      title: "Strategy Development",
      description:
        "Finalize and test the first iteration of our proprietary trading systems. Launch pilot trading program.",
      completed: true,
    },
    {
      quarter: "Q3 2024",
      title: "Market Expansion",
      description:
        "Expand trading strategies to include new financial instruments. Optimize algorithms based on real-world performance data.",
      completed: false,
    },
    {
      quarter: "Q4 2024",
      title: "Capital Growth",
      description:
        "Begin scaling operations based on Q1-Q3 results. Establish baseline performance metrics for our strategies.",
      completed: false,
    },
  ]

  const roadmap2025: RoadmapItem[] = [
    {
      quarter: "Q1 2025",
      title: "Hedge Fund Solutions",
      description:
        "Launch comprehensive hedge fund management solutions. Implement advanced risk management frameworks.",
      completed: false,
    },
    {
      quarter: "Q2 2025",
      title: "Team Expansion & Strategy Development",
      description:
        "Grow our team of quants and developers. Enhance existing strategies and develop new algorithmic approaches.",
      completed: false,
    },
    {
      quarter: "Q3 2025",
      title: "Capital Management & Broker Relationships",
      description:
        "Scale capital under management. Establish strategic partnerships with prime brokers and liquidity providers.",
      completed: false,
    },
    {
      quarter: "Q4 2025",
      title: "LP Onboarding & Advanced Analytics",
      description: "Onboard limited partners. Implement advanced coding solutions and data analytics capabilities.",
      completed: false,
    },
  ]

  return (
    <section id="roadmap" className="py-20 bg-digital-pattern text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">STRATEGIC ROADMAP</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive roadmap outlines our strategic approach to growth, innovation, and market leadership for
            2024-2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 2024 Roadmap */}
          <div>
            <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-700/30">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4">
                <h3 className="text-2xl font-bold">2024 Roadmap</h3>
                <p className="text-white/80">Building the foundation for success</p>
              </div>

              <div className="p-6">
                <div className="relative">
                  {roadmap2024.map((item, index) => (
                    <div key={index} className="mb-8 last:mb-0">
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          {item.completed ? (
                            <CheckCircle2 className="text-green-400 h-6 w-6" />
                          ) : (
                            <Circle className="text-gray-400 h-6 w-6" />
                          )}
                          {index < roadmap2024.length - 1 && <div className="w-px h-full bg-gray-600 my-2"></div>}
                        </div>
                        <div>
                          <div className="flex items-center mb-1">
                            <span className="text-secondary font-medium mr-2">{item.quarter}</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-800/50 text-blue-200">
                              {item.completed ? "Completed" : "In Progress"}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2025 Roadmap */}
          <div>
            <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-700/30">
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4">
                <h3 className="text-2xl font-bold">2025 Roadmap</h3>
                <p className="text-white/80">Scaling operations and expanding capabilities</p>
              </div>

              <div className="p-6">
                <div className="relative">
                  {roadmap2025.map((item, index) => (
                    <div key={index} className="mb-8 last:mb-0">
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <Circle className="text-gray-400 h-6 w-6" />
                          {index < roadmap2025.length - 1 && <div className="w-px h-full bg-gray-600 my-2"></div>}
                        </div>
                        <div>
                          <div className="flex items-center mb-1">
                            <span className="text-secondary font-medium mr-2">{item.quarter}</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-800/50 text-blue-200">Planned</span>
                          </div>
                          <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-900/30 backdrop-blur-sm rounded-lg p-6 border border-blue-700/30">
          <h3 className="text-2xl font-bold mb-4 text-center">Key Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-800/50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Strategy Development</h4>
              <p className="text-gray-300 text-sm">
                Continuous refinement of our algorithmic trading strategies to adapt to changing market conditions.
              </p>
            </div>
            <div className="bg-blue-800/50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Capital Management</h4>
              <p className="text-gray-300 text-sm">
                Scaling our assets under management while maintaining strict risk controls and performance targets.
              </p>
            </div>
            <div className="bg-blue-800/50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Technology Infrastructure</h4>
              <p className="text-gray-300 text-sm">
                Building robust, low-latency systems to support our trading operations and data analytics capabilities.
              </p>
            </div>
            <div className="bg-blue-800/50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Strategic Partnerships</h4>
              <p className="text-gray-300 text-sm">
                Developing relationships with brokers, LPs, and institutional investors to expand our market reach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
