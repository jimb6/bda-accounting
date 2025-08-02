"use client"

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { GiftAnimation } from "@/components/gift-animation";

export default function Home() {
  const [showGift, setShowGift] = useState(true);

  const handleGiftOpened = () => {
    setShowGift(false);
  };

  if (showGift) {
    return <GiftAnimation onGiftOpened={handleGiftOpened} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
