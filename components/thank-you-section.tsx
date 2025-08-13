import Image from "next/image"
import Link from "next/link"
import ScrollLink from "./scroll-link"

export default function ThankYouSection() {
  return (
    <section className="py-20 bg-digital text-white">
      <div className="container mx-auto px-4 text-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-dfDuX5VlpQfKGnai6rJlnJk9nreWdR.png"
          alt="Thank You"
          width={1200}
          height={600}
          className="rounded-lg shadow-xl w-full max-w-4xl mx-auto h-auto mb-12"
        />

        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/alri-main-logo.png"
              alt="ALRI Logo"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with ALRI?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us on our journey to revolutionize quantitative finance with innovative solutions and data-driven
            strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary/80 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
            <ScrollLink
              href="/#strategies"
              className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Explore Our Strategies
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  )
}
