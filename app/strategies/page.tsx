export default function StrategiesPage() {
  return (
    <div className="bg-digital-pattern min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">All Strategies</h1>
        <ul className="space-y-2">
          <li>
            <a href="/strategies/aes" className="text-white hover:text-blue-300">
              AES Strategy
            </a>
          </li>
          <li>
            <a href="/strategies/asa" className="text-white hover:text-blue-300">
              ASA Strategy
            </a>
          </li>
          <li>
            <a href="/strategies/aqa" className="text-white hover:text-blue-300">
              AQA Strategy
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
