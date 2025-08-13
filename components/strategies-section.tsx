import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Strategy {
  id: string
  name: string
  shortName: string
  description: string
  icon: string
  color: string
}

export default function StrategiesSection() {
  const strategies: Strategy[] = [
    {
      id: "aes",
      name: "Alri Expert Advisor Strategies",
      shortName: "AES",
      description:
        "Automated trading systems that execute trades based on predefined rules and algorithms without human intervention.",
      icon: "/strategies/aes-icon.png",
      color: "from-blue-900 to-indigo-800",
    },
    {
      id: "asa",
      name: "Alri Signal Analytics",
      shortName: "ASA",
      description:
        "Advanced signal processing algorithms that identify trading opportunities across multiple markets and timeframes.",
      icon: "/strategies/asa-icon.png",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "aqa",
      name: "Alri Quant Analytics",
      shortName: "AQA",
      description:
        "Sophisticated quantitative models that analyze market data to identify patterns and predict price movements.",
      icon: "/strategies/aqa-icon.png",
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: "ama",
      name: "Alri Market Analytics",
      shortName: "AMA",
      description:
        "Comprehensive market analysis tools that provide insights into market trends, sentiment, and macroeconomic factors.",
      icon: "/strategies/ama-icon.png",
      color: "from-blue-700 to-blue-900",
    },
    {
      id: "ams",
      name: "Alri Manual Strategies",
      shortName: "AMS",
      description:
        "Discretionary trading approaches executed by experienced traders based on technical and fundamental analysis.",
      icon: "/strategies/ams-icon.png",
      color: "from-teal-500 to-cyan-600",
    },
    {
      id: "ahs",
      name: "Alri HFT Strategies",
      shortName: "AHS",
      description:
        "High-frequency trading systems that capitalize on small price movements with rapid execution and low latency.",
      icon: "/strategies/ahs-icon.png",
      color: "from-blue-800 to-blue-950",
    },
    {
      id: "aps",
      name: "Alri Propfirm Strategies",
      shortName: "APS",
      description:
        "Specialized trading approaches designed for proprietary trading firms with a focus on consistent performance and risk management.",
      icon: "/strategies/aps-icon.png",
      color: "from-purple-600 to-indigo-700",
    },
    {
      id: "abr",
      name: "Alri Broker Relationships",
      shortName: "ABR",
      description:
        "Strategic partnerships with brokers and liquidity providers to optimize execution quality and trading conditions.",
      icon: "/strategies/abr-icon.png",
      color: "from-blue-600 to-cyan-700",
    },
    {
      id: "hfd",
      name: "Hedge Fund Systems",
      shortName: "HFD",
      description:
        "Comprehensive monitoring and management system for hedge fund operations, performance tracking, and risk assessment.",
      icon: "/strategies/hfd-icon.png",
      color: "from-blue-800 to-cyan-900",
    },
  ]

  return (
    <section id="strategies" className="py-20 bg-digital-pattern text-white relative">
      {/* Add decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">TRADING STRATEGIES</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our diverse portfolio of trading strategies combines cutting-edge technology with expert analysis to deliver
            exceptional results across various market conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy) => (
            <div
              key={strategy.id}
              className="strategy-card bg-blue-900/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-blue-700/30 hover:shadow-xl transition-all hover:translate-y-[-5px] relative"
            >
              {/* Add subtle background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-400/30 rounded-full blur-xl"></div>
              </div>

              <div className={`h-2 bg-gradient-to-r ${strategy.color}`}></div>
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 bg-blue-900/50 rounded-lg p-1 flex items-center justify-center">
                    <Image
                      src={strategy.icon || "/placeholder.svg"}
                      alt={`${strategy.name} Icon`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{strategy.shortName}</h3>
                    <p className="text-xs text-gray-400">{strategy.name}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{strategy.description}</p>

                <Link
                  href={`/strategies/${strategy.id}`}
                  className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors text-sm"
                >
                  Learn more <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">How Our Strategies Work Together</h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            At ALRI, we combine these diverse strategies into cohesive funds that leverage the strengths of each
            approach. This multi-strategy approach allows us to adapt to changing market conditions and deliver
            consistent performance.
          </p>
          <Link
            href="/contact"
            className="bg-secondary hover:bg-secondary/80 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Discuss Your Investment Needs
          </Link>
        </div>
      </div>
    </section>
  )
}
