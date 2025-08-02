import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const services = [
  { name: "Accounting Services", href: "/services/accounting" },
  { name: "Tax Filing", href: "/services/tax" },
  { name: "Business Consultation", href: "/services/consultation" },
  { name: "Audit Services", href: "/services/audit" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-3 lg:space-y-4 sm:col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Bonhoc, Demerin & Associates</h3>
              <p className="text-xs lg:text-sm opacity-90 leading-relaxed">
                Your trusted CPA firm empowering SMEs across the Philippines and Asia-Pacific Region since 2017.
              </p>
            </div>
            
            <div className="space-y-2 text-xs lg:text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 lg:h-4 lg:w-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Door No. 4 Saint John Paul II College of Davao, Ecoland Drive, Matina, Davao City, Philippines, 8000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0" />
                <span>+63 950 761 2580</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0" />
                <span className="break-all">workspace@bonhocdemerincpafirm.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-xs lg:text-sm opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-xs lg:text-sm opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Stay Updated</h4>
            <p className="text-xs lg:text-sm opacity-90 mb-3 lg:mb-4 leading-relaxed">
              Subscribe to our newsletter for tax tips and financial insights.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full px-3 py-2 rounded text-foreground text-xs lg:text-sm"
              />
              <Button variant="secondary" size="sm" className="w-full text-xs lg:text-sm">
                Subscribe
              </Button>
            </div>
            
            <div className="flex space-x-3 lg:space-x-4 mt-4 lg:mt-6">
              <Button variant="ghost" size="icon" className="h-7 w-7 lg:h-8 lg:w-8 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link href="https://www.facebook.com/bonhocdemerincpafirm" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-3 w-3 lg:h-4 lg:w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 lg:h-8 lg:w-8 text-primary-foreground hover:bg-primary-foreground/20">
                <Twitter className="h-3 w-3 lg:h-4 lg:w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 lg:h-8 lg:w-8 text-primary-foreground hover:bg-primary-foreground/20">
                <Linkedin className="h-3 w-3 lg:h-4 lg:w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 lg:mt-8 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs lg:text-sm opacity-90 text-center md:text-left">
            © 2025 Bonohc, Demerin & Associates. All rights reserved.
          </p>
          <div className="flex space-x-4 lg:space-x-6 mt-3 md:mt-0">
            <Link href="/privacy" className="text-xs lg:text-sm opacity-90 hover:opacity-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs lg:text-sm opacity-90 hover:opacity-100">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
