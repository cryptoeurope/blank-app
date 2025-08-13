import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface Fund {
  id: string
  name: string
  description: string
  image: string
  icon: string
  color: string
  longDescription?: string
  features?: string[]
  performance?: {
    period: string
    value: string
  }[]
}

const funds: Fund[] = [
  {
    id: "velocity",
    name: "ALRI VELOCITY FUND",
    description: "Focuses on precise, carefully selected strategies that aim for stability and growth.",
    image: "/funds/velocity-bg.jpg",
    icon: "/funds/velocity-icon.png",
    color: "from-blue-600 to-cyan-400",
    longDescription:
      "The ALRI Velocity Fund is designed for investors seeking a balance of stability and growth. Our team of expert analysts employs a combination of technical analysis and fundamental research to identify high-potential opportunities across various markets.",
    features: [
      "Diversified portfolio across multiple asset classes",
      "Risk-managed approach with strict drawdown controls",
      "Continuous monitoring and strategy optimization",
      "Quarterly performance reporting and analysis",
    ],
    performance: [
      { period: "1 Month", value: "+2.8%" },
      { period: "3 Months", value: "+7.5%" },
      { period: "6 Months", value: "+12.3%" },
      { period: "1 Year", value: "+18.7%" },
    ],
  },
  {
    id: "precision",
    name: "ALRI PRECISION FUND",
    description: "Focuses on precise, carefully selected strategies that aim for stability and growth.",
    image: "/funds/precision-bg.jpg",
    icon: "/funds/precision-icon.png",
    color: "from-teal-500 to-emerald-400",
    longDescription:
      "The ALRI Precision Fund leverages advanced statistical models and machine learning algorithms to identify market inefficiencies and capitalize on them with surgical precision.",
    features: [
      "Proprietary algorithmic trading systems",
      "Low correlation to traditional market indices",
      "Focus on absolute returns regardless of market conditions",
      "Sophisticated risk management framework",
    ],
    performance: [
      { period: "1 Month", value: "+3.1%" },
      { period: "3 Months", value: "+8.2%" },
      { period: "6 Months", value: "+14.5%" },
      { period: "1 Year", value: "+21.3%" },
    ],
  },
  {
    id: "main",
    name: "ALRI MAIN FUND",
    description: "Combination of best systems acquired by the Alri Team.",
    image: "/funds/main-bg.jpg",
    icon: "/funds/main-icon.png",
    color: "from-blue-500 to-indigo-600",
    longDescription:
      "The ALRI Main Fund represents the flagship offering of our company, combining the best trading systems and strategies developed by our team of quantitative analysts and financial experts.",
    features: [
      "Comprehensive approach combining multiple successful strategies",
      "Balanced risk profile suitable for most investors",
      "Continuous improvement through system optimization",
      "Transparent reporting and communication",
    ],
    performance: [
      { period: "1 Month", value: "+2.5%" },
      { period: "3 Months", value: "+7.8%" },
      { period: "6 Months", value: "+13.6%" },
      { period: "1 Year", value: "+19.2%" },
    ],
  },
  {
    id: "crypto",
    name: "ALRI CRYPTO FUND",
    description:
      "Embraces the dynamism of digital currencies, the ALRI Crypto Fund specializes in diversified cryptocurrency portfolios, utilizing advanced analytics to navigate the volatile landscape of blockchain technologies.",
    image: "/funds/crypto-bg.jpg",
    icon: "/funds/crypto-icon.png",
    color: "from-cyan-400 to-blue-500",
    longDescription:
      "The ALRI Crypto Fund is designed for investors looking to gain exposure to the cryptocurrency market through a professionally managed portfolio. Our team employs sophisticated analysis to navigate the volatile crypto landscape while managing risk.",
    features: [
      "Diversified exposure across major cryptocurrencies and emerging tokens",
      "Active management to capitalize on market opportunities",
      "Proprietary blockchain analytics for market insights",
      "Secure custody solutions and risk management protocols",
    ],
    performance: [
      { period: "1 Month", value: "+5.3%" },
      { period: "3 Months", value: "+18.7%" },
      { period: "6 Months", value: "+42.1%" },
      { period: "1 Year", value: "+87.5%" },
    ],
  },
  {
    id: "arbitrage",
    name: "ALRI ARBITRAGE FUND",
    description:
      "Exploiting price discrepancies across different markets, the ALRI Arbitrage Fund aims for risk-adjusted returns through simultaneous buying and selling in different markets, ensuring a strategic edge in efficiency and performance.",
    image: "/funds/arbitrage-bg.jpg",
    icon: "/funds/arbitrage-icon.png",
    color: "from-amber-500 to-orange-600",
    longDescription:
      "The ALRI Arbitrage Fund focuses on exploiting price discrepancies across different markets and exchanges. By simultaneously buying and selling related assets, we aim to generate consistent returns with minimal market exposure.",
    features: [
      "Market-neutral strategy with low correlation to traditional investments",
      "Sophisticated algorithms to identify arbitrage opportunities",
      "High-frequency execution capabilities",
      "Focus on consistent returns with low volatility",
    ],
    performance: [
      { period: "1 Month", value: "+1.8%" },
      { period: "3 Months", value: "+5.2%" },
      { period: "6 Months", value: "+10.7%" },
      { period: "1 Year", value: "+22.3%" },
    ],
  },
  {
    id: "hft",
    name: "ALRI HFT FUND",
    description:
      "ALRI HFT (High-Frequency Trading) Fund. This innovative fund harnesses the power of high-speed trading and advanced calculations to capitalize on the forex market's opportunities.",
    image: "/funds/hft-bg.jpg",
    icon: "/funds/hft-icon.png",
    color: "from-gray-200 to-gray-400",
    longDescription:
      "The ALRI HFT Fund utilizes cutting-edge technology and infrastructure to execute thousands of trades per day, capitalizing on small price movements across various markets with a focus on the forex market.",
    features: [
      "Ultra-low latency trading infrastructure",
      "Advanced statistical models for pattern recognition",
      "Proprietary signal generation algorithms",
      "Sophisticated risk management with real-time monitoring",
    ],
    performance: [
      { period: "1 Month", value: "+3.5%" },
      { period: "3 Months", value: "+9.8%" },
      { period: "6 Months", value: "+19.2%" },
      { period: "1 Year", value: "+38.7%" },
    ],
  },
]

export default function FundPage({ params }: { params: { id: string } }) {
  const fund = funds.find((f) => f.id === params.id)

  if (!fund) {
    notFound()
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className={`bg-gradient-to-r ${fund.color} text-white`}>
        <div className="container mx-auto px-4 py-16">
          <Link href="/#funds" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all funds
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Image
                  src={fund.icon || "/placeholder.svg"}
                  alt={`${fund.name} Icon`}
                  width={200}
                  height={200}
                  className="object-contain mx-auto"
                />
              </div>
            </div>

            <div className="md:w-3/4">
              <h1 className="text-4xl font-bold mb-4">{fund.name}</h1>
              <p className="text-xl mb-6">{fund.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {fund.performance?.map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                    <p className="text-sm text-white/80">{item.period}</p>
                    <p className="text-2xl font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">About the Fund</h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">{fund.longDescription}</p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Key Features</h3>
            <ul className="space-y-3 mb-8">
              {fund.features?.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-secondary text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Interested in this Fund?</h3>
            <p className="text-gray-700 mb-6">
              Contact our team to learn more about the {fund.name} and how it can fit into your investment portfolio.
            </p>
            <Link
              href="/contact"
              className="block w-full bg-secondary hover:bg-secondary/80 text-white text-center px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
