"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Users, FileText, Shield, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    title: "Tax Compliance Services",
    description: "Efficient and accurate tax obligation management ensuring compliance while addressing business tax burdens.",
    icon: Calculator,
    features: ["Individual Tax Returns", "Business Tax Returns", "Tax Planning", "Regulatory Compliance"],
    image: "Tax compliance documents",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    title: "Business Registration",
    description: "Streamlined registration process for new ventures and regulatory changes with expert guidance.",
    icon: FileText,
    features: ["SEC Registration", "BIR Registration", "Local Permits", "Professional Licenses"],
    image: "Business registration process",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    title: "Audit Services",
    description: "Rigorous auditing procedures providing transparency and confidence for stakeholders.",
    icon: Shield,
    features: ["Financial Audits", "Compliance Reviews", "Internal Controls", "Risk Assessment"],
    image: "Professional audit process",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50"
  },
  {
    title: "Management Accounting",
    description: "Strategic financial insights and reporting to help you make informed business decisions.",
    icon: Users,
    features: ["Financial Reporting", "Budget Analysis", "Performance Metrics", "Strategic Planning"],
    image: "Management accounting consultation",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50"
  },
]

const stats = [
  { value: "200+", label: "Clients Served", icon: "👥" },
  { value: "8+", label: "Years Experience", icon: "📅" },
  { value: "99%", label: "Client Satisfaction", icon: "⭐" },
  { value: "₱50M+", label: "Business Value Created", icon: "💰" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export function ServicesSection() {
  return (
    <section className="py-12 lg:py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
      <div className="absolute top-10 lg:top-20 left-4 lg:left-10 w-20 lg:w-32 h-20 lg:h-32 bg-blue-200/20 rounded-full blur-xl" />
      <div className="absolute bottom-10 lg:bottom-20 right-4 lg:right-10 w-24 lg:w-40 h-24 lg:h-40 bg-purple-200/20 rounded-full blur-xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-16"
        >
          <Badge variant="outline" className="mb-3 lg:mb-4 text-xs lg:text-sm">
            Our Professional Services
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4 leading-tight">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer a complete range of accounting and financial services designed to help your business thrive, 
            from startups to established corporations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-20"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  
                  <CardHeader className="pb-3 lg:pb-4 p-4 lg:p-6">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-3 lg:mb-4">
                      <div className={`p-3 lg:p-4 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg mb-3 sm:mb-0`}>
                        <IconComponent className="h-6 w-6 lg:h-8 lg:w-8" />
                      </div>
                      <div className="flex-1 sm:ml-4 lg:ml-6">
                        <CardTitle className="text-lg lg:text-2xl mb-2 group-hover:text-primary transition-colors leading-tight">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm lg:text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 p-4 lg:p-6">
                    <div className="grid grid-cols-1 gap-4 lg:gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 lg:mb-4 text-base lg:text-lg">Key Services:</h4>
                        <ul className="space-y-2 lg:space-y-3">
                          {service.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center space-x-3"
                            >
                              <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 flex-shrink-0" />
                              <span className="text-sm font-medium">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-3 lg:space-y-4">
                        <div className="w-full h-[120px] lg:h-[150px] rounded-lg bg-white/95 flex items-center justify-center p-3 lg:p-4">
                          <div className="text-center">
                            <Image
                              src="/images/logo.png"
                              alt="BDA Logo"
                              width={100}
                              height={60}
                              className="mx-auto drop-shadow-sm object-contain lg:w-[120px] lg:h-[80px]"
                              style={{ maxHeight: '60px', width: 'auto' }}
                            />
                            <p className="text-xs text-gray-500 mt-2 hidden lg:block">{service.image}</p>
                          </div>
                        </div>
                        
                        <Button className="w-full group text-sm lg:text-base" variant="outline">
                          Learn More
                          <ArrowRight className="ml-2 h-3 w-3 lg:h-4 lg:w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 lg:top-4 left-2 lg:left-4 w-12 lg:w-20 h-12 lg:h-20 border border-white rounded-full" />
              <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 w-10 lg:w-16 h-10 lg:h-16 border border-white rounded-full" />
              <div className="absolute top-1/2 left-1/3 w-8 lg:w-12 h-8 lg:h-12 border border-white rounded-full" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8 lg:mb-12">
                <motion.h3
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-4 text-white leading-tight"
                >
                  Trusted by Businesses Across Industries
                </motion.h3>
                <p className="text-blue-100 text-sm lg:text-lg max-w-2xl mx-auto leading-relaxed">
                  Our track record speaks for itself. Join hundreds of satisfied clients who trust us with their financial success.
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-2xl lg:text-4xl mb-1 lg:mb-2">{stat.icon}</div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 lg:mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs lg:text-sm text-blue-100 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-3 lg:mb-4 leading-tight">
            Ready to Transform Your Business Finances?
          </h3>
          <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation today and discover how our expert team can help your business reach new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <Button size="lg" className="text-sm lg:text-lg px-6 lg:px-8">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-sm lg:text-lg px-6 lg:px-8">
              Download Service Guide
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
