"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CHURCH_INFO } from "@/data/churchData";

interface NavbarProps {
  onOpenVideo?: () => void;
}

export default function Navbar({ onOpenVideo }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. TOP GLOBAL NOTIFICATION BAR */}
      <div className="bg-[#070d1a] text-[#faf9f6] border-b border-[#f59e0b]/20 py-2 px-3 sm:px-8 relative z-50 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-end gap-3 text-[11px] sm:text-[12px]">
          {/* Direct Helpline */}
          <a
            className="inline-flex items-center gap-1.5 text-[#fbbf24] hover:text-white transition-colors"
            href={`tel:${CHURCH_INFO.hotlines[0]}`}
          >
            <span className="material-symbols-outlined text-[15px]">call</span>
            <span>{CHURCH_INFO.hotlines[0]}</span>
          </a>
          <span className="hidden md:inline text-gray-500/50">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-[#faf9f6]/90">
            <span className="material-symbols-outlined text-[15px] text-[#f59e0b]">location_on</span>
            <span>Plot 11, Kudirat Abiola Way, Alausa, Ikeja</span>
          </div>
          <a
            className="inline-flex items-center gap-1 bg-[#f59e0b]/20 hover:bg-[#f59e0b]/30 text-[#fbbf24] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded border border-[#f59e0b]/40 transition-all font-semibold"
            href="#visit-planner"
          >
            <span className="material-symbols-outlined text-[13px]">favorite</span>
            <span>Prayer Line</span>
          </a>
        </div>
      </div>

      {/* 2. STICKY APP BAR */}
      <header className="bg-[#faf9f6]/95 backdrop-blur-md sticky top-0 z-40 border-b border-[#c5c6cf]/30 shadow-sm transition-all">
        <div className="px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16 sm:h-20">
          {/* Brand Logo & Church Name */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0f2042] border border-[#f59e0b]/40 flex items-center justify-center p-1 sm:p-1.5 shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
              <Image
                src="/images/gpc_logo.png"
                alt="Gospel Pillars Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain filter drop-shadow"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-extrabold text-[#000922] text-sm sm:text-base lg:text-lg tracking-wide uppercase leading-tight group-hover:text-[#904d00] transition-colors">
                {CHURCH_INFO.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#904d00] tracking-wider sm:tracking-widest font-bold uppercase">
                {CHURCH_INFO.cathedralName} • Ikeja
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold">
            <a className="text-[#45464e] hover:text-[#904d00] pb-1 transition-colors" href="#schedule">
              Services
            </a>
            <a className="text-[#45464e] hover:text-[#904d00] pb-1 transition-colors" href="#vision">
              Vision &amp; Mandate
            </a>
            <a className="text-[#45464e] hover:text-[#904d00] pb-1 transition-colors" href="#prophet">
              The Prophet
            </a>
            <a className="text-[#45464e] hover:text-[#904d00] pb-1 transition-colors" href="#giving">
              Giving
            </a>
            <a className="text-[#45464e] hover:text-[#904d00] pb-1 transition-colors" href="#campus-location">
              Directions
            </a>
          </nav>

          {/* Trailing Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Watch Live Button */}
            <button
              onClick={onOpenVideo}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-[#e5eeff] text-[#000922] font-semibold text-xs sm:text-sm hover:bg-[#000922] hover:text-[#faf9f6] transition-all active:scale-95 border border-[#c5c6cf]/40"
              aria-label="Watch Live Broadcast"
            >
              <span className="material-symbols-outlined text-[#f59e0b] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                play_circle
              </span>
              <span className="hidden sm:inline">Watch Live</span>
            </button>

            {/* Plan a Visit CTA (Hidden on tiny mobile to avoid header squeezing, accessible via drawer & hero) */}
            <a
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-[#fe932c] to-[#f59e0b] text-[#070d1a] font-headline font-bold text-xs sm:text-sm uppercase tracking-wider shadow hover:brightness-105 active:scale-95 transition-all"
              href="#visit-planner"
            >
              <span>Plan a Visit</span>
              <span className="material-symbols-outlined text-sm hidden lg:inline">east</span>
            </a>

            {/* Mobile Drawer Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-[#000922] hover:bg-[#e5eeff] focus:outline-none"
              aria-label="Open Mobile Menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. MOBILE SLIDE-OUT DRAWER */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-[#070d1a]/70 backdrop-blur-sm z-50 transition-opacity"
        />
      )}
      <div
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-[#070d1a] text-[#faf9f6] z-50 transform transition-transform duration-300 ease-in-out p-6 flex flex-col justify-between shadow-2xl border-l border-[#f59e0b]/20 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Image src="/images/gpc_logo.png" alt="Logo" width={32} height={32} className="object-contain" />
              <span className="font-headline font-bold text-sm text-[#fbbf24]">Gospel Pillars Ikeja</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#d3e4fe] hover:text-white"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-5 font-semibold text-base">
            <a
              href="#schedule"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#d3e4fe] hover:text-[#fbbf24] transition-colors"
            >
              Weekly Services
            </a>
            <a
              href="#vision"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#d3e4fe] hover:text-[#fbbf24] transition-colors"
            >
              Vision &amp; Mandate
            </a>
            <a
              href="#prophet"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#d3e4fe] hover:text-[#fbbf24] transition-colors"
            >
              The Prophet
            </a>
            <a
              href="#giving"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#d3e4fe] hover:text-[#fbbf24] transition-colors"
            >
              Giving &amp; Tithes
            </a>
            <a
              href="#visit-planner"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#d3e4fe] hover:text-[#fbbf24] transition-colors"
            >
              Plan Your Visit
            </a>
            <a
              href="#campus-location"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#d3e4fe] hover:text-[#fbbf24] transition-colors"
            >
              Campus Directions
            </a>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10">
          <p className="text-xs text-[#fbbf24] font-bold uppercase tracking-wider mb-2">Pastoral Helpline</p>
          <a href={`tel:${CHURCH_INFO.hotlines[0]}`} className="text-base font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f59e0b] text-lg">call</span>
            <span>{CHURCH_INFO.hotlines[0]}</span>
          </a>
          <p className="text-[11px] text-[#d3e4fe]/70 mt-2">{CHURCH_INFO.address}</p>
        </div>
      </div>
    </>
  );
}
