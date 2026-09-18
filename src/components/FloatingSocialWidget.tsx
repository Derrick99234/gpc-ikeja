"use client";

import { useState, useEffect, useRef } from "react";
import { MEDIA_LINKS } from "@/data/churchData";

interface SocialChannel {
  name: string;
  url: string;
  bgColor: string;
  hoverShadow: string;
  iconSvg: React.ReactNode;
}

const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    name: "WhatsApp",
    url: "https://wa.me/2348090111194?text=Hello%20Gospel%20Pillars%20Church%20Ikeja%2C%20I%20would%20like%20to%20connect.",
    bgColor: "bg-[#25D366] text-white",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]",
    iconSvg: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    )
  },
  {
    name: "Facebook",
    url: MEDIA_LINKS.facebookPage,
    bgColor: "bg-[#1877F2] text-white",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(24,119,242,0.6)]",
    iconSvg: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: "TikTok",
    url: MEDIA_LINKS.tiktokPage,
    bgColor: "bg-[#070d1a] border border-[#25F4EE]/50 text-white",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(37,244,238,0.6)]",
    iconSvg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.9-4.47V8.58a8.27 8.27 0 0 0 4.87 1.57V6.69z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    url: MEDIA_LINKS.instagramPage,
    bgColor: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(220,39,67,0.6)]",
    iconSvg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  }
];

export default function FloatingSocialWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-center"
    >
      {/* Vertical Stack of Social Icons (Fly Upwards above the button) */}
      <div className="flex flex-col-reverse items-center gap-3 mb-3 pointer-events-none">
        {SOCIAL_CHANNELS.map((item, index) => {
          // Stagger delays based on position: closest to button opens first
          const delayStyle = isOpen
            ? { transitionDelay: `${index * 50}ms` }
            : { transitionDelay: `${(SOCIAL_CHANNELS.length - 1 - index) * 35}ms` };

          return (
            <div
              key={item.name}
              style={delayStyle}
              className={`relative flex items-center group transition-all duration-300 ease-out transform ${
                isOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-50 translate-y-8 pointer-events-none"
              }`}
            >
              {/* Subtle hover tooltip on the left side of the icon */}
              <span className="pointer-events-none absolute right-full mr-3.5 px-2.5 py-1 rounded-lg bg-[#070d1a]/95 border border-[#f59e0b]/40 text-white text-xs font-semibold whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-xl backdrop-blur-md">
                {item.name}
              </span>

              {/* Social Icon Button */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                title={item.name}
                className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-115 active:scale-95 ${item.bgColor} ${item.hoverShadow}`}
              >
                {item.iconSvg}
              </a>
            </div>
          );
        })}
      </div>

      {/* Main Floating Action Button (Chat icon turns to Cancel) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close social channels" : "Open social channels"}
        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-[0_10px_35px_rgba(0,0,0,0.5)] border-2 transition-all duration-300 active:scale-90 focus:outline-none focus:ring-4 focus:ring-[#f59e0b]/50 cursor-pointer ${
          isOpen
            ? "bg-[#0f2042] border-[#f59e0b] shadow-[0_0_25px_rgba(245,158,11,0.5)]"
            : "bg-gradient-to-tr from-[#000922] via-[#0f2042] to-[#904d00] border-[#f59e0b]/70 hover:border-[#fbbf24] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:scale-105"
        }`}
      >
        {/* Animated Icon: Chat smoothly flips into Cancel / Close */}
        <span
          className={`material-symbols-outlined text-2xl sm:text-3xl transition-all duration-300 transform select-none ${
            isOpen
              ? "rotate-90 text-[#fbbf24]"
              : "rotate-0 text-white"
          }`}
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {isOpen ? "close" : "chat"}
        </span>
      </button>
    </div>
  );
}
