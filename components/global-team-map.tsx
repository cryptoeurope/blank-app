"use client"

import { useState, useEffect } from "react"
import { MapPin, Users, Calendar, Network } from "lucide-react"

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
          className="absolute inset-0 rounded-full animate-ping opacity-40"
          style={{ backgroundColor: continentColor }}
        ></div>

        {/* Middle glow ring */}
        <div
          className="absolute inset-0 rounded-full opacity-60 blur-sm"
          style={{
            backgroundColor: continentColor,
            boxShadow: `0 0 20px ${continentColor}`,
            animation: "pulse 2s infinite",
          }}
        ></div>

        {/* Main marker */}
        <div
          className={`w-4 h-4 rounded-full border-2 border-white shadow-2xl transition-all duration-500 relative z-10 ${
            isActive ? "scale-125" : ""
          }`}
          style={{
            backgroundColor: continentColor,
            boxShadow: `0 0 15px ${continentColor}, inset 0 0 10px rgba(255,255,255,0.3)`,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-white opacity-30"></div>
        </div>

        {/* Flag indicator */}
        <div className="absolute -top-2 -right-2 w-5 h-4 rounded-sm overflow-hidden border border-white shadow-lg backdrop-blur-sm bg-black/30">
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
  const [showTimeline, setShowTimeline] = useState(true)
  const [currentYear, setCurrentYear] = useState(2025)
  const [hoveredContinent, setHoveredContinent] = useState<string | null>(null)

  const teamMembers: TeamMember[] = [
    {
      id: "ripley",
      name: "Ripley",
      role: "Co-Founder, CEO and Chief Investment Officer",
      location: "Copenhagen, Denmark",
      country: "Denmark",
      continent: "Europe",
      coordinates: [55.6761, 12.5683],
      bio: "Leading ALRI's strategic vision and investment operations from Copenhagen.",
      flag: "🇩🇰",
      joinedYear: 2023,
    },
    {
      id: "alex",
      name: "Alex",
      role: "Chief Strategy Officer and Head of Investor Relations",
      location: "Paris, France",
      country: "France",
      continent: "Europe",
      coordinates: [48.8566, 2.3522],
      bio: "Driving strategic partnerships and investor relations from Paris.",
      flag: "🇫🇷",
      joinedYear: 2023,
    },
    {
      id: "placid",
      name: "Placid",
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
      id: "florian",
      name: "Florian",
      role: "Signal Specialist",
      location: "Berlin, Germany",
      country: "Germany",
      continent: "Europe",
      coordinates: [52.52, 13.405],
      bio: "Expert in signal processing and market analysis from Berlin.",
      flag: "🇩🇪",
      joinedYear: 2023,
    },
    {
      id: "davide",
      name: "Davide",
      role: "Advisor (Hedge Fund, Broker, Trading Strategy)",
      location: "Milan, Italy",
      country: "Italy",
      continent: "Europe",
      coordinates: [45.4642, 9.19],
      bio: "Providing strategic guidance on hedge fund operations and trading.",
      flag: "🇮🇹",
      joinedYear: 2023,
    },
    {
      id: "vitalii",
      name: "Vitalii",
      role: "Quantitative Analyst",
      location: "Kyiv, Ukraine",
      country: "Ukraine",
      continent: "Europe",
      coordinates: [50.4501, 30.5234],
      bio: "Specializing in advanced statistical modeling and risk analysis.",
      flag: "🇺🇦",
      joinedYear: 2024,
    },
    {
      id: "tosin",
      name: "Tosin",
      role: "Advisor (Investments, Arbitrage, Prop Firms)",
      location: "Dubai, UAE",
      country: "UAE",
      continent: "Middle East",
      coordinates: [25.2048, 55.2708],
      bio: "Leading our expansion into Middle Eastern and African markets.",
      flag: "🇦🇪",
      joinedYear: 2024,
    },
    {
      id: "leonardo",
      name: "Leonardo",
      role: "Arbitrage Specialist",
      location: "Rome, Italy",
      country: "Italy",
      continent: "Europe",
      coordinates: [41.9028, 12.4964],
      bio: "Developing arbitrage strategies and European market operations.",
      flag: "🇮🇹",
      joinedYear: 2024,
    },
    {
      id: "boris",
      name: "Boris",
      role: "Proprietary Trading Technology",
      location: "Cape Town, South Africa",
      country: "South Africa",
      continent: "Africa",
      coordinates: [-33.9249, 18.4241],
      bio: "Building cutting-edge trading technology from Cape Town.",
      flag: "🇿🇦",
      joinedYear: 2024,
    },
    {
      id: "james",
      name: "James",
      role: "Development Manager",
      location: "Cairo, Egypt",
      country: "Egypt",
      continent: "Africa",
      coordinates: [30.0444, 31.2357],
      bio: "Managing development operations across African markets.",
      flag: "🇪🇬",
      joinedYear: 2025,
    },
  ]

  const continentColors = {
    Europe: "#8B5CF6", // Purple
    Asia: "#10B981", // Green
    Africa: "#F97316", // Orange
    "Middle East": "#EC4899", // Magenta
    "North America": "#F59E0B", // Yellow
  }

  const continentIcons = {
    Europe: "🏛️",
    Asia: "🏯",
    Africa: "🦁",
    "Middle East": "🕌",
    "North America": "🗽",
  }

  const continentStats = teamMembers.reduce(
    (acc, member) => {
      acc[member.continent] = (acc[member.continent] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const filteredMembers = showTimeline ? teamMembers.filter((member) => member.joinedYear <= currentYear) : teamMembers

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)" }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-30 animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            GLOBAL TEAM NETWORK
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Our distributed team of quantitative finance experts spans across continents, creating a 24/7 global network
            of innovation and expertise in algorithmic trading and financial technology.
          </p>
        </div>

        {/* Futuristic Timeline Control */}
        <div className="flex justify-center mb-12">
          <div
            className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 shadow-2xl"
            style={{ boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)" }}
          >
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-lg">Team Expansion Timeline</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-300 text-sm font-medium">Year:</span>
                <div className="relative">
                  <input
                    type="range"
                    min="2023"
                    max="2025"
                    value={currentYear}
                    onChange={(e) => setCurrentYear(Number.parseInt(e.target.value))}
                    className="w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${((currentYear - 2023) / 2) * 100}%, #374151 ${((currentYear - 2023) / 2) * 100}%, #374151 100%)`,
                    }}
                  />
                </div>
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-2 rounded-lg font-bold text-lg min-w-[60px] text-center">
                  {currentYear}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Futuristic World Map Container */}
        <div
          className="relative bg-black/20 backdrop-blur-xl rounded-3xl border border-cyan-500/20 overflow-hidden mb-12 shadow-2xl"
          style={{ boxShadow: "0 0 50px rgba(6, 182, 212, 0.1)" }}
        >
          <div className="relative w-full h-[600px]">
            {/* High-tech World Map SVG */}
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              <defs>
                <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f0f23" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#1a1a2e" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#16213e" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2a2a3e" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#1f1f35" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Ocean background */}
              <rect width="1000" height="500" fill="url(#oceanGradient)" />

              {/* Glowing grid pattern */}
              <defs>
                <pattern id="grid" width="50" height="25" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 25" fill="none" stroke="#06b6d4" strokeWidth="0.3" opacity="0.1" />
                </pattern>
              </defs>
              <rect width="1000" height="500" fill="url(#grid)" />

              {/* Stylized World Continents with Neon Outlines */}

              {/* North America */}
              <path
                d="M120 140 C140 130 160 135 180 145 C200 155 220 170 230 190 C235 210 230 230 220 245 C200 255 180 250 160 245 C140 240 125 225 120 205 C115 185 115 165 120 140 Z"
                fill="url(#landGradient)"
                stroke="#06b6d4"
                strokeWidth="1.5"
                filter="url(#glow)"
                opacity="0.8"
              />

              {/* South America */}
              <path
                d="M200 280 C215 270 230 275 240 290 C250 305 245 325 240 345 C235 365 225 380 210 385 C195 390 180 385 175 370 C170 355 175 340 180 325 C185 310 190 295 200 280 Z"
                fill="url(#landGradient)"
                stroke="#06b6d4"
                strokeWidth="1.5"
                filter="url(#glow)"
                opacity="0.8"
              />

              {/* Europe */}
              <path
                d="M480 160 C495 155 510 160 520 170 C530 180 525 195 520 205 C515 215 505 220 495 218 C485 216 475 210 470 200 C465 190 470 180 475 170 C480 165 480 160 480 160 Z"
                fill="url(#landGradient)"
                stroke="#8B5CF6"
                strokeWidth="2"
                filter="url(#glow)"
                opacity="0.9"
              />

              {/* Africa */}
              <path
                d="M500 230 C520 225 540 235 550 255 C560 275 555 300 545 320 C535 340 520 350 505 345 C490 340 480 325 475 305 C470 285 475 265 485 250 C495 235 500 230 500 230 Z"
                fill="url(#landGradient)"
                stroke="#F97316"
                strokeWidth="2"
                filter="url(#glow)"
                opacity="0.9"
              />

              {/* Asia */}
              <path
                d="M580 140 C620 135 660 145 700 160 C740 175 770 195 780 220 C785 245 775 270 760 285 C745 300 725 305 705 300 C685 295 665 285 650 270 C635 255 625 235 620 215 C615 195 615 175 620 155 C625 145 580 140 580 140 Z"
                fill="url(#landGradient)"
                stroke="#10B981"
                strokeWidth="2"
                filter="url(#glow)"
                opacity="0.9"
              />

              {/* Australia */}
              <path
                d="M750 370 C770 365 790 370 800 385 C810 400 805 415 795 425 C785 435 770 435 755 430 C740 425 730 415 735 400 C740 385 750 370 750 370 Z"
                fill="url(#landGradient)"
                stroke="#06b6d4"
                strokeWidth="1.5"
                filter="url(#glow)"
                opacity="0.8"
              />

              {/* Middle East region highlight */}
              <path
                d="M520 200 C535 195 550 200 560 210 C570 220 565 235 555 240 C545 245 535 240 525 235 C515 230 515 220 520 210 C520 205 520 200 520 200 Z"
                fill="url(#landGradient)"
                stroke="#EC4899"
                strokeWidth="2"
                filter="url(#glow)"
                opacity="0.9"
              />
            </svg>

            {/* Team Member Markers */}
            {filteredMembers.map((member, index) => (
              <MapMarker
                key={member.id}
                member={member}
                isActive={selectedMember?.id === member.id}
                onClick={() => setSelectedMember(selectedMember?.id === member.id ? null : member)}
                animationDelay={index * 300}
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
                    strokeWidth="1"
                    strokeDasharray="8,4"
                    className="animate-pulse"
                    style={{ filter: "drop-shadow(0 0 3px rgba(6, 182, 212, 0.6))" }}
                  />
                )
              })}
            </svg>

            {/* Central hub connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {filteredMembers.map((member) => (
                <line
                  key={`hub-${member.id}`}
                  x1="50%"
                  y1="50%"
                  x2={`${((member.coordinates[1] + 180) / 360) * 100}%`}
                  y2={`${((90 - member.coordinates[0]) / 180) * 100}%`}
                  stroke={continentColors[member.continent]}
                  strokeWidth="0.5"
                  strokeDasharray="4,8"
                  opacity="0.3"
                  className="animate-pulse"
                />
              ))}
            </svg>
          </div>

          {/* Selected Member Info Panel */}
          {selectedMember && (
            <div
              className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 shadow-2xl animate-fade-in"
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

        {/* Modern Glass-morphism Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(continentStats).map(([continent, count]) => (
            <div
              key={continent}
              className="relative group cursor-pointer transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredContinent(continent)}
              onMouseLeave={() => setHoveredContinent(null)}
            >
              <div
                className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 shadow-2xl relative overflow-hidden"
                style={{
                  borderColor: hoveredContinent === continent ? continentColors[continent] : "rgba(55, 65, 81, 0.3)",
                  boxShadow:
                    hoveredContinent === continent
                      ? `0 0 30px ${continentColors[continent]}40`
                      : "0 10px 25px rgba(0,0,0,0.3)",
                }}
              >
                {/* Background glow effect */}
                <div
                  className="absolute inset-0 opacity-10 rounded-2xl"
                  style={{ backgroundColor: continentColors[continent] }}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${continentColors[continent]}20` }}
                    >
                      {continentIcons[continent]}
                    </div>
                    <Network className="w-6 h-6 text-gray-400" />
                  </div>

                  <div className="text-4xl font-bold mb-2" style={{ color: continentColors[continent] }}>
                    {count}
                  </div>

                  <div className="text-gray-300 font-medium text-lg mb-1">{continent}</div>

                  <div className="text-gray-500 text-sm">Team {count === 1 ? "Member" : "Members"}</div>

                  {/* Progress bar */}
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

        {/* Network Status Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-xl rounded-full px-6 py-3 border border-green-500/30">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold">Global Network Active</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">{filteredMembers.length} Nodes Connected</span>
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
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #06b6d4, #3b82f6);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #06b6d4, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </section>
  )
}
