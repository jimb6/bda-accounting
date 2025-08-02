import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(555) 123-4567", "(555) 123-4568"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@bdaaccounting.com", "support@bdaaccounting.com"],
  },
  {
    icon: MapPin,
    title: "Office Location",
    details: ["123 Business Avenue", "Suite 100, City, ST 12345"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
  },
]

export function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to take control of your finances? Contact us today for a free consultation 
            and discover how we can help your business succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-lg">{info.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="mt-8 bg-primary/5">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Free Consultation Available</h4>
                <p className="text-muted-foreground mb-4">
                  Schedule a complimentary 30-minute consultation to discuss your 
                  accounting needs and how we can help your business grow.
                </p>
                <Button>Schedule Free Consultation</Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Service Needed</label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option>Select a service</option>
                    <option>Accounting Services</option>
                    <option>Tax Filing</option>
                    <option>Business Consultation</option>
                    <option>Audit Services</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background h-24"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
