"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThemeWordSection from "@/components/ThemeWordSection";
import ServiceSchedule from "@/components/ServiceSchedule";
import VisionMission from "@/components/VisionMission";
import ProphetProfile from "@/components/ProphetProfile";
import LiveBroadcast from "@/components/LiveBroadcast";
import OnlineGiving from "@/components/OnlineGiving";
import VisitPlanner from "@/components/VisitPlanner";
import CampusDirections from "@/components/CampusDirections";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col font-body">
      {/* 1. Global Navigation & Top Bar */}
      <Navbar onOpenVideo={() => setIsVideoModalOpen(true)} />

      {/* 2. Hero Section with Live Countdown */}
      <Hero onOpenVideo={() => setIsVideoModalOpen(true)} />


      {/* 4. Weekly Service Schedules */}
      <ServiceSchedule />

      {/* 4. Vision, Mission & Divine Mandate */}
      <VisionMission />

      {/* 5. Head of the Ministry: Prophet Dr. Isaiah Macwealth */}
      <ProphetProfile />

      {/* 6. Live Streaming & Satellite Broadcast */}
      <LiveBroadcast />

      {/* 7. Online Giving & Stewardship */}
      <OnlineGiving />

      {/* 3. Word for the Year 2026 Prophetic Declaration */}
      <ThemeWordSection />

      {/* 8. VIP Visit Planner & Prayer Requests */}
      <VisitPlanner />

      {/* 9. Campus Directions & Interactive Google Maps */}
      <CampusDirections />

      {/* 10. Comprehensive Footer */}
      <Footer />

      {/* 11. Interactive Live Stream Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </main>
  );
}
