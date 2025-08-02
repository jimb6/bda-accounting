"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { 
  Calculator, 
  Users, 
  FileText, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Clock,
  DollarSign,
  Star
} from "lucide-react"

const services = [
  {
    id: "accounting",
    title: "Accounting Services",
    description: "Complete financial management solutions for businesses of all sizes",
    icon: Calculator,
    image: "Professional accounting workspace",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    features: [
      "Monthly Bookkeeping & Record Management",
      "Financial Statement Preparation",
      "Cash Flow Analysis & Management", 
      "Accounts Payable/Receivable Management",
      "Payroll Processing & Administration",
      "Budget Planning & Variance Analysis",
      "Financial Reporting & Analytics",
      "QuickBooks Setup & Training"
    ],
    pricing: "Starting at $299/month",
    turnaround: "Monthly deliverables"
  },
  {
    id: "tax",
    title: "Tax Filing & Planning",
    description: "Expert tax preparation and strategic planning to minimize your liability",
    icon: FileText,
    image: "Tax documents and planning",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    features: [
      "Individual Tax Return Preparation",
      "Business Tax Returns (All Entity Types)",
      "Multi-State Tax Filing",
      "Tax Planning & Strategy Consultation",
      "IRS Audit Defense & Representation",
      "Quarterly Estimated Tax Payments",
      "Tax Loss Harvesting Strategies",
      "Year-End Tax Planning Sessions"
    ],
    pricing: "Starting at $199 per return",
    turnaround: "Within 5 business days"
  },
  {
    id: "consultation",
    title: "Business Consultation",
    description: "Strategic financial guidance to accelerate your business growth",
    icon: Users,
    image: "Business strategy meeting",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
    features: [
      "Financial Health Assessment",
      "Business Plan Development",
      "Growth Strategy Planning",
      "Cash Flow Optimization",
      "Investment Analysis & Decisions",
      "Risk Assessment & Management",
      "Merger & Acquisition Advisory",
      "Exit Strategy Planning"
    ],
    pricing: "Starting at $150/hour",
    turnaround: "Flexible scheduling"
  },
  {
    id: "audit",
    title: "Audit & Assurance Services",
    description: "Professional audit services to ensure accuracy and compliance",
    icon: Shield,
    image: "Audit documentation review",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    features: [
      "Financial Statement Audits",
      "Internal Control Reviews",
      "Compliance Audits",
      "Due Diligence Reviews",
      "Fraud Investigation Support",
      "Nonprofit Organization Audits",
      "Employee Benefit Plan Audits",
      "Compilation & Review Services"
    ],
    pricing: "Custom pricing",
    turnaround: "2-4 weeks typical"
  }
]

const specialtyServices = [
  {
    title: "Startup Packages",
    description: "Complete financial setup for new businesses",
    features: ["Entity formation assistance", "Initial bookkeeping setup", "Tax ID registration", "First-year tax planning"]
  },
  {
    title: "Nonprofit Services", 
    description: "Specialized accounting for nonprofit organizations",
    features: ["Grant management", "Donor reporting", "Form 990 preparation", "Compliance monitoring"]
  },
  {
    title: "Estate Planning",
    description: "Financial planning for wealth transfer and estate management",
    features: ["Estate tax planning", "Trust administration", "Succession planning", "Gift tax strategies"]
  }
]

const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    description: "Free 30-minute discussion to understand your needs and goals."
  },
  {
    step: "2", 
    title: "Proposal & Engagement",
    description: "Detailed service proposal with transparent pricing and timeline."
  },
  {
    step: "3",
    title: "Onboarding",
    description: "Secure document collection and service implementation setup."
  },
  {
    step: "4",
    title: "Service Delivery",
    description: "Regular communication and timely completion of all deliverables."
  }
]

export function ServicesPageContent() {
  const [activeService, setActiveService] = useState("accounting")

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
              Professional Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Financial Solutions
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              From accounting and tax preparation to business consultation and audit services, 
              we provide everything your business needs to thrive financially.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Download Service Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <Button
                key={service.id}
                variant={activeService === service.id ? "default" : "outline"}
                onClick={() => setActiveService(service.id)}
                className="flex items-center space-x-2"
              >
                <service.icon className="h-4 w-4" />
                <span>{service.title}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: activeService === service.id ? 1 : 0, y: activeService === service.id ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className={activeService === service.id ? "block" : "hidden"}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6`}>
                    <service.icon className="h-12 w-12" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <DollarSign className="h-6 w-6 text-green-500 mx-auto mb-2" />
                      <div className="font-semibold text-sm">Pricing</div>
                      <div className="text-xs text-muted-foreground">{service.pricing}</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <Clock className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                      <div className="font-semibold text-sm">Turnaround</div>
                      <div className="text-xs text-muted-foreground">{service.turnaround}</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                      <div className="font-semibold text-sm">Quality</div>
                      <div className="text-xs text-muted-foreground">Guaranteed</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">What&apos;s Included:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <ImagePlaceholder
                    width={500}
                    height={350}
                    text={service.image}
                    className="w-full h-[350px] rounded-lg shadow-lg"
                    bgColor={service.bgColor}
                    textColor="text-gray-600"
                  />
                  
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-4">Ready to Get Started?</h4>
                      <p className="text-muted-foreground mb-4">
                        Schedule a free consultation to discuss your specific needs and get a custom quote.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="flex-1">
                          Get Free Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Call (555) 123-4567
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialty Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We also offer specialized services for unique business situations and industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure exceptional service delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
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
              Get answers to common questions about our services and processes.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">What documents do I need to provide for tax preparation?</AccordionTrigger>
                <AccordionContent>
                  You&apos;ll need W-2s, 1099s, receipts for deductions, bank statements, and any other tax-related documents. We&apos;ll provide a detailed checklist during our initial consultation.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">How often should I update my books?</AccordionTrigger>
                <AccordionContent>
                  We recommend monthly bookkeeping updates to maintain accurate financial records and enable timely business decisions. This also makes tax preparation much smoother.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Do you work with businesses of all sizes?</AccordionTrigger>
                <AccordionContent>
                  Yes, we serve everyone from individual taxpayers to large corporations. Our services are scalable and customized to meet the specific needs of each client.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">What makes your firm different from others?</AccordionTrigger>
                <AccordionContent>
                  Our 25+ years of experience, personalized approach, and commitment to staying current with tax laws and accounting standards. We focus on building long-term relationships and providing proactive advice.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Schedule your free consultation today and discover how we can help your business succeed financially.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
