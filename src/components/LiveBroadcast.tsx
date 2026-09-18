import { MEDIA_LINKS, CHURCH_INFO } from "@/data/churchData";

export default function LiveBroadcast() {
  return (
    <section className="py-20 lg:py-28 bg-[#070d1a] text-[#faf9f6] relative overflow-hidden" id="live-stream">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 mb-4">
            <span className="material-symbols-outlined text-[#fbbf24] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              live_tv
            </span>
            <span className="font-headline text-xs text-[#fbbf24] uppercase tracking-widest font-bold">
              Satellite & Digital Sanctuary
            </span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#faf9f6] tracking-tight">
            Connect to the Anointing Online
          </h2>
          <p className="text-base text-[#d3e4fe] mt-2">
            Experience our live broadcasts, anointed worship sessions, and prophetic decrees from anywhere in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* YouTube Video Player */}
          <div className="lg:col-span-8 bg-[#0f2042] rounded-2xl overflow-hidden border border-[#f59e0b]/30 shadow-2xl">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={`${MEDIA_LINKS.liveStreamEmbed}?enablejsapi=1`}
                title="Gospel Pillars Live Service"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-5 sm:p-6 bg-[#070d1a]/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs text-red-400 font-bold uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Official Live Broadcast
                </span>
                <h4 className="font-headline text-lg font-bold text-[#faf9f6]">
                  {CHURCH_INFO.arkName} Service Broadcast
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={MEDIA_LINKS.liveStreamChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-headline text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">smart_display</span>
                  <span>Open in YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Media Resources Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-[#0f2042] p-6 rounded-2xl border border-white/10 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center text-[#fbbf24]">
                  <span className="material-symbols-outlined text-2xl">podcasts</span>
                </div>
                <div>
                  <h4 className="font-headline text-base font-bold text-[#faf9f6]">OneSound Revival TV</h4>
                  <p className="text-xs text-[#d3e4fe]">24/7 Global Satellite Television</p>
                </div>
              </div>
              <p className="text-xs text-[#d3e4fe] leading-relaxed mb-4">
                Apostolic doctrine, miracles, and continuous celestial worship reaching homes non-stop across continents.
              </p>
              <a
                href={MEDIA_LINKS.teachingsChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#fbbf24] uppercase tracking-wider flex items-center gap-1 hover:underline"
              >
                <span>Explore Teachings Channel</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </a>
            </div>

            <div className="bg-[#0f2042] p-6 rounded-2xl border border-white/10 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center text-[#fbbf24]">
                  <span className="material-symbols-outlined text-2xl">menu_book</span>
                </div>
                <div>
                  <h4 className="font-headline text-base font-bold text-[#faf9f6]">Audio Books & Sermons</h4>
                  <p className="text-xs text-[#d3e4fe]">Macwealth Audio Books</p>
                </div>
              </div>
              <p className="text-xs text-[#d3e4fe] leading-relaxed mb-4">
                Access free narrated books, prophetic declarations, and sermon podcasts for your daily spiritual nourishment.
              </p>
              <a
                href={MEDIA_LINKS.audioBooksChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#fbbf24] uppercase tracking-wider flex items-center gap-1 hover:underline"
              >
                <span>Listen to Free Audio Books</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
