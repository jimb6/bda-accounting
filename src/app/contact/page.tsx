import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/contact-page-content"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ContactPageContent />
      <Footer />
    </div>
  )
}
