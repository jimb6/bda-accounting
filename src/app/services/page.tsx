import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServicesPageContent } from "@/components/services-page-content";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ServicesPageContent />
      <Footer />
    </div>
  );
}
