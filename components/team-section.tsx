import React from "react"
import { User, Rocket, Star, BarChart, Clock, Briefcase, Zap, Handshake } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  icons: React.ReactNode[]
}

interface TeamCategory {
  title: string
  icon: React.ReactNode
  members: TeamMember[]
  color: string
}

export default function TeamSection() {
  const teamCategories: TeamCategory[] = [
    {
      title: "Leadership",
      icon: <Star className="h-6 w-6 text-yellow-400" />,
      color: "text-yellow-400",
      members: [
        {
          name: "Ripley",
          role: "Co-Founder, CEO and Chief Investment Officer (CIO)",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Rocket key="rocket" className="h-5 w-5 text-red-500" />,
            <Star key="star" className="h-5 w-5 text-yellow-400" />,
          ],
        },
        {
          name: "Alex",
          role: "Chief Strategy Officer (CSO) and Head of Investor Relations (HIR)",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Rocket key="rocket" className="h-5 w-5 text-red-500" />,
            <Star key="star" className="h-5 w-5 text-yellow-400" />,
          ],
        },
      ],
    },
    {
      title: "Advisors",
      icon: <BarChart className="h-6 w-6 text-orange-400" />,
      color: "text-orange-400",
      members: [
        {
          name: "Florian",
          role: "Signal Specialist",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Clock key="clock" className="h-5 w-5 text-amber-500" />,
          ],
        },
        {
          name: "Davide",
          role: "Advisor (Hedge Fund, Broker, Trading Strategy)",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Clock key="clock" className="h-5 w-5 text-amber-500" />,
          ],
        },
        {
          name: "Tosin",
          role: "Advisor (Investments, Arbitrage, Prop Firms, Brokers)",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Clock key="clock" className="h-5 w-5 text-amber-500" />,
          ],
        },
        {
          name: "Leonardo",
          role: "Arbitrage Specialist",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Clock key="clock" className="h-5 w-5 text-amber-500" />,
          ],
        },
        {
          name: "Kreso",
          role: "Advisor (EAs, Arbitrage, HFT Software)",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Clock key="clock" className="h-5 w-5 text-amber-500" />,
            <Zap key="zap" className="h-5 w-5 text-blue-500" />,
          ],
        },
      ],
    },
    {
      title: "Team Members",
      icon: <Briefcase className="h-6 w-6 text-brown-500" />,
      color: "text-amber-800",
      members: [
        {
          name: "Placid",
          role: "Lead Quantitative Analyst",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Briefcase key="briefcase" className="h-5 w-5 text-amber-800" />,
          ],
        },
        {
          name: "Vitalii",
          role: "Quantitative Analyst",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Briefcase key="briefcase" className="h-5 w-5 text-amber-800" />,
          ],
        },
        {
          name: "Boris",
          role: "Proprietary Trading Technology",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Briefcase key="briefcase" className="h-5 w-5 text-amber-800" />,
          ],
        },
        {
          name: "James",
          role: "Development Manager",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Briefcase key="briefcase" className="h-5 w-5 text-amber-800" />,
          ],
        },
      ],
    },
    {
      title: "Partners",
      icon: <Handshake className="h-6 w-6 text-purple-500" />,
      color: "text-purple-500",
      members: [
        {
          name: "Alan",
          role: "Co-Founder",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Rocket key="rocket" className="h-5 w-5 text-red-500" />,
            <Handshake key="handshake" className="h-5 w-5 text-purple-500" />,
          ],
        },
        {
          name: "Steven",
          role: "Partner and Advisor",
          icons: [
            <User key="user" className="h-5 w-5 text-gray-700" />,
            <Handshake key="handshake" className="h-5 w-5 text-purple-500" />,
          ],
        },
      ],
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR TEAM</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience in quantitative finance, algorithmic
            trading, and financial technology.
          </p>
        </div>

        <div className="space-y-16">
          {teamCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 inline-flex items-center justify-center bg-gray-100 px-6 py-2 rounded-full shadow-sm">
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                  <span className="ml-2">{category.icon}</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="team-card bg-digital rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative"
                  >
                    {/* Add decorative elements to the background */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-400 rounded-full blur-xl"></div>
                    </div>

                    <div className="p-6 relative z-10">
                      <div className="flex justify-center space-x-2 mb-4">
                        {member.icons.map((icon, iconIndex) => (
                          <div key={iconIndex}>
                            {React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5 text-white" })}
                          </div>
                        ))}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h4>
                      <p className={`text-center text-sm text-white text-opacity-80`}>{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
