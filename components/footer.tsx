import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Twitter, Facebook } from "lucide-react"
import ScrollLink from "./scroll-link"

export default function Footer() {
  return (
    <footer className="bg-digital text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Link href="/">
                <div className="relative h-20 w-20">
                  <Image
                    src="/alri-main-logo.png"
                    alt="ALRI Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>
            <p className="text-sm text-gray-300">
              Shaping the future of quantitative finance with precision. Specializing in the synergy of advanced
              algorithms and in-depth data analysis.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink href="/#about" className="text-gray-300 hover:text-secondary">
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/#team" className="text-gray-300 hover:text-secondary">
                  Our Team
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/#strategies" className="text-gray-300 hover:text-secondary">
                  Strategies
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/#values" className="text-gray-300 hover:text-secondary">
                  Values
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href="/#goals" className="text-gray-300 hover:text-secondary">
                  Goals
                </ScrollLink>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-secondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Strategies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/strategies/aes" className="text-gray-300 hover:text-secondary">
                  Expert Advisor Strategies (AES)
                </Link>
              </li>
              <li>
                <Link href="/strategies/asa" className="text-gray-300 hover:text-secondary">
                  Signal Analytics (ASA)
                </Link>
              </li>
              <li>
                <Link href="/strategies/aqa" className="text-gray-300 hover:text-secondary">
                  Quant Analytics (AQA)
                </Link>
              </li>
              <li>
                <Link href="/strategies/ama" className="text-gray-300 hover:text-secondary">
                  Market Analytics (AMA)
                </Link>
              </li>
              <li>
                <Link href="/strategies/ams" className="text-gray-300 hover:text-secondary">
                  Manual Strategies (AMS)
                </Link>
              </li>
              <li>
                <Link href="/strategies/ahs" className="text-gray-300 hover:text-secondary">
                  HFT Strategies (AHS)
                </Link>
              </li>
              <li>
                <Link href="/strategies/aps" className="text-gray-300 hover:text-secondary">
                  Propfirm Strategies (APS)
                </Link>
              </li>
              <li>
                <Link href="/strategies/abr" className="text-gray-300 hover:text-secondary">
                  Broker Relationships (ABR)
                </Link>
              </li>
              <li>
                <Link href="/strategies/hfd" className="text-gray-300 hover:text-secondary">
                  Hedge Fund Systems (HFS)
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={20} className="text-secondary flex-shrink-0" />
                <a href="mailto:info@alri.com" className="text-gray-300 hover:text-secondary">
                  info@alri.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ALRI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
