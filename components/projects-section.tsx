import Image from "next/image"
import { TrendingUp, Users, Recycle } from "lucide-react"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">NEXT PROJECTS</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At ALRI, we are constantly pushing the envelope to stay ahead in the dynamic world of finance. Our upcoming
            projects reflect our commitment to innovation, customer satisfaction, and strategic growth.
          </p>
        </div>

        <div className="relative mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-RLRlwna5eHYmOVOqvIHvNOlt4BBP4c.png"
            alt="ALRI Next Projects"
            width={1200}
            height={600}
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Algorithmic Evolution</h3>
            <p className="text-gray-700">
              We are gearing up to introduce the next generation of our trading algorithms designed to optimize market
              positioning and enhance predictive accuracy.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Client Engagement Platform</h3>
            <p className="text-gray-700">
              Our focus is on developing a state-of-the-art platform that will revolutionize the way we interact with
              our clients, offering them unparalleled insights and personalized service.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-teal-100 rounded-full">
              <Recycle className="w-8 h-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability Integration</h3>
            <p className="text-gray-700">
              As part of our growth strategy, we are incorporating sustainability metrics into our investment models,
              ensuring that our success is both profitable and responsible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
