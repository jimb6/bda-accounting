"use client"

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { GiftAnimation } from "@/components/gift-animation";

export default function Home() {
  const [showGift, setShowGift] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the gift animation
    const hasSeenGift = localStorage.getItem('bda-gift-seen');
    
    if (!hasSeenGift) {
      setShowGift(true);
    }
    
    setIsLoading(false);
  }, []);

  const handleGiftOpened = () => {
    // Mark that user has seen the gift
    localStorage.setItem('bda-gift-seen', 'true');
    setShowGift(false);
  };

  // Show loading or nothing while checking localStorage
  if (isLoading) {
    return <div className="min-h-screen bg-background" />;
  }

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
