import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ABOUT US</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <div className="flex items-center mb-4">
                <div className="bg-digital p-3 rounded-full mr-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qQR3c5kUJQWesHIRsivBEChXakSURh.png"
                    alt="Business Proposal Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">BUSINESS PROPOSAL</h3>
              </div>
              <p className="text-gray-700">
                ALRI seeks to redefine the world of quantitative finance through innovative solutions. Our proposal is
                to partner with forward-thinking investors and clients who share our vision for data-driven
                decision-making and sustainable, profitable growth.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <div className="flex items-center mb-4">
                <div className="bg-digital p-3 rounded-full mr-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qQR3c5kUJQWesHIRsivBEChXakSURh.png"
                    alt="Business Plan Icon"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">BUSINESS PLAN</h3>
              </div>
              <p className="text-gray-700">
                Our plan is to implement our proprietary algorithms across a range of financial markets, continuously
                adapting to new data and evolving market conditions. We aim to consistently outperform benchmarks,
                delivering value and excellence to our stakeholders.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4rbikvx5MVbp4zwC5J2EI5j93hkR8S.png"
                alt="ALRI Overview"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">Established 2023</p>
              <p>Pioneering Quantitative Finance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
