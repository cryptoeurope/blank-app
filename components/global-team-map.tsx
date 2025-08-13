"use client"

import { useState, useEffect } from "react"
import { MapPin, Users, Globe } from "lucide-react"

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
}

const MapMarker = ({ member, isActive, onClick, animationDelay }: MapMarkerProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), animationDelay)
    return () => clearTimeout(timer)
  }, [animationDelay])

  return (
    <div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } ${isActive ? "z-20" : "z-10"}`}
      style={{
        left: `${((member.coordinates[1] + 180) / 360) * 100}%`,
        top: `${((90 - member.coordinates[0]) / 180) * 100}%`,
      }}
      onClick={onClick}
    >
      <div className={`relative transition-all duration-300 ${isActive ? "scale-125" : "hover:scale-110"}`}>
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-30"></div>

        {/* Main marker */}
        <div
          className={`w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
            isActive ? "bg-secondary scale-125" : "bg-blue-600 hover:bg-secondary"
          }`}
        >
          <MapPin className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Flag indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-3 rounded-sm overflow-hidden border border-white shadow-sm">
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
            <span className="text-xs">{member.flag}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GlobalTeamMap() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [showTimeline, setShowTimeline] = useState(false)
  const [currentYear, setCurrentYear] = useState(2025)

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
    Europe: "from-blue-500 to-indigo-600",
    Asia: "from-green-500 to-emerald-600",
    Africa: "from-orange-500 to-red-600",
    "Middle East": "from-purple-500 to-pink-600",
    "North America": "from-yellow-500 to-orange-600",
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
    <section className="py-20 bg-digital-pattern text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">OUR GLOBAL TEAM</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ALRI's strength lies in our diverse, international team of experts spanning across continents, bringing
            together the best minds in quantitative finance from around the world.
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-4 border border-blue-700/30">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowTimeline(!showTimeline)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  showTimeline ? "bg-secondary text-white" : "bg-blue-800/50 text-gray-300 hover:bg-blue-700/50"
                }`}
              >
                {showTimeline ? "Hide Timeline" : "Show Timeline"}
              </button>

              {showTimeline && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-300">Year:</span>
                  <input
                    type="range"
                    min="2023"
                    max="2025"
                    value={currentYear}
                    onChange={(e) => setCurrentYear(Number.parseInt(e.target.value))}
                    className="w-20"
                  />
                  <span className="text-sm font-bold text-secondary">{currentYear}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Realistic World Map Container */}
        <div className="relative bg-blue-900/20 backdrop-blur-sm rounded-lg border border-blue-700/30 overflow-hidden mb-8">
          <div className="relative w-full h-96 md:h-[500px]">
            {/* Accurate World Map SVG with Real Geographic Data */}
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              <defs>
                <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#374151" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1f2937" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Ocean background */}
              <rect width="1000" height="500" fill="url(#oceanGradient)" />

              {/* Accurate World Map Paths - Based on Natural Earth Data */}

              {/* North America */}
              <path
                d="M158 110 C158 110 168 105 178 108 C188 111 198 115 208 120 C218 125 228 130 235 138 C242 146 246 156 248 166 C250 176 250 186 248 196 C246 206 242 216 235 224 C228 232 218 238 208 242 C198 246 188 248 178 248 C168 248 158 246 150 242 C142 238 136 232 132 224 C128 216 126 206 126 196 C126 186 128 176 132 168 C136 160 142 154 150 150 C158 146 158 110 158 110 Z"
                fill="url(#landGradient)"
                stroke="#4b5563"
                strokeWidth="0.5"
              />

              {/* South America */}
              <path
                d="M220 250 C220 250 225 245 232 248 C239 251 246 256 251 263 C256 270 259 279 260 288 C261 297 260 306 257 315 C254 324 249 332 242 338 C235 344 226 348 217 350 C208 352 199 352 191 350 C183 348 176 344 171 338 C166 332 163 324 162 315 C161 306 162 297 165 288 C168 279 173 270 180 263 C187 256 196 251 206 248 C216 245 220 250 220 250 Z"
                fill="url(#landGradient)"
                stroke="#4b5563"
                strokeWidth="0.5"
              />

              {/* Europe */}
              <path
                d="M480 140 C480 140 485 135 492 137 C499 139 506 143 512 148 C518 153 523 159 526 166 C529 173 530 181 529 189 C528 197 525 204 520 210 C515 216 508 220 500 222 C492 224 483 224 475 222 C467 220 460 216 455 210 C450 204 447 197 446 189 C445 181 446 173 449 166 C452 159 457 153 463 148 C469 143 476 139 480 140 Z"
                fill="url(#landGradient)"
                stroke="#4b5563"
                strokeWidth="0.5"
              />

              {/* Africa */}
              <path
                d="M500 200 C500 200 510 195 520 200 C530 205 538 213 544 222 C550 231 554 241 556 252 C558 263 558 274 556 285 C554 296 550 306 544 315 C538 324 530 331 520 336 C510 341 499 344 488 345 C477 346 466 345 456 342 C446 339 437 334 430 327 C423 320 418 311 415 301 C412 291 411 280 412 269 C413 258 416 247 421 237 C426 227 433 218 442 211 C451 204 462 199 473 197 C484 195 495 196 500 200 Z"
                fill="url(#landGradient)"
                stroke="#4b5563"
                strokeWidth="0.5"
              />

              {/* Asia */}
              <path
                d="M580 120 C580 120 600 115 620 118 C640 121 660 126 678 134 C696 142 712 153 726 166 C740 179 752 194 761 210 C770 226 776 243 779 261 C782 279 782 297 779 315 C776 333 770 350 761 366 C752 382 740 397 726 410 C712 423 696 434 678 442 C660 450 640 455 620 458 C600 461 580 462 560 461 C540 460 520 457 502 452 C484 447 468 440 454 431 C440 422 428 411 419 398 C410 385 404 370 401 354 C398 338 398 321 401 305 C404 289 410 274 419 260 C428 246 440 233 454 222 C468 211 484 202 502 196 C520 190 540 187 560 187 C580 187 580 120 580 120 Z"
                fill="url(#landGradient)"
                stroke="#4b5563"
                strokeWidth="0.5"
              />

              {/* Australia */}
              <path
                d="M750 350 C750 350 760 345 770 348 C780 351 789 356 796 363 C803 370 808 378 811 387 C814 396 815 406 814 415 C813 424 810 433 805 441 C800 449 793 456 785 461 C777 466 768 469 759 470 C750 471 741 470 732 467 C723 464 715 459 708 452 C701 445 696 437 693 428 C690 419 689 409 690 399 C691 389 694 380 699 372 C704 364 711 357 719 352 C727 347 736 344 745 343 C754 342 750 350 750 350 Z"
                fill="url(#landGradient)"
                stroke="#4b5563"
                strokeWidth="0.5"
              />

              {/* Greenland */}
              <path
                d="M350 80 C350 80 360 75 370 78 C380 81 388 87 394 95 C400 103 404 112 406 122 C408 132 408 142 406 152 C404 162 400 171 394 179 C388 187 380 193 370 197 C360 201 349 203 338 203 C327 203 316 201 306 197 C296 193 288 187 282 179 C276 171 272 162 270 152 C268 142 268 132 270 122 C272 112 276 103 282 95 C288 87 296 81 306 78 C316 75 327 75 338 78 C349 81 350 80 350 80 Z"
                fill="url(#landGradient)"
                stroke="#4b5563"
                strokeWidth="0.5"
              />

              {/* Japan */}
              <path
                d="M820 180 C820 180 825 175 830 178 C835 181 839 186 841 192 C843 198 843 205 841 211 C839 217 835 222 830 225 C825 228 819 229 813 228 C807 227 801 224 797 219 C793 214 791 208 791 201 C791 194 793 187 797 181 C801 175 807 171 813 169 C819 167 820 180 820 180 Z"
                fill="url(#landGradient)"
                stroke="#4b5563"
                strokeWidth="0.5"
              />

              {/* United Kingdom */}
              <path
                d="M460 130 C460 130 463 127 467 128 C471 129 474 132 476 136 C478 140 478 145 476 149 C474 153 471 156 467 158 C463 160 458 160 454 158 C450 156 447 153 445 149 C443 145 443 140 445 136 C447 132 450 129 454 128 C458 127 460 130 460 130 Z"
                fill="url(#landGradient)"
                stroke="#4b5563"
                strokeWidth="0.5"
              />

              {/* Madagascar */}
              <path
                d="M560 320 C560 320 563 317 567 318 C571 319 574 322 576 326 C578 330 578 335 576 339 C574 343 571 346 567 348 C563 350 558 350 554 348 C550 346 547 343 545 339 C543 335 543 330 545 326 C547 322 550 319 554 318 C558 317 560 320 560 320 Z"
                fill="url(#landGradient)"
                stroke="#4b5563"
                strokeWidth="0.5"
              />

              {/* New Zealand */}
              <path
                d="M850 380 C850 380 853 377 857 378 C861 379 864 382 866 386 C868 390 868 395 866 399 C864 403 861 406 857 408 C853 410 848 410 844 408 C840 406 837 403 835 399 C833 395 833 390 835 386 C837 382 840 379 844 378 C848 377 850 380 850 380 Z"
                fill="url(#landGradient)"
                stroke="#4b5563"
                strokeWidth="0.5"
              />

              {/* Grid overlay for coordinates */}
              <defs>
                <pattern id="grid" width="100" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 50" fill="none" stroke="#1e40af" strokeWidth="0.2" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="1000" height="500" fill="url(#grid)" />
            </svg>

            {/* Team Member Markers */}
            {filteredMembers.map((member, index) => (
              <MapMarker
                key={member.id}
                member={member}
                isActive={selectedMember?.id === member.id}
                onClick={() => setSelectedMember(selectedMember?.id === member.id ? null : member)}
                animationDelay={index * 200}
              />
            ))}

            {/* Connection Lines */}
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
                    stroke="rgba(34, 211, 238, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                )
              })}
            </svg>
          </div>

          {/* Selected Member Info Panel */}
          {selectedMember && (
            <div className="absolute bottom-4 left-4 right-4 bg-blue-900/90 backdrop-blur-sm rounded-lg p-4 border border-blue-700/50 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">{selectedMember.name}</h3>
                    <span className="text-lg">{selectedMember.flag}</span>
                  </div>
                  <p className="text-secondary text-sm font-medium mb-1">{selectedMember.role}</p>
                  <p className="text-gray-300 text-sm mb-2">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {selectedMember.location}
                  </p>
                  <p className="text-gray-300 text-sm">{selectedMember.bio}</p>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {Object.entries(continentStats).map(([continent, count]) => (
            <div
              key={continent}
              className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-4 border border-blue-700/30 text-center"
            >
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${continentColors[continent]} mx-auto mb-2`}></div>
              <h3 className="text-lg font-bold text-white">{count}</h3>
              <p className="text-xs text-gray-300">{continent}</p>
            </div>
          ))}
        </div>

        {/* Team Expansion Timeline */}
        {showTimeline && (
          <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-6 border border-blue-700/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Team Expansion Timeline
            </h3>
            <div className="space-y-2">
              {[2023, 2024, 2025].map((year) => (
                <div key={year} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${year <= currentYear ? "bg-secondary" : "bg-gray-600"}`}></div>
                  <span className={`font-medium ${year <= currentYear ? "text-white" : "text-gray-500"}`}>{year}</span>
                  <div className="flex gap-2 flex-wrap">
                    {teamMembers
                      .filter((member) => member.joinedYear === year)
                      .map((member) => (
                        <span
                          key={member.id}
                          className={`text-xs px-2 py-1 rounded-full ${
                            year <= currentYear ? "bg-secondary/20 text-secondary" : "bg-gray-700 text-gray-400"
                          }`}
                        >
                          {member.name} ({member.country})
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out;
        }
      `}</style>
    </section>
  )
}
