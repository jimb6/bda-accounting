"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, Calendar, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+63 950 761 2580", "Available during business hours"],
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
    title: "Office Location",
    details: ["123 Business Avenue", "Suite 100, City, ST 12345"],
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
    color: "from-orange-500 to-red-500"
  },
]

const benefits = [
  "Free 30-minute consultation",
  "Same-day response guarantee",
  "Customized service packages", 
  "No hidden fees or surprises"
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Reset form or show success message
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-12 lg:py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
      <div className="absolute top-10 lg:top-20 right-4 lg:right-20 w-24 lg:w-40 h-24 lg:h-40 bg-blue-200/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 lg:bottom-20 left-4 lg:left-20 w-20 lg:w-32 h-20 lg:h-32 bg-purple-200/20 rounded-full blur-xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-16"
        >
          <Badge variant="outline" className="mb-3 lg:mb-4 text-xs lg:text-sm">
            Get in Touch
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4 leading-tight">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-sm lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step towards financial success. Our expert team is ready to provide 
            personalized solutions for your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-4 lg:space-y-6">
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Contact Information</h3>
                <div className="space-y-3 lg:space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Card className="p-3 lg:p-4 hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-0">
                            <div className="flex items-start space-x-3 lg:space-x-4">
                              <div className={`p-2 lg:p-3 rounded-lg bg-gradient-to-br ${info.color} text-white shadow-lg flex-shrink-0`}>
                                <IconComponent className="h-4 w-4 lg:h-5 lg:w-5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h4 className="font-semibold mb-1 lg:mb-2 text-sm lg:text-base">{info.title}</h4>
                                {info.details.map((detail, idx) => (
                                  <p key={idx} className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-primary/5 to-blue-50 border-primary/20">
                  <CardContent className="p-4 lg:p-6">
                    <h4 className="font-semibold mb-3 lg:mb-4 flex items-center text-sm lg:text-base">
                      <Calendar className="h-4 w-4 lg:h-5 lg:w-5 mr-2 text-primary" />
                      Why Contact Us Today?
                    </h4>
                    <ul className="space-y-2 lg:space-y-3">
                      {benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-500 flex-shrink-0" />
                          <span className="text-xs lg:text-sm">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 lg:mt-6 text-sm" variant="outline">
                      <Phone className="h-3 w-3 lg:h-4 lg:w-4 mr-2" />
                      Call Now: +63 950 761 2580
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Office Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-[150px] lg:h-[200px] rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 lg:p-6">
                  <div className="text-center">
                    <Image
                      src="/images/logo.png"
                      alt="BDA Office"
                      width={120}
                      height={80}
                      className="mx-auto drop-shadow-sm object-contain lg:w-[150px] lg:h-[100px]"
                      style={{ maxHeight: '80px', width: 'auto' }}
                    />
                    <p className="text-xs lg:text-sm text-gray-600 mt-2">Our Professional Office</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="h-6 w-6 mr-3 text-primary" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="text-sm font-medium mb-2 block">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="text-sm font-medium mb-2 block">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Doe"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+63 9XX XXX XXXX"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-sm font-medium mb-2 block">Service Needed *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="accounting">Accounting Services</option>
                      <option value="tax">Tax Filing & Planning</option>
                      <option value="consultation">Business Consultation</option>
                      <option value="audit">Audit Services</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all h-32 resize-none"
                      placeholder="Tell us about your business needs and how we can help..."
                      required
                    ></textarea>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-lg py-3 px-8"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-primary to-blue-600 text-white border-0 shadow-xl">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-lg lg:text-2xl font-bold mb-3 lg:mb-4">Need Immediate Assistance?</h3>
              <p className="mb-4 lg:mb-6 text-blue-100 text-sm lg:text-base leading-relaxed">
                For urgent accounting matters or time-sensitive tax issues, contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
                <Button variant="secondary" size="lg" className="text-sm lg:text-base">
                  <Phone className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                  Call Emergency Line
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary text-sm lg:text-base">
                  <Mail className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                  Send Urgent Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
