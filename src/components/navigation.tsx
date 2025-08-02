"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, MapPin } from "lucide-react"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top contact bar - Enhanced for mobile */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          {/* Mobile: Company name prominently displayed */}
          <div className="flex md:hidden justify-center items-center">
            <div className="text-center">
              <div className="text-sm font-semibold">Bonhoc, Demerin & Associates</div>
              <div className="text-xs opacity-90">Certified Public Accountants</div>
            </div>
          </div>
          
          {/* Desktop: Contact info */}
          <div className="hidden md:flex flex-wrap justify-center md:justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>+63 950 761 2580</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>workspace@bonhocdemerincpafirm.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>Ecoland Drive, Matina, Davao City, Philippines</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - Enhanced for mobile */}
      <div className="container mx-auto px-4">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 md:space-x-3">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Bonhoc, Demerin & Associates Logo"
                width={40}
                height={40}
                className="h-8 md:h-12 w-auto drop-shadow-md bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20"
                priority
              />
            </div>
            <div className="hidden lg:block">
              <div className="text-lg font-semibold">Bonhoc, Demerin & Associates</div>
              <div className="text-xs text-muted-foreground">Certified Public Accountants</div>
            </div>
            {/* Show abbreviated name on medium screens */}
            <div className="hidden sm:block lg:hidden">
              <div className="text-base font-semibold">BDA</div>
              <div className="text-xs text-muted-foreground">CPA Firm</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild>
              <Link href="/get-quote">Get Quote</Link>
            </Button>
          </nav>

          {/* Mobile Navigation - Enhanced */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              {/* Mobile menu header */}
              <div className="bg-primary text-primary-foreground p-6 mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Image
                    src="/images/logo.png"
                    alt="BDA Logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto bg-white/20 rounded p-1"
                  />
                  <div>
                    <div className="font-semibold text-sm">BDA</div>
                    <div className="text-xs opacity-90">CPA Firm</div>
                  </div>
                </div>
                <div className="text-xs opacity-80">
                  Professional Accounting Services
                </div>
              </div>

              {/* Navigation items */}
              <div className="px-6 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center py-3 px-4 text-base font-medium transition-colors hover:bg-muted rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Contact info in mobile menu */}
                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="px-4">
                    <div className="text-sm font-medium mb-3">Contact Us</div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3 w-3" />
                        <span>+63 950 761 2580</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3" />
                        <span>workspace@bonhocdemerincpafirm.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="px-4 pt-4">
                  <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
                    <Link href="/get-quote">Get Free Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
