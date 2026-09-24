"use client";

import Image from "next/image";
import { CHURCH_INFO, MEDIA_LINKS } from "@/data/churchData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <footer ref={ref} className="bg-[#070d1a] text-[#faf9f6] border-t border-white/10 overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          {/* Col 1: Brand & Theme (Slides up) */}
          <div
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
            className={`md:col-span-7 flex flex-col space-y-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0f2042] border border-[#f59e0b]/40 flex items-center justify-center p-1.5 shadow-md">
                <Image
                  src="/images/gpc_logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-headline font-extrabold text-[#fbbf24] text-lg uppercase tracking-wider">
                {CHURCH_INFO.fullName}
              </span>
            </div>
            <p className="text-xs text-[#f59e0b] uppercase tracking-wider font-bold">
              {CHURCH_INFO.shortName}
            </p>
            <p className="text-xs sm:text-sm text-[#d3e4fe] max-w-md leading-relaxed">
              Mottos: <em>&ldquo;{CHURCH_INFO.slogans[0]}&rdquo;</em> &amp; <em>&ldquo;{CHURCH_INFO.slogans[1]}&rdquo;</em>{" "}
              An apostolic and prophetic commission under the visionary leadership of Prophet Dr. Isaiah Macwealth and Prophetess Lily Anita Macwealth.
            </p>
            <div className="pt-2 text-xs text-[#d3e4fe]">
              <span className="text-[#faf9f6] font-bold">2026 Declaration:</span>{" "}
              <span className="italic text-[#fbbf24]">&ldquo;{CHURCH_INFO.themeTitle}&rdquo; ({CHURCH_INFO.themeScripture})</span>
            </div>
          </div>

          {/* Col 2: Campus HQ & Inquiries (Slides up) */}
          <div
            style={{ transitionDelay: isVisible ? "250ms" : "0ms" }}
            className={`md:col-span-5 flex flex-col space-y-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h4 className="font-headline text-sm font-bold text-[#faf9f6] uppercase tracking-wider">
              {CHURCH_INFO.fullName}
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#d3e4fe]">
              <span className="material-symbols-outlined text-[#fbbf24] text-base mt-0.5">location_on</span>
              <span>{CHURCH_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#d3e4fe]">
              <span className="material-symbols-outlined text-[#fbbf24] text-base">call</span>
              <a className="hover:text-[#fbbf24] transition-colors" href={`tel:${CHURCH_INFO.hotlines[0]}`}>
                {CHURCH_INFO.hotlines.slice(0, 2).join(" / ")}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#d3e4fe]">
              <span className="material-symbols-outlined text-[#fbbf24] text-base">mail</span>
              <a className="hover:text-[#fbbf24] transition-colors" href={`mailto:${CHURCH_INFO.email}`}>
                {CHURCH_INFO.email}
              </a>
            </div>
            <div className="pt-3 flex items-center gap-2.5">
              <a
                href={MEDIA_LINKS.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0f2042] border border-white/10 flex items-center justify-center text-[#d3e4fe] hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 transition-all shadow hover:scale-110 active:scale-95"
                aria-label="Facebook"
                title="Follow on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href={MEDIA_LINKS.instagramPage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0f2042] border border-white/10 flex items-center justify-center text-[#d3e4fe] hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10 transition-all shadow hover:scale-110 active:scale-95"
                aria-label="Instagram"
                title="Follow on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a
                href={MEDIA_LINKS.tiktokPage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0f2042] border border-white/10 flex items-center justify-center text-[#d3e4fe] hover:text-white hover:border-[#25F4EE]/50 hover:bg-[#25F4EE]/10 transition-all shadow hover:scale-110 active:scale-95"
                aria-label="TikTok"
                title="Follow on TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.9-4.47V8.58a8.27 8.27 0 0 0 4.87 1.57V6.69z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div
          style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          className={`pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center text-xs text-[#d3e4fe] text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <p>© {CHURCH_INFO.themeYear} Gospel Pillars Church Ikeja. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
