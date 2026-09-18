import { CHURCH_INFO, SERVICE_SCHEDULES } from "@/data/churchData";

export default function ServiceSchedule() {
  return (
    <section className="py-20 lg:py-28 bg-[#faf9f6]" id="schedule">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#904d00] text-xs uppercase tracking-widest font-bold mb-3">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>Gather With Us in His Presence</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#000922] tracking-tight">
              Weekly Services & Encounters
            </h2>
            <p className="text-base sm:text-lg text-[#45464e] max-w-2xl mt-2">
              Every gathering at The Ark of Light is charged with the manifest presence of God, deep apostolic revelation, spontaneous prophetic ministrations, and miraculous testimonies.
            </p>
          </div>

          {/* Location Tag */}
          <div className="bg-[#e5eeff] p-4 rounded-xl border border-[#c5c6cf]/30 flex items-center gap-3">
            <span className="material-symbols-outlined text-[#904d00] text-2xl">pin_drop</span>
            <div>
              <p className="text-xs uppercase font-bold text-[#904d00]">Campus Auditorium</p>
              <p className="font-headline text-sm font-bold text-[#000922]">Plot 11, Kudirat Abiola Way, Alausa</p>
            </div>
          </div>
        </div>

        {/* Bento Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Sunday */}
          <div className="bg-white rounded-2xl p-8 border border-[#c5c6cf]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#904d00] to-[#f59e0b]"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-[#e5eeff] text-[#000922] text-xs uppercase font-bold rounded">
                  {SERVICE_SCHEDULES[0].tag}
                </span>
                <span className="material-symbols-outlined text-[#904d00] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  wb_sunny
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-[#000922] mb-3">
                {SERVICE_SCHEDULES[0].title}
              </h3>
              <p className="text-sm text-[#45464e] mb-6">
                {SERVICE_SCHEDULES[0].description}
              </p>

              <div className="space-y-4 border-t border-[#c5c6cf]/30 pt-4">
                <div className="flex justify-between items-center py-2 border-b border-[#c5c6cf]/20">
                  <span className="font-bold text-sm text-[#000922]">1st Service</span>
                  <span className="text-sm font-bold text-[#904d00]">8:00 AM – 9:15 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#c5c6cf]/20">
                  <span className="font-bold text-sm text-[#000922]">2nd Service</span>
                  <span className="text-sm font-bold text-[#904d00]">9:15 AM – 11:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold text-sm text-[#000922]">3rd Service (1st Sundays)</span>
                  <span className="text-sm font-bold text-[#904d00]">11:00 AM – 12:00 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#c5c6cf]/30 flex items-center justify-between text-xs text-[#45464e]">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="material-symbols-outlined text-sm text-[#904d00]">child_friendly</span>
                Kingdom Kids Open
              </span>
              <span className="font-semibold text-[#904d00]">Arrival: 7:50 AM</span>
            </div>
          </div>

          {/* Card 2: Wednesday */}
          <div className="bg-white rounded-2xl p-8 border border-[#c5c6cf]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0f2042]"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-[#e5eeff] text-[#000922] text-xs uppercase font-bold rounded">
                  {SERVICE_SCHEDULES[1].tag}
                </span>
                <span className="material-symbols-outlined text-[#0f2042] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  menu_book
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-[#000922] mb-3">
                {SERVICE_SCHEDULES[1].title}
              </h3>
              <p className="text-sm text-[#45464e] mb-6">
                {SERVICE_SCHEDULES[1].description}
              </p>

              <div className="space-y-4 border-t border-[#c5c6cf]/30 pt-4">
                <div className="flex justify-between items-center py-2 border-b border-[#c5c6cf]/20">
                  <span className="font-bold text-sm text-[#000922]">Every Wednesday</span>
                  <span className="text-sm font-bold text-[#000922]">7:00 PM – 9:00 PM</span>
                </div>
                <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#c5c6cf]/30">
                  <p className="text-xs font-bold text-[#000922] mb-0.5 uppercase">Holy Communion Service</p>
                  <p className="text-xs text-[#45464e]">Break bread and receive the supernatural covenant life of Christ.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#c5c6cf]/30 flex items-center justify-between text-xs text-[#45464e]">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="material-symbols-outlined text-sm text-[#000922]">online_prediction</span>
                Simulcast on OneSound TV
              </span>
              <a href="#live-stream" className="text-[#904d00] font-bold hover:underline">
                Watch Online
              </a>
            </div>
          </div>

          {/* Card 3: Friday */}
          <div className="bg-[#0f2042] text-[#faf9f6] rounded-2xl p-8 border border-[#f59e0b]/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#f59e0b]/10 rounded-full blur-2xl"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-[#f59e0b]/20 text-[#fbbf24] text-xs uppercase font-bold rounded border border-[#f59e0b]/30">
                  {SERVICE_SCHEDULES[2].tag}
                </span>
                <span className="material-symbols-outlined text-[#f59e0b] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_fire_department
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-[#faf9f6] mb-3">
                {SERVICE_SCHEDULES[2].title}
              </h3>
              <p className="text-sm text-[#d3e4fe] mb-6">
                {SERVICE_SCHEDULES[2].description}
              </p>

              <div className="space-y-4 border-t border-white/10 pt-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-bold text-sm text-[#faf9f6]">Every Friday Evening</span>
                  <span className="text-sm font-bold text-[#fbbf24]">6:00 PM – 8:30 PM</span>
                </div>
                <p className="text-xs text-[#d3e4fe]/90 italic">
                  &ldquo;Where the fire of the Lord descends to consume infirmities, break curses, and impart mantles of speed.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <a
                className="inline-flex items-center justify-between w-full text-[#fbbf24] text-xs font-bold uppercase tracking-wider hover:underline"
                href="#visit-planner"
              >
                <span>Send Prayer Petition Ahead</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
