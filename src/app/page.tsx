"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThemeWordSection from "@/components/ThemeWordSection";
import ServiceSchedule from "@/components/ServiceSchedule";
import VisionMission from "@/components/VisionMission";
import ProphetProfile from "@/components/ProphetProfile";
import PhotoGallery from "@/components/PhotoGallery";
import ChildrenMinistrySection from "@/components/ChildrenMinistrySection";
import OnlineGiving from "@/components/OnlineGiving";
import ContactAndMap from "@/components/ContactAndMap";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import CalendarModal from "@/components/CalendarModal";
import FloatingSocialWidget from "@/components/FloatingSocialWidget";

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col font-body">
      {/* 1. Global Navigation & Top Bar */}
      <Navbar onOpenVideo={() => setIsVideoModalOpen(true)} />

      {/* 2. Hero Section with Live Countdown */}
      <Hero
        onOpenVideo={() => setIsVideoModalOpen(true)}
        onOpenCalendar={() => setIsCalendarModalOpen(true)}
      />

      {/* 3. Weekly Service Schedules */}
      <ServiceSchedule />

      {/* 4. Vision, Mission & Divine Mandate */}
      <VisionMission />

      {/* 5. Head of the Ministry: Prophet Dr. Isaiah Macwealth */}
      <ProphetProfile />

      {/* 6. Kingdom Kids & Teens Ministry */}
      <ChildrenMinistrySection />

      {/* 7. Sanctuary & Ministry Photo Gallery */}
      <PhotoGallery />

      {/* 7. Online Giving & Stewardship */}
      <OnlineGiving />

      {/* 3. Word for the Year 2026 Prophetic Declaration */}
      <ThemeWordSection />

      {/* 8. Contact Form & Campus Map (Side-by-Side) */}
      <ContactAndMap />

      {/* 10. Comprehensive Footer */}
      <Footer />

      {/* 11. Interactive Live Stream Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* 12. Add to Calendar Modal */}
      <CalendarModal
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
      />

      {/* 13. Floating Chat & Social Channels Quick Menu */}
      <FloatingSocialWidget />
    </main>
  );
}
