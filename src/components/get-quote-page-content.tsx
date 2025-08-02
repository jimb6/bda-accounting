"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { 
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Send,
  Shield,
  Award
} from "lucide-react"

const servicePackages = [
  {
    id: "basic",
    name: "Basic Package",
    description: "Essential services for small businesses",
    startingPrice: "$299",
    period: "/month",
    features: [
      "Monthly Bookkeeping",
      "Financial Statements",
      "Basic Tax Preparation",
      "Email Support",
      "Quarterly Reviews"
    ],
    popular: false
  },
  {
    id: "professional", 
    name: "Professional Package",
    description: "Comprehensive solution for growing businesses",
    startingPrice: "$599",
    period: "/month", 
    features: [
      "Everything in Basic",
      "Advanced Tax Planning",
      "Business Consulting",
      "Payroll Services",
      "Priority Support",
      "Monthly Strategy Calls"
    ],
    popular: true
  },
  {
    id: "enterprise",
    name: "Enterprise Package", 
    description: "Full-service solution for large organizations",
    startingPrice: "Custom",
    period: "pricing",
    features: [
      "Everything in Professional",
      "Audit Services",
      "Multi-location Support",
      "Dedicated Account Manager",
      "24/7 Support",
      "Custom Reporting"
    ],
    popular: false
  }
]

const additionalServices = [
  { id: "audit", name: "Audit Services", price: "Starting at $2,500" },
  { id: "consulting", name: "Business Consulting", price: "$150/hour" },
  { id: "payroll", name: "Payroll Processing", price: "$25/employee/month" },
  { id: "quickbooks", name: "QuickBooks Setup", price: "Starting at $500" },
  { id: "tax-planning", name: "Tax Planning", price: "Starting at $300" },
  { id: "financial-planning", name: "Financial Planning", price: "$200/hour" }
]

const businessTypes = [
  "Sole Proprietorship",
  "Partnership", 
  "LLC",
  "S-Corporation",
  "C-Corporation",
  "Nonprofit",
  "Other"
]

const employeeRanges = [
  "1-5 employees",
  "6-15 employees", 
  "16-50 employees",
  "51-100 employees",
  "100+ employees"
]

export function GetQuotePageContent() {
  const [selectedPackage, setSelectedPackage] = useState("professional")
  const [formData, setFormData] = useState({
    // Business Information
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    industry: "",
    employeeCount: "",
    annualRevenue: "",
    
    // Service Requirements
    package: "professional",
    additionalServices: [] as string[],
    urgency: "standard",
    startDate: "",
    
    // Additional Details
    currentAccounting: "",
    challenges: "",
    goals: "",
    additionalInfo: ""
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAdditionalServiceChange = (serviceId: string, checked: boolean) => {
    const currentServices = formData.additionalServices
    if (checked) {
      handleInputChange("additionalServices", [...currentServices, serviceId])
    } else {
      handleInputChange("additionalServices", currentServices.filter(id => id !== serviceId))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Handle form submission here
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
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
              Custom Quote
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Tell us about your business needs and we&apos;ll provide a detailed, 
              personalized quote for our accounting and financial services.
            </p>
            <div className="flex items-center justify-center space-x-4 text-blue-100">
              <CheckCircle className="h-5 w-5" />
              <span>Free consultation included</span>
              <CheckCircle className="h-5 w-5" />
              <span>No hidden fees</span>
              <CheckCircle className="h-5 w-5" />
              <span>Custom pricing</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Selection */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a starting package and we&apos;ll customize it to fit your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card 
                  className={`h-full cursor-pointer transition-all hover:shadow-lg ${
                    selectedPackage === pkg.id ? "ring-2 ring-primary shadow-lg" : ""
                  }`}
                  onClick={() => {
                    setSelectedPackage(pkg.id)
                    handleInputChange("package", pkg.id)
                  }}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-base">{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">{pkg.startingPrice}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={selectedPackage === pkg.id ? "default" : "outline"} 
                      className="w-full mt-6"
                      onClick={() => {
                        setSelectedPackage(pkg.id)
                        handleInputChange("package", pkg.id)
                      }}
                    >
                      {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step 
                        ? "bg-primary text-white" 
                        : "bg-gray-200 text-gray-600"
                    }`}>
                      {step}
                    </div>
                    {step < 4 && (
                      <div className={`w-20 h-1 mx-2 ${
                        currentStep > step ? "bg-primary" : "bg-gray-200"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Step {currentStep} of 4: {
                    currentStep === 1 ? "Business Information" :
                    currentStep === 2 ? "Service Requirements" :
                    currentStep === 3 ? "Additional Details" :
                    "Review & Submit"
                  }
                </p>
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Business Information */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-6">Business Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="businessName">Business Name *</Label>
                          <Input
                            id="businessName"
                            placeholder="Your Business Name"
                            value={formData.businessName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("businessName", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="contactName">Contact Name *</Label>
                          <Input
                            id="contactName"
                            placeholder="Your Full Name"
                            value={formData.contactName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("contactName", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="businessType">Business Type *</Label>
                          <Select value={formData.businessType} onValueChange={(value: string) => handleInputChange("businessType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                            <SelectContent>
                              {businessTypes.map((type) => (
                                <SelectItem key={type} value={type.toLowerCase().replace(" ", "-")}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <Input
                            id="industry"
                            placeholder="e.g., Technology, Healthcare, Retail"
                            value={formData.industry}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("industry", e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="employeeCount">Number of Employees</Label>
                          <Select value={formData.employeeCount} onValueChange={(value: string) => handleInputChange("employeeCount", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select employee range" />
                            </SelectTrigger>
                            <SelectContent>
                              {employeeRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="annualRevenue">Annual Revenue (Optional)</Label>
                          <Input
                            id="annualRevenue"
                            placeholder="e.g., $500,000"
                            value={formData.annualRevenue}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("annualRevenue", e.target.value)}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Service Requirements */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-6">Service Requirements</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-medium mb-4 block">Selected Package</Label>
                          <Card className="p-4 bg-blue-50 border-blue-200">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold">{servicePackages.find(p => p.id === selectedPackage)?.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {servicePackages.find(p => p.id === selectedPackage)?.description}
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-primary">
                                  {servicePackages.find(p => p.id === selectedPackage)?.startingPrice}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {servicePackages.find(p => p.id === selectedPackage)?.period}
                                </div>
                              </div>
                            </div>
                          </Card>
                        </div>

                        <div>
                          <Label className="text-base font-medium mb-4 block">Additional Services</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {additionalServices.map((service) => (
                              <div key={service.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                                <Checkbox
                                  id={service.id}
                                  checked={formData.additionalServices.includes(service.id)}
                                  onCheckedChange={(checked) => handleAdditionalServiceChange(service.id, checked as boolean)}
                                />
                                <div className="flex-1">
                                  <Label htmlFor={service.id} className="text-sm font-medium cursor-pointer">
                                    {service.name}
                                  </Label>
                                  <p className="text-xs text-muted-foreground">{service.price}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label>Project Urgency</Label>
                            <RadioGroup 
                              value={formData.urgency} 
                              onValueChange={(value) => handleInputChange("urgency", value)}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="standard" id="standard" />
                                <Label htmlFor="standard" className="cursor-pointer">Standard (2-3 weeks)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="expedited" id="expedited" />
                                <Label htmlFor="expedited" className="cursor-pointer">Expedited (1 week) - Additional 20%</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="rush" id="rush" />
                                <Label htmlFor="rush" className="cursor-pointer">Rush (3-5 days) - Additional 50%</Label>
                              </div>
                            </RadioGroup>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="startDate">Preferred Start Date</Label>
                            <Input
                              id="startDate"
                              type="date"
                              value={formData.startDate}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("startDate", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Additional Details */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-6">Additional Details</h3>
                      
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="currentAccounting">Current Accounting Solution</Label>
                          <Textarea
                            id="currentAccounting"
                            placeholder="Tell us about your current accounting software, bookkeeper, or CPA..."
                            value={formData.currentAccounting}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("currentAccounting", e.target.value)}
                            className="min-h-[100px]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="challenges">Current Challenges</Label>
                          <Textarea
                            id="challenges"
                            placeholder="What accounting or financial challenges are you facing?"
                            value={formData.challenges}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("challenges", e.target.value)}
                            className="min-h-[100px]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="goals">Goals & Objectives</Label>
                          <Textarea
                            id="goals"
                            placeholder="What do you hope to achieve with our services?"
                            value={formData.goals}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("goals", e.target.value)}
                            className="min-h-[100px]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="additionalInfo">Additional Information</Label>
                          <Textarea
                            id="additionalInfo"
                            placeholder="Any other details that would help us provide an accurate quote..."
                            value={formData.additionalInfo}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("additionalInfo", e.target.value)}
                            className="min-h-[100px]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Review & Submit */}
                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-6">Review Your Information</h3>
                      
                      <div className="space-y-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Business Information</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2 text-sm">
                            <p><strong>Business:</strong> {formData.businessName}</p>
                            <p><strong>Contact:</strong> {formData.contactName}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Phone:</strong> {formData.phone}</p>
                            <p><strong>Type:</strong> {formData.businessType}</p>
                            <p><strong>Industry:</strong> {formData.industry}</p>
                            <p><strong>Employees:</strong> {formData.employeeCount}</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Selected Services</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2 text-sm">
                            <p><strong>Package:</strong> {servicePackages.find(p => p.id === selectedPackage)?.name}</p>
                            <p><strong>Additional Services:</strong> {formData.additionalServices.length > 0 ? 
                              formData.additionalServices.map(id => 
                                additionalServices.find(s => s.id === id)?.name
                              ).join(", ") : "None"
                            }</p>
                            <p><strong>Urgency:</strong> {formData.urgency}</p>
                            <p><strong>Start Date:</strong> {formData.startDate}</p>
                          </CardContent>
                        </Card>

                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-900 mb-2">What Happens Next?</h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• We&apos;ll review your information within 24 hours</li>
                            <li>• Our team will prepare a detailed, customized quote</li>
                            <li>• We&apos;ll schedule a free consultation to discuss your needs</li>
                            <li>• You&apos;ll receive your quote via email within 2-3 business days</li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                    >
                      Previous
                    </Button>
                    
                    {currentStep < 4 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                      >
                        Next Step
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitted}
                        className="bg-gradient-to-r from-primary to-blue-600"
                      >
                        {isSubmitted ? (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Quote Submitted!
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Get My Quote
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver value beyond just numbers with our comprehensive approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trusted Expertise",
                description: "25+ years of experience with certified professionals"
              },
              {
                icon: Clock,
                title: "Timely Delivery", 
                description: "On-time completion with regular progress updates"
              },
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                description: "No hidden fees, clear pricing structure"
              },
              {
                icon: Award,
                title: "Quality Guarantee",
                description: "100% satisfaction guarantee on all services"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
