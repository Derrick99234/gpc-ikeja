"use client";

import { useEffect } from "react";
import { MEDIA_LINKS } from "@/data/churchData";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl = MEDIA_LINKS.liveStreamEmbed }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[#070d1a]/85 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#070d1a] rounded-2xl overflow-hidden border border-[#f59e0b]/40 shadow-2xl p-4 animate-scale-in"
      >
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
          <span className="font-headline text-sm font-bold text-[#fbbf24]">
            Live Broadcast &amp; Ministration
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#d3e4fe] hover:text-white"
            aria-label="Close video"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black">
          <iframe
            className="w-full h-full"
            src={`${videoUrl}?autoplay=1`}
            title="Live Service Modal"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
