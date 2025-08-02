import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Award, Users, TrendingUp } from "lucide-react"

const teamMembers = [
  {
    name: "Michael Bonohc",
    title: "Senior Partner, CPA",
    initials: "MB",
    specialties: ["Tax Planning", "Business Consulting"],
  },
  {
    name: "Sarah Demerin",
    title: "Partner, CPA",
    initials: "SD",
    specialties: ["Audit Services", "Financial Reporting"],
  },
  {
    name: "David Associates",
    title: "Partner, CPA",
    initials: "DA",
    specialties: ["Small Business", "Payroll Services"],
  },
]

const achievements = [
  {
    icon: Award,
    title: "Certified Excellence",
    description: "All partners are certified CPAs with advanced degrees in accounting and finance.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description: "We build long-term relationships with personalized service for each client.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Helping businesses save thousands in taxes and improve financial efficiency.",
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
              25+ Years of Financial Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 1998, Bonohc, Demerin & Associates has been providing exceptional 
              accounting and financial services to businesses and individuals throughout the region. 
              Our team of certified public accountants combines decades of experience with 
              cutting-edge technology to deliver accurate, timely, and cost-effective solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We understand that every client is unique, which is why we take a personalized 
              approach to each engagement. Whether you're a small startup or an established 
              corporation, we're committed to helping you achieve your financial goals.
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
