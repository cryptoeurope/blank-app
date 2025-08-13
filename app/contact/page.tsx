import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have questions about our funds or services? Our team is here to help. Reach out to us using the form below.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input id="subject" placeholder="Enter subject" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" placeholder="Enter your message" rows={5} />
              </div>

              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/80">
                Send Message
              </Button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="flex items-center space-x-4">
              <Mail className="text-secondary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-700">info@alri.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
