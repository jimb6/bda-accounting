"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { 
  Award, 
  Users, 
  Calendar, 
  ArrowRight,
  Star,
  Heart,
  Shield,
  Target,
  BookOpen
} from "lucide-react"

const stats = [
  { number: "8+", label: "Years of Experience", icon: Calendar },
  { number: "200+", label: "Satisfied Clients", icon: Users },
  { number: "99%", label: "Client Retention Rate", icon: Star },
  { number: "24/7", label: "Support Available", icon: Shield }
]

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our professional relationships and services."
  },
  {
    icon: Target,
    title: "Excellence", 
    description: "We strive for perfection in every detail, ensuring accuracy and quality in all deliverables."
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Your success is our priority. We tailor our services to meet your unique business needs."
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description: "We embrace technology and modern practices to provide efficient, cutting-edge solutions."
  }
]

const team = [
  {
    name: "Joevanie L. Bonhoc",
    title: "Co-Founder & Senior Partner CPA",
    specialization: "Tax Compliance & Business Strategy",
    experience: "10+ years",
    education: "CPA License, Business Management",
    bio: "Co-founder of Bonhoc, Demerin & Associates with extensive experience in tax compliance and strategic business planning for SMEs across the Philippines and Asia-Pacific region."
  },
  {
    name: "Marjo Q. Demerin-Bonhoc", 
    title: "Co-Founder & Senior Partner CPA",
    specialization: "Audit & Management Accounting",
    experience: "10+ years",
    education: "CPA License, Financial Management", 
    bio: "Co-founder and accomplished CPA specializing in audit services and management accounting, helping businesses achieve transparency and optimize their financial operations."
  },
  {
    name: "Our Growing Team",
    title: "Talented CPA Professionals",
    specialization: "Comprehensive Accounting Services",
    experience: "Varied Experience Levels",
    education: "CPA Licenses & Certifications",
    bio: "Our dynamic team continues to expand with new talented CPAs, bringing fresh perspectives and expertise to serve our diverse clientele."
  }
]

const milestones = [
  {
    year: "2017",
    title: "Firm Founded",
    description: "Founded by Joevanie L. Bonhoc and Marjo Q. Demerin-Bonhoc, two accomplished CPAs with a vision to empower SMEs."
  },
  {
    year: "2018", 
    title: "Regional Expansion",
    description: "Extended services beyond the Philippines to serve clients across the Asia-Pacific Region."
  },
  {
    year: "2020",
    title: "Digital Transformation", 
    description: "Implemented digital solutions and remote service capabilities to better serve clients during changing times."
  },
  {
    year: "2022",
    title: "Team Growth",
    description: "Expanded our team by welcoming new talented CPAs to meet growing client demands."
  },
  {
    year: "2025",
    title: "Innovation Leadership",
    description: "Continuing to lead in providing comprehensive accounting solutions with cutting-edge technology and expertise."
  }
]

const certifications = [
  "Certified Public Accountant (CPA)",
  "Enrolled Agent (EA)",
  "QuickBooks ProAdvisor",
  "Xero Certified Partner",
  "AICPA Member",
  "State Board Licensed"
]

export function AboutPageContent() {
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
              About Our Firm
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bonhoc, Demerin & Associates
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              For over 8 years, we&apos;ve been empowering Small and Medium Enterprises across 
              the Philippines and Asia-Pacific Region with comprehensive accounting and 
              business solutions.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Meet Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2017, Bonhoc, Demerin & Associates is a distinguished professional 
                firm established by Joevanie L. Bonhoc and Marjo Q. Demerin-Bonhoc, both 
                accomplished Certified Public Accountants with more than a decade of experience 
                in the accounting and business industry.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our firm is dedicated to empowering Small and Medium Enterprises (SMEs) across 
                the Philippines by providing solutions to address tax burdens and facilitating 
                business growth. Over the years, we have successfully assisted numerous clients, 
                not only within the Philippines but also from various countries across the 
                Asia-Pacific Region.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our dynamic team continues to expand, welcoming new talented CPAs. Our commitment 
                to excellence, client-centric approach, and international reach make us the ideal 
                partner for SMEs seeking to thrive in a competitive business landscape.
              </p>
              <Button className="w-full sm:w-auto">
                Learn About Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImagePlaceholder
                width={500}
                height={400}
                text="Office team collaboration"
                className="w-full h-[400px] rounded-lg shadow-lg"
                bgColor="bg-blue-50"
                textColor="text-gray-600"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape how we serve our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals bring decades of combined expertise to serve your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <ImagePlaceholder
                      width={150}
                      height={150}
                      text={`${member.name} headshot`}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                      bgColor="bg-gray-100"
                      textColor="text-gray-500"
                    />
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {member.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">SPECIALIZATION</h4>
                      <p className="text-sm">{member.specialization}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">EXPERIENCE</h4>
                      <p className="text-sm">{member.experience}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">EDUCATION</h4>
                      <p className="text-sm">{member.education}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our growth and commitment to excellence.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-ml-px"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:-ml-2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary">{milestone.year}</Badge>
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team maintains the highest professional standards and certifications in the industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
              >
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{cert}</span>
              </motion.div>
            ))}
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
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Experience the difference that personalized service and professional expertise can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us Today
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
