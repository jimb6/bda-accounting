import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Users, FileText, Shield } from "lucide-react"

const services = [
  {
    title: "Accounting Services",
    description: "Comprehensive bookkeeping, financial statements, and accounting solutions tailored to your business needs.",
    icon: Calculator,
    features: ["Monthly Bookkeeping", "Financial Statements", "Cash Flow Management", "Payroll Processing"],
  },
  {
    title: "Business Consultation",
    description: "Strategic financial advice and business planning to help you make informed decisions and grow your business.",
    icon: Users,
    features: ["Financial Planning", "Business Strategy", "Growth Planning", "Risk Assessment"],
  },
  {
    title: "Tax Filing & Planning",
    description: "Expert tax preparation and strategic planning to minimize your tax liability and ensure compliance.",
    icon: FileText,
    features: ["Individual Tax Returns", "Business Tax Returns", "Tax Planning", "IRS Representation"],
  },
  {
    title: "Audit Services",
    description: "Professional audit and assurance services to provide confidence in your financial reporting.",
    icon: Shield,
    features: ["Financial Audits", "Compliance Reviews", "Internal Controls", "Audit Preparation"],
  },
]

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "25+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of accounting and financial services 
            to meet all your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Trusted by Businesses Across the Region
            </h3>
            <p className="text-muted-foreground">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
