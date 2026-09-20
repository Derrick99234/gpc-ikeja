"use client";

import { useEffect, useState } from "react";
import {
  downloadChurchCalendarICS,
  getGoogleCalendarSundayUrl,
  getGoogleCalendarSaturdayUrl,
  getOutlookCalendarSundayUrl
} from "@/utils/calendar";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
      setDownloaded(false);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    downloadChurchCalendarICS();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[#070d1a]/85 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#0b162c] rounded-2xl overflow-hidden border border-[#f59e0b]/40 shadow-2xl p-6 sm:p-8 animate-scale-in text-[#faf9f6]"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/20 border border-[#f59e0b]/40 flex items-center justify-center text-[#fbbf24] shadow">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                calendar_month
              </span>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-[#faf9f6]">
                Add to Your Calendar
              </h3>
              <p className="text-xs text-[#d3e4fe]/80">
                Weekly reminders for Sunday service at Gospel Pillars Church Ikeja
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#d3e4fe] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Scheduled Reminders Breakdown */}
        <div className="space-y-3 mb-6">
          {/* Saturday Reminder */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#070d1a] border border-white/10 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#f59e0b]/15 text-[#fbbf24] flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-xl">notifications_active</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <span className="text-[11px] uppercase font-bold text-[#fbbf24] tracking-wider">
                  Saturday Reminder • 6:00 PM WAT
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-[#d3e4fe]">
                  Weekly
                </span>
              </div>
              <h4 className="font-headline text-sm font-bold text-[#faf9f6]">
                Tomorrow is Sunday Service
              </h4>
              <p className="text-xs text-[#d3e4fe]/75 mt-0.5">
                Alerts you the evening before so you and your family can prepare for Sunday service.
              </p>
            </div>
          </div>

          {/* Sunday Service */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#070d1a] border border-[#f59e0b]/30 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#904d00]/25 text-[#f59e0b] flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                church
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <span className="text-[11px] uppercase font-bold text-[#f59e0b] tracking-wider">
                  Sunday Services • 8:00 AM &amp; 9:15 AM WAT
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f59e0b]/20 text-[#fbbf24] font-semibold">
                  Weekly
                </span>
              </div>
              <h4 className="font-headline text-sm font-bold text-[#faf9f6]">
                Sunday Service
              </h4>
              <p className="text-xs text-[#d3e4fe]/75 mt-0.5">
                First Service: 8:00 AM | Second Service: 9:15 AM at Gospel Pillars Church, Alausa, Ikeja.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          {/* Option 1: Direct Download (Apple, Outlook, Android) */}
          <button
            onClick={handleDownload}
            className={`w-full py-3.5 px-5 rounded-xl font-headline text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all active:scale-98 shadow-lg cursor-pointer ${
              downloaded
                ? "bg-emerald-600 text-white border border-emerald-500"
                : "bg-gradient-to-r from-[#f59e0b] to-[#fe932c] hover:brightness-110 text-[#070d1a]"
            }`}
          >
            <span className="material-symbols-outlined text-lg">
              {downloaded ? "done_all" : "download"}
            </span>
            <span>
              {downloaded ? "Calendar File Downloaded!" : "Add to Apple Calendar / Outlook (.ics)"}
            </span>
          </button>

          {/* Option 2: Google Calendar */}
          <a
            href={getGoogleCalendarSundayUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-[#faf9f6] font-headline text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 transition-all active:scale-98 cursor-pointer"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Add to Google Calendar</span>
          </a>

          {/* Google Calendar Saturday Reminder Sub-link */}
          <div className="text-center pt-1">
            <a
              href={getGoogleCalendarSaturdayUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#fbbf24] hover:underline inline-flex items-center gap-1"
            >
              <span>Also add Saturday reminder to Google Calendar</span>
              <span className="material-symbols-outlined text-[13px]">open_in_new</span>
            </a>
          </div>

          {/* Option 3: Outlook Live Web */}
          <a
            href={getOutlookCalendarSundayUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#d3e4fe] font-headline text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-[#0078D4]">mail</span>
            <span>Add via Outlook Web / Microsoft 365</span>
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-[11px] text-[#d3e4fe]/60 text-center mt-5">
          Works seamlessly with Apple Calendar (iOS / Mac), Google Calendar, Outlook, and Android.
        </p>
      </div>
    </div>
  );
}
