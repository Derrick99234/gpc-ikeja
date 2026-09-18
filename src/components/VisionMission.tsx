import { CHURCH_VISION_MISSION } from "@/data/churchData";

export default function VisionMission() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#faf9f6] border-y border-[#c5c6cf]/30" id="vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#904d00]/10 text-[#904d00] text-xs uppercase tracking-widest font-bold mb-3 border border-[#904d00]/20">
            <span className="material-symbols-outlined text-sm">flag</span>
            <span>Apostolic &amp; Prophetic Mandate</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-[#000922] tracking-tight">
            Our Vision, Mission &amp; Divine Mandate
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#45464e] mt-2 sm:mt-3 leading-relaxed">
            Rooted in holiness and radical consecration, Gospel Pillars International Churches exists to awaken nations and prepare the earth for the return of Yeshua.
          </p>
        </div>

        {/* Vision & Mission Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Vision Card */}
          <div className="relative rounded-2xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#0f2042] via-[#070d1a] to-[#0f2042] text-[#faf9f6] border border-[#f59e0b]/30 shadow-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#f59e0b]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col justify-between h-full space-y-5 sm:space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/30 text-[#fbbf24] text-xs uppercase font-bold tracking-wider">
                    Our Vision
                  </span>
                  <span className="material-symbols-outlined text-[#fbbf24] text-2xl sm:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    visibility
                  </span>
                </div>
                <h3 className="font-headline text-lg sm:text-xl lg:text-2xl font-bold text-[#faf9f6] mb-3 sm:mb-4">
                  Revealing JEHOVAH &amp; YESHUA
                </h3>
                <blockquote className="text-sm sm:text-base lg:text-lg text-[#d3e4fe] italic leading-relaxed border-l-2 border-[#f59e0b] pl-4">
                  &ldquo;{CHURCH_VISION_MISSION.vision}&rdquo;
                </blockquote>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-[#fbbf24] font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>Uncompromising Christ-Centered Revelation</span>
              </div>
            </div>
          </div>

          {/* Mission & Purpose Card */}
          <div className="relative rounded-2xl p-6 sm:p-8 lg:p-10 bg-white border border-[#c5c6cf]/40 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group">
            <div className="relative z-10 space-y-5 sm:space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#e5eeff] border border-[#c5c6cf]/30 text-[#000922] text-xs uppercase font-bold tracking-wider">
                    Our Mission
                  </span>
                  <span className="material-symbols-outlined text-[#904d00] text-2xl sm:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    church
                  </span>
                </div>
                <h3 className="font-headline text-lg sm:text-xl lg:text-2xl font-bold text-[#000922] mb-2 sm:mb-3">
                  Holiness &amp; Consecration
                </h3>
                <p className="text-sm sm:text-base text-[#45464e] font-semibold mb-3 sm:mb-4 text-[#904d00]">
                  &ldquo;{CHURCH_VISION_MISSION.mission}&rdquo;
                </p>
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#eff4ff] border border-[#c5c6cf]/30">
                  <h4 className="text-xs uppercase font-bold text-[#000922] mb-1">Our Divine Purpose</h4>
                  <p className="text-xs sm:text-sm text-[#45464e] leading-relaxed">
                    &ldquo;{CHURCH_VISION_MISSION.purpose}&rdquo;
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#c5c6cf]/30 text-xs text-[#45464e] font-semibold flex items-center justify-between">
                <span className="text-[#904d00]">Habakkuk 2:14</span>
                <span>Restoring the Holy Fear of God</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars / Priorities */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#904d00]">Guiding Priorities</span>
            <h3 className="font-headline text-2xl font-bold text-[#000922] mt-1">Our Core Priorities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHURCH_VISION_MISSION.priorities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#c5c6cf]/40 shadow-sm hover:border-[#904d00]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-headline text-2xl font-extrabold text-[#904d00]/30">{item.number}</span>
                    <div className="w-10 h-10 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#904d00]">
                      <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    </div>
                  </div>
                  <h4 className="font-headline text-lg font-bold text-[#000922] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#45464e] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prophetic Mandate & Resolution Ribbon */}
        <div className="rounded-2xl bg-gradient-to-r from-[#070d1a] via-[#0f2042] to-[#070d1a] p-5 sm:p-8 lg:p-10 border border-[#f59e0b]/30 shadow-xl text-[#faf9f6]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left: Mandate Targets */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-[#fbbf24] text-xs uppercase tracking-widest font-bold mb-2 sm:mb-3">
                <span className="material-symbols-outlined text-sm">crisis_alert</span>
                <span>The End-Time Harvest Mandate</span>
              </div>
              <h3 className="font-headline text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#faf9f6] mb-3 sm:mb-4">
                Preparing the Church for the Second Coming
              </h3>
              <p className="text-xs sm:text-sm text-[#d3e4fe] max-w-2xl leading-relaxed mb-5 sm:mb-6">
                <strong>Our Pattern:</strong> {CHURCH_VISION_MISSION.pattern}
              </p>

              {/* Mandate Items */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {CHURCH_VISION_MISSION.mandate.map((m, idx) => (
                  <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-[#fbbf24] mb-1">
                      <span className="material-symbols-outlined text-base">{m.icon}</span>
                      <span className="font-headline font-bold text-sm sm:text-base text-[#faf9f6]">{m.target}</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#d3e4fe]/80 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Resolution */}
            <div className="lg:col-span-4 p-5 sm:p-6 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex flex-col justify-center text-center lg:text-left">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#fbbf24] font-bold block mb-1 sm:mb-2">
                Our Solemn Resolution
              </span>
              <p className="font-headline text-base sm:text-lg lg:text-xl font-bold text-[#faf9f6] italic leading-snug">
                &ldquo;{CHURCH_VISION_MISSION.resolution}&rdquo;
              </p>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#d3e4fe]">
                <span>Apostolic Standard</span>
                <span className="text-[#fbbf24] font-bold">Proverbs 29:25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
