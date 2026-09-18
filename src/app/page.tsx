"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceSchedule from "@/components/ServiceSchedule";
import PastoralLeadership from "@/components/PastoralLeadership";
import LiveBroadcast from "@/components/LiveBroadcast";
import MinistriesGrid from "@/components/MinistriesGrid";
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

      {/* 2. Hero Section with 2026 Theme & Live Countdown */}
      <Hero onOpenVideo={() => setIsVideoModalOpen(true)} />

      {/* 3. Weekly Service Schedules */}
      <ServiceSchedule />

      {/* 4. Pastoral Leadership Profile */}
      <PastoralLeadership />

      {/* 5. Live Streaming & Satellite Broadcast */}
      <LiveBroadcast />

      {/* 6. Church Ministries & Outreaches */}
      <MinistriesGrid />

      {/* 7. Online Giving & Stewardship */}
      <OnlineGiving />

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
