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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Bonhoc, Demerin & Associates</h3>
              <p className="text-sm opacity-90">
                Your trusted CPA firm empowering SMEs across the Philippines and Asia-Pacific Region since 2017.
              </p>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Door No. 4 Saint John Paul II College of Davao, Ecoland Drive, Matina, Davao City, Philippines, 8000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+63 950 761 2580</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>workspace@bonhocdemerincpafirm.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm opacity-90 mb-4">
              Subscribe to our newsletter for tax tips and financial insights.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full px-3 py-2 rounded text-foreground text-sm"
              />
              <Button variant="secondary" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link href="https://www.facebook.com/bonhocdemerincpafirm" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90">
            © 2025 Bonohc, Demerin & Associates. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm opacity-90 hover:opacity-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm opacity-90 hover:opacity-100">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
