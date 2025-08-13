import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Fund {
  id: string
  name: string
  description: string
  image: string
  icon: string
  color: string
}

export default function FundsSection() {
  const funds: Fund[] = [
    {
      id: "velocity",
      name: "ALRI VELOCITY FUND",
      description: "Focuses on precise, carefully selected strategies that aim for stability and growth.",
      image: "/funds/velocity-bg.jpg",
      icon: "/funds/velocity-icon.png",
      color: "from-blue-600 to-cyan-400",
    },
    {
      id: "precision",
      name: "ALRI PRECISION FUND",
      description: "Focuses on precise, carefully selected strategies that aim for stability and growth.",
      image: "/funds/precision-bg.jpg",
      icon: "/funds/precision-icon.png",
      color: "from-teal-500 to-emerald-400",
    },
    {
      id: "main",
      name: "ALRI MAIN FUND",
      description: "Combination of best systems acquired by the Alri Team.",
      image: "/funds/main-bg.jpg",
      icon: "/funds/main-icon.png",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "crypto",
      name: "ALRI CRYPTO FUND",
      description:
        "Embraces the dynamism of digital currencies, the ALRI Crypto Fund specializes in diversified cryptocurrency portfolios, utilizing advanced analytics to navigate the volatile landscape of blockchain technologies.",
      image: "/funds/crypto-bg.jpg",
      icon: "/funds/crypto-icon.png",
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "arbitrage",
      name: "ALRI ARBITRAGE FUND",
      description:
        "Exploiting price discrepancies across different markets, the ALRI Arbitrage Fund aims for risk-adjusted returns through simultaneous buying and selling in different markets, ensuring a strategic edge in efficiency and performance.",
      image: "/funds/arbitrage-bg.jpg",
      icon: "/funds/arbitrage-icon.png",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: "hft",
      name: "ALRI HFT FUND",
      description:
        "ALRI HFT (High-Frequency Trading) Fund. This innovative fund harnesses the power of high-speed trading and advanced calculations to capitalize on the forex market's opportunities.",
      image: "/funds/hft-bg.jpg",
      icon: "/funds/hft-icon.png",
      color: "from-gray-200 to-gray-400",
    },
  ]

  return (
    <section id="funds" className="py-20 bg-digital text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">ALRI FUNDS</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our diverse portfolio of funds is designed to meet various investment objectives, from stable growth to
            high-frequency trading opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {funds.map((fund) => (
            <div
              key={fund.id}
              className="fund-card rounded-lg overflow-hidden shadow-lg border border-blue-700/30 h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-80 z-10"
                  style={{
                    backgroundImage: `url(${fund.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${fund.color} opacity-70 z-20`}></div>
                <div className="absolute inset-0 flex items-center justify-between p-6 z-30">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={fund.icon || "/placeholder.svg"}
                      alt={`${fund.name} Icon`}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                    <Image src="/alri-logo.png" alt="ALRI Logo" width={32} height={32} className="object-contain" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{fund.name}</h3>
                <p className="text-gray-300 mb-4 flex-1">{fund.description}</p>
                <Link
                  href={`/funds/${fund.id}`}
                  className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors mt-auto"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
