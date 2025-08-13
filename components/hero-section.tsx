import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative bg-digital text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">ALRI</h1>
            <p className="text-xl md:text-2xl font-medium text-gray-200">INNOVATION | STRATEGY | EXCELLENCE</p>
            <p className="text-lg text-gray-300 max-w-xl">
              At ALRI, our team is synonymous with innovation, shaping the future of quantitative finance with
              precision. Specializing in the synergy of advanced algorithms and in-depth data analysis, we harness
              cutting-edge technology to catalyze investment success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#about"
                className="bg-secondary hover:bg-secondary/80 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/alri-main-logo.png"
                alt="ALRI Logo"
                width={320}
                height={320}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
