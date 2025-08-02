"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Send,
  CheckCircle,
  Calendar,
  MessageSquare,
  FileText
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["Main: +63 950 761 2580", "Available during business hours"],
    color: "text-green-600"
  },
  {
    icon: Mail,
    title: "Email", 
    details: ["workspace@bonhocdemerincpafirm.com", "General inquiries & consultations"],
    color: "text-blue-600"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Door No. 4 Saint John Paul II College of Davao", "Ecoland Drive, Matina", "Davao City, Philippines, 8000"],
    color: "text-red-600"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 8:00 AM - 5:00 PM", "Sat: 8:00 AM - 12:00 PM", "Sun: By Appointment"],
    color: "text-purple-600"
  }
]

const offices = [
  {
    name: "Main Office",
    address: "Door No. 4 Saint John Paul II College of Davao, Ecoland Drive, Matina",
    city: "Davao City, Philippines",
    phone: "+63 950 761 2580",
    specialties: ["Tax Compliance", "Business Registration", "Management Accounting", "Audit Services"],
    image: "Modern CPA office in Davao City"
  },
  {
    name: "Panabo Branch",
    address: "Door 10, Sheina's Building, Magsaysay Street, New Pandan", 
    city: "Panabo City, Philippines",
    phone: "+63 950 761 2580",
    specialties: ["Tax Compliance", "Business Registration", "Small Business Services", "Local Consultation"],
    image: "Professional branch office in Panabo"
  },
  {
    name: "Surigao Branch",
    address: "Door 2, Milagros Building, Magsaysay Street, Dgocdoc",
    city: "Tandag City, Surigao del Sur, Philippines", 
    phone: "+63 950 761 2580",
    specialties: ["Partnership Services", "Regional Compliance", "Legal & Tax Advisory", "CPA Consultation"],
    image: "Partnership office in Surigao del Sur",
    partnership: "In partnership with Atty. James Bernal, CPA"
  }
]

const faqs = [
  {
    question: "How quickly can I schedule an appointment?",
    answer: "We typically have availability within 2-3 business days. For urgent matters, we can often accommodate same-day or next-day appointments."
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes, we provide secure video consultations for your convenience. Many of our services can be completed remotely with proper documentation."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring relevant financial documents, previous tax returns, and a list of questions. We&apos;ll provide a detailed checklist when you schedule."
  },
  {
    question: "Do you provide emergency tax services?",
    answer: "Yes, we offer expedited services for urgent tax matters, including IRS notices, audit support, and last-minute filing requirements."
  }
]

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: "",
    preferredContact: "email"
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-6 bg-white/10 border-white/20 text-white">
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us Today
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Ready to discuss your financial needs? We&apos;re here to help with personalized 
              service and expert guidance. Reach out to schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Call +63 950 761 2580
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Online
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto`}>
                      <info.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+63 9XX XXX XXXX"
                          value={formData.phone}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        placeholder="Your Company Name"
                        value={formData.company}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("company", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service Interested In</Label>
                      <Select value={formData.serviceType} onValueChange={(value: string) => handleInputChange("serviceType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="accounting">Accounting Services</SelectItem>
                          <SelectItem value="tax">Tax Preparation</SelectItem>
                          <SelectItem value="consulting">Business Consulting</SelectItem>
                          <SelectItem value="audit">Audit Services</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your needs..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Find Us</CardTitle>
                  <CardDescription>Visit our main office location</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-[250px] rounded-lg mb-4 bg-green-50 flex items-center justify-center p-6">
                    <div className="text-center">
                      <Image
                        src="/images/logo.png"
                        alt="BDA Office Location"
                        width={200}
                        height={120}
                        className="mx-auto drop-shadow-sm object-contain"
                        style={{ maxHeight: '120px', width: 'auto' }}
                      />
                      <p className="text-sm text-gray-600 mt-3">Interactive Map - Main Office Location</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">Bonhoc, Demerin & Associates</p>
                    <p className="text-sm text-muted-foreground">Door No. 4 Saint John Paul II College of Davao</p>
                    <p className="text-sm text-muted-foreground">Ecoland Drive, Matina, Davao City, Philippines, 8000</p>
                    <Button variant="outline" className="w-full mt-4">
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Appointment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Request Quote
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Live Chat Support
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Office Locations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit us at our main office in Davao City or our branch locations in Panabo and Surigao del Sur.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-[150px] rounded-lg mb-4 bg-blue-50 flex items-center justify-center p-4">
                      <div className="text-center">
                        <Image
                          src="/images/logo.png"
                          alt={office.name}
                          width={120}
                          height={80}
                          className="mx-auto drop-shadow-sm object-contain"
                          style={{ maxHeight: '80px', width: 'auto' }}
                        />
                        <p className="text-xs text-gray-500 mt-2">{office.image}</p>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{office.name}</CardTitle>
                    <CardDescription>{office.city}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{office.address}</p>
                      <p className="text-sm font-medium">{office.phone}</p>
                      {office.partnership && (
                        <p className="text-xs text-blue-600 font-medium mt-2 italic">
                          {office.partnership}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {office.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Contact This Office
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about contacting us and our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{faq.answer}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              For urgent tax matters, IRS notices, or time-sensitive financial issues, 
              we offer expedited services and emergency consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Call +63 950 761 2580
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Mail className="mr-2 h-5 w-5" />
                Email Us Today
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
