"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  TrendingUp, 
  Heart,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target
} from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Certified Excellence",
    description: "All our partners are certified CPAs with advanced degrees and continuous education.",
    image: "Professional certifications",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Dedicated account managers who understand your business and industry specifics.",
    image: "Personal consultation",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We meet all deadlines and keep you ahead of important financial milestones.",
    image: "Clock and calendar",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Bank-level security protocols protect your sensitive financial information.",
    image: "Security and privacy",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50"
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Strategic advice that helps your business scale and achieve long-term success.",
    image: "Business growth chart",
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Heart,
    title: "Client Satisfaction",
    description: "99% client retention rate with personalized attention to every account.",
    image: "Happy clients",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50"
  }
]

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Free 30-minute consultation to understand your needs and goals.",
    icon: Lightbulb
  },
  {
    number: "02", 
    title: "Custom Strategy",
    description: "Develop a tailored financial strategy aligned with your business objectives.",
    icon: Target
  },
  {
    number: "03",
    title: "Implementation",
    description: "Execute the plan with regular monitoring and adjustments as needed.",
    icon: CheckCircle
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Continuous support and proactive advice to ensure your success.",
    icon: Users
  }
]

export function WhyChooseUsSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-200/20 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Why Choose BDA
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Success is Our Priority
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 25 years of experience, we combine traditional expertise with modern technology 
            to deliver exceptional accounting services that drive business growth.
          </p>
        </motion.div>

        {/* Interactive Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      activeFeature === index ? 'ring-2 ring-primary shadow-lg' : ''
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                        <ArrowRight className={`h-5 w-5 transition-all ${
                          activeFeature === index ? 'text-primary translate-x-1' : 'text-gray-400'
                        }`} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Active Feature Display */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Card className="p-8 h-full shadow-xl">
              <CardContent className="p-0 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} text-white shadow-lg`}>
                  {(() => {
                    const IconComponent = features[activeFeature].icon
                    return <IconComponent className="h-12 w-12" />
                  })()}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {features[activeFeature].description}
                </p>
                
                <ImagePlaceholder
                  width={400}
                  height={250}
                  text={features[activeFeature].image}
                  className="w-full h-[250px] rounded-lg mb-6"
                  bgColor={features[activeFeature].bgColor}
                  textColor="text-gray-600"
                />
                
                <Button className="w-full">
                  Learn More About This
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our Proven Process
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to ensure your financial success at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0" />
                  )}
                  
                  <div className="relative z-10 bg-background">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    
                    <div className="mb-4">
                      <IconComponent className="h-8 w-8 mx-auto text-primary" />
                    </div>
                    
                    <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience the BDA Difference?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their financial success. 
            Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Call (555) 123-4567
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
