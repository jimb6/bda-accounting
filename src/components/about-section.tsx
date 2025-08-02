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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4">About Our Firm</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              8+ Years of Financial Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2017, Bonhoc, Demerin & Associates is a distinguished professional 
              firm established by Joevanie L. Bonhoc and Marjo Q. Demerin-Bonhoc, both 
              accomplished Certified Public Accountants with more than a decade of experience 
              in the accounting and business industry.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our firm is dedicated to empowering Small and Medium Enterprises (SMEs) across 
              the Philippines by providing solutions to address tax burdens and facilitating 
              business growth. We have successfully assisted numerous clients, not only within 
              the Philippines but also from various countries across the Asia-Pacific Region.
            </p>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Meet Our Expert Team</h3>
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{member.name}</h4>
                        <p className="text-muted-foreground mb-2">{member.title}</p>
                        <div className="flex flex-wrap gap-2">
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
