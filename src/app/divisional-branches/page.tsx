"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import FloatingSocialWidget from "@/components/FloatingSocialWidget";
import { MAINLAND_DIVISION_BRANCHES, CHURCH_INFO, type DivisionalBranch } from "@/data/churchData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function DivisionalBranchesPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCode, setSelectedCode] = useState<string>("ALL");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const { ref: heroRef, isVisible: isHeroVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: branchesRef, isVisible: isBranchesVisible } = useScrollReveal({ threshold: 0.05 });

  // Filter branches based on search query and selected filter chip
  const filteredBranches = useMemo(() => {
    return MAINLAND_DIVISION_BRANCHES.filter((branch) => {
      const matchesCode = selectedCode === "ALL" || branch.code === selectedCode;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        branch.name.toLowerCase().includes(query) ||
        branch.venue.toLowerCase().includes(query) ||
        branch.address.toLowerCase().includes(query) ||
        branch.code.toLowerCase().includes(query);

      return matchesCode && matchesQuery;
    });
  }, [searchQuery, selectedCode]);

  const handleCopyPhone = (id: string, phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <main className="min-h-screen flex flex-col font-body bg-[#faf9f6]">
      {/* 1. Global Navigation */}
      <Navbar onOpenVideo={() => setIsVideoModalOpen(true)} />

      {/* 2. Hero Header Section */}
      <section
        ref={heroRef}
        className="relative bg-[#070d1a] text-[#faf9f6] py-16 sm:py-24 overflow-hidden border-b border-[#f59e0b]/20"
      >
        {/* Atmosphere Background Glows */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#f59e0b]/20 blur-[130px] rounded-full"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#0f2042] blur-[100px] rounded-full"></div>
        </div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#fbbf24_1px,transparent_1px),linear-gradient(to_bottom,#fbbf24_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-[#d3e4fe]/80 mb-6 sm:mb-8 font-medium">
            <Link href="/" className="hover:text-[#fbbf24] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">home</span>
              <span>Home</span>
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#fbbf24] font-semibold">Divisional Branches</span>
          </nav>

          <div
            className={`max-w-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Division Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[#fbbf24] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="text-sm">🚩</span>
              <span>Mainland Division Chapters</span>
            </div>

            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black text-[#faf9f6] tracking-tight leading-tight">
              Mainland Divisional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#fe932c]">
                Branches
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#d3e4fe] mt-4 leading-relaxed">
              Find a Gospel Pillars chapter near you across Lagos Mainland. Experience the same apostolic fire, vibrant worship, and transforming presence of God in every divisional location.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#fbbf24] text-xl">location_city</span>
                <div>
                  <strong className="block text-white font-headline text-base">7 Chapters</strong>
                  <span className="text-[#d3e4fe]/75 text-xs">Lagos Mainland</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#fbbf24] text-xl">schedule</span>
                <div>
                  <strong className="block text-white font-headline text-base">Midweek</strong>
                  <span className="text-[#d3e4fe]/75 text-xs">Synchronized Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Filter & Search Bar */}
      <section className="bg-white border-b border-[#c5c6cf]/40 sticky top-16 sm:top-20 z-30 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#904d00] text-xl pointer-events-none">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search branch or area (e.g., Ikorodu, Okota, Opic)..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-[#c5c6cf]/60 bg-[#faf9f6] text-[#000922] text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:bg-white transition-all placeholder:text-[#45464e]/60"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Clear search"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
            </div>

            {/* Quick Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedCode("ALL")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${selectedCode === "ALL"
                  ? "bg-[#000922] text-[#faf9f6] shadow-sm"
                  : "bg-[#e5eeff] text-[#000922] hover:bg-[#c5c6cf]/40"
                  }`}
              >
                All ({MAINLAND_DIVISION_BRANCHES.length})
              </button>
              {MAINLAND_DIVISION_BRANCHES.map((b) => (
                <button
                  key={b.code}
                  onClick={() => setSelectedCode(b.code)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${selectedCode === b.code
                    ? "bg-[#000922] text-[#faf9f6] shadow-sm"
                    : "bg-[#e5eeff] text-[#000922] hover:bg-[#c5c6cf]/40"
                    }`}
                >
                  {b.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Branch Cards Grid */}
      <section ref={branchesRef} className="py-12 sm:py-16 lg:py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {filteredBranches.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#c5c6cf]/40 p-8 max-w-lg mx-auto">
              <span className="material-symbols-outlined text-4xl text-[#904d00] mb-2">wrong_location</span>
              <h3 className="font-headline text-lg font-bold text-[#000922]">No Chapters Found</h3>
              <p className="text-xs sm:text-sm text-[#45464e] mt-1 mb-4">
                We could not find any chapter matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCode("ALL");
                }}
                className="px-4 py-2 rounded-xl bg-[#000922] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#904d00] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredBranches.map((branch, idx) => (
                <article
                  key={branch.id}
                  style={{ transitionDelay: isBranchesVisible ? `${idx * 80}ms` : "0ms" }}
                  className={`bg-white rounded-2xl p-6 sm:p-7 border border-[#c5c6cf]/40 shadow-sm hover:shadow-xl hover:border-[#f59e0b]/60 hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between group relative overflow-hidden ${isBranchesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                  {/* Gold Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#904d00] via-[#f59e0b] to-[#fe932c] group-hover:h-2 transition-all"></div>

                  <div>
                    {/* Card Header: Name & Division Tag */}
                    <div className="flex items-start justify-between gap-3 mb-4 pt-1">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#f59e0b]/15 text-[#904d00] text-[10px] uppercase font-bold tracking-wider mb-1.5">
                          {branch.division}
                        </span>
                        <h2 className="font-headline text-xl sm:text-2xl font-extrabold text-[#000922] group-hover:text-[#904d00] transition-colors">
                          {branch.name}
                        </h2>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#0f2042] text-[#fbbf24] flex items-center justify-center shrink-0 border border-[#f59e0b]/30 shadow-sm">
                        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                          church
                        </span>
                      </div>
                    </div>

                    {/* Venue & Address Info */}
                    <div className="space-y-3 pt-3 border-t border-[#c5c6cf]/30">
                      {/* Venue Name */}
                      <div className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#904d00] text-lg mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                          meeting_room
                        </span>
                        <div>
                          <span className="text-[11px] uppercase font-bold text-[#904d00] tracking-wider block">
                            Chapter Venue
                          </span>
                          <p className="text-sm font-bold text-[#000922] leading-snug">
                            {branch.venue}
                          </p>
                        </div>
                      </div>

                      {/* Full Street Address */}
                      <div className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#45464e] text-lg mt-0.5 shrink-0">
                          pin_drop
                        </span>
                        <div>
                          <span className="text-[11px] uppercase font-bold text-[#45464e] tracking-wider block">
                            Address
                          </span>
                          <p className="text-xs text-[#45464e] leading-relaxed">
                            {branch.address}
                          </p>
                        </div>
                      </div>

                      {/* Official Phone Number */}
                      <div className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#904d00] text-lg mt-0.5 shrink-0">
                          call
                        </span>
                        <div className="flex-1">
                          <span className="text-[11px] uppercase font-bold text-[#904d00] tracking-wider block">
                            Official Contact
                          </span>
                          <div className="flex items-center justify-between gap-2 mt-0.5">
                            <a
                              href={`tel:${branch.phoneRaw}`}
                              className="text-sm font-extrabold text-[#000922] hover:text-[#904d00] transition-colors"
                            >
                              {branch.phone}
                            </a>
                            <button
                              onClick={() => handleCopyPhone(branch.id, branch.phone)}
                              className="p-1 rounded-md text-gray-400 hover:text-[#904d00] hover:bg-[#e5eeff] transition-all text-xs flex items-center gap-1"
                              title="Copy phone number"
                              aria-label="Copy phone number"
                            >
                              <span className="material-symbols-outlined text-sm">
                                {copiedId === branch.id ? "check" : "content_copy"}
                              </span>
                              <span className="text-[10px] font-semibold">
                                {copiedId === branch.id ? "Copied" : "Copy"}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-6 pt-4 border-t border-[#c5c6cf]/30 flex items-center gap-2.5">
                    {/* Direct Call Button */}
                    <a
                      href={`tel:${branch.phoneRaw}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#000922] text-[#faf9f6] font-headline text-xs font-bold uppercase tracking-wider hover:bg-[#904d00] transition-colors active:scale-95 text-center shadow-sm"
                    >
                      <span className="material-symbols-outlined text-sm">call</span>
                      <span>Call Chapter</span>
                    </a>

                    {/* Google Maps Directions */}
                    <a
                      href={branch.googleMapsQuery}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-[#e5eeff] text-[#000922] hover:bg-[#c5c6cf]/40 font-headline text-xs font-bold uppercase tracking-wider transition-colors border border-[#c5c6cf]/40"
                      title="Open in Google Maps"
                    >
                      <span className="material-symbols-outlined text-sm text-[#904d00]">directions</span>
                      <span className="hidden sm:inline">Directions</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Central Division Support & Coordination Card */}
      <section className="bg-[#0f2042] text-[#faf9f6] py-12 sm:py-16 border-t border-[#f59e0b]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#070d1a] rounded-2xl p-6 sm:p-10 border border-[#f59e0b]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#fbbf24]">
                Mainland Division Coordination
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Need Help Finding the Right Chapter?
              </h3>
              <p className="text-xs sm:text-sm text-[#d3e4fe] mt-2 leading-relaxed">
                Whether you have questions about service times, need pastoral counseling, or want directions to the closest fellowship, our central helpline is available to assist you.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#d3e4fe]">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#fbbf24] text-base">phone_in_talk</span>
                  <span>Direct Hotline: <strong className="text-white">{CHURCH_INFO.hotlines[0]}</strong></span>
                </div>
                <span className="text-gray-600 hidden sm:inline">|</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#fbbf24] text-base">mail</span>
                  <span>Email: <strong className="text-white">{CHURCH_INFO.email}</strong></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <a
                href={`tel:${CHURCH_INFO.hotlines[0]}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#fe932c] text-[#070d1a] font-headline text-xs sm:text-sm font-bold uppercase tracking-wider hover:brightness-105 transition-all shadow"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                <span>Call Central Helpline</span>
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-headline text-xs sm:text-sm font-semibold transition-all text-center"
              >
                <span>Send a Message</span>
                <span className="material-symbols-outlined text-sm">east</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Global Footer */}
      <Footer />

      {/* 7. Live Stream Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* 8. Floating Social Channels Widget */}
      <FloatingSocialWidget />
    </main>
  );
}
