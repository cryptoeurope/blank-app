"use client"

import { useState, useEffect } from "react"
import { MapPin, Users, Zap } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  id: string
  name: string
  role: string
  location: string
  country: string
  continent: string
  coordinates: [number, number]
  bio: string
  flag: string
  joinedYear: number
}

interface MapMarkerProps {
  member: TeamMember
  isActive: boolean
  onClick: () => void
  animationDelay: number
  continentColor: string
}

const MapMarker = ({ member, isActive, onClick, animationDelay, continentColor }: MapMarkerProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), animationDelay)
    return () => clearTimeout(timer)
  }, [animationDelay])

  return (
    <div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } ${isActive ? "z-30" : "z-20"}`}
      style={{
        left: `${((member.coordinates[1] + 180) / 360) * 100}%`,
        top: `${((90 - member.coordinates[0]) / 180) * 100}%`,
      }}
      onClick={onClick}
    >
      <div className={`relative transition-all duration-500 ${isActive ? "scale-150" : "hover:scale-125"}`}>
        {/* Outer pulsing ring */}
        <div
          className="absolute rounded-full animate-ping opacity-50"
          style={{
            backgroundColor: continentColor,
            width: "24px",
            height: "24px",
            marginLeft: "-12px",
            marginTop: "-12px",
          }}
        ></div>

        {/* Glow effect */}
        <div
          className="absolute rounded-full opacity-70"
          style={{
            backgroundColor: continentColor,
            boxShadow: `0 0 20px ${continentColor}`,
            width: "16px",
            height: "16px",
            marginLeft: "-8px",
            marginTop: "-8px",
            filter: "blur(3px)",
          }}
        ></div>

        {/* Main marker */}
        <div
          className={`w-4 h-4 rounded-full border-2 border-white shadow-2xl transition-all duration-500 relative z-10 ${
            isActive ? "scale-125" : ""
          }`}
          style={{
            backgroundColor: continentColor,
            boxShadow: `0 0 15px ${continentColor}, inset 0 0 8px rgba(255,255,255,0.4)`,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-white opacity-25"></div>
        </div>

        {/* Flag indicator */}
        <div className="absolute -top-2 -right-2 w-6 h-5 rounded-sm overflow-hidden border border-white shadow-lg backdrop-blur-sm bg-black/20">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xs">{member.flag}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GlobalTeamMap() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const currentYear = 2025
  const [hoveredContinent, setHoveredContinent] = useState<string | null>(null)

  const teamMembers: TeamMember[] = [
    // Africa - Updated coordinates for lower/mid Africa positioning
    {
      id: "tosin",
      name: "Tosin Komolafe",
      role: "Advisor (Investments, Arbitrage, Prop Firms, Brokers)",
      location: "Johannesburg, South Africa",
      country: "South Africa",
      continent: "Africa",
      coordinates: [-26.2041, 28.0473], // Johannesburg coordinates
      bio: "Leading our expansion into African markets with expertise in investments, arbitrage, and broker relationships.",
      flag: "🇿🇦",
      joinedYear: 2024,
    },
    {
      id: "boris",
      name: "Boris Toffohossou",
      role: "Proprietary Trading Technology",
      location: "Kinshasa, Democratic Republic of Congo",
      country: "Democratic Republic of Congo",
      continent: "Africa",
      coordinates: [-4.4419, 15.2663], // Kinshasa coordinates
      bio: "Building cutting-edge proprietary trading technology from Kinshasa.",
      flag: "🇨🇩",
      joinedYear: 2024,
    },
    {
      id: "james",
      name: "James Didier",
      role: "Development Manager",
      location: "Luanda, Angola",
      country: "Angola",
      continent: "Africa",
      coordinates: [-8.839, 13.2894], // Luanda coordinates
      bio: "Managing development operations across African markets from Luanda.",
      flag: "🇦🇴",
      joinedYear: 2025,
    },
    // Europe
    {
      id: "ripley",
      name: "Ripley Donavan",
      role: "Co-Founder, CEO & CIO",
      location: "Copenhagen, Denmark",
      country: "Denmark",
      continent: "Europe",
      coordinates: [55.6761, 12.5683],
      bio: "Leading ALRI's strategic vision and investment operations from Copenhagen.",
      flag: "🇩🇰",
      joinedYear: 2023,
    },
    {
      id: "kresimir",
      name: "Kresimir Rudic",
      role: "Chief Financial Officer (CFO)",
      location: "Berlin, Germany",
      country: "Germany",
      continent: "Europe",
      coordinates: [52.52, 13.405],
      bio: "Managing financial operations and strategic planning as CFO from Berlin.",
      flag: "🇩🇪",
      joinedYear: 2023,
    },
    {
      id: "florian",
      name: "Florian Eberl",
      role: "Signal Specialist (Advisor)",
      location: "Berlin, Germany",
      country: "Germany",
      continent: "Europe",
      coordinates: [52.52, 13.405],
      bio: "Expert signal specialist and advisor in market analysis from Berlin.",
      flag: "🇩🇪",
      joinedYear: 2023,
    },
    {
      id: "alex",
      name: "Alex Coppel",
      role: "Partner & Advisor",
      location: "Paris, France",
      country: "France",
      continent: "Europe",
      coordinates: [48.8566, 2.3522],
      bio: "Providing strategic partnerships and advisory services from Paris.",
      flag: "🇫🇷",
      joinedYear: 2023,
    },
    {
      id: "steven",
      name: "Steven",
      role: "Partner & Advisor",
      location: "London, United Kingdom",
      country: "United Kingdom",
      continent: "Europe",
      coordinates: [51.5074, -0.1278],
      bio: "Strategic advisor and partner based in London.",
      flag: "🇬🇧",
      joinedYear: 2023,
    },
    {
      id: "davide",
      name: "Davide Franchioni",
      role: "Advisor (Hedge Fund, Broker, Trading Strategy)",
      location: "Milan, Italy",
      country: "Italy",
      continent: "Europe",
      coordinates: [45.4642, 9.19],
      bio: "Providing strategic guidance on hedge fund operations, broker relationships, and trading strategies from Milan.",
      flag: "🇮🇹",
      joinedYear: 2023,
    },
    {
      id: "leonardo",
      name: "Leonardo Fisichella",
      role: "Arbitrage Specialist",
      location: "Rome, Italy",
      country: "Italy",
      continent: "Europe",
      coordinates: [41.9028, 12.4964],
      bio: "Developing arbitrage strategies and European market operations from Rome.",
      flag: "🇮🇹",
      joinedYear: 2024,
    },
    {
      id: "vitalii",
      name: "Vitalii Petrushynskyi",
      role: "Quantitative Analyst",
      location: "Kyiv, Ukraine",
      country: "Ukraine",
      continent: "Europe",
      coordinates: [50.4501, 30.5234],
      bio: "Specializing in advanced statistical modeling and risk analysis from Kyiv.",
      flag: "🇺🇦",
      joinedYear: 2024,
    },
    // Asia
    {
      id: "placid",
      name: "Placid Rodrigues",
      role: "Lead Quantitative Analyst",
      location: "Mumbai, India",
      country: "India",
      continent: "Asia",
      coordinates: [19.076, 72.8777],
      bio: "Leading quantitative research and algorithm development from Mumbai.",
      flag: "🇮🇳",
      joinedYear: 2023,
    },
    {
      id: "anoop",
      name: "Anoop A",
      role: "Senior Quantitative Trader & Analyst",
      location: "Bangalore, India",
      country: "India",
      continent: "Asia",
      coordinates: [12.9716, 77.5946],
      bio: "Senior quantitative trader and analyst specializing in advanced trading strategies from Bangalore.",
      flag: "🇮🇳",
      joinedYear: 2024,
    },
  ]

  const continentColors = {
    Europe: "#8B5CF6", // Purple
    Asia: "#10B981", // Green
    Africa: "#F97316", // Orange
  }

  const continentIcons = {
    Europe: "🏛️",
    Asia: "🏯",
    Africa: "🦁",
  }

  const continentStats = teamMembers.reduce(
    (acc, member) => {
      acc[member.continent] = (acc[member.continent] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const filteredMembers = teamMembers.filter((member) => member.joinedYear <= currentYear)

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            ALRI Global Team Map
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Professional 3D World Map */}
        <div
          className="relative bg-slate-900/20 backdrop-blur-xl rounded-3xl border border-cyan-500/30 overflow-hidden mb-8 shadow-2xl"
          style={{ boxShadow: "0 0 60px rgba(6, 182, 212, 0.15)" }}
        >
          <div className="relative w-full h-[800px]">
            {/* Base Map Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/alri-blue-world-map.jpeg"
                alt="ALRI Global Team Map"
                fill
                className={`object-cover transition-all duration-500 opacity-100`}
                style={{
                  filter: "brightness(1.0) contrast(1.1)",
                }}
              />
            </div>

            {/* Team Member Markers */}
            {filteredMembers.map((member, index) => (
              <MapMarker
                key={member.id}
                member={member}
                isActive={selectedMember?.id === member.id}
                onClick={() => setSelectedMember(selectedMember?.id === member.id ? null : member)}
                animationDelay={index * 200}
                continentColor={continentColors[member.continent]}
              />
            ))}

            {/* Network Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {filteredMembers.map((member, index) => {
                if (index === 0) return null
                const prevMember = filteredMembers[index - 1]
                return (
                  <line
                    key={`line-${member.id}`}
                    x1={`${((prevMember.coordinates[1] + 180) / 360) * 100}%`}
                    y1={`${((90 - prevMember.coordinates[0]) / 180) * 100}%`}
                    x2={`${((member.coordinates[1] + 180) / 360) * 100}%`}
                    y2={`${((90 - member.coordinates[0]) / 180) * 100}%`}
                    stroke="rgba(6, 182, 212, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="6,3"
                    className="animate-pulse"
                    style={{ filter: "drop-shadow(0 0 2px rgba(6, 182, 212, 0.4))" }}
                  />
                )
              })}
            </svg>
          </div>

          {/* Selected Member Info Panel */}
          {selectedMember && (
            <div
              className="absolute bottom-6 left-6 right-6 bg-black/85 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 shadow-2xl animate-fade-in"
              style={{ boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)" }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center relative"
                    style={{ backgroundColor: continentColors[selectedMember.continent] }}
                  >
                    <Users className="w-8 h-8 text-white" />
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ backgroundColor: continentColors[selectedMember.continent] }}
                    ></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
                    <span className="text-2xl">{selectedMember.flag}</span>
                    <div
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: `${continentColors[selectedMember.continent]}20`,
                        color: continentColors[selectedMember.continent],
                      }}
                    >
                      {selectedMember.continent}
                    </div>
                  </div>
                  <p className="text-cyan-400 text-lg font-medium mb-2">{selectedMember.role}</p>
                  <p className="text-gray-300 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    {selectedMember.location}
                  </p>
                  <p className="text-gray-300 leading-relaxed">{selectedMember.bio}</p>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Premium Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(continentStats).map(([continent, count]) => (
            <div
              key={continent}
              className="relative group cursor-pointer transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredContinent(continent)}
              onMouseLeave={() => setHoveredContinent(null)}
            >
              <div
                className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 shadow-2xl relative overflow-hidden"
                style={{
                  borderColor: hoveredContinent === continent ? continentColors[continent] : "rgba(55, 65, 81, 0.3)",
                  boxShadow:
                    hoveredContinent === continent
                      ? `0 0 30px ${continentColors[continent]}30`
                      : "0 10px 25px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-5 rounded-2xl"
                  style={{ backgroundColor: continentColors[continent] }}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${continentColors[continent]}15` }}
                    >
                      {continentIcons[continent]}
                    </div>
                    <Zap className="w-6 h-6 text-gray-400" />
                  </div>

                  <div className="text-4xl font-bold mb-2" style={{ color: continentColors[continent] }}>
                    {count}
                  </div>

                  <div className="text-gray-300 font-medium text-lg mb-1">{continent}</div>

                  <div className="text-gray-500 text-sm">Team {count === 1 ? "Member" : "Members"}</div>

                  <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        backgroundColor: continentColors[continent],
                        width: `${(count / Math.max(...Object.values(continentStats))) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Network Status */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-xl rounded-full px-6 py-3 border border-green-500/30">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold">Global Network Active</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">{filteredMembers.length} Active Nodes</span>
            <span className="text-gray-400">•</span>
            <span className="text-cyan-400">{Object.keys(continentStats).length} Regions</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #06b6d4, #3b82f6);
          cursor: pointer;
          box-shadow: 0 0 8px rgba(6, 182, 212, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #06b6d4, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </section>
  )
}
