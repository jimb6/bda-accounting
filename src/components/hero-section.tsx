"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Star, Award, TrendingUp } from "lucide-react"

const heroSlides = [
  {
    title: "Expert CPA Services",
    subtitle: "Empowering SMEs",
    description: "8+ years of trusted financial expertise helping SMEs thrive across the Philippines and Asia-Pacific Region.",
    image: "Professional CPA team consultation",
    bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
  },
  {
    title: "Tax Compliance Solutions",
    subtitle: "Efficient & Accurate",
    description: "Comprehensive tax services that ensure compliance while addressing your business tax burdens.",
    image: "Tax compliance documentation",
    bgColor: "bg-gradient-to-br from-green-600 to-emerald-700"
  },
  {
    title: "Business Registration",
    subtitle: "Streamlined Process",
    description: "Expert assistance with business registrations and regulatory compliance for new ventures.",
    image: "Business registration process",
    bgColor: "bg-gradient-to-br from-purple-600 to-violet-700"
  }
]

const stats = [
  { icon: Star, value: "200+", label: "Happy Clients" },
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: TrendingUp, value: "99%", label: "Success Rate" },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 ${slide.bgColor}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-white/5"
            animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-white/8"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6 bg-white/10 border-white/20 text-white">
                <Award className="w-4 h-4 mr-2" />
                Trusted for Over 25 Years
              </Badge>
            </motion.div>
            
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {heroSlides[currentSlide].title}
                <span className="block text-yellow-400 text-4xl md:text-5xl mt-2">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-gray-100 max-w-lg leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button size="lg" className="text-lg px-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-black">
                View Our Services
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="h-6 w-6 text-yellow-400 mr-2" />
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="w-full h-[400px] bg-white/95 rounded-lg shadow-2xl flex flex-col items-center justify-center overflow-hidden p-6">
                <div className="text-center flex-1 flex flex-col justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Bonhoc, Demerin & Associates Logo"
                    width={250}
                    height={150}
                    className="mx-auto mb-4 drop-shadow-md object-contain"
                    style={{ maxHeight: '150px', width: 'auto' }}
                    priority
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-gray-800">
                      Bonhoc, Demerin & Associates
                    </h3>
                    <p className="text-base text-gray-600">
                      Certified Public Accountants
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {heroSlides[currentSlide].image}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <CheckCircle className="h-12 w-12 text-black" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Star className="h-10 w-10 text-yellow-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white text-sm">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full p-1">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mx-auto"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
