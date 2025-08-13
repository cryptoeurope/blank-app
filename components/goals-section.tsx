import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function GoalsSection() {
  return (
    <section id="goals" className="py-20 bg-digital-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">GOALS AND OBJECTIVES</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our strategic goals guide our path forward as we strive to revolutionize quantitative finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-lg shadow-md border border-blue-700/30 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            {/* Add subtle background elements to the card */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-400 rounded-full blur-xl"></div>
            </div>

            <h3 className="text-2xl font-bold text-secondary mb-4 relative z-10">Driving Growth</h3>
            <p className="text-gray-300 mb-6 relative z-10">
              Our primary goal is to scale our live capital management to $1 million, eventually reaching a $10 million
              capital target. We plan to achieve this through advanced trading strategies, leveraging both automated and
              manual trading systems to maximize returns.
            </p>
            <div className="mt-6 mb-4 relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">Progress to Goal</span>
              </div>
              <div className="relative">
                <div className="h-2 bg-blue-800/50 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="flex justify-end mt-2 text-xs text-gray-300">
                  <span>Target: $1M</span>
                </div>
              </div>
            </div>
            <div className="mt-6 relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors text-sm"
              >
                Learn more <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-lg shadow-md border border-blue-700/30 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            {/* Add subtle background elements to the card */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-400 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-teal-400 rounded-full blur-xl"></div>
            </div>

            <h3 className="text-2xl font-bold text-secondary mb-4 relative z-10">Ensuring Customer Satisfaction</h3>
            <p className="text-gray-300 mb-6 relative z-10">
              We are deeply committed to our clients' success, aiming to not only meet but exceed their expectations
              with superior performance, transparent reporting, and dedicated support. Our client-centric approach
              ensures that we maintain a high standard of service and forge long-lasting relationships.
            </p>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  A+
                </div>
                <span className="ml-2 text-gray-300">Client Satisfaction Rating</span>
              </div>
              <span className="text-green-500 font-bold">98%</span>
            </div>
            <div className="mt-6 relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors text-sm"
              >
                Learn more <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
