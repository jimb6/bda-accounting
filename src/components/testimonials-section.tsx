"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Johnson's Restaurant Group",
    role: "CEO",
    content: "BDA has been managing our books for 5 years. Their attention to detail and proactive tax planning has saved us thousands. The team is professional, responsive, and truly understands our business needs.",
    rating: 5,
    initials: "SJ",
    industry: "Restaurant"
  },
  {
    name: "Michael Chen",
    company: "TechStart Solutions",
    role: "Founder",
    content: "As a startup, we needed accounting partners who could grow with us. BDA provided excellent guidance during our funding rounds and helped structure our finances for sustainable growth.",
    rating: 5,
    initials: "MC",
    industry: "Technology"
  },
  {
    name: "Lisa Rodriguez",
    company: "Rodriguez Construction",
    role: "Owner",
    content: "The audit services provided by BDA were thorough and professional. They helped us identify areas for improvement and ensured we were compliant with all regulations. Highly recommended!",
    rating: 5,
    initials: "LR",
    industry: "Construction"
  },
  {
    name: "David Thompson",
    company: "Thompson Medical Practice",
    role: "Practice Manager",
    content: "BDA's business consultation helped us optimize our financial processes and improve cash flow. Their expertise in the healthcare industry is evident in their tailored recommendations.",
    rating: 5,
    initials: "DT",
    industry: "Healthcare"
  },
  {
    name: "Jennifer Miller",
    company: "Miller & Associates Law",
    role: "Partner",
    content: "Exceptional tax preparation and planning services. BDA's team is knowledgeable, efficient, and always available when we need them. They've become an integral part of our business operations.",
    rating: 5,
    initials: "JM",
    industry: "Legal"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners and entrepreneurs 
            have to say about working with Bonohc, Demerin & Associates.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 shadow-xl border-0 bg-white">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <Quote className="h-12 w-12 text-primary/20 mx-auto mb-4" />
                  <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                      {testimonials[currentIndex].initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                    <p className="text-sm font-medium text-primary">{testimonials[currentIndex].company}</p>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {testimonials[currentIndex].industry}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Mini Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => goToTestimonial(index)}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="text-sm font-semibold bg-primary/10 text-primary">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    "{testimonial.content.substring(0, 120)}..."
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.industry}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-sm text-muted-foreground">Tax Savings</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
