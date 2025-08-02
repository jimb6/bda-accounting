import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GetQuotePageContent } from "@/components/get-quote-page-content"

export default function GetQuotePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <GetQuotePageContent />
      <Footer />
    </div>
  )
}
