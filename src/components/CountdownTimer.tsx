"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    serviceName: "Sunday Service (8:00 AM & 9:15 AM)"
  });

  useEffect(() => {
    function getNextServiceTarget() {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 3 = Wednesday
      const target = new Date(now);
      let serviceTitle = "Sunday Service (8:00 AM & 9:15 AM)";

      // If Sunday before 8:00 AM
      if (day === 0 && now.getHours() < 8) {
        target.setHours(8, 0, 0, 0);
        return { target, serviceTitle: "Sunday Service (1st Service: 8:00 AM)" };
      }
      // If Wednesday before 7:00 PM
      if (day === 3 && now.getHours() < 19) {
        target.setHours(19, 0, 0, 0);
        return { target, serviceTitle: "Wednesday Word & Miracle Encounter (7:00 PM)" };
      }

      let daysToWed = (3 - day + 7) % 7;
      let daysToSun = (7 - day) % 7;

      if (daysToWed === 0 && now.getHours() >= 19) daysToWed = 7;
      if (daysToSun === 0 && now.getHours() >= 12) daysToSun = 7;

      if (daysToWed < daysToSun) {
        target.setDate(now.getDate() + daysToWed);
        target.setHours(19, 0, 0, 0);
        serviceTitle = "Wednesday Word & Miracle Encounter (7:00 PM)";
      } else {
        target.setDate(now.getDate() + daysToSun);
        target.setHours(8, 0, 0, 0);
        serviceTitle = "Sunday Service (8:00 AM & 9:15 AM)";
      }

      return { target, serviceTitle };
    }

    let { target, serviceTitle } = getNextServiceTarget();

    function update() {
      const now = new Date();
      let diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        const next = getNextServiceTarget();
        target = next.target;
        serviceTitle = next.serviceTitle;
        diff = target.getTime() - now.getTime();
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: d.toString().padStart(2, "0"),
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
        serviceName: serviceTitle
      });
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 sm:mt-16 p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-[#0f2042] via-[#070d1a] to-[#0f2042] border border-[#f59e0b]/30 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-3 sm:gap-4 text-center lg:text-left">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 flex items-center justify-center text-[#fbbf24] flex-shrink-0">
            <span className="material-symbols-outlined text-xl sm:text-2xl">timer</span>
          </div>
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#fbbf24] uppercase tracking-wider sm:tracking-widest block">
              Next Upcoming Gathering
            </span>
            <h3 className="font-headline text-base sm:text-xl font-bold text-[#faf9f6]">
              {timeLeft.serviceName}
            </h3>
          </div>
        </div>

        {/* Digits Display */}
        <div className="flex items-center gap-1.5 sm:gap-4 font-headline">
          <div className="flex flex-col items-center bg-[#070d1a]/80 border border-[#f59e0b]/30 rounded-xl px-2.5 sm:px-4 py-2 min-w-[54px] sm:min-w-[70px]">
            <span className="text-xl sm:text-3xl font-extrabold text-[#fbbf24]">{timeLeft.days}</span>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#d3e4fe]">Days</span>
          </div>
          <span className="text-[#f59e0b] font-bold text-lg sm:text-xl">:</span>
          <div className="flex flex-col items-center bg-[#070d1a]/80 border border-[#f59e0b]/30 rounded-xl px-2.5 sm:px-4 py-2 min-w-[54px] sm:min-w-[70px]">
            <span className="text-xl sm:text-3xl font-extrabold text-[#fbbf24]">{timeLeft.hours}</span>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#d3e4fe]">Hours</span>
          </div>
          <span className="text-[#f59e0b] font-bold text-lg sm:text-xl">:</span>
          <div className="flex flex-col items-center bg-[#070d1a]/80 border border-[#f59e0b]/30 rounded-xl px-2.5 sm:px-4 py-2 min-w-[54px] sm:min-w-[70px]">
            <span className="text-xl sm:text-3xl font-extrabold text-[#fbbf24]">{timeLeft.minutes}</span>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#d3e4fe]">Mins</span>
          </div>
          <span className="text-[#f59e0b] font-bold text-lg sm:text-xl">:</span>
          <div className="flex flex-col items-center bg-[#070d1a]/80 border border-[#f59e0b]/30 rounded-xl px-2.5 sm:px-4 py-2 min-w-[54px] sm:min-w-[70px]">
            <span className="text-xl sm:text-3xl font-extrabold text-[#fbbf24]">{timeLeft.seconds}</span>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#d3e4fe]">Secs</span>
          </div>
        </div>

        <a
          href="#visit-planner"
          className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#f59e0b] text-[#070d1a] font-headline font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all flex-shrink-0"
        >
          Set Reminder
        </a>
      </div>
    </div>
  );
}
