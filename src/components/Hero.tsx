import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import { CHURCH_INFO, STATS } from "@/data/churchData";

interface HeroProps {
  onOpenVideo?: () => void;
}

export default function Hero({ onOpenVideo }: HeroProps) {
  return (
    <section className="relative bg-[#070d1a] text-[#faf9f6] overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Atmosphere Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#f59e0b]/20 blur-[140px] rounded-full"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#0f2042] blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-[#904d00]/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#fbbf24_1px,transparent_1px),linear-gradient(to_bottom,#fbbf24_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Vision & Message */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-[#fbbf24]/90 text-[11px] sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase">
              <span className="w-6 sm:w-8 h-[2px] bg-[#f59e0b]"></span>
              <span>{CHURCH_INFO.slogans.join(" • ")}</span>
            </div>

            <h1 className="font-headline text-2xl sm:text-4xl lg:text-6xl font-black text-[#faf9f6] tracking-tight leading-tight">
              Experience the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#fe932c]">
                Tangible Glory
              </span>{" "}
              of God in The Ark of Light
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#d3e4fe] font-normal max-w-2xl leading-relaxed">
              Welcome to Gospel Pillars Church Ikeja — our global headquarters where God dwells, broken lives are redeemed, supernatural signs and wonders are regular experiences, and believers step into generational dominion.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#fe932c] text-[#070d1a] font-headline text-sm sm:text-base font-bold tracking-wide uppercase hover:shadow-lg hover:shadow-[#f59e0b]/25 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto text-center"
                href="#schedule"
              >
                <span className="material-symbols-outlined text-[#070d1a] text-lg sm:text-xl">calendar_month</span>
                <span>Join Us This Sunday</span>
              </a>
              <button
                onClick={onOpenVideo}
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#0f2042]/80 hover:bg-[#0f2042] border border-[#f59e0b]/30 text-[#faf9f6] font-headline text-sm sm:text-base font-semibold transition-all backdrop-blur-md hover:scale-[1.02] active:scale-95 w-full sm:w-auto text-center"
              >
                <span className="material-symbols-outlined text-[#fbbf24] text-lg sm:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_arrow
                </span>
                <span>Watch Live Stream</span>
              </button>
            </div>

            {/* Service times pill */}
            <div className="pt-1 flex items-center gap-2 text-[#d3e4fe]/80 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-[#f59e0b] text-base sm:text-lg">schedule</span>
              <span>Sunday Celebrations: <strong>8:00 AM</strong> &amp; <strong>9:15 AM</strong> WAT</span>
            </div>
          </div>

          {/* Right Column: Cathedral Visual */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[#f59e0b]/40 via-[#0f2042] to-[#fbbf24]/30 blur-sm"></div>
            <div className="relative bg-[#0f2042] rounded-2xl overflow-hidden border border-[#f59e0b]/30 shadow-2xl">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden group">
                <Image
                  src="/images/ark_of_light_cathedral.webp"
                  alt="The Ark of Light for All Nations Ikeja Cathedral"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a] via-[#070d1a]/30 to-transparent"></div>

                <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#070d1a]/90 border border-[#f59e0b]/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-[11px] font-bold text-[#faf9f6] uppercase tracking-wider">Ikeja HQ</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#070d1a]/90 border border-white/10 backdrop-blur-md">
                  <p className="text-[#fbbf24] text-xs uppercase font-bold tracking-wider mb-0.5">
                    10,000-Seat Global Cathedral
                  </p>
                  <h4 className="text-[#faf9f6] font-headline text-base font-bold">
                    {CHURCH_INFO.cathedralName}
                  </h4>
                  <p className="text-[#d3e4fe] text-xs mt-1">
                    {CHURCH_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Countdown Component */}
        <CountdownTimer />

        {/* Stats Ribbon */}
        {/* <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-headline text-3xl sm:text-4xl font-extrabold text-[#fbbf24]">{stat.value}</span>
              <span className="text-xs sm:text-sm text-[#faf9f6] uppercase tracking-wider font-semibold">{stat.label}</span>
              <span className="text-xs text-[#d3e4fe]/70 mt-0.5">{stat.sub}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
