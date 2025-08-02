import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Award, Users, TrendingUp } from "lucide-react"

const teamMembers = [
  {
    name: "Joevanie L. Bonhoc",
    title: "Co-Founder & Senior Partner, CPA",
    initials: "JB",
    specialties: ["Tax Compliance", "Business Strategy", "SME Development"],
  },
  {
    name: "Marjo Q. Demerin-Bonhoc",
    title: "Co-Founder & Senior Partner, CPA",
    initials: "MD",
    specialties: ["Audit Services", "Management Accounting", "Financial Reporting"],
  },
  {
    name: "Atty. James Bernal",
    title: "Partner, CPA (Surigao Branch)",
    initials: "JB",
    specialties: ["Legal Advisory", "Tax Law", "Partnership Services"],
  },
]

const achievements = [
  {
    icon: Award,
    title: "Certified Excellence",
    description: "All partners are certified CPAs with over a decade of experience in accounting and business industry.",
  },
  {
    icon: Users,
    title: "SME-Focused Approach",
    description: "Dedicated to empowering Small and Medium Enterprises across the Philippines and Asia-Pacific Region.",
  },
  {
    icon: TrendingUp,
    title: "Regional Expertise",
    description: "Successfully serving clients across multiple countries in the Asia-Pacific Region with expanding CPA team.",
  },
]

export function AboutSection() {
  return (
    <section className="py-12 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-3 lg:mb-4 text-xs lg:text-sm">About Our Firm</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight">
              8+ Years of Financial Excellence
            </h2>
            <p className="text-sm lg:text-lg text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
              Founded in 2017, Bonhoc, Demerin & Associates is a distinguished professional 
              firm established by Joevanie L. Bonhoc and Marjo Q. Demerin-Bonhoc, both 
              accomplished Certified Public Accountants with more than a decade of experience 
              in the accounting and business industry.
            </p>
            <p className="text-sm lg:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
              Our firm is dedicated to empowering Small and Medium Enterprises (SMEs) across 
              the Philippines by providing solutions to address tax burdens and facilitating 
              business growth. We have successfully assisted numerous clients, not only within 
              the Philippines but also from various countries across the Asia-Pacific Region.
            </p>
            
            <div className="space-y-3 lg:space-y-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1 flex-shrink-0">
                      <IconComponent className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm lg:text-base">{achievement.title}</h4>
                      <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Meet Our Expert Team</h3>
            <div className="space-y-4 lg:space-y-6">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-4 lg:p-6">
                    <div className="flex items-center space-x-3 lg:space-x-4">
                      <Avatar className="h-12 w-12 lg:h-16 lg:w-16 flex-shrink-0">
                        <AvatarFallback className="text-sm lg:text-lg font-semibold bg-primary/10 text-primary">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base lg:text-lg font-semibold leading-tight">{member.name}</h4>
                        <p className="text-muted-foreground mb-2 text-sm lg:text-base">{member.title}</p>
                        <div className="flex flex-wrap gap-1 lg:gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
