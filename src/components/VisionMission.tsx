import { CHURCH_VISION_MISSION } from "@/data/churchData";

export default function VisionMission() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#faf9f6] border-y border-[#c5c6cf]/30" id="vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-[#000922] tracking-tight">
            Vision, Mission &amp; Divine Mandate
          </h2>
        </div>

        {/* Vision & Mission Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Vision Card */}
          <div className="relative rounded-2xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#0f2042] via-[#070d1a] to-[#0f2042] text-[#faf9f6] border border-[#f59e0b]/30 shadow-xl overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#f59e0b]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/30 text-[#fbbf24] text-xs uppercase font-bold tracking-wider">
                  Our Vision
                </span>
                <span className="material-symbols-outlined text-[#fbbf24] text-2xl sm:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  visibility
                </span>
              </div>
              <blockquote className="text-base sm:text-lg lg:text-xl text-[#faf9f6] mt-18 font-medium leading-relaxed border-l-2 border-[#f59e0b] pl-4 pt-1">
                &ldquo;{CHURCH_VISION_MISSION.vision}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Mission & Purpose Card */}
          <div className="relative rounded-2xl p-6 sm:p-8 lg:p-10 bg-white border border-[#c5c6cf]/40 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#e5eeff] border border-[#c5c6cf]/30 text-[#000922] text-xs uppercase font-bold tracking-wider">
                    Our Mission
                  </span>
                  <span className="material-symbols-outlined text-[#904d00] text-2xl sm:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    church
                  </span>
                </div>
                <blockquote className="text-base sm:text-lg lg:text-xl font-bold text-[#000922] leading-relaxed border-l-2 border-[#904d00] pl-4">
                  &ldquo;{CHURCH_VISION_MISSION.mission}&rdquo;
                </blockquote>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#eff4ff] border border-[#c5c6cf]/30">
                <span className="text-xs uppercase font-bold text-[#904d00] tracking-wider block mb-2">
                  Our Purpose
                </span>
                <p className="text-sm sm:text-base text-[#45464e] leading-relaxed">
                  &ldquo;{CHURCH_VISION_MISSION.purpose}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Priorities Section */}
        <div className="mb-10 sm:mb-14">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#000922]">Our Priorities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {CHURCH_VISION_MISSION.priorities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#c5c6cf]/40 shadow-sm hover:border-[#904d00]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="mb-4">
                  <span className="font-headline text-2xl font-extrabold text-[#904d00]/40">{item.number}</span>
                </div>
                <p className="font-headline text-base sm:text-lg font-bold text-[#000922] leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pattern, Mandate & Resolution */}
        <div className="space-y-6 sm:space-y-8">
          {/* Our Pattern */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#c5c6cf]/40 shadow-sm">
            <span className="px-3 py-1 rounded-full bg-[#e5eeff] text-[#000922] text-xs uppercase font-bold tracking-wider inline-block mb-3">
              Our Pattern
            </span>
            <blockquote className="font-headline text-base sm:text-lg lg:text-xl font-semibold text-[#000922] leading-relaxed border-l-2 border-[#904d00] pl-4">
              &ldquo;{CHURCH_VISION_MISSION.pattern}&rdquo;
            </blockquote>
          </div>

          {/* Mandate & Resolution Ribbon */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0f2042] via-[#070d1a] to-[#0f2042] p-6 sm:p-8 lg:p-10 border border-[#f59e0b]/30 shadow-xl text-[#faf9f6]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Left: Mandate */}
              <div className="lg:col-span-7">
                <span className="px-3 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/30 text-[#fbbf24] text-xs uppercase font-bold tracking-wider inline-block mb-4">
                  Our Mandate
                </span>
                <div className="space-y-3 sm:space-y-4">
                  {CHURCH_VISION_MISSION.mandate.map((m, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/20 text-[#fbbf24] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-xl">{m.icon}</span>
                      </div>
                      <span className="font-headline font-bold text-base sm:text-lg text-[#faf9f6]">
                        {m.target}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Resolution */}
              <div className="lg:col-span-5 h-full flex flex-col justify-center p-6 sm:p-8 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-center lg:text-left">
                <span className="text-xs uppercase tracking-widest text-[#fbbf24] font-bold block mb-3">
                  Resolution
                </span>
                <blockquote className="font-headline text-lg sm:text-xl lg:text-2xl font-bold text-[#faf9f6] italic leading-snug border-l-2 border-[#f59e0b] pl-4">
                  &ldquo;{CHURCH_VISION_MISSION.resolution}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
