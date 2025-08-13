import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ScrollToTopClient from "@/components/scroll-to-top-client"
import StrategyBackLinkClient from "@/components/strategy-back-link-client"
import StrategyScrollToTop from "@/components/strategy-scroll-to-top"

// Define the strategy data directly in the page component for simplicity
const strategies = [
  {
    id: "aes",
    name: "Alri Expert Advisor Strategies",
    shortName: "AES",
    description:
      "Automated trading systems that execute trades based on predefined rules and algorithms without human intervention.",
    icon: "/strategies/aes-icon.png",
    color: "from-blue-900 to-indigo-800",
    longDescription:
      "ALRI Expert Advisor Strategies (AES) represent our suite of fully automated trading systems that operate 24/7 across global markets. These sophisticated algorithms analyze market conditions in real-time and execute trades based on predefined parameters and risk management rules. By removing emotional decision-making from the trading process, AES delivers consistent performance regardless of market volatility.",
    benefits: [
      "24/7 automated trading across multiple markets",
      "Elimination of emotional trading decisions",
      "Consistent execution based on predefined rules",
      "Ability to capitalize on opportunities in any time zone",
      "Continuous optimization through machine learning",
    ],
    keyMetrics: [
      {
        name: "Average Monthly Return",
        value: "10-20%",
      },
      {
        name: "Maximum Drawdown",
        value: "7.2%",
      },
      {
        name: "Risk Management Score",
        value: "A+",
      },
      {
        name: "Execution Speed",
        value: "<5ms",
      },
    ],
    useCases: [
      "Forex market trend following",
      "Cryptocurrency arbitrage",
      "Index futures scalping",
      "Commodity breakout trading",
      "Multi-timeframe analysis and execution",
    ],
  },
  {
    id: "asa",
    name: "Alri Signal Analytics",
    shortName: "ASA",
    description:
      "Advanced signal processing algorithms that identify trading opportunities across multiple markets and timeframes.",
    icon: "/strategies/asa-icon.png",
    color: "from-cyan-500 to-blue-500",
    longDescription:
      "ALRI Signal Analytics (ASA) employs sophisticated signal processing techniques to identify high-probability trading opportunities. Our proprietary algorithms filter market noise and detect meaningful patterns that indicate potential price movements. By analyzing data across multiple timeframes and markets, ASA provides actionable trading signals with clear entry, exit, and risk parameters.",
    benefits: [
      "High-precision entry and exit signals",
      "Multi-timeframe confirmation for increased accuracy",
      "Cross-market correlation analysis",
      "Adaptive parameters based on market conditions",
      "Clear risk-reward metrics for each signal",
    ],
    keyMetrics: [
      {
        name: "Signal Accuracy",
        value: "78.3%",
      },
      {
        name: "Average Win/Loss Ratio",
        value: "2.4:1",
      },
      {
        name: "Signal Generation",
        value: "15-20/day",
      },
      {
        name: "Implementation Speed",
        value: "Real-time",
      },
    ],
    useCases: [
      "Trend reversal identification",
      "Breakout confirmation",
      "Support and resistance level detection",
      "Volatility expansion alerts",
      "Divergence and convergence pattern recognition",
    ],
  },
  {
    id: "aqa",
    name: "Alri Quant Analytics",
    shortName: "AQA",
    description:
      "Sophisticated quantitative models that analyze market data to identify patterns and predict price movements.",
    icon: "/strategies/aqa-icon.png",
    color: "from-blue-600 to-indigo-600",
    longDescription:
      "ALRI Quant Analytics (AQA) leverages advanced mathematical and statistical models to analyze vast amounts of market data. Our quantitative approach identifies patterns, correlations, and anomalies that may not be apparent through traditional analysis. By combining machine learning with financial expertise, AQA generates actionable insights for trading and investment decisions.",
    benefits: [
      "Data-driven decision making without emotional bias",
      "Identification of complex patterns across multiple markets",
      "Predictive modeling for market movements",
      "Continuous learning and adaptation to changing market conditions",
      "Rigorous backtesting and validation methodologies",
    ],
    keyMetrics: [
      {
        name: "Model Accuracy",
        value: "82.1%",
      },
      {
        name: "Data Processing",
        value: "5TB/day",
      },
      {
        name: "Prediction Horizon",
        value: "1-14 days",
      },
      {
        name: "Computation Speed",
        value: "High",
      },
    ],
    useCases: [
      "Market regime detection",
      "Factor-based portfolio construction",
      "Statistical arbitrage",
      "Risk premia harvesting",
      "Alternative data analysis",
    ],
  },
  {
    id: "ama",
    name: "Alri Market Analytics",
    shortName: "AMA",
    description:
      "Comprehensive market analysis tools that provide insights into market trends, sentiment, and macroeconomic factors.",
    icon: "/strategies/ama-icon.png",
    color: "from-blue-700 to-blue-900",
    longDescription:
      "ALRI Market Analytics (AMA) provides a holistic view of market conditions by analyzing trends, sentiment, and macroeconomic factors. Our comprehensive approach combines technical analysis with fundamental research to identify market opportunities and risks. AMA delivers actionable insights that help traders and investors make informed decisions in dynamic market environments.",
    benefits: [
      "Holistic market perspective combining multiple analysis methods",
      "Early identification of market regime changes",
      "Sentiment analysis from social media and news sources",
      "Macroeconomic impact assessment on specific markets",
      "Correlation analysis across asset classes",
    ],
    keyMetrics: [
      {
        name: "Data Sources",
        value: "50+",
      },
      {
        name: "Update Frequency",
        value: "Real-time",
      },
      {
        name: "Sentiment Accuracy",
        value: "76.4%",
      },
      {
        name: "Market Coverage",
        value: "Global",
      },
    ],
    useCases: [
      "Market trend analysis",
      "Sentiment-based trading strategies",
      "Economic calendar impact assessment",
      "Cross-market correlation analysis",
      "News-based trading opportunities",
    ],
  },
  {
    id: "hfd",
    name: "Hedge Fund Systems",
    shortName: "HFS",
    description:
      "Comprehensive dashboards providing real-time insights into hedge fund performance, risk exposure, and portfolio allocation.",
    icon: "/strategies/hfd-icon.png",
    color: "from-purple-600 to-pink-600",
    longDescription:
      "Our Hedge Fund Systems (HFS) offer a consolidated view of critical metrics, enabling fund managers to make informed decisions and optimize investment strategies. With customizable dashboards and advanced analytics, HFS provides unparalleled transparency and control over your hedge fund operations.",
    benefits: [
      "Real-time performance monitoring",
      "Comprehensive risk analysis",
      "Customizable portfolio views",
      "Automated reporting and compliance",
      "Enhanced decision-making capabilities",
    ],
    keyMetrics: [
      {
        name: "Portfolio Return",
        value: "12.5%",
      },
      {
        name: "Sharpe Ratio",
        value: "1.8",
      },
      {
        name: "Risk Exposure",
        value: "Moderate",
      },
      {
        name: "Data Latency",
        value: "<1s",
      },
    ],
    useCases: [
      "Performance attribution analysis",
      "Risk management and mitigation",
      "Portfolio optimization",
      "Investor reporting",
      "Regulatory compliance",
    ],
  },
  {
    id: "abr",
    name: "Alri Broker Relationships",
    shortName: "ABR",
    description:
      "Strategic partnerships with brokers and liquidity providers to optimize execution quality and trading conditions.",
    icon: "/strategies/abr-icon.png",
    color: "from-blue-600 to-cyan-700",
    longDescription:
      "ALRI Broker Relationships (ABR) focuses on establishing and maintaining strategic partnerships with top-tier brokers and liquidity providers. These relationships are crucial for ensuring optimal execution quality, competitive pricing, and access to diverse market opportunities. Our team negotiates favorable terms and continuously monitors performance to ensure the best possible trading conditions for our strategies.",
    benefits: [
      "Preferential trading conditions and reduced costs",
      "Access to deep liquidity pools across multiple markets",
      "Enhanced execution quality and reduced slippage",
      "Priority technical support and dedicated account management",
      "Opportunities for white-label solutions and custom integrations",
    ],
    keyMetrics: [
      {
        name: "Execution Speed",
        value: "<3ms",
      },
      {
        name: "Broker Network",
        value: "15+",
      },
      {
        name: "Avg. Spread Reduction",
        value: "18%",
      },
      {
        name: "Relationship Strength",
        value: "A+",
      },
    ],
    useCases: [
      "Multi-broker execution optimization",
      "Liquidity aggregation for large orders",
      "Cross-broker arbitrage opportunities",
      "Custom feed integration for proprietary strategies",
      "Specialized market access for exotic instruments",
    ],
  },
  {
    id: "aps",
    name: "Alri Propfirm Strategies",
    shortName: "APS",
    description:
      "Specialized trading approaches designed for proprietary trading firms with a focus on consistent performance and risk management.",
    icon: "/strategies/aps-icon.png",
    color: "from-purple-600 to-indigo-700",
    longDescription:
      "ALRI Propfirm Strategies (APS) are specifically designed for proprietary trading firms and traders seeking to pass prop firm challenges. These strategies emphasize consistent performance, strict risk management, and adherence to specific trading parameters. Our approach helps traders navigate the unique requirements of prop firms while maximizing their potential for success.",
    benefits: [
      "Tailored strategies for prop firm challenges and evaluations",
      "Risk-controlled approaches that meet strict drawdown limits",
      "Consistent performance metrics that satisfy profit targets",
      "Adaptable trading methods for different prop firm rules",
      "Proven track record of successful challenge completions",
    ],
    keyMetrics: [
      {
        name: "Challenge Success Rate",
        value: "87%",
      },
      {
        name: "Avg. Monthly Return",
        value: "6.2%",
      },
      {
        name: "Max Drawdown",
        value: "<4%",
      },
      {
        name: "Prop Firm Partners",
        value: "12+",
      },
    ],
    useCases: [
      "FTMO challenge preparation",
      "Funded trader program qualification",
      "Consistent prop account management",
      "Scaling strategies for increased capital",
      "Risk-managed trading for long-term sustainability",
    ],
  },
  {
    id: "ahs",
    name: "Alri HFT Strategies",
    shortName: "AHS",
    description:
      "High-frequency trading systems that capitalize on small price movements with rapid execution and low latency.",
    icon: "/strategies/ahs-icon.png",
    color: "from-blue-800 to-blue-950",
    longDescription:
      "ALRI HFT Strategies (AHS) leverage cutting-edge technology to execute trades at extremely high speeds, capitalizing on small price movements that occur within milliseconds. Our sophisticated infrastructure and algorithms enable us to identify and act on market inefficiencies faster than traditional trading approaches, providing a significant competitive advantage.",
    benefits: [
      "Ultra-low latency execution across multiple markets",
      "Ability to capitalize on micro price movements",
      "High trade volume with minimal market impact",
      "Statistical arbitrage across correlated instruments",
      "Advanced risk management with real-time monitoring",
    ],
    keyMetrics: [
      {
        name: "Execution Speed",
        value: "<0.5ms",
      },
      {
        name: "Daily Trades",
        value: "1000+",
      },
      {
        name: "Avg. Profit/Trade",
        value: "Small",
      },
      {
        name: "Sharpe Ratio",
        value: "3.2",
      },
    ],
    useCases: [
      "Market making and liquidity provision",
      "Statistical arbitrage",
      "News-based event trading",
      "Order book imbalance strategies",
      "Flash trading during market volatility",
    ],
  },
]

export default function StrategyPage({ params }: { params: { id: string } }) {
  const strategy = strategies.find((s) => s.id === params.id)

  if (!strategy) {
    notFound()
  }

  // Get related strategies (excluding current one)
  const relatedStrategies = strategies.filter((s) => s.id !== strategy.id).slice(0, 3)

  return (
    <>
      <ScrollToTopClient />
      <div className="bg-digital-pattern min-h-screen relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className={`bg-gradient-to-r ${strategy.color} text-white relative z-10`}>
          <div className="container mx-auto px-4 py-16">
            <StrategyBackLinkClient />

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
                        <span className="text-gray-300 group-hover:text-secondary transition-colors">
                          {s.shortName}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <StrategyScrollToTop />
        </div>
      </div>
    </>
  )
}
