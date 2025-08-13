import Image from "next/image"

interface Value {
  number: string
  title: string
  description: string
  color: string
}

export default function ValuesSection() {
  const values: Value[] = [
    {
      number: "01",
      title: "Innovation",
      description:
        "We prioritize innovation, constantly seeking out new methodologies and technologies to enhance our trading strategies and financial solutions.",
      color: "text-cyan-500",
    },
    {
      number: "02",
      title: "Integrity",
      description:
        "Integrity is at the heart of our operations. We believe in transparency, honesty, and ethical practices in all our dealings.",
      color: "text-cyan-500",
    },
    {
      number: "03",
      title: "Teamwork",
      description:
        "Our strength lies in teamwork. We foster a culture of collaboration, where diverse ideas converge to create superior strategies.",
      color: "text-cyan-500",
    },
    {
      number: "04",
      title: "Excellence",
      description:
        "We are dedicated to excellence, striving to surpass expectations and deliver outstanding results consistently.",
      color: "text-cyan-500",
    },
  ]

  return (
    <section id="values" className="py-20 bg-digital-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">VALUES</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            At ALRI, our values are the bedrock of our identity, driving our commitment to excellence and shaping the
            impact we aim to have on the financial world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-4 bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-700/30"
              >
                <div className={`text-5xl font-bold ${value.color}`}>{value.number}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-700/30">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-03-25_22-36-40-764-2nSk9EvFWBZCkO9SnHvEeWk437u9mU.png"
                alt="ALRI Values Pyramid"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
