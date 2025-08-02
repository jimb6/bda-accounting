import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutPageContent } from "@/components/about-page-content"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutPageContent />
      <Footer />
    </div>
  )
}
