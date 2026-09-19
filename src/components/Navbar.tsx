"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CHURCH_INFO, MEDIA_LINKS } from "@/data/churchData";

interface NavbarProps {
  onOpenVideo?: () => void;
}

export default function Navbar({ onOpenVideo }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. TOP GLOBAL NOTIFICATION BAR */}
      <div className="bg-[#070d1a] text-[#faf9f6] border-b border-[#f59e0b]/20 py-2 px-3 sm:px-8 relative z-50 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-end gap-3.5 text-[11px] sm:text-[12px]">
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
          <span className="hidden sm:inline text-gray-500/50">|</span>
          {/* Official Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={MEDIA_LINKS.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d3e4fe] hover:text-[#1877F2] transition-colors p-0.5"
              aria-label="Facebook"
              title="Follow on Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href={MEDIA_LINKS.instagramPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d3e4fe] hover:text-[#E4405F] transition-colors p-0.5"
              aria-label="Instagram"
              title="Follow on Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a
              href={MEDIA_LINKS.tiktokPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d3e4fe] hover:text-[#25F4EE] transition-colors p-0.5"
              aria-label="TikTok"
              title="Follow on TikTok"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.9-4.47V8.58a8.27 8.27 0 0 0 4.87 1.57V6.69z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY APP BAR */}
      <header className="bg-[#faf9f6]/95 backdrop-blur-md sticky top-0 z-40 border-b border-[#c5c6cf]/30 shadow-sm transition-all">
        <div className="px-4 sm:px-6 lg:px-16 flex justify-between items-center h-16 sm:h-20">
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
                {CHURCH_INFO.arkName} • Ikeja
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
            <a className="text-[#45464e] hover:text-[#904d00] pb-1 transition-colors" href="#children">
              Children &amp; Teens
            </a>
            <a className="text-[#45464e] hover:text-[#904d00] pb-1 transition-colors" href="#gallery">
              Gallery
            </a>
            <a className="text-[#45464e] hover:text-[#904d00] pb-1 transition-colors" href="#giving">
              Giving
            </a>
            <a className="text-[#45464e] hover:text-[#904d00] pb-1 transition-colors" href="#contact">
              Contact &amp; Map
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
              href="#children"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#d3e4fe] hover:text-[#fbbf24] transition-colors"
            >
              Children &amp; Teens
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#d3e4fe] hover:text-[#fbbf24] transition-colors"
            >
              Gallery
            </a>
            <a
              href="#giving"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#d3e4fe] hover:text-[#fbbf24] transition-colors"
            >
              Giving &amp; Tithes
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#d3e4fe] hover:text-[#fbbf24] transition-colors"
            >
              Contact &amp; Directions
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
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-3">
            <a
              href={MEDIA_LINKS.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#d3e4fe] hover:text-[#1877F2] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href={MEDIA_LINKS.instagramPage}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#d3e4fe] hover:text-[#E4405F] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a
              href={MEDIA_LINKS.tiktokPage}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#d3e4fe] hover:text-[#25F4EE] transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.9-4.47V8.58a8.27 8.27 0 0 0 4.87 1.57V6.69z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
