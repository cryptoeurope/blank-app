import { BarChart2, TrendingUp, TrendingDown, Shield, Clock, Zap, Network } from "lucide-react"
import type React from "react"

export interface Strategy {
  id: string
  name: string
  shortName: string
  description: string
  icon: string
  color: string
  longDescription?: string
  benefits?: string[]
  keyMetrics?: {
    name: string
    value: string
    icon: React.ReactNode
  }[]
  useCases?: string[]
}

export const strategies: Strategy[] = [
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
        icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Maximum Drawdown",
        value: "7.2%",
        icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Risk Management Score",
        value: "A+",
        icon: <Shield className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Execution Speed",
        value: "<5ms",
        icon: <Zap className="h-6 w-6 text-blue-500" />,
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
        icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Average Win/Loss Ratio",
        value: "2.4:1",
        icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Signal Generation",
        value: "15-20/day",
        icon: <Clock className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Implementation Speed",
        value: "Real-time",
        icon: <Zap className="h-6 w-6 text-blue-500" />,
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
        icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Data Processing",
        value: "5TB/day",
        icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Prediction Horizon",
        value: "1-14 days",
        icon: <Clock className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Computation Speed",
        value: "High",
        icon: <Zap className="h-6 w-6 text-blue-500" />,
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
        icon: <Network className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Update Frequency",
        value: "Real-time",
        icon: <Clock className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Sentiment Accuracy",
        value: "76.4%",
        icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Market Coverage",
        value: "Global",
        icon: <Shield className="h-6 w-6 text-blue-500" />,
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
        icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Sharpe Ratio",
        value: "1.8",
        icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Risk Exposure",
        value: "Moderate",
        icon: <Shield className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Data Latency",
        value: "<1s",
        icon: <Zap className="h-6 w-6 text-blue-500" />,
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
        icon: <Zap className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Broker Network",
        value: "15+",
        icon: <Network className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Avg. Spread Reduction",
        value: "18%",
        icon: <TrendingDown className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Relationship Strength",
        value: "A+",
        icon: <Shield className="h-6 w-6 text-blue-500" />,
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
        icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Avg. Monthly Return",
        value: "6.2%",
        icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Max Drawdown",
        value: "<4%",
        icon: <Shield className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Prop Firm Partners",
        value: "12+",
        icon: <Network className="h-6 w-6 text-blue-500" />,
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
        icon: <Zap className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Daily Trades",
        value: "1000+",
        icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Avg. Profit/Trade",
        value: "Small",
        icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Sharpe Ratio",
        value: "3.2",
        icon: <Shield className="h-6 w-6 text-blue-500" />,
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
