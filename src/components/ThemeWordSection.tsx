"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ThemeWordSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-[#0b0907] text-[#faf9f6] relative overflow-hidden border-b border-[#d4af37]/20" id="prophetic-theme">
      {/* Subtle Background Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse-aura pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#904d00]/15 rounded-full blur-3xl animate-pulse-aura pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Word for the Year Card (Slides in from Left) */}
          <div
            style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
            className={`lg:col-span-7 flex flex-col items-start transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Tag / Label above card */}
            <div className="flex items-center gap-2.5 text-[#d4af37] text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold mb-4 sm:mb-5">
              <span className="text-[8px] sm:text-[9px] animate-pulse">◆</span>
              <span>WORD FOR THE YEAR - 2026</span>
            </div>

            {/* Outlined Theme Card */}
            <div className="w-full rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 p-5 sm:p-8 lg:p-12 bg-[#12100d]/80 backdrop-blur-sm shadow-2xl relative group transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#f3e5ab] leading-[1.2] mb-6 sm:mb-8 tracking-tight group-hover:text-[#fbbf24] transition-colors">
                Glory, Overflow and Dominion.
              </h2>

              {/* Scripture Blockquote */}
              <div className="border-l-2 border-[#d4af37]/70 pl-4 sm:pl-7 space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-base lg:text-[17px] text-[#e8ded1]/90 italic font-serif leading-relaxed">
                  &ldquo;And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.&rdquo;
                </p>
                <p className="text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#d4af37] font-semibold pt-1">
                  — GENESIS 1:26
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 2026 Theme Artwork Poster (Slides in from Right) */}
          <div
            style={{ transitionDelay: isVisible ? "250ms" : "0ms" }}
            className={`lg:col-span-5 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-[0.96]"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/70 bg-[#12100d] max-w-[460px] w-full group animate-float-subtle transition-all duration-500 hover:scale-[1.02]">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/theme_2026_glory_overflow_dominion.jpg"
                  alt="2026 The Year of GOD - Glory, Overflow & Dominion (Genesis 1:26)"
                  fill
                  priority
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                />
              </div>

              {/* Bottom Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0907]/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
